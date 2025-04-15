Contas de serviço são consideradas os de acesso programático, ou seja, acesso de aplicações e máquinas às contas dos provedores de clouds.

## Criar conta de serviço

Para criar uma conta de serviço, 

1. Vá para o menu **Cloud IAM ➔ Cloud IAM ➔ Service accounts:**
2. Clique no botão de ações e selecione a opção **Add service account**.
3. No formulário insira o nome da conta de serviço que terá acesso às contas dos provedores.ImportanteCaso você seja membro de um grupo de acesso que tenha um template definido ao inserir o usuário ele deverá seguir a regra estabelecida no template.
4. Na aba **Configurações**, selecione em qual provedor deseja criar o usuário e preencha os demais campos:
	* **Usuário responsável:** indica qual usuário do senhasegura é responsável pela conta de serviço no provedor de cloud.
	* **TTL (segundos):** define o tempo de vida da conta de serviço e suas credenciais. Este tempo é decrescente e começa ser válido a partir da sua criação e ao término a conta de serviço será automaticamente excluída no provedor.
	* **Description:** Descrição detalhada da conta de serviço
	* **Tags:** Tags usadas para facilitar a busca nos filtros e segregar a conta de serviço nos grupos de acesso
5. Selecione a guia correspondente ao Provedor Cloud a ser configurado e preencha os seguintes campos:**AWS:**


	* **Contas:** Selecione em quais contas esta conta de serviço deverá ser criada
	* **Políticas:** Selecione as políticas (grupo de permissões) que esta conta de serviço deverá possuir na conta. A AWS limita em até 10 políticas por conta de serviço
	* **Opsworks \- Manage SSH Keys:** Marque esta caixa caso queira que a conta de serviço seja adicionada ao serviço AWS OpsWorks e o senhasegura gerencie a chave SSH dela.**Google Cloud:**


	* **Papéis de organização:** Selecione quais roles (grupos de permissões), contas e organizações a conta de serviço deverá ser adicionada
	* **Papéis de projeto:** Selecione quais roles (grupos de permissões), contas e projetos a conta de serviço deverá ser adicionada.**Azure:**


	* **Tipos de contas suportadas:** Especifique quem pode usar a conta de serviço.
	* **URI de redirecionamento:** Um URI de redirecionamento é a localização para a qual a plataforma de identidade da Microsoft redireciona o cliente de um usuário e envia tokens de segurança após a autenticação.
	* **Permissões de API:** Selecione quais permissões a conta de serviço deverá possuir.
6. Para finalizar, clique em **Confirmar**.
