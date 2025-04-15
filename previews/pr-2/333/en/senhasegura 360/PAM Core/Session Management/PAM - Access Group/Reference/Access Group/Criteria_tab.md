# Criteria tab

In this document, you’ll find all the information about the **Criteria** tab from the registration screen for a new access group. In this section, it’ll be decided which devices and credentials the group's users can access.

:::(info) (**Info**)
To find out how to register an access group, access the [How to add an access group](/v3-33/docs/pam-session-how-to-add-an-access-group) document.
:::

### Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings** > **Access** > **Access groups** > **+ New**.
3. Or on the list select the group that you desire to edit, by clicking on the pencil and paper icon.

---

## Access group registration - Criteria

**Item**|**Description**
---|---
**Device (comma separated)**|Device registration name. In the text [Device field](#device-field) there are possible ways to fill in this field.
**Product (comma separated)**|Device model.
**Username (comma separated)**|Credential username. In the text [Username Field](#username-field) there are possible ways to fill in this field.
**Additional information (comma separated)**|Text with additional information about registration.
**Device tags (comma separated)**|Tags registered for devices.
**Credential tags (comma separated)**|Tags registered for credentials.
**Site***|Checkbox to select the types of sites that will be visible to the group. The options are: *All* and *Default*.
**Type of device***|Checkbox to select the types of devices that will be visible to the group. The options are defined according to the types of registered devices.
**Credential type***|Checkbox to select the types of credentials that will be visible to the group. The options are: *All, SSH Key, Domain Admin, Domain User, Local User* and *Local administrator*.

### Device field
The **Device** field can be filled with some combinations that facilitate the choice of devices that will be available for that access group.

The combinations are:

* The device’s name plus the device IP number. For example: **DEVICE-ABC(100.100.100.100)**, the group will be able to device which has exactly that name and IP.
* One asterisk at the beginning plus a part that contains the device’s name plus an asterisk at the end. For example: **`*device*`** will be available to the group the device that contains the word device **somewhere** in the name.
* The beginning of the device’s name plus an asterisk at the end. For example: **`device*`** will be available to the group the device that contains the word device at the **beginning** of the name.
* The beginning of the device’s name with an asterisk in the middle and the end of the device name. For example: **`device*final`** will be available to the group the device that starts with **device** in the name, has some **other word in between** and ends the name with the word **final**.

### Username field
When the credential’s username matches the senhasegura’s username, you can use the mask **`USERNAME`** to ensure that only visible credentials are those with the same senhasegura’s login username.

For example, the username used to access the senhasegura instance is **“john”**, and the group rule will be that only John will have access to credentials with the same username, which means, only credentials in which the credential's username is also **“john”**.

For this to be possible, the following syntax will be used to fill the field:

* **`[#USERNAME#]`** which will bring only the credentials that have exactly the name of john.
* **`[#USERNAME#]*`** which will bring all the credentials that have john at the beginning, regardless of how the ending turns out.
* **`*[#USERNAME#]*`** which will bring all the credentials that have john in the middle of the credential name, regardless of how the beginning and the end are.

To understand more about senhasegura Access groups, access the [Access Groups - The criteria for determining which data are accessible document](/v3-33/docs/user-management-access-groups#the-criteria-for-determining-which-data-are-accessible).

