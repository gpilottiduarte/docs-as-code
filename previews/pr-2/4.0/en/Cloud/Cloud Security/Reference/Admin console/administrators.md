# Administrators

This document provides information about the **Organization Administrator** screen in the **Organization settings** menu, which displays information about all administrators of your organization, and allows administrators to add, edit, and disable other organization administrators.

## Path to access

1. Access **Cloud Security**.  
2. In the user menu, click the **Admin console**.  
3. In the left menu, click **Administrators**.

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **\+ Add** | Button | Opens the [Add user](/v4/docs/administrators#add-user-screen) window. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **Search** | Text field | Filters the administrators according to the words entered. |
| **Clear filter** | Button | Clear all filters applied. |
| **Export data in CSV** | Button | Opens the **Export data in CSV** window. |
| **Show/Hide columns** | Button | Opens a card to show or hide columns in the report. |

## Report fields

- Email: administrator’s email.  
- Actions:  
    - Remove: remove the administrator from the organization.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Add user screen

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Administrator’s Email \*** | Text field | Yes | Administrator’s email. |
| **Tenant to add user**  | Dropdown menu | Yes | Tenant to add the new administrator. |

:::(Info) (Info)
To be an organization admin, the user must be in at least one tenant of the organization with basic permissions.
:::