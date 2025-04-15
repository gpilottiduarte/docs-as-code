## **Install**

### **1004: Invalid credential**

**Problem:**the workstation asymmetric key does not exist on the senhasegura server.

**Solution:** it is necessary to re\-register the workstation. See the [Generate a Use License](https://docs.senhasegura.io/v3-33/docs/how-to-install-go-windows-agent-1) section of the Installation article.



---

### **2028: The workstation version is prohibited**

**Problem:** the version installed on the workstation has been disapproved by the administrator of **GO Endpoint Manager for Windows**. Since the version is prohibited, it cannot be used. Register a new version. 

**Solution****:**get a new version in [PAM Solution](https://suporte.senhasegura.com.br/en/support/solutions/articles/22000270150-go-endpoint-manager-for-windows-pedm-) and redo the [installation](https://docs.senhasegura.io/v3-33/docs/how-to-install-go-windows-agent-1).



---

## **Workstation**

### **1005: Unregistered Workstation**

**Problem: t**he workstation needs to be approved on the senhasegura platform.

**Solution**: redo the installation.



---

### **1002: Registration of pending approval Workstation**

**Problem:**the workstation is pending approval by the administrator in the **GO Endpoint Manager for Windows** workstation registration.

**Solution****:**the workstation must be approved. See the [Manually Approve Workstation](https://docs.senhasegura.io/v3-33/docs/how-to-install-go-windows-agent-1) section in the installation article. If self\-approval is enabled, the user can approve the workstation himself.



---

### **1008: Certificate inactive**

**Problem:**the workstation was inactivated by the administrator in the workstation register of the **GO Endpoint Manager for Windows**.

**Solution****:**the workstation must be approved. See the [Manually Approve Workstation](https://docs.senhasegura.io/v3-33/docs/how-to-install-go-windows-agent-1) section in the installation article.



---

## **User**

### **1013: Local user does not exist on server**

**Problem:**the workstation user does not have an account with the same username on the senhasegura platform.

**Solution****:**it is necessary to create a user on the senhasegura platform with the same username as the workstation. See the article [Create a user](https://docs.senhasegura.io/v3-33/docs/en/user-management-add-system-administrator) in the senhasegura Administration module.



---

### **1014: User pending approval location**

**Problem:**the user is pending approval to use **GO Endpoint Manager for Windows** on the Workstation.

**Solution****:**you need to approve the user. See the [Manually Approve User](https://docs.senhasegura.io/v3-33/docs/en/go-endpoint-manager-windows-install#approve-user-and-workstation-automatically) section of the Setup article. If self\-approval is enabled, the user does not need approval.



---

### **1011: User inactive location**

**Problem**: the workstation user is inactive in senhasegura. In these cases, the user already used **GO Endpoint Manager for Windows**, but the Workstation user is inactive. Don't get confused. This is the senhasegura platform user account.

**Solution****:**you need to approve the user. See the [Manually Approve User](https://docs.senhasegura.io/v3-33/docs/en/go-endpoint-manager-windows-install#approve-user-and-workstation-automatically) section of the Setup article.



---

## GO Logs Missing After senhasegura Platform Update

Logs before the version 3\.27 upgrade are not displayed in **GO Endpoint Manager ➔ Reports ➔ Windows ➔ Events.** You must add this URL in the browser path to access the old logs: /flow/coof/certificado/evento/report  
Example: https://vaultsenhasegura.com/flow/coof/certificado/evento/report

---

## An access list is not working

Check if you have a rule with the File Hash criteria. Suppose you have an access list with Product Name, Directory, and File Hash. Only the File Hash will be considered, and all other criteria will not. And if it is an access list with more than one Hash of the file, they are considered with the evaluation of an "OR" condition.



---

## Community senhasegura

To learn more about this subject, see the topics created on [GO Endpoint Manager.](https://community.senhasegura.io/search?q=GO%20Endpoint%20Manager%20tags%3Aen)  


If you require help, ask in the [senhasegura Community](https://community.senhasegura.io/) and get a response from other users in the community andsenhasegura experts.

