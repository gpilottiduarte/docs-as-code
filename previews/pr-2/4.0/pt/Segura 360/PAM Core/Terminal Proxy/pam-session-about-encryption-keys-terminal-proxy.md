# Sobre Chaves de criptografia - Terminal Proxy

O sistema proxy do Segura realiza conexões através dos protocolos **SSH** ou **Telnet**.

:::(warning) (**Cuidado**)
Ao usar o protocolo Telnet a conexão do cofre até dispositivo não utiliza criptografia, somente existe criptografia quando o acesso é feito da estação do usuário até cofre.
:::

### Estação de trabalho do usuário para o cofre:
O Segura suporta as seguintes criptografias:

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

:::(warning) (**Atenção**)
O uso de algoritmos fracos reduz o escopo de segurança da ferramenta. Consulte nossos especialistas sobre como lidar com sistemas legados.
:::
