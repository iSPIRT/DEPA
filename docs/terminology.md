# Terminology

**Data Principal**

The person to whom the data belongs.

**Data Provider**

A Data Provider (DP) is an entity that collects or generates digital data and stores it in a software system. Thus, DPs are custodians of data owned by a Data Principal. DPs could be clinical establishments like hospitals, health service providers, or financial institutions like insurance companies, banks, tax authorities, or educational bodies such as schools, universities etc. These establishments rely on Consent Managers for the purpose of collecting consent from the Data Principal for the purpose of data sharing. A Data Provider could host its own software system or could use a third party service provider to participate in the ecosystem.

**Data Consumer**
A Data Consumer (DC) is an entity that seeks digital data from the Data Principal, in order to provide services. The DC places the request for the need of data with the CM which triggers the process of consent collection from the Data Principal. DCs include hospitals, health technology companies, banks, financial technology companies, govt departments, employment exchanges or any entity that is interested in delivering services to the Data Principal based on their data. These entities could have their own systems or use a third party service provider to be part of the network.

**Consent Manager**

A Consent Manager (CM) is an entity that acts as a consent collector for the user and mediates personal data flows from DPs to DCs. Our architecture allows multiple entities to play the role of a CM and each must have their own front-end (a mobile app, a web app, or a human agent who interfaces with a mobile/web app) for interacting with users. A CM cannot access data of users, even in encrypted form, unless it is also a Data Consumer and accesses information in that capacity. Its role is primarily to enable consent collection, based on which data is shared from DPs to DCs. Consent Managers are a key mechanism for ensuring **privacy by design** in our architecture.

**Registries**

A set of registries enable DPs, DCs, and CMs to connect with each other and exchange information. These registeries also create a trust anchor in the system on which the entities can rely to trust each other.
Thus, such a registry is the pivot for creating a network and enabling trust between the entities which join the network. We envision registries to play the role of regulating the entities present in the network, thus, they are also a key vehicle for our design principle of **transparency and accountability**.
