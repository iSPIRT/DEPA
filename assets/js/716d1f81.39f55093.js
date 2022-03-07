"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[98],{4416:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return f},default:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),s=["components"],i={id:"consent-flow",title:"Consent Flow",description:"Description of the flow of consent in DEPA"},c=void 0,l={unversionedId:"flows/consent-flow",id:"flows/consent-flow",title:"Consent Flow",description:"Description of the flow of consent in DEPA",source:"@site/internal/specification/flows/consent-flow.md",sourceDirName:"flows",slug:"/flows/consent-flow",permalink:"/specification/flows/consent-flow",editUrl:"https://github.com/iSPIRT/depa/edit/main/internal/specification/flows/consent-flow.md",tags:[],version:"current",lastUpdatedAt:1646639910,formattedLastUpdatedAt:"3/7/2022",frontMatter:{id:"consent-flow",title:"Consent Flow",description:"Description of the flow of consent in DEPA"},sidebar:"specification",previous:{title:"DP Inititated",permalink:"/specification/linking/dp-init-link"},next:{title:"Data Flow",permalink:"/specification/flows/data-flow"}},f=[],u={toc:f};function p(e){var t=e.components,i=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The consent flow starts with User approaching a DC to take some service, and the DC in order to provide service to the user requests some set of data. That data will be in the DPs system who is holding it in capacity of a data custodian."),(0,r.kt)("p",null,"Sequence Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"consentFlow",src:n(9617).Z,title:"consentFlow",width:"729",height:"942"})),(0,r.kt)("p",null,"Details of the consent flow-"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"DC requests for data by creating a NewConsentRequest_1.0 and pushes it to the CM of the user , for this user will have to provide his cm-id to the DC."),(0,r.kt)("li",{parentName:"ol"},"User selects the DPs and the accounts user holds with DP, which can fulfil the request raised by the DC. If the DP and accounts are still not linked then linking flow has to be followed first do the linking. There can be multiple requests raised by the DC and users can select the same or different DP for each of the consent requests raised."),(0,r.kt)("li",{parentName:"ol"},"CM can optionally check with the DP that the requested dataType is supported by it or not, this is post the user selects a DP for a consentRequest. This is to make sure we fail fast and give feedback to the user that you need to select a different DP. If this check is not made the failure will happen post consent sharing with DP."),(0,r.kt)("li",{parentName:"ol"},"DC can in the meantime also check for the status of the consent via a consent status API. This is optional and not required for completion of the consent flow."),(0,r.kt)("li",{parentName:"ol"},"Once the DPs and accounts have been selected for each consentRequest CM can take the consent from the user. This may involve doing a 2 factor authentication. A user can choose to take following actions on the consent")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Granted")," - Users can choose to grant consent for a new consent-request raised by the DC. This involves the creation of the ConsentArtifact which is signed by the CM and/or signed by the User."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Denied")," - Deny the consent request raised."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Revoked")," - Revoke if the consent was already given. By default the consent is considered revoked after the expiry time of the consent."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Paused")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Resume")),(0,r.kt)("p",null,"This is a notification from the CM to DC and DP. In case of Denied action there is no call being made to the DP."),(0,r.kt)("p",null,"Whenever a user gives consent to a consent manager, allowing sharing of data from an DP to an DC, two types of consent artefacts are generated:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"An DC-facing artefact: This artefact is an authorization to the DC to be able to fetch information from an DP in the future. This may or may not have any \u201caccounts\u201d info or any information which can identify the DP."),(0,r.kt)("li",{parentName:"ol"},"An DP-facing artefact: This artefact is essentially a notification to an DP that communicates that \u201csome '' DC is authorized to fetch information from it in the future. The artifact provides the \u201caccount\u201d attribute for the DP to identify that data has to be shared from which accounts.")),(0,r.kt)("p",null,"Each consent transaction generates one DP-facing artefact and one DC-facing artefact for every pair of DP and DC across which information sharing is consented to."),(0,r.kt)("p",null,"A special scenario to consider - what if the DC and DP are on different networks and CM is acting as a bridge between these networks and enabling this transaction ? In this case the Consent Artifact generated by the CM can be of a different format for DC and DP. The format of these Consent Artifacts is governed by the Gateway to which the DC or DP is associated with. Since the CM is on both the Gateways it does the job of creating Network compliant Consent Artifact."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Endpoints")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"/consent-requests"))),(0,r.kt)("p",null,"Endpoint used by the DC to push the consent request to CM."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"/consent-requests/isSupported"))),(0,r.kt)("p",null,"CM can use this API endpoint to check if the requested data type is supported by the DP or not."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"/consent-requests/{consentRequestsIds}"))),(0,r.kt)("p",null,"DC can check for the status of the consent request by using this endpoint. Endpoint is hosted by CM."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},"/consent"))),(0,r.kt)("p",null,"The endpoint is hosted by DC and DP to inform about the consent lifecycle actions taken by the user. This endpoint is exposed as"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"POST - for sending out requests like GarantedConsentRequest_1.0 or DeniedConsentRequest_1.0"),(0,r.kt)("li",{parentName:"ul"},"PUT - used for requests like RevokeConsentRequest_1.0, PauseConsentRequest_1.0 and ResumeConsentRequest_1.0.")))}p.isMDXComponent=!0},9617:function(e,t,n){t.Z=n.p+"assets/images/consent-flow-c49a9c192c8dea95c7594ac905f51e9f.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return f},kt:function(){return h}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},f=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),p=l(n),h=a,d=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?o.createElement(d,s(s({ref:t},f),{},{components:n})):o.createElement(d,s({ref:t},f))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);