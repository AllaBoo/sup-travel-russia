!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=7)}([function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return r})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return d}));const o=document.querySelector(".header__icon"),r=document.querySelector("#leadButton"),c=document.querySelector("#leadPopup"),d=document.querySelector(".popup__close")},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));class o{constructor(){this.headerIcon=document.querySelector(".header__icon"),this.templateClose=document.querySelector("#icon-close").content.querySelector("img"),this.templateOpen=document.querySelector("#icon-open").content.querySelector("img")}openMenu(){for(;this.headerIcon.firstChild;)this.headerIcon.removeChild(this.headerIcon.firstChild);const e=this.templateClose.cloneNode(!0);this.headerIcon.append(e),this.headerIcon.addEventListener("click",()=>this.closeMenu()),document.querySelector(".header__nav").classList.add("header__nav_opened"),document.querySelector(".header__menu").classList.add("header__menu_opened"),document.querySelector(".body").classList.add("body_overlay")}closeMenu(){for(;this.headerIcon.firstChild;)this.headerIcon.removeChild(this.headerIcon.firstChild);const e=this.templateOpen.cloneNode(!0);this.headerIcon.append(e),this.headerIcon.addEventListener("click",()=>this.openMenu()),document.querySelector(".header__nav").classList.remove("header__nav_opened"),document.querySelector(".header__menu").classList.remove("header__menu_opened"),document.querySelector(".body").classList.remove("body_overlay")}}},,,,,,function(e,t,n){"use strict";n.r(t);n(8);var o=n(1),r=n(0);const c=new o.a;r.b.addEventListener("click",()=>c.openMenu()),r.c.addEventListener("click",()=>{r.d.classList.add("popup_opened"),document.querySelector(".body").append(r.d)}),r.a.addEventListener("click",()=>{r.d.closest(".popup").classList.remove("popup_opened")})},function(e,t,n){}]);