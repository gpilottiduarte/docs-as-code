# Aplicações Cliente

Este documento fornece informações sobre o relatório **Aplicações Cliente**, que contém informações sobre as aplicações usadas para consultas via API.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Serviços \> API \> Clientes.**

## Menu de Ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Nome** | Campo de texto | Filtra pelo nome da aplicação. |
| **Usuário de auditoria** | Campo de texto | Filtra pelo usuário dono da aplicação. |
| **OAuth** | Menu suspenso | Filtra pela situação da aplicação em relação à autenticação com OAuth. Pode ser *Não, OAuth 1.0 e OAuth 2.0*. |
| **Ativo** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código.**  
* **Nome da aplicação.**  
* **Usuário de auditoria:** refere-se a uma autorização de API sistêmica utilizada pelo Segura para garantir certas funcionalidades do sistema, como sessões remotas. Isso também inclui todas as aplicações registradas usando outros produtos do Segura, como A2A (Aplicação-para-Aplicação) e outros.
* **OAuth.**  
* **Ativo.**  
* **Ações:**  
  * **Tokens:** abre a janela **Aplicação Cliente** com as informações sobre a aplicação.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Aplicação Cliente

| Item | Tipo |  Descrição |
| :---- | :---- | :---- |
| **Cliente** | Campo de texto | Nome da aplicação cliente. |
| **Autorização** | Campo de texto | Tipo de autorização da aplicação. |
| **Consumer Key** | Campo de texto | Valor utilizado pelo cliente para identificação no provedor de autenticação. Disponível apenas para OAuth 1.0. |
| **Client ID** | Campo de texto | Identificador único que permite a solicitação de tokens de acesso para o provedor de autenticação. Disponível apenas para OAuth 2.0. |

