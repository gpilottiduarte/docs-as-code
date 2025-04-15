# How to manage user authentication providers

Defining a provider per user is a security measure designed for specific scenarios. For example, it's applicable when dealing with high-trust users who must set up a fallback mechanism for authentication. The system should allow these users to use an alternative option whenever primary authentication fails.

Another situation that requires this measure is the definition of a provider other than the default for a specific user. For more information, access the document on [How to manage authentication providers](/v3-32/docs/how-to-manage-authentication-providers).

:::(error) (Alert)
Note that if the user has a user authentication provider previously registered, senhasegura will ignore the system's provider and make the attempt using only the user's authentication provider.
:::

:::(info) (Info)
The admin user installed by default in senhasegura has the Local provider as the primary authentication provider.
:::

## Set up a provider for a user

To set up a provider for a user, follow the steps below:

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Authentication > Provider per user.**
3. Click **Show actions**, represented by the three vertical dots, and select **New**.
4. In the **Provider per User** window, select one of the available options.
5. Under **Order**, set the priority of this provider.
6. Click the sum icon next to the word **Users** to open the **System Users** modal.
7. In the **System Users** modal, locate the users you want.
8. Check the box on the left next to the user code to select them.
9. Click **Add**.
10. Click **Save**.

The selected users will be listed on the main page with the provider and order defined.

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).