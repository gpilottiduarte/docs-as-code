# Como realizar uma conexão a um dispositivo remoto com RDP Gate via Proxy 2.0

Este documento fornece informações sobre o passo a passo para realizar uma conexão com um servidor Segura utilizando qualquer client RDP via Proxy 2.0.

## Requisitos

* Ter um aplicativo de Remote Desktop Proxy instalado.

---
## Conectar a um dispositivo remoto

1. Abra o aplicativo de **Conexão de Área de Trabalho Remota** de sua preferência.
2. No campo **Computador**, digite o endereço de IP ou hostname do Segura.
3. O campo **Nome de usuário** é opcional e pode ser preenchido quando solicitado na tela inicial do Segura. 
    1. Caso deseje preencher, digite o nome de usuário utilizado para o acesso ao cofre.
4. Clique em **Conectar**.
5. Na tela inicial do **Segura**, digite os dados necessários:
    1. Na seção Credenciais Segura:
        1. **Usuário**: usuário cadastrado no cofre a ser acessado.
        2. **Senha**: senha do usuário que está acessando o cofre.
        3. Clique em **Login**.
        :::(warning) (**Atenção**)
        Quando ocorrer a redefinição ou expiração da sua senha, o RDP Gate irá apresentar uma mensagem avisando que a senha precisa ser trocada e exibir os passos que o usuário deverá realizar para cadastrar uma nova senha através da interface web.
        :::
6. Em sessões em que **MFA Token** esteja habilitado, digite o número gerado pelo token nesta etapa.
7. Na tela com a **lista de credenciais**, selecione a credencial que será utilizada na sessão.
8. Clique em **Iniciar sessão**.
9. Caso apareça um banner de apresentação, com uma mensagem inicial, clique em **OK**.

Após esses passos a sessão terá sido iniciada e pronta para o uso.

:::(info) (**Info**)
É possível realizar o bloqueio ou interrupção da sessão e do usuário enquanto a sessão está ativa, para saber como realizar essa ação acesse o documento [Como bloquear um usuário durante uma sessão](/v4/docs/pt/pam-session-how-to-block-a-user-during-a-session).
:::

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.
