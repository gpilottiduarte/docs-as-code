# How to create a pool of credentials

A credential pool is a set of shared credentials. You can use credential pools to simplify credential management and improve security. By centralizing credentials in a pool, administrators can better control access to credentials and apply consistent security policies to all credentials.

To create a pool of credentials on the Segura platform, follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Management > Credentials > Credentials pool**.
3. In the bottom-right corner, click on **+Add**.
4. On the **Credentials pool** registration form, fill in the following fields:
    1. **Identification name**: a name to identify the credential pool.
    2. **Status**: select the checkbox.
    1. Click the **Add** button.
    2. Select the credentials you want to be part of the new credential pool.
    3. Click **Add**.
6. Click **Save**.

After saving the new pool of credentials, you'll be redirected to the list page. You can now check the pool of credentials you've created.

## How to edit a pool of credentials

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Management > Credentials > Credentials pool**.
3. On the list screen for credential pools, locate the pool you want to edit.
4. In the **Actions** column, click the **Edit** button.

## Pool of credentials and discovery

The creation of the credential pool helps automate the **Discovery** process, in which Segura may need to authenticate itself on certain devices. When authentication is unsuccessful with a specific credential, Segura automatically moves on to the next available credential in the pool. This procedure is repeated until authentication is successful. This eliminates the need to create several independent discovery processes, simplifying administration and making the process more efficient.

You can access the documentation on [Discovery Types](https://docs.Segura.io/v4/docs/pt/discovery-create-discovery) to find out more.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).

