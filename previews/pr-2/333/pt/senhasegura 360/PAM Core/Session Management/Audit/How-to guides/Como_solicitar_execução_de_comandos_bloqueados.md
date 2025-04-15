# Como solicitar execução de comandos bloqueados

Neste documento, você encontra um guia passo a passo sobre como realizar solicitação para utilizar comandos bloqueados.

:::(warning) (**Cuidado**)
Todas as solicitações terão que passar por um aprovador. Caso não exista um usuário cadastrado com esse papel, não será possível realizar uma solicitação. Assim,  o sistema apresentará a mensagem: **“Não há aprovadores cadastrados para essa solicitação”**.
:::
***

## Requisitos

* Possuir usuários cadastrados com o papel de aprovador.

***

## Cadastrar solicitação

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** > **Comandos auditados** > **Solicitar execução do comando**.

#### Janela pop-up Solicitar execução de comando

1. **Comando**: linha de comando a ser liberada.
    :::(warning) (**Cuidado**)
    O uso do asterisco **(*)** para capturar todos os comandos executados **não irá funcionar** para este caso. Os comandos precisam estar especificados por completo, inclusive a tabela que deseja utilizar o comando.
    :::
2. **Dispositivo**: número do IP ou hostname do dispositivo que será usado.
3. **Tipo de sessão**: tipo da sessão que será utilizado o comando.
4. **Justificativa**: explicação do porquê é preciso utilizar o comando.
5. **Motivo**: razão pela qual é preciso utilizar o comando.
6. **Governance Code**: código do software ITSM (opcional)
7. **Início Acesso**: data e hora inicial da solicitação.
8. **Fim Acesso**: data e hora final da solicitação.
    :::(info) (**Info**)
    Caso algum dos campos obrigatórios não tenham sidos preenchidos ou se encontram com valores inválidos, a caixa de texto correspondente ficará em **vermelho** indicando o erro, e não será possível salvar até que seja inserido um valor válido.
    :::
9. Clique em **Salvar**.

Após salvar o sistema apresenta uma mensagem de atenção: **"Você precisa de uma aprovação para executar este comando. Uma solicitação foi enviada aos aprovadores"**. Para acompanhar a solicitação acesse a página de Minhas solicitações de execução.

:::(warning) (**Cuidado**)
A solicitação de execução de um comando só poderá ser utilizada **uma única vez**. Para cada vez que o usuário quiser utilizar o comando, o usuário deverá criar uma nova solicitação.
:::
***

### Próximos passos:
[Minhas solicitações de execução](/v3-33/docs/pt/pam-session-my-execution-request)

Você ainda tem dúvidas? Entre em contato com a [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.