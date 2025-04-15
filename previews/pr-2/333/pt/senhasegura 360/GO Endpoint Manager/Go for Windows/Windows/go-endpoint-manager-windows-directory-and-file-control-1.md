Essa funcionalidade permite que o administrador cadastre configurações para controlar a permissão de arquivos e diretórios Windows.



---

## Configurar o controle de diretórios

1. Acesse a plataforma senhasegura.
2. Vá até o menu **GO Endpoint Manager ➔ Políticas ➔ Windows ➔ Controle de diretórios e arquivos.**Nesse menu, você tem acesso ao relatório de controles já configurados anteriormente. Esses controles podem ser:


	* **Regra geral:** aplica\-se a todas as workstations onde o GO Endpoint Manager estiver ativo e aprovado.
	* **Segregação por workstation:** a configuração valerá apenas para a workstation definida no formulário.
3. Para criar um controle, clique no ícone **⁝** e escolha a ação de relatório **Regra geral** ou **Segregação por workstation.**
4. No formulário apresentado, indique o nome do novo controle.


> Cuidado
> 
> Este cadastro não permite expressões regulares.
5. Indique o caminho **completo** do arquivo ou diretório.
6. Indique também se este controle estará ativo ou não.
7. No campo de **Permitir ou Bloquear** selecione se as ações no campo **Permissão**serão concedidas aos usuários.


	* **Permitir:** os usuários ou grupos terão a permissão.
	* **Bloquear:** os usuários ou grupos não terão a permissão.
8. Na lista **Permissão**selecione o tipo de ação que você irá autorizar.


> Cuidado
> 
> Para todas as regras de permissão, o Go Endpoint Manager altera as permissões definidas para todos os usuários e grupos neste diretório, exceto para "Sistema", que mantém suas permissões.


> Importante
> 
> Aconselhamos fortemente contra a alteração das regras de permissão em diretórios que afetam o sistema operacional, como "C:\\Windows", pois pode afetar o funcionamento do sistema.


	* **Leitura:** permissão apenas para ver e listar os arquivos e subarquivos/subdiretórios.
	* **Escrita:** permissão para editar ou adicionar o arquivo/diretório em um diretório.
	* **Leitura e execução:** permissão para ver, executar e acessar os arquivos/diretório.
9. **Listar conteúdo da pasta:** permissão para ver, ler e executar o conteúdo do diretório.


> Cuidado
> 
> Somente diretórios possuem a permissão “Listar conteúdo da pasta”. A permissão será recusada no caso de ser aplicada para um arquivo


	* **Edição:** permissão para ler e escrever no arquivo/diretório.
	* **Controle total:** permissão para todas as ações listadas acima.
10. Clique no botão **Adicionar**para incluir a permissão para o controle.


	* Caso tenha escolhido a opção de controle **Segregação por workstation,** o formulário apresentará uma aba chamada **Workstation.**
	* Ao acessar essa aba, clique no botão de adição e selecione na lista as workstations que farão parte desta configuração.
	* Clique em **Adicionar.**
11. Para finalizar, clique em **Salvar.**

Ao término, realize um acesso à workstation onde o controle foi configurado e tente realizar as permissões bloqueadas ou permitidas.



---

## Retirar a permissão de um usuário

1. Exclua a configuração deste usuário.
2. Adicione uma informação genérica como “adm” ou “admin” que seja válida.
3. Como alternativa, adicione a configuração novamente. No campo de **Permitir ou Bloquear,**escolha**Bloquear.**

