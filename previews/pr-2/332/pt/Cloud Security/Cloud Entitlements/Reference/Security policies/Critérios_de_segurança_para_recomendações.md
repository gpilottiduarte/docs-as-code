# Critérios de segurança para recomendações

Neste artigo, você aprenderá mais sobre os critérios que o **Cloud Entitlements** utiliza para avaliar a segurança dos seus ambientes em nuvem.
:::(Info) (Nota)
O **Cloud Entitlements** utiliza critérios específicos que variam de acordo com o provedor de serviços em nuvem (CSP).
:::
* * *

## Recomendações para AWS
O **Cloud Entitlements** utiliza os seguintes critérios para monitorar as identidades cadastradas em contas AWS e fornecer recomendações de segurança:


| Critério | Definição | Identidades monitoradas |
| --- | --- | --- |
| **User MFA** | Avalia se o usuário possui a autenticação de multifator (MFA). A ausência de MFA aumenta a vulnerabilidade da conta, tornando-a mais suscetível a tentativas de invasão. | Somente usuários.
|**Política AdministratorAccess** | Avalia se o usuário possui a política de AdministratorAccess. Permissões excessivas podem representar uma ameaça, pois aumentam o potencial do usuário de comprometer recursos. | Usuários, funções e grupos.
| **Acesso a todos os recursos**| Avalia se a identidade tem acesso a todos os recursos. É recomendado que os usuários tenham acesso apenas aos recursos necessários, pois conceder acesso excessivo pode comprometer o ambiente. | Usuários, funções e grupos.
| **Acesso a todas as permissões** | Avalia se o usuário possui permissões completas em um recurso. Permissões excessivas podem levar a riscos e uso indevido de recursos. | Usuários, funções e grupos.
| **Política de senha** | Avalia se a conta possui uma política de senha definida. A ausência de uma política de senha pode tornar o ambiente inseguro. | Somente usuários.
| **Tempo de vida da chave de acesso** | Verifica se existe uma chave de acesso mais antiga que o período especificado. É importante substituir as chaves de acesso dos usuários não utilizadas ou que permanecem as mesmas há muito tempo. |Somente usuários.
| **Ultima utilização da chave de acesso**| Verifica se existem chaves de acesso não utilizadas dentro do período especificado. A substituição regular das chaves de acesso dos usuários mitiga riscos potenciais associados a chaves de acesso inativas. | Somente usuários.
| **Último acesso ao console** | Verifica o último acesso ao Console da AWS e o compara com o período especificado. É recomendado excluir e criar um novo usuário quando necessário, atualizar senhas regularmente ou revogar o acesso ao console quando apropriado. | Somente usuários.
| **Acesso a serviços não utilizados** | Verifica o acesso a serviços não utilizados por usuários, funções ou grupos dentro do período especificado. Para manter um ambiente seguro, é recomendado restringir o acesso dos usuários apenas aos serviços realmente utilizados. | Usuários e funções.

## Recomendações para o GCP
O **Cloud Entitlements** utiliza os seguintes critérios para monitorar as identidades registradas nos projetos do GCP e fornecer recomendações de segurança:


| Critério | Definição | Identidades monitoradas |
| --- | --- | --- |
| **Privilégio administrativo** | Verifica se a identidade possui a função *Owner*. | Usuários e Contas de serviço.
| **Roles básicas** | Verifica se a identidade possui uma das *Funções básicas* do GCP atribuídas. | Usuários e Contas de serviço.
|**Privilégio de conta de serviço ao usuário** | Verifica se o usuário possui a função  *Service Account User*. Com esta função, a identidade pode acessar indiretamente todos os recursos autorizados para a Conta de serviço associada. | Usuários, funções e grupos.
| **Privilégio de Criador de token da conta de serviço**| Verifica se a identidade possui a função *Service account token creator*.  Com essa função, a identidade tem a capacidade de impersonificar Contas de serviço, permitindo a criação de métodos de autenticação em nome dessas contas. | Usuários e Contas de serviço.
| **Vida útil da chave da conta de serviço** | Verifica se a Conta de serviço possui uma chave de acesso com duração maior que a especificada. Você pode escolher uma duração de 30, 60 ou 90 dias. | Somente Contas de serviço.

## Recomendações para o Azure

O **Cloud Entitlements** utiliza os seguintes critérios para monitorar as identidades registradas nos tenants do Azure Active Directory (AD) e fornecer recomendações de segurança:


| Critério | Definição | Identidades monitoradas |
| --- | --- | --- |
| **Único método de autenticação** | Avalia se um usuário está utilizando apenas um método de autenticação. A Microsoft recomenda fortemente ter pelo menos um segundo método de autenticação para aprimorar a segurança da identidade. Essa medida é crucial para evitar acessos não autorizados e proteger contra possíveis ataques.| Somente Usuários.
| **Acesso administrativo** |Verifica se a identidade possui a função de Administrador Global no diretório do seu ambiente. A função de Administrador Global é considerada superprivilegiada, concedendo à identidade associada ampla capacidade de modificar e interagir com qualquer recurso e configuração dentro do AD. | Usuários, Grupos e Aplicações.
|**Último login** | Avalia a atividade de login mais recente do usuário no Azure, considerando o período de tempo especificado nas Políticas de Segurança do **Cloud Entitlements**. Você pode personalizar esse critério para inspecionar logins em intervalos de 30, 60 ou 90 dias. | Somente Usuários.
| **Administrator sombra (escalonamento de privilégios)**| Verifica se a identidade possui algumas das seguintes permissões: *Microsoft.Authorization -elevateAccess/Action*, *Microsoft.Authorization-roleDefinitions/write*, *Microsoft.Authorization-roleAssignments/write*. Ter essas permissões capacita a identidade a elevar seus próprios privilégios. | Usuários e Aplicações.
| **Usuário de domínio público** | Verifica se um usuário do AD está registrado usando um endereço público associado a domínios como .hotmail, .outlook, .live e outros. | Somente Usuários.
| **Roles permissivas e de cuidado** | As funções de *Contributor*, V*irtual Machine Contributor* e *Application Administrator* devem ser exclusivamente atribuídas a usuários privilegiados. Essas funções concedem permissões extensas e não devem ser atribuídas a identidades não privilegiadas devido à sua natureza altamente permissiva. | Usuários, Grupos e Aplicações.
