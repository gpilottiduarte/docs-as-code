# Razões de acesso

As **Razões de acesso** do **Task Manager** são a camada que adiciona contexto e transparência a cada solicitação de execução.

Este documento fornece informações sobre a tela do relatório **Razões de acesso**, permitindo que administradores:

* Definam motivos padronizados para execução de tarefas.  
* Criem um registro transparente das justificativas de acesso.  
* Melhorem a auditoria e rastreabilidade das ações.

::: (warning) (Atenção)  
O campo de busca e a coluna **Tipo** não refletem as configurações atuais, uma vez que todas as razões de acesso do **Task Manager** são do tipo **Execução de tarefa**.  
:::

## Requisitos

* Permissão de administrador do sistema ou do **Task Manager**.

## Caminho para acesso

1. No senhasegura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Task Manager**.  
2. No menu lateral, selecione **Controle de acesso \> Razões de acesso**.

---
## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Adicionar razão de acesso**. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Código** | Campo de texto | Filtra as razões de acesso pelo seu código de identificação no senhasegura. |
| **Nome** | Campo de texto | Filtra as razões de acesso pelo nome de identificação. |
| **Tipo** | Menu suspenso | Filtra as razões de acesso por tipo. As opções são **Execução de task** e **Download de arquivo**. Limpe o filtro para habilitar a opção **Todos**. |
| **Status** | Menu suspenso | Filtra as razões de acesso pelo seu estado de ativação. As opções são **Ativo** ou **Inativo**. Limpe o filtro para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Nome.**  
* **Tipo.**  
* **Status.**  
* **Ações:**  
  * **Editar:** abre a tela **Editar razão de acesso.**

::: (info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::

### Telas Adicionar/Editar razão de acesso

As telas **Adicionar razão de acesso** e **Editar razão de acesso** compartilham os mesmos campos.

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Nome**\* | Campo de texto | Sim | Nome para identificar a razão de acesso. |
| **Tipo**\* | Menu suspenso | Sim | Define um tipo de motivo de solicitação de execução de tarefa. As opções disponíveis são *Execução de Task, Download de arquivo* e *Todos*. |
| **Status**\* | Botão *toggle* | Sim | Ativa ou desativa a razão de acesso. |