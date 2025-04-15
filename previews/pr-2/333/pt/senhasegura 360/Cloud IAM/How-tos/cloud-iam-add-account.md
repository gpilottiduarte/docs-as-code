Para gerenciar usuários, contas, credenciais e máquinas virtuais no Cloud IAM você deve criar uma conta para integrar a plataforma senhasegura com os Provedores de Serviços em Nuvem.

InfoPara evitar excesso de privilégios, o **Cloud IAM** requer somente as permissões necessárias para a integração com os provedores.

---

## Adicionar conta

Para adicionar uma conta no Cloud IAM, acesse **Cloud IAM ➔ Configurações ➔ Contas** e siga os passos:

1. Clique no ícone **(⁝) Exibir ações** e selecione **Adicionar conta**;
2. Na aba **Configurações**, defina um **Nome;**
3. Selecione **Sim** ou **Não** para**Ativo**;
4. Selecione os **Provedores**que deseja cadastrar;InfoEm uma mesma tela você pode cadastrar contas [AWS](/v3-33/docs/pt/cloud-iam-add-account#cadastrar-uma-conta-aws), [Azure](/v3-33/docs/pt/cloud-iam-add-account#cadastrar-uma-conta-azure) e [Google Cloud](/v3-33/docs/pt/cloud-iam-add-account#cadastrar-uma-conta-google-cloud) ao mesmo tempo.
5. Adicione uma **D****escrição** e **T****ags**, se desejar;

### **Cadastrar uma conta AWS**

Para cadastrar uma conta AWS no Cloud IAM, acesse **Cloud IAM ➔ Configurações ➔ Contas** e siga os passos:

1. **Adicione** ou **E****dite** uma conta no Cloud IAM;
2. Vá para a aba **AWS**;
3. Clique em **Visualizar****JSON**para ver as permissões necessárias;
4. Preencha o campo **Chave de acesso**com o ID da chave de acesso da AWS;InfoPara aprender como gerar as **chaves de acesso da AWS** vá para a seção [Configurar AWS](/v3-33/docs/pt/cloud-iam-add-account#configurar-aws) deste artigo.
5. Preencha o campo **Segredo da chave de acesso** com a secret da chave de acesso da AWS;
6. Escolha a **Região padrão** da conta AWS;
7. Marque a caixa **OpsWorks \- Gerenciamento de configurações**,caso queira gerenciar as sessões e chaves SSH dos usuários do AWS OpsWorks.

### **Cadastrar uma conta Google Cloud**

Para cadastrar uma conta Google Cloud, acesse **Cloud IAM ➔ Configurações ➔ Contas** e siga os passos:

1. **Adicione** ou **E****dite** uma conta no Cloud IAM;
2. Vá para a aba **Google Cloud**
3. Clique em **Choose File**e selecione o arquivo com a **C****have de acesso**da conta Google Cloud;InfoPara aprender como gerar a **chave de acesso da Google Cloud** vá para a seção [Configurar Google Cloud](/v3-33/docs/pt/cloud-iam-add-account#configurar-google-cloud) deste artigo.

### **Cadastrar uma conta Azure**

Para cadastrar uma conta Azure, acesse **Cloud IAM ➔ Configurações ➔ Contas** e siga os passos:

1. **Adicione** ou **E****dite** uma conta no Cloud IAM;
2. Vá para a aba **Azure**;
3. Preencha os campos de **D****iretório (tenant) ID**;
4. Preencha os campos **A****pplication (Client ID)** e **Valor de segredo do cliente**;  
InfoPara aprender como gerar o **Valor de segredo do cliente** vá para a seção [Configurar Azure](/v3-33/docs/pt/cloud-iam-add-account#configurar-azure) deste artigo.
5. Selecione um grupo de acesso.
6. Para finalizar, clique em **Confirmar**



---

## Configurar provedores

Para integrar o Cloud IAM com a [AWS](/v3-33/docs/pt/cloud-iam-add-account#configurar-aws), [Azure](/v3-33/docs/pt/cloud-iam-add-account#configurar-azure) e [Google Cloud](/v3-33/docs/pt/cloud-iam-add-account#configurar-google-cloud) você deve realizar as seguintes configurações para cada um dos provedores.

### Configurar AWS

Para integrar o Cloud IAM com a AWS você deve gerar uma chave de acesso na AWS.

#### Gerar chave de acesso AWS

Para gerar uma **C****have de acesso** da AWS, siga os passos:

1. Vá para a aba de cadastro de conta AWS no Cloud IAM e clique em **Visualizar****JSON**;  
**![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1678199548160.png)**
2. Copie as permissões descritas no **JSON**;
3. Acesse sua conta AWS: <https://console.aws.amazon.com/>;
4. Clique em **Identity and Access Management (IAM)**;
5. No menu lateral esquerdo, clique em **Políticas**;
6. Clique em **Criar política,** selecione a aba **JSON**e cole no campo as permissões copiadas no passo 1;AtençãoAs chaves de acesso devem ser criadas para um usuário que possua as mesmas permissões descritas no **JSON**.
7. Clique no botão **Next: Tags**;
8. Insira as tags, se desejar, clique em **Next: Review**;
9. Defina um **Nome** para a política e clique em **Criar política**para confirmar;
10. No menu lateral esquerdo, selecione **Usuários**e clique em **Adicionar usuário**;
11. Em **Especificar detalhes do usuário,**defina o **Nome do usuário**e clique em **Próximo;**
12. Em **Definir permissões**, selecione**Anexar políticas diretamente**eselecione a política que você criou no passo 8**;**
13. Retorne a tela de **Usuários**e selecione o usuário desejado;
14. Vá para a aba **Credenciais de segurança**e clique em **Criar chaves de acesso**;
15. Copie os valores **Access key ID** e **Secret access key**;



---

### Configurar Google Cloud

Para integrar o Cloud IAM com o Google Cloud você deve realizar as seguintes ações.

#### Criar uma role

Para criar uma **R****ole**no Google Cloud, siga os passos:

1. Acesse a sua conta Google Cloud ([console.cloud.google.com](https://console.cloud.google.com/getting-started ));
2. No campo de seleção do projeto, escolha **Organization**e clique em**Roles**, no menu lateral;
3. Clique no botão **Create role**e preencha os campos:
	1. **Title** com o nome da role que você deseja criar.
	2. Clique no botão **Add permissions**e adicione as seguintes permissões:
		* iam.roles.list
		* iam.serviceAccountKeys.create
		* iam.serviceAccountKeys.delete
		* iam.serviceAccountKeys.get
		* iam.serviceAccountKeys.list
		* iam.serviceAccounts.create
		* iam.serviceAccounts.delete
		* iam.serviceAccounts.get
		* iam.serviceAccounts.list
		* iam.serviceAccounts.update
		* resourcemanager.projects.get
		* resourcemanager.projects.getIamPolicy
		* resourcemanager.projects.setIamPolicy
		* resourcemanager.organizations.get
		* resourcemanager.organizations.getIamPolicy
		* resourcemanager.organizations.setIamPolicy
		* resourcemanager.projects.list
	3. Por fim, clique no botão **Create.**

#### Criar um  Service account

Para criar um **S****ervice account**no Google Cloud, siga os passos

1. Escolha um projeto existente ou crie um novo;
2. No menu de navegação, escolha a opção **IAM \& Admin, Service Accounts;**
3. Clique em**Create service account;**
4. Preencha o campo**Service account name**e cliqueem**Create;**
5. Clique em**Done**, para finalizar**.**

#### Criar chave de acesso Google Cloud

1. No menu **Service Accounts**, clique na conta de serviço que você criou.
2. Clique no botão **Add key** e selecione a opção **Create new key**.
3. Selecione a opção **JSON** e clique no botão **Create**.
4. Para finalizar, salve a chave em local seguro.
	1. No menu **Service Accounts**, clique na conta de serviço que acabamos de criar.
	2. Clique no botão **Add key** e selecione a opção **Create new key**.
	3. Selecione a opção **JSON** e clique no botão **Create**.
	4. Para finalizar, salve a chave em local seguro.

#### Habilitar APIs

1. Vá para **APIs \& Services ➔ Library**
2. Localize as APIs listadas abaixo e clique no botão**Enable**.
	* Cloud Resource Manager API
	* Cloud Asset API
	* Identity and Access Management (IAM) API

#### Adicionar conta de serviço na **Organização**

1. No menu lateral, selecione o serviço **IAM**;
2. No topo da página, clique no botão **Add**;
3. Insira no campo **New members** o endereço da conta de serviço criada;
4. No campo **Select a role**, selecione uma role criada anteriormente;
5. Clique em **Save**



---

### Configurar Azure

Para integrar o Cloud IAM com a Azure você deve realizar as seguintes ações.

#### Criar uma **Conta de serviço**

1. Acesse sua conta em <https://portal.azure.com/>;
2. Localize o serviço **Active Directory do Azure**;
3. No menu lateral esquerdo, clique em **Registro de Aplicativo**;
4. Selecione **Novo Registro**;
5. Preencha os campos **Nome, Tipo de conta com suporte**e**URI de redirecionamento**;
6. Para finalizar, clique em **Registrar**.

#### Criar um Valor de segredo do cliente

1. Selecione uma **aplicação** no Azure;
2. No menu lateral esquerdo, selecione **C****ertificados e segredos**;
3. Clique em **Novo segredo de Cliente**
4. Insira uma **descrição** e tempo de **expiração** da secret;
5. Copie o **Valor**da Secret.

#### Selecionar permissões de API

1. No Azure, selecione:
	1. No menu localizado na lateral esquerda, clique em **Permissões de API;**
	2. Selecione o **Microsoft Graph**;
	3. As permissões requisitadas são:
		* **Directory role:**
			+ Global administrator
			+ Tenant root group role:
			+ Owner
		* **API permissions:**
			+ Delegated:
				- Directory.AccessAsUser.All
			+ Application:
				- Application.ReadWrite.All
				- AppRoleAssignment.ReadWrite.All
				- Directory.Read.All
				- Directory.ReadWrite.All
				- Organization.ReadWrite.All
				- RoleManagement.ReadWrite.Directory
				- User.ManageIdentities.All
				- User.ReadWrite.All

## 

