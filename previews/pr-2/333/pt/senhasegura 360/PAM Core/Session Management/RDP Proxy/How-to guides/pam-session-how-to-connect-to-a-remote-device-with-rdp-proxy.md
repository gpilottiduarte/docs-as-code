# Como realizar uma conexão a um dispositivo remoto com RDP Proxy

Neste documento, você encontra um guia passo a passo sobre como realizar uma conexão com um servidor senhasegura utilizando qualquer cliente RDP.

Uma vez conectado ao senhasegura RDP Proxy, você deve preencher os dados de autenticação e os dados do dispositivo remoto a ser conectado.

## Requisitos

* Ter um aplicativo de Remote Desktop Proxy instalado.

----
## Conectar a um dispositivo remoto

1. Abra o aplicativo de **Conexão de Área de Trabalho Remota** de sua preferência.
2. No campo **Computador**, digite o endereço de IP ou hostname do senhasegura.
3. O campo **Nome de usuário** é opcional e pode ser preenchido quando solicitado na tela inicial do senhasegura. 
    1. Caso deseje preencher, digite o nome de usuário utilizado para o acesso ao cofre.
4. Clique em **Conectar**.
5. Na janela inicial do senhasegura, digite os dados necessários:
    1. Seção **Credenciais senhasegura**:
        1. **Usuário**: usuário cadastrado no cofre a ser acessado.
        2. **Senha**: senha do usuário que está acessando o cofre.
        :::(warning) (**Atenção**)
        Quando ocorrer a redefinição ou expiração da sua senha, o RDP Gate irá apresentar uma mensagem avisando que a senha precisa ser trocada e exibir os passos que o usuário deverá realizar para cadastrar uma nova senha através da interface web.
        :::
    2. Seção **Dispositivo** destino:
        1. **Dispositivo**: endereço de IP ou hostname do dispositivo a ser acessado.
        2. **Usuário**: credencial do dispositivo a ser acessado. 
        3. **Senha pessoal (campo opcional)**: caso seja utilizado credencial pessoal, digite a senha da credencial.
        :::(info) (**Info**)
        Se o dispositivo aceitar o uso de credenciais pessoais, forneça a credencial pessoal no campo **usuário** e preencha obrigatoriamente o campo **senha pessoal**.
        Para saber mais sobre o uso de credenciais pessoais, acesse o documento [Como utilizar uma credencial pessoal](/v3-33/docs/pt/pam-session-how-to-use-a-personal-credential).
        :::
6. Clique em **Acessar**.
    1. Em sessões em que o **MFA Token** esteja habilitado, digite o número gerado pelo token nesta etapa.
7. Caso apareça um banner de apresentação com uma mensagem inicial, clique em **OK**.

Após esses passos, a sessão iniciará e estará pronta para  uso.

:::(info) (**Info**)
É possível realizar o bloqueio ou interrupção da sessão e do usuário enquanto a sessão estiver ativa. Para saber como realizar essa ação, acesse o documento [Como bloquear um usuário durante uma sessão](/v3-33/docs/pt/pam-session-how-to-block-a-user-during-a-session).
:::

---
### Próximos passos
[Como realizar uma conexão RDP Proxy utilizando Multihop](/v3-33/docs/pt/pam-session-how-to-make-an-rdp-proxy-connection-using-multihop).

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.