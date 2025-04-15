# Verificação de identidade

Neste documento, você encontrará todas as informações sobre as telas de re-autenticação que possibilitam que o usuário verifique sua identidade no senhasegura após a realização de eventos considerados suspeitos.

## Métodos de re-autenticação

Os métodos de re-autenticação dependem de configuração prévia. As opções disponíveis são:

- **Senha do cofre senhasegura**.
- **Senha do Microsoft Active Directory (AD)**.
- **Token TOTP (*Time-based One-Time Password*)**.
- **Autenticação RADIUS**.
- **Autenticação Duo Security**.

Além da re-autenticação com a senha de usuário do senhasegura, é possível configurar um código de autenticação multifator. Nesse caso, quando a re-autenticação for necessária, a verificação da identidade poderá alternar aleatoriamente entre as opções cadastradas na conta. Por exemplo, um usuário que tenha configurado um token TOTP poderá ser solicitado a se reautenticar usando a senha de usuário senhasegura ou o TOTP.

:::(error) (Importante!)
Em caso de acionamento da re-autenticação, a tela da aplicação será bloqueada e o usuário não poderá continuar a utilizar o senhasegura sem a verificação bem-sucedida de sua identidade.
:::

## Tela Verifique sua identidade com a senha de acesso ao cofre ou AD

| **Item**   | **Descrição**                                                                                  |
|------------|-----------------------------------------------------------------------------------------------|
| **Mensagem** | Mensagem informando ao usuário que a senha de acesso ao cofre senhasegura deverá ser utilizada para re-autenticação. Também é possível utilizar a senha AD nesse caso. |
| **Senha**  | Campo para inserção da senha.                                                                 |
| **Verificar** | Botão para concluir a verificação da identidade.                                                |

## Tela Verifique sua identidade com token TOTP

Acesse o documento sobre [Como adicionar autenticação multifator](/v3-33/docs/pt/how-to-add-multi-factor-authentication) para mais informações.

| **Item**   | **Descrição**                                                                                  |
|------------|-----------------------------------------------------------------------------------------------|
| **Mensagem** | Mensagem informando ao usuário que um token TOTP deverá ser utilizado para re-autenticação.  |
| **Token**  | Campos para inserção do token de 6 dígitos.                                                   |
| **Verificar** | Botão para concluir a verificação da identidade.                                                |

## Tela Verifique sua identidade com o Duo Authenticator

Acesse o documento sobre [Como autenticar com o Duo](/v3-33/docs/pt/user-management-duo-authentication) para mais informações.

| **Item**   | **Descrição**                                                                                  |
|------------|-----------------------------------------------------------------------------------------------|
| **Mensagem** | Mensagem informando ao usuário que o Duo Security authenticator deverá ser utilizado para re-autenticação. |
| **Continuar** | Botão para prosseguir com a autenticação.                                                      |

## Tela Verifique sua identidade com RADIUS

Acesse o documento [Como cadastrar um provedor de autenticação de multifator Radius](/v3-33/docs/pt/how-to-register-a-radius-multi-factor-authentication-provider) para mais informações.

| **Item**   | **Descrição**                                                                                  |
|------------|-----------------------------------------------------------------------------------------------|
| **Mensagem** | Mensagem informando ao usuário que a senha RADIUS deverá ser utilizada para re-autenticação. |
| **Senha**  | Campo para inserção da senha.                                                                 |
| **Verificar** | Botão para concluir a verificação da identidade.                                                |

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}.