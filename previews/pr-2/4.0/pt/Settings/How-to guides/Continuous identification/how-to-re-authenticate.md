# Como se reautenticar

A solicitação para verificar sua identidade pode ocorrer se você realizar uma ação considerada suspeita de acordo com as configurações estabelecidas pelo administrador. Nesses casos, a sua sessão será bloqueada, e você só poderá continuar utilizando o Segura após se reautenticar com sucesso.

Este documento fornece um guia passo a passo sobre como se reautenticar no **Segura**.

## Pré-requisitos  
- Recurso de **identificação contínua** configurado pelo administrador. Mais informações em [Como gerenciar a identificação contínua](/v4/docs/pt/how-to-manage-continuous-identification).  
- Reautenticação acionada.

---

Acesse os documentos [Como adicionar autenticação multifator](/v4/docs/pt/how-to-add-multi-factor-authentication), [Como autenticar com Duo](/v4/docs/pt/user-management-duo-authentication) e [Como registrar um provedor Radius de autenticação multifator](/v4/docs/pt/how-to-register-a-radius-multi-factor-authentication-provider) para mais informações sobre como configurar a autenticação multifator.

## Verificar sua identidade  

Assim que o Segura solicitar a verificação de sua identidade, sua sessão será bloqueada e você verá a tela **Verifique sua identidade.** Siga os passos abaixo para se reautenticar e continuar usando o Segura. 

:::(Info) (Info)
O método de reautenticação pode variar dependendo do método configurado no Segura.
:::


1. Na tela **Verifique sua identidade**, leia a mensagem que indica o método de autenticação solicitado e preencha o campo apropriado com sua senha local, senha do Microsoft Active Directory, token TOTP, autenticação RADIUS ou autenticação Duo Security.

:::(info) (Informação)  
Após a reautenticação bem-sucedida, a contagem de tentativas será reiniciada. Isso significa que, por exemplo, se o parâmetro **Tentativas de visualização em horários proibidos\*** estiver configurado como 3, após realizar essas 3 tentativas e se reautenticar no **Segura**, a reautenticação só será solicitada novamente se você realizar mais 3 tentativas na próxima sessão ativa.  
:::  

---

Ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target="_blank"}.  