# 1. Introduction
This document outlines a technical architecture for implementing personal data flows across domains and at  scale, keeping in mind evolving laws around personal data, data privacy and evolving  technology frameworks. The architecture has been developed in India as part of the DEPA 2.0 initiative. Although created for India, the design is general enough to be applicable anywhere in the world. We outline the different components and flows in our architecture and lay down the technical standard to be used by IT systems to participate in a real-world implementation of the architecture.

##    **Guiding Principles of our Architecture**

Before we describe our architecture, we present the core guiding principles upon which the architecture is based. 

**1.** **Diversity:** We aim to design a domain agnostic framework that will enable ecosystem innovation around data sharing, rather than provide a point solution for data sharing. Our design should allow a diverse set of existing or new IT systems, with diverse definitions and approaches to manage information, to participate in DEPA and to do this with ease.

**2.** **Evolvability:** We want our design to be simple and easily evolvable: it should be possible for capabilities to be built incrementally while allowing for rapid adoption in today’s world. It should also be possible to monitor systems at scale, so that policy corrections can be suitably informed. The design should be adaptable to future policies around data and future technology frameworks for data exchange. 

**3.** **Privacy By Design**: User information needs to be protected from abuse and compromise and privacy must be built into the architecture by design. Storage of and control on user information should be decentralised as far as possible and principles of transparency and choice should be applied in processes surrounding collection and sharing of personal information. In defining new software systems and processes, personal data collection should be kept to the minimum possible levels.

**4.** **Scalability**: Data flows enabled by our architecture should be able to handle data of billions of users. Not only the technology architecture but even the processes around implementing the architecture (registering new entities, maintaining existing ones, conducting audits, handling grievances) should be implementable at the scale of a large country like India. 

**5.** **User Centricity**: The design should enable simple and powerful user interfaces to develop around it and address the needs of a diverse set of users, including those who may not be literate, technologically or textually. Users should have significant control on how their data is shared, in line with evolving laws around data privacy and security.

**6. Transparency and Accountability**: We attempt to ensure [Public Open Data](https://data.gov.in/sites/default/files/NDSAP.pdf ) is available via APIs. Access to open data will ensure high-quality analytics, accurate fraud detection, shorter cycles for system improvement and high responsiveness to user needs. We also attempt to enable strong data-driven governance practices to be put in place for various actors that the architecture incorporates. 