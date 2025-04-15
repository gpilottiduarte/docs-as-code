# How to manage SSH keys

This document provides details on how to check registered SSH keys.

## How to access SSH keys

1. In the top left corner, click the **Grid Menu**, indicated by the nine-square box, and select **PAM Core**.
2. In the side menu, select **SSH Keys > SSH Keys**.

## Operations for SSH keys

In the **Action** column, click the icon identified by the three vertical dots and select the desired operation:

1. **Start a session with the key**: start a remote session with the registered key.
2. **View key**: access to view, copy, or download the keys.
3. **Change**: edit the SSH key settings information as desired.
4. **Details**: access to view, copy, or download the keys.
5. **Key password history**: shows a history of operations performed on the SSH key.
6. **Inactivate key**: inactivates the SSH key.

By clicking the **Deatils** option, a pop-up window will open with the following details of the SSH key, divided into sections:

### Details tab

#### General

- **Username:** name of the user of this SSH key.
- **Type**: type of SSH key.
- **Expiration:** expiration date of the SSH key.
- **Created on**: the SSH key date of creation.
- **Change**: date of change of the SSH key; if no change has occurred, this field is blank.
- **Query**: date of the last SSH key query.

#### Device

- **Hostname:** hostname of the device that the SSH key connects to.
- **Management IP**: IP or hostname that the switch manages.
- **Vendor**: manufacturer of the device.
- **Type**: type of device.
- **Model**: device model.
- **Connectivity**: connection protocol of the switch to the device.

#### Change configuration

- **Configuration**: informs whether the switch has automatic swapping enabled or not.

#### Policy

- **Name**: name of the policy used.
- **Password strength**: can be one of the three available values: *Low, Default or High*.
- **Expiration time**: how long the key is valid.
- **Query expiration**: how long the password is available for a query before it’s automatically changed.
- **Simultaneous viewing**: indicates whether the key can be viewed by more than one user at the same time.
- **Simultaneous session**: indicates whether the key can be used to access more than one device at the same time.

:::(Info) (Info)
Please note that the option to view a password will be available for 30 seconds after clicking **the View key** button.
:::

### Overview tab

In the overview tab, you can view various information about the SSH key divided into cards along the interface.

- **Period with greater use**: indicates the period (time) of greatest usage of that key.
- **Parent credential**: shows if this SSH key has a parent credential.
- **Total views**: the number of times the SSH key has been viewed.
- **Total access**: total number of accesses made with the SSH key.
- **Session duration (avg)**: average duration of sessions using this SSH key.
- **Devices**: number of devices on which the SSH key is used.
- **Users by access group:** indicates a pie chart showing the access groups to which this SSH key is linked.
- **Users with access**: indicates a pie chart showing how many users have access to this SSH key.
- **Events**: shows a timeline indicating the actions on the SSH key consulted. The timeline details the action, the day and time, and the user who performed the action.
- **Last access**: indicates the last accesses made by the SSH key.
- **User with custody**: indicates which user has custody of the SSH key.
- **Associated devices**: indicates which devices are associated with this SSH key.

### Top bar

Use the top bar of the SSH Key window to quickly obtain information about the key and for quick actions.

The top bar of the window contains the following information:

- **Username**: name of the user who owns the SSH key.
- **Type**: type of user. It can be one of three types: *Local User, Local Administrator, or Domain User*.
- **Device**: indicates the device associated with the SSH key.
- **Status**: indicates the status of the SSH key. It can be **Enabled** or **Disable**.
- **Actions**: shortcuts to the main actions that can be performed with the SSH key:
    - **Start a session with key**: represented by the arrow icon towards the right, which allows you to start a session on the indicated device.
    - **View**: represented by the key icon, allows you to view the key's information. Note that viewing a key gives you custody of it.
    - **Edit**: represented by the pencil and paper icon, allows you to edit all the SSH key settings.
    - **Key passwords history**: represented by the clock icon, this allows you to view the key's history. This history allows you to view the executions on the key, who carried them out, and the date they were carried out.
    - **Disable key**: represented by the trash can icon, this allows you to inactivate the SSH key.

***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).