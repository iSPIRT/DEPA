# Events

DEPA 2.0 defines an event-driven architecture based around the [cloud events](https://cloudevents.io/) open specification.

Cloud events alow DEPA 2.0 to have a fixed, minimal set of endpoints, with the type of action requested is present in the request payload mapping to a particular cloud event, listed in the schema.

This is in contrast to DEPA 1.0, where multiple sub-flows within a particular flow were allotted their own endpoints, bloating the size of the API specification.

The specifications for all different types of events defined within DEPA 2.0 are provided [here](https://github.com/iSPIRT/DEPA/tree/0.2/specs/events)
