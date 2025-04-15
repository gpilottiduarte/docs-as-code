# Configure an access group

:::(Info) (Info)
Please refer to the relevant chapter for instructions on utilizing the desired JIT account and creating a dedicated access group that meets your requirements.
:::
To create an access group follow the instructions:

1. Access **PAM Core ➔ Settings ➔ Access ➔ Group access**
2. Click the `⁝` icon**,** select the option **+ New**
3. In **Settings**, define whether users can start sessions with an approval workflow.
![JIT1.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/JIT1.png){height="" width=""}

It is possible to set:

- **Remote session settings**:
    - **Requires justification for login:** if you need to inform the reason for login
    - **Requires approval to start the session:** whether sessions will have to go through an approval workflow
    - **Require change ID to log in:** if you need a Change code configured in the Change Audit module
    - ***Allow emergency access:*** whether to allow emergency access without prior approval
    - **Approval in levels**: whether the approval needs to be in levels, considering a hierarchy defined
- **Access request settings**:
    - **Mandatory to specify the governance code when justifying?:** whether it is necessary to inform the governance code of the company's ITSM tool

4. In **Criteria**, define the criteria for displaying devices and credentials to group users.
![jit2.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/jit2.png){height="" width=""}
    

It is possible to set: 

- Names of **devices**
- **Model** of device products such as MySQL, Apache, etc.
- Credential **Usernames**
- **Tags** **of devices**
- * Credential tags **
- **Websites**
- **Types of devices**
- **Type of credentials**

5. On the **Users** tab, add the users who should be part of the group.
6. On the **Approvers** tab, add the approvers and which hierarchy level each one will have during the approval workflow.
7. On the **Access Limitation** tab, define the dates, days and times when users can perform JIT accesses.
![jit3.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/jit3.png){height="" width=""}

8. To finish, click **Save**.

After configuring the Just in Time Privilege Elevation, the user has to follow the menu **PAM Core ➔ Credentials ➔ All** and start a session by clicking the **Start a Session** icon.

Before starting the session for the user, senhasegura will connect to the device, perform the credential privilege change and then start the requested session. After the end of the session, senhasegura will connect again to the device and remove the privileges added to the credential.

The session will be monitored with video recording and all commands will be audited. If the administrator has configured session monitoring by Change Audit and the user has done something different than expected, notifications will be sent to those responsible.