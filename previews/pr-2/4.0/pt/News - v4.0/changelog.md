# v4.0 Changelog

**Data de lançamento**: 1 de abril de 2025

Confira abaixo as novidades, melhorias e erros corrigidos nesta versão do Segura.

---

## 💡 Nova Segura UI (Interface do Usuário) na Versão 4.0

A versão 4.0 apresenta uma reformulação completa de toda a interface do *software*, não se restringindo apenas a um módulo ou produto específico. Melhoramos a navegação, atualizamos os elementos visuais e otimizamos os layouts para aprimorar a usabilidade e proporcionar uma experiência mais intuitiva em toda a plataforma.

---

## PAM Core

### Bug fixes

| Item  | Descrição  |
| --- | --- |
| **SSGR-3095** | Corrigido um problema que ocorria quando os usuários tentavam acessar o histórico de chaves SSH dentro do módulo PAM Core. |
| **SSGR-2802** | Corrigido um bug que causava mensagens de "Internal Server Error" ao carregar o relatório Credenciais por Usuário com grandes conjuntos de dados (excedendo 1 milhão de linhas). O relatório agora lida com esses volumes de forma mais eficiente. |
| **SSGR-5162** | Corrigido um problema com importações de planilhas em português, onde o campo **Ativo*** era ignorado, fazendo com que todos os usuários fossem marcados como inativos, apesar de estarem definidos como "Sim". |

### Atualizações do Produto

| Item  | Descrição  |
| --- | --- |
| **SSGR-2912** | O fluxo de trabalho de registro de Dispositivo foi redesenhado para melhorar a usabilidade e a eficiência. |
| **SSGR-2606** | Adicionada uma nova experiência de usuário para o processo de registro de chave SSH, projetada para fornecer um fluxo de trabalho otimizado e intuitivo. Esta atualização permite que os usuários configurem facilmente chaves SSH navegando pelas etapas de registro, com controles aprimorados para mover entre os estágios. |
| **SSGR-760** | Foi adicionada uma tela de Credenciais à tela inicial do PAM Core, dando aos usuários uma visão centralizada de suas informações e ações relacionadas à credenciais. |
| **SSGR-5202** | Melhorada a funcionalidade de listagem de credenciais para usuários com permissões de "Operador Pam" implementando um filtro de grupo de acesso na seção de credenciais pai. |
| **SSGR-5805** | Adicionada a exibição de informações do Token TOTP na tela **Credential View**. Este campo só será exibido se a credencial tiver uma *Secret Key* registrada; caso contrário, ela permanecerá oculta. |

---

### PAM Core - Sessions

#### Bug fixes

| Item  | Descrição|  
|---|---|  
|**SSGR-2865**| Corrigido o erro do lockdown, agora ao ser ativado o acesso ao senhasegura fica bloqueado e somente os usuários administradores podem acessar o sistema.

#### Atualizações do Produto

| Item  | Descrição|  
|---|---|  
|**SSGR-1963**| Corrigido o erro onde ao realizar a pesquisa de usuários, apareciam os dados de usuários sistêmicos no relatório **Usuários por grupo**.  |
|**SSGR-2764**| Reorganizado os campos na tela **Parâmetros de sistema**, agora organizados conforme o tipo da sessão a ser parametrizada. | 
|**SSGR-121**| Incluído campos no relatório de **Acesso excepcional** trazendo mais informações para o administrador.  |
|**SSGR-4189**| Removido as opções **Autenticação pelo app** e **Autenticação via web** do campo **Tipo** ao criar um RemoteApp.|
|**SSGR-5321**| Criado o envio de uma notificação automática, para o revisor, no início da revisão com informações sobre o prazo para concluí-la.|
|**SSGR-5319**| Criado a configuração para estipular um prazo para que as revisões sejam feitas e as notificações sejam enviadas para o revisor e usuário.|
|**SSGR-4129**| Criado duas portas separados no Database proxy, para suporte das versões atuais (2022 e 2019) porta 1433 e as versões antigas (2017 e abaixo) porta 1435, do SQL Server.|
|**SSGR-5561**| Criado o relatório de Revisão e certificação de políticas de acesso, para que o administrador tenha visibilidade de todas as políticas de acesso cadastradas e seus status.|

#### Novas Funcionalidades

| Item  | Descrição|  
|---|---|
|**SSGR-3706**| Criado a automatização no processo de geração de wallet de usuário no Database Proxy Oracle.|
|**SSGR-4048**| Implementado o sistema de recertificação de acessos privilegiados, realizando a revisão e validação periódica dos acessos.|


---

### PAM - Settings

#### Bug fixes

| Item  | Descrição |  
|---|---|  
| **SSGR-3116** | Foi corrigido o tipo de conteúdo `Content-Type` retornado pela API SCIM durante a integração com a Microsoft. A API agora responde corretamente com `application/scim+json` quando solicitado. |  
| **SSGR-3702** | Foi corrigida uma inconsistência nos IDs retornados pela API SCIM. Os IDs agora correspondem corretamente aos utilizados nas operações de API, eliminando erros de referência de usuário e garantindo maior confiabilidade nas integrações SCIM. |  
| **SSGR-3557** | Foi corrigido um problema nos PDFs gerados, que não apresentavam os gráficos de linha nem os gráficos de pizza, além de exibir valores incorretos em relação aos apresentados nas tabelas. |  
| **SSGR-3555** | Foi corrigido um problema na contabilização durante a criação de um dispositivo, onde, ao preencher os campos obrigatórios, o sistema erroneamente contabilizava todos os campos juntamente com o dispositivo e a credencial. |  
| **SSGR-3468** | Foi corrigido um problema na legenda próxima ao gráfico de "Active X In Use", onde as traduções estavam incorretas e as palavras não tinham a devida separação, afetando tanto a versão em inglês quanto em português. |  
| **SSGR-3464** | Foi corrigido um erro no dashboard de "Users", onde as criações de usuários não estavam sendo corretamente contabilizadas em "Registered Users", e as sessões ativas não estavam refletidas em "In Use Users" após as ações de incremento. |  
| **SSGR-5144** | Foi corrigido um erro onde o mapeamento de atributos SCIM na integração com Azure AD não ocorria da forma esperada. O ajuste permite a sincronização adequada das Roles dos usuários durante o provisionamento automático. |  

#### Atualizações do Produto

| Item  | Descrição |  
|---|---|  
| **SSGR-2393**  | A new role called User Management has been added to the system. This new role concentrates all the permissions necessary for the effective management of users, user groups, roles, departments and integration with external authentication systems. |  

#### Traduções

| Item  | Descrição |  
|---|---|  
| **SSGR-1561**  | Foi corrigido um problema de localização para usuários com preferência de idioma em francês. As mensagens de informação agora são exibidas corretamente ao clicar nos ícones de informação. |  
| **SSGR-1561**  | Foi ajustado o *layout* da mensagem de informação no grupo de acesso do Domum. |  
| **SSGR-3790**  | A string de informação presente em **Configurações \> Políticas de segurança e rede \> ITSM \> Adicionar \> GLPi ITSM** foi devidamente localizada de acordo com o idioma escolhido pelo usuário. |  

---

## Orbit Server Manager

### Atualizações do Produto

|Item|Descrição|  
|---|---|  
|**SSGR-4775**| oi implementado o comando `orbit app maintenance` para ativar (`enable`) ou desativar (`disable`) o modo de manutenção da aplicação. Também foi adicionada uma atualização no comando de status, que agora exibe o estado do modo de manutenção. Quando o modo de manutenção está ativo, as tarefas automáticas agendadas não são processadas, mas as tarefas adicionadas diretamente na fila continuam sendo executadas. |
|**SSGR-66**| Foi implementada uma nova experiência de configuração de Token MFA, com um wizard intuitivo para métodos OTP e Radius. O processo inclui navegação fluida entre etapas através de indicadores visuais, permitindo que os usuários avancem, retrocedam ou pulem etapas conforme necessário. A interface foi otimizada para garantir uma configuração sem travamentos. |

### Novas Funcionalidades

|Item|Descrição|  
|---|---|  
|**SSGR-5612**|  Foi adicionada a seleção de fuso horário no menu pessoal. |

---

## User Behavior

### Atualizações do Produto

|Item|Descrição|  
|---|---|  
|**SSGR-1813**| Mudanças de tela realizadas no módulo **User Behavior**. As seções **Configurações de sessão** e **Configurações da visualização de senhas** foram transformadas em menus e se encontram dentro de **User Behavior \> Gerenciamento**. A seção **Identificação contínua** foi removida do módulo **User Behavior** e agora se encontra em **Configurações \> Políticas de segurança e rede \> Segurança de autenticação**.  
|**SSGR-4951**| Corrigidas as cores das linhas e barras dos gráficos de **Sessões e Consultas** em **User Behavior \> Dashboard \> Análise do comportamento** para refletir a identidade visual do Segura. |

---

## A2A

### Bug fixes

|Item|Descrição|  
|---|---|  
|**SSGR-4315**| Corrigido o problema que causava um erro de *Database Error* ao tentar salvar uma aplicação com um Amazon AWS ARN vazio.

---

## Discovery

### Bug fixes

|Item|Descrição|  
|---|---|  
| **SSGR-3609** | Corrigido o erro no campo **Bloqueado** do relatório de credenciais do **Discovery**, onde não estava refletindo corretamente o valor real do campo.  
|**SSGR- 5001** | Corrigido o erro de digitação ao salvar um registro editado.  
| **SSGR-4988** | Corrigido o erro em que os certificados do tipo AWS não estavam sendo listados no cadastro.

---

## Endpoint Privilege Manager

### 💡 Aviso de Renomeação de Produto

:::(info) (Aviso de Renomeação de Produto)
O produto anteriormente identificado como **GO Endpoint Manager** foi oficialmente renomeado para **Endpoint Privilege Manager (EPM)**. Esta alteração está refletida na interface do produto e na documentação associada.
:::

### EPM Windows

#### Bug fixes

| Item | Descrição |
| --- | --- |
| **EPM-22** | Corrigido: O *workflow* com acesso emergencial não funcionava, impedindo novas solicitações ou acesso emergencial após expiração. Agora permite novas solicitações e acesso emergencial. |
| **EPM-94** | Corrigido: Ocorreu uma exceção ao fechar a tela de elevação do *workflow* após a expiração do acesso. Notificações claras foram implementadas para o tempo de acesso expirado. |
| **SSGR-344** | Corrigido: Aplicações como Reconhecimento de Fala e Assistência Rápida agora são elevadas corretamente sem erros. |
| **SSGR-478** | Melhorado: Normalização do grupo de *tokens* de usuários e elevação de privilégios para evitar erros de acesso em certas aplicações. |
| **SSGR-1594** | Corrigido: Aplicações em caminhos de listas de negação são corretamente bloqueadas de execução, mesmo com caminhos temporários. |
| **SSGR-1623** | Corrigido: Erro de impersonação com elevação de AD resolvido ao recuperar o diretório inicial do serviço. |
| **SSGR-2141** | Corrigido: Mensagens de ativação enganosas corrigidas ao inserir dados inválidos. |
| **SSGR-2324** | Corrigido: Problema onde Análise de Malware com Token de API não gerava eventos foi resolvido. |
| **SSGR-2362** | Corrigido: Fluxo de aprovação corrigido para garantir que a precedência de políticas siga a hierarquia de Usuário \> Workstation \> Geral, evitando que configurações gerais sobreponham políticas específicas de dispositivo. |
| **SSGR-2373** | Corrigido: Sessões SSH agora funcionam corretamente com o EPM Windows 3.31.0.3 e o agente EPM Windows 3.31.1-7. |
| **SSGR-2374** | Corrigido: Sessões RDP agora funcionam corretamente sob a mesma configuração de cliente e servidor. |
| **SSGR-2383** | Corrigido: O instalador agora gera e atualiza corretamente os números de versão, começando na versão 3.31.0.4. |
| **SSGR-2439** | Corrigido: A elevação de aplicações no Windows Server 2016 funciona corretamente sob configurações da versão 3.28. |
| **SSGR-2460** | Corrigido: As automações de tipo aplicação agora são executadas sem gerar erros. |
| **SSGR-2462** | Corrigido: Configurações de verificação de diretórios e arquivos agora mostram ações de criação e exclusão de arquivos. |
| **SSGR-2463** | Corrigido: O bloqueio de acesso à rede agora funciona em todos os navegadores, incluindo Edge, Chrome e Firefox. |
| **SSGR-2539** | Corrigido: Erros de gravação de sessões foram resolvidos com parâmetros atualizados e configurações de acesso à lista. |
| **SSGR-2561** | Corrigido: Problemas de interface com o cliente resolvidos, mantendo a disponibilidade das aplicações e a inserção de tokens MFA sem erros. |
| **SSGR-2563** | Corrigido: Ajustes para regras de armazenamento de credenciais e uso de UAC impactando o modo offline. |
| **SSGR-2580** | Corrigido: Atualizações automáticas funcionam corretamente, permitindo instalações de versão do cliente sem problemas. |
| **SSGR-2581** | Corrigido: As automações web agora são executadas com a versão mais recente do Chrome, resolvendo problemas de incompatibilidade. |
| **SSGR-2595** | Corrigido: Erros de DLL durante operações "runas" resolvidos ao refinar o fluxo de elevação e registro de erros. |
| **SSGR-2601** | Corrigido: Problemas com execução de automações web resolvidos; driver do Chrome atualizado. |
| **SSGR-2689** | Corrigido: Erros e problemas de privilégios que impediam a execução de automação de aplicação abordados. |
| **SSGR-2759** | Corrigido: O MFA para login agora opera corretamente, solicitando autenticação conforme esperado. |
| **SSGR-2801** | Corrigido: Erros com entrada de *token* e IP durante a configuração do cliente foram resolvidos, permitindo funcionalidade completa. |
| **SSGR-2861** | Corrigido: Erro (1332) em elevações de aplicações de usuário impersonado corrigido, garantindo resolução de credenciais. |
| **SSGR-2897** | Corrigido: Erros de aprovação de fluxo de trabalho durante a elevação de aplicação resolvidos, garantindo manuseio válido do fluxo de trabalho. |
| **SSGR-2922** | Corrigido: Problemas com usuários de domínio com o EPM Windows resolvidos. |
| **SSGR-2931** | Corrigido: Mensagem clara fornecida ao acessar o Cliente de um dispositivo desativado. |
| **SSGR-2981** | Corrigido: Problemas de elevação de privilégio dentro de configurações de diretórios específicos resolvidos. |
| **SSGR-2994** | Corrigido: Erros de relatório de eventos corrigidos, garantindo pacotes de dados completos antes do envio ao servidor. |
| **SSGR-3091** | Corrigido: Exceções não tratadas em logs de serviço resolvidas para prevenir término do serviço. |
| **SSGR-3094** | Corrigido: Opção de acesso emergêncial agora é exibida corretamente em condições configuradas de aprovação de aplicação. |
| **SSGR-3100** | Corrigido: As automações do Remote App agora são executadas sem erros de inicialização. |
| **SSGR-3114** | Corrigido: A submissão de justificativas para aplicativos funciona corretamente agora, prevenindo erros de resposta do servidor. |
| **SSGR-3261** | Corrigido: Os processos de elevação e justificativa agora são concluídos com sucesso, resolvendo falhas anteriores. |
| **SSGR-3270** | Corrigido: Problemas intermitentes de congelamento do cliente abordados, garantindo operação responsiva. |
| **SSGR-3320** | Corrigido: Erro "Erro Inesperado" ocasional durante elevação com justificativa e ID de governança corrigido. |
| **SSGR-3361** | Corrigido: Erro "Erro na operação do processo" que impedia a elevação de aplicação resolvido. |
| **SSGR-3391** | Corrigido: Erros de "Referência de objeto" durante operações "run as" sob condições específicas resolvidos. |
| **SSGR-3393** | Corrigido: Erro no banco de dados durante a salvamento de parâmetros segregados agora corrigido. |
| **SSGR-3918** | Corrigido: Erro de automação relacionado ao navegador que ocorria na primeira execução com a nova versão do cliente resolvido. |
| **SSGR-4225** | Corrigido: Erro 500 no fluxo de aprovação de aplicação que ocorria sempre que um pedido de aprovação era enviado ao servidor, garantindo processamento e manuseio de resposta mais suaves. |
| **SSGR-4229** | Corrigido: Problemas no Recorder que causavam carregamento indefinido e alertas no cliente, especificamente para ONS, resolvidos. |
| **SSGR-4325** | Corrigido: Erros de tela azul durante instalação em massa abordados ao refinar a integração do instalador no Windows. |
| **EPM-154** | Corrigido: Erro tipográfico na mensagem de erro de sessão remota. Corrigido para "O segredo desta credencial não está disponível agora." |

#### Atualizações de Produto

| Item | Descrição |
| --- | --- |
| **EPM-194** | Melhorado: Adicionada compatibilidade do módulo de automação do EPM Windows com a versão mais recente do Chromium para suportar atualizações do Chrome. |
| **SSGR-373** | Adicionado parâmetro de MFA para elevação de aplicações com opções para autenticação OTP e Smart Card. |
| **SSGR-972** | Adicionado filtro "Cliente" no relatório de eventos para especificar relatórios de plataforma. |
| **SSGR-3135** | Fluxo de aprovação aprimorado para visualização/cópia de senhas de credenciais, mantendo a funcionalidade esperada. |

#### Nova Funcionalidade

| Item | Descrição |
| --- | --- |
| **SSGR-1525** | Aplicação de políticas baseada em usuários, OUs e grupos de segurança ativada, aumentando a flexibilidade de configuração. |
| **EPM-411** | Introduzida uma nova interface para troca de senha no Windows para usuários do EPM. Quando a senha expira, os usuários são guiados por uma interface gráfica para definir uma nova senha, melhorando o processo de redefinição de senha dentro do fluxo de autenticação multifator (MFA), garantindo conformidade com políticas de segurança e gerando logs detalhados de auditoria. |

#### Segurança

| Item | Descrição |
| --- | --- |
| **SSGR-3200** | Privacidade aprimorada assegurando que o token de instalação do EPM não é mais visível em logs durante algumas condições de instalação, alinhando com as melhores práticas de segurança. |

---

### EPM Linux

#### Bug fixes

| Item | Descrição |
| --- | --- |
| **SSGR-4224** | Foi corrigido um erro onde, em determinadas situações, a instalação do cliente do EPM Linux disparava a mensagem de erro "too many arguments". |
| **SSGR-23** | Foi corrigido um erro onde, em sistemas mais antigos suportados (RedHat 6, Suse 11 e CentOS 6), as Políticas de Acesso não eram aplicadas corretamente, incluindo o controle de execução do processo `vim` e o bloqueio do processo `ls` para usuários específicos. Também foi corrigido o problema onde o comando para visualizar as políticas ativas no dispositivo não exibia resultados nessas distribuições. |

#### Atualizações do Produto

| Item | Descrição |
| --- | --- |
| **SSGR-444** | Foi adicionado suporte a Autenticação Multifator (MFA) para usuários de domínio do EPM Linux. A nova funcionalidade permite a configuração de diferentes métodos de MFA (TOTP, FIDO2, Push Notification) para usuários autenticados via Active Directory. |
| **SSGR-441** | Foi adicionado um novo instalador silencioso para o EPM Linux, permitindo a instalação sem necessidade de intervenção manual. Esta atualização possibilita a instalação em lote em múltiplos dispositivos simultaneamente, eliminando a dependência de MDM e acesso físico/remoto individual, otimizando significativamente o processo de *rollout* em ambientes corporativos de grande porte. |
| **SSGR-218** | Adicionado suporte para Ubuntu 22.04 LTS e Oracle Linux 8/9 na lista de sistemas operacionais compatíveis com o EPM Linux. |

---

## Executions

### Atualizações do Produto

| Item | Descrição |  
|---|---|  
|**SSGR-1777**| Incluído na tela **Perfil de credenciais** a opção para clonar um perfil.  

### Traduções

| Item | Descrição |  
|---|---|  
|**SSGR-2837**| Corrigido o erro do ícone de Aprovar na coluna **Ação** da tela de **Lista de Operações**, onde o *label* sempre aparecia em português independente do idioma selecionado.  
|**SSGR-4185**| Corrigido a tradução no nome da tela **Todas operações**.  
|**SSGR-4125**| Corrigido a tradução do resultado da busca feita nos campos **Change template**, **Enabling template** e **Disabling template** na janela **Configurar Perfil de Execução de Dispositivo**.  
|**SSGR-4127**| Corrigido o erro de tradução da *string* de confirmação de clonagem.  
	  
---

## MySafe

### Bug fixes

|Item|Descrição|  
|---|---|  
|**SSGR-2846**| Corrigido o problema em que o cabeçalho dos relatórios impressos do **MySafe** exibiam o filtro **id** mesmo após limpar todos os filtros.|  
|**SSGR-4004**| Corrigido o problema que impedia a conclusão da importação de senhas do **LastPass**.|

### Atualizações do Produto

|Item|Descrição|  
|---|---|  
|**SSGR-2144**| Adicionado o envio de email para usuários **MySafe** que recebem o compartilhamento de um item do **MySafe**. Nesse email, o usuário recebe um link que o direciona para a tela com o item compartilhado.

---

### MySafe Browser Extension

#### Bug fixes

| Item | Descrição |
| --- | --- |
| **SSGR-2935** | Implementada mensagem de erro que informa ao usuário a falha de conexão da extensão com o MySafe. |

#### Atualizações do Produto

| Item | Descrição |  
| --- | --- |  
|**SSGR-1885**| Adicionada a *badge* que indica a quantidade de senhas salvas na aba atual.  
|**SSGR-1885**| Adicionada funcionalidade que abre a extensão no modo **Aba atual** quando o usuário tem credenciais salvas para o site em que está navegando.|  
|**SSGR-1885**| Adicionado o comportamento da busca para aplicar automaticamente o foco no campo ao clicar na lupa e filtrar os registros em tempo real enquanto o usuário digita, eliminando a necessidade de pressionar `Enter` para realizar a pesquisa.  
|**SSGR-1885**| Adicionada a limpeza automática do filtro de pesquisa após clicar no botão **Voltar**.  
|**SSGR-1885**| Adicionada opção de desativar senha.  
|**SSGR-1885**| Adicionado botão **Ajuda** no menu de **Configurações** que direciona para a documentação da extensão.  
|**SSGR-1885**| Adicionada a funcionalidade que o cofre ao qual a extensão está conectada é aberto em uma nova aba ao clicar no logo do Segura ou no nome **MySafe**.  
|**SSGR-1885**| Renomeada a ação **Login** para **Preencher credenciais** para refletir com mais precisão que a extensão apenas preenche os campos de usuário e senha na aba aberta, sem abrir o site ou clicar no botão de login.  
|**SSGR-1885**| Adicionada mensagem de erro caso o usuário clique em **Preencher credenciais** sem que haja campos para preenchimento na página.  
|**SSGR-1885**| Adicionada a limpeza automática dos campos de usuário e senha antes do preenchimento, para evitar erros de autenticação causados por dados duplicados ou concatenados.  
|**SSGR-1885**| Adicionado o cálculo automático da força da senha durante a digitação.  
|**SSGR-1885**| Adicionada a funcionalidade de alteração de critérios para geração da senha aleatória pelo Segura.  
|**SSGR-1885**| Alterado o componente de **Tags** para exibir cada tag como um *chip* ou *badge* em vez de texto simples, melhorando a visualização e a identificação das *tags*.  
|**SSGR-1885**| Adicionada a funcionalidade de preenchimento automático do campo URL com a URL da aba atual durante a criação da senha.  
|**SSGR-1885**| Alterada a cor dos valores de exemplo nos campos para um tom mais claro, para evitar a impressão de que os campos já estão preenchidos.  
|**SSGR-33**| Adicionada compatibilidade da extensão **MySafe** com o navegador Firefox.  
|**SSGR-2983**| Adicionada a funcionalidade de reautenticação automática: ao clicar no campo de login, se a sessão da extensão estiver expirada, a extensão será aberta automaticamente e solicitará reautenticação.   
|**SSGR-3340**| Ajustados os parâmetros de *timeout* para a conexão da extensão com o cofre: 30 dias para expiração de sessão e 7 dias para expiração por inatividade.

---

## Segura Mobile App

### Atualizações do Produto

|Item|Descrição|  
|---|---|  
|**SSGR-2337**| Adicionada a opção de filtrar senhas e anotações por **Tags**.  
|**SSGR-2337**| Adicionada a opção de geração aleatória de senha pelo Segura e configuração dos critérios da senha.  
|**SSGR-2337**| Adicionado o cálculo automático da força da senha durante a digitação/geração.  
|**SSGR-2337**| Adicionados os botões de **Salvar** e **Cancelar** no cabeçalho do aplicativo móvel **Segura**.  

---

## Domum Remote Access

### Bug fixes

| Item | Descrição |
| --- | --- |
| **SSGR-3384** | Corrigido um bug onde o relatório **Usuários internos** não estava atualizando após um novo usuário interno ser adicionado. |

### Atualizações do Produto

| Item | Descrição |
| --- | --- |
| **SSGR-1570** | Melhorado os emails do **Domum** para terem mais dados relacionados aos cofres e ambientes. |
| **SSGR-2306** | Melhorado a mensagem de erro do **Domum** quando um usuário tenta efetuar login de um local bloqueado. |
| **SSGR-3142** | Atualizados os textos do menu lateral do Domum. |
| **SSGR-34** | Interface do desktop do Domum aprimorada para usuários limitados. |

### Novas Funcionalidades

| Item | Descrição |
| --- | --- |
| **SSGR-3085** | Adicionado uma página inicial no Domum. |

### Traduções

| Item | Descrição |
| --- | --- |
| **SSGR-5481** | Corrigido um bug onde, ao visualizar a senha completa no **Domum**, o nome do botão era exibido em português apesar do idioma do cofre. |

---

## Certificate Manager

### Bug fixes

| Item | Descrições |
| --- | --- |
| **SSGR-2349** | Corrigido um bug onde, ao exportar o relatório **Certificados Automatizados** no formato `.csv`, a coluna **Estado** ficava em branco.  |
| **SSGR-4205** | Corrigido um bug onde os textos não estavam escritos corretamente no menu **Perfis de publicação**. |
| **SSGR-4592** | Corrigido um bug onde certificados não poderiam ser publicados em servidores IIS depois de atualizar o Segura para versão 3.33. |
| **SSGR-4545** | Corrigido um bug onde certificados A1 não estavam sendo descobertos. |
| **SSGR-4815** | Corrigido um bug onde o usuário não conseguia publicar certificados utilizando o plugin Apache. |

### Atualizações do Produto

| Item | Descrições |
| --- | --- |
| **SSGR-4903** | Atualizado o produto para padronizar a coluna **Status** de relatórios específicos. |

### Traduções

| Item | Descrições |
| --- | --- |
| **SSGR-4193** | Corrigido um bug onde dois menus eram exibidos em Francês independente do idioma do cofre. |
| **SSGR-4195** | Corrigido um bug onde o temporizador era exibido somente em Português independente do idioma do cofre. |
| **SSGR-4194** | Corrigido um bug onde os textos no menu **Certificados** eram exibidos em Português independente do idioma do cofre. |

---

## Network Connector

### Bug fixes

| Item | Descrição |  
|------|--------------|  
| SSGR-2455 | Resolvido um problema onde conectores desabilitados ainda estavam visíveis na visualização de detalhes do NC, potencialmente causando confusão durante auditorias. A interface agora reflete com precisão apenas os conectores ativos, melhorando clareza e experiência do usuário. |

### Product Updates

| Item | Descrição |  
|------|-------------|  
| SSGR-5961 | Melhorado Relatórios do Network Connector para que a largura da coluna de impressão digital permaneça fixa ao clicar para exibi-la. |

---

## DevOps Secret Manager

### Bug fixes

| Item | Descrição |  
|------|--------------|  
| **SSGR-3285** | Foi corrigido um erro onde ao criar uma aplicação e navegar até as autorizações, a aplicação não ficava visível para interação. |  
| **SSGR-4085** | Foi corrigido um erro na exibição de mensagens de erro de nome repetido ao criar aplicações DSM e A2A. Anteriormente, ao criar uma aplicação DSM com um nome já existente em A2A, a mensagem era exibida em português, independentemente do idioma configurado no cofre. |  
| **SSGR-4084** | Foi corrigido um erro de capitalização no botão "Novo segredo" na interface em português, que anteriormente era exibido como "novo segredo" sem a letra maiúscula no início. |  
| **SSGR-4003** | Foi corrigido um erro na interface onde o botão "New" na tela de automações do DSM era exibido em inglês, independentemente do idioma configurado no cofre. |  
| **SSGR-3560** | Foi corrigido um erro nos gráficos de linhas "Secrets consultation by day" e "Secrets consultation by week", que não estavam atualizando adequadamente, mesmo após o recebimento de novos dados. |  
| **SSGR-3560** | Foi corrigido um erro em que os gráficos não respeitavam o limite de 10 categorias e não agrupavam categorias adicionais sob a etiqueta "Other". |  
| **SSGR-3510** | Foi corrigido um erro no filtro "Enabled", que anteriormente funcionava apenas para os cards, mas não atualizava corretamente os valores de quantidade nos gráficos de rosca, nem a proporção das quantidades nos gráficos de rosca, linha e pizza. |  
| **SSGR-3500** | Foi corrigido um problema no gráfico "Secrets Consultation By Day", que anteriormente permanecia visível mesmo quando não havia dados disponíveis, em vez de ocultar as informações e exibir a mensagem "No Information To Display". |  
| **SSGR-4191** | Foi corrigido um bug no cadastro de secrets que ocorria ao associar duas credenciais com dois IPs. |  
| **SSGR-4170** | Foi corrigido um bug onde algumas traduções no DSM não estavam sendo exibidas corretamente nas abas de detalhes da secret. |  
| **SSGR-4816** | Foi corrigido o comportamento da criação de aplicações no RunB para preservar configurações existentes quando profiles não são especificados. Anteriormente, os campos `cloud_profiles` e `credential_profiles` eram sobrescritos com valores vazios, impedindo o provisionamento dinâmico. Adicionalmente, foram ajustadas as permissões da autorização para incluir acesso adequado ao recurso Application, permitindo a consulta de secrets provisionadas. |

### Atualizações do Produto

| Item | Descrição |  
|------|--------------|  
| SSGR-2906 | Foi aprimorado o endpoint de listagem de Secrets no DSM para incluir detalhes importantes das credenciais vinculadas. |  
| SSGR-2942 | Foi aprimorada a codificação dos dados criptografados pelo DSM. As chaves criptográficas agora retornam os dados em formato base64, em vez de texto plano. |  
| SSGR-1791 | Foi adicionado campo **IP** na variável de retorno para credenciais de banco de dados. |  
| SSGR-5316 | Foi alterado o título do separador de dashboards no menu lateral do DSM de "Dashboard" para "Dashboards", refletindo adequadamente a existência de múltiplos dashboards no módulo. |  
| SSGR-3491 | Foi corrigido o esquema de cores do gráfico de pizza para alinhar com a nova identidade visual do Segura. A atualização também inclui melhorias na ordenação das legendas, garantindo a exibição correta das 10 categorias máximas, e corrige um bug onde dispositivos com a string "Other" causavam falha no agrupamento e na renderização do gráfico. |  
| SSGR-3525 | Foi implementado um novo sistema avançado de busca para Secrets, com suporte específico para diferentes tipos de credenciais. |  

---

## Cloud IAM

### Bug fixes

| Item | Descrição |
| --- | --- |
| **SSGR-4158** | Corrigido um bug em que o usuário estava recebendo erros ao conectar uma conta da AWS no **Cloud IAM** versão 4.0. |
| **SSGR-4159** | Corrigido um bug em que uma *string* não formatada era exibida quando o usuário conectava uma conta do Google Cloud no **Cloud IAM**. |

### Atualizações do Produto

| Item | Descrição |
| --- | --- |
| **SSGR-5766** | Adicionado as colunas **Ambiente** e **Sistemas** no relatório **Credenciais**. |

### Nova Funcionalidade

| Item | Descrição |
| --- | --- |
| **SSGR-4796** | Adicionado um novo relatório chamado **Identidades de máquina** no painel **Relatório**. |

---

## Task Manager

Nenhuma alteração.

---

## Arbitrator

Nenhuma alteração.

---

## Load Balancer

Nenhuma alteração.

---

## APIs Segura

|Item| Descrição|  
|---|---|  
|**SSGR-3368**| Implementada a restrição que impede a criação de credenciais via API com caracteres especiais no campo `identifier`. Esta mudança assegura a consistência entre as operações realizadas via API e a interface gráfica, evitando problemas de usabilidade e possíveis vulnerabilidades de segurança, garantindo que os `identifiers` sigam o mesmo padrão em ambas as interfaces.  
|**SSGR-4522**| Corrigido e erro que causava a atualização automática do \`identifier\` ao atualizar uma credencial com os valores de `username`, `hostname` e `ip`. Agora, o `identifier` só será atualizado se o usuário inserir um novo valor explicitamente ao atualizar a credencial.

---

## Outras versões

Você pode encontrar as [versões antigas da documentação aqui](https://docs.senhasegura.io/docs/pt/old-versions).  