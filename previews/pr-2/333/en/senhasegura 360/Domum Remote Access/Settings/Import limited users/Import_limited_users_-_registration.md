# Import limited users - registration

This document provides all the information about the initial **Batch Import from third parties** screen, which lists all batch imports of this type that have been performed and the creation of a new import.

## Access Path

1. In senhasegura, in the upper left corner, click on the **Grid Menu**, represented by the nine squares, and select **Domum Remote Access**.
2. In the side menu, select **Settings > Batch import limited users > +Import**.

## Batch import from third parties

| Item | Description |
|---|---|
| **User worksheet** | Required field. Displays the **Choose File** button to select the import file. |
| **Automatically provide access after import** | Checkbox to provide automatic access after import for the users contained in the worksheet, with the options **Yes** and **No**. When the **Yes** option is selected, the **Request batch access - third-party user** screen is displayed. |
| **Template file** | Button located in the lower right corner of the screen that starts the download of the import `.xlxs` file to be filled in. |
| **Import data** | Button located in the lower right corner of the screen to confirm the import of the chosen file. |

<!-- Fix callout -->
:::(Warning) (Attention)
To fill out the template, read the instructions on how the fields should be filled out in the spreadsheet.
:::

## Request batch access - third party user screen

<!-- Fix callout -->
:::(Info) (Info)
This screen will only be available when the **Automatically provide access after import** option is selected as **Yes**.
:::

### **General step**

| Item | Description |
|---|---|
| **File Name** | Required field. Displays the **Choose file** button to select the import file. |
| **Justification** | Justification text for requesting access. |
| **Reason** | Previously registered reasons that justify the request. |
| **Governance Code** | Governance code if used. |

### **Devices step**

| Item | Description |
|---|---|
| **Devices** | List of all available devices registered in **senhasegura**. |
| **Trash** | This item appears next to the devices already added to the list, to be excluded if necessary. |
| **ID** | Device identification code. |
| **Device** | Device name. |
| **Product** | Device model. |
| **Device Type** | The type of device. |
| **Site** | Device URL. |
| **Domain** | Device domain name. |

### **Credentials step**

| Item | Description |
|---|---|
| **Credentials** | List of all available credentials registered in senhasegura. |
| **Trash** | This item appears next to the credentials already added to the list, to be excluded if necessary. |
| **ID** | Credential identification code. |
| **Credential type** | The type of credential. |
| **Username** | Credential username. |
| **Device** | Device associated with the credential. |
| **Domain** | Domain associated with the credential. |
| **Start session** | Checkbox to grant permission to start the session. |
| **View password** | Checkbox to grant permission to view the password. |

### **Access limitation step**

#### **Access permission period section**

| Item | Description |
|---|---|
| **Start** | Drop-down menu with date options for the start of the permission period. |
| **Duration** | How long the permission will be valid, with the options **Hours**, **Minutes**, **Days** and **Months**. |

**Access permission days section:** Checkbox options for the days on which the permission will be valid. Options are **Every Day, Sunday, Monday, Tuesday, Wednesday, Thursday, Friday**, and **Saturday**.

**Access permission times section:** Checkbox options for the times at which the permission will be valid. The options are **All hours, 08:00-12:00, 12:00-16:00, 16:00-20:00, 20:00-24:00, 24:00-04:00**, and **04:00-08:00**. In the **Custom** option, it’s possible to choose the time range as needed.

**Sessions section:** Checkbox with the option of **Unlimited** or select the number of sessions in the **Maximum quantity** option.

#### **Review section**

| Item | Description |
|---|---|
| **File name** | The name of the file that contains the list of users who will have access requested. |
| **Justification** | The text with the justification provided. |
| **Reason** | Reason chosen for the request. |
| **Governance Code** | Identification code of the **Governance code**, when provided. |
| **Credentials** | The credentials and permissions that have been granted to each of them. |
| **Access limitation** | The access restriction information that was configured. |
