# About Approval and disapproval rule

The rules explained here apply to the **Sessions** tab in the access policy registration.

When the **Approval in levels** field is enabled, the number specified in the **Approvals required** and **Disapprovals required** fields will indicate the quantity required at each level of approval and disapprovals. In other words, if the number of approvals is set to 2, each level will need to have two approvals. If at any level there is only 1 approval, the requirement won’t be met, and the password can’t be viewed and the session can’t be started.

On the other hand, if the **Approval in levels** field isn’t activated, the number of approvals or disapprovals required will be the general value chosen in the corresponding fields.

Additionally, when using **Approval in levels**, lower-level approvers will initially be notified. Only after approvals have been made by them, the approvers with higher levels will be notified to take their approval actions.