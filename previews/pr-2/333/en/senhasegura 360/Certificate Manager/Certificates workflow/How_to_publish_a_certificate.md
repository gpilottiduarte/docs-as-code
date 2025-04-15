# How to publish a certificate

Once a certificate is signed, it can be published on the desired device through senhasegura, which will verify the authenticity and integrity of the information and transactions carried out.

<!-- Fix callout -->
:::(Info) (Info)
You can publish certificates only on devices registered in senhasegura.
:::

<!-- Fix callout -->
:::(Info) (Info)
senhasegura supports the following publishing plugins: Apache, Tomcat, Nginx, IIS, Kubernetes, Netscaler, IBM Websphere, F5 BigIP, and Palo Alto. With customization/development, the product is also compatible with JBOSS and Wildfly.
:::

## Requirements

- Only certificates ready to be used. Enable the search field below to filter certificates with this specification:
  - **Status**: select **Valid**.
- Manually imported certificates must include their respective keys. Only certificates with keys will enable the publishing option.

## Publish a certificate

To publish a certificate, follow these steps:

1. In the top left corner, click **Grid Menu**, identified by the nine squares icon, and then **Certificate Manager**.
2. On the side menu, select **Certificates** and then **Certificates**.
3. Locate the desired certificate.
4. In the corresponding **Action** column, click on the three vertical dots icon.
5. Select **Publish Certificate**; this will open the **Publish certificate** form.

### General tab

<!-- Fix link -->
1. Select the **Reason** for publishing the certificate.
2. Select one **Publishing profile**. Depending on the [**Publishing profile configuration**](/v3-33/docs/how-to-set-up-the-publishing-profiles), the chosen profile will automatically fill in several fields on this screen. It’s possible to change the information.
3. If desired, enter a **Justification** for publishing the certificate.

<!-- Fix callout -->
:::(Info) (Info)

1. If you want to use another publishing profile and plugin, check **Create a new publishing profile** and enter the **Publication profile name**. 
2. Next, select which **Publishing plugin** you want to use.

:::

#### Credential for execution section

1. Define which credential will be used to authenticate the devices.
    1. Check **Use a registered credential to access all devices** to enable the credentials drop-down menu.
    2. Select one **Access Credential registered in the system**.

<!-- Fix callout -->
:::(Warning) (Caution)

- If you want a username as a credential, fill in the **Credential username** field.
- The system will find this username in all registered devices to authenticate; therefore, the device must have a credential with the same username you typed here.

:::

#### Configuration for plugin section

<!-- Fix link -->
See the [**Publishing plugins**](/v3-33/docs/publishing-plugins) article if you want more information on how to set the plugin.

### Servers tab

<!-- Fix callout -->
:::(Warning) (Caution)
Ensure that the credential selected in the previous tab can connect to the chosen devices.
:::

1. Add the servers where the certificate should be published.
   1. Click the **plus sign** icon next to the word **Servers**.
   2. In the **Servers** window, locate the desired devices. Use the search fields or the scroll bar.
   3. Check the box on the left next to the code number.
   4. Click **Add**.
2. Click **Publish**.

### Schedule tab (optional)

It’s possible to schedule the time of publication.

1. Set **Enabled** to **Yes**.
2. In the **Date and time of publication** fields, define the day and time to complete the schedule.

<!-- Fix callout -->
:::(Info) (Info)
To view published certificates, go to **Certificate Manager > Publishing**.
:::

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
