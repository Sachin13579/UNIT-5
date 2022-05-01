(() => {
  "use strict";
  function t(t) {
    return (
      "Minified Redux error #" +
      t +
      "; visit https://redux.js.org/Errors?code=" +
      t +
      " for the full message or use the non-minified dev environment for full errors. "
    );
  }
  var e = ("function" == typeof Symbol && Symbol.observable) || "@@observable",
    r = function () {
      return Math.random().toString(36).substring(7).split("").join(".");
    },
    o = {
      INIT: "@@redux/INIT" + r(),
      REPLACE: "@@redux/REPLACE" + r(),
      PROBE_UNKNOWN_ACTION: function () {
        return "@@redux/PROBE_UNKNOWN_ACTION" + r();
      },
    };
  function n(t) {
    if ("object" != typeof t || null === t) return !1;
    for (var e = t; null !== Object.getPrototypeOf(e); )
      e = Object.getPrototypeOf(e);
    return Object.getPrototypeOf(t) === e;
  }
  const i = (function r(i, u, f) {
    var c;
    if (
      ("function" == typeof u && "function" == typeof f) ||
      ("function" == typeof f && "function" == typeof arguments[3])
    )
      throw new Error(t(0));
    if (
      ("function" == typeof u && void 0 === f && ((f = u), (u = void 0)),
      void 0 !== f)
    ) {
      if ("function" != typeof f) throw new Error(t(1));
      return f(r)(i, u);
    }
    if ("function" != typeof i) throw new Error(t(2));
    var d = i,
      s = u,
      l = [],
      a = l,
      p = !1;
    function y() {
      a === l && (a = l.slice());
    }
    function E() {
      if (p) throw new Error(t(3));
      return s;
    }
    function w(e) {
      if ("function" != typeof e) throw new Error(t(4));
      if (p) throw new Error(t(5));
      var r = !0;
      return (
        y(),
        a.push(e),
        function () {
          if (r) {
            if (p) throw new Error(t(6));
            (r = !1), y();
            var o = a.indexOf(e);
            a.splice(o, 1), (l = null);
          }
        }
      );
    }
    function v(e) {
      if (!n(e)) throw new Error(t(7));
      if (void 0 === e.type) throw new Error(t(8));
      if (p) throw new Error(t(9));
      try {
        (p = !0), (s = d(s, e));
      } finally {
        p = !1;
      }
      for (var r = (l = a), o = 0; o < r.length; o++) (0, r[o])();
      return e;
    }
    function h(e) {
      if ("function" != typeof e) throw new Error(t(10));
      (d = e), v({ type: o.REPLACE });
    }
    function b() {
      var r,
        o = w;
      return (
        ((r = {
          subscribe: function (e) {
            if ("object" != typeof e || null === e) throw new Error(t(11));
            function r() {
              e.next && e.next(E());
            }
            return r(), { unsubscribe: o(r) };
          },
        })[e] = function () {
          return this;
        }),
        r
      );
    }
    return (
      v({ type: o.INIT }),
      ((c = { dispatch: v, subscribe: w, getState: E, replaceReducer: h })[e] =
        b),
      c
    );
  })(
    (t, e) => {
      if ("add-todo" === e.type) {
        let r = document.createElement("div");
        return (
          (r.innerText = e.payload),
          document.getElementById("root").append(r),
          { ...t, todos: [...t.todos, { title: e.payload, status: !1 }] }
        );
      }
      return t;
    },
    { todos: [] }
  );
  i.getState(),
    document.getElementById("submit").addEventListener("click", () => {
      event.preventDefault();
      const t = {
        type: "add-todo",
        payload: document.getElementById("user-todo").value,
      };
      i.dispatch(t), console.log(i.getState());
    });
})();
