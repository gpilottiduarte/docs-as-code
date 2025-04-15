## Overview

If the setting **Enable multifactor authentication on login** is enabled in the parameters screen, and the linked user has an MFA token configured in senhasegura, that user either logs into the workstation or accesses the workstation via RDP connection, the application will request the MFA token.

CautionThe time of the senhasegura server and the workstation must be synchronized.

---

## How to enable the token MFA

1. Go to the senhasegura platform.
2. Access **GO Endpoint Manager ➔ Settings ➔ Parameters ➔ go Windows.**
3. Go to the **Authentication**section.
4. Check the **Enable multifactor authentication on login** as **Yes.**
5. Enable the **token MFA** for your user.



---

## Configure token MFA OTP

1. Go to the **senhasegura**platform.
2. Click on your username.![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1672683502094.png)Configure MFA
3. Click on **Configure MFA.**
4. Select **Yes.**
5. Choose the **OTP**option.
6. Open your authenticator application.
7. Add a new account by scanning the **QR code** on the screen.
8. Click on **click here** to validate it on the same screen.
9. Type the **MFA token** of your authenticator application
10. Click on **Validate.**

## Use token on workstation login

1. Start the workstation.
2. Fill in your **username**.
3. Fill in the **Token** generated in your authenticator application.
4. Click **Sign in**.

InfoWhen **Enable multifactor authentication at login?**is enabled, your user photo is changed at the login screen.   
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%20(28)(1).png)Windows user login using Token   

  


  


