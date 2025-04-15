O senhasegura é uma plataforma de segurança composta por software, sistema operacional e hardware. Essa plataforma modularizada contempla os mais rigorosos padrões de segurança de mercado.

Neste documento iremos abordar os principais aspectos técnicos do senhasegura.



---

## Arquitetura dos módulos do sistema

A solução de software senhasegura está dividida nas seguintes camadas:

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664914197041.png)Arquitetura de módulos

Estes componentes suportam o funcionamento do senhasegura, desde a camada física até a camada de aplicação.

* ***Camada da Aplicação:*** onde se encontram todas as funções do senhasegura.
* ***Camada do Servidor de Aplicação:*** onde se encontra o Orbini, framework desenvolvido pela ***MT4 Tecnologia*** para suportar as funções da aplicação.
* ***Appliance Virtual:*** é o dispositivo virtual, onde a solução é executada.
* ***Camada de Appliance:*** onde se encontra o hardware do senhasegura



---

## Sistemas básicos que compõem a solução

Além dos módulos apresentados, a solução conta com componentes básicos de software embarcado e integrados na própria solução, sem a necessidade de recursos externos:

1. Sistema operacional baseado em Linux otimizado e hardenizado em todas camadas de sistema (Aplicação, Base de dados, File System, etc.). O sistema possui apenas os serviços mínimos sendo executados, obedecendo ao Princípio de Privilégio Mínimo, além de kernel adaptado para as funcionalidades da solução.
2. Banco de dados embarcado, sem necessidade de licença.
3. Servidor web embarcado e integrado.
4. Interface web embarcada, sem necessidade de licenças ou recursos adicionais para uso. Com apenas uma única interface de configuração de rede, já é possível que o implantador tenha acesso à interface Web HTTPS para que todas outras configurações sejam executadas em um ambiente gráfico seguro e amigável.



---

## Portas

Nos appliances virtuais e físicos senhasegura, apenas as portas de serviço estão liberadas:



| **Protocolo/Porta** | Função |
| --- | --- |
| **TCP/22** | SSH Server |
| **TCP/80** | Web Server com redirecionamento para porta 443 |
| **TCP/443** | Server da aplicação Web |
| **UDP/161** | SNMP |
| **UDP/162** | SNMP |
| **TCP/3389** | RDP Proxy |
| **TCP/3306** | Cluster de base de dados |
| **TCP/4444** | Cluster de base de dados |
| **TCP/4567** | Cluster de base de dados |
| **TCP/4568** | Cluster de base de dados |
| **UDP/4567** | Cluster de base de dados |
| **TCP/51445** | senhasegura Network Connector |
| **TCP/5432** | DB Proxy PostgreSQL |
| **TCP/1433** | DB Proxy MS SQL |
| **TCP/2484** | DB Proxy Oracle TCP |
| **UDP/2484** | DB Proxy Oracle UDP |



---

## Idioma

infoUsuários de idiomas \[BETA] podem encontrar erros de ortografia, erros de digitação e palavras em outro idioma como o inglês. Erros de tradução podem ser reportados através do suporte [PAM Solution](https://suporte.senhasegura.com.br/pt-BR/support/login ).

A solução possui todas as interfaces nos seguintes idiomas:

1. Português do Brasil (PT\-BR)
2. Inglês dos Estados Unidos (EN\-US)
3. Polonês (PL)
4. Francês (FR)
5. Alemão (DE)
6. Espanhol (ES)
7. Russo (RU)

A solução permite digitação e armazenamento nos seguintes idiomas dos caracteres ***UTF\-8*** :

1. Arabic
2. Arabic Extended\-A
3. Arabic Extended\-B
4. Arabic Mathematical Alphabetic Symbols
5. Arabic Presentation Forms\-A
6. Arabic Presentation Forms\-B
7. Arabic Supplement
8. Basic Latin
9. Bopomofo Extended
10. CJK Compatibility
11. CJK Strokes
12. CJK Symbols and Punctuation
13. CJK Unified Ideographs
14. CJK Unified Ideographs
15. CJK Unified Ideographs Extension B
16. CJK Unified Ideographs Extension C
17. CJK Unified Ideographs Extension D
18. CJK Unified Ideographs Extension E
19. CJK Unified Ideographs Extension F
20. Cyrillic
21. Cyrillic Supplement
22. Enclosed CJK Letters A
23. Francês
24. Hangul Compatibility J
25. Hebrew
26. Hiragana
27. Kanbun
28. Katakana
29. Katakana Phonetic Exte
30. Latin Extended\-A
31. Latin\-1 Supplement
32. Syriac
33. Syriac Supplement
34. Russo
35. Yijing Hexagram Symbol

### Suporte de idiomas

**Russo:**

* Suporte à digitação e persistência no idioma\-alvo na interface web
* Suporte à digitação e persistência no idioma\-alvo na interface proxy RDP
* Suporte à digitação e persistência no idioma\-alvo na interface proxy Terminal
* Suporte à indexação de texto das sessões (OCR)
* Layout de teclado
* Tradução da interface web
* Tradução do sistema proxy Terminal
* Tradução do sistema Web Proxy

**Espanhol:**

* Suporte à digitação e persistência no idioma\-alvo  na interface web
* Suporte à digitação e persistência no idioma\-alvo na interface proxy RDP
* Suporte à digitação e persistência no idioma\-alvo na interface proxy Terminal
* Suporte à indexação de texto das sessões (OCR)
* Layout de teclado
* Tradução da interface web
* Tradução do sistema proxy Terminal
* Tradução do sistema Web Proxy



---

## Manuais

A solução possui manuais de utilização nos seguintes idiomas:

1. Português do Brasil (PT\-BR)
2. Inglês dos Estados Unidos (EN\-US)



---

## Compatibilidade ISO 27001, PCI, SOX, GDPR, PQO BM\&F

O senhasegura permite às organizações implantar os mais rigorosos e complexos controles de acesso a credenciais privilegiadas exigidos por padrões como ISO 27001, PCI, SOX, GDPR e PQO. Isso acontece por meio da automação dos controles de acessos privilegiados, e protege o parque de TI contra violações de dados e potenciais violações de conformidade.



---

## Hardening

Os processos de hardening reduzem a superfície de ataque em um sistema alterando as senhas padrão, removendo softwares desnecessários, removendo usuários ou logins inúteis e desabilitando ou removendo serviços desnecessários.

O senhasegura utiliza uma série de processos de hardening em diferentes níveis de aplicação e em seus componentes, reconhecidos pelo mercado de segurança para mitigar tentativas de ataques.

Entre outros modelos, o senhasegura utiliza processos de hardening indicados pelas organizações NIST (National Institute of Standards and Technology) e CIS (Center for Internet Security).

Os processos de hardening são revisados periodicamente a cada novo lançamento da solução, para que esteja sempre em conformidade com as melhores práticas e os principais processos de segurança adotados pelo mercado.



---

## Atualização dos componentes

O time de Pesquisa e Desenvolvimento do senhasegura está alinhado com as atualizações dos componentes de terceiros que compõem a solução. O processo de atualização destes componentes é feito através de um canal rápido de comunicação, e realizada nos clientes caso uma demanda crítica seja lançada.

O processo de atualização da ferramenta é alinhada com a politica de atualização do próprio cliente. Neste caso, uma equipe será destacada para cumprir o fluxo de instalação com o menor risco de impacto ao negócio do cliente.



---

## Característica funcional por módulos

CuidadoO senhasegura não permite a instalação de outros softwares.



---

## Módulo Base \- Configurações de acesso ao sistema

Este módulo contempla as seguintes funções:

* ***Autenticação senhasegura :*** o senhasegura possui módulo de autenticação próprio com funcionalidades que implicam no bloqueio de usuário após quantidade determinada de tentativas malsucedidas de login. Alteração da senha no primeiro login, validação da complexidade da nova senha criada com comparativo do histórico de senhas utilizadas.
* ***Cadastro de Usuários:*** cadastro completo de usuários com rastreabilidade de mudanças e configurações.
* ***Gerenciamento de Perfis:*** gerenciamento avançado de perfis granular com possibilidade de criação de acordo com cada perfil de usuário.
* ***Log de Telas:*** registro de visualização de telas do sistema.
* ***Identificação de Telas através de códigos:*** cada tela do sistema é identificada unicamente com um código, facilitando o atendimento e suporte.
* ***Servidores de Autenticação externa:*** além do módulo de autenticação próprio, o senhasegura pode ser utilizado juntamente com outros serviços de diretório. É possível configurar o senhasegura para realizar autenticação através de diversos servidores, inclusive estabelecendo uma ordem de autenticação. Os principais servidores de autenticação que se integram ao senhasegura são: Active Directory, LDAP, TACACS, TACACS\+, e RADIUS.
* ***Multifator de autenticação:*** é possível reforçar o processo de autenticação através de multifator de autenticação, utilizando, por exemplo, o aplicativo Google Authenticator.
* ***Bloqueio de Acessos via IP:*** o senhasegura é capaz de controlar os acessos através do bloqueio ou permissionamento de ranges de IP estabelecidos.
* ***Gerenciamento de Sessão:*** na ferramenta, o módulo de gestão de sessão é responsável por verificar a validade da sessão e estabelecer um tempo limite até o próximo login.
* ***Autenticação com Certificados A1 e A3:*** é possível realizar o processo de autenticação utilizando certificados A1 e A3 como segundo fator de autenticação.
* **Sessão Ativa Única:** Os usuários não podem estar logados na mesma conta senhasegura simultaneamente a partir de duas sessões diferentes. Se um for feito um login usando a conta de Admin enquanto outra pessoa já estiver logada com a mesma conta de Admin, a pessoa com sessão antiga será desconectada.



---

## Módulo Base \- Cofre de informações e senhas

Este módulo é o core do cofre de senhas e utiliza uma interface REST para administração de credenciais, contempla as seguintes funções:

* ***Guarda de Senhas:*** armazenamento das senhas no cofre, criptografadas em algoritmo AES 256\. As senhas só podem ser acessadas neste módulo através do módulo Gestão de Acesso.
* ***Guarda de Informações Protegidas:*** o cofre de senhas permite guardar de forma criptografada informações qualquer tipo de informação como tokens, certificados e arquivos em geral. Além de possibilitar que as informações sejam compartilhadas com grupos de acessos estabelecidos ou com acesso restrito apenas usuários selecionados.
* ***Backup de Segredos:*** as senhas, informações protegidas e chaves SSH necessitam de uma unidade de backup independente na solução.

O cofre de informações e senhas é responsável por gravar os segredos em um backup criptografado pela chave mestra do cofre, baseada em algoritmo de Shamir.

* ***Integração com HSM:*** integração com dispositivos Hardware Security Module externos ou internos



---

## Módulo Base \- Cadastro de dispositivos

Este módulo é a interface do senhasegura com os ativos que terão suas senhas gerenciadas. Essa interface utiliza REST para administração dos dispositivos e contempla as seguintes funções:

* ***Interface de Cadastro:*** onde ocorre o cadastro do dispositivo, seja por tela web de forma individual, ou pelo processo de cadastro em lote.
* ***Gestão de Conectores:*** cada dispositivo possui portas para conexão e protocolo para acesso. Este módulo gerencia as conexões configuradas e realiza a comunicação com os dispositivos.
* ***Teste de Conectividade:*** periodicamente, o senhasegura se conecta aos dispositivos cadastrados e valida as respectivas conectividades. Os usuários podem ser alertados dos resultados dos testes.
* ***Perfil de Dispositivos:*** tipos e modelos de dispositivos possuem perfis de troca e template de senhas predeterminados na ferramenta. Este módulo relaciona os dispositivos a estas políticas.



---

## Módulo Base \- Políticas de acesso às informações, senhas e sessões

O módulo de política de acesso é o único com acesso ao cofre de senhas e de informações, e contempla as seguintes funções:

* ***Workflow de Acesso:*** o workflow de acesso inicia um processo de aprovações para a entrega da senha ou da sessão autenticada. Este processo possui diferentes configurações e rotas, dependendo das configurações do cliente.
* ***Aprovação de Acesso:*** a função de aprovação de acesso permite ao usuário aprovador responder a solicitação de acesso através de:
* + Tela do usuário
	+ E\-mail
	+ SMS
	+ Acesso Emergencial
* ***Dupla Custódia:*** esta função é responsável pela quebra da senha em duas partes para entrega segmentada, e é relevante para conformidade com a norma PCI.
* ***Controle de Acesso:*** o módulo de controle de acesso unifica as três entidades consideradas na decisão da entrega ou de acesso:
* + Política de Entrega
	+ Usuários Envolvidos
	+ Equipamentos Relacionados

A junção destas entidades define no sistema os critérios de segregação de acesso para os módulos: Credenciais, Dispositivos, Certificados e Informações protegidas.

* ***Sincronismo de Usuários:*** o módulo de controle de acessos pode ser sincronizado com um servidor de autenticação. Os usuários de um determinado grupo no servidor de autenticação são carregados nos grupos de acesso do senhasegura , facilitando a gestão do acesso.



---

## Módulo Base \- Relatórios

* ***Configuração de Relatórios:*** o usuário, por meio da interface, pode remover ou adicionar informações a um determinado relatório. É possível criar uma visão de informações totalmente nova e útil às suas necessidades.
* ***Agendamento de Envio:*** os relatórios criados podem ser configurados para serem enviados automaticamente para determinados usuários.
* ***Relatórios PCI:*** conjunto de relatórios específicos para atender os requisitos exigidos pelas auditorias PCI.
* ***Trilhas de Auditoria:*** o senhasegura possui relatórios com todos os eventos relevantes do sistema. Os eventos podem ser exportados para SIEM e Syslog.



---

## Módulo Base \- Dashboards

* ***Saúde do Sistema:*** responsável por exibir graficamente a visão geral do hardware e das Máquinas Virtuais senhasegura . É possível visualizar dados como I/O, memória e processamento.
* ***Monitoria de Processos:*** monitora a execução de processos chave do senhasegura :
* + Mudança de senha
	+ Sincronismos do Grupo de Acesso
	+ Reconciliação de senhas
	+ Testes de conectividade
	+ Configurações Backup
	+ Senha de backup
* ***Monitoria de Negócio:*** monitora a saúde da proteção das credenciais e informações:
* + Quantidade de Senhas trocadas x Falhas por período
	+ Número de sessões:
	+ Ativo e Concorrente x Média do Sistema
	+ Gravado (por período)
	+ Tempo médio de sessão logada
	+ Usuários logados no sistema



---

## Módulo de troca de senhas

* ***Servidores \- Troca de Senhas SSH:*** realiza a conexão e executa o script de troca predefinido para a senha no dispositivo utilizando o protocolo SSH, sem a necessidade de agentes instalados.
* ***Servidores \- Troca de Senhas Windows:*** a Troca de Senha Windows realiza a conexão a um servidor Windows e executa os scripts de troca de senhas locais, sem a necessidade de agentes instalados.

Através do uso de protocolos nativos da Microsoft (, RM/WMI) o senhasegura é capaz de interagir com o dispositivo utilizando comandos provenientes dos protocolos ou através de comandos PowerShell, caso o suporte ao protocolo esteja ativo.

* ***Ativos de rede:*** realiza a conexão e executa o script de troca predefinido para a senha no dispositivo utilizando o protocolo SSH, sem a necessidade de agentes instalados.
* ***Desktops:*** faz a conexão e executa o script de troca predefinido para aquela senha naquele desktop utilizando diversos protocolos baseados no desktop.
* ***Banco de dados:*** faz a conexão e executa o script de troca predefinido para aquela senha naquele banco de dados utilizando o protocolo da base.



---

## Módulo de reconciliação de senha

A reconciliação de senhas acontece da mesma forma em servidores, ativos de rede, desktops e bancos: realiza\-se periodicamente acessos aos dispositivos e contas tentando autenticar com a última senha custodiada, validando se a custódia permanece sob o cofre de senhas.



---

## Gerenciamento de Sessões de Proxies

Mudanças Constantes no Endereço IP de Origem do Usuáriosenhasegura não lida com constantes alterações no endereço IP de origem de um usuário por motivos de auditoria e segurança. Se você estiver usando uma VPN que altera seu IP frequentemente, pode causar desconexões frequentes e exigir que você faça login novamente. Para uma melhor experiência, recomendamos a ativação da persistência de sessão nas configurações da sua VPN/rede ao acessar a senhasegura. Isso manterá seu IP estável, evitando desconexões desnecessárias.

### Módulo de gerenciamento \- Sessões Windows

* ***Entrega da Sessão:*** a entrega da sessão autenticada é realizada sem necessidade de digitar usuário ou senha
* ***Gravação de Sessão:*** durante o acesso na sessão autenticada, o sistema grava a sessão em vídeo e em texto.
* ***Geração de Vídeo MP4:*** o vídeo gravado pode ser gerado em formato mp4 para ser baixado e enviado.
* ***Suporte a proxy auditado:*** suporte nativo a proxy auditado para conectividades SSH e RDP de aplicativos clients instalados nos clientes. Para que haja compatibilidade entre fabricantes, todos módulos proxy utilizam algoritmos de criptografia vigentes e protocolo nativo.

### Módulo de gerenciamento \- Sessões Linux

* ***Entrega da Sessão Linux via Web:*** a entrega da sessão autenticada é realizada sem necessidade de digitar usuário ou senha
* ***Gravação de Sessão via Web:*** durante o acesso na sessão autenticada, o sistema grava a sessão em vídeo e em texto.
* ***Geração de Vídeo MP4:*** o vídeo gravado pode ser gerado em formato mp4 para ser baixado e enviado.
* ***Suporte a proxy auditado:*** suporte nativo a proxy auditado para conectividades SSH e RDP de aplicativos clients instalados nos clientes. Para que haja compatibilidade entre fabricantes, todos módulos proxy utilizam algoritmos de criptografia vigentes e protocolo nativo.

### Módulo de Gerenciamento \- Sessões SSH

* ***Entrega da Sessão Linux via senhasegura Terminal Proxy :*** a entrega da sessão autenticada é realizada sem necessidade de digitar usuário ou senha. Isto é feito de forma transparente ao usuário através de qualquer cliente SSH.
* ***Gravação de Sessão via Web:*** durante o acesso na sessão autenticada, o sistema grava a sessão em texto.
* ***Auditoria de Comandos:*** todos os comandos enviados ao servidor através do senhasegura , sendo possível auditá\-los e gerar alertas de Execução de Comandos.
* ***Controle de Privilégio:*** possui controle granular de comandos que podem ser executados com possibilidade de bloquear aqueles não autorizados para execução ao usuário.
* ***Suporte a proxy auditado:*** suporte nativo a proxy auditado para conectividades SSH e RDP de aplicativos clients instalados nos clientes. Para que haja compatibilidade entre fabricantes, todos módulos proxy utilizam algoritmos de criptografia vigentes e protocolo nativo.

### Módulo de Gerenciamento \- Sessões HTTP

* ***Entrega da Sessão HTTP e HTTPS:*** a entrega da sessão autenticada em uma página é feita sem necessidade de digitação de usuário ou senha.
* ***Gravação de Sessão via Web:*** durante o acesso na sessão autenticada, o sistema grava a sessão em vídeo.
* ***Geração de Vídeo MP4:*** o vídeo gravado pode ser gerado em formato mp4 para ser baixado e enviado.



---

## Módulo Discovery

* ***Senhas Windows:*** descobre credenciais administrativas em servidores e desktops da plataforma Microsoft, identificando quais são privilegiadas e realizando a importação no cofre.
* ***Senhas Linux / Unix / AIX:*** descobre credenciais administrativas em servidores e desktops da plataforma Linux / Unix / Aix, identificando quais são privilegiadas e realizando a importação no cofre.
* ***Senhas AD:*** descobre credenciais administrativas no servidor Active Directory da plataforma Microsoft, identificando quais são privilegiadas e realizando a importação no cofre.
* ***Senhas SQL / Oracle:*** descobre credenciais administrativas em bancos de dados, identificando quais são privilegiadas e realizando a importação no cofre.
* ***Chaves SSH:*** descobre chaves SSH públicas e privadas que estejam presentes no dispositivo alvo.
* ***Certificados:*** descobre certificados locais ou de usuários Windows armazenados em dispositivos, containers ou presentes no domínio.
* ***Autoridades Locais:*** descobre autoridades locais dos dispositivos.
* ***Serviços:*** descobre os serviços que estão sendo executados no dispositivo alvo.
* ***DevOps:*** descobre artefatos DevOps que estejam presentes nos dispositivos.
* ***Glossário de Dispostivos:*** permite criar lista de varredura com segmentação por tipo



---

## Módulo A2A \- App to App

O App to App possui um template próprio para troca de senha de credenciais de aplicações, além de permitir que que a consulta seja feita diretamente pela API de conexão. Este módulo é baseado em REST com autenticação OAuth1\.0 e OAuth2\.0\.

* ***.Net:*** entrega da senha através de lib em .Net para ser adicionada ao código de aplicações da plataforma.
* ***Java:*** entrega da senha através de lib do senhasegura em Java para ser adicionada ao código de aplicações da plataforma.
* ***PHP:*** entrega da senha através de lib do senhasegura em PHP para ser adicionada ao código de aplicações da plataforma.
* ***API senhasegura :*** entrega da senha por meio da API senhasegura .



---

## Módulo senhasegura.go

O senhasegura.go possibilita invocar privilégios de administrador para executar aplicações na estações de trabalho locais. Este módulo é baseado em .NET Framework para 4\.8\.



---

## Integrações suportadas

O senhasegura possui diversos tipos de integração, além da possibilidade de configuração de templates de integração. Os templates são abertos e podem ser modificados pelo administrador.

Para realizar a integração podem ser necessários plug\-ins específicos. A arquitetura e os recursos de integração do senhasegura permitem o desenvolvimento dos plug\-ins de forma ágil.

O senhasegura é não intrusivo. Assim, não é necessária a instalação de qualquer agente nos sistemas gerenciados pela solução. Para algumas aplicações é possível utilizar o senhasegura através de agentes, a fim de criar mais possibilidades de integração.



---

### Sistema operacional

InfoModelos são compatíveis, desde que o dispositivo seja compatível com as criptografias SSH suportadas pelo senhasegura.

| **Fabricante** | Modelos |
| --- | --- |
| **Apple** | OS X |
| **Cisco** | Cisco IOS, NX\-OS (Nexus) |
| **EMC** | UNIX |
| **F5** | Big IP, LTM |
| **HP** | HPUX, Tru64, NonStop (Tandem), Open VMS, HP5500, Tande |
| **IBM** | AIX, iSeries, Z/OS, CICS, OS/390 |
| **Juniper** | JUNOS |
| **Linux** | Fedora, Ubuntu, Red Hat, SUSE Linux, Debian |
| **Microsoft** | Windows XP, Windows Vista, Windows 7, Windows 8 / 8\.1, Windows 10, Windows Server 2003, 2008, 2012, 2016 |
| **NetApp** | NetApp |
| **Oracle** | Solaris, Solaris Intel, Enterprise Linux |
| **Juniper** | JUNOS |



---

### Equipamentos de rede

InfoModelos são compatíveis, desde que o dispositivo seja compatível com as criptografias SSH suportadas pelo senhasegura.

| **Fabricante** | Modelos |
| --- | --- |
| **3Com** | Switches |
| **A10 Networks** | A10 |
| **Adtran** | NetVanta 838, Tracer 6420 |
| **Alcatel** | Switches, Switches (Omniswitch 7000 Series), Intelligent Services Access Manager (ISAM) |
| **Allot** | Allot Secure Service Gateway, Allot Service Gateway, Allot SmartEngage, Allot WebSafe Personal |
| **Applied Innovation** | AISCOUT\-S02 |
| **Aruba Networks** | ArubaOS |
| **Avaya** | Media Gateway |
| **Avocent** | DSView management |
| **BlueCoat** | PacketShaper |
| **Brocade** | Silkworm |
| **BTI Photonic Systems** | NETSTENDER 1030 |
| **Cisco** | Roteadores, ACS (Access Control Sevrer), Switches Catalyst, Switches Nexus, JMC, Wireless LAN Controller 5508, WAAS, ONS, ESA (Email Security Appliance), Privilege 15, Unified Communication Manager, ISE (Identity Services Engine), UCS (Unified Computing System) |
| **Citrix** | Netscaler |
| **Dell** | Switches |
| **Enterasys** | Roteadores, Switches |
| **Ericsson** | ServiceOn Element Manager (SOME) |
| **F5** | BigIP, LTM |
| **Fujitsu** | FSC iRMC |
| **Gemalto** | SafeNet KeySecure, SafeNet HSM |
| **HP** | ProCurve, HPE 5500 |
| **Huawei** | S1720, S2700, S5700, S6720, S6720 V200R011C10 |
| **Juniper** | Roteadores (JUNOS), Pulse secure |
| **Mcafee** | nDLP |
| **Meinberg** | Lantime |
| **Netscout** | Infinistream |
| **Nokia** | NetAct, DX200 |
| **Nortel** | BayStack, VPN Router, Ethernet Routing Switch |
| **Radware** | ISR Infiniband Switch, ODS1 Load Balancer, Alteon, Linkproof |
| **RFL Electronics** | IMUX 2000 |
| **Riverbed** | CMI, Xilinx |
| **RuggedCom** | Roteadores, Switches |
| **Symmetricom** | Symmetricom Xli |
| **Voltaire** | ISR Infiniband Switch |
| **Extreme Networks** | Switch, Router |
| **Yamaha** | RTX |
| **DLink** | Switch, Router |
| **Foundry** | Switches |



---

### Servidores de aplicação

InfoModelos são compatíveis, desde que o dispositivo seja compatível com as criptografias SSH suportadas pelo senhasegura.

| **Fabricante** | Modelos |
| --- | --- |
| **Red Hat** | Jboss, Wildfly |
| **Kaspersky** | Kaspersky Endpoint Security for Business |
| **Microsoft** | SQL Server, Exchange Server 2007 \- 2019, entre outras aplicações que permitam interatividade via RemoteApp, Windows RPC e Windows RM |
| **Veritas** | NetBackup 7\.7, 8\.0, 8\.1 e 8\.2 |
| **IBM** | Websphere Application Server, Websphere Datapower |
| **Apache Foundation** | Apache HTTP Server, Apache tomcat |
| **Oracle** | WebLogic Server, Peoplesoft, Oracle Application Server |
| **Microsoft** | IIS |
| **F5** | Nginx |



---

### Dispositivos de segurança (Firewall, UTMs, IPSs)

InfoModelos são compatíveis, desde que o dispositivo seja compatível com as criptografias SSH suportadas pelo senhasegura.

| **Fabricante** | Modelos |
| --- | --- |
| **Acme Packet** | Net\-Net OS\-E |
| **Aker** | Aker Firewall UTM |
| **Blue Coat** | Proxy SG |
| **Checkpoint** | FireWall\-1, SPLAT, Provider\-1, GAIA |
| **Cisco Systems** | PIX, ASA, IronPort, Mail Gateway |
| **Critical Path** | Memova Anti\-Abuse |
| **Fortinet** | FortiGate, Fortimanager |
| **IBM** | DataPower Integration Appliance |
| **Juniper** | Netscreen |
| **Mcafee** | NSM (Network Security Manager), SideWinder, ePO |
| **Nokia** | Checkpoint FireWall \-1 on IPSO |
| **Palo Alto Networks®** | Panorama |
| **ProofPoint** | Protection Server |
| **RSA** | Authentication Manager (SecurID) |
| **Safenet** | Luna HSM |
| **Schneider** | Industrial Defender |
| **SonicWall** | Firewalls |
| **Sophos** | Astaro Security Gateway |
| **SourceFire** | SourceFire 3D |
| **Symantec** | Brightmail Gateway |
| **TippingPoint** | IPS, SMS |
| **WatchGuard** | Firebox X Edge e\-series, Firebox X Core e\-series, Firebox X Peak e\-series, WatchGuard XTM |
| **Imperva** | DDoS Protection |
| **Trend Micro** | Soluções de segurança |



---

### Ambientes de virtualização



| **Fabricante** | Modelos |
| --- | --- |
| **VMware** | ESX/ESXi Server |
| **Citrix** | Xen Citrix |
| **Openstack** | Openstack |
| **Microsoft** | Hyper\-V, Azure |
| **Google** | Google Cloud Platform (GCP) |
| **Amazon** | Amazon Web Services (AWS) |
| **Rackspace** | Rackspace Cloud, GoGrid |
| **IBM** | IBM SmartCloud |
| **Genéricos** | Arquivo de instalação ISO |



---

### Banco de dados

InfoModelos são compatíveis, desde que o dispositivo seja compatível com as criptografias SSH suportadas pelo senhasegura.

| **Fabricante** | Modelos |
| --- | --- |
| **IBM** | DB2, Informix, Datastage |
| **InterSystems** | Caché Release 2010 \- 2017 (e demais versões com suporte ODBC conectadas a dispositivos com conectividade suportada) |
| **Microsoft** | SQL Server |
| **MongoDB** | MongoDB |
| **MySQL** | MySQL |
| **ODBC** | Bases de dados compatíveis com interfaces ODBC |
| **Oracle** | Bancos de dados Oracle, Oracle Enterprise Manage, RDBMS, Mysql 4 \- 8, Oracle RAC |
| **Postgresql** | Postgresql 6 \- 11 |
| **SAP** | HANA |
| **Sybase** | Bancos de dados Sybase, IQ |



---

### Storages

InfoModelos são compatíveis, desde que o dispositivo seja compatível com as criptografias SSH suportadas pelo senhasegura.

| **Fabricante** | Modelos |
| --- | --- |
| **Dell** | Dell EMC PowerMax 2000, Dell EMC PowerMax 8000, Dell EMC SC5020, Dell EMC SC5020F, Dell EMC SC7020, Dell EMC SC7020F, Dell EMC SC9000 , Dell EMC SCv3000, Dell EMC Unity XT 380F, Dell EMC Unity XT 480F, Dell EMC Unity XT 680F, Dell EMC Unity XT 880F, Dell EMC XtremIO X2, Dell PowerVault, Dell EMC Isilon, Dell EMC VMAX Entre outros modelos compatíveis com as conexões suportadas. |
| **IBM** | Storwize V7000 Gen 3 ”Next Gen”, Storwize V7000 Gen 2\+, Storwize V7000 Gen 2, Storwize V7000 family, Storwize V5100E, Storwize V5030E, Storwize V5010E, Storwize V5030, Storwize V5020, Storwize V5010, Storwize V5000, Mainframe IBM AS400 |
| **Huawei** | OceanStor 18000F V5, OceanStor 5300 V3, OceanStor 5300F, OceanStor 5500 V3, OceanStor 5500F, OceanStor 5600 V3, OceanStor 5600F , OceanStor 5800 V3, OceanStor 5800F V5, OceanStor 6800 V3, OceanStor 6800F V5 Entre outros modelos compatíveis com as conexões suportadas |
| **NetApp** | NetApp ONTAP (BSD) |
| **Hitachi** | Enterprise Storage, séries E, F, G e 5\.000 |
| **Pure Storage** | File Storage |



---

### Aplicações Windows



| **Fabricante** | Modelos |
| --- | --- |
| **Microsoft** | Aplicações desenvolvidas em Java, .Net, PHP, Phyton, Contas de acesso SQL, Tarefas agendadas Windows, Serviços Windows, Aplicações Apache, Aplicações IIS, Aplicações COM\+, Aplicações em Cluster |



---

### Sistemas de diretórios

InfoModelos são compatíveis, desde que o dispositivo seja compatível com as criptografias SSH suportadas pelo senhasegura.

| **Fabricante** | Modelos |
| --- | --- |
| **Digi** | Digi Remote Manager |
| **Fujitsu** | iRMC |
| **Microsoft** | ActiveDirectory |
| **Novell** | Novell Directory Services (NDS) |
| **Sun** | Java System Directory Server |
| **Red Hat** | Red Hat Directory Server (RHDS), 389 Directory Server, FreeIPA |
| **Oracle** | ODI Oracle |



---

### Acesso remoto e monitoramento



| **Fabricante** | Modelos |
| --- | --- |
| **Amazon** | Amazon Web Services (AWS) |
| **Dell** | Dell Remote Access Card (DRAC) |
| **HP** | StorageWorks, iLO |
| **CA Technologies** | CA Remote Control |
| **IBM** | Maximo Application Suite |
| **SUN Technologies** | Desktop Management |
| **Digi** | Digi Remote Manager |
| **Cyclades** | Cyclades\-TS |
| **Fujitsu** | ServerView Suite |



---

### Sistemas DevOps, VSC e demais ferramentas SDLC



| **Fabricante** | Modelos |
| --- | --- |
| **Ansible** | Ansible |
| **Atlassian** | Bamboo CI/CD, JIRA Core, Bitbucket |
| **GitLab Inc.** | GitLab CI/CD |
| **Google** | Kubernetes |
| **Jenkins** | Jenkins CI/CD |



---

### Ferramentas ITSM



| **Fabricante** | Modelos |
| --- | --- |
| **Atlassian** | Jira Service Desk |
| **Zendesk** | Zendesk |
| **Freshworks** | Freshdesk |
| **ServiceNow** | ServiceNow ITSM |
| **GLPI** | GLPI ITSM |



---

### Ferramentas TOTP

A função de MFA senhasegura funciona com qualquer ferramenta Time\-based One\-Time Password (TOTP). Aqui você pode visualizar algumas opções:



| **Fabricante** | Modelos |
| --- | --- |
| **Google** | Google Authenticator |
| **Microsoft** | Microsoft Authenticator |
| **Authy** | Twilio Authy 2\-Factor Authentication |
| **Red Hat** | FreeOTP Authenticator |
| **Sophos** | Sophos Authenticator |
| **LastPass** | LastPass Authenticator |
| **andOTP** | andOTP |



---

### Plugins de integração



| **Integração** | Função |
| --- | --- |
| **Jenkins** | Permite a consulta de secrets no senhasegura |



---

### Ferramentas SIEM



| **Ferramenta** | Versão |
| --- | --- |
| **Exabeam** | Versão ***i31*** em diante. |
| **IBM QRadar** | Versão ***7\.3*** em diante. |
| **LogRhythm** | Versão ***7\.4*** em diante. |
| **Rapid7 \- InsightIDR** | Versão ***20180814*** em diante. |
| **Rapid7 \- InsightOps** | Versão ***20190204*** em diante. |
| **Securonix** | Versão ***6\.3*** em diante. |
| **Splunk** | Versão ***6\.3*** em diante. |

## 



---

### Integrações de autenticação

Estas são as ferramentas disponíveis de integração de SSO e MFA.

#### SSO



| **Ferramenta** | **Protocolo** |
| --- | --- |
| Active Directory | LDAP |
| Azure AD | SAML 2\.0 |
| ForgeRock | SAML 2\.0 |
| Google | OpenID |
| AuthID | OpenID |
| Keycloak | OpenID SAML 2\.0 |
| Okta | OpenID SAML 2\.0 |
| ProID | OpenID |

#### MFA



| **Ferramenta** | **Protocolo** |
| --- | --- |
| Duo | TOTP OpenID |
| Email | TOTP |
| Google Authenticator | TOTP |
| Microsoft Authenticator | TOTP |
| Okta | TOTP OpenID |
| RSA |  |
| SmartCards | A3 x.509 |
| SMS | TOTP |
| Symantec VIP | TOTP |
| Tokens | A3 x.509 |

#### Integração com AuthID: Autenticação Passwordless

A integração com AuthID oferece a capacidade de implementar a autenticação "passwordless" utilizando métodos biométricos como impressões digitais ou reconhecimento facial. Esta abordagem elimina a necessidade de senhas convencionais, simplificando o processo de autenticação. Além disso, reforça significativamente a segurança da plataforma ao reduzir as vulnerabilidades associadas a práticas tradicionais de senhas.



---

### Versão embarcada do navegador



| **Ferramenta** | Versão |
| --- | --- |
| Firefox | 91\.6\.1esr (64\-bit) |



---

## Criptografia e recursos de segurança

### Criptografia

O senhasegura utiliza bibliotecas e softwares de código aberto para realizar todos os processos criptográficos necessários para a solução funcionar de forma segura. Toda a comunicação entre os componentes da solução é criptografada usando o protocolo SSL (Secure Sockets Layer) para garantir a segurança das mensagens transmitidas. Além disso, o algoritmo AES\-256 é usado para criptografar informações no banco de dados, tais como:

* Chaves de API
* Credenciais
* Certificados
* Tokens de acesso

Para fornecer autenticação para a interface web da senhasegura, tanto localmente quanto por meio de servidores de autenticação externos, as senhas do usuário são armazenadas usando o formato de hash SHA\-256\. A comunicação entre a estação de trabalho do cliente e a senhasegura é criptografada e segue os padrões dos protocolos usados, seja RDP, SSH ou HTTPS. Da mesma forma, o acesso a dispositivos de destino remotos é criptografado usando o mesmo padrão em todos os protocolos que permitem a configuração.

Para a segurança dos dados em trânsito, é utilizada a biblioteca OpenSSL, mantida pela OpenSSL Software Foundation. Trata\-se de uma implementação de código aberto dos protocolos criptográficos SSL e TLS. A biblioteca, escrita na linguagem de programação C, implementa os principais algoritmos de criptografia. Além disso, a biblioteca OpenSSL é certificada FIPS 140\-2\. Para mais informações, visite a Política de Segurança OpenSSL FIPS 140\-2\.

Já para a segurança de dados críticos armazenados em banco de dados, utiliza\-se o software de código aberto GnuPG, que é parte da Free Software Foundation e do Projeto GNU. Este software possui a opção de trabalhar em "modo fips", o que garante que os processos criptográficos sejam feitos de acordo com todos os requisitos exigidos no padrão FIPS 140\-2 imposto pelo National Institute of Standards and Technology (NIST).

A senhasegura atende os padrões de segurança como:

* FIPS 140\-2 \- Nível 1
* FIPS 140\-2 \- Nível 2 com HSM ou PAM Crypto Appliance

### Criptografia com HSM

Para empresas que precisam de um nível de segurança mais elevado, é possível optar pelo HSM (Hardware Secure Module), um dispositivo de segurança e criptografia em hardware com padrões de especificações militares e inviolável.

### Especificações técnicas do HSM

* Criptografia
* RSA (PKCS \#1 V2\.1\) (1024, 2048, 4096 bits)
* ECDSA (NIST FIPS PUB 186\-3\)
* FIPS 197 AES 128, 192, 256
* FIPS 46\-3 DES/3DES
* Suporta certificados x509v3
* Suporta importação e geração interna de chaves
* Gerador de números aleatórios
* Interno, baseado em hardware
* Atende à norma AIS31 P2
* Relógio de tempo real (RTC)
* Interno, desvio máximo de 1 minuto por ano
* Recursos de segurança da aplicação e appliance
* HSM Entrust nShield
* HSM Kryptus
* HSM Thales
* HSM GEMALTO
* HSM DINAMO
* HSM YUBICO



---

## Web Proxy cryptographic

* Métodos de troca de chaves:
* + ecdh\-sha2\-nistp256
	+ ecdh\-sha2\-nistp384
	+ ecdh\-sha2\-nistp521
	+ ssh\-curve25519\-sha256
	+ ssh\-curve25519\-sha256\-libssh
	+ diffie\-helman\-group\-exchange\-sha256
	+ diffie\-helman\-group\-exchange\-sha1
	+ diffie\-helman\-group14\-sha1
	+ diffie\-helman\-group1\-sha1
* Chaves compatíveis:
* + ecdsa\-ssh\-nistp256
	+ ecdsa\-ssh\-nistp384
	+ ecdsa\-ssh\-nistp521
	+ ssh\-ed25519
	+ ssh\-rsa
	+ ssh\-dss
* Métodos MAC:
* + hmac\-sha2\-256
	+ hmac\-sha2\-512
	+ hmac\-sha1
	+ hmac\-sha1\-96
	+ hmac\-md5
	+ hmac\-md5\-96
	+ hmac\-ripemd160
	+ hmac\-ripemd160\-openssh\-com
* Cifras:
* + aes128\-ctr
	+ aes192\-ctr
	+ aes256\-ctr
	+ aes256\-cbc
	+ rijndael\-cbc\-lysator\-liu\-se
	+ aes192\-cbc
	+ aes128\-cbc
	+ blowfish\-cbc
	+ arcfour128
	+ arcfour
	+ cast128\-cbc
	+ 3des\-cbc



---

## Terminal Proxy cryptographic

* Métodos de troca de chaves:
* + ecdh\-sha2\-nistp256
	+ ecdh\-sha2\-nistp384
	+ ecdh\-sha2\-nistp521
	+ diffie\-hellman\-group16\-sha512
	+ diffie\-hellman\-group\-exchange\-sha256
	+ diffie\-hellman\-group14\-sha256
	+ diffie\-hellman\-group\-exchange\-sha1
	+ diffie\-hellman\-group14\-sha1
	+ diffie\-hellman\-group1\-sha1
* Chaves compatíveis:
* + ssh\-ed25519
	+ ecdsa\-sha2\-nistp256
	+ ecdsa\-sha2\-nistp384
	+ ecdsa\-sha2\-nistp521
	+ ssh\-rsa
	+ ssh\-dss
* Métodos MAC:
* + hmac\-sha2\-256
	+ hmac\-sha2\-512
	+ hmac\-sha2\-256\-etm@openssh.com
	+ hmac\-sha2\-512\-etm@openssh.com
	+ hmac\-sha1
	+ hmac\-md5
	+ hmac\-sha1\-96
	+ hmac\-md5\-96
* Cifras:
* + aes128\-ctr
	+ aes192\-ctr
	+ aes256\-ctr
	+ aes128\-cbc
	+ aes192\-cbc
	+ aes256\-cbc
	+ blowfish\-cbc
	+ 3des\-cbc

### Criptografias para sessões SSH

#### Chaves Simétricas

* 3DES
* AES128\-cbc
* AES192\-cbc
* AES256\-cbc
* rijndael\-cbc
* AES128\-ctr
* AES192\-ctr
* AES256\-ctr
* AES128\-gmc
* AES256\-gmc
* chacha20\-poly1305

#### Chaves simétricas para autenticação criptografada

* AES128\-gmc
* AES256\-gmc
* chacha20\-poly1305

#### MAC

* hmac\-sha1
* hmac\-sha1\-96
* hmac\-sha1\-256
* hmac\-sha1\-512
* hmac\-md5
* hmac\-md5\-96
* umac\-64
* umac\-128
* hmac\-sha1\-96\-etm
* hmac\-sha1\-256\-etm
* hmac\-sha1\-512\-etm
* hmac\-md5\-etm
* hma\-md5\-96\-etm
* umac\-64\-etm
* umac\-128\-etm

#### Algoritmos de troca de chaves

* diffie\-hellman\-group1\-sha1
* diffie\-hellman\-group14\-sha1
* diffie\-hellman\-group14\-sha256
* diffie\-hellman\-group16\-sha512
* diffie\-hellman\-group18\-sha512
* diffie\-hellman\-group\-exchange\-sha1
* diffie\-hellman\-group\-exchange\-sha256
* ecdh\-sha2\-nistp256
* ecdh\-sha2\-nistp384
* ecdh\-sha2\-nistp521
* curve25519\-sha256

#### Chaves de certificado

* ssh\-ed25519\-cert\-v01
* ssh\-rsa\-cert\-v01
* ssh\-dss\-cert\-v01
* ecdsa\-sha2\-nestp256\-cert\-v01
* ecdsa\-sha2\-nestp384\-cert\-v01
* ecdsa\-sha2\-nestp521\-cert\-v01

### Chaves SSH compatíveis

* ssh\-ed25519
* ssh\-ed25519\-cert\-v01
* ssh\-rsa
* ssh\-dss
* ecdsa\-sha2\-nestp256
* ecdsa\-sha2\-nestp384
* ecdsa\-sha2\-nestp521
* ssh\-rsa\-cert\-v01
* ssh\-dss\-cert\-v01
* ecdsa\-sha2\-nestp256\-cert\-v01
* ecdsa\-sha2\-nestp384\-cert\-v01
* ecdsa\-sha2\-nestp521\-cert\-v01



---

## Disponibilidade e contingência

O senhasegura suporta operação em appliances virtuais ou físicos. O appliance virtual senhasegura é customizado para instalação sem necessidade de liberação de usuários administrativos no sistema operacional.

Em qualquer configuração, o sistema suporta configurações de alta disponibilidade e de contingenciamento externo para casos de desastre.

* Alta Disponibilidade
* Contingenciamento e Disaster Recovery



---

## Backup

O senhasegura possui diversos mecanismos a recuperação da informação em caso de falha:

### Backup criptografado de senhas

Externo em infraestrutura do cliente. O arquivo de backup destas informações é protegido por senha, que é distribuída em múltipla custódia entre participantes de confiança à livre escolha do cliente. São necessários ao menos dois usuários custodiantes para receber e resgatar a informação. Uma vez realizada a cerimônia de entrega do senhasegura , todas as senhas do cofre serão reinicializadas e o cliente receberá a sua respectiva custódia, exceto as senhas do banco de dados e sistema operacional do senhasegura

A partir da versão ***3\.10*** o procedimento de backup também será realizado para senhas de usuários e ***Access Keys*** do módulo ***DevOps***.

### Backup Fast Recovery

Interno e de rápida recuperação. Armazena informações mais críticas, é considerado mais rápido, pois com o conteúdo da base disponivéis o ambiente é recuperado rapidamente e já se torna acessível assim que solicitado.

### Backup criptografado de configurações

Permite que além dos dados armazenados que as configurações do senhasegura também sejam disponivéis para recuperação. Este backup não é habilitado por padrão, mas a sua ativação está disponível nas configurações do sistema.

### Backup de vídeos seguros

O senhasegura permite que o backup dos vídeos sejam armazenados em um diretório remoto sob responsabilidade do cliente. Por padrão os vídeos são armazenados no sistema de arquivos da solução.

### Backup de secrets

O backup de secrets: ***Credencial do console*** e ***Chaves de acesso*** são armazenadas em diretórios dedicados.



---

## Monitoramento e Syslog e SIEM

O senhasegura possui recursos de monitoramento que visam alertar os administradores de qualquer falha de processo, de integração, conectividade ou acesso.

Este sistema emite alertas em tela para o administrador ou por e\-mail, SMS, snmpmibs e snmptraps.

A solução pode ser integrada a qualquer ferramenta de mercado utilizando padrão SNMP V1, V2 ou V3\.

Integração com serviços de Syslog e SIEM.

Integração própria com ArcSight.



---

## Compatibilidade com browser

A interface Web do senhasegura é acessível apenas através de protocolo HTTPS, e recomenda\-se o fornecimento de um certificado SSL próprio e de acordo com as premissas de segurança vigentes no mercado.

O senhasegura utiliza HTML5 e tecnologia WebSocket e apenas navegoradores que tenham suporte a essas tecnologias fornecerão uma experiência completa do senhasegura. Também mantém compatibilidade com os navegadores nas suas versões mais recentes:

* Internet Explorer
* Google Chrome
* Microsoft Edge
* Mozilla Firefox



---

## Condições de operação de rede

Conexões entre usuários e a aplicação do senhasegura possui uma qualidade mínima de banda de 180 Kbps por sessão remota sem perda de funcionalidade.

Conexões entre usuários e a aplicação do senhasegura possui uma latência máxima de 900 ms sem nenhuma perda de funcionalidade.

Aplicação do senhasegura permite suporte ao protocolo IPV4 e IPV6 seguindo a especificação IETF RFC 2460\.



---

## Protocolos e portas suportados

O senhasegura permite a utilização de diversos protocolos, através de suas respectivas portas padrão ou por qualquer outra configurada na solução, para a realização das seguintes operações: conexões remotas, trocas de senha, Scan Discovey, autenticação e acesso web.

As operações são realizadas baseadas nas portas configuradas no dispositivo.



| **Conectividade** | **Porta padrão** | Descrição |
| --- | --- | --- |
| **HTTP** | **80** | Acesso Web |
| **HTTPS** | **443** | Acesso Web Seguro |
| **LDAP** | **389** | Scan Discovery/Autenticação |
| **LDAPS** | **636** | Troca de senhas/Scan/Discovery/Autenticação |
| **MySQL** | **3306** | Conexão Remota\*/Troca de senhas |
| **Oracle** | **1521** | Conexão Remota\*/Troca de senhas |
| **PostgreeSQL** | **5432** | Conexão Remota\*/Troca de senhas |
| **RDP**\* | **3389** | Conexão Remota |
| **RM HTTP** | **5985** | Troca de Senha/Scan Discovery |
| **RM HTTPS** | **5986** | Troca de Senha/Scan Discovery |
| **SQL Server** | **1433** | Conexão Remota\*/Troca de senhas |
| **SSH** | **22** | Conexão Remota/Troca de senhas |
| **Telnet** | **23** | Conexão Remota/Troca de senhas |
| **VNC**\* | **5900** | Conexão Remota |
| **Windows RM** | **5986** | Troca de senhas |
| **Windows RPC** | **135** | Troca de senhas/Scan Discovery |
| **X11 Forward**\*\* | **22** | Conexão Remota/Troca de senhas |

Os protocolos suportados são apenas nas versões TLS1\.2 e TLS1\.3, ao se conectar ao cofre do senhasegura.

\*Via RemoteApp

\*\*interfaces gráficas



---

## Desempenho

A arquitetura do senhasegura foi projetada para máximo desempenho em todas as operações realizadas através da solução.

Todos os testes foram realizados em senhasegura PAM Crypto Appliances com a seguinte configuração:

### Configurações de hardware

* ***Model:*** senhasegura PAM Crypto Appliance Titanium
* ***Processor:*** Intel E5\-2630v4
* ***RAM Memory:*** 128GB
* ***HD:*** 2x2TB NLSAS RAID1

### Configurações de senhasegura

* ***Cores:*** 38 vCPUs
* ***Memória RAM:*** 126GB
* ***HD:*** 2TB

### Sessões SSH via senhasegura Terminal Proxy



| Conexões | CPU | RAM | DISK W |
| --- | --- | --- | --- |
| 500 | 5% | 10GB | 4\.500KB/s |
| 2000 | 20% | 50GB | 6\.000KB/s |
| 3500 | 55% | 85GB | 8\.000KB/s |

### Sessões SSH via senhasegura Web Proxy



| Conexões | CPU | RAM | DISK W |
| --- | --- | --- | --- |
| 250 | 10% | 10GB | 7\.500 KB/s |
| 750 | 35% | 15GB | 5\.000 KB/s |
| 1250 | 45% | 20GB | 2\.000 KB/s |

### Sessões RDP via senhasegura RDP Proxy



| Conexões | CPU | RAM | DISK W |
| --- | --- | --- | --- |
| 500 | 5% | 15GB | 8\.500 KB/s |
| 1250 | 10% | 30GB | 5\.000 KB/s |
| 2000 | 15% | 50GB | 2\.000 KB/s |

### Sessões RDP via senhasegura Web Proxy



| Conexões | CPU | RAM | DISK W |
| --- | --- | --- | --- |
| 250 | 5% | 10GB | 16\.000 KB/s |
| 1000 | 10% | 20GB | 9\.000 KB/s |
| 1750 | 20% | 30GB | 1\.000 KB/s |

## Limite de recursos

A plataforma senhasegura possui alguns recursos que são tecnicamente limitados, seja por motivos de limitações da base de dados, limitações do sistema operacional, limitações do file\-system ou limitações de arquitetura de software.

As limitações relativas a contrato ou licença são fixadas por contrato, e não serão abordadas neste tópico.

As limitações relativas a quantidade de instâncias contratadas, em um cenário de cluster, também não serão abordadas neste tópico. Focaremos nas limitações relativas a uma instância e seus componentes.

### Limite de usuários

A aplicação tecnicamente irá suportar até 16\.500\.000 registros de usuários. Esse número é compartilhado com usuários do WebService A2A , usuários de serviço e usuários reais do sistema. Esse número não expressa a capacidade de todos estes usuários estarem utilizando o sistema simultaneamente. A capacidade de uso simultâneo pode variar de acordo com o tipo de uso, quantidade de instâncias contratadas e latência da rede fornecida.

### Limite de dispositivos

A aplicação tecnicamente irá suportar até 16\.500\.000 registros de dispositivos. Esse número contém inclusive dispositivos inativados ao longo do tempo. Esse número não expressa a capacidade de todos estes dispositivos estarem sendo acessados via proxy, ou qualquer outro processo assincrono que acesse o dispositivo simultâneamente. A capacidade de gerenciar dispositivos pode variar pela quantidade de instâncias contratadas, sistemas e protocolos suportados e a latência de rede fornecida.

### Limite de credenciais e informações protegidas

A aplicação tecnicamente irá suportar até 16\.500\.000 registros de credenciais. Esse número contém inclusive credenciais inativas ao longo do tempo. Esse número não expressa a capacidade de todas essas credenciais estarem sendo acessadas e utilizadas por tarefas assíncronas ou sessões proxy simultâneamente. A capacidade de gerenciar credenciais pode variar pela quantidade de instâncias contratadas e a latência de rede fornecida.



---

## Gravação de sessões proxy

Diferente de outras soluções de mercado, o senhasegura não realiza capturas de tela em formato de imagem, ou renderização em tempo real de vídeos MP4 ou outros formatos de mídia. A persistência real de protocolo garante uma cópia fiel e otimizada da sessão. Tempos de inatividade são registrados através de timestamp de 4bytes por segundo, diferentemente de capturas de telas que iriam consumir muito mais recursos. A gravação em formato nativo do protocolo já considera o formato de compressão nativo do protocolo.

Os vídeos de sessões ficam criptografados e armazenados no próprio servidor da aplicação senhasegura em formato proprietário, também protegendo a integridade do vídeo.

O comportamento do usuário irá definir a quantidade de sessões que possam ser armazenadas. Não excluíndo a possibilidade de expansão de disco ou mapeamento de storage remoto para aumentar a capacidade de armazenamento.

Essa combinação de fatores torna o limite de sessões virtualmente ilimitado. Considere a tabela de performance descrito na sessão *desempenho* para calcular sua necessidade.

### Sessões proxy simultâneas

A quantidade de sessões simultâneas pode variar com a quantidade de instâncias contratadas, tornando a solução adequada a sua necessidade sem contratação excessiva de recursos. A arquitetura em cluster permite ainda a definição de nós dedicados para protocolos específicos, ou a definição de instâncias dedicadas para diferentes datacenters ou segmentos de rede. Essa combinação de fatores torna o limite de sessões virtualmente ilimitado. Considere a tabela de performance descrito na sessão *desempenho* para calcular sua necessidade.



---

## Versionamento do senhasegura

A nomenclatura de versionamento do senhasegura segue o formato M.N.P (ex: **3.22.1\-9**):



| Tipo de Release | Descrição |
| --- | --- |
| M \- Major | Inclui alterações profundas de arquitetura e/ou tecnologia. |
| N \- Minor | Inclui novas funcionalidades e/ou melhorias de funcionalidades existentes. Inclui também correções de erros conhecidos e mudanças menores de arquitetura. |
| P \- Patch | Inclui a correção de bugs críticos e patches de segurança. (recomendada a atualização imediata) |

### **Frequência de lançamento de novas versões**

As atualizações do senhasegura N podem variar de 1 a 5 meses, dependendo do período do ano.

Quanto aos formatos disponíveis, existem duas maneiras:

1. Para o novo ambiente senhasegura, podem ser utilizadas as máquinas virtuais disponíveis no suporte do parceiro.
2. As atualizações estão sempre disponíveis em nossos repositórios, com novos lançamentos atualizados assim que estiverem disponíveis.



---

## Requisitos de implementação

### Casos de uso

Para o correto funcionamento da solução, os Casos de Uso possíveis devem ser definidos onde o gerenciamento de acesso privilegiado será executado.

Veja alguns exemplos desses casos:

* **Active Directory:** o administrador do Active Directory deseja ter acesso remoto da área de trabalho (RDP) ao Active Directory Server Windows Server 2016 usando o usuário “Administrador”.
* **Databases:** o DBA deseja ter acesso ao cliente do software SQL Server Management Studio 2014 que gerencia o banco de dados SQL usando o usuário administrador local da instância de produção do banco de dados “sa”.
* **Ativos de Rede:** o administrador de infraestrutura requer acesso por linha de comando, shell ou console para um roteador Cisco, pela porta SSH ou Telnel, usando o usuário “operador” ou “admin”.
* **Aplicações Web:** acesso ao portal [AWS](https://aws.amazon.com/) usando a conta de administrador do Cloud Computing usando a conta “senhasegura@gmail.com”.
* **Eliminação de Credenciais no Hardcode:** caso você deseje eliminar as Credenciais do banco de dados registradas no código\-fonte de um aplicativo de contabilidade, alterar a senha  
sincronizada em arquivos de configuração e serviços dependentes de autenticação ou disponibilizar uma API de conexão para sua inscrição.
* **Inscrição de Atividades com Usuários Genéricos:** deseja\-se obter um registro das atividades durante qualquer sessão, incluindo logs de auditoria personalizada, procurar por qualquer comando executado por teclado, durante a sessão e nas gravações.
* **Segregação de Funções e Segmentação de Funções:** deseja\-se criar perfis de usuários discriminados por listas denylist de comandos fazendo uso da mesma credencial privilegiada. Você deseja definir grupos com acesso privilegiado a usuários associados pertencentes à mesma área.
* **Otimização de VPNS:** você deseja controlar e monitorar em tempo real o acesso de fornecedores e usuários terceirizados ao ambiente corporativo, fornecer acesso remoto apenas a aplicativos ou serviços específicos na rede por um período de tempo predeterminado.
* **Gravação de Ambientes na Nuvem:** você deseja gerenciar o acesso a aplicativos na nuvem e garantir a legitimidade dos usuários que se conectarão aos mesmos padrões de governança de TI que todos os outros ambientes de rede interna.
* **Acesso Compartilhado:** com aplicativos críticos cujo licenciamento é muito caro, o senhasegura pode entregar acesso compartilhado não simultâneos de vários locais para diferentes usuários fazendo uso da mesma credencial privilegiada, obtendo informações independentes e personalizadas de cada sessão, bem como sua gravação de vídeo.
* **Repositório para Análise de Força:** você pode obter análises de comportamento para obter métricas, relatórios de uso do modelo, planejamento de estoque e estruturação de políticas para o uso eficiente de recursos. Acesso on\-line de gravações das sessões para fazer solução de problemas.
* **Proteção de Informações:** você deseja armazenar informações com Certificados digitais, chaves de conexão, chaves de criptografia e/ou senhas acesso pessoal, com o qual você pode definir fluxos e controles de acessos, que evidencia e monitora seu uso e visualização.



---

## Requisitos em sistemas gerenciados

Definir as seguintes informações dos sistemas gerenciados:

* **Hostname:** nome do host do dispositivo. Será o identificador das consultas. (Por exemplo: apl001s10 ou Facebook).
* **Gerenciamento de IPs:** IP de gerenciamento de dispositivos, usado pelo cofre para conexão. (Por exemplo: 192\.168\.10\.1 ou facebook.com).
* **Fabricante:** fabricante do dispositivo. Ele será criado se você não estiver registrado. (Por exemplo, Microsoft, Oracle).
* **Tipo:** tipo de dispositivo. Ele será criado se você não estiver registrado. (ex: servidor, Inscrição)
* **Modelo:** modelo do dispositivo. Ele será criado se você não estiver registrado. (Por exemplo, Windows Server 2012\).
* **Local:** local geográfico. onde o dispositivo está localizado. Será criado se não estiver registrado. (Por exemplo: Data Center Guatemala).
* **Adicional 1:** informações adicionais. (Ex: Plataforma, Núcleo, Contabilidade).
* **Adicional 2:** informações adicionais. (Por exemplo: Sistema, Banco de Dados, Dados, Aplicativo Principal)
* **Conectividade:** conectividade de dispositivo e gateway, separada por vírgula e dois pontos. (Ex: RDP: 3389, SSH: 22\).
* **Domínio:** domínio do dispositivo. (Por exemplo: domínio.com)



---

## Requisitos para contas privilegiadas

Para acessar os sistemas gerenciados, é necessário ter as seguintes informações das credenciais ou contas privilegiadas:

* **Tipo de senha:** politíca de senha. (Por exemplo: usuário local Privilegiado)
* **Usuário:** nome de usuário. (Ex: root)
* **Senha:** valor da senha. Se não for preenchido, a senha não é atualizará. (Por exemplo: Da@lU!83m$1\)
* **Domínio:** domínio da credencial. (Por exemplo: domínio.com)
* **Informação adicional:i**nformações adicionais da credencial atual. Usado para instâncias de banco de dados, trocas de senha ou ligações em geral. (Por exemplo: ORAC19\).
* **Rótulos:** rótulos de senha, separados por vírgulas. É utilizada para agrupar ou filtrar determinadas credenciais. (Ex: celular, dev)
* **Ativar Mudança Automática:** indique se a senha será alterada automaticamente pelo cofre (Sim ou Não)
* **Plugin de troca:** plugin usado no modelo de alteração. (Ex: NetSSH)
* **Alterar modelo:** modelo usado para fazer a alteração de senha. (Por exemplo: Linux como root)
* **Controle do Estado:** indica se o estado da senha será controlada automaticamente pelo cofre. (Sim ou não)
* **Ativação de plug\-ins:**plugin usado pelo modelo de ativação. (Por exemplo: Net SSH)
* **Modelo de ativação:** modelo utilizado para realizar a ativação da credencial. (Por exemplo: Ativar credenciais como root)
* **Inativação de plug\-ins:** plugin usado pelo modelo de inativação da credencial. (Por exemplo: Net SSH)
* **Modelo de inativação:** template utilizado para realizar a inativação da credencial. (Por exemplo: Desativando credenciais como root)
* **Usuário para conexão:** usuário usado para se conectar ao equipamento e realizar operações de alteração e controle de status. Você pode usar a mesma credencial. (ex: root ou mesmo senha)
* **Nome do host para conexão:** nome do host usado para se conectar no dispositivo e realizar operações de controle e mudança de status. Você pode usar o mesmo valor da senha. (Por exemplo: apl001s10 ou Even da senha).
* **Proprietário da credencial:** usuário da credencial.



---

## Requisitos sobre grupos de acesso e usuários

Para poder iniciar o cofre do senhasegura e determinadas contas privilegiadas, devem ser definidos alguns grupos de acesso que permitirão filtrar por segmentos ou grupos, os diferentes sistemas gerenciados, contas privilegiadas e privilégios aos quais os usuários que entram na solução, devem ter suas próprias credenciais de acesso, você pode criar localmente no cofre ou integrar a uma fonte de autenticação como o Active Directory, Radius, TACACS, TACACS\+, para configurar esses recursos:

Pré\-requisitos:

* Número de Grupos de Acesso
* Nomes dos Grupos de Acesso
* Sistemas Privilegiados por Grupos de Acesso
* Contas Privilegiadas por Grupos de Acesso
* Usuários por Grupos de Acesso
* Opções por Grupos de Acesso (Acesso à sessão e/ou Visualização de senha, deve ser definido se você precisar inserir um motivo ou precisa obter aprovação.
* Limitação de acesso por dias da semana e faixas horárias (8:00 AM \- 12h00 PM, 12h00 PM \- 16h00 PM, 16h00 PM \- 20h00 PM, 20h00 PM\- 00h00 AM, 00h00 AM \- 04h00 AM, 04h00 AM \- 08h00 AM).

Exemplo de como preencher o campo de grupo de acesso:

### Grupo de acesso



| Nome | Sistema | Contas privilegiadas | Usuários | Opções | Limitações de acesso |
| --- | --- | --- | --- | --- | --- |
| Servidores | SRV Win 2016 (10\.235\.x.x) | Administrador | a.martinez | apenas acesso à sessão sem motivo ou aprovação | Todos os dias das 8h00 às 17h00 |

No caso de existir um crescimento no número de usuários e/ou dispositivos inicialmente definidos, a solução deve ser dimensionada com um gap de 20% para ter crescimento sem modificar o hardware. Se o crescimento for maior, sempre há a possibilidade de escalar a solução integrando\-a com outro hardware com recursos superiores.



---

## Perfis de usuário no senhasegura

Para obter um correto funcionamento da solução, propõe\-se ter os seguintes perfis de acesso:

* **Administrador:** usuário com maiores privilégios no cofre, encarregado das atividades de configuração, modificação e/ou eliminação de qualquer configuração, durante sua operação. É recomendado que haja apenas um perfil de administrador e que qualquer atividade por ele realizada seja previamente documentada e autorizada.
* **Configurador:** usuário com altos privilégios no cofre, responsável pela conta privilegiada ou atividades de modificação do sistema que gerencia. Recomenda\-se que haja pelo menos dois usuários com um perfil configurador e que qualquer atividade executada por eles seja previamente documentada e autorizada.
* **Auditor:** usuário apenas com privilégios para visualizar as gravações de sessões e seus logs de auditoria. Podem haver vários usuários com este perfil, podendo fazer parte do quadro de funcionários da empresa ou de terceiros.
* **Usuário com acesso privilegiado:** somente usuário com acesso à sessão dos sistemas gerenciados, que usam credenciais privilegiadas definidas no grupo de acesso ao qual o usuário pertence. Podem ser configurados quantos usuários forem permitidos na licença de usuário.
* **Visualização de usuário com senha privilegiada:** usuário com acesso para visualizar a senha da conta privilegiada dos sistemas gerenciados definidos pelo grupo de acesso ao qual pertence o usuário. Podem ser configurados quantos usuários forem permitidos na licença de usuário.
* **Usuário com acesso e visualização privilegiada:** usuário com acesso privilegiado, exibição de login, senha para sistemas gerenciados e credenciais privilegiadas definidas pelo grupo de acesso ao qual o usuário pertence. Podem ser configurados quantos usuários forem permitidos na licença de usuário. Podem haver vários usuários com este perfil que Eles podem fazer parte do quadro de funcionários da empresa, aplicativos ou terceiros.

Exemplo de como preencher o campo de usuário:

### Usuários



| Nome | Username | Departamento | E\-mail | Telefone | Grupo de acesso | Perfil |
| --- | --- | --- | --- | --- | --- | --- |
| Alex Martinez | a.martinez | Administração | alex.m@gmail.com | \+000 000XXXX | Servidores | Usuário com acesso privilegiado |



---

## Requisitos Técnicos \- Máquina Virtual \- PAM

### Compatibilidade

Você pode implementar o senhasegura em ambientes virtualizados. As premissas de virtualização dependem da solução utilizada para implantação e dos appliances necessários. De acordo com a arquitetura definida, os ambientes compatíveis são os seguintes:

* VMware® (ESX/ESXi Server): suporte a ESXi 7\.0 e ESXi 6\.x (implantação de OVA), deve usar driver de adaptador de rede VMXNET3, além de disco paravirtualizado. Ao realizar a implantação da máquina virtual (VM), a atualização deve ser feita no hardware da máquina. As máquinas virtuais podem ser usadas no formato OVA/OVF.
* Xen Citrix®: suporte Citrix Hypervisor 8\.2 LTSR, Citrix XenServer 7\.0, XenServer 7\.1 LTSR e Xen Project 4\.x.x Series (implantação OVA), você deve usar o gerador HVM. Podem ser usadas máquinas virtuais de formato RAW.
* Microsoft® Hyper\-V: suporte para Windows Server 2019, Windows Server 2016, Windows Server 2012, e máquinas virtuais em formato VHD/VHDx podem ser usadas. Azure: máquinas virtuais em formato VHD podem ser usadas. AWS: VM no formato OVA ou VMDK.
* Microsoft® Azure (conversão de OVA em VHD).
* Linux KVM(QCOW2\).
* Amazon (Amazon Web Services \- AWS) (implantação de AMI) (informe o ID da conta e a região).
* Google® Cloud Platform (GCP) (implantação OVA).
* Openstack: máquinas virtuais em formato RAW podem ser usadas.

### Requisitos de hardware

Esses requisitos dependem do número máximo de sessões simultâneas tratadas pela solução e do tempo de retenção das gravações dado por cada cenário nos diferentes ambientes, que são definidos de acordo com as seguintes informações:

* **RDP/SSH:** quando o acesso é feito pelo Terminal Proxy.
* **Web:** quando o acesso é feito pelo navegador.

A estrutura de acesso é a seguinte:

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1665512680927.png)Arquitetura NOVPN (opcional) 

### Consumo por conexão



| Hardware | Uso | RDP/SSH | Web |
| --- | --- | --- | --- |
| CPU: número de conexões simultâneas por núcleo (con./núcleo) | Moderado | 300 | 30 |
| RAM: quantidade de memória usada por conexão (MB/con.) | Moderado | 20 | 40 |
| HDD: espaço em disco por tempo por conexão (kB/s/con.) | Moderado | 3 | 4 |



| NET: tráfego de rede por conexão | (Server Side RX / TX) | (kbps / con.) |
| --- | --- | --- |
| Moderado | 1/3 | 45/5 |



| NET: tráfego de rede por conexão | (Client Side RX / TX) | (kbps / con.) |
| --- | --- | --- |
| Moderado | 0,2/1,0 | 10/80 |

Para implantação no cliente, as seguintes características estão disponíveis para o esquema HA (Two Equal Appliances in Cluster):

* Até xxx conexões simultâneas
* Usuários: xxx
* Sistemas Gerenciados: xx
* Horas de uso por dia: xx horas
* Dias de uso por semana: x Dias
* Meses de retenção: x meses

Os requisitos mínimos de hardware seriam os seguintes:

* x vCPU mínimo (2,0 GHz) (não compartilhado).
* Mínimo de RAM x GB (não compartilhado).
* Mínimo DD x TB (Não compartilhado, este requisito depende diretamente da retenção necessária).
* Mínimo 1 porta de rede (1 GbE) (não compartilhada).

InfoPara uma arquitetura de Alta Disponibilidade (Ativo\-Passivo) com dois membros em um cluster, são necessárias duas máquinas com os mesmos requisitos de Hardware. Para um modelo (Ativo\-Ativo) adicionalmente, deve\-se adicionar um balanceador, ofertado separadamente quando necessário.

Para implantação como recuperação de desastres, você tem os seguintes recursos para um único dispositivo:

* Até x conexões simultâneas
* Usuários: x
* Sistemas Gerenciados: x
* Horas de uso por dia: x horas
* Dias de uso por semana: x dias
* Meses de retenção: x meses

Os requisitos mínimos de hardware seriam os seguintes:

* Mínimo vCPU x CPU (2,0 GHz) (não compartilhado).
* Mínimo de RAM x GB (não compartilhado).
* Mínimo DD x TB (não compartilhado, este requisito depende diretamente da retenção necessária).
* Mínimo 1 porta de rede (1 GbE) (não compartilhada).

### 

