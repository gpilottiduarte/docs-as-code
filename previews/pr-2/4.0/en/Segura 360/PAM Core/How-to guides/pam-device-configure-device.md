# How to configure a device

For the proper functioning of the solution, a correct registration of the devices is essential. Discrepancies can affect the behavior of the software.

You have two ways to access the **Devices** configuration area. To do so, follow the steps below:

1. **Add new:** in the toolbar, ath the top of the Segura platform, click **Add new** and select **Device**. 
2. **Porducts Menu:** in the navigation bar, hover over the **Products menu** and select **Devices**.

In case you select the **second way**, you'll need to select **Devices** on the side menu. To do this, proceed as follows:

1. Select, on the side menu, **Devices** to load the list of devices. 
2. In the bottom-right corner, click on **+ Add**.

A screen will show the **Device** form with the data to be filled in to register a new device in the Segura platform.

## How to configure devices

Fill in the following data to configure a new device:

### Information's tab

1. **Device name:** fill in with a name for internal use.
2. **IP, hostname, or URL:** fill in the address to which the device is registered and accessible.
3. **Device type:** select desired type.
4. **Vendor:** select relevant vendor.
5. **Product:** select device model.
6. **Site:** select the division/local this device belong to.
7. **Tags:** fill in the desired tags.

In the **Domain** session, select the desired domain.

:::(Info) (Info)
The fields **Device type**, **Vendor**, **Product**, and **Site** can be registered directly on the device enrollment screen if the entered value doesn't exist.

All device registration, modification, and inactivation operations are sent via `Syslog`.
:::

:::(Warning) (Important)
Changes and deactivations may affect access to devices and credentials.
:::

### Connectivity's tab

1. **Network connector:** select the required network connector.
2. **Connectivity:** select the type of connection (HTTP, Telnet, VNC, etc.).
3. **Port:** fill in the port for communication.

:::(Info) (Info)
Connectivity tests are performed via TCP socket. It's possible to configure the platform to use the device with two applications and the same protocol, but you must configure different ports.
:::

:::(Warning) (Important)
When the default port is modified, the change is reflected only on the specific device being edited.
:::

### Additional settings' tab

1. **Criticality:** select the degree of criticality (*High, Medium, or Low*).
2. **Remote session configuration:** add regular expressions to handle custom authentications.
3. Click the **Continue** button, and **Save**.

:::(Info) (Info)
It's recommended to use protocols with encryption support if possible.
:::

:::

***

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).