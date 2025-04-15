# Request information

This article describes the information available on the **Request information** report. This report tracks and manages the flow of certificate requests within the organization. 

:::(Info) (Info)
Path to access: **Certificate Manager > Reports > Request information**.
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
| **ID** |Used to search for the request by the event identifier number.|
| **Name** |Used to search for the request by its name.|
| **Status** |Used to search for the request by its status. It displays a drop-down menu with the options *Generating*, *Generated*, *Signature requested*, *Request approved*, *Request rejected*, *Waiting signature*, *Signed*, *Error signing*, *Canceled*, *Waiting edition*, *Error generating CSR*, *Error generating key*, and *Awaiting processing*. 
| **Responsible** |Used to search for the request by the responsible user.|
| **Project** |Used to search for the request by the project name defined in the request's registration.|
| **Request date** |Used to search for the request by date. It displays a calendar to select one specific date or to set an initial date and create a time range.|
| **until** |Used to search for the request by date. It displays a calendar to set a final date and create a time range.|
|**Filter**|The button to execute the configured filtering process.
|**Clear**|The button to clear the fields with information.

The system displays the results in a list format, with columns named after the corresponding fields. The list presents additional information not included in the search fields:

* **Organization:** the company's name.
* **Environment:** the environment added in the request.
* **Requester:** the user who created the request.

##  Action
This column features action buttons to perform component-related tasks.
| Item | Description |
|---|---|
| **Requisition** |Represented by a northeast arrow icon, it opens the **[Requests](/v4/docs/certificate-manager-reference-certificate-requests)** page.|
|**View actions**|Represented by the three vertical dots icon, it displays a dropdown menu with possible actions for the request.
| **Certificate** |Represented by the identification card icon, it opens the **[Certificate Information](/v4/docs/certificate-manager-certificate-information)** page. This option is visible only for certificates with the *Signed* status.|
***
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).
