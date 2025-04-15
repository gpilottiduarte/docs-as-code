This tutorial presents a guide on how to integrate senhasegura and Duo. You can use Duo's multi\-factor authentication to log in or start sessions on senhasegura.

## Step 1: Create an application in Duo

### Requirements

* [Duo Security Account](https://duo.com/)

To create an application, follow these steps:

1. Log in to the Duo Admin Panel.
2. On the left sidebar, select **Applications**.
3. Click **Protect an Application**.
4. In the search bar, type **Web SDK**.
5. On the right, click **Protect** to configure the application.
6. Copy the **Client ID**, **Client Secret**, and **API hostname**. You'll need this information to complete the configuration.
7. On the left sidebar, select **Settings**.
8. Enter the **Name** of the application.
9. Click **Save**.



---

## Step 2: Enable External MFA Solution

To enable MFA, follow these steps:

1. In the top\-left corner of the senhasegura platform, click **Grid Menu ⁝⁝⁝**, indicated by the box of nine squares, and select **Settings**.
2. On the left menu, select **System Parameters ➔ Security**.
3. In the **Multi\-factor authentication** section, check **Enable external Multi\-Factor Authentication application**.CautionEnabling this function will deactivate some security mechanisms. The SameSite property will change from "Strict" to "Lax."  
Ensure you have configured a firewall to deny unauthorized site access to your senhasegura server.
4. Close the warning message.
5. Click **Save**.



---

## Step 3: Configure Duo MFA in senhasegura

### Requirements

* [Authentication data from Duo API](https://docs.senhasegura.io/v3-32/docs/user-management-duo-authentication#passo-1-criar-uma-aplica%C3%A7%C3%A3o-no-duo)

To configure Duo in senhasegura, follow these steps:

1. In the top\-left corner of the senhasegura platform, click **Grid Menu ⁝⁝⁝**, indicated by the box of nine squares, and select **Settings**.
2. On the left menu, select **Authentication ➔ Multi\-factor authentication ➔ Providers**.
3. In the top\-right corner, click **V****iew actions**, the icon represented by three vertical dots (⁝).
4. Select **New**.
5. Choose **Duo Security**.
6. In the **Name** field, set the provider's name.
7. Keep **Enabled** as **Yes**.
8. In the **Endpoint** field, fill in the value of the Duo API hostname.
9. In the **Client ID** field, fill in the value of the Duo client ID.
10. In the **Client Secret** field, fill in the value of the Duo client secret.
11. Click **Save**.



---

## Step 4: Configure Duo as the User's MFA

### Requirements

* A direct network connection between senhasegura and Duo Security. Proxies are not supported.
* [Duo mobile app](https://duo.com/product/multi-factor-authentication-mfa/duo-mobile-app#download)
* [DNS configuration](/v3-32/docs/orbit-cli-how-to-configure-dns)

Cautionsenhasegura must have DNS configured and a valid certificate to establish connectivity with the DUO endpoint. The **URL Application** field should also have the instance's DNS in the **Orbit** configuration.To configure Duo as MFA, follow these steps:

1. Log in to your Duo application.
2. Select **Duo Mobile** as the authentication method.
3. Choose your country from the dropdown list.
4. Enter your mobile number.
5. Click **Add phone number**.
6. Click **Yes, it's correct** to confirm your phone number.
7. Click **Next**.
8. Open the Duo Mobile app on your phone.
9. Add the account by scanning the QR code on the screen.
10. Once you receive confirmation that Duo Mobile has been added, click **Continue**.
11. To finish, click **Log in with Duo**.

When accessing senhasegura, you will receive a push notification on your Duo Mobile app to complete the authentication.



---

Do you still have questions? Reach out to the [**senhasegura Community**](https://community.senhasegura.io/).

