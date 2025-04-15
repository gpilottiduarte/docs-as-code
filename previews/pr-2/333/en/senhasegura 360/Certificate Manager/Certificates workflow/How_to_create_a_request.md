# How to create a request

A request is the process of seeking the issuance of a digital certificate from a Certification Authority. Requisitions are necessary for senhasegura to understand the type of certificate you want and which authority should endorse it. Every requisition includes a CSR (Certificate Signing Request), which shares vital information with the Certification Authority to generate the certificate.

You can create new requisitions from the product or import existing ones. This article explains how to do both actions.

---

## Create a request

To manually create a request, follow these steps:

1. In the top left corner, click **Grid Menu**, identified by the nine squares icon, and then select **Certificate Manager**.
2. On the side menu, select **Certificates** and then **Requests**.
3. In the top right corner, click **View actions** (the three vertical dots icon).
4. Select **New**; this will open the **Requisition** form.
5. In the **General** tab, enter the information:
    1. From the **Certificate type** drop-down, select the desired certificate type.
    2. For **Domain type**, check the desired option.
    3. From the **Organization** drop-down, select an organization and click **Add**.
    4. In **Common name**, type the appropriate name.
    5. In **Expiration (in days)**, set the period for the certificate to remain valid.
    6. In **SAN** (Subject Alternative Name), type all domains to be protected with this certificate.
    7. Add any **Tags** you want.
    8. From the **Encryption algorithm** drop-down, select the encryption algorithm.
    <!-- Fix callout -->
    :::(Info) (Info)
    Remember to choose the appropriate algorithm for your organization's security criteria.
    :::
    9.  From the **Encryption key size** drop-down, select the key size consistent with the algorithm.
    10. From the **Certificate signing algorithm** drop-down, select the algorithm used to sign the certificate through the Certification Authority.
    <!-- Fix callout -->
    :::(Warning) (Caution)
    For added security, consider adding a **Store password** for certificate viewing. The password can have up to 72 characters, including uppercase and lowercase letters, numbers, and the symbols Passwords can have up to 72 characters, including uppercase and lowercase letters, numbers, and the symbols ```! % @ # ^ * _```
    :::
    <!-- Fix callout -->
    :::(Warning) (Caution)
    Although adding a **Revocation password** isn’t mandatory, it’s highly recommended. Certificates issued without this password are subject to unintended revocations by anyone with access to the CA. The criteria for this password are the same as mentioned above.
    :::
6. Click **Save**.

On the **Requests'** main page, you'll see the request you just created.

<!-- Fix callout and link -->
:::(Info) (Info)
Refer to the [Requisition article](/v3-33/docs/certificate-manager-reference-requisition-form) for information on the other form tabs.
:::

---

## Import a request

If you already have a request, you can import it for senhasegura to process and generate the certificate.

To import a request, follow these steps:

1. In the top left corner, click **Grid Menu**, identified by the nine squares icon, and then select **Certificate Manager**.
2. On the side menu, select **Certificates** and then **Requests**.
3. In the top right corner, click **View actions** (the three vertical dots icon).
4. Select **Import request**; this will open the **Import certificate** form.
5. Choose the **CSR File** and the **Key File** from your machine.
    <!-- Fix callout -->
    :::(Info) (Info)
    Although not mandatory, we recommend adding the **Key password** and **Revocation password**. These passwords protect the information and enhance the security of the process.
    :::
6. From the **Certificate signing algorithm** drop-down, select the algorithm used to sign the certificate through the Certification Authority.
7. From the **Certificate type** drop-down, select the desired certificate type.
8. For **Domain type**, check the desired option.
9. From the **Organization** drop-down, select an organization and click **Add**.
10. Click **Save**.

On the **Requests'** main page, you'll see the request you just imported.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
