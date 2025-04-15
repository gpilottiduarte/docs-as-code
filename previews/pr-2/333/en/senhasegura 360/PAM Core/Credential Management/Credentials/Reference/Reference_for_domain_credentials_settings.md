# Reference for domain credentials settings

Access the settings for domain credentials by clicking **Grid Menu > PAM Core > Settings > Credentials > Domains**. Clicking on this option will take you to the **LDAP/Active Directory** screen.

## LDAP service settings

| Field | Description |
| --- | --- |
| Disable users with no group when synchronizing? | Inactivates users who, at the time of synchronization between senhasegura and the LDAP server, were not in any group. The options are **Yes** or **No**. This field is mandatory and is set to **Yes** by default. |
| Use a vault credential on authentication? | Uses the credential registered in the vault to authenticate to the LDAP server. The options are **Yes** or **No**. This field is mandatory and is set to **Yes** by default. |

## Login options

| Field | Description |
| --- | --- |
| Update username when logging in? | Updates the username when logging in. The options are **Yes** or **No**. This field is mandatory and is set to **Yes** by default. |
| Update contact e-mail when logging in? | Updates the contact e-mail when logging in. The options are **Yes** or **No**. This field is mandatory and is set to **Yes** by default. |
| Update local password when logging in? | Updates the local password when logging in. The options are **Yes** or **No**. This field is mandatory and is set to **Yes** by default. |
| Enable local user when logging in? | Activates the local user when logging in. The options are **Yes** or **No**. This field is mandatory and is set to **Yes** by default. |
| Block login when user is disabled? | Blocks an inactive user. The options are **Yes** or **No**. This field is mandatory and is set to **Yes** by default. |

## Domain settings

Use this section to add new domains. These domains will be available for registering credentials. To find out more about credentials and domains, go to the documentation on **Domain credentials**.

| Field | Description |
| --- | --- |
| Domain | Field for adding a domain that will be used later. |
| Domain (Short Name) | Field for adding a short name to identify the domain registered on the senhasegura platform. |

:::(Info) (Info)
Domains associated with devices and credentials won’t be deleted.
:::