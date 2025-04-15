# How to configure a device

For the proper functioning of the solution, a correct registration of the devices is essential. Discrepancies can affect the behavior of the software.

You have two ways to access the **Devices** configuration area. To do so, follow the steps below:

1. **Quick Actions:** in the toolbar, ath the top of the senhasegura platform, click the icon represented by a sheet of paper with the sum sign and select **Device**. This action will load a pop-up window witht the **Device** form.
2. **Grid Menu:** in the top left corner, click the icon represented by a box of nine squares, and select **Devices**.

In case you select the **second way**, you'll need to select **Devices** on the side menu. To do this, proceed as follows:

1. Select, on the side menu, **Devices** to load the list of devices. 
2. Click on the **Display Actions** icon, identified by the three vertical dots, and select **+ New**.

A pop-up window will show the **Device** form with the data to be filled in to register a new device in the senhasegura platform.

## How to configure devices

Fill in the following data to configure a new device:

### Information's tab

1. **IP, hostname, or URL:** fill in the address to which the device is registered and accessible.
2. **Device name:** fill in with a name for internal use.
3. **Device type:** select desired type.
4. **Manufacturer:** select relevant manufacturer.
5. **Model:** select device model.
6. **Site:** select the division/local this device belong to.
7. **Tags:** fill in the desired tags.

In the **Domain Settings** session, select the desired domain. To add other domains, click on the **Add** icon, identified by the sum symbol.

:::(Info) (Info)
The fields **Device type**, **Manufacturer**, **Model**, and **Site** can be registered directly on the device enrollment screen if the entered value doesn't exist.

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
3. Click the **Save** button.

:::(Info) (Info)
It's recommended to use protocols with encryption support if possible.
:::

:::(Info) (Info)
In case you need a more detailed explanation about the items of devices, you can access the [Reference for devices](/v3-33/docs/pam-reference-for-devices) documentation.
:::

## Next
1. [How to configure device categories](/v3-33/docs/pam-how-to-configure-devices)
2. [How to manage devices](/v3-33/docs/pam-how-to-edit-clone-disable-or-reactivate-a-device)
3. [How to manage devices without credentials](/v3-33/docs/pam-devices-without-credentials).
4. [How to check the device connectivity](/v3-33/docs/pam-devices-connectivity-test).
5. [Reference for devices](/v3-33/docs/pam-reference-for-devices).
6. [Reference for device filters](/v3-33/docs/pam-reference-for-device-filters).

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).