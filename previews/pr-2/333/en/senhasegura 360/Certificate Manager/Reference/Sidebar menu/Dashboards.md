# Dashboards

The Certificate Manager dashboards offer a centralized view, giving you a single place to monitor certificates and effectively manage your company's security, compliance, and operational continuity.

This article describes the information available on the **Dashboard's** main page.

<!-- Fix callout -->
:::(Info) (Info)
Path to access: **Certificate Manager > Dashboard**.
:::

## Certificates

### Filters

| Item | Description |
| --- | --- |
| **Has it a bond?** |Used to refine the search to display certificates linked or not to devices. |
| **Enabled** |Used to refine the search to display active or inactive certificates. |
| **Revoked?** |Used to refine the search to display revoked or not revoked certificates. |

<!-- Fix callout -->
:::(Info) (Info)
**Active certificates** are the ones you can apply in a process.
**Inactive certificates** are the ones that the product will ignore. They won't be applied or renewed. You can only use them once you change their status.
**Revoked certificates** are those that have been intentionally invalidated by the user.  They can no longer be used.
:::

### Cards

| Item | Description |
| --- | --- |
| **All certificates** |The total count of certificates. |
| **Valid certificates** |The total count of valid certificates (within their valid timeframe).|
| **Invalid certificates** |The total count of invalid certificates (Expired, Renewal requested, Revoked, and Inactive).|
| **Unsecured certificates** |The total count of certificates with SHA1 algorithm and/or keys with 1024 bits or less. |

<!-- Fix callout -->
:::(Warning) (Caution)
Although unsafe certificates should NOT be used, as long as a user has not revoked them, they are still included in the count of valid certificates and can be used in environments.
:::

### Charts

| Item | Description |
| --- | --- |
| **Valid certificates expiration** |Displays only the valid certificates, sorted by their expiration date. |
| **Certificates by status** |Displays all certificates, sorted by status. |
| **Certificates by origin** |Displays all certificates, sorted by origin. |
| **Certificates by CA** |Displays all certificates, sorted by Certificate Authority. |
| **Certificates by organization** |Displays all certificates, sorted by organizations registered in the module settings. |
| **Certificates by environments** |Displays only the certificates applying in the registered environments. |
| **Certificates by systems** |Displays only the certificates applying in the registered systems. |
| **Certificates by responsible** |Displays only certificates with a configured responsible party, sorted by name.|
| **Certificates renewal** |Displays only the certificates in the renewal process, sorted by status. |
| **Certificates by type** |Displays all certificates, sorted by type. |
| **Certificates by security assessment** |Displays all certificates, sorted by security classification (A-NC). |
| **Certificates by key size** |Displays all certificates, sorted by the used key size. |
| **Certificates by key algorithm** |Displays all certificates, sorted by the algorithm of the used key. |

---

## Risk radar

### Radar

| Item | Description |
| --- | --- |
| **Expiration risk analysis** |Used for real-time monitoring of all certificates, sorted by authority and located in the corresponding section according to the expiration date. |

<!-- Fix callout -->
:::(Info) (Info)
Clicking on the green circle that identifies the certificate on the radar opens a window with information about the certificate. At the bottom,  you find the action buttons **Revoke**, **Renew**, **History**, and **Publish**.
:::

### Charts

| Item | Description |
| --- | --- |
|**Security classification**|Displays all certificates according to the security classification (A-NC). Clicking on a certificate's column opens the 'Certificate information' page.|
| **Certificates to expire** |Displays the certificates that are approaching their expiration date. |

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
