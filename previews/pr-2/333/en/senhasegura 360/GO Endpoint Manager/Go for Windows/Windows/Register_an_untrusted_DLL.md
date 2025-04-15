GO Endpoint Manager for Windows offers a DLL blocking function, which occurs when an executable attempts to load the process.

Feature availability✖3\.26 and older versions        ✔3\.27 and later versions



---

## Register an untrusted DLL

ImportantUse DLL blocking with caution. If a system DLL is blocked, system operation may be affected.1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager ➔ Policies ➔ Windows ➔ Access Lists**.
3. Click on the **Actions** menu.
4. Choose the option **New general segregation** or **New segregation for workstation**.
5. Choose the **Applications** category.
6. Fill in the following information on the **General List**screen:
	* **Name**: define a name to identify the access list.
	* **Action**: choose Denylist to block a DLL.Allowlist restrictionsMake sure this DLL is not included in any Access List assigned as an Allowlist. The Allowlist is more restrictive, therefore, if this DLL is included in another list as an Allowlist, its execution will be allowed even if it is included in a Denylist.
	* **Status**: set to Enabled or Disabled.
	* **Record session for these applications**: set to Enabled or Disabled.
7. On the tab **Applications:**
	1. For **Criteria**and **Rule,**choose:
	
	| Critério | Regra |
	| --- | --- |
	| Directory | The location of the .dll file. |
	| File Hash | Enter the Hash of the file. |
	2. Click **Add**
8. After adding the criteria and rule, click **Save**.

  


