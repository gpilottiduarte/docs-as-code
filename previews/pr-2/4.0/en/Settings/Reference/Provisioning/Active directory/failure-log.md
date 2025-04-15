# Failure logs

This document provides information about the **LDAP authentication failures** report screen that records the LDAP/AD authentication failures.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Provisioning \> Active directory \> Failure logs.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print Report, Export CSV, and Schedule Report.* |

## Search fields
| Item | Type | Description |
| :---- | :---- | :---- |
| **Error ID** | Text field | Filters by the authentication error code. |
| **User** | Text field | Filters by the username that performed the authentication attempt. |
| **Attempt Date** | Date picker | Filters according to the period stipulated in the calendar. |

## Report fields
* **Date:** date when the authentication failure occurred.  
* **Error ID.**  
* **AD error:** error code in Active Directory.  
* **User.**  
* **Messages:** error messages received by Segura.  
* Error **message: error** messages received by Segura displayed with treatment for better readability.
:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::