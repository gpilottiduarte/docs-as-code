# Tenants

This document provides information about the **Tenants** screen in the **Organization settings** menu, which displays details about all tenants registered and allows the administrators to manage tenants of their organization.

## Path to access

1. Access **Cloud Security**.  
2. In the user menu, click the **Admin console**.  
3. In the left menu, click **Tenants**.

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **\+ Add tenant** | Button | Opens the [Add tenant](/v4/docs/tenants#add-tenant-screen) screen. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **Search** | Text field | Filters the tenants according to the words entered. |
| **Clear filter** | Button | Clear all filters applied. |
| **Export data in CSV** | Button | Opens the **Export data in CSV** window. |
| **Show/Hide columns** | Button | Opens a card to show or hide columns in the report. |

## Report fields

- Name: tenant’s name.  
- Organization name: organization’s name.  
- Users: number of users registered in the tenant.  
- Creation Date: tenant’s creation date.  
- Actions:  
    - Edit: Opens the [Add tenant](/v4/docs/tenants#add-tenant-screen) screen.  
    - Details: Opens the [Tenant details](/v4/docs/tenants#tenant-details-screen) screen.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Tenant details screen

| Item | Description |
| :---- | ----- |
| **Email** | User’s email address. |
| **First name** | User’s first name. |
| **Last name** | User’s last name. |
| **Phone number** | User’s phone number. |
| **ID** | User’s ID. |
| **Register** | User’s register type. |
| **Last seen on** | Date and time when the user was last accessed. |
| **State** | User’s account status. |

## Add tenant screen

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Organization** | Text field | No | Displays the name of the organization. |
| **Tenant name \*** | Text field | Yes | Tenant’s name. |
| **Administrator’s Email** | Text field | Yes | Administrator’s email. |
| **Tenant language** | Dropdown menu | Yes | Tenant’s language. |