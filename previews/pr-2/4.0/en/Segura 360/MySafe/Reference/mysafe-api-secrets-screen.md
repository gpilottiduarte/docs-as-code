# API secrets

This document provides information about the **API secrets** report screen, which displays API secrets accessible to your **MySafe** user. It allows you to view, add, edit, share, disable, enable, and restore previous versions of items.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **MySafe.**  
2. In the side menu, select **API secrets**.

---
## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Add** | Button | Directs to the **Add API secret** screen. |
| **Enable** | Button | Available after selecting at least one item, it enables multiple items simultaneously. |
| **Disable** | Button | Available after selecting at least one item, it disables multiple items simultaneously. |
| **Share** | Button | Available after selecting at least one item, it shares multiple items simultaneously. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV*, and *Schedule report*. |


## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **ID** | Text field | Filters API secrets by their identification code in Segura. |
| **Name** | Text field | Filters API secrets by theiridentification name. |
| **URL** | Text field | Filters API secrets by the application address where they’re registered. |
| **Tags** | Text field | Filters API secrets by associated keywords. |
| **Shared** | Dropdown menu | Filters API secrets by their sharing status The options are **Yes** or **No**. Clear the field to enable the **All** option. |
| **Owner** | Text field | Filters API secrets by the user who added them to **MySafe**. |
| **Last use** | Date selector | Filters API secrets by the period they were last accessed. |
| **Status** | Dropdown menu | Filters API secrets by their activation status. The options are **Enabled** or **Disabled**. Clear the field to enable the **All** option. |

## Report fields

* **Checkbox**: used for batch actions.  
* **ID**.  
* **Name.**  
* **URL.**  
* **Tags.**  
* **Shared.**  
* **Owner.**  
* **Last used.**  
* **Status.**  
* **Actions:**  
  * **View API secret**: opens the **API secret details** screen with all API secret information.  
  * **Share**: opens the **Share** screen.  
  * **Edit**: opens the **Edit API secret** screen.  
  * **Disable**: opens a confirmation pop-up with **Yes** or **No** options.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.  
 :::



### API secret details screen

#### General tab

This tab displays general information about the item.

| Item | Description |
| ----- | ----- |
| **Name** | API secret identification name. |
| **Owner** | User who added the API secret to **MySafe**. |
| **Client ID** | Client application identification code (`client_id`) used in the OAuth 2.0 authorization flow. |
| **Copy** | Copies the **Client ID** to the clipboard. |
| **Client Secret** | Password (`client_secret`) used to authenticate the client application in the OAuth 2.0 authorization flow. |
| **Show** | Shows or hides the **Client Secret**.  |
| **Copy** | Copies the **Client Secret** to the clipboard. |
| **URL** | Application address where the API secret is registered. |
| **Method** | HTTP method used to make the API call. |
| **Tags** | Keywords associated with the API secret. |
| **Notes** | General information about the API secret. |

::: (warning) (Attention)  
 When clicking **Copy API secret**, the information is added to the clipboard and may be accessible by other programs.  
 :::

#### Sharing tab

This tab displays information about the API secret’s sharing settings.

| Item | Description |
| ----- | ----- |
| **Member** | Name of the **MySafe** user with access to the API secret. |
| **Can view** | Indicates permission to view the API secret details. This column always shows **Yes** for shared items. |
| **Can edit** | Indicates permission to edit the API secret details. The options are **Yes** or **No**. |



### Share screen

On this screen, users can select the **Internal** option to share their API secrets with **MySafe** users indefinitely or the **External** option to temporarily share API secrets with individuals who don’t have a **MySafe** account.


#### Internal share screen

| Item | Type | Description |
| ----- | ----- | ----- |
| **Users** | Dropdown menu | Searches **MySafe** users by name or personal groups. |
| **Access permissions** | Checkbox | Sets API secret access permissions.  The options are **Can view** (default) or **Can edit**.  |
| **Remove user** | Button | Removes the selected user. |



#### External/One-time share screen

#### Prerequisites

* **External sharing** permissions granted by the **MySafe** administrator. More information in [How to configure MySafe](/v4/docs/how-to-configure-mysafe).

---

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Name** | Text | No | Displays the API secret identification name. |
| **Type** | Text | No | Displays the item type. The options are *Password, File, Note*, and *API secret*. |
| **E-mail address of the recipient** | Text field | Yes | Enter the email(s) of the person(s) with whom the API secret will be shared. |

<br>

**Sharing details section**

The expiration date is subject to the permissions set by the administrator in the **Global administration \> Sharing options** menu.

If the administrator has set the expiration date to **1 hour**, a user attempting to select a period longer than 1 hour, such as 24 hours, will receive an error message stating that the selected period exceeds the maximum limit defined by the administrator.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Expiration time\*** | Dropdown menu | Yes | Defines the period during which the shared item will be accessible. The options are *1 hour, 24 hours, 1 week, 30 days*, or *Customized*. Selecting **Customized** enables date and time fields for personalized selection. |
| **Maximum access\*** | Radio button | Yes | Sets the number of times the recipient can access the shared item within the defined period. The options are *Unlimited, One time share*, or *Customized*. Selecting **Customized** enables a field to specify the number. |


### Add/Edit API secret screens

The **Add API secret** and **Edit API secret** screens share the same fields.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Name\*** | Text field | Yes | API secret identification name. |
| **URL\*** | Text field | No | Address of the application where the API secret will be used. |
| **Client ID\*** | Text field | No | Client application identification code (`client_id`) used in the OAuth 2.0 authorization flow.  |
| **Client Secret\*** | Button | No | Password (`client_secret`) used to authenticate the client application in the OAuth 2.0 authorization flow. |
| **Identifier** | Button | No | Unique string defined by the user to identify the API secret. |
| **Method** | Button | No | HTTP method used to call the API. |
| **Tags** | Text field | No | Keywords to categorize the API secret. |
| **Notes** | Text field | No | General information about the API secret. |



