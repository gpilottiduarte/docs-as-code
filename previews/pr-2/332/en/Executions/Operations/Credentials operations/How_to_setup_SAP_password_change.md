# How to setup SAP password change

In this tutorial, you'll implement password change for SAP using the senhasegura plugin. When using the senhasegura plugin, It’s possible to automate and streamline the generation and exchange of keys efficiently.

:::(Info) (Info)
Periodically password change can only be performed once a day, ensuring adequate control in SAP server.
:::

## Requirements

- Have PAM user permission in senhasegura.
- Have a credential registered on the SAP server.
- Have the `SAP_ALL` permission on the credential that will be exchanged on the SAP server.
- Have the IP address of the SAP server.

## How to configure a template

To start, it’s necessary to configure an execution template in senhasegura.

1. In the upper left corner, click the **Grid Menu**, indicated by the nine squares box, and select **Executions.**
2. From the side menu, select **Settings > Templates**.
3. Click the **View Actions** icon, identified by the three vertical dots, and select the option **+ New.**

### On the **Execution Template** tab
Fill in the following data:

1. In **Name**, add the template identification name.
2. In **Executor**, select the **Ansible** option.
3. In **Execution type**, select the option **Change password**.
4. In **Playbook**, select the option **SAP change password**.
5. Click the **Save** button.

## How to configure a Credential

[Create a credential](/v3-32/docs/pam-how-to-set-up-a-credential-in-senhasegura), and add the following data:

1. In the upper left corner, click the **Grid Menu**, indicated by the nine squares box, and select **PAM Core.**
2. From the side menu, select **Credentials > All**.
3. Click the **View Actions** icon, identified by the three vertical dots, and select the option **+ New.**

## SAP routing

### On the Information tab:

1. In **Devices**, add the IP address of the SAP server. (For example: `10.66.32.40`)
2. In **Additional Information**, add: `{"sysnr":"00","client":"001"}`.

### On the **Executions settings** tab:

1. In the **Credential password change settings setup**:
    1.1. Select the **Enable automatic change** option.
    1.2 Select the **Change plugin** dropdown menu and then select **Ansible**.
    1.3 Select the **ChangeTemplate** dropdown menu and then select the template you’ve created before.
    1.4 On the **Authentication settings**, enable **Use own credential to connect**.
2. Click the **Save** button.

## Next

1. [How to configure a password change](/v3-32/docs/password-change-operations).

***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).