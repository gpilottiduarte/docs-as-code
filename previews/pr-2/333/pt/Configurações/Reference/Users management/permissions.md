# Permissões

Este documento apresenta uma listagem de todas permissões que fazem parte da instalação do senhasegura.

## Caminho para acessar
No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadros, e selecione **Configurações**.
No menu lateral, selecione **Gestão de Usuários > Permissões**.

## Permissões
Abaixo, cada tabela contém a listagem de todas as permissões presentes no senhasegura.

## A2A

| Código | Ação  | Permissão  | Descrição                        |
|----|-------|------------|----------------------------------|
| 1  | Delete| A2A.Delete | Deletar recursos A2A             |
| 2  | List  | A2A.List   | Listar todos os recursos A2A     |
| 3  | View  | A2A.View   | Ver detalhes dos recursos A2A    |
| 4  | Write | A2A.Write  | Criar e atualizar recursos A2A   |

## Behavior

| Código | Ação  | Permissão                | Descrição                             |
|----|-------|--------------------------|---------------------------------------|
| 5  | List  | Behavior.List            | Listar todos os recursos de comportamento |
| 6  | Write | Behavior.Settings.Write  | Atualizar parâmetros de comportamento |
| 7  | View  | Behavior.View            | Ver detalhes dos recursos de comportamento |

## Certificate Manager

| Código | Ação   | Permissão                                  | Descrição                                             |
|----|--------|-------------------------------------------|-------------------------------------------------------|
| 8  | Delete | CertificateManager.Certificates.Delete    | Excluir certificados                                  |
| 9  | Action | CertificateManager.Certificates.Link      | Vincular certificados a dispositivos                  |
| 10 | List   | CertificateManager.Certificates.List      | Listar todos os certificados                          |
| 11 | Action | CertificateManager.Certificates.Publish   | Publicar certificados                                 |
| 12 | Action | CertificateManager.Certificates.Revocation.Check | Verifica a revogação de todos os certificados no OCSP |
| 13 | View   | CertificateManager.Certificates.View      | Mostrar detalhes do certificado                       |
| 14 | Write  | CertificateManager.Certificates.Write     | Criar e atualizar certificados                        |
| 15 | View   | CertificateManager.Dashboards.View        | Exibir painéis do Gerenciador de certificados         |
| 16 | List   | CertificateManager.Publishing.List        | Listar publicação de certificados                     |
| 17 | View   | CertificateManager.Publishing.View        | Ver detalhes de publicação de certificados            |
| 18 | List   | CertificateManager.Reports.List           | Listar todos os relatórios e eventos de certificados  |
| 19 | View   | CertificateManager.Reports.View           | Veja todos os relatórios e eventos de certificados    |
| 20 | List   | CertificateManager.Requests.Approval.List | Listar todas as solicitações pessoais com aprovação pendente |
| 21 | View   | CertificateManager.Requests.Approval.View | Listar todas as solicitações com aprovação pendente  |
| 22 | Action | CertificateManager.Requests.Approve       | Aprovar solicitações                                  |
| 23 | Delete | CertificateManager.Requests.Delete        | Excluir solicitações de certificado                   |
| 24 | List   | CertificateManager.Requests.List          | Listar todas as solicitações                          |
| 25 | View   | CertificateManager.Requests.View          | Mostrar detalhes das solicitações                     |
| 26 | Write  | CertificateManager.Requests.Write         | Editar solicitações de certificado                    |
| 27 | Delete | CertificateManager.Settings.Delete        | Excluir configurações                                 |
| 28 | List   | CertificateManager.Settings.List          | Listar todas as configurações                         |
| 29 | View   | CertificateManager.Settings.View          | Ver todos os detalhes das configurações               |
| 30 | Write  | CertificateManager.Settings.Write         | Criar e atualizar configurações                       |

## Change Audit

| Código | Ação  | Permissão               | Descrição                                           |
|----|-------|-------------------------|-----------------------------------------------------|
| 31 | View  | ChangeAudit.Dashboards.View | Visualizar painéis de auditoria de alterações    |
| 32 | Delete| ChangeAudit.Delete        | Excluir recursos de auditoria de alterações         |
| 33 | List  | ChangeAudit.List          | Listar todos os recursos de Auditoria de Mudanças   |
| 34 | View  | ChangeAudit.View          | Ver detalhes dos recursos de Auditoria de Mudanças  |
| 35 | Write | ChangeAudit.Write         | Criar e atualizar recursos de Auditoria de Mudanças |

## Cloud IAM

| Código | Ação   | Permissão                       | Descrição                                           |
|----|--------|---------------------------------|-----------------------------------------------------|
| 36 | View   | Cloud.Dashboards.View           | Ver todos os painéis de nuvem                       |
| 37 | Delete | Cloud.Iam.Delete                | Excluir recursos do Cloud IAM                       |
| 38 | List   | Cloud.Iam.List                  | Listar todos os recursos do Cloud IAM               |
| 39 | View   | Cloud.Iam.View                  | Ver detalhes dos recursos do Cloud IAM              |
| 40 | Write  | Cloud.Iam.Write                 | Criar e atualizar recursos do Cloud IAM             |
| 41 | Delete | Cloud.Settings.Delete           | Excluir configurações do módulo de nuvem            |
| 42 | List   | Cloud.Settings.List             | Listar todas as configurações do módulo Cloud       |
| 43 | View   | Cloud.Settings.View             | Ver detalhes das configurações do módulo de nuvem   |
| 44 | Write  | Cloud.Settings.Write            | Criar e atualizar as configurações do módulo de nuvem |
| 45 | List   | Cloud.VirtualMachines.List      | Listar todos os recursos de Máquinas Virtuais       |
| 46 | Action | Cloud.VirtualMachines.Session.Start | Iniciar sessões de máquina virtual             |
| 47 | View   | Cloud.VirtualMachines.View      | Exibir detalhes dos recursos de máquinas virtuais   |
| 48 | Action | Cloud.VirtualMachines.Sync      | Solicitar sincronização de recursos de máquinas virtuais |
| 223| View   | Cloud.Operations.View           | Ver todas as operações do Cloud IAM                 |

## Discovery

| Código | Ação   | Permissão                          | Descrição                                             |
|----|--------|------------------------------------|-------------------------------------------------------|
| 49 | Delete | ScanDiscovery.Discovery.Delete     | Excluir recursos de descoberta                        |
| 50 | List   | ScanDiscovery.Discovery.List       | Listar recursos de descoberta                         |
| 51 | View   | ScanDiscovery.Discovery.View       | Ver detalhes dos recursos do Discovery                |
| 52 | Write  | ScanDiscovery.Discovery.Write      | Criar e atualizar recursos do Discovery               |
| 53 | List   | ScanDiscovery.Reports.List         | Listar todos os relatórios de auditoria e logs de execuções |
| 54 | View   | ScanDiscovery.Reports.View         | Visualize todos os relatórios de auditoria e logs de execuções |
| 55 | Delete | ScanDiscovery.Settings.Delete      | Excluir configurações de descoberta                   |
| 56 | List   | ScanDiscovery.Settings.List        | Listar todas as configurações de descoberta           |
| 57 | View   | ScanDiscovery.Settings.View        | Ver todos os detalhes das configurações do Discovery  |
| 58 | Write  | ScanDiscovery.Settings.Write       | Criar e atualizar as configurações do Discovery       |

## Domum Remote Access

| Código | Ação   | Permissão                                 | Descrição                                                          |
|----|--------|-------------------------------------------|--------------------------------------------------------------------|
| 59 | Delete | Domum.Access.InternalUsers.Delete         | Excluir solicitação de acesso de usuários internos                 |
| 60 | List   | Domum.Access.InternalUsers.List           | Listar solicitações de acesso para usuários internos               |
| 61 | View   | Domum.Access.InternalUsers.View           | Ver detalhes de acesso dos usuários internos                       |
| 62 | Write  | Domum.Access.InternalUsers.Write          | Criar e atualizar acessos de usuários internos                     |
| 63 | List   | Domum.Access.Requests.List                | Listar solicitações e aprovações próprias                          |
| 64 | View   | Domum.Access.Requests.View                | Veja todos os detalhes de suas solicitações e aprovações           |
| 65 | Delete | Domum.Access.ThirdPartyUsers.Delete       | Excluir uma solicitação de acesso de usuário de terceiros          |
| 66 | List   | Domum.Access.ThirdPartyUsers.List         | Listar solicitações de acesso para usuários de terceiros           |
| 67 | View   | Domum.Access.ThirdPartyUsers.View         | Detalhe detalhes de acesso de usuários de terceiros                |
| 68 | Write  | Domum.Access.ThirdPartyUsers.Write        | Criar e atualizar o acesso de usuário de terceiros                 |
| 69 | View   | Domum.Dashboards.View                     | Veja todos os painéis do Domum                                     |
| 70 | List   | Domum.Reports.List                        | Listar todos os relatórios do Domum                                |
| 71 | List   | Domum.Settings.List                       | Listar todas as configurações e parâmetros do Domum                |
| 72 | Action | Domum.Settings.PanicButton                | Elimine todo o acesso de um grupo ou fornecedor                    |
| 73 | List   | Domum.Settings.ThirdPartyUsers.List       | Listar usuários de terceiros                                       |
| 74 | Write  | Domum.Settings.ThirdPartyUsers.Write      | Criar e atualizar usuários de terceiros                            |
| 75 | Delete | Domum.Settings.ThirdPartyUsers.Delete     | Excluir usuários de terceiros                                      |
| 76 | Write  | Domum.Settings.Write                      | Criar e atualizar as configurações do Domum                        |
| 77 | Delete | Domum.Settings.Delete                     | Excluir configurações do Domum                                     |
| 78 | View   | Domum.ThirdPartyUsers.Desktop.View        | Visualizar a área de trabalho do usuário de terceiros              |

## DevOps Secret Manager

| Código  | Ação   | Permissão                           | Descrição                                                   |
|-----|--------|-------------------------------------|-------------------------------------------------------------|
| 79  | Delete | DSM.Applications.Delete             | Excluir autorizações de aplicativos e recursos de CI/CD     |
| 80  | List   | DSM.Applications.List               | Listar todas as autorizações de aplicativos e recursos de CI/CD |
| 81  | View   | DSM.Applications.View               | Visualize autorizações de aplicativos e detalhes de recursos de CI/CD |
| 82  | Write  | DSM.Applications.Write              | Criar e atualizar autorizações de aplicativos e CI/CD       |
| 83  | Delete | DSM.Automations.Delete              | Excluir automações do módulo DSM                            |
| 84  | List   | DSM.Automations.List                | Listar todas as automações do módulo DSM                    |
| 85  | View   | DSM.Automations.View                | Ver detalhes de automações do módulo DSM                    |
| 86  | Write  | DSM.Automations.Write               | Criar e atualizar automações do módulo DSM                  |
| 87  | View   | DSM.Dashboards.View                 | Ver todos os painéis do DSM                                 |
| 88  | Delete | DSM.Secrets.Delete                  | Excluir segredos do módulo DSM                              |
| 89  | List   | DSM.Secrets.List                    | Listar todos os segredos do módulo DSM                      |
| 90  | View   | DSM.Secrets.View                    | Ver detalhes dos segredos do módulo DSM                     |
| 91  | Write  | DSM.Secrets.Write                   | Criar e atualizar segredos do módulo DSM                    |
| 227 | Write  | DSM.Settings.Write                  | Gravar configurações do DSM                                 |
| 228 | List   | DSM.Settings.List                   | Listar configurações do DSM                                 |
| 229 | View   | DSM.Settings.View                   | Ver configurações do DSM                                    |
| 240 | View   | DSM.Applications.DownloadKey        | Permite download da chave privada dos aplicativos           |
| 242 | Delete | DSM.EncryptionKeys.Delete           | Permite a exclusão de chaves de criptografia                |
| 243 | List   | DSM.EncryptionKeys.List             | Permite listar as chaves de criptografia disponíveis        |
| 244 | View   | DSM.EncryptionKeys.View             | Permite visualizar detalhes das chaves de criptografia      |
| 245 | Write  | DSM.EncryptionKeys.Write            | Permite a modificação das propriedades das chaves de criptografia |
| 246 | Write  | DSM.EncryptionKeys.Encrypt          | Permite a operação de criptografia de dados                 |
| 247 | Write  | DSM.EncryptionKeys.Decrypt          | Permite a operação de descriptografia de dados              |

## Executions

| Código  | Ação   | Permissão                         | Descrição                                              |
|-----|--------|-----------------------------------|--------------------------------------------------------|
| 92  | List   | Executions.Reports.List           | Listar todos os relatórios de execuções                |
| 93  | View   | Executions.Reports.View           | Ver detalhes dos relatórios de execuções               |
| 94  | Delete | Executions.Operations.Delete      | Excluir recursos de operações do Execuções             |
| 95  | Write  | Executions.Operations.Write       | Criar e atualizar recursos de operações do Executions  |
| 96  | List   | Executions.Operations.List        | Listar todos os recursos de operações de execuções     |
| 97  | View   | Executions.Operations.View        | Ver recursos de operações do Execuções                 |
| 98  | List   | Executions.Settings.List          | Listar todas as configurações de Execuções             |
| 99  | View   | Executions.Settings.View          | Ver configurações de execuções                         |
| 100 | Write  | Executions.Settings.Write         | Criar e atualizar configurações de execuções           |
| 101 | View   | Executions.Settings.Delete        | Excluir configurações de execuções                     |

## Go Endpoint Manager

| Código  | Ação   | Permissão                        | Descrição                                            |
|-----|--------|----------------------------------|------------------------------------------------------|
| 102 | View   | Go.Dashboards.View               | Ver painéis de go                                    |
| 103 | Delete | Go.Linux.Delete                  | Excluir recursos do Linux                            |
| 104 | List   | Go.Linux.List                    | Listar todos os recursos do Linux                    |
| 105 | View   | Go.Linux.View                    | Ver todos os detalhes dos recursos do Linux          |
| 106 | Write  | Go.Linux.Write                   | Criar e atualizar recursos do Linux                  |
| 107 | List   | Go.Reports.List                  | Listar todos os relatórios e eventos                 |
| 108 | View   | Go.Reports.View                  | Ver todos os relatórios e detalhes de eventos        |
| 109 | Delete | Go.Settings.Delete               | Excluir configurações de go                          |
| 110 | Action | Go.Settings.InstallationKey.View | Ver chave de instalação                              |
| 111 | List   | Go.Settings.List                 | Listar todas as configurações de go                  |
| 112 | View   | Go.Settings.View                 | Ver todas as configurações do módulo go              |
| 113 | Write  | Go.Settings.Write                | Criar e atualizar configurações de go                |
| 114 | Delete | Go.Users.Delete                  | Excluir e reprovar usuários                          |
| 115 | List   | Go.Users.List                    | Listar todos os usuários                             |
| 116 | View   | Go.Users.View                    | Ver todos os usuários                                |
| 117 | Write  | Go.Users.Write                   | Escrever e aprovar usuários                          |
| 118 | Delete | Go.Windows.Delete                | Excluir recursos do Windows                          |
| 119 | List   | Go.Windows.List                  | Listar recursos do Windows                           |
| 120 | View   | Go.Windows.View                  | Ver detalhes dos recursos do Windows go              |
| 121 | Write  | Go.Windows.Write                 | Criar e atualizar recursos do Windows go             |
| 122 | Delete | Go.Workstations.Delete           | Excluir recursos de estações de trabalho             |
| 123 | List   | Go.Workstations.List             | Listar todos os recursos das estações de trabalho    |
| 124 | View   | Go.Workstations.View             | Exibir todos os detalhes dos recursos das estações de trabalho |
| 125 | Write  | Go.Workstations.Write            | Criar e atualizar recursos de estações de trabalho   |

## Protected information

:::(error) (Atenção)
Este recurso foi descontinuado a partir da versão 3.26 do senhasegura.
:::

| Código  | Ação   | Permissão                                  | Descrição                                          |
|-----|--------|--------------------------------------------|----------------------------------------------------|
| 126 | View   | PersonalVault.Dashboards.View              | Veja o painel de informações                       |
| 127 | Delete | PersonalVault.Information.Delete           | Excluir recursos de informação                     |
| 128 | List   | PersonalVault.Information.List             | Listar todos os recursos de informação             |
| 129 | View   | PersonalVault.Information.Read             | Mostrar detalhes dos recursos de informação        |
| 130 | Write  | PersonalVault.Information.Write            | Criar e atualizar recursos de informação           |
| 131 | List   | PersonalVault.Reports.List                 | Listar todos os relatórios                         |
| 132 | Delete | PersonalVault.Settings.Delete              | Excluir recursos de configurações                  |
| 133 | List   | PersonalVault.Settings.List                | Listar todos os recursos de configurações          |
| 134 | View   | PersonalVault.Settings.Read                | Mostrar detalhes dos recursos de configurações     |
| 135 | Write  | PersonalVault.Settings.Write               | Criar e atualizar recursos de configurações        |
| 226 | View   | PersonalVault.PersonalCredential.View      | Mostrar detalhes de recursos de credenciais pessoais |

## PAM Core

| Código  | Ação   | Permissão                                  | Descrição                                                    |
|-----|--------|--------------------------------------------|--------------------------------------------------------------|
| 136 | View   | PAM.Dashboards.View                        | Ver todos os painéis do PAM                                  |
| 137 | List   | PAM.PrivilegedAccounts.Custody.List        | Listar todas as credenciais sob custódia do usuário          |
| 138 | Delete | PAM.PrivilegedAccounts.Credentials.Delete  | Excluir credenciais                                          |
| 139 | List   | PAM.PrivilegedAccounts.Credentials.List    | Listar todas as credenciais                                  |
| 140 | View   | PAM.PrivilegedAccounts.Credentials.View    | Mostrar todos os detalhes da credencial                      |
| 141 | View   | PAM.PrivilegedAccounts.Credentials.Password.View | Obter credencial ou valor ou parte da chave SSH          |
| 142 | Write  | PAM.PrivilegedAccounts.Credentials.Write   | Criar e atualizar credenciais                                |
| 143 | View   | PAM.PrivilegedAccounts.PasswordChange.View | Mostrar todos os detalhes das alterações de senha            |
| 144 | List   | PAM.PrivilegedAccounts.PasswordChange.List | Listar todas as alterações de senha                          |
| 145 | Action | PAM.PrivilegedAccounts.PasswordChange.Request | Criar uma solicitação de rotação de senha                 |
| 146 | List   | PAM.SessionManagement.List                 | Listar todas as informações da sessão                        |
| 147 | Action | PAM.SessionManagement.Start                | Iniciar uma sessão                                            |
| 148 | Action | PAM.SessionManagement.Drop                 | Solte uma sessão                                              |
| 149 | View   | PAM.SessionManagement.View                 | Mostrar todos os detalhes das sessões                         |
| 150 | Action | PAM.SessionManagement.Write                | Criar e atualizar recursos de gerenciamento de sessão         |
| 151 | View   | PAM.SessionManagement.Delete               | Excluir recursos de gerenciamento de sessão                   |
| 152 | Action | PAM.SessionManagement.Audit                | Listar e executar ações de auditoria                          |
| 153 | Delete | PAM.Devices.Delete                         | Excluir dispositivos                                          |
| 154 | List   | PAM.Devices.List                           | Listar todas as informações do dispositivo                    |
| 155 | View   | PAM.Devices.View                           | Mostrar detalhes do dispositivo                               |
| 156 | Write  | PAM.Devices.Write                          | Criar e atualizar dispositivos                                |
| 157 | List   | PAM.Reports.List                           | Listar todos os relatórios do PAM                             |
| 158 | Delete | PAM.Settings.Delete                        | Excluir configurações do PAM                                  |
| 159 | List   | PAM.Settings.List                          | Listar todas as configurações do PAM                          |
| 160 | View   | PAM.Settings.View                          | Mostrar todos os detalhes das configurações do PAM            |
| 161 | Write  | PAM.Settings.Write                         | Criar e atualizar as configurações do PAM                     |
| 249 | View   | PAM.SessionManagement.Recording            | Permite a visualização de registros de sessões                |
| 250 | View   | PAM.SessionManagement.Livestream           | Permite a visualização da transmissão ao vivo da sessão       |

## Provisioning

| Código  | Ação   | Permissão                | Descrição                                             |
|-----|--------|--------------------------|-------------------------------------------------------|
| 162 | Delete | Provisioning.Delete      | Excluir recursos de provisionamento.                  |
| 163 | List   | Provisioning.List        | Liste o acesso a todos os recursos do módulo Provisioning.|
| 164 | View   | Provisioning.Read        | Mostrar detalhes dos recursos de provisionamento.     |
| 165 | Write  | Provisioning.Write       | Crie e atualize todos os recursos de provisionamento. |

## Configurações

| Código  | Ação    | Permissão                       | Descrição                                                 |
|-----|---------|---------------------------------|-----------------------------------------------------------|
| 166 | Action  | Reports.Schedule                | Ação para agendar o envio de relatórios periodicamente    |
| 167 | Delete  | Settings.Authentication.Delete  | Excluir recursos de autenticação                          |
| 168 | List    | Settings.Authentication.List    | Listar todos os recursos de autenticação                  |
| 169 | View    | Settings.Authentication.View    | Ver detalhes dos recursos de autenticação                 |
| 170 | Write   | Settings.Authentication.Write   | Criar e atualizar recursos de autenticação                |
| 171 | Delete  | Settings.Backup.Delete          | Excluir recursos de backup                                |
| 172 | List    | Settings.Backup.List            | Listar todos os recursos de backup                        |
| 173 | View    | Settings.Backup.View            | Ver detalhes dos recursos de backup                       |
| 174 | Write   | Settings.Backup.Write           | Criar e atualizar recursos de backup                      |
| 175 | List    | Settings.Eula.List              | Listar todos os recursos do Eula                          |
| 176 | View    | Settings.Eula.View              | Ver detalhes dos recursos do Eula                         |
| 177 | Delete  | Settings.Notification.Delete    | Excluir recursos de notificação                           |
| 178 | List    | Settings.Notification.List      | Listar todos os recursos de notificação                   |
| 179 | View    | Settings.Notification.View      | Ver detalhes dos recursos de notificação                  |
| 180 | Write   | Settings.Notification.Write     | Criar e atualizar recursos de notificação                 |
| 181 | Delete  | Settings.Services.Delete        | Excluir recursos de serviços e processos de execução      |
| 182 | List    | Settings.Services.List          | Listar todos os recursos de serviços e processos de execução|
| 183 | View    | Settings.Services.View          | Visualizar detalhes de recursos de serviços e processos de execução|
| 184 | Write   | Settings.Services.Write         | Criar e atualizar recursos de serviços e processos de execução|
| 185 | Delete  | Settings.SystemParameters.Delete| Excluir recursos de parâmetros do sistema                 |
| 186 | List    | Settings.SystemParameters.List  | Listar todos os recursos do System Parameters             |
| 187 | View    | Settings.SystemParameters.View  | Ver detalhes dos recursos dos parâmetros do sistema       |
| 188 | Write   | Settings.SystemParameters.Write | Criar e atualizar recursos de parâmetros do sistema       |
| 189 | Delete  | Settings.UserManagement.Delete  | Excluir recursos de gerenciamento de usuários             |
| 190 | List    | Settings.UserManagement.List    | Listar todos os recursos de gerenciamento de usuários     |
| 191 | View    | Settings.UserManagement.View    | Ver detalhes dos recursos de gerenciamento de usuários    |
| 192 | Write   | Settings.UserManagement.Write   | Criar e atualizar recursos de gerenciamento de usuários   |
| 193 | List    | User.Desktop.List               | Liste os relatórios da área de trabalho do usuário        |
| 194 | View    | User.Desktop.View               | Visualize a área de trabalho e os painéis do usuário      |
| 195 | Write   | User.Settings.Write             | Edite as configurações do usuário                         |
| 213 | View    | System.AuditTracking.View       | Ver trilha de auditoria do sistema                        |
| 214 | Write   | System.Settings.Write           | Gravar configurações do sistema                           |
| 217 | List    | System.Common.List              | Listar configurações comuns do sistema                    |
| 218 | Write   | System.Common.Write             | Gravar configurações comuns do sistema                    |
| 219 | List    | Settings.Tenants.List           | Listar configurações de locatários                        |
| 220 | Write   | Settings.Tenants.Write          | Gravar configurações de locatários                        |
| 221 | Write   | System.Settings.Orbit           | Orbit acessa as configurações do sistema                  |
| 222 | Write   | System.Settings.Eula            | Eula aceitar e gerenciar configurações                    |
| 224 | View    | System.Dashboards.Admin         | Visualizar painéis administrativos                        |
| 225 | List    | Reports.Telemetry.List          | Visualizar relatórios de telemetria                       |
| 230 | Write   | System.EmergencyPanel.Control   | Controle do painel de emergência                          |

## Task Manager

| Código  | Ação   | Permissão                        | Descrição                                                                    |
|-----|--------|----------------------------------|------------------------------------------------------------------------------|
| 196 | View   | TaskManager.Dashboards.View      | Visualize todos os painéis do módulo Gerenciador de Tarefas.                 |
| 197 | List   | TaskManager.Executions.List      | Liste as execuções e operações do Gerenciador de Tarefas.                    |
| 198 | View   | TaskManager.Executions.View      | Visualize execuções e detalhes de operações do Gerenciador de Tarefas.       |
| 199 | Delete | TaskManager.Settings.Delete      | Excluir recursos de configurações do módulo Gerenciador de tarefas.          |
| 200 | List   | TaskManager.Settings.List        | Listar todos os recursos de configurações do módulo Gerenciador de tarefas.  |
| 201 | View   | TaskManager.Settings.View        | Mostrar detalhes dos recursos de configurações do módulo Gerenciador de Tarefas |
| 202 | Write  | TaskManager.Settings.Write       | Crie e atualize os recursos de configurações do módulo Gerenciador de tarefas. |
| 203 | Delete | TaskManager.Tasks.Delete         | Excluir tarefas do Gerenciador de Tarefas.                                   |
| 204 | List   | TaskManager.Tasks.List           | Liste todas as tarefas do Gerenciador de Tarefas.                            |
| 205 | View   | TaskManager.Tasks.View           | Veja todos os detalhes das tarefas do Gerenciador de Tarefas.                |
| 206 | Action | TaskManager.Tasks.Execute        | Permitir que o usuário execute uma tarefa                                    |
| 207 | Write  | TaskManager.Tasks.Write          | Crie e atualize tarefas do Gerenciador de Tarefas.                           |

## Controle de Acesso

| Código  | Ação    | Permissão                             | Descrição                                                       |
|-----|---------|---------------------------------------|-----------------------------------------------------------------|
| 208 | Delete  | AccessControl.Delete                  | Excluir recursos de controle de acesso de todos os módulos      |
| 209 | List    | AccessControl.List                    | Listar todos os recursos de controle de acesso de todos os módulos |
| 210 | View    | AccessControl.View                    | Visualize os detalhes dos recursos de controle de acesso de todos os módulos |
| 211 | Write   | AccessControl.Write                   | Crie e atualize recursos de controle de acesso de todos os módulos |
| 212 | Action  | AccessControl.Approval                | Aprovar e reprovar solicitações                                  |
| 215 | List    | AccessControl.Audit                   | Gravar configurações do sistema (Nota: Verificar se descreve corretamente a ação) |
| 216 | List    | AccessControl.CurrentUser.List        | Listar todas as solicitações de controle de acesso para o usuário atual |

## MySafe

| Código  | Ação   | Permissão                          | Descrição                                                                                      |
|-----|--------|------------------------------------|------------------------------------------------------------------------------------------------|
| 231 | List   | MySafe.Item.List                   | Listar todos os recursos de informação                                                         |
| 232 | View   | MySafe.Item.View                   | Mostrar detalhes de recursos de credenciais pessoais                                           |
| 233 | Write  | MySafe.Item.Write                  | Criar e atualizar recursos de informação                                                       |
| 234 | Delete | MySafe.Item.Delete                 | Excluir recursos de informação                                                                 |
| 235 | List   | MySafe.Settings.List               | Listar todos os recursos de configurações                                                      |
| 236 | Write  | MySafe.Settings.Write              | Criar e atualizar recursos de configurações                                                    |
| 237 | Delete | MySafe.Settings.Delete             | Excluir recursos de configurações                                                              |
| 238 | List   | MySafe.Reports.List                | Listar todos os relatórios                                                                     |
| 239 | View   | MySafe.Dashboards.View             | Veja o painel de informações                                                                   |
| 241 | View   | MySafe.Dashboards.Admin            | Visualizar dashboards administrativos                                                          |
| 248 | Write  | MySafe.Item.ExternalShare          | Permite que o usuário compartilhe itens, de forma temporária, com pessoas que não tem acesso ao MySafe.  |