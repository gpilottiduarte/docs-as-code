# How to set up an SSH key

## How to manage SSH keys

Using an SSH key as an authentication method is a safer alternative to password-based logins. These keys consist of a pair of keys, one public and one private, that will be used to establish an encrypted connection between the client and the server.

The SSH key change process ensures convenience and security, as when generating a new SSH key, the senhasegura plugin automates the key generation and copies the public key to the primary device. It is on this device that the SSH key is registered.

:::(info) (Info)
The private key is kept exclusively on senhasegura, ensuring adequate protection.
:::

## Requirements

* An RSA-type SSH key. To generate the key, type in the following command line terminal: `ssh-keygen -t RSA -m PEM`.

:::(info) (Info)
It's important to note that when running the `ssh-copy-id` command, only the public key is copied to the devices, while the private key remains in senhasegura.
:::

## Configure an SSH key in senhasegura

1. On senhasegura, in the top left corner, click the **Grid Menu**, indicated by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials > SSH Keys > SSH Keys**.
3. Click **View Actions**, identified by the three vertical dots icon, and select **+ New**.

In the **SSH key registration** window, configure your SSH key. Follow the steps below:

### Information tab

1. **Username (key owner):** fill in the username associated with the SSH key.
2. **Device**: select the device that will hold the SSH key.
3. **Key name:** fill in an identification name for tracking details, views, and other appearances in senhasegura.
4. **Status**: select **Enabled** or **Disabled**
5. **Tags**: add tags to facilitate filter searches.

### Key Data tab

1. **Set a current password:** enable Set current password and enter its value in the Password field if the key has a password.
2. **Show password:** select to show the password.
3. **Renew the key and set a password?:** indicate whether you want to set a password when automatic renewal is activated. By default, this option is set to Yes.

Add the SSH key on the Private Key and Public Key to perform the registration.

### Session Settings tab

1. **Restrict Access to Remote Application Only:**  check this option so that only remote applications enrolled on the target device with this setting have access using this SSH key.
2. **Automation Macro (RemoteApp):** click the plus icon next to **Automation macro (RemoteApp)** to add two drop-down menus. In these two menus, you’ll select which RemoteApp macros are bound to the SSH key by selecting the **Macro** and the **Connectivity**.
3. **Using own credential to connect:** select to use the same key to authenticate into the target device.
4. **Authentication credential:** fill in the IP address, hostname, or username of the credential used.
5. **Authentication device:** fill in the IP address or hostname of the device used.

### Additional settings section

1. **User credential owner:** in the drop-down menu, select the user who owns the credential.
2. **SSH key renewal configuration:**
   1. **Enable automatic change:** enable this option to have the password renewed automatically.
   2. **Use the key itself to connect:** select the key currently being created/edited.
   3. **Credential or SSH key for authentication:** choose the device that holds the authentication key from the drop-down menu. This option is only available if the Use the key itself to connect option is disabled

:::(warning) (Caution)
* Only the user who owns the credential can retrieve the certificate, see its password, and use it in proxy sessions. Note that this user will always have access to the key.
* The **Use the key itself to connect** field and the **Credential or SSH key for authentication** drop-down menu are only enabled if the **Enable automatic change** option is enabled.
:::

### Devices tab

1. On **Devices**, select the devices for which you want to allow the key to be used to start a proxy session. To do this, follow the steps below:
   1. Click the plus icon, to open the **Devices** modal.
   2. On the **Devices** modal, select the devices you want to link to the SSH key.
   3. Click **Add**.
2. Click **Save**.

:::(info) (Info)
If there are multiple devices registered for connection with the mentioned SSH key, they will be sorted based on their respective IDs. The key change will occur first on the original device and then proceed in the order of the IDs, one at a time.
:::

***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
