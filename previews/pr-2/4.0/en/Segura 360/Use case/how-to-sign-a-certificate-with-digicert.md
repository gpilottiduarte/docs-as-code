# How to sign a certificate with DigiCert

This document details the signing process of a DigiCert certificate on **Segura**, since the creation of the certificate authority until the revogation of the certificate.

## Requirements
* A DigiCert account with proper permissions.  
* A credit card valid to buy the certificate.  
* A domain available to validate the certificate.

## Configure DigiCert on Segura
To configure DigiCert on **Segura**, you need your DigiCert user details.

1. Access [DigiCert](https://www.digicert.com), and log in to your account.  
2. Click **Account** > **User** to find your user details, even your username.

## Create a Certificate Authority on Segura
1. On **Segura**, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Certificate Manager**.  
2. In the side menu, select **Configurations** > **Authorities**.  
3. In the **Action** menu, represented by the three vertical dots, select **New**.  
4. In the opened window, choose DigiCert's CA.  
5. In the **username** field, enter your username.

## Generate an API Key
1. Access [DigiCert](https://www.digicert.com/), and log in to your account.  
2. In your **DigiCert** account, go to **Automation** > **API Keys**.  
3. Click **Add API Key** to create a new key to your user.

## Get the Account ID
1. Use the API Key generated on the previous step to access [DigiCert's Account API](https://dev.digicert.com/en/certcentral-apis/services-api.html).  
2. The response of the API will be an `JSON` with your **Account ID**.  
3. Enter the data on **Segura**, filling the Certificate Authority fields with the obtained **API Key** and **Account ID**.  
4. Click **Save**.

## Create an organization on Segura
1. On **Segura**, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Certificate Manager**.  
2. In the side menu, select **Certificates** > **Organizations**.  
3. To create a new organization, click the **Actions** menu, represented by the three vertical dots, and select **New**.  
4. Enter the organization's data, including, at least, one contact in the **Contacts** tab, this information will be used afterwards.  
5. Save the settings.

## Generate a Certificate Signing Request (CSR)
1. On **Segura**, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Certificate Manager**.
2. In the side menu, select **Certificates** > **Requests**.
3. To create a new CSR, click **New**.
4. Enter the following certificate information:  
    1. **Type of certificate**.  
    2. **Type of domain**.  
    3. **Organization**: Select the organization created previously. (For example: MT4 Tecnologia LTDA).  
    4. **Common Name**: Enter the domain to be protected by the certificate. (For example: `www.yourdomain.com`).   

    :::(Warning) (Caution)
    This domain must be accessible on the Internet for validation purposes. 
    :::
    
    5. **Expiration** (in days): For test purposes, select the 7 days options to reduce costs.  
    6. **Encryption algorithm**: Choose between RSA and DSA. For this example, we will use RSA.  
    7. **Length of the cryptographic key**: Choose between **4096**, **2048**, and **1024**. For this example, we will use **4096**.  
    8. **Certificate Signature Algorithm**: Choose between **SHA256**, **SHA384**, and **SHA512**. For this example, we will use **SHA256**.  

    :::(Info) (Info)
    Data related to the RapidSSL Standard DV certificate valid for up to 7 days costs $1.13.  
    :::
    
    9. **Additional configuration**: Select the option to use the previously created CA.  
5. Save all configurations.

## Add funds in DigiCert
1. In your DigiCert account, access your financial section in **Finances** \> **Deposit Funds**.  
2. Add funds.  
3. Select the desired certificate type.  
4. Enter the required value.  

:::(Info) (Info)
The RapidSSL Standard DV certificate valid for up to 7 days costs $1. 
:::

5. Enter your credit card data, and click **Submit**.

## Sign CSR
1. On **Segura**, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Certificate Manager**.  
2. In the side menu, select **Certificates** > **Requests**, and find the CSR created previously.  
3. Click the **Actions** menu, represented by the three vertical points, and request the CSR sign by clicking **Request signature**.  
   1. In the **General** tab, enter the system data.  
   2. In the **Additional information** tab, enter the CA information to sign the certificate.  
   3. Choose the desired type of domain validation. (For example: DNS TXT).  
   4. Click **Save**.  
4. **DigiCert** will generate a request, and the certificate will be as **Waiting Signature**.

## Validate the domain
1. In your **DigiCert** account, access the buying order in **Certificates** > **Orders**. 
2. Find the order, and click the number of your buying order.  
3. Go to **Prove control over domains**.  
4. **DigiCert** will generate a unique `TXT` code to validate your domain. Copy this code.  
5. Create a new `TXT` in your domain.  
6. Access the DNS configurations in your domain.  
7. Create a new `TXT` registry with the code from the previous step.  
8. Wait for the DNS propagation.  

:::(Info) (Info)
The DNS propagation can take some time to finish. 
:::
    
9. Verify the domain.  
10. In the **DigiCert** page, click **Check site** so **DigiCert** validates your domain.  
11. Wait for the certificate to be issued.

After the validation of your domain, the certificate will be issued by **DigiCert**, and will be available on Segura after a couple of minutes.

## Revoke the certificate (if necessary)
1. On **Segura**, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Certificate Manager**.  
2. In the side menu, select **Certificates** > **Action** > **Revoke certificate**, and find the certificate you want to revoke.  
3. A request will be sent to **DigiCert**.

## Approve the revoke request in DigiCert
1. In your DigiCert account, and go to **Certificates** > **Requests**.  
2. You will see a revoke request pending.  
3. Approve the request to revoke the certificate.  
4. After approval, the status of the certificate on Segura will be changed to **Revoked**.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).  
