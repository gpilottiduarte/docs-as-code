# Service-associated credentials

## How to configure and verify credentials associated with Windows services
senhasegura can identify credentials used by running Windows services. This article provides instructions on how to configure and use this functionality.

### Requirements
To ensure the correct functioning of the credential search functionality associated with Windows services, you must meet the following requirements:

* Searching for local accounts associated with Windows services only occurs when device discovery is configured to retrieve credentials.

* At least one local credential must be identified during the scan to enable the service search.

* The target machine must have an active connection via **WinRM** to bring the local accounts associated with the services.

* The target machine must have the **Powershell** installed, and the credential used in the search must have authorization to access the records of the **Win32_Service** and carry out consultations.
:::(Warning) (Caution)

* The functionality is configured to find local accounts associated with the Windows service and cannot locate domain accounts.

* To configure the lookup of credentials used by service, you must use the search option by Device.

:::
### How to configure credential lookup
To configure the search for credentials associated with Windows services, follow the steps below:

1. In the upper left corner, click the **Grid Menu**, identified by the nine square icon, and then select **Discovery**.

1. In the side menu, go to **Settings > Discovery**.

1. Click on the **View Actions icon**, represented by the three vertical dots, and click **+ New**. A pop-up window will appear.

1. Choose the type of your discovery as a **Device**.

1. In **Device discovery**, fill in the mandatory fields marked by an asterisk.

1. In the tab **Searches**, select the option Identify Windows accounts associated with a service.
:::(Info) (Info)
If you haven't yet configured a Windows plug-in, go to the **Plugins** in the same pop-up window and add a port and a Windows plug-in to be used in this search.
:::

7. In the tab **Execution**, section **Credential scan execution**, fill in the mandatory fields marked by an asterisk.

1. In the tab **Import**, section **Device import**, fill in the mandatory field marked by an asterisk.

1. Click **Save** to finish the configuration.

### How to search and view credentials
After verification, it’s possible to view the credentials associated with services in the report.

1. In the upper left corner, click the **Grid Menu**, identified by the nine square icon, and then select **Discovery**.

1. In the side menu, go to **Discovery > Services**.

1. In **Device services**, fill in the search fields with the required information to locate the desired credential.
:::(Warning) (Caution)
Remember that these credentials are associated with Windows services. If the scan focuses on other devices in the system, the search will have no results.
:::