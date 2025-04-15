# Special Features

## **Descobrir e auditar as alterações de configuração**

Descobrir e auditar alterações nas configurações:

Em **Discovery ➔ Configurações ➔ Discovery**, ao criar ou editar uma descoberta, na aba ***Buscas*** você pode verificar **Identificar configuração do sistema**.
:::(info) (**Info**)
Nós integramos com os seguintes sistemas:

* Active Directory  
* Microsoft Exchange  
* servidor SQL  
* Sistemas de arquivos  
* NetApp
:::

:::(Warning) (**Atenção**)
Para esta configuração, vamos precisar do plugin do Windows ou SSH. 
:::

Depois de feita a descoberta, o resultado será mostrado em **Discovery ➔ Discovery ➔ Configurações**.

Para restaurar uma configuração, você pode pesquisar em **Discovery ➔ Discovery ➔ Configurações**, o histórico de ação mostrará todas as configurações diferentes, e no botão Restaurar você pode recuperar qualquer configuração anterior.

## **Contas privilegiadas em outras aplicações**

O Segura como uma série de plugins para encontrar automaticamente contas com alto privilégio em diversas aplicações. Além de possuir uma plataforma flexível que permite a inclusão de novos sistemas de terceiros, melhorando o monitoramento e identificação de possíveis infratores em sua empresa.

Esta integração com aplicações de terceiros também permite a sincronização de equipamentos com as principais ferramentas CMDB do mercado, tais como ServiceNow e BMC, sincronizando a sua base de dispositivos, garantindo a visibilidade e controlo de todo o seu parque de equipamentos. Através do nosso serviço de suporte somos capazes de expandir a interação com sistemas de terceiros de acordo com as necessidades dos nossos clientes.

Para isso, siga as instruções das secções anteriores e crie um novo Discovery de ***Aplicação*** e preencha os dados necessários para a correcta descoberta.

## **Contas em pool de aplicações IIS**

O Segura também realiza a busca por credenciais locais e de domínios associadas a um pool de aplicações do IIS.

Para realizar uma busca por essas credenciais siga as instruções:

1. Como explicado nas seções anteriores crie um ***Discovery de aplicação*** através do menu **Discovery ➔ Configurações ➔ Discovery**  
2. Uma vez no formulário, siga para a guia ***Buscas*** selecione a opção ***Identificar contas em pool de aplicações (IIS)***
:::(Warning) (**Atenção**)
Somente plugins Windows poderão ser utilizados neste Discovery 
:::

3. Salve e realize a busca.

### **Relatório de pool de aplicações IIS**

Ao final da busca será possível analisar um relatório contendo as informações coletadas como: nome do pool, username da credencial vinculada ao pool, untime version do pool da aplicação e outros dados.

Para isso siga para o menu: **Discovery ➔ Discovery ➔ Dispositivos**.

Selecione o item no relatório que deseja verificar e clique no botão de ação ***Pool de aplicações IIS***.

Um relatório com os dados coletadas será exibido.

## **Discovery de Secrets no Kubernetes**

### **Requisitos de sistema e versão**

Certifique-se de que o seu cluster Kubernetes atenda aos seguintes requisitos:

* **Versão do Kubernetes:** Garanta que o seu cluster esteja executando a versão mais recente do Kubernetes. Essa recomendação baseia-se nas constantes atualizações de segurança e funcionalidades oferecidas pelas versões mais recentes.

### **Configurações de segurança e acesso**

Para uma execução bem-sucedida do Discovery de Secrets no ambiente Kubernetes, leve em consideração as seguintes configurações de segurança e acesso:

* **Contas de serviço:** Configure contas de serviço de forma adequada no Kubernetes. É imprescindível que tokens de acesso sejam configurados manualmente para cada conta de serviço.  
* **Permissões e roles:** Certifique-se de que as contas de serviço possuam as permissões adequadas para realizar as operações necessárias. Isso geralmente envolve a configuração de Roles e RoleBindings, adaptando-se às exigências específicas da sua solução.

### **Recomendações de segurança**

Para uma segurança robusta durante o processo de descoberta de segredos, considere as seguintes recomendações:

* **Tokens de Acesso:** Evite o uso de tokens permanentes devido aos potenciais riscos de segurança. Recomenda-se a criação de tokens com tempo de expiração definido ou a adoção de métodos alternativos de autenticação.

Para informações mais detalhadas sobre a configuração de contas de serviço no Kubernetes, incluindo a criação manual de tokens, consulte a [documentação oficial do Kubernetes](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/).

## **Certificados de descoberta com NetScaler**

Somente certificados de aplicativos gerenciados pelo NetScaler serão digitalizados, importados e gerenciados pelo Segura.

Para os Certificados de Descoberta os campos (Nome, IP Inicial, IP Final, Site e Ativo) são campos que, após serem preenchidos, retornaram os dispositivos que estão nessa faixa de IP, você também pode filtrar pelo site e se os dispositivos forem descobertos estará ativo ou inativo.

1. Selecione o módulo Descoberta ➔ Configurações ➔ Descoberta .  
2. Escolha a opção Novo no menu de ações.  
3. Escolha o tipo de Dispositivos de Descoberta .  
4. Selecione a guia Certificados .  
5. Verifique o tipo de pesquisa (tipos de plugins).  
6. Preencha as outras informações com suas configurações de API Key Extras para pesquisa do NetScaler .

Os certificados descobertos e importados podem ser visualizados no módulo Descoberta ➔ Descoberta ➔ Certificados ➔ Certificados Os certificados não importados estarão no módulo Descoberta ➔ Descoberta ➔ Certificados ➔ Certificados não importados.

### **Visualizando os segredos encontrados**

Acesse o menu Discovery ➔ DevOps ➔ Kubernetes ➔ Secrets. Esta tela exibirá a lista de segredos encontrados durante a pesquisa.

Clique no botão de ação para obter mais informações sobre o Secret.

