# Error connecting the Segura app to MySafe

This document provides guidance on resolving common issues when trying to connect the **Segura** mobile app to **MySafe**. Each issue is described with an error message, possible causes, and recommended solutions. Follow the step-by-step instructions to troubleshoot the problem.

## **Problem overview**

| Problem  | Error message  | Main cause | Solution  |
| :---- | :---- | :---- | :---- |
| Problem 1 | “It’s not possible to reach your Segura instance, please make sure you’re connected to internet and have access to your Segura instance.” | No connection to the Segura server. Incorrect configuration of the base URL in **MySafe**.  | [Solution 1 ](/v4/docs/error-connecting-the-Segura-app-to-mysafe#solution-1-verify-connection-to-Segura) [Solution 2](/v4/docs/error-connecting-the-Segura-app-to-mysafe#solution-2-review-system-settings-and-access-permissions)   |
| Problem 2 | “An unexpected error occurred, please try again in a few moments or contact our support team.” | Incorrect URL configured in **Orbit Server Manager.**  | [Solution 3](/v4/docs/error-connecting-the-Segura-app-to-mysafe#solution-3-check-settings-in-orbit-config-manager)  |
| Problem 3 | “Invalid code” | Application incorrectly created as **Extension** type.    |[Solution 4](/v4/docs/error-connecting-the-Segura-app-to-mysafe#solution-4-check-the-created-application-type)   |

## Solutions

### Solution 1: Verify connection to Segura

Ensure that the device has a stable connection to the Segura server.

**Step completion**: after checking the connection stability, try connecting the **Segura** app to **MySafe** again. If the error persists, proceed to the next solution.



### Solution 2: Review system settings and access permissions

* **Prerequisites**: Segura instance administrator permission.

:::(warning) (**Attention**)  
Ask the administrator to check system settings and your access permissions.   
:::

1. In the **Products** **menu**, access **Settings \> System parameters \> Global \> Access control.**  
2. In the **Mobile app** section, enable the **Allow use by all users\*** and define the need to **Require device approval\*.**  
3. Next, in the **Products** **menu**, access **MySafe \> Global administration \> Sharing options**.   
   1. Enter an email for notifications related to **MySafe**.   
   2. In **Base URL**, enter the **MySafe** vault URL without the `https://`.   
      **Example:** `company.mt4.com`

   :::(info) (**Info**)

   The other fields on this screen are related to the **External sharing** feature, available only for the web version. More information in [How to configure MySafe](/v4/docs/how-to-configure-mysafe).

   :::

**Step completion:** after configuring the base URL, try connecting the **Segura** app to **MySafe** again. If the error persists, proceed to the next solution.

### Solution 3: Check settings in Orbit Server Manager

* **Prerequisites**: Segura instance administrator permission.

:::(warning) (**Attention**)  
Ask the administrator to check the **Orbit Server Manager** settings.   
:::

1. In **Orbit Server Manager**, access **Settings \> Application.**  
2. Check if the **application URL** is configured correctly.   
   1. If necessary, click **Edit** in the upper-right corner and adjust the URL.

**Step completion:** after correcting the application URL, try connecting the **Segura** app to **MySafe** again. If the error persists, proceed to the next solution.

###  Solution 4: Check the created application type

1. In **MySafe \> My apps**, click **Add**.  
2. In **Application type\*,** select **Mobile app.**  
3. Click **Save**.

:::(error) (Alerta)  
If the **Application type\*** option isn’t available, you don’t have permission to use the **Segura** app, and the generated QR code will only be valid for the **extension**. Request authorization from the administrator to use the **mobile app**.  
:::

**Step completion:** after checking and correcting the application type, try connecting the **Segura mobile app** to **MySafe** again.
If the error persists after following the instructions, contact technical support for further assistance.
