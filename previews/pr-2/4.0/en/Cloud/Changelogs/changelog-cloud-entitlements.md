# Changelog Cloud Entitlements

Check below for bug fixes, new features, and product updates.

## April 1st, 2025

### Product Updates

| Item | Description |
| ----- | ----- |
| 1709 | Added restrictions for features that are exclusively to the **Build with Us** plan. |
| 1554 | Added a filter on the **Identities** report to filter identities with JIT permissions currently active. |

## February 26th, 2025

### New Features

| Item | Description |
| ----- | ----- |
| 878 | Added a new feature that allows administrators to attribute JIT permissions to users, groups, or applications in Azure. |

## February 4th, 2025

### Bug fixes

| Item | Description |
| ----- | ----- |
| 1366 | Fixed a bug where security recommendations were still appearing for inactive accounts. |
| 1556 | Fixed a bug where provider's accounts deactivated in the **Setup** menu were still appearing in the **Identities**' report **Environment** filter. |
| 1589 | Fixed a bug where the **Api Permissions** roles' names weren't being displayed.  |

### Product Updates

| Item | Description |
| ----- | ----- |
| 1580 | Improved the logic behind all **Cloud Entitlement's** filters. Now,  filters only show results according to the user's environments. |
| 1680 | Updated the **Findings** tab in the **Identities** report to improve user experience due to new features. |
| 1689 | Improved the providers' **Findings** tab to remove redundant information and reduce visual clutter. |

## January 9th, 2025

### New Features

| Item | Description |
| ----- | ----- |
| 1497 | Added a new feature that allows administrators to attribute JIT permissions to users, roles, or groups in AWS. |
| 1535 | Added a new feature that allows **Cloud Entitlements** administrator to remove policies associated with users, applications, or groups in Azure. |

### Product Updates

| Item | Description |
| :---: | ----- |
| 1546 | Updated the AWS integration form to allow users to choose between the options "Visibility" or "Visibility and management". |

### Translation Fixes

| Item | Description |
| :---: | ----- |
| 1574 | Fixed a bug where text wasn't appearing properly in the synchronization or resynchronization notification in the **Notification center**. |

## November 28th, 2024

### Bug fixes

| Item | Description |
| ----- | ----- |
| 1400 | Fixed a bug where an error 503 was incorrectly appearing after an unsuccessful AWS organization connection. |
| 1391 | Fixed a bug where the identities' report impact pie charts and recommendations were not being updated after adding an Azure account in a new tenant. |
| 1541 | Fixed a bug where the recommendations report wasn't showing any identities. |
| 1480 | Fixed a bug where folder and subfolder were not being synced when integrating an Oracle Cloud organization. |

### New Features

| Item | Description |
| ----- | ----- |
| 1520 | Added a new feature that allows administrators to remove policies associated with users, roles, or groups in AWS. |

### Product Updates

| Item | Description |
| ----- | ----- |
| 1420 | Added a new search bar to improve user experience when searching for reports and identities. |
| 1457 | Improved the filters of the Identities report with: **Recommendations** filter now accepts multiple values, and is a checkbox, and the **Administrator** filter now also filters no administrators. |
| 1489 | Updated the Sandbox mode to support machine identity use cases. |

## March 12th, 2023

### Bug fixes

| Item | Description |
| ----- | ----- |
| 874 | Fixed the icons overlapping the fonts in Cloud Health. |

### Product Updates

| Item | Description |
| ----- | ----- |
| 888 | Added a new feature that allows users to export the **Identities** report as a `.csv` file. |
| 925 | Added an informational alert about application permissions in the Azure integration pop-up. |
| 897 | Added permission `AuditLog.Read.All` to the list of permissions required to connect an Azure tenant. |

### New Features

| Item | Description |
| ----- | ----- |
| 336 | Added a new feature allowing users to define different severity settings for accounts from the same provider. |
| 918 | Added a new feature allowing users to open a side panel with a summary of information about the identity when clicking on an identity node in Cloud Health. |
| 819 | Added a new integration feature to SIEM services to notify status changes for recommendations for each identity through a dedicated interface. |
| 860 | Added a new feature allowing users to generate a `.pdf` report of the dashboard information. |

## December 22th, 2023

### Bug fixes

| Item | Description |
| ----- | ----- |
| 642 | Fixed an error in the Cloud Health chart that was displaying the health percentage value incorrectly. It also enhanced the precision of the health percentage marker in the chart. |

### Product Updates

| Item | Description |
| ----- | ----- |
| 585 | Updated the management of potential errors on the recommendations page of **Cloud Entitlements**. Now, if an error occurs during the information loading process, an alert will be displayed within the specific component, without compromising the overall integrity of the page. |
| 54 | Updated **Cloud Entitlements** to monitor and list Azure users, groups, and applications. |
| 627 | Updated **Cloud Entitlements** to scan and offer security recommendations for AWS groups. |
| 626 | Updated **Cloud Entitlements** to scan and offer security recommendations for AWS roles. |
| 737 | Updated the Identities screen to enhance user experience. The term "Follow recommendation" was replaced with "Show recommendation", and the information will now be displayed in a dropdown menu. |
| 175 | Updated the required permissions for a service account to connect a Google Cloud Provider project to **Cloud Entitlements**. |

### New Features

| Item | Description |
| ----- | ----- |
| 12 | Added the integration with Microsoft Azure. Users can now connect their tenants to **Cloud Entitlements**. |
| 599 | Added the Cloud Health chart to the Home page. This chart offers insights into the security levels of your cloud environments. A 0% indicates an unsafe environment, while 100% represents a completely secure one. |
| 551 | Added the **Access path** feature that provides a visual representation of how an identity is connected to specific services and permissions. |
| 615 | Added the **Recommendations** report to centralize all the security recommendations analyzed for the identities registered within your Cloud Service Providers (CSPs). |
| 198 | Added a new feature to **Cloud Entitlements** to notify users when an AWS access key is invalid. The user that connected the account will receive an email, and an alert will be displayed in the Identities and cloud setup reports. |
| 29 | Added a new feature to provide security recommendations for Google Cloud Platform (GCP) users. |
| 27 | Added a new feature that indicates the services Google Cloud Platform (GCP) users have access to. |
| 37 | Added a new feature that provides information on the API permissions of Azure applications. |
| 36 | Added a new feature that provides information on the directory assignments of Azure users. |
| 39 | Added a new feature that lists the members of Azure groups. |
| 31 | Added a new feature that indicates the services Google Cloud Platform (GCP) service accounts have access to. |
| 34 | Added a new feature that enables users to customize security policies for Google Cloud Platform (GCP). |
| 30 | Added a new feature that lists the access keys of Google Cloud Platform (GCP) service accounts. |

## September 1st, 2023

### Bug fixes

| Item | Description |
| ----- | ----- |
| 57 | Fixed an issue in **Cloud Entitlements** where date and time of the policy use were displayed without proper formatting. |
| 318 | Updated the message displayed when accessing **Cloud Entitlements**' report. The new message "Loading" replaces the previous message "There are no entities.". |
| 413 | Fixed an issue where AWS user policies were not being displayed in the report. |
| 342 | Fixed the incorrect return of recommendations for Google Cloud Provider identities. This error was causing inconsistencies in the information presented by dashboards and reports. |

### Product Updates

| Item | Description |
| ----- | ----- |
| 55 | Changed the display of the General information in **Cloud Entitlements** to highlight the key use cases and instruct the user on how to perform the appropriate actions. |
| 64 | Added a standard filter for all the screens with filter options to improve consistency in filtering and a filter in the screen of all tenant users. |
| 251 | Updated the tooltips that appear when users hover over icons to follow the same tooltip pattern existent on **Cloud Entitlements** homepage. |
| 318 | Updated the **Recommendations** report. The criticality column has been removed and the number of recommendations is now presented in cores, which represent the criticality level of the recommendation, along with a 25-character limit. |
| 317 | Updated **Cloud Entitlements** to use the same terms that the Cloud Service Providers use for their identities instead of the abstract category service principals. |
| 430 | Improved the **Cloud Entitlements** filters to display only relevant identity types associated with the chosen provider. The **Providers** field now determines what appears in the **Identity type** and **Environment** fields. |
| 410 | Updated the size and alignment of the icons in **Cloud Entitlements** menu. |
| 465 | Updated the audit report filtering by removing a filter box with no value. |
| 538 | Populated simulated data to the **Sandbox mode** allowing users to test various features, including the Cloud setup, **Recommendations** report, Security policies, and the details screen. |
| 503 | Updated the management of potential errors on the home page of **Cloud Entitlements**. Now, if an error occurs during the information loading process, an alert will be displayed within the specific component, without compromising the overall integrity of the page. |

### New Features

| Item | Description |
| ----- | ----- |
| 26 | Added a new feature that lists Google Cloud projects principals. |
| 28 | Added a new feature that lists users' roles in Google Cloud. |
| 32 | Added a new feature to list Google Cloud Service accounts' roles. |
| 486 | Added the **Sandbox mode** option for users. This feature fills **Cloud Entitlements** with simulated data, allowing users to try out the product without needing to connect a personal or organizational account. |
| 348 | Added an audit report to **Cloud Entitlements**. This new feature allows users to monitor actions performed within the product. |
