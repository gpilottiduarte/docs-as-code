# How to manage Continuous identification


This document provides a step-by-step guide on how to configure the **Continuous identification** feature to request the user to re-authenticate in **Segura** after suspicious events, as well as to view the generated reauthentication logs.

## Prerequisites
- Administrator permission.

***

## Configure Continuous identification
To configure the triggers that will prompt user reauthentication requests in **Segura**, follow the steps below:

:::(info) (Info)
This feature is disabled by default. To enable it, set the parameters to a value other than zero.
:::

1. On **Segura**, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. In the side menu, select **Authentication security**.
3. On the **Authentication security** screen, go to the **Continuous identification** section
4. In the **Continuous identification** section, fill in:
   - **Rating drop**: define how many points the user must lose for re-authentication to be triggered.
   **Note**: the points lost for each action are defined **User Behavior > Management > Session settings**.
<br>
   - **High-risk sessions**: define how many high-risk sessions the user must perform for re-authentication to be triggered.
     **Note**: high-risk session definitions are tied to audited commands and their criticalities, which can be configured and viewed in **User Behavior > Settings > Audited commands**.
   <br>
   - **Blocked commands**: define how many audited commands the user must enter in a session for reauthentication to be triggered.
     **Note**: blocked commands are audited commands configured as **Block** or **Interrupt execution**, and can be configured and viewed in **User Behavior > Management > Audited commands**.
   <br>
   - **Session attempts at prohibited times**: define how many times the user must attempt to start a session at a prohibited time for their access group before reauthentication is triggered.
     **Note**: time access permissions are defined and viewed in **PAM Core > Access control > Access policies**.
   <br>
   - **View attempts at prohibited times**: define how many times the user must attempt to view a password at a prohibited time for their access group before reauthentication is triggered.
     **Note**: password viewing time permissions are defined and viewed in **PAM Core > Access control > Access policies**.


:::(warning) (Attention)
After successful user re-authentication, the attempt count will be reset. This means that, for example, if the **View attempts at prohibited times** parameter is set to 3, after the user makes these 3 attempts and re-authenticates in **Segura**, re-authentication will only be requested again if they make another 3 attempts in their next logged-in session.
:::

## View re-authentication logs
To view the reauthentication logs requested from users due to suspicious actions, follow the steps below:

1. In the side menu of the **User Behavior** screen, select **Behavior analysis > Re-authentication logs**.
2. On the **Re-authentication logs** screen, find the desired event or use the search filters.
3.  Click the **Actions button** and select **Details**.
4. On the **Re-authentication details** screen, obtain information about the re-authentication event such as **Username**, **Trigger**, **Authentication method**, **IP**, **Status**, **Verification date**, **Browser** and **Locale**.
---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target="_blank"}.