# Transferred files

This document contains detailed information about the **Transferred files** report, where you can find all the files transferred during a remote session.

:::(info) (**Info**)
To activate the log for file transfer, access the [How to activate remote session file transfer triggers](/v3-33/docs/pam-session-activate-remote-session-file-transfer-triggers) document.
:::
***

### Path to access

1. On senhasegura, in the upper-left corner, click **Grid Menu**, represented by the nine squares icon, and then select **PAM Core**.
2. In the side menu, select **Access control** > **Transferred files**.

***

## Top bar
**Item**|**Description**
|---|---|
**Show filters**|Represented by the magnifying glass icon, it displays or hides the search fields on the screen.
**Update**|Represented by the counterclockwise arrow icon, it refreshes the page.
**View actions**|Represented by the three vertical dots icon, it shows all the possible actions for the report.
**Print report**|Represented by the printer icon, it opens a new page for printing the report.
**Export CSV**|Represented by the paper sheet icon, it downloads the report.
**Schedule report**|Represented by the clock icon, it opens the Schedule report form.

## Search fields

**Item**|**Description**
|---|---|
**File**|File name with the extension.
**MIME Type**|File media type. For example, text/x-shellscript, text/html, text/plain, inode/x-empty, image/jpeg, image/png, and others.
**SHA256 Checksum**|An alphanumeric sequence that verifies the data integrity and authenticity.
**Include**|Date and time that the file transfer was made in the remote session.
**until**|Final date to search the results.
**User IP**|IP number from the user who created the transfer.
**User**|Name of the user who created the transfer.
**Host**|Session IP host number 
**Port**|The port number used in the session.
**Remote user**|Remote session user owner.

## Report fields

* **ID**: number to identify the order in which the transfers were made.
* **File**
* **Size Bytes**: files size.
* **MIME Type**
* **Include**
* **User code**: code number from the user.
* **User IP**
* **Host**
* **Port**
* **Remote user**
* **SHA256 Checksum**
* **Detail**: additional information about the transfer.

:::(info) (**Info**)
The report only displays 30 lines per page. To go to the next ones, click on the advance buttons at the end of the report.
:::
