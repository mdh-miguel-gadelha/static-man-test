/*!
 * Built by MAN Digital Hub with Stencil
 * Copyright (c) MAN 2023
 *
 */
import { h as e } from './p-13d37cd1.js';
const l = ({
    iconName: l,
    size: o = '16',
    className: t = null,
    decorative: n = !0,
    width: i = null,
    height: s = null,
    fill: d = 'currentColor',
    onClickCallback: a = null,
  }) =>
    e(`tgds-icon-${l}`, {
      className: t,
      size: o,
      decorative: n,
      width: i,
      height: s,
      fill: d,
      onClick: a,
    }),
  o = (e) => {
    const l = document.querySelector(e);
    return Boolean(l)
      ? 'none' === l.style.display || 'hidden' === l.style.visibility || '0' === l.style.opacity
        ? { result: !1, motive: 'hidden' }
        : null !== l.getAttribute('disabled') && 'false' != l.getAttribute('disabled')
        ? { result: !1, motive: 'disabled' }
        : l.tabIndex >= 0 || (-1 === l.tabIndex && null !== l.getAttribute('tabindex'))
        ? { result: !0 }
        : { result: !1, motive: 'other' }
      : { result: !1, motive: 'no component' };
  },
  t = (e, l) => {
    let o = 0,
      t = `${l}-${o}`;
    const n = e.getAttribute('id');
    if (null == n) for (; Boolean(document.getElementById(t)); ) t = `${l}-${++o}`;
    else t = n;
    return t;
  };
export { t as a, l as g, o as i };
