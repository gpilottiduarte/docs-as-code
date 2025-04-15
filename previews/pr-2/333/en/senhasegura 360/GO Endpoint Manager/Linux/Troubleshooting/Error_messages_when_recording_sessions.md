# Error messages when recording sessions

During the session recording process, the following error messages may occur due to the requirements that need to be met. Here's how to handle potential scenarios when registering a policy with the recording parameter enabled.

## Message 01 - SIGNUSR: 1008: Certificate inactive
**Inactive certificate:** This error occurs when the workstation has been deactivated in the senhasegura platform.

### Solution

1. Access the senhasegura platform.
2. Naviagte to **GO Endpoint Manager➔General➔Workstations**.
3. Filter the **Status** field with the **Inactive** option.
4. Click on **Filter**.
5. Find the workstation you want to activate.
6. In the **Action** menu, click on** ⁝**
7. Select **Authorize**.
8. Choose **Yes** to confirm.
***
## Message 02 - SIGNUSR: 1011: Local user inactive
**Inactive local user:** This error occurs when the GO Endpoint Manager user for Linux is inactive.

### Solution

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔General➔Users**.
3. Filter the **Status** field with the **Revoked** option.
4. Click on **Filter**.
5. Find the desired user.
6. In the **Action** menu, click on **⁝**
7. Select **Authorize**.
8. Choose **Yes** to confirm.
***
## Message 03 - SIGNUSR: 1013: Local user does not exist on server
**Local user does not exist on the server:** This error occurs when there is no user with the same username in the senhasegura platform.

### Solution

1. Access the senhasegura platform.
2. [Create a user](/v3-33/docs/cloud-iam-add-user) with the same username.
***
## Message 04 - SIGNUSR: 1014: User pending approval location
**Pending approval for local user:** This error occurs when the user exists in the senhasegura platform and the workstation with GO Endpoint Manager for Linux installed but has not been approved by the administrator.

### Solution

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager➔General➔Users**.
3. Filter the **Status** field with the **Pending** option.
4. Click on **Filter**.
5. Find the user you want to authorize.
6. In the **Action** menu, click on **⁝**
7. Select **Authorize**.
8. Choose **Yes** to confirm.
***
## Message 05 - SIGNUSR: 1017: Inactive senhasegura user
**Inactive senhasegura user:** This error occurs when the senhasegura platform user related to GO Endpoint Manager for Linux is inactive. Users, including the root user, should be active.

### Solution

1. Access the senhasegura platform.
2. Check if the users are active in **Settings➔User Management➔Users**.
3. Filter the **Active** field with the **No** option.
4. Click on **Filter**.
5. Find the user that needs to be activated.
6. In the **Action** menu, click on **Edit**.
7. In the **Status** field, select **Active**.
8. Click on **Save**.
* * *
## senhasegura Community
To learn more about this topic, refer to the articles created about the [GO Endpoint Manager](https://community.senhasegura.io/search?q=GO%20Endpoint%20Manager%20).

If you need further assistance, ask the senhasegura Community. There, you can rely on help from other users and our senhasegura experts to get a response.