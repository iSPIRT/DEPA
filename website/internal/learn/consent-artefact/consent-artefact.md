---
id: consent-about
title: About
description: This page describes the concept of a Consent Artefact, key to DEPA.
---

# Consent Artefact

In our framework, consent is always electronically sought from the user and is captured using a document called the _Consent Artefact_.

Within DEPA, the network agrees on a common standard of the consent artefact which takes care of the use cases in that domain.

![consentArtifactTemplate](/img/learn/about-depa/consent-artefact-template.png)

A consent artefact will have three components to it:

1. **Headers**: Provide information on how the body of the consent artefact should be parsed

   - **_Headers_**
     _All header fields defined here are mandatory. Apart from these custom headers can be added._

   - **_id_**
     _A unique id of the consent artifact. The uniqueness should be maintained by the CM system._

   - **_schema-name_**
     _The schema name of the consent artifact. This is to identify the schema provided by the network. For a collision free naming we suggest to have the schema name of the format &lt;gateway-prefix>.&lt;schema-name>_

   - **_schema-version_**
     _The schema version identifier of the consent artifact._

   - **_content-type_**
     _The content-type of the body. This can be either JSON / XML._

   - **_date-time_**
     _The time when the consent artifact was generated._

   - **_expiry-time_**
     _The expiry time of the consent artifact. I:e after this it should be considered invalid._

2. **Body**: contains the consent artefact details, and caters to the following:

   1. **Data Principal** - mentions Data principal identifier who gave the consent. This section should not contain any PII information of the Data Principal. This will typically be the CM id issued by the Consent Manager to the Data Principal.

   2. **Data Request Details** - This section tells the DP that this is what the consent has been given for. This section will clearly set the boundaries for data sharing.

   3. **Accounts** - The Data Principal would choose the accounts from which he intends to share the requested data. This information needs to be provided for each of the data requests which the DC makes. Users may choose to provide the information from multiple accounts, in that case it's the responsibility of the DC to do the aggregation on the provided data sets if required. This section would contain the account ids provided by the DP at the time of linking and the LinkingToken as the proof of linking.

3. **Signature**: The signature of the consent artifact in the JWS format
