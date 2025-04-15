# How to import a certificate

This article explains how to import a certificate that already exists in your organization, and you want senhasegura to manage it.

## Requirements

* A certificate file.
* A key file, if the certificate has the key.

## Import a certificate

<!-- Fix callout -->
:::(Info) (Types of certificates)
You can manually add a variety of certificate types, including .cer, .pfx (Private key included, no need to import the key), .p7b, .crt, .der, .p12, .pem.
:::

To manually import a certificate, follow these steps:

1. In the top left corner, click **Grid Menu**, identified by the nine squares icon, and then select **Certificate Manager**.
2. On the side menu, select **Certificates** and then **Certificates**.
3. In the top right corner, click **View actions** (the three vertical dots icon).
4. Select **Import certificate**.
5. Choose a **Certificate file** from your machine. This is the only mandatory field.
6. If your certificate has a separate key file, also select the corresponding **Key file**.
7. If you'd like your certificate to have a password for the key, enter it in the **Key password** field while you're importing it. You won't be able to add this information later.
<!-- Fix callout -->
:::(Warning) (Caution)
Although adding a **Revocation password** isn't mandatory, it's highly recommended. Certificates lacking this password can be revoked unintentionally by anyone with access to the CA.
:::

<!-- Fix callout -->
:::(Info) (Info)
Both passwords can be up to 72 characters long, including uppercase and lowercase letters, numbers, and the symbols ```! % @ # ^ * _``` .
:::
8. If you prefer, insert the information from the certificate you are importing into an existing one. Click the **Use as information for an existing certificate** field and wait a moment for senhasegura to display the certificate, and you can select it.
    a. Select the desired certificate.
9. Click **Save** to confirm the import.

On the **Certificates'** main page, you'll see the certificate you just imported.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
