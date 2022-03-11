# Linking flow
A precursor to giving a consent is the linking of DP with Users CM account. The linking can be initiated by the user either from the DPs system or CMs system.

## 1.  CM Initiated

This will typically be the case when User login to his CMs account and does the discovery of the DP with whom the linking has to be initiated.
  
Sequence diagram

![accountLinking-CMSide](/seqDiagram/accountLinking-CMSide.png "accountLinking-CMSide")

Details of the flow

1. As a precursor for the flow to begin Mutual TLS connection is established between the CM and DP.

2. CM sends a request to the DP to initiate the linking. If the user exists then move to the next step else respond with error.

3. DP initiates the authentication of the user. This is outside the DEPA flow and will be done in 3 steps.

1. Notification to the user that a request for linking has been received. The notification can take any form like sms, ivr, app notifications etc..

2. Users might have to do the authentication, this can be single factor or multiple depending on the DP.

3. User will approve the request and select the accounts which he wishes to link with the CM. The account selection will only be required if the accounts attribute is not populated by the CM.

5. Once the request is approved a notification from DP to the CM is followed.

There is another API provided for checking the status of the linking request in the realtime. This is a sync call.

**Endpoints**

***/link***

Endpoint to send the linking request by the CM to the DP. This endpoint is hosted by Gateway and DP.

***/notification/link***

Receive linking notification to the linking request sent earlier. This endpoint is hosted by Gateway and CM.

***/link/status***

Endpoint is hosted by the DP, this is to check in realtime the status of the request sent earlier by the CM.

Please refer to the OpenAPI specification for details on the API and the request-response structure.

## 2.   DP Initiated

A user also has an option to link his CM account with the DP using DPs system.

It is assumed that the user has logged on to his DPs account before initiating this flow.

Sequence Diagram

![accountLinking-DPSide](/seqDiagram/accountLinking-DPSide.png "accountLinking-DPSide")

Details of the flow:-

1. User provides his CM id to the DP, this will be in the form of `<user-id>@<CM domain>`.

2. User selects the accounts which he wishes to link if maintaining multiple accounts with DP.

3. Mutual TLS connection established between DP and CM.

4. DP sends out a request to the CM to link the accounts.

5. CM asks for authorization to approve the linking request. The flow for this is not part of the specification, but conceptually this should be done in two steps

1. CM sends notification to the user about the new linking request.

2. Users might have to do authentication and then may or may not authorize the linking.

7. Post approval a success notification is sent to the DP.

**Endpoints**

***/link***

Endpoint to send the linking request by the CM to the DP. This endpoint is hosted by Gateway and DP.

***/notification/link***

Receive success linking notification to the linking request sent earlier. This endpoint is hosted by DP.

Please refer to the OpenAPI specification for details on the API and the request-response structure.

Account identifier: The account identifier shared by the DP as part of the linking process with CM can be completely random and hide the original account identifier.
