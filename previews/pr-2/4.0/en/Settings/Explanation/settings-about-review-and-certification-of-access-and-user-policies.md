# About review and certification of access and user policies

**About review and certification of access and user policies**

This document provides information about the process for automatically reviewing and recertifying user and access policies.

## **Benefits**

* **Enhanced Security:** supports administrators by ensuring that access privileges are appropriate and aligned with the organization's needs. Through an automated verification process, it ensures that permissions are constantly reviewed and adjusted, minimizing risks and ensuring compliance with security policies.

* **Compliance Made Simple:** the process is auditable and facilitates compliance with security standards, such as ISO 27001, BaFin/BAIT, GDPR, and PCI DSS, which require periodic reviews of privileged access.

* **Operational Efficiency:** automation frees administrators from manual, repetitive tasks.

* **Improved Visibility and Control:** auditing and reporting provide visibility and control over privileged access, making it easier to identify risks and take corrective action.

* **Cost Reduction:** removing unnecessary privileges and outdated accounts optimizes the use of software licenses and reduces costs associated with access management.

## **Automated Notifications**

The system automatically generates notifications and reminders for responsible reviewers and approvers, informing them of the need to recertify the assigned components.

:::(info) (**Info**)  
These notifications occur both during the user review process and when reviewing access policies.  
:::

**For Reviewers:** those responsible for recertification will receive the following notifications:

* When the review process is registered, the components need to be reviewed.  
* When the time for review is approaching, the reviewer's action has not yet been taken.

**For Approvers:** those responsible for the review will receive the following notifications:

* When the review made by the reviewer has been completed, it needs to be approved or rejected.

**For Users:** users will receive the following notification:

* The user will be notified that their access review has been carried out.

## **Review Process**

The review process consists of two possible actions that will be taken by the responsible reviewers:

* **Approve:** the reviewer confirms access privileges without making any changes.  
* **Reject and Request Modification:** the reviewer rejects the request as a whole without making any changes. The reviewer identifies that access privileges are no longer needed or have been inappropriately changed and makes changes, such as removing an inappropriate user or policy.

## **Process Approval**

After the review process has been carried out, if the approval flow is enabled, the system approver will also have actions to perform in the process of reviewing and certifying users or access policies.

:::(info) (**Info**)  
The approval flow must be enabled in the System Parameters. User enablement and access policies are independent.  
:::

Approval of the review consists of two possible actions that will be taken by the responsible approvers:

* **Approve:** the reviewer confirms access privileges without making any changes, and the changes are automatically implemented by the system.  
* **Reject Changes:** the changes are rejected, and the reviewer is notified with the justification for the refusal.

## **Audit Log**

The system records all steps and actions performed by reviewers and approvers in an audit log. It also generates reports on the status of the recertification process, allowing administrators to track progress, identify delays, and analyze decisions made.

## **Reports and History**

Administrators and reviewers can access the user certification history or specific access policies through dedicated reports. Each access to the history is carried out from specific reports.