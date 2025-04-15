# How to configure a JIT credential in Segura

The Segura platform offers the possibility of using Just-In-Time (JIT) credentials. This configuration manages the use time of services, such as when an account is created or activated or needs specific permissions added during a period to perform actions.

:::(Info) (Info)
Be aware that after this access, the account is deleted, inactivated, or removed.
:::

JIT access configuration is done when you register or edit a credential. If you are registering a credential, access the documentation on **How to configure a credential in Segura**. In case you are editing a credential, follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Credentials > All credentials**.
3. In the list of credentials, locate the credential you want to edit and in the **Action** column, click on the **Edit** option from the drop-down menu.

:::(Info) (Info)
Before registering a JIT-type credential, you must first  configure the **creation/deletion** and **enable/disable** templates for the systems the credentials will use. These templates will be configured in the credentials and then used when the proxy session is initialized. For more information on configuring execution templates, access the Templates documentation.

**The user can't register plugins.**
:::

In both modes, the **Credential** form will open. In the form, go to the **JIT Settings** tab and fill in the following fields:

1. **Just In Time settings:** select the **Enabled** field.
2. In the **Just In Time** **Type** drop-down menu, select one of the two options:
    1. **Enable/Disable:** the JIT credential will be created when the Proxy session is requested to be initialized and will be deleted when the session ends. The creation and removal of a JIT credential is a previously defined privilege that makes it possible to create a credential for a specified period, which will be automatically deleted after that period.
    2. **Creation and deletion:** the JIT credential will be activated when it requests the initialization of the Proxy session and will be inactivated at the end of the session.
3. In the **Authentication settings** section, check the **Use own credential to connect** option if you want to use the credential in question to connect. If not, uncheck the option and enter a credential for authentication in the **Authentication credential** drop-down menu.

According to the **Type of Just In Time** you have chosen, one of the two sections will be enabled.

In case you selected **Enable/Disable credential**, fill in the following fields:

1. In the **Credential enable plugin** drop-down menu, select one of the registered plugins.
2. In the **Credential enable template** drop-down menu, select one of the registered templates.
3. In the **Credential disable plugin** drop-down menu, select one of the registered plugins.
4. In the **Credential disable template** drop-down menu, select one of the registered templates.

In case you selected **Enable/Disable the credential**, fill in the following fields:

1. In the **Credential creation plugin** drop-down menu, select one of the registered plugins.
2. In the **Credential creation template** drop-down menu, select one of the registered templates.
3. In the **Credential deletion plugin** drop-down menu, select one of the registered plugins.
4. In the **Credential deletion template** drop-down menu, select one of the registered templates.

Click the **Continue** button and **Save**.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).