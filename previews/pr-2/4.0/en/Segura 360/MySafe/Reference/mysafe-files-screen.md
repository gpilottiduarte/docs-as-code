# Files

# **Files**

This document provides information about the **Files** report screen, which displays files accessible to your **MySafe** user. It allows you to view, add, edit, share, disable, enable, and restore previous versions of the items.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **MySafe.**  
2. In the side menu, select **Files**.

---

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Add** | Button | Directs to the **Add file** screen. |
| **Enable** | Button | Available after selecting at least one item, it enables multiple items simultaneously. |
| **Disable** | Button | Available after selecting at least one item, it disables multiple items simultaneously. |
| **Share** | Button | Available after selecting at least one item, it shares multiple items simultaneously. |
| **Actions** | Dropdown menu | Displays the options *Batch import, Print report, Export CSV*, and *Schedule report*. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **ID** | Text field | Filters files by their identification code in Segura. |
| **File** | Text field | Filters files by their identification name. |
| **Tags** | Text field | Filters files by associated keywords. |
| **Shared** | Text field | Filters files by their sharing status. The options are  **Yes** or **No**. Clear the field to enable the **All** option. |
| **Owner** | Text field | Filters files by the user who added them to **MySafe**. |
| **Last use** | Date picker | Filters files by the period they were accessed. |
| **Status** | Dropdown menu | Filters files by their activation status. The options are  **Enabled** or **Disabled**. Clear the field to enable the **All** option. |

## Report fields

* **Checkbox**: used for batch actions.  
* **Code**.  
* **File**.  
* **Size**: file size in B, KB, or MB.  
* **Tags**.  
* **Shared**.  
* **Owner**.  
* **Last use**.  
* **Status**.  
* **Actions**:  
  * **View file**: opens the **File details** screen with all file information.  
  * **Share**: opens the **Share** screen.  
  * **Edit**: opens the **Edit file** screen.  
  * **Disable**: opens a confirmation pop-up with **Yes** and **No** options.  
  * **History**: opens the item's version history screen.

:::(info) (info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.  
:::

### File details screen

#### General tab

This tab allows users to view general information about the item.

| Item | Description |
| ----- | ----- |
| **Name** | File identification name. |
| **Owner** | User who added the file to **MySafe**. |
| **Last Use** | Date and time when the file was last downloaded. |
| **Tags** | Keywords associated with the file. |
| **Notes** | General information about the file. |
| **Download** | Downloads the file to the user's device. |

::: (warning) (Attention)  
Avoid exposing sensitive data and only download files on safe, trusted devices.
 :::

#### Sharing tab

This tab displays information about the item shared with other **MySafe** users.

| Item | Description |
| ----- | ----- |
| **Member** | Name of the **MySafe** user with access to the file. |
| **Can view** | Indicates permission to view the file details. This column always shows **Yes** for shared items. |
| **Can edit** | Indicates permission to edit the file details. The options are  **Yes** or **No**. |

### Share screen

This screen allows users to select **Internal** to share files indefinitely with **MySafe** users or **External** to share files temporarily with people who don’t have a **MySafe** account.

#### Internal sharing

| Item | Type | Description |
| ----- | ----- | ----- |
| **Users** | Dropdown menu | Searches **MySafe** users by name or personal groups. |
| **Access permission** | Checkbox | Sets file access permissions. The options are  **Can view** (default) and **Can edit**. |
| **Remove user** | Button | Removes the selected user. |

### External/One-time share screen

#### Prerequisites

* **External sharing** permission granted by the **MySafe** administrator. More information in [How to configure MySafe](/v4/docs/how-to-configure-mysafe).

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Name** | Text | No | Displays the file identification name. |
| **Type** | Text | No | Displays the item type. The options are  *Password, File, Note*, and *API secret*. |
| **E-mail address of the recipient** | Text field | Yes | Enter the email(s) of the person(s) with whom the file will be shared.  |

**Sharing details section**

The expiration date is subject to the permissions set by the administrator in the **Global administration \> Sharing options** menu.

If the administrator has set the expiration date to **1 hour**, a user attempting to select a period longer than 1 hour, such as 24 hours, will receive an error message stating that the selected period exceeds the maximum limit defined by the administrator.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Expiration time\*** | Dropdown menu | Yes | Defines the period during which the shared item will be accessible. The options are  *1 hour, 24 hours, 1 week, 30 days*, or *Customized*. Selecting **Customized** enables date and time fields for personalized selection. |
| **Maximum access\*** | Radio button | Yes | Sets the number of times the recipient can access the shared item within the defined period. Options: *Unlimited, One time share*, or *Customized*. Selecting **Customized** enables a field to specify the number. |


### Add/Edit file screens

The **Add file** and **Edit file** screens share the same fields.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **File**\* | Upload field | Yes | File to upload to **MySafe**. <br>**Maximum**: 500 MB. |
| **Tags** | Text field | No | Keywords to categorize the file. |
| **Notes** | Text field | No | General information about the file. |

### History screen

On this screen, users can view and restore previous versions of a file.

#### Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **File** | Text field | Filters file versions by name. |
| **Author** | Text field | Filters file versions by the user who made changes. |
| **Version** | Text field | Filters file versions by version number. |
| **Version date** | Text field | Filters files by the period they were modified. |

#### Report fields

* **File**.  
* **Size**.  
* **Author**.  
* **Version**.  
* **Version date**.  
* **Actions**:  
  * **View file**: opens the **Version details** screen.  
  * **Restore version**: restores the selected file version.

:::(info) (info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.  
:::

#### Version details screen

This screen allows users to view information about the selected version of the item.

| Item | Description |
| ----- | ----- |
| **Name** | File identification name. |
| **Creator** | Name of the user who added the file to **MySafe**. |
| **Editor** | Name of the user who modified the file. |
| **Tags** | Keywords associated with the file. |
| **Notes** | General information about the file. |
| **Start date** | Date and time when the file was added to **MySafe**. |
| **End date** | Date and time when the file was modified. |
| **Download** | Button that opens a confirmation pop-up with **Yes** or **No** options to download the file. |
| **Restore version** | Button that restores the selected version and briefly changes to “**Restored\!**” when clicked. |
