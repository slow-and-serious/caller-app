(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    110: function (e, a, t) {},
    111: function (e, a, t) {
      "use strict";
      t.r(a);
      var n = t(0),
        r = t.n(n),
        o = t(9),
        l = t.n(o),
        i = t(19),
        c = t(10),
        s = t(32),
        m = (t(86), t(137)),
        u = t(139),
        p = t(141),
        d = (t(142), t(143), t(144), t(70)),
        g = Object(m.a)(function (e) {
          return {
            cardMedia: { paddingTop: "56.25%" },
            link: { margin: e.spacing(1, 1.5) },
            cardHeader: {
              backgroundColor:
                "light" === e.palette.type
                  ? e.palette.grey[200]
                  : e.palette.grey[700],
            },
            postTitle: { fontSize: "16px", textAlign: "left" },
            postText: {
              display: "flex",
              justifyContent: "left",
              alignItems: "baseline",
              fontSize: "12px",
              textAlign: "left",
              marginBottom: e.spacing(2),
            },
          };
        }),
        f = function (e) {
          var a = e.items;
          g();
          return a && 0 !== a.length
            ? r.a.createElement(
                r.a.Fragment,
                null,
                r.a.createElement(
                  u.a,
                  { maxWidth: "md", component: "main" },
                  r.a.createElement(
                    p.a,
                    { container: !0, spacing: 5, alignItems: "flex-end" },
                    a.map(function (e) {})
                  )
                )
              )
            : r.a.createElement("p", null, "Can not find any items, sorry");
        },
        h = t(67);
      var E = function (e) {
          return function (a) {
            var t = a.isLoading,
              n = Object(h.a)(a, ["isLoading"]);
            return t
              ? r.a.createElement(
                  "p",
                  { style: { fontSize: "25px" } },
                  "We are waiting for the data to load!..."
                )
              : r.a.createElement(e, n);
          };
        },
        b = t(47),
        v = t.n(b),
        x = t(65),
        y = t(66),
        k = "http://localhost:8000/api/v1/",
        w = t
          .n(y)
          .a.create({
            baseURL: k,
            timeout: 5e3,
            headers: {
              authorization: sessionStorage.getItem("access_token")
                ? "JWT " + sessionStorage.getItem("access_token")
                : null,
              "Content-Type": "application/json",
              accept: "application/json",
            },
          });
      w.interceptors.response.use(
        function (e) {
          return e;
        },
        (function () {
          var e = Object(x.a)(
            v.a.mark(function e(a) {
              var t, n, r, o;
              return v.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((t = a.config), "undefined" !== typeof a.response)) {
                        e.next = 4;
                        break;
                      }
                      return (
                        alert(
                          "A server/network error occurred. Looks like CORS might be the problem. Sorry about this - we will get it fixed shortly."
                        ),
                        e.abrupt("return", Promise.reject(a))
                      );
                    case 4:
                      if (
                        401 !== a.response.status ||
                        t.url !== k + "token/refresh/"
                      ) {
                        e.next = 7;
                        break;
                      }
                      return (
                        (window.location.href = "/login/"),
                        e.abrupt("return", Promise.reject(a))
                      );
                    case 7:
                      if (
                        "token_not_valid" !== a.response.data.code ||
                        401 !== a.response.status ||
                        "Unauthorized" !== a.response.statusText
                      ) {
                        e.next = 23;
                        break;
                      }
                      if (!(n = sessionStorage.getItem("refresh_token"))) {
                        e.next = 21;
                        break;
                      }
                      if (
                        ((r = JSON.parse(atob(n.split(".")[1]))),
                        (o = Math.ceil(Date.now() / 1e3)),
                        console.log(r.exp),
                        !(r.exp > o))
                      ) {
                        e.next = 17;
                        break;
                      }
                      return e.abrupt(
                        "return",
                        w
                          .post("/token/refresh", { refresh: n })
                          .then(function (e) {
                            return (
                              sessionStorage.setItem(
                                "access_token",
                                e.data.access
                              ),
                              sessionStorage.setItem(
                                "refresh_token",
                                e.data.refresh
                              ),
                              (w.defaults.headers.Authorization =
                                "JWT " + e.data.access),
                              (t.headers.Authorization =
                                "JWT " + e.data.access),
                              w(t)
                            );
                          })
                          .catch(function (e) {
                            console.log(e);
                          })
                      );
                    case 17:
                      console.log("Refresh token is expired", r.exp, o),
                        (window.location.href = "/login");
                    case 19:
                      e.next = 23;
                      break;
                    case 21:
                      console.log("Refresh token not available."),
                        (window.location.href = "/login");
                    case 23:
                      return e.abrupt("return", Promise.reject(a));
                    case 24:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (a) {
            return e.apply(this, arguments);
          };
        })()
      );
      var j = w;
      var S = function () {
          var e = E(f),
            a = Object(n.useState)({ loading: !0, items: null }),
            t = Object(s.a)(a, 2),
            o = t[0],
            l = t[1];
          return (
            Object(n.useEffect)(
              function () {
                j.get().then(function (e) {
                  var a = e.data;
                  l({ loading: !1, items: a }), console.log(e.data);
                });
              },
              [l]
            ),
            r.a.createElement(
              "div",
              { className: "App" },
              r.a.createElement("h1", null, "Items"),
              r.a.createElement(e, { isLoading: o.loading, items: o.items })
            )
          );
        },
        O = t(25),
        C = t(44),
        T = t(145),
        W = t(156),
        I = t(151),
        N = t(146),
        _ = t(153),
        A = t(147),
        z = t(148),
        L = Object(m.a)(function (e) {
          return {
            paper: {
              marginTop: e.spacing(8),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
            avatar: {
              margin: e.spacing(1),
              backgroundColor: e.palette.secondary.main,
            },
            form: { width: "100%", marginTop: e.spacing(3) },
            submit: { margin: e.spacing(3, 0, 2) },
          };
        });
      var P = Object(m.a)(function (e) {
        return {
          paper: {
            marginTop: e.spacing(8),
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          },
          avatar: {
            margin: e.spacing(1),
            backgroundColor: e.palette.secondary.main,
          },
          form: { width: "100%", marginTop: e.spacing(1) },
          submit: { margin: e.spacing(3, 0, 2) },
        };
      });
      var R = t(149),
        B = t(150),
        D = Object(m.a)(function (e) {
          return {
            appBar: { borderBottom: "1px solid ".concat(e.palette.divider) },
            link: { margin: e.spacing(1, 1.5) },
            toolbarTitle: { flexGrow: 1 },
          };
        });
      var F = function () {
          var e = D();
          return r.a.createElement(
            r.a.Fragment,
            null,
            r.a.createElement(T.a, null),
            r.a.createElement(
              R.a,
              {
                position: "static",
                color: "default",
                elevation: 0,
                className: e.appBar,
              },
              r.a.createElement(
                B.a,
                { className: e.toolbar },
                r.a.createElement(
                  d.a,
                  {
                    variant: "h6",
                    color: "inherit",
                    noWrap: !0,
                    className: e.toolbarTitle,
                  },
                  r.a.createElement(
                    z.a,
                    {
                      component: i.b,
                      to: "/",
                      underline: "none",
                      color: "textPrimary",
                    },
                    "Pat shop"
                  )
                ),
                r.a.createElement(
                  "nav",
                  null,
                  r.a.createElement(
                    z.a,
                    {
                      color: "textPrimary",
                      href: "#",
                      className: e.link,
                      component: i.b,
                      to: "/register",
                    },
                    "Register"
                  )
                ),
                r.a.createElement(
                  A.a,
                  {
                    href: "#",
                    color: "primary",
                    variant: "outlined",
                    className: e.link,
                    component: i.b,
                    to: "/login",
                  },
                  "Login"
                ),
                r.a.createElement(
                  A.a,
                  {
                    href: "#",
                    color: "primary",
                    variant: "outlined",
                    className: e.link,
                    component: i.b,
                    to: "/logout",
                  },
                  "Logout"
                )
              )
            )
          );
        },
        J = t(152),
        U = Object(m.a)(function (e) {
          return {
            "@global": { ul: { margin: 0, padding: 0, listStyle: "none" } },
            footer: Object(O.a)(
              {
                borderTop: "1px solid ".concat(e.palette.divider),
                marginTop: e.spacing(8),
                paddingTop: e.spacing(3),
                paddingBottom: e.spacing(3),
              },
              e.breakpoints.up("sm"),
              { paddingTop: e.spacing(6), paddingBottom: e.spacing(6) }
            ),
          };
        });
      function q() {
        return r.a.createElement(
          d.a,
          { variant: "body2", color: "textSecondary", align: "center" },
          "Copyright \xa9 ",
          r.a.createElement(
            z.a,
            { color: "inherit", href: "https://material-ui.com/" },
            "Your Website"
          ),
          " ",
          new Date().getFullYear(),
          "."
        );
      }
      var M = [
        {
          title: "Company",
          description: ["Team", "History", "Contact us", "Locations"],
        },
        {
          title: "Features",
          description: [
            "Cool stuff",
            "Random feature",
            "Team feature",
            "Developer stuff",
            "Another one",
          ],
        },
        {
          title: "Resources",
          description: [
            "Resource",
            "Resource name",
            "Another resource",
            "Final resource",
          ],
        },
        { title: "Legal", description: ["Privacy policy", "Terms of use"] },
      ];
      var H = function () {
        var e = U();
        return r.a.createElement(
          r.a.Fragment,
          null,
          r.a.createElement(
            u.a,
            { maxWidth: "md", component: "footer", className: e.footer },
            r.a.createElement(
              p.a,
              { container: !0, spacing: 4, justify: "space-evenly" },
              M.map(function (e) {
                return r.a.createElement(
                  p.a,
                  { item: !0, xs: 6, sm: 3, key: e.title },
                  r.a.createElement(
                    d.a,
                    { variant: "h6", color: "textPrimary", gutterBottom: !0 },
                    e.title
                  ),
                  r.a.createElement(
                    "ul",
                    null,
                    e.description.map(function (e) {
                      return r.a.createElement(
                        "li",
                        { key: e },
                        r.a.createElement(
                          z.a,
                          {
                            href: "#",
                            variant: "subtitle1",
                            color: "textSecondary",
                          },
                          e
                        )
                      );
                    })
                  )
                );
              })
            ),
            r.a.createElement(J.a, { mt: 5 }, r.a.createElement(q, null))
          )
        );
      };
      t(110),
        Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      var V = r.a.createElement(
        i.a,
        null,
        r.a.createElement(
          r.a.StrictMode,
          null,
          r.a.createElement(F, null),
          r.a.createElement(
            c.c,
            null,
            r.a.createElement(c.a, { exact: !0, path: "/", component: S }),
            r.a.createElement(c.a, {
              exact: !0,
              path: "/register",
              component: function () {
                var e = Object(c.f)(),
                  a = Object.freeze({ email: "", username: "", password: "" }),
                  t = Object(n.useState)(a),
                  o = Object(s.a)(t, 2),
                  l = o[0],
                  i = o[1],
                  m = function (e) {
                    i(
                      Object(C.a)(
                        {},
                        l,
                        Object(O.a)({}, e.target.name, e.target.value.trim())
                      )
                    );
                  },
                  g = L();
                return r.a.createElement(
                  u.a,
                  { component: "main", maxWidth: "xs" },
                  r.a.createElement(T.a, null),
                  r.a.createElement(
                    "div",
                    { className: g.paper },
                    r.a.createElement(W.a, { className: g.avatar }),
                    r.a.createElement(
                      d.a,
                      { component: "h1", variant: "h5" },
                      "Sign Up"
                    ),
                    r.a.createElement(
                      "form",
                      { className: g.form, noValidate: !0 },
                      r.a.createElement(
                        p.a,
                        { container: !0, spacing: 2 },
                        r.a.createElement(
                          p.a,
                          { item: !0, xs: 12 },
                          r.a.createElement(I.a, {
                            variant: "outlined",
                            required: !0,
                            fullWidth: !0,
                            id: "email",
                            label: "Email Address",
                            name: "email",
                            autoComplete: "email",
                            onChange: m,
                          })
                        ),
                        r.a.createElement(
                          p.a,
                          { item: !0, xs: 12 },
                          r.a.createElement(I.a, {
                            variant: "outlined",
                            required: !0,
                            fullWidth: !0,
                            id: "username",
                            label: "Username",
                            name: "username",
                            autoComplete: "username",
                            onChange: m,
                          })
                        ),
                        r.a.createElement(
                          p.a,
                          { item: !0, xs: 12 },
                          r.a.createElement(I.a, {
                            variant: "outlined",
                            required: !0,
                            fullWidth: !0,
                            id: "password",
                            label: "Password",
                            name: "password",
                            autoComplete: "current- password",
                            onChange: m,
                          })
                        ),
                        r.a.createElement(
                          p.a,
                          { item: !0, xs: 12 },
                          r.a.createElement(N.a, {
                            control: r.a.createElement(_.a, {
                              value: "allowExtraEmails",
                              color: "primary",
                            }),
                            label: "I want to receive emails",
                          })
                        )
                      ),
                      r.a.createElement(
                        A.a,
                        {
                          type: "submit",
                          fullWidth: !0,
                          variant: "contained",
                          color: "primary",
                          className: g.submit,
                          onClick: function (a) {
                            a.preventDefault(),
                              console.log(l),
                              j
                                .post("/register", {
                                  email: l.email,
                                  username: l.username,
                                  password: l.password,
                                })
                                .then(function (a) {
                                  e.push("/login"),
                                    console.log(a),
                                    console.log(a.data);
                                });
                          },
                        },
                        "Sign Up"
                      ),
                      r.a.createElement(
                        p.a,
                        { container: !0, justify: "flex-end" },
                        r.a.createElement(
                          p.a,
                          { item: !0 },
                          r.a.createElement(
                            z.a,
                            { href: "#", variant: "body2" },
                            "Already have an account? Sign in"
                          )
                        )
                      )
                    )
                  )
                );
              },
            }),
            r.a.createElement(c.a, {
              exact: !0,
              path: "/login",
              component: function () {
                var e = Object(c.f)(),
                  a = Object.freeze({ email: "", password: "" }),
                  t = Object(n.useState)(a),
                  o = Object(s.a)(t, 2),
                  l = o[0],
                  i = o[1],
                  m = function (e) {
                    i(
                      Object(C.a)(
                        {},
                        l,
                        Object(O.a)({}, e.target.name, e.target.value.trim())
                      )
                    );
                  },
                  g = P();
                return r.a.createElement(
                  u.a,
                  { component: "main", maxWidth: "xs" },
                  r.a.createElement(T.a, null),
                  r.a.createElement(
                    "div",
                    { className: g.paper },
                    r.a.createElement(W.a, { className: g.avatar }),
                    r.a.createElement(
                      d.a,
                      { component: "h1", variant: "h5" },
                      "Sign in"
                    ),
                    r.a.createElement(
                      "form",
                      { className: g.form, noValidate: !0 },
                      r.a.createElement(I.a, {
                        variant: "outlined",
                        margin: "normal",
                        required: !0,
                        fullWidth: !0,
                        id: "email",
                        label: "Email Address",
                        name: "email",
                        autoComplete: "email",
                        autoFocus: !0,
                        onChange: m,
                      }),
                      r.a.createElement(I.a, {
                        variant: "outlined",
                        margin: "normal",
                        required: !0,
                        fullWidth: !0,
                        name: "password",
                        label: "Password",
                        type: "password",
                        id: "password",
                        autoComplete: "current-password",
                        onChange: m,
                      }),
                      r.a.createElement(N.a, {
                        control: r.a.createElement(_.a, {
                          value: "remember",
                          color: "primary",
                        }),
                        label: "Remember me",
                      }),
                      r.a.createElement(
                        A.a,
                        {
                          type: "submit",
                          fullWidth: !0,
                          variant: "contained",
                          color: "primary",
                          className: g.submit,
                          onClick: function (a) {
                            a.preventDefault(),
                              console.log(l),
                              j
                                .post("token", {
                                  email: l.email,
                                  password: l.password,
                                })
                                .then(function (a) {
                                  sessionStorage.setItem(
                                    "access_token",
                                    a.data.access
                                  ),
                                    sessionStorage.setItem(
                                      "refresh_token",
                                      a.data.refresh
                                    ),
                                    (j.defaults.headers.Authorization =
                                      "JWT " +
                                      sessionStorage.getItem("access_token")),
                                    e.push("/");
                                });
                          },
                        },
                        "Sign In"
                      ),
                      r.a.createElement(
                        p.a,
                        { container: !0 },
                        r.a.createElement(
                          p.a,
                          { item: !0, xs: !0 },
                          r.a.createElement(
                            z.a,
                            { href: "#", variant: "body2" },
                            "Forgot password?"
                          )
                        ),
                        r.a.createElement(
                          p.a,
                          { item: !0 },
                          r.a.createElement(
                            z.a,
                            { href: "#", variant: "body2" },
                            "Don't have an account? Sign Up"
                          )
                        )
                      )
                    )
                  )
                );
              },
            }),
            r.a.createElement(c.a, {
              exact: !0,
              path: "/logout",
              component: function () {
                var e = Object(c.f)();
                return (
                  Object(n.useEffect)(function () {
                    j.post("logout/blacklist", {
                      refresh_token: sessionStorage.getItem("refresh_token"),
                    });
                    sessionStorage.removeItem("access_token"),
                      sessionStorage.removeItem("refresh_token"),
                      (j.defaults.headers.Authorization = null),
                      e.push("/login");
                  }),
                  r.a.createElement("div", null, "Logout")
                );
              },
            })
          ),
          r.a.createElement(H, null)
        )
      );
      l.a.render(V, document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    81: function (e, a, t) {
      e.exports = t(111);
    },
    86: function (e, a, t) {},
  },
  [[81, 1, 2]],
]);
//# sourceMappingURL=main.d1258f4a.chunk.js.map
