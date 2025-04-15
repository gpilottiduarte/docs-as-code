# Discovery of certificates

This article describes the information available on the **Discovery of certificates'** main page.

:::(Info) (Info)
Path to access: **Certificate Manager > Events > Discovery of certificates**. 
:::

## Icons
|Item|Description|
|-|-|
|**Show filters**|Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
|**Update**|Represented by the counterclockwise arrow icon, it refreshes the page.|
|**View actions**|Represented by the three vertical dots icon, it displays a dropdown menu with possible actions for the item.|
|**Print report**|Represented by the printer icon, it opens a new page for printing the report.|
|**Export CSV**|Represented by the paper sheet icon, it downloads the report.|
|**Schedule report**|Represented by the clock icon, it opens the **[Schedule report](/v3-32/docs/general-information-how-to-issue-download-and-schedule-device-reports)** form.|

## Search fields

|Item|Description|
|-|-|
|**Common name**|Used to search for the certificate by its CN.|
|**Issuer**|Used to search for the certificate by the CA that issued the certificate.|
|**Date of acquisition**|Used to search for the certificate by acquisition date via Discovery. It displays a calendar to select one specific date or to set an initial date and create a time range.|
|**until**|Used to search for the certificate by acquisition date via Discovery. It displays a calendar to set a final date and create a time range.|
|**Discovery**|Used to search for the certificate by Discovery type.|
|**Enabled**|Used to search for the certificate by its status. It displays a dropdown menu with the options *Enabled* or *Disabled*.|
|**Filter**|The button to execute the configured filtering process.|
|**Clear**|The button to clear the fields with information.|

:::(warning) (**Attention**)
For certificate scanning to function properly on Windows systems, the operating system must have the `LocalAccountTokenFilterPolicy` and `WinRM` features enabled.
:::

The system displays the results in a list format, with columns named after the corresponding fields. The list presents additional information not included in the search fields:

* **ID**: the event identification number in the system.
* **Device**: the device linked to the certificate.
* **Organization**: the organization registered in the component's settings.
* **Valid until**:  the certificate validity.
* **Port/Path**: the certificate location.
* **Scan used**: the scan used to identify the certificates in use.

## Action
This column features action buttons to perform component-related tasks.
|Item|Description|
|-|-|
|**Linked certificate**|Represented by the identification card icon, it opens the [**Certificates**](/v3-32/docs/certificate-manager-reference-certificate-certificate-2) page.|
|**View actions**|Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the certificates.|
|**Certificate information**|Represented by the magnifying glass icon, it opens the [**Certificate Information**](v3-30/docs/certificate-manager-settings-how-to-download-certificate-key) page.|
|**Publishing details**|Represented by the letter 'i' icon, it opens the *Data that will be used in future publications* page.|
***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
