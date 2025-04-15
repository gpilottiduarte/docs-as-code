# Requisition

This article describes the fields in the **Requisition** form.

<!-- Fix callout -->
:::(Info) (Info)
Path to access: **Certificate Manager > Certificates > Requests > View actions > New**.
:::

## General tab

| Item | Description |
| -- |  -- |
| **Certificate type** | **DV SSL** - domain verification, and validation. **OV SSL** - name, documentation, and address verification. **EV SSL** - comprehensive verification and validation of domain, name, registration, address, and current operations. |
| **Domain type** | **Single domain** - issued to protect a single domain. **Multiple domains** - issued to protect multiple domains under a single certificate. **Wildcard** - issued to protect a primary domain and all its unlimited subdomains. |
| **Organization** | The organization from the Certificate Manager settings. |
| **Common name** | The domain/entity you want to protect with the certificate. |
| **Expiration (in days)** | The period of validity for the certificate. |
| **Generate random certificates with this CN** | It enables the generation of multiple random certificates with the CN. |
| **Certificate quantity** | Definition of how many certificates will be generated from the CN. The maximum number of certificates is 500. |
| **SAN (Subject Alternative Name)** | The SAN extension allows the inclusion of multiple alternative names (domains, subdomains, IP addresses, email identifiers) in a single digital certificate. |
| **Tags**|Identification markers. |
| **Encryption algorithm** | The choice between **RSA** or **DSA** depends on the security needs and standards adopted by the company. |
| **Encryption key size** | The number of bits in the key used by a particular cryptographic algorithm: **1024** bits, **2048** bits, or **4096** bits. |
| **Certificate signing algorithm** | The cryptographic algorithms used to digitally sign digital certificates: **SHA-256**, **SHA-384**, or **SHA-512**. |
| **Store password** | This password restricts certificate viewing only to users with the password. Passwords can have up to 72 characters, including uppercase and lowercase letters, numbers, and the symbols ```! % @ # ^ * _``` |
| **Revocation password** | This password restricts certificate revocation only to users who have the password. Passwords can have up to 72 characters, including uppercase and lowercase letters, numbers, and the symbols ```! % @ # ^ * _``` |
| **Generate a password** | This button generates an instant password for the user. |

## Additional settings tab

The information included in this tab doesn't impact the Certification Authority (CA) but assists in identifying the certificate within senhasegura.

| Item | Description |
| -- | -- |
| **Project** | The name of the certificate project. |
| **External IP** | The external IP of the certificate. |
| **IP or hostname** | The IP or hostname of the certificate. |
| **Reason** | A justification for creating the request (up to 1024 characters). |
| **Description** | A description of the request (up to 512 characters). |
| **Enable signature detailed log** | If checked, it will generate a detailed log. **It only works for Microsoft's CA.** |
| **Self-signed?** | If checked **Yes**, it will pre-set a default signature for the certificate. Only mark 'yes' if you know and trust the device that will sign the certificate. |
| **Choose CA** | It will pre-set the Certification Authority that will sign the certificate. |
| **Responsible for request** | The accountable user for the request. It must be a registered user in senhasegura. |

## Environment tab

| Item | Description |
| -- | -- |
| **Environment** | The environments where the certificate will be applied. |

## System tab

| Item | Description |
| -- | -- |
| **System** | The systems where the certificate will be applied. |

---
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
