# Como bloquear um usuário durante uma sessão

Este documento fornece informações sobre o passo a passo para bloquear um usuário durante uma sessão remota.

## Requisitos

* Ser um usuário administrador.

---

## Bloquear usuário
:::(info) (**Info**)
Um usuário **não** pode bloquear a si mesmo durante a sessão, essa ação só pode ser feita por outro usuário administrador durante o Live Stream.
:::

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.
2. No menu lateral selecione **Auditoria** >  **Sessões** > **Sessões remotas**.
3. Na lista selecione o usuário que deseja bloquear.
4. Na coluna **Ações**, clique no **botão Ações** e selecione Live Stream.
5. A janela com a sessão em tempo real irá se abrir.
    1. No canto superior direito clique no botão **Bloquear interação!**.
    2. Uma caixa com a mensagem de **Interação bloqueada** irá aparecer no canto inferior direito na sessão para o usuário.

:::(warning) (**Cuidado**)
O usuário bloqueado será impedido de interagir somente na sessão na qual foi bloqueado, sendo possível interagir em outras sessões ou iniciar uma sessão diferente da qual foi bloqueado.
:::

Após essa ação o usuário não conseguirá interagir na sessão. Ao tentar logar novamente na sessão, o sistema irá apresentar a mensagem **"Erro. O usuário foi impedido de iniciar sessões por (nome do autor do bloqueio) em (dia e hora do bloqueio)"**. Até que seja desbloqueado o usuário seguirá sem acesso a sessão.

:::(info) (**Info**)
A interatividade pode ser liberada na própria janela do Live Stream, enquanto a sessão estiver ocorrendo, ou no relatório de [Usuários com bloqueio de sessão](/v4/docs/pt/pam-session-users-with-session-block).
:::

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.