CuidadoO GO Endpoint Manager para Linux não concede permissão a um diretório ou arquivo para um usuário se o sistema operacional não permitir o acesso.1. Acesse a plataforma senhasegura.
2. Vá para **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. Clique em**⁝** e selecione a opção **Nova regra geral** para criar uma política global.
4. No formulário **Cadastro de política de acesso**, na aba**Principal,**preencha os campos:
	* **Nome da política:** escolha um nome que seja facilmente identificável.
	* **Ativo:**se a opção **Sim** está selecionada, a política é considerada nos dispositivos alvo.
	* **Diretriz:** selecione um tipo de política.
5. Na aba **Controle de diretórios e arquivos**, abaixo de **Permissões,**preencha os campos:
	* No campo **Permissão,**selecione o que os usuários podem fazer.
		+ **Execução:**permite executar um arquivo ou acessar um diretório.
		+ **Escrita:**permite editar um arquivo ou modificar o conteúdo de um diretório.
		+ **Leitura:** permite apenas ver e listar os arquivos e subarquivos/subdiretórios.
6. No primeiro campo **Diretório ou arquivo**, indique o caminho completo do arquivo ou diretório que deseja controlar.
7. No campo **Usuário**, insira o nome de usuário.
8. Clique em **Adicionar** para incluir a permissão para controle.
9. Se desejar, realize os passos anteriores para adicionar mais arquivos e diretórios a serem controlados.
10. Abaixo de **Regras de bloqueio**, no campo **Permissão**selecione o que os usuários não podem fazer em:
	* **Execução:**não permite executar um arquivo ou acessar um diretório.
	* **Escrita:** não permite editar um arquivo ou modificar o conteúdo de um diretório.
	* **Leitura:**não permite ver ou listar os arquivos e subarquivos/subdiretórios.
11. No segundo campo **Diretório ou arquivo**, indique o caminho completo do arquivo ou diretório que deseja controlar.
12. No segundo campo **Usuário**, insira o nome de usuário.
13. Clique em **Adicionar** para incluir a permissão para o controle.
14. Se desejar, realize os passos anteriores para adicionar mais arquivos e diretórios para serem controlados.
15. Clique em**Salvar.**

  


  


