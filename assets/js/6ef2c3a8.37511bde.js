"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[650],{5093:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return f},default:function(){return l}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],s={id:"subscriptions-notifications",title:"Subscriptions and Notifications",description:"Everything you need to know how subscriptions and notifications work within the consent framework"},c=void 0,p={unversionedId:"consent-artefact/subscriptions-notifications",id:"consent-artefact/subscriptions-notifications",title:"Subscriptions and Notifications",description:"Everything you need to know how subscriptions and notifications work within the consent framework",source:"@site/internal/learn/consent-artefact/subscitpions-notifications.md",sourceDirName:"consent-artefact",slug:"/consent-artefact/subscriptions-notifications",permalink:"/learn/consent-artefact/subscriptions-notifications",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/learn/consent-artefact/subscitpions-notifications.md",tags:[],version:"current",lastUpdatedAt:1646644554,formattedLastUpdatedAt:"3/7/2022",frontMatter:{id:"subscriptions-notifications",title:"Subscriptions and Notifications",description:"Everything you need to know how subscriptions and notifications work within the consent framework"},sidebar:"learn",previous:{title:"About",permalink:"/learn/consent-artefact/"},next:{title:"Data request type",permalink:"/learn/consent-artefact/request-type"}},f=[],u={toc:f};function l(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The communication between different entities in the ecosystem is done in a REST like manner. DEPA revolves around a non-blocking REST structure, i.e., via the use of events and notifications. In the current specification we use the following notification and event types:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Acknowledgement Notification")),"\nAn acknowledgement by the end party on receiving the request. This is triggered by the gateway to the entity who raised the request."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Error Notification")),"\nAn error notification informs about the error conditions to the entity from where the request originated. This is triggered by the gateway to the entity who raised the request."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"PrepareData Notification")),"\nA notification from DC to DP via the gateway that he can now start preparing the data for retrieval. This notification is triggered by the DC on receiving the consent from the CM."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"DataReady Notification")),"\nA notification from DP to DC via the gateway that he can now start retrieving the data. This notification is triggered by the DP post data readiness."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"DataTx Notification")),"\nA notification to inform the gateway and the CM on the state of data transfer by the DP."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"DataRx Notification")),"\nA notification by the DC to inform gateway and CM on the state of receiving the requested data."))}l.isMDXComponent=!0},3905:function(t,e,n){n.d(e,{Zo:function(){return f},kt:function(){return d}});var r=n(7294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},f=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},l=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,c=t.parentName,f=s(t,["components","mdxType","originalType","parentName"]),l=p(n),d=i,m=l["".concat(c,".").concat(d)]||l[d]||u[d]||o;return n?r.createElement(m,a(a({ref:e},f),{},{components:n})):r.createElement(m,a({ref:e},f))}));function d(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=l;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"}}]);