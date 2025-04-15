# Introduction Arbitrator

senhasegura's Arbitrator is a key element in supporting our application's high availability. It ensures that our databases and Elasticsearch clusters operate continuously without any interference.

The arbitrator is often used when there are two senhasegura servers operating in parallel: a main server and a backup server. The arbitrator continuously validates connectivity with both servers and, if one becomes unavailable, it switches operations to the remaining active server.


![Arbitrator Architecture.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Arbitrator%20Architecture.png){height="" width=""}

:::info (Info)
Our Arbitrator helps to avoid a split-brain scenario where one of the two instances fails to identify which data is the most up-to-date.
:::

---
## Related articles

- [How to install Arbitrator](/v3-33/docs/arbitrator-installation)
- [Arbitrator Updates](/v3-33/docs/arbitrator-update)