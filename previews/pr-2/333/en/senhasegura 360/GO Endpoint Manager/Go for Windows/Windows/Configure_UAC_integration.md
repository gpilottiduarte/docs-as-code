GO Endpoint Manager integrates with UAC authentication in cases where an application needs to elevate the privilege on demand. In these cases, besides the Windows authentication options, the GO Endpoint Manager logo will be displayed.

You must type select which credential from senhasegura you want to use to perform the elevation. If the user has an MFA token configured, he must also enter the token in a second step.

Being fully integrated into Windows, the entire process is clear to the user.



---

## Configure UAC integration

1. Access the senhasegura platform.
2. [Register the User Token.](https://docs.senhasegura.io/v3-33/docs/en/go-endpoint-manager-windows-token-mfa-otp#configure-token-mfa-otp)
3. Access **GO Endpoint Manager ➔****Settings ➔****Parameters ➔ go Windows.**
4. Check **Enable****UAC****integration?** as**Yes****.**

CautionThe elevation process through UAC is not registered in the senhasegura events.



---

## Use a credential through UAC

1. Start the application that requires administrative privileges on the user's workstation.
2. At the user selection window, choose senhasegura.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1677783141980.png)Run as a different user 

 3\. Enter the name of the senhasegura credential you want to use to perform the elevation.

 4\. Click**Yes**to confirm

 5\. If multi\-factor authentication is enabled, enter the token in a second step. 

  
  


