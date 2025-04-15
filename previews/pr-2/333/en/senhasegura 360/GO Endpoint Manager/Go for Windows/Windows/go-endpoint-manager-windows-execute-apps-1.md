 This feature allows the user to run applications with or without privilege elevation.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1672337533942.png)GO Endpoint Manager Core \- Execute 

InfoThe **Core** application is customizable. The image displayed and the description of items may change according to the version of the user and the features allowed by the administrator.### Applications list

* Not all applications may be listed.
* **Refresh** to search for new applications.
* If an application is not on the list, you can drag its shortcut or runtime binary into it.
* EXE, LNK, MSC, and MSI filesare accepted.

### Execute an application inside of Go

1. Access the user's desktop.
2. Start **Core**.
3. Click on the menu **Execute**.
4. Choose an available application in the list.
5. Right\-click on it and choose one of the options:
	* **Execute**: run the application in a dedicated session.
	* **Execute as a user**: you must choose a credential to run the application. Read the [Impersonation](/v3-33/docs/go-endpoint-manager-windows-impersonation) article to learn more.

InfoFor users in access groups that require approval, the application will only be allowed after the approval.### Execute an application outside of GO

1. Search for the application you intend to run.
2. Right\-click on the application icon.
3. **E****xecute with senhasegura.go**

In this case, the elevation outside of GO is **Executed with privileges**. This application will run with all administrative privileges.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1673293834907.png)Executing an application outside senhasegura GO  CautionValidate that there are no GPOs applied or not applied on the Workstation that could prevent the GO Endpoint Manager Windows client from working correctly.  
  


  


