# How to activate the Segura license

This article provides a how-to guide on activating the Segura license.


## Requirements

* Access to the Affinity portal.

::: (info) (Info)
The Affinity portal is exclusively intended for Segura partners, with access restricted to them.
:::

## Activate the Segura license
To activate the Segura license, follow these steps:

1. Open your web browser (Chrome, Firefox, or Edge).
2. Enter the Segura instance IP into the browser's address bar. This will redirect you to the activation screen.
3. Once on the activation screen, an activation code will be displayed. Copy this code to proceed.
4. Open a new browser window and access the [Affinity portal](https://affinity.senhasegura.io/flow/auth/signin).
5. Use your credentials to log in.
6. After successful authentication, go to **Activation > Activation > Request Activation Code**.
7. Fill in the required fields in the activation form:
    * **Hostname or server IP**: use the information defined in your Segura instance.
    * **License**: select the desired license.
    * **Expiration days** *: this field is only valid for *Proof of concept Environments* and defines the validity of the license.
    * **Environment**: select between *Proof of concept*, *Production*, *Contingency*, and *Acceptance*.

:::(info) (info)
The licensing terms for Segura are determined by the contractual agreement between the client and MT4 Technology. It's crucial to understand that this license directly impacts the capacity to add users and devices to the application.
:::

8. Paste the activation code you copied in step 3 into the **Request code** field.
9. Select the Segura modules that you want to be available in this instance.
10. Click **Generate Activation Key** to initiate the generation of a license code. 

:::(Info) (info)
As long as the purchased support contract remains active, the latest version of the purchased product will always be provided and activated, regardless of the originally contracted version. The generated license is tied to the duration of the contract and the machine on which it was activated, not to the software version. This ensures that the acquired version does not reach its end of life (END OF LIFE).
:::

11. Copy the license code generated in the **Activation code** field and paste it into the activation screen of your Segura instance.
12. After entering the license code, click **Activate Application**.

::: (warning) (Caution)
After entering the activation key, ensure you click the **Activate Application** button only once. Clicking it accidentally without a valid license filled will result in the application being inactivated, requiring you to repeat the license activation process.
:::

:::(info) (Info)
You’ll receive a detailed summary of the license, including information such as the requester's name, the start date of the license's validity, expiration date, automatic block settings, and the instance's modules, among other details.
:::

Once you’ve successfully followed these steps, your Segura license will be active, and the selected modules will be available for your instance. With the license activated, you can enable and use the Segura application.

## Activate the Segura license with Multi-Tenant

If you’re using Segura Multi-Tenant (available on all Segura instances from version 3.33 onwards), you can activate the license using the following path: **Grid Menu \> Settings \> Application activation**.

Please note that this option is a shortcut to the same feature found in **Grid Menu \> Orbit Server Manager \> Application activation**. However, this shortcut will only be available after completing the initial activation process that is required post-installation.

* * *
Do you still have questions? Reach out to the [Segura Community](https://community.senhasegura.io/){target=`_blank`}.