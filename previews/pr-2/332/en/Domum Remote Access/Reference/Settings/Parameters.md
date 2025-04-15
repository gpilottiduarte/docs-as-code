# Parameters

This article describes the information available on the **Parameters** home screen of **Domum Remote Access**. For more details, refer to [How to set the parameters](/v3-32/docs/domum-how-to-set-the-parameters).

:::(Info) (Info)

Path to access:

* **Domum Remote Access > Settings > Parameters > Domum**

:::

## Top

At the top of the Parameters screen, you’ll find the following sections:

| Item | Description |
| --- | --- |
| **Internal users domain** | The system automatically completes the field. |
| **Third-parties domain** | The system automatically completes the field. |
| **Enable external authentication*** | Mandatory field used to enable external authentication. It displays the options **Yes** and **No**. |
| **Callback URL for SSO** | The system automatically completes the field. It only appears if external enablement is activated. |
| **Automatically grant access on Internal user provisioning*** | Mandatory field used to automatically send the link after user provisioning. It displays the options **Yes** and **No**. |
| **Duration** | Used for setting the duration of access. It only appears if automatic link sending is enabled. 

## Initial authentication token

The section displays the following fields:

| Item | Description |
| --- | --- |
| **Provider** | Used for defining how the user will receive the link. It displays the options **Email** and **SMS**. |
| **Expiration time of the first token (in minutes)** | Customizable field for setting the expiration time of the first token. The measurement is in minutes. |

## E-mail configuration
The section displays the following field:

| Item | Description |
| --- | --- |
| **Sending account** |Field with a drop-down menu for choosing a previously registered SMTP account. This will be the account responsible for sending access links and notifications. |

## Notifications
The section displays the following fields:

| Item | Description |
| --- | --- |
| **Access expiration. Notify:** | Field with drop-down menu. Used to indicate the users who will receive notification of access expiry. Displays the options Access requester, Access user, or Requester and User. |
| **When notify?** | Field for indicating, in numbers, how far in advance the notification should be made. |
| **Before expiration** | Field for indicating, in units of time, how far in advance the notification should be made.|