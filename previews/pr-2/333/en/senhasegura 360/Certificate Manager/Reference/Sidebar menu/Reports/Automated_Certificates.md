# Automated Certificates

This article describes the information available in the **Automated Certificates** report. This report lists all certificates associated with automated workflows. By clicking on a certificate, users can access the details of the corresponding automation, simplifying control and ensuring the security of operations.

<!-- Fix callout -->
:::(Info) (Info)
Path to access: **Certificate Manager > Reports > Automated Certificates**.
:::

## Search Fields

|Item|Description|
|-|-|
|**Certificate code**|Used to search for the certificate by its identification number.|
|**Certification authority**|Used to search for the certificate by the authority that signed it.|
|**Common name**|Used to search for the certificate by its Common Name (CN).|
|**Expiration date**|Used to search for the certificate by its expiration date. Displays a calendar to select a specific date or set a start date to create a time range.|
|**until**|Used to search for the certificate by its expiration date. Displays a calendar to set an end date and create a time range.|
|**Status**|Used to search for the certificate by its status. Displays a dropdown menu with options: *Valid, Revoked, Renewal requested*, and *Expired*.|
|**Filter**|Button to execute the configured filtering process.|
|**Clear**|Button to clear the filled fields.|

The results are displayed in a list format on the screen, with columns named according to the corresponding fields. The list provides other information:

- **Organization:** the name of the company.
- **Publishing:** indicates whether the automation process for publication is enabled or not.
- **Publication Date:** date and time of publication.
- **Renovation:** indicates whether the automation process for renewal is enabled or not.
- **Renewal Date:** date and time of renewal.

## Action

This column presents action buttons to perform tasks related to the component.

<!-- Fix link -->
|Item|Description|
|-|-|
|**Certificate information**|Represented by the identification card icon, it opens the [Certificate Information](/v3-33/docs/certificate-manager-settings-how-to-download-certificate-key) page.|
|**Automate flow**|Represented by the three gears icon, it opens the [Automations](/v3-33/docs/how-to-automate-the-lifecycle-of-a-certificate) page to configure the process.|
