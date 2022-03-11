# Entity Resolution Flow

Entities need to resolve each other in order to establish the mTLS connection between themselves. Gateway will provide the API to resolve the entities and get information about them. For entities to call this API they will need a token issued by the Gateway at the time of onboarding as an authentication mechanism. In addition Gateways can protect their environment by having a mTLS between the entity and themselves or can do IP whitelisting, all this will depend on the gateway security policies.

Resolution process of an entity.

1. Entities seeking to resolve other entities will need the unique identifier of another party or the domain name (like in the case of CM) which is registered with the Gateway.

2. Using this identifier entity makes the resolution call to the Gateway.

3. Gateway responds with meta information about the entity like address where its API’s are hosted, public key of the entity which is registered and other basic details.

**Endpoint**

***/resolve***

This endpoint resolves the entities. This is either done by the gateway assigned identifiers or the domain name registered with the gateway, like in the case of Consent managers.

Parameters :-

- ***Id*** - search by id if it's known. This can be different for the same entity on different gateway.

After the resolution has been successfully done the entity can initiate the mTLS connection with the other entity. Clients making the resolution query can also cache the results as per the TTL limits defined by the Gateway.
