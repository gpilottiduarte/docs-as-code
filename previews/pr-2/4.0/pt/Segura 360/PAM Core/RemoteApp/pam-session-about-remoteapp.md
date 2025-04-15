# RemoteApp

O RemoteApp é uma conexão realizada por canais do protocolo que estabelece um canal aberto diretamente no binário desejado. Quando exigir autenticação, a mesma poderá ser realizada através dos argumentos binários ou pela macro de automação.

Utilizando os serviços de terminal e serviços de área de trabalho remota, é possível realizar ações baseadas em funções que permitem:

* Iniciar o RemoteApp e a conexão de área de trabalho em um navegador web.
* Conectar o usuário ao site hospedado no servidor do TS Web Access.
* Conectar o usuário ao site e exibir uma lista de programas RemoteApp disponíveis.
* Conectar o usuário à área de trabalho remota de qualquer servidor no qual o usuário tenha as permissões TS Web Access necessárias.

O usuário do operador será isolado no binário RemoteApp na sessão RDP ou SSH. Se o usuário minimizar a janela do aplicativo, não será possível usar outros aplicativos. Além disso, se o binário RemoteApp for fechado, a sessão será encerrada.
:::(warning) (**Atenção**)
Para o RemoteApp, o recurso de Comando Auditado não estará disponível.
:::