# Credentials

In this document, you will find all the information about the **Credentials** report, within the context of **Backup**, which displays general information about the credentials registered in senhasegura.

## **Path to access**

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Backup \> Credentials**.

## **Top bar**

| Item | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon, displays or hides the search fields present on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, displays a dropdown menu with possible actions for the page. |
| **Print report** | Represented by the printer icon, opens a new page to print the report. |
| **Export CSV** | Represented by the paper sheet icon, downloads the report. |
| **Schedule report** | Represented by the clock icon, opens the [Schedule report](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports) form. |

## **Search fields**

| Item | Description |
| :---- | :---- |
| **ID** | Text field. Filters by the credential code in senhasegura. |
| **Device** | Text field. Filters by the device name in senhasegura. IP address can also be used. |
| **Username** | Text field. Filters by the username in senhasegura. |
| **Integrity** | Dropdown menu. Filters by the integrity status of the credential in senhasegura. Can be *Empty, Corrupted,* or *Healthy*. |
| **Compliance** | Dropdown menu. Filters by the compliance status of the credential password in relation to the registered password policy. Can be **Yes** or **No**. |
| **Password policy** | Dropdown menu. Filters according to the password policy registered in senhasegura. |
| **Last backup** | Presents a calendar to choose the start date of the filter. |
| **until** | Presents a calendar to choose the end date of the filter. In the adjacent field, select the time to end the filter. |
| **Status** | Dropdown menu. Filters according to the credential status in senhasegura. Can be **Enabled** or **Disabled**. |

## **Report fields**

* **ID.**  
* **Device.**  
* **Username.**  
* **Type:** type of user.  
* **Last change:** date and time of the last password change made to the credential. Displayed in the format `DD/MM/YYYY HH:MM:SS`.  
* **Last view:** date and time of the last query made to the credential. Displayed in the format `DD/MM/YYYY HH:MM:SS`.  
* **Last backup:** The date and time of the last backup of the credential, displayed in the format `DD/MM/YYYY HH:MM:SS`.  
* **Enabled:** inform the status of the credential.  
* **Integrity.**  
* **Password policy.**  
* **Compliance.**  
* **Detail:** displays the message with details about the credential's password. If the password is not compliant, the message will explain what is missing for it to be compliant.