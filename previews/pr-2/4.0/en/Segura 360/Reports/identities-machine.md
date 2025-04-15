# Machine identities

This document provides information about the **Machine identities** report in the **Reports** panel, which displays information about all machine identities from the **DevOps Secret Manager (DSM)**, **Certificate Manager**, **PAM Core**, and **Discovery** modules.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Reports**.  
2. In the side menu, select **Machine identities**.

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Actions** | Dropdown menu | Displays the options: *Print report*, *Export CSV*, and *Schedule report.* |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **Identifier** | Text field | Filters the machine identities by the identifier. |
| **Type** | Dropdown menu | Filters the identities by the type. The types are: *SSH key*, *Certificate*, *Cloud Credential*, *Credential*, and *Service account*. |
| **Owner** | Text field | Filters the machine identities by the owner. |
| **Status** | Dropdown menu | Filters the machine identities by the status. The options are: **Enabled** or **Disabled**. |
| **Managed?** | Dropdown menu |  Filters identities based on their management status in Segura. An identity is considered managed in the following cases: <br>- **Certificates**: when configured for automatic publishing near their expiration date.<br>- **Passwords or secrets**: when configured for periodic rotation.<br>- **Credentials or Cloud Credentials**: when Segura has custody of the password. <br><br>Segura doesn’t manage identities that don’t fit into these categories. The options are: **Yes** or **No**. |
| **Last change** | Text field | Filters the identities by last modification date. |

### Report fields

- **Identifier.**  
- **Type.**  
- **Owner.**  
- **Status.**  
- **Managed?.**  
- **Last change.**  
- **Origin**: origin of the identity.  
- **Actions**: the options will vary according to the type of the identity, besides the **Service Account** type.  
    - **SSH key**  
        - **Edit**: opens the [SSH keys registration](/v4/docs/pam-credential-ssh-keys-registration) report screen.
        - **Details**: opens the [SSH keys details](/v4/docs/pam-credential-ssh-keys-details) report screen.
        - **History**: opens the SSH keys history report screen. More information in [SSH keys](/v4/docs/pam-credential-ssh-keys).
    - **Certificate**  
        - **Certificate information**: opens the [Certificate information](/v4/docs/certificate-manager-certificate-information) report screen. 
        - **E-mails sent**: opens the [Outbox](/v4/docs/outbox) report screen. 
    - **Cloud Credential**  
        - **Details**: opens the [Credentials](/v4/docs/cloud-iam-credentials) report screen. 
        - **Delete**: opens a pop-up to delete the cloud credential.  
    - **Credential**  
        - **View**: opens the [View credential](/v4/docs/pam-credential-view-credential) report screen.
        - **Details**: opens the [Credentials details](/v4/docs/pam-credential-credentials-details) report screen.
        - **History**: opens the [Credential password history](/v4/docs/pam-credential-all-credentials) report screen.
        - **Edit**: opens the [Credentials registration](/v4/docs/pam-credential-credentials-registration) report screen.
        - **Clone**: opens a pop-up and clones the credential.  
    - **Service Account**

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::