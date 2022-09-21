"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2452],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},s),{},{components:r})):n.createElement(m,o({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7526:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_position:3},o=void 0,l={unversionedId:"Web/JavaScript/Prettier/Prettier \u914d\u7f6e\u6587\u4ef6",id:"Web/JavaScript/Prettier/Prettier \u914d\u7f6e\u6587\u4ef6",title:"Prettier \u914d\u7f6e\u6587\u4ef6",description:"1. .prettierrc.js\uff1a",source:"@site/docs\\2-Web\\3-JavaScript\\4-Prettier\\Prettier \u914d\u7f6e\u6587\u4ef6.md",sourceDirName:"2-Web/3-JavaScript/4-Prettier",slug:"/Web/JavaScript/Prettier/Prettier \u914d\u7f6e\u6587\u4ef6",permalink:"/learn2/Web/JavaScript/Prettier/Prettier \u914d\u7f6e\u6587\u4ef6",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Prettier \u4f7f\u7528",permalink:"/learn2/Web/JavaScript/Prettier/Prettier \u4f7f\u7528"},next:{title:"ESLint + Prettier",permalink:"/learn2/Web/JavaScript/Prettier/ESLint + Prettier"}},c={},p=[{value:"1. <code>.prettierrc.js</code>\uff1a",id:"1-prettierrcjs",level:2},{value:"2. <code>.prettierignore</code>\uff1a",id:"2-prettierignore",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"1-prettierrcjs"},"1. ",(0,i.kt)("inlineCode",{parentName:"h2"},".prettierrc.js"),"\uff1a"),(0,i.kt)("p",null,"\u683c\u5f0f\u5316\u89c4\u5219\u6587\u4ef6\uff08\u6309\u4f18\u5148\u7ea7\u7531\u9ad8\u81f3\u4f4e\u6392\u5217\uff09"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'//\u6b64\u5904\u7684\u89c4\u5219\u4f9b\u53c2\u8003\uff0c\u5176\u4e2d\u591a\u534a\u5176\u5b9e\u90fd\u662f\u9ed8\u8ba4\u503c\uff0c\u53ef\u4ee5\u6839\u636e\u4e2a\u4eba\u4e60\u60ef\u6539\u5199\nmodule.exports = {\n  printWidth: 80, //\u5355\u884c\u957f\u5ea6\n  tabWidth: 2, //\u7f29\u8fdb\u957f\u5ea6\n  useTabs: false, //\u4f7f\u7528\u7a7a\u683c\u4ee3\u66fftab\u7f29\u8fdb\n  semi: true, //\u53e5\u672b\u4f7f\u7528\u5206\u53f7\n  singleQuote: true, //\u4f7f\u7528\u5355\u5f15\u53f7\n  quoteProps: "as-needed", //\u4ec5\u5728\u5fc5\u9700\u65f6\u4e3a\u5bf9\u8c61\u7684key\u6dfb\u52a0\u5f15\u53f7\n  jsxSingleQuote: true, // jsx\u4e2d\u4f7f\u7528\u5355\u5f15\u53f7\n  trailingComma: "all", //\u591a\u884c\u65f6\u5c3d\u53ef\u80fd\u6253\u5370\u5c3e\u968f\u9017\u53f7\n  bracketSpacing: true, //\u5728\u5bf9\u8c61\u524d\u540e\u6dfb\u52a0\u7a7a\u683c-eg: { foo: bar }\n  jsxBracketSameLine: true, //\u591a\u5c5e\u6027html\u6807\u7b7e\u7684\u2018>\u2019\u6298\u884c\u653e\u7f6e\n  arrowParens: "always", //\u5355\u53c2\u6570\u7bad\u5934\u51fd\u6570\u53c2\u6570\u5468\u56f4\u4f7f\u7528\u5706\u62ec\u53f7-eg: (x) => x\n  requirePragma: false, //\u65e0\u9700\u9876\u90e8\u6ce8\u91ca\u5373\u53ef\u683c\u5f0f\u5316\n  insertPragma: false, //\u5728\u5df2\u88abpreitter\u683c\u5f0f\u5316\u7684\u6587\u4ef6\u9876\u90e8\u52a0\u4e0a\u6807\u6ce8\n  proseWrap: "preserve", //\u4e0d\u77e5\u9053\u600e\u4e48\u7ffb\u8bd1\n  htmlWhitespaceSensitivity: "ignore", //\u5bf9HTML\u5168\u5c40\u7a7a\u767d\u4e0d\u654f\u611f\n  vueIndentScriptAndStyle: false, //\u4e0d\u5bf9vue\u4e2d\u7684script\u53castyle\u6807\u7b7e\u7f29\u8fdb\n  endOfLine: "lf", //\u7ed3\u675f\u884c\u5f62\u5f0f\n  embeddedLanguageFormatting: "auto", //\u5bf9\u5f15\u7528\u4ee3\u7801\u8fdb\u884c\u683c\u5f0f\u5316\n};\n')),(0,i.kt)("h2",{id:"2-prettierignore"},"2. ",(0,i.kt)("inlineCode",{parentName:"h2"},".prettierignore"),"\uff1a"),(0,i.kt)("p",null,"\u683c\u5f0f\u5316\u5ffd\u7565\u6587\u4ef6"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ignore"},"# Ignore artifacts:\nbuild\ncoverage\n\n# Ignore all HTML files:\n*.html\n")))}u.isMDXComponent=!0}}]);