# Settings

This document provides information about the **LDAP/AD service settings** screen, which displays information about the LDAD/AD service options.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Provisioning \> Active directory \> Settings.**

## LDAP/AD service settings

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Disable users with no group when syncing?** | Radio button | Yes | By enabling this option all users without a group will be disabled in LDAP/AD synchronization. |
| **Use a vault credential on authentication?** | Radio button | No | When choosing the **Yes** option, the server field will use a credential in the vault, when choosing the **No** option, the screen will display a user field and a password field. |

### Login Options section

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Update username when logging in?** | Radio button | Yes | By enabling this option, the user's name will be updated after logging in. |
| **Update contact e-mail when logging in?** | Radio Button | Yes | By enabling this option, the user's email address will be updated after logging in. |
| **Update local password when logging in?** | Radio button | Yes | By enabling this option, the user's local password will be updated after logging in. |
| **Enable local user when logging in?** | Radio button | Yes | By enabling this option, the local user will be activated after logging in. |
| **Block login when user is disabled?** | Radio button | Yes | By enabling this option, users who are inactive in the system will have their login blocked in Segura. |

### Domains settings section

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Search** | Search Field | No | Search for added domains. |
| **Add** | Button | No | Adds a new blank entry to the end of the domain list. |
| **DOMAIN** | Text Field | No | Fill in the full address for the domain. |
| **DOMAIN (SHORT NAME)** | Text Field | No | Fill in the short address for the domain. |
| **Checkbox** | Checkbox | No | Selects all records displayed on the screen. |