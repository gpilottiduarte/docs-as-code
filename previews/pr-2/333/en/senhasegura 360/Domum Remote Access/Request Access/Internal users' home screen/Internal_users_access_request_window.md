# Internal users access request window

<!-- Fix link -->
This article describes the fields in the access request window for internal **Domum** users. For details, see the documentation about [Granting first access to internal users](/v3-33/docs/domum-grant-employee-first-access).

<!-- Fix callout -->
:::(Info) (Info)
Path to access:

- **Domum Remote Access > Request Access > Internal Users > Show Actions Menu > New**
:::

## General Tab

This tab displays the following fields:

| Item | Description |
| :---- | :---- |
| **Internal User Group\*** | Required field. Displays a dropdown menu for selecting the registered group. |
| **User\*** | Required field. Displays a dropdown menu for selecting the user associated with the group. |
| **Justification\*** | Required field. Provides space for entering free text with the justification. |
| **Reason\*** | Required field. Displays a dropdown menu for selecting a registered reason. |
| **Governance code** | Optional field. Provides space for registering the governance code, if applicable. |

<!-- Fix callout -->
:::(Info) (Info)
When a limited type user is selected in the **User\*** field, the message "This is a limited user, credential permissions must be specified and will be valid until this access expires." is displayed.  
If the selected user is a full type, the message "This is a full user, this access will have permissions according to the user group roles." is displayed.  
:::

## Access Restriction Tab

This tab displays the following fields:

| Item | Description |
| :---- | :---- |
| **Access Permission Period** | Required section to specify the start and duration of access. It is possible to customize a time window for access. |
| **Save** | Button to save the settings and create new access for the internal user. |
