## Cadastrar regra geral de política de acesso padrão

Atenção!O usuário especificado nas regras de bloqueios/elevação deve existir na máquina de destino onde essas regras serão aplicadas. Caso contrário, a aplicação das regras pode falhar ou ter comportamento inesperado.CuidadoO senhasegura não concede permissão a um diretório ou arquivo para um usuário se o sistema operacional não permite o acesso.1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. Clique em **⁝** e selecione a opção **Nova regra geral**para criar uma política global.
4. No formulário **Cadastro de política de acesso** na aba **Principal**, preencha os campos:
	* **Nome de identificação:** defina um nome fácil de identificar.
	* **Ativo:** se ativa, a política será aplicada nos dispositivos.
	* **Diretriz:**selecione um tipo de política.
	* **Verificador (path ou executor):**preencha com o caminho do diretório, por exemplo: path\="/usr/bin/ls" ou com o executor, por exemplo: exec\="/usr/bin/ls".  
	ImportanteO não preenchimento ou o preenchimento incorreto deste campo pode levar a completa inutilização do dispositivo.  
	Siga a [sintaxe do CaitSith](https://caitsith.osdn.jp/#syntax_list) para preencher corretamente este campo.
	* **Habilitar auditoria?:**habilita a auditoria de ações da política. O campo é obrigatório e por padrão vem ativo.
	* **Incluir regra de negação geral?:**permite apenas as regras cadastradas e nega o que não esta na regra.
	* **Permitir ou negar:** preencha se a política cadastrada permite ou nega o acesso para o usuário ou grupo.
	* **Texto da regra:**preencha com uma regra no formato das políticas no [CaitSith](https://caitsith.osdn.jp/#syntax_list). Por exemplo, task.uid\="user".  
	CuidadoA primeira regra adicionada tem prioridade sobre as regras adicionadas depois. Se você criar uma regra que permite a execução do binário e adicionar outra regra para bloquear a execução do mesmo binário, a primeira regra será considerada e a segunda não.
5. Clique em **Adicionar.**
6. Clique em **Salvar.**

Todos os comandos que passarem por um processo de filtragem em que uma regra foi definida para permitir a execução dentro de políticas de acesso CaitSith ou regras Sudo serão registradas. Assim que o usuário executar qualquer comando que esteja nas políticas de acesso, o sistema iniciará automaticamente a gravação da sessão. Você pode selecionar alterar a regra geral de uma política para incluir o controle de diretórios e arquivos. Basta clicar no ícone localizado na coluna **Ação** de uma política já existente e alterar ou adicionar regras.

---

## Cadastrar regra geral de política de acesso amigável

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. Clique em**⁝** e selecione a opção **Nova regra geral** para criar uma política global.
4. No formulário **Cadastro de política de acesso** na aba **Aplicação**, preencha os campos:
	* **Nome de identificação:**escolha um nome que será facilmente identificável.
	* **Ativo:** se a opção Sim está selecionada, a política é considerada nos dispositivos alvo.
	* **Habilitar auditoria?:**se a opção **Sim** está selecionada, ocorre a auditoria de ações que se enquadram nesta política. O campo é obrigatório e por padrão vem ativo.
	* **Habilitar gravação de sessão?:** se a opção Sim está selecionada, ocorre a gravação da sessão dos binários registrados. O início da sessão é vinculado a execução do binário quando a execução é finalizada a gravação acaba.
	* **Incluir regra de negação geral?:**permite apenas as regras cadastradas e nega o que não esta na regra.
	* **Caminho do programa:** o local do programa no sistema de arquivos. Por exemplo: /usr/bin/ls.
	* **O caminho é um link simbólico?:**marque se este caminho adicionado é um link para um arquivo ou diretório.
5. Clique em **Adicionar.**
	* **Permissão:** escolha entre permitir ou bloquear, conforme a política que está sendo criada.
	* **Usuário ou grupo:** adicione para quem esta regra vale, usuário ou grupo.
	* **Nome do usuário ou grupo:**preencha com o nome do usuário ou grupo de acordo com o tipo escolhido no campo anterior.
6. Clique em**Adicionar.**
7. Clique em**Salvar.**



---

## Cadastrar regra geral para controle de diretórios e arquivos

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. Clique em **⁝** e selecione a opção **Nova regra geral**para criar uma política global.
4. No formulário **Cadastro de política de acesso** na aba **Controle de diretórios e arquivos**, preencha os campos:
5. No primeiro campo **Permissão**,selecione o que os usuários podem fazer:
	* **Leitura:** permite  apenas ver e listar os arquivos e subarquivos/subdiretórios.
	* **Escrita:** permite  editar um arquivo ou modificar o conteúdo de um diretório.
	* **Execução:**permite executar um arquivo ou acessar um diretório.
6. No campo **Diretório** **ou arquivo**, indique o caminho completo do arquivo ou diretório que deseja controlar.
7. Clique no botão **Adicionar** para incluir a permissão para o controle.
8. Se desejar, realize os passos anteriores para adicionar mais arquivos e diretórios para serem controlados.
9. No campo **Usuário**, insira o nome do grupo de segurança do domínio ou o nome de usuário de um usuário local, ou de domínio.
10. No campo **Regras de bloqueio**, selecione o que os usuários **não**podem fazer:
	* **Leitura:** não permite ver e listar os arquivos e subarquivos/subdiretórios.
	* **Escrita:** não permite editar um arquivo ou modificar o conteúdo de um diretório.
	* **Execução:**não permite executar um arquivo ou acessar um diretório.
11. No campo **Diretório ou arquivo** indique o caminho completo diretório que deseja que seja controlado.
12. Clique no botão **Adicionar**para incluir a permissão para o controle.
13. Se desejar, realize os passos anteriores para adicionar mais arquivos e diretórios para serem controlados.
14. Clique em**Salvar.**



---

## Cadastrar regra geral para alias

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. Clique em**⁝** e selecione a opção **Nova regra geral** para criar uma política global.
4. No formulário **Cadastro de política de acesso** na aba **Alias**, preencha os campos:
5. Ao criar uma **Nova regra geral,** a aba **Alias**permite a criação de alias (nomes alternativos para comandos) através do GO Endpoint Manger para Linux. Você pode criar atalhos para gerenciar os comandos que são mais usados e tenham um texto muito longo, agilizando a utilização do terminal.
	* **Alias:** preencha com o atalho ou apelido para comandos maiores.
	* **Comando:** preencha com o comando que irá ser utilizado no terminal.
6. Clique em**Salvar.**



---

## Cadastrar regra geral para v**ariáveis de ambiente**

1. Acesse a plataforma senhasegura.
2. Acesse o menu **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. Clique em**⁝** e selecione a opção **Nova regra geral** para criar uma política global.
4. No formulário **Cadastro de política de acesso** na aba **v****ariáveis de ambiente**, preencha os campos:
5. As variáveis de ambinete podem ser usadas de maneira dinâmica para programas ou processos em execução no sistema.
	* **Nome da variável:** preencha com o nome da variável.
	* **Valor da variável:** preencha com o valor da variável.
6. Clique em**Salvar.**



---

## Validar a política no dispositivo de destino

Utilizando a política criada acima, visualize o arquivo /sys/kernel/security/caitsith/policy para verificar as regras [CaitSith](https://caitsith.osdn.jp/) padrão aplicadas ao dispositivo.


```
root\@debian:/root# cat /sys/kernel/security/caitsith/policy 
POLICY_VERSION = 20120401
stat Policy updated: 9036 (Last: 2019/12/24 00:31:57)
stat Requests denied: 10 (Last: 2019/12/23 18:55:22)
stat Memory used by policy: 4512
stat Memory used by audit: 63808
stat Memory used by query: 0
quota memory audit 16777216
quota memory query 1048576
quota audit \[1\] allowed = 0 denied = 1024 unmatched = 1024

**1**00 acl write path="/etc/oracle/tnsnames.ora"
audit 1
100 allow task.uid = 1002
200 deny 
```
O senhasegura identificou o 'uid' do usuário 'dba' utilizado na regra acima como 1002, criando a permissão '100 allow task.uid \= 1002'.

Conforme a regra aplicada acima, o usuário dba consegue inserir um conteúdo no arquivo alvo. 

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1677103618020.png)O usuário dba consegue escrever no arquivo O super\-usuário não consegue escrever no arquivo, uma vez que este usuário está na regra de negação da diretiva criada. Mesmo sendo um super\-usuário, a tentativa de escrita não é possível.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28159%29.png)O usuário root não consegue escrever no arquivo  

---

## Casos de uso

### Negar a todos os usuários, exceto um único usuário, a execução de qualquer binário

Esta política bloqueará qualquer usuário, exceto o **adminlinux**, de executar o vim.

1\. Vá para **Go Endpoint Manager ➔ Políticas ➔ Linux ➔ Políticas de acesso**

2\. Clique em ⁝ e **N****ova regra geral**

3\. Preencha os campos na aba **Principal**:

* **Diretriz:** selecione a opção **Executar binário.**
* **Verificador:** path\="/usr/bin/vim" (aqui pode ser qualquer outro binário que você deseja criar regras).
* **Incluir regra de negação geral?:**selecione.
* **Permitir ou bloquear:** defina como **Permitir**.
* **Texto da regra:** task.uid\="adminlinux".

4\. Clique em **Adicionar**

5\. Clique em **Salvar**

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1668628314526.png)



---

### Impedir o usuário 'JoãoS' de criar arquivos em um diretório especificado

Esta política não permite que o usuário 'JoãoS' crie arquivos.

1\. Vá para **Go Endpoint Manager ➔ Políticas ➔ Linux ➔ Políticas de acesso**

2\. Clique em ⁝ e **N****ova regra geral**

3\. Preencha os campos na aba **Principal**:

* **Diretriz:** selecione a opção **Criar arquivo.**
* **Verificador (caminho ou executor):** path\="/usr/mydir"(aqui pode ser qualquer outro diretório que você deseja criar regras).
* **Incluir regra de negação geral?****:** não selecione.
* **Permitir ou bloquear:** defina como **Bloquear.**
* **Texto da regra:** task.uid\="JoãoS".

4\. Clique em **Adicionar**

* **Permitir ou bloquear:** defina como **Permitir**
* **Texto da regra:** task.gid\="meugrupo"

5\. Clique em **Adicionar**

6\. Clique em **Salvar**

**![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1668629194317.png)**

CuidadoCertifique\-se de deixar a regra 'JoãoS' acima da regra 'meu grupo'. Se 'JoãoS' estiver abaixo, não será possível bloqueá\-lo porque a ordem das regras sempre prioriza a regra localizada no topo.

---

### O usuário "JoãoS" e todos no "meugrupo" podem editar o arquivo sudoers

1\. Vá para **Go Endpoint Manager ➔ Políticas ➔ Linux ➔ Políticas de acesso**

2\. Clique em ⁝ e **nova regra geral**

3\. Preencha os campos na aba **Principal**:

* **Diretriz:** selecione a opção **Escrever****arquivo.**
* **Verificador (caminho ou executor):**path\="/etc/sudoers/sudoers" (aqui pode ser qualquer outro arquivo que você deseja criar regras).
* **Incluir regra de negação geral?****:** selecione.
* **Permitir ou bloquear:** defina como **Permitir.**
* **Texto da regra:**task.gid\="meugrupo".

4\. Clique em **Adicionar**

* **Permitir ou bloquear:** defina como **Permitir.**
* **Texto da regra:** task.uid\="JoãoS".

5\. Clique em **Adicionar**

6\. Clique em **Salvar**

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1668630281472.png)



---

### O usuário 'JoãoS' e todos no grupo "meugrupo" só podem ler o arquivo sudoers

1\. Vá para **Go Endpoint Manager ➔ Políticas ➔ Linux ➔ Políticas de acesso**

2\. Clique em ⁝ e **nova regra geral**

3\. Preencha os campos na aba **Principal**:

* **Diretriz:** selecione a opção **Le**r**arquivo.**
* **Verificador (caminho ou executor):**path\="/etc/sudoers/sudoers" (aqui pode ser qualquer outro arquivo que você deseja criar regras).
* **Incluir regra de negação geral?****:** selecione.
* **Permitir ou bloquear:** defina como **Permitir.**
* **Texto da regra:**task.gid\="meugrupo".

4\. Clique em **Adicionar**

* **Permitir ou bloquear:** defina como **Permitir.**
* **Texto da regra:** task.uid\="JoãoS".

5\. Clique em **Adicionar**

6\. Clique em **Salvar**

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1668630659369.png)



---

### Comando 'ls' só pode ser executado através do sudo

1\. Vá para **Go Endpoint Manager ➔ Políticas ➔ Linux ➔ Políticas de acesso**

2\. Clique em **⁝** e **nova regra geral**

3\. Preencha os campos na aba **Principal**:

* **Diretriz:** selecione a opção **Executar binário.**
* **Verificador (caminho ou executor):**exec\="/usr/bin/ls"
* **Incluir regra de negação geral?:** selecione.
* **Permitir ou bloquear:** defina como **Permitir.**
* **Texto da regra:**task.exe\="/usr/bin/sudo".

4\. Clique em **Adicionar**

5\. Clique em **Salvar**

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1668630879369.png)  


## 

  


  
  


