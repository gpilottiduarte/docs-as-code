# How to configure a credential in Segura to use the Database Proxy with Oracle

This document provides information about the step-by-step guide on how to configure a credential to be used via the Oracle Database Proxy.

It'll take six steps to configure the Oracle database so that it’s accessible via Database proxy in Segura, this document is the **fifth step**.

![step5-alone.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/step5-alone.png){height="" width=""}

:::(warning) (**Attention**)
It’s extremely important to correctly follow the order of documents for configuring the Oracle database to function correctly as a Database Proxy.
:::

## Requirements

* Oracle DB Server configured the minimum version is 19.0.0.0.0
* Server with ORAPKI installed to create Wallets.
* Connectivity of the user's workstation with Segura on ports 1521 and 2484.
* Certificate authority  (CA) for signing Oracle DB certificates and the database credential.
* Database client installed.
    * Dbeaver, minimum version: 23.1.0
    * SQLPlus, minimum version: 21.0.0.0.0
    * SQL Developer, minimum version: 23.1.0.097
* Don’t have filters enabled for the certificate.

---
## Create a credential
There are two ways to access the Credentials configuration area.

The first way is through the Quick Actions menu, located in the navigation bar. To configure a credential using Quick Actions, follow the steps below:

1. Click on the **Quick Actions** icon, represented by a piece of paper with a plus sign, and select **Credential**.

The second way is by accessing it through the **Products Menu**. To do this, follow the steps below:

1. In Segura, on the navigation bar, hover over the **Products Menu** and select **PAM Core**.
2. In the side menu, select **Credentials** > **All Credentials**.
3. In the actions menu, click **Add**.

Both actions will open a new screen with the credential registration form. Fill in the following information to configure the new credential:

In the **Information** tab, fill in:
1. **Username**: choose the username.
2. **Password type**: choose **Local Admin** or **Local User**.
3. **Device**: choose the device of type database.
4. **Status**: activate the button.
5. **Set current password**: it is not necessary to create a password, as authentication will be done via the certificate.

In the **Session Settings** tab, go to the **Certificate** section and fill in:
1. In the **Certificate file** option, click **Drag and drop the file here** and upload the `<CREDENTIAL>.crt` certificate file created earlier for the credential.
2. In the **Key file** option, click **Drag and drop the file here** and upload the `<CREDENTIAL>.key` key file created earlier for the credential.
3. If your key has a password, enter it in the **Key password** field. 
    :::(warning) (**Attention**)
    If the user used a password to create the certificate, the same password created by the user must be entered in this field.
    :::
4. Go to the **Review** tab.
5. Click **Save**.

The system will display a confirmation message, certifying that the credential is registered.


Finishing the fifth step of configuring Oracle to be used via Database Proxy, access the document [How to configure Oracle Wallet automation credential](/v4/docs/pam-sessions-how-to-configure-oracle-wallet-automation-credential) to perform the sixth step of the configuration.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.