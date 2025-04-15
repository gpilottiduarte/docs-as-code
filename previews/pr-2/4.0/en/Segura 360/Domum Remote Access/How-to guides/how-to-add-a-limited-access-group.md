# How to add access policies

In this document, you’ll find a step-by-step guide on how to add access policies.

## Add access policies

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Domum Remote Access**.    
2. In the side menu, select **Access control > Access policies**.  
3. In the bottom-right corner, click on **Add**.   
4. In the **Add access policy** screen, fill in:  
    1. **Access policy name\***: enter the access group name.  
    2. **Enabled\***: select the status of the group created. The options are **Yes** and **No.**  
    3. **Description:** enter a description for the created group.  
        ::: (warning) (Attention)  
        These policies are applied at the moment of access request for limited users and they have no effect        after      the link is sent to the user. 
        :::
   4. **Settings** tab:  
       1. In **Password preview settings**, check the desired options:  
           1. Checkbox **Users can view a password**: allows users to view the password. Selecting this option will enable the **Require approval to view the password** option.  
           2. **Require approval to view a password** checkbox: this option will only be available if the **Users can view a password** checkbox is marked. In such case, use the drop-down menus to define the number of **Approvals required for viewing**, and the number of **Disapprovals required to cancel**.  
           3. **Approval in levels** checkbox: mark this checkbox to indicate that the approval for viewing a password is granted in levels. In the **Approvers** tab, define the **approvers’** hierarchy.
       2. In **Remote session settings**, check the desired options:  
           1. Checkbox **Users can start a session**: allows users to start a session. Selecting this option will enable the **Require approval to view the password** option.  
           2. Checkbox **Require approval to view a password**: this option will only be available if the  **Users can view a password** checkbox is marked. If this option is enabled, you must define the number of approvals required to view the password in the **Approvals required for viewing** drop-down menu, and the number of disapprovals required to cancel the request in the **Disapprovals required to cancel** drop-down menu.  
           3. **Approval in levels** checkbox: mark this checkbox to indicate that the approval for starting a session is granted in levels. In the **Approvers** tab, define the approvers’ hierarchy.
       3. In **Access request settings**, choose **Yes** or **No** for the following options:  
           1. **Governance ID required when justifying?\***: requires the user to enter an ITSM code when providing a justification.  
           2. **Can Limited Users request their own access?\***: allows a limited user to request access.
            :::(info) (Info)  
            - Keep in mind your approval workflow before enabling this option.  
            - Limited Users can only request access to credentials they had previous access to.  
            - Limited Users need at least one active access to request new access.   
            :::
    4. **Approvers** tab:  
        1. Click the **plus** icon and select the users who will approve the password and session requests enabled in the **Settings** tab.  
        2. The added approvers will be listed in the table. If the **Approval in levels** option is enabled, define the level for each approver in the **Level** column.  
            :::(warning) (Attention)   
            For an approver to access the approval workflow screen, they must have at least the PAM Operator profile.   
            :::
5. Click **Save.**

A confirmation message will be displayed, and the group will appear in the report list.   

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).