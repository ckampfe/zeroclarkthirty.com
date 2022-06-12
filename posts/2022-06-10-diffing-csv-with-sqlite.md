---
layout: post
title: Diffing CSV with SQLite
created: 2022-06-10
---

Say you want to diff two CSV files, like these:


```sh
$ cat 1.csv 
id,name,fav_color
1,bill,blue
2,sue,red
3,abe,green

$ cat 2.csv
id,name,fav_color
1,bill,blue
2,sue,red
4,ali,orange
```

How do you do it?
The most straightforward way would be to use `diff`, like this:

```sh
$ diff 1.csv 2.csv
4c4
< 3,abe,green
---
> 4,ali,orange
```

`diff` works great, especially in the simplest case.

You can also use SQLite, like this:

```sh
$ cat diff_csv.sql 
with left_diff as (
    select * from left except select * from right
), right_diff as (
    select * from right except select * from left
)
select *, 'left' as which from left_diff
union all
select *, 'right' as which from right_diff;

$ sqlite3 \
    -cmd ".mode csv" \
    -cmd ".headers on" \
    -cmd ".import 1.csv left" \
    -cmd ".import 2.csv right" < diff_csv.sql

id,name,fav_color,which
3,abe,green,left
4,ali,orange,right
```

This does a few things:
1. Puts SQLite into CSV mode so it can load CSVs
2. Turns on headers, so they show on output
3. Creates the table `left` and imports the file `1.csv` into it
4. Creates the table `right` and imports the file `2.csv` into it
5. Runs `diff_csv.sql`

This might seem a bit more complicated than just running `diff`, but it gives you the entire power of SQL.
You can decide which columns you want to diff on, or only diff certain subsets of each file, easily. You might add new rows inline.
You can transform the diff'd results into something else, or summarize them. Maybe you want to diff 3 or more CSV files. No problem.
There's a ton of power you get over doing it all in text, and using grep/sed/awk. You're only limited by your knowledge of SQL.
