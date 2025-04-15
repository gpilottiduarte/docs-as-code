# How to enable Recovery

senhasegura provides a feature called **Recovery**, which allows manual or automated activation of instances through HTTPS requests. This is useful for monitoring and remotely controlling instances, enabling or disabling them as needed, and preventing an under maintenance or unavailable instance from receiving traffic.

## How to enable Recovery

1. In the upper left corner of the senhasegura platform, click on **Grid Menu**, identified by the icon of nine squares, and then select **Orbit Config Manager**.
2. On the side menu, select **Settings** and then **Recovery**.
3. Enable the **Allow system remote activation parameter**.
4. In the **Allowed origin IPs perform system remote activation** field, add the authorized IPs.

:::(Warning) (Caution)
When using subnet masks, the CIDR notation should be adopted, e.g., `192.168.1.0/24`.
:::

:::(error) (Important)
It’s recommended to enable only the IPs that will effectively manage the application. 
:::
5. Click **Save**.
6. Apply these steps to all members of the cluster.




## Instance monitoring
The IPs registered in the **Recovery** configuration can access the monitoring URL `https://mysenhasegura/flow/orbit/mntr`, obtaining information about the current state of the instance, indicated by HTTP status codes:


| Status |Description |
| --- | --- |
|**HTTP 200** |Application active and available. |
| **HTTP 203** | Application active but not the primary. |
| **HTTP 403**| Application inactive and unavailable. |
| **HTTP 451** | Activation license expired. |
|**HTTP 503** | Application unavailable. |


## Automatic activation and deactivation

It’s possible to allow an external system to control the automatic activation and deactivation of instances. For example, activating an instance as the primary for a contingency data center. You can accomplish this by utilizing the URLs listed below:

### Activate
`GET
 /flow/orbit/mntr/activate`

When activating an instance, it becomes available to users, but this only happens if the activation license is valid. After a successful activation, the instance that was previously the primary in the cluster is no longer the primary, and the newly activated instance becomes the primary. It's important to note that other instances aren’t automatically deactivated during this process.

Example: `https://mysenhasegura/flow/orbit/mntr/activate`

::: (info) (Info)
The Recovery button is used to interrupt and restart Elasticsearch in emergency situations when it’s necessary to take over the secondary instance independently.
:::

### Deactivate
`GET
/flow/orbit/mntr/deactivate`

Deactivating an instance will make it unavailable. If this instance is the primary, it will be deactivated without another cluster member being elected as the new primary. It's important to emphasize that this action won’t activate other instances, even if they are inactive.

Example: `https://mysenhasegura/flow/orbit/mntr/deactivate`

::: (Warning) (Caution)
Controlling which instances are running and deactivated in the cluster is crucial. Avoid the risk of accidentally deactivating all instances, which could disrupt user operations.
:::

* * *

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.
