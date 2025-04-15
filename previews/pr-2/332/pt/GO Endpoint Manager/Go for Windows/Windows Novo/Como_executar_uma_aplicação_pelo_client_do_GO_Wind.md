# Como executar uma aplicação pelo client do GO Windows

O **PEDM GO Endpoint Manager para Windows** permite que seus usuários executem aplicações normalmente, com elevação de privilégios ou com personificação de outros usuários. 

Acompanhe os passos abaixo para executar uma aplicação no *client* do GO para Windows em todos os cenários descritos.

1. Na área de trabalho de uma *workstation* com o *client* do **PEDM GO Endpoint Manager** instalado, execute o **senhasegura.go** (Core).
2. Na primeira coluna da aplicação, clique na opção **Executar**.
3. Selecione a aplicação que deseja executar e clique com o botão direito do mouse.
4. Selecione uma das opções de execução:
    * `Executar`: executa a aplicação com elevação de privilégios do usuário logado no sistema operacional, segundo os parâmetros gerais e de listas de acessos. Utiliza tokens para autenticação com o servidor senhasegura. Não é necessário ter usuário cadastrado no senhasegura **PAM**.
    * `Executar como usuário personificado`: executa a aplicação como outro usuário. É necessário ter uma credencial cadastrada no senhasegura **PAM**, referente ao usuário que está executando a ação. A autenticação é realizada pelo senhasegura. Requer [personificação](/docs/pt/go-endpoint-manager-windows-impersonation).
    * `Executar como usuário (runas)`: executa a aplicação como outro usuário, utilizando o serviço do Windows run as. É necessário ter uma credencial cadastrada no senhasegura **PAM**, referente ao usuário que está executando a ação.
    * `Executar como usuário não elevado (runas)`:  executa a aplicação como outro usuário, mas sem elevação de privilégios, utilizando o serviço do Windows run as. É necessário ter uma credencial cadastrada no senhasegura **PAM**, referente ao usuário que está executando a ação.

:::(Info)(Info)
Para usuários em grupos de acesso que necessitam de aprovação, a aplicação será executada após a liberação do administrador.
:::

## Executar uma aplicação fora do client do GO

Também é possível executar uma aplicação com elevação de privilégios fora do *client* do **senhasegura.go**, para isso, siga os passos:

1. Na área de trabalho de uma *workstation* com o *client* do **PEDM GO Endpoint Manager** instalado, localize a aplicação que deseja executar e clique com o botão direito do mouse.
2. Selecione a opção `Executar com GO Endpoint Manager`.

## Lista de aplicações disponíveis

É possível que nem todas as aplicações estejam listados na opção de executar do senhasegura.go. Nesses casos, siga os passos abaixo:

1. Encontre o atalho, ou o arquivo de execução (`.exe`, `.lnk`, `.msc` e `.msi`), da aplicação desejada no sistema operacional, clique e arraste-a para dentro da lista de aplicações do senhasegura.go.  
2. Clique no botão **Atualizar**. 
