# About Approvers level

When selecting an approver, the field Level from the list presents a drop-down menu with options for **Level 1**, **Level 2**, and **Level 3**. This configuration determines the sequence of calls for approval of the operation, allowing the application of a hierarchy.

For example, we can have an access group with three authorization levels. Approvers configured as **Level 1** will be the first to receive the access request.

The approvers of **Levels 2** and **3** will only be notified after the first-level approvers grant access. If they don’t, then access will be denied without the other levels being notified.  
Likewise, if the approver of **Level 1** grants access, but the approver of **Level 2** rejects the access request, the approver of **Level 3** won’t be notified.

It’s important to remember that if you register more than one approver for the same level, the first approver at that level who grants access will already result in a notification for the next level, thus making the process faster.

:::(warning) (**Attention**)  
An approver user must have at least the **PAM Operator** profile to access the approval flow.  
:::