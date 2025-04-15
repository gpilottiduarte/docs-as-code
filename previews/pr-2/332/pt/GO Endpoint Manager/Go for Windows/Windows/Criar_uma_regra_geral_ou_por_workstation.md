Esta funcionalidade permite ao administrador cadastrar configurações para escanear diretórios e arquivos e monitorar as ações de incluir, renomear, excluir e alterar. 



---

## Criar uma regra geral ou por workstation

1. Acesse a plataforma senhasegura.
2. Vá até **GO Endpoint Manager ➔ Políticas ➔ Windows ➔ Scan de diretórios e arquivos**.
3. Clique no menu de **Ações (****⁝)**.
4. Escolha entre **Regra geral** ou **Segregação para workstation**.
5. Preencha os campos do formulário **Scan de diretórios e arquivos**.
6. Na aba **Geral**, insira:
	* **Nome:** Defina um nome para esta regra.
	* **Estado:** Defina se a regra estará **Ativa** ou **Inativa**.
	* **Caminho dos diretórios:** Preencha com o nome da pasta ou arquivo que deseja escanear. Por exemplo: C:\\windows\\System32\.
	* **Nome do arquivo ou expressão regular:** Preencha com o nome do arquivo que deseja escanear ou uma expressão regular.
	* **Caminhos registrados:** Lista com os caminhos, arquivos e expressões regulares adicionadas.

InfoPara procurar arquivo, inclua o nome do arquivo. Para procurar pastas, inclua o nome da pasta. Você pode usar expressões regulares para pesquisar arquivos.

  




---

## Eventos do scan de diretórios e arquivos

1. Acesse a plataforma senhasegura.
2. Vá até **GO Endpoint Manager ➔ Relatório ➔ Windows ➔ Eventos.**

Quatro ações são auditadas em eventos:  


* **Inclusão:**criação de um arquivo.
* **Renomear:** renomear um arquivo existente.
* **Excluir:**excluir um arquivo existente.
* **Mudar:** todos os registros de mudança recebem o nome de usuário System.



---

## Ignorar diretório no scan de aplicações

Esta funcionalidade permite que os diretórios adicionados sejam ignorados no scan do menu Executar do Core.

### Cadastrar diretórios para serem ignorados

1. Acesse a plataforma senhasegura.
2. Acesse **GO Endpoint Manager➔Configurações➔Parâmetros➔go Windows.**
3. Vá até **Diretório que se deve ignorar.**
4. Cadastre o **Caminho do diretório** que deseja que seja ignorado no scan.
5. Clique em **Salvar.**
