# Auditores padrão

Este documento fornece informações sobre a tela do relatório **Auditores padrão**, que mostra a lista de auditores que foram cadastrados para auditar sessões de alto risco.

Saiba mais sobre os tipos de auditoria em [Sobre auditoria](/v4/docs/pt/pam-session-about-audit) e sobre tipos de auditores em [Sobre Auditores](/v4/docs/pt/pam-session-about-auditors).

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Gerenciamento > Auditoria > Auditores padrão.**

---
## Menu de ações

| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela de cadastro de **Auditores padrão**. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de Busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra os auditores por seu código de identificação dentro do Segura. |
| **Nome** | Campo de texto | Filtra os auditores pelo nome cadastrado no Segura. |
| **E-mail** | Campo de texto | Filtra os auditores pelo seu e-mail de cadastro. |
| **Departamento** | Campo de texto | Filtra os auditores pelo departamento que o usuário está cadastrado. |
| **Adicionado por** | Campo de texto | Filtra os auditores pelo nome do usuário que incluiu o auditor. |
| **Criado em** | Seletor de data | Filtra os auditores pelo período que foram adicionados. |
| **Status** | Menu suspenso | Filtra os auditores por seu estado de ativação. As opções são **Ativo** e **Inativo.** Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Nome.**  
* **E-mail.**  
* **Departamento.**  
* **Adicionado por.**  
* **Criado em.**  
* **Status.**  
* **Ações:**  
  * **Inativar**: desativa o auditor. Na janela de confirmação clique em **Sim** para confirmar a ação.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
### Tela de cadastro Auditores padrão

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Usuários** | Campo de texto | Não | Busca pelo nome do auditor na lista de auditores incluídos. |
| **Adicionar** | Botão | Não | Abre a tela de usuários do Segura, para que sejam incluídos os auditores. |
| **Tabela de auditores** | Tabela | Não | Dados de cada auditor adicionado contendo *os campos, caixa de seleção*, *Cód., Nome, Nome do usuário, E-mail* e *Departamento.* |