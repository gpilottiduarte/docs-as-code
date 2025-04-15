# Sobre Chaves de criptografia - RDP Proxy

Para melhor uso do RDP Proxy no Segura é preciso entender que existem dois tipos de conexões:

* Uma conexão que se origina através da estação de trabalho do usuário até o cofre.
* E outra que sai do cofre até o dispositivo que o usuário deseja acessar.

Para que as conexões sejam realizadas seguramente é necessário que sejam realizadas através de uma criptografia, por isso verifique as chaves de criptografia suportadas por cada proxy.

:::(warning) (**Atenção**)
O Segura recomenda que você utilize algoritmos de criptografia em sua versão mais recente por motivos de segurança.
:::

:::(info) (**Info**)
Use as cifras conforme o nível de criptografia.
:::

### Estação de trabalho do usuário para o cofre
Utiliza cifras **Arcfour(RC4)** ou **Triple DES** caso o nível de criptografia seja **FIPS**. Os códigos de autenticação de mensagens (MAC) gerados podem usar: **MD5** ou **SHA-1**.
Os protocolos externos de segurança suportados são:

* TLS 1.0.
* TLS 1.1.
* TLS 1.2 (recomendado).

### Cofre para o dispositivo destino
Utiliza cifras **Arcfour(RC4)** ou **Triple DES** caso o nível de criptografia seja **FIPS**. Os códigos de autenticação de mensagens (MAC) gerados podem usar: **MD5** ou **SHA-1**.
Os protocolos externos de segurança suportados são:

* TLS 1.0.
* TLS 1.1.
* TLS 1.2.
* CredSSP.
* CredSSP.