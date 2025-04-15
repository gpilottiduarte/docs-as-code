# Parameters

This document provides detailed information about the **Parameters** screen of **Domum Remote Access**. For more details on how to set parameters, refer to [How to set the parameters](https://docs.senhasegura.io/v3-33/docs/domum-how-to-set-the-parameters).

## Path to access

1. On **senhasegura**, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Domum Remote Access**.  
2. In the side menu, select **Settings** > **Parameters** > **Domum**.

## Top bar

At the top of the **Parameters** screen, you’ll find the following sections:

| Item | Description |
| :---- | :---- |
| **Internal users domain** | The system automatically completes the field. |
| **Third-parties domain** | The system automatically completes the field. |
| **Enable external authentication**\* | Field used to enable external authentication. The options are: **Yes** and **No**. **Note:** If this field is enabled, it requires a provider registered in senhasegura. If no provider is registered, the external authentication won’t work properly.  |
| **Callback URL for SSO** | The system automatically completes the field. It only appears if the **Enable external authentication** field is enabled. |
| **Automatically grant access on Internal user provisioning**\* | Field used to automatically send the link after user provisioning. The options are: **Yes** and **No**. |
| **Duration** | Field used for setting the duration of access. It only appears if the **Automatically grant access on Internal user provisioning** is enabled. |

## Initial authentication token

The section displays the following fields:

| Item | Description |
| :---- | :---- |
| **Provider** | Field used for defining how the user receives the link. The options are: **Email** and **SMS**. |
| **Expiration time of the first token (in minutes)** | Customizable field for setting the expiration time of the first token. The measurement is in minutes. |

## E-mail configuration

The section displays the following field:

| Item | Description |
| :---- | :---- |
| **Sending account** | Field with a dropdown menu for choosing a previously registered SMTP account. This account will be responsible for sending access links and notifications. |

## **Notifications**

The section displays the following fields:

| Item | Description |
| :---- | :---- |
| **Access expiration. Notify:** | Field with dropdown menu. Used to indicate the users who will receive notification of access expiry. Displays the options Access requester, Access user, or Requester and User. |
| **When notify?** | Field for indicating, in numbers, how far in advance the notification should be made. |
| **Before expiration** | Field for indicating, in units of time, how far in advance the notification should be made. |
