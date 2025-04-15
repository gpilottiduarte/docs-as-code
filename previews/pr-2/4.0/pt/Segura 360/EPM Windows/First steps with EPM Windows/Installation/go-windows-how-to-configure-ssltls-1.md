# Como configurar o SSL/TLS

Ambientes Windows Server 2008 R2 SP1 e Windows 7 requerem condições especiais para a instalação do **EPM Windows**.

Este artigo é um passo a passo de configuração para esse cenário.

* * *

## Como configurar o SSL/TLS

Para criar uma conexão protegida SSL/TLS para as requisições HTTPS entre o client e a plataforma Segura, é necessário que o SSL SUITES esteja configurado corretamente. Para realizar essa tarefa, siga os passos indicados:

1. Abra o prompt de comando e execute `gpedit.msc`.
2. Vá para **Administrative Templates > Network > SSL Configuration Settings**.
3. Abra o **SSL Cipher Suite Order**.
4. Selecione **Enabled**.
5. Cole a lista de suites abaixo na caixa de texto, certificando-se de que não há espaços:
```
TLS_DHE_RSA_WITH_AES_256_GCM_SHA384,TLS_DHE_RSA_WITH_AES_128_GCM_SHA256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA384_P256,TLS_DHE_RSA_WITH_AES_256_CBC_SHA,TLS_DHE_RSA_WITH_AES_128_CBC_SHA,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256_P256,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256_P256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA384_P384,TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256_P256,TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384_P384,TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA_P256,TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA_P256,TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA_P256,TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA_P256,TLS_DHE_DSS_WITH_AES_128_CBC_SHA,TLS_DHE_DSS_WITH_AES_256_CBC_SHA
```
6. Clique **Apply**.
7. Reinicie o servidor.

Agora as requisições entre o agente e a plataforma Segura dispõem de uma conexão SSL/TLS confiável. Os ambientes Windows Server 2008 R2 SP1 e Windows 7 já estão preparados para receber a instalação do **EPM Windows**.

* * *

Você ainda tem dúvidas? Entre em contato com a  [Comunidade Segura](https://community.Segura.io/){target="_blank"}.