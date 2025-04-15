# About Segura Terminal

When logging into the Segura server using SSH, the user will be directed to the standard prompt on the **Segura shell** to enter user information and begin a session.

:::(info) (**Info**)
To learn how to start an SSH session into the Segura vault, access the [How to access an SSH admin session into the Segura vault](/v4/docs/administration-ssh-access) document.
:::

This simplified terminal only has commands to start a proxy session to a remote device and transfer files between the source’s device and the destination device.

Using the command `help`, displayed on the home screen, serves to list the available commands.

Once inside the Segura shell session, you can use the command `list`, to list access credentials, displayed in table format.

### `list` command

**Item**|**Description**
|---|---|
**Conn**|Device connectivity.
**Username**|Credential username.
**Hostname**|Device’s hostname.
**IP**|Device’s IP address.
**Type**|Credential type.
**Device type**|Device type.

:::(warning) (**Attention**)
Domain credentials are not listed using this command. To access with domain credentials, you must use the following syntax: `ssh domain\user@server`.
:::

:::(info) (**Info**)
Replace the`<username>` by the credential username.
:::

To view the user access, use the syntax: `list <username> --related`
This will display all devices that a given account has access to.

:::(info) (**Info**)
Replace the `<domain>` by the device, the hostname or the IP address.
:::

To view the domain access, use the syntax: `list <domain> --related`. That allows the user to check all domain credentials that are registered on this device and which devices have the same domain as the credential.