Private notesArtigo em construção## Configurar a lista de acesso de desinstaladores para segregação geral

1. Acesse a plataforma senhasegura.
2. Vá até **GO Endpoint Manager➔Políticas➔Windows➔Listas de acesso.**
3. Clique em **Exibir ações (****⁝).**
4. Selecione **Nova segregação geral.**
5. Escolha **Desinstaladores****.**
6. Na janela que aparece, preencha os campos.
	* **Nome:**defina uma nome para a lista.
	* **Ação:** escolha entre **allowlist** para permitir ou **denylist** para bloquear.
	* **Status:**escolha entre **ativo** ou **inativo****.**
	* **Gravar a sessão desses aplicativos:** escolha entre **ativo** ou **inativo**.
7. Na aba**Desinstaladores****,**preencha os campos.
	* **Critério:**escolha um ou mais.
		+ **Certificado:** o certificado na aplicação possui um valor fixo chamado **Trusted Only**, de modo que será validado o certificado que possuir essa regra ativa.
		+ **ID de classe COM:** informação em formato de GUID presente em todas as aplicações.
		+ **Diretório:**é o caminho da aplicação. Para ser checado com a regra, o caminho registrado deve ser idêntico ao do arquivo.
		+ **Hash do arquivo:** é uma informação única que cada arquivo tem. A cada mudança realizada no arquivo, é gerado um novo hash.  
		CuidadoSe você tiver uma regra que usa o critério de hash do arquivo, apenas esse critério será considerado. Os critérios Nome do produto e Diretório serão ignorados. Se a lista de acesso contiver vários hashes de arquivo, eles serão avaliados com uma condição 'OU'.
		+ **Versão do arquivo:** informa a versão do arquivo.
		+ **Identificador de zona da internet:** essa informação é referente à origem do arquivo, quando ele é baixado da internet, estará como Internet Zone, geralmente todos os arquivos baixados estão classificados assim, já os executáveis que estão instalados, por exemplo, tem essa informação como Local Zone.
		+ **Nome do produto:** é o nome do programa, é avaliado tanto o nome do arquivo quanto o nome do programa.
		+ **Versão do produto:** especificação da versão.
		+ **URL da fonte:** refere\-se à URL de onde o arquivo foi baixado. O arquivo só pode ser executado se a URL da fonte estiver correta e for validada.
		+ **Código de atualização:** essa informação também é um GUID de cada programa, e pode ser encontrada no registro do Windows.
		+ **Nome do fornecedor:** nome do fabricante.
		+ **Editor da loja do Windows:** é sobre as aplicações baixadas na Microsoft Store. É validado conforme o diretório do arquivo: ProgramFiles (e a x86 também), e na pasta oculta WindowsApps.  
		InfoAs DLLs funcionam como aplicações, e podem ser filtradas por **Nome do produto, Versão do produto, Certificado, Versão do arquivo, Diretório, Hash do arquivo, Identificador de zona de Internet**e**Editor da windows store.**
	* **Regra:**preencha conforme o critério escolhido.Cuidado
		+ Ao preencher a lista com mais de um critério \- **Versão do Produto, Nome do Produto,**\- a condição de avaliação será "**E"**. O resultado final corresponde à regra somente se essas duas condições forem satisfeitas.
		+ Ao preencher a lista com mais de um critério e regras diferentes para um deles \- **Versão do Produto 10, Nome do Produto *A*, Nome do Produto *B*,** \- a condição de avaliação será **"****E"**para os critérios e**"OU"**para as regras**.**Em outras palavras**: Versão do Produto 10 "E" (Nome do Produto *A* "OU" Nome do Produto *B*).**
8. Clique em **Adicionar**.
9. Se você escolheu **denylist**, clique em **Salvar**. Você receberá uma mensagem de confirmação.
10. Se você escolheu **allowlist**, continue preenchendo os campos na aba de**Workflow.**
11. Marque as opções para a **Configuração de elevação.**
	* **Usuário pode elevar aplicações.**
	* **Requer justificativa para elevar aplicações.**
	* **Requer aprovação para elevar aplicações.**
	* **Permitir acesso emergencial.**
	* **Aprovação em níveis.**Para funcionar, os aprovadores devem estar cadastrados em níveis no Relatório de aprovadores.
12. Se você marcou **Requer aprovação para elevar aplicações**, defina o número de vezes para cada ação específica.
	* **Aprovações necessárias**para que o usuário consiga elevar o privilégio e executar a ação.
	* **Reprovações necessárias**para cancelar a elevação do privilégio.
13. Responda**Sim**ou**Não**para as**Configurações da solicitação de acesso.**
	* **Obrigatório especificar código de governança ao justificar?**
	* **Sempre adicionar o gestor do usuário aos aprovadores?**
14. Clique em **Salvar.**
15. Você receberá uma mensagem de confirmação.



---

## Configurar a lista de acesso de desinstaladores para workstations específicas

1. Acesse a plataforma senhasegura.
2. Vá até **GO Endpoint Manager➔Políticas➔Windows➔Listas de acesso.**
3. Clique em **Exibir ações (****⁝).**
4. Selecione**Nova segregação para workstation.**
5. Escolha **Aplicações.**
6. Na janela que aparece, preencha os campos.
	* **Nome:**defina uma nome para a lista.
	* **Ação:** escolha entre **allowlist** para permitir ou **denylist** para bloquear.
	* **Status:**escolha entre **ativo** ou **inativo****.**
	* **Gravar a sessão desses aplicativos:** escolha entre **ativo** ou **inativo**.
7. Na aba**Aplicações**preencha os campos.
	* **Critério:**escolha um ou mais.
		+ **Certificado:** o certificado na aplicação possui um valor fixo chamado **Trusted Only**, de modo que será validado o certificado que possuir essa regra ativa.
		+ **ID de classe COM:** informação em formato de GUID presente em todas as aplicações.
		+ **Diretório:**é o caminho da aplicação. Para ser checado com a regra, o caminho registrado deve ser idêntico ao do arquivo.
		+ **Hash do arquivo:** é uma informação única que cada arquivo tem. A cada mudança realizada no arquivo, é gerado um novo hash.
		+ **Versão do arquivo:** informa a versão do arquivo.
		+ **Identificador de zona da internet:** essa informação é referente à origem do arquivo, quando ele é baixado da internet, estará como Internet Zone, geralmente todos os arquivos baixados estão classificados assim, já os executáveis que estão instalados, por exemplo, tem essa informação como Local Zone.
		+ **Nome do produto:** é o nome do programa, é avaliado tanto o nome do arquivo quanto o nome do programa.
		+ **Versão do produto:** especificação da versão.
		+ **URL da fonte:** contém informações tendo em arquivos de vídeo.
		+ **Código de atualização:** essa informação também é um GUID de cada programa, e pode ser encontrada no registro do Windows.
		+ **Nome do fornecedor:** nome do fabricante.
		+ **Editor da loja do Windows:** é sobre as aplicações baixadas na Microsoft Store. É validado conforme o diretório do arquivo: ProgramFiles (e a x86 também), e na pasta oculta WindowsApps.  
		InfoAs DLLs funcionam como aplicações, e podem ser filtradas por **Nome do produto, Versão do produto, Certificado, Versão do arquivo, Diretório, Hash do arquivo, Identificador de zona de Internet**e**Editor da windows store.**
	* **Regra:**preencha conforme o critério escolhido.Cuidado
		+ Ao preencher a lista com mais de um critério \- **Versão do Produto, Nome do Produto,**\- a condição de avaliação será "**E"**. O resultado final corresponde à regra somente se essas duas condições forem satisfeitas.
		+ Ao preencher a lista com mais de um critério e regras diferentes para um deles \- **Versão do Produto 10, Nome do Produto *A*, Nome do Produto *B*,** \- a condição de avaliação será **"****E"**para os critérios e**"OU"**para as regras**.**Em outras palavras**: Versão do Produto 10 "E" (Nome do Produto *A* "OU" Nome do Produto *B*).**
8. Clique em **Adicionar**.
9. Na aba **W****orkstations**, clique no sinal de **\+**e escolha uma workstation de acordo com os critérios.
	* **Código:**onúmero identificador na lista de workstations.
	* **UUID:** identificador exclusivo da workstation.
	* **Hostname:**  nome da máquina.
	* **IP:** endereço IP da workstation.
10. Clique em **Adicionar**.
11. Ainda na aba **Workstations**, você verá mais informações.
	* **Inclusor:** usuário que adicionou a workstation.
	* **Inclusão:** a data em que a workstation foi adicionada.
12. Clique em **Salvar**.
13. Se você escolheu **denylist**, você receberá uma mensagem de confirmação.
14. Se você escolheu **allowlist**, continue preenchendo os campos na aba de**Workflow.**
15. Marque as opções para a **Configuração de elevação.**
	* **Usuário pode elevar aplicações.**
	* **Requer justificativa para elevar aplicações.**
	* **Requer aprovação para elevar aplicações.**
	* **Permitir acesso emergencial.**
	* **Aprovação em níveis.**Para funcionar, os aprovadores devem estar cadastrados em níveis no [Relatório de aprovadores](/v3-32/docs/pt/go-endpoint-manager-windows-application-access-lists).
16. Se você marcou **Requer aprovação para elevar aplicações**, defina o número de vezes para cada ação específica.
	* **Aprovações necessárias**para que o usuário consiga elevar o privilégio e executar a ação.
	* **Reprovações necessárias**para cancelar a elevação do privilégio.
17. Responda**Sim**ou**Não**para as**Configurações da solicitação de acesso.**
	* **Obrigatório especificar código de governança ao justificar?**
	* **Sempre adicionar o gestor do usuário aos aprovadores?**
18. Clique em **Salvar.**

InfoAs regras serão aplicadas tanto para aplicações iniciadas nos agentes GO Endpoint Manager quanto para aplicações iniciadas fora do GO Endpoint Manager. Os valores das regras de segregação podem ser preenchidos com expressões regulares.  
  


  


