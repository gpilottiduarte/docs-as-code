# New policies

This document provides information about the **Policies** form screen, which can register the credential’s policies.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Management > Credentials > Policies > New policy**

---
## Information tab

This section provides information on the Information tab with data about the policy to be registered.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Policy credential name*** | Text field | Yes | Credential policy identifier name. |
| **Status*** | Toggle button | Yes | Enables or disables the status of the policy being created. |
| **Password strength*** | Dropdown menu | Yes | Determines the level of password strength that the policy will have. The options are: *High*, *Average* and *Low*. |
| **Priority*** | Quantity input | Yes | Defines the policy application priority if Segura finds more than one policy that applies to the credential. |
| **Allow simultaneous viewing?*** | Toggle button | Yes | Enables or disables the simultaneous viewing of the password, regardless of the user with custody of the password, everyone who is part of this policy will have access. |
| **Allow simultaneous session?*** | Toggle button | Yes | Enables or disables the possibility of starting sessions with the same credential simultaneously. |
| **Expiration time by view** | Quantity input and Dropdown menu | No | Sets the time interval in which Segura will automatically change the password after viewing it by a user. First choose a number and then a unit to which that number will refer. The options are: *Minutes*, *Hours*, *Days* and *Months*. |
| **Expiration time by period** | Quantity input and Dropdown menu | No | Defines the maximum period of validity of a password, counting from the last time it was changed. First choose a number and then a unit to which that number will refer. The options are: *Minutes*, *Hours*, *Days* and *Months*. |
| **Reuse same password for** | Quantity input and Dropdown menu | No | Define Defines the period during which all credentials under the same policy share the same password, starting from the first password change execution for any credential in that policy. The options are: *Minutes*, *Hours*, *Days*, or *Months*. During this time, all changed credentials will receive the same password. For example, if the period is set to two hours and 10 password changes occur within that interval, all 10 credentials will have the same password. |

:::(info) (**Info**)  
By default, for strong passwords the system ensures that they won’t be repeated.  
:::

#### Days of expiration section

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **All days** | Checkbox | No | If enabled, the policy will expire every day. If disabled, select the days of the week on which the policy will expire. |

#### Hours of expiration section
**Add time by period**

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Add** | Button | No | Adds a new line to insert a new time. |
| **Time table** | Table | No | Timetable data added. |

**Add hours per view**

| **Item**  | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Add** | Button | No | Adds a new line to insert a new time. |
| **Time table** | Table | No | Timetable data added. |

## Criteria tab

This section provides information about the Criteria tab with information about the policies criteria.

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Device** | Toggle button | No | Enables or disables the text field for including devices. |
| **Device (comma separated)** | Text field | No | Device registration name. In the text [Device Field](/v4/docs/pam-session-about-filling-out-the-device-and-username-fields) There are possible ways to fill in this field. |
| **Product** | Toggle button | No | Enables or disables the text field for including device models. |
| **Product (comma separated)** | Text field | No | Device models name. |
| **Additional information** | Toggle button | No | Enables or disables the text field for including additional information. |
| **Additional information (separated by comma)** | Text field | No | Text with additional information about the registration. |
| **Device Tags** | Toggle button | No | Enables or disables the text field for including tags for devices. |
| **Device Tags (comma separated)** | Text field | No | Tags registered for devices. |
| **Credential Tags** | Toggle button | No | Enables or disables the text field for including tags for credentials. |
| **Credential Tags (separated by commas)** | Text field | No | Tags registered for credentials. |
| **Site*** | Dropdown menu | Yes | Options with the types of sites that will be visible to the policy. The available options will be as registered in Segura. |
| **Device type*** | Dropdown menu | Yes | Options with the types of devices that will be visible to the policy. The options are defined according to the types of registered devices. |
| **Credential type*** | Dropdown menu | Yes | Options with the types of credentials that will be visible to the policy. The options are: *All, SSH Key, Domain User, Local User* and *Local administrator*. |

:::(warning) (**Attention**)  
For filling out the **Device (comma separated)** field, there are rules that need to be followed. More information in [About Filling Out the Device and Username Fields](/v4/docs/pam-session-about-filling-out-the-device-and-username-fields).  
:::

## Review tab

This section provides summary information about the choices made in the previous steps. The information is grouped by each tab respectively.