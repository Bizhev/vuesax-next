(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{499:function(e,t,a){"use strict";a.r(t);var n={data:function(){return{active:!1,time:6e3,progress:0}},watch:{active:function(e){var t=this;if(e){var a=setInterval((function(){t.progress++}),this.time/100);setTimeout((function(){t.active=!1,clearInterval(a),t.progress=0}),this.time)}}}},s=a(1),r=Object(s.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"center"},[a("vs-button",{attrs:{flat:""},on:{click:function(t){e.active=!0}}},[e._v("Open Alert 10s")]),e._v(" "),a("vs-alert",{attrs:{progress:e.progress},scopedSlots:e._u([{key:"title",fn:function(){return[e._v("\n      Vuesax Framework\n    ")]},proxy:!0}]),model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[e._v("\n    Vuesax (pronunciado / vjusacksː /, como view sacks) es un "),a("b",[e._v("framework de componentes UI")]),e._v(" creado con "),a("a",{attrs:{href:"https://vuejs.org/"}},[e._v("Vuejs")]),e._v(" para hacer proyectos fácilmente y con un estilo único y agradable, vuesax esta creado desde cero y pensado para todo tipo de desarrollador desde el amante del frontend hasta el backend que quiere crear fácilmente su enfoque visual al usuario final\n  ")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);