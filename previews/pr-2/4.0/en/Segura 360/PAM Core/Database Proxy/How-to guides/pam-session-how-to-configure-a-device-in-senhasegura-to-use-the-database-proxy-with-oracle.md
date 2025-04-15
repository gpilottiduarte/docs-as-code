# How to configure a device in Segura to use the Database Proxy with Oracle

This document provides information about the step-by-step guide on how to configure a device to be used via the Oracle Database Proxy.

It'll take six steps to configure the Oracle database so that it’s accessible via Database proxy in Segura, this document is the **fourth step**.

![step4-alone.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/step4-alone.png){height="" width=""}

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
## Configure the device
There are two ways to access the Devices configuration area.

The first way is through the Quick Actions menu, located in the navigation bar. To configure a device using Quick Actions, follow the steps below:

1. Click on the **Quick Actions** icon, represented by a piece of paper with a plus sign, and select **Device**.

The second way is by accessing it through the **Products Menu**. To do this, follow the steps below:

1. In Segura, on the navigation bar, hover over the **Products Menu** and select **Devices**.
2. In the side menu, select **Device**.
3. In the actions menu, click **Add**.

Both actions will open a new screen with the device registration form. Fill in the following information to configure the new device:

In the **Information** tab, fill in:
1. **Device name (Hostname, IP, URL, or site name, application name...)***: the name that will be used to identify the server.
2. **IP, Hostname or management URL***: the address of the Oracle server.
3. **Device type***: select Database.
4. **Vendor***: select Oracle.
5. **Product***: select Oracle Database.
6. **Site***: add the desired site.
7. **Tags**: add the desired tags.
In the **Connectivity** tab, fill in:
1. In the **Connectivity** section, click the **Add** button.
   1. A row will be added to the connectivity table. In the available fields, fill in:
      1. **Connectivity**: select Oracle.
      2. **Port**: fill in with the value 2484.
      3. Click **Test** to ensure the connection is working.
2. Go to the **Review** tab.
3. Click **Save**.

The system will display a confirmation message, certifying that the device is registered.

Finishing the fourth step of configuring Oracle to be used via Database Proxy, access the document [How to configure a credential in Segura to use the Database Proxy with Oracle](/v4/docs/pam-session-how-to-configure-a-credential-in-Segura-to-use-the-database-proxy-with-oracle) to perform the fifth step and continue the configuration.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.