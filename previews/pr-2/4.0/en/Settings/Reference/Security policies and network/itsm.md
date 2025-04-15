# ITSM

ITSM

This document provides information about the **ITSM** report, which displays information about support ticket system integrations registered in Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Security policies and network \> ITSM.**

## Actions Menu

| Item | Type | Description |
| :---- | :---- | :---- |
| **New** | Button | Directs to the **Registration of integration with ITSM** screen to register a new ITSM integration. |
| **Actions** | Dropdown menu | Displays the options for *Print Report, Export CSV, and Schedule Report.* |

## Search Fields

| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text Field | Filters by the code of the ITSM integration in Segura |
| **Name** | Text Field | Filters by the name of the ITSM integration in Segura. |
| **System** | Dropdown menu | Filters by the integration ticket system. The options are *Jira Service Desk, Zendesk, ServiceNow, CA Service Desk Manager, BMC Helix (Remedy) and GLPi ITSM.* |
| **Enabled** | Dropdown menu | Filters the registers by their activation state. The options are **Yes** or **No**. Clear the field to enable the **All** option. |

## Report Fields

* **ID**  
* **Name**  
* **System**  
* **Enabled**  
*  **Actions**:  
  * **Edit :** opens the **Registration of ticket system integration** screen in edit mode.  
  * **Test authentication**: directs to the **System Integration Test** screen.

:::(info) (Info)  
By default, the report displays 30 records per screen . To go to the next screen , click the forward buttons at the end of the report.  
:::

## Registration of ticket system integration

### Integration system selection

| Integration Service | Action |
| :---- | :---- |
| **Jira Service Desk** | Directs to the **Registration of integration with ITSM** screen for the **Jira Service Desk**. |
| **Zendesk** | Directs to the **Registration of integration with ITSM** screen for **Zendesk.** |
| **Freshdesk** | Directs to the **Registration of integration with ITSM** screen for the **Freshdesk**. |
| **ServiceNow** | Opens the **Registration of integration with ITSM** screen for the **ServiceNow**. |
| **CA Service Desk Manager** | Directs to the **Registration of integration with ITSM** screen for the **CA Service Desk Manager**. |
| **GLPi ITSM** | Directs to the **Registration of integration with ITSM** screen for the **GLPi ITSM**. |

#### Jira Service Desk

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Integration Name** | Text Field | Yes | Integration identification name. |
| **Enabled** | Radio button | Yes | Enables or disables the integration status. |
| **API URL** | Text Field | Yes | Jira Service Desk API endpoint. |
| **User** | Text Field | Yes | Username for authentication. |
| **API Token** | Text Field | No | API token for authentication. |

#### Zendesk

| Field | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Integration Name** | Text Field | Yes | Integration identifier name. |
| **Enabled** | Radio button | Yes | Enables or disables the integration status. |
| **API URL** | Text Field | Yes | Zendesk system API address. |
| **Email address** | Text Field | Yes | Email address associated with the Zendesk account. |
| **Password** | Text Field | No | Password for authentication. |
| **API token** | Text Field | No | API token for authentication. |

#### Freshdesk

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Integration Name** | Text Field | Yes | Integration identification name. |
| **Enabled** | Radio button | Yes | Enables or disables the integration status. |
| **API URL** | Text Field | Yes | Freshdesk API endpoint. |
| **User/API key** | Text Field | Yes | Username or API key for authentication. |
| **API Token** | Text Field | No | API token for authentication. |

#### ServiceNow

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Integration Name** | Text Field | Yes | Integration identification name. |
| **Enabled** | Radio button | Yes | Enables or disables the integration status. |
| **API URL** | Text Field | Yes | ServiceNow API endpoint. |
| **User** | Text Field | Yes | Username for authentication. |
| **Password** | Text Field | No | Password for authentication. |

#### CA Service Desk Manager

## General information

* The **Request Method** determines which integration method to use: **Rest API** or **SQL Server**.  
* Common fields: **Username** and **Password**  
* Conditional fields for the **Rest API**: **API URL**method.  
* Conditional fields for the **SQL Server** method: *DB Host, DB Name, DB Instance, and DB Host Port.*

| Field | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Integration Name** | Text Field | Yes | Integration identifier name. |
| **Enabled** | Radio button | Yes | Enables or disables the integration status. |
| **Request Method** | Radio button | Yes | Request method. The options are **Rest API** or **SQL Server**. |
| **User** | Text Field | No | Username for authentication. |
| **Password** | Radio button | No | Password for authentication. |
| **DB Host** | Text Field | No | Address of the database server. |
| **DB Name** | Text field | No | Name of the database. |
| **DB Instance** | Text Field | No | Instance of the database. |
| **DB Host** | Text field | No | Port of the database server. |
| **API URL** | Text Field | No | CA Service Desk Manager API endpoint. |

### GLPi ITSM

| Field | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Integration Name** | Text Field | Yes | Integration identifier name. |
| **Enabled** | Radio button | Yes | Enables or disables the integration status. |
| **API URL** | Text Field | Yes | GLPi system API address. |
| **User** | Text Field | Yes | Username or API key for authentication. |
| **Application token** | Text Field | Yes | Application token for authentication. |
| **Password** | Text field | No | Password for authentication. |