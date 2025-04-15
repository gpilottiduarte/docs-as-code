# Comandos auditados

Este documento fornece informações sobre a tela do relatório **Comandos auditados**, que exibe uma lista de comandos que foram cadastrados para que sejam auditados durante uma sessão.

## Caminhos para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Gerenciamento > Sessões > Comandos auditados.**

ou

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **User Behavior**.  
2. No menu lateral, selecione **Gerenciamento > Comandos auditados.**

## Menu de ações

| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para cadastrar novos comandos, *Imprimir relatório, Exportar CSV e Agendar relatório.* |
| **Novo comando global** | Botão | Direciona para a tela [Cadastro de comando global](/v4/docs/pt/pam-session-new-command). |
| **Novo comando por credencial** | Botão | Direciona para a tela [Cadastro de comando por credencial](/v4/docs/pt/pam-session-new-command). |
| **Novo comando por dispositivo** | Botão | Direciona para a tela [Cadastro de comando por dispositivo](/v4/docs/pt/pam-session-new-command). |
| **Novo comando por grupo** | Botão | Direciona para a tela [Cadastro de comando por grupo](/v4/docs/pt/pam-session-new-command). |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra os comandos auditados por seu código de identificação dentro do Segura. |
| **Nome** | Campo de texto | Filtra os comandos auditados pelo nome de identificação do comando cadastrado dentro do Segura. |
| **Comando** | Campo de texto | Filtra os comandos auditados pelo comando cadastrado. Por exemplo: passwd |
| **Criticidade** | Menu suspenso | Filtra os comandos auditados por seu nível de criticidade. As opções são *Baixa*, *Média* e *Alta*. Limpe o campo para habilitar a opção **Todos**. |
| **Tipo** | Menu suspenso | Filtra os comandos auditados por seu tipo regra de cadastro. As opções são *Credencial, Dispositivo, Global* e *Grupo*. |
| **Tipo de sessão** | Menu suspenso | Filtra os comandos auditados por tipo de sessão que foi cadastrada. As opções são *Todos*, *Terminal* e *Banco de dados*. |
| **Status** | Menu suspenso | Filtra os comandos auditados por seu estado de ativação. As opções são **Ativo** e **Inativo.** Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Nome.**  
* **Comando.**  
* **Criticidade.**  
* **Tipo.**  
* **Tipo de sessão.**  
* **Ação durante a sessão**: a ação que ocorre na sessão em decorrência da execução do comando.  
* **Ocorrências**: quantidade de vezes que o comando deve ser utilizado para que a ação escolhida ocorra.  
* **Score**: pontuação atribuída ao comando no cadastro que define sua criticidade.  
* **Ativo.**  
* **Ações:**  
  * **Editar**: abre a tela de [Cadastro de comando por credencial, por dispositivo, por grupo ou global](/v4/docs/pt/pam-session-new-command), de acordo com o tipo cadastrado, para realizar as alterações desejadas. O campo **Ativo** está disponível apenas nas telas de alteração.  
  * **Visualizar histórico de auditoria**: abre a tela do relatório **Log de eventos**.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
## Tela Log de eventos  
Esta seção fornece informações sobre o relatório **Log de eventos,** que lista os comandos auditados que foram utilizados durante uma sessão.

### Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra os comandos auditados por seu código de identificação. |
| **Comando** | Menu suspenso | Filtra os comandos auditados pelo nome. |
| **Criticidade** | Menu suspenso | Filtra os comandos auditados por seu nível de criticidade. As opções são *Baixa*, *Média* e *Alta*. Limpe o campo para habilitar a opção **Todos**. |
| **Ação da sessão** | Menu suspenso | Filtra os comandos auditados pela ação ocorrida ao utilizar o comando. As opções são *Permitir, Bloquear, Interromper* e *Obrigar*. |
| **Usuário local** | Campo de texto | Filtra os comandos auditados pelo nome do usuário que utilizou o comando. |
| **Comando auditado** | Campo de texto | Filtra os comandos auditados pelo comando cadastrado. Por exemplo: `passwd` |
| **Comando digitado** | Campo de texto | Filtra os comandos auditados pela linha onde o comando foi digitado pelo usuário. |
| **Data do evento** | Seletor de data | Filtra os comandos auditados pelo período em que foram utilizados. |

### Campos do relatório

* **Código.**  
* **Comando.**  
* **Score.**  
* **Criticidade.**  
* **Ação durante a sessão.**  
* **Usuário local.**  
* **Comando auditado.**  
* **Comando digitado.**  
* **Data do evento.**  
* **Executado em:** a hora exata em que o comando foi utilizado.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::