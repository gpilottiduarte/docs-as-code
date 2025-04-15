# Reference for devices

Reference guide to describe how to use senhasegura device registration. This will include information about device identification, device connection, device domain configuration, and more.

## Information

| Item | Description |
| --- | --- |
| IP, hostname or management URL | A network address, hostname, or IP address for senhasegura to connect to this device. |
| Device name | The device name is how that device is referenced in senhasegura, such as in device groups. |
| Device type | Device type. |
| Vendor | Device manufacturer. |
| Product | The product of the chosen supplier. Also used for web session parameter. |
| Site | The country, region, or business unit where the device is. |
| Tags | Tags are used to identify different characteristics of a device. They're used to filter search results and to group devices. |

## Domain settings

The button **+**, identified by the sum symbol, allows adding domains that you've already registered at the platform. The menu lists the domains that the device you’re editing belongs to.

## Connectivity

| Item | Description |
| --- | --- |
| Network connector | The network connector of the senhasegura Network Connector product you want to use to connect to this device. For more information, access the [Network connector](https://docs.senhasegura.io/v3-33/docs/en/network-connector) documentation. |
| Connectivity | The connection protocol that will be used to start a proxy session, change password and to connect to other modules |
| Port | The device's connection port. |
| Add | Button to add the domain to the list. |

## Additional settings

### Criticality

This field is an indication of a change in user behavior. For example, a user who normally only accesses low-critical devices, and then starts accessing a high-critical device without explanation, may indicate a risky behavior. There are three values that this field can take: *High, Medium, or Low*.

### Remote sessions settings

### Expressions for login

* Here you can pass regular expressions that can be used by the senhasegura platform to authenticate devices using command line protocols.
* To perform this action, click the **+** icon, identified by the sum button, and fill in the following information:
    * In **Connectivity** select the type of connection from the drop-down menu.
    * In **Expected expression** fill in the regular expression required for login.
    * In **Fill in value** when in Telnet sessions, senhasegura isn’t able to automatically fill in username and passwordm but with this option, it’s possible to pass these parameters.
        * **For example:**
            * **Expected expression**: appears in the terminal when the connection is made. Example: `User:`.
            * **Fill value**: value that must be filled in user, as in the example above. Example: `[username]`.