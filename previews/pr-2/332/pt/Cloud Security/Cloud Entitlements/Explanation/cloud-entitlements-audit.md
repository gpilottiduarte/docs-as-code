# Auditoria

O **Cloud Entitlements** oferece um relatório de auditoria para rastrear todas as ações feitas pelos usuários. Esse relatório exibe as alterações feitas no Cloud Entitlements, em um determinado tenant.

Para acessar esse relatório, basta clicar no ícone de **Auditoria**, localizado no menu lateral esquerdo do Cloud Entitlements.

:::(Info) (Info)
Somente usuários com a função **Cloud Security - Auditor do tenant** podem acessar esse relatório. 
:::

* * *

## Relatório de Auditoria
O relatório oferece as seguintes informações sobre ações realizadas no Cloud Entitlements:

| **Item** | **Descrição** |
| --- | --- |
| **Produto** | A coluna **Produto** exibe o nome do produto específico no qual a ação foi realizada.  |
| **Usuário** | Na coluna **Usuário**, você encontra o usuário responsável pela ação. |
| **Evento** | A coluna **Evento** descreve a ação específica que o usuário realizou. Os valores possíveis para essa coluna são: *Cadastro de contas AWS*, *Edição de contas AWS*, *Cadastro de projetos GCP*, *Edição de projetos GCP*, *Atualização de Políticas de segurança para contas AWS*. |
| **Tipo de Identidade** | A coluna **Tipo de Identidade** especifica o tipo de identidade que sofreu uma alteração. |
| **Entidade** | A coluna **Entidade** exibe o nome da entidade alterada. |
| **ID da Entidade** | A coluna **ID da Entidade** fornece o ID da entidade alterada. |
| **Data** | A coluna **Data** indica o horário exato em que a ação ocorreu. |

:::(Info) (Info)
O nome da entidade pode ser alterado, mas o ID da entidade permanece sempre o mesmo. Isso garante que as alterações possam ser rastreadas até a identidade original.
:::

Para obter informações detalhadas sobre uma alteração, clique na linha do relatório correspondente a ação. Essa ação abrirá um arquivo `JSON` que exibe os estados antes e depois da modificação.