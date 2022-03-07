---
id: response-type
title: Data response type
description: Introduction to the response type inside DEPA
---

### Data response structure

1. **Headers**
   All header fields defined here in the Data-response are mandatory. Apart from these custom headers can be added which the network can agree upon:

   - **_req-id_**
     _ An id of the data request for which this response is._

   - **_schema-name_**
     _ The schema name of the data-response. This is to identify the schema provided by the network. For a collision free naming we suggest to have the schema name of the format &lt;gateway-prefix>.&lt;schema-name>_

   - **_schema-version_**
     _ The schema version identifier._

   - **_content-type_**
     _ The content-type of the data-response body. This can be of the form text/json, text/xml, application/pdf, image/jpeg etc.. This is similar to the Content-Type header defined in the RFC 7231._

   - **body-encrypted**
     _ Tell if the body of the response is encrypted._

   - **key**
     _The key used to encrypt the body. This is in JWK format._

   - **_multi-part_**
     _Is this a multi part response._

   - **_part-no_**
     _Sequence no of the part which is fetched._

   - **_total-parts_**
     _Total no of parts which are available._

   - **_total-size-in-bytes_**
     _Size of the total data to be shared._

   - **_part-size-in-bytes_**
     _Size of the data shared._

2. **Body**
   This is the data which gets shared

3. **Signature**
   The signature of data-response in the JWS format.

For the above data type the DP can provide the response in any of the defined content types, like text/JSON would give the txn details in the JSON format and application/pdf would share the txn details in the pdf format. It is suggested that DP model their systems to provide the results in text/JSON or text/xml format as they are more machine friendly. Some data types may or may not support application/pdf, image/png etc for backward compatibility.

Similarly in the case of health domain FHIR data exchange standards are accepted internationally and can be used as data type with DEPA.
