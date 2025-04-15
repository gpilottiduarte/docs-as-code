# Unusual password change

In this document, you’ll find detailed information about the **Unusual password change** screen, which displays a report with details on manual changes made to credential records that are typically managed automatically by **PAM Core**.

## **Path to access**

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Behavior.**  
2. In the side menu, select **Behavior analysis > Unusual password change.**

***
## **Top bar**

| Item | Description |
| ----- | ----- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the [**Schedule report**](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports) screen. |

## **Search fields**

| Item | Description |
| :---- | :---- |
| **ID** | Text field that filters password changes by the user’s unique identification code.  |
| **Origin** | Text field that filters views by the IP address of the user who changed the password.  |
| **User** | Text field that filters views by the personal name of the user who changed the password.  |
| **Device** | Text field that filters password changes by the device associated with the credential.  |
| **Username** | Text field that filters password changes by the senhasegura username associated with the credential. |
| **Credential type** | Drop-down menu that filters password changes by the type of credential used. Clear the field to enable the **All** option.  |
| **Additional information** | Text field that filters password changes by associated additional information.  |
| **Change date** | Field that filters password changes by the period in which they occurred. Use this field to enter the start date of the period. Format `MM/DD/YYYY`. The downward arrow opens a calendar for selecting the desired date. <br> If the **Time** field is enabled, use it to enter the start time of the interval. |
| **until** | Field that filters password changes by the period in which they occurred. Use this field to enter the final date of the period. Format `MM/DD/YYYY`. The downward arrow opens a calendar for selecting the desired date. <br>If the **Time** field is enabled, use it to enter the end time of the interval.  |

## **Report fields**

* **ID.**  
* **Origin.**  
* **User.**  
* **Device.**  
* **Username.**  
* **Credential type.**  
* **Additional information.**  
* **Change date:** date and time of the password change. Formats: `MM/DD/YYYY` and `HH:MM AM/PM.`  
* **Risk:** risk score associated with the operation.  
* **Action:**  in this column, you can access:  
  * **History:** represented by the clock icon, it opens the **Credential password history** screen, which can also be accessed via the path **Grid Menu > PAM Core > Credentials > All > A credential from the list > Action column > Three vertical dots icon > History**.  
    

:::(info) (Info)  
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.

:::
