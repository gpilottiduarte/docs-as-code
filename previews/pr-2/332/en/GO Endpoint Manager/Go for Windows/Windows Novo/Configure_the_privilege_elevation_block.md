When the **Block elevation of privilege** parameter is enabled, any attempt to run an application on the access list and not performed by GO Endpoint Manager will be blocked. Even if they are not elevated of privilege.

## Configure the privilege elevation block

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager ➔****Settings ➔****Parameters ➔****go Windows.**
3. At **B****lock elevation of privilege?,**choose **Yes**.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1672679266459.png)Privilege lock parameter CautionIf the **Block user** option is set to**Yes**, the user who tries to elevate an application exceeding the defined number of **Occurrences**will be blocked and unable to access the senhasegura platform. This process generates and sends blocking events to the senhasegura platform.



---

## View events blocked

1. Access the senhasegura platform.
2. Navigate to **GO Endpoint Manager ➔ Reports****➔ Windows****➔ Events****.**
3. Choose the option **Elevation of Privilege blocked** at **Event**.
4. **Filter**.
