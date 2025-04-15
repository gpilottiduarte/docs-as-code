O **GO Shell** é uma funcionalidade do GO Endpoint Manager para Windows que permite que o administrador gerencie a execução de comandos permitidos previamente. Isso garante maior controle sobre o uso e a segurança do ambiente.



---

## Configurar o GO Shell

1. Acesse a plataforma senhasegura.
2. Vá até **GO Endpoint Manager ➔ Políticas ➔ Windows ➔ Comandos.**
3. Clique no menu de **Ação.**
4. Selecione se será uma regra geral para todas as workstations, ou para workstations específicas.
5. Preencha o formulário **Cadastrar comandos windows.**
6. Na aba **Geral**:
	* **Nome:** defina um nome para regra do comando.
	* **Ativo:** defina se está regra estará ativa ou não.
	* **Comando:** escreva exatamente o comando. Por exemplo: ipconfig, net session, tasklist, etc.
7. Clique em **Salvar.**



---

## Executar o GO Shell

1. Acesse a workstation do usuário.
2. Inicie a aplicação Core.
3. Clique no **GO****Shell** no topo da aplicação para abrir.
4. Após cadastrar o comando, apenas o Shell do senhasegura ficará disponível e apenas será possível utilizar os comandos cadastrados.
5. Ao tentar acessar o CMD pelo Windows ou o Shell do Windows, o **GO Shell**aparecerá.

### **Exemplos de comandos:**

Digite `goshell --commands` para visualizar os comandos disponíveis:


```
C:\Program Files\senhasegura\Core>goshell --commands

 • exit
 • clear-host
 • cls
 • clear

```
Digite `goshell --help` para visualizar as opções de comandos:


```
C:\Program Files\senhasegura\Core>goshell --help

Go shell arguments
 • commands
 • update
 • help

```
Digite `goshell --update` para atualizar a lista de comandos:


```
C:\Program Files\senhasegura\Core>goshell --update
Solicitando comandos ao servidor, aguarde...
Comandos obtidos com sucesso.

```
Mensagem quando um comando não está disponível:


```
C:\Program Files\senhasegura\Core> net session
Este comando não está disponível.

```
Private notesConsultar o artigo Controle de comandos da 3\.26 para ver se há mais alguma informação relevante. Esta é uma feature da 3\.26 em diante.

---

## Leia mais

* [Telas comuns](https://docs.senhasegura.io/v3-33/docs/pt/general-information-graphical-user-interface?highlight=telas%20comuns#telas-comuns)
* [Segregação por workstations](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-windows-segregated-configurations)
