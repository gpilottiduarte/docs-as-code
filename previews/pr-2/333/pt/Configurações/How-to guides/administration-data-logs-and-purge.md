O log rotate do senhasegura e o expurgo de dados do senhasegura têm, por padrão, algumas tabelas de banco de dados particulares, que são rotacionadas por período. Muitas dessas tabelas são usadas pela Equipe de Suporte do senhasegura para diagnóstico e resolução de problemas, e não afetam a operação do cliente. A única tabela que interage com a operação do cliente é o e\-mail enviado e os registros recebidos por e\-mail. Todos esses dados podem ser indexados pelo provedor SMTP e POP3 do cliente. Veja abaixo as entidades rotacionadas e seu período.

Tempo de expurgo de logsPor padrão, os logs do sistema são mantidos no senhasegura, sem um período de expurgo. Para o backup, a retenção dos logs e segredos seguirá as regras da política aplicada em cada local de backup utilizado.  


Por exemplo, as informações para um backup externo podem ter uma retenção de mais de 2 anos.



---

  


## Solicitações de tarefas assíncronas

Todas as tabelas operacionais e de registro utilizadas pela ***Orbini Asynchronous Tasks*** são rotacionadas. O módulo que solicitou a operação manterá todos seus os registros. Esses dados expurgados não têm nenhum detalhe de operação do cliente ou dados sensíveis.

* ***Orbini Assync PIDs:*** Registros rotacionados no 7º dia. Tem o timestamp de execução e seu PID interno utilizado;
* ***Orbini Assync Logger:*** Registros rotacionados no 15º dia. Tem informações de processo e mensagens de erro;
* ***Orbini Assync Tasks:*** Registros rotacionados no 30º dia. Tem as requisições de execução fornecidas pelos módulos dos clientes;
* ***Orbini User Notification:*** Registros rotacionados no 30º dia. Tem mensagens do sistema enviadas aos usuários;
* ***Device Connectivity Tests:*** Registros rotacionados no 30º dia. Teste de conexão de dispositivos registrados com base no protocolo de conexões registradas;
* ***LDAP Sync Logs:*** Registros rotacionados no 30º dia. Usado pelo Orbini LDAP Synchronizer para diagnóstico e solução de problemas;
* ***Orbini WebService A2A Requests:*** Registros rotacionados no 30º dia. Tem todos as solicitações de clientes para WebService A2A;
* ***Orbini Events:*** Registros rotacionados no 30º dia. Possui registro de timestamp de interação de dados do usuário. Não confundir com eventos de dados de cada módulo. A *Orbini Events* é usada somente para fins de estrutura;
* ***Orbini Changed Data:*** Registros rotacionados no 30º dia. Possui registro de timestamp de interação de dados do usuário. Não confundir com a auditoria de dados de cada módulo. A *Orbini Changed Data* é usada somente para fins de estrutura;
* ***Orbini SMTP Emails:*** Registros rotacionados no 180º dia. Tenha todos os e\-mails enviados por senhasegura . Estes e\-mails podem ter informações sensíveis ou informações específicas do módulo. Os mesmos dados podem ser recuperados pelo servidor SMTP do cliente;
* ***Orbini POP3 Emails:*** Registros rotacionados no 180º dia. Tenha todos os e\-mails recebidos pela conta do senhasegura configurados. Estes e\-mails podem ter informações sensíveis ou informações específicas do módulo. Os mesmos dados podem ser recuperados pelo servidor SMTP do cliente;
* ***Orbini User Actions:*** Registros rotacionados no 300º dia. Tem todos os registros de interação de dados de usuário e de login/logout;



---

  


## Sessão de expurgo de dados

Todas as sessões de proxy são registradas em seu formato de protocolo bruto, e guardadas no armazenamento de dados das senhasegura . Estes dados também podem ser copiados para o repositório de backup do cliente durante o procedimento de backup.

Estes dados consumirão algo próximo ao tráfego da rede durante uma sessão de proxy. Não há um número mágico para determinar o tamanho de um arquivo de replay em bruto de uma sessão.

No momento, o cliente decidirá se a sessão deve ser mantida ou se pode ser expurgada pelo processo de expurgo automático do senhasegura .

Por padrão, o senhasegura é configurado com 90 dias de armazenamento da sessão. Portanto, se uma sessão ocorreu há mais de 90 dias, ela será automaticamente expurgada.

Este relatório contém uma lista com os arquivos de sessões armazenados no senhasegura:

Em **Configurações → Serviços → Arquivos do armazém**, podemos visualizar informações sobre os arquivos do armazém:

* **Código:** é o identificador do arquivo.
* **Nome:** é o nome gerado para o arquivo.
* **Tipo:** é o tipo da extensão do arquivo.
* **Conta:** não é editavel pelo usuário padrão e o relatório de contas não permite criar novas contas.
* **Upload:** data e hora em que ocorreu.
* **Expurgado:** se foi expurgado ou não.
* **Estado:** se este dado está ativo no sistema ou não.
* **Path:** o caminho que se encontra este arquivo no sistema.



---

  


## Evitar o expurgo da sessão

No relatório de **Sessões remotas**, acessado pelo menu **PAM Core ➔ Credenciais ➔ Controle de acesso ➔ Sessões remotas**, o administrador pode evitar o expurgo da sessão clicando na ação ***Impedir******expurgo*** sobre o registro da sessão desejada;

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1668001179927.png)

### Intervalo de expurgo da mudança

No menu **Configurações ➔ Parâmetros de sistema ➔ Parâmetros de sistema**, vá para a ***Sessão remota*** e mude o campo ***Quantidade de dias para expurgo***. Você pode alterar este campo definindo um novo período de expurgo de 1 dia para 1000 dias;

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1668021507355.png)

### Desabilitar o serviço de expurgo

O administrador também pode desativar todos os serviços de expurgo no menu **Configurações ➔ Processos de execução**, desativando os serviços de expurgo ***ARCH \-*** ***Arquivador de Tabelas*** e ***Warehouse purge***;

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1668021188860.png)

  


