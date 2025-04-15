# How to configure session texts

In this document, you’ll find a step-by-step guide on how to configure a session to record the input and/or output texts in a log. 

### Requirements

* Be an administrator user.

---
## Configure text logging
:::(warning) (**Caution**)
Using this feature requires a large amount of machine resources.
:::

1. On senhasegura, in the upper left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings** > **System Parameters** > **System Parameters**.
    :::(info) (**Info**)
    This configuration can also be carried out in **Segregated parameters**, at **Recording** tab, of any type of segregation created.
    :::
3. On the **Remote Session** tab, go to the **Recording** section and enable the fields:
    1. **Index session texts?***: select **Yes**.
    2. **Enable import of Input text index?***: select **Yes**.
    3. **Enable import of text index Output?***: select **Yes**.
    :::(warning) (**Attention**)
    When enabling the field **Index session texts**, at least one of the fields, input or output, must be enabled to record the texts in the logs. If not, the texts won’t be registered.
    :::
4. Click **Save**.

The system displays a confirmation message. All sessions started after this configuration will have their texts recorded in the session logs.

---
### Next:
[How to configure a remote session (proxy)](/v3-32/docs/pam-session-configure-remote-session-proxy)
[Session text](/v3-32/docs/pam-session-session-text)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.