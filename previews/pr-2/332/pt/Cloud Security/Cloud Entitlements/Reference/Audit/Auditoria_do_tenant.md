# Auditoria do tenant

O **Cloud Security** fornece um relatório de auditoria para rastrear todas as ações feitas por usuários dentro de tenants. Esse relatório ajuda a monitorar as alterações realizadas em um tenant.

## Relatório de auditoria do tenant

O relatório de auditoria oferece as seguintes informações sobre ações realizadas nos tenants:

| Item | Descrição |
| --- | --- |
| **Produto** | A coluna **Produto** exibe o nome do produto específico no qual a ação foi realizada. |
| **Usuário** | Na coluna **Usuário**, você encontra o usuário responsável pela ação. |
| **Evento** | A coluna **Evento** descreve a ação específica que o usuário realizou. Consulte a tabela de [eventos a nível de tenant](#eventos-a-nível-de-tenant) abaixo para mais informações. |
| **Tipo da entidade** | A coluna **Tipo da entidade** especifica o tipo de entidade que sofreu uma alteração. |
| **Entidade** | A coluna **Entidade** exibe o nome da entidade que foi alterada. |
| **ID da entidade** | A coluna **ID da entidade** fornece o ID da entidade que foi alterada. |
| **Data** | A coluna **Data** indica o horário exato em que a ação ocorreu. |

:::(Info) (Info)
O nome da entidade pode ser alterado, mas o ID da entidade permanece sempre o mesmo. Isso garante que as alterações possam ser rastreadas até a entidade original.
:::

Para obter informações detalhadas sobre uma alteração, clique na linha do relatório correspondente a ação. Essa ação abrirá um arquivo `JSON` que exibe os estados antes e depois da modificação.

## **Eventos a nível de tenant**

A tabela abaixo exibe quais ações e eventos podem estar listados no relatório de auditoria ao nível de tenant.

| Evento | Descrição |
| --- | --- |
| **Create Account** | Uma nova conta associada ao tenant foi criada. |
| **Update Account** | Uma conta conectada ao tenant foi atualizada. |
| **Ack Scan Entity** | Scan Entity foi reconhecida ou deixou de ser reconhecida. |
| **Update Security Policies** | Políticas de segurança foram atualizadas a nível global para todas as contas sob o provedor. |
| **Update Account Security Policies** | Políticas de seguração foram atualizadas para uma conta. |
| **Update User Role** | As funções de um usuário relacionado ao tenant foram atualizadas. |
| **Create Tenant** | Um novo tenant foi criado. |
| **Invite User** | Um novo usuário foi convidado a se associar ao tenant. |
| **Enable User Tenant** | Um usuário conectado ao tenant foi habilitado. |
| **Disable User Tenant** | Um usuário conectado ao tenant foi desabilitado. |
| **Associate Tenant User** | Um usuário existente foi associado ao tenant. |
