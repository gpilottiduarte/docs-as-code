# Behavior

In this article, you’ll find all the information about the **Behavior** dashboard from **PAM Core - Session Management**. This dashboard provides an analysis of active users behavior.

:::(info) (**Info**)
The dashboard can only be accessed by a system administrator or system auditor user.
:::

## Behavior analysis

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
**Access**|Daily progression chart displaying the number of accesses with associated security risks in Segura.
**Views**|Daily progression chart displaying the number of password views with some degree of associated security risks in Segura


## Lists

* **Access with greater risk**: list of accesses with the highest risk on the most recent dates. The risk level is calculated based on the configured parameters.
    * **User**: user that performs the session.
    * **Device**: the device used to make the access.
    * **Credential**: the credential used in the session.
    * **Date**: date and time the user starts the session.
    * **Risk**: number that indicates the risk level of that session. This number can go from 0 (zero) to 100 (one hundred).
    * **Magnifying glass**: access details. 
        * **User**: user details like name, e-mail, and IP number.
        * **Credential**: user credential details (IP number, protocol, and port).
        * **Access**: session details.
        * **Last detected commands**: list of performed commands during a session.
* **Views with greater risk**: list of password views with the highest risk on the most recent dates. The risk level is calculated based on the configured parameters.
    * **User**
    * **Device**
    * **Credential**
    * **Date**
    * **Risk**
    * **Magnifying glass**: view details.
        * **User**
        * **Credential**
        * **View**: user IP number, type of view, date and time of the view and device IP.
        * **Last view events**:
            * **User** 
            * **Device**
            * **Credential**
            * **Date**
            * **Risk**
* **Last access with risk**: list containing the last five accesses, including accesses with no detected risk. Risky behaviors include accessing from an unusual destination, accessing from an unusual source, accessing with unusual credentials, accessing at unusual times, and accessing with unusual duration.
    * **User**
    * **Device**
    * **Credential**
    * **Date**
    * **Risk**
    * **Magnifying glass**: Access details.
        * **User**
        * **Credential**
        * **Access**
        * **Last detected commands**
* **Last views with risk**: list containing the last five password views, including views with no detected risk. Risky behaviors include viewing from an unusual source, with unusual credentials, at unusual times, and with unusual password changes.
    * **User**
    * **Device**
    * **Credential**
    * **Date**
    * **Risk**
    * **Magnifying glass**: view details.
        * **User**
        * **Credential**
        * **Date**
        * **Risk**
