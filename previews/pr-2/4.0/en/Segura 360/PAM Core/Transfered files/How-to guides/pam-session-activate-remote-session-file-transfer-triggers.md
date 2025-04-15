# How to activate remote session file transfer triggers

This document provides information about the step-by-step process on how to activate file transfer triggers for a remote session. After this action, you'll have logs of the transferred files.

## Activate the triggers

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Management** >  **Sessions** > **Transfer triggers**
3. At the **Status** field, select **Inactive** and click **Filter**.
4. On the list, locate the **Transfer audit** item.
5. In the **Action** column, click on the Actions button and select **Active**.
    1. Click **Yes** on the confirmation box.
6. Still on the platform, in the navigation bar, hover over the **Products menu** and select **Settings**.
7. In the side menu, select **System parameters** > **Global**.
8. At the **Remote session** tab, in the **General** section:
    1. Locate the **Enable trigger for file transfer?*** field: check **Yes**. 
9. In the bottom left corner, click **Save**.

When finalized, you can transfer files from your local machine to a remote session or between sessions and have this transfer log on the [Transferred files](/v4/docs/pam-session-transferred-files) report.


:::(warning) (**Caution**)
When file transfer logs are active, SFTP transfers won't work due to technological constraints.
:::

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target="_blank"}.
