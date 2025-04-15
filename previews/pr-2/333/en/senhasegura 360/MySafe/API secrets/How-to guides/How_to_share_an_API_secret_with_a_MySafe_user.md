# How to share an API secret with a MySafe user

This document provides a step-by-step guide on how to share an API secret with a user who has a **MySafe** account. 

## Requirements

* An active API secret and valid users. For more information, access the document on [How to add an API secret](/v3-33/docs/mysafe-api-secret-add)

:::(Info) (Info)
For more information on how to temporarily share an item with a user who doesn’t  have a **MySafe** account, access the document on [How to manage external sharing of an item](/v3-33/docs/how-to-manage-the-external-share-of-an-item).
:::

***

## Share an API secret with a MySafe user
To share an API secret with another registered **MySafe** user, follow the steps below:


1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **MySafe**.
2. In the side menu, select **API secrets**.
3. From the list, locate the API secret you want to share.
4. In the **Action** column, click the three vertical dots icon and select **Share**.
5. On the **Share** screen, select the **Internal** card, represented by the computer icon.
6. In the sharing window, you can search for users by *name, username, email address* or *groups* (private or user groups).
    :::(info) (**Info**)
    You need to configure **MySafe**'s **[Private groups](/v3-33/docs/mysafe-private-group)** for them to appear in the sharing search.
    :::
7. Once the user(s) and/or group(s) found appear on the **Share** screen, select the sharing permissions:   
    1. **Can view**:this checkbox grants viewing permission to the selected user. By default, this checkbox is marked whenever an API secret is shared with another user.
    2. **Can edit**: check this box to grant editing permission to the selected user.

   
    :::(Warning) (Attention)
    Users with editing permission can disable the API secret.
    :::
    :::(Info) (Info)
    To remove a user and/or group, click the **trash icon** for the respective user and/or group.
    :::
        
8. Click **Share**.

The message "**Shared**" confirms the action. Click **Close** to close the window.
Upon completing the sharing, the **Shared** column in the **API secrets** screen report will show the status as **Yes**.
In the **API secret details** screen, in the **Users with access to information** section, you can view the members and/or groups with access to the API secret and their respective permissions (viewing and/or editing).

:::(info) (**Info**)
You can also share the API secret from the **MySafe** homepage shortcut via **MySafe > Homepage > Card of the API secret you want to share > Drop-down menu (represented by the three vertical dots icon) > Share**.
Once the API secret is shared, you’ll  see the word **Shared** at the bottom of the API secret card.

:::
***


Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.