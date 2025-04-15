# Sobre Ações acionadas pela execução de comandos auditados

Quando uma regra de comando auditado é aplicável a um comando que o usuário-operador deseja executar, o Segura registrará o tempo da sessão de proxy no momento da execução, e somará a pontuação do risco deste comando executado na sessão.

Além disso, serão aplicadas as regras definidas pelo administrador. Há quatro ações diretas:

* **Permitir a execução**: comandos cadastrados com essa ação passarão pela auditoria e estará presente no registro dos logs. A execução é permitida.
* **Bloquear a execução**: comandos cadastrados com essa ação serão impedidos de ser executados, o sistema apresenta uma mensagem que o comando é bloqueado e sua execução não é permitida. O comando passa pela auditoria e estará presente no registro do log. Esse comando fica inserido na *denylist*.
* **Interromper**: comandos cadastrados com essa ação além de serem impedidos de serem executados o usuário terá sua sessão interrompida instantaneamente. O comando passa pela auditoria e estará presente no registro do log. Esse comando fica inserido na *denylist*.
    :::(info) (**Info**)
    Para a ação Interromper é possível cadastrar uma quantidade de vezes que o usuário pode tentar executar o comando, antes de ter sua sessão interrompida, ou seja, se a quantidade de vezes são 3 o usuário receberá a mensagem de comando bloqueado por 2 vezes e na terceira tentativa sua sessão será interrompida.
    :::
* **Obrigar**: comandos cadastrados com essa ação passarão pela auditoria e estará presente no registro dos logs. Somente sua execução será permitida. Esse comando está inserido na *allowlist*.

:::(warning) (**Atenção**)
O administrador pode registrar quantas regras achar necessário com diversos tipos de ação. Porém quando são cadastrados comandos com a ação de **Obrigar**, somente os comandos desta lista poderão ser executados, todos os outros não serão mais permitidos. Contudo se um comando estiver com a ação **Obrigar** mas também estiver cadastrado com a ação de **Bloquear** ou **Interromper** ele **não** será executado.
:::

Há também as ações indiretas que podem ser configuradas.

* **Bloquear conta do Segura**: se a regra for aplicável, independentemente do tipo, a conta de acesso do usuário pode ser bloqueada após uma série de repetições do comando.
* **Pontuação no User Behavior**: o comando pode receber três tipos de pontuação os quais irão alimentar o usuário, dispositivo e estatísticas comportamentais das credenciais.