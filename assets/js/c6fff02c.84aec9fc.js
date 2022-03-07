"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[18],{6276:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),s=["components"],o={id:"mtls-establishment",title:"Mutual TLS Establishment",description:"The establishment of mutualTLS between entities"},l=void 0,c={unversionedId:"mtls-establishment",id:"mtls-establishment",title:"Mutual TLS Establishment",description:"The establishment of mutualTLS between entities",source:"@site/internal/specification/mtls-establishment.md",sourceDirName:".",slug:"/mtls-establishment",permalink:"/depa/specification/mtls-establishment",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/specification/mtls-establishment.md",tags:[],version:"current",lastUpdatedAt:1646640465,formattedLastUpdatedAt:"3/7/2022",frontMatter:{id:"mtls-establishment",title:"Mutual TLS Establishment",description:"The establishment of mutualTLS between entities"},sidebar:"specification",previous:{title:"Data Provider Discovery",permalink:"/depa/specification/data-provider-discovery"},next:{title:"Linking Flow",permalink:"/depa/specification/linking/linking-flow"}},u=[],f={toc:u};function p(e){var t=e.components,o=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},f,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Establishment of Mutual TLS is critical for any of the flows to work in DEPA. Usually this is enabled by adding the certificate of the relying party before the connection is established. Since the participants within a transaction are dynamic in nature hence exchanging the certificates of relying parties is not possible beforehand. To solve this Gateways enable the sharing of registered certificates for establishment of the Mutual TLS by means of resolution flow."),(0,a.kt)("p",null,"A sample flow for establishment of mTLS connection between CM and DP. The same will be applicable for establishing mTLS for CM and DC or DC and DP."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"mTLSestablishment",src:n(477).Z,title:"mTLSestablishment",width:"444",height:"462"})),(0,a.kt)("p",null,"Verification of the certificates"),(0,a.kt)("p",null,"Certificates presented by the Client and the server during the Mutual TLS handshake need to be verified. The certificate presented by each party will have the identifier of the party using which the resolution can happen at the gateway. Post the resolution is successful the public key certificate acquired from the gateway should match with what has been presented during the TLS handshake. If these two certificates are the same then we can say that verification is successful and Mutual TLS can been established."))}p.isMDXComponent=!0},477:function(e,t,n){t.Z=n.p+"assets/images/mTLS-establishment-be188e5101cb3c193012edcd7d0659e1.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=r,m=p["".concat(l,".").concat(h)]||p[h]||f[h]||a;return n?i.createElement(m,s(s({ref:t},u),{},{components:n})):i.createElement(m,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);