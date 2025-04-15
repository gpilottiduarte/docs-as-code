# Application

In this document, you'll find all the information about the configuration parameters for the senhasegura application.

## **Access Path**

1. In senhasegura, in the upper left corner, click on the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **System Parameters \> System Parameters**.  
3. In the **System Parameters** report, select **Application**.

## **Application**

In this report, it's possible to configure various aspects of senhasegura.

### **Application connection parameters**

| Item | Description |
| :---- | :---- |
| **Network Connector** | Drop-down menu. Select the network connector that will be used in the application. **Note**: This will be the default agent for connections with external systems. |

### **Credentials and devices parameters**

| Item | Description |
| :---- | :---- |
| **Force password change on batch import?\*** | Radio button. Forces the change of the imported credential's password when performing a batch import. Default: **No**. |
| **Use additional information on unique key?\*** | Radio button. This option allows the system to check the specified field to determine whether to update an existing record or create a new one. Default: **No**. |
| **Use credential type on unique key?\*** | Radio button. If this option is activated, the system will evaluate the field in question to decide whether to update an existing record or create a new record. Default: **No**. |
| **Additional field name (1)** | This field is used for the device. |
| **Additional field name (2)** | This field is used for the device. |

### **Report settings**

| Item | Description |
| :---- | :---- |
| **Records per page\*** | Select the number of records that each report page will show. Default: **30**. |
| **Records per page (max)\*** | Select the maximum number of records that can be shown. Default: **100\. Note:** This is the maximum number of records that the user can request to appear on screen. |
| **Hide filters by default?\*** | Radio button. Hides the top filter bar of reports as soon as you access the report. Default: **No**. |
| **Add hour and minute to date range filter?\*** | Radio button. Adds the hour and minute option in the date filter of reports. Default: **No**. |

### **General application settings**

| Item | Description |
| :---- | :---- |
| **Default language\*** | Drop-down menu. Select the default language for senhasegura. Options are *Deutsch, English, Español, Français, Polski, Português*, and *Pусский*. Default: **English**. |
| **Enable banner login?** | Radio button. Activates the login banner in senhasegura. Default: **No**. |
| **Redirect on module changing?** | Radio button. When selecting a module in the menu, senhasegura will automatically change to the main screen of the chosen module. Default: **Yes**. |
| **Banner login** | Text field. Fill in the login message that will be displayed in senhasegura. **Note**: If the **Enable login banner** option is activated and there is no text for the banner, senhasegura will show the following default text: **"This application is exclusively for internal use and restricted to authorized users"**. |
| **Remote backup credential** | Drop-down menu. Indicate the credential that will be used in the senhasegura remote backup process. |

### **Configuring trusted IPs**

| Item | Description |
| :---- | :---- |
| **Application IPs** | Text fields. Fill in the IP address you want to add as trusted in senhasegura. Add the four octets in each of the text fields. |
| **Trusted IPs** | Indicates which IPs were added to senhasegura. |

### **Master Key Ceremony**

| Item | Description |
| :---- | :---- |
| **MFA mandatory to Master key ceremony?** | Radio button. Activates mandatory MFA authentication for the master key ceremony. |