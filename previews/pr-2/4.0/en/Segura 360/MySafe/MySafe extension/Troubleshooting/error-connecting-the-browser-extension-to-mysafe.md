# Error connecting the browser extension to MySafe

This document provides guidance on resolving common issues when trying to connect the **browser** **extension** to **MySafe**. Each issue is described with an error message, possible causes, and recommended solutions. Follow the step-by-step instructions to troubleshoot the problem.

## Problem overview

| Problem  | Error message  | Main cause | Solution  |
| :---- | :---- | :---- | :---- |
| Problem 1 | “It’s not possible to reach your Segura instance, please make sure you’re connected to internet and have access to your Segura instance.” | No connection to the Segura server. Incorrect configuration of the base URL in **MySafe**. Self-signed certificate on the Segura server. | [Solution 1](/v4/docs/error-connecting-the-browser-extension-to-mysafe#solution-1-verify-connection-to-Segura-solution1-verifyconnectiontosenhasegura) [Solution 2](/v4/docs/error-connecting-the-browser-extension-to-mysafe#solution-2-review-system-settings-solution2-reviewsystemsettings) [Solution 3](/v4/docs/error-connecting-the-browser-extension-to-mysafe#solution-3-configure-the-browser-for-selfsigned-certificates)  |
| Problem 2 | “An unexpected error occurred, please try again in a few moments or contact our support team.” | Incorrect URL configured in **Orbit Server Manager.**  | [Solution 4](/v4/docs/error-connecting-the-browser-extension-to-mysafe#solution-4-check-settings-in-orbit-config-manager-solution4-checksettingsinorbitconfigmanager)   |
| Problem 3 | “Invalid code” | Application incorrectly created as **mobile app** type.    | [Solution 5](/v4/docs/error-connecting-the-browser-extension-to-mysafe#solution-5-check-the-created-application-type-solution5-checkthecreatedapplicationtype)    |

## Solutions

### Solution 1: Verify connection to Segura 

Ensure that the device has a stable connection to the Segura server.

**Step completion**: after checking the connection stability, try connecting the **extension** to **MySafe** again. If the error persists, proceed to the next solution.



### Solution 2: Review system settings 
* **Prerequisites**: Segura instance administrator permission.

:::(warning) (**Attention**)  
Ask the administrator to check system settings and your access permissions.   
:::

1. In the **Products** **menu**, go to **MySafe \> Global administration \> Sharing options**.   
   1. Enter an email for notifications related to **MySafe**.   
   2.  In **Base URL**, enter the **MySafe** vault URL without the `https://`.   
      **Example:** `company.mt4.com`

   :::(info) (**Info**)
    The other fields on this screen are related to the **External sharing** feature, available only for the web version. More information in [How to configure MySafe](/v4/docs/how-to-configure-mysafe).
    :::

**Step completion:** after configuring the base URL, try connecting the **browser extension** to **MySafe** again. If the error persists, proceed to the next solution.

### Solution 3: Configure the browser for self-signed certificates

1. If the Segura server is using a self-signed certificate, close the browser and launch it with the `--ignore-certificate-errors` flag.  For example, if you’re using Google Chrome, launch the browser with `chrome.exe --ignore-certificate-errors`.


**Step completion:** after restarting the browser with the correct configuration, try connecting the **browser extension** to **MySafe** again. If the error persists, proceed to the next solution.

### Solution 4: Check settings in Orbit Server Manager 

* **Prerequisites**: Segura instance administrator permission.


:::(warning) (Attention)  
Ask the administrator to check the **Orbit Server Manager** settings.   
:::

1. In **Orbit Server Manager**, go to **Settings \> Application.**  
2. Check if the **application URL** is configured correctly.   
   1. If necessary, click **Edit** in the upper-right corner and adjust the URL.

**Step completion:** after correcting the application URL, try connecting the **browser extension** to **MySafe** again. If the error persists, proceed to the next solution.

###  Solution 5: Check the created application type 

1. In **MySafe \> Mys apps**, click **Add**.  
2. In **Application type\*,** select **Extension.**  
3. Click **Save**.

**Step completion:** after checking and correcting the application type, try connecting the **browser extension** to **MySafe** again.
If the error persists after following the instructions, contact technical support for further assistance.
