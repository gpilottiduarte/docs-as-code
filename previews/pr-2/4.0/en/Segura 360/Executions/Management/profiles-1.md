# Profiles

In some scenarios you have multiple credentials that use the same password change template, and they share a common feature between **Manufacturer**, **Device type** or **Credential type**, it is preferable that they receive the password change configuration immediately upon registration. Thus avoiding the risk of forgetfulness or a wrong configuration on the part of those who register the credential.

Segura offers the possibility to create password change configuration *profiles* for both **Credentials** and **Devices**.

---

## **Credential profiles**

You have access to all credential profiles through the menu **Executions ➔ Settings ➔ Credential profiles**.

For example, we will use a scenario where all devices of the type **Server** from manufacturers **CentOS** and **Debian** that contain credentials of type **Local User** receive the template **Linux \- Change Own Password** at the time of registration of the credential.
:::(Warning) (**Attention**)
The credential and device profiles serve as a template for new credentials on devices that fit one of these types of profile. But once you have registered the Credential, you have complete freedom to change the settings for executing the credential. Changing profiles also does not change the credential settings already registered. 
:::

1. Click the **New change profile** button  
2. In the **Information**tab, fill in the following fields:  
   * **Name:** Name of the credential execution profile. For identification only;  
   * **Priority:** Priority of using the profile. The higher the number, the higher the priority. It can vary from 1 to 255\. For our example, fill in with 10;  
   * **Active?:** If this option is selected, the template is active for use;  
   * **Immediate password change?:** If this option is selected, as soon as the credential that fits this profile is registered, a password change task will be scheduled. For our example, select **Yes**;  
   * **First change interval (in minutes):** This field will be active only when the **Immediate password change?** Field is checked. Indicates the interval in minutes at which the first automated change will take place. For our example, fill in with 1 minute;  
3. In the **Execution Settings**tab, you will have the same fields as in the Credential register. This is the template itself. Fill in the fields:  
   * **Enable automatic change:** Indicates whether credentials should be configured with automatic password change. For our example, enter **Yes**;  
   * **Plugin:** Executor to be used for the change. For our Linux example select **Net SSH**;  
   * **Automatic password change template:** Template used to change the password. For our example select **Linux \- Change Own Password**;  
   * **Manage account status:** If selected, the credential activation and deactivation process on the target device will be used. For our example, keep the field unchecked;  
   * **Account activation plugin:** Plugin used to activate the credential on the target device;  
   * **Account activation template:** Template used to activate the credential on the target device;  
   * **Use your own password to connect:** If this option is selected, the credential itself will be used to change your own password. For our example, keep this field checked;  
   * **Authentication credential:** If the credential is not used for authentication on the remote device, you can select which credential will be used;  
   * **Credential username:** It may happen that the credential indicated in the **Authentication credential** field does not have access to all devices that fit this profile. But all devices will have a credential with the same username \- and a different password \- registered and managed by Segura . In these cases, fill in this field with the username corresponding to the credential that has access to the device;
:::(info) (**Info**)
For example in the **Credential Username** field, imagine that all Linux servers contain a local user with username **usrpwdchg** whose responsibility is to change the other passwords hosted on the same server. And that this user has different passwords from server to server.
However, as this credential is managed by Segura , you can fill in the **Credential Username** with username **usrpwdchg** so that Segura uses the correct device-to-device credential.
:::

4. In the **Criteria**tab, fill in the following fields:  
   * **Model (comma-separated):** Device model on which the profile will be applied. Leave it blank in our example;  
   * **Manufacturer:** List of manufacturers to which the profile will be applied. Select **CentOS** and **Debian** for our example;  
   * **Device type:** Select which device types this profile will be applied to. Select **Server** for our example;  
   * **Credential type:** Select which types of credentials this profile will apply to. Select **Local user** in our example;  
5. Click the **Save** button to complete the registration.

Following these steps of our example, the next device **Debian** or **CentOS** that is registered as type **Server**, will have its credentials of type **Local user** configured with the change of passwords as the **Credential Profile** that we just configured.

---

## **Device profiles**

Still in the previous example, imagine a scenario where all servers **CentOS** respect the credential profile. But there is only 1 CentOS device that needs a different access credential and a different execution template. This can occur on legacy systems or on servers where management is shared.

In these cases, we recommend that you directly configure the password change on the target credential or create a profile per device. In this second case, each credential that is registered on the device holding the profile, will receive the indicated password change configuration. To access the registered device profiles, go to the menu **Executions ➔ Settings ➔ Device profiles**.

Find the desired device in the report and click on the registration action **Configure profile**:

* **Target Equipment:** Device;  
* **Password change plugin:** Execution plugin that will be used in the new credentials of this device;  
* **Password change template and Plugin:** Execution template to be used.  
  In case the new credentials of this device require an activation process before use, indicate which plugin will be used;  
* **Activation Template and Plugin:** Template that will be executed by the activation plugin.  
  In case the new credentials of this device require an inactivation process before use, indicate which plugin will be used;  
* **Inactivation Template:** Template that will be executed by the inactivation plugin;  
* **Access credential:** Credential to be used to carry out the change process. As we are dealing directly with the device managed by Segura , you must select a valid credential. There is no possibility to indicate a wildcard username, as in the case of **Credential Profiles**;

Click the **Save** button to complete the configuration.

In the action field it is possible to edit and remove a device execution profile by clicking in corresponding icons.

At this time, all new device credentials will be automatically configured with that change profile.

