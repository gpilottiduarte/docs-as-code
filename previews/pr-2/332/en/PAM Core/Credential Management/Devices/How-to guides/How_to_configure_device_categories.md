# How to configure device categories

The senhasegura platform allows you to register different types of devices from different manufacturers, each with its own specialty and use. This type of registration makes it easier to identify your devices, since you can organize them into categories.

:::(Info) (Info)

In addition to the list of devices offered by senhasegura, it’s also possible to create new types of devices to meet your business needs.

:::

## Devices are classified by:

- Model.
- Type.
- Vendor.

:::(Info) (Info)

In both, **Connectivity** and **Logs**, registering new elements won’t be possible. Thus, the only possible operation is to *issue, download and schedule reports*. To learn how to perform these operations, access the documentation on [How to issue, download and schedule device reports](/v3-32/docs/general-information-how-to-issue-download-and-schedule-device-reports).

:::

## How to register a device product

To register a new device template in **PAM Core**, follow these steps:

1. On the upper left corner of the senhasegura platform, click on the **Grid Menu**, identified by the nine squares, and select **Devices**.
2. From the side menu, select **Settings ➔ Products**.
3. The listing of device templates will load on the main **Device Products** page.
4. Click on the **View Actions** icon, identified by the three vertical dots, select **+New**.

### In the Device Template pop-up window.

Fill in:

1. **Name**.
2. For **Enabled**, select **Yes**.
3. For **Type**, select the device type.
4. For **Vendor**, select the manufacturer of this new device.
5. Click the **Choose file**  button to load an icon to identify the device model.

Save the new template by clicking the **Save** button.

## How to register a device type

To register a new device type in **PAM Core**, follow these steps:

1. In the upper left corner of the senhasegura platform, click on the **Grid Menu**, identified by the nine squares, and select **Devices**.
2. From the side menu, select **Settings ➔ Types**.
3. The listing of device types will load on the main **Device Types** page.
4. Click on the **View Actions** icon, identified by the three vertical dots, select **+New device type**.

### In the device type pop-up window

1. Fill in a **Name**.
2. For **Enabled**, select **Yes**.
3. Click the **Choose file** button to load an icon to identify the device model.

To save the new device type, click the **Save** button.

## How to register a vendor

To register a new device vendor in **PAM Core**, follow these steps:

1. In the upper left corner of the senhasegura platform, click the **Grid Menu** button, identified by the nine squares, and select **Devices**.
2. From the side menu, select **Settings ➔ Vendors**.
3. The manufacturer listing will load on the main **Vendors** page.
4. Click the **View Actions** icon, identified by the three vertical dots and select **+New**.

### In the vendor pop-up window

1. Fill in a **Name**.
2. Under **Enabled**, select **Yes**.
3. Click the **Choose file** button to load an icon to identify the device vendor.

To save the new manufacturer, click the **Save** button.

::: (Warning) (Important)
All ID icons you upload must be in JPG or PNG formats, and must not exceed 200 KB.
:::

## How to register a site

To register a new site in **PAM Core**, follow these steps:

1. In the upper left corner of the senhasegura platform, click the **Grid Menu** button, identified by the nine squares, and select **Devices**.
2. From the side menu, select **Settings ➔ Sites**.
3. The site listing will load on the main **Sites** page.
4. Click the **View Actions** icon, identified by the three vertical dots and select **+New**.

### In the pop-up device site window

1. Fill in a **Name**.
2. Under **Active**, select **Yes**.

To save the new site, click the **Save** button.

## How to register connectors

To register a new network connector in **PAM Core**, follow these steps:

1. In the upper left corner, click the **Grid Menu** button, identified by the nine squares, and select **Devices**.
2. From the side menu, select **Settings ➔ Connectors** located under the **Network Connectors** subsection.
3. The list of network connectors will load on the main **Network connector** page.
4. Click on the **View Actions** icon, identified by the three vertical icons and select **+New**.

### In the new network connector pop-up window

1. Fill in a **Name**.
2. Under **Enabled**, select **Yes**.

### In the authentication tab

Fill in:

1. **IP** of the connector.
2. **Port** of the connector.
3. **Username** of that connector.
4. **Password** linked to the user.
5. **Fingerprint** of the user.

### In the agents tab

In Agents click on the **+** button, identified by the sum symbol, and fill in the fields:

1. **Name**, with the agent’s name.
2. **Port**, with the agent's port.

To save the new connector, click the **Save** button.

## Next
1. [How to manage devices](/v3-32/docs/pam-how-to-edit-clone-disable-or-reactivate-a-device)
2. [How to manage devices without credentials](/v3-32/docs/pam-devices-without-credentials).
3. [How to check the device connectivity](/v3-32/docs/pam-devices-connectivity-test).
4. [Reference for devices](/v3-32/docs/pam-reference-for-devices).
5. [Reference for device filters](/v3-32/docs/pam-reference-for-device-filters).
***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).