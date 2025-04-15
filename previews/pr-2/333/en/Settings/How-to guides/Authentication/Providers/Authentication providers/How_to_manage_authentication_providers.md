# How to manage authentication providers

Note that if you have an environment running, the best practice is to configure the protocol before activating it. In cases where no previous environment is running, the action order doesn't interfere with the operation.

On senhasegura, you can configure and activate the following authentication providers:

* Local.
* LDAP.
* Radius.
* Active Directory (LDAP).
* TACACS.
* OpenID.
* SAML.

## Activate a provider

To activate a provider, follow the steps below:

1. On senhasegura, in the top left corner, click **Grid Menu**, represented by the nine squares, then select **Settings**.
2. In the side menu, select **Authentication > Providers**.
   1. All deactivated providers will be listed in red.
3. Locate the provider you want and, in the **Action** column, click **Activate**.

A success message will appear, and the provider will be listed in black with the status **Enabled**.

## Define the order in which providers are used

To set the order, follow the steps below:

1. In the **Action** column, click the three vertical dots icon.
2. Select **Change**.
3. In the **Order** field, set the provider's position in the list.
   1. The lower the number, the higher the priority.
4. Click **Save**.

The provider will be displayed on the main page with the defined order.

:::(info) (Info)
If there are multiple active providers, the authentication order will follow the values specified in the Order field. If a user isn't located at the provider designated as Order 1, senhasegura will try to authenticate them at the provider indicated as Order 2, and so on. Click on the Order column to sort the list according to the configured priority.
:::

:::(warning) (Caution)
For security, set up a primary authentication method and keep Local as the last option for end users.
:::

## Disable a provider

To disable a provider, follow these steps:

1. In the **Action** column, click **Disable**, represented by the trash can icon.
2. In the confirmation modal, click **Yes**.

A success message appears, and the provider is listed in red, with the status **Disable**

***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).