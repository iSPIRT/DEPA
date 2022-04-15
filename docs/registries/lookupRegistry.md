# Lookup Registry

Lookup registeries provide a way for the client to get the IP address and the port where the endpoints are hosted for CM, DP or DC. DEPA doesn't provide the specification for the registry, insted makes an assumption that a network would choose an implementation which is agreed by all the participants of the netowrk.

## DNS for looup registry
DNS system could be used as the implimentation for lookup registries. DNS can transalate the domain name of the server to IP and port for the DEPA endpoints. One could use a SRV record in the DNS entry for this purpose. It will allow the entities to keep the domain they currently own and expose a new service @ same domain.

A SRV record looks like 
```
_service._proto.name. TTL class type_of_record priority weight port target.
```

Examples of a SRV record

```
_depa._tcp.cm.in. 86400 IN SRV 10 5 5223 server.cm.in.
```

Above entry says that service is **depa**, protocol is **tcp**, port is **5223** and server is **server.cm.in** where the endpoint for Consent manager can be reached.

## API based lookup registry
If a network agrees then they could also use a API based approach for the entities to resolve the IP address and port where the endpoints for depa are exposed. If required one could also use a authentication on these APIs for only the netowrk participants to use these API endpoints.

> NOTE : Enabling authentication on the lookup registry will make a closed network where participants from other network will not be able to look upto the participants in authenticated Lookup registry.
