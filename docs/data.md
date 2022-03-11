# Data Request-Response types

Data request/response types define the data which is requested by the DC and the data which is shared by the DP. The defined data request/response definitions will rest outside this specification and will evolve independently.

## Data Request structure

![queryTemplate](/images/queryTemplate.png?raw=true)

**Headers**
_All header fields defined here in the Data-request are mandatory. Apart from these custom headers can be added which the network can agree upon._

**_reqId_**
_A unique id of the data request. The uniqueness should be maintained by the DC system._

**_schemaName_**
_The schema name of the data-request. This is to identify the schema provided by the network. For a collision free naming we suggest to have the schema name of the format &lt;gateway-prefix>.&lt;schema-name>_

**_schemaVersion_**
_The schema version identifier._

**_contentType_**
_The content-type of the data-request body. This can be either JSON / XML._

**Body**
This can be defined in the JSON document or an XML format. The body of the data request should have at least the following set of information.

1. **Data definition** - The domain specific data definition element to define what data is being seeked from the user. Example of this can be a bank statement, doctors prescription, diagnostic results etc...
2. **Data Boundary** - This section will clearly define the boundaries for the data to be shared. This can take the form of a date-time boundary like, share the transaction details from start date to end date. Or this could also be in the form of context where it says, provide me with the doctor's prescription  for tele consultation id XYZ.
3. **Purpose** - Defines the purpose for which this data has been seeked. Example - when requesting for the bank statement the DC could  say “Requesting bank statement for your loan application no 123456789 on 23/7/2021”
4. **Subscription/Snapshot fetch** - The data request should clearly mention that it needs the snapshot of the requested data or it needs a subscription to fetch the details to see the latest updated data for the duration of data.

Example - snapshot looks like requesting the bank statement from start date 1/2/2021 to 31/3/2021 if requested after 31/3/2021. On the other hand getting bank balance can be requested as a subscription where DC intends to fetch it every end of week.

**_signature_**
_The signature of data-request in the JWS format. The signature block can encapsulate one or many data-requests._

## Data response structure

![dataTemplate](/images/dataTemplate.png?raw=true)

**Headers**
All header fields defined here in the Data-response are mandatory. Apart from these custom headers can be added which the network can agree upon.

**_req-id_**
_An id of the data request for which this response is._

**_schema-name_**
_The schema name of the data-response. This is to identify the schema provided by the network. For a collision free naming we suggest to have the schema name of the format &lt;gateway-prefix>.&lt;schema-name>_

**_schema-version_**
_The schema version identifier._

**_content-type_**
_The content-type of the data-response body. This can be_**of the form text/json, text/xml, application/pdf, image/jpeg etc.. This is similar to the Content-Type header defined in the RFC 7231._

**body-encrypted**
_Tell if the body of the response is encrypted._

**key**
_The key used to encrypt the body. This is in JWK format._

**_multi-part_**
_Is this a multi part response._

**_part-no_**
_Sequence no of the part which is fetched._

**_total-parts_**
_Total no of parts which are available._

**_total-size-in-bytes_**
_Size of the total data to be shared._

**_part-size-in-bytes_**
_Size of the data shared._

**Body**
_This is the data which gets shared._

**_signature_**
_The signature of data-response in the JWS format._

For the above data type the DP can provide the response in any of the defined content types, like text/JSON would give the txn details in the JSON format and application/pdf would share the txn details in the pdf format. It is suggested that DP model their systems to provide the results in text/JSON or text/xml format as they are more machine friendly. Some data types may or may not support application/pdf, image/png etc for backward compatibility.

Similarly in the case of health domain FHIR data exchange standards are accepted internationally and can be used as data type with DEPA.
