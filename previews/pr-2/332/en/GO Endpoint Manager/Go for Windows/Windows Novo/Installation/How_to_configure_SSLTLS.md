# How to configure SSL/TLS

Windows Server 2008 R2 SP1 and Windows 7 environments require special conditions for installing **GO Endopoint Manager for Windows**, in addition to [conventional requirements](/v3-32/docs/go-endpoint-manager-windows-requirements-legacy).

This article is a step-by-step configuration guide for this scenario.

* * *

## How to configure SSL/TLS

SSL SUITES must be configured correctly to create a secure SSL/TLS connection for HTTPS requests between the client and the senhasegura platform. To configure it, follow these steps:

1. Open the command prompt and run `gpedit.msc`.
2. Select **Administrative Templates > Network > SSL Configuration Settings**.
3. Open the **SSL Cipher Suite Order**.
4. Select **Enabled**.
5. Paste the list of suites below into the text box, making sure there are no spaces.
```
TLS_DHE_RSA_WITH_AES_256_GCM_SHA384,TLS_DHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384_P256,TLS_DHE_RSA_WITH_AES_256_CBC_SHA,TLS_DHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256_P256,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256_P256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384_P384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256_P256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384_P384,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA_P256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA_P256,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA_P256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA_P256,TLS_DHE_DSS_WITH_AES_128_CBC_SHA,TLS_DHE_DSS_WITH_AES_256_CBC_SHA
```
6. Click **Apply**.
7. Restart the server.

Now, requests between the agent and the senhasegura platform have a reliable SSL/TLS connection. Windows Server 2008 R2 SP1 and Windows 7 environments are ready to receive the **GO Endpoint Manager for Windows** installation.

* * *

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.