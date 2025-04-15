# Como gerenciar as configurações do proxy

As configurações do proxy no Segura podem ser executadas através do comando `orbit proxy`. 

:::(info) (Info)  
Cada proxy possui particularidades, então alguns dos parâmetros tem efeito limitado aos sistemas que os suportam.  
:::

## Parâmetro de ajuda

No terminal você conta com uma breve explicação sobre os parâmetros do comando `orbit proxy`, basta digitar `sudo orbit proxy --help.`

A saída do comando será como exibida abaixo:

```bash
$ sudo orbit proxy --help
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

## Iniciar, reiniciar ou parar

Você pode gerenciar os proxies, realizando ações como parar, reiniciar e iniciá-los. Para fazer isso, utilize os parâmetros `start`, `stop` e `restart` para controlar o estado destes. Para informações sobre o estado, utilize o parâmetro `status`.

A saída de cada um dos parâmetros será como exibida abaixo:

```bash
$ sudo orbit proxy fajita stop
The application services will be stopped or restarted during the process.
 Are you sure you want to proceed: y

$ sudo orbit proxy fajita start
The application services will be stopped or restarted during the process.
 Are you sure you want to proceed: y

$ sudo orbit proxy fajita status
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

É possível listar as configurações ativas de cada proxy, para isso utilize o parâmetro `--show`. Note que este comando irá exibir apenas as configurações que estão ativas para cada proxy. 

A saída do comando `sudo orbit proxy --show` será como exibida abaixo:

```bash
$ sudo orbit proxy fajita --show
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         true

$ sudo orbit proxy jumpserver --show
The Consumer Key:        c97c7f976153753b1065a57214853dc5630436c0
The Token:               150cd77aba427d4e4de5ce070b4c5dfe526c941b
Access proxy language:   en_US
SUDO automation:         True

$ sudo orbit proxy rdpgate --show
The Consumer Key:        ea3d21730571e3ba03ba9812e2579bd0b439643b
The Token:               16c017bb51d2581f7f4eea9c5d851d8fe1d6c10c
Access proxy language:   en_US
RDP encryption level:    high
Security Layer:          rdp
SSL Ptotocols:
TLS Ciphers:

$ sudo orbit proxy nss --show
The Consumer Key:        "a4d63bc9392880fc24358795c9f1615164d4dfa4"
The Token:               "40f1d439fd38466fe4bd61e9c96330541d258f04"
```

## Alterar o idioma

Para alterar o idioma de um sistema proxy, utilize o argumento `--language`. Como parâmetro adicional, é necessário passar o código internacional do idioma que você deseja mudar para. Por exemplo, `pt_BR` para o português brasileiro.

:::(info) (Info)  
É necessário reiniciar o proxy para que as alterações façam efeito.  
:::  
Por exemplo, o comando `sudo orbit proxy --language=”en_US”` trocará o idioma do proxy para o inglês norte-americano. A saída do comando será como exibida abaixo:

```bash
$ sudo orbit proxy fajita --language="en_US"
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false
```

## Habilitar uso do sudo automatizado

:::(warning) (Cuidado)
- Essa opção está disponível apenas para web proxy e terminal proxy.  
- A ativação em um proxy não é refletida no outro.  
- A interface web, ao segregar esta funcionalidade, garante que o uso de cada sessão seja conforme os critérios de segurança estabelecidos para grupos de acesso, dispositivos e credenciais. No entanto, se tal funcionalidade for desativada no proxy, isso impedirá a execução da elevação automatizada, mesmo que o usuário possua as permissões necessárias.
:::

Utilize o argumento `--enable-sudo` para permitir o uso do comando `sudo` de forma automatizada nos proxies **Segura Web Proxy** ou **Segura Terminal Proxy**. Para habilitar o uso, digite `sudo orbit proxy <proxy> --enable-sudo=”true”` e para habilitar o uso, digite `sudo orbit proxy <proxy> --enable-sudo=”false”`.

:::(info) (Info)  
É necessário reiniciar o proxy para que as alterações façam efeito.  
:::

A saída do comando `sudo orbit proxy <proxy> --enable-sudo=”false”`será exibida como abaixo:

```bash
$ sudo orbit proxy fajita --enable-sudo=false
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false
```

## Bloquear e habilitar a interface do navegador embarcado

O navegador embarcado que é responsável por permitir o acesso do proxy a páginas web pode ter sua interface bloqueada ou habilitada aos usuários.

:::(warning) (Cuidado)  
Ao habilitar a interface os usuários poderão abrir novas abas e acessar outros sistemas além daquele que a credencial lhe garante acesso.  
:::

Para **habilitar** o navegador embarcado, digite `sudo orbit proxy fajita`  
`--fajita-unblock-interface.` 

A saída do comando será como exibida abaixo:

```bash
$ sudo orbit proxy fajita --fajita-unblock-interface
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
```

Para **bloquear** a interface do navegador embarcado, digite `sudo orbit proxy fajita`  
`--fajita-block-interface.`

A saída do comando será como exibida abaixo:

```bash
$ sudo orbit proxy fajita --fajita-block-interface
The application services will be stopped or restarted during the process.
re you sure you want to proceed: y
```

## Determinar o nível de criptografia para o protocolo RDP

Para sistemas proxy que lidam com protocolo RDP, você pode determinar o nível de criptografia da conexão.  
As opções de criptografia são: `none|low|high|medium|fips` e devem ser passadas como parâmetro. Por exemplo, o comando `sudo orbit proxy fajita --rdp-encryption=low` vai setar a criptografia do proxy Fajita para `low` (baixa).

:::(info) (Info)  
É necessário reiniciar o proxy para que as alterações façam efeito.  
:::

```bash
$ sudo orbit proxy fajita --rdp-encryption=low
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false

$ sudo orbit proxy rdpgate --rdp-encryption=high
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

| Nível de criptografia | Descrição |
| ----- | ----- |
| `none` | Nenhuma criptografia é aplicada. Os dados são transmitidos de forma insegura, o que pode ser adequado apenas em redes internas seguras onde não há riscos de interceptação. |
| `low` | Criptografia básica é aplicada. Geralmente, isso significa que a criptografia é suficiente para proteger contra interceptações casuais, mas pode não ser forte o suficiente para proteger contra adversários determinados e com recursos. |
| `medium` | Fornece um nível intermediário de segurança de criptografia. É mais segura que a baixa, mas não oferece a proteção máxima possível. |
| `high` | Alta criptografia. Esse nível usa algoritmos e chaves mais fortes, proporcionando uma melhor segurança e sendo adequado para transmissões sensíveis e onde se espera uma maior exposição a potenciais interceptações. |
| `fips` | Criptografia compatível com FIPS (Federal Information Processing Standard). Isso geralmente se refere aos padrões exigidos por agências governamentais nos EUA para dispositivos e sistemas que usam criptografia. É o nível mais alto e mais rigoroso de criptografia indicado no comando. |

## Configurar o token WebService A2A

As chaves de autenticação WebService A2A dos sistemas proxy podem ser determinadas através dos argumentos `--api-cons` e `--api-token`. 

:::(info) (Info)  
É necessário reiniciar o proxy para que as alterações façam efeito.  
:::

O saída do comando `sudo orbit proxy fajita --api-cons=88122cce2d14d5cbd57f77c552e80843d97ff4be --api-token=b25abee1b365458a9d719608bda85f6eb4900885` será como exibida abaixo:

```bash
$ sudo orbit proxy fajita
  --api-cons=88122cce2d14d5cbd57f77c552e80843d97ff4be
  --api-token=b25abee1b365458a9d719608bda85f6eb4900885
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y

The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false
```

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).