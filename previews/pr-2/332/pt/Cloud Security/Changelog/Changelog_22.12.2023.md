# Changelog 22.12.2023

**Last Update**: 22/12/2023

Verifique abaixo as Novas Funcionalidades, Atualizações do módulo e erros corrigidos.

* * *

## ⚙ Changelog

### Cloud Entitlements

#### Bug fixes

| Item | Descrição |
|---|---|
| 642 | Corrigido um erro no gráfico de Saúde de seus ambientes que exibia incorretamente o valor percentual de saúde. Também foi aprimorada a precisão do marcador de percentual de saúde no gráfico. |

#### Atualizações do módulo

| Item | Descrição |
|---|---|
|585| Atualizado o gerenciamento de possíveis erros na página de recomendações do Cloud Entitlements. Agora, se ocorrer algum erro durante o processo de carregamento das informações, um alerta será exibido dentro do componente específico, sem comprometer a integridade geral da página.|
|54| Atualizado o Cloud Entitlements para monitorar e listar Usuários, Grupos e Aplicações do Azure.|
|627| Atualizado o Cloud Entitlements para escanear e oferecer recomendações de segurança para Grupos da AWS.|
|626| Atualizado o Cloud Entitlements para escanear e oferecer recomendações de segurança para Funções da AWS.|
|737| Atualizada a tela de Identidades para aprimorar a experiência do usuário. O termo 'Seguir recomendação' foi substituído por 'Exibir recomendação', e as informações agora serão exibidas em um menu suspenso.|
|175| Atualizadas as permissões necessárias para uma Conta de serviço conectar um projeto do Google Cloud Platform (GCP) ao Cloud Entitlements. |


#### Novas Funcionalidades

| Item | Descrição |
|---|---|
|12| Adicionada a integração com o Microsoft Azure. Os usuários agora podem conectar seus tenants ao Cloud Entitlements.|
|599| Adicionado o gráfico de Saúde de seus ambientes à página inicial. O gráfico fornece insights sobre os níveis de segurança de seus ambientes em nuvem. 0% indica um ambiente inseguro e 100% representa um ambiente totalmente seguro.|
|551| Adicionada a funcionalidade de Caminho de acesso, que fornece uma representação visual de como uma identidade está conectada a serviços específicos e permissões.|
|615| Adicionado o Relatório de recomendações para centralizar todas as recomendações de segurança analisadas para as identidades registradas dentro dos seus Provedores de Serviços em Nuvem (CSPs).|
|198| Adicionada uma nova funcionalidade ao Cloud Entitlements para notificar os usuários quando uma chave de acesso da AWS é inválida. O usuário que conectou a conta receberá um e-mail junto de um alerta que será exibido nos relatórios de Identidades e Configuração da Nuvem.|
|29| Adicionada uma nova funcionalidade para fornecer recomendações de segurança para Usuários do Google Cloud Platform (GCP).|
|27| Adicionada uma nova funcionalidade que indica os serviços aos quais os Usuários do Google Cloud Platform (GCP) têm acesso.|
|37| Adicionada uma nova funcionalidade que fornece informações sobre as permissões de API das Aplicações Azure.|
|36| Adicionada uma nova funcionalidade que fornece informações sobre as atribuições de diretório dos Usuários do Azure.|
|39| Adicionada uma nova funcionalidade que lista os membros dos Grupos do Azure.|
|31|Adicionada uma nova funcionalidade que indica os serviços que as Contas de serviço do GCP tem acesso.|
|34|Adicionada uma nova funcionalidade que permite aos usuários personalizar as Políticas de segurança para o Google Cloud Platform (GCP).|
|30|Adicionada uma nova funcionalidade que lista as chaves de acesso das Contas de serviço do Google Cloud Platform (GCP).|











* * *

### Cloud Security

#### Bug fixes

| Item | Descrição |
|---|---|
|565| Corrigido um erro no Cloud Security ao adicionar um novo administrador de organização.|
|597| Corrigido um problema no Cloud Security em que os usuários não podiam criar um nome de organização com apenas duas letras, ajustando os parâmetros para permitir um comprimento mínimo de nome de organização de duas letras.|
|629| Corrigido o problema em que a página de Preferências de usuário enviava um e-mail de convite em vez de um e-mail para alterar a senha ao atualizar as senhas.|
|687| Corrigido um erro no e-mail de convite que exibia o nome do novo usuário incorretamente.|

#### Atualizações do módulo

| Item | Descrição |
|---|---|
|532|Foi atualizado o Cloud Security para permitir que usuários já cadastrados e não associados a um tenant sejam administradores de uma organização, garantindo a eles acesso às funcionalidades administrativas.|
| 408| Atualizado o layout dos ícones no painel de administração para garantir uma experiência visual consistente, independentemente do tamanho da tela.|
|591| Ajustados os parâmetros de envio de e-mails para aumentar a taxa de recebimento, garantindo assim que os usuários recebam os e-mails de convite. Também foi adicionado um sistema de monitoramento para rastrear o envio de e-mails.|
|497| Atualizado o mecanismo de carregamento do relatório de auditoria para apresentar exclusivamente informações pertinentes para o usuário específico que acessa o relatório. Essa melhoria aprimora o desempenho no carregamento dos relatórios, reduzindo o risco de travamento da página.|
|583| Atualizada a seção de Configurações pessoais do Cloud Security. Agora, as Configurações pessoais estão localizadas na página de Preferências de usuário.|
|742| Atualizadas as telas de auto-cadastro de usuários para aprimorar a experiência do usuário.|

#### Novas Funcionalidades

| Item | Descrição |
|---|---|
|496|Adicionada ao Cloud Security uma funcionalidade de auditoria para auxiliar administradores da organização a rastrearem mudanças realizadas dentro da organização. As ações monitoradas são:  Novo tenant criado, Administrador da organização adicionado, Administrador da organização removido. |
|660|Adicionada uma nova funcionalidade que permite aos usuários se registrarem de forma autônoma para o Cloud Security. Após o registro, os usuários podem escolher entre três opções: iniciar em um ambiente simulado, solicitar acesso a um ambiente específico ou criar uma nova organização.|