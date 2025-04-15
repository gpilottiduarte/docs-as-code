# Arquivo de modelo de importação em lote

Para realizar uma operação de importação em lote, você deverá realizar o download e o preenchimento do arquivo de importação em lote disponível no Segura.

## Caminho para acessar:

1. No Segura, no canto superior esquerdo, clique em **Product Menu,** representado pelos nove quadrados, e selecione **Configurações.**  
2. No menu lateral, selecione **Autenticação \> Active Directory \> Importação em lote \> Importar** e clique no botão **Arquivo de modelo** no canto inferior direito.

## Arquivo modelo

Dentro do arquivo, cada linha corresponde a um novo grupo que será importado. As informações que devem ser inseridas no arquivo são as mesmas inseridas via cadastro de grupo pela interface web do Segura.

| Item  | Descrição |
| :---- | :---- |
| **Nome do grupo AD** | Nome do grupo do Active Directory. Por exemplo: `Segura` |
| **Servidor** | Campo para o endereço do servidor. Por exemplo: `172.17.241.252.` **Nota**: atente-se de que este servidor precisa estar, necessariamente, cadastrado em **Active Directory \> Servidores.** |
| **Ativo** | Define se o grupo será ativo ou inativo. Pode ser **Sim** ou **Não**. |
| **Sincronização** | Define se a sincronização com o Segura será ativada. **Ligada** ou **Desligada**. |
| **DN** | Endereço de elementos AD que servirão de base para consulta e sincronização do Segura. Por exemplo: `CN=Users,DC=sandbox,DC=local.` |
| **Atributo usuário do AD** | Campo para atributo de nome de usuário. Por exemplo: `sAMAccountName.` |
| **Atributo nome do usuário do AD** | Campo para atribuir o nome de usuário do AD. Os valores válidos são: **Nome**, **Display Name** e **Nome do usuário**. |
| **Departamento** | Campo para departamento. Por exemplo: `Segura.` **Nota**: caso o departamento não exista no momento da importação, o grupo será importado sem departamento. |
| **Busca do AD** | Parâmetros de consulta para buscar informações do AD. Por exemplo: `(&(objectClass=user)(sAMAccountName=*)(memberOf=CN=Segura,DC=mt4,DC=com,DC=br)))`. |
| **Papéis** | Papéis do AD. Por exemplo: `System User`. |
| **Grupos de acesso (Usuário)** | Grupos de acesso com função do usuário. Por exemplo: `Full Access`. **Nota:** caso o grupo de acesso possua a aprovação de nível habilitada, será considerado sempre o nível 1\. |
| **Grupos de acesso (Aprovador)** | Grupos de acesso com função de aprovador. Por exemplo: `Full Access`.  **Nota:** caso o grupo de acesso possua a aprovação de nível habilitada, será considerado sempre o nível 1\. |

