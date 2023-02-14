/*!
 * Built by MAN Digital Hub with Stencil
 * Copyright (c) MAN 2023
 *
 */
let e,
  t,
  l,
  n = !1,
  o = !1,
  s = !1,
  i = !1,
  r = !1;
const c = 's-id',
  f = 'sty-id',
  u = 'c-id',
  a = 'http://www.w3.org/1999/xlink',
  $ = {},
  d = (e) => 'object' == (e = typeof e) || 'function' === e;
function h(e) {
  var t, l, n;
  return null !==
    (n =
      null ===
        (l =
          null === (t = e.head) || void 0 === t
            ? void 0
            : t.querySelector('meta[name="csp-nonce"]')) || void 0 === l
        ? void 0
        : l.getAttribute('content')) && void 0 !== n
    ? n
    : void 0;
}
const m = (e, t, ...l) => {
    let n = null,
      o = null,
      s = null,
      i = !1,
      r = !1;
    const c = [],
      f = (t) => {
        for (let l = 0; l < t.length; l++)
          (n = t[l]),
            Array.isArray(n)
              ? f(n)
              : null != n &&
                'boolean' != typeof n &&
                ((i = 'function' != typeof e && !d(n)) && (n += ''),
                i && r ? (c[c.length - 1].t += n) : c.push(i ? p(null, n) : n),
                (r = i));
      };
    if ((f(l), t)) {
      t.key && (o = t.key), t.name && (s = t.name);
      {
        const e = t.className || t.class;
        e &&
          (t.class =
            'object' != typeof e
              ? e
              : Object.keys(e)
                  .filter((t) => e[t])
                  .join(' '));
      }
    }
    if ('function' == typeof e) return e(null === t ? {} : t, c, b);
    const u = p(e, null);
    return (u.l = t), c.length > 0 && (u.o = c), (u.i = o), (u.u = s), u;
  },
  p = (e, t) => ({ $: 0, h: e, t, m: null, o: null, l: null, i: null, u: null }),
  y = {},
  b = { forEach: (e, t) => e.map(w).forEach(t), map: (e, t) => e.map(w).map(t).map(v) },
  w = (e) => ({ vattrs: e.l, vchildren: e.o, vkey: e.i, vname: e.u, vtag: e.h, vtext: e.t }),
  v = (e) => {
    if ('function' == typeof e.vtag) {
      const t = Object.assign({}, e.vattrs);
      return (
        e.vkey && (t.key = e.vkey),
        e.vname && (t.name = e.vname),
        m(e.vtag, t, ...(e.vchildren || []))
      );
    }
    const t = p(e.vtag, e.vtext);
    return (t.l = e.vattrs), (t.o = e.vchildren), (t.i = e.vkey), (t.u = e.vname), t;
  },
  g = (e, t, l, n, o, s, i) => {
    let r, c, f, a;
    if (1 === s.nodeType) {
      for (
        r = s.getAttribute(u),
          r &&
            ((c = r.split('.')),
            (c[0] !== i && '0' !== c[0]) ||
              ((f = {
                $: 0,
                p: c[0],
                v: c[1],
                g: c[2],
                k: c[3],
                h: s.tagName.toLowerCase(),
                m: s,
                l: null,
                o: null,
                i: null,
                u: null,
                t: null,
              }),
              t.push(f),
              s.removeAttribute(u),
              e.o || (e.o = []),
              (e.o[f.k] = f),
              (e = f),
              n && '0' === f.g && (n[f.k] = f.m))),
          a = s.childNodes.length - 1;
        a >= 0;
        a--
      )
        g(e, t, l, n, o, s.childNodes[a], i);
      if (s.shadowRoot)
        for (a = s.shadowRoot.childNodes.length - 1; a >= 0; a--)
          g(e, t, l, n, o, s.shadowRoot.childNodes[a], i);
    } else if (8 === s.nodeType)
      (c = s.nodeValue.split('.')),
        (c[1] !== i && '0' !== c[1]) ||
          ((r = c[0]),
          (f = {
            $: 0,
            p: c[1],
            v: c[2],
            g: c[3],
            k: c[4],
            m: s,
            l: null,
            o: null,
            i: null,
            u: null,
            h: null,
            t: null,
          }),
          't' === r
            ? ((f.m = s.nextSibling),
              f.m &&
                3 === f.m.nodeType &&
                ((f.t = f.m.textContent),
                t.push(f),
                s.remove(),
                e.o || (e.o = []),
                (e.o[f.k] = f),
                n && '0' === f.g && (n[f.k] = f.m)))
            : f.p === i &&
              ('s' === r
                ? ((f.h = 'slot'),
                  (s['s-sn'] = c[5] ? (f.u = c[5]) : ''),
                  (s['s-sr'] = !0),
                  n &&
                    ((f.m = ke.createElement(f.h)),
                    f.u && f.m.setAttribute('name', f.u),
                    s.parentNode.insertBefore(f.m, s),
                    s.remove(),
                    '0' === f.g && (n[f.k] = f.m)),
                  l.push(f),
                  e.o || (e.o = []),
                  (e.o[f.k] = f))
                : 'r' === r && (n ? s.remove() : ((o['s-cr'] = s), (s['s-cn'] = !0)))));
    else if (e && 'style' === e.h) {
      const t = p(null, s.textContent);
      (t.m = s), (t.k = '0'), (e.o = [t]);
    }
  },
  k = (e, t) => {
    if (1 === e.nodeType) {
      let l = 0;
      for (; l < e.childNodes.length; l++) k(e.childNodes[l], t);
      if (e.shadowRoot)
        for (l = 0; l < e.shadowRoot.childNodes.length; l++) k(e.shadowRoot.childNodes[l], t);
    } else if (8 === e.nodeType) {
      const l = e.nodeValue.split('.');
      'o' === l[0] && (t.set(l[1] + '.' + l[2], e), (e.nodeValue = ''), (e['s-en'] = l[3]));
    }
  },
  j = (e) => de(e).j,
  S = (e, t, l) => {
    const n = j(e);
    return {
      emit: (e) =>
        x(n, t, { bubbles: !!(4 & l), composed: !!(2 & l), cancelable: !!(1 & l), detail: e }),
    };
  },
  x = (e, t, l) => {
    const n = je.ce(t, l);
    return e.dispatchEvent(n), n;
  },
  O = new WeakMap(),
  M = (e, t, l) => {
    let n = ve.get(e);
    Oe && l
      ? ((n = n || new CSSStyleSheet()), 'string' == typeof n ? (n = t) : n.replaceSync(t))
      : (n = t),
      ve.set(e, n);
  },
  C = (e, t) => {
    var l;
    let n = R(t);
    const o = ve.get(n);
    if (((e = 11 === e.nodeType ? e : ke), o))
      if ('string' == typeof o) {
        let t,
          s = O.get((e = e.head || e));
        if ((s || O.set(e, (s = new Set())), !s.has(n))) {
          if (e.host && (t = e.querySelector(`[${f}="${n}"]`))) t.innerHTML = o;
          else {
            (t = ke.createElement('style')), (t.innerHTML = o);
            const n = null !== (l = je.S) && void 0 !== l ? l : h(ke);
            null != n && t.setAttribute('nonce', n), e.insertBefore(t, e.querySelector('link'));
          }
          s && s.add(n);
        }
      } else
        e.adoptedStyleSheets.includes(o) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, o]);
    return n;
  },
  R = (e) => 'sc-' + e.O,
  T = (e) => e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g, '$1{'),
  E = (e, t, l, n, o, s) => {
    if (l !== n) {
      let i = pe(e, t),
        r = t.toLowerCase();
      if ('class' === t) {
        const t = e.classList,
          o = L(l),
          s = L(n);
        t.remove(...o.filter((e) => e && !s.includes(e))),
          t.add(...s.filter((e) => e && !o.includes(e)));
      } else if ('style' === t) {
        for (const t in l)
          (n && null != n[t]) || (t.includes('-') ? e.style.removeProperty(t) : (e.style[t] = ''));
        for (const t in n)
          (l && n[t] === l[t]) ||
            (t.includes('-') ? e.style.setProperty(t, n[t]) : (e.style[t] = n[t]));
      } else if ('key' === t);
      else if ('ref' === t) n && n(e);
      else if (i || 'o' !== t[0] || 'n' !== t[1]) {
        const c = d(n);
        if ((i || (c && null !== n)) && !o)
          try {
            if (e.tagName.includes('-')) e[t] = n;
            else {
              const o = null == n ? '' : n;
              'list' === t ? (i = !1) : (null != l && e[t] == o) || (e[t] = o);
            }
          } catch (e) {}
        let f = !1;
        r !== (r = r.replace(/^xlink\:?/, '')) && ((t = r), (f = !0)),
          null == n || !1 === n
            ? (!1 === n && '' !== e.getAttribute(t)) ||
              (f ? e.removeAttributeNS(a, t) : e.removeAttribute(t))
            : (!i || 4 & s || o) &&
              !c &&
              ((n = !0 === n ? '' : n), f ? e.setAttributeNS(a, t, n) : e.setAttribute(t, n));
      } else
        (t = '-' === t[2] ? t.slice(3) : pe(ge, r) ? r.slice(2) : r[2] + t.slice(3)),
          l && je.rel(e, t, l, !1),
          n && je.ael(e, t, n, !1);
    }
  },
  I = /\s/,
  L = (e) => (e ? e.split(I) : []),
  N = (e, t, l, n) => {
    const o = 11 === t.m.nodeType && t.m.host ? t.m.host : t.m,
      s = (e && e.l) || $,
      i = t.l || $;
    for (n in s) n in i || E(o, n, s[n], void 0, l, t.$);
    for (n in i) E(o, n, s[n], i[n], l, t.$);
  },
  P = (o, r, c, f) => {
    const u = r.o[c];
    let a,
      $,
      d,
      h = 0;
    if (
      (n || ((s = !0), 'slot' === u.h && (e && f.classList.add(e + '-s'), (u.$ |= u.o ? 2 : 1))),
      null !== u.t)
    )
      a = u.m = ke.createTextNode(u.t);
    else if (1 & u.$) a = u.m = ke.createTextNode('');
    else {
      if (
        (i || (i = 'svg' === u.h),
        (a = u.m =
          ke.createElementNS(
            i ? 'http://www.w3.org/2000/svg' : 'http://www.w3.org/1999/xhtml',
            2 & u.$ ? 'slot-fb' : u.h,
          )),
        i && 'foreignObject' === u.h && (i = !1),
        N(null, u, i),
        null != e && a['s-si'] !== e && a.classList.add((a['s-si'] = e)),
        u.o)
      )
        for (h = 0; h < u.o.length; ++h) ($ = P(o, u, h, a)), $ && a.appendChild($);
      'svg' === u.h ? (i = !1) : 'foreignObject' === a.tagName && (i = !0);
    }
    return (
      (a['s-hn'] = l),
      3 & u.$ &&
        ((a['s-sr'] = !0),
        (a['s-cr'] = t),
        (a['s-sn'] = u.u || ''),
        (d = o && o.o && o.o[c]),
        d && d.h === u.h && o.m && W(o.m, !1)),
      a
    );
  },
  W = (e, t) => {
    je.$ |= 1;
    const n = e.childNodes;
    for (let e = n.length - 1; e >= 0; e--) {
      const o = n[e];
      o['s-hn'] !== l &&
        o['s-ol'] &&
        (q(o).insertBefore(o, U(o)), o['s-ol'].remove(), (o['s-ol'] = void 0), (s = !0)),
        t && W(o, t);
    }
    je.$ &= -2;
  },
  A = (e, t, n, o, s, i) => {
    let r,
      c = (e['s-cr'] && e['s-cr'].parentNode) || e;
    for (c.shadowRoot && c.tagName === l && (c = c.shadowRoot); s <= i; ++s)
      o[s] && ((r = P(null, n, s, e)), r && ((o[s].m = r), c.insertBefore(r, U(t))));
  },
  F = (e, t, l, n, s) => {
    for (; t <= l; ++t)
      (n = e[t]) &&
        ((s = n.m), G(n), (o = !0), s['s-ol'] ? s['s-ol'].remove() : W(s, !0), s.remove());
  },
  H = (e, t) => e.h === t.h && ('slot' === e.h ? e.u === t.u : e.i === t.i),
  U = (e) => (e && e['s-ol']) || e,
  q = (e) => (e['s-ol'] ? e['s-ol'] : e).parentNode,
  D = (e, t) => {
    const l = (t.m = e.m),
      n = e.o,
      o = t.o,
      s = t.h,
      r = t.t;
    let c;
    null === r
      ? ((i = 'svg' === s || ('foreignObject' !== s && i)),
        'slot' === s || N(e, t, i),
        null !== n && null !== o
          ? ((e, t, l, n) => {
              let o,
                s,
                i = 0,
                r = 0,
                c = 0,
                f = 0,
                u = t.length - 1,
                a = t[0],
                $ = t[u],
                d = n.length - 1,
                h = n[0],
                m = n[d];
              for (; i <= u && r <= d; )
                if (null == a) a = t[++i];
                else if (null == $) $ = t[--u];
                else if (null == h) h = n[++r];
                else if (null == m) m = n[--d];
                else if (H(a, h)) D(a, h), (a = t[++i]), (h = n[++r]);
                else if (H($, m)) D($, m), ($ = t[--u]), (m = n[--d]);
                else if (H(a, m))
                  ('slot' !== a.h && 'slot' !== m.h) || W(a.m.parentNode, !1),
                    D(a, m),
                    e.insertBefore(a.m, $.m.nextSibling),
                    (a = t[++i]),
                    (m = n[--d]);
                else if (H($, h))
                  ('slot' !== a.h && 'slot' !== m.h) || W($.m.parentNode, !1),
                    D($, h),
                    e.insertBefore($.m, a.m),
                    ($ = t[--u]),
                    (h = n[++r]);
                else {
                  for (c = -1, f = i; f <= u; ++f)
                    if (t[f] && null !== t[f].i && t[f].i === h.i) {
                      c = f;
                      break;
                    }
                  c >= 0
                    ? ((s = t[c]),
                      s.h !== h.h
                        ? (o = P(t && t[r], l, c, e))
                        : (D(s, h), (t[c] = void 0), (o = s.m)),
                      (h = n[++r]))
                    : ((o = P(t && t[r], l, r, e)), (h = n[++r])),
                    o && q(a.m).insertBefore(o, U(a.m));
                }
              i > u ? A(e, null == n[d + 1] ? null : n[d + 1].m, l, n, r, d) : r > d && F(t, i, u);
            })(l, n, t, o)
          : null !== o
          ? (null !== e.t && (l.textContent = ''), A(l, null, t, o, 0, o.length - 1))
          : null !== n && F(n, 0, n.length - 1),
        i && 'svg' === s && (i = !1))
      : (c = l['s-cr'])
      ? (c.parentNode.textContent = r)
      : e.t !== r && (l.data = r);
  },
  V = (e) => {
    const t = e.childNodes;
    let l, n, o, s, i, r;
    for (n = 0, o = t.length; n < o; n++)
      if (((l = t[n]), 1 === l.nodeType)) {
        if (l['s-sr'])
          for (i = l['s-sn'], l.hidden = !1, s = 0; s < o; s++)
            if (((r = t[s].nodeType), t[s]['s-hn'] !== l['s-hn'] || '' !== i)) {
              if (1 === r && i === t[s].getAttribute('slot')) {
                l.hidden = !0;
                break;
              }
            } else if (1 === r || (3 === r && '' !== t[s].textContent.trim())) {
              l.hidden = !0;
              break;
            }
        V(l);
      }
  },
  _ = [],
  z = (e) => {
    let t,
      l,
      n,
      s,
      i,
      r,
      c = 0;
    const f = e.childNodes,
      u = f.length;
    for (; c < u; c++) {
      if (((t = f[c]), t['s-sr'] && (l = t['s-cr']) && l.parentNode))
        for (n = l.parentNode.childNodes, s = t['s-sn'], r = n.length - 1; r >= 0; r--)
          (l = n[r]),
            l['s-cn'] ||
              l['s-nr'] ||
              l['s-hn'] === t['s-hn'] ||
              (B(l, s)
                ? ((i = _.find((e) => e.M === l)),
                  (o = !0),
                  (l['s-sn'] = l['s-sn'] || s),
                  i ? (i.C = t) : _.push({ C: t, M: l }),
                  l['s-sr'] &&
                    _.map((e) => {
                      B(e.M, l['s-sn']) &&
                        ((i = _.find((e) => e.M === l)), i && !e.C && (e.C = i.C));
                    }))
                : _.some((e) => e.M === l) || _.push({ M: l }));
      1 === t.nodeType && z(t);
    }
  },
  B = (e, t) =>
    1 === e.nodeType
      ? (null === e.getAttribute('slot') && '' === t) || e.getAttribute('slot') === t
      : e['s-sn'] === t || '' === t,
  G = (e) => {
    e.l && e.l.ref && e.l.ref(null), e.o && e.o.map(G);
  },
  J = (e, t) => {
    t && !e.R && t['s-p'] && t['s-p'].push(new Promise((t) => (e.R = t)));
  },
  K = (e, t) => {
    if (((e.$ |= 16), !(4 & e.$))) return J(e, e.T), Le(() => Q(e, t));
    e.$ |= 512;
  },
  Q = (e, t) => {
    const l = e.I;
    let n;
    return (
      t &&
        ((e.$ |= 256),
        e.L && (e.L.map(([e, t]) => te(l, e, t)), (e.L = null)),
        (n = te(l, 'componentWillLoad'))),
      le(n, () => X(e, l, t))
    );
  },
  X = async (e, t, l) => {
    const n = e.j,
      o = n['s-rc'];
    l &&
      ((e) => {
        const t = e.N,
          l = e.j,
          n = t.$,
          o = C(l.shadowRoot ? l.shadowRoot : l.getRootNode(), t);
        10 & n && ((l['s-sc'] = o), l.classList.add(o + '-h'));
      })(e);
    Y(e, t), o && (o.map((e) => e()), (n['s-rc'] = void 0));
    {
      const t = n['s-p'],
        l = () => Z(e);
      0 === t.length ? l() : (Promise.all(t).then(l), (e.$ |= 4), (t.length = 0));
    }
  },
  Y = (i, r) => {
    try {
      (r = r.render()),
        (i.$ &= -17),
        (i.$ |= 2),
        ((i, r) => {
          const c = i.j,
            f = i.N,
            u = i.P || p(null, null),
            a = ((e) => e && e.h === y)(r) ? r : m(null, null, r);
          if (
            ((l = c.tagName),
            f.W && ((a.l = a.l || {}), f.W.map(([e, t]) => (a.l[t] = c[e]))),
            (a.h = null),
            (a.$ |= 4),
            (i.P = a),
            (a.m = u.m = c.shadowRoot || c),
            (e = c['s-sc']),
            (t = c['s-cr']),
            (n = 0 != (1 & f.$)),
            (o = !1),
            D(u, a),
            (je.$ |= 1),
            s)
          ) {
            let e, t, l, n, o, s;
            z(a.m);
            let i = 0;
            for (; i < _.length; i++)
              (e = _[i]),
                (t = e.M),
                t['s-ol'] ||
                  ((l = ke.createTextNode('')),
                  (l['s-nr'] = t),
                  t.parentNode.insertBefore((t['s-ol'] = l), t));
            for (i = 0; i < _.length; i++)
              if (((e = _[i]), (t = e.M), e.C)) {
                for (
                  n = e.C.parentNode, o = e.C.nextSibling, l = t['s-ol'];
                  (l = l.previousSibling);

                )
                  if (
                    ((s = l['s-nr']),
                    s &&
                      s['s-sn'] === t['s-sn'] &&
                      n === s.parentNode &&
                      ((s = s.nextSibling), !s || !s['s-nr']))
                  ) {
                    o = s;
                    break;
                  }
                ((!o && n !== t.parentNode) || t.nextSibling !== o) &&
                  t !== o &&
                  (!t['s-hn'] && t['s-ol'] && (t['s-hn'] = t['s-ol'].parentNode.nodeName),
                  n.insertBefore(t, o));
              } else 1 === t.nodeType && (t.hidden = !0);
          }
          o && V(a.m), (je.$ &= -2), (_.length = 0);
        })(i, r);
    } catch (e) {
      ye(e, i.j);
    }
    return null;
  },
  Z = (e) => {
    const t = e.j,
      l = e.I,
      n = e.T;
    64 & e.$ || ((e.$ |= 64), ne(t), te(l, 'componentDidLoad'), e.A(t), n || ee()),
      e.R && (e.R(), (e.R = void 0)),
      512 & e.$ && Ie(() => K(e, !1)),
      (e.$ &= -517);
  },
  ee = () => {
    ne(ke.documentElement),
      Ie(() => x(ge, 'appload', { detail: { namespace: 'core-components' } }));
  },
  te = (e, t, l) => {
    if (e && e[t])
      try {
        return e[t](l);
      } catch (e) {
        ye(e);
      }
  },
  le = (e, t) => (e && e.then ? e.then(t) : t()),
  ne = (e) => e.classList.add('hydrated'),
  oe = (e, t, l) => {
    if (t.F) {
      const n = Object.entries(t.F),
        o = e.prototype;
      if (
        (n.map(([e, [n]]) => {
          (31 & n || (2 & l && 32 & n)) &&
            Object.defineProperty(o, e, {
              get() {
                return ((e, t) => de(this).H.get(t))(0, e);
              },
              set(l) {
                ((e, t, l, n) => {
                  const o = de(e),
                    s = o.H.get(t),
                    i = o.$,
                    r = o.I;
                  (l = ((e, t) =>
                    null == e || d(e)
                      ? e
                      : 4 & t
                      ? 'false' !== e && ('' === e || !!e)
                      : 2 & t
                      ? parseFloat(e)
                      : 1 & t
                      ? e + ''
                      : e)(l, n.F[t][0])),
                    (8 & i && void 0 !== s) ||
                      l === s ||
                      (Number.isNaN(s) && Number.isNaN(l)) ||
                      (o.H.set(t, l), r && 2 == (18 & i) && K(o, !1));
                })(this, e, l, t);
              },
              configurable: !0,
              enumerable: !0,
            });
        }),
        1 & l)
      ) {
        const l = new Map();
        (o.attributeChangedCallback = function (e, t, n) {
          je.jmp(() => {
            const t = l.get(e);
            if (this.hasOwnProperty(t)) (n = this[t]), delete this[t];
            else if (o.hasOwnProperty(t) && 'number' == typeof this[t] && this[t] == n) return;
            this[t] = (null !== n || 'boolean' != typeof this[t]) && n;
          });
        }),
          (e.observedAttributes = n
            .filter(([e, t]) => 15 & t[0])
            .map(([e, n]) => {
              const o = n[1] || e;
              return l.set(o, e), 512 & n[0] && t.W.push([e, o]), o;
            }));
      }
    }
    return e;
  },
  se = (e) => {
    if (0 == (1 & je.$)) {
      const t = de(e),
        l = t.N,
        n = () => {};
      if (1 & t.$) ce(e, t, l.U);
      else {
        let n;
        if (((t.$ |= 1), (n = e.getAttribute(c)), n)) {
          if (1 & l.$) {
            const t = C(e.shadowRoot, l);
            e.classList.remove(t + '-h', t + '-s');
          }
          ((e, t, l, n) => {
            const o = e.shadowRoot,
              s = [],
              i = o ? [] : null,
              r = (n.P = p(t, null));
            je.q || k(ke.body, (je.q = new Map())),
              (e[c] = l),
              e.removeAttribute(c),
              g(r, s, [], i, e, e, l),
              s.map((e) => {
                const l = e.p + '.' + e.v,
                  n = je.q.get(l),
                  s = e.m;
                n && Se && '' === n['s-en'] && n.parentNode.insertBefore(s, n.nextSibling),
                  o || ((s['s-hn'] = t), n && ((s['s-ol'] = n), (s['s-ol']['s-nr'] = s))),
                  je.q.delete(l);
              }),
              o &&
                i.map((e) => {
                  e && o.appendChild(e);
                });
          })(e, l.O, n, t);
        }
        n || (12 & l.$ && ie(e));
        {
          let l = e;
          for (; (l = l.parentNode || l.host); )
            if ((1 === l.nodeType && l.hasAttribute('s-id') && l['s-p']) || l['s-p']) {
              J(t, (t.T = l));
              break;
            }
        }
        l.F &&
          Object.entries(l.F).map(([t, [l]]) => {
            if (31 & l && e.hasOwnProperty(t)) {
              const l = e[t];
              delete e[t], (e[t] = l);
            }
          }),
          (async (e, t, l, n, o) => {
            if (0 == (32 & t.$)) {
              {
                if (((t.$ |= 32), (o = we(l)).then)) {
                  const e = () => {};
                  (o = await o), e();
                }
                o.isProxied || (oe(o, l, 2), (o.isProxied = !0));
                const e = () => {};
                t.$ |= 8;
                try {
                  new o(t);
                } catch (e) {
                  ye(e);
                }
                (t.$ &= -9), e();
              }
              if (o.style) {
                let e = o.style;
                const t = R(l);
                if (!ve.has(t)) {
                  const n = () => {};
                  M(t, e, !!(1 & l.$)), n();
                }
              }
            }
            const s = t.T,
              i = () => K(t, !0);
            s && s['s-rc'] ? s['s-rc'].push(i) : i();
          })(0, t, l);
      }
      n();
    }
  },
  ie = (e) => {
    const t = (e['s-cr'] = ke.createComment(''));
    (t['s-cn'] = !0), e.insertBefore(t, e.firstChild);
  },
  re = (e, t = {}) => {
    var l;
    const n = [],
      o = t.exclude || [],
      s = ge.customElements,
      i = ke.head,
      r = i.querySelector('meta[charset]'),
      c = ke.createElement('style'),
      u = [],
      a = ke.querySelectorAll(`[${f}]`);
    let $,
      d = !0,
      m = 0;
    for (
      Object.assign(je, t), je.D = new URL(t.resourcesUrl || './', ke.baseURI).href, je.$ |= 2;
      m < a.length;
      m++
    )
      M(a[m].getAttribute(f), T(a[m].innerHTML), !0);
    e.map((e) => {
      e[1].map((t) => {
        const l = { $: t[0], O: t[1], F: t[2], U: t[3] };
        (l.F = t[2]), (l.U = t[3]), (l.W = []);
        const i = l.O,
          r = class extends HTMLElement {
            constructor(e) {
              super(e), me((e = this), l), 1 & l.$ && e.attachShadow({ mode: 'open' });
            }
            connectedCallback() {
              $ && (clearTimeout($), ($ = null)), d ? u.push(this) : je.jmp(() => se(this));
            }
            disconnectedCallback() {
              je.jmp(() =>
                (() => {
                  if (0 == (1 & je.$)) {
                    const e = de(this);
                    e.V && (e.V.map((e) => e()), (e.V = void 0));
                  }
                })(),
              );
            }
            componentOnReady() {
              return de(this)._;
            }
          };
        (l.B = e[0]), o.includes(i) || s.get(i) || (n.push(i), s.define(i, oe(r, l, 1)));
      });
    });
    {
      (c.innerHTML = n + '{visibility:hidden}.hydrated{visibility:inherit}'),
        c.setAttribute('data-styles', '');
      const e = null !== (l = je.S) && void 0 !== l ? l : h(ke);
      null != e && c.setAttribute('nonce', e), i.insertBefore(c, r ? r.nextSibling : i.firstChild);
    }
    (d = !1),
      u.length ? u.map((e) => e.connectedCallback()) : je.jmp(() => ($ = setTimeout(ee, 30)));
  },
  ce = (e, t, l) => {
    l &&
      l.map(([l, n, o]) => {
        const s = e,
          i = fe(t, o),
          r = ue(l);
        je.ael(s, n, i, r), (t.V = t.V || []).push(() => je.rel(s, n, i, r));
      });
  },
  fe = (e, t) => (l) => {
    try {
      256 & e.$ ? e.I[t](l) : (e.L = e.L || []).push([t, l]);
    } catch (e) {
      ye(e);
    }
  },
  ue = (e) => 0 != (2 & e),
  ae = (e) => (je.S = e),
  $e = new WeakMap(),
  de = (e) => $e.get(e),
  he = (e, t) => $e.set((t.I = e), t),
  me = (e, t) => {
    const l = { $: 0, j: e, N: t, H: new Map() };
    return (
      (l._ = new Promise((e) => (l.A = e))),
      (e['s-p'] = []),
      (e['s-rc'] = []),
      ce(e, l, t.U),
      $e.set(e, l)
    );
  },
  pe = (e, t) => t in e,
  ye = (e, t) => (0, console.error)(e, t),
  be = new Map(),
  we = (e) => {
    const t = e.O.replace(/-/g, '_'),
      l = e.B,
      n = be.get(l);
    return n ? n[t] : import(`./${l}.entry.js`).then((e) => (be.set(l, e), e[t]), ye);
    /*!__STENCIL_STATIC_IMPORT_SWITCH__*/
  },
  ve = new Map(),
  ge = 'undefined' != typeof window ? window : {},
  ke = ge.document || { head: {} },
  je = {
    $: 0,
    D: '',
    jmp: (e) => e(),
    raf: (e) => requestAnimationFrame(e),
    ael: (e, t, l, n) => e.addEventListener(t, l, n),
    rel: (e, t, l, n) => e.removeEventListener(t, l, n),
    ce: (e, t) => new CustomEvent(e, t),
  },
  Se = !0,
  xe = (e) => Promise.resolve(e),
  Oe = (() => {
    try {
      return new CSSStyleSheet(), 'function' == typeof new CSSStyleSheet().replaceSync;
    } catch (e) {}
    return !1;
  })(),
  Me = [],
  Ce = [],
  Re = (e, t) => (l) => {
    e.push(l), r || ((r = !0), t && 4 & je.$ ? Ie(Ee) : je.raf(Ee));
  },
  Te = (e) => {
    for (let t = 0; t < e.length; t++)
      try {
        e[t](performance.now());
      } catch (e) {
        ye(e);
      }
    e.length = 0;
  },
  Ee = () => {
    Te(Me), Te(Ce), (r = Me.length > 0) && je.raf(Ee);
  },
  Ie = (e) => xe().then(e),
  Le = Re(Ce, !0);
export { y as H, re as b, S as c, j as g, m as h, xe as p, he as r, ae as s };
