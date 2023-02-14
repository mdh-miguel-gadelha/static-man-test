/*!
 * Built by MAN Digital Hub with Stencil
 * Copyright (c) MAN 2023
 * 
 */
import{r as e,c,h as r,H as o,g as t}from"./p-13d37cd1.js";import{a}from"./p-7ffe4149.js";const d=class{constructor(r){e(this,r),this.tgdsChange=c(this,"tgds-change",7),this.baseID="tgds-checkbox",this.ariaInvalid=!1,this.handleChange=e=>{this.checked=e.target.checked,this.tgdsChange.emit({checked:this.checked,value:this.value})},this.onLabelClick=e=>{e.stopPropagation()},this.name=void 0,this.label="",this.value="",this.invalid=!1,this.checked=!1,this.disabled=!1}handleAriaInvalid(){this.ariaInvalid=!!this.invalid}componentWillLoad(){this.id=a(this.el,this.baseID),this.handleAriaInvalid()}render(){return r(o,{class:"tgds-checkbox"},r("div",{class:"tgds-checkbox__control "+(this.invalid?"tgds-checkbox--invalid":"")},r("input",Object.assign({},{type:"checkbox",name:this.name,id:this.id,value:this.value,checked:this.checked,"aria-invalid":this.ariaInvalid.toString(),disabled:this.disabled,onChange:this.handleChange,class:"tgds-checkbox__input"})),r("label",{htmlFor:this.id,onClick:this.onLabelClick},this.label)))}get el(){return t(this)}};d.style=":root,:host{--kraft-cp-checkbox-animation-easing:linear;--kraft-cp-checkbox-animation-speed:100ms;--kraft-cp-checkbox-border-radius:0px;--kraft-cp-checkbox-border-width:1px;--kraft-cp-checkbox-sizing:20px;--kraft-cp-checkbox-label-spacing-left:8px;--kraft-cp-checkbox-label-text:#303C49;--kraft-cp-checkbox-border-checked-disabled:#E5E5E5;--kraft-cp-checkbox-border-checked-hover:#AD0040;--kraft-cp-checkbox-border-checked-default:#E40045;--kraft-cp-checkbox-border-error:#CC0000;--kraft-cp-checkbox-border-disabled:#AFAFAF;--kraft-cp-checkbox-border-hover:#1E2832;--kraft-cp-checkbox-border-default:#5B6F85;--kraft-cp-checkbox-background-checked-disabled:#E5E5E5;--kraft-cp-checkbox-background-checked-hover:#AD0040;--kraft-cp-checkbox-background-checked-default:#E40045;--kraft-cp-checkbox-background-error:#FFB0B0;--kraft-cp-checkbox-background-disabled:#E5E5E5;--kraft-cp-checkbox-background-hover:#FFFFFF;--kraft-cp-checkbox-background-default:#FFFFFF}.tgds-checkbox__control{display:flex;align-items:center}.tgds-checkbox__control label{padding-left:var(--kraft-cp-checkbox-label-spacing-left);color:var(--kraft-cp-checkbox-label-text);cursor:pointer;font-family:var(--kraft-pp-font-family-regular);font-size:var(--kraft-pp-font-size-component-regular-m);font-weight:var(--kraft-pp-font-weight-component-regular-m);line-height:var(--kraft-pp-font-height-component)}.tgds-checkbox__input{position:relative;width:var(--kraft-cp-checkbox-sizing);height:var(--kraft-cp-checkbox-sizing);box-sizing:border-box;border:var(--kraft-cp-checkbox-border-width) solid var(--kraft-cp-checkbox-border-default);border-radius:var(--kraft-cp-checkbox-border-radius);margin:0;appearance:none;background-color:transparent;cursor:pointer;outline:none;transition:border-color var(--kraft-cp-checkbox-animation-speed) var(--kraft-cp-checkbox-animation-easing)}.tgds-checkbox__input:focus-visible{outline:var(--kraft-pp-size-border-outline) solid var(--kraft-pp-color-border-outline);outline-offset:var(--kraft-pp-offset-border-outline)}@supports not selector(:focus-visible){.tgds-checkbox__input:focus{outline:var(--kraft-pp-size-border-outline) solid var(--kraft-pp-color-border-outline);outline-offset:var(--kraft-pp-offset-border-outline)}}.tgds-checkbox__input::before{display:block;width:100%;height:100%;box-sizing:border-box;padding:3px;background-color:var(--kraft-cp-checkbox-background-default);content:\"\";transition:background-color var(--kraft-cp-checkbox-animation-speed) var(--kraft-cp-checkbox-animation-easing)}.tgds-checkbox__input::after{position:absolute;z-index:1;top:calc(50% - 8px);right:calc(50% - 8px);display:block;width:16px;height:16px;content:\"\"}.tgds-checkbox__input:hover{border-color:var(--kraft-cp-checkbox-border-hover)}.tgds-checkbox__input:disabled{border-color:var(--kraft-cp-checkbox-border-disabled);cursor:default}.tgds-checkbox__input:disabled::before{background-color:var(--kraft-cp-checkbox-background-disabled)}.tgds-checkbox__input:disabled~label{cursor:default}.tgds-checkbox__input:checked{border-color:var(--kraft-cp-checkbox-border-checked-default)}.tgds-checkbox__input:checked::before{background-color:var(--kraft-cp-checkbox-background-checked-default)}.tgds-checkbox__input:checked::after{content:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%23FFFFFF' fill-rule='evenodd' viewBox='0 0 16 16'%3E%3Cpath  d='M13.3785 2.75L15 4.18831L6.8029 13.25L1 8.47909L2.3906 6.82055L6.58034 10.2652L13.3785 2.75Z' clip-rule='evenodd'/%3E%3C/svg%3E%0A\")}.tgds-checkbox__input:checked:hover{border-color:var(--kraft-cp-checkbox-border-checked-hover)}.tgds-checkbox__input:checked:hover::before{background-color:var(--kraft-cp-checkbox-background-checked-hover)}.tgds-checkbox__input:checked:disabled{border-color:var(--kraft-cp-checkbox-border-checked-disabled);pointer-events:none}.tgds-checkbox__input:checked:disabled::before{background-color:var(--kraft-cp-checkbox-background-checked-disabled)}.tgds-checkbox__input:checked:disabled::after{content:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='%238f8f8f' fill-rule='evenodd' viewBox='0 0 16 16'%3E%3Cpath  d='M13.3785 2.75L15 4.18831L6.8029 13.25L1 8.47909L2.3906 6.82055L6.58034 10.2652L13.3785 2.75Z' clip-rule='evenodd'/%3E%3C/svg%3E%0A\")}.tgds-checkbox--invalid input{border-color:var(--kraft-cp-checkbox-border-error)}.tgds-checkbox--invalid input::before{background-color:var(--kraft-cp-checkbox-background-error)}";export{d as tgds_checkbox}