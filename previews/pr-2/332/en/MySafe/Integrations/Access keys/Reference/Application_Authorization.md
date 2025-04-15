# Application Authorization

This article contains detailed information regarding the **Application Authorization** screen present on **MySafe**’s **Access keys** screen.

:::(Info) (Info)
This article refers specifically to the screen where you can access information about an active authorization access key, or review details about an updated access key authorization.
:::

**Paths to access:**

**Grid Menu > MySafe > + Integrations > Access keys >** The access key authorization you want to view **> Action** column **> View** (represented by the key icon) **> Application Authorization** screen

---

**Grid Menu > MySafe > + Integrations > Access keys >** The access key authorization you want to change **> Action** column **> Drop-down menu** (represented by the three vertical dots icon) **> Change > Update access key screen > Save > View application authorization  > Application Authorization** screen


## Mandatory fields


| Item | Description |
| --- | --- |
| **Authentication method** | The authentication method used.  |
| **Application** | Name of the client application using the access key. |


| Item | Description |
| --- | --- |
| **Client ID** | Click the eye icon to view the unique identification code for the client application.  |
| **Client Secret** | Click the eye icon to view a confidential key used to authenticate a client application when interacting with an authorization server. |

## Details section fields


| Item | Description |
| --- | --- |
| **Description** | Description of the access key authorization.  |
| **Expiration date** | Expiration date for the access key authorization. If left empty, the access key authorization will only expire if you exit the application or manually revoke the key. |
| **Encrypt sensitive data?** | Informs whether the information is encrypted. The options are **Yes** and **No**. |
| **Certificate validation?** | Informs whether a certificate fingerprint was informed. The options are **Yes** and **No**. |
| **Authorized IPs** | The IP addresses allowed to use the access key authorization.  |
| **Authorized HTTP referers** | The HTTP referers allowed to use the access key authorization. |
| **Tags** | Keywords to help identify the access key authorization. |

## Data
This section displays the information accessible to your user that the application will be able to retrieve. 
When adding or updating an access key authorization, it can display either **Full access** or specific selected information.