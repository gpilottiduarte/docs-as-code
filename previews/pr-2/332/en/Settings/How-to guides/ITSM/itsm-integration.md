The requester user can input the **Governance code** into the justification and authorization form. This governance code can be used for evidence or integrated into ITSM solutions.

When integrated with configured ITSM solutions, the senhasegura will first validate with the target ITSM system. The governance code provided grants the user authorization to execute the operation, as shown below:

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28349%29.png)

If the code does not exist or is not valid, the senhasegura will not grant the user request, as in the image below.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28350%29.png)

You can configure the integration into **Settings ➔ System parameters ➔ Integration with ITSM**, and then click on the report action button **\+** **New**.

This report also allows testing every configuration using the **Test authentication** record action.

InfoYou can force the use of a valid **Governance code** by following these steps:

1. Go to **PAM Core ➔ Settings ➔ Access ➔ Access groups.**
2. Click the **View actions** icon  and choose the option  **\+** **New**.
3. In the **Access group registration** window, select the **Settings** tab.
4. Answer **No** to the question: ***Governance ID required when justifying?***

  
