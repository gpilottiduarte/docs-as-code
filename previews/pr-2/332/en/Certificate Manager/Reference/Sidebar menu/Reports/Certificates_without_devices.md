# Certificates without devices

This article describes the information available on the **Certificates without devices** report.
This report allows for identifying unused certificates, indicating a security risk or the need for proper certificate reallocation. 

:::(Info) (Info)
Path to access: **Certificate Manager > Reports > Certificates without devices**.
:::
## Icons
|Item | Description |
| --- | --- |
|**Show filters**|Represented by the magnifying glass icon, it displays or hides the search fields on the screen.
|**Update**|Represented by the counterclockwise arrow icon, it refreshes the page.
|**View actions**|Represented by the three vertical dots icon, it displays a dropdown menu with possible actions for the item.
|**Import certificate**|Represented by the upload icon (an upward arrow), it opens the **[Import certificate](/v3-32/docs/certificates-flow-how-to-import-certificate)** form.|
|**Batch operations**|Represented by the icon of three vertical lines, it opens the **[Batch certificates operations](/v3-32/docs/certificate-manager-batch-operations)** page.|
|**Print report**|Represented by the printer icon, it opens a new page for printing the report.
|**Export CSV**|Represented by the paper sheet icon, it downloads the report.
|**Schedule report**|Represented by the clock icon, it opens the [**Schedule report**](/v3-32/docs/general-information-how-to-issue-download-and-schedule-device-reports) form.

## Search fields
|Item | Description |
| --- | --- |
|**Certificate code**|Used to search for the certificate by its identification number.|
|**Requisition code**|Used to search for the certificate by the requisition identification number.|
|**Certification authority**|Used to search for the certificate by the CA that signed it.|
|**Common name**|Used to search for the certificates by the CN.|
|**Origin**|Used to search for the certificate by its origin. It displays a drop-down menu with the options *Scan and discovery*, *Request* and *Manual import*. |
|**Expiration date**|Used to search for the certificate by expiration date. It displays a calendar to select one specific date or to set an initial date and create a time range.|
|**until**|Used to search for the certificate by expiration date. It displays a calendar to set a final date and create a time range.|
|**Status**|Used to search for the certificate by its status. It displays a drop-down menu with the options *Valid*, *Revoked*, *Renewal requested* and *Expired*. |
|**Environments**|Used to search for the certificate by the environment defined in the registration.|
|**Systems**|Used to search for the certificate by the system defined in the registration.|
|**Project**|Used to search for the certificate by the project name defined in the registration.|
|**Responsible**|Used to search for the certificate by the responsible user.|
|**Enabled**|Used to search for the certificate by its status in the system. It displays a drop-down menu the with options *Yes* and *No*.|
|**Has it a bond?**|Used to search for the certificate by not having a bond with a device. It displays a drop-down menu with the options *Yes* and *No*.|
|**Filter**|The button to execute the configured filtering process.
|**Clear**|The button to clear the fields with information.

The system displays the results in a list format, with columns named after the corresponding fields. The list presents additional information not included in the search fields:

* **Validation type**: the validation defined in the request registration. It can be *DV SSL, EV SSL* or *OV SSL*.
* **Domain type**: the domain defined in the request registration. It can be *single, multiple* or *wildcard*.
* **Tags**: identification markers defined in the request registration.
* **Devices**: how many devices are linked to the certificate. It must always present the number zero.

## Action
This column features action buttons to perform component-related tasks.
|Item | Description |
| --- | --- |
|**Certificate information**|Represented by the identification card icon, it opens the **[Certificate information](/v3-32/docs/certificate-manager-certificate-information)** page.|
|**View actions**|Represented by the icon of three vertical dots. It displays a drop-down menu with possible actions for the certificates.|
| **Publish certificate** |Represented by the play icon (a square with a right arrow), it opens the **[Publish certificate](/v3-32/docs/certificates-flow-how-to-publish-a-certificate)** form.|
| **Link devices** |Represented by the icon of two chain links, it opens the **[Link devices](/v3-32/docs/certificate-manager-settings-how-to-link-devices-certificate)** page.|
|**Renew certificate**|Represented by the icon of two clockwise arrows, it opens the **[Renew certificate](/v3-32/docs/certificates-flow-how-to-renew-a-certificate)** form.|
|**Revoke certificate**|Represented by the icon of a prohibition sign, it opens a pop-up message to confirm the revocation.|
|**Edit**|Represented by the icon of a pencil and paper, it opens the **[Certificate](/v3-32/docs/certificate-manager-reference-certificate-form)** registration form.|
|**Disable**|Represented by the trash can icon, it opens a pop-up message to confirm the deactivation.|
|**Certificate renewal history**|Represented by the clock icon, it opens the *Certificate renewal history* page, for consulting.|
|**Automate flow**|Represented by the icon of three gears, it opens the **[Automation](/v3-32/docs/how-to-automate-the-lifecycle-of-a-certificate)** form.|
|**View key password**|Represented by the key icon, it opens the **[View key password](/v3-32/docs/certificate-manager-settings-how-to-retrieve-cert-passwords)** page. This option is visible only on items that have a password for the key.|
|**Publication details**|Represented by the icon of a lined paper, it opens the **[Publications](/v3-32/docs/certificate-manager-reference-publishing)** page. This option is visible only with the published certificates.|
|**Request details**|Represented by the icon of three parallel lines, it opens the **[Requests](/v3-32/docs/certificate-manager-reference-certificate-requests)** page. This option is visible only on items with the *Renewal requested* status. |
|**Revocation details**|Represented by the icon of the letter 'i',  it opens the Validation guidelines page. This option is visible only on items with the *Revoked* status.|
|**Enable**|Represented by the checkmark icon, it opens a pop-up message to confirm the certificate activation. This option is visible only on items with the *Inactive* status.|
***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
