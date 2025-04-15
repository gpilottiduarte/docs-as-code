# How to manage Continuous identification

This document provides a step-by-step guide on how to configure the **Continuous identification** feature of **User Behavior** to request the user to re-authenticate in **senhasegura** after suspicious events, as well as to view the generated reauthentication logs.

## Requirements
- Administrator permission.

## Path to access
1. On **senhasegura**, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **User Behavior**.

***

## Configure Continuous identification
To configure the triggers that will prompt user reauthentication requests in **senhasegura**, follow the steps below:

:::(info) (Info)
By default, this feature is disabled. To enable it, set the parameters to a value other than zero.
:::

1. In the side menu of the **User Behavior** screen, select **Settings > System parameters**.
2. On the **System settings** screen, select **User Behavior** and go to the **Continuous identification settings** section at the bottom of the screen.
3. In the **Continuous identification settings** section, fill in:
   - **Rating drop\***: define how many points the user must lose for re-authentication to be triggered.
     **Note**: the points lost for each action are defined in other sections of **System settings > User Behavior**.
   <br>
   - **High-risk sessions\***: define how many high-risk sessions the user must perform for re-authentication to be triggered.
     **Note**: high-risk session definitions are tied to audited commands and their criticalities, which can be configured and viewed in **User Behavior > Settings > Audited commands**.
   <br>
   - **Blocked commands\***: define how many audited commands the user must enter in a session for reauthentication to be triggered.
     **Note**: blocked commands are audited commands configured as **Block** or **Interrupt execution**, and can be configured and viewed in **User Behavior > Settings > Audited commands**.
   <br>
   - **Session attempts at prohibited times\***: define how many times the user must attempt to start a session at a prohibited time for their access group before reauthentication is triggered.
     **Note**: time access permissions are defined and viewed in **PAM Core > Settings > Access > Access groups**.
   <br>
   - **View attempts at prohibited times\***: define how many times the user must attempt to view a password at a prohibited time for their access group before reauthentication is triggered.
     **Note**: password viewing time permissions are defined and viewed in **PAM Core > Settings > Access > Access groups**.

:::(info) (Info)
The items marked with an asterisk are required.
:::

:::(warning) (Attention)
After successful user re-authentication, the attempt count will be reset. This means that, for example, if the **View attempts at prohibited times\*** parameter is set to 3, after the user makes these 3 attempts and re-authenticates in **senhasegura**, re-authentication will only be requested again if they make another 3 attempts in their next logged-in session.
:::

## View re-authentication logs
To view the reauthentication logs requested from users due to suspicious actions, follow the steps below:

1. In the side menu of the **User Behavior** screen, select **Behavior analysis > Re-authentication logs**.
2. Search for the desired events using the filters **ID, Trigger, User, Date, Until**, and **Status**.
3. View the report with the columns **ID, Trigger, User, Date, Status**, and **Action**.
4. In the **Action** column, click **Details**, represented by the key icon, to get more information about the selected re-authentication event.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.