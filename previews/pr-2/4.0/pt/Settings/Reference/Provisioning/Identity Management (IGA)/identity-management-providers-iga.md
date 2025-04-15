# Provedores de gerenciamento de identidade (IGA)

Este documento fornece informações sobre a tela de **Provedores de gerenciamento de identidade**, que exibe informações sobre os provedores IGA.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Provisionamento > Gerenciamento de identidade (IGA) \> Provedores.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Novo provider** | Botão | Abre a janela **Registrar provedor de Identity management.** |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código de registro do provedor no Segura. |
| **Nome** | Campo de texto | Filtra pelo nome do provedor no Segura. |
| **Tags** | Campo de texto | Filtra pelas tags associadas ao provedor. |
| **Protocolo** | Menu suspenso | Filtra pelo protocolo de autenticação do provedor. |
| **Data de registro** | Campo de data | Filtra de acordo com o período selecionado. |
| **Ativo** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Ativo** e **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código**.  
* **Nome**.  
* **Tags**.  
* **Protocolo**.  
* **Método de autenticação**: indica o método de autenticação utilizado pelo provedor.  
* **Data de registro.**  
* **Ativo**.  
* **Sincronizar com Domum**: indica se o provedor de autenticação realiza sincronização de usuários com o Segura Domum.  
* **Ações:**  
  * **Atualizar provider**: abre a janela **Registrar provedor de Identity managemen**t em modo de edição.  
  * **Detalhes do provider**: abre a janela de detalhamento do provedor.  
  * **Excluir provider**: exclui o provider.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Registrar provedor de Identity management
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome** | Campo de texto | Sim | Nome do provedor de autenticação. |
| **Protocolo** | Menu suspenso | Sim | Protocolo de autenticação utilizado pelo provedor. |
| **Sincronizar com Domum?** | Menu suspenso | Sim | Indica quais usuários serão sincronizados com o **Segura Domum.** |
| **Ativo** | Radio button | Sim | Ativa ou desativa o status do provedor. |
| **Descrição** | Campo de texto | Não | Descrição do provedor de autenticação. |
| **Tags** | Campo de texto | Não | Tags associadas ao provedor de autenticação. |
| **Método de autenticação** | Menu suspenso | Sim | Indica qual método de autenticação o provedor está utilizando. |
| **Data/Hora Validade** | Campos de data | Não | Indica a data e a hora de validade.  |
| **IPs permitidos (Coloque \* para permitir qualquer IP)** | Campo de texto | Não se aplica | Indica quais são os IPs permitidos no provedor. |
| **Adicionar** | Botão | Não | Adiciona uma entrada abaixo dos registros de IP. |
| **ENDEREÇO** | Campo de texto | Não | Indica o endereço de IP permitido. |
| **Caixa de seleção** | Caixa de seleção | Não se aplica | Seleciona todos os registros exibidos na tela. |
| **Referers permitidos (Lista vazia para qualquer origem)** | Campo de texto | Não se aplica | Indica quais são os referes permitidos no provedor. |
| **Adicionar** | Botão | Não | Adiciona uma entrada abaixo dos registros de referers. |
| **REFERER** | Campo de texto | Não | Indica os Referers HTTP, ao qual será permitida a autenticação. |
| **Caixa de seleção** | Caixa de seleção | Não | Seleciona todos os registros exibidos na tela. |

## Detalhes do Provedor

No relatório **Provedores**, disponível em **Configurações \> Provisionamento \> Identity Management (IGA) \> Providers**, você pode clicar em **Detalhes do provider**, acessível no menu suspenso **Ações**, para abrir o formulário de **Registro de provedor de identificação**, que contém os seguintes campos:

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Provider** | Campo de texto | Provedor de autenticação usado. |
| **Método de autenticação** | Campo de texto | Método de autenticação utilizado |
| **Status** | Campo de texto | Status de ativação no momento da consulta. Pode ser Ativado ou Desativado. |
| **Descrição** | Campo de texto | Descrição do provider. |
| **Tags** | Campo de texto | Tags relacionadas com o fornecedor. |
| **URL base** | Campo de texto | Endpoint para solicitação. Por exemplo: `https://dominio.com/iso/scim/v2` |
| **URL do token** | Campo de texto | Endpoint para gerar o token de autenticação. Por exemplo: `https://dominio.com/iso/oauth2/token` |
| **ID do cliente** | Campo de texto | Valor de identificação do cliente. Usado para consultas via API. |
| **Segredo do cliente** | Campo de texto | Valor do segredo do cliente. Usado para consultas via API. |

