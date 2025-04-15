# Applications


This document provides information about the **Applications** report screen, which displays details about applications authorized to consume the available APIs.

More information in [APIs A2A](/v4/docs/apis-a2a).

## Requirements
* System administrator permission.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **A2A**.  
2. In the side menu, select **Applications \> Applications**.

---

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Add** | Button | Directs to the **Add application** screen. |
| **Actions** | Dropdown menu | Displays the options *Print report*, *Export CSV*, and *Schedule report*. |

## Search fields

::: (info) (Info)  
 To view all search fields, click **More**.  
 :::

| Item | Type | Description |
| ----- | ----- | ----- |
| **Code** | Text field | Filters applications by their identification code in Segura. |
| **Name** | Text field | Filters applications by their identification name. |
| **System** | Text field | Filters applications by the system where they can be used. |
| **Environment** | Text field | Filters applications by the environment where they can be used. |
| **Tags** | Text field | Filters applications by associated keywords. |
| **Authentication method** | Dropdown menu | Filters applications by the authentication method used. The options are: *No, OAuth 1.0, OAuth 2.0,* and *AWS*. |
| **Status** | Dropdown menu | Filters applications by their activation status. Options are **Enabled** and **Disabled**. Clear the field to enable the **All** option. |
| **Created on** | Date picker | Filters applications by the period they were created. |

## Report fields

* **ID**.  
* **Name**.  
* **Systems**.  
* **Environments**.  
* **Tags**.  
* **Status**.  
* **Authentication method**.  
* **Created at**.  
* **Actions:**  
  * **Authorizations**: opens the **Application Authorization** screen.  
  * **Edit**: opens the **Edit Application** screen.  
  * **View**: opens the **Application Configuration** screen.

::: (info) (Info)  
 By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.  
:::

### Add/Edit application screen

This section provides information about the **Add application** and **Edit application** screens, which share the same fields.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Application name**\* | Text field | Yes | Application identification name. |
| **Use OAuth signature**\* | Dropdown menu | Yes | Selects the authentication method used. The options are *No, OAuth 1.0, OAuth 2.0*, and *AWS*. |
| **Status\*** | Radio button | Yes | Sets the application status as **Enabled** or **Disabled**. |
| **Tags** | Text field | No | Keywords to categorize the application. |
| **Description** | Text field | No | Additional information about the application. |
| **Add (Amazon AWS ARNs)** | Button | No | Adds ARNs to the application if the chosen authentication method is AWS. More information in [AWS Security Credentials](https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/security-creds.html#access-keys-and-secret-access-keys). |

#### Amazon AWS ARNs section 

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add** | Button | No | Adds ARNs to the application if the chosen authentication method is AWS. More information in [AWS Security Credentials](https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/security-creds.html#access-keys-and-secret-access-keys). |
| **Select items** | Checkbox | No | Selects records in the **ARN** table and enables the **Remove selected** button. |

### Application configuration screen

The **Application Configuration** screen displays all details related to the created application.

* **Authentication method**: authentication method used by the application.  
* **Application**: application identification name.  
* **Client identifier**: unique code identifying the application, varying according to the authentication method:  
  * **Client ID**: used for OAuth 2.0 authentication.  
  * **Consumer key**: used for OAuth 1.0 authentication.  
  * **Access key ID**: used for AWS authentication.  
* **Secret key**: secret used to authenticate the application, varying according to the authentication method:  
  * **Client Secret**: used for OAuth 2.0 authentication. Sensitive information. Click **Show** to display.  
  * **Secret Access Key**: used for AWS authentication. Sensitive information. Click **Show** to display.  
* **Amazon ARNs**: unique identifiers for Amazon resources.  
* **System**: system where the application’s authorization will be used. Information available after creating an authorization for the application.  
* **Environment**: environment where the application’s authorization will be used. Information available after creating an authorization for the application.  
* **Credentials**: information about the credentials the authorization can access.

