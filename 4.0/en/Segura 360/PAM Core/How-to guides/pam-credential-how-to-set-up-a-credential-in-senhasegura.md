# How to setup up a credential in Segura

In this tutorial, we’ll provide a step-by-step guide to setting up a credential in Segura. Ensure you fulfill the requirements below before proceeding with the configuration steps.

## Requirements

- Be registered/enabled as a PAM operator in Segura.
- Have a device created.

## How to set up a credential

There are two ways to access the **Credentials** configuration area.

The first way is via the **Add new** menu on the top toolbar. To configure a credential using quick actions, follow the steps below:

1. Click on the **Add new** button, and select **Credential**.

The second way is from the **Products Menu**. To do this, follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Credentials > All credentials**.
3. In the bottom-right corner, click on **Add**.

Both actions will open a new screen, which you must fill in with your data.

## In the Information tab

1. **Username***.
2. **Password type***.
3. **Device***.
4. **Domain**.
5. **Additional information**.
6. Enable **Status*** as **Active** or **Inactive** to categorize the status.
7. **Set the password for the credential** (limit 256 characters, 70 if the password change is set to automated).
8. Choose to generate a random password according to the password policy.
9. Optionally, fill in the **Tags** for identification of the credential.
10. Click the **Continue** button.

## In the Execution settings tab

1. **Parent credential:** choose the parent credential from the drop-down menu. Note that when you select a parent credential, the child credential will assume the same password as the parent credential. Whenever there is a manual or automated password change on the parent credential, the child credential will also be modified and assume the same password as the parent credential.
2. In the **Credential password change configuration** section:
    1. **Enable automatic change:** check this checkbox to make automated credential password exchange active.
    2. **Enable change via agent:**
    3. **Change plugin**: choose the plugin for automated credential password exchange from the drop-down menu.
    4. **Change template:** select the template for automated credential password exchange from the drop-down menu.
3. In the **Authentication configuration** section:
    1. **Use your own credential to connect:** select this checkbox to use your own credential to perform authentication.
    2. **Authentication credential:** select the credential that will perform authentication from the drop-down menu.
4. In the **Reconciliation credential configuration** section, in the **Status** option, select the **Active** or **Inactive** option. This option enables credential reconciliation. For more information, go to the documentation on **How to reconcile credential passwords.**

## In the Session settings tab

1. **Connectivity**: select the connectivity options to which this credential will have access.
2. In the **Remote application settings** section:
    1. **Restrict access to remote application only:** select this checkbox if you want this credential only to have access to one or more remote applications. If you choose this option, you must indicate which remote applications will be accessed by this credential. Fill in the fields below:
        1. **Automation macro (RemoteApp):** click the add button to add the applications used. Clicking on the add button will take you to two drop-down menus:
            1. **RemoteApp:** select the application you want to give access to the credential from the drop-down menu.
            2. **Connectivity**: select the connection protocol that this remote application will use.
    2. **Use your own credential to connect**: select this checkbox to use your own credential to authenticate.
    3. **Authentication credential:** enter the credential that will be used for authentication.
    4. **Authentication device**: indicate the device where authentication will take place.
3. In the **Certificate** section:
    1. **Certificate file:** upload the certificate file.
    2. **Key file:** upload the key file for authentication.
    3. **Key password:** password for the key file.

:::(error) (Alert)
- The certificate will only be used when registering a credential to connect to an Oracle database. For more information, see the documentation on [Oracle sessions](/v4/docs/pam-session-oracle-sessions).
- When you upload a certificate, it will be linked to the credential at the time of upload. However, be aware that if you need to edit this credential after saving it, there will be no indication that the certificate file has been uploaded.
- You can replace the certificate by simply uploading the file again if necessary.
:::

## In the Additional settings tab

1. **Identifier (for webservice):** enter the identifier of the web service used in the credential.
:::(Info) (Info)
If the **Identifier** field is blank when creating a credential, the system will automatically assign a UUID (Universally Unique Identifier). The generated UUID will then be displayed in the **Identifier** field in the interface. You can change this value to one of your preferences.
:::
2. **User who owns the credential**: defines the owner of the credential, the user indicated in this field will be the only one with access to the credential.
3. **Path on the server**: this field is used to specify the location of the credential in the files. This functionality is particularly useful when there is a need to change the password in the files. By providing the path, it is possible to identify precisely where to change the credential on the server.
4. **Secret key (TOTP):** fill in your TOTP key. For more information, see the documentation on [how to generate an OTP token](/v4/docs/pam-how-to-generate-a-totp-authentication-token).

:::(Error) (Alert)
For the TOTP feature to work properly, your secret key must be entered in upper case.
:::

5. In the **Additional fields for authentication** section:
    1. **New extra field:** by clicking on the plus sign, you can enter additional parameters for authentication. In this case, you can enter the following parameters: Name, Surname, and Value.
    2. **Remarks**: fill in relevant remarks in case necessary.

:::(Warning) (Important)
- The limit of credentials varies according to the license contracted with Segura.
- The existence of a parent credential does not prevent the password of the child credential from being changed manually or automatically.
:::

## How to edit a credential

To edit a credential, follow the steps below:

1. On the Segura platform, in the top left corner, click **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Credentials > All**.
3. In the list, identify the credential you want to edit, and in the **Action** column, click on the icon represented by the three vertical dots and select the **Edit** option, represented by the pencil and paper icon, from the drop-down menu.
4. In the **Credential Registration** window, edit the settings you want according to the instructions in this document.
5. Click **Save**.

***

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).