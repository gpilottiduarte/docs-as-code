# Session failed due to a website certificate error

In this document, you’ll find a step-by-step guide on how to check the possible issue in a failed certificate session.

## Scenario

An error message will appear when starting an HTTPS session on a website.

---
## Cause

The website has an invalid certificate.

---
## Solution
To proceed with authentication, you’ll need to create a macro and associate it with all device-related credentials configured for the respective web application.

## Step 1 - Create the macro

1. On Segura, in the top left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings** > **Access** > **RemoteApp**.
3. In the upper right corner, click on  the three vertical dots icon and click **+ New**.
4. In the **RemoteApp** registration window, fill in the required fields.
    1. In the **Type*** field, choose the User simulation option.
    2. In the **Macro*** field, configure the script action as shown below:
        1. wait: 15000
        2. kpress: tab
        3. wait: 500
        4. kpress: return
        5. wait: 500
        6. kpress: tab
        7. wait: 500
        8. kpress: tab
        9. wait: 500
        10. kpress: tab
        11. wait: 500
        12. kpress: tab
        13. wait: 500
        14. kpress: return
        15. wait: 1000
5. Click **Save**.

## Step 2 -Associate the created macro with a credential

1. In the side menu select **Credentials** > **All**.
2. In the list of available credentials, in the **Action** column click on the three vertical dots icon, and select **Edit**.
3. In the **Credential** registration window, click on the **Session Settings** tab.
    1. In the **Remote Application Settings** section, click on the **add** icon on the **Automation macro (RemoteApp)** field.
    2. In the **RemoteApp** drop-down menu, choose the macro created in the previous step.
    3. In the **Connectivity** drop-down menu, choose **HTTPS**.
4. Click **Save**.

When returning to the credentials screen, click on the computer icon on the right side of the chosen credential to test if the macro was associated correctly.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.