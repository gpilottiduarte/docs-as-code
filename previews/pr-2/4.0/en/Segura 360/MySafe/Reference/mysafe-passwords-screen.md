# Passwords



This document provides information about the **Passwords** report screen, which displays passwords accessible to your **MySafe** user. It allows you to view, add, edit, share, disable, enable, and restore previous versions of items.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **MySafe.**  
2. In the side menu, select **Passwords**.

---

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Add** | Button | Directs to the **Add password** screen. |
| **Enable** | Button | Available after selecting at least one item, it enables multiple items simultaneously. |
| **Disable** | Button | Available after selecting at least one item, it disables multiple items simultaneously. |
| **Share** | Button | Available after selecting at least one item, it shares multiple items simultaneously. |
| **Actions** | Dropdown menu | Displays the options *Batch import, Print report, Export CSV*, and *Schedule report*. |

### 

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **ID** | Text field | Filters passwords by their identification code in Segura. |
| **Name** | Text field | Filters passwords by their identification name. |
| **URL** | Text field | Filters passwords by the website address where they are registered. |
| **Username** | Text field | Filters passwords by the associated username.  |
| **Tags** | Text field | Filters passwords by associated keywords. |
| **Shared** | Dropdown menu | Filters passwords by their sharing status The options are **Yes** or **No**. Clear the field to enable the **All** option. |
| **Owner** | Text field | Filters passwords by the user who added them to **MySafe**. |
| **Last use** | Date picker | Filters passwords by the period they were last accessed. |
| **Status** | Dropdown menu | Filters passwords by their activation status. The options are **Enabled** or **Disabled**. Clear the field to enable the **All** option. |

## Report fields

* **Checkbox**: used for batch actions.  
* **ID**.  
* **Name.**  
* **URL.**  
* **Username.**  
* **Tags.**  
* **Shared.**  
* **Owner.**  
* **Last used.**  
* **Status.**  
* **Actions:**  
  * **Copy**: copies the password to the clipboard.  
  * **View password**: opens the **Password details** screen with all password information.  
  * **Share**: opens the **Share** screen.  
  * **Edit**: opens the **Edit password** screen.  
  * **Disable**: opens a confirmation pop-up with **Yes** or **No** options.  
  * **History**: opens the item’s version history screen.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.  
 :::


### Password details screen

#### General tab

This tab displays general information about the item.

| Item | Description |
| ----- | ----- |
| **Name** | Password identification name. |
| **Owner** | The user who added the password to **MySafe**. |
| **URL** | Website address where the password is registered. The **Go to URL** button opens the site in another tab. |
| **Username** | Associated username. |
| **TOTP** | Temporary tokens linked to the password, used as an additional factor in multi-factor authentication (MFA). A **time** icon displays a countdown for a new TOTP generation every 30 seconds. **Note:** available if a **Secret key (TOTP)** has been configured during the creation or editing of the password. |
| **Last used** | Date and time when the password was last accessed. |
| **Tags** | Keywords associated with the password. |
| **Notes** | General information about the password. |
| **View password** | Button that opens a pop-up window to view the password. Adjust the **Contrast** bar to reveal the password. |
| **Copy password** | Button that copies the password to the clipboard and changes to "**Copied\!**" for a few seconds when clicked. |

::: (warning) (Attention)  
 When clicking **Copy password**, the information is added to the clipboard and may be accessible by other programs.  
 :::

#### Sharing tab

This tab displays information about the password-sharing settings.

| Item | Description |
| ----- | ----- |
| **Member** | Name of the **MySafe** user with access to the password. |
| **Can view** | Indicates permission to view the password details. This column always shows **Yes** for shared items. |
| **Can edit** | Indicates permission to edit the password details. The options are **Yes** or **No**. |



### Share screen

On this screen, users can select the **Internal** option to share their passwords with **MySafe** users indefinitely or the **External** option to temporarily share passwords with individuals who don’t have a **MySafe** account.



#### Internal share screen

| Item | Type | Description |
| ----- | ----- | ----- |
| **Users** | Dropdown menu | Searches **MySafe** users by name or personal groups. |
| **Access permissions** | Checkbox | Sets password access permissions.  The options are **Can view** (default) or **Can edit**.  |
| **Remove user** | Button | Removes the selected user. |



#### External/One-time share screen

#### Prerequisites

* **External sharing** permissions are granted by the **MySafe** administrator. More information in [How to configure MySafe](/v4/docs/how-to-configure-mysafe).



| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Name** | Text | No | Displays the password identification name. |
| **URL** | Text | No | Displays the website address where the password is registered. |
| **Type** | Text | No | Displays the item type. The options are *Password, File, Note*, and *API secret*. |
| **E-mail address of the recipient** | Text field | Yes | Enter the email(s) of the person(s) with whom the password will be shared. |



#### Sharing details section

The expiration date is subject to the permissions set by the administrator in the **Global administration \> Sharing options** menu.

If the administrator has set the expiration date to **1 hour**, a user attempting to select a period longer than 1 hour, such as 24 hours, will receive an error message stating that the selected period exceeds the maximum limit defined by the administrator.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Expiration time\*** | Dropdown menu | Yes | Defines the period during which the shared item will be accessible. The options are *1 hour, 24 hours, 1 week, 30 days*, or *Customized*. Selecting **Customized** enables date and time fields for personalized selection. |
| **Maximum access\*** | Radio button | Yes | Sets the number of times the recipient can access the shared item within the defined period. Options: *Unlimited, One time share*, or *Customized*. Selecting **Customized** enables a field to specify the number. |



### Add/Edit password screens

The **Add password** and **Edit password** screens share the same fields.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Name\*** | Text field | Yes | Password identification name. |
| **Username\*** | Text field | Yes | Username associated with the password. |
| **URL** | Text field | No | Website address where the password will be used. |
| **New password** | Text field | No | Password being created or edited. **Note:** the password remains hidden in the **Edit password** screen. Leave the field blank to keep the current password. |
| **Show** | Button | No | Shows the password entered. |
| **Generate** | Button | No | Automatically generates a password based on defined criteria. |
| **Configure** | Button | No | Defines the following password criteria: *Length, Uppercase, Lowercase, Numbers,* and *Symbols*. |
| **Confirm** | Button | No | Saves the selected criteria for automatic password generation. |
| **Password strength** | Progress bar | No | Displays password strength. <br> - **Very strong password:** four green bars. <br> - **Strong password:** three green bars. <br> - **Medium password:** two yellow bars. <br> - **Weak password:** one red bar. |
| **Secret key (TOTP)** | Text field | No | Key for generating a TOTP token for multi-factor authentication.  <br>**Note:** the secret key must contain at least 10 characters, with uppercase letters A-Z and numbers 2-7. |
| **Tags** | Text field | No | Keywords for categorizing the password. |
| **Notes** | Text field | No | General information about the password. |



### History screen

On this screen, users can view and restore previous versions of a password.

#### Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **Name or URL** | Text field | Filters password versions by name or registered website address. |
| **Author** | Text field | Filters password versions by the user who made changes. |
| **Version** | Text field | Filters passwords by version number. |
| **Version date** | Date picker | Filters passwords by the period they were modified. |

#### Report fields

* **Name or URL.**  
* **Author.**  
* **Version.**  
* **Version date.**  
* **Actions:**  
  * **View password**: opens the **Version details** screen.  
  * **Restore version**: restores the password to the selected version.

::: (info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.  
 :::


#### Version details screen

This screen displays information about the selected version of the item.

| Item | Description |
| ----- | ----- |
| **Name** | Password identification name. |
| **Creator** | Name of the user who added the password to **MySafe**. |
| **Editor** | Name of the user who modified the password. |
| **URL** | Website address where the password is registered. The **Go to URL** button opens the site in another tab. |
| **Username** | Associated username. |
| **Tags** | Keywords associated with the password. |
| **Notes** | General information about the password. |
| **Start date** | Date and time the password was added to **MySafe**. |
| **End date** | Date and time the password was modified. |
| **View password** | Button that opens a pop-up window to view the password. Adjust the **Contrast** bar to reveal the password. |
| **Copy password** | Button that copies the password to the clipboard and changes to "**Copied\!**" for a few seconds when clicked. |
| **Restore version** | Button that reverts the password to the selected version and changes to "**Restored\!**" for a few seconds when clicked. |
