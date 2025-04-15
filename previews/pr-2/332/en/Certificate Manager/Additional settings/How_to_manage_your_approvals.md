# How to manage your approvals

This article explains how to approve requests from other users within Certificate Manager and track the status of these requests. 

The actions a user can approve for another user are:

* View certificate passwords
* Sign a certificate
* Renew a certificate
* Publish a certificate

## Requirements

* The user must be an **Approver** in the Certificate Manager's access group.
* A Role with the Permissions:
    * **CertificateManager.Requests.Approval.List**
    * **CertificateManager.Requests.Approval.View** 
    * **CertificateManager.Requests.Approve** 

:::(Warning) (Caution)
If your user belongs to other access groups with stricter settings, the system will apply these rules, and you won't be able to see the requests. Please ensure that you're not included in any of these groups.
:::
***
## Approve a request

To approve a request, follow these steps:

1. In the top left corner, click **Grid Menu**, identified by the nine squares icon, and then select **Certificate Manager**.
2. On the side menu, select **My approvals**.
3. Locate the request to approve.
4. In the corresponding **Action** column, click **Approve** (the checkmark icon).
    :::(Info) (Info)
    Alternatively, click on the three vertical dots icon and select **Details**. You'll find the **Approve** button on the page that opens.
    :::
5. Click **Yes** to confirm the approval.
***
## Reject a request 
To reject a request, follow these steps:

1. In the top left corner, click **Grid Menu**, identified by the nine squares icon, and then select **Certificate Manager**.
2. On the side menu, select **My approvals**.
3. Locate the request to reject.
4.  In the corresponding **Action** column, click on the three vertical dots icon.
5. Select **Reject**.
    :::(Info) (Info)
    Alternatively, click on the three vertical dots icon and select **Details**. You'll find the **Reject** button on the page that opens.
    :::
7. Click **Yes** to confirm the rejection.
***
## Monitor your approvals 

To monitor requests already approved and those awaiting approval, follow these steps:

1. On the side menu, select **My approvals**.
2. From the **Status** search field, select one of the options: *pending*, *approved*, rejected, *expired*, or *canceled*.
    2.1 Use any other field to refine the search further.

According to the applied filters, your approvals will be listed on My approvals' main page.

:::(Info) (Info)
If you're using senhasegura when someone requests your approval, a pop-up message will appear in the bottom right corner of the screen.
:::
***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
