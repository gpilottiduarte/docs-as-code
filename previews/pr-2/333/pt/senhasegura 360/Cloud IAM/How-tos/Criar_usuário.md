Os usuários são considerados os de acesso pessoal ao console das contas dos provedores de clouds.

CuidadoO sincronismo dos usuários e contas de serviço não removerão permissões/roles adicionadas a eles diretamente na Cloud. Neste caso, serão sincronizadas as permissões trazendo as novas para o senhasegura. Se a permissão foi inativada/removida dentro do senhasegura, também será removida do Cloud Service Provider.

## Criar usuário

Para criar um usuário, vá para o menu **Cloud IAM ➔ Cloud IAM ➔ Usuários**.

1. Clique no botão de ações e selecione a opção **Adicionar usuário;**
2. No formulário, selecione o usuário senhasegura que terá acesso às contas;

CuidadoCaso você esteja dentro de um grupo de acesso que tenha um template definido, a lista de usuários pode estar exibindo apenas usuários do departamento selecionado no template.

3. Na aba **Configurações**, selecione em qual provedor deseja criar o usuário e preencha os demais campos:


	* **Usuário responsável:** indica qual usuário do senhasegura é responsável pelo usuário no provedor de cloud.

CuidadoEsta informação também define qual usuário senhasegura poderá iniciar uma sessão em uma instância na Máquina virtual utilizando este usuário da Cloud.

* **TTL (segundos):** define o tempo de vida do usuário e suas credenciais. Este tempo é decrescente e começa ser válido a partir da sua criação e ao término o usuário será automaticamente excluído no provedor.
* **Descrição:** descrição detalhada do usuário.
* **Tags:** tags usadas para facilitar a busca nos filtros e segregar o usuário nos grupos de acesso.
4. Selecione a guia correspondente ao Provedor Cloud a ser configurado e preencha os seguintes campos:


	* AWS:
	
	
		+ **Contas:** selecione em quais contas este usuário deverá ser criado.
		+ **Políticas:** selecione as políticas (grupo de permissões) que este usuário deverá possuir na conta. A AWS limita em até 10 políticas por usuário.
		+ **Opsworks \- Manage SSH Keys:** marque esta caixa caso queira que este usuário seja adicionado ao serviço AWS OpsWorks e o senhasegura gerencie a chave SSH dela.
	* Google Cloud:
	
	
		+ **Papéis de organização:** Selecione quais roles (grupos de permissões), contas e organizações o usuário deverá ser adicionado.
		+ **Papéis de projeto:** Selecione quais roles (grupos de permissões), contas e projetos o usuário deverá ser adicionado.
	* Azure:
	
	
		+ **Tipo de criação:** Selecione qual tipo de usuário que deseja criar. As opções são: Criar usuário ou Convidar usuário.
		+ **Funções:** Selecione quais funções (grupos de permissões) o usuário deverá ser adicionado.
		+ **Grupos:** Selecione em quais grupos o usuário deverá ser adicionado.
5. Para concluir, clique em **Confirmar**.
