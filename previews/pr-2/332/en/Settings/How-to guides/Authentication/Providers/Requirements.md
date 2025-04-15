This guide intends to show how you can use your ADFS (Active Directory Federation Services) server to make a single sign\-on with senhasegura.

## Requirements

* [Enable SAML Auth Provider](/v3-32/docs/user-management-saml-2-0)
* [Windows server running ADFS](/v3-32/docs/user-management-sso-with-adfs)



---

## Create an ADFS provider

SAML Authentication is necessary to create an SSO (single sign\-on) using Windows ADFS and senhasegura.

Go to **Settings ➔ Authentication ➔ SAML ➔ Providers**:

1. Inside the SAML provider screen, select `⋮` and `+ New provider`

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28188%29.png)SAML Provider Form 

  


2. Select ***SAML provider*** as **Type**
3. Leave **Enable** as *Yes*
4. Type the **Entity ID**. It must be one of the [relying party identifiers](/v3-32/docs/user-management-sso-with-adfs) created in your Windows ADFS server.

CautionPay attention to upper and lower cases. The **Entity ID** must be the same as shown in your Windows ADFS server.  
Try to avoid using https:// for your relying party identifiers.
5. Insert your [ADFS metadata url](/v3-32/docs/user-management-sso-with-adfs#adfs-metadata-url). It should be similar to the example below:  
`https://windowsadfs.company.com/FederationMetadata/2007-06/FederationMetadata.xml`
6. In **Domain or public IP for URL Redirection**, type your senhasegura url. For example:  
`https://mysenhasegura.company.com`
7. In the URL configuration, type the ***Login*** and ***Logout*** [ADFS Endpoints](/v3-32/docs/user-management-sso-with-adfs) URL. For example:  
`https://windowsadfs.company.com/adfs/ls`
8. Set the **Redirect binding type** to **POST**
9. Click**Save**



---

### Create a new Relying Party Trust for senhasegura

1. Go to your Windows ADFS server and run the program "AD FS Management"

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28189%29.png)

2. Right click ***Relying Party Trust*** and choose ***Add Relying Party Trust...***

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28190%29.png)

3. Select **Claims aware**
4. Select **Enter data about the relying party manually**
5. Define a **Display name**
6. In both fields: **Enable support for the WS\-Federation Passive protocol** and **Enable support for the SAML 2\.0 WebSSO protocol**, add the Redirect URL provided to you in the **SAML provider registration**

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28191%29.png)

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28192%29.png)

7. Add a **Relying party trust identifier**. We are using "**senhasegura**" in this example.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28193%29.png)

8. Finish and close.

#### ADFS Claim Issuance Policy

In some scenarios, depending on how you have your users in senhasegura, you might need to change the **Claim Issuance Policy**. In this example, senhasegura users have a username with `name@company.com`

1. Go to your Windows ADFS server and run the program "AD FS Management"
2. Right click in the **Relying Party Trust** used for senhasegura
3. Click **Edit Claim Issuance Policy...**
4. Create a rule for the name

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28194%29.png)

5. Create a rule for the email

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28195%29.png)

### ADFS Entity ID

To find your ADFS Entity ID, you must:

1. Go to your Windows ADFS server and run the program "AD FS Management"
2. Right click in the **Relying Party Trust** used for senhasegura
3. Click **Properties**
4. Select the **Identifiers** tab
5. Use one of the **Relying party identifiers** or add a new one.

### ADFS Metadata URL

To find your ADFS metadata URL:

1. Open *PowerShell*
2. Execute the following command:


```
(Get-ADFSEndpoint | where Protocol -eq "Federation Metadata").FullUrl | Select AbsoluteUri

```
Output


```
AbsoluteUri
-----------
https://windowsadfs.company.com/FederationMetadata/2007-06/FederationMetadata.xml

```

### ADFS URLs Configuration

To find your ADFS URL configuration, you must go to your Windows ADFS server:

1. Open *PowerShell*
2. Execute the following command:


```
Get-ADFSProperties | Select FederationPassiveAddress

```
Output


```
FederationPassiveAddress
------------------------
/adfs/ls/

```
3. Use the **FederationPassiveAddress**, then your ADFS URL configuration should be:

`https://windowsadfs.company.com/adfs/ls/`
