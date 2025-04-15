# Verificação de identidade

Este documento fornece informações sobre as telas de reautenticação que possibilitam que o usuário verifique sua identidade no Segura após a realização de eventos considerados suspeitos.

## Métodos de reautenticação

Os métodos de reautenticação dependem de configuração prévia no **Menu de usuário > Configurar MFA**.
As opções são:

- **Senha do cofre Segura**.
- **Senha do Microsoft Active Directory (AD)**.
- **Token TOTP (*Time-based One-Time Password*)**.
- **Autenticação RADIUS**.
- **Autenticação Duo Security**.

Além da reautenticação com a senha de usuário do Segura, é possível configurar um código de autenticação multifator. Nesse caso, quando a reautenticação for solicitada, a verificação da identidade poderá alternar aleatoriamente entre as opções cadastradas na conta. Por exemplo, um usuário que tenha configurado um token TOTP poderá ser solicitado a se reautenticar usando a senha de usuário Segura ou o TOTP.

:::(error) (Alerta)
Em caso de acionamento da reautenticação, a tela da aplicação será bloqueada e o usuário não poderá continuar a utilizar o Segura sem a verificação bem-sucedida de sua identidade.
:::

## Tela Verifique sua identidade com a senha de acesso ao cofre ou AD

| **Item**   | **Tipo** |**Descrição**                                                                                  |
|------------|--------| ---------------------------------------------------------------------------------------|
| **Mensagem** | Texto | Informa ao usuário que a senha de acesso ao cofre Segura deverá ser utilizada para reautenticação. Também é possível utilizar a senha AD nesse caso. |
| **Senha**  | Campo de texto | Insere a senha.                                                                 |
| **Verificar** | Botão|  Conclui a verificação da identidade.                                                |

## Tela Verifique sua identidade com token TOTP

Saiba mais em [Como adicionar autenticação multifator](/v4/docs/pt/how-to-add-multi-factor-authentication).

| **Item**   | **Tipo** |**Descrição**                                                                                  |
|------------|--------| ---------------------------------------------------------------------------------------|
| **Mensagem** | Texto | Informa ao usuário que um token TOTP deverá ser utilizado para reautenticação.  |
| **Token**  | Campo de texto|Campos para inserção do token de 6 dígitos.                                                   |
| **Verificar**| Botão|  Conclui a verificação da identidade.                                |

## Tela Verifique sua identidade com o Duo Authenticator

Saiba mais em [Como autenticar com o Duo](/v4/docs/pt/user-management-duo-authentication).

| **Item**   | **Tipo** |**Descrição**                                                                                  |
|------------|--------| ---------------------------------------------------------------------------------------|
| **Mensagem** | Texto | Mensagem informando ao usuário que o Duo Security authenticator deverá ser utilizado para re-autenticação. |
| **Continuar** | Botão | Prossegue com a autenticação no Duo Authenticator.                                                     |

## Tela Verifique sua identidade com RADIUS

Saiba mais em [Como cadastrar um provedor de autenticação de multifator Radius](/v4/docs/pt/how-to-register-a-radius-multi-factor-authentication-provider).


| **Item**   | **Tipo** |**Descrição**                                                                                  |
|------------|--------| ---------------------------------------------------------------------------------------|
| **Mensagem** | Texto|Mensagem informando ao usuário que a senha RADIUS deverá ser utilizada para re-autenticação. |
| **Senha**  | Campo de texto|Insere a senha.                                                                 |
| **Verificar**| Botão|  Conclui a verificação da identidade.                                |

