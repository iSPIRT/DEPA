# 2. High Level architecture


        
## Architecture

The DEPA architecture has the following essential actions through which the whole ecosystem comes to life.

* **Network Onboarding** - All the participants of a transaction i:e Consent Manager, Data Provider and Data Consumer must get themselves on-boarded to a gateway. It's post onboarding only that these entities will be able to discover, do resolution of each other and participate in a data transaction. A Gateway will facilitate the on-boarding workflow.

* **Resolution** - Entities will have to resolve each other endpoints where the connection can be established. These can be done through the Lookup Registry. A lookup registry would give the endpoints of the where the client can make a connection to make a call to DEPA specification endpoints.


* **Linking Accounts** - A user needs to link his DPs with the consent manager. This linking can be initiated via the DP itself or the CM, in the latter case there will be a need to discover the DPs on the CMs interface before the linking can be initiated. The linking will enable exchange of tokens between the DP and the CM and build a trust relation between the two entities. The linking process will also enable the CM to know about the accounts which user has associated with it, this will be required at the time of consent collection.

* **Consent collection and sharing**- The consent is collected by the CM and shared with DP and DC. Sharing of consent will enable the sharing of data as a next step. A precursor to giving consent is the linking of accounts with DP so that users can select the accounts and DPs from where the data needs to be shared with the DC. A User can select multiple DPs and accounts for a single consent.

* **Data fetching**- Post the consent is shared with the DC, DC initiates the fetching of data from DP. The data transfer will be P2P between DP and DC but facilitated by the CM. 

* **DP Discovery** - A DP discovery is needed in case user initiates linking from the CMs client. A CM can rely on the 3rd party search systems to do the discovery of the DPs domain. 


![architecture](images/architecture.png "architecture")

**Important:**  An entity that plays the role of DC during one transaction may play the role of DP in another. Depending upon the consent given by a user, an DC may aggregate data about the user from multiple DPs _and store that data on its own systems _(for a period of time specified in the consent artefact). This enables the DC to serve as a data provider to other DCs seeking that data and hence become an DP to such DCs. Indeed, for an ecosystem to develop around our architecture, it is valuable for the entities to follow the Principle of Reciprocity.

```Principle of Reciprocity: Every DC that aggregates data of users from other entities and stores that data (without violating user consent) must serve as an DP to other DCs who seek that data.```

The enforcement contours of this principle will be determined by accompanying privacy laws and is not in the scope of this architecture document. 



##  Responsibilities of the entities

Role played by each of the entities.

### 1. Consent Manager (CM)

Consent managers are neutral, regulated, user-facing utilities whose primary role is to collect consent from users for sharing data from DPs to DCs. Other than enabling consent collection and providing the desired user interface for it, CMs has the following crucial responsibilities in our architecture which are listed below.

* **User on-boarding**:  have an on-boarding process for the users. There are no technical specifications around this but CMs have the freedom to define this on their own. The end goal is to give a user an id for its identification which will be in the form of user@&lt;cm domain>.

* **Discovery of DPs**: CMs help users’ discover the DPs. CM enables this by using the APIs exposed by the gateway to search for the DPs based on multiple criteria. The meta-information about the DPs is maintained by the gateways in the registry.

* **Linking of DPs**: CM enables linking of DPs with users' CM account. The process of linking involves linking of accounts which the user maintains with the DP.

* **Consent lifecycle management**: CMs manage the lifecycle of consent artefacts, including activities like revocation and pausing of consent. 

* **Consent-related notifications**: CMs notify users, DCs, DPs and gateway about key consent-related events like consent granted/revoked/paused. CMs also receive notifications from DU / DP systems about events in the data flow e.g., notifications indicating transmission or receipt of data, and maintain a record of such events for the benefit of the user.

By design, CMs never get access to shared data, whether encrypted or raw. This ensures that entities who play the role of a CM are not incentivized by a need to aggregate user information and instead, are motivated to provide safe and reliable consent management services to the user. Overall, CMs are one of our main mechanisms for ensuring user centricity of our architecture.

### 2. Data Provider (DP)

Data Providers are the data custodians of Data Principal and already hold a relationship for providing some services to the Data Principal. With in the DEPA ecosystem a DP will have the following responsibilities 

* **Linking with CM** : A link between the DP and the CM can be initiated by either of the parties. DP should provide a suitable interface for Users to initiate the linking with a CM.
* **Consent Validation**: A DP should validate the consent by verifying the signature received as part of the Consent Artifact. Post this only DP should go ahead with data preparation and sharing of data with DC.
* **Data Preparation**: DP should prepare the data which can be fetched later by the DC as per the consent shared by the CM. This preparation phase can include fetching the data from archival and doing appropriate processing before making it available for DC.
* **Data Notifications** : A DP should send DataTx Notifications to gateway and CM to inform about the status of the data transfer.
  

### 3. Data Consumer (DC)

A data consumer within DEPA ecosystem will have the following responsibilities:-

* **Consent Request initiation**: DC to initiate the consent request based on the data requirement of the services being offered to the user.
* **Data fetching** : DC’s will do the fetching of requested data post a user's consent is shared by the CM. 
* **Data Notifications** : DC should publish notifications on receiving data. These notifications will be published to CM and the gateway.
* **Data purpose** : DC should restrict itself to use the data only for the purpose mentioned.

### 4. Gateway
Gateways form the hub for the entities in the DEPA network. The architecture doesn't put any restriction on the number of gateways which can exist within an ecosystem. A Gateway is assumed to be tied to a sector. The sector regulator governs the policies to be followed by the gateway and the entities which connect to the gateway to form a network.

The role of a gateway includes the following:
* **On-boarding**: All the entities who want to participate in the ecosystem must get them on-boarded to one or more gateways. Gateways are free to define the on-boarding workflows so as to establish trust between themselves and the entity getting on-boarded. The end goal of on-boarding is to exchange the tokens so that communication between the entities and gateway always remains secure.
* **Entity  Resolution**: Gateways maintain a registry of CMs, DPs and DCs within a network. The registry stores information like the access URLs, public keys of the entity and other meta-information, this is critical to establishing mTLS connection between the entities. Gateways give access to the registry through the resolution endpoints.

* **Discovery**: The gateway enables the discovery of the entities to look for the address where the entity's system is hosted. This information is updated by the entity with the gateway.



## 6. Subscriptions and Notifications

The communication between different entities in the ecosystem is done in a REST like manner. Since REST is based on http protocol which is inherently blocking in nature because of its synchronous nature, here within DEPA we heavily use the non blocking way of REST i:e via use of Events and notifications. In the current specification we use the following notification and event types:-


**_Acknowledgement Notification_**
An acknowledgement by the end party on receiving the request. This is triggered by the gateway to the entity who raised the request.

**_Error Notification_**
An error notification informs about the error conditions to the entity from where the request originated. This is triggered by the gateway to the entity who raised the request.

**_PrepareData Notification_**
A notification from DC to DP via the gateway that he can now start preparing the data for retrieval. This notification is triggered by the DC on receiving the consent from the CM.

**_DataReady Notification_**
A notification from DP to DC via the gateway that he can now start retrieving the data. This notification is triggered by the DP post data readiness.

**_DataTx Notification_**
A notification to inform the gateway and the CM on the state of data transfer by the DP.

**_DataRx Notification_**
A notification by the DC to inform gateway and CM on the state of receiving the requested data.



