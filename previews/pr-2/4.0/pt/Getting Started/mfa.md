# MFA

Registrar um provedor MFA é crucial para a segurança dos sistemas, garantindo que apenas usuários autorizados acessem dados sensíveis. O MFA exige que os usuários forneçam dois ou mais fatores de verificação, como senha, token de segurança ou biometria.

:::(warning) (Atenção)  
Se você já possui um provedor MFA cadastrado na sua conta, ao cadastrar um novo provedor, o antigo será desativado.  
:::

## Cadastrar um provedor MFA

1. No Segura, passe o mouse sobre o **Menu pessoal** e selecione **MFA.**  
2. No modal **Configurar token de autenticação**, selecione uma das opções de autenticação multifator. As opções são:  
   1. **Aplicativos autenticadores**: escolha essa opção para cadastrar um aplicativo como Google Authenticator, Authy e outros.  
   2. **RSA Auth**: escolha essa opção para cadastrar seu MFA via [RSA Security.](https://www.rsa.com/)  
   3. **Duo Sec**: escolha essa opção para cadastrar seu MFA via [Duo Security](https://duo.com/).  
   4. **Radius**: escolha essa opção para cadastrar seu MFA via [Radius](https://docs.Segura.io/docs/pt/how-to-register-a-radius-multi-factor-authentication-provider).  
   5. **AuthID**: escolha essa opção para cadastrar seu MFA via [AuthID](https://authid.ai/).  
3. Escolha a opção que você deseja e clique em **Continuar**.

Para cada método escolhido, você tem um guia de registro e uso, uma vez que cada provedor traz funcionalidades e necessidades distintas. Após escolher o seu método de autenticação MFA, siga as instruções de acordo com o guia referente à opção escolhida.

## Guias do Segura

- [Como cadastrar um provedor de autenticação MFA Duo Security](/v4/docs/pt/how-to-register-the-duo-sec-multi-factor-authentication-provider).
- [Como cadastrar um provedor de autenticação de multifator Radius](/v4/docs/pt/how-to-register-a-radius-multi-factor-authentication-provider).
- [Como cadastrar um provedor de autenticação multifator RSA](/v4/docs/pt/how-to-register-a-rsa-authentication-provider).
- [Como cadastrar um provedor de autenticação multifator AuthID](/v4/docs/pt/how-to-register-an-authid-multi-factor-authentication-provider)
- [Como registrar aplicativos autenticadores para autenticação multifator](/v4/docs/pt/how-to-register-authenticators-apps-for-multi-factor-authentication).
- [Como gerenciar um provedor de autenticação de multifator (MFA)](/v4/docs/pt/how-to-add-multi-factor-authentication)