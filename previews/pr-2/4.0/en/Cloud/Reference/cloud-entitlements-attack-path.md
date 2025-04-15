# Attack path

In this document, you’ll find all the information about **Cloud Entitlement's** **Attack path** page. This page shows which actions or permissions can be used to trigger an attack, escalate privileges, or exploit a vulnerability within your connected AWS accounts. You can access a detailed map on how each policy is attached to a user or group to mitigate the vulnerability accordingly.

## Path to access

1. Access Cloud Security.  
2. On the **Cloud Entitlements** product, click **Access**.  
3. In the left menu, click **Attack Path**.

## Attack paths report

| Item | Description |
| :---- | :---- |
| **Attack** | The name of the policies identified as vulnerable to attacks. There are four policies in total: *Attach Policy*, *Create Policy Version*, *Set Default Policy Version*, and *Update Assume Role*. |
| **Identities**  | The number of identities that were assigned the vulnerable policy. |

Use the filter at the top of the report to locate specific attacks based on the provider.

By clicking on any attack from the list, the page will be updated to a new screen of the specific recommendation. In this screen, you’ll have the following information for the attack:

| Item | Description |
| :---- | :---- |
| **Environment**  | Contains the AWS account connected to **Cloud Entitlements**. |
| **Type**  | Indicates the type of the identity. The types are: **User** and **Group**. |
| **Principal**  | Shows the principal name. |
| **Account ID**  | Shows the AWS account ID. |

Use the search bar at the top of the list to locate specific identities. Next to the search bar, you'll find filters that allow you to filter the report based on the **Type**.

By clicking on any field from the report, you’ll access the [Identity details](https://docs.senhasegura.io/v4/docs/cloud-entitlements-attack-path#identity-details-modal) modal for the selected principal.

### **Identity details modal**

The **Identity details** modal shows a graphical representation of how the identity has the attached attack. It shows a map of the **Services**, **Users**, **Groups**, **Actions**, **Resources**, **Roles**, and **Policies** that lead to the attack path. You can also view the **Description**, **Requirements**, and **Impact** of this particular attack. This interactive map can be used to identify which action must be taken to mitigate the vulnerability, be it detaching a policy or a role from a user, removing a user from a group, or reconfiguring resources or actions.

| Item | Description |
| :---- | :---- |
| **Filter**  | Field to filter the search for elements on the map. When a term matches the inserted pattern, the elements are visually highlighted. |
| **Settings**  | Button to expand the map configuration options. |
| **Layouts**  | Field to select the map model. There are three models: **Radial out 2D**, **Force directed 2D**, and **Force directed 3D**. |
| **Zoom in**  | Button to zoom in on the map. |
| **Zoom out**  | Button to zoom out on the map. |
| **Reset camera**  | Button to reset the zoom to the initial state. Does not change the chosen layout. |

