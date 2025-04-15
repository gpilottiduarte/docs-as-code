# Como se reautenticar

A solicitação da verificação de sua identidade pode ocorrer caso você tenha realizado alguma ação considerada suspeita de acordo com as configurações estabelecidas pelo administrador.  
Nesses casos, a aplicação web será bloqueada e você só poderá continuar usando o senhasegura após se re-autenticar com sucesso.

Neste documento, você encontra um guia passo a passo sobre como se re-autenticar no senhasegura.

## Requisitos
- Recurso **Identificação contínua** configurado pelo administrador.
- Re-autenticação acionada.

---

Acesse os documentos [Como adicionar autenticação multifator](/v3-33/docs/pt/how-to-add-multi-factor-authentication), [Como autenticar com o Duo](/v3-33/docs/pt/user-management-duo-authentication) e [Como cadastrar um provedor de autenticação de multifator Radius](/v3-33/docs/pt/how-to-register-a-radius-multi-factor-authentication-provider) para mais informações sobre como configurar a autenticação multifator.

## Verificar sua identidade

O método de re-autenticação poderá variar de acordo com o método configurado por você no senhasegura.

1. Na tela **Verifique sua identidade**, leia a mensagem informando o método de autenticação solicitado e preencha no campo indicado a senha local, senha do Microsoft Active Directory, Token TOTP, autenticação RADIUS ou autenticação Duo Security.

:::(info) (Info)
Após a re-autenticação bem-sucedida, a contagem das tentativas será reiniciada. Isso significa que, por exemplo, se o parâmetro **Tentativas de visualização em horário proibido\*** estiver configurado para 3, após realizar essas 3 tentativas e se re-autenticar no senhasegura, a re-autenticação só será solicitada novamente se você fizer mais 3 tentativas em sua próxima sessão logada.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}.