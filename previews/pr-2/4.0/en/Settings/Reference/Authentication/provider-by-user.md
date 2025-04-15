# Provider by user

This document provides information about the **Provider by user** report screen which displays information about the users and their providers.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Authentication \> Provider by user.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **New** | Button | Directs to the **New provider by user** screen. |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the user identification code within Segura. |
| **User** | Text field | Filters by the user's name in Segura. |
| **Username** | Text field | Filters by the user's username in Segura |
| **Provider** | Dropdown menu | Filters by authentication provider. |
| **Enabled** | Dropdown menu | Filters providers by their activation state in Segura. |

## Report fields
* **ID.**  
* **User.**  
* **Username.**  
* **Provider.**  
* **Order:** number that indicates the priority sequence of the authentication providers used by the system.  
* **Enabled.**  
* **Actions:**  
  * **Disable:** disables the provider setting for the user.  
  * **Edit:** opens the **Edit provider by user** screen.

## New provider by user screen
This section provides information about the **New provider by user**.
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Authentication provider** | Dropdown menu | Yes | Selects the authentication provider associated with the user. |
| **Order** | Quantity input | Yes | Indicates the priority of the authentication provider. |
| **Add** | Button | No | Opens the Users modal. |
| **Checkbox** | Checkbox | No | Selects all records displayed on the screen and enables the **Remove selected** button. |
| **Users** | Table | No | Lists the users added and their information: *ID, Name, Username, E-mail,* and *Department.* |

## Users modal
| Item | Type | Description |
| :---- | :---- | :---- |
| **Search** | Search field | Searches for users based on the characters typed. |
| **Checkbox** | Checkbox | Selects all records displayed on the screen. |
| **ID** | Text field | User's identification code in Segura |
| **NAME** | Text field | User's personal name in Segura |
| **USERNAME** | Text field | User's username in Segura |
| **E-MAIL** | Text field | User's e-mail address in Segura |
| **DEPARTMENT** | Text field | User's department in Segura |

## Edit provider by user screen
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **User** | Dropdown menu | Yes | Select the user to the provider. |
| **Authentication provider** | Dropdown menu | Yes | Select the authentication provider to link to the user. |
| **Order** | Quantity selector | Yes | The number defines the priority sequence of the authentication providers used by the system. |
| **Enabled** | Radio button | Yes | Select the status of the provider by user on Segura. |

