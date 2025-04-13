(function (e, r) {
  typeof exports == "object" && typeof module < "u"
    ? (module.exports = r(require("vue")))
    : typeof define == "function" && define.amd
    ? define(["vue"], r)
    : ((e = typeof globalThis < "u" ? globalThis : e || self),
      (e.Greeter = r(e.Vue)));
})(this, function (e) {
  "use strict";
  const r = "",
    l = (n, o) => {
      const t = n.__vccOpts || n;
      for (const [s, i] of o) t[s] = i;
      return t;
    },
    u = {
      name: "Greeter",
      props: {
        message: { type: String, default: "Hello World!" },
        buttonLabel: { type: String, default: "Click Me" },
      },
      methods: {
        handleClick() {
          console.log(this.message), alert(this.message);
        },
      },
    };
  function a(n, o, t, s, i, c) {
    return (
      e.openBlock(),
      e.createElementBlock(
        "button",
        {
          onClick:
            o[0] || (o[0] = (...f) => c.handleClick && c.handleClick(...f)),
          class: "greeter-button",
        },
        e.toDisplayString(t.buttonLabel),
        1
      )
    );
  }
  const p = l(u, [
      ["render", a],
      ["__scopeId", "data-v-d05a08d1"],
    ]),
    d = {
      init(n, o = {}) {
        const t = document.querySelector(n);
        if (!t) {
          console.error("Selector not found:", n);
          return;
        }
        e.createApp(p, o).mount(t);
      },
    };
  return typeof window < "u" && (window.Greeter = d), d;
});
