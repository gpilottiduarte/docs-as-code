# Changelog Cloud Security

Check below for bug fixes, new features, and product updates.

## April 1st, 2025

| Item | Description |
| ----- | ----- |
| 1743 | Updated the **Cloud Security** platform to fit the new product's brand. |

### New features

| Item | Description |
| ----- | ----- |
| 1525 | Added a new feature that allows **Cloud Security** administrators to assign owners to identities. |

### Removed

| Item | Description |
| ----- | ----- |
| 1735 | Removed the **Plan & Billing** section from the **Settings** menu to improve user experience. |

## December 20th, 2024

### Product Updates

| Item | Description |
| ----- | ----- |
| 1525 | Added a new feature that allows **Cloud Entitlements** administrators to assign owners to identity providers. |

## November 28th, 2024

### Product Updates

| Item | Description |
| ----- | ----- |
| 1516 | Removed the **Theme config** option. |
| 1524 | Updated the product's notification messages interface to a new design. |

## December 22th, 2023

### Bug fixes

| Item | Description |
| ----- | ----- |
| 565 | Fixed an error in **Cloud Security** when adding a new organization administrator. |
| 597 | Fixed an issue in **Cloud Security** where users could not create an organization name with only two letters, by adjusting the parameters to allow a minimum organization name length of two letters. |
| 629 | Fixed an issue where the **User preferences** page sent an invitation email instead of a change password email when updating passwords. |
| 687 | Fixed an error in the invitation e-mail that was displaying the new user's name incorrectly. |

### Product Updates

| Item | Description |
| ----- | ----- |
| 532 | Updated **Cloud Security** to allow already registered users to become administrators of an organization, even if they are not associated with a specific tenant, granting them access to the organization's administrative functionalities. |
| 408 | Updated the layout of icons in the admin panel to ensure a consistent visual experience regardless of screen size. |
| 591 | Adjusted email sending parameters to increase receiving rate, guaranteeing that users will receive invitation emails. It also added a monitoring system to track the email sending. |
| 497 | Updated the audit report loading mechanism to exclusively present pertinent information for the specific user accessing the report. This refinement improves the loading performance of the reports, mitigating the risk of page crashes. |
| 583 | Updated **Cloud Security**'s personal settings section. Now, the personal settings are located on the **User preferences** page. |
| 742 | Updated the user auto-registering screens to enhance user experience. |
| 1405 | Improved the Notification center with more features. More information in [Notification Center](/v3-33/docs/en/notification-center). |

### New features

| Item | Description |
| ----- | ----- |
| 496 | Added an audit feature to **Cloud Security** that helps organization administrators to track changes within the organization. The actions tracked are: *New tenant created*, *Organization administrator added*, and *Organization administrator removed*. |
| 660 | Added a new feature that enables users to independently register for **Cloud Security**. Upon registration, users can choose three options: initiating in a simulated environment, requesting access to a specific environment, or creating a new organization. |
| 1390 | Added a new feature that allows users to receive notifications directly on Slack. |
| 1185 | Added a new feature that implemented a notification center to help users with software updates, specific alerts, and important announcements. |

## September 1st, 2023

### Bug fixes

| Item | Description |
| ----- | ----- |
| 191 | Fixed issue when changing password that filled the **Username** and the **Current Password** fields automatically with saved login information. |
| 203 | Fixed an issue in **Cloud Security** that was not allowing the addition and removal of user's permissions. |
| 268 | Fixed the issue that prevented the choice of the language of the invitation emails, sent to new users when doing a batch import. |
| 313 | Fixed issue where invite emails sent to a new user were being delivered with incorrect language settings. |

### Product Updates

| Item | Description |
| ----- | ----- |
| 477 | Updated **Cloud Security** to display a message at the top of the page, instructing users who have logged into the platform, but who aren't active in at least one tenant. |
| 465 | Added a search bar to the user report screen. This search bar now replaces the **Users** tab. |
| 298 | Updated the Public Roadmap URL available for users in **Cloud Security**. Now the link opens in another tab. |
| 350 | Updated the authentication process in **Cloud Security** to enhance the user experience by making the hyperlinks more visible, changing the password policy, and adding the view password and Caps Lock alert features. |
| 504 | Updated **Cloud Security** to display the **My profile** feature on a new page rather than within the side menu. |
| 530 | Updated the **Cloud Security**’s Terms of Service to better align with platform features and use cases. The Terms of Service are only available in English. |

### New features

| Item | Description |
| ----- | ----- |
| 444 | Added a new feature that automatically notifies users who are already registered in the platform, when they are added to a new tenant. |
| 241 | Added to **Cloud Security** an audit report to monitor and track user actions within tenants. |
| 182 | Added a new feature to **Cloud Security** that provides auditing details about any action that occurred within a tenant. The details are displayed in a `.json` file containing the state before and after the action. |
| 59 | Added a new feature that allows administrators to deactivate users in **Cloud Security**. |
| 188 | Added a new feature to detect when Caps Lock is on, and an option to see the password when typing. The password will not be displayed when in autocomplete mode. |
| 180 | Added a new feature to **Cloud Security** that highlights users with incomplete registration in the platform. |
| 361 | Added Single Sign-On (SSO) authentication using Google Accounts. This feature is only available for users already registered in **Cloud Security**. |
| 343 | Added Single Sign-On (SSO) authentication with Microsoft and GitHub. This feature is only available for users already registered in **Cloud Security**. |
| 376 | Added a new feature to **Cloud Security** that displays the terms of use and requires users to accept them during their initial login. |
| 500 | Added the option to filter audit reports within the platform by date and time. |
| 411 | Added the role of organization administrator. This new role allows users with this permission attached to manage all the tenants within an organization. |
