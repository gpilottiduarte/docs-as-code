## O GO Endpoint Manager para Windows possibilita a integração com a autenticação User Account Control (UAC), ou Controle de Conta do Usuário nos casos em que uma aplicação necessite elevar o privilégio sob demanda. Nesses casos, além das opções de autenticação normalmente oferecidas pelo Windows, o logo do GO Endpoint Manager será apresentado.

Para elevar o privilégio, você deve selecionar qual credencial do senhasegura irá utilizar. Para usuários com MFA token configurado, o token de autenticação deverá ser inserido em um passo posterior. 

Por estar totalmente integrado ao Windows, todo o processo é transparente ao usuário,



---

## Configurar a integração com a UAC

1. Acesse a plataforma senhasegura.
2. [Cadastre o Token do usuário.](https://docs.senhasegura.io/v3-33/docs/pt/go-endpoint-manager-windows-token-mfa-otp)
3. Entre no módulo **GO Endpoint Manager ➔****C****onfigurações**➔ **Parâmetros ➔****go Windows.**
4. Defina o parâmetro **Habilitar integração UAC?**como **Sim.**

CuidadoO processo de elevação através de UAC não é registrado nos eventos do senhasegura.



---

## Utilizar uma credencial via UAC

1. Inicie o aplicativo que requer privilégios administrativos na workstation do usuário.
2. Na janela de seleção do usuário administrativo, selecione a opção senhasegura

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1677783398528.png)Run as a different user 

    3\. Digite o nome da credencial do senhasegura que você deseja utilizar para realizar a elevação.

    4\. Clique em **Sim** para confirmar.

    5\. Caso a autenticação de múltiplo fator esteja habilitada, insira o token em um segundo passo.

  


  


  


  


  

