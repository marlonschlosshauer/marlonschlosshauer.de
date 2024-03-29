---
slug: "/blog/handling-errors-clojure-api"
type: 'blog'
date: "2022-12-09"
title: "Handling errors in your Clojure REST API"
description: "With my first Clojure REST API I wanted to handle errors a little bit differently. Usually I'd throw exceptions to deal with errors, but having a REPL and great nil-punning made me want to try something more straight forward."
---

With my first Clojure REST API I wanted to handle errors a little bit differently. Usually I'd throw exceptions to deal with errors, but having a REPL and great nil-punning made me want to try something more straight forward.

# Data and Errors
To encapsulate both the success and the error case I return a `[data error]` tuple. `data` holds the data on a success case, `error` is `nil` if no error occurd. `[nil nil]` is valid, but `[{} {}]` is not.

This has multiple benefits:
- Can be consumed easily because it's a **plain old datastructure**
- Quick and easy to understand
- Explicit error field allows `[nil nil]` to still communicate success
- **Destructuring** makes handling the tuple really ease

```clojure
(let [[data error] (db/get-user-by-mail db email)]
  (if error
    error
    (:userId data)))
```

That first benefit is important. This could've easily been a Record type but I wanted to keep it simple (and compatible). For that matter you could go beyond a simple Record and make a full Maybe type out of it, with all the Monadic gadgets that come with that.

The `data` field can be what ever is necessary. Inside of `error` I tend to add `:message` and `:status` to better communicate to the user why the action failed.

I use this tuple for each layer (persistence, business logic, middlewares) in my API to keep the boundaries consistent, easy to understand and quick to use.

*Quick disclaimer: I found out about this type of tuple from a blog post, sadly I can't seem to find it again. I'll link it once I find it again.*

# Usage

Here is an example of how my persistence layer works. I check the `result` of my db call and return the appropriate tuple.
```clojure
(defn add-user [config data]
  {:pre [(is-persistence? config)]}
  (let [id (ObjectId.)
        result (mc/insert
                (mg/get-db (:conn config) (:db config))
                "users"
                (assoc data :_id id))]
    (if (res/acknowledged? result)
      [{:id (str id)} nil]
      [nil {:message "Could not add user" :status 500}])))
```

It isn't just easy to access the result of an operation, but transforming that result into another is easy, too!
```clojure
(defn details [db id]
  (let [[result error] (persistence/get-user-by-id db id)]
    (if result
      [(dissoc (dissoc result :password) :email) nil]
      [nil error])))
```

Because the tuple is ubiquitous in use, it is often not necessary to check the result of a call. If it's a success, great, return it! If it is an error, great, return it! No exceptions to be caught here.
```clojure
(defn on-get [config user endpoint]
  {:pre [(is-persistence? config)]}
  (persistence/get-data config user endpoint))
```

# Edge-Transformation

I can happly use my `[data error]` tuple inside of my application, but consumers of my API would probably be confused by this structure, so I transform my tuple at the end of my API into a valid HTTP response.
I use [Compojure](https://github.com/weavejester/compojure) which internally uses a `Renderable` protocol to build it's HTTP response out of the supplied data. Extending that `Renderable` protocol to work with my tuple was trivial:

```clojure
(extend-protocol Renderable
  clojure.lang.PersistentVector
  (render
    [[data {m :message s :status}] _]
    (if (and (not m) (not s))
      (response data)
      (status {:body {:message m}} s))))
```

I destructure the result of the request into my tuple, then further destructure the `error` into a `:message` of `m` and a `:status` of `s`. Lastly, I do a quick `if` and either return the `data` successfully or `error` out with what ever was supplied in `error`.

# Final thoughts

I'm happy with how it turned out. Sure, you could abstract away the constant need for `(if error error ...)` calls by giving the tuple it's own monadic type, but I'm conflicted if the added complexity of a specific type outweighs the benefit of a somewhat better ease-of-use. Ultimately I'm looking forward to pushing this to it's limit, if only to see where it breaks.
