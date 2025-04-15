# Provedores de autenticação de multifator

Este documento fornece informações sobre a tela do relatório **Provedores** que exibe informações sobre os provedores de autenticação de multifator.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> MFA \> Provedores.**

## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Novo** | Botão | Direciona para a tela **Selecione o provedor** onde você poderá selecionar um dos quatro provedores MFA disponíveis. |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código de identificação do provedor no Segura. |
| **Nome** | Campo de texto | Filtra pelo nome do provedor. |
| **Plugin** | Menu suspenso | Filtra pelo plugin de autenticação MFA. |
| **Ativo** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Ativo** e **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Nome.**  
* **Plugin.**  
* **Ativo.**  
* **Data de criação:** informa a data de criação (cadastro) do provedor. É apresentada no formato DD/MM/AAAA e HH:MM  
* **Ações:**  
  * **Editar**: abre a tela **Registro Provider** em modo de edição.

:::(info) (Info)
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.
:::

## Selecione o provedor
Ao clicar em **Novo** você será apresentado a essas opções:
* **RSA Authenticator.**  
* **Duo Security.**  
* **Radius.**  
* **AuthID.**

Cada opção leva à janela de cadastro do provedor indicado. Os provedores **RSA Authenticator** e **Duo Security** têm os mesmos campos de cadastro.

## Cadastro de provider

Você tem quatro opções de provedor de autenticação.

### RSA Authenticator e Duo Security

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome** | Campo de texto | Sim | Nome do provedor de autenticação. |
| **Ativo** | Botão de opção | Não | Define o estado de ativação do provedor. As opções são **Sim** e **Não**. |
| **Endpoint** | Campo de texto | Sim | URL do endpoint do provedor. |
| **Client ID** | Campo de texto | Sim | Identificador do cliente fornecido pelo provedor. |
| **Chave** | Campo de texto | Não | Chave de autenticação para o provedor. |

### Radius

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome** | Campo de texto | Sim | Nome do provedor de autenticação. |
| **Ativo** | Radio button | Não | Define o estado de ativação do provedor. As opções são **Sim** e **Não**. |
| **Hostname** | Campo de texto | Sim | Hostname ou IP do provedor Radius. |
| **Porta** | Campo de texto | Sim | Porta para o provedor Radius. |
| **Chave** | Campo de texto | Não | Chave de autenticação para o provedor. |
| **Timeout (s)** | Seletor | Sim | Indica o tempo de *timeout* do provedor. |

### AuthID

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome** | Campo de texto | Sim | Nome identificador do provedor. |
| **Ativo** | Botão de opção  | Não | Define o estado de ativação do provedor. As opções são **Sim** e **Não**. |
| **External ID** | Campo de texto | Sim | Identificador externo fornecido pelo AuthID. |
| **API Key Value** | Campo de texto | Sim | Chave de API para autenticação com o AuthID. | 