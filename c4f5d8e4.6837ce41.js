/*! For license information please see c4f5d8e4.6837ce41.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{115:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),l=a.n(r),s=a(126),i=a.n(s),o=a(131),c=a(127),d=a(125),u=a(128),m=a(116),h=a.n(m),f=a(143),p=a(142);const b=[{title:"No image avatar?",imageUrl:"img/feature_no_image_avatar.svg",description:l.a.createElement(l.a.Fragment,null,"Automatic coloured avatar generated using user's initials and username/email to generate a randomized background colour."),special:!0},{title:"Fully customizable",imageUrl:"img/feature_fully_costomizable.svg",description:l.a.createElement(l.a.Fragment,null,"Fully customizable avatars, ability to change size, border radius, border width, border colour or set a theme and add your own CSS.")},{title:"Own dropdown elements",imageUrl:"img/feature_own_dropdown_elements.svg",description:l.a.createElement(l.a.Fragment,null,"Built in dropdown element for concatenated user avatar list, with the ability to include customizable dropdown elements.")}];function g({imageUrl:e,title:t,description:a,special:n}){const r=Object(u.a)(e);return l.a.createElement("div",{className:i()("col col--4",h.a.feature)},r&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:h.a.featureImage,src:r,alt:t,style:{width:"auto"}})),l.a.createElement("h3",null,t),l.a.createElement("p",null,a),l.a.createElement(v,{isSpecial:n}))}function v({isSpecial:e}){if(!e)return null;const[t,a]=Object(r.useState)({firstName:"John",lastName:"Smith",username:"john.smith@sample.com",image:null}),n=e=>{const{value:t,name:n}=e.target;a(e=>({...e,[n]:t}))};return l.a.createElement("div",null,l.a.createElement("p",null,"Try it out!"),l.a.createElement("div",{className:"tryme"},l.a.createElement("div",null,l.a.createElement(f.a,{size:80,user:t})),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("input",{className:"doco-input",type:"text",placeholder:"Username",name:"username",value:t.username,onChange:n})),l.a.createElement("div",null,l.a.createElement("input",{className:"doco-input",type:"text",placeholder:"First name",name:"firstName",value:t.firstName,onChange:n})),l.a.createElement("div",null,l.a.createElement("input",{className:"doco-input",type:"text",placeholder:"Last name",name:"lastName",value:t.lastName,onChange:n})))))}t.default=function(){const e=Object(d.a)(),{siteConfig:t={}}=e,[a,s]=Object(r.useState)(null);return l.a.createElement(o.a,{title:`Hello from ${t.title}`,description:"Description will go into a meta tag in <head />"},l.a.createElement("header",{className:i()("hero hero--primary-dark",h.a.heroBanner),style:{overflow:"initial"}},l.a.createElement("div",{className:"container",style:{width:"60%"}},l.a.createElement("h1",{className:"hero__title"},t.title),l.a.createElement("p",{className:"hero__subtitle"},t.tagline),l.a.createElement("div",{className:h.a.buttons},l.a.createElement(c.a,{className:i()("button button--outline button--secondary button--lg",h.a.getStarted),to:Object(u.a)("docs/installation")},"Get Started"))),l.a.createElement("div",{className:"container",style:{width:"40%",textAlign:"left"}},l.a.createElement(f.b,{maxHeight:260,minWidth:300,size:80,users:p.a,isExpanded:!0},({index:e,user:t})=>l.a.createElement("div",{style:{background:a===t&&"rgba(103, 66, 118, 0.3)"},onClick:()=>s(t)},l.a.createElement(f.a,{size:50,user:t}),l.a.createElement("span",null,t.firstName+" "+t.lastName))))),l.a.createElement("main",null,b&&b.length&&l.a.createElement("section",{className:h.a.features},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},b.map((e,t)=>l.a.createElement(g,Object(n.a)({key:t},e))))))))}},130:function(e,t,a){"use strict";var n=a(0);const r=a.n(n).a.createContext({isDarkTheme:!1,setLightTheme:()=>{},setDarkTheme:()=>{}});t.a=r},131:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(139),s=a(125),i=a(128);const o="",c="dark";var d=()=>{const{siteConfig:{themeConfig:{disableDarkMode:e}}={}}=Object(s.a)(),[t,a]=Object(n.useState)("undefined"!=typeof document?document.documentElement.getAttribute("data-theme"):o),r=Object(n.useCallback)(e=>{try{localStorage.setItem("theme",e)}catch(t){console.error(t)}},[a]),l=Object(n.useCallback)(()=>{a(o),r(o)},[]),i=Object(n.useCallback)(()=>{a(c),r(c)},[]);return Object(n.useEffect)(()=>{document.documentElement.setAttribute("data-theme",t)},[t]),Object(n.useEffect)(()=>{if(!e)try{const e=localStorage.getItem("theme");null!==e&&a(e)}catch(t){console.error(t)}},[a]),{isDarkTheme:t===c,setLightTheme:l,setDarkTheme:i}},u=a(130);var m=function(e){const{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}=d();return r.a.createElement(u.a.Provider,{value:{isDarkTheme:t,setLightTheme:a,setDarkTheme:n}},e.children)},h=a(1),f=a(127),p=()=>null,b=a(135),g=a.n(b),v=a(126),E=a.n(v),_=a(86),k=a.n(_);const y=()=>r.a.createElement("span",{className:E()(k.a.toggle,k.a.moon)}),x=()=>r.a.createElement("span",{className:E()(k.a.toggle,k.a.sun)});var w=function(e){const{isClient:t}=Object(s.a)();return r.a.createElement(g.a,Object(h.a)({disabled:!t,icons:{checked:r.a.createElement(y,null),unchecked:r.a.createElement(x,null)}},e))},N=a(132),O=a(133);var j=function(e){const[t,a]=Object(n.useState)(e);return Object(n.useEffect)(()=>{const e=()=>a(window.location.hash);return window.addEventListener("hashchange",e),()=>window.removeEventListener("hashchange",e)},[]),[t,a]};var C=e=>{const[t,a]=Object(n.useState)(!0),[r,l]=Object(n.useState)(!1),[s,i]=Object(n.useState)(0),[o,c]=Object(n.useState)(0),d=Object(n.useCallback)(e=>{null!==e&&c(e.getBoundingClientRect().height)},[]),u=Object(O.b)(),[m,h]=j(u.hash),f=()=>{const e=window.pageYOffset||document.documentElement.scrollTop;if(e<o)return;if(r)return l(!1),a(!1),void i(e);const t=document.documentElement.scrollHeight-o,n=window.innerHeight;s&&e>s?a(!1):e+n<t&&a(!0),i(e)};return Object(n.useEffect)(()=>{if(e)return window.addEventListener("scroll",f),()=>{window.removeEventListener("scroll",f)}},[s,o]),Object(n.useEffect)(()=>{e&&(a(!0),h(u.hash))},[u]),Object(n.useEffect)(()=>{e&&m&&l(!0)},[m]),{navbarRef:d,isNavbarVisible:t}},S=a(134),T=a(87),z=a.n(T);function L({to:e,href:t,label:a,position:n,...l}){const s=Object(i.a)(e);return r.a.createElement(f.a,Object(h.a)({className:"navbar__item navbar__link"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{activeClassName:"navbar__link--active",to:s},l),a)}var D=function(){const e=Object(s.a)(),{siteConfig:t={}}=e,{baseUrl:a,themeConfig:l={}}=t,{navbar:o={},disableDarkMode:c=!1}=l,{title:d,logo:u={},links:m=[],hideOnScroll:b=!1}=o,[g,v]=Object(n.useState)(!1),[_,k]=Object(n.useState)(!1),{isDarkTheme:y,setLightTheme:x,setDarkTheme:O}=Object(N.a)(),{navbarRef:j,isNavbarVisible:T}=C(b);Object(S.a)(g);const D=Object(n.useCallback)(()=>{v(!0)},[v]),M=Object(n.useCallback)(()=>{v(!1)},[v]),B=Object(n.useCallback)(e=>e.target.checked?O():x(),[x,O]),F=u.href||a,P=/http/.test(F)?{rel:"noopener noreferrer",target:"_blank"}:null,I=u.srcDark&&y?u.srcDark:u.src,R=Object(i.a)(I);return r.a.createElement("nav",{ref:j,className:E()("navbar","navbar--light","navbar--fixed-top",{"navbar-sidebar--show":g,[z.a.navbarHideable]:b,[z.a.navbarHidden]:!T})},r.a.createElement("div",{className:"navbar__inner"},r.a.createElement("div",{className:"navbar__items"},r.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:D,onKeyDown:D},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement(f.a,Object(h.a)({className:"navbar__brand",to:F},P),null!=u&&r.a.createElement("img",{className:"navbar__logo",src:R,alt:u.alt}),null!=d&&r.a.createElement("strong",{className:_?z.a.hideLogoText:""},d)),m.filter(e=>"right"!==e.position).map((e,t)=>r.a.createElement(L,Object(h.a)({},e,{key:t})))),r.a.createElement("div",{className:"navbar__items navbar__items--right"},m.filter(e=>"right"===e.position).map((e,t)=>r.a.createElement(L,Object(h.a)({},e,{key:t}))),!c&&r.a.createElement(w,{className:z.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:y,onChange:B}),r.a.createElement(p,{handleSearchBarToggle:k,isSearchBarExpanded:_}))),r.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:M}),r.a.createElement("div",{className:"navbar-sidebar"},r.a.createElement("div",{className:"navbar-sidebar__brand"},r.a.createElement(f.a,Object(h.a)({className:"navbar__brand",onClick:M,to:F},P),null!=u&&r.a.createElement("img",{className:"navbar__logo",src:R,alt:u.alt}),null!=d&&r.a.createElement("strong",null,d)),!c&&g&&r.a.createElement(w,{"aria-label":"Dark mode toggle in sidebar",checked:y,onChange:B})),r.a.createElement("div",{className:"navbar-sidebar__items"},r.a.createElement("div",{className:"menu"},r.a.createElement("ul",{className:"menu__list"},m.map((e,t)=>r.a.createElement("li",{className:"menu__list-item",key:t},r.a.createElement(L,Object(h.a)({className:"menu__link"},e,{onClick:M})))))))))},M=a(88),B=a.n(M);function F({to:e,href:t,label:a,...n}){const l=Object(i.a)(e);return r.a.createElement(f.a,Object(h.a)({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:l},n),a)}const P=({url:e,alt:t})=>r.a.createElement("img",{className:"footer__logo",alt:t,src:e});var I=function(){const e=Object(s.a)(),{siteConfig:t={}}=e,{themeConfig:a={}}=t,{footer:n}=a,{copyright:l,links:o=[],logo:c={}}=n||{},d=Object(i.a)(c.src);return n?r.a.createElement("footer",{className:E()("footer",{"footer--dark":"dark"===n.style})},r.a.createElement("div",{className:"container"},o&&o.length>0&&r.a.createElement("div",{className:"row footer__links"},o.map((e,t)=>r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((e,t)=>e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(F,e)))):null))),(c||l)&&r.a.createElement("div",{className:"text--center"},c&&c.src&&r.a.createElement("div",{className:"margin-bottom--sm"},c.href?r.a.createElement("a",{href:c.href,target:"_blank",rel:"noopener noreferrer",className:B.a.footerLogoLink},r.a.createElement(P,{alt:c.alt,url:d})):r.a.createElement(P,{alt:c.alt,url:d})),l))):null};a(89);t.a=function(e){const{siteConfig:t={}}=Object(s.a)(),{favicon:a,title:n,themeConfig:{image:o},url:c}=t,{children:d,title:u,noFooter:h,description:f,image:p,keywords:b,permalink:g,version:v}=e,E=u?`${u} | ${n}`:n,_=p||o,k=c+Object(i.a)(_),y=Object(i.a)(a);return r.a.createElement(m,null,r.a.createElement(l.a,null,r.a.createElement("html",{lang:"en"}),r.a.createElement("meta",{httpEquiv:"x-ua-compatible",content:"ie=edge"}),E&&r.a.createElement("title",null,E),E&&r.a.createElement("meta",{property:"og:title",content:E}),a&&r.a.createElement("link",{rel:"shortcut icon",href:y}),f&&r.a.createElement("meta",{name:"description",content:f}),f&&r.a.createElement("meta",{property:"og:description",content:f}),v&&r.a.createElement("meta",{name:"docsearch:version",content:v}),b&&b.length&&r.a.createElement("meta",{name:"keywords",content:b.join(",")}),_&&r.a.createElement("meta",{property:"og:image",content:k}),_&&r.a.createElement("meta",{property:"twitter:image",content:k}),_&&r.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${E}`}),g&&r.a.createElement("meta",{property:"og:url",content:c+g}),r.a.createElement("meta",{name:"twitter:card",content:"summary"})),r.a.createElement(D,null),r.a.createElement("div",{className:"main-wrapper"},d),!h&&r.a.createElement(I,null))}},132:function(e,t,a){"use strict";var n=a(0),r=a(130);t.a=function(){return Object(n.useContext)(r.a)}},133:function(e,t,a){"use strict";var n=a(17);a.d(t,"a",(function(){return n.c})),a.d(t,"b",(function(){return n.d}))},134:function(e,t,a){"use strict";var n=a(0);t.a=function(e=!0){Object(n.useEffect)(()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"}),[e])}},135:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),l=a(0),s=m(l),i=m(a(126)),o=m(a(8)),c=m(a(136)),d=m(a(137)),u=a(138);function m(e){return e&&e.__esModule?e:{default:e}}var h=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,u.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,u.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,u.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,r=(t.icons,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(t,["className","icons"])),l=(0,i.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return s.default.createElement("div",{className:l,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},s.default.createElement("div",{className:"react-toggle-track"},s.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),s.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),s.default.createElement("div",{className:"react-toggle-thumb"}),s.default.createElement("input",n({},r,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(l.PureComponent);t.default=h,h.displayName="Toggle",h.defaultProps={icons:{checked:s.default.createElement(c.default,null),unchecked:s.default.createElement(d.default,null)}},h.propTypes={checked:o.default.bool,disabled:o.default.bool,defaultChecked:o.default.bool,onChange:o.default.func,onFocus:o.default.func,onBlur:o.default.func,className:o.default.string,name:o.default.string,value:o.default.string,id:o.default.string,"aria-labelledby":o.default.string,"aria-label":o.default.string,icons:o.default.oneOfType([o.default.bool,o.default.shape({checked:o.default.node,unchecked:o.default.node})])}},136:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},l.default.createElement("title",null,"switch-check"),l.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}},137:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(0),l=(n=r)&&n.__esModule?n:{default:n};t.default=function(){return l.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},l.default.createElement("title",null,"switch-x"),l.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},138:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var n=e.pageX;if(void 0!==n)return{x:n,y:e.pageY}}return{x:0,y:0}}},142:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=[{firstName:"John",lastName:"Smith",username:"asddas@dasasd.com",image:"https://x"},{firstName:"Bob",lastName:"Doe",username:"asdazxc@asdasd.com",image:null},{firstName:"Janna",lastName:"Doe",username:"asdazxfdfsdc@asddasd.com",image:"https://i.imgur.com/1sZ4giz.png"},{firstName:"Bob",lastName:"Doe",username:"asdazxsdffdc@asddasd.com",image:null},{firstName:"Kayly",lastName:"Brooke",username:"asdxazxsdffddc@asdasd.com",image:null},{firstName:"Kayly",lastName:"Brooke",username:"asdxazxsBrookedffddc@asdasd.com",image:null},{firstName:"Kelvin",lastName:"Ridge",username:"asdxazxsdfRidgefddc@asdasd.com",image:null}]},143:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(0),r=a.n(n);!function(e,t){if("undefined"==typeof document)return t;e=e||"";var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}('.react-user-list__wrapper > ul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.react-user-list__avatar {\n  box-sizing: border-box; }\n\n.react-user-list__expanded-wrapper:after, .react-user-list__expanded-wrapper:before {\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n  visibility: visible; }\n\n.react-user-list__expanded-wrapper:after {\n  border-width: 14px;\n  border-bottom-color: white;\n  top: -28px;\n  left: 14px; }\n\n.react-user-list__expanded-wrapper:before {\n  border-width: 14px;\n  border-bottom-color: red;\n  top: -28px;\n  left: 14px; }\n\n.react-user-list__expanded-wrapper {\n  display: none; }\n  .is-visible .react-user-list__expanded-wrapper {\n    display: block;\n    animation: showNav 250ms ease-in-out both; }\n\n.react-user-list__wrapper {\n  display: inline-flex;\n  align-items: center;\n  position: relative; }\n  .react-user-list__wrapper ul {\n    padding-left: 12px;\n    font-family: Helvetica, Arial, Georgia, sans-serif;\n    display: inline-flex;\n    position: relative;\n    flex-direction: row-reverse; }\n    .react-user-list__wrapper ul li {\n      margin-left: -12px;\n      display: inline-block; }\n\n.react-user-list__avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.react-user-list__avatar {\n  width: 40px;\n  height: 40px;\n  user-select: none;\n  overflow: hidden;\n  border-style: solid;\n  border-radius: 50%;\n  border-width: 2px;\n  border-color: white;\n  color: white; }\n  .react-user-list__avatar img {\n    height: auto;\n    width: 100%; }\n\n.react-user-list__extra > div {\n  background: rgba(0, 0, 0, 0.15);\n  border-radius: 3px;\n  padding: 1px 6px;\n  margin-left: 4px;\n  color: black;\n  filter: invert(100%);\n  display: inline-block; }\n\n.react-user-list__expanded {\n  position: absolute;\n  top: 0;\n  left: 0; }\n  .react-user-list__expanded-wrapper {\n    position: relative;\n    box-shadow: 0 4px 20px 4px rgba(0, 20, 60, 0.1), 0 4px 80px -8px rgba(0, 20, 60, 0.2); }\n  .react-user-list__expanded-content {\n    transform: translateY(0px);\n    align-self: auto;\n    background: white;\n    border-radius: 3px;\n    color: #333;\n    padding: 8px;\n    width: auto;\n    overflow: auto; }\n    .react-user-list__expanded-content > * {\n      display: flex;\n      align-items: center;\n      align-content: stretch;\n      padding: 8px;\n      border-radius: 3px;\n      cursor: pointer;\n      transition: background-color 0.2s ease-in-out; }\n      .react-user-list__expanded-content > *:hover {\n        background-color: rgba(0, 0, 0, 0.1); }\n      .react-user-list__expanded-content > * + * {\n        margin-top: 2px; }\n  .react-user-list__expanded .react-user-list__user {\n    padding-right: 8px; }\n\n@keyframes showNav {\n  0% {\n    opacity: 0;\n    transform: translateY(0px); }\n  100% {\n    opacity: 1;\n    transform: translateY(14px); } }\n\n.react-user-list__scrollbar::-webkit-scrollbar {\n  width: 12px;\n  height: 12px;\n  background-color: transparent;\n  opacity: 0.6; }\n  .react-user-list__scrollbar::-webkit-scrollbar-track {\n    background-color: rgba(0, 0, 0, 0.1); }\n  .react-user-list__scrollbar::-webkit-scrollbar-thumb {\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);\n    background-color: rgba(0, 0, 0, 0.3); }\n');var l=function(){return(l=Object.assign||function(e){for(var t,a=1,n=arguments.length;a<n;a++)for(var r in t=arguments[a])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};var s="2",i="white",o={size:parseInt("40",10),borderWidth:parseInt(s,10),borderColor:i,borderRadius:"rounded",maxItems:3,theme:"default"},c=function(e){var t,a=e.user,s=e.size,i=void 0===s?o.size:s,c=e.borderWidth,d=e.borderRadius,u=e.borderColor,m=e.tag,h=void 0===m?"div":m,f=Object(n.useState)(a.image),p=f[0],b=f[1],g=h,v=l({},i!==o.size&&{width:i+"px",height:i+"px"},c!==o.borderWidth&&{borderWidth:c},u!==o.borderColor&&{borderColor:u},d!==o.borderRadius&&{borderRadius:d},{fontSize:i/3+"px"}),E=a.firstName.charAt(0)+a.lastName.charAt(0),_={background:p?"rgba(0,0,0,0.5)":(t=a.username,"#"+function(e){var t=(e>>24&255).toString(16)+(e>>16&255).toString(16)+(e>>8&255).toString(16)+(255&e).toString(16);return(t+="000000").substring(0,6)}(function(e){for(var t=0,a=0;a<e.length;a+=1)t=e.charCodeAt(a)+((t<<5)-t);return t}(t)))};return r.a.createElement(g,{className:"react-user-list__user"},r.a.createElement("div",{className:"react-user-list__avatar",style:l({},v,_)},p?r.a.createElement("img",{onError:function(){b(null)},src:p,alt:E}):E))};t.b=function(e){var t=e.users,a=e.usersLength,s=e.theme,i=void 0===s?o.theme:s,d=e.size,u=void 0===d?o.size:d,m=e.borderRadius,h=e.maxItems,f=void 0===h?o.maxItems:h,p=e.borderWidth,b=e.borderColor,g=e.children,v=e.toggleListOnHover,E=void 0===v||v,_=e.minWidth,k=void 0===_?"240px":_,y=e.maxHeight,x=void 0===y?"200px":y,w=e.isExpanded,N=void 0!==w&&w,O=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a}(e,["users","usersLength","theme","size","borderRadius","maxItems","borderWidth","borderColor","children","toggleListOnHover","minWidth","maxHeight","isExpanded"]),j=Object(n.useState)(N),C=j[0],S=j[1],T=a||t.length-f,z=E?{onMouseEnter:function(){return S(!0)},onMouseLeave:function(){return S(!1)}}:{};return r.a.createElement("div",l({},z,{className:"react-user-list__wrapper react-user-list__"+i+" "+(C?"is-visible":"")},O),r.a.createElement("ul",null,t.slice(0,f).reverse().map((function(e,t){return r.a.createElement(c,{key:t,user:e,size:u,borderWidth:p,borderColor:b,borderRadius:m,tag:"li"})}))),T>0&&r.a.createElement("div",{className:"react-user-list__extra",style:{fontSize:u/3+"px"}},r.a.createElement("div",null,"+",T)),g&&C&&r.a.createElement("div",{className:"react-user-list__expanded"},r.a.createElement("div",{className:"react-user-list__expanded-wrapper",style:{minWidth:k}},r.a.createElement("div",{className:"react-user-list__expanded-content react-user-list__scrollbar",style:{maxHeight:x,marginTop:u+"px"}},t.map((function(e,t){return r.a.createElement(n.Fragment,{key:e.username},g({index:t,user:e}))}))))))}}}]);