"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[683],{7043:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"guardian-flow",title:"Guardian Flow",description:"Description of the flow of guardian information in DEPA"},s=void 0,c={unversionedId:"flows/guardian-flow",id:"flows/guardian-flow",title:"Guardian Flow",description:"Description of the flow of guardian information in DEPA",source:"@site/internal/specification/flows/guardian-flow.md",sourceDirName:"flows",slug:"/flows/guardian-flow",permalink:"/specification/flows/guardian-flow",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/specification/flows/guardian-flow.md",tags:[],version:"current",lastUpdatedAt:1646639910,formattedLastUpdatedAt:"3/7/2022",frontMatter:{id:"guardian-flow",title:"Guardian Flow",description:"Description of the flow of guardian information in DEPA"},sidebar:"specification",previous:{title:"Data Flow",permalink:"/specification/flows/data-flow"},next:{title:"Nominee Flow",permalink:"/specification/flows/nominee-flow"}},u=[],f={toc:u};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Guardian flow details out how the guardianship is established and how Guardians can manage the consent lifecycle of the Data Principal"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Establishment of Guardianship")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"User registers itself as the guardian of another user on the DPs system. This is done by legal means or the user will appoint the guardian for himself. The process is specific to each DP and governed by them."),(0,r.kt)("li",{parentName:"ol"},"As a part of the guardian registration, DP will allocate the user-id to the guardian and maintain a relationship mapping with the Data principal."),(0,r.kt)("li",{parentName:"ol"},"Guardian using his own cm-id will initiate an account linking process. As a part of the linking process Guardian will be issued a Linking TOKEN and a Guardian TOKEN."),(0,r.kt)("li",{parentName:"ol"},"Now the guardian can manage the existing consents and give new consents.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Management of existing consents by the Guardian")),(0,r.kt)("p",null,"To Manage the existing consents lifecycle guardian\u2019s CM needs to fetch the list of consents from Data Principals CM. To achieve this guardian\u2019s CM will play the role of a DC as well as a CM."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Guardian\u2019s CM provider as a DC will raise the request to fetch the existing consents which are to be managed by the Guardian."),(0,r.kt)("li",{parentName:"ul"},"Guardian\u2019s CM provider as CM will collect the Guardian\u2019s consent to fetch the consents. The consent artifact created by the CM here will have the Guardian TOKEN encapsulated for Data Principals CM to verify the relationship. Consent Artifact will also have the CM of Data Principal being mapped as DP to provide the consents.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Honoring of Consent lifecycle events by the DC")),(0,r.kt)("p",null,"User cases to honor the consent lifecycle events will fall in two broad categories:-"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Guardian\u2019s CM-id registered with DC - In this case the guardian will mention his cm-id and all the consent requests will flow to his consent manager by default. Here DC can easily honor the consent life cycle events generated by the Guardian\u2019s CM."),(0,r.kt)("li",{parentName:"ol"},"Data Principals CM-id registered with CM - Here DC will need the proof that the guardian is indeed the guardian of the Data Principal to honor the events. Here the events will be accompanied by the Guardian TOKEN issued by the DP as the proof of being guardian.")))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(s,".").concat(d)]||p[d]||f[d]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);