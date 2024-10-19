---
layout: post
title: SQLite: understanding and fixing "database is locked"
created: 2024-10-19
---

SQLite has some surprising behavior regarding transactions that bites
almost everyone who attempts to use SQLite with multiple concurrent connections.

# the problem

If a connection is in an active write transaction, any other connection attempting to upgrade a read transaction to a write transaction will fail immediately with a surprising `database is locked` error. This happens regardless of what [`PRAGMA busy_timeout`](https://sqlite.org/pragma.html#pragma_busy_timeout) is set to!

# understanding why

1. In SQLite, all query interactions happen in transactions of some kind, whether in a read transaction (select) or a write transaction (insert|update|delete).

2. SQLite allows for many concurrent readers but only 1 writer. This invariant is enforced with locks.

3. If a transaction starts with a read operation and only later later attempts a write (e.g., a `select` followed by an `insert`), the default behavior of SQLite is to start a read transaction, and then lazily attempt to upgrade that read transaction to a write transaction only when the write statement occurs.

This may be surprising, especially the upgrade behavior, but it is all [well documented](https://www.sqlite.org/lang_transaction.html).

# how to fix it

The fix for this issue is twofold:

1. For each connection to your SQLite database, when you initialize the connection, set [`PRAGMA busy_timeout`](https://sqlite.org/pragma.html#pragma_busy_timeout) to a nonzero value. `busy_timeout` is the amount of time a connection will wait to acquire a write lock in milliseconds. Some SQLite clients like Python's set this value by default. Others do not, so I recommend you verify this in your client of choice.

2. For any sequence of SQL statements run together in a transaction that includes at least one write, start the transaction with `BEGIN IMMEDIATE` rather than `BEGIN`. This instructs SQLite to immediately attempt to acquire a write lock rather than starting with a read lock and upgrading it to a write lock. If the connection cannot immediately acquire the write lock because another connection has it, the connection attempting to acquire the write lock will busy wait for `busy_timeout` milliseconds before giving up and throwing the `database is locked` error.

Again, see SQLite's [transaction](https://www.sqlite.org/lang_transaction.html) documentation for more detail.

I am by no means claiming to have discovered or solved any of this on my own. Others have [discussed](https://kerkour.com/sqlite-for-servers) this topic previously.

# demonstration

I've provided a Python script at the end of this post that demonstrates both the error as it usually occurs as well as the fix.

To see the error, run:
`python lock.py`

And to see the fix, run:
`python lock.py correct`

The error looks like:

```sh
at [ 18:36:38 ] ➜ python lock.py
18:36:39: connection 1: thread started
18:36:39: connection 1: begin
18:36:39: connection 1: select
18:36:39: connection 1: inserted, sleeping
18:36:39: connection 2: thread started
18:36:39: connection 2: busy_timeout=0;
18:36:39: connection 2: attempting begin
18:36:39: connection 2: begin complete
18:36:39: connection 2: select
18:36:39: connection 2: trying to insert
Exception in thread Thread-2 (try_to_insert):
Traceback (most recent call last):
  File "/Users/clark/.asdf/installs/python/3.12.7/lib/python3.12/threading.py", line 1075, in _bootstrap_inner
    self.run()
  File "/Users/clark/.asdf/installs/python/3.12.7/lib/python3.12/threading.py", line 1012, in run
    self._target(*self._args, **self._kwargs)
  File "/Users/clark/code/lock.py", line 80, in try_to_insert
    cur.execute("insert into people (id, name, address) values (1, 2, 3)")
sqlite3.OperationalError: database is locked
18:36:44: connection 1: sleeping over, committing
```

And with the fix, it looks like:

```sh
at [ 18:36:44 ] ➜ python lock.py correct
18:36:56: connection 1: thread started
18:36:56: connection 1: begin
18:36:56: connection 1: select
18:36:56: connection 1: inserted, sleeping
18:36:56: connection 2: thread started
18:36:56: connection 2: busy_timeout=5000
18:36:56: connection 2: attempting begin immediate
18:37:01: connection 1: sleeping over, committing
18:37:01: connection 2: begin immediate complete
18:37:01: connection 2: select
18:37:01: connection 2: trying to insert
18:37:01: connection 2: insert
```


<script src="https://gist.github.com/ckampfe/200beb492c9940622496525e40aaa91d.js"></script>
