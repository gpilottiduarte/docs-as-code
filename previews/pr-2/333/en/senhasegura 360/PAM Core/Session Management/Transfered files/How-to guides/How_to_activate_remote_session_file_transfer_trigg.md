# How to activate remote session file transfer triggers

This document will guide you through a step-by-step process on how to activate file transfer triggers for a remote session. After this action, you'll have logs of the transferred files.
***

## Activate the triggers

1. On senhasegura, in the upper left corner, click **Grid Menu**, identified by the nine squares icon, and then select **PAM Core**.
2. In the side menu, select **Settings** >  **Access** > **Triggers transfer**
3. At the **Enable** field, select **No** and click **Filter**.
4. On the list, locate the **Transfer audit** item.
5. In the **Action** column, click on the **check** icon, to activate the trigger.
    1. Click **Yes** on the confirmation box.
6. Still on the platform, in the upper left corner, click **Grid Menu**, identified by the nine squares icon, and then select **Settings**.
7. In the side menu, select **System parameters** > **System parameters**.
8. At the **Remote session** tab, in the **General** section:
    1. Locate the **Enable trigger for file transfer?*** field: check **Yes**. 
9. In the bottom left corner, click **Save**.

When finalized, you can transfer files from your local machine to a remote session or between sessions and have this transfer log on the Transferred files report.


:::(warning) (**Caution**)
When file transfer logs are active, SFTP transfers won't work due to technological constraints.
:::
***

### Next:
[File triggers transfer](/v3-33/docs/pam-session-file-transfer-triggers)
[Transferred files](/v3-33/docs/pam-session-transferred-files)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.
