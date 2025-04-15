# Identities report

This document provides information about the **Identities** report screen. This report shows information about access permissions, unauthorized identity access, recommendations, and entities.

## Path to access

1. Access **Cloud Security**.  
2. Access the **Cloud Entitlements** product.  
3. In the **Cloud Entitlements** menu, click **Identities**.

Within the report, you'll find the following information for each identity:

| Item | Description |
| ----- | ----- |
| Cloud Service Provider | Displays an icon representing the associated CSP for the identity. This column is shown by default. |
| Cloud ID | Displays the Cloud ID according to the provider. This column must be enabled manually. |
| Environment | Displays the name of the environment within **Cloud Entitlements** associated with the identity. This column is shown by default. |
| Type | Displays the identity type. This column is shown by default. |
| Principal | Displays the name of the identity within the CSP. This column is shown by default. |
| Score | Displays the value to calculate the **Impact** field. This column must be enabled manually. |
| Impact | Displays the risk level associated with the identity's impact on your environment. The impact level is categorized from A to E, with A representing the lowest impact and E representing the highest. This column is shown by default. |
| Total issue | Displays the total of recommendations linked to this identity. This column must be enabled manually. |
| Recommendations | Displays the number of recommendations linked to the identity separated by criticality levels. The criticality levels are indicated by colors: **Red** indicates high, **Orange** indicates medium, and **Yellow** indicates low. This column is shown by default. |
| Last scan check | Displays the exact date and time when the synchronization with the identity occurred. This column must be enabled manually. |
| Creation Date | Displays the creation date of this identity. This column must be enabled manually. |
| Subtype | Displays if the user is a member or a guest. This column must be enabled manually. **Note:** This column is only available for AWS identities. |

:::(Error) (Alert)
If an AWS account access key is no longer valid, a red alert will be displayed next to the account icon, and as a result, the date and time of the last scan synchronization will no longer be updated.
:::

:::(Info) (Info)
**Cloud Entitlements** scans the environments every 4 to 10 minutes.
:::

Use the search bar at the top of the report to look for a specific identity. In the upper-right corner, you can also export the report in .csv format, and show or hide columns.

Next to the search bar, you'll find filters that allow you to filter the report based on the following table:

| Filter | Description |
| ----- | ----- |
| Provider | Filters the identities by their provider. The options are: *AWS*, *GCP*, *Azure*, and *Oracle*. This filter is shown by default. |
| Environment | Filters the identities by their environments. This filter is shown by default. |
| Type | Filters the identities by their type. The options are: *User*, *Group*, *Roles*, and *Application*. This filter is shown by default. |
| Recommendations | Filters the identities by their criticality level. You can select multiple levels of criticality at the same time. The levels are: *High*, *Medium*, *Low*, and *Info*. This filter is shown by default. |
| Subtype | Filters the identities by their subtype. The options are: **Member** and **Guest**. This filter is only shown if the **Subtype** column is enabled. |
| Identities in a group | Filters the identities according to whether the principal is part of a group or not. This filter is shown by default. |
| Administrator | Filters the identities according to whether the principal is an administrator or not. This filter is shown by default. |
| Active JIT | Filters the identities according to whether the identity has a JIT access active or not. |

By clicking on a specific identity, it opens a new panel with more detailed information about the identity.

## Identities section

| Item | Description |
| ----- | ----- |
| Entity type | Type of entity. The options are: *User*, *Group*, *Roles*, *Application*, and *Service account*. |
| Group | Group that the user belongs to. |
| ARN | Unique identifier for the AWS entity. This field is only visible for AWS entities. |
| Has admin access | Shows if the entity has administrator access. The options are: **Yes** or **No**. |
| Auth method | Shows all authentication methods associated with the identity. This field is only visible if the identity is an **User**. |
| \+ Owner | Button that displays and assigns an owner to an identity. |

### Recommendations tab

| Item | Description |
| ----- | ----- |
| Recommendations | Shows all recommendations that are recommended to be modified. |
| Compliant | Shows all recommendations that are in compliance with the provider. |

### Findings tab

This tab varies according to the provider of the identity selected, see the following tables for each provider:

### Findings tab for Amazon Web Services

#### Policies

| Item | Description |
| ----- | ----- |
| \+ Add | Button to add a temporary policy. This button is only available if your account integration mode is **Read and Write**. More information in [How to set temporary policies for AWS identities](/v3-33/docs/how-to-set-temporary-policies). |
| Policy | Policy attached to the identity. |
| Type | Type of policy. The types are: *Group policy* and *Attached policy*. |
| Expiration date | Expiration date of the temporary policy. |
| Remove | Button to remove a temporary policy. |

This section has a **Search** button to help users find the policies.

#### Service usage

| Item | Description |
| ----- | ----- |
| Service | Name of the service. |
| Policy | Policy attached to the identity and a service. |
| Date | Date when the service was last used. |

This section has a **Search** button, and a **Date** filter to help users find the services.

### Findings tab for Azure

#### Roles

| Item | Description |
| ----- | ----- |
| \+ Add | Button to add a temporary policy. This button is only available if your account integration mode is **Read and Write**. More information in [How to set temporary policies for Azure identities](/v4/docs/how-to-set-temporary-policies-for-azure-identities). |
| Name | Name of the role assigned to the user. |
| Direct assignment | Displays if the role was assigned directly to the user. |
| Type | Displays the type of role assigned to the user. |
| Remove | Button to remove a temporary policy. |

This section has a **Search** button to help users find the roles.

#### Subscription resources

| Item | Description |
| ----- | ----- |
| Subscription | Subscription resource identifier. |
| Resource | Name of the resource. |
| Type | Type of the resource. |
| Roles | Role attached to the user allowing access to the subscription resource. |
| Actions | Actions to be executed on the resource. |

This section has a **Search** button to help users find the subscriptions.

#### Members

This section only appears if the identity is a group.

| Item | Description |
| ----- | ----- |
| Members | Members of the group. |
| Type | Type of the members. |

### Findings tab for Google Cloud Provider

#### Roles

| Item | Description |
| ----- | ----- |
| Roles | Role assigned to the identity.  |
| Type | Type of the role assigned to the identity. The options are: *Basic role*, *Predefined role* and *Custom role*. |

This section has a **Search** button to help users find the roles.

#### Services

| Item | Description |
| ----- | ----- |
| Service | Service assigned to the identity. |
| Date | Date when the service was used. |

This section has a **Search** button, and a **Date** filter to help users find the services.

#### Access key

This section is only visible if the identity is a service account.

| Item | Description |
| ----- | ----- |
| Key ID | ID of the key. |
| Key creation date | Creation date of the key. |
| Key expiration date | Expiration date of the key. |

This section has a **Search** button to help users find the roles.

### Findings tab for Oracle Cloud

#### Statement

| Item | Description |
| ----- | ----- |
| Effect | Sets if the policy allows or denies the access. |
| Subject | The subject of the policy that specifies groups or principals that the policy grants permission to. |
| Verb | The type of access. The options are: *inspect*, *read*, *use*, and *manage*. |
| Resource type | The type or resource to which the policy applies. |
| Location | The policies' scope of access to a compartment or tenancy. |
| Condition | Conditions that return resources based on specified parameters. |

This section also has a **Search** button to help users find the statements.

#### API keys

This section is only visible if the identity is a **User**.

| Item | Description |
| ----- | ----- |
| Fingerprint | Fingerprint of the key. |
| Created date | Creation date of the API key. |

This section also has a **Search** button to help users find the API keys.

#### Groups

| Item | Description |
| ----- | ----- |
| OIDC | Group's Oracle Cloud ID. |
| Member | Group's members. |

This section also has a **Search** button to help users find the groups.

### Access path tab

The **Access path** provides users with a comprehensive view of the relationships between identities and the services they interact with. In essence, it provides a visual representation of how an identity is connected to specific services and permissions, making it easier to identify potential security vulnerabilities or unauthorized accesses.

| Item | Description |
| :---- | :---- |
| **Filter** | Field to filter elements on the map. When a term matches the inserted pattern, the elements are visually highlighted. |
| **Settings** | Button to expand the map configuration options. |
| **Layouts** | Field to select the map model. The options are: *Radial out 2D, Force directed 2D*, and *Force directed 3D*. |
| **Zoom in** | Button to zoom in on the map. |
| **Zoom out** | Button to zoom out on the map. |
| **Reset camera** | Button to reset the zoom to the initial state. It doesn’t change the chosen layout. |
| **Expand** | Icon to expand the tab. |
| **Caption** | Field to indicate the captions for the icons. |
| **Date** | Field to indicate what services were accessed between a specific period of time by setting colors to the arrows. |

