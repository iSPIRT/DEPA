# Data Provider Discovery Flow

For the purpose of linking the DP with the CM we need to discover them first, this is achieved by the discovery flow. This is only required when linking of the accounts is initiated from the CMs system.

All the APIs within this flow are synchronous in nature as only the CM and the gateway are the 2 parties which are interacting with each other.

Sequence Diagram

![discoveryFlow](/seqDiagram/discoveryFlow.png "discoveryFlow")

**Endpoints**

***/dp/tags***

This endpoint lists the tags using which gateway has done the filtering. Example - #Hospital , #Pharmacy , #Bank, etc...

***/dp***

The endpoint which is used to query the gateway. Provides the searching of the DPs based on following criteria

- ***Id*** - search by id if it's known. This can be different for the same entity on different gateway.

- ***Name*** - search by name of the entity. Can enable/disable fuzzy matching.

- ***Tags*** - search by tags. List of tags on a gateway can be known by the /dp/tags endpoint.

- ***Location*** - search nearby areas. This can be based on radius and current users location.

Once the DP is discovered its details are known to the CM to initiate the linking process. The meta-data received by the gateway also contains info on how the DP identifies the users in its system. This can be a mobile no, aadhaar no, email-id, custom identifier etc.. This is critical for the CM to know as it needs to capture this information from the user and send notification to DP for initiating linking of the user.