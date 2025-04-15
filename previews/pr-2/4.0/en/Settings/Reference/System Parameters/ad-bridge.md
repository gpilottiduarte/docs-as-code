# AD Bridge

This document provides information about the **AD Bridge** form, which contains information about AD Bridge configuration in Segura.

## Path to access

1. In Segura, on the navigation bar, hover over the **Products Menu** and select **Settings** .  
2. In the side menu, select **System Parameters > Global > AD Bridge**.

## Connection settings

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **LDAP Uri** | Text field | No | LDAP server URI address. |
| **Porta** | Text field | Yes | LDAP server connection port. The default value is `389`. |
| **Usar SSL?** | Radio button | No | Defines if the connection will use SSL. The options are **Yes** or **No**. |
| **Domínio** | Dropdown menu | No | List of available domains for authentication. |
| **Credencial para autenticação** | Dropdown menu | No | Selects credentials for LDAP server authentication. |
| **DN Base** | Text field | No | Base DN used for LDAP searches. |
| **DN Bind** | Text field | No | DN Bind used for LDAP authentication. |

## 

| Username | Text field | No | LDAP attribute that defines the username. |
| :---- | :---- | :---- | :---- |
| **User HOME directory path** | Text field | No | User's home directory path. |
| **User shell** | Text field | No | Path to user's shell. |
| **Policy synchronization time**  | Dropdown menu | No | Defines the periodicity of automatic policy synchronization. |
| **Time in Minutes** | Dropdown menu | No | Specifies synchronization time in minutes, if applicable. |

## User Synchronization Settings

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add** | Button | No | Adds a blank entry at the end of the list. |
| **User DN** | Text field | No | DN of the user to be synchronized. |
| **User filter** | Text field | No | LDAP filter to restrict synchronized users. |
| **User UID** | Text field | No | LDAP attribute that defines the user UID. |

## Group Synchronization Settings

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Add** | Button | No | Adds a blank entry at the end of the list |
| **Group DN** | Text field | No | DN of the group to be synchronized. |
| **Group filter** | Text field | No | LDAP filter to restrict synchronized groups. |
| **Group name** | Text field | No | LDAP attribute that defines the group name. |
