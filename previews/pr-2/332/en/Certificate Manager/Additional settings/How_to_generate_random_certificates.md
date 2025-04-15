# How to generate random certificates

In this article, you’ll learn how to generate random certificates. The Certificate Manager provides the convenience of creating multiple CSR (Certificate Signing Requests) with random Common Names (CNs) and then signing them all at once. The ability to generate certificates with random CNs is especially valuable in microservices and elastic environments, as it simplifies certificate lifecycle management.

## Step 1: Create a request
To create a request with random certificates, follow these steps:

1. In the top left corner, click **Grid Menu**, identified by the nine squares icon, and then select **Certificate Manager**.
2. On the side menu, select **Certificates** and then **Requests**.
3. In the top right corner, click **View actions** (the three vertical dots icon).
4. Select **New**; this will open the **Requisition** form.
5. In the **General** tab, enter the information:
    1. From the **Certificate type** drop-down menu, select the desired certificate type.
    2. For **Domain type**, check the desired option.
    3. From the **Organization** drop-down menu, select an organization and click **Add**.
    4. In **Common name**, type the appropriate name.
    5. In **Expiration (in days)**, set the period for the certificate to remain valid.
    6. Enable the **Generate random certificates with this CN** checkbox.
    7. In **Certificate quantity**, set a number. The limit is 500 random certificates.
    8. In **SAN (Subject Alternative Name)**, type all domains to be protected with this certificate.
    9. Add any **Tags** you want.
    10. From the **Encryption algorithm** drop-down menu, select the encryption algorithm.
    11. From the **Encryption key size** drop-down menu, select the key size consistent with the algorithm.
    12. From the **Certificate signing** algorithm drop-down menu, select the algorithm used to sign the certificate through the Certification Authority.
    13. Add the desired passwords.
:::(Info) (Info)
The passwords can have up to 72 characters, including uppercase and lowercase letters, numbers, and the symbols `! % @ # ^ * _ `.
:::
9. Click **Save**.

On the **Requests** main page, the new request will be listed, and in the **Random Certificates** column, you will  find the configured number of certificates.
* * *
## Step 2: Sign the request
To perform this action, access the article on [How to sign a request](/v3-32/docs/certificates-flow-how-to-sign-request).

After you sign the request, the system will process and sign the certificates. The processing time may vary depending on the number of random certificates requested.

* * *

## Step 3: Find signed random certificates
To find signed random certificates, there are two ways:

1. On the **Requests** main page, click on the number indicating the quantity of certificates in the **Random Certificates** column. 
2. All requests will be listed individually. 
3. In the **Status** column, you’ll see requests changing from ‘Generating’ to ‘Signed’. 
4. In the **Action** column, click on **Certificate info** (the ID card icon) to view the random certificate generated from the CN. 

Or

1. On the left sidebar menu, select **Certificates**.
2. On the main page of the item, all generated random certificates will be listed individually.

* * *
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.