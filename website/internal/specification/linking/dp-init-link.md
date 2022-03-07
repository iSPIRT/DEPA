---
id: dp-init-link
title: DP Inititated
description: DP Initiated Linking flow
---

A user also has an option to link his CM account with the DP using DPs system.

It is assumed that the user has logged on to his DPs account before initiating this flow.

Sequence Diagram

![accountLinking-DPSide](/img/specification/DP-init-link.png 'accountLinking-DPSide')

Details of the flow:-

1.  User provides his CM id to the DP, this will be in the form of `<user-id>@<CM domain>`.
2.  User selects the accounts which he wishes to link if maintaining multiple accounts with DP.
3.  Mutual TLS connection established between DP and CM.
4.  DP sends out a request to the CM to link the accounts.
5.  CM asks for authorization to approve the linking request. The flow for this is not part of the specification, but conceptually this should be done in two steps

6.  CM sends notification to the user about the new linking request.
7.  Users might have to do authentication and then may or may not authorize the linking.

8.  Post approval a success notification is sent to the DP.

**Endpoints**

**_/link_**

Endpoint to send the linking request by the CM to the DP. This endpoint is hosted by Gateway and DP.

**_/notification/link_**

Receive success linking notification to the linking request sent earlier. This endpoint is hosted by DP.

Please refer to the OpenAPI specification for details on the API and the request-response structure.

Account identifier: The account identifier shared by the DP as part of the linking process with CM can be completely random and hide the original account identifier.
