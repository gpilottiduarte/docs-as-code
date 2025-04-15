# Users

This document provides information about the **Users** screen in the **Tenant settings** menu, that displays details about the users registered on the current tenant.

## Path to access

1. Access **Cloud Security**.  
2. In the user menu, click the **Admin console**.  
3. In the left menu, click **Users**.

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **\+ Add user** | Button | Opens the [Add user](/v4/docs/users-4#add-user-screen) screen. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **Search** | Text field | Filters the users according to the words entered. |
| **Register** | Dropdown menu | Filters the users by their register type. The options are: **Completed** and **Uncompleted**. |
| **State** | Dropdown menu | Filters the users by their state. The options are: **Enabled** and **Disabled**. |
| **Clear filter** | Button | Clear all filters applied. |
| **Export data in CSV** | Button | Opens the **Export data in CSV** window. |
| **Show/Hide columns** | Button | Opens a card to show or hide columns in the report. |

## Report fields

- Email: user e-mail.  
- First name: user name.  
- Last name: user last name.  
- Phone number: user phone number.  
- ID: user ID.  
- Register.  
- Last seen on: date and time when the user was last accessed.  
- State.  
- Actions:  
    - Details: Opens the [Users](/v4/docs/users-4#users-screen) window

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Users screen

| Item | Description |
| :---: | ----- |
| **First name** | User’s first name. |
| **Last name** | User’s last name. |
| **Email** | User’s email address. |
| **Phone number** | User’s phone number. |
| **State** | User’s account status. |

## Roles section

| Item | Description |
| ----- | ----- |
| **Product** | Products in which the user is registered. |
| **Roles** | Roles that the user has in a specific product. |
| **Description** | Roles’ description. |
| **Edit roles** | Button that allows the user to edit roles. |

## Add user screen

### Users tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Email** | Text field | Yes | Field to enter user’s email that will be added in the tenant.  |

### Roles tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Select roles** | Checkbox | No | Field to select the roles of the user. |

### Review tab

Use the **Review** tab to review all the information entered in the previous tabs.