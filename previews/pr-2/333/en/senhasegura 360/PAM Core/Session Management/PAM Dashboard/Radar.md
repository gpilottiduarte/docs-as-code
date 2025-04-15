# Radar

In this article, you’ll find all the information about the **Radar** dashboard from **PAM Core - Session Management**. This dashboard provides a graphical visualization of all the risk commands made by users during a session.

:::(info) (**Info**)
The dashboard can only be accessed by a system administrator or system auditor user.
:::

## Threat radar

#### Session history analysis
On the main screen, the radar shows the real-time session (online). 

In the upper right corner of the screen, you’ll find the **History** icon. When clicked, the screen changes and appears the date and risk level fields. Choose the period and the risk, then click the **funnel** icon to filter the data.

The date can be filtered by:

* **Today**.
* **Last 24 hours**.
* **This week**.
* **Last week**.
* **This month**.
* **Last month**.
* **This year**.
* **Last year**.
* **Select the date**: choose the specific date.

And by the following risk level:

* **All**.
* **High risk**.
* **Medium risk**.
* **Low risk**.
* **With risk**.
* **No risk**.

To return to real-time monitoring, click at the Online icon wich was previously named History.

## List

* **Session details**
    * **User**: user that performs the session.
    * **Device**: the device used to make the access.
    * **Credential**: the credential used in the session.
    * **Start**: date and time the user starts the session.
    * **Duration**: the duration of the session.
    * **Risk**: number that indicates the risk level of that session. This number can go from 0 (zero) to 100 (one hundred).
    * **Magnifying glass**: access details.
        * **User**: user details like name, e-mail and IP number.
        * **Credential**: user credentials details.
        * **Access**: session details.
        * **Last detected commands**: list of performed commands during a session.