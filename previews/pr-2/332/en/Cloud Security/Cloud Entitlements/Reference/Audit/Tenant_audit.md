# Tenant audit

**Cloud Security** provides an audit report to track all user actions within tenants. This report helps you monitor changes that occurred in a tenant.

## Tenant audit report

The audit report offers you the following information about actions performed on the tenants:

| Item | Description |
| --- | --- |
| **Product** | The **Product** column displays the name of the specific product where the action took place. |
| **User** | In the **User** column, you find the user responsible for the action. |
| **Event** | The **Event** column describes the specific action that the user performed. See the table of [tenant-level events](#tenantlevel-events) below for more details on each type of event. |
| **Entity type** | The **Entity type** column specifies the type of entity that underwent a change. |
| **Entity** | The **Entity** column displays the name of the entity that was altered. |
| **Entity ID** | The **Entity ID** column provides the ID of the Entity that was altered. |
| **Date** | The **Date** column indicates the exact timestamp when the action occurred. |

:::(Info) (Info)
Users can change the entity’s name, but the entity ID remains always the same. This ensures that changes can be traced back to the original entity.
:::

To open detailed information about the changes made, click on the action row in the report. This will open a `JSON` file that displays the state before and after the modification.

## Tenant-level events

The table below displays the actions and events that can be listed in the audit report at the tenant level.

| Event | Description |
| --- | --- |
| **Create Account** | A new account connected to the tenant has been created. |
| **Update Account** | An account connected to the tenant has been updated. |
| **Ack Scan Entity** | Scan Entity has been acknowledged or unacknowledged. |
| **Update Security Policies** | Security policies have been globally updated for all accounts within the provider. |
| **Update Account Security Policies** | Security policies for an account have been updated. |
| **Update User Role** | The roles of a user connected to the tenant have been updated. |
| **Create Tenant** | A new tenant has been created. |
| **Invite User** | A new user has been invited to join the tenant. |
| **Enable User Tenant** | A user connected to the tenant has been enabled. |
| **Disable User Tenant** | A user connected to the tenant has been disabled. |
| **Associate Tenant User** | An existing user has been associated with the tenant. |