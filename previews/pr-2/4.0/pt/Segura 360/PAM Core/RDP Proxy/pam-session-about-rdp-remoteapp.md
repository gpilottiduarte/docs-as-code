# Sobre RDP RemoteApp

Uma conexão RDP RemoteApp é realizada por canais do protocolo. A conexão é estabelecida e um canal é aberto diretamente no binário desejado. Se o binário requer autenticação, ela poderá ser realizada através dos argumentos binários ou pela macro de automação.

O usuário do operador será isolado do binário do RemoteApp na sessão do RDP. Se o usuário minimizar a janela do aplicativo, não será possível usar outros aplicativos. Além disso, se o usuário fechar o binário do RemoteApp, a sessão será encerrada.

:::(warning) (**Atenção**)
Para o RemoteApp, o recurso de comando auditado **não estará** disponível.
:::

Para configurar o RemoteApp é necessário configurar a macro. Acesse o documento Como configurar um RemoteApp para realizar essa ação. 

No relatório você terá acesso a todas as macros e RemoteApps registrados no Segura. Observe que a configuração é preenchida com a localização do binário e, como argumentos, as máscaras serão aplicadas ao usuário, senha, hostname e informações adicionais.

Por fim, configure a [credencial](/v4/docs/pt/pam-how-to-set-up-a-credential-in-senhasegura) com a macro RemoteApp para usar e, se necessário, forneça a credencial de acesso ao dispositivo.

Quando você realiza login usando Segura RDP Proxy, caso a credencial possua um RemoteApp configurado serão exibidas  para o usuário as opções disponíveis para o acesso; contudo, caso a credencial esteja configurada para restringir acesso apenas ao aplicativo remoto, então a opção de acessar o sistema não será exibida.

:::(warning) (**Atenção**)
Em ambientes Windows é importante criar políticas de segurança mais rigorosas, acesse o documento [Sobre configurações de segurança para RDP Proxy e RemoteApp](/v4/docs/pt/pam-session-about-security-settings-for-rdp-proxy-and-remoteapp), para melhor entendimento e realizar o download do guia completo.
:::

