# About credentials per web application

Credentials in senhasegura are essential for accessing any type of module or service. To do this, you can register different types of credentials. 

For a credential to appear in the **Credentials by web application** list, the device to which it is linked must be a web service, such as Amazon AWS (`aws.amazon.com`) or even a personal website.  

To find out how to register a credential, access to the documentation [How to set up a credential in senhasegura](/v3-33/docs/en/pam-how-to-set-up-a-credential-in-senhasegura). To register a device, access the documentation on [How to configure a device](/v3-33/docs/en/pam-devices-management).

Below, we'll talk about the credentials used for web applications.

## Web application credentials

Once you have registered a device and linked your credentials to it, you can access the device's management page via the following path:

1. On the top left corner, click on the **Grid Menu**, identified by the nine squares, and select **PAM Core**.
2. On the side menu, select **Credentials > Web.**
3. A page listing all the credentials for web applications will load.

## Possible actions

The credentials listed can perform actions, the main one being automatic login to a web application. This is possible through the use of the previously registered credential. However, the connection will only be available for credentials showing the **Action** column's computer icon. To connect using this credential, simply click on the **Start Section** icon, identified by the computer icon, and wait for the web application to load, which will open in a new window.

:::(Warning) (Important)
Note that to access web applications, it is necessary to register session parameters indicating how the connection will take place so that senhasegura can perform this authentication. To understand how to do this, access the documentation on [Parameters for web application sessions](/v3-33/docs/pam-session-how-to-register-a-new-web-session-parameter).
:::