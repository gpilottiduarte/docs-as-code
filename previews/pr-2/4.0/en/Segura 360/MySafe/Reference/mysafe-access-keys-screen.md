# Access keys



This document provides information about the **Access keys** report screen, which displays the access keys created to integrate an application with **MySafe**.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **MySafe.**  
2. In the side menu, select **Integrations \> Access keys**.

---

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **Add** | Button | Directs to the **Add access key** screen. |
| **Actions** | Dropdown menu | Displays the options *Batch import, Print report, Export CSV*, and *Schedule report*. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **Application** | Text field | Filters access keys by the application identification name. |
| **Tags** | Text field | Filters access keys by associated keywords. |
| **Encrypted** | Dropdown menu | Filters access keys based on their use in API calls, considering whether sensitive information, such as passwords and notes, is returned encrypted. The options are **Yes** (encrypted information) or **No** (unencrypted information). Clear the field to enable the **All** option. |
| **Expiration date** | Date picker | Filters access keys by their expiration period. |
| **Creation date** | Date picker | Filters access keys by the period when they were added to **MySafe**. |

## Report fields

* **Application**.  
* **Tags**.  
* **Information**: items the key has access to.  
* **Authentication method**: authentication method used. By default, **MySafe** uses the vOAuth 2.0 method.  
* **Encrypted**.  
* **Expiration date**.  
* **Creation date**.  
* **Actions**:  
  * **View**: opens the **View access key** screen with information about the access key.  
  * **Edit**: opens the **Edit access key** screen.  
  * **Decryption key**: opens the confirmation pop-up for downloading the decryption key with the options **Yes** or **No**. Available for access keys with the **Encrypt sensitive data** option enabled.  
  * **Clone**: opens the confirmation pop-up to clone the access key with the options **Yes** or **No**.  
  * **Revoke**: opens the confirmation pop-up to revoke the access key with the options **Yes** or **No**.

:::(info) (info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward button at the end of the report.  
:::

## View access key screen

This screen displays details of the selected access key.

| Item | Description |
| ----- | ----- |
| **Authentication method** | Displays the authentication method used by the access key. By default, **MySafe** uses OAuth 2.0. |
| **Application** | Displays the identification name of the application linked to the access key. |
| **Client ID** | Displays the client application identification code (`Client ID`) in the OAuth 2.0 authorization flow. |
| **Client Secret** | Displays the password (`Client Secret`) used to authenticate the client application in the OAuth 2.0 authorization flow. |
| **Description** | Displays information about the application linked to the access key. |
| **Expiration date** | Displays the date and time when the access key expires. |
| **Encrypt sensitive data?** | Indicates whether sensitive information, such as passwords and notes, will be returned encrypted in API calls made with the access key. The options are **Yes** or **No**. |
| **Certificate validation?** | Indicates the existence of a certificate fingerprint. The options are **Yes** or **No**. |
| **Authorized IPs** | Displays the IP addresses authorized to make API calls with the access key. |
| **Authorized HTTP referrers** | Displays the URLs authorized to use the access key based on the HTTP referer header. |
| **Data** | Displays the data that can be accessed with the access key. |

## Add/Edit access key screens

The **Add access key** and **Edit access key** screens share the same fields.

### Application tab 

In this tab, the user defines the application settings linked to the access key.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Name\*** | Text field | Yes | Application identification name. |
| **Description** | Text field | No | General information about the application |
| **Tags** | Text field | No | Keywords to categorize the application. |

### Security tab 
In this tab, the user defines the security settings of the access key.

#### Encryption of sensitive data section

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Encrypt sensitive data** | Checkbox | No | Enables or disables the encryption of sensitive information, such as passwords and notes, in API responses. |


#### Authorized IPs (use \* to allow any IP) section

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add**  | Button | No | Enables the **Address** field to insert IP addresses authorized to use the access key. Using the **\*** (asterisk) character allows any IP address to access. |
| **Checkbox** | Checkbox  | No | Selects all added IP addresses and enables the **Remove selected** button. |

#### Authorized HTTP referers (by default allow any source) section

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Add**  | Button | No | Enables the **Address** field to insert URLs authorized to use the access key using an HTTP referer. If no URL is entered, any origin will be allowed. |
| **Checkbox** | Checkbox  | No | Selects all added URLs and enables the **Remove selected** button. |



### Data tab 

In this tab, the user defines the **MySafe** data that the key will have access to.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Full access** | Checkbox | No | Enables or disables the application’s access to all **MySafe** data. |
| **Specified data** | Dropdown menu | No | Displays a dropdown menu to select the data the application will have access to. Available if the **Full access** checkbox is unchecked. |

### Period tab 

In this tab, the user defines the expiration period of the access key. If not defined, expiration should be done manually using the **Revoke** option.

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Day** | Date picker | No | Defines the expiration day of the access key. |
| **Hour** | Time picker | No | Defines the expiration hour of the access key. |



### Review tab 

This tab displays a summary of the access key registration settings, with the **Back** and **Save** buttons.
