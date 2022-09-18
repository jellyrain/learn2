"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[912],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1631:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const l={sidebar_position:2},o=void 0,i={unversionedId:"web/JavaScript/NestJS/nest cli \u5e38\u7528\u547d\u4ee4",id:"web/JavaScript/NestJS/nest cli \u5e38\u7528\u547d\u4ee4",title:"nest cli \u5e38\u7528\u547d\u4ee4",description:"1. --help\uff1a",source:"@site/docs\\2-web\\3-JavaScript\\2-NestJS\\nest cli \u5e38\u7528\u547d\u4ee4.md",sourceDirName:"2-web/3-JavaScript/2-NestJS",slug:"/web/JavaScript/NestJS/nest cli \u5e38\u7528\u547d\u4ee4",permalink:"/learn2/web/JavaScript/NestJS/nest cli \u5e38\u7528\u547d\u4ee4",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"\u4ecb\u7ecd",permalink:"/learn2/web/JavaScript/NestJS/\u4ecb\u7ecd"},next:{title:"RESTful \u98ce\u683c",permalink:"/learn2/web/JavaScript/NestJS/RESTful \u98ce\u683c"}},c={},p=[{value:"1. <code>--help</code>\uff1a",id:"1---help",level:2},{value:"2. <code>g</code>\uff1a",id:"2-g",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"1---help"},"1. ",(0,a.kt)("inlineCode",{parentName:"h2"},"--help"),"\uff1a"),(0,a.kt)("p",null,"\u53ef\u4ee5\u67e5\u770b nestjs \u6240\u6709\u7684\u547d\u4ee4"),(0,a.kt)("h2",{id:"2-g"},"2. ",(0,a.kt)("inlineCode",{parentName:"h2"},"g"),"\uff1a"),(0,a.kt)("p",null,"\u6839\u636e \u9009\u9879 \u751f\u4ea7\u5bf9\u5e94\u7684\u6587\u4ef6"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/b56338e73ac148c4943f383fbebb9811.png",alt:null})),(0,a.kt)("p",null,"\u751f\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"user.controller.ts")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nest g co user\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u4e00\u4e2a\u547d\u4ee4\u751f\u6210 CURD\uff08controller\u3001module\u3001service\uff09"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"nest g resource user\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/a2d4ced17e4a44ac9c2a2471307e80e9.png",alt:null})))}u.isMDXComponent=!0}}]);