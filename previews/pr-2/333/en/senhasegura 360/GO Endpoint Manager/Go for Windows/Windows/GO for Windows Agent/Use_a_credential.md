The application enables the cache of credentials, viewing, and copying of credentials. These actions are equivalent to using a proxy, preview, or copy through the web interface. All these actions will be audited and forwarded via SIEM.

When opening the application, it displays the following image:

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1674593130660.png)Vault initial screen 

* In the top left corner is the search bar.
* In the top right corner is the **Refresh** button.
* Below the Search bar, you have the titles:
	+ **User:** the default credential for privilege elevation actions inside and outside the **Vault**.
	+ **Domain:** the name of the domain of the device.
	+ **Device:** the device associated with the credential.

If the default credential has no domain registered, the machine name will be displayed instead.

---

## Use a credential

**Vault** users are always linked to their accounts used to log into Windows.

CautionThe workstation username must have an equivalent user in the senhasegura platform. If you are not sure about the username, read the article [Requirements](https://docs.senhasegura.io/v3-33/docs/go-endpoint-manager-windows-requirements).1. Access the user's desktop.
2. Start **Vault**.
3. Select the credential you want to use from the list of credentials.
4. Right\-click on the automation.
5. Click **Copy** or **Show** to access the password.



---

## Use a credential in case of unavailability

In cases of unavailability of the senhasegura platform. The Vault stores the user and password credentials locally. It is encrypted and keeps the information from the last update. So the user can view and copy the credentials and password.

1. Access the senhasegura platform.
2. Go to **GO Endpoint Manager➔Settings➔Parameters➔go Windows.**
3. In modules, activate the option **“Enable credentials?”.**
4. Click on **Save.**
5. Access the user's workstation, and follow the steps to [use a credential](https://docs.senhasegura.io/v3-33/docs/en/go-endpoint-manager-windows-agent-vault#use-a-credential).

CautionThis feature does not work in conjunction with offline mode.  


  




---

## Configure Token requests to view or copy credential

1. Access the senhasegura platform.
2. [Configure MFA OTP token.](https://docs.senhasegura.io/v3-33/docs/en/go-endpoint-manager-windows-token-mfa-otp#configure-token-mfa-otp)
3. Go to **GO Endpoint Manager➔Settings➔Parameters➔Security.**
4. Check the option **Force Multi\-Factor Authentication to view password?\*** or **Force Multi\-Factor Authentication to login?\*** to **Yes.**
5. The user will be prompted to fill in a token to copy or view the credential.



---

## Configure verification of local privileged credentials

1. Access the senhasegura platform.
2. Access the menu **GO Endpoint Manager➞Settings➞Parameters➞go Windows.**
3. Go to the **Report** section.
4. Check the option **Enable local privileged credentials checking?.**
5. Set days and times for execution.
6. Click **Save.**



---

## Learn more

* [Synchronizing politics or credentials](/v3-33/docs/go-endpoint-manager-windows-agent-core#synchronizing-politics-or-credentials)
* [Language settings](/v3-33/docs/go-endpoint-manager-windows-agent-core#language-settings)
