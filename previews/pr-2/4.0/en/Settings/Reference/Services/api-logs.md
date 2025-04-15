# API Logs

This document provides information about the **API Logs** report.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Services \> API \> Logs.**

## Actions Menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options for *Print Report, Export CSV, and Schedule Report.* |

## Search fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **Client ID** | Text field | Filters by the customer's identification in Segura. |
| **Client** | Text field | Filters by the user name or username of the client that is using the API feature. |
| **Authorization ID** | Text field | Filters by the authorization identification number. |
| **Authorization** | Text field | Filters by authorization name |
| **IP** | Text field | Filters by the IP address that used the authorization. |
| **Resource** | Text field | Filters by the technical name of the resource used. |
| **Status** | Text field | Filters by the operation status code. |
| **Error** | Dropdown menu | Filters the registers by their activation state. The options are **Yes** or **No**. Clear the field to enable the **All** option. |
| **Date/Time** | Date picker | Filters the registers by the period in which they were consulted. |

## Report fields
* **ID**: log code in Segura.  
* **Client ID**  
* **Client**  
* **Authorization ID**  
* **Authorization**.  
* **IP**  
* **Resource**.  
* **Event**: event used in the API call.  
* **Method**: method used in the API call.  
* **Status**  
* **URL**: URL used in the API call.  
* **Server**: name of the server.  
* **Error**  
* **Time**: duration of the API call.  
* **Date/Time**: shows the date and time of the API call. Presented in the format `DD/MM/YYYY HH:MM`.
:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::