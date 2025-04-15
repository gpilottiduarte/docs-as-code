## Relatório de aplicações e desinstaladores

Através desse relatório você pode visualizar todas as aplicações já mapeadas automaticamente pelos serviços do GO Endpoint Manager, ou executadas. Existe uma relação de todos os desinstaladores de aplicativos identificados nas estações de trabalho. Por também serem aplicativos, suas ações de registro são idênticas às ações do relatório de aplicações.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1676488315931.png)Relatório de aplicações

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager ➔ Geral ➔ Aplicações**ou**GO Endpoint Manager ➔ Geral ➔ Desinstaladores.**
* **Código:**número de identificação da aplicação.
* **Tipo:**filtre por **Aplicações** ou **Desinstaladores.**
* **Nome:**nome me da aplicação.
* **Fabricante:**fabricante da aplicação.
* **Usuário da inclusão:** usuário que incluiu a aplicação noGO Endpoint Manager.
* **Inclusão:** data que o usuário foi incluido.
* **Último uso:**qual foi a data da última vez que a aplicação foi executada.
* **Ativo:** se a aplicação está ativa/inativa na workstation.
* **Ação:**ações possíveis.
	+ **Editar:**alterar cadastro de aplicação.
	+ **Versões do aplicativo:**verifique as versões da aplicação instalada.
	+ **Detalhes do aplicativo:**veja detalhes sobre a aplicação, data de inclusão, checksum, e usuário da inclusão.
	+ **Eventos:**eventos relacionados ao uso da aplicação e ações realizadas usando o aplicativo.
* **Outras ações:**acesse [Telas comuns](https://docs.senhasegura.io/v3-32/docs/pt/general-information-graphical-user-interface?#telas-comuns) para mais informações.

Um aplicativo é único para o senhasegura, independente de sua pasta de instalação e do nome de seu binário. Desta forma, o GO Endpoint Manager consegue identificar suas diferentes versões e centralizar o cadastro para criar as segregações. O administrador pode identificar as diferentes versões instaladas em seu parque de máquinas. Suas ações de registro também permitem visualizar os eventos de execução.



---

## Relatório do painel de controle

Os aplicativos do painel de controle são pré\-configurados porque a Microsoft possui diferentes formas de acesso aos controles para cada versão do Windows. Este relatório mostra cada comando necessário para alcançar o controle, e quais as versões de Windows compatíveis. A ação de registro apresenta um relatório com todos os eventos de elevação de controle de uma workstation.

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager ➔ Geral ➔ Painel de controle**.
* **Código:** número de identificação da aplicação do painel de controle.
* **Nome****:**nome da aplicação do painel de controle.
* **Comando**:comando que foi executado.
* **W7:**versão do Windows 7\.
* **W8:**versão do Windows 8\.
* **W10:**versão do Windows 10\.
* **Último uso:** qual foi a data da última execução da aplicação.
* **Ativo:**se a aplicação está ativa/inativa na workstation.
* **Ação:**eventos relacionados ao uso da aplicação e ações realizadas usando o aplicativo.
* **Outras ações:**acesse [Telas comuns](https://docs.senhasegura.io/v3-32/docs/pt/general-information-graphical-user-interface?#telas-comuns) para mais informações.



---

## Relatório de eventos

Este relatório detalha todos os registros da Workstations, Aplicações, Desinstaladores, Painel de controle e DLLs. É neste relatório que é centralizada cada ação automática ou intencional do usuário a partir do GO Endpoint Manager. Você tem acesso a todos os filtros e combinações para identificar os eventos nas workstations.

CuidadoApenas DLLs incluidas depois do início do processo são analisadas. Se um usuário tentar abrir um arquivo que tenha uma DLL que não é considerada confiável, o sistema gerará um evento chamado **Untrusted DLL execution attempt** e desligará a aplicação. O evento será notificado via SYSLOG e disponível para configuração de e\-mail.![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1677259797763.png)Relatório de eventos Para visualizar os eventos gerados pela aplicação:

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager ➔ Reports ➔ Windows ➔ Eventos.**
* **ID**: número do identificador do evento.
* **Usuário**: usuário no sistema que gerou o evento na aplicação do GO Endpoint Manager.
* **Área de Trabalho**: descreve o sistema operacional usado.
* **Domínio**: domínio usado pela aplicação.
* **Evento**: qual tipo de evento foi gerado.
	+ Acesso à rede bloqueado
	+ Adaptador de rede
	+ Alerta
	+ Aplicativo adicionado
	+ Aplicativo encerrado
	+ Aplicativo excluído
	+ Aplicativo iniciado
	+ Atualização
	+ Atualizar lista de acesso
	+ Atualizar lista de credenciais
	+ Cadastro de usuário
	+ Cadastro de workstation
	+ Compartilhamento de rede
	+ Configuração de sistema
	+ Copiar senha
	+ Desinstalação
	+ Desinstalação Go!
	+ Detalhe da credencial
	+ Scan de diretórios e arquivos
	+ Elevação de privilégio bloqueada
	+ Erro ao buscar credenciais
	+ Falha na autenticação de duplo fator
	+ Ficar offline
	+ Ficar online
	+ Tentativa de execução de DLL não confiável
	+ Análise de malware
	+ Reputação do arquivo
	+ Comando
	+ Linux \- Permitido
	+ Linux \- Negado
	+ Instalação Go!
	+ Acesso JIT
	+ Listagem de macro
	+ Login
	+ Macro
	+ Painel de controle
	+ Run As
	+ Solicitação de registro
	+ Tentativa de novo registro
	+ UAC
	+ Uso de credencial
	+ Usuário local inativado
	+ Visualizar senha
	+ Workstation aprovada
	+ Workstation inativada
* **Ação do uso:**descreve a ação relacionada ao evento.
	+ Alerta: ação suspeita.
	+ Nenhuma: não houve nenhuma ação.
	+ Processo interrompido: o processo não foi finalizado.
	+ Registro de log: o registro de log foi gerado.
	+ Permitido: esse evento aparece quando o comando executado no GO Shell foi registrado e está ativo e sendo aplicado na workstation.
	+ Negado: esse evento aparece quando o comando executado no GO Shell não foi registrado e não está ativo ou não está sendo aplicado na workstation.
* **Execução**: qual entidade executou a ação.
* **Credencial usada**: descreve a credencial relacionada a aplicação do GO Endpoint Manager.
* **Tipo**: qual o tipo de evento.
	+ Online
	+ Offline
* **Data/Tempo**: data e hora que o evento ocorreu na aplicação.
* **Ação**: você pode alterar a permissão de um aplicativo utilizado pelo usuário e restringir ou liberar o uso da ferramenta.
* **Outras ações:**acesse [Telas comuns](https://docs.senhasegura.io/v3-32/docs/pt/general-information-graphical-user-interface?#telas-comuns) para mais informações.

CuidadoLogs anteriores a atualização da versão 3\.27 não são apresentados em**GO Endpoint Manager ➔ Relatórios ➔ Windows ➔ Eventos**. Você deve adicionar esta URL no caminho do browser para acessar os logs antigos: /flow/coof/certificado/evento/report

Exemplo: https://cofresenhasegura.com/flow/coof/certificado/evento/report

  


---

## Relatório de resultados da análise de malware

Através da plataforma senhasegura é possível obter uma lista de todas as análises realizadas nas workstations com o GO Endpoint Manager.

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager ➔ Relatórios ➔ Windows ➔ Análise de malware de aplicações** para mais detalhes.
* **Código:**número de identificação da aplicação.
* **Nome:**nome da aplicação escaneada.
* **MD5:** hash gerado da aplicação.
* **Reputação:**varia de \-100 até 100\. É a maneira com que o serviço [Virus Total](https://www.virustotal.com/gui/home/upload) apresenta o score do binário.
* **Veredito:**diagnóstico do serviço [Virus Total](https://www.virustotal.com/gui/home/upload) sobre a aplicação. É uma categorização da análise.
	+ **Harmless:**inofensivo, o programa não apresenta nenhum tipo de malware e sua execução é segura.
	+ **Clean:**limpo, está em uma lista de permitido do [Virus Total](https://www.virustotal.com/gui/home/upload) ou indetectável.
	+ **Malware:**pode ser interpretado como malware.
	+ **Greyware:**possível software indesejável (PUA/PUP).
	+ **Ransom:**ransomware ou crypter.
	+ **Phishing:**tentativa de phishing de usuário ou dispositivo.
	+ **Banker:**trojans bancários.
	+ **Adware:**apresenta propagandas indesejáveis.
	+ **Exploit:**contém ou executa um exploit.
	+ **Evader:**contém lógica para evasão de análise.
	+ **RAT:**Remote Access Trojan.
	+ **Trojan:**trojan ou bot.
* **Confiança no veredito:**mostra aporcentagem de confiança da avaliação do[Virus Total](https://www.virustotal.com/gui/home/upload).
* **Data do scan:**quando o escaneamento da aplicação foi realizado.
* **Origem:**nome da máquina onde o scan foi executado.
* **Outras ações:**acesse [Telas comuns](https://docs.senhasegura.io/v3-32/docs/pt/general-information-graphical-user-interface?#telas-comuns) para mais informações.



---

## Relatório de usuários orfãos em grupos locais

Busca de usuários removidos do Active Directory(AD) que ainda estão cadastrados localmente nas Workstations.

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➔Relatórios➔Usuários orfãos em grupos locais**para visualizar o relatório.
* **Workstation ID:**número identificador da workstation.
* **Hostname:**nome da workstation.
* **Nome do usuário:**nome do usuário no sistema.
* **Grupo:**nome do grupo que o usuário faz parte.
* **Domain/hostname:**nome da workstation ou nome do domínio que a workstation faz parte.
* **Último scan:**data do último scan.
* **Até:**data limite.
* **Sistema operacional:**define o sistema operacional.
* **Estado:**Ativo/Inativo.
* **Outras ações:**acesse [Telas comuns](https://docs.senhasegura.io/v3-32/docs/pt/general-information-graphical-user-interface?#telas-comuns) para mais informações.

  




---

## Relatório de usuários e grupos no grupo local de administradores

Busca de usuários e grupos que estão no grupo de administradores local.

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➔Relatórios➔Usuários e grupos no grupo local de administradores** para visualizar o relatório.
* **Workstation ID:**número identificador da workstation.
* **Hostname:**nome da workstation.
* **Nome do usuário:** nome do usuário no sistema.
* **Grupo:**nome do grupo que o usuário ou o grupo faz parte.
* **Tipos de entidades:**filtre o tipo de entidade encontrada.
	+ Usuário
	+ Grupo
	+ Stranded user
* **Local ou domínio:**escolha o entre Local ou domínio.
* **Domain/hostname:**nome da workstation ou nome do domínio que a workstation faz parte.
* **Último scan:**data do último scan.
* **Até:**data limite.
* **Sistema operacional:**define o sistema operacional.
* **Estado:**Ativo/Inativo.
* **Outras ações:** acesse [Telas comuns](https://docs.senhasegura.io/v3-32/docs/pt/general-information-graphical-user-interface?#telas-comuns) para mais informações.

  




---

## Relatório de usuários e grupos no grupo local de power users

Busca de usuários e grupos que estão no grupo de Power Users.

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➔Relatórios➔Usuários e grupos no grupo local de power users** para visualizar o relatório.
* **Workstation ID:** número identificador da workstation.
* **Hostname:**nome da workstation.
* **Nome do usuário:**nome do usuário no sistema.
* **Grupo:**nome do grupo que o usuário ou o grupo faz parte.
* **Tipo de enteidade:**filtre o tipo de entidade encontrada.
	+ Usuário
	+ Grupo
	+ Stranded user
* **Local ou domínio:**escolha o entre Local ou domínio.
* **Domain/hostname:**nome da workstation ou nome do domínio que a workstation faz parte.
* **Último scan:**data do último scan.
* **Até:**data limite.
* **Sistema operacional:**define o sistema operacional.
* **Estado:**Ativo/Inativo.
* **Outras ações:**acesse [Telas comuns](https://docs.senhasegura.io/v3-32/docs/pt/general-information-graphical-user-interface?#telas-comuns) para mais informações.

  




---

## Relatório de histórico de acesso na workstation

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➔Relatórios➔Histórico de acesso da workstation**para visualizar o relatório.
* **Código:** número de identificação do acesso.
* **Nome****:**nome do usuário na aplicação que realizou login na workstation.
* **Nome do usuário****:** nome do usuário no sistema que realizou login.
* **Acessos**: quantidade de vezes que o usuário realizou login.
* **Primeiro Login:** data do primeiro login.
* **Último login****:**data do último login.
* **Ação:**visualize o histórico de acessos do usuário.
* **Outras ações:**acesse [Telas comuns](https://docs.senhasegura.io/v3-32/docs/pt/general-information-graphical-user-interface?#telas-comuns) para mais informações.



---

## Relatório de histórico de acesso do usuário na workstation

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager ➔ Relatórios ➔ Histórico de acesso do usuário na workstation**para visualizar o relatório.
* **Código:** número de identificação do acesso.
* **Nome:**nome do usuário na aplicação que realizou login na workstation.
* **Nome do usuário****:**nome do usuário no sistema que realizou login na workstation.
* **Data/Hora:**data e hora que a workstation foi acessada.
* **Tipo:** filtre por Windows ou Linux.
* **IP:**endereço IP da workstation.
* **Outras ações:**acesse [Telas comuns](https://docs.senhasegura.io/v3-32/docs/pt/general-information-graphical-user-interface?#telas-comuns) para mais informações.



---

## Leia mais

Saiba mais informações sobre:

* [Relatório de gravações.](https://docs.senhasegura.io/v3-32/docs/pt/go-endpoint-manager-windows-record?highlight=verificar%20as%20grava%C3%A7%C3%B5es#verificar-as-grava%C3%A7%C3%B5es)
* [Análise de Malware](/v3-32/docs/pt/go-endpoint-manager-windows-malware-analysis).
* [Gravação de sessão](/v3-32/docs/pt/go-endpoint-manager-windows-record).
