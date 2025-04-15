## Configure access lists for automation in general segregation

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Windows➔Access Lists.**
3. Click **View actions (⁝).**
4. Select **New general segregation.**
5. Choose **Automations.**
6. In the window that appears, complete the fields:
	* **Name:** define a name for the list.
	* **Status:**choose between **Enabled** or **Disabled.**
	* **Record session for these applications:**choose between **Enabled** or**Disabled.**
7. Under **Automations**, complete:
	* **ID:** the identifying number in the list of automation.
	* **Automation:**the automation name.
8. Click **Add.**
9. Continue completing the information on the **Workflow** tab.
10. Check the options for **Elevation settings:**
	* **Users can elevate applications.**
	* **Require reason to elevate applications.**
	* **Require approval to elevate applications.**
	* **Allow emergency access.**
	* **Approval in levels.**To work, approvers must be registered in levels in the Approvers report.
11. If you checked to **Require approval**to elevate applications, set the number of times for each specific action:
	* **Approvals required**so the user can elevate the privilege and perform the action.
	* **Disapprovals required**to cancel the privilege elevation.
12. Choose **Yes**or **No**to the Access request settings.
	* **Governance ID required when justifying?\***
	* **Always add user manager to approvers?\***
13. **Save.**

  




---

## Configure access lists for automations in specific workstations

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Windows➔Access Lists.**
3. Click **View actions (⁝).**
4. Select **New segregation for workstation.**
5. Choose **Automations.**
6. In the window that appears, complete the fields:
	* **Name:** define a name for the list.
	* **Status:**choose between **Enabled** or **Disabled.**
	* **Record session for these applications:** choose between **Enabled** or **Disabled.**
7. Under **Automations**, complete:
	* **ID:**the identifying number in the list of automations.
	* **Automation:** the automation name.
8. Click **Add.**
9. Under **Workstations**, click on the \+ icon, and choose a workstation according to the criteria.
	* **ID:** identifier number in the list of workstations.
	* **UUID:**the unique identifier of the workstation.
	* **Hostname:** the name of the machine.
	* **IP:** the IP address of the workstation.
10. Click **Add.**
11. Still, in **Workstations**, you will see more information.
	* **Includer:**the user who added the workstation.
	* **Include:** when the workstation was added.
12. Continue completing the information on the **Workflow** tab.
13. Check the options for **Elevation settings:**
	* **Users can elevate applications.**
	* **Require reason to elevate applications.**
	* **Require approval to elevate applications.**
	* **Allow emergency access.**
	* **Approval in levels.**To work, approvers must be registered in levels in the **Approvers** report.
14. If you checked to **Require approval**to elevate applications, set the number of times for each specific action:
	* **Approvals required** so the user can elevate the privilege and perform the action.
	* **Disapprovals required**to cancel the privilege elevation.
15. Choose **Yes** or **No**in the Access request settings.
	* **G****overnance ID required when justifying?\***
	* **Always add user manager to approvers?\***
16. **Save.**

  


