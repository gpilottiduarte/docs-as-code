# Transferred files

This document provides information about the **Transferred files** report screen, where you can find the list of file transfers (download and upload) carried out during a remote session.

To track the transferred files, it’s necessary to enable this parameter. More information in [How to activate remote session file transfer triggers](/v4/docs/pam-session-activate-remote-session-file-transfer-triggers).

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Audit > Sessions > Transferred files.**

---
## **Actions menu**

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV* and *Schedule report.* |

## Search fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **File** | Text field | Filters the transfers by file name with the extension. |
| **MIME Type** | Text field | Filters the transfers by the media type of the file being transferred. For example: *text/x-shellscript*, *text/html*, *text/plain*, *inode/x-empty*, *image/jpeg*, *image/png*, among others. |
| **SHA256 Checksum** | Text field | Filters the transfers by unique alphanumeric string that verifies data integrity and authenticity |
| **Include** | Text field | Filters the transfers by the period in which the file was transferred in the session. |
| **User IP** | Text field | Filters the transfers by the IP number of the user who made the transfer. |
| **User** | Text field | Filters the transfers by the name of the user who made the transfer. |
| **Host** | Text field | Filters the transfers by session host IP number.  |
| **Port** | Text field | Filters the transfers by the port number used in the session. |
| **Remote user** | Text field | Filters the transfers by the remote user who owns the session. |

## Report fields

* **ID:** identification number of the file transfer order carried out.  
* **File**  
* **Size Bytes:** size of the transferred file in bytes.  
* **MIME Type**  
* **Include**  
* **User code:** user registration code.  
* **User IP**  
* **Host**  
* **Port**  
* **Remote user**  
* **SHA256 Checksum**  
* **Detail:** text with additional transfer information.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::