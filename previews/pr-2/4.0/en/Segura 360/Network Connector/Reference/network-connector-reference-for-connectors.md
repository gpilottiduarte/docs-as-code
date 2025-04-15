# Reference for Connectors


In this document, you’ll find all the information about the **Network Connector Connectors** page.

## Path to access

1. In Segura, in the top left corner, click on the **Grid Menu**, represented by the nine squares button, and select **Devices**.
2. In the side menu, select Settings > Network Connector > Connectors. 

## Top bar

| Item            | Description                                                                                                   |
|-----------------|---------------------------------------------------------------------------------------------------------------|
| Show filters    | Represented by the magnifying glass icon, it displays or hides the search fields on the screen.               |
| Update          | Represented by the counterclockwise arrow icon, it refreshes the page.                                        |
| View actions    | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the page. |
| +New        	| Represented by the plus icon, it opens the New Network Connector screen.                                      |
| Print report	| Represented by the printer icon, it opens a new page for printing the report.                                 |
| Export CSV  	| Represented by the sheet of paper icon, download the report.                                                  |
| Schedule report | Represented by the clock icon, opens the Schedule report form.                                                |

## Search fields

| Item              | Description                                                                              |
|-------------------|------------------------------------------------------------------------------------------|
| Code              | Record identifier code.                                                                  |
| Name              | Name defined by the user when creating the record.                                       |
| IP                | IP address of the device registered as a Connector.                                      |
| Port              | Port that the IP is offering the Connector service on.                                   |
| Registration date | Date in `day/month/year hours:minutes` format from the moment the record was registered. |
| Last change       | Date in `day/month/year hours:minutes` format when the record was last updated.          |
| Active            | Registry operation state, can be `Yes` or `No`.                                          |
| Action            | Field that offers the options `Edit`, `Details` and `Activate` or `Inactivate`.          |

## Report fields

* **Code**.
* **Name**.
* **IP**.
* **Port**.
* **Registration date**.
* **Last change**.
* **Active**.
* **Action**:
  * **Edit**: opens the Edit Network Connector.
  * **Three vertical dots**: action menu that contains the **Details** option, that opens the Details screen, that shows name, IP, status, fingerprint, and agents.

:::(info) (**Info**)
The report displays 30 records per screen. To go to the next screen, click the next button at the end of the report.
:::

## New Network Connector

 When clicking on the show actions button, indicated by the three vertical dots, the New Network Connector form will be displayed, with the following fields:

* Name.
* Active: can be yes or no.
  	* Authentication:
 		 * IP.
 		 * Door.
 		 * Username.
 * Password.
 * Fingerprint.
  	* Agents:
  		* Name.
  		* Door.