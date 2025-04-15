# How to use domain credentials

Domain credentials are used when a credential needs to access different machines in the same domain.

## Requirements

- Have a credential that **isn’t** a registered **Local user**.
- Have a device that is in the same domain as the credential.

## How to register a domain

1. In the top left corner, click **Grid Menu**, identified by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings > Credentials > Domains > Domain settings**.
3. To register a new domain, click the **+** button, identified by the plus sign, next do the **New domain** title.
4. Two new empty fields will be added just below the last domain registered. Fill in the information:
    1. **Domain**: URL, IP address, or hostname of the domain.
    2. **Domain (Short Name)**: friendly name for the domain.
5. Click **Save**.

## How to add a device to a domain

If you don't have any devices registered yet, register a new one. Access the How to configure a device documentation for more information on registering a device.

If you already have a device registered and want to link it to the domain, access the device list and edit it. To do this, follow the instructions below:

1. In the top left corner, click **Grid Menu**, identified by the nine squares, and select **Devices**.
2. In the side menu, select **Devices**.
3. In the list of devices, identify the one you want to edit.

In both cases, the way to add the device to a domain is the same:

1. On the **Device Registration** form, on the **Information** tab, in the **Domain Settings** section, click the plus sign next to the word **Add**.
2. In the **Domain** drop-down menu, select the domain to which you want to link this device. It must be the same domain that you registered and linked your credential to previously.
3. Click **Save**.

## How to register a type of credential to use with a domain

1. In the top left corner, click **Grid Menu**, identified by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings > Credentials > Credential types**.
3. In the top bar, click the **Display actions** button, identified by the three vertical dots, and select **+ New**.
4. On the **Registration** **Credential type** form, fill in the following fields:
    1. **Name**: a name for the type of credential to be registered.
    2. **Local user**: for domain credentials, setting this option to **No is mandatory**. Otherwise, the credential won’t be able to connect by domain.
    3. **Enabled**: check **Yes**.
5. Click **Save**.

## How to link a credential to a domain

To use domain credentials, in addition to having the credential registered with senhasegura, you need to link it to the domain you want. To do this, follow the steps below:

1. In the top left-hand corner, click **Grid Menu**, represented by the nine-squares icon, and select **PAM Core**.
2. In the side menu, select **Credentials > All**.
3. In the top bar, click the **View actions** icon, represented by the three vertical dots, and select **+New**.
4. Register your credential according to the [How to configure a credential in senhasegura](https://docs.senhasegura.io/v3-33/docs/en/pam-how-to-set-up-a-credential-in-senhasegura) documentation. Make sure to indicate the type of credential registered previously in the **Password type** drop-down menu and the domain registered previously in the **Domain** drop-down menu.

## How to connect to a device using a domain credential

1. In the top left corner, click **Grid Menu**, identified by the nine squares icon, and select **PAM Core**.
2. In the side menu, select **Credentials > All**.
3. In the domain credential action column, click **Start session on to another device**, identified by an arrow coming out of the box. This action takes you to the list of devices in the selected domain.
4. On the **Domain Credentials** screen, identify the device you want to use to start a session.
5. In the **Action** column, click on **Start session**, identified by the computer icon, to start a remote session with your domain credential.

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).