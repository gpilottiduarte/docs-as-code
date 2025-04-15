# Reference for credential filtering

To access the credentials report, access **Grid Menu > PAM Core > Credentials > All.**

## Top bar

| Item                      | Description                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| **Show filters**    | Represented by the magnifying glass icon. Displays or hides the search fields on the screen. |
| **Update**          | Represented by the counterclockwise arrow icon. Refreshes the page.                          |
| **View actions**    | Represented by the three vertical dots icon. Displays the possible actions for the page.     |
| **New**             | Represented by the sum icon, it opens the credential registration form.                      |
| **Print report**    | Represented by the printer icon. It opens a new page for printing the report.                |
| **Export CSV**      | Represented by the sheet of paper icon, it downloads the report.                             |
| **Schedule report** | Represented by the clock icon. It opens the window for scheduling the report.                |

When you click on **Show filters**, a series of fields are displayed. These are used to refine your search results. They are:

| Item                             | Description                                                                                                                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **ID**                     | Filter by the credential's registration code in senhasegura.                                                                                 |
| **Device**                 | Filters by the device registered with senhasegura to which the credential is linked.                                                         |
| **Username**               | Filters by the name of the user registered with senhasegura.                                                                                 |
| **Credential type**        | Drop-down menu. Filter by credential type. The options are:*Domain Admin, Domain User, Local Administrator, Local User, and SSH Ke*y.      |
| **Just in time**           | Drop-down menu. Filters by taking into account whether the credential has JIT access enabled. It can beYesorNo.                              |
| **Additional information** | Filters for additional information that has been registered with the credential.                                                             |
| **Device type**            | Drop-down menu. Filter according to device type.                                                                                             |
| **Product**                | Filters according to the device model to which the credential is linked.                                                                     |
| **Vendor**                 | Drop-down menu. Filter by the vendor of the device to which the credential is linked.                                                        |
| **Domain**                 | Drop-down menu. Filter by credential domain.                                                                                                 |
| **Site**                   | Drop-down menu. Filter by the site that is registered with senhasegura.                                                                      |
| **Connectivity**           | Drop-down menu. Filter according to the connectivity protocol the credential has.                                                            |
| **Credential tags**        | Filters according to the tags that are linked to the credential.                                                                             |
| **Device tags**            | Filters are made according to the tags linked to the device.                                                                                 |
| **Identifier**             | Text field. Filters according to the Password ID for access via webservice.                                                                  |
| **Status**                 | Drop-down menu. Filter by the status of the credential in senhasegura. It can be **Enabled** or **Disabled**.                     |
| **Last use**               | It opens a calendar for you to choose the last date the credential was used. This date will serve as the start date for the filter interval. |
| **until**                  | It opens a calendar for you to choose the last date the credential was used. This date will serve as the end date of the filter range.       |
| **Password set?**          | Drop-down menu. Filters according to the status of the credential's Password field. It can be**Yes** or **No**.                  |

In addition to these options, you have two buttons: **Filter**, which applies the parameters passed into the fields, and **Clear**, which clears all the parameters.

Below is a list of all the credentials and devices that meet the filtering criteria. The results are grouped by device and presented as follows:

* **Device name**: indicates the device's name in senhasegura followed by the IP address or hostname, where applicable.
  * For example: `Debian10 (127.0.0.1)`.
  * The device name is followed by some information about the device, in order: **Device's type | Device's vendor | Device's site | Device's ID**
    * For example: **Server | Ubuntu | Local | 100**.

:::(info) (Info)
Note that the device name is clickable. Clicking on the device name will take you to the **Device Registration** window. For more information on this window, see the reference on devices or the document on how to add a device to senhasegura.
:::

Thus, within each section grouped by device, you have information on the credentials linked to the device that match the filtering criteria applied. The credential fields are presented as follows:

* **ID**.
* **Type**.
* **Just in time.**
* **Username**.
* **Additional**: refers to additional information. This field is filled in when registering a new credential, specifically in the **Additional information** field of the credential registration form.
* **Domain**.
* **Tags**.
* **Last view:** refers to the last credential query.
* **Session status.**
* In the **Action** column, you have three options:
  * **Start session**: represented by the computer icon, starts the session on the indicated device with the indicated credential.
  * **View**: opens the Secure credential password display and transfer form.
  * **Three vertical dots:** opens a drop-down menu with the possible actions for the credential. They are:
    * **Details**.
    * **History**.
    * **Edit**.
    * **Clone**.
    * **Exceptional access**.
    * **Delete**.