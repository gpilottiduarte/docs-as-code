# TACACS servers

This document provides an overview of the functionality on TACACS servers.

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.
2. In the side menu, select **Authentication > TACACS > Servers**.

## Top bar

| Item                      | Description                                                                                                                                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Show filters**    | Represented by the magnifying glass icon, it displays or hides the search fields on the screen.                                                                                                    |
| **Update**          | Represented by the counterclockwise arrow icon, it refreshes the page.                                                                                                                             |
| **View actions**    | Represented by the three vertical dots icon, it shows all the possible actions for the report.                                                                                                     |
| **New**             | Represented by the plus icon, it opens the **TACACS Server** screen.                                                                                                                              |
| **Print report**    | Represented by the printer icon, it opens a new page for printing the report.                                                                                                                      |
| **Export CSV**      | Represented by the paper sheet icon, it downloads the report.                                                                                                                                      |
| **Schedule report** | Represented by the clock icon, it opens the [Schedule report](https://docs.senhasegura.io/v3-31/docs/en/general-information-how-to-issue-download-and-schedule-device-reports#scheduling-reports) form. |

## Search fields

| Item               | Description                                                                   |
| ------------------ | ----------------------------------------------------------------------------- |
| **ID**       | Filter by the server's senhasegura registration code.                         |
| **Hostname** | Filter by server hostname.                                                    |
| **Port**     | Filter by the server's listening port.                                        |
| **Enabled**  | Filters according to the server's status in senhasegura. It can be **Yes** or **No**. |

## Report fields

The results are displayed in a list, as shown below:

* **ID**.
* **Hostname**.
* **Port**.
* **Timeout**: time, in seconds, for the TACACS server to timeout.
* **Max attempts**: maximum number of authentication attempts that senhasegura will make on the TACACS server.
* In the **Action** column, you have two options:
  * **Edit**: represented by the pencil and paper icon, opens the **TACACS Server** window in edit mode.
  * **Test authentication**: accessible by clicking on the three vertical dots icon and selecting the Test authentication option. This opens the **TACACS Authentication Test** window.

## TACACS Server window

The **TACACS Server** window can be accessed in two ways:

1. To register a new server.
2. To change a server.

In both cases, the fields are as follows:

| Item                   | Description                                                                                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Hostname**     | Text field for entering the IP address or hostname of the server.                                                                                                                                             |
| **Port**         | Text field to enter the port where the server listens.                                                                                                                                                        |
| **Enabled**      | Radio button for selecting the server status. It can be **Yes** or **No**.                                                                                                                         |
| **Secret key**   | The server's secret key. **Note**: If the secret key is not filled in, the current value will be kept.                                                                                                   |
| **Timeout(s)**   | Text field for entering the server timeout time.                                                                                                                                                              |
| **Max attempts** | Text field for entering the maximum number of attempts senhasegura will make on the TACACS server.                                                                                                            |
| **Eye icon**     | In the bottom left corner of the window. Hovering over the button displays information about editing and accessing the server. **Note**: this button is only available when the window is open in edit mode. |

## TACACS authentication test window

| Item          | Description                                                                               |
| ------------- | ----------------------------------------------------------------------------------------- |
| **Server**   | Label indicating the IP address or hostname of the server and port.                       |
| **Username** | Text field for entering the username used in the authentication test.                     |
| **Password** | Text field for entering the user's password that will be used in the authentication test. |