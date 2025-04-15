# About Encryption keys - Terminal Proxy

The Segura proxy system makes connections through protocols SSH or Telnet.

:::(warning) (**Attention**)
When using the Telnet protocol the connection from the vault to the device doesn’t use encryption, there’s only encryption when access is made from the user's station to the safe.
:::

### User’s workstation for the vault:
Segura supports the following encryptions:

#### Ciphers:

* Poli1305.
* AES256-GCM.
* AES128-GCM.
* AES256-CTR.
* AES192-CTR.
* AES128-CTR.

#### MACs:

* hmac-sha2-512-etm.
* hmac-sha2-256-etm.
* hmac-sha2-512.
* hmac-sha2-256.

#### KexAlgorithms:

* curva25519-sha256.
* ecdh-sha2-nistp521.
* ecdh-sha2-nistp384.
* ecdh-sha2-nistp256.
* diffie-hellman-group-exchange-sha256.
* rsa-sha2-256.
* rsa-sha2-512.

:::(warning) (**Attention**)
Using weak algorithms reduces the security scope of the tool. Consult our experts on how to deal with legacy systems.
:::
