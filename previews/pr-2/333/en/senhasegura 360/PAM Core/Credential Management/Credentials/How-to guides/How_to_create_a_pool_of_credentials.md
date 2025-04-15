# How to create a pool of credentials

A credential pool is a set of shared credentials. You can use credential pools to simplify credential management and improve security. By centralizing credentials in a pool, administrators can better control access to credentials and apply consistent security policies to all credentials.

To create a pool of credentials on the senhasegura platform, follow the steps below:

1. In the top left corner, click **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings > Credentials > Pool of credentials**.
3. On the list screen for credential pools, in the top bar, click on **View actions**, represented by the three dots icon, and in the drop-down menu, select **+ New pool**.
4. On the **Pool of credentials** registration form, fill in the following fields:
    1. **Identification name**: a name to identify the credential pool.
    2. **Enabled**: select the **Yes** checkbox.
5. In the **Credentials** section:
    1. Click the the sum icon next to the word **Credentials**.
    2. In the **Credentials** modal, select the credentials you want to be part of the new credential pool.
    3. Click **Add**.
6. Click **Save**.

After saving the new pool of credentials, you'll be redirected to the list page. You can now check the pool of credentials you've created.

## How to edit a pool of credentials

1. In the top left corner, click **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings > Credentials > Pool of credentials**.
3. On the list screen for credential pools, locate the pool you want to edit.
4. In the **Action** column, click the **Edit** button, represented by the pencil and paper icon.

## Pool of credentials and discovery

The creation of the credential pool helps automate the **Discovery** process, in which senhasegura may need to authenticate itself on certain devices. When authentication is unsuccessful with a specific credential, senhasegura automatically moves on to the next available credential in the pool. This procedure is repeated until authentication is successful. This eliminates the need to create several independent discovery processes, simplifying administration and making the process more efficient.

You can access the documentation on [Discovery Types](https://docs.senhasegura.io/v3-33/docs/pt/discovery-create-discovery) to find out more.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).

.