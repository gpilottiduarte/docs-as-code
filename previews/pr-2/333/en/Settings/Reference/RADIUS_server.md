# RADIUS server

This document provides a general overview for the RADIUS server functionality.

## Path to access

1. On senhasegura, in the upper left corner, click on **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Authentication > Radius > Servers**.

## Top bar

| Item                 | Description                                                                                                                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Show filters**    | Represented by the magnifying glass icon, it displays or hides the search fields on the screen.                                                                                                      |
| **Update**          | Represented by the counterclockwise arrow icon, it refreshes the page.                                                                                                                               |
| **View actions**    | Represented by the three vertical dots icon, it shows all the possible actions for the report.                                                                                                       |
| **New**             | Represented by the plus icon, it opens the**RADIUS server** screen.                                                                                                                            |
| **Print report**    | Represented by the printer icon, it opens a new page for printing the report.                                                                                                                        |
| **Export CSV**      | Represented by the paper sheet icon, it downloads the report.                                                                                                                                        |
| **Schedule report** | Represented by the clock icon, it opens the [Schedule report](https://docs.senhasegura.io/v3-31/docs/en/general-information-how-to-issue-download-and-schedule-device-reports#scheduling-reports) form. |

## Search fields

| Item               | Description                                                                             |
| ------------------ | --------------------------------------------------------------------------------------- |
| **ID**       | Filter by the server's senhasegura registration code.                                   |
| **Hostname** | Filter by server hostname.                                                              |
| **Port**     | Filter by the server's listening port.                                                  |
| **Enabled**  | Filters according to the server's status in senhasegura. It can be **Yes** or **No**. |

## Report fields

The results are displayed in a list, as shown below:

* **ID**.
* **Hostname**.
* **Port**.
* **Timeout**: system timeout time. Shown in seconds.
* **Max attempt**s: maximum number of login attempts on the RADIUS server.
* In the **Action** column, you have two options:
  * **Edit**: represented by the pencil and paper icon, opens the **RADIUS Server** window in edit mode.
  * **Test authentication**: accessible by clicking on the three vertical dots icon and selecting the **Test authentication** option. This opens the **RADIUS authentication test** window.

## RADIUS Server window

The **RADIUS Server** window can be accessed in two ways:

1. To register a new server.
2. To change a server

In both cases, the fields are as follows:

| Item                   | Description                                                                                                                                                                                                                       |
| ---------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hostname**     | Text field for entering the IP address or hostname of the server.                                                                                                                                                                 |
| **Port**         | Text field to enter the port where the server listens.                                                                                                                                                                            |
| **Enabled**      | Radio button for selecting the server status. It can be **Yes** or **No**.                                                                                                                                                      |
| **Secret key**   | The server's secret key. Note that if you don't change the secret key, the current value of the field will be kept.                                                                                                               |
| **Timeout(s)**   | Text field for entering the server timeout time.                                                                                                                                                                                  |
| **Max attempts** | Text field for entering the maximum number of login attempts that senhasegura will make on the RADIUS server.                                                                                                                     |
| **Eye icon**     | The button is in the bottom-left corner of the window. Hovering over it displays information about editing and accessing the server. **Note** that this button is only available when the window is open in edit mode. |

## RADIUS authentication test window

| Item          | Description                                                           |
| ------------- | --------------------------------------------------------------------- |
| **Server**   | Label indicating the IP address or hostname of the server and port.   |
| **Username** | Text field for entering the username used in the authentication test. |