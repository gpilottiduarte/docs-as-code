## Visão Geral

Para facilitar a implantação do senhasegura, em cenários onde diversas informações já eram gerenciadas por outras soluções, o administrador poderá importar através de planilhas as informações.

1. Acesse o menu **Informações ➔ Importação em lote.**
2. Clique no menu de ação do relatório **Importar.**
3. Na tela de importação que será apresentada, clique no botão de rodapé **Arquivo de modelo** para fazer o download do arquivo Excel de modelo.
4. Preencha o arquivo obedecendo às instruções de cada campo:
	* **Nome:** campo obrigatório. É o nome da informação que será utilizada para identificação dentro do senhasegura.
	* **Tipo da informação:** campo obrigatório. É a categoria dentro da regra de negócio. Caso o tipo digitado não exista, será cadastrado um novo tipo com o valor digitado.
	* **Dono:** campo obrigatório. Preencha com o username do usuário do senhasegura que será responsável pela informação.
	* **Serviço:** uma descrição do serviço ao qual a informação pertence.
	* **URL:** caso a informação seja de um serviço hospedado em um website, preencha com a URL de acesso.
	* **Senha:** uma senha que complementa a informação. Essa senha será protegida e estará visível apenas para os usuários com permissão de acesso à informação.
	* **Anotações sigilosas:** é um campo texto livre que será protegido pelo senhasegura, ficando visível apenas para os usuários com permissão de acesso à informação.
	* **Data expiração:** a data que a informação irá expirar. Essa informação será utilizada para alertar os usuários vinculados para que uma ação seja tomada.
	* **Notificar usuários com:** quantidade de dias com que os usuários serão notificados com antecedência.
	* **Identificador:** identificador da informação para uso no WebService A2A.
	* **Observação:** observações gerais.
	* **Usuários permitidos:** relação de usernames, separados por vírgula, que terão permissão de leitura na informação. Para também atribuir permissão de escrita, complemente o username desejado com o sufixo `:edit`
	* **Usuários para notificação especial:** usuários selecionados para receber notificações especiais separados por vírgula (Exemplo: user, admin).
	* **Notificar usuários de notificação especial com:**número de dias anteriores à expiração para a notificação especial de usuários. Adicionar o número de dias para cada usuário inserido separados por vírgula (Exemplo: 2, 1\).
5. Ao término do preenchimento, realize o upload do arquivo na mesma tela onde o arquivo modelo foi obtido.
6. O processamento irá gerar um registro no relatório de importação para que você possa acompanhar o resultado da operação.
