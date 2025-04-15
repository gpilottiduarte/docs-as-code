# General application information

# Application versions

This document provides information about the Segura application, including details from the following reports: Application Versions, Access Proxy, Licenses, Incidents, System Updates, and EULA.

## Path to Access

1. On Segura, in the navigation bar, hover over the **Product Menu** and select **Orbit Server Manager**.  
2. In the side menu, select **Application \> Application versions.**

## Application Versions

Accessible through **Orbit Server Manager \> Application \> Application versions**.  
This form contains information about the versions of the Segura instance.

| Item | Type | Description |
| :---- | :---- | :---- |
| **Application** | Text field | Name of the application. |
| **Instance type** | Text field | Type of the application instance. |
| **Application user** | Text field | Application username. |
| **Client** | Text field | Client name. |
| **Server** | Text field | Server name. |
| **Package** | Text field | Name of the package in Segura. |
| **Version** | Text field | Current version of the package. |

## Proxy Access

Accessible through **Orbit Server Manager \> Application \> Proxy Access.**  
Each card provides information about the Segura proxies.

| Item | Type | Description |
| :---- | :---- | :---- |
| **Name** | Text field | Name of the proxy. |
| **Restart** | Button | Restarts the service. |
| **Stop** | Button | Stops the service. |

## Licenses

Accessible through **Orbit Server Manager \> Application \> Licenses.**.  
Contains information about the Segura instance licenses.

| Item | Type | Description |
|---|---|---|
| **Modules** | Text field | Indicates the activation status of each module within Segura.|

## Incidents

Accessible through **Orbit Server Manager \> Application \> Incidents.**  
It contains information about incidents that occurred in the Segura instance. Each card includes details about the incident, as shown in the example below:

```bash
Incident #247719660444 - Server configuration tuning not applied
Incident #247719660444 - Server configuration tuning not applied 
    Start: 08/15/2024 13:14:04 | Update: 11/07/2024 14:51:02
The server configuration tuning is different from the minimum required.
```

## System Updates

Accessible through **Orbit Server Manager \> Application \> System updates**.  
Contains information on updates to Segura packages. It indicates whether there are any new updates for the packages and which version each package is in.

| Item | Type | Description |
| :---- | :---- | :---- |
| **Check for Updates** | Button | Checks for pending updates for the instance. |
| **Package name** | Text field | Name of the package in Segura. |
| **Version** | Text field | The latest version of the package is available. |
| **Architecture** | Text field | Architecture of the package. |
| **Upgradable from** | Text field | The version of the package is currently installed on the Segura instance. |

:::(info) (Info)  
For information about the Segura EULA, access the respective documentation available at [Segura EULA](/v4/docs/eula).  
:::