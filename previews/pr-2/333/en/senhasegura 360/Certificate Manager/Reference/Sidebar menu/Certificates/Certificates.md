# Certificates

This article describes the information available on the **Certificates'** main page.

<!-- Fix callout -->
:::(Info) (Info)
Path to access: **Certificate Manager > Certificates > Certificates**.
:::

## Icons

<!-- Fix link -->
| Item | Description |
| --- | --- |
| **Show filters** |Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
| **Update** |Represented by the counterclockwise arrow icon, it refreshes the page.|
| **View actions** |Represented by the three vertical dots icon, it displays a dropdown menu with possible actions for certificates.|
| **Import certificate** |Represented by the upload icon (an upward arrow), it opens the **[Import certificate](/v3-33/docs/certificates-flow-how-to-import-certificate)** form.|
| **Batch operations** |Represented by the list icon (three vertical lines), it opens the **[Batch operations](/v3-33/docs/certificate-manager-batch-operations)** search.| 
| **Print report** |Represented by the printer icon, it opens a new page for printing the report.|
| **Export CSV** |Represented by the paper sheet icon, it downloads the report.|
| **Schedule report** |Represented by the clock icon, it opens the **[Schedule report](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports)** form.|

## Search fields

| Item | Description |
| --- | --- |
| **Certificate code** |Used to search for the certificate by its identification number in the system.|
| **Requisition code** |Used to search for the certificate by the requisition code.|
| **Certification authority** |Used to search for the certificate by the chosen authority for signing it.|
| **Common name** |Used to search for the certificate by its name. |
| **Origin** |Used to search for the certificate by origin. It displays a drop-down menu with the options *Scan and discovery*, *Request*, or *Manual import*. |
| **Expiration date** |Used to search for the certificate by expiration date. It displays a calendar to select one specific date or to set an initial date and create a time range.|
| **until** |Used to search for the certificate by expiration date. It displays a calendar to set a final date and create a time range.|
| **Status** |Used to search for the certificate by status. It displays a drop-down menu with the options *Valid, Revoked, Renewal requested*, or *Expired*.|
| **Environments** |Used to search for the certificate by the environment registered in the system parameters. |
| **Systems** |Used to search for the certificate by the system registered in the system parameters.|
| **Project** |Used to search for the certificate by the project name. |
| **Responsible** |Used to search for the certificate by the responsible person. |
| **Enabled** |Used to search for the certificate by activity. It displays a drop-down menu with the options *Yes* or *No*. |
| **Has it a bond?** |Used to search for the certificate by association with devices. It displays a drop-down menu with the options *Yes* or *No*. |
| **Filter** |The button to execute the configured filtering process.|
| **Clear** |The button to clear the fields with information.|

The system displays the results in a list format, with columns named after the corresponding fields. The list presents additional information not included in the search fields:

- **Validation type:** it presents the validation defined in the request registration. It can be *DV SSL*, *EV SSL* or *OV SSL*.
- **Domain type:** it presents the domain defined in the request registration. It can be *single*, *multiple* or *wildcard*.
- **Devices:** it presents how many devices are linked to the certificate.

## Action

This column features action buttons to perform component-related tasks.
<!-- Fix callout -->
:::(Info) (Info)
To view some options, you need specific permissions. These permissions are defined within the Certificate Manager Access group.
:::

<!-- Fix link -->
| Item | Description |
| --- | --- |
| **Certificate Information** |Represented by the identification card icon, it opens the **[Certificate Information](/v3-33/docs/certificate-manager-certificate-information)** page.|
| **View actions** |Represented by the three vertical dots icon, it displays a dropdown menu with various actions available for the certificates.|
| **View Password Key** |Represented by the key icon. When selected, displays three ways to retrieve the certificate password: *View*, *Copy*, or *Spell*.|
| **Publish certificate** |Represented by the play icon (a square with a right arrow), it opens the **[Publish certificate](/v3-33/docs/certificates-flow-how-to-publish-a-certificate)** form.|
| **Link devices** |Represented by the icon of two chain links, it opens the **[Link devices](/v3-33/docs/certificate-manager-settings-how-to-link-devices-certificate)** page.|
| **Renew certificate** |Represented by the icon of two clockwise arrows, it opens the **[Renew certificate](/v3-33/docs/certificates-flow-how-to-renew-a-certificate)** page to confirm the renewal.|
| **Certificate renewal history** |Represented by the clock icon, it opens the *Certificate renewal history* page for consulting.|
| **Revoke certificate** |Represented by the prohibited icon, it opens a pop-up message to confirm the certificate revocation.|
| **Edit** |Represented by the pencil and paper icon, it opens the **[Certificate](/v3-33/docs/certificate-manager-reference-certificate-form)** registration form.|
| **Disable** |Represented by the trash can icon, it opens a pop-up message to confirm the certificate deactivation.|
| **Automate flow** |Represented by the icon of three gears, it opens the **[Automations](/v3-33/docs/how-to-automate-the-lifecycle-of-a-certificate)** page to set the process.|
| **Request details** |Represented by the icon of three horizontal lines, it opens a request search page. This option is visible only for certificates with the *Renewal Requested* status.|
| **Revocation details** |Represented by the icon of the letter 'i', it opens a consulting page. This option is visible only for certificates with the *Revoked* status.|

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
