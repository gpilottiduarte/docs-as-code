# Identity management providers (IGA)

This document provides a general overview of the **Identity management providers (IGA**) functionality.

## Path to access

1. On senhasegura, in the top left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**
2. In the side menu, select **Authentication >Identity Management (IGA) > Providers**.

## Top bar

| Item                      | Description                                                                                                                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Show filters**    | Represented by the magnifying glass icon, it displays or hides the search fields on the screen.                                                                                                        |
| **Update**          | Represented by the counterclockwise arrow icon, it refreshes the page.                                                                                                                                 |
| **View actions**    | Represented by the three vertical dots icon, it shows all the possible actions for the report.                                                                                                         |
| **New**             | Represented by the plus icon, it opens theRegister Identity Management Providerscreen.                                                                                                                 |
| **Print report**    | Represented by the printer icon, it opens a new page for printing the report.                                                                                                                          |
| **Export CSV**      | Represented by the paper sheet icon, it downloads the report.                                                                                                                                          |
| **Schedule report** | Represented by the clock icon, it opens the [Schedule report](https://docs.senhasegura.io/v3-31/docs/en/general-information-how-to-issue-download-and-schedule-device-reports#scheduling-reports) form. |

## Search field

| Item                        | Description                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **ID**                | Provider registration code in senhasegura.                                                                    |
| **Name**              | Name of the provider in senhasegura.                                                                          |
| **Tags**              | Tags associated with the provider.                                                                            |
| **Protocol**          | Drop-down menu for choosing the provider's authentication protocol.                                           |
| **Registration date** | Opens a calendar for choosing the provider's registration date. This date will be the filter's start date.    |
| **until**             | Opens a calendar for choosing the provider's registration date. This date will be the end date of the filter. |
| **Enable**            | Drop-down menu for choosing the provider's status. It can be **Yes** or **No**.                            |

## Report fields

The list contains the following fields:

* **ID**.
* **Name.**
* **Tags**.
* **Protocol**.
* **Authentication method**: indicates the authentication method used by the provider.
* **Registration date.**
* **Enabled**.
* **Add users to Domum?**: indicates whether the authentication provider synchronizes users with senhasegura Domum.
* In the **Action** column, you have two options:
  * **Update provider**: represented by the pencil and paper icon, opens the **Register Identity Management Provider** window in edit mode.
  * **Three vertical dots**: by clicking on the three vertical dots icon, you have two options:
    * **Provider details**: represented by the magnifying glass icon, opens the **Provider details** window.
    * **Delete provide**r: represented by the trash can icon, deletes the provider.

## Register Identity management provider window

By clicking on Update provider in the **Action** column, or on **View Actions > New provider**, you'll have access to the window for registering new providers. It contains the following fields:

### Settings tab

| Item                          | Description                                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Name**                | Name of the authentication provider.                                                                          |
| **Protocol**            | Authentication protocol used by the provider.                                                                 |
| **Add users to Domum?** | Drop-down menu to indicate which users will be synchronized with senhasegura Domum.                           |
| **Enabled**             | Radio button to indicate whether or not the provider is active in senhasegura. It can be **Yes** or **No**. |
| **Description**         | Text fields for entering the description of the authentication provider.                                      |
| **Tags**                | Text field with the tags associated with the authentication provider.                                         |

### Authentication tab

| Item                                                   | Description                                                                                                                                                                                                                                                                |
| ------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Authentication method**                             | Drop-down menu to indicate which authentication method the authentication provider is using.                                                                                                                                                                               |
| **Date/Time Expiration**                              | The first field opens a calendar for selecting the expiration date. The second field opens a drop-down menu for choosing the expiration time. Note that the time is given in fifteen-minute intervals, but you can enter a custom time as long as it is valid. |
| **Allowed IPs (Put * to allow any IP)**               | Label to indicate from which IP addresses API requests can be made.                                                                                                                                                                                                        |
| **Address**                                           | IP addresses where API requests can be made.                                                                                                                                                                                                                               |
| **Recycle bin icon**                                  | Deletes the selected IP.                                                                                                                                                                                                                                                   |
| **Allowed HTTP referers (empty list for any source)** | Label for the referers allowed by the authentication provider.                                                                                                                                                                                                             |
| **Referer**                                           | HTTP referers, to which authentication will be allowed.                                                                                                                                                                                                                    |
| **Recycle bin icon**                                  | Deletes the selected HTTP Referer.                                                                                                                                                                                                                                         |
| **Eye icon**                                          | In the bottom-right corner of the page, it indicates the changes made to the authentication provider and the user has made them.                                                                                                                                     |