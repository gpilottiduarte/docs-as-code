## Configure access lists for applications in general segregation

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Windows➔Access Lists.**
3. Click **View actions (⁝).**
4. Select **New general segregation.**
5. Choose **Applications****.**
6. In the window that appears, complete the fields:
	* **Name:** define a name for the list.
	* **Action:** choose between **Allowlist**or **Denylist.**
	* **Status**: choose between **Enabled** or **Disabled.**
	* **Record session for these applications:** choose between **Enabled** or **Disabled.**
7. Under**Applications**, complete:
	* **Criteria:**choose one or more.
		+ **Certificate:** the certificate in the application has a fixed value called **Trusted Only**, The certificate with this rule active will be validated.
		+ **COM class ID:** information in GUID format present in all applications.
		+ **Directory:** application path. The registered path must be identical to the file to be checked with the rule.
		+ **File hash:**unique information that each file has. With each change made to the file, a new hash is generated.  
		CautionIf you have a rule that uses the File hash criterion, only this criterion will be considered. The Product name and Directory criteria will be ignored. If the access list contains multiple file hashes, they will be evaluated with an "OR" condition.
		+ **File version:** the version of the file.
		+ **Internet zone identifier:**refers to the source of the file downloaded from the internet. Usually, all downloaded files are classified as ‘Internet Zone’. However, installed executables have this information classified as ‘Local Zone’.
		+ **Product name:**the name of the program. It evaluates both the filename and the program name. We do not recommend registering an access policy only with this criterion.CautionRegistering an access policy using only the **Product name** criteria can generate security risks. We suggest adding more than one criterion, such as **Directory**, **Certificate**, **File Hash**, etc.
		+ **Product version:** version specification.
		+ **Source URL:** refers to the URL from which the file was downloaded. The file can only be executed if the source URL is correct and validated.
		+ **Upgrade code:**this information is also a GUID for each program and can be found in the Windows registry.
		+ **Vendor name:**vendor's name.
		+ **Windows store publisher:**refers to apps downloaded from the Microsoft Store. It is validated in the file directory: ProgramFiles (and x86\) and the hidden WindowsApps folder.  
		InfoDLLs work like applications and can be filtered by **Product name**,**Product version**, **Certificate**, **File version**, **Directory**, **File hash**, **Internet zone identifier**, and **Windows store publisher.**
	* **Rule:** fill in according to the chosen criteria.  
	Caution
		+ When populating the list with more than one criterion \- Product version, Product name \- the evaluation condition will be "AND". The final result matches the rule only if these two conditions are satisfied.
		+ When populating the list with multiple criteria and different rules for one of them \- Product version 10, Product name A, Product name B \- the evaluation condition will be "AND" for the criteria and "OR" for the rules. In other words: Product Version 10 AND (Product Name A OR Product Name B).
8. Click **Add.**
9. If you chose **D****enylist**, select **Save**. You will receive a confirmation message.
10. If you chose **Allowlist**, continue completing the information on the **Workflow** tab.
11. Check the options for**Elevation settings:**
	* **Users can elevate applications.**
	* **Require reason to elevate applications.**
	* **Require approval to elevate applications.**
	* **Allow emergency access.**
	* **Approval in levels.**To work, approvers must be registered in levels in the [Approvers report](/v3-33/docs/en/go-endpoint-manager-windows-approval-workflow).
12. If you checked to **Require approval to elevate applications**, set the number of times for each specific action:
	* **Approvals required** so the user can elevate the privilege and perform the action.
	* **Disapprovals required** to cancel the privilege elevation.
13. Choose **Yes**or **No** to the **Access request settings.**
	* **Governance ID required when justifying?\***
	* **Always add user manager to approvers?\***
14. **Save.**



---

## Configure access lists for applications in specific workstations

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔Policies➔Windows➔Access Lists.**
3. Click **View actions (⁝).**
4. Select **New segregation for workstation.**
5. Choose **Applications****.**
6. In the window that appears, complete the fields:
	* **Name:** define a name for the list.
	* **Action:** choose between **Allowlist** or **Denylist.**
	* **Status:** choose between Enabled or Disabled.
	* **Record** session for these applications: choose between Enabled or Disabled.
7. Under **Applications**, complete:
	* **Criteria:**choose one or more.
		+ **Certificate:** the certificate in the application has a fixed value called Trusted Only, The certificate with this rule active will be validated.
		+ **COM class ID:**information in GUID format present in all applications.
		+ **Directory:** application path. The registered path must be identical to the file to be checked with the rule.
		+ **File hash:**unique information that each file has. With each change made to the file, a new hash is generated.CautionIf you have a rule that uses the File hash criterion, only this criterion will be considered. The Product name and Directory criteria will be ignored. If the access list contains multiple file hashes, they will be evaluated with an ‘OR’ condition.
		+ **File version:**the version of the file.
		+ **Internet zone identifier:** refers to the source of the file downloaded from the internet. Usually, all downloaded files are classified as ‘Internet Zone’. However, installed executables have this information classified as ‘Local Zone’.
		+ **Product name:**the name of the program. It evaluates both the filename and the program name. We do not recommend registering an access policy only with this criterion.CautionRegistering an access policy using only the **Product name** criteria can generate security risks. We suggest adding more than one criterion, such as **Directory**, **Certificate**, **File Hash**, etc.
		+ **Product version:** version specification.
		+ **Source URL:** contains information having video files.
		+ **Upgrade code:**this information is also a GUID for each program and can be found in the Windows registry.
		+ **Vendor name:** vendor's name.
		+ **Windows store publisher:** refers to apps downloaded from the Microsoft Store. It is validated in the file directory: Program Files (and x86\) and the hidden Windows Apps folder.  
		InfoDLLs work like applications and can be filtered by **Product name,** **Product version**, **Certificate**, **File version**, **Directory,** **File hash**, **Internet zone identifier**, and **Windows store publisher.**
	* **Rule:** fill in according to the chosen criteria.Caution
		+ When populating the list with more than one criterion \- **Product version, Product name** \- the evaluation condition will be **"AND"**. The final result matches the rule only if these two conditions are satisfied.
		+ When populating the list with multiple criteria and different rules for one of them \- **Product version 10, Product name A, Product name B**  \- the evaluation condition will be **"AND"** for the criteria and **"OR"** for the rules. In other words: **Product Version 10 AND (Product Name A OR Product Name B)**.
8. Click **Add.**
9. Under **Workstations**, click on the \+ icon, and choose a workstation according to the criteria.
	* **ID:**identifier number in the list of workstations.
	* **UUID:** the unique identifier of the workstation.
	* **Hostname:** the name of the machine.
	* **IP:** the IP address of the workstation.
10. Click **Add.**
11. Still, in **Workstations**, you will see more information.
	* **Includer:** the user who added the workstation.
	* **Include:**when the workstation was added.
12. **Save.**
13. If you chose **D****enylist**, select **Save.**You will receive a confirmation message.
14. If you chose **A****llowlist**, continue completing the information on the **Workflow** tab.
15. Check the options for **Elevation settings:**
	* **Users can elevate applications.**
	* **Require reason to elevate applications.**
	* **Require approval to elevate applications.**
	* **Allow emergency access.**
	* **Approval in levels.**To work, approvers must be registered in levels in the [Approvers report.](https://docs.senhasegura.io/v3-33/docs/en/go-endpoint-manager-windows-approval-workflow)
16. If you checked to **Require approval to elevate applications**, set the number of times for each specific action:
	* **Approvals required** so the user can elevate the privilege and perform the action.
	* **Disapprovals required** to cancel the privilege elevation.
17. Choose **Yes** or **No** in the **Access request settings.**
	* **Governance ID required when justifying?\***
	* **Always add user manager to approvers?\***
18. **Save.**

InfoRules will be applied for applications launched on GO Endpoint Manager agents and those launched outside of GO Endpoint Manager. Segregation rule values can be filled with regular expressions.



---

## Read more

* [Typical screens](https://docs.senhasegura.io/v3-33/docs/en/general-information-graphical-user-interface)
* [Automation](https://docs.senhasegura.io/v3-33/docs/en/go-endpoint-manager-windows-agent-automation)
* [Approval workflow for applications](https://docs.senhasegura.io/v3-33/docs/en/go-endpoint-manager-windows-approval-workflow)
