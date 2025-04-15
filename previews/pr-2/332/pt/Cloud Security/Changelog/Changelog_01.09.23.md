# Changelog 01.09.23

**Last Update**: 01/09/2023

Verifique abaixo as Novas Funcionalidades, Atualizações do módulo e erros corrigidos.

* * *

## ⚙ Changelog

### Cloud Entitlements

#### Bug fixes

| Item | Descrição |
|---|---|
| 57 | Corrigido o erro no Cloud Entitlements que exibia data e hora de uso da Política com formatação inadequada. |
| 318 | Atualizada a mensagem exibida ao acessar o relatório do Cloud Entiltements. A nova mensagem "Carregando" substitui a mensagem anterior "Não há entidades". |
| 413 |Corrigido um problema em que as políticas de usuário da AWS não estavam sendo exibidas no relatório. |
| 342 |Corrigido o retorno incorreto de recomendações para identidades do GCP. Esse erro estava causando inconsistências nas informações apresentadas pelos dashboards e relatórios. |

#### Atualizações do módulo

| Item | Descrição |
|---|---|
| 55| Alterada a forma de exibição das informações gerais no Cloud Entitlements para deixar mais claro para o usuário os casos de uso e quais ações realizar. |
| 64 | Adicionado um filtro padrão para todas as telas com opções de filtro para melhorar a consistência na filtragem. Também foi adicionado um filtro na tela de todos os usuários do tenant. |
| 251| Atualizadas as tooltips que aparecem quando usuário move o cursor sobre um ícone para seguir o mesmo padrão das tooltips da homepage do Cloud Entitlements. |
| 318 | Atualizado o relatório de recomendações. A coluna de criticalidade foi removida e agora o número de recomendações é apresentado em cores, que  representam o nível de criticalidade da recomendação. |
| 318 | Atualizada a coluna 'Principal' para exibir no máximo 25 caracteres. Para textos que excedam o limite máximo de caracteres, foi adicionada uma funcionalidade que exibe o texto completo quando o usuário posiciona o cursor do mouse sobre. |
| 317 |O Cloud Entitlements foi atualizado para utilizar os mesmos termos que os Provedores de Serviços em Nuvem usam para suas identidades. Essa atualização substitui a categoria abstrata de Service Principals.|
| 430 |Aprimorados os filtros do Cloud Entitlements para exibir apenas os tipos de identidade relevantes associados ao provedor escolhido. O campo Provedores agora determina o que aparece nos campos Tipo de Identidade e Ambiente.|
| 410 | Atualizados o tamanho e alinhamento dos ícones do menu do Cloud Entitlements. |
| 465 | Atualizado o relatório de auditoria ao remover um campo de filtro que não apresentava valores. |

#### Novas Funcionalidades

| Item | Descrição |
|---|---|
| 26 | Adicionada uma nova funcionalidade que lista as identidades dos projetos Google Cloud. |
| 28 | Adicionada uma nova funcionalidade que lista as funções dos usuários no Google Cloud. |
| 32 | Adicionada uma nova funcionalidade para listar as funções das contas de serviço do Google Cloud. |
| 486 | Adicionado o modo de teste ‘Sandbox’ para os usuários. Essa funcionalidade preenche o Cloud Entitltements com dados simulados, permitindo que os usuários experimentem o produto sem precisar conectar uma conta pessoal ou organizacional.  |
| 348 |Adicionado um relatório de auditoria ao Cloud Entitlements. Essa nova funcionalidade permite que os usuários monitorem as ações realizadas dentro do produto. |
| 538 |Adicionados mais dados simulados no modo 'Sandbox', permitindo aos usuários testar várias funcionalidades, incluindo a Configuração da nuvem, Relatório de recomendações, Políticas de segurança e a tela de detalhes. |
| 503 |Atualizada a gestão de possíveis erros na página inicial do Cloud Entitlements. Agora, se ocorrer um erro enquanto as informações carregam, um alerta será exibido dentro do componente específico, sem comprometer a integridade da página como um todo  |
* * *

### Cloud Security

#### Bug fixes

| Item | Descrição |
|---|---|
| 191 | Corrigido o erro de preenchimento automático com informações de login salvas ao alterar senha, nos campos de "Nome de usuário" e "Senha atual". |
| 203 | Corrigido o erro que impedia a adição e remoção das permissões dos usuários no Cloud Security. |
| 268 | Corrigido o erro que impedia a escolha do idioma dos e-mails de convite, enviados para novos usuários ao realizar uma importação em lote. |
| 313 | Corrigido o erro em que e-mails de convite, enviados a um novo usuário, estavm sendo entregues com configurações de idioma incorretas. |
| 191 | Corrigido o erro de preenchimento automático com informações de login salvas ao alterar senha, nos campos de "Nome de usuário" e "Senha atual" |
| 203 | Corrigido o erro que impedia a adição e remoção das permissões dos usuários no Cloud Security. |

#### Atualizações do módulo

| Item | Descrição |
|---|---|
| 477 | Atualizado o Cloud Security para apresentar uma mensagem instruindo os usuários que realizam login na plataforma, mas que não estão ativos em nenhum tenant. |
| 465 | Adicionada uma barra de pesquisa à tela de relatório de usuários. Essa barra de pesquisa substituiu a aba 'Users'. |
| 298 | Atualizada a URL do Roadmap Público, disponível para usuários no Cloud Security. O link agora abrirá em outra aba do navegador. |
| 350 | Atualizado o processo de autenticação no Cloud Security para melhorar a experiência do usuário. Agora os hiperlinks estão mais visíveis, a política de senhas foi alterada e recursos de visualização de senha e alerta de CapsLock foram adicionados. |
| 504 |Atualizado o Cloud Security para exibir as funcionalidades do 'Meu perfil' em uma nova página e não mais no menu lateral. |
| 530 |Atualizados os Termos de Serviço do Cloud Security para melhor adequação às características e casos de uso da plataforma. Os Termos de Serviço estão disponíveis apenas em inglês.|

#### Novas Funcionalidades

| Item | Descrição |
|---|---|
| 444 | Adicionada uma nova funcionalidade que automaticamente notifica usuários já cadastrados na plataforma, quando eles são adicionados a um novo tenant. |
| 241 | Adicionado ao Cloud Security um relatório de auditoria para monitorar e rastrear ações feitas pelos usuários nos tenants.   |
| 182 | Adicionada uma nova funcionalidade ao Cloud Security que fornece detalhes de auditoria sobre qualquer ação realizada em um tenant. Os detalhes são exibidos em um arquivo JSON que contém os estados antes e depois da ação. |
| 59 | Adicionada funcionalidade que permite aos administradores desativar usuários no Cloud Security.  |
| 188 | Adicionada uma funcionalidade que detecta quando a tecla Caps Lock está ativada e uma opção para exibir a senha ao digitar. A senha não é exibida quando no modo de preenchimento automático. |
| 180 | Adicionada uma nova funcionalidade ao Cloud Security que sinaliza usuários com cadastro incompleto na plataforma. |
| 361 | Adicionada a autenticação Single sign-on utilizando contas do Google. Essa funcionalidade está disponível somente para usuários já cadastrados no Cloud Security. 
| 343 | Adicionada a autenticação Single sign-on utilizando contas Microsoft e GitHub. Essa funcionalidade está disponível somente para usuários já cadastrados no Cloud Security.  |
| 376 | Adicionada uma nova funcionalidade para exibir os termos de uso e exigir sua aceitação no momento do primeiro acesso ao Cloud Security. |
| 59 | Adicionada funcionalidade que permite aos administradores desativar usuários no Cloud Security. |
| 188 | Adicionada uma funcionalidade que detecta quando a tecla Caps Lock está ativada e uma opção para exibir a senha ao digitar. A senha não é exibida quando no modo de preenchimento automático. |
| 180 | Adicionada uma nova funcionalidade ao Cloud Security que sinaliza usuários com cadastro incompleto na plataforma. |
| 500 | Adicionada a opção de filtrar relatórios de auditoria na plataforma por data e hora. |
| 411 | Adicionado o papel de Administrador da organização. Essa nova função permite que os usuários com essa permissão gerenciem todos os tenants dentro de uma Organização. |