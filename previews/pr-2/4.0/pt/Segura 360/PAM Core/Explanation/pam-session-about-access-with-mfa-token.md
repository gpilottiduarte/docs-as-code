# Sobre acesso com MFA token

A autenticação multifator é uma camada extra de segurança adicionada à conta. Com ela, é possível realizar o login com a senha e adicionalmente com o código enviado para um dispositivo.

Para realizar a configuração de um MFA token, acesse o documento [Adicionar autenticação em multifator](/v4/docs/pt/how-to-add-multi-factor-authentication).
Se o acesso MFA estiver configurado, o token será solicitado quando você fizer o login no Terminal Proxy e RDP Proxy. Se você configurar para solicitar um token MFA mesmo ao iniciar sessões proxy, você será solicitado novamente.

O workflow de acesso e as configurações de acesso de emergência também serão aplicados, se necessário.

:::(warning) (**Atenção**)
Conforme a Postura de Segurança do Usuário, o uso de MFA para iniciar uma sessão pode ser obrigatório ou necessário com mais frequência.
:::

Para entender mais sobre configurações adicionais do MFA Token, acesse o documento [Configurações de segurança - Autenticação de multifator](/v4/docs/pt/user-management-security-settings).
