---
id: request-type
title: Data request type
description: Introduction to the request type inside DEPA
---

Data request/response types define the data which is requested by the DC and the data which is shared by the DP. The defined data request/response definitions will rest outside this specification and will evolve independently. A prescriptive example is provided below:

### Data Request structure

1. **Headers**
   All header fields defined here in the Data-request are mandatory. Apart from these custom headers can be added which the network can agree upon.

   - **_reqId_**
     _ A unique id of the data request. The uniqueness should be maintained by the DC system._

   - **_schemaName_**
     _ The schema name of the data-request. This is to identify the schema provided by the network. For a collision free naming we suggest to have the schema name of the format &lt;gateway-prefix>.&lt;schema-name>_

   - **_schemaVersion_**
     _ The schema version identifier._

   - **_contentType_**
     _ The content-type of the data-request body. This can be either JSON / XML._

2. **Body**
   This can be defined in the JSON document or an XML format. The body of the data request should have at least the following set of information:

   - **Data definition** - The domain specific data definition element to define what data is being seeked from the user. Example of this can be a bank statement, doctors prescription, diagnostic results etc.

   - **Data Boundary** - This section will clearly define the boundaries for the data to be shared. This can take the form of a date-time boundary like, share the transaction details from start date to end date. Or this could also be in the form of context where it says, provide me with the doctor's prescription for tele consultation id XYZ.

   - **Purpose** - Defines the purpose for which this data has been seeked. Example - when requesting for the bank statement the DC could say “Requesting bank statement for your loan application no 123456789 on 23/7/2021”

   - **Subscription/Snapshot fetch** - The data request should clearly mention that it needs the snapshot of the requested data or it needs a subscription to fetch the details to see the latest updated data for the duration of data. Example - snapshot looks like requesting the bank statement from start date 1/2/2021 to 31/3/2021 if requested after 31/3/2021. On the other hand getting bank balance can be requested as a subscription where DC intends to fetch it every end of week.

3. **Signature**
   _The signature of data-request in the JWS format. The signature block can encapsulate one or many data-requests._
