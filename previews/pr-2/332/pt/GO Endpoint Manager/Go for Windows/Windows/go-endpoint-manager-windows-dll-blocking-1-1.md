## Visão geral

O GO Endpoint Manager para Windows oferece a função de bloqueio de DLLs, que entra em ação quando um executável realiza a tentativa de carregamento do processo.

Disponibilidade desta funcionalidade:✖ 3\.26 e anterior legacy    ✔ 3\.27 e superiores

---

## Cadastrar uma DLL não confiável

ImportanteO Bloqueio de DLL deve ser realizado com cautela. Se uma DLL do sistema for bloqueada, o funcionamento do sistema pode ser afetado.1. Acesse a plataforma senhasegura.
2. Vá até **GO Endpoint Manager ➔ Policies ➔ Windows ➔ Listas de acesso**.
3. Clique no menu de **Ações.**
4. Escolha a opção **Nova segregação geral**ou **Nova segregação para workstation**.
5. Escolha a categoria **Aplicações**.
6. Preencha na tela **Lista geral**as seguintes informações:
	* **Nome**: defina um nome para identificar a lista de acesso.
	* **Ação**: marque como **Denylist**para bloquear uma DLL.  
	Allowlist mais restritivoVerifique se esta DLL não está incluída em nenhuma Lista de Acesso atribuída como uma Allowlist. As Allowlist são mais restritivas, portanto, se esta DLL estiver incluída em outra lista como Allowlist, sua execução será permitida mesmo que esteja também incluída em uma Denylist.
	* **Status**: defina como **Ativo**.
	* **Gravar a sessão desses aplicativos**: defina como Ativo/Inativo.
7. Na aba **A****plicações:**
	1. No campo **Critério**e **Regra,**selecione os seguintes critérios com as seguintes regras:  
	
	
	| Critério | Regra |
	| --- | --- |
	| Diretório | Localização onde o arquivo .dll se encontra. |
	| Hash do arquivo | Insira o Hash desse arquivo. |
	2. Clique **Adicionar**
8. Após adicionar o critério e a regra, clique em **Salvar**.

ValidarCaso uma aplicação seja executada fora do senhasegura.go, ela será bloqueada se estiver na deny list. Porém, caso não esteja nem em allow list e deny list será executada normalmenteVerificar um exemplo mais claroPor exemplo, ao bloquear a DLL “fonts.dll” e o executável “notepad\+\+.exe” e realizar a tentativa de carregamento desta DLL em uma rotina qualquer como a criação de um documento, esta detecção de carregamento acontece passado pelo processo de validação e caso esta DLL não seja permitida, o executável é encerrado impedindo o seu carregamento.Por exemplo, usando o critério diretório, as DLLs que um programa usará ficam na pasta que eles estão instalados, então é necessário verificar em qual pasta está e pegar o caminho completo.  
  


