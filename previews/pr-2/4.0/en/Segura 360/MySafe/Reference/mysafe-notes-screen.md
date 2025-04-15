# Notes

# Notes

This document provides information about the **Notes** report screen, which displays notes accessible to your **MySafe** user. It allows you to view, add, edit, share, disable, enable, and restore previous versions of the items.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **MySafe.**  
2. In the side menu, select **Notes**.

---

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Add** | Button | Directs to the **Add note** screen. |
| **Enable** | Button | Available after selecting at least one item, it enables multiple items simultaneously. |
| **Disable** | Button | Available after selecting at least one item, it disables multiple items simultaneously. |
| **Share** | Button | Available after selecting at least one item, it shares multiple items simultaneously. |
| **Actions** | Dropdown menu | Displays the options *Batch import, Print report, Export CSV*, and *Schedule report*. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **ID** | Text field | Filters notes by their identification code in Segura. |
| **Name** | Text field | Filters notes by their identification name. |
| **Tags** | Text field | Filters notes by associated keywords. |
| **Shared** | Text field | Filters notes by their sharing status. The options are **Yes** or **No**. Clear the field to enable the **All** option. |
| **Owner** | Text field | Filters notes by the user who added them to **MySafe**. |
| **Last Use** | Date selector | Filters notes by the period they were accessed. |
| **Status** | Dropdown menu | Filters notes by their activation status. The options are **Enabled** or **Disabled**. Clear the field to enable the **All** option. |

## Report fields

* **Checkbox**: used for batch actions.  
* **ID**.  
* **Name**.  
* **Size**: note size in B, KB, or MB.  
* **Tags**.  
* **Shared**.  
* **Owner**.  
* **Last use**.  
* **Status**.  
* **Actions**:  
  * **View note**: opens the **Note details** screen with all note information.  
  * **Share**: opens the **Share** screen.  
  * **Edit**: opens the **Edit note** screen.  
  * **Disable**: opens a confirmation pop-up with **Yes** and **No** options.  
  * **History**: opens the item's version history screen.

:::(info) (info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.  
:::

### Note details screen

#### General tab

This tab allows users to view general information about the item.

| Item | Description |
| ----- | ----- |
| **Name** | Note identification name. |
| **Owner** | User who added the note to **MySafe**. |
| **Last use** | Date and time when the note was last accessed. |
| **Tags** | Keywords associated with the note. |
| **View note** | Button that opens a pop-up to view the note. Adjust the **Contrast** bar to reveal its content. |
| **Copy note** | Button that copies the note to the clipboard and changes to "**Copied\!**" for a few seconds when clicked. |

::: (warning) (Attention)  
 When clicking **Copy note**, the information is added to the clipboard and may be accessible by other programs.  
 :::

#### Sharing tab

This tab displays information about the item shared with other **MySafe** users.

| Item | Description |
| ----- | ----- |
| **Member** | Name of the **MySafe** user with access to the note. |
| **Can view** | Indicates permission to view the note details. This column always shows **Yes** for shared items. |
| **Can edit** | Indicates permission to edit the note details. The options are **Yes** or **No**. |

### Share screen

This screen allows users to select **Internal** to share notes indefinitely with **MySafe** users or **External** to share notes temporarily with people who don’t have a **MySafe** account.

#### Internal sharing

| Item | Type | Description |
| ----- | ----- | ----- |
| **Users** | Dropdown menu | Searches **MySafe** users by name or private groups. |
| **Access permission** | Checkbox | Sets note access permissions. The options are **Can view** (default) and **Can edit**. |
| **Remove user** | Button | Removes the selected user. |

### External/One-time share screen

#### Prerequisites

* **External sharing** permission granted by the **MySafe** administrator. More information in [How to configure MySafe](/v4/docs/how-to-configure-mysafe).

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Name** | Text | No | Displays the note identification name. |
| **Type** | Text | No | Displays the item type. The options are *Password, File, Note*, and *API secret*. |
| **E-mail address of the recipient** | Text field | Yes | Enter the email(s) of the person(s) with whom the note will be shared.  |

#### Sharing details section

The expiration date is subject to the permissions set by the administrator in the **Global administration \> Sharing options** menu.

If the administrator has set the expiration date to **1 hour**, a user attempting to select a period longer than 1 hour, such as 24 hours, will receive an error message stating that the selected period exceeds the maximum limit defined by the administrator.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Expiration time\*** | Dropdown menu | Yes | Defines the period during which the shared item will be accessible. The options are *1 hour, 24 hours, 1 week, 30 days*, or *Customized*. Selecting **Customized** enables date and time fields for personalized selection. |
| **Maximum access\*** | Radio button | Yes | Sets the number of times the recipient can access the shared item within the defined period. Options: *Unlimited, One time share*, or *Customized*. Selecting **Customized** enables a field to specify the number. |



## Add/Edit note screens

The **Add note** and **Edit note** screens share the same fields.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Name**\* | Upload field | Yes | Note identification name. |
| **Note\*** | Text field | Yes | Content of the note. <br>**Maximum:** 900 characters. |
| **Tags** | Text field | No | Keywords for categorizing the note. |

### History screen

On this screen, users can view and restore previous versions of a note.

#### Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **Name** | Text field | Filters note versions by name. |
| **Author** | Text field | Filters note versions by the user who made changes. |
| **Version** | Text field | Filters note versions by version number. |
| **Version date** | Text field | Filters notes by the period they were modified. |

#### Report fields

* **Name.**  
* **Author**.  
* **Version**.  
* **Version date**.  
* **Actions**:  
  * **View note**: opens the **Version details** screen.  
  * **Restore version**: restores the selected note version.

:::(info) (info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.  
:::

#### Version details screen

This screen allows users to view information about the selected version of the item.

| Item | Description |
| ----- | ----- |
| **Name** | Note identification name. |
| **Creator** | Name of the user who added the note to **MySafe**. |
| **Editor** | Name of the user who modified the note. |
| **Tags** | Keywords associated with the note. |
| **Start date** | Date and time when the note was added to **MySafe**. |
| **End date** | Date and time when the note was modified. |
| **View note** | Button that opens a pop-up to view the note. Adjust the **Contrast** bar to reveal the content. |
| **Copy note** | Button that copies the note to the clipboard and changes to "**Copied\!**" for a few seconds when clicked. |
| **Restore version** | Button that restores the selected version and briefly changes to “**Restored\!**” when clicked. |
