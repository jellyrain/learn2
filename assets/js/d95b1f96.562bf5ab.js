"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[425],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>v});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=t.createContext({}),c=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(a.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,s=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),v=o,d=m["".concat(a,".").concat(v)]||m[v]||u[v]||s;return n?t.createElement(d,i(i({ref:r},p),{},{components:n})):t.createElement(d,i({ref:r},p))}));function v(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=n.length,i=new Array(s);i[0]=m;var l={};for(var a in r)hasOwnProperty.call(r,a)&&(l[a]=r[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},534:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(7462),o=(n(7294),n(3905));const s={sidebar_position:6},i=void 0,l={unversionedId:"web/JavaScript/NestJS/Providers",id:"web/JavaScript/NestJS/Providers",title:"Providers",description:"Providers \u662f Nest \u7684\u4e00\u4e2a\u57fa\u672c\u6982\u5ff5\u3002\u8bb8\u591a\u57fa\u672c\u7684 Nest \u7c7b\u53ef\u80fd\u88ab\u89c6\u4e3a provider -> service, repository, factory, helper \u7b49\u7b49",source:"@site/docs/2-web/3-JavaScript/2-NestJS/Providers.md",sourceDirName:"2-web/3-JavaScript/2-NestJS",slug:"/web/JavaScript/NestJS/Providers",permalink:"/learn2/web/JavaScript/NestJS/Providers",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Session express\u7684\u5185\u5bb9",permalink:"/learn2/web/JavaScript/NestJS/Session express\u7684\u5185\u5bb9"},next:{title:"Module",permalink:"/learn2/web/JavaScript/NestJS/Module"}},a={},c=[{value:"1. \u57fa\u672c\u7528\u6cd5\uff1a",id:"1-\u57fa\u672c\u7528\u6cd5",level:2},{value:"2. \u7b2c\u4e8c\u79cd\u7528\u6cd5(\u81ea\u5b9a\u4e49\u540d\u79f0)\uff1a",id:"2-\u7b2c\u4e8c\u79cd\u7528\u6cd5\u81ea\u5b9a\u4e49\u540d\u79f0",level:2},{value:"3. \u81ea\u5b9a\u4e49\u6ce8\u5165\u503c\uff1a",id:"3-\u81ea\u5b9a\u4e49\u6ce8\u5165\u503c",level:2},{value:"4. \u5de5\u5382\u6a21\u5f0f\uff1a",id:"4-\u5de5\u5382\u6a21\u5f0f",level:2},{value:"5. \u5f02\u6b65\u6a21\u5f0f\uff1a",id:"5-\u5f02\u6b65\u6a21\u5f0f",level:2}],p={toc:c};function u(e){let{components:r,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Providers \u662f Nest \u7684\u4e00\u4e2a\u57fa\u672c\u6982\u5ff5\u3002\u8bb8\u591a\u57fa\u672c\u7684 Nest \u7c7b\u53ef\u80fd\u88ab\u89c6\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"provider")," -> ",(0,o.kt)("inlineCode",{parentName:"p"},"service, repository, factory, helper")," \u7b49\u7b49"),(0,o.kt)("p",null,"\u4ed6\u4eec\u90fd\u53ef\u4ee5\u901a\u8fc7 constructor \u6ce8\u5165\u4f9d\u8d56\u5173\u7cfb\u3002 \u8fd9\u610f\u5473\u7740\u5bf9\u8c61\u53ef\u4ee5\u5f7c\u6b64\u521b\u5efa\u5404\u79cd\u5173\u7cfb\uff0c\u5e76\u4e14\u201c\u8fde\u63a5\u201d\u5bf9\u8c61\u5b9e\u4f8b\u7684\u529f\u80fd\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53ef\u4ee5\u59d4\u6258\u7ed9 Nest \u8fd0\u884c\u65f6\u7cfb\u7edf"),(0,o.kt)("p",null,"Provider \u53ea\u662f\u4e00\u4e2a\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@Injectable()")," \u88c5\u9970\u5668\u6ce8\u91ca\u7684\u7c7b"),(0,o.kt)("h2",{id:"1-\u57fa\u672c\u7528\u6cd5"},"1. \u57fa\u672c\u7528\u6cd5\uff1a"),(0,o.kt)("p",null,"module \u5f15\u5165 service \u5728 providers \u6ce8\u5165"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/bb29915e1e9b4b14a8547cd41022e260.png",alt:null})),(0,o.kt)("p",null,"\u5728 Controller \u5c31\u53ef\u4ee5\u4f7f\u7528\u6ce8\u5165\u597d\u7684 service \u4e86"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/7882400e265e48dcad985b9a63e85ef6.png",alt:null})),(0,o.kt)("h2",{id:"2-\u7b2c\u4e8c\u79cd\u7528\u6cd5\u81ea\u5b9a\u4e49\u540d\u79f0"},"2. \u7b2c\u4e8c\u79cd\u7528\u6cd5(\u81ea\u5b9a\u4e49\u540d\u79f0)\uff1a"),(0,o.kt)("p",null,"\u7b2c\u4e00\u79cd\u7528\u6cd5\u5c31\u662f\u4e00\u4e2a\u8bed\u6cd5\u7cd6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Module } from "@nestjs/common";\nimport { UserService } from "./user.service";\nimport { UserController } from "./user.controller";\n\n@Module({\n  controllers: [UserController],\n  providers: [\n    // \u8be6\u7ec6\u5199\u6cd5\n    {\n      // \u81ea\u5b9a\u4e49\u540d\u79f0\n      provide: "jellyrain",\n      useClass: UserService,\n    },\n  ],\n})\nexport class UserModule {}\n')),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u540d\u79f0\u4e4b\u540e \u9700\u8981\u7528\u5bf9\u5e94\u7684 Inject \u53d6 \u4e0d\u7136\u4f1a\u627e\u4e0d\u5230\u7684"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/2a731c48c2b445cdb3821a782a2222ca.png",alt:null})),(0,o.kt)("h2",{id:"3-\u81ea\u5b9a\u4e49\u6ce8\u5165\u503c"},"3. \u81ea\u5b9a\u4e49\u6ce8\u5165\u503c\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Module } from "@nestjs/common";\nimport { UserService } from "./user.service";\nimport { UserController } from "./user.controller";\n\n@Module({\n  controllers: [UserController],\n  providers: [\n    {\n      provide: "Xiaoman",\n      useClass: UserService,\n    },\n    {\n      provide: "JD",\n      //  \u81ea\u5b9a\u4e49\u6ce8\u5165\u503c\n      useValue: ["TB", "PDD", "JD"],\n    },\n  ],\n})\nexport class UserModule {}\n')),(0,o.kt)("p",null,"\u4f7f\u7528\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/c29fcb2806ab498a804762300e07f823.png",alt:null})),(0,o.kt)("h2",{id:"4-\u5de5\u5382\u6a21\u5f0f"},"4. \u5de5\u5382\u6a21\u5f0f\uff1a"),(0,o.kt)("p",null,"\u5982\u679c\u670d\u52a1 \u4e4b\u95f4\u6709\u76f8\u4e92\u7684\u4f9d\u8d56 \u6216\u8005\u903b\u8f91\u5904\u7406 \u53ef\u4ee5\u4f7f\u7528 useFactory"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Module } from "@nestjs/common";\nimport { UserService } from "./user.service";\nimport { UserService2 } from "./user.service2";\nimport { UserService3 } from "./user.service3";\nimport { UserController } from "./user.controller";\n\n@Module({\n  controllers: [UserController],\n  providers: [\n    {\n      provide: "Xiaoman",\n      useClass: UserService,\n    },\n    {\n      provide: "JD",\n      useValue: ["TB", "PDD", "JD"],\n    },\n    UserService2,\n    {\n      provide: "Test",\n      inject: [UserService2],\n      useFactory(UserService2: UserService2) {\n        return new UserService3(UserService2);\n      },\n    },\n  ],\n})\nexport class UserModule {}\n')),(0,o.kt)("h2",{id:"5-\u5f02\u6b65\u6a21\u5f0f"},"5. \u5f02\u6b65\u6a21\u5f0f\uff1a"),(0,o.kt)("p",null,"useFactory \u8fd4\u56de\u4e00\u4e2a promise \u6216\u8005\u5176\u4ed6\u5f02\u6b65\u64cd\u4f5c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},'import { Module } from "@nestjs/common";\nimport { UserService } from "./user.service";\nimport { UserService2 } from "./user.service2";\nimport { UserService3 } from "./user.service3";\nimport { UserController } from "./user.controller";\n\n@Module({\n  controllers: [UserController],\n  providers: [\n    {\n      provide: "Xiaoman",\n      useClass: UserService,\n    },\n    {\n      provide: "JD",\n      useValue: ["TB", "PDD", "JD"],\n    },\n    UserService2,\n    {\n      provide: "Test",\n      inject: [UserService2],\n      useFactory(UserService2: UserService2) {\n        return new UserService3(UserService2);\n      },\n    },\n    {\n      provide: "sync",\n      async useFactory() {\n        return await new Promise((r) => {\n          setTimeout(() => {\n            r("sync");\n          }, 3000);\n        });\n      },\n    },\n  ],\n})\nexport class UserModule {}\n')))}u.isMDXComponent=!0}}]);