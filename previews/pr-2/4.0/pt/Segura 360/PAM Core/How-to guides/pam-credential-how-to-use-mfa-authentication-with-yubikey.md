# Como utilizar autenticação MFA com YubiKey

A YubiKey é uma chave de segurança que ajuda a proteger suas contas online e dados sensíveis. Combinando segurança física e digital, ela oferece uma maneira simples e eficaz de aumentar a proteção de suas informações online. Ao usar a YubiKey em conjunto com o Segura, você adiciona uma camada extra de segurança aos seus dispositivos e contas, ajudando a proteger-se contra fraudes e ataques cibernéticos.

## Requisitos

* Uma credencial devidamente configurada no Segura.
* O [aplicativo Yubico Authenticator 6.0+ instalado](https://www.yubico.com/products/yubico-authenticator/), seja na versão móvel ou desktop.
* Um dispositivo YubiKey.

:::(info) (Info)
Atualmente, os dispositivos de autenticação que são suportados são os seguintes:
* YubiKey 5 FIPS Series.
* YubiKey 5 Series.
* YubiKey FIPS (4 Series).
* YubiKey 4 Series.
Para maiores informações, acesse a [documentação oficial da Yubico](https://support.yubico.com/hc/en-us/articles/360013789259-Using-Your-YubiKey-with-Authenticator-Codes).
:::

## Integrar autenticação MFA YubiKey no Segura

Antes de iniciar a integração da sua YubiKey com o Segura, você deve configurar o aplicativo Yubico de acordo com o [tutorial presente na documentação da Yubico](https://support.yubico.com/hc/en-us/articles/360013789259-Using-Your-YubiKey-with-Authenticator-Codes).

1. Na página do Segura, clique no **menu pessoal**, representado pelo seu ícone no canto superior direito, e selecione **Configurar MFA**.
2. Na janela **Configurar token de autenticação**, selecione o tipo de token que você deseja configurar, no caso será **OTP**.
4. Um QR Code será exibido na janela.
5. No aplicativo **Yubico Authenticator**, selecione a opção para adicionar uma nova conta e leia o QR Code gerado pelo Segura (para ler o QR Code aponte o celular para a tela e espere a confirmação).
6. Preencha os dados da nova conta de acordo com as suas preferências.
7. Salve a nova conta no aplicativo Yubico.
8. De volta ao Segura, após a leitura do QR Code, clique no local indicado na janela.
9. Insira o token de seis dígitos apresentado pelo aplicativo Yubico e clique em **Validar** e aguarde a confirmação da validação.

Uma vez confirmado e validado o novo método de autenticação MFA, você pode fechar a janela. A partir de agora, quando você for realizar login no Segura será exigido o token OTP de seis dígitos gerado a partir do aplicativo Yubico Authenticator.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).