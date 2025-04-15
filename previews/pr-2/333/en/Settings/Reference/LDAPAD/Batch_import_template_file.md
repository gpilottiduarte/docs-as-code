# Batch import template file

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Authentication \> Active Directory \> Batch Import \> Import** and click on the **Template File** button in the bottom-right corner.

## Template file

Within the file, each line corresponds to a new group that will be imported. The information that must be entered in the file is the same as that entered via group registration on the senhasegura web interface.

| Item  | Description |
| :---- | :---- |
| **AD group name** | Name of the Active Directory group. For example: `senhasegura` |
| **Server** | Server address. For example: `172.17.241.252` |
| **Enabled** | Defines whether the group will be active or inactive. It can be set to "Sim" or "Nao" |
| **Synchronization** | Defines whether synchronization with senhasegura will be activated. It can be set to "Enabled” or "Disabled”. |
| **DN** | Address of AD elements that will serve as the basis for querying and synchronizing senhasegura. For example: `CN=Users, DC=sandbox,DC=local.` |
| **AD user attribute** | User name attribute. For example: `sAMAccountName.` |
| **AD user name attribute** | AD user name attribute. For example: `Name`. |
| **Department** | Field for department. For example: `senhasegura.` |
| **AD search** | Query parameters to retrieve information from AD. For example: `(&(objectClass=user)(sAMAccountName=*)(memberOf=CN=senhasegura,DC=mt4,DC=com,DC=br)))`. |
| **Roles** | AD roles. For example: `System User`. |
| **Access groups (User)** | Access groups with user roles. For example: `Full Access`. **Note:** if the access group has the level approval enabled, level 1 will always be considered. |
| **Access groups (Approver)** | Access groups with approver function. For example: `Full Access`.  **Note:** if the access group has level approval enabled, level 1 will always be considered. |