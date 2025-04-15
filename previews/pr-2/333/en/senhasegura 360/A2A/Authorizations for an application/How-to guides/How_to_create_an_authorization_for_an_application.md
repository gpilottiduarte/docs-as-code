# How to create an authorization for an application

This document provides a step-by-step guide on how to create authorizations for an application created in the **A2A** module.


## Requirements

* A created application. For more information, access the [How to create an application](/v3-33/docs/a2a-how-to-create-an-application) documentation.

:::(Info) (Info)
senhasegura has no restrictions on the number of authorizations created for an application. However, after the first creation of an authorization, the other authorizations can be created following two different steps. For more information, continue reading this tutorial.
:::
***
## Create the first authorization for an application

To create the first authorization for an application, follow the steps below:

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **A2A**.
2. In the side menu, select **Applications**.
3. Select the desired application from the list and click the **three vertical dots** in the **Action** column to open a drop-down menu.
4. In the drop-down menu, click **Authorizations**, identified by the key icon.
5. In the **Authorizations** window, in the upper-right corner, click **View actions**, represented by the three vertical dots, to open a drop-down menu.
6. In the drop-down menu, click **+ New**.
7. In the **Application Authorization** window, fill in the following information:
    1. **Settings** tab: define the authorization general information.
        1. **Expiration date**: define the period during which the authorization will remain active. Fill in the date in the first field and the time in the second field. Click the downward arrow in each field to view a calendar and a list of times. After the set period, access performed through this authorization will be revoked.
        2. **Enabled**: define the application status. The options are **Yes** and **No**.
        3. **Environment**: define the environment where the authorization will be active. Click the downward arrow to view a list of available environments.
        4. **System**: define the system where the authorization will be active. Click the downward arrow to view a list of available systems.
    2. **Security** tab: define the authorization’s security information.
        1. **Authorized resources**: check the modules to which users can have access permission through the APIs. The available options are *PAM Core, Certificate Manager, Task Manager, Dashboards, Web Proxy Session, Users,* and *A2A*. For more information about each module, access the corresponding documentation on senhasegura’s [documentation page](https://docs.senhasegura.io/v3-30/docs). 
        
        3. **PAM resource permission***: mandatory field with two options: **Read-only** and **Read and write**.
             :::(Warning) (Attention)
            Be careful when granting reading and writing permission as this provides users with unrestricted access to data.
            :::

        1.  **Enable encryption of sensitive information?***: this option enables or disables sensitive information such as passwords and secrets to be returned in encrypted API calls. To decrypt this data, use the private key provided in the authorization settings.
        2.  **Authorized IPs(use * to allow any IP)**: click **Add**, represented by the plus sign, to add one or more IP addresses that can access the application. Enter an asterisk to authorize any IP address. 
To delete an IP address, click the **trash icon** of the corresponding IP address.

        1. **Authorized HTTP referrers (by default allow any source)**: define which previous web addresses can send requests. If left empty, all websites are authorized. 
        2. **Certificate validation**: enhance security by adding an extra layer of protection through fingerprint-based certificate validation. When activated, the system will validate both OAuth authentication data and the fingerprint of the certificate provided within the request.

    1. **Credentials** tab: define the credentials that can be accessed through this authorization.

        1. **Access credential**: enter an IP, hostname, or username to search and add a credential registered within **PAM Core**. Click the downward arrow to view a list of available credentials. Click **Add**.

       ii. **Create a new credential**: check this box to create a new credential and fill in the **Device**, - click the downward arrow to view a list of available devices - **Username** and **Password** fields for the new credential. Click **Add**.
       On the same screen, under the title **Credentials**, view a list with the added credentials and their corresponding **ID**, **Credential** name, **Device**, and **Type**.
       You can deactivate an added credential by clicking the corresponding **trash can** icon.
    
        :::(Info) (Info)
        The created credential can be   viewed    in **PAM Core** > **Credentials** >     **All**.
        :::

    1. **Devices** tab: define the devices that can be accessed through this authorization.
        1. **Device**: enter the device’s **IP** or **Hostname**, or click the downward arrow to view a list with all the devices registered in **PAM Core**. Click **Add**.
 On the same screen, under the title **Devices**, view a list with the added devices and their corresponding **ID**, **Name**, **Management**, **Type**, and **Vendor**.
You can deactivate an added device by clicking the corresponding **trash can** icon.


        :::(Info) (Info)
            The available devices can be viewed in **PAM Core > Devices > Devices**.
        :::

    1. **Protected information** tab: define the protected information that can be accessed through this authorization.

        1. **Protected information**: add information that you wish to protect. Click the downward arrow to view the available options.
On the same screen, under the title **Protected information**, view a list with the added protected information and their corresponding **ID**, **Name**, **Type**, and **Owner**.
You can deactivate protected information by clicking on the corresponding **trash can** icon.

8. Click **Save**.
              
              
## Create other authorizations for the same application

The next authorizations can be created following the steps described in the [Create the first authorization for an application](/v3-33/docs/a2a-how-to-create-an-authorization-for-an-application#create-the-first-authorization-for-an-application) section of this tutorial or following the steps below.

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **A2A**.
2. In the side menu, select **Authorizations for an application**.
3. From the list, locate the application for which you want to create a new authorization.
4. In the **Action** column, click **New authorization**, represented by the plus icon. 
5. In the **Application Authorization** window, follow the instructions described in step 7 of the [Create the first authorization for an application section of this tutorial](/v3-33/docs/a2a-how-to-create-an-authorization-for-an-application#create-the-first-authorization-for-an-application).
6. Click **Save**.

The created authorizations are displayed in a report on the **[Applications](/v3-33/docs/a2a-applications)** screen and the **[Authorizations for an application](/v3-33/docs/a2a-authorizations-for-an-application)** screen. For more information, access the How to view an authorization for an application documentation.

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).


              
                                                                           
     
        


        











