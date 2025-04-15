# Credential execution profile

This document provides information about the **Credential execution profile** form screen.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Executions.**  
1. In the side menu, select **Management > Credential Profiles.**  
2. On the home screen, in the actions menu, click **Add**.

---
### Information Tab

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Name*** | Text field | Yes | Registration name for the profile. |
| **Priority*** | Quantity selector | Yes | Registration priority value, the maximum being 255. |
| **Enabled*** | Button *toggle* | Yes | Profile status. |
| **Immediate password change?*** | Button *toggle* | Yes | Enables immediate password change, with the options being Yes or No. |
| **Interval for first change (in minutes)** | Quantity selector | No | Time for the interval for the first password change, chosen in minutes. |

### Execution Tab  
#### Credential password change settings section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Enable automatic change** | Button *toggle* | No | Enables automatic password change. |
| **Plugin** | Dropdown menu | No | This option will only be available when the **Enable automatic change** is enabled. List of plugins available on Segura. |
| **Template** | Dropdown menu | No | This option will only be available when the **Enable automatic change** is enabled. List of registered templates. |

#### Credential status settings section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Manage account status** | Button *toggle* | No | Enables account status management. |
| **Plugin** | Dropdown menu | No | This option will only be available when the field **Manage account status** is enabled. List of plugins available on Segura. |
| **Activation Template** | Dropdown menu | No | This option will only be available when the field **Manage account status** is enabled. List of available activation templates. |
| **Plugin** | Dropdown menu | No | This option will only be available when the field **Manage account status** is enabled. List of plugins available on Segura. |
| **Disabling Template** | Dropdown menu | No | This option will only be available when the field **Manage account status** is enabled. List of available inactivation templates. |

#### Authentication settings section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Use own password to connect** | Button *toggle* | No | Enables the use of your own password to perform the execution. |
| **Authentication credential** | Dropdown menu | No | This option will be unavailable when the field described above is enabled. If the field above is not enabled, select the credential that will be used for authentication. |
| **Credential username** | Text field | No | This option will be unavailable when the field **Use own password to connect** is enabled. If the field is not enabled, enter the username of the credential that will be used for authentication. |

### Criteria tab  
#### Apply profile to passwords section

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Product** | Button *toggle* | No | Enables the use of templates for the password profile. |
| **Product (comma separated)** | Text field | No | The models the profile will be applied. |
| **Vendor\*** | Dropdown menu | Yes | List of manufacturers available on Segura. |
| **Device type\*** | Dropdown menu | Yes | List of all registered devices. |
| **Credential type\*** | Dropdown menu | Yes | List of types of credentials available. |