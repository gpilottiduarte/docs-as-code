# Operations

This article describes the information available on the **Operations'** main page.

<!-- Fix callout -->
:::(Info) (Info)
Path to access: **Certificate Manager > Events > Operations**.
:::
<!-- Fix callout -->
:::(Warning) (Caution)
The Operations item is present in several components of the product. In Certificate Manager, the **Operation** search field is already filled in by default with the **Certificate publishing** option, as it is the operation referring to the component.
:::

## Icons

<!-- Fix link -->
| Item | Description |
| --- | --- |
|**Show filters**|Represented by the magnifying glass icon, it displays or hides the search fields on the screen.|
|**Update**|Represented by the counterclockwise arrow icon, it refreshes the page.|
|**View actions**|Represented by the three vertical dots icon, it displays a dropdown menu with possible actions for the item.|
|**Request password change**|Represented by the icon of two arrows in opposite directions, it opens the *Request password change* form to select the credential whose password the user wants to change. It’s not directly related to Certificate Manager.|
|**Print report**|Represented by the printer icon, it opens a new page for printing the report.|
|**Export CSV**|Represented by the paper sheet icon, it downloads the report.|
|**Schedule report**|Represented by the clock icon, it opens the [**Schedule report**](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports) form.|

## Search fields

| Item | Description |
| --- | --- |
|**ID**|Used to search for the operation by its event identification number.|
|**Username**|Used to search for the operation by the name of the user who performed it.|
|**Device**|Used to search for the operation by the device where the operation occurred.|
|**Vendor**|Used to search for the operation by the device manufacturer. It displays a drop-down menu with all manufacturers registered in the product.|
|**Product**|Used to search for the operation by the model of the device where the operation occurred.|
|**Site**|Used to search for the operation by the site where the operation occurred. It displays a drop-down menu with all sites registered in the product.|
|**Tags**|Used to search for the operation by identification tags.|
|**Status**|Used to search for the operation by its status. It displays a drop-down menu with the options *Scheduled*, *Waiting approval*, *Cancelled*, *Successfully completed*, *In execution*, *Error*, or *Expired*.|
|**Operation**|Used to search for the operation. It displays a drop-down menu with different options. When accessed through Certificate Manager, the **Certificate publishing** option comes preselected.|
|**Requester**|Used to search for the operation by the requesting user.|
|**Schedule date**|Used to search for the operation by scheduling date. It displays a calendar to select one specific date or to set an initial date and create a time range.|
|**until**|Used to search for the operation by scheduling date. It displays a calendar to set a final date and create a time range.|
|**Execution date**|Used to search for the operation by execution date. It displays a calendar to select one specific date or to set an initial date and create a time range.|
|**until**|Used to search for the operation by execution date. It displays a calendar to set a final date and create a time range.|
|**Show transaction details**|It enables new columns in the search result.|
|**Filter**|The button to execute the configured filtering process.|
|**Clear**|The button to clear the fields with information.|

The system displays the results in a list format, with columns named after the corresponding fields. The list presents additional information not included in the search fields:

- **Credential type**: the credential type used to perform the operation.
- **Last attempt**: the date and time of the last attempt to perform the operation.
- **Attempts**: the number of times the operation has been initiated.
- **Template**: the template used to perform the operation. This column appears in the results only if the **Show transaction details** option has been enabled.
- **Message**: the message received by the requester of the operation. This column appears in the results only if the **Show transaction details** option has been enabled.

## Action

This column features action buttons to perform component-related tasks.

| Item | Description |
| --- | --- |
|**View Attempts**|Represented by the magnifying glass icon, it opens the *Operation Details* page.|

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
