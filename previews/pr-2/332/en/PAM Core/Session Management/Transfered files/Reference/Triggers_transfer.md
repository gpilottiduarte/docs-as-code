# Triggers transfer

This document contains detailed information about the **File transfer triggers** page, where you can activate the log for transferred files in a remote session.

## Path to access

1. On senhasegura, in the upper left corner, click **Grid Menu**, represented by the nine squares icon, and then select **PAM Core**.
2. In the side menu, select **Settings** > **Access** > **Triggers transfer**.

***
## Top bar
**Item**|**Description**
|---|---|
| **Show filters**| Represented by the magnifying glass icon. It displays or hides the search fields on the screen. |
| **Update**| Represented by the counterclockwise arrow icon. It updates a page. |
| **View actions**| Represented by the icon of three vertical dots. It displays the possible actions for the page.|
| **Print report**| Represented by the printer icon. It opens a new page for printing the report.|
| **Export CSV**| Represented by the paper sheet icon. It downloads the report.|
| **Schedule report**  | Represented by the clock icon. It opens the Schedule report form.|


## Search fields

**Item**|**Description**
|---|---|
**Enable**|Trigger transfer status.
**Filter**|Button to filter and show the results according to your chosen preferences.
**Clear**|Button to clear all the text boxes with the options that were previously selected.


## Report fields

* **ID**: number to identify the transfer audit order.
* **Trigger**: trigger type.
* **Enabled**: trigger status.
* **Change**: date and time the status changed.
* **Change maker**: name from the user who changed the status.
* **Disabling date/time**: date and time that the trigger was disabled.
* **Disabler**: name of the user who disabled the trigger.
* **Action**
    * **Enable**: represented by the **check** icon, only appears for triggers with status value **No**. It’s used to enable the trigger. When you click, a confirmation box will display to confirm the desired action.
    * **Delete**: represented by a **trash can** icon, only appears for trigger with status value **Yes**. It’s used to deactivate a trigger. When you click, a confirmation box will display to confirm the desired action.

:::(info) (**Info**)
The report only displays 30 lines per page. To go to the next ones, click on the advance buttons at the end of the report.
:::
