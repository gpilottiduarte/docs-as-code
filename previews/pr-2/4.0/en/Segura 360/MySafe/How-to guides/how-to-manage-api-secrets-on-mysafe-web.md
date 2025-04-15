# How to manage API secrets on MySafe web


This document provides a step-by-step guide on how to manage API secrets using the web version of **MySafe.**

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **MySafe.**  
2. In the side menu, select **API secrets.**
---
## Add API secret

To add an API secret using the **MySafe** web version, follow the steps below:

1. Click **Add** in the upper-right corner of the **API secrets** screen.   
2. On the **Add API secret** screen, fill in the following:

    :::(error) (Alert\!)  
	 Fields with an asterisk are mandatory.  
	 :::

1. **Name\*:** name to identify the API secret.  
   2. **Url\*:** base address of the API for which the secret will be used.  
   3. **Client ID\*:** unique identifier of the client's application, used in OAuth 2.0 authentication.  
   4. **Client secret:** confidential password used for client authentication in OAuth 2.0 authorization flows.  
   5. **Identifier:** unique string to identify the API secret in **MySafe**.  
   6. **Method:** HTTP method used to call the API.  
   7. **Tags:** keywords to categorize the API secret.  
   8. **Notes:** general observations about the API secret.  

3. Click **Save.**  
 


## View API secret details

To view the details of an API secret using the web version of **MySafe**, follow the steps below:

1. On the **API secrets** screen, identify the desired item or use the search filters.  
2. Click the **Actions button** and select **View API secret** to open the **API secret details** screen.  
3. In **Client secret**, click the **Show** button to view the information.

:::(warning) (Attention)  
 Ensure the environment is safe and avoid exposing the client secret to third parties  
 :::

## Copy Client ID and Client secret 

To copy the **Client ID** and **Client secret** using the web version of **MySafe**, follow the steps below:

1. On the **API secrets** screen, identify the desired item or use the search filters.  
2. Click the **Actions button** and select **View API secret** to open the **API secret details** screen.  
3. In **Client ID**, click **Copy**.  
4. In **Client Secret**, click **Copy**.

:::(warning) (Attention)  
 The copied information is temporarily stored in the device's clipboard and may be accessed by other programs.  
 :::

## Edit API secret

To edit an API secret's information using the **MySafe** web version, follow the steps below:

1. On the **API secrets** screen, identify the desired API secret or use the search filters.  
2. Click the **Actions** **button** and select **Edit**.  
3. In the **Edit API secret** screen, make the necessary changes.  
4. Click **Save**.

## Share API secret with a MySafe user

To share an API secret with other **MySafe** users using the web version, follow the steps below:

1. On the **API secrets** screen, identify the desired API secret or use the search filters.  
2. Click the **Actions** **button** and select **Share**.  
3. Click the **Internal** card.  
4. Open the dropdown menu to find the user or group you want to share the API secret with.  
5. Set the access permissions:  
   1. **Can view**: this option is selected by default and allows the user to view the API secret.  
   2. **Can edit**: this allows the user to also edit the API secret.

:::(warning) (Attention)  
 Users with edit permissions can disable the item.  
 :::

6. Click **Share**.

:::(info) (Info)  
The recipient receives an email with a link that directs them to the shared item's screen. Shared items are also available in the **New items** section of the **MySafe Home** screen until the recipient interacts with the item.  
 :::

* More information on sharing items with users who don’t have a **MySafe** account in [How to manage external share of an item](/v4/docs/how-to-manage-the-external-share-of-an-item).
* More information on batch API secret sharing in [How to manage batch actions](/v4/docs/how-to-manage-batch-actions).

## Revoke API secret sharing with a MySafe user

To revoke sharing an API secret with other **MySafe** users, follow the steps below:

1. On the **API secrets** screen, identify the desired API secret or use the **Shared** \> **Yes** filter.  
2. Click the **Actions** **button** and select **Share**.  
3. Click the **Internal** card.  
4. Find the desired user or group and click **Remove**.  
5. Click **Share** to confirm the action.

## Disable API secret

To disable an API secret using the **MySafe** web version, follow the steps below:

1. On the **API secrets** screen, identify the desired API secret or use the search filters.  
2. Click the **Actions** **button** and select **Disable**.  
3. Click **Yes** to confirm.

More information on batch API secret disabling in [How to manage batch actions](/v4/docs/how-to-manage-batch-actions).

## Enable API secret

To enable an API secret using the **MySafe** web version, follow the steps below:

1. On the **API secrets** screen, click the **Status** filter, select **Inactive**, and click **Filter**.  
2. Locate the desired API secret.  
3. Click the **Actions** **button** and select **Enable**.  
4. Click **Yes** to confirm.

More information on  batch API secret enabling in [How to manage batch actions](/v4/docs/how-to-manage-batch-actions).

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
