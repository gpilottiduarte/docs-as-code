## Visão geral

Se a configuração **Ativar autenticação multifator no login** estiver ativa na tela de parâmetros e o usuário vinculado tiver um token MFA configurado no senhasegura, esse usuário efetua login na estação de trabalho ou acessa a estação de trabalho via conexão RDP, o aplicativo solicitará o token MFA.

CuidadoA hora do servidor senhasegura e da workstation devem estar sincronizados.

---

## Habilitar o token MFA

1. Acesse a plataforma senhasegura.
2. Vá até o menu **GO Endpoint Manager ➔ Configurações ➔ Parâmetros ➔ go Windows.**
3. Vá para a seção **Autenticação.**
4. Marque a opção **Habilitar autenticação multifator no login?** como **Sim.**
5. Habilite o **token MFA** para o seu usuário.



---

## Configurar o token MFA OTP

1. Acesse a plataforma senhasegura.
2. Clique no seu nome de usuário.  
  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1672683580640.png)Configuração MFA OTP
3. Clique em **Configurar MFA.**
4. Selecione **Sim** para **Deseja continuar?**
5. Escolha a opção **OTP.**
6. Abra seu aplicativo autenticador.
7. Adicione uma nova conta lendo o **QR code** que aparece na tela.
8. Clique na parte do texto, **clique aqui** para validá\-lo na mesma tela.
9. Digite o **token MFA** que aparece em seu aplicativo autenticador.
10. Clique em **Validar.**

### Usar o token no login da workstation

1. Inicie a workstation.
2. Preencha o seu nome de **usuário**.
3. Preencha com o **Token** gerado em seu aplicativo autenticador.
4. Clique em **Entrar.**

InfoA sua foto de usuário é trocada no login ao habilitar a opção **Habilitar autenticação multifator no login?.**![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%20(28).png)Login do usuário no Windows usando o Token 

  


  


  


