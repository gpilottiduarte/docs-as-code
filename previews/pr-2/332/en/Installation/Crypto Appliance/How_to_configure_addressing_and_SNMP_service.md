# How to configure addressing and SNMP service

In this article, you’ll find instructions on how to configure the addressing and SNMP service of iDRAC.

## How to configure addressing

To configure the iDRAC’s addressing, follow these steps:

1. In the iDRAC management interface, access  **Overview > iDRAC Settings > Network**.
2. Fill in the following fields:
    * **Enable IPv4**: if this option is selected, the IPv4 protocol will be activated. It should always be selected by default.
    * **Enable DHCP**: if this option is selected, the DHCP protocol will be activated to assign the server's IP address.
    * **Use DHCP to obtain server DNS addresses**: if this option is selected, the DHCP protocol will obtain the server's DNS address.

3. If the **DHCP Enable** field is not selected, fill in the following fields:

    * **Static IP Address**: enter the server's IP.
    * **Static Gateway**: enter the server's gateway.
    * **Static Subnet Mask**: enter the server's subnet mask.
4. In the **Services** tab, fill in the following fields:
    * **SNMP Community Name**: enter the SNMP community name.
    * **SNMP Protocol**: indicates which SNMP protocol will be used.
    * **SNMP Discovery Port Number**: port number for discovery communication.

5. Click **Apply** to apply the settings.

## How to configure the SNMP service

### Requirements 

* You need to identify the supported version format by your environment and the tool that will monitor the **PAM Crypto Appliance**.

* To use **SNMP v3**, you must create a user with privileges for the authentication process between the monitoring tool and the **PAM Crypto Appliance**.



### How to configure the SNMP service with monitoring tool information

1. In the iDRAC management interface, access **Overview > Server > Alerts**.
2. Fill in the following fields:
    * **Alerts**: indicates whether the alert service is active or not.
    * **Category**: select the categories of alerts to be sent.
    * **Severity**: select the severity of the alerts to be sent.

3. In the **SNMP and Email Settings** tab, fill in the following fields:
    *  **State**: indicates whether the alert destination is active or not.
    *  **Destination Address**: enter the destination server's IP for alerts.
    *  **SNMP v3 Users**: select the SNMP user.
    *  **Community String**: enter the community string name.
    *  **SNMP Alert Port Number**: enter the port number for alert sending.

4. In the **SNMP Trap Format** field, select the format of SNMP traps.
5. Click **Apply** to apply the settings.

### How to create an SNMP v3 user

To create an SNMP v3 user, follow these steps:

1. In the iDRAC management interface, access **Overview > iDRAC Settings > User Authentication**.
:::(info) (Info)
The users configured in iDRAC will be displayed along with their status and respective privileges.
:::
2. Select a user with **Disabled** in the **State field**.
3. Select the **Configure User** option in the **User Configuration** section.
4. Click **Next**.
5. In the **General section**, fill in the following fields:
    * **Enable User**: select this option to enable the user.
    * **User Name**: enter the username.
    * **Change Password**: if you enable this option, the user must change the password on the first login.
    * **New Password**: enter the user's password.
    * **Confirm New Password**: confirm the user's password.

6. In the **SNMP v3** section, fill in the following fields:

    * **Enable SNMP v3**: select this option to enable the SNMP v3 protocol. 
    * **Authentication type**: select the authentication type for SNMP v3 protocol.
    * **Privacy type**: select the privacy type.

7. In the **iDRAC User Privileges** section, enable **System Control**.
8. Click **Apply** to apply the settings.


* * *

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.