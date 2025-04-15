# Devices by certificate

This article describes the information available on the **Devices by certificate** report. This report shows the certificates linked to the devices within an organization.

:::(Info) (Info)
Path to access: **Certificate Manager > Reports > Devices by certificate**.
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
**Certificate code**|Used to search for the certificate by its code.
**Common name**|Used to search for the certificate by the CN.
**Device**|Used to search for the certificate by the device with the published certificate.
**Date of the last discovery**|Used to search for the certificate by the date of the last discovery performed in the environment. It displays a calendar to select one specific date or to set an initial date and create a time range.|
**until**|Used to search for the certificate by the date of the last discovery performed in the environment. It displays a calendar to set a final date and create a time range.|
**Date of publication**|Used to search for the certificate by the publication date. It displays a calendar to select one specific date or to set an initial date and create a time range.|
**until**|Used to search for the certificate by the publication date. It displays a calendar to set a final date and create a time range.|
**Processed**|Used to search for the certificate by its status. It displays a drop-down menu with the options *Irregular, Manually validated, Out of date, Expired*, and *Regular*. 
|**Filter**|The button to execute the configured filtering process.
|**Clear**|The button to clear the fields with information.

The system displays the results in a list format, with columns named after the corresponding fields. The list presents additional information not included in the search fields:

* **Origin**: indicates whether the link to the device was established manually or through a publication profile.
* **Publishing**: indicates whether the certificate has been published.
* **Discovery**: indicates whether the certificate was discovered through Discovery.

:::(Info) (Info)
**Regular certificates** are certificates that can be safely used on devices.
**Irregular certificates** are certificates that don’t comply with regulatory requirements.
**Manually validated certificates** are certificates that have been validated in the Action column by an administrator.
**Out-of-date certificates** are certificates that need to be renewed on devices.
**Expired certificates** are certificates whose expiration date has passed.
:::

##  Action
This column features action buttons to perform component-related tasks.
| Item | Description |
|---|---|
**Link devices**|Represented by the two links icon, it opens the *Link devices* page to select other devices and link to the certificate.
**Manually validate**|Represented by the checkmark icon, it opens a page to justify the action. Manual validation should only occur after the administrator verifies that the certificate is present on the device.
**Add to Profile**|Represented by the icon of a person, it opens the *Add Device Profile* page to select a publishing profile.
**Remove link**|Represented by the icon of a broken link, it opens a message to confirm the removal of the link. This option is visible only for devices in the list that were manually linked.
**Details of the discovery**|Represented by the icon of the letter 'i', it opens a page with data that will be used in future publications. This option is visible only for devices in the list that were linked via Discovery.
***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
