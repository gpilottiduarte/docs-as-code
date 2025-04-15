# Synchronized users for IGA

This document provides a general overview of the **Synchronized users** functionality.

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. On the side menu, select **Identity management (IGA) > Synchronized users**.

## Top bar

| Item              | Description                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update**       | Represented by the counterclockwise arrow icon, it refreshes the page.                          |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report.  |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report.                   |
| **Export CSV**   | Represented by the paper sheet icon, it downloads the report.                                   |

## Search fields

| Item                       | Description                                                                                                                                                                                                           |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**                    | User registration code in senhasegura.                                                                                                                                                                                |
| **Username**              | Name of the user.                                                                                                                                                                                                     |
| **UUID**                  | UUID, Universally Unique Identifier, of the user.                                                                                                                                                                     |
| **senhasegura's user ID** | User identification in senhasegura.                                                                                                                                                                                   |
| **Is synced?**            | Drop-down menu with the options **All**, which displays all user records; **Yes**, which displays only synchronized user records and **No**, which displays user records that are not synchronized. |
| **Last synchronization**  | Calendar to display the date of the last synchronization. This field serves as the start date for the user synchronization filter.                                                                                    |
| **until**                 | This field serves as the end date for the user synchronization filter.                                                                                                                                                |

## Report fields

* **ID**.
* **Username**.
* **UUID**.
* **senhasegura's user ID**
* **Is synced?.**
* **Last synchronization.**
* In the **Action** column, you can view the synchronization details. To do this, click **Synchronization Details**, represented by the magnifying glass icon.

## SCIM synchronization details window

When you click to view the synchronization details, the **SCIM Synchronization Details** window will open. It contains the following fields:

| Item              | Description                  |
| ----------------- | ---------------------------- |
| **SCIM request** | Details of the SCIM request. |

The synchronization details will be shown in plain text below the **SCIM Request** label. They will be shown similarly to the example below

### SCIM Request example

```yaml
{
"schemas":
	[ 
"urn: ietf: params: schemas: core: 2.0: User" 
],
"userName: "romi_w\u00e1",
"name": {
		"formatted": "Romi W\u00e1,
		"familyName": "W\e001~,
		"givenName": "Romi",
	} 
"emails": [
		{ 
			"value": "romi_w\u001e1@example.com",
			"type": "work",
			"primary": true
		}
	    ]
}
```