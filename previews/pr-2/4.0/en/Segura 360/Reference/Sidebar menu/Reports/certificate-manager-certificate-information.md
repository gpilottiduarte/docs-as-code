# Certificate information

This article describes the information available on the **Certificate information** report. This report tracks and manages the certificates flow within the organization. 

:::(Info) (Info)
Path to access: **Certificate Manager > Reports > Certificate information**.
:::

## Icons
| Item | Description |
| --- | --- |
|**Show filters**|Represented by the magnifying glass icon, it displays or hides the search fields on the screen.
|**Update**|Represented by the counterclockwise arrow icon, it refreshes the page.
|**View actions**|Represented by the three vertical dots icon, it displays a dropdown menu with possible actions for the item.
|**Print report**|Represented by the printer icon, it opens a new page for printing the report.
|**Export CSV**|Represented by the paper sheet icon, it downloads the report.
|**Schedule report**|Represented by the clock icon, it opens the [**Schedule report**](/v4/docs/general-information-how-to-issue-download-and-schedule-device-reports) form.

##  Search fields
| Item | Description |
| --- | --- |
| **ID** |Used to search for the certificate by the event identifier number.|
| **Certification authority** |Used to search for the certificate by the CA that signed it.|
| **Common name** |Used to search for the certificate by its name.| 
| **Organization** |Used to search for the certificate by the company's name.|
| **Tags** |Used to search for the certificate by tags.|
| **Responsible** |Used to search for the certificate by the responsible user.|
| **Notified emails** |Used to search for the certificate by the users' emails.|
|**Valid until** |Used to search for the certificate by expiration date. It displays a calendar to select one specific date or to set an initial date and create a time range.|
| **until** |Used to search for the certificate by expiration date. It displays a calendar to set a final date and create a time range.|
|**Status**|Used to search for the certificate by its status. It displays a drop-down menu with the options *Valid*, *Revoked*, *Renewal requested*, and *Expired*. 
|**Filter**|The button to execute the configured filtering process.
|**Clear**|The button to clear the fields with information.

The system displays the results in a list format, with columns named after the corresponding fields. The list presents additional information not included in the search fields:

* **Description:** any information added to the certificate registration.
* **Days until expire:** how many days until the certificate expires.
* **Origin:** *Scan and Discovery*, *Request*, or *Manual import*.
* **Scan origin:** *Apache, Nginx, Tomcat, Search certificates in directories, IIS, Workstation Windows, IBM Websphere, Search certificates without login, Issued by Microsoft CA, Palo Alto, Kubernetes, NetScaler.*

##  Action
This column features action buttons to perform component-related tasks.
| Item | Description |
|---|---|
| **Certificate information** |Represented by the identification card icon, it opens the *Certificate information page*.|
| **Sent mail** |Represented by the envelope icon, it opens the *Sent mail* page to check if any user sent e-mails about the certificate in question.|
***
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
