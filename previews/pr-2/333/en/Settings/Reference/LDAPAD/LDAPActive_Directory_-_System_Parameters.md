# LDAP/Active Directory - System Parameters

In this document, you will find all the information about the configuration parameters for LDAP/Active Directory servers.

## **Access Path**

1. In senhasegura, in the upper left corner, click on the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **System Parameters \> System Parameters**.  
3. In the **System Parameters**, select **LDAP/Active Directory**.

## **LDAP/AD**

In this report, it's possible to configure various aspects of LDAP and AD servers and authentication in senhasegura.

### **LDAP service settings**

| Item | Description |
| :---- | :---- |
| **Disable users with no group when synchronizing?\*** | Radio button. When activating this option, all users without a group will be deactivated during LDAP/AD synchronization. |
| **Use a vault credential on authentication?** | Radio button. If you choose **Yes**, the server field will use a credential in the vault. If you choose **No**, the screen will display a user field and a password field. |

### **Login Options**

| Item | Description |
| :---- | :---- |
| **Update username when logging in?\*** | Radio button. When activating this option, the username will be updated after login. |
| **Update contact email when logging in?\*** | Radio button. When activating this option, the user's email address will be updated after login. |
| **Update local password when logging in?\*** | Radio button. When activating this option, the user's local password will be updated after login. |
| **Enable local user when logging in?\*** | Radio button. When activating this option, the local user will be activated after login. |
| **Block login when user is diabled?\*** | Radio button. When activating this option, users who are inactive in the system will have their login blocked in senhasegura. |

### **Domain settings**

| Item | Description |
| :---- | :---- |
| **New domain \+** | Represented by the addition icon, enables the fields to add domains in senhasegura. |
| **Domain** | Text field. Fill in with the complete address for the domain. |
| **Domain (Short Name)** | Text field. Fill in with the short address for the domain. |
| **Trash can icon** | Deletes the domain record. |
