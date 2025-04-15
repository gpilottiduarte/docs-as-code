# How to configure session texts

This document provides a step-by-step guide on how to configure a session to record the input and/or output texts in a log. 

## Requirements

* Be an administrator user.

---
## Configure text logging
:::(warning) (**Caution**)
Using this feature requires a large amount of machine resources.
:::

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Settings** > **System Parameters** > **Global**.
    :::(info) (**Info**)
    This configuration can also be carried out in **Segregated**, at **Recording** tab, of any type of segregation created.
    :::
3. On the **Remote Session** tab, go to the **Recording** section and enable the fields:
    1. **Indexing session texts?***: select **Yes**.
    2. **Enable input text index import?***: select **Yes**.
    3. **Enable output text index import?***: select **Yes**.
    :::(warning) (**Attention**)
    When enabling the field **Indexing session texts**, at least one of the fields, input or output, must be enabled to record the texts in the logs. If not, the texts won’t be registered.
    :::
4. Click **Save**.

The system displays a confirmation message. All sessions started after this configuration will have their texts recorded in the session logs.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.