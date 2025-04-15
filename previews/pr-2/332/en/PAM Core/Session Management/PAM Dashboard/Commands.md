# Commands

In this article, you’ll find all the information about the **Commands** dashboard from **PAM Core - Session Management**, displaying all the commands, riskiest access and who are the user and devices most affected by.

:::(info) (**Info**)
The dashboard can only be accessed by a system administrator or system auditor user.
:::

## Command analysis
In the upper right corner, you’ll find the field that represents the period of the displayed data. Choose the period and click on the **funnel** icon to filter the data.

The date can be filtered by:

* **Today**.
* **Last 24 hours**.
* **This week**.
* **Last week**.
* **This month**.
* **Last month**.
* **This year**.
* **Last year**.
* **Select the date**: Choose the specific date.

## Graphics

**Item**|**Description**
|---|---|
**Commands with greater severity**|Shows the number of commands with the greater severity.
**Access with command detected**|Shows the number of accesses with detected commands.


## List

* **Last access with commands detected**: list containing the last five accesses that have detected commands.
    * **User**: user that performs the session.
    * **Device**: the device used to make the access.
    * **Credential**: the credential used in the session.
    * **Date**: date and time the user starts the session.
    * **Risk**: number that indicates the risk level of that session. This number can go from 0 (zero) to 100 (one hundred).
    * **Magnifying glass**: access details. 
        * **User**: user details like name, e-mail and IP number.
        * **Credential**: used credential details (IP number, protocol and port).
        * **Access**: session details.
        * **Last detected commands**: list of performed commands during a session.
* **Access with greater severity**: list of the last five accesses with greater severity.
    * **User**
    * **Device**
    * **Credential**
    * **Date**
    * **Risk**
    * **Magnifying glass**: access details.
* **Greatest aggressors**: list of users considered the greatest aggressors.
    * **User**: user that performs the access.
    * **Incidents**: number of incidents.
    * **Session**: number of sessions accessed by the user.
    * **With incidents**: percentage of sessions in which that incidents occurred.
* **Greatest aggressed**: list of the greatest affected devices.
    * **Device**: device IP number.
    * **Incidents**: number of incidents.
    * **Session**: number of sessions accessed by the user.
    * **With incidents**: percentage of sessions that occur incidents.