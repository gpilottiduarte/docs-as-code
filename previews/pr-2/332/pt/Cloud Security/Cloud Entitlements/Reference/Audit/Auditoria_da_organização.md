# Auditoria da organização

O **Cloud Security** fornece um relatório de auditoria para rastrear todas as ações realizadas em sua organização. Este relatório ajuda a monitorar alterações feitas a nível de organização.

## Relatório de auditoria da organização

O relatório de auditoria da organização oferece as seguintes informações sobre as ações realizadas:

| Item | Descrição |
| --- | --- |
| **Produto** | A coluna **Produto** exibe o nome do produto específico no qual a ação foi realizada. |
| **Usuário** | Na coluna **Usuário**, você encontra o usuário responsável pela ação. |
| **Evento** | A coluna **Evento** descreve a ação específica que o usuário realizou. Consulte a tabela de [eventos a nível de organização](#eventos-a-nível-de-organização) abaixo para mais informações. |
| **Tipo da entidade** | A coluna **Tipo da entidade** especifica o tipo de entidade que sofreu uma alteração. |
| **Entidade** | A coluna **Entidade** exibe o nome da entidade que foi alterada. |
| **ID da entidade** | A coluna **ID da entidade** fornece o ID da entidade que foi alterada. |
| **Data** | A coluna **Data** indica o horário exato em que a ação ocorreu. |

:::(Info) (Info)
O nome da entidade pode ser alterado, mas o ID da entidade permanece sempre o mesmo. Isso garante que as alterações possam ser rastreadas até a entidade original.
:::

Para obter informações detalhadas sobre uma alteração, clique na linha do relatório correspondente a ação. Essa ação abrirá um arquivo `JSON` que exibe os estados antes e depois da modificação.

## Eventos a nível de organização

A tabela abaixo exibe quais ações e eventos podem estar listados no relatório de auditoria ao nível de organização.

| Evento | Descrição |
| --- | --- |
| **Create Organization** | Uma nova organização foi criada. |
| **Manage Organization Admin** | O usuário com função de administrador de uma organização foi removido da organização. |
| **Create Tenant** | Um tenant foi criado para a organização. |