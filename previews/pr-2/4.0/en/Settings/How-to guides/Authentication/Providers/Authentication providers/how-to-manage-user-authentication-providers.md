# How to manage user authentication providers

Defining a provider per user is a security measure designed for specific scenarios. For example, it's applicable when dealing with high-trust users who must set up a fallback mechanism for authentication. The system should allow these users to use an alternative option whenever primary authentication fails.

Another situation that requires this measure is the definition of a provider other than the default for a specific user. For more information, access the document on [How to manage authentication providers](/v4/docs/how-to-manage-authentication-providers).

:::(error) (Alert)
Note that if the user has a user authentication provider previously registered, Segura will ignore the system's provider and make the attempt using only the user's authentication provider.
:::

:::(info) (Info)
The admin user installed by default in Segura has the Local provider as the primary authentication provider.
:::

## Set up a provider for a user

To set up a provider for a user, follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. In the side menu, select **Authentication > Providers by user**.
3. Locate the user you want, click the **Actions** button and select **Edit**.
4. In the **Edit provider by user** screen, on the **User** dropdown menu, select the user to define the provicer and, in the **Authentication provider** dropdown menu, select one of the available options to user as authenticaton provider for this user.
5. Under **Order**, set the priority of this provider.
6. Click **Save**.

The selected users will be listed on the main page with the provider and order defined.

***

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).