(window.webpackJsonp=window.webpackJsonp||[]).push([[16,7,18,24,31,37,41],{316:function(t,e,n){},323:function(t,e,n){"use strict";n.r(e);var i=n(10),s={props:{item:{required:!0}},computed:{link(){return Object(i.e)(this.item.link)},exact(){return this.$site.locales?Object.keys(this.$site.locales).some(t=>t===this.link):"/"===this.link}},methods:{isExternal:i.h,isMailto:i.i,isTel:i.j}},o=n(0),r=Object(o.a)(s,(function(){var t=this,e=t._self._c;return t.isExternal(t.link)?e("a",{staticClass:"nav-link external",attrs:{href:t.link,target:t.isMailto(t.link)||t.isTel(t.link)?null:"_blank",rel:t.isMailto(t.link)||t.isTel(t.link)?null:"noopener noreferrer"}},[e("i",{class:"iconfont "+t.item.icon}),t._v("\n  "+t._s(t.item.text)+"\n  "),e("OutboundLink")],1):e("router-link",{staticClass:"nav-link",attrs:{to:t.link,exact:t.exact}},[e("i",{class:"iconfont "+t.item.icon}),t._v("\n  "+t._s(t.item.text)+"\n")])}),[],!1,null,null,null);e.default=r.exports},327:function(t,e,n){"use strict";n.r(e);var i={name:"DropdownTransition",methods:{setHeight(t){t.style.height=t.scrollHeight+"px"},unsetHeight(t){t.style.height=""}}},s=(n(329),n(0)),o=Object(s.a)(i,(function(){return(0,this._self._c)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.default=o.exports},329:function(t,e,n){"use strict";n(316)},330:function(t,e,n){},331:function(t,e,n){},337:function(t,e,n){},338:function(t,e,n){},344:function(t,e,n){"use strict";n(330)},345:function(t,e,n){"use strict";n(331)},347:function(t,e,n){"use strict";n.r(e);var i=n(367),s=n(350),o=n(10);var r={name:"SidebarLinks",components:{SidebarGroup:i.default,SidebarLink:s.default},props:["items","depth","sidebarDepth"],data:()=>({openGroupIndex:0}),created(){this.refreshIndex()},watch:{$route(){this.refreshIndex()}},mounted(){},updated:function(){this.isInViewPortOfOne()},methods:{activationLink(){const t=decodeURIComponent(this.$route.fullPath);if(!t||""==t)return;const e=[].slice.call(document.querySelectorAll(".sidebar-link"));for(let n=0;n<e.length;n++)if(-1!=decodeURIComponent(e[n].getAttribute("href")).indexOf(t))return e[n].click(),void this.activationAnchor()},activationAnchor(){const t=[].slice.call(document.querySelectorAll(".header-anchor")).filter(t=>-1!=decodeURIComponent(this.$route.fullPath).indexOf(decodeURIComponent(t.hash)));null==t||t.length<1||null==t[0].offsetTop||setTimeout((function(){window.scrollTo(0,t[0].offsetTop+160)}),100)},isInViewPortOfOne(){const t=document.getElementsByClassName("sidebar")[0];let e=document.getElementsByClassName("active sidebar-link")[1];if(null!=e&&null!=e&&null!=e.offsetTop||(e=document.getElementsByClassName("active sidebar-link")[0]),null==e||null==e||null==e.offsetTop)return;const n=t.clientHeight||window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,i=e.offsetTop,s=e.offsetTop+e.offsetHeight,o=t.scrollTop;s<=n+o||(t.scrollTop=s+5-n);i>=o||(t.scrollTop=i-5)},refreshIndex(){const t=function(t,e){for(let n=0;n<e.length;n++){const i=e[n];if("group"===i.type&&i.children.some(e=>"page"===e.type&&Object(o.g)(t,e.path)))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive(t){return Object(o.g)(this.$route,t.regularPath)}}},a=n(0),l=Object(a.a)(r,(function(){var t=this,e=t._self._c;return t.items.length?e("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(n,i){return e("li",{key:i},["group"===n.type?e("SidebarGroup",{attrs:{item:n,open:i===t.openGroupIndex,collapsable:n.collapsable||n.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(i)}}}):e("SidebarLink",{attrs:{sidebarDepth:t.sidebarDepth,item:n}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=l.exports},349:function(t,e,n){"use strict";n.r(e);var i=n(323),s=n(327),o={components:{NavLink:i.default,DropdownTransition:s.default},data:()=>({open:!1}),props:{item:{required:!0}},methods:{toggle(){this.open=!this.open}}},r=(n(344),n(0)),a=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown-wrapper",class:{open:t.open}},[e("a",{staticClass:"dropdown-title",on:{click:t.toggle}},[e("span",{staticClass:"title"},[e("i",{class:"iconfont "+t.item.icon}),t._v("\n      "+t._s(t.item.text)+"\n    ")]),t._v(" "),e("span",{staticClass:"arrow",class:t.open?"down":"right"})]),t._v(" "),e("DropdownTransition",[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"nav-dropdown"},t._l(t.item.items,(function(n,i){return e("li",{key:n.link||i,staticClass:"dropdown-item"},["links"===n.type?e("h4",[t._v(t._s(n.text))]):t._e(),t._v(" "),"links"===n.type?e("ul",{staticClass:"dropdown-subitem-wrapper"},t._l(n.items,(function(t){return e("li",{key:t.link,staticClass:"dropdown-subitem"},[e("NavLink",{attrs:{item:t}})],1)})),0):e("NavLink",{attrs:{item:n}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=a.exports},350:function(t,e,n){"use strict";n.r(e);var i=n(10);var s={functional:!0,props:["item","sidebarDepth"],render(t,{parent:{$page:e,$site:n,$route:s,$themeConfig:o,$themeLocaleConfig:r},props:{item:a,sidebarDepth:l}}){const c=Object(i.g)(s,a.path),u="auto"===a.type?c||a.children.some(t=>Object(i.g)(s,a.basePath+"#"+t.slug)):c;return function(t,e,n,i){return t("router-link",{props:{to:e,activeClass:"",exactActiveClass:""},class:{active:i,"sidebar-link":!0}},n)}(t,a.path,a.title||a.path,u)}},o=(n(345),n(0)),r=Object(o.a)(s,void 0,void 0,!1,null,null,null);e.default=r.exports},353:function(t,e,n){"use strict";n(337)},355:function(t,e,n){"use strict";n(338)},356:function(t,e,n){},366:function(t,e,n){"use strict";n.r(e);var i=n(349),s=n(10),o={components:{NavLink:n(323).default,DropdownLink:i.default},computed:{userNav(){return this.$themeLocaleConfig.nav||this.$themeConfig.nav||[]},nav(){const{$site:{locales:t},userNav:e}=this;if(t&&Object.keys(t).length>1){const n=this.$page.path,i=this.$router.options.routes,s=this.$themeConfig.locales||{},o={text:this.$themeLocaleConfig.selectText||"Languages",items:Object.keys(t).map(e=>{const o=t[e],r=s[e]&&s[e].label||o.lang;let a;return o.lang===this.$lang?a=n:(a=n.replace(this.$localeConfig.path,e),i.some(t=>t.path===a)||(a=e)),{text:r,link:a}})};return[...e,o]}const n=this.$themeConfig.blogConfig||{},i=e.some(t=>!n.category||t.text===(n.category.text||"分类")),s=e.some(t=>!n.tag||t.text===(n.tag.text||"标签"));if(!i&&Object.hasOwnProperty.call(n,"category")){const t=n.category,i=this.$categories;e.splice(parseInt(t.location||2)-1,0,{items:i.list.map(t=>(t.link=t.path,t.text=t.name,t)),text:t.text||"分类",type:"links",icon:"reco-category"})}if(!s&&Object.hasOwnProperty.call(n,"tag")){const t=n.tag;e.splice(parseInt(t.location||3)-1,0,{link:"/tag/",text:t.text||"标签",type:"links",icon:"reco-tag"})}return e},userLinks(){return(this.nav||[]).map(t=>Object.assign(Object(s.l)(t),{items:(t.items||[]).map(s.l)}))},repoLink(){const{repo:t}=this.$themeConfig;return t?/^https?:/.test(t)?t:"https://github.com/"+t:""},repoLabel(){if(!this.repoLink)return;if(this.$themeConfig.repoLabel)return this.$themeConfig.repoLabel;const t=this.repoLink.match(/^https?:\/\/[^/]+/)[0],e=["GitHub","GitLab","Bitbucket"];for(let n=0;n<e.length;n++){const i=e[n];if(new RegExp(i,"i").test(t))return i}return"Source"}}},r=(n(353),n(0)),a=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.userLinks.length||t.repoLink?e("nav",{staticClass:"nav-links"},[t._l(t.userLinks,(function(t){return e("div",{key:t.link,staticClass:"nav-item"},["links"===t.type?e("DropdownLink",{attrs:{item:t}}):e("NavLink",{attrs:{item:t}})],1)})),t._v(" "),t.repoLink?e("a",{staticClass:"repo-link",attrs:{href:t.repoLink,target:"_blank",rel:"noopener noreferrer"}},[e("i",{class:"iconfont reco-"+t.repoLabel.toLowerCase()}),t._v("\n    "+t._s(t.repoLabel)+"\n    "),e("OutboundLink")],1):t._e()],2):t._e()}),[],!1,null,null,null);e.default=a.exports},367:function(t,e,n){"use strict";n.r(e);var i=n(10),s={name:"SidebarGroup",props:["item","open","collapsable","depth"],components:{DropdownTransition:n(327).default},beforeCreate(){this.$options.components.SidebarLinks=n(347).default},methods:{isActive:i.g}},o=(n(355),n(0)),r=Object(o.a)(s,(function(){var t=this,e=t._self._c;return e("section",{staticClass:"sidebar-group",class:[{collapsable:t.collapsable,"is-sub-group":0!==t.depth},"depth-"+t.depth]},[t.item.path?e("router-link",{staticClass:"sidebar-heading clickable",class:{open:t.open,active:t.isActive(t.$route,t.item.path)},attrs:{to:t.item.path},nativeOn:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]):e("p",{staticClass:"sidebar-heading",class:{open:t.open},on:{click:function(e){return t.$emit("toggle")}}},[e("span",[t._v(t._s(t.item.title))]),t._v(" "),t.collapsable?e("span",{staticClass:"arrow",class:t.open?"down":"right"}):t._e()]),t._v(" "),e("DropdownTransition",[t.open||!t.collapsable?e("SidebarLinks",{staticClass:"sidebar-group-items",attrs:{items:t.item.children,sidebarDepth:t.item.sidebarDepth,depth:t.depth+1}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=r.exports},374:function(t,e,n){"use strict";n(356)},397:function(t,e,n){"use strict";n.r(e);var i=n(347),s=n(366),o={name:"Sidebar",components:{SidebarLinks:i.default,NavLinks:s.default},props:["items"]},r=(n(374),n(0)),a=Object(r.a)(o,(function(){var t=this._self._c;return t("aside",{staticClass:"sidebar"},[this._t("top"),this._v(" "),t("NavLinks"),this._v(" "),t("SidebarLinks",{attrs:{depth:0,items:this.items}}),this._v(" "),this._t("bottom")],2)}),[],!1,null,null,null);e.default=a.exports}}]);