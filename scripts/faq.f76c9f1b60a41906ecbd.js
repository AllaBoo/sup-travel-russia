!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=16)}({0:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));class n{constructor(e){this.popup=e,this.close=this.close.bind(this)}open(){this.popup.classList.add("popup_opened"),this._setListeners(),document.querySelector(".body").append(this.popup),document.querySelector(".header").classList.add("hidden")}close(){this.popup.closest(".popup").classList.remove("popup_opened"),this._deleteListeners(),document.querySelector(".header").classList.remove("hidden")}_setListeners(){this.popup.querySelector(".popup__close").addEventListener("click",this.close)}_deleteListeners(){this.popup.querySelector(".popup__close").removeEventListener("click",this.close)}}},1:function(e,t,o){"use strict";o.d(t,"a",(function(){return i})),o.d(t,"b",(function(){return d}));var n=o(0);const r=document.querySelector(".header__icon"),c=document.querySelector("#leadButton"),s=document.querySelector("#leadPopup"),i=(document.querySelector("#teamPopup"),document.querySelector("#photoPopup")),u=(document.querySelector(".popup__close"),document.querySelector("popup__photo"),document.querySelector("#denis"),new n.a(s)),a=new class{constructor(){this.headerIcon=document.querySelector(".header__icon"),this.templateClose=document.querySelector("#icon-close").content.querySelector("img"),this.templateOpen=document.querySelector("#icon-open").content.querySelector("img")}openMenu(){for(;this.headerIcon.firstChild;)this.headerIcon.removeChild(this.headerIcon.firstChild);const e=this.templateClose.cloneNode(!0);this.headerIcon.append(e),this.headerIcon.addEventListener("click",()=>this.closeMenu()),document.querySelector(".header__nav").classList.add("header__nav_opened"),document.querySelector(".header__menu").classList.add("header__menu_opened")}closeMenu(){for(;this.headerIcon.firstChild;)this.headerIcon.removeChild(this.headerIcon.firstChild);const e=this.templateOpen.cloneNode(!0);this.headerIcon.append(e),this.headerIcon.addEventListener("click",()=>this.openMenu()),document.querySelector(".header__nav").classList.remove("header__nav_opened"),document.querySelector(".header__menu").classList.remove("header__menu_opened")}};function d(){c.addEventListener("click",()=>u.open()),r.addEventListener("click",()=>a.openMenu())}},16:function(e,t,o){"use strict";o.r(t);o(17);var n=o(1);const r=document.querySelectorAll(".tab"),c=document.querySelectorAll(".tabcontent"),s=document.querySelectorAll("details");r.forEach(e=>{e.addEventListener("click",()=>{var t;t=e.dataset.tab,document.querySelector("#all").classList.remove("tab_active"),r.forEach(e=>{e.classList.remove("tab_active")}),c.forEach(e=>{e.classList.remove("tabcontent_active")}),document.querySelector("#tab"+t).classList.add("tab_active"),document.querySelector("#tabcontent"+t).classList.add("tabcontent_active")})});const i=()=>{document.querySelector("#all").classList.add("tab_active"),c.forEach(e=>{e.classList.add("tabcontent_active")}),r.forEach(e=>{e.classList.remove("tab_active")})};document.querySelector("#all").addEventListener("click",()=>i()),s.forEach(e=>{e.addEventListener("click",()=>{s.forEach(t=>{t!==e&&t.removeAttribute("open")})})}),Object(n.b)(),i()},17:function(e,t,o){}});