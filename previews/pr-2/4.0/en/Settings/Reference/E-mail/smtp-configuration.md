# SMTP configuration

This document provides information about the **SMTP configuration** report, which presents the SMTP account settings within Segura.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Email \> SMTP Configuration**

## Actions Menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **New** | Button | Opens the SMTP server settings window for a new **SMTP account** to be registered. |
| **Actions** | Dropdown menu | Displays the options for *Print Report, Export CSV, and Schedule Report.* |

## Search fields
:::(info) (Info)  
To view all search fields, click **More.**  
:::
| Item | Type | Description |
| :---- | :---- | :---- |
| **ID** | Text field | Filters by the SMTP account code in Segura. |
| **Name** | Text field | Filters by the name of the SMTP account in Segura. |
| **Sender e-mail** | Text field | Filters by SMTP account sender's email address. |
| **Reply e-mail** | Text field | Filters by SMTP account's *Reply-To* email address. |
| **Return e-mail** | Text field | Filters by SMTP account's *Return-Path* email address. |
| **Confirmation e-mail** | Text field | Filters by SMTP account confirmation email address. |
| **Enabled** | Dropdown menu | Filters according to the SMTP account status in Segura. It can be **Yes** or **No**. |

## Report fields
* **ID.**  
* **Name.**  
* **Sender e-mail.**  
* **Reply e-mail.**  
* **Return e-mail.**  
* **Confirmation mail.**  
* **Enabled.**  
* **Default:** indicates if this SMTP account is the default use in Segura.  
* **Secure connection:** indicates if the SMTP account uses a secure connection.  
* **Uses config:** indicates if the SMTP account should be forced to use the configuration section  
* **Read Conf:** indicates if the SMTP account receives a read confirmation of the message.  
* **Footer:** indicates if the account sends the footer in the email.  
* **Actions:**  
  * **Edit:** opens the **SMTP server settings** window.  
  * **Test setting**: opens the **Test Email \- Account** window.

## SMTP server settings
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Account Name** | Text field | Yes | SMTP account name. |
| **Enabled** | Radio button | No | Indicates the SMTP account status. It can be **Yes** or **No**. |
| **Sender e-mail** | Text field | Yes | Filters by SMTP account sender's email address. |
| **Reply e-mail** | Text field | Yes | SMTP account response email address. |
| **Reply e-mail (Return-Path)** | Text field | Yes | SMTP account return email address. |
| **Confirmation mail** | Text field | Yes | Filters by SMTP account confirmation email address. |
| **Default account** | Radio button | No | Indicates whether the account is the default account for use in Segura. It can be **Yes** or **No**. |
| **Send Read Receipt** | Radio button | No | Indicates whether the SMTP account will receive a read confirmation. It can be **Yes** or **No**. |
| **Force settings use** | Radio button | No | Indicates whether the SMTP account will be forced to use the default setting. It can be **Yes** or **No**. |
| **Enable footnote** | Radio button | No | Indicates whether the SMTP account should send the message footnote. It can be **Yes** or **No**. |
| **Host SMTP** | Text field | Yes | STMP account host address. |
| **Port** | Text field | No | Port where the SMTP account host is listening. |
| **Use safe connection?** | Radio button | No | Indicates whether the SMTP account should use a secure connection. It can be **Yes** or **No**. |
| **Secure connection type** | Radio button | No | Indicates which type of secure connection will be used. It can be **TLS** or **SSL**. |
| **User authentication** | Radio button | No | Indicates whether the SMTP account should use a credential for authentication. It can be **Yes** or **No**. |
| **Ignore certificate error** | Radio button | No | Indicates whether the SMTP account should ignore certificate errors. It can be **Yes** or **No**. |
| **Use Network Connector** | Radio button | No | Indicates whether the account should use a **Network Connector**. It can be **Yes** or **No**. |
| **Network Connector** | Dropdown menu | No | Select the Network Connector to use when connecting the SMTP account. **Note**: This option will only be enabled if you select **Yes** on the **Use Network Connector radio button.** |
| **Credential for authentication** | Dropdown menu | No | Select the credential that will be used for authentication by the SMTP account. **Note**: If you select **Yes** in the **Use authentication** option, the selection of a credential is mandatory; the credential must be previously registered in Segura. |

## Test Email \- Account
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Send to** | Text field | Yes | Fill in the email address where Segura should send the test message. |
| **Subject** | Text field | Yes | Fill in the subject of the test email. By default it is filled with the `TEST MESSAGE!` string. |
| **Message** | Text field | Yes | Fill in the body of the test email. By default it is filled with the `ATTENTION: THIS IS A TEST MESSAGE!` string. |

