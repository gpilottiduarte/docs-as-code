# Sharing options


This document provides information about the **Sharing options** form screen, which allows the administrator to configure **MySafe**.   

## Requirements

* **MySafe** administrator permission. 


## Path to access

1\. On Segura, on the navigation bar, hover over the **Products menu** and select **MySafe**.   
2\. In the side menu, select **Global administration \> Sharing options**.  

---
## Email configuration section

:::(warning) (Attention)   
Although optional, leaving the **Sending account** field empty prevents emails from being sent, which are necessary to connect **MySafe** to the extension and the app, as well as for any **MySafe** notifications.   
::: 

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Sending account** | Dropdown menu | No | Defines the email that will send any type of **MySafe** notification, such as the authentication code for users to connect the extension and mobile app to **MySafe** or access a shared item.  |

## External sharing section

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Enable external sharing?**\* | Radio button | Yes | Enables or disables external sharing. The options are **Yes** or **No**.     |
| **Max sharing time** | Quantity input/Dropdown menu | No | Defines the duration for which a shared item will be accessible to an external user in **MySafe**.  <br>The dropdown menu displays the options *Minutes, Hours, Days*, and *Months*.   |
| **Base url** | Text field | No | Defines the URL of the **MySafe** vault that will connect to the extension, mobile app, or shared item. <br>**Note**: enter the URL without the `https://` prefix. Example: `company.mt4.dev`   |

:::(warning) (Attention) 

For multi-tenant environments, enter the tenant URL in the **Base URL** field, also without the `https://` prefix. Example: `tenant.mt4.dev`   

:::