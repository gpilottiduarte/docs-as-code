The Access workflow allows you to create a process where users must request permission to perform certain actions in SenhaSegura. These requests are then sent to selected individuals, known as Approvers, who must approve them.  
The Access workflow can be used in a few places in senhasegura:

* Password withdrawal;
* Proxy access;
* Certificate permissions;
* Change settings
* Others

senhasegura will only record access in all compliant audit reports and forward to **SIEM** the messages of the actions taken.



---

## Access through justification

A registration screen will be presented if the requesting user needs to record the reason for using the inside information. And only after sending the justification will it be possible to use it.

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%2892%29.png)Justification Form 

  


The requesting user can list their requests through the **PAM Core ➔ Access control ➔ My requests**.

In **PAM Core ➔ Access Control ➔ Requests** on this screen, the column **Emergency Access**, the values **Yes** or **No**inform if it was emergency access or not. After exporting the report, you can apply a filter for this access request.



---

## Access through approval

If the requesting user needs the approval to perform the same task, the justification screen is presented with the addition of fields for the period. This period is the time interval the requester needs to use the credential.

After this time, the credential will be available for automatic password change. And if the approval is for a proxy session, the requester will be immediately disconnected.

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%2894%29.png)Justification Form with period 

  


The user will be given the following confirmation screen when forwarding the approval request.

The approver will be notified by email of this request by email.

InfoIf the user is a member of an access group with a level approval model, the 1st level approver will receive the email first; after his approval, the other approvers will receive the email according to the hierarchy and number of levels defined in the access group configuration.

If the inbox is configured in senhasegura, approvers can reply to the email with the words **APPROVE** or **DISAPPROVE** to affect their response. Or he can click on the link described in the email.

The system can be done at the **PAM Core ➔ Access control ➔ My approvals** menu. Record actions allow you to approve, disapprove and see the detail of the request.

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%2895%29.png)

  


At the time of approval, the approver may change the date and time interval.

  
![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%2896%29.png)  


All the requests and the justified accesses can be seen in the report **Access control ➔ Requests**.

Whenever an approver revokes a session, if there is more than one approver, the others don't need to revoke it. To access revocation requests, go to **PAM Core ➔ My approvals.**

  




---

## Emergency access

Emergency access is a case in which the requester can skip the approval process if there is a need for immediate emergency use of the credential. 

When the access group allows the requester to use this feature, the requester will be presented with the emergency access screen right after sending the access request.

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%2897%29.png)Emergency access 

  


As soon as the requester confirms emergency access, senhasegura will send all approvers the information to which the requester had access in advance.

The access request will be marked with emergency use.

  




---

AuditTo view operations such as **approvals** and **disapprovals**, access: **Reports ➔ Events ➔ Audit tracking**:

* **Approval of viewing the session videos:** History of approvals by the approving user;
* **Disapproval of viewing the session videos:** History of disapprovals by the approving user.
