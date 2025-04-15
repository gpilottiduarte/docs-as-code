# Authorizations



This document provides information about the Authorizations report screen, which displays the authorizations linked to applications that will consume **A2A** APIs.  

More information in [APIs A2A](/v4/docs/apis-a2a).

## Requirements

* System administrator permission.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **A2A**.  
2. In the side menu, select **Applications \> Authorizations**.

---

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Add application** | Button | Directs to the **Add application** screen. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV*, and *Schedule report*. |

## Search fields 

:::(info) (Info)  
 To view all search fields, click **More**.  
 :::

| Item | Type | Description |
| ----- | ----- | ----- |
| **Application** | Dropdown menu | Filters authorizations linked to specific applications. |
| **Code. Authorization** | Text field | Filters authorizations by their identification code in Segura. |
| **Name** | Text field | Filters authorizations by their identification name. |
| **Environment** | Text field | Filters authorizations by the environment where they are used. |
| **System** | Text field | Filters authorizations by the system that consumed the API data. |
| **Creation date** | Date picker | Filters authorizations by the period they were created. |
| **Status** | Dropdown menu | Filters authorizations by their activation state. The options are **Enabled** or **Disabled**. Clear the field to enable the **All** option. |

## Report fields

* **Code. Authorization**: displays the application linked to the authorization(s) and the identification code of the authorization(s).  
* **Name**.  
* **Environment**.  
* **System**.  
* **Creation date**: displays the date and time of the authorization's creation.  
* **PAM resource permission**: displays the access permission to PAM Core. The options are Read-only and Read-write.  
* **Status**.  
* **Actions**:  
  * **Add authorization**: opens the **Add authorization** screen.  
  * **Download:** displays the decryption key to view sensitive information protected in responses to API calls. The information considered sensitive is **credentials** from the **PAM Core** resource and **fingerprint** from the **System** resource.  
  * **View**: opens the **Application Authorization** screen.  
  * **Edit**: opens the **Edit authorization** screen.

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the bottom of the report.  
 :::

### Application Authorization screen 

This screen displays information about the selected application's authorization.

* **Authentication method**: authentication method used by the authorization.  
* **Application**: application's identification name.  
* **Client identifier**: unique code that identifies the application, varying according to the authentication method:  
  * **Client ID**: used for OAuth 2.0 authentication.  
  * **Consumer key**: used for OAuth 1.0 authentication.  
  * **Access key ID**: used for AWS authentication.  
* **Secret key**: secret used to authenticate the application, varying according to the authentication method:  
  * **Client Secret**: used for OAuth 2.0 authentication. Sensitive information. Click **Show** to display.  
  * **Consumer Secret**: used for OAuth 1.0 authentication. Sensitive information. Click **Show** to display.  
  * **Secret Access Key**: used for AWS authentication. Sensitive information. Click **Show** to display.  
* **Token**: used for OAuth 1.0 authentication.  
* **Token secret**: used for OAuth 1.0 authentication.  
* **Amazon ARNs**: unique identifiers for Amazon resources.  
* **Credentials**: information about the credentials the authorization can access.



###  Add/Edit authorization screen 

The **Add authorization** and **Edit authorization** screens share the same fields.

#### Settings tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Expiration date** | Date and time pickers | No | Sets the expiration date and time of the authorization. Leave blank and use the **Status \> Disabled** component to deactivate the authorization manually. |
| **Status\*** | Radio button | Yes | Sets the authorization status as **Enabled** or **Disabled**. |
| **System** | Dropdown menu | No | Selects the system that will consume the API data. |
| **Environment** | Dropdown menu | No | Selects the environment where the application will be used. |

#### Security tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Authorized resources** | Checkbox | No | Selects the resources available to the application. The options are *PAM Core, Certificate Manager, Task Manager, Dashboards, Web Proxy Session, Users, System*, and *A2A*. |
| **Enable sensitive information encryption?\*** | Radio button | Yes | Defines whether sensitive information will be encrypted. The options are **Yes** or **No**. |
| **PAM resource permission\*** | Radio button | Yes | Defines access to **PAM Core** as **Read-only** or **Read and write**. |

#### Authorized IPs section (use * to allow any IP)

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add** | Button | No | Enables the **Address** field to add authorized IP addresses for using the authorization. The \* (asterisk) allows access from any IP address. |
| **Select items** | Checkbox | No | Selects added IP addresses and enables the **Remove selected** button. |

####  Authorized HTTP referrers section (any origin allowed by default)

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add** | Button | No | Enables the **Address** field to add URLs authorized for using the authorization with an HTTP referrer. If no URL is entered, any origin is allowed. |
| **Select items** | Checkbox | No | Selects authorized URLs and enables the **Remove selected** button. |

####   Certificate validation section

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Certificate fingerprint** | Text field | No | Adds the certificate fingerprint for additional protection. |

####  Credential tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Access credential** | Dropdown menu | No | Selects the credential linked to the authorization. |
| **Create a new credential** | Checkbox | No | Allows the creation of a new access credential for the authorization. |
| **Device** | Dropdown menu | No | Selects the device linked to the new access credential. |
| **Username** | Text field | No | Defines the username of the new access credential. |
| **Password** | Text field | No | Defines the password of the new access credential. |
| **Add** | Button | No | Adds the credential to the authorization. |
| **Credentials** | Table | No | Lists added credentials and their information: *ID, Credential, Device*, and *Type*. |
| **Select items** | Checkbox | No | Selects credentials in the **Credentials** table and enables the **Remove selected** button. |

#### Devices tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add** | Button | No | Opens the **Devices** modal. |
| **Select items** | Checkbox | No | Selects devices in the **Devices** table and enables the **Remove selected** button. |
| **Devices** | Table | No | Lists added devices and their information: *ID, Name, Management, Type*, and *Vendor*. |

#### Protected information tab

::: (info) (Info) 

Starting with version 3.26, the **Protected information** module has been replaced by **MySafe**. Learn more in MySafe. 

:::

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add** | Button | No | Opens the **Protected information** modal. |
| **Select items** | Checkbox | No | Selects information in the **Protected information** table and enables the **Remove selected** button. |
| **Protected information** | Table | No | Lists protected information and their details: *ID, Name, Type*, and *Owner*. |

####  Review tab 

This tab displays a summary of the authorization's configurations with the **Back** or **Save** buttons.

