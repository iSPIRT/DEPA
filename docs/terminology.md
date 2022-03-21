# Terminology

**_Data Principal_**
_The person to whom the data belongs._

**_Data Provider_**
_A data provider (DP) is an entity that collects or generates digital data and stores it in a software system. Essentially DPs are custodians of the Data Principal’s data. DPs could be clinical establishments like hospitals, health service providers, insurance companies, banks, tax authorities, schools, Universities, Govt. Agencies, etc. These establishments act as custodians of the Data Principal’s data and they rely on Consent managers for the purpose of collecting consent from the Data Principal for the purpose of data sharing.  A DP could host its own software system or could use a third party service provider to participate in the ecosystem._

**_Data Consumer_**
_A data Consumer(DC) is an entity that seeks digital data from the Data Principal, in order to provide services. The DC places the request for the need of data with the CM which triggers the process of consent collection from the Data Principal. DCs include hospitals, health technology companies, banks, financial technology companies, govt departments, employment exchanges or any entity that is interested in delivering services to the Data Principal based on his data. These entities could have their own systems or use a third party service provider to be part of the network._

**_Consent Manager_**
_A consent manager is an entity that acts as a consent collector for the user and mediates personal data flows from DPs to DCs. Our architecture allows multiple entities to play the role of a CM and each must have its own front-end (a mobile app, a Web app, or a human agent who interfaces with a mobile/Web app) for interacting with users. A CM cannot access data of users, even in encrypted form, unless it is also an DC and accesses information in that capacity. Its role is primarily to enable consent collection, based on which data is shared from DPs to DCs. It also enables discovery of DPs from which user data can be shared. Consent managers are a key mechanism for ensuring **privacy by design** in our architecture._

**_Registeries_**
_A set of registeries enable DPs, DCs, and CMs to connect with each other and exchange information. These registeries also create a trust anchor in the system on which the entities can rely to trust each other. The architecture relies on four kind of registeries which go by the name **Lookup Registry**, **Trust Registry**, **Schema Registry** and **Purpose Code Registry**.
Trust Registry is the pivot for creating a network and enabling trust between the entities which join the network. We envision **Trust Registry** to be sectoral in nature where they play the role of regulating entities in the network, thus, they are also a key vehicle for our design principle of **transparency and accountability**._