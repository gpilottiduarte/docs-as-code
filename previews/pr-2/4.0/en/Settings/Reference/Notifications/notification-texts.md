# Notification texts

This document provides information about the **Notifications text** report, which displays information about text notification customization in Segura. These notifications include email text customization and their available TAGs.

## Path to access
1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.  
2. In the side menu, select **Notifications \> Text customization.**

## Actions menu
| Item | Type | Description |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options for *Print Report, Export CSV, and Schedule Report.* |

## Report Fields
* **ID:** notification code.  
* **Type:** type of notification.  
* **Subject:** string with the subject of the notification.  
* **Actions**  
  * **Edit text**: opens the **Notification text** window in edit mode.  
    * If you have not configured any text, the option is named **Configure Text**.

## Notifications text
| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Text Type** | Dropdown menu | Yes | Specifies the text type of the notification. As the text is registered in Segura, this drop-down menu is disabled. |
| **Active** | Radio button | No | Sets the state of the notification. The options are **Yes** and **No**. |
| **View TAGs** | Button | Not applicable | Directs to the **TAGs** modal with all `TAGs` that can be used in the notification text. |
| **Subject** | Text Field | Yes | Fill in the text of the creation of the string that will be used as the subject of the notification email. It accepts tags. |
| **Message text** | Text Field | Yes | Fill in the text that will be sent in the body of the notification email. It accepts tags. |

## TAGs list
By clicking on the **View TAGs** button, you’ll be directed to the TAGs modal, which contains all the TAGs available on Segura.

* `[#REQUEST_CODE#]` : request code on format `S000000`.
* `[#REQUEST_STATUS#]` : request status.
* `[#REQUESTER#]` : user who is requesting access to password.
* `[#REQUEST_DATE#]` : date of request.
* `[#APPROVER#]` : name of the approver who will receive the request email.
* `[#ANSWERED_BY#]` : name of approver who responded to the request.
* `[#ANSWER_DATE#]` : date when the request was answered by the approver.
* `[#ACTION#]` : requested action.
* `[#ACTION_LIST#]` : action requested on list format.
* `[#ACTION_LIST_SYSLOG#]` : action requested on list format using syslog template.
* `[#URL_APPROVE#]` : url to approve access to password.
* `[#LINK_APPROVE#]` : link to approve access to password.
* `[#URL_REJECT#]` : url to reject access to password.
* `[#LINK_REJECT#]` : link to reject access to password.
* `[#DEVICE_HOSTNAME#]` : device hostname.
* `[#DEVICE_IP#]` : device IP.
* `[#CREDENTIAL_USERNAME#]` : credential username.
* `[#CREDENTIAL_TYPE#]` : credential type.
* `[#REASON#]` : specified reason.
* `[#JUSTIFICATION#]` : reason specified by requester.
* `[#GOVERNANCE_ID#]` : governance ID.
* `[#START_DATETIME#]` : start date and time of requested access period on `12/19/2024 12:47:31` format.
* `[#END_DATETIME#]` : end date and time of requested access period on `12/19/2024 12:47:31` format.
* `[#START_DATETIME_STR#]` : start date and time of requested access period on Thursday, December 19 12:47 PM format.
* `[#END_DATETIME_STR#]` : end date and time of requested access period on Thursday, December 19 12:47 PM format.
* `[#START_DATE#]` : start date of requested access period on `12/19/24` format.
* `[#END_DATE#]` : end date of requested access period on `12/19/24` format.
* `[#START_TIME#]` : start time of requested access period on `12:47` pm format.
* `[#END_TIME#]` : end time of requested access period on `12:47` pm format.
* `[#CREDENTIAL#]` : credential involved on request.
* `[#RESPONSIBLE#]` : name of certificate responsible.
* `[#CERT_ENVIRONMENTS#]` : certificate environments separated by comma.
* `[#CERT_SYSTEMS#]` : certificate systems separated by comma.
* `[#CERT_TAGS#]` : certificate tags separated by comma.
* `[#CERT_DESC#]` : certificate description.
* `[#COMMONNAME#]` : certificate common name.
* `[#ISSUED_BY#]` : certificate issuer information.
* `[#VALIDITY_INIT#]` : certificate validity start date.
* `[#VALIDITY_END#]` : certification expiration date.