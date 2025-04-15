# Sobre sessões Web HTTP

A sessão web HTTP acontece em um ambiente isolado contendo um navegador otimizado e protegido para realizar o acesso aos sites. A interatividade do usuário é semelhante à sessão do RDP.

O navegador é configurado para evitar a abertura de novas abas. Todos os componentes gráficos do navegador estão ocultos. Até mesmo os menus de interação e as teclas de atalho estão bloqueados.

:::(info) (**Info**)
É possível realizar a liberação de alguns elementos da interface, acesse a documentação **Comando para liberação parcial de abas do navegador em sessões VNCHTTP** para realizar essa liberação.
:::

Para acessar um website, é necessário um procedimento complementar em relação ao requerido para outros dispositivos, que normalmente precisam apenas de conectividade e uma credencial de acesso.

Os sites da Web exigem uma configuração de autenticação. Esta configuração permite que nosso navegador incorporado realize a automação das etapas de login.

Durante este processo de autenticação, o usuário será presenteado com um banner de proteção que evita que o usuário interfira e veja a autenticação em andamento. Sua interatividade será devolvida somente quando o processo de login terminar com sucesso ou fracasso.

:::(info) (**Info**)

* Os sites modernos têm passos de confirmação usando **Captcha** e **Tokens de autenticação multifator (MFA)** para evitar que sistemas automatizados realizem acessos indesejados. Nesses casos, o Web Proxy retorna interatividade para que o usuário continue a etapa de autenticação.
* Existe a possibilidade de utilizar o **Token MFA** de forma automatizada, para isso é preciso configurar a tag (`token_totp`) na parametrização de sessões web. Acesse os documentos Sessões web e Como cadastrar um novo parâmetro de sessão web, para mais informações.

:::

