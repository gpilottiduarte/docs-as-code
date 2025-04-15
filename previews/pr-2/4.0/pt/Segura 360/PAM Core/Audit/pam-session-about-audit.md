# Auditoria

Neste documento, você vai encontrar todas as informações sobre o que é, como funciona e as principais aplicabilidades da **Auditoria** no PAM Core - Gerenciamento de Sessão.

## O que é a auditoria?
O Segura utiliza um terminal intermediário, que é executado internamente em tecnologias de proxy SSH. Este terminal intermediário avalia o comando em tempo de execução e determina, com base nas regras ativas, se ele pode ou não ser executado no dispositivo remoto.

## Funcionalidade 
Criar diversos tipos de configurações que permitem ou inibem a execução de determinados comandos. 
Esses comandos podem ser avaliados utilizando **expressões regulares** definidas pelo próprio administrador e, caso se enquadrem no padrão, uma ação pode ser tomada. 

:::(info) (**Info**)
É necessário ter um bom conhecimento de expressões regulares para que os comandos sejam avaliados corretamente.
:::

:::(warning) (**Cuidado**)
Se o usuário tiver iniciado um binário no servidor de destino, esse binário será entregue ao controle do operador do usuário. E, neste caso, os comandos auditados não são mais avaliados. Isso permite que não haja conflito entre comandos do terminal, textos e argumentos usados em outros binários.
:::

Você encontra informações sobre **Auditoria** e **Comandos auditados** no PAM Core - Gerenciamento de Sessão nos seguintes artigos:

* [Ações acionadas pela execução de comandos auditados](/v4/docs/pt/pam-session-actions-triggered-by-executing-audited-commands)
* [Sessões para auditoria](/v4/docs/pt/pam-session-sessions-for-audit)
* [Comandos auditados](/v4/docs/pt/pam-session-audited-commands)
* [Como registrar um novo comando auditado](/v4/docs/pt/pam-session-how-to-register-new-audited-command)
* [Como solicitar execução de comandos bloqueados](/v4/docs/pt/pam-session-block-command-request)
* [Minhas solicitações de execução](/v4/docs/pt/pam-session-my-execution-request)
* [Minhas execuções de aprovações](/v4/docs/pt/pam-session-my-execution-approval)
* [Solicitações - Comandos auditados](/v4/docs/pt/pam-session-audit-requests)
