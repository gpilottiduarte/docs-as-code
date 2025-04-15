CuidadoO GO Endpoint Manager para Linux não concede permissão a um diretório ou arquivo para um usuário se o sistema operacional não permitir o acesso.1. Acesse a plataforma senhasegura.
2. Vá para **GO Endpoint Manager➔Políticas➔Linux➔Políticas de acesso.**
3. Clique em **⁝** e selecione a opção **Nova regra geral** para criar uma política global.
4. No formulário **Cadastro de política de acesso**, na aba **Principal**, preencha os campos:
	* **Nome da política:**defina um nome fácil de identificar.
	* **Ativo:** se ativa, a política será aplicada nos dispositivos.
	* **Diretriz:**selecione um tipo de política.CuidadoCaso o usuário já tenha o comando embutido no próprio shell, o GO Endpoint Manager para Linux não fará uma busca para executar o comando do sistema. Dessa maneira, o comando embutido no shell não será filtrado pela política. Para checar os comandos embutidos no shell no terminal do Linux, digite o comando **help**.
	* **Verificador (path ou executor):**preencha com o caminho do diretório (por exemplo: path\="/usr/bin/ls") ou com o executor para links simbólicos (por exemplo: exec\="/etc/alternatives/vim"). Para obter o caminho, digite **which \[digite o comando****desejado****]** e para validar se é um link simbólico, digite **ls \-la \[digite o caminho do comando desejado].**ImportanteO não preenchimento ou o preenchimento incorreto deste campo pode levar à completa inutilização do dispositivo. Siga a [sintaxe do CaitSith](https://caitsith.osdn.jp/#syntax_list) para preencher corretamente este campo.
	* **Habilitar auditoria?:** o campo é obrigatório e por padrão vem ativo. Permite a auditoria de ações realizadas.
	* **Incluir regra de negação geral?:**se essa opção estiver marcada, nenhum usuário da workstation Linux poderá executar algo que não esteja permitido pela política de acesso. Caso desmarcado, todos os usuários da workstation Linux terão permissão para executar tudo, exceto o que for bloqueado pela regra.
	* **Permitir ou bloquear:** escolha se a política cadastrada permite ou bloqueia o acesso para o usuário ou grupo.
	* **Texto da regra:**preencha com uma regra no formato das políticas no [CaitSith](https://caitsith.osdn.jp/#syntax_list). Por exemplo, para usuários: task.uid\=“user”. Para grupos: task.gid\=”group”. É necessário utilizar o grupo primário do usuário.CuidadoA primeira regra adicionada tem prioridade sobre as regras inseridas depois. Se você criar uma regra que permite a execução do binário e depois adicionar outra regra para bloquear a execução do mesmo binário, a primeira regra será considerada e a segunda não.
5. Clique em **Adicionar.**
6. Clique em **Salvar.**

InfoTodos os comandos que passarem por um processo de filtragem serão registrados. Isso inclui regras definidas para permitir a execução em políticas de acesso CaithSith ou regras para sudo. Você consegue alterar a regra geral de uma política para incluir mais regras, como o controle de diretórios e arquivos. Basta clicar no ícone **Alterar a regra geral**, localizado na coluna **Ação**, de uma política já existente. O ícone **(⁝)****Visualizar regra** permite verificar a política formatada.CuidadoEvite reutilizar políticas existentes, prefira criar novas políticas. A constante edição de políticas existentes pode causar erros na política sendo criada.  




---

## Política adicionada ao dispositivo

Para validar que a política foi adicionada ao dispositivo:

1. Acesse o terminal do Linux.
2. Digite o comando:


```
cat /sys/kernel/security/caitsith/policy
```
