# Change audit

## About Change Audit

In critical servers, all changes are strictly controlled. Typically, a user requests access to a device, the administrator grants authorization, and then the task is executed. The auditor must be aware of the script, the device, and the time of the activity to ensure compliance, either by physically verifying it or reviewing the logs of executed commands.

These activities present high risks, as an improper action can directly impact the company's productivity. Examples include shutting down an Apache server hosting the company's website or intentional actions for data theft.

To simplify audits and ensure compliance, the **Change Audit** module facilitates the control and approval of changes on servers. It provides an approval workflow and ensures that everything planned is executed correctly.

Additionally, **Change Audit** assesses the effectiveness of actions, indicating whether the user achieved the expected outcome, performed unnecessary executions, or did not complete the change. This reinforces the security of the administrator responsible for the environment.

Another key aspect is the ability to divide responsibilities: one user can plan and create the script, while another is responsible for executing it.

## Benefits of the Change Audit Module:

* **Privilege granting**: ensures privileges are granted only in the authorized environment.  
* **Security**: prevents, detects, and corrects security anomalies.  
* **Audit trail**: creates tamper-proof logs for privileged operations.  

## How to Manage the Change Audit Module

### Register a Change

1. In Segura, in the navigation bar, hover over the **Product Menu** and select **Change Audit**.  
2. In the side menu, select **Changes**.  
3. In the **Changes** report, click **Add**.  
4. In the **Main Information** tab:  
   1. In the **Change Information** section:  
      1. **Change Code**: provide a code for this change.  
      2. **Title**: provide a title for the change.  
      3. **Description**: provide a description for the change.  
   2. In the **Change Window** section:  
      1. **Start Date**: specify the date and time the change begins.  
      2. **Due Date**: specify the date and time the change ends.  
   3. In the **Access Settings** section:  
      1. **Access Group**: select the access group for this change.  
5. In the **Script** tab, enter the commands to be executed.  
   1. This script will be used as a reference for auditing, so it must be correct.  
6. Click **Save**.  

### Approve a Change  

:::(info)  
An approver different from the user who created the change is required.  
:::  

### Request a Change  

1. In Segura, in the navigation bar, hover over the **Product Menu** and select **PAM Core**.  
2. In the side menu, select **Credentials \> All Credentials**.  
3. In the **Access Credentials** report, choose the device you want to access for the change.  
4. Click **Start Session**.  
5. Provide a justification and select the desired change.  
6. Execute the change commands.  

### Audit Sessions  

After a change, it is possible to verify what was done and confirm whether the script was followed.  

* **Change Details**: view execution time, IP, and user.  
* **Change Audit**: displays executed commands.  
  * Commands that should have been executed but were not appear in red.  
  * Commands executed outside the script appear in green.  
* **Session Logs**: view detailed session logs.  
* **Session Video**: watch a recording of the actions performed.