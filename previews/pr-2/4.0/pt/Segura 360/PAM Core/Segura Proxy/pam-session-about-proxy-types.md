# Sobre Tipos de Proxy

Neste documento, você vai encontrar todas as informações sobre o que é, como funciona e os principais tipos de Proxy utilizados pelo Segura.

## O que são sessões proxy?
São sessões onde o usuário realiza seu acesso através de um tipo de proxy disponibilizado pelo Segura para acessar o dispositivo desejado. Isso traz mais segurança ao acesso, tendo em vista que toda a atividade, além de ser gravada, estará passível de auditoria e ações pré estabelecidas pelo administrador.

## Funcionalidade Proxy
Para aproveitar melhor os proxies no Segura, é importante entender que existem dois tipos de conexões acontecendo durante uma sessão:

* Uma conexão que se origina da estação de trabalho do usuário para o servidor Segura. 
* E outra que sai do servidor Segura para o dispositivo que o usuário deseja acessar. Sempre trabalhando como uma ponte entre o usuário e o dispositivo de destino.

:::(warning) (**Atenção**)
Não é possível autenticar-se via SSO em sessões remotas via proxies RDP e SSH.
:::

:::(info) (**Info**)
Para as atividades desta seção, os usuários podem usar qualquer cliente de sua escolha, como PuTTY, MobaXTerm, SecureCRT, Windows RDC e outros.
:::

:::(info) (**Info**)
Após uma solicitação de acesso a uma sessão ser feita por um usuário e aceita pelo aprovador, quando o usuário inicia a sessão um temporizador do tempo restante inicia em minutos. Além da notificação no início do acesso informando o tempo restante, serão enviadas mais 3 notificações, quando forem 15 minutos restantes, 10 minutos e 5 minutos. **Observação**: Apenas nas sessões **Web SSH**, **Web RDP** e **RDP Proxy** esta funcionalidade está ativa.
:::

## Tipos de sessões

* Database Proxy
* Web Proxy
* Terminal Proxy
* RDP Proxy
* RemoteApp
* Citrix