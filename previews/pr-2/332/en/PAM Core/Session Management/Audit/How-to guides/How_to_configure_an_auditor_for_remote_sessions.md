# How to configure an auditor for remote sessions

In this document, you’ll find a step-by-step guide on how to configure an auditor for a remote session.

---
### Requirements

* Be a pam auditor, pam adm ou system administrator user.

---
## Configure an auditor

1. On senhasegura, in the upper left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Access Control** > **Remote Sessions**.
3. In column **Action**, click on the three vertical dots icon and select **Configure auditors**.
4. In the **Session auditors settings** window.
    1. Click the **plus** icon to select the users you want to add to the list.
    2. Click the **trash bin** icon next to the selected user to **delete** a user from the list.
5. Click **Save**.

The system displays a confirmation message. Now, this session has an auditor, and they’ll be able to see the sessions in which they’re an auditor through the report **Sessions for audit**.

---
## Next:
[Sessions for audit](/v3-32/docs/pam-session-sessions-for-audit)
[Audited commands](/v3-32/docs/pam-session-audited-commands)

Do you still have questions? Reach out to the [senhasegura community](https://community.senhasegura.io/){target=`_blank`}.