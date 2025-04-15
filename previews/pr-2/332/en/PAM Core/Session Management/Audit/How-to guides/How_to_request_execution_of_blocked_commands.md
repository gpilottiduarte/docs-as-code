# How to request execution of blocked commands

This document will guide you through a step-by-step process on how to register a request when you need to use a blocked command.

:::(warning) (**Attention**)
An approver must approve all the requests. The request won't be registered if the user with the approver role doesn’t exist. The platform will display an error message **“There are no registered approvers for this request.”**.
:::
***
## Requirements
* Have a user with an approver’s role.
***

## Register the request

1. On senhasegura, in the upper left corner, click on the **Grid Menu**, identified by the nine squares, and select **PAM Core**.
2. In the side menu, select **Access control** > **Audited commands** > **Command execution request**.

#### Command execution request pop-up window

1. **Command**: command line to be used.
    :::(warning) (**Attention**)
    Using the asterisks **(*)** to capture all possible commands, **won’t work** for this scenario. The commands must be written in full, including the table you want to use the command.
    :::
2. **Device**: IP number or hostname of the device used.
3. **Session type**: the type of session that the command will be used.
4. **Justification**: the explanation of why the user needs to use this command.
5. **Reason**: the reason why the user needs to use this command.
6. **Governance Code**: ITSM software ID (opcional)
7. **Start Access**: request start date and time.
8. **Access end**: request expiration date and time.
    :::(info) (**Info**)
    If some mandatory fields haven’t been filled in, or filled with invalid values, the text box will turn **red**, indicating the error, and won’t be possible to save until the values are correct.
    :::
9. Click on **Save**.

After saving the platform will display a notice: **“You need approval to execute this command. A request has been sent to the approvers.”** To follow up on the request, access the **My execution request** page.

:::(warning) (**Attention**)
The approved command on the request can **be used only once**. Each time that the user needs to run e it, he must register the command request again.
:::
***

## Next:
[My execution requests](/v3-32/docs/pam-session-my-execution-request)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.
