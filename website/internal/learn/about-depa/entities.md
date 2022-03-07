---
title: Entities
description: Describing the entities in the architecture and their responsibilities
---

# Entities and their responsibilites

### 1. Consent Manager (CM)

Consent managers are neutral, regulated, user-facing utilities whose primary role is to collect consent from users for sharing data from DPs to DCs. Other than enabling consent collection and providing the desired user interface for it, CMs has the following crucial responsibilities in our architecture which are listed below.

- **User on-boarding**: have an on-boarding process for the users. There are no technical specifications around this but CMs have the freedom to define this on their own. The end goal is to give a user an id for its identification which will be in the form of user@&lt;cm domain>.

- **Discovery of DPs**: CMs help users’ discover the DPs. CM enables this by using the APIs exposed by the gateway to search for the DPs based on multiple criteria. The meta-information about the DPs is maintained by the gateways in the registry.

- **Linking of DPs**: CM enables linking of DPs with users' CM account. The process of linking involves linking of accounts which the user maintains with the DP.

- **Consent lifecycle management**: CMs manage the lifecycle of consent artefacts, including activities like revocation and pausing of consent.

- **Consent-related notifications**: CMs notify users, DCs, DPs and gateway about key consent-related events like consent granted/revoked/paused. CMs also receive notifications from DU / DP systems about events in the data flow e.g., notifications indicating transmission or receipt of data, and maintain a record of such events for the benefit of the user.

By design, CMs never get access to shared data, whether encrypted or raw. This ensures that entities who play the role of a CM are not incentivized by a need to aggregate user information and instead, are motivated to provide safe and reliable consent management services to the user. Overall, CMs are one of our main mechanisms for ensuring user centricity of our architecture.

### 2. Data Provider (DP)

Data Providers are the data custodians of Data Principal and already hold a relationship for providing some services to the Data Principal. With in the DEPA ecosystem a DP will have the following responsibilities

- **Linking with CM** : A link between the DP and the CM can be initiated by either of the parties. DP should provide a suitable interface for Users to initiate the linking with a CM.
- **Consent Validation**: A DP should validate the consent by verifying the signature received as part of the Consent Artifact. Post this only DP should go ahead with data preparation and sharing of data with DC.
- **Data Preparation**: DP should prepare the data which can be fetched later by the DC as per the consent shared by the CM. This preparation phase can include fetching the data from archival and doing appropriate processing before making it available for DC.
- **Data Notifications** : A DP should send DataTx Notifications to gateway and CM to inform about the status of the data transfer.

### 3. Data Consumer (DC)

A data consumer within DEPA ecosystem will have the following responsibilities:-

- **Consent Request initiation**: DC to initiate the consent request based on the data requirement of the services being offered to the user.
- **Data fetching** : DC’s will do the fetching of requested data post a user's consent is shared by the CM.
- **Data Notifications** : DC should publish notifications on receiving data. These notifications will be published to CM and the gateway.
- **Data purpose** : DC should restrict itself to use the data only for the purpose mentioned.
