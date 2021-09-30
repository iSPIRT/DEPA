# Depa 2.0

This repo contains the high-level architecture of the Data Empowerment and Protection Architecture (DEPA). DEPA enables consented sharing of consumer data from Data Providers (entities which collect or generate consumer data) to Data Consumers (other entities which wish to provide a service or a product based on the data) via a new type of entity called Consent Managers (CMs). DEPA does not address consent required in the process of collecting data from the consumer; consent managers collect consumer consent only for the purpose of sharing data from DPs to DCs. The current document presents the DEPA architecture at a high level and outlines the flows that are covered by it.

Prior work on DEPA includes the technology specifications of the [Account Aggregator framework](https://api.rebit.org.in/) for sharing consumer financial information (backed by the Reserve Bank of India) and the framework of [Health Information Flows (HIFs)](https://ispirt.in/depa-hif/), a key building block of India’s [National Digital Health Mission (NDHM)](https://ndhm.gov.in/). Both these frameworks are built on the same principles and have similar designs. This document brings together the key elements of both those designs, and introduces a few changes based on learnings from real deployments.

## **Index**

 1. [Introduction](/1_Introduction.md)
 2. [Architecture](/2_Architecture.md)
 3. [Architecture Extendibility](/2_ArchitectureExtentions.md)
 4. [APIs and Flows](/4_APIs.md)




