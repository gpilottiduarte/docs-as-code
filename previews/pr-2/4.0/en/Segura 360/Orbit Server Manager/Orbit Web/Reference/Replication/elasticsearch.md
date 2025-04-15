# Elasticsearch

This document provides information about the **Elasticsearch** form.

## Path to Access

1. On Segura, in the navigation bar, hover over the **Product Menu** and select **Orbit Server Manager**.  
2. In the side menu, select **Settings \> Replication \> Elasticsearch**.

## Data Search Cluster

| Item | Type | Description |
| ----- | ----- | ----- |
| **Status** | Text field | Identificator of the overall status of the cluster. |
| **UUID** | Text field | Unique identifier of the cluster. |
| **Size** | Quantity input | Identificator of the number of nodes in the cluster. |
| **Primary** | Text field | Identificator of the primary node in the cluster. |
| **Version** | Text field | Identificator of the version of the cluster. |
| **Shards** | Text field | Identificator of the number of shards in the cluster. |
| **State UUID** | Text field | Unique identifier of the current cluster state. |
| **Timed out** | Text field | Identificator of timeouts in cluster operations. |

### Cluster members

| Item | Type | Description |
| ----- | ----- | ----- |
| **Index** | Text field | Name of the index associated with the cluster member. |
| **Name** | Text field | Name of the cluster member. |
| **Ephemeral** | Text field | Ephemeral identifier associated with the member. |
| **Address** | Text field | Address of the member in the cluster. |

## Indexes

| Field | Type | Description |
| :---- | :---- | :---- |
| **Name** | Text field | Name of the index in the database. |
| **Uuid** | Text field | Universal unique identifier of the index. |
| **Total** | Text field | Total number of records in the index. |
| **Size** | Text field | Size of the index on disk. |
| **Health** | Text field | Health status of the index. |
| **Status** | Text field | Current state of the index. |

