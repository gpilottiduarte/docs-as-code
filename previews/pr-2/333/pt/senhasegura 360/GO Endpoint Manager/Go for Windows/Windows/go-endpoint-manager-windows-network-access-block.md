O **B****loqueio de rede**serve para bloquear cenários onde usuários tentam acessar outro IP que não seja a plataforma senhasegura. Este parâmetro fecha a sessão assim que esta inicia.

## Bloquear o acesso à rede

1. Acesse a plataforma senhasegura.
2. Entre no módulo **GO Endpoint Manager ➔** **Parâmetros ➔ go Windows.**
3. Selecione a opção **Sim** no parâmetro **Bloquear acesso à rede?**

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1671740902681.png)Tela de bloqueio de acesso à rede 

Com a opção **Bloquear usuário?**definida como **Sim**, o usuário que tentar acessar uma rede que não seja o ambiente senhasegura, e exceder a quantidade de **Ocorrências(mínimo)**definidas, será bloqueado. O usuário não conseguirá acessar a aplicação senhasegura, nem seu ambiente administrativo. Este procedimento irá enviar os eventos bloqueados para o servidor senhasegura.

