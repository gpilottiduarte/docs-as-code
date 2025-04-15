# Sobre elevação automatizada de privilégios

O Segura pode permitir que o usuário execute tarefas elevadas, como SUDO, sem precisar saber a senha da credencial.

Nesses casos, o usuário terá sua interatividade capturada e o Segura realizará a elevação utilizando a mesma credencial utilizada para autenticar no dispositivo alvo.

Para que a elevação automatizada seja utilizada, o parâmetro **Habilitar automação de Sudo em sessões** deve estar com o valor de **Sim**. Para realizar a configuração de sessões remotas, acesse o documento [Como configurar uma sessão remota (proxy)](/v4/docs/pt/pam-session-configure-remote-session-proxy).

A elevação de privilégios é válida para sessões de Terminal Proxy ou terminal via Web Proxy, onde antes de utilizar um comando privilegiado, o usuário deve digitar `sudo <comando>` para que o mesmo seja executado.

Se a elevação de privilégios for inativada na sessão, a senha de credencial do dispositivo será solicitada ao tentar realizar a ação.
