## Controle de Acesso

Link para o [documento](/v3-32/docs/pt/pam-session-system-parameters-access-control) referente a esta seção.



---

## Sessão remota

Link para o [documento](/v3-32/docs/pt/pam-session-proxy-settings) referente a esta seção.



---

## Segurança

Link para o [documento](/v3-32/docs/pt/pam-session-system-parameters-security) referente a esta seção.



---

### Configurador de Segurança

Vá até **Configurações****➔ Parâmetros do sistema ➔ Segurança** para visualizar as demais configurações de segurança:

#### Manutenção das contas de usuário

* Minutos para expirar a sessão: **0 a 120**
* Bloquear conta por erros de login: de **2 a 6** tentativas até bloqueio
* Bloquear conta inativa: **0 a 120** dias até bloqueio
* Obrigar alteração de senha no primeiro acesso.
* Expirar a senha: **1 a 120** dias até a expiração da senha

#### Autenticação de multifator

* Forçar o uso de Autenticação de multifator para todos os Usuários.
* Forçar o uso de certificado digital para todos os usuários.
* Habilitar o uso de uma solução externa de autenticação de multi\-fator.
* Permitir 'Confiar neste computador' até no máximo: de **1 a 720** horas.
* Aceitar tokens gerados com até **60 a 270** segundos de variação.

#### Nível de segurança de senha

* **Caracteres no mínimo para a senha:** selecione entre 8 a 100
* **Números no mínimo para a senha:**selecione entre 1 a 100
* **Restringir reutilização de senha:** de 0 às 100 últimas senhas que não podem ser utilizadas.
* **Requer símbolos na senha:** marque se será necessário que a senha contenha símbolos.

#### Controle de Acesso por IP

* **Permitir todos/Negar todos:**
* **Ranges de IP:**
	+ Início
	+ Final
	+ Ação
		- Permitir todos
		- Negar todos

#### MFA adaptativo por localização

* **Ranges de IP:**
	+ Início
	+ Final
	+ Ação
		- Obrigar MFA
		- Ignorar MFA

InfoPermitir **Confiar neste computador** pode ser ativado apenas por um usuário usando a Interface Web. Esta opção não está disponível nos outros tipos de proxies.



---

## Executions

Vá até **Configurações****➔ Parâmetros do sistema ➔ Parâmetros do sistema ➔ Executions**:

* **Quantidade de tentativas de troca:** defina entre o intervalo de **1 a 10\.**
* **Time out da conexão (s):** tempo de inatividade até encerrar uma conexão entre o intervalo de **1 a 300\.**
* **Time out de leitura (s):**tempo máximo de leitura de resposta de um comando entre o intervalo de **1 a 300\.**
* **Total de registros por ciclo:** defina um intervalo entre **1 a 10\.000** ciclos.
* **Intervalo entre tentativas (min):** defina o intervalo de tempo em minutos para as tentativas de utilizar o template de troca entre **0 a 1\.440**.
* **Intervalo entre tentativas com erro (min):** tempo mínimo para tentar trocar novamente uma senha com erro de troca **1\.440 a 10\.080\.**
* **Workflow de aprovação para templates:** escolha **Sim** ou **Não** para definir se será necessário ter aprovadores no processo de criação de templates.



---

## User Behavior

Link para o [documento](/v3-33/docs/pt/user-behavior-system-parameters) referente a esta seção.



---

### Notificações de Comportamento

Você pode criar notificações a partir dos seguintes parâmetros em **Configurações****➔ Notificações ➔ Configurações.**No menu de ações, adicione uma nova notificação e filtre pela categoria **Comportamento**:

* Acesso em horário incomum
* Acesso com duração incomum
* Acesso de origem incomum
* Alteração de senha incomum
* Acesso em destino incomum
* Acesso de credencial incomum
* Visualização de origem incomum
* Visualização de credencial incomum



---

## Notificações

Vá até **Configurações****➔ Parâmetros do sistema ➔ Parâmetros do sistema ➔ Notificações**:

### Configuração de SMS

* **Plataforma de envio:** selecione Zenvia SMS.
* **Remetente:** preencha com o nome de quem está fazendo o envio da mensagem.
* **Usuário:** preencha com seu usuário de login no Zenvia SMS.
* **Senha:** preencha com sua senha de login no Zenvia SMS.

InfoPara mais informações, acesse [Zenvia](https://www.zenvia.com).



---

## Aplicação

Vá até **Configurações****➔ Parâmetros do sistema ➔ Parâmetros do sistema ➔ Aplicação.**

### Parâmetros de conexão da aplicação

* **Conector de rede:** selecione **senhasegura self\-managed \- NCagent:30200**. Este agente é padrão para conexões com sistemas externos.

Importante* Caso você queira realizar o backup das credenciais *(secrets)*, você deverá, necessariamente, indicar um conector de rede.
* Não é possível realizar o backup da base de dados e de vídeos *(system)*.
* Caso você seja cliente do SaaS, é necessário liberar, no seu firewall, o tráfego do senhasegura ao seu servidor para os protocolos utilizados.
InfoCaso o equipamento não possua um network connector cadastrado, e exista um parâmetro do mesmo na aplicação, este será utilizado para  
 * trocas de senha
* sessões
* enviar mensagens ao SIEM
* teste de conectividade
### Parâmetros de credenciais e dispositivos

* **Forçar a alteração da senha na importação em lote?:** escolha **Sim** ou **Não** para decidir se ao fazer importação em lote, a senha deverá ser alterada.
* **Usar as informações adicionais na chave única?:** escolha **Sim** ou **Não** para decidir se deseja usar as informações adicionais da chave única.
* **Usar o tipo da credencial na chave única?:** escolha **Sim** ou **Não** para decidir se o tipo de credencial poderá ser usado na chave única.
* **Nome de campo adicional (1 e 2\):** preencha com os nomes de campos adicionais.

### Configuração de relatórios

* **Registros por página:** selecione quantas páginas serão visíveis no relatório entre o intervalo de 1 a 1000\.
* **Registros por página (máx.):** selecione o máximo de páginas que serão visíveis no relatório de 1 a 1000\.
* **Ocultar filtros por padrão?:** escolha **Sim** ou **Não** para decidir se os filtros de busca dos relatórios serão ocultados.
* **Adicionar hora e minuto ao filtro de intervalo de datas?:** escolha **Sim** ou **Não** para decidir se será possível filtrar por períodos.

### Configuração gerais da aplicação

* **Idioma padrão:**selecione um dos idiomas disponíveis na aplicação.
	+ Deutsch
	+ English
	+ Español
	+ Français \[BETA]
	+ Polski
	+ Português
* **Ativar banner de login?:** escolha **Sim** ou **Não** para decidir se irá ter uma mensagem após o login do usuário.
* **Redirecionar ao alterar o módulo?**escolha entre **Sim**ou **Não**para determinar se, ao mudar de módulo, a página desse novo módulo será carregada automaticamente, em vez de exigir cliques adicionais para navegar até a tela desejada.
* **Banner de login:** escreva a mensagem que irá aparecer após o login.
* **Credencial de backup remoto:** selecione uma de sua credenciais cadastradas no sistema. Digite IP, Hostname ou Username.

### Configuração de IPs confiáveis

* **IPs da aplicação:** adicione um IP confiável.
* **IPs confiáveis:** visualize a lista de IPs adicionados como confiáveis.

### Cerimônia de chave mestra

**MFA obrigatório para cerimônia de chave mestra?:** escolha **Sim** ou **Não** para decidir se, ao realizar a cerimônia de chave mestra, será necessário utilizar um token para autenticação.

CuidadoDesmarcar esta opção irá diminuir a segurança do seu cofre.



---

## LDAP / Active Directory

Vá até **Configurações****➔ Parâmetros do sistema ➔ Parâmetros do sistema ➔ LDAP / Active Directory**:

### Configuração do serviço LDAP

* **Inativar usuários sem grupo ao sincronizar?:** escolha **Sim** ou **Não** para decidir se irá inativar usuários que não fazem parte de um grupo no processo de sincronização.
* **Utilizar uma credencial do cofre na autenticação?:** escolha **Sim** ou **Não** para decidir se deseja utilizar uma credencial para realizar autenticação.

### Opções de login

* **Atualizar nome do usuário ao logar?:** escolha **Sim** ou **Nã****o** para decidir se se o nome do usuário será atualizado no processo de login.
* **Atualizar e\-mail de contato ao logar?:** escolha **Sim** ou **Não** para decidir se o e\-mail do usuário será atualizado no processo de login.
* **Atualizar a senha local ao logar?:** escolha **Sim** ou **Não** para decidir se a senha será atualizada no processo de login.
* **Ativar o usuário local ao logar?:** escolha **Sim** ou **Não** para decidir se o usuário local ficará ativo ao logar.
* **Bloquear o login quando usuário estiver inativo no sistema?:** escolha **Sim** ou **Não** para decidir se deseja que um usuário inativo seja bloqueado.

### Configuração dos domínios

* **Novo domínio:** adicione um novo domínio.
* **Domínio:** preencha com o nome do domínio.
* **Domínio (Nome curto):**preencha com um apelido para o nome do domínio.

InfoOs domínios associados aos dispositivos e credenciais não serão excluídos.



---

## Task Manager

Vá até **Configurações****➔ Parâmetros do sistema ➔ Parâmetros do sistema ➔ Task Manager**:

* **Permitir transferência de arquivos:** escolha **Sim** ou **Não** para decidir se a transferência de arquivos será permitida no uso do Task Manager.
* **Limite máximo de transferência (em kb):** defina qual limite máximo que será permitido.
* **Tempo de retenção dos arquivos (em dias, 0 para ilimitado):** defina por quanto tempo os arquivos serão mantidos no sistema.



---

## Domum

Vá até **Configurações****➔ Parâmetros do sistema ➔ Parâmetros do sistema ➔ Domum**:

* **Domínio funcionários:**preencha o domínio que será utilizado para o link de acesso dos funcionários.
	+ **Por exemplo:**int.domum.senhasegura.com
* **Domínio fornecedores:**preencha o domínio que será utilizado para o link de acesso no servidor de DNS Configurações de e\-mail.
	+ **Por exemplo:**domum.senhasegura.com

### Configuração de e\-mail

* **Conta de envio:** selecione qual conta de e\-mail será responsável pelo envio do link de acesso externo.

### Token de autenticação inicial

Indica o meio pelo qual o primeiro token de acesso será enviado:

* E\-mail
* SMS
* ---

## MySafe

  
Link para o [documento](/v3-33/docs/pt/mysafe-admin-sharing-options) referente a esta seção.
