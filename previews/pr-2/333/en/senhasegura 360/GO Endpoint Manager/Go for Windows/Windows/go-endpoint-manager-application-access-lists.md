# Application access lists

In this document, you will learn how to configure application access lists on PEDM GO Windows clients, both for general segregation (for all workstations) and for specific workstations.

## How to configure application access lists for general segregation
 
1. In senhasegura, access the **Access Lists** page using the path: **Grid Menu** > **GO Endpoint Manager** > **Policies** > **Windows** > **Access lists**.
2. Click the **Show actions** button, represented by the three vertical dots.
3. Select the option **New general segregation**.
4. On the **Choose category** screen, select **Applications**.
5. In the **General list** window, fill in the fields:
	* **Name***: define a name for the list.
	* **Action***: choose between **allowlist** to allow or **denylist** to block.
	* **Status***: choose between **active** or **inactive**.
	* **Record the session of these applications***: choose between **active** or **inactive**.
6. In the **Applications** tab, fill in the fields:
	* **Monitor Parent Process***: If parent process monitoring is **Enabled**, all child processes created by it will be checked according to the access list permissions. If **Disabled**, all processes will be evaluated normally by the access list.
	* **Monitor Child Process***: If child process monitoring is **Enabled**, the access list will be applied to all processes originating from it. If **Disabled**, all processes will be evaluated normally by the access list.
	* In **Criteria** choose one or more:
    	* **Certificate**: the certificate in the application has a fixed value called **Trusted Only**, so the certificate that has this rule active will be validated.
    	* **COM class ID**: information in GUID format present in all applications.
    	* **Directory**: is the application path. To be validated with the rule, the registered path must be identical to the file.
    	* **File hash**": is unique information that each file has. With each change made to the file, a new hash is generated.

:::(Warning) (Careful)
If you have a rule that uses the **File hash** criterion, only this criterion will be considered. The **Product Name** and **Directory** criteria will be ignored. If the access list contains multiple file hash criteria, they are evaluated with an **OR (||)** condition.
:::

:::(Info) (Info)
Starting with 3.32, you will need to run this command `Get-Filehash -path c:\pathToFile\fileExample.exe -algorithm SHA256` in PowerShell to get the hash of the file to be configured in the criteria. Replace the path after `-path` with the file path. Depending on your environment configuration, you will need administrator access to perform this operation.
:::

* **File version**: informs the file version.
* **Internet zone identifier**: this information refers to the origin of the file, when it is downloaded from the internet, it will be as Internet Zone, generally all downloaded files are classified like this, as well as the executables that are installed, for example, has this information as Local Zone.
* **Product name**: is the name of the program, both the file name and the program name are evaluated. We do not recommend registering an access policy based solely on this criterion.

:::(Warning) (Careful)
Registering an access policy using only the **Product name** criteria may create security risks. We suggest adding more than one criteria, such as **Directory**, **Certificate**, **File hash** or any other.
:::

* **Product version**: version specification.
* **Source URL**: refers to the URL from where the file was downloaded. The file can only be executed if the source URL is correct and validated.
* **Update code**: this information is also a GUID for each program, and can be found in the Windows registry.
* **Supplier name**: name of the manufacturer.
* **Windows Store Editor**: This is about applications downloaded from the Microsoft Store. It is validated according to the file directory: Program Files (and x86 too), and in the hidden Windows Apps folder.

:::(Info) (Info)
DLLs work like applications, and can be filtered by **Product Name, Product Version, Certificate, File Version, Directory, File Hash, Internet Zone Identifier** and **Windows Store Publisher.**
:::

* **Rule**: fill in according to the chosen criteria.

:::(Warning) (Careful)
When filling the list with more than one criteria, the logical operator will be **E (&&)**. That is, the rule will only be executed if both conditions are true. Example: `Product Version AND Product Name`.

When filling the list with more than one criteria and different rules, the logical operator of the criteria will be **AND (&&)** and the logical operator of the rules will be **OR (||)**. Example: `Product E Version (Product Name A OR Product Name B)`.
:::

:::(Info) (Info)
Items with an asterisk* are mandatory.
:::

7. Click **Add**:
	* If you choose **denylist**, click **Save** and you will receive a confirmation message.
	* If you choose **allowlist**, continue filling in the fields in the **Workflow** tab.
8. Check the options for **Elevation Setting**:
	* **User can upgrade applications**.
	* **Requires justification to elevate applications**.
	* **Requires approval to upgrade applications**.
	* **Allow emergency access**.
	* **Approval in levels**: to work, approvers must be registered in levels in the [Approval workflow](/v3-33/docs/en/go-endpoint-manager-windows-approval-workflow).
9. If you checked **Require approval to elevate applications**, set the number of times for each specific action:
	* **Required approvals**: so that the user can elevate the privilege and perform the action.
	* **Deprecations required**: to cancel privilege elevation.
10. Answer **Yes** or **No** to the **Access Request Settings**:
	* **Is it mandatory to specify governance code when justifying?**
	* **Always add the user manager to approvers?**
11. Click **Save**.

--------------------------------------------------------------------------------------------------

## How to configure application access lists for specific workstations

1. In senhasegura, access the **Access Lists** page using the path: **Grid Menu** > **GO Endpoint Manager** > **Policies** > **Windows** > **Access lists**.
2. Click the **Show actions** button, represented by the three vertical dots.
3. Select the **New Segregation for Workstation** option.
4. On the **Choose category** screen, select **Applications**.
5. In the **General list** window, fill in the fields:
	* **Name***: define a name for the list.
	* **Action***: choose between **allowlist** to allow or **denylist** to block.
	* **Status***: choose between **active** or **inactive**.
	* **Record the session of these applications***: choose between **active** or **inactive**.
6. In the **Applications** tab, fill in the fields:
	* **Monitor Parent Process***: If parent process monitoring is **Enabled**, all child processes created by it will be checked according to the access list permissions. If **Disabled**, all processes will be evaluated normally by the access list.
	* **Monitor Child Process***: If child process monitoring is **Enabled**, the access list will be applied to all processes originating from it. If **Disabled**, all processes will be evaluated normally by the access list.
	* In **Criteria** choose one or more:
    	* **Certificate**: the certificate in the application has a fixed value called **Trusted Only**, so the certificate that has this rule active will be validated.
    	* **COM class ID**: information in GUID format present in all applications.
    	* **Directory**: is the application path. To be validated with the rule, the registered path must be identical to the file.
    	* **File hash**": is unique information that each file has. With each change made to the file, a new hash is generated.
    	
:::(Warning) (Careful)
If you have a rule that uses the **File hash** criterion, only this criterion will be considered. The **Product Name** and **Directory** criteria will be ignored. If the access list contains multiple file hash criteria, they are evaluated with an **OR (||)** condition.
:::
        
:::(Info) (Info)
Starting with 3.32, you will need to run this command `Get-Filehash -path c:\pathToFile\fileExample.exe -algorithm SHA256` in PowerShell to get the hash of the file to be configured in the criteria. Change the path after `-path` with the file path. Depending on your environment configuration, you will need administrator access to perform this operation.
:::

    	* **File version**: informs the file version.
    	* **Internet zone identifier**: this information refers to the origin of the file, when it is downloaded from the internet, it will be as Internet Zone, generally all downloaded files are classified like this, as well as the executables that are installed, for example , has this information as Local Zone.
    	* **Product name**: is the name of the program, both the file name and the program name are evaluated. We do not recommend registering an access policy based solely on this criterion.

:::(Warning) (Careful)
Registering an access policy using only the **Product name** criteria may create security risks. We suggest adding more than one criteria, such as **Directory**, **Certificate**, **File hash** or any other.
:::

    	* **Product version**: version specification.
    	* **Source URL**: refers to the URL from where the file was downloaded. The file can only be executed if the source URL is correct and validated.
    	* **Update code**: this information is also a GUID for each program, and can be found in the Windows registry.
    	* **Supplier name**: name of the manufacturer.
    	* **Windows Store Editor**: This is about applications downloaded from the Microsoft Store. It is validated according to the file directory: Program Files (and x86 too), and in the hidden Windows Apps folder.
    	
:::(Info) (Info)
DLLs work like applications, and can be filtered by **Product Name, Product Version, Certificate, File Version, Directory, File Hash, Internet Zone Identifier** and **Windows Store Publisher.**
:::
 * **Rule**: fill in according to the chosen criteria.

:::(Warning) (Careful)
When filling the list with more than one criteria, the logical operator will be **E (&&)**. That is, the rule will only be executed if both conditions are true. Example: `Product Version AND Product Name`.

When filling the list with more than one criteria and different rules, the logical operator of the criteria will be **AND (&&)** and the logical operator of the rules will be **OR (||)**. Example: `Product E Version (Product Name A OR Product Name B)`.
:::

:::(Info) (Info)
Items with an asterisk* are mandatory.
:::

7. Click **Add**.
8. In the **Workstation** tab, click the plus button (+) and choose a workstation according to the criteria:
	* **Code**: the identifying number in the workstation list.
	* **UUID**: unique workstation identifier.
	* **Hostname**: machine name.
	* **IP**: IP address of the workstation.
9. Click **Add**.
10. Still in the **Workstation** tab, you will see the information:
	* **Adder**: user who added the workstation.
	* **Inclusion**: date the workstation was added.
11. Click **Save**.
	* If you choose **denylist**, click **Save** and you will receive a confirmation message.
	* If you choose **allowlist**, continue filling in the fields in the **Workflow** tab.
12. Check the options for **Elevation Setting**:
	* **User can upgrade applications**.
	* **Requires justification to elevate applications**.
	* **Requires approval to upgrade applications**.
	* **Allow emergency access**.
	* **Approval in levels**: to work, approvers must be registered in levels in the [Approvers Report](/v3-33/docs/pt/workflow-de-aprovacao#gerenciar-a-lista-de-approvadores).
13. If you checked **Require approval to elevate applications**, set the number of times for each specific action:
	* **Required approvals**: so that the user can elevate the privilege and perform the action.
	* **Deprecations required**: to cancel privilege elevation.
14. Answer **Yes** or **No** to the **Access Request Settings**:
	* **Is it mandatory to specify governance code when justifying?**
	* **Always add the user manager to approvers?**
15. Click **Save**.

:::(Info) (Info)
The rules will apply to both applications launched on GO Endpoint Manager agents and applications launched outside of GO Endpoint Manager. Segregation rule values ​​can be filled with regular expressions.
:::

* * *

### Read more

* [Graphical User Interface](/v3-33/docs/en/general-information-graphical-user-interface)
* [Automation](/v3-33/docs/en/go-endpoint-manager-windows-agent-automation)
* [Approval workflow](/v3-33/docs/en/go-endpoint-manager-windows-approval-workflow)
