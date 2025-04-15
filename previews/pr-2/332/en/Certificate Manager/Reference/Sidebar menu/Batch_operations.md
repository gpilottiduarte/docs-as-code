# Batch operations

This article describes the information available on the **Batch operations'** main page.

:::(Info) (Info)
Path to access: **Certificate Manager > Batch operations**.
:::

## Icons
These icons are present in the four menu options **Batch renovation**, **Batch revocation**, **Batch deactivation**, and **Verify revoked certificates**.

| Item | Description |
| --- | --- |
| **Show filters** |Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
| **Update** |Represented by the counterclockwise arrow icon, it refreshes the page.|
| **View actions** |Represented by the three vertical dots icon, it displays a dropdown menu with possible actions for the item.|
| **Print report** |Represented by the printer icon, it opens a new page for printing the report.|
| **Export CSV** |Represented by the paper sheet icon, it downloads the report.|
| **Schedule report** |Represented by the clock icon, it opens the **[Schedule report](/v3-32/docs/general-information-how-to-issue-download-and-schedule-device-reports)** form.|
***
## Search fields - batch operations
The search fields below are present in **Batch renovation**, **Batch revocation**, and **Batch deactivation**.

|Item|Description|
|-|-|
|**ID**|Used to search for the certificate by the event identifier number.|
|**Certification authority**|Used to search for the certificate by the chosen signing authority.|
|**Common name**|Used to search for the certificate by the CN.|
|**Origin**|Used to search for the certificate by its origin. It displays a dropdown menu with the options *Scan and Discovery*, *Request*, or *Manual Import*.|
|**Expiration date**|Used to search for the certificate by expiration date. It displays a calendar to select one specific date or to set an initial date and create a time range.
|**until**|Used to search for the certificate by expiration date. It displays a calendar to set a final date and create a time range.
|**Status**|Used to search for the certificate by its status. It displays a dropdown menu with the options *Valid, Revoked, Renewal requested*, or *Expired*.|
| **Filter** |The button to execute the configured filtering process.|
| **Clear** |The button to clear the fields with information.|

The system displays the results in a list format, with columns named after the corresponding fields.  The list presents additional information not included in the search fields:

* **Organization:** the organization registered in the component's settings.
* **Validation type:** the validation defined in the request registration. It can be *DV SSL, EV SSL* or *OV SSL*.
* **Domain type:** the domain defined in the request registration. It can be *single, multiple* or *wildcard*.
* **Tags:** the identification markers added in the request registration.
* **Devices:** how many devices are linked to the certificate.
* **Environments:** the environment registered in the system parameters.
* **Systems:** the system registered in the system parameters.
* **Project:** the project name defined in the request registration.
* **Responsible:** the responsible’s username for the certificate.

:::(Info) (Info)
The three menus feature a blue button, located in the lower right corner of the home screen, which performs the corresponding batch operation.
:::
***
## Search fields - revoked certificates
The search fields below are present in **Verify revoked certificates**.

|Item|Description|
|-|-|
|**ID**|Used to search for a verification by event identification number.|
|**Start of verification**|Used to search for a verification by start date. It displays a calendar to select one specific date or to set an initial date and create a time range.
|**until**|Used to search for a verification by start date. It displays a calendar to set a final date and create a time range.
|**End of verification**|Used to search for a verification by end date. It displays a calendar to select one specific date or to set an initial date and create a time range.
|**until**|Used to search for a verification by end date. It displays a calendar to set a final date and create a time range.
|**Have an error?**|Used to search for a verification by any error in the process.  It displays a drop-down menu with the options Yes or No.
|**Status**|Used to search for a verification by its status.  It displays a drop-down menu with the options *Awaiting, In progress, Finished* or *Without certificates*. 
| **Filter** |The button to execute the configured filtering process.|
| **Clear** |The button to clear the fields with information.|

The system displays the results in a list format, with columns named after the corresponding fields.  The list presents additional information not included in the search fields:

* **Runtime:** the duration of the execution process.
* **Certificates:** how many certificates were verified in the process.
* **Waiting:** how many certificates are awaiting verification.
* **Success**
* **Error**
* **Progress:** the progress bar of the process.

### Action

This column features action buttons to perform component-related tasks.
|Item|Description|
|-|-|
|**Verification details**|Represented by the magnifying glass icon. It opens the *Verification details* page, which displays whether there were any errors with the certificates or they were revoked.|
:::(Info) (Info)
The home screen presents the blue button **Verify certificates**, located in the lower right corner of the screen, which triggers the verification.
:::
***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
