# Como realizar a troca de senha utilizando Tk Expect para banco de dados Oracle

Note que, quando você estiver lidando com dispositivos do tipo banco de dados, especificamente bancos de dados Oracle, com um usuário que tenha o caractere `$` no nome de usuário, existem algumas particularidades que devem ser levadas em conta para realizar a troca de senha automática utilizando o plugin Tk Expect.

Para realizar a troca automática, você deve se certificar de possuir uma credencial terceira que esteja cadastrada no mesmo dispositivo e inserida no mesmo banco de dados da credencial principal, sendo uma que contenha o caractere `$` no nome de usuário, e outra que não contenha o caractere $ no nome de usuário.

Para realizar a troca de senha automática em bancos de dados Oracle utilizando o template de execução Tk Expect para usuários com `$` no nome de usuário, siga os passos a seguir:

## Cadastro da credencial e do template

1. No formulário **Cadastro de credencial**, na aba **Informações**, certifique-se de que o campo **Informação Adicional** seja preenchido com o nome do banco de dados ao qual o usuário está vinculado. Por exemplo orclpdb.
2. No formulário **Cadastro de credencial**, na aba **Configurações de execução**, na seção **Configuração da troca de senha da credencial**, certifique de que os seguintes parâmetros estejam devidamente preenchidos:
   1. Selecione o checkbox **Ativar** troca automática para ativar a funcionalidade.
   2. No menu suspenso **Plugin de troca**, selecione **Tk Expect**.
   3. No menu suspenso **Template de troca**, selecione o template **Tk Expect**.
3. No formulário **Cadastro de credencial**, na aba **Configurações de execução**, na seção **Configuração de autenticação**, você deverá indicar, no menu suspenso **Credencial de autenticação,** uma credencial que contenha um usuário que não tenha o caractere `$` no nome de usuário e que faça parte do mesmo banco de dados do usuário da credencial que está sendo editada.

:::(info) (Info)
You can find the template in the [Segura repository](https://github.com/Segura/execution-templates).
:::

## Exemplos de uso

### Parâmetros para as duas credenciais

### Credencial principal

* Nome do usuário com o caractere `$`: `team$qakm`.
* Dispositivo: `Oracle` (banco de dados).
* Informações adicionais: `orclpdb`.

### Credencial de serviço/terceira

* Nome de usuário sem o caractere `$` : `teamqakm`.
* Dispositivo: `Oracle` (banco de dados).
  * Deve ser o mesmo dispositivo da credencial principal.
* Informações adicionais: `orclpdb`.

### No formulário de informações da credencial principal:

Em **Configurações de execução > Configuração da troca de senha da credencial** preencha os campos conforme com o exemplo abaixo:

* Habilitar troca automática: `habilitado`.
* Plugin de troca: `Tk Expect`.
* Template de troca: `TK-TESTE`.

Em **Configurações de execução > Configuração de autenticação** preencha os campos conforme o exemplo abaixo:

1. No menu suspenso **Credencial de autenticação** escolha a credencial de serviço/terceira (`teamqakm`).
2. Para executar a troca de senha, acesse **Grid Menu > Execuções > Solicitar troca de senha**, selecione a sua credencial e clique em **Solicitar troca de senha** no canto inferior direito. Confirme clicando em **Sim** no modal de confirmação, e aguarde a execução da sua solicitação.
3. Para se assegurar de que tudo foi executado de forma correta, você pode visualizar a senha nova da sua credencial. Para isso acesse-a pelo **Grid Menu > PAM Core > Todas**, clique no ícone de chave na coluna **Ação** e, no formulário **Exibição e transferência de senha segura**, selecione a opção **Visualizar senha** para comparar com a senha anterior.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).