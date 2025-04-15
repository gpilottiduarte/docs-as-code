# How to manage devices without credentials

All Devices go through a verification flow. In this session, you'll know how to check all devices that are without credentials attached and manage them.

## How to list devices without credentials

To check the devices without credentials, follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Devices**.
2. In the side menu, select **Devices without credentials**.
3. A list of all devices with no credentials attached will be displayed.

:::(Info) (Info)
By default, the initial listing will show all the devices without credentials that you have registered. To filter the devices, you must use the filter bar above the listing page.
:::

Each device will be shown along with a series of information organized in columns, as shown in the table below:

| **Column** | **Description** |
| --- | --- |
| **ID** | Device code. |
| **Name** | Name filled in by the user. |
| **Management** | IP, hostname, or URL responsible for managing the device. |
| **Type** | Type of device registered. |
| **Vendor** | Manufacturer of the device chosen by the user. |
| **Model** | The model selected by the user. |
| **Product** | The locality where the device is accessed. |
| **Site** | The location to access the device. |
| **Connectivity** | Device status for connections. |
| **Domains** | Domains registered by the user. |
| **Tags** | Device identification tags. |
| **Enabled** | Device status. |

## Actions for devices without credentials

You can perform two types of actions for **Devices without credentials**:

In the **Actions** column, select one of two possible actions:

### Clone
Clones the device, copying all the settings of the device being cloned. When you select this option, a pop-up window will appear indicating that your action was correctly performed.

:::(info) (Info)
The new device belongs to the **Devices without credential** category as well. So, it'll be listed just below the original device with the suffix (`Copy XX`), where `XX` is a number.
:::

### Disable
Inactivates the selected device. By selecting this option, the device will no longer be listed on the page with the other **Devices without credential**. To view this device, you must filter the view to show devices that are inactive.

:::(Info) (Info)
You can also edit the **Devices without credential**. To do this, click the **Change** icon, identified by the paper and pencil symbol. This action will open the **Device Registration** form. To learn how to enroll or modify a device, access the documentation on [how to configure devices](/v4/docs/pam-devices-management).
:::

***

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).