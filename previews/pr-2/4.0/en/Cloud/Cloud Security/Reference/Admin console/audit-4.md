# Audit

This document provides information about the **Audit report** screen in the **Tenant settings** menu, which displays all the audit events made by users in all products and in the **Cloud Security** platform.

## Path to access

1. Access **Cloud Security**.  
2. In the user menu, click the **Admin console**.  
3. In the left menu, click **Audit**.

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **Search** | Text field | Filters the events according to the words entered. |
| **Product** | Dropdown menu | Filters the events according to the product in which the events were performed. |
| **User** | Dropdown menu | Filters the events according to the user that performed the events. |
| **Event** | Dropdown menu | Filters the events according to the specific event. |
| **Clear filter** | Button | Clear all filters applied. |
| **Export data in CSV** | Button | Opens the **Export data in CSV** window. |
| **Show/Hide columns** | Button | Opens a card to show or hide columns in the report. |

## Report fields

- Product.  
- User.  
- Event.  
- Entity type: entity type in which the event was made.  
- Entity: entity in which the event was made.  
- Entity ID: entity ID.  
- Event ID: event ID.  
- Date: date in which the event was made.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Audit events

The following table lists all audit events performed on the **Cloud Security** platform:

| Event | Audit level |
| ----- | ----- |
| New Organization | Organization |
| User assigned as Organization Admin/User removed from Organization Admin | Organization |
| Tenant created | Organization |
| Disable User in Tenant | Tenant |
| Enable User in Tenant | Tenant |
| Invite User | Tenant |
| Tenant created | Tenant |
| Update User Roles | Tenant |
| User associated with Tenant | Tenant |

By clicking in one event, a new panel will appear with details about the audit event made by a user.

## Viewer screen

### Event section

| Item | Description |
| ----- | ----- |
| **Event** | Name of the event. |
| **Entity type** | Entity type. |
| **Entity ID** | ID of the entity. |
| **Entity** | Name of the event’s targeted entity. |
| **Log date** | Date and time when the event was performed. |
| **Event ID** | Event’s ID. |

### Tenant section

| Item | Description |
| ----- | ----- |
| **Name** | Name of the event’s targeted tenant. |
| **ID** | Tenant’s ID. |

### User section

| Item | Description |
| ----- | ----- |
| **User** | Name of the user that made the event. |
| **IP** | User IP. |
| **User ID** | User ID. |