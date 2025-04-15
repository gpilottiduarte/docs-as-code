# Changelog 22.12.2023

**Last Update**: 22/12/2023

Check below the new features, improvements, and errors fixed in this version.

* * *

## ⚙ Changelog

### Cloud Entitlements

#### Bug fixes

| Item | Description |
|---|---|
| 642 | Fixed an error in the *Cloud Health chart* that was displaying the health percentage value incorrectly. It also enhanced the precision of the health percentage marker in the chart. |

#### Product Updates

| Item | Description |
|---|---|
|585| Updated the management of potential errors on the recommendations page of Cloud Entitlements. Now, if an error occurs during the information loading process, an alert will be displayed within the specific component, without compromising the overall integrity of the page.|
|54| Updated Cloud Entitlements to monitor and list Azure Users, Groups, and Applications.|
|627| Updated Cloud Entitlements to scan and offer security recommendations for AWS Groups.|
|626| Updated Cloud Entitlements to scan and offer security recommendations for AWS Roles.
|737| Updated the Identities screen to enhance user experience. The term 'Follow recommendation' was replaced with 'Show recommendation,' and the information will now be displayed in a dropdown menu.
|175| Updated the required permissions for a Service account to connect a GCP project to Cloud Entitlements.


#### New Feature
| Item | Description |
|---|---|
|12|Added the integration with Microsoft Azure. Users can now connect their tenants to Cloud Entitlements. |
|599|Added the Cloud health chart to the Home page. This chart offers insights into the security levels of your cloud environments. A 0% indicates an unsafe environment, while 100% represents a completely secure one. |
|551|Added the Access path feature that provides a visual representation of how an identity is connected to specific services and permissions |
|615|Added the Recommendations report to centralize all the security recommendations analyzed for the identities registered within your Cloud Service Providers (CSPs).  |
|198|Added a new feature to Cloud Entitlements to notify users when an AWS access key is invalid. The user that connected the account will receive an email, and an alert will be displayed in the Identities and Cloud setup reports.  |
|29|Added a new feature to provide security recommendations for Google Cloud Platform (GCP) Users.   |
|27|Added a new feature that indicates the services Google Cloud Platform (GCP) Users have access to.    |
|37|Added a new feature that provides information on the API permissions of Azure Applications.   |
|36|Added a new feature that provides information on the Directory assignments of Azure Users.  |
|39|Added a new feature that lists the members of Azure Groups. |
|31|Added a new feature that indicates the services Google Cloud Platform (GCP) Service accounts have access to.  |
|34|Added a new feature that enables users to customize security policies for Google Cloud Platform (GCP). |
|30|Added a new feature that lists the access keys of Google Cloud Platform (GCP) Service accounts. |


* * *

### Cloud Security

#### Bug fixes

| Item | Description |
|---|---|
|565| Fixed an error in Cloud Security when adding a new organization administrator. |
|597|  Fixed an issue in Cloud Security where users could not create an organization name with only two letters, by adjusting the parameters to allow a minimum organization name length of two letters. |
|629|  Fixed an issue where the User preferences page sent an invitation email instead of a change password email when updating passwords. |
|687|  Fixed an error in the invitation e-mail that was displaying the new user's name incorrectly. |

#### Product Updates

| Item | Description |
|---|---|
|532| Updated Cloud Security to allow already registered users to become administrators of an organization, even if they are not associated with a specific tenant, granting them access to the organization's administrative functionalities.| 
|408| Updated the layout of icons in the admin panel to ensure a consistent visual experience regardless of screen size.| 
|591| Adjusted email sending parameters to increase receival rate, guaranteeing that users will receive invitation emails. It also added a monitoring system to track the email sending.|
|497| Updated the audit report loading mechanism to exclusively present pertinent information for the specific user accessing the report. This refinement improves the loading performance of the reports, mitigating the risk of page crashes.|
|583| Updated Cloud Security's Personal settings section. Now, the *Personal settings* are located on the User preferences page. |
|742| Updated the user auto-registering screens to enhance user experience.  |

#### New Feature

| Item | Description |
|---|---|
|496| Added an audit feature to Cloud Security that helps organization administrators to track changes within the organization. The actions tracked are: New tenant created, Organization administrator added, and Organization administrator removed.|
|660| Added a new feature that enables users to independently register for Cloud Security. Upon registration, users can choose three options: initiating in a simulated environment, requesting access to a specific environment, or creating a new organization.|
