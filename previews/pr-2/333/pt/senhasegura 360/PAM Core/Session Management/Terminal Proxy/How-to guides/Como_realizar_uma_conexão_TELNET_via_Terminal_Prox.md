# Como realizar uma conexão TELNET via Terminal Proxy

Neste documento, você encontra um guia passo a passo sobre como realizar uma conexão do tipo TELNET via Terminal Proxy.
 
## Requisitos

* Ter um aplicativo do tipo de prompt de comando instalado na máquina.

---
## Conexão Telnet
Para fazer uma conexão TELNET a um dispositivo que tenha esta conectividade ligada a uma credencial válida, será preciso executar o comando `telnet` seguido da credencial e do dispositivo. Siga os passos abaixo:

1. Abra o aplicativo de **prompt de comando** de sua preferência.
2. Digite o seguinte comando para entrar no cofre:
    1. ` ssh usuario_senhasegura@instancia_senhasegura`.
        :::(info) (**Info**)
        O campo `usuario_senhasegura` é o nome de usuário utilizado para acesso ao cofre. O campo `instancia_senhasegura` pode ser o hostname ou o endereço IP do cofre a ser acessado.
        :::
    2. Aperte a tecla **Enter**.
        :::(info) (**Info**)
        Caso seja o primeiro acesso ao dispositivo um aviso de confiabilidade será exibido, digite `yes` e aperte a tecla Enter. Nos próximos acessos a este dispositivo o aviso não será mais exibido.
        :::
3. Digite sua senha.
    1. Aperte a tecla **Enter**.
4. A tela inicial do **senhasegura shell** será exibida.
5. Digite `list`para que a lista de credenciais e dispositivos disponíveis seja exibida.
    :::(info) (**Info**)
    Se caso já souber a credencial e o dispositivo que deseja acessar não é necessário utilizar o comando `list`.
    :::
6. Após escolher, digite:
    1. `telnet credencial@hostname` ou `telnet credencial@IP`
    2. Aperte a tecla **Enter**.

Após esses passos a sessão TELNET via Terminal Proxy para dentro do dispositivo desejado terá sido iniciada e pronta para o uso.

O Terminal Proxy do senhasegura também oferece outros tipos de conexões, como:

* [Conexão SSH via Terminal Proxy](/v3-33/docs/pt/pam-session-how-to-make-an-ssh-connection-via-terminal-proxy-2). pam-session-how-to-make-an-ssh-connection-via-terminal-proxy-2
* [Conexão SSH Multihop via Terminal Proxy](/v3-33/docs/pt/pam-session-how-to-make-an-ssh-multihop-connection-via-terminal-proxy-2).
* [Transferência arquivos em sessões Terminal Proxy via SFTP](/v3-33/docs/pt/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-sftp-2).
* [Transferência de arquivos em sessões Terminal Proxy via SCP](/v3-33/docs/pt/pam-session-how-to-transfer-a-file-in-terminal-proxy-sessions-using-scp-2).

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.