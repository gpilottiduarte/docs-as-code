# How to set the parameters

Once you configure the SMTP email account, you must establish the parameters to operate **Domum Remote Access**. This document provides the steps for this task.

## Set the parameters in Domum Remote Access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Domum Remote Access**.
3. In the side menu, select **Management ** > **Parameters** > **Domum**.
4. The system automatically completes the **Internal user domain** and the **Third-parties domain** fields.
5. In **Enable external authentication**\*, choose **Yes** or **No**.
    1. If you choose **Yes**, the system automatically completes the **Callback URL for SSO** field.

:::(Error) (Alert)
If you enabled this field, make sure a provider is registered in Segura. If no provider is registered, the external authentication won’t work properly.
:::

6. In **Automatically grant access on Internal user provisioning**\*, choose **Yes** or **No**.
    1. If you choose **Yes**, enter a number in **Duration** of access and, from the dropdown menu, select *Minutes*, *Hours*, *Days*, or *Months*.
    2. If you don't want a specific group to follow the global settings defined in the previous step, you can specify unique settings when creating or editing an internal user group.
7. In **Initial authentication token**, complete the information.
    1.  In the **Provider** section, choose between sending the token through **email** or **SMS**.
    :::(Info) (Info)
    - Segura recommends sending the token through SMS so that access information isn't centralized in one location, keeping the procedure more secure.  
    - Zenvia is the only SMS service available.
    :::
    2. Set the **Expiration time of the first token (in minutes)**.
9. Under **Email configuration**, select a **Sending account** for the access link.
10. In **Notifications**, configure how the notifications will be sent:
    1. In **Access expiration. Notify:**, choose who you want to notify about the expiration. The options are *Access requester*, *Access user*, or *Requester and User*.
    :::(Info) (Info)
    To avoid notifying anyone, simply leave this field empty.
    :::
    2. Under **When notify?**, enter a number and choose the appropriate time unit from the **Before expiration** dropdown menu. You can choose between *Minutes*, *Hours*, *Days*, or *Months*.  
11. Click **Save**.

A pop-up window displays a confirmation message indicating the end of the process. You’ve just established the parameters required to operate **Domum Remote Access**. To complete the initial settings, see [How to add an access reason](/v4/docs/domum-how-to-add-access-reasons).

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
