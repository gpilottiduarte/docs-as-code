# Changelog 01.09.23

**Last Update**: 01/09/2023

Check below the new features, improvements, and errors fixed in this version.

* * *

## ⚙ Changelog

### Cloud Entitlements

#### Bug fixes

| Item | Description |
|---|---|
|57| Fixed an issue in Cloud Entitlements where date and time of the Policy use were displayed without proper formatting. |
|318|Updated the message displayed when accessing Cloud Entitlements' report. The new message "Loading" replaces the previous message "There are no entities." |
| 413 |Fixed an issue where AWS user policies were not being displayed in the report. |
| 342 |Fixed the incorrect return of recommendations for GCP identities. This error was causing inconsistencies in the information presented by dashboards and reports.|

#### Product Updates

| Item | Description |
|---|---|
| 55 | Changed the display of the General information in Cloud Entitlements to highlight the key use cases and instruct the user on how to perform the appropriate actions. |
| 64 | Added a standard filter for all the screens with filter options to improve consistency in filtering and a filter in the screen of all tenant users. |
| 251| Updated the tooltips that appear when users hover over icons to follow the same tooltip pattern existent on Cloud Entitlements homepage. |
| 318 | Updated the recommendations report by removing the criticality column. The recommendations column now displays the number of recommendations, with a colored representation indicating the level of criticality. |
| 318 | Updated the "Principal" column to show a maximum of 25 characters. For texts that exceed the maximum of characters,  a hover functionality that displays the complete text was added. |
| 317 | Updated Cloud Entitlements to use the same terms that the Cloud Service Providers use for their identities instead of the abstract category Service principals.|
| 430 |Improved the Cloud Entitlements filters to display only relevant identity types associated with the chosen provider. The Providers field now determines what appears in the Identity type and Environment fields. |
| 410 | Updated the size and alignment of the icons in Cloud Entitlements menu. |
| 465 | Updated the audit report filtering by removing a filter box with no value. |
| 538 | Populated simulated data to the 'Sandbox' mode allowing users to test various features, including the Cloud setup, Recommendations report, Security policies, and the details screen.  |
| 503 | Updated the management of potential errors on the home page of Cloud Entitlements. Now, if an error occurs during the information loading process, an alert will be displayed within the specific component, without compromising the overall integrity of the page.  |

#### New Feature
| Item | Description |
|---|---|
| 26 | Added a new feature that lists Google Cloud projects principals. |
| 28 | Added a new feature that lists users' roles in Google Cloud. |
| 32 | Added a new feature to list Google Cloud Service accounts' roles. |
| 486 |Added the ‘Sandbox’ mode option for users. This feature fills Cloud Entitlements with simulated data, allowing users to try out the product without needing to connect a personal or organizational account. |
| 348 |Added an audit report to Cloud Entitlements. This new feature allows users to monitor actions performed within the product. |
* * *

### Cloud Security

#### Bug fixes

| Item | Description |
|---|---|
| 191 | Fixed issue when changing password that filled the "Username" and the "Current Password" fields automatically with saved login information.  |
| 203 | Fixed an issue in Cloud Security that was not allowing the addition and removal of user's permissions. |
| 268 | Fixed the issue that prevented the choice of the language of the invitation emails, sent to new users when doing a batch import. |
| 313 | Fixed issue where invite emails sent to a new user, were being delivered with incorrect language settings. |
| 191 | Fixed issue when changing password that filled the "Username" and the "Current Password" fields automatically with saved login information.  |
| 203 | Fixed an issue in Cloud Security that was not allowing the addition and removal of user's permissions. |

#### Product Updates

| Item | Description |
|---|---|
| 477 | Updated Cloud Security to display a message at the top of the page, instructing users who have logged into the platform, but who aren't active in at least one tenant. |
| 465 | Added a search bar to the user report screen. This search bar now replaces the 'Users' tab. |
| 298 | Updated the Public Roadmap URL available for users in Cloud Security. Now the link opens in another tab. |
| 350 | Updated the authentication process in Cloud Security to enhance the user experience by making the hyperlinks more visible, changing the password policy, and adding the view password and CapsLock alert features. |
| 504 | Updated Cloud Security to display the ‘My profile’ feature on a new page rather than within the side menu. |
| 530 | Updated the Cloud Security’s Terms of Service to better align with platform features and use cases. The Terms of Service are only available in English.  |


#### New Feature

| Item | Description |
|---|---|
| 444 | Added a new feature that automatically notifies users who are already registered in the platform, when they are added to a new tenant.  |
| 241 | Added to Cloud Security an Audit report to monitor and track user actions within tenants.  |
| 182 | Added a new feature to Cloud Security that provides auditing details about any action that occurred within a tenant. The details are displayed in a JSON file containing the state before and after the action. |
| 59 | Added a feature that allows administrators to deactivate users in Cloud Security.  |
| 188 | Added a feature to detect when Caps Lock is on, and an option to see the password when typing. The password will not be displayed when in autocomplete mode. |
| 180 | Added a new feature to Cloud Security that highlights users with incomplete registration in the platform. |
| 361 | Added Sigle sing-on authentication using Google Accounts. This feature is only avaliable for users already registered at Cloud Security. |
| 343 | Added Single sign-on authentication with Microsoft and GitHub accounts only for users already registered in Cloud Security.  |
| 376 | Added a new feature to Cloud Security that displays the terms of use and requires users to accept them during their initial login. |
| 188 | Added a feature to detect when Caps Lock is on, and an option to see the password when typing. The password will not be displayed when in autocomplete mode. |
| 180 | Added a new feature to Cloud Security that highlights users with incomplete registration in the platform. |
| 500 | Added the option to filter audit reports within the platform by date and time. |
| 411 | Added the role of Organization administrator. This new role allows users with this permission attached to manage all the tenants within an Organization.  |