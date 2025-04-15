# Changelog Cloud Entitlements


Verifique abaixo as novas funcionalidades, melhorias e erros corrigidos.

## 1 de Abril de 2025

### Atualizações do produto

| Item | Descrição |
| ----- | ----- |
| 1709 | Adicionadas restrições para funcionalidades que são exclusivas do plano **Build with Us**. |
| 1554 | Adicionamos um filtro no relatório **Identidades** para filtrar identidades com permissões JIT ativas no momento. |

## 26 de Fevereiro de 2025

### Novas Funcionalidades

| Item | Descrição |
| :---: | ----- |
| 878 | Adicionado um novo recurso que permite aos administradores atribuir permissões JIT a usuários, grupos ou aplicativos no Azure. |

## 4 de Fevereiro de 2025

### Bug fixes

| Item | Descrição |
| ----- | ----- |
| 1366 | Corrigido um bug em que recomendações de segurança ainda apareciam para contas inativas. |
| 1556 | Corrigido um bug em que as contas do provedor desativadas no menu **Configuração** ainda apareciam no filtro **Ambiente** do relatório **Identidades**. |
| 1589 | Corrigido um bug em que os nomes das funções do tipo **Api Permission** não estavam sendo exibidos. |

### Atualizações do produto

| Item | Descrição |
| ----- | ----- |
| 1580 | Melhorado a lógica por trás de todos os filtros do **Cloud Entitlement**. Agora, os filtros mostram apenas os resultados de acordo com os ambientes do usuário. |
| 1680 | Atualizado a aba **Informações gerais** no relatório **Identidades** para melhorar a experiência dos usuários com novas funcionalidades. |
| 1689 | Melhorado a aba **Informações gerais** dos provedores para remover informações redundantes e melhorar a interface. |

## 9 de Janeiro de 2025

### Novas Funcionalidades

| Item | Descrição |
| ----- | ----- |
| 1497 | Adicionado um novo recurso que permite aos administradores atribuir permissões JIT a usuários, papéis ou grupos na AWS. |
| 1535 | Adicionado um novo recurso que permite aos administradores do **Cloud Entitlements** remover políticas associadas a usuários, aplicações, ou grupos na plataforma Azure. |

### Atualizações do Produto

| Item | Descrição |
| :---: | ----- |
| 1546 | Atualizado o formulário de integração com o AWS para permitir os usuários escolherem entre as opções "Visibilidade" ou "Visibilidade e gerenciamento". |

### Correções de Tradução

| Item | Descrição |
| :---: | ----- |
| 1574 | Corrigido um bug onde o texto não estava aparecendo corretamente na notificação de sincronização ou ressincronização na Central de notificações. |

## 28 de Novembro de 2024

### Bug fixes

| Item | Descrição |
| ----- | ----- |
| 1400 | Corrigido um bug em que o erro 503 aparecia incorretamente após uma conexão malsucedida de uma organização AWS. |
| 1391 | Corrigido um bug em que o gráfico de pizza de impacto do relatório de identidades e as recomendações não estavam sendo atualizados após adicionar uma conta Azure em um novo *tenant*. |
| 1514 | Corrigido um bug em que o relatório de recomendações não mostrava nenhuma identidade. |
| 1480 | Corrigido um erro onde pastas e subpastas não estavam sendo sincronizadas ao realizar uma integração com uma organização Oracle Cloud. |

### Novas funcionalidades

| Item | Descrição |
| ----- | ----- |
| 1520 | Adicionado um novo recurso que permite aos administradores remover políticas associadas a usuários, papéis ou grupos na AWS. |

### Atualizações do Produto

| Item | Descrição |
| ----- | ----- |
| 1420 | Adicionado uma barra de busca para melhorar a experiência do usuário ao buscar por relatórios e identidades. |
| 1457 | Os filtros do relatório Identidades foram aprimorados com: O filtro **Recomendações** agora aceita múltiplos valores e é uma caixa de seleção, e o filtro **Administrador** agora também filtra não administradores. |
| 1489 | Atualizado o modo Sandbox para suportar casos de uso de identidades de máquina. |

## 12 de Março de 2024

### Bug fixes

| Item | Descrição |
| ----- | ----- |
| 874 | Corrigidos os ícones sobrepostos às fontes no Cloud Health. |

### Atualizações do Produto

| Item | Descrição |
| ----- | ----- |
| 888 | Adicionado um novo recurso que permite aos usuários exportar o relatório de Identidades no formato `.csv`. |
| 925 | Adicionado um alerta informativo sobre permissões de aplicativos no pop-up de integração do Azure. |
| 897 | Adicionada permissão `AuditLog.Read.All` à lista de permissões necessárias para conectar um tenant do Azure. |

### Novas Funcionalidades

| Item | Descrição |
| ----- | ----- |
| 336 | Adicionado um novo recurso que permite aos usuários definir diferentes configurações de criticidade para contas do mesmo provedor. |
| 918 | Adicionado um novo recurso que permite aos usuários abrir um painel lateral com um resumo de informações sobre a identidade ao clicar em um nó de identidade no Cloud Health. |
| 819 | Adicionado um novo recurso de integração aos serviços SIEM para notificar alterações de status para recomendações para cada identidade por meio de uma interface dedicada. |
| 860 | Adicionado um novo recurso que permite aos usuários gerar um relatório em `.pdf` das informações do dashboard. |

## 22 de Dezembro de 2023

### Bug fixes

| Item | Descrição |
| ----- | ----- |
| 642 | Corrigido um erro no gráfico Cloud Health de seus ambientes que exibia incorretamente o valor percentual de saúde. Também foi aprimorada a precisão do marcador de percentual de saúde no gráfico. |

### Atualizações do Produto

| Item | Descrição |
| ----- | ----- |
| 585 | Atualizado o gerenciamento de possíveis erros na página de recomendações do **Cloud Entitlements**. Agora, se ocorrer algum erro durante o processo de carregamento das informações, um alerta será exibido dentro do componente específico, sem comprometer a integridade geral da página. |
| 54 | Atualizado o **Cloud Entitlements** para monitorar e listar usuários, grupos e aplicações do Azure. |
| 627 | Atualizado o **Cloud Entitlements** para escanear e oferecer recomendações de segurança para grupos da AWS. |
| 626 | Atualizado o **Cloud Entitlements** para escanear e oferecer recomendações de segurança para funções da AWS. |
| 737 | Atualizada a tela de Identidades para aprimorar a experiência do usuário. O termo "Seguir recomendação" foi substituído por "Exibir recomendação", e as informações agora serão exibidas em um menu suspenso. |
| 175 | Atualizadas as permissões necessárias para uma conta de serviço conectar um projeto do Google Cloud Platform (GCP) ao **Cloud Entitlements**. |

### Novas Funcionalidades

| Item | Descrição |
| ----- | ----- |
| 12 | Adicionada a integração com o Microsoft Azure. Os usuários agora podem conectar seus tenants ao **Cloud Entitlements**. |
| 599 | Adicionado o gráfico ***Cloud Health*** de seus ambientes à página inicial. O gráfico fornece *insights* sobre os níveis de segurança de seus ambientes em nuvem. 0% indica um ambiente inseguro e 100% representa um ambiente totalmente seguro. |
| 551 | Adicionada a funcionalidade de caminho de acesso, que fornece uma representação visual de como uma identidade está conectada a serviços específicos e permissões. |
| 615 | Adicionado o relatório de recomendações para centralizar todas as recomendações de segurança analisadas para as identidades registradas dentro dos seus Provedores de Serviços em Nuvem (CSPs). |
| 198 | Adicionada uma nova funcionalidade ao **Cloud Entitlements** para notificar os usuários quando uma chave de acesso da AWS é inválida. O usuário que conectou a conta receberá um e-mail junto de um alerta que será exibido nos relatórios de identidades e configuração da nuvem. |
| 29 | Adicionada uma nova funcionalidade para fornecer recomendações de segurança para usuários do Google Cloud Platform (GCP). |
| 27 | Adicionada uma nova funcionalidade que indica os serviços aos quais os Usuários do Google Cloud Platform (GCP) têm acesso. |
| 37 | Adicionada uma nova funcionalidade que fornece informações sobre as permissões de API das aplicações Azure. |
| 36 | Adicionada uma nova funcionalidade que fornece informações sobre as atribuições de diretório dos usuários do Azure. |
| 39 | Adicionada uma nova funcionalidade que lista os membros dos grupos do Azure. |
| 31 | Adicionada uma nova funcionalidade que indica os serviços que as contas de serviço do GCP tem acesso. |
| 34 | Adicionada uma nova funcionalidade que permite aos usuários personalizar as políticas de segurança para o Google Cloud Platform (GCP). |
| 30 | Adicionada uma nova funcionalidade que lista as chaves de acesso das contas de serviço do Google Cloud Platform (GCP). |

## 1 de Setembro de 2023

### Bug fixes

| Item | Descrição |
| ----- | ----- |
| 57 | Corrigido o erro no **Cloud Entitlements** que exibia data e hora de uso da política com formatação inadequada. |
| 318 | Atualizada a mensagem exibida ao acessar o relatório do **Cloud Entitlements**. A nova mensagem "Carregando" substitui a mensagem anterior "Não há entidades". |
| 413 | Corrigido um problema em que as políticas de usuário da AWS não estavam sendo exibidas no relatório. |
| 342 | Corrigido o retorno incorreto de recomendações para identidades do Google Cloud Provider. Esse erro estava causando inconsistências nas informações apresentadas pelos dashboards e relatórios. |

### Atualizações do Produto

| Item | Descrição |
| ----- | ----- |
| 55 | Alterada a forma de exibição das informações gerais no **Cloud Entitlements** para deixar mais claro para o usuário os casos de uso e quais ações realizar. |
| 64 | Adicionado um filtro padrão para todas as telas com opções de filtro para melhorar a consistência na filtragem. Também foi adicionado um filtro na tela de todos os usuários do tenant. |
| 251 | Atualizadas as tooltips que aparecem quando o usuário move o cursor sobre um ícone para seguir o mesmo padrão das tooltips da página inicial do **Cloud Entitlements**. |
| 318 | Atualizado o relatório de recomendações. A coluna de criticidade foi removida e agora o número de recomendações é apresentado em cores, que representam o nível de criticidade da recomendação, juntamente com um limite de 25 caracteres. |
| 317 | O **Cloud Entitlements** foi atualizado para utilizar os mesmos termos que os provedores de serviços em nuvem usam para suas identidades. Essa atualização substitui a categoria abstrata de *service principals*. |
| 430 | Aprimorados os filtros do **Cloud Entitlements** para exibir apenas os tipos de identidade relevantes associados ao provedor escolhido. O campo **Provedores** agora determina o que aparece nos campos **Tipo de Identidade** e **Ambiente**. |
| 410 | Atualizados o tamanho e alinhamento dos ícones do menu do **Cloud Entitlements**. |
| 465 | Atualizado o relatório de auditoria ao remover um campo de filtro que não apresentava valores. |
| 538 | Adicionados mais dados simulados no modo **Sandbox**, permitindo aos usuários testar várias funcionalidades, incluindo a configuração da nuvem, relatório de recomendações, políticas de segurança e a tela de detalhes. |
| 503 | Atualizada a gestão de possíveis erros na página inicial do **Cloud Entitlements**. Agora, se ocorrer um erro enquanto as informações são carregadas, um alerta será exibido dentro do componente específico, sem comprometer a integridade da página como um todo. |

### Novas Funcionalidades

| Item | Descrição |
| ----- | ----- |
| 26 | Adicionada uma nova funcionalidade que lista as identidades dos projetos Google Cloud Provider. |
| 28 | Adicionada uma nova funcionalidade que lista as funções dos usuários no Google Cloud Provider. |
| 32 | Adicionada uma nova funcionalidade para listar as funções das contas de serviço do Google Cloud Provider. |
| 486 | Adicionado o modo de teste no modo **Sandbox** para os usuários. Essa funcionalidade preenche o **Cloud Entitlements** com dados simulados, permitindo que os usuários experimentem o produto sem precisar conectar uma conta pessoal ou organizacional. |
| 348 | Adicionado um relatório de auditoria ao **Cloud Entitlements**. Essa nova funcionalidade permite que os usuários monitorem as ações realizadas dentro do produto. |
