# Como configurar e utilizar o GO Shell

O **GO Shell** é uma funcionalidade do **PEDM GO Endpoint Manager para Windows**, que permite que o administrador gerencie a execução de comandos permitidos previamente, garantindo o controle e a segurança do ambiente. 

Siga os passos abaixo para permitir comandos específicos em *workstations* com o cliente do **PEDM GO Endpoint Manager** instalado.

1.  No senhasegura, acesse a página de comandos do **PEDM GO Windows**, através do caminho, **Grid Menu** > **PEDM GO Endpoint Manager** > **Políticas** > **Windows** > **Comandos**.
2. Clique no botão de ver ações, representado pelos três pontos verticais e selecione, segundo sua necessidade, a opção **Segregação geral** (aplicada para todas as *workstations*), ou a opção **Segregação para workstation** (aplicada em uma única *workstation*).
3. Preencha o formulário **Cadastrar comandos windows**.
    * No campo **Nome**, defina um nome para a regra a ser criada.
    * No campo **Ativo**, defina se esta regra estará ativa ou não após salvar.
    * No campo **Comando**, escreva o comando que está sendo configurado na regra. Exemplo: `ipconfig`, `net session`, `tasklist`...
4.  Clique no botão **Salvar**.

Uma vez que um, ou mais, comandos forem cadastrados por um administrador no senhasegura, apenas esses comandos poderão ser executados na máquina do usuário. 

Para executar um comando na máquina do usuário, abra o **GO Shell** através do **senhasegura.go** *client* e entre o comando desejado.

Ao executar outra interface de comando do sistema operacional (CMD, PowerShell, Git Bash...), o **GO Shell** do **senhasegura.go** *client* será aberto no lugar

## Comando goshell

Para mais informações sobre o **GO Shell** e seus comandos permitidos, utilize o comando `goshell` junto com uma *flag* de ação:

* Rode o comando `goshell --commands`, para visualizar os comandos disponíveis.
* Rode o comando `goshell --help`, para visualizar as opções de comandos.
* Rode o comando `goshell --update`, para atualizar a lista de comandos permitidos.