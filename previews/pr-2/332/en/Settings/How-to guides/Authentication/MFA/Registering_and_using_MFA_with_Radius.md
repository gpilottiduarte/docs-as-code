## Registering and using MFA with Radius

To access the MFA providers menu:

1. Go to **Settings ➔ Authentication ➔ Multi\-Factor Authentication ➔ Providers**

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-AUD66ULB.png)Creating a multi\-factor authentication provider
2. Click the **⁝**icon, and select the **\+New** option
3. Choose the **Radius** option

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28246%29.png)Provider registration
4. Fill in the following fields on the **Provider registration** screen of the Radius server so that senhasegura can establish communication:

**Provider registration**


	* **Name:** Name to identify the provider in senhasegura
	* **Enabled:**Indicates whether the server is activated or not.**Plugin Settings **Radius****
	* **Hostname**: Server name or IP.
	* **Port:** Communication port number. The field is populated with the default protocol port number
	* **Key:** Radius access key
	* **Timeout(s)\*:**Timeout in seconds
5. Click **Save** to complete
