# Provedores OpenID

Este documento fornece informações sobre a tela do relatório **Provedor** que exibe detalhes sobre os provedores OpenID.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> OpenID \> Provedores.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Novo provider** | Botão | Direciona para a tela **Cadastro de provider.** |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código de identificação do provedor OpenID no Segura. |
| **Tipo** | Menu suspenso | Filtra pelo tipo de provedor OpenID. |
| **ID do cliente** | Campo de texto | Filtra pelo client ID no Segura. |
| **URL de redirecionamento (Redirect URL)** | Campo de texto | Filtra pela URL de redirecionamento do provedor OpenID. |
| **Ativo** | Menu suspenso | Filtra provedores OpenID pelo seu estado de ativação no Segura. Pode ser **Sim** ou **Não**. |
| **Ambiente** | Menu suspenso | Filtra pelo ambiente em que o provedor será utilizado. |

## Campos do relatório
* **Código.**  
* **Tipo.**  
* **ID do cliente.**  
* **URL de redirecionamento.**  
* **Status:** indica o estado de ativação do provedor no Segura.  
* **Ambiente.**  
* **Ações:**  
  * **Atualizar provider**: abre a janela **Cadastro de provider** em modo de edição.  
  * **Detalhes do provider**: abre a janela de detalhamento do provedor.  
  * **Excluir provider**: desativa o provider.

## **Cadastro de provider**
Esta seção fornece informações sobre a tela **Cadastro de provider.**
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Tipo** | Menu suspenso | Sim | Seleciona o tipo de provider OpenID. |
| **Ativo** | Botão de opção | Sim | Define o estado de ativação do provider. |
| **Ambiente** | Botão de opção | Sim | Seleciona o ambiente do provider. As opções são **Local** e **Domum Remote Access**. |
| **ID do cliente** | Campo de texto | Sim | Define o ID do cliente no provider OpenID. |
| **Client secret** | Campo de texto | Sim | Define o client secret da aplicação cliente no provider OpenID. |
| **Domínio ou IP público para URL de redirecionamento** | Campo de texto | Sim | Define o domínio ou endereço IP público do Segura. Utilizado pelo provedor OpenID para redirecionar o usuário de volta ao seu aplicativo após a autenticação. |
| **URL de redirecionamento (Redirect URL)** | Campo de texto | Sim | Define o endpoint específico na aplicação cliente para o qual o provedor OpenID redireciona o usuário após a autenticação. Este endpoint é responsável por receber o código de autorização ou o token de acesso. |
| **Comentário** | Campo de texto | Não | Insere comentários, tais como notas, explicações e outros. |
| **OpenID endpoint configuration** | Campo de texto | Não | Define o endpoint de configuração do OpenID. Caso o Google OpenID seja escolhido, o campo será preenchido automaticamente com as informações do Google. |
| **Endpoint de autorização** | Campo de texto | Não | Define a URL fornecida pelo provedor OpenID para onde a aplicação envia a solicitação de autorização. |
| **Token endpoint** | Campo de texto | Não | Define a URL fornecida pelo provedor OpenID para onde a aplicação envia a solicitação para trocar o código de autorização por um token de acesso. |
| **Userinfo endpoint** | Campo de texto | Não | Define a URL fornecida pelo provedor OpenID para onde a aplicação pode solicitar informações do perfil do usuário autenticado usando o token de acesso. |
| **Endpoint JWK (obrigatório se não existir no endpoint OpenID)** | Campo de texto | Não | Define o endpoint onde a aplicação pode obter as chaves públicas do provedor de OpenID para validar a assinatura do token de acesso. **Obrigatório** caso essas chaves não estiverem disponíveis no endpoint de configuração do OpenID. |
| **Issuers adicionais (separados por vírgula)** | Campo de texto | Não | Define a lista de emissores (issuers) adicionais que são aceitos pela aplicação. Útil quando a aplicação precisa suportar múltiplos provedores OpenID. Os emissores são separados por vírgula. |

## Detalhes do provider