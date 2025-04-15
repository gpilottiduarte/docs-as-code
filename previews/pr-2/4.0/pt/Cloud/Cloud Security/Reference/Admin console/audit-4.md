# Auditoria

Este documento fornece informações sobre a tela **Relatório de auditoria** no menu **Configurações de tenant**, que exibe eventos de auditoria feitas por usuários em todos os produtos e na plataforma.

## Caminho para acesso

1. Acesse **Cloud Security**.  
2. No menu do usuário, clique em **Painel do administrador**.  
3. No menu lateral, clique em **Auditoria**.

## Campo de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Pesquisar** | Campo de texto | Filtra os eventos de acordo com as palavras inseridas. |
| **Produto** | Menu suspenso | Filtra os eventos de acordo com o produto em qual os eventos foram realizados. |
| **Usuário** | Menu suspenso | Filtra os eventos de acordo com o usuário que realizou os eventos. |
| **Evento** | Menu suspenso | Filtra os eventos de acordo com os eventos específicos realizados. |
| **Limpar filtros** | Botão | Limpa os filtros aplicados. |
| **Exportar dados em CSV** | Botão | Abre a janela **Exportar dados em CSV**. |
| **Mostrar/Ocultar colunas** | Botão | Abre um *card* para gerenciar a exibição das colunas no relatório. |

## Campos do relatório

- Produto.  
- Usuário.  
- Evento.  
- Tipo da entidade: tipo da entidade onde o evento foi realizado.  
- Entidade: entidade onde o evento foi realizado.  
- ID da entidade: ID da entidade.  
- ID do evento: ID do evento.  
- Data: data em que o evento foi realizado.

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Eventos de auditoria

Na tabela a seguir estão listados todos os eventos de auditoria realizados na plataforma **Cloud Security**:

| Evento | Nível de auditoria |
| ----- | ----- |
| *New Organization* | Organização |
| *Tenant created* | Organização |
| *User assigned as Organization Admin/User removed from Organization Admin* | Organização |
| *Disable User in Tenant* | *Tenant* |
| *Enable User in Tenant* | *Tenant* |
| *Invite User* | *Tenant* |
| *Tenant created* | *Tenant* |
| *User associated with Tenant* | *Tenant* |
| *Update User Roles* | *Tenant* |

Ao clicar em um evento, um painel novo é aberto com detalhes sobre o evento de auditoria realizado por um usuário.

## Tela Viewer

### Seção Evento

| Item | Descrição |
| ----- | ----- |
| **Produto** | Produto em que a ação foi realizada. |
| **Evento** | Nome do evento realizado. |
| **Tipo da entidade** | Tipo da entidade. |
| **Entity ID** | ID da entidade. |
| **Entidade** | Nome da entidade alvo do evento. |
| **Log date** | Data em que o evento foi realizado. |
| **Event ID** | ID do evento. |

### Seção Tenant

| Item | Descrição |
| ----- | ----- |
| **Name** | Nome do tenant alvo do evento. |
| **ID** | ID do tenant. |

### Seção Usuário

| Item | Descrição |
| ----- | ----- |
| **User** | Nome do usuário que realizou o evento. |
| **IP** | IP do usuário. |
| **User ID** | ID do usuário. |