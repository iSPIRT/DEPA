---
id: cm-init-link
title: CM Inititated
description: CM Initiated Linking flow
---

This will typically be the case when User login to his CMs account and does the discovery of the DP with whom the linking has to be initiated.

![accountLinking-CMSide](/img/specification/CM-init-link.png 'accountLinking-CMSide')

Details of the flow

1.  As a precursor for the flow to begin Mutual TLS connection is established between the CM and DP.
2.  CM sends a request to the DP to initiate the linking. If the user exists then move to the next step else respond with error.
3.  DP initiates the authentication of the user. This is outside the DEPA flow and will be done in 3 steps.

4.  Notification to the user that a request for linking has been received. The notification can take any form like sms, ivr, app notifications etc..
5.  Users might have to do the authentication, this can be single factor or multiple depending on the DP.
6.  User will approve the request and select the accounts which he wishes to link with the CM. The account selection will only be required if the accounts attribute is not populated by the CM.

7.  Once the request is approved a notification from DP to the CM is followed.

There is another API provided for checking the status of the linking request in the realtime. This is a sync call.

**Endpoints**

**_/link_**

Endpoint to send the linking request by the CM to the DP. This endpoint is hosted by Gateway and DP.

**_/notification/link_**

Receive linking notification to the linking request sent earlier. This endpoint is hosted by Gateway and CM.

**_/link/status_**

Endpoint is hosted by the DP, this is to check in realtime the status of the request sent earlier by the CM.

Please refer to the OpenAPI specification for details on the API and the request-response structure.
