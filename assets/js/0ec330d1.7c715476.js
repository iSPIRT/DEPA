"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[999],{5570:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return f},toc:function(){return s},default:function(){return p}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],c={id:"data-flow",title:"Data Flow",description:"Description of the flow of data in DEPA"},l=void 0,f={unversionedId:"flows/data-flow",id:"flows/data-flow",title:"Data Flow",description:"Description of the flow of data in DEPA",source:"@site/internal/specification/flows/data-flow.md",sourceDirName:"flows",slug:"/flows/data-flow",permalink:"/specification/flows/data-flow",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/specification/flows/data-flow.md",tags:[],version:"current",lastUpdatedAt:1646639910,formattedLastUpdatedAt:"3/7/2022",frontMatter:{id:"data-flow",title:"Data Flow",description:"Description of the flow of data in DEPA"},sidebar:"specification",previous:{title:"Consent Flow",permalink:"/specification/flows/consent-flow"},next:{title:"Guardian Flow",permalink:"/specification/flows/guardian-flow"}},s=[],d={toc:s};function p(t){var e=t.components,c=(0,o.Z)(t,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,c,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Data flow is initiated by the DC to pull the data from the DP. The flow is initiated post the Data Principal has shared the consent artifact with the DC. DC can fetch the data till the consent is valid and meets the conditions defined by the consent artifact."),(0,i.kt)("p",null,"Sequence Diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"dataFlow",src:n(3673).Z,title:"dataFlow",width:"591",height:"872"})),(0,i.kt)("p",null,"Details of the data flow-"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"DC sends a notification for DP to prepare data. This request will encapsulate the public key in JWK format which needs to be used by the DP for sharing the encrypted data fetch URL and data access token."),(0,i.kt)("li",{parentName:"ol"},"DataReadyNotification is triggered by the DP to notify the DC that it can now fetch the data from the shared url. As a part of the notification are the encrypted Data Access Token which will be required by the DC to fetch the data."),(0,i.kt)("li",{parentName:"ol"},"DC verifies the token and sends out the acknowledgement notification."),(0,i.kt)("li",{parentName:"ol"},"DC uses the provided endpoint and the access token to fetch the data from DP. Both the parties exchange data over mTLS connection."),(0,i.kt)("li",{parentName:"ol"},"DC sends out the DataRxNotifications to inform the receiving of the data."),(0,i.kt)("li",{parentName:"ol"},"DP sends out the DataTxNotifications to inform the sending of the data.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Endpoints")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"/notification/data"))),(0,i.kt)("p",null,"The endpoint is used by DC and DP to send following notifications"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"PrepareDataNotification - notification triggered by the DC to DP on receiving of consent artifact. This commands the DP to prepare the data which will be fetched."),(0,i.kt)("li",{parentName:"ul"},"DataReadyNotification - DP notifies the DC about the endpoint from which it can fetch the requested data."),(0,i.kt)("li",{parentName:"ul"},"DataTxNotification - Notifications triggered by the DP for giving updates on the data transfer."),(0,i.kt)("li",{parentName:"ul"},"DataRxNotification - Notifications by DC to notify on the data received.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"/{dynamic-data-fetch-url}"))),(0,i.kt)("p",null,"Endpoint generated by the DP from where the requested data can be fetched. This is only known to DC and DP."))}p.isMDXComponent=!0},3673:function(t,e,n){e.Z=n.p+"assets/images/data-flow-5aa773e2c738f2f1d8efb9bcfacff78d.png"},3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var l=a.createContext({}),f=function(t){var e=a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},s=function(t){var e=f(t.components);return a.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=f(n),u=o,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(h,r(r({ref:e},s),{},{components:n})):a.createElement(h,r({ref:e},s))}));function u(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,r[1]=c;for(var f=2;f<i;f++)r[f]=n[f];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);