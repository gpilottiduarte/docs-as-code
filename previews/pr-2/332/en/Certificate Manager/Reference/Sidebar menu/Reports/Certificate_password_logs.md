# Certificate password logs

This article describes the information available on the **Certificate password logs** report. This report offers information on certificate security and potential unauthorized action attempts. 

:::(Info) (Info)
Path to access: **Certificate Manager > Reports > Certificate password logs**.
:::

## Icons
| Item | Description |
| --- | --- |
|**Show filters**|Represented by the magnifying glass icon, it displays or hides the search fields on the screen.
|**Update**|Represented by the counterclockwise arrow icon, it refreshes the page.
|**View actions**|Represented by the three vertical dots icon, it displays a dropdown menu with possible actions for the item.
|**Print report**|Represented by the printer icon, it opens a new page for printing the report.
|**Export CSV**|Represented by the paper sheet icon, it downloads the report.
|**Schedule report**|Represented by the clock icon, it opens the [**Schedule report**](/v3-32/docs/general-information-how-to-issue-download-and-schedule-device-reports) form.

##  Search fields

| Item | Description |
| --- | --- |
| **ID** |Used to search for the log by the event identifier number.|
| **Name** |Used to search for the log by certificate's name.|
| **Type** |Used to search for the log by password type. It displays a dropdown menu with the options *View Password Key*, *View password for a keystore*, or *View certificate revocation password*.| 
| **Tags** |Used to search for the log by tags added during registration.|
|**Date of viewing** |Used to search for the log by password viewing date. It displays a calendar to select one specific date or to set an initial date and create a time range.|
| **until** |Used to search for the log by password viewing date. It displays a calendar to set a final date and create a time range.|
| **User** |Used to search for the log by the user who viewed a password.|
|**Filter**|The button to execute the configured filtering process.
|**Clear**|The button to clear the fields with information.

The system displays the results in a list format, with columns named after the corresponding fields. The list presents additional information not included in the search fields:

* **Justification:** the reason selected for viewing a password.

##  Action
This column features action buttons to perform component-related tasks.
| Item | Description |
|---|---|
| **View certificate** |Represented by the identification card icon, it opens the **[Certificates](/v3-32/docs/certificate-manager-reference-certificate-certificate-2)** page. This option is visible only for the logs *View password for a keystore* and *View certificate revocation password*.|
***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
