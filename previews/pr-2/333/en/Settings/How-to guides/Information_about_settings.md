# Information about settings

This document provides general information about senhasegura, such as configurations, auditing, access groups, and more.

## **Access Workflow**

The Access Workflow allows you to create a process where users need to request permission to perform certain actions in senhasegura. These requests are sent to selected individuals, known as **Approvers**, who must approve them.

The Access Workflow can be used in various modules and actions of senhasegura, such as:

* Password retrieval.  
* Proxy access.  
* Certificate issuance.  
* Configuration changes.

Note that senhasegura will only record the access in all audit reports and forward messages of the actions taken to the SIEM.

### **Access with justification**

A registration screen will be presented if the requesting user needs to record the reason for using privileged information. Only after submitting the justification will it be possible to use it. The requesting user can list their requests through the menu **PAM Core \> Access Control \> My Requests**.

In **PAM Core \> Access Control \> Requests**, the **Emergency** **Access** column's **Yes** or **No** values indicate whether the request was an emergency. Thus, a filter can be applied to this type of access request.

### **Access by approval**

If the requesting user needs approval to perform the same task, the justification screen will be presented with adding fields for the period. This period is the time interval during which the requester can use the credential.

At the end of this period, the credential will be available for automatic password change. The requester will be disconnected immediately if the approval is for a proxy session. The authorizer will receive an email notification about this request. If the password and access policies of the requested credential are configured to expire the password immediately after viewing, it will be modified. In other cases, the password will remain unchanged until the next scheduled rotation, according to the credential configuration.

:::(info) (Info)  
If the user is a member of an access group with a level approval model, the 1st level approver will receive the email first. After their approval, the other approvers will receive the email according to the hierarchy and number of levels defined in the access group configuration.  
:::

If the inbox is configured in senhasegura, approvers can respond to the email with the words **APPROVE** or **REJECT** so that their response is recorded. The approval or disapproval is carried out.

In senhasegura, this can be done through **PAM Core \> Access Control \> My Approvals**. The registration actions allow you to approve, disapprove, and view the request details.

:::(info) (Info)
At the time of approval, the approver can change the date and time interval.**
:::

All requests and justified accesses can be seen in the report **Access Control \> Requests**.

Whenever an approver revokes a request and reaches the minimum number of revocations, if there are more approvers, the others need not also revoke the session. To access revocation requests, go to **PAM Core \> My Approvals**.

:::(info) (Info)  
There is a case where the requester can bypass the approval process when there is a need for emergency and immediate use of the credential. If the access group allows the requester to use this feature, an emergency access screen will be displayed right after sending the request. Upon confirming emergency access, senhasegura will notify all approvers about the information accessed by the requester in this mode. The access request will then be marked as emergency use.  
:::

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).