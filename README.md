# Depa 2.0

This repo contains the high-level architecture of the Data Empowerment and Protection Architecture (DEPA). DEPA enables consented sharing of consumer data from Data Providers (entities which collect or generate consumer data) to Data Consumers (other entities which wish to provide a service or a product based on the data) via a new type of entity called Consent Managers (CMs). DEPA does not address consent required in the process of collecting data from the consumer; consent managers collect consumer consent only for the purpose of sharing data from DPs to DCs. The current document presents the DEPA architecture at a high level and outlines the flows that are covered by it.

Prior work on DEPA includes the technology specifications of the [Account Aggregator framework](https://api.rebit.org.in/) for sharing consumer financial information (backed by the Reserve Bank of India) and the framework of [Health Information Flows (HIFs)](https://ispirt.in/depa-hif/), a key building block of India’s [National Digital Health Mission (NDHM)](https://ndhm.gov.in/). Both these frameworks are built on the same principles and have similar designs. This document brings together the key elements of both those designs, and introduces a few changes based on learnings from real deployments.

## **Index**

- [Introduction](/docs/introduction.md)
- [Terminology](/docs/terminology.md)
- [Eosystem and Networks](/docs/ecosystemAndNetworks.md)
- Registries
  - [Lookup Registry](/docs/registeries/lookupRegistry.md)
  - [Trust Registry and Policies](/docs/registeries/trustRegistry.md)
  - [Schema Repository](/docs/registeries/schemaRegistry.md)
  - [Purpose Code Registry](/docs/registeries/purposeCodeRegistry.md)
- Specification
  - Building Blocks
    - [Consent Artifact](/docs/consentArtifact.md)
    - [Data](/docs/data.md)
    - [Events](/docs/event.md)
  - [API specification](/docs/api.md)
  - Flows
    - [Discovery](/docs/flows/discovery.md)
    - [Resolution](/docs/flows/resolution.md)
    - [Trust establishment](/docs/flows/trust.md)
    - [Linking Flow](/docs/flows/linking.md)
    - [Consent Flow](/docs/flows/consent.md)
    - [Data Flow](/docs/flows/data.md)
