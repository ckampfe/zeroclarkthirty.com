---
layout: post
title: A Clojure scratch REPL
created: 2019-10-21
---

I had the idea recently that my one-off hacking would be greatly aided if I could hit a key in Emacs and immediately have a buffer connected to a running Clojure REPL session.

This REPL session would come with a bunch of dependencies preloaded for things like local database access, JSON, HTTP, parsing, etc. All of those quick, scripty things.

So I added created an Emacs lisp function to do it:

```lisp
(defun clj-scratch ()
  "Create a scratch clojure buffer and jack in with default deps"
  (interactive)
  ;; if there is a file that is TODAYS_DATE.clj,
  ;; open it, otherwise create it and open it
  (let* ((todays-date (insert-current-date-underscores))
         (buf (find-file (concat "~/code/dotfiles/scratch/src/ckampfe/" todays-date ".clj"))))

    (switch-to-buffer buf)

    ;; if the buffer is empty, insert the default imports
    (if (<= (buffer-size buf) 25)
        (insert-file-contents "~/code/dotfiles/scratch/default.clj" nil nil nil))

    ;; if the buffer is not connected to a cider session, start one
    (with-current-buffer buf
      (clojure-mode)
      (if (not (cider-connected-p))
          (cider-jack-in-clj '(:project-dir "~/code/dotfiles/scratch"))))))
```

The function is set up to find or create a Clojure file with today's date if one doesn't exist.
In this way, I get a new notebook-style file every day, rather than overwriting any previous day's work.

The function also templates in the necessary `require` setup and database connection boilerplate that I always end up looking up.

You can see the current version of this setup here, in `.spacemacs` and `scratch`: https://github.com/ckampfe/dotfiles
