(function(t){function e(e){for(var r,s,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={octoprint_tunnel:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/static/frontend/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;i.push([7,"chunk-vendors"]),n()})({"0d29":function(t,e,n){t.exports=n.p+"img/detective-hour-inverse.png"},1244:function(t,e,n){},1807:function(t,e,n){"use strict";n("99af"),n("a15b");var r=n("0b49"),a=n.n(r),i=n("dd61"),s=n.n(i);e["a"]={publicTimelapse:function(){return"/api/v1/publictimelapse/"},printShotFeedback:function(t,e){return"/api/v1/printshotfeedbacks/".concat(t,"/?print_id=").concat(e)},print:function(t){return"/api/v1/prints/".concat(t,"/")},prints:function(){return"/api/v1/prints/"},printsBulkDelete:function(){return"/api/v1/prints/bulk_delete/"},printAlertOverwrite:function(t){return"/api/v1/prints/".concat(t,"/alert_overwrite/")},printers:function(){return"/api/v1/printers/"},printer:function(t){return"/api/v1/printers/".concat(t,"/")},printerAction:function(t,e){return"/api/v1/printers/".concat(t).concat(e)},pubPrinter:function(){return"/api/v1p/printer/"},gcodes:function(t,e){return"/api/v1/gcodes/?page=".concat(t,"&page_size=").concat(e||24)},gcode:function(t){return"/api/v1/gcodes/".concat(t,"/")},tunnelUsage:function(){return"/api/v1/tunnelusage/"},verificationCode:function(){return"/api/v1/onetimeverificationcodes/"},user:function(){return"/api/v1/users/me/"},sharedResources:function(t){return"/api/v1/sharedresources/?"+s()(a()(t),(function(t){return t.join("=")})).join("&")},sharedResource:function(t){return"/api/v1/sharedresources/".concat(t,"/")},printerControl:function(t){return"/printers/".concat(t,"/control/")},printerWebSocket:function(t){return"/ws/web/".concat(t,"/")},printerSharedWebSocket:function(t){return"/ws/share_token/web/".concat(t,"/")},printerWizard:function(t){return"/printers/wizard/?printerId=".concat(t)}}},"3c33":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return a}));var r=function(t,e){var n=localStorage.getItem(t)||e;try{return JSON.parse(n)}catch(r){return n}},a=function(t,e){return localStorage.setItem(t,e)}},"58a4":function(t,e,n){"use strict";var r=n("f5f5"),a=n.n(r);a.a},6368:function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("a026"),a=n("f357"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pull-to-reveal",[n("navbar",{attrs:{"view-name":"app.views.tunnel_views.tunnel"}})],1),t.isPro?t._e():n("div",{staticClass:"floating-panel text-center pb-2"},[t._m(0),n("div",{class:t.usageClass},[t._v(t._s(t.usageMTD)+"/"+t._s(t.humanizedUsageCap))]),t.overage?n("div",[t._v("Your month-to-date tunneling usage is over the Free plan limit. "),n("a",{staticClass:"btn btn-sm btn-primary",attrs:{type:"button",href:"/ent/pricing/"}},[t._v("Get Unlimited Tunneling")])]):t._e()]),n("div",[t.printerId?n("iframe",{staticClass:"tunnel-iframe",attrs:{src:t.iframeUrl()}}):t._e()])],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-muted"},[t._v("Month-To-Date Usage/Free Limit("),n("a",{attrs:{href:"https://www.thespaghettidetective.com/docs/octoprint-tunneling/#is-octoprint-tunneling-free-to-all-users"}},[t._v("?")]),t._v(")")])}],o=(n("fb6a"),n("bc3a")),c=n.n(o),l=n("6625"),u=n.n(l),p=n("49d5"),d=n.n(p),f=n("1807"),v=n("b768"),h=n("8ffe"),m={name:"OctoPrintTunnelPage",components:{PullToReveal:v["a"],Navbar:h["a"]},data:function(){return{bytesMTD:null,usageCap:null,isPro:!0,printerId:null}},computed:{usageClass:function(){return{"text-success":this.bytesMTD<.8*this.usageCap,"text-warning":this.bytesMTD>=.8*this.usageCap&&this.bytesMTD<this.usageCap,"text-danger":this.bytesMTD>=this.usageCap}},usageMTD:function(){return d()(this.bytesMTD)},humanizedUsageCap:function(){return d()(this.usageCap)},overage:function(){return this.bytesMTD>=this.usageCap}},created:function(){this.isPro=JSON.parse(document.querySelector("#user-json").text).is_pro,this.printerId=u()(window.location.pathname,"/").slice(-2,-1).pop(),this.usageCap=JSON.parse(document.querySelector("#settings-json").text).OCTOPRINT_TUNNEL_CAP},mounted:function(){this.$swal.DismissableToast({html:'<h4 class="text-center p-2"><img style="height: 1.1em;margin-right: 0.75em;" src="/static/img/octoprint-tunnel.png" />OctoPrint Secure Tunnel</h4><div class="p-1">It may take long time for OctoPrint page to load as it is securely tunneled via The Spaghetti Detective server.</div><div class="p-1"><a target="_blank" href="https://www.thespaghettidetective.com/docs/octoprint-tunneling/#is-octoprint-tunneling-secure">Learn more about OctoPrint Tunneling\'s security and page load speed. <i class="fas fa-external-link-alt"></i></a></div>',customClass:{container:"dark-backdrop"}},"octoprint-tunnel.warning");var t=this,e=function(){c.a.get(f["a"].tunnelUsage()).then((function(e){t.bytesMTD=e.data.total}))};setInterval(e,15e3),setTimeout(e,4e3)},methods:{iframeUrl:function(){return"/octoprint/".concat(this.printerId,"/")}}},g=m,b=(n("58a4"),n("2877")),w=Object(b["a"])(g,i,s,!1,null,"31753e0a",null),y=w.exports,_=n("785f");Object(_["a"])(r["default"]),r["default"].use(a["a"]),new r["default"]({components:{OctoPrintTunnelPage:y}}).$mount("#octoprint-tunnel-mount")},"6bb8":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return a}));var r=function(){return""!==JSON.parse(document.querySelector("#app-platform-json").text)["platform"]},a=function(){return"ios"===JSON.parse(document.querySelector("#app-platform-json").text)["platform"]}},7:function(t,e,n){t.exports=n("6368")},"785f":function(t,e,n){"use strict";n("99af"),n("fb6a"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("5319");var r=n("0122"),a=/(?:^|[-_/])(\w)/g,i="root",s="anonymous component",o=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^/]+?|)(\.[^./]*|))(?:[/]*)$/,c=function(t){var e=o.exec(t);return e?e.slice(1):[]},l=function(t,e){var n=c(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},u=function(t){if(!t)return s;if(t.$root===t)return i;if(!t.$options)return s;if(t.$options.name)return t.$options.name;if(t.$options._componentTag)return t.$options._componentTag;if(t.$options.__file){var e=t.$options.__file.replace(/^[a-zA-Z]:/,"").replace(/\\/g,"/"),n=l(e,".vue");return n.replace(a,(function(t,e){return e?e.toUpperCase():""}))}return s},p=function t(e,n,a,i,s,o){var c=0;for(var l in n){if(c+=1,c>o)break;"object"==Object(r["a"])(n[l])?s>i&&t(e,n[l],a+"."+l,i+1,s,o):e[a+"."+l]=n[l]}},d=function(t){var e=t.config.errorHandler;t.config.errorHandler=function(n,r,a){if(window.Sentry){var i={},s=r;if(r._original&&(s=r._original),s)try{i.componentName=u(s),p(i,JSON.parse(JSON.stringify(s.$options.propsData)),"props",0,2,10)}catch(o){console.log("Unable to extract metadata from Vue component.")}a&&(i.lifecycleHook=a),setTimeout((function(){window.Sentry.getCurrentHub().withScope((function(t){t.setContext("vue",i),window.Sentry.getCurrentHub().captureException(n)}))}))}"function"===typeof e&&e.call(t,n,r,a),t.util&&t.util.warn("Error in ".concat(a,': "').concat(n.toString(),'"'),r),console.error(n)}};e["a"]=d},"7d97":function(t,e,n){},"8a45":function(t,e,n){t.exports=n.p+"img/logo-inverted.png"},"8ffe":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isInMobile?t._e():r("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark static-top flex-column"},[r("div",{staticClass:"container"},[r("a",{staticClass:"navbar-brand",attrs:{href:"/printers/"}},[r("img",{staticStyle:{height:"32px"},attrs:{src:n("8a45"),alt:"The Spaghetti Detective"}})]),r("button",{ref:"mobileDropdown",staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"}},[r("span",{staticClass:"navbar-toggler-icon"})]),r("div",{ref:"mobileDropdownContent",staticClass:"collapse navbar-collapse",attrs:{id:"navbarResponsive"}},[r("ul",{staticClass:"navbar-nav"},[t.user?r("li",{staticClass:"nav-item",class:{active:t.viewName.includes("printers")}},[r("a",{staticClass:"nav-link",attrs:{href:"/printers/"}},[t._v("Printer ")])]):t._e(),t.user?r("li",{staticClass:"nav-item",class:{active:t.viewName.includes("prints")}},[r("a",{staticClass:"nav-link",attrs:{href:"/prints/"}},[t._v("Time-lapse ")])]):t._e(),t.user?r("li",{staticClass:"nav-item",class:{active:t.viewName.includes("gcodes")}},[r("a",{staticClass:"nav-link",attrs:{href:"/gcodes/"}},[t._v("G-Code ")])]):t._e(),t.user?t._e():r("li",{staticClass:"nav-item",class:{active:"publictimelapse_list"===t.viewName}},[r("a",{staticClass:"nav-link glowing",attrs:{href:"/publictimelapses/"}},[t._v("Spaghetti Gallery")])]),t.isEnt?r("li",{staticClass:"nav-item",class:{active:"pricing"===t.viewName}},[r("a",{staticClass:"nav-link",attrs:{href:"/ent/pricing/"}},[t._v("Pricing")])]):t._e(),t._m(0),t._m(1)]),r("ul",{staticClass:"navbar-nav ml-auto"},[t.user?t._e():r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"/accounts/login/"}},[t._v("Sign In")])]),!t.user&&t.allowSignUp?r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link",attrs:{href:"/accounts/signup/"}},[t._v("Sign up")])]):t._e(),t.isEnt&&t.user?r("li",{staticClass:"nav-item"},[r("a",{staticClass:"nav-link badge-btn",attrs:{href:"/ent/subscription/#detective-hour-balance"}},[r("img",{attrs:{src:n("0d29")}}),r("span",{staticClass:"badge badge-light",attrs:{id:"user-credits"}},[t._v(t._s(t.dhBadgeNum))]),r("span",{staticClass:"sr-only"},[t._v("Detective Hours")])])]):t._e(),t.user?r("li",{ref:"accountDropdown",staticClass:"nav-item dropdown"},[r("a",{staticClass:"nav-link dropdown-toggle user-menu",attrs:{"data-toggle":"dropdown",href:"#",id:t.user.id,"aria-expanded":"false"}},[t._v(" "+t._s(t.user.first_name||t.user.email)+" "),r("span",{staticClass:"caret"})]),r("div",{ref:"accountDropdownContent",staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"themes"}},[t._m(2),t.isEnt?r("a",{staticClass:"dropdown-item",attrs:{href:"/ent/subscription/"}},[r("i",{staticClass:"far fa-user-circle"}),t._v("Account")]):t._e(),r("div",{staticClass:"dropdown-divider"}),t._m(3)])]):t._e()])])])]),t.needsEmailVerification?r("div",{staticClass:"alert alert-warning text-center",attrs:{role:"alert"}},[t._v(" You will not get notified by email on print failure, as your primary email address is not verified. "),r("a",{attrs:{href:"/accounts/email/"}},[t._v("Verify your email address.")])]):t._e()])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://www.thespaghettidetective.com/help"}},[t._v("Help")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://discord.gg/hsMwGpD"}},[t._v("Forum")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"dropdown-item",attrs:{href:"/user_preferences/"}},[n("i",{staticClass:"fas fa-sliders-h"}),t._v("Preferences")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{staticClass:"dropdown-item",attrs:{href:"/accounts/logout/"}},[n("i",{staticClass:"fas fa-sign-out-alt"}),t._v("Log out")])}],i=(n("d3b7"),n("ac1f"),n("3ca3"),n("841c"),n("2ca0"),n("ddb0"),n("2b3d"),n("c1df")),s=n.n(i),o=n("6bb8"),c={name:"Navbar",data:function(){return{user:null,allowSignUp:!1,isEnt:!1,isInMobile:!1}},props:{viewName:{default:function(){return""},type:String}},created:function(){var t=JSON.parse(document.querySelector("#settings-json").text),e=t.ACCOUNT_ALLOW_SIGN_UP,n=t.IS_ENT;this.allowSignUp=!!e,this.isEnt=!!n,this.user=JSON.parse(document.querySelector("#user-json").text),this.isInMobile=Object(o["b"])()||window.location.pathname.startsWith("/mobile/")||"true"===new URLSearchParams(window.location.search).get("inMobile")},computed:{dhBadgeNum:function(){return this.user&&this.user.is_dh_unlimited?"∞":Math.round(this.user.dh_balance)},needsEmailVerification:function(){if(!this.user)return!1;var t=s()(this.user.date_joined).isBefore(s()().subtract(15,"days"));return this.isEnt&&!this.user.is_primary_email_verified&&t}},methods:{hideDropdowns:function(){var t=this.$refs.accountDropdown;t.classList.contains("show")&&(t.classList.remove("show"),this.$refs.accountDropdownContent.classList.remove("show"));var e=this.$refs.mobileDropdown;e.getAttribute("aria-expanded")&&(e.classList.add("collapsed"),this.$refs.mobileDropdownContent.classList.remove("show"))}}},l=c,u=(n("ccf2"),n("2877")),p=Object(u["a"])(l,r,a,!1,null,"73a10ad6",null);e["a"]=p.exports},b768:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"pullToRevealWrapper",staticClass:"wrapper"},[n("div",[n("div",{staticClass:"pull-to-reveal"},[t.enable?t._t("default"):t._e()],2),n("div",{directives:[{name:"show",rawName:"v-show",value:t.showEdge,expression:"showEdge"}],staticClass:"showing-edge"}),n("div",{staticClass:"spaceholder"})]),n("div",{ref:"staticWrapper"},[t.enable?t._e():t._t("default")],2)])},a=[],i={name:"PullToReveal",props:{showEdge:{default:function(){return!1},type:Boolean},shiftContent:{default:function(){return!0},type:Boolean},enable:{default:function(){return!1},type:Boolean}},data:function(){return{status:"closed",animationTime:.5}},watch:{enable:function(t){t?(this.destroyDisabled(),this.initEnabled()):(this.destroyEnabled(),this.initDisabled())}},mounted:function(){this.enable?this.initEnabled():this.initDisabled()},destroyed:function(){this.enable?this.destroyEnabled():this.destroyDisabled()},methods:{initEnabled:function(){window.addEventListener("scroll",this.handleScroll),document.querySelector("body").style.minHeight="101vh";var t=this.$refs.pullToRevealWrapper.querySelector(".pull-to-reveal"),e=this.$refs.pullToRevealWrapper.querySelector(".spaceholder"),n=this.animationTime;t.style.transition="all ".concat(n,"s"),e.style.transition="all ".concat(n,"s"),0===window.scrollY&&window.scrollBy({top:1,behavior:"smooth"}),window.onload=function(){var e=parseInt(window.getComputedStyle(t).height);t.style.top="-".concat(2*e,"px")}},destroyEnabled:function(){if(window&&window.removeEventListener("scroll",this.handleScroll),document&&(document.querySelector("body").style.minHeight=""),this.$refs.pullToRevealWrapper){var t=this.$refs.pullToRevealWrapper.querySelector(".pull-to-reveal");t.style.transition="none",t.style.top="-999px";var e=this.$refs.pullToRevealWrapper.querySelector(".spaceholder");e.style.transition="none"}},initDisabled:function(){var t=this.$refs.pullToRevealWrapper.querySelector(".showing-edge");t.style.display="none";var e=this.$refs.staticWrapper;e.style.position="absolute",e.style.width="100%",e.style.top="0",e.style.left="0",e.style.zIndex="1";var n=parseInt(window.getComputedStyle(e).height);document.querySelector("body").style.paddingTop="".concat(n,"px")},destroyDisabled:function(){var t=this.$refs.pullToRevealWrapper;t&&(t.querySelector(".showing-edge").style.display="block");var e=this.$refs.staticWrapper;e&&(e.style.display="none"),document&&(document.querySelector("body").style.paddingTop=0)},handleScroll:function(){var t=window.pageYOffset,e=this.$refs.pullToRevealWrapper.querySelector(".pull-to-reveal"),n=parseInt(window.getComputedStyle(e).height);if(0===t){if("opened"===this.status)return;e.style.top=0,this.status="opened",this.shiftContent&&(this.$refs.pullToRevealWrapper.querySelector(".spaceholder").style.height="".concat(n,"px"))}else{if("closed"===this.status)return;this.$emit("hide"),e.style.top="-".concat(2*n,"px"),this.status="closed",this.shiftContent&&(this.$refs.pullToRevealWrapper.querySelector(".spaceholder").style.height=0)}}}},s=i,o=(n("cd63"),n("2877")),c=Object(o["a"])(s,r,a,!1,null,"b194aae2",null);e["a"]=c.exports},ccf2:function(t,e,n){"use strict";var r=n("7d97"),a=n.n(r);a.a},cd63:function(t,e,n){"use strict";var r=n("1244"),a=n.n(r);a.a},f357:function(t,e,n){"use strict";var r=n("f3f3"),a=n("a026"),i=n("5886"),s=n("3c33"),o=function(t,e,n){var i=document.createElement("div"),s=new a["default"]({render:function(n){return n(t,{props:e})}}).$mount(i);return a["default"].swal(Object(r["a"])(Object(r["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(t){t.querySelector("#replace-here").replaceWith(s.$el)},onDestroy:function(){s.$destroy(),i.remove()}}))},c=function(t,e,n){return a["default"].swal(Object(r["a"])(Object(r["a"])({},n),{},{customClass:{container:"dark-backdrop"},html:'<div id="replace-here">Placeholder</div>',onBeforeOpen:function(e){e.querySelector("#replace-here").replaceWith(t)}}))},l=function(t,e){t.use(i["a"],e);var n=t.swal.mixin({title:"Are you sure?",showCancelButton:!0,confirmButtonText:"Yes",cancelButtonText:"No",customClass:{container:"dark-backdrop"}}),a=t.swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:5e3}),l=function(e,n){if(!Object(s["a"])(n,!1)){var a=Object(r["a"])(Object(r["a"])({},e),{},{position:"top-end",confirmButtonText:"Gotcha! Don't show this again."});return t.swal(a).then((function(t){t.value&&(Object(s["b"])(n,!0),console.log(t))}))}};t.prototype.$swal["openModalWithComponent"]=o,t.prototype.$swal["openModalWithElement"]=c,t.prototype.$swal["Confirm"]=n,t.prototype.$swal["Toast"]=a,t.prototype.$swal["DismissableToast"]=l};e["a"]={install:l}},f5f5:function(t,e,n){}});
//# sourceMappingURL=octoprint_tunnel.js.map