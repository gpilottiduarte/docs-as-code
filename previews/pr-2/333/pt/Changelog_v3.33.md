# Changelog v3.33

**Release date**: TBD

Verifique abaixo as Novas Funcionalidades, melhorias e erros corrigidos nesta versão do senhasegura.

* * *

## ⚙ Changelog per module

### PAM - Credential Management

#### Atualizações do Produto

| Item | Descrição |
|---|---|
| 2571 | Implementado a geração automática do campo `identifier` com base em UUID (Universal Unique Identifier) na aba de Configurações adicionais da credencial. Se o usuário não informar o `identifier` ao criar a credencial, o sistema criará um identificador único automaticamente. O valor gerado pode ser modificado posteriormente. |

#### Novas Funcionalidades

| Item | Descrição |
|---|---|
| 2060 | Corrigido o comportamento dos grupos de acesso que anteriormente não consideravam corretamente a sequência dos níveis dos aprovadores, permitindo o cadastro de aprovadores com níveis fora de ordem (1, 2 e 3). Foi adicionada uma validação que agora impede o salvamento do grupo de acesso se os níveis dos aprovadores não seguirem a sequência correta. Por exemplo, não é permitido ter aprovadores nos níveis 1 e 3 sem um aprovador no nível 2. |

### PAM - Session Management

#### Bug fixes

| Item | Descrição |
|---|---|
| 2807 | Corrigido o erro onde o livestream das sessões HTTP no Web Proxy não era encerrado quando o usuário encerrava a sessão.|
| 2851 | Corrigido o erro de acesso com conectividade x11 na porta 22.|
| 2871 | Melhoria no Bloqueio do Painel de Emergência. Ajuste no Painel de Emergência para garantir que sessões Web HTTP, SSH e TELNET sejam corretamente bloqueadas durante o período de congelamento. Assegurando maior conformidade com as políticas de acesso durante situações de emergência.|
| 2960 | Corrigido o comportamento do alto consumo de CPU ao iniciar sessões de Database Proxy Ms SQL Server.|
| 2974 | Remoção de funcionalidades em Parâmetros de Sessão Web. Foram removidos o campo Extra e as opções Virtual HTML Keyboard e External Virtual Keyboard do campo Ação nos Parâmetros de Sessão Web.|
| 3278 | Corrigido erro de travamento no início de sessões MSSQL através do client DBeaver.| 
| 3844 | Corrigido o erro ao iniciar a sessão no Terminal Proxy com a conexão Telnet.|
|3924| Corrigido o erro onde aparecia a mensagem de Servidor inválido no momento da conexão via Database Proxy Oracle.|
|3925| Corrigido o erro que não permitia a realização da sessão via Database Proxy quando o usuário possuí um Token TOTP.|

#### Atualizações do Produto

| Item | Descrição |
|---|---|
| 2364 | O Change Audit agora também audita sessões utilizando o Terminal Proxy.|
| 3025 | Ajuste para aceitação do nome de usuário da credencial contendo o caracter @ em sessões Terminal Proxy via prompt de comando.|
| 2541 | Removido o campo Processar os grupos individualmente, dos Parâmetros do sistema na seção Controle de Acesso. Com isso a interface fica mais intuitiva e o gerenciamento mais simplificado sem alterar a funcionalidade existente.|
| 1757 | A permissão das ações de Visualização de Vídeos e Livestream foi dividida em duas permissões distintas, permitindo a definição de acessos mais granulares para administradores e auditores, alinhando as permissões com as responsabilidades específicas de cada usuário.|
| 2329 | Incluído aviso nas sessões via Terminal Proxy e RDP Proxy, quando ocorrer troca ou expiração de senha, orientando o usuário em como realizar o cadastro de nova senha.|

#### Novas Funcionalidades

| Item | Descrição |
|---|---|
| 3111 | Adicionadas novas strings de conexão para os proxies ao serem utilizados com multi-tenant.|

### PAM - Settings

#### Bug fixes
| Item | Descrição |
|---|---|
| 2621 | Corrigido problema na geração do token OAuth2 após atualização para Debian 12, onde o formato enviado para geração era diferente do esperado anteriormente. |
| 2847 | Corrigido erro no backup de credenciais via RSync que ocorria quando a credencial utilizada continha caracteres especiais. |
| 2253 | Corrigido o problema de conversão dos caracteres &, < e > para entity codes no campo de senha do formulário de usuários quando o formulário é recarregado devido a um erro nos dados. |
| 2813 | Corrigido o erro internal server error que ocorria ao verificar e confirmar atualizações disponíveis, causado por um argumento incorreto do tipo array em vez de string no processo de salvamento de tarefas. |
| 2670 | Corrigido o problema que fazia com que a descrição de um papel clonado aparecesse como uma string I18N editável. |

#### Atualizações do Produto
| Item | Descrição |
|---|---|
| 2389 | Foi adicionada uma mensagem orientando o usuário sobre a impossibilidade de ter o mesmo email cadastrado no Domum e no PAM. |
| 1692 | Adicionado o campo Data de Desativação, referente ao usuário, na aba de usuários. |
| 2673 | Adicionada política de senha não parametrizável para o usuário mt4adm, aplicável a partir da versão 3.33 do senhasegura. A política inclui: máximo de três tentativas de senha, mínimo de 12 caracteres, pelo menos uma letra minúscula, uma maiúscula, um número, um caractere especial, 10 mudanças em relação à senha anterior e proibição de senhas presentes em wordlists comuns. |
| 1757 | A permissão das ações de Visualização de Vídeos e Livestream foi dividida em duas permissões distintas, permitindo a definição de acessos mais granulares para administradores e auditores, alinhando as permissões com as responsabilidades específicas de cada usuário. |
| 2380 | Foi adicionado um aviso na tela de cadastro do provedor OpenID, onde agora é informado ao usuário sobre a obrigatoriedade de preencher o campo OpenID endpoint configuration ou URL dos demais endpoints. O aviso em tela foi modificado para dar conta da mudança, agora ele irá aparecer, em vermelho, logo acima dos campos indicados com a mensagem: “Preencha ao menos o OpenID endpoint configuration ou as URLs dos demais endpoints”. |
| 2445 | Foram atualizadas bibliotecas e ferramentas utilizadas pela solução senhasegura. |
| 3914 | Foram retirados os menus Scripts, Tarefas, Processos, Agendamento e Em execução que eram acessíveis via Grid Menu > Configurações > Serviços > Robôs e tarefas. Essa retirada se dá por conta da mudança de arquitetura. |

#### Traduções
| Item | Descrição |
|---|---|
| 3788 | Foi corrigido um erro de digitação na seção Behavior nos Parâmetros de sistema. Onde antes estava escrito Visualizção agora está escrito Visualização. |
| 3769 | Foi corrigido um erro de tradução onde as colunas Start Date e End Date, presentes no relatório de Processamento de importação em lote, acessível em Configurações > Gestão de usuários > Batch import eram mostradas em português mesmo quando o idioma do usuário estava configurado para inglês. |
| 3840 | Foram corrigidos erros de digitação nas permissões de usuários em inglês. Onde antes se lia List all Virutal Machines resources agora se lê List all Virtual Machines resources; onde antes se lia View Virutal Machines resources details, agora se lê View Virtual Machines resources details e, onde antes se lia Create and update to all provisioning resrouces, agora se lê Create and update all provisioning resources. |
| 3762 | Foi corrigido um erro de tradução na frase em inglês na tela de backup em Orbit Config Manager > Settings > Backup. Onde antes se lia How will the how to send backup files? agora se lê How will  backup be sent?.|

### Orbit

#### Bug fixes

| Item | Descrição |
|---|---|
| 3414 | O comando orbit apt-fix --force foi deprecado. Caso o administrador tente utlizar o comando, receberá a mensagem: “This command is deprecated. Use orbit repository configure stable”. |

#### Atualizações do Produto

| Item | Descrição |
|---|---|
| 3414 | Foi implementado o comando orbit repository configure para que admnistrador possa realizar a configuração dos repositórios dos pacotes de atualização do senhasegura. |

### Task Manager

#### Atualizações do Produto

| Item | Descrição |
|---|---|
| 2048 |Atualizada a logo do Task Manager para refletir o padrão de cores das demais logos dos produtos senhasegura, proporcionando uma identidade visual coesa e reconhecível em toda a linha de produtos.|

#### Removed

| Item | Descrição |
|---|---|
| 3069 |Removidos os parâmetros Permitir transferência de arquivos*, Limite máximo de transferência (em kb*) e Tempo de retenção dos arquivos (em dias, 0 para ilimitado)* da tela Configurações do sistema. |

### Behavior

#### Bug fixes

| Item | Descrição |
|---|---|
| 765 |Corrigido erro de escala nos gráficos de Sessões e Consultas que incorretamente mostrava mais sessões e consultas com risco do que total de sessões e consultas. |

#### Atualizações do Produto

| Item | Descrição |
|---|---|
| 765 |Renomeadas as tabelas disponíveis em Dashboards > PAM Core > Behavior. Os nomes agora são 5 principais sessões com risco, 5 principais consultas com risco, Últimas 5 sessões com risco e Últimas 5 consultas com risco. |
| 765 |Renomeado o termo acessos para sessões em gráficos e tabelas para maior clareza e consistência. |

#### Novas Funcionalidades

| Item | Descrição |
|---|---|
| 785 |Adicionada a funcionalidade Continuous Identification que solicita ao usuário uma verificação adicional da sua identidade após a detectação de ações incomuns durante uma sessão ou visualização de senha. |

### A2A

#### Bug fixes

| Item | Descrição |
|---|---|
| 2816 |Corrigido o problema que resultava em um Internal Server Error ao criar uma autorização para uma aplicação. Este erro ocorria após preencher as configurações de Segurança, usando o caracter * no campo IPs autorizados e selecionando a opção Leitura e escrita em Permissão do recurso PAM*, seguido de clicar em Salvar.|

#### Atualizações do Produto

| Item | Descrição |
|---|---|
| 2900 |Corrigida a inconsistência nas respostas das API de credenciais e chaves SSH em relação ao campo `identifier`, que anteriormente era nomeado como `tag`. Agora, as APIs retornam a nomenclatura correta, alinhadas com os parâmetros de requisição e eliminando qualquer confusão. Esta atualização afeta os métodos `GET` e `POST` por `id` para o endpoint `/api/pam/credential/` e o método POST `para /api/pam/key`.|
| 2571 |Implementada a geração automática do campo `identifier` com base em UUID (Universal Unique Identifier) na aba de Configurações adicionais da credencial. Se o usuário não informar o `identifier` ao criar a credencial, o sistema criará um identificador único automaticamente. O valor gerado pode ser modificado posteriormente. O usuário ainda poderá modificar esse valor posteriormente para algo que seja mais significativo ou adequado ao seu ambiente. |

### Discovery

No changes.

### PEDM - Linux

No changes.

### PEDM - AD Bridge

No changes.

### PEDM - Windows

#### Bug fixes

| Item | Descrição |
|---|---|
| 3463 | Corrigido erro "Error on receive request operation, please check the backend system log" ao abrir o agente. |
| 3271 | Corrigido erro que apresentava messagem 'SQLite Error 10: disk I/O error' no agente ao tentar sincronizar políticas ou elevar privilégios em aplicativos. |
| 3669 | Resolvido um problema que causava a mensagem "Ocorreu um erro ao tentar acessar o banco de dados" ao executar o programa GRRF através do senhasegura.go. |
| 3610 | Resolvido problema em que a elevação de privilégios não funcionava corretamente em drives de rede compartilhados ao usar o senhasegura.go. |
| 2363 | Resolvido um problema em que o fluxo de acesso de emergência no GO Windows 3.31.0.3 e 3.31.1-7 não concedia o acesso esperado às aplicações. |

#### Atualizações do Produto

| Item | Descrição |
|---|---|
| 3134 | Adicionado Windows 11 a lista de versões suportadas, para funcionalidades principais. |

### DSM (DevOps Secret Manager)

#### Bug fixes

| Item | Descrição |
|---|---|
| 2818 | Corrigido o problema que permitia inserir um horário de início superior ao horário de término na janela de justificativa ao visualizar os detalhes de um secret com um usuário em um grupo de acesso que exige justificativa. |

#### Atualizações do Produto

| Item | Descrição |
|---|---|
| 2779 | Ajustada a validação de nomes de credenciais de forma a para permitir o uso de hífen ("-"), alinhando-se com as regras do Azure e garantindo a execução correta de automações que utilizam segredos com esse caractere.. |

### Cloud IAM

#### Bug fixes

| Item | Descrição |
|---|---|
| 3639 | Corrigido o problema de exibição de uma mensagem de erro durante a criação de contas do Google Cloud no módulo Cloud IAM. |

### Executions

#### Bug fixes

| Item | Descrição |
|---|---|
| 2452 | Corrigido o erro no template de troca de senha em uma aplicação web utilizando Selenium no navegador Safari.|

#### Atualizações do Produto

| Item | Descrição |
|---|---|
| 2672 | Adicionado o suporte a autenticação Kerberos, utilizando Windows RM para troca de senha para usuários locais.|

### MySafe

#### Bug fixes

| Item | Descrição |
|---|---|
| 2846 | Corrigida uma inconsistência nos relatórios do MySafe, onde o filtro id persistia visível mesmo após a remoção de todos os filtros. |
| 2040 | Corrigido o problema na página inicial do MySafe que resultava na quebra do caractere ç quando combinado com um caractere especial ao criar um segredo de API com o referido caractere em seu nome.|
| 2840 | Corrigido problema que causava erro de criptografia na consulta de anotações acima de 970 caracteres. Agora, o limite é de 900 caracteres por anotação. |

#### Atualizações do Produto

| Item | Descrição |
|---|---|
| 2048 | Atualizada a logo do MySafe para refletir o padrão de cores das demais logos dos produtos senhasegura, proporcionando uma identidade visual coesa e reconhecível em toda a linha de produtos.|
| 1786 | Adicionado o item segredos de API nos dashboards do painel do admin. |
| 2925 | Adaptado e unificado o processo de importação em lote para o modelo em tenant. |

#### Novas Funcionalidades

| Item | Descrição |
|---|---|
| 27 | Adicionada a possibilidade de compartilhamento temporário de itens com usuários externos ao MySafe. Para uso dessa funcionalidade, é necessária conexão com o cofre do senhasegura. |
| 27 | Adicionada a tela Opções de compartilhamento dentro do menu do Admin para que o administrador configure o compartilhamento externo de itens e insira a URL base do cofre MySafe.|

### MySafe extension

#### Bug fixes

| Item | Descrição |
|---|---|
| 1957 | Corrigido o problema no qual a extensão MySafe estava erroneamente sugerindo o salvamento de senhas em sites onde os campos de login já haviam sido preenchidos pela própria extensão.|

#### Atualizações do Produto

| Item | Descrição |
|---|---|
| 2388 | Adicionada a possibilidade de integrar tokens de autenticação multifator (MFA) a senhas armazenadas através da extensão MySafe.|
| 1753 |Removida a opção Editar para usuários com permissão apenas de visualização de senhas compartilhadas.|
| 1565 |Ampliada a detecção automática de campos de nome de usuário e senha na extensão MySafe para mais sites.|

#### Traduções

| Item | Descrição |
|---|---|
| 2508 | Corrigido erro de digitação da palavra Search no campo de busca da versão em inglês da extensão.|

### Domum

#### Bug fixes

| Item | Descrição |
|---|---|
| 2491 |Corrigido o erro no carregamento de dados no Modo grid para usuários tercerios.|

#### Atualizações do Produto

| Item | Descrição |
|---|---|
| 2925 | Adaptado e unificado o processo de importação em lote para o modelo em tenant.|
| 2562 | Criado o arquivo de log de execução da base de dados do GeoIP.|
| 2007 | Implementado a geração de primeiro acesso de usuários limitados após a importação em lote.|
| 3842 | Corrigido a filtragem da requisição incluindo o LFI (Local File  Inclusion) no dashboard da Central de monitoramento do Domum. 

#### Novas Funcionalidades

| Item | Descrição |
|---|---|
| 2099 | Adicionado as novas nomenclaturas, Usuário limitado e Usuário completo, para classificação de usuário dentro da plataforma.|

#### Traduções

| Item | Descrição |
|---|---|
| 2790 | Corrigido o erro de tradução nos Motivos de Acesso, todos os campos foram trocados para o padrão em Inglês.|
| 3268 | Corrigido o erro onde algumas strings no módulo não apresentavam a mensagem de forma correta.|

### Certificate Manager

#### Bug fixes

| Item | Descrição |
|---|---|
| 3328 | Corrigido um problema em que o senhasegura não conseguia autenticar com sucesso com o Entrust durante os processos de gerenciamento do ciclo de vida do certificado (CLM). |

#### Atualizações do Produto

| Item | Descrição |
|---|---|
| 3329 | Melhorada a integração do Entrust, onde alguns perfis de assinatura fornecidos não estavam funcionando corretamente, impedindo a emissão de certificados. |

#### Traduções

| Item | Descrição |
|---|---|
| 2573 | Corrigido um problema de tradução onde a palavra Request no menu de ações (três pontos) da seção Certificados > Requisições não era traduzida para o português.|

### Mobile App

#### Bug fixes

| Item | Descrição |
|---|---|
| 3336 |Corrigido o problema que gerava um QR code inválido devido à ausência de um email cadastrado. Agora, se o usuário não tiver um email associado, ele será notificado sobre a necessidade de cadastrar um.|

#### Atualizações do Produto

| Item | Descrição |
|---|---|
| 2388 |Adicionada a possibilidade de integrar tokens de autenticação multifator (MFA) a senhas armazenadas no MySafe através do aplicativo móvel senhasegura. |
| 2230 |Adicionado o link Não consegue ler? Clique aqui para digitar o código na tela inicial do aplicativo móvel senhasegura. Essa funcionalidade oferece uma alternativa para usuários com dificuldades na câmera, permitindo que eles insiram o código manualmente caso não consigam escanear o QR code.|

### Network Connector

#### Novas Funcionalidades

| Item | Descrição |
|---|---|
| 2404 | Adicionado Integração de uso do Network Connecor com Multi-Tenant. |

### Arbitrator

No changes.

### Load Balancer

No changes.

* * *

## Outras versões

Você pode encontrar as [versões antigas da documentação aqui](https://docs.senhasegura.io/docs/pt/old-versions).
