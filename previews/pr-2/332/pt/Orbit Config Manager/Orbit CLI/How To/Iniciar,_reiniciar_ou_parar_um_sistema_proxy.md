As configurações dos sistemas proxy podem ser executadas através do comando `orbit proxy`. Cada proxy possui particularidades, então alguns argumentos tem efeito apenas em alguns sistemas.


```
mt4adm@vmdf-giskard:~$ sudo orbit proxy --help
Usage: orbit proxy <proxy> [<action>]

Application access proxy settings

Arguments:
  <proxy>       The proxy name: [fajita|jumpserver|rdpgate|nss]
  [<action>]    Systemd command: [start|stop|restart|status]

Flags:
  --help                        Show context-sensitive help.

  --api-cons=STRING             The Consumer Key
  --api-token=STRING            The Token
  --rdp-encryption="high"       The proxy name: [none|low|high|medium|fips]
  --language="en_US"            The proxy language
  --enable-sudo                 Enable sudo automation
  --fajita-block-interface
  --fajita-unblock-interface
  --force                       Force the command execution, never prompt
  --show

```
## Iniciar, reiniciar ou parar um sistema proxy

Utilize os comandos `start`, `stop` e `restart` para controlar o status dos sistemas proxy. Utilize o comando `status` para ver o status atual do serviço.


```
mt4adm@vmdf-giskard:~$ sudo orbit proxy fajita stop
The application services will be stopped or restarted during the process.
 Are you sure you want to proceed: y

mt4adm@vmdf-giskard:~$ sudo orbit proxy fajita start
The application services will be stopped or restarted during the process.
 Are you sure you want to proceed: y

mt4adm@vmdf-giskard:~$ sudo orbit proxy fajita status
● fajita.service - fajita service
   Loaded: loaded (/lib/systemd/system/fajita.service; enabled;
           vendor preset: enabled)
   Active: active (running) since Thu 2020-06-18 17:10:39 -03; 2s ago
 Main PID: 13842
    Tasks: 6 (limit: 3489)
   Memory: 29.6M
   CGroup: /system.slice/fajita.service

```
## Listar configurações ativas

Para listar a configuração de cada sistema proxy, utilize o argumento `–show` para cada sistema.


```
mt4adm@vmdf-giskard:~$ sudo orbit proxy fajita --show
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         true

mt4adm@vmdf-giskard:~$ sudo orbit proxy jumpserver --show
The Consumer Key:        c97c7f976153753b1065a57214853dc5630436c0
The Token:               150cd77aba427d4e4de5ce070b4c5dfe526c941b
Access proxy language:   en_US
SUDO automation:         True

mt4adm@vmdf-giskard:~$ sudo orbit proxy rdpgate --show
The Consumer Key:        ea3d21730571e3ba03ba9812e2579bd0b439643b
The Token:               16c017bb51d2581f7f4eea9c5d851d8fe1d6c10c
Access proxy language:   en_US
RDP encryption level:    high
Security Layer:          rdp
SSL Ptotocols:
TLS Ciphers:

mt4adm@vmdf-giskard:~$ sudo orbit proxy nss --show
The Consumer Key:        "a4d63bc9392880fc24358795c9f1615164d4dfa4"
The Token:               "40f1d439fd38466fe4bd61e9c96330541d258f04"

```
## Alterar o idioma

Para alterar o idioma de um sistema proxy, utilize o argumento `–language`. Reinicie o proxy após a configuração.


```
mt4adm@vmdf-giskard:~$ sudo orbit proxy fajita --language="en_US"
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false

```
## Habilitar uso do SUDO Automatizado

CuidadoEssa opção está disponível apenas para os proxies senhasegura Web Proxy ou senhasegura Terminal Proxy.

A ativação em um sistema não é refletida no outro.

A segregação desta funcionalidade através da interface Web diz respeito ao uso durante a sessão nos critérios de segurança dos grupos de acesso, dispositivos e credenciais. Mas se a funcionalidade estiver inativa no sistema proxy, o usuário não conseguirá executar a elevação automatizada independente se ele tem a permissão necessária.

Utilize o argumento `–enable-sudo` para permitir o uso de SUDO automatizado nos proxies senhasegura Web Proxy ou senhasegura Terminal Proxy . Reinicie o proxy após a configuração.


```
mt4adm@vmdf-giskard:~$ sudo orbit proxy fajita  
  --enable-sudo=false
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false

```
## Bloquear e Habilitar a interface do navegador embedado

O navegador embedado que permite acesso proxy a páginas Web pode ter sua interface bloqueada ou habilitada aos usuários.

CuidadoAo habilitar a interface os usuários poderão abrir novas abas e acessar outros sistemas além daquele que a credencial lhe garante acesso.


```
mt4adm@vmdf-giskard:~$ sudo orbit proxy fajita  
--fajita-unblock-interface
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y

mt4adm@vmdf-giskard:~$ sudo orbit proxy fajita  
--fajita-block-interface
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y

```
## Determinar o nível de criptografia RDP

Para sistemas proxy que lidam com protocolo RDP, você pode determinar o nível de criptografia da conexão. Reinicie o proxy após a configuração.


```
mt4adm@vmdf-giskard:~$ sudo orbit proxy fajita  
  --rdp-encryption=low
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false

mt4adm@vmdf-giskard:~$ sudo orbit proxy rdpgate  
  --rdp-encryption=high
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
The Consumer Key:        ea3d21730571e3ba03ba9812e2579bd0b439643b
The Token:               16c017bb51d2581f7f4eea9c5d851d8fe1d6c10c
Access proxy language:   en_US
RDP encryption level:    high
Security Layer:          rdp
SSL Ptotocols:
TLS Ciphers:

```
## Configurar o token WebService A2A para um sistema

As chaves de autenticação WebService A2A dos sitemas proxy podem ser determinadas através dos argumentos `–api-cons` e `–api-token`. Reinicie o proxy após a configuração.


```
mt4adm@vmdf-giskard:~$ sudo orbit proxy fajita  
  --api-cons=88122cce2d14d5cbd57f77c552e80843d97ff4be  
  --api-token=b25abee1b365458a9d719608bda85f6eb4900885
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y

The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false

```
