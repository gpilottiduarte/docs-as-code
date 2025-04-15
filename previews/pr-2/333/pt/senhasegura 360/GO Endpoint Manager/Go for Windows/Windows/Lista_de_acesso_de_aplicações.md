# Lista de acesso de aplicações

Neste documento, você aprenderá como configurar listas de acessos de aplicações nos clients do PEDM GO Windows, tanto para segregação geral (para todas as workstations), como para workstations específicas.

## Como configurar listas de acessos de aplicações para segregação geral
 
1. No senhasegura, acesse a página de **Listas de acesso** através do caminho: **Grid Menu** > **GO Endpoint Manager** > **Políticas** >  **Windows** >  **Listas de acesso**.
2. Clique no botão **Exibir ações**, representado pelos três pontos verticais.
3. Selecione a opção **Nova segregação geral**.
4. Na tela **Escolha a categoria**, selecione **Aplicações**.
5. Na janela **Lista geral**, preencha os campos:  
	* **Nome***: defina um nome para a lista.
	* **Ação***: escolha entre **allowlist** para permitir ou **denylist** para bloquear.
	* **Status***: escolha entre **ativo** ou **inativo**.
	* **Gravar a sessão desses aplicativos***: escolha entre **ativo** ou **inativo**.
6. Na aba **Aplicações**, preencha os campos:
	* **Monitorar Processo Pai***: se o monitoramento de processo pai for **Habilitado**, todos os processos filhos criados por ele serão verificados conforme as permissões da lista de acesso. Se for **Desabilitado**, todos os processos serão avaliados normalmente pela lista de acesso.
	* **Monitorar Processo Filho***: se o monitoramento de processo filho for **Habilitado**, a lista de acesso será aplicada a todos os processos originados a partir dele. Se for **Desabilitado**, todos os processos serão avaliados normalmente pela lista de acesso.
	* Em **Critério** escolha um ou mais:
    	* **Certificado**: o certificado na aplicação possui um valor fixo chamado **Trusted Only**, de modo que será validado o certificado que possuir essa regra ativa.
    	* **ID de classe COM**: informação em formato de GUID presente em todas as aplicações.
    	* **Diretório**: é o caminho da aplicação. Para ser validado com a regra, o caminho registrado deve ser idêntico ao do arquivo.
    	* **Hash do arquivo**": é uma informação única que cada arquivo tem. A cada mudança realizada no arquivo, é gerado um novo hash. 
  
:::(Warning) (Cuidado)
Se você tiver uma regra que usa o critério de **Hash do arquivo** apenas esse critério             será considerado. Os critérios **Nome do produto** e **Diretório** serão ignorados. Se           a lista de acesso contiver vários critérios de hash de arquivo, eles serão avaliados com               uma condição **OU (||)**.
:::

:::(Info) (Info)
A partir da 3.32, será necessário executar este comando `Get-Filehash -path c:                           \pathToFile\fileExample.exe -algorithm SHA256` no PowerShell para conseguir o hash do arquivo         a ser configurado no critério. Troque o caminho após `-path` pelo caminho do arquivo. Dependendo da                     configuração do ambiente, será necessário ter acesso de administrador para realizar essa         operação.
:::

* **Versão do arquivo**: informa a versão do arquivo.
    	* **Identificador de zona da internet**: essa informação é referente à origem do arquivo, quando ele é baixado da internet, estará como Internet Zone, geralmente todos os arquivos baixados estão classificados assim, já os executáveis que estão instalados, por exemplo, tem essa informação como Local Zone.
    	* **Nome do produto**: é o nome do programa, é avaliado tanto o nome do arquivo quanto o nome do programa. Não recomendamos cadastrar uma política de acesso somente com este critério.
    	
:::(Warning) (Cuidado)
Cadastrar uma política de acesso utilizando somente o critério **Nome do produto**                  pode gerar riscos de segurança. Sugerimos adicionar mais de um critério, como                           **Diretório**, **Certificado**, **Hash do arquivo** ou qualquer outro.
:::
    	
* **Versão do produto**: especificação da versão.
* **URL da fonte**: refere-se à URL de onde o arquivo foi baixado. O arquivo só pode ser executado se a URL da fonte estiver correta e for validada.
* **Código de atualização**: essa informação também é um GUID de cada programa, e pode ser encontrada no registro do Windows.
* **Nome do fornecedor**: nome do fabricante.
* **Editor da loja do Windows**: é sobre as aplicações baixadas na Microsoft Store. É validado conforme o diretório do arquivo: Program Files (e a x86 também), e na pasta oculta Windows Apps.

:::(Info) (Info)
As DLLs funcionam como aplicações, e podem ser filtradas por **Nome do produto, Versão do produto, Certificado, Versão do arquivo, Diretório, Hash do arquivo, Identificador de zona de Internet** e **Editor da windows store.**
:::

* **Regra**: preencha conforme o critério escolhido.

:::(Warning) (Cuidado)
Ao preencher a lista com mais de um critério, o operador lógico será **E (&&)**. Ou seja, a regra só será executada se ambas as condições forem verdadeiras. Exemplo: `Versão do Produto E Nome do Produto`.

Ao preencher a lista com mais de um critério e regras diferentes, o operador lógico dos critérios será **E (&&)** e o operador lógico das regras será **OU (||)**. Exemplo: `Versão do Produto E (Nome do Produto A OU Nome do Produto B)`.
:::

:::(Info) (Info)
Itens com asterisco* são obrigatórios.
:::

7. Clique em **Adicionar**:
	* Se escolher **denylist**, clique em **Salvar** e receberá uma mensagem de confirmação.
	* Se escolher **allowlist**, continue preenchendo os campos na aba de **Workflow**.
8. Marque as opções para a **Configuração de elevação**:
	* **Usuário pode elevar aplicações**.
	* **Requer justificativa para elevar aplicações**.
	* **Requer aprovação para elevar aplicações**.
	* **Permitir acesso emergencial**.
	* **Aprovação em níveis**: para funcionar, os aprovadores devem estar cadastrados em níveis no [Relatório de aprovadores](/v3-33/docs/pt/workflow-de-aprovacao#gerenciar-a-lista-de-aprovadores).
9. Se você marcou **Requer aprovação para elevar aplicações**, defina o número de vezes para cada ação específica:
	* **Aprovações necessárias**: para que o usuário consiga elevar o privilégio e executar a ação.
	* **Reprovações necessárias**: para cancelar a elevação do privilégio.
10. Responda **Sim** ou **Não** para as **Configurações da solicitação de acesso**:
	* **Obrigatório especificar código de governança ao justificar?**
	* **Sempre adicionar o gestor do usuário aos aprovadores?**
11. Clique em **Salvar**.

--------------------------------------------------------------------------------------------------

## Como configurar listas de acessos de aplicação para workstations específicas

1. No senhasegura, acesse a página de **Listas de acesso** através do caminho: **Grid Menu** > **GO Endpoint Manager** > **Políticas** >  **Windows** >  **Listas de acesso**.
2. Clique no botão **Exibir ações**, representado pelos três pontos verticais.
3. Selecione a opção **Nova segregação para workstation**.
4. Na tela **Escolha a categoria**, selecione **Aplicações**.
5. Na janela **Lista geral**, preencha os campos:  
	* **Nome***: defina um nome para a lista.
	* **Ação***: escolha entre **allowlist** para permitir ou **denylist** para bloquear.
	* **Status***: escolha entre **ativo** ou **inativo**.
	* **Gravar a sessão desses aplicativos***: escolha entre **ativo** ou **inativo**.
6. Na aba **Aplicações**, preencha os campos:
	* **Monitorar Processo Pai***: se o monitoramento de processo pai for **Habilitado**, todos os processos filhos criados por ele serão verificados conforme as permissões da lista de acesso. Se for **Desabilitado**, todos os processos serão avaliados normalmente pela lista de acesso.
	* **Monitorar Processo Filho***: se o monitoramento de processo filho for **Habilitado**, a lista de acesso será aplicada a todos os processos originados a partir dele. Se for **Desabilitado**, todos os processos serão avaliados normalmente pela lista de acesso.
	* Em **Critério** escolha um ou mais:
    	* **Certificado**: o certificado na aplicação possui um valor fixo chamado **Trusted Only**, de modo que será validado o certificado que possuir essa regra ativa.
    	* **ID de classe COM**: informação em formato de GUID presente em todas as aplicações.
    	* **Diretório**: é o caminho da aplicação. Para ser validado com a regra, o caminho registrado deve ser idêntico ao do arquivo.
    	* **Hash do arquivo**": é uma informação única que cada arquivo tem. A cada mudança realizada no arquivo, é gerado um novo hash.

:::(Warning) (Cuidado)
Se você tiver uma regra que usa o critério de **Hash do arquivo** apenas esse critério será considerado. Os critérios **Nome do produto** e **Diretório** serão ignorados. Se a lista de acesso contiver vários critérios de hash de arquivo, eles serão avaliados com uma condição **OU (||)**.
:::

:::(Info)(Info)
A partir da 3.32, será necessário executar este comando `Get-Filehash -path c:\pathToFile\fileExample.exe -algorithm SHA256` no PowerShell para conseguir o hash do arquivo a ser configurado no critério. Troque o caminho após `-path` pelo caminho do arquivo. Dependendo da configuração do ambiente, será necessário ter acesso de administrador para realizar essa operação.
:::

* **Versão do arquivo**: informa a versão do arquivo.
* **Identificador de zona da internet**: essa informação é referente à origem do arquivo, quando ele é baixado da internet, estará como Internet Zone, geralmente todos os arquivos baixados estão classificados assim, já os executáveis que estão instalados, por exemplo, tem essa informação como Local Zone.
* * **Nome do produto**: é o nome do programa, é avaliado tanto o nome do arquivo quanto o nome do programa. Não recomendamos cadastrar uma política de acesso somente com este critério.

:::(Warning) (Cuidado)
Cadastrar uma política de acesso utilizando somente o critério **Nome do produto** pode gerar riscos de segurança. Sugerimos adicionar mais de um critério, como **Diretório**, **Certificado**, **Hash do arquivo** ou qualquer outro.
:::

* **Versão do produto**: especificação da versão.
* **URL da fonte**: refere-se à URL de onde o arquivo foi baixado. O arquivo só pode ser executado se a URL da fonte estiver correta e for validada.
* **Código de atualização**: essa informação também é um GUID de cada programa, e pode ser encontrada no registro do Windows.
* **Nome do fornecedor**: nome do fabricante.
* **Editor da loja do Windows**: é sobre as aplicações baixadas na Microsoft Store. É validado conforme o diretório do arquivo: Program Files (e a x86 também), e na pasta oculta Windows Apps.

:::(info)(Info)
As DLLs funcionam como aplicações, e podem ser filtradas por **Nome do produto, Versão do produto, Certificado, Versão do arquivo, Diretório, Hash do arquivo, Identificador de zona de Internet** e **Editor da windows store.**
:::

* **Regra**: preencha conforme o critério escolhido.

:::(Warning) (Cuidado)
Ao preencher a lista com mais de um critério, o operador lógico será **E (&&)**. Ou seja, a regra só será executada se ambas as condições forem verdadeiras. Exemplo: `Versão do Produto E Nome do Produto`.

Ao preencher a lista com mais de um critério e regras diferentes, o operador lógico dos critérios será **E (&&)** e o operador lógico das regras será **OU (||)**. Exemplo: `Versão do Produto E (Nome do Produto A OU Nome do Produto B)`.
:::

:::(Info) (Info)
Itens com asterisco* são obrigatórios.
:::

7. Clique em **Adicionar**.
8. Na aba **Workstation**, clique no botão de mais (+) e escolha uma workstation conforme os critérios:
	* **Código**: o número identificador na lista de workstations.
	* **UUID**: identificador exclusivo da workstation.
	* **Hostname**: nome da máquina.
	* **IP**: endereço IP da workstation.
9. Clique em **Adicionar**.
10. Ainda na aba **Workstation**, você verá as informações:
	* **Inclusor**: usuário que adicionou a workstation.
	* **Inclusão**: data em que a workstation foi adicionada.
11. Clique em **Salvar**.
	* Se escolher **denylist**, clique em **Salvar** e receberá uma mensagem de confirmação.
	* Se escolher **allowlist**, continue preenchendo os campos na aba de **Workflow**.
12. Marque as opções para a **Configuração de elevação**:
	* **Usuário pode elevar aplicações**.
	* **Requer justificativa para elevar aplicações**.
	* **Requer aprovação para elevar aplicações**.
	* **Permitir acesso emergencial**.
	* **Aprovação em níveis**: para funcionar, os aprovadores devem estar cadastrados em níveis no [Relatório de aprovadores](/v3-33/docs/pt/workflow-de-aprovacao#gerenciar-a-lista-de-aprovadores).
1. Se você marcou **Requer aprovação para elevar aplicações**, defina o número de vezes para cada ação específica:
	* **Aprovações necessárias**: para que o usuário consiga elevar o privilégio e executar a ação.
	* **Reprovações necessárias**: para cancelar a elevação do privilégio.
13. Responda **Sim** ou **Não** para as **Configurações da solicitação de acesso**:
	* **Obrigatório especificar código de governança ao justificar?**
	* **Sempre adicionar o gestor do usuário aos aprovadores?**
14. Clique em **Salvar**.

:::(Info) (Info)
As regras serão aplicadas tanto para aplicações iniciadas nos agentes GO Endpoint Manager quanto para aplicações iniciadas fora do GO Endpoint Manager. Os valores das regras de segregação podem ser preenchidos com expressões regulares.
:::

* * *

### Leia mais

* [Interface gráfica](/v3-33/docs/pt/general-information-graphical-user-interface).
* [Automação](/v3-33/docs/pt/go-endpoint-manager-windows-agent-automation).
* [Workflow de aprovação para aplicações](/v3-33/docs/pt/go-endpoint-manager-windows-approval-workflow).
