# How to publish SSL certificates on Apache servers

In this document, you will learn how to publish and install an SSL certificate, managed by senhasegura's **Certificate Manager**, on Apache servers.

## Requirements

* Apache server with SSL parameters activated, without a registered SSL certificate.
* SSL certificate, generated and signed by a Certificate Authority (CA).
* A credential registered in senhasegura **PAM**, with *superuser* (administrator) access, especially reading, writing and executing the directories `/var/www`, `/etc/ssl/private` and `/etc/ssl/ private` on the Apache server.

## Step by step

To publish an SSL certificate managed by senhasegura on Apache servers, you must:

1. Register the server's IP address or domain as a **credential** in senhasegura **PAM**.
2. Register the certificate in senhasegura **Certificate Manager**.
3. Configure the publishing profile in senhasegura **Certificate Manager**.
4. Publish the certificate in senhasegura **Certificate Manager**.

Follow the details of each step of the process below:

## 1. Register server address as a senhasegura **PAM** credential

To register the server address as a credential in the senhasegura **PAM**, follow the steps indicated in the document [How to configure a device](/docs/pt/pam-devices-management).

## 2. Register the certificate in Certificate Manager

To register an SSL certificate in the **Certificate Manager** of senhasegura, follow the steps indicated in the document [How to import a certificate](/docs/pt/certificates-flow-how-to-import-certificate).

## 3. Configure publishing profile in Certificate Manager

1. In senhasegura, access the profiles page, using the path **Grid menu** > **Certificate Manager** > **Settings** > **Publication profiles**. Click on the three vertical dots and select the **New** option.
2. In the **Settings** tab, define a name for the new profile in the **Profile name*** field.
3. Select the Apache option in the **Publishing Plugins*** field
4. Check the option **Use a registered credential to access all devices**.
5. In the **Registered system access credential** field, select the credential created (server address) previously in senhasegura **PAM**.
6. In the site field, type the name of the server configuration file. Example: `default-ssl.conf`.
7. In the **Configuration file path** field, write the full file path, along with the file name. Example: `/etc/apache2/sites-available/default-ssl.conf`.
8. In the **Port** field, write which port the server is operating on.
9. In the **Servers** tab, click the plus button, represented by the sum icon.
10. In the window to create a server, select the device corresponding to the Apache server, in the **Device name** field.
11. Select the *checkbox* for the device.
11. Click the **Add** button.
9. Click the **Save** button.

## 4. Publish the certificate to Certificate Manager

1. Insenhasegura, access the list of certificates registered in **Certificate Manager**, through the path **Grid Menu** > **Certificate Manager** > **Certificates** > **Certificates**.
2. Find the desired certificate and click on the three vertical dots.
3. Select the **Publish certificate** option.
4. In the **Publish certificate** window, fill in the **Reason*** fields, select the profile previously created in **Publication Profile** and write a **Justification**. The fields relating to the server will be automatically filled in when selecting the publication profile.
5. Click the **Publish** button.
To follow the process and status of the certificate, access the path **Grid Menu** > **Certificate Manager** > **Publishing**.