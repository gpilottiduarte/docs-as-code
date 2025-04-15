# Como acessar uma sessão de administração SSH dentro do cofre senhasegura

Neste artigo, você encontra um guia passo a passo sobre como relizar a sessão de administração SSH para dentro do cofre senhasegura através do aplicativo de sua preferência.

## Requisitos

* Usar uma versão 3.10 ou superior.
* Ser usuário administrador.

***

## Realizar o acesso
Usaremos como exemplo o comando SSH via linha de comando. Para isso, siga as seguintes instruções:

1. Digite o seguinte comando para entrar no cofre:
    1. ```ssh mt4adm@{hostname} -p 59022```
    2. Aperte a tecla **Enter**
2. No **aviso** digite:
    1. ```yes```
    2. Aperte a tecla **Enter**.
3. Entre com a **senha**:
    1. No primeiro acesso a senha é **mt4adm**.
    2. Aperte a tecla **Enter**.
    3. Logo após mude a senha para uma pessoal.
    4. Aperte a tecla **Enter**.
    :::(error) (**Cuidado**)
    Após o primeiro acesso e criada a sua senha pessoal, somente ela poderá lhe dar acesso ao cofre. **Não esqueça esta senha**, a perda da mesma resulta na perda permanente ao acesso do cofre.
    :::
6. Após o login a tela inicial do senhasegura será exibida.
7. A sessão SSH para dentro do cofre senhasegura está pronta para o uso.

***

Você ainda tem dúvidas? Entre em contato com a  [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.