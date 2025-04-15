# Organization audit

**Cloud Security** provides an audit report to track all user actions within your organization. This report helps you monitor changes made at an organization level.

## Organization audit report

The organization audit report offers you the following information about actions performed:

| Item | Description |
| --- | --- |
| **Product** | The **Product** column displays the name of the specific product where the action occurred. |
| **User** | In the **User** column, you find the user responsible for the action. |
| **Event** | The **Event** column describes the specific action that the user performed. See the table of [organization-level events](#organizationlevel-events) below for more details on each type of event. |
| **Entity type** | The **Entity type** column specifies the type of entity that underwent a change. |
| **Entity** | The **Entity** column displays the name of the entity that was altered. |
| **Entity ID** | The **Entity ID** column provides the ID of the Entity that was altered. |
| **Date** | The **Date** column indicates the exact timestamp when the action occurred. |

:::(Info) (Info)
Users can change the entity’s name, but the entity ID will always remain the same. This ensures that changes can be traced back to the original entity.
:::

To open detailed information about the changes made, click on the action row in the report. This will open a `JSON` file that displays the state before and after the modification.

## Organization-level events

The table below displays the actions and events that can appear in the audit report at the organization level.

| Event | Description |
| --- | --- |
| **Create Organization** | A new organization has been created. |
| **Manage Organization Admin** | The user assigned to an organization as administrator has been removed from the organization. |
| **Create Tenant** | A tenant has been created for the organization. |