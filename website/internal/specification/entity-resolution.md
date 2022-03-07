---
id: entity-resolution
title: Entity resolution
description: How to resolve entities inside a DEPA network.
---

Entities need to resolve each other in order to establish the mTLS connection between themselves. A registry will provide the API to resolve the entities and get information about them. For entities to call this API they will need a token issued by the registry at the time of onboarding as an authentication mechanism. In addition registries can protect their environment by having a mTLS between the entity and themselves or can do IP whitelisting, all this will depend on the registry security policies.

Resolution process of an entity.

1.  Entities seeking to resolve other entities will need the unique identifier of another party or the domain name (like in the case of CM) which is present in the registry.
2.  Using this identifier entity makes the resolution call to a registry.
3.  Registry responds with meta information about the entity like address where its API’s are hosted, public key of the entity which is registered and other basic details.

**Endpoint**

**_/resolve_**

This endpoint resolves the entities. This is either done by the registry assigned identifiers or the domain name present in the registry, like in the case of Consent managers.

Parameters:

- **_Id_** Search by id if its known. This can be different for the same entity on different registry.

After the resolution has been successfully done the entity can initiate the mTLS connection with the other entity. Clients making the resolution query can also cache the results as per the TTL limits defined by the registry.
