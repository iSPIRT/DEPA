---
id: mtls-establishment
title: Mutual TLS Establishment
description: The establishment of mutualTLS between entities
---

Establishment of Mutual TLS is critical for any of the flows to work in DEPA. Usually this is enabled by adding the certificate of the relying party before the connection is established. Since the participants within a transaction are dynamic in nature hence exchanging the certificates of relying parties is not possible beforehand. To solve this Gateways enable the sharing of registered certificates for establishment of the Mutual TLS by means of resolution flow.

A sample flow for establishment of mTLS connection between CM and DP. The same will be applicable for establishing mTLS for CM and DC or DC and DP.

![mTLSestablishment](/img/specification/mTLS-establishment.png 'mTLSestablishment')

Verification of the certificates

Certificates presented by the Client and the server during the Mutual TLS handshake need to be verified. The certificate presented by each party will have the identifier of the party using which the resolution can happen at the gateway. Post the resolution is successful the public key certificate acquired from the gateway should match with what has been presented during the TLS handshake. If these two certificates are the same then we can say that verification is successful and Mutual TLS can been established.
