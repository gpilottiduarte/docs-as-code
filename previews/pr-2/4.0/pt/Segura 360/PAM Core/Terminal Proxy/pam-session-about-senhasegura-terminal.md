# Sobre Terminal Segura

Ao fazer login no servidor Segura usando SSH, o usuário será direcionado para o prompt padrão do **Segura shell**, para que sejam inseridas as informações do usuário e assim iniciar uma sessão.

:::(info) (**Info**)
Para saber como iniciar uma sessão SSH para dentro do cofre Segura, acesse a documentação [Como acessar uma sessão de administração SSH dentro do cofre Segura](/v4/docs/pt/administration-ssh-access). 
:::

Este terminal simplificado tem apenas comandos para iniciar uma sessão proxy para um dispositivo remoto e transferir arquivos entre o dispositivo de origem e o dispositivo de destino. 

O uso do comando `help`, exibido na tela inicial, serve para listar os comandos disponíveis.

Uma vez dentro da sessão do Segura shell, você pode utilizar o comando `list`, para listar as credenciais de acesso, exibidas no formato de tabela.

### Comando `list`
**Item**|**Descrição**
|---|---|
**Conn**|Conectividade do dispositivo.
**Username**|Nome de usuário da credencial.
**Hostname**|Hostname do dispositivo.
**IP**|Endereço IP do dispositivo.
**Tipo**|Tipo de credencial.
**Tipo Dispositivo**|Tipo do dispositivo.

:::(warning) (**Atenção**)
Credenciais de domínio não são listadas através deste comando. Para realizar o acesso com credenciais de domínio é necessário utilizar a seguinte sintaxe: `ssh dominio\usuário@servidor`.
:::
:::(info) (**Info**)
Substitua o `<username>` pelo nome de usuário da credencial.
:::

Para visualizar o acesso do **usuário**, utilize a  sintaxe: `list <username> --related`
Assim, serão exibidos todos os dispositivos que uma determinada conta tem acesso.

:::(info) (**Info**)
Substitua o `<domain>` pelo dispositivo, seja o hostname ou IP.
:::

Para visualizar o acesso do **domínio** utilize a sintaxe: `list <domain> --related`. Que permite ao usuário verificar todas  as credenciais de domínio que estão cadastradas neste dispositivo e quais são os dispositivos que têm o mesmo domínio que a credencial.