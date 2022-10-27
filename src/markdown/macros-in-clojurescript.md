---
slug: "/blog/macros-in-clojurescript"
type: 'blog'
date: "2022-03-31"
title: "Writing macros that consume ClojureScript code"
description: "We'll discuss two ways to make acros that we can both use in ClojureScript and that also use ClojureScript code. First, we'll take a look at the quickest way to write a macro in ClojureScript (that also uses ClojureScript code). Afterwards we will take a look at a similar solution that uses two files."
---

We'll discuss two ways to make acros that we can both use in ClojureScript and that also use ClojureScript code. First, we'll take a look at the quickest way to write a macro in ClojureScript (that also uses ClojureScript code). Afterwards we will take a look at a similar solution that uses two files.

# Single `.cljc` file
The quickest way to create macros is to rename our `.cljs` file to a `.cljc` file. We then can use the `defmacro` function to create our macro. Because we're not in a `.cljs` file anymore, we can't import ClojureScript code though. This means two things for us:
1. We need to import the required ClojureScript namespace (`example.bar`) wherever we want to use our macro, as well as also importing the macro ns (`example.foo`)!
2. The namespace of the ClojureScript function which we call in our macro (`bar`), needs to be spelled out completely (`example.bar/bar`) in our macro.

```clojure
  (ns example.foo)

  (defmacro code []
    ;; bar is the cljs function we want to call
    ;; notice how we spelled out the ns completely!
    (example.bar/bar))
```
# `.cljs` + `.clj`
If we want separate namespaces we can first define our ClojureScript code in a `.cljs` file and later define our macro in a `.clj` file. The `.cljs` file can import the macro and the macro can reference the ClojureScript ns. Same as before applies for spelling out the namespace completely in the macro, as well as importing the necessary namespace (`example.bar`) before being able to use the macro.
``` clojure
  ;; foo.clj
  (ns example.foo)

  (defmacro code []
    ;; we want to call bar function in our macro
    ;; .cljs ns is spelled out completely in this .clj file
    (example.bar/bar))

  ;; bar.cljs
  (ns example.bar
    (:require-macros [example.foo :as foo]))

  (defn bar []
    ...) ;; this function will be called in our macro

  (defn run-macro-that-calls-bar []
    (foo/code))
```
# Further reading
- [ClojureScript Macros - thheller](https://code.thheller.com/blog/shadow-cljs/2019/10/12/clojurescript-macros.html)
- [ClojureScript Macros Calling Functions - FikesFarm Blog](https://blog.fikesfarm.com/posts/2016-01-05-clojurescript-macros-calling-functions.html)
- [Two-File ClojureScript Namespace Pattern - FikesFarm Blog](https://blog.fikesfarm.com/posts/2018-08-12-two-file-clojurescript-namespace-pattern.html)
- [Differences from Clojure - Clojure](https://clojurescript.org/about/differences#_macros)
- [Namespaces - Clojure](https://clojurescript.org/guides/ns-forms)
