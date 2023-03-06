(() => {
  "use strict";
  let e = (e, t = 500, o = 0) => {
      e.classList.contains("_slide") ||
        (e.classList.add("_slide"),
        (e.style.transitionProperty = "height, margin, padding"),
        (e.style.transitionDuration = t + "ms"),
        (e.style.height = `${e.offsetHeight}px`),
        e.offsetHeight,
        (e.style.overflow = "hidden"),
        (e.style.height = o ? `${o}px` : "0px"),
        (e.style.paddingTop = 0),
        (e.style.paddingBottom = 0),
        (e.style.marginTop = 0),
        (e.style.marginBottom = 0),
        window.setTimeout(() => {
          (e.hidden = !o),
            !o && e.style.removeProperty("height"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            !o && e.style.removeProperty("overflow"),
            e.style.removeProperty("transition-duration"),
            e.style.removeProperty("transition-property"),
            e.classList.remove("_slide");
        }, t));
    },
    t = (e, t = 500, o = 0) => {
      if (!e.classList.contains("_slide")) {
        e.classList.add("_slide"),
          (e.hidden = !e.hidden && null),
          o && e.style.removeProperty("height");
        let i = e.offsetHeight;
        (e.style.overflow = "hidden"),
          (e.style.height = o ? `${o}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          e.offsetHeight,
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = i + "px"),
          e.style.removeProperty("padding-top"),
          e.style.removeProperty("padding-bottom"),
          e.style.removeProperty("margin-top"),
          e.style.removeProperty("margin-bottom"),
          window.setTimeout(() => {
            e.style.removeProperty("height"),
              e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t);
      }
    },
    o = (o, i = 500) => (o.hidden ? t(o, i) : e(o, i)),
    i = !0,
    n = (e = 500) => {
      document.documentElement.classList.contains("lock") ? l(e) : r(e);
    },
    l = (e = 500) => {
      let t = document.querySelector("body");
      if (i) {
        let o = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < o.length; e++) {
            o[e].style.paddingRight = "0px";
          }
          (t.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, e);
      }
    },
    r = (e = 500) => {
      let t = document.querySelector("body");
      if (i) {
        let o = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < o.length; e++) {
          o[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (t.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (i = !1),
          setTimeout(function () {
            i = !0;
          }, e);
      }
    };
  function s(e, t) {
    const o = Array.from(e).filter(function (e, o, i) {
      if (e.dataset[t]) return e.dataset[t].split(",")[0];
    });
    if (o.length) {
      const e = [];
      o.forEach((o) => {
        const i = {},
          n = o.dataset[t].split(",");
        (i.value = n[0]),
          (i.type = n[1] ? n[1].trim() : "max"),
          (i.item = o),
          e.push(i);
      });
      let i = e.map(function (e) {
        return (
          "(" + e.type + "-width: " + e.value + "px)," + e.value + "," + e.type
        );
      });
      i = (function (e) {
        return e.filter(function (e, t, o) {
          return o.indexOf(e) === t;
        });
      })(i);
      const n = [];
      if (i.length)
        return (
          i.forEach((t) => {
            const o = t.split(","),
              i = o[1],
              l = o[2],
              r = window.matchMedia(o[0]),
              s = e.filter(function (e) {
                if (e.value === i && e.type === l) return !0;
              });
            n.push({ itemsArray: s, matchMedia: r });
          }),
          n
        );
    }
  }
  let a = !1;
  setTimeout(() => {
    if (a) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let e = document.querySelector(".icon-menu"),
        t = document.querySelector(".header__items");
      e &&
        e.addEventListener("click", function (e) {
          i &&
            (n(),
            document.documentElement.classList.toggle("menu-open"),
            t.classList.toggle("unvisible"));
        });
    })(),
    (function () {
      const t = document.querySelectorAll("[data-spollers]");
      if (t.length > 0) {
        const i = Array.from(t).filter(function (e, t, o) {
          return !e.dataset.spollers.split(",")[0];
        });
        i.length && l(i);
        let n = s(t, "spollers");
        function l(e, t = !1) {
          e.forEach((e) => {
            (e = t ? e.item : e),
              t.matches || !t
                ? (e.classList.add("_spoller-init"),
                  r(e),
                  e.addEventListener("click", a))
                : (e.classList.remove("_spoller-init"),
                  r(e, !1),
                  e.removeEventListener("click", a));
          });
        }
        function r(e, t = !0) {
          const o = e.querySelectorAll("[data-spoller]");
          o.length > 0 &&
            o.forEach((e) => {
              t
                ? (e.removeAttribute("tabindex"),
                  e.classList.contains("_spoller-active") ||
                    (e.nextElementSibling.hidden = !0))
                : (e.setAttribute("tabindex", "-1"),
                  (e.nextElementSibling.hidden = !1));
            });
        }
        function a(e) {
          const t = e.target;
          if (t.closest("[data-spoller]")) {
            const i = t.closest("[data-spoller]"),
              n = i.closest("[data-spollers]"),
              l = !!n.hasAttribute("data-one-spoller");
            n.querySelectorAll("._slide").length ||
              (l && !i.classList.contains("_spoller-active") && d(n),
              i.classList.toggle("_spoller-active"),
              o(i.nextElementSibling, 500)),
              e.preventDefault();
          }
        }
        function d(t) {
          const o = t.querySelector("[data-spoller]._spoller-active");
          o &&
            (o.classList.remove("_spoller-active"),
            e(o.nextElementSibling, 500));
        }
        n &&
          n.length &&
          n.forEach((e) => {
            e.matchMedia.addEventListener("change", function () {
              l(e.itemsArray, e.matchMedia);
            }),
              l(e.itemsArray, e.matchMedia);
          });
      }
    })();
})();
