---
id: subscriptions-notifications
title: Subscriptions and Notifications
description: Everything you need to know how subscriptions and notifications work within the consent framework
---

The communication between different entities in the ecosystem is done in a REST like manner. DEPA revolves around a non-blocking REST structure, i.e., via the use of events and notifications. In the current specification we use the following notification and event types:

**_Acknowledgement Notification_**
An acknowledgement by the end party on receiving the request. This is triggered by the gateway to the entity who raised the request.

**_Error Notification_**
An error notification informs about the error conditions to the entity from where the request originated. This is triggered by the gateway to the entity who raised the request.

**_PrepareData Notification_**
A notification from DC to DP via the gateway that he can now start preparing the data for retrieval. This notification is triggered by the DC on receiving the consent from the CM.

**_DataReady Notification_**
A notification from DP to DC via the gateway that he can now start retrieving the data. This notification is triggered by the DP post data readiness.

**_DataTx Notification_**
A notification to inform the gateway and the CM on the state of data transfer by the DP.

**_DataRx Notification_**
A notification by the DC to inform gateway and CM on the state of receiving the requested data.
