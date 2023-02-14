/*!
 * Built by MAN Digital Hub with Stencil
 * Copyright (c) MAN 2023
 * 
 */
import{r as t,h as i,H as r,g as n}from"./p-13d37cd1.js";import{a as e}from"./p-7ffe4149.js";const a=class{constructor(i){t(this,i),this.baseId="tgds-link",this.href=void 0,this.download=!1,this.rel=void 0,this.target="_blank",this.size="medium",this.disabled=!1}getClasses(){return{"tgds-link":!0,["tgds-link--"+this.size]:!0,"tgds-link--disabled":this.disabled}}componentWillLoad(){this.id=e(this.el,this.baseId)}render(){let t;return t=!0!==this.disabled?"a":"span",i(r,{id:this.id},i(t,Object.assign({},{href:!1===this.disabled?this.href:null,download:!1===this.disabled?this.download:null,rel:!1===this.disabled?this.rel:null,target:!1===this.disabled?this.target:null,class:this.getClasses(),"aria-disabled":!0===this.disabled?"true":null}),i("slot",null)))}get el(){return n(this)}};a.style=":root,:host{--kraft-cp-link-underline-offset:4px;--kraft-cp-link-animation-easing:linear;--kraft-cp-link-animation-speed:100ms;--kraft-cp-link-text-disabled:#AFAFAF;--kraft-cp-link-text-pressed:#8A003B;--kraft-cp-link-text-hover:#AD0040;--kraft-cp-link-text-default:#E40045}.tgds-link{color:var(--kraft-cp-link-text-default);text-underline-offset:var(--kraft-cp-link-underline-offset);transition:color var(--kraft-cp-link-animation-speed) var(--kraft-cp-link-animation-easing)}.tgds-link:focus-visible{outline:var(--kraft-pp-size-border-outline) solid var(--kraft-pp-color-border-outline);outline-offset:var(--kraft-pp-offset-border-outline)}@supports not selector(:focus-visible){.tgds-link:focus{outline:var(--kraft-pp-size-border-outline) solid var(--kraft-pp-color-border-outline);outline-offset:var(--kraft-pp-offset-border-outline)}}.tgds-link:hover{color:var(--kraft-cp-link-text-hover);text-decoration:none}.tgds-link:active{color:var(--kraft-cp-link-text-pressed)}.tgds-link:focus{text-decoration:none}.tgds-link--small{font-family:var(--kraft-pp-font-family-regular);font-size:var(--kraft-pp-font-size-link-s);font-weight:var(--kraft-pp-font-weight-link-s);line-height:var(--kraft-pp-font-height-link-s);text-decoration:var(--kraft-pp-font-decoration-link-s);text-transform:var(--kraft-pp-font-transform-link-s)}.tgds-link--medium{font-family:var(--kraft-pp-font-family-regular);font-size:var(--kraft-pp-font-size-link-m);font-weight:var(--kraft-pp-font-weight-link-m);line-height:var(--kraft-pp-font-height-link-m);text-decoration:var(--kraft-pp-font-decoration-link-m);text-transform:var(--kraft-pp-font-transform-link-m)}.tgds-link--large{font-family:var(--kraft-pp-font-family-regular);font-size:var(--kraft-pp-font-size-link-l);font-weight:var(--kraft-pp-font-weight-link-l);line-height:var(--kraft-pp-font-height-link-l);text-decoration:var(--kraft-pp-font-decoration-link-l);text-transform:var(--kraft-pp-font-transform-link-l)}.tgds-link--disabled{color:var(--kraft-cp-link-text-disabled);pointer-events:none}";export{a as tgds_link}