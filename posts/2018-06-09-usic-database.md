---
layout: post
title: Useful Stuff in Clojure - Databases and State
created: 2018-06-12
---

In the first piece in this series, we looked at how to turn your Clojure project into
an artifact that you can deploy.

Keeping things useful, we're going to take a look at the basis for many applications: databases.

In this arena, Clojure is lucky. Being a hosted language on the JVM, Clojure inherits
a ton of useful, mature database functionality that you and I get to use to do real stuff.

Let's create another project:

```sh
$ boot -d boot/new new -t app -n database
```

This again creates a Clojure project with the [Boot](https://github.com/boot-clj/boot) build tool, using the standard `app` template.

Open up the `build.boot` file in your project's directory, and add the dependencies for
`java.jdbc`, `hikari-cp`, `sqlite-jdbc`, and `mount` so the top part of your file looks like this:

```clojure
(boot.core/set-env! :resource-paths #{"resources" "src"}
                    :source-paths   #{"test"}
                    :dependencies   '[[org.clojure/clojure "1.9.0"]
                                      [org.clojure/java.jdbc "0.7.6"]
                                      [hikari-cp "2.4.0"]
                                      [org.xerial/sqlite-jdbc "3.23.1"]
                                      [mount "0.1.12"]
                                      [adzerk/boot-test "RELEASE" :scope "test"]])
```

We're using Sqlite here, but everything we're doing works with Postres, Mysql, etc.
`java.jdbc` is Clojure's interface to the Java database connection machinery.
`hikari` is for database connection pooling and configuration.
`mount` is for state management, which I'll get to after the next section.

Pop open `core.clj`, and add the necessary requires to your namespace:

```clojure
(ns database.core
  (:require [clojure.java.jdbc :as jdbc]
            [hikari-cp.core :as h]
            [mount.core :refer [defstate]])
  (:gen-class))
```

# Managing State

Ok so what's this `mount` thing?

[Mount](https://github.com/tolitius/mount) is a library managing state. That's pretty ambiguous, so what does it really mean?
Most applications out there aren't just doing math. They interact with the outside world,
either through disk IO, network, the screen, or other peripherals.

Often times, the way we interact with these services is stateful.
That is, they maintain a persistent handle to the target service that is long-lived and changes
over time.

In our case (and in many database-backed applications) the application will set up a connection to the database
that is active for the life of the application. The database may change over time with various inserts, updates,
and table modifications, but the identity of the database - the connection - stays the same, or rarely changes.
Other scenarios could be a connection to something like Redis, RabbitMQ, Kafka, etc. You want to be able to refer
to these long-lived entities, and to be able to independently stop and start your application's connections to them.

To contrast this with something that is not stateful, your application may have some domain logic that is "pure":
it takes in a value, performs some calculations (for example, it may do some math), and then returns another value.
There is no persistent handle, and the function will return the same value for the same arguments, every time.

Mount is how our application is going to handle starting and stopping its connection to our Sqlite database.
Do it like this:

```clojure
(def datasource-options {:jdbc-url "jdbc:sqlite:db/database.db"
                         :maximum-pool-size 1})

(defstate datasource
  :start (h/make-datasource datasource-options)
  :stop (h/close-datasource datasource))
```

Notice first that we defined some configuration in `datasource-options` that tells our application how to reach the database.
In our case, this is Sqlite, so it's simple and just points to a file.
This is pure data that could come from anywhere, like a config file.
It is inlined here for convenience and clarity.

Next is the interesting part. Mount gives us a lot of state management functionality. Among that functionality
is the ability to stop and start our stateful components as we wish.
To do that, we have to provide Mount with instructions for what it should do to start and stop those specific components.

Here, we define out database connection as `datasource` using `defstate`. We tell mount how to start using `:start` and `:stop`
key-value pairs, providing the "action" as the value to its respective key.
When you tell Mount to start, it will run the `:start` action, and `:stop` when you tell it to stop.

You can use this pattern to manage connections to queues, start webservers, initialize job schedulers, etc.
If you want to see how else you can use Mount, I recommend you [check out the documentation](https://github.com/tolitius/mount).
For now, let's continue on to using our database.

# clojure.java.jdbc

Let's have a our database do some stuff. If you know SQL, or even if you don't this should be relatively straightforward.
This is not a SQL tutorial, so this part does not focus on advanced SQL.

Let's assume that our program receives events every so often, stores those events in the database,
and compute some simple aggregates of the events and store those too.

Now is where we break out the `jdbc` interface we pulled in at the beginning:

```clojure
(defn run-statement! [s]
  (jdbc/with-db-connection [conn {:datasource datasource}]
    (let [result (jdbc/execute! conn s)]
      result)))
```

and

```clojure
(run-statement! [(str "CREATE TABLE IF NOT EXISTS events ("
                      "id INTEGER PRIMARY KEY,"
                      "number INTEGER,"
                      "timestamp TEXT DEFAULT CURRENT_TIMESTAMP"
                      ")")])
```

With these two bits of code, we're defining first a function to take some DDL and run it, and secondly
calling that function with our `CREATE TABLE` SQL.

First, a short digression for a note about an important Clojure pattern: the function uses a common idiom,
emdodied as `with-db-connection`, using it to check out a database connection, `conn` (described in `{:datasource datasource}`),
using that `conn` in the body of the expression (for us, `jdbc/execute!`), returning a result, and then deallocating the `conn` that we acquired.

When programming Clojure, it will be someone common to see various forms of `with-*` provided by the core language or various libraries.
The general pattern they take looks like this: 

```clojure
(with-something [resource-name resource-initialization-expression]
  (do-stuff-with-resource resource-name))
```

where the `resource-initialization-expression` will give us some resource that we bind to `resource-name`, which we then use in
the body of the expression somehow.

Back to the task at hand.

We've created a table. Let's add some functions to insert data and query it.

These aren't much different, they follow the same pattern, but use different functions from `clojure.java.jdbc`:

```clojure
(defn run-query! [q]
  (jdbc/with-db-connection [conn {:datasource datasource}]
    (let [rows (jdbc/query conn q)]
      rows)))

(defn insert! [table-name rows]
  (jdbc/with-db-connection [conn {:datasource datasource}]
    (let [result (jdbc/insert-multi! conn table-name rows)]
      result)))
      
(defn track-average! []
  (jdbc/with-db-transaction [conn {:datasource datasource}]
    (let [average (->> (jdbc/query conn ["SELECT AVG(events.number) as average FROM events"])
                       first
                       :average)]
      (->> (jdbc/insert! conn :events_averages {:average average})
           (map #(get % (keyword "last_insert_rowid()")))
           first))))

(insert! :events [{:number 4820402}])
;; returns: ({:last_insert_rowid() 4})
      
(run-query! ["SELECT * FROM events"])
;; returns: ({:id 1, :number 4820402})

(track-average!)
;; returns: an integer representing the ID of the row it just inserted

```

The last function is probably the least unlike the others.
It explicitly creates a [database transaction](https://en.wikipedia.org/wiki/Database_transaction),
and runs two queries within that transaction.
The first is a read query which finds the average of the `number` field on the `events` table.
It then inserts that average value into a different, new table, the `events_averages` table.


The `events_averages` table doesn't exist, so let's create it.

```clojure
(run-statement! [(str "CREATE TABLE IF NOT EXISTS events_averages ("
                      "id INTEGER PRIMARY KEY,"
                      "average REAL,"
                      "timestamp TEXT DEFAULT CURRENT_TIMESTAMP"
                      ")")])
```

No different than the other table, really. We could even reuse our our existing `run-statement!`.

That's about it for this one. With the above, you can set up stateful components and use
JDBC-compatible databases with `clojure.java.jdbc`. There isn't a whole lot more to it, honestly.

# Super party bonus time!

Following are two functions that generate fake events and feeds them to the
rest of the application. This isn't strictly related to using
`clojure.java.jdbc` or `mount`, but it's a good example of a quasi-real
use case for concurrency in Clojure. I've inlined comments with explanations
for what each expression does.

```clojure
;; given a function,
;; start a new thread running that function that
;; will not prevent the JVM from shutting down
(defn start-daemon-thread [f]
  (doto (Thread. ^Runnable f)
    (.setDaemon true)
    (.start)))

;; our main function
(defn -main
  "I don't do a whole lot ... yet."
  [& args]

  ;; start our stateful components,
  ;; which at this point is just the db connection
  (mount.core/start)

  ;; create a queue with a fixed size of 15.
  ;; threads will publish "log lines" to this queue,
  ;; and another thread will print those "log lines"
  (let [logging-queue (java.util.concurrent.ArrayBlockingQueue. 15)]

    ;; create the `events_averages` table, just like we did above
    (run-statement! [(str "CREATE TABLE IF NOT EXISTS events_averages ("
                          "id INTEGER PRIMARY KEY,"
                          "average REAL,"
                          "timestamp TEXT DEFAULT CURRENT_TIMESTAMP"
                          ")")])

    ;; create the `events` table, just like we did above
    (run-statement! [(str "CREATE TABLE IF NOT EXISTS events ("
                          "id INTEGER PRIMARY KEY,"
                          "number INTEGER,"
                          "timestamp TEXT DEFAULT CURRENT_TIMESTAMP"
                          ")")])

    ;; start a new thread
    ;; that will consume events from `logging-queue`,
    ;; and print those events preceded by a timestamp
    (start-daemon-thread
     (fn []
       (while true
         (println (str "[" (java.time.Instant/now) "]")
                  (.take logging-queue)))))

    ;; start a new thread,
    ;; that every 5 seconds will run the `track-average!` query,
    ;; printing the data it previously inserted
    (start-daemon-thread
     (fn []
       (while true
         (let [id (track-average!)]
           (doseq [row (query! ["SELECT * FROM events_averages WHERE id = ?" id])]
             (.put logging-queue (str "AVERAGE EVENT NUMBER: " (:average row)))))
         (Thread/sleep 5000))))

    ;; start a new thread that will sleep a random amount of time
    ;; (between 1 and 5 seconds), inserting a random number to the `events` table,
    ;; sending that random number off to be logged
    (start-daemon-thread
     (fn []
       (while true
         (let [random-number (rand-int 60000)]
           (insert! :events [{:number random-number}])
           (.put logging-queue (str "received and inserted: " random-number)))
         (Thread/sleep (+ (rand-int 4000) 1000)))))

    ;; start a new thread that every 5 seconds will
    ;; count the number of rows in the `events` table,
    ;; and send that number off to be logged
    (start-daemon-thread
     (fn []
       (while true
         (doseq [row (query! ["SELECT COUNT(*) as count FROM events"])]
           (.put logging-queue (str "EVENTS COUNT: " (:count row))))
         (Thread/sleep 5000)))))

  ;; block the main thread for 30 seconds so we don't exit after starting the other threads
  (Thread/sleep 30000))
```


Running it looks like this:

```sh
clark$> java -jar target/database-0.1.0-SNAPSHOT-standalone.jar 
[2018-06-12T22:14:43.046Z] received and inserted: 39884
[2018-06-12T22:14:43.074Z] EVENTS COUNT: 12
[2018-06-12T22:14:43.075Z] AVERAGE EVENT NUMBER: 29521.5
[2018-06-12T22:14:43.079Z] received and inserted: 50832
[2018-06-12T22:14:47.592Z] EVENTS COUNT: 13
[2018-06-12T22:14:48.081Z] AVERAGE EVENT NUMBER: 31160.76923076923
[2018-06-12T22:14:48.084Z] received and inserted: 57947
[2018-06-12T22:14:52.522Z] EVENTS COUNT: 14
[2018-06-12T22:14:53.082Z] AVERAGE EVENT NUMBER: 33074.07142857143
[2018-06-12T22:14:53.092Z] received and inserted: 32677
[2018-06-12T22:14:56.197Z] EVENTS COUNT: 15
[2018-06-12T22:14:58.085Z] AVERAGE EVENT NUMBER: 33047.6
[2018-06-12T22:14:58.100Z] received and inserted: 41916
[2018-06-12T22:15:01.074Z] EVENTS COUNT: 16
[2018-06-12T22:15:03.088Z] AVERAGE EVENT NUMBER: 33601.875
[2018-06-12T22:15:03.107Z] received and inserted: 40567
[2018-06-12T22:15:04.161Z] received and inserted: 33285
[2018-06-12T22:15:05.472Z] received and inserted: 33913
[2018-06-12T22:15:06.915Z] EVENTS COUNT: 19
[2018-06-12T22:15:08.091Z] AVERAGE EVENT NUMBER: 33968.15789473684
[2018-06-12T22:15:08.115Z] received and inserted: 58119
```
