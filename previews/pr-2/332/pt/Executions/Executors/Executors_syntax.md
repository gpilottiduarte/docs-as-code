# Executors syntax

Este artigo abordará cada sintaxe de plugin e um exemplo a ser usado que facilitará o entendimento de sua funcionalidade.

---

## cURL

Executor de requisições para páginas web simples. Páginas sem ambiente JavaScript ou eventos HTML. Você pode usar este executor para sistemas legados baseados na arquitetura HTML4 pura.

Se você precisar realizar uma automação usando elementos de interfaces web simulando ações reais do usuário, dê uma olhada no executor HTTP.

Por padrão, este plugin não valida a conexão SSL e seu tempo limite padrão é de 10 segundos.

---

### Sintaxe

Este plugin aceita comentários. Para comentários, use o caractere sustenido '#' no início da linha.

| **Comandos** |  Descrição |
| --- | --- |
| **set-disable-auth** | Não considera usuário e senha na requisição para fornecer HTTP Auth `set-disable-auth` |
| **set-request-header ”param” ”value”** | Estabelece um parâmetro header para a requisição HTTP ser realizada. `set-request-header ”mytoken”``”FF32C5E9AC1800A2”` |
| **set-request-param ”param” ”value”** | Configura quaisquer parâmetros cURL[1](#fn1) para a requisição realizada `set-request-param``”CURLOPT_ENCODING” ”ISO-8859-1”` |
| **set-request-content ”content”** | Determina o conteúdo dos dados da requisição. Desse valor é calculado o Content-lenght header. `set-request-content``”name=Peter&surname=McAlister”` |
| **set-content-type ”type”** | Determina a header de definição de conteúdo da requisição. Esse valor será atribuído ao Content-type header: text/TYPE;charset=”utf-8” e Accept: text/TYPE.`set-content-type ”text”` |
| **set-request-method ”method”** | Determina o tipo de requisição que será realizada. Podendo ser os metodos `post`, `put` and `delete`. Confira RFC 7231 para mais detalhes.`set-request-method ”GET”` |
| **request ”URL”** | Realiza a requisição na URL fornecida`request ”https://www.google.com/”` |
| **expect ”string”** | Busca por um texto na reposta à requisição. Falhará, caso não encontrado. .`expect ”password changed!”` |
| **no-expect ”string”** | Busca por um texto na resposta à requisição. Falhará, caso encontrado.`no-expect ”password change failed!”` |---1. https://www.php.net/manual/en/function.curl-setopt.php[↩︎](#fnref1)
|**set-oauth2**|Implementa o método de autenticação de requisições em cURL, utilizando Oauth2.0. Por meio dos dados de `"[url_token]" "[client_id]" "[client_secret]"`, o senhasegura realiza a chamada de coleta do token de acesso Oauth2.0 e utiliza esse token de acesso para realizar a requisição em cURL.|

#### Exemplo de requisição - Criação de credencial com autorização em Oauth2.0 para enviar dados a outra aplicação
Substitua os valores dos campos abaixo conforme as informações necessárias.

**Item**|**Descrição**
|---|---|
`url_token`|URL da aplicação para coleta do token Oauth2.0.
`client_id` e `client_secret`|dados da autorização Oauth2.0.
`endpoint_destino`|URL da aplicação de destino.

```bash
set-request-method "POST"
set-oauth2 "[url_token]" "[client_id]" "[client_secret]"
set-request-header Content-type application/json
set-request-content "{\"username\": \"[#USERNAME#]\", \"content\": \"[#NEW_PASSWORD#]\", \"hostname\": \"[#HOSTNAME#]\", \"ip\": \"localhost\"}"
request "[endpoint_destino]"
expect "Credential updated successfully"
```


---

### Exemplo

**Alteração de senha HTTP com cabeçalho**

```text
set-request-header "X-INTRANET-TOKEN" "FF32C5E9AC1800A2"
set-request-param "username" "[#AUTH_USER#]"
set-request-param "password" "[#AUTH_PASSWORD#]"
set-request-param "tgt_user" "[#USERNAME#]"
set-request-param "tgt_npassword" "[#NEW_PASSWORD#]"

set-request-method "POST"

## If 7 bytes string 1200-OK returns, the password change was accepted
expect "1200-OK"

## If 7 bytes string 9999-NOK returns, the password change has failure
no-expect "9999-NOK"
```

---

## HTTP

Executor para solicitações a páginas web complexas, onde é necessária mais interatividade, usando elementos JavaScript e acionadores de eventos.

---

### Syntax

| **Comando** |  Descrição |
| --- | --- |
| **start-at url** | Indica a URL inicial da página desejada. Este comando deve estar no início do template.`start-at https://www.senhasegura.com/` |
| **timeout milliseconds** | Duração total do processo em milisegundos. Este comando deve estar no início do template.`timeout 3000` |
| **useragent string** | Especifica qual agente usuário será utilizado durante a alteração de senha. Por padrão, será utilizado *Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.102 Safari/537.36*. Este comando deve estar no início do template.`useragent senhasegura-executor` |
| **new-action** | Indica que um novo grupo de ações iniciará. Um grupo de ações é composto por todas as ações realizadas para a submissão de uma página.`new-action` |
| **set-location url** | Redireciona o executor para a URL indicada.`set-location https://mysystem.local/admin/login.php` |
| **test-location string** | Valida a URL atual frente a string fornecida. A string em questão pode ser somente um componente de toda a URL. Caso falso, o processo é interrompido.`test-location /admin/login.php` |
| **log string** | Registra uma mensagem log. Utilize para identificar os passos na execução log.`log Starting authentication steps` |
| **test-selector selector** | Realiza um teste em um seletor similar aos seletores jQuery. Caso o elemento não seja encontrado, o processo será interrompido e processado como falho.`test-selector input#username` |
| **fill selectordata** | Preenche o elemento devolvido pelo seletor com o valor indicado.`fill input#username #USERNAME#` |
| **click selector** | Aciona o evento clicando no elemento DOM devolvido pelo seletor.`click inputtype=button#login` |
| **jclick selector** | Aciona o evento clicando no elemento devolvido pelo seletor.`jclick inputtype=button#login` |
| **offset xy** | Cria um posicionamento offset para ajustar os comandos `really-click` e `really-fill`. |
| **really-click selector** | Aciona um click externo na página, assim como um usuário o faz. Utilize o comando `offset` para ajustar a coordenada do elemento.`really-click inputtype=button#login` |
| **really-fill selectordata** | Preenche o elemento devolvido pelo seletor com o valor indicado através da simulação de input do usuário. O elemento será clicado utilizando o comando `really-click` antes de ser preenchido. Utilize o comando `offset` para ajustar a coordenada do elemento.`really-fill input#username #USERNAME#` |
| **prop selectorpropertyvalue** | Troca a propriedade de um elemento. Utilizado quando algum CSS ou elemento DOM realizou uma ação `really-fill` or `really-click` de difícil execução.`prop input#agreement enabled true` |
| **test-visible selector** | Testa se os elementos são visíveis ao usuário. A operação é interrompida caso os elementos não sejam visíveis.`test-visible div#alert.success` |
| **test-not-visible selector** | Testa se os elementos são invisíveis ao usuário. A operação é interrompida caso eles sejam visíveis.`test-not-visible div#alert.failure` |
| **sleep milliseconds** | Aguarda, pelos milisegundos determinados, entre uma ação e outra.`sleep 1000` |
| **jscript jscode** | Código JavaScript para executar na atual página renderizada . Utilize com atenção .`jscript $(’inputtype=checkbox’).prop(’checked’, true);` |

:::(warning) (Atenção)
O comando `sleep` insere uma ação em espera, para que a ação em andamento seja concluída e uma nova ação seja gerada com o próximo comando de texto (após o período de espera).
:::

---

### Exemplo

**Alteração de senha Amazon AWS console**

```text
start-at https://console.aws.amazon.com/console/home
timeout 30000
user-agent "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"

new-action
sleep 4000
test-location /signin?redirect_uri
fill #resolving_input [#USERNAME#]
jclick #next_button
sleep 2000

new-action
fill #ap_password [#CURRENT_PASSWORD#]
click #signInSubmit-input

new-action
test-location /console/home
set-location https://signin.aws.amazon.com/updateaccount?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fbilling%2Fhome%23%2Faccount
sleep 2000

new-action
test-location /ap/cnep
jclick #cnep_1A_change_password_button-input

new-action
fill #ap_password [#CURRENT_PASSWORD#]
fill #ap_password_new [#NEW_PASSWORD#]
fill #ap_password_new_check [#NEW_PASSWORD#]
click #cnep_1D_submit_button-input

new-action
test-selector #message_success
```

---

## LDAP

Este plugin pode ser utilizado para interagir até mesmo com servidores Microsoft Active Directory ou OpenLDAP.

---

### Syntax

| **Comando** |  Descrição |
| --- | --- |
| **connect null ”target”** | Conecta ao destino requerido. Se não informado, irá se conectar com o dispositivo associado à credencial.`connect` |
| **find ”dn” ”filter”** | Localiza a entrada a ser manipulada `find ”o=MyCompany,c=BR” ”(username=user01)”` |
| **mod-add ”param” ”value”** | Adiciona um atributo à entrada. Depende se o comando `find` foi executado com sucesso.`mod-add ”memberuid” ”username”` |
| **mod-del ”param” ”value”** | Remove um atributo da entrada. Depende se o comando `find` foi executado com sucesso.`mod-del ”memberuid” ”username”` |
| **mod-replace ”param” ”value”** | Substitui um atributo com a entrada. Depende se o comando `find` foi executado com sucesso. `mod-replace ”memberuid” ”username”` |
| **bind ”dn”** | Realiza a autenticação do servidor `bind ”uname”` |
| **set-option ”param” ”value”** | Determina o valor de uma propriedade na conexão LDAP. Confira PHP LDAP[1](#fn1) para visualizar a pick list. `set-option ”LDAP_OPT_PROTOCOL_VERSION” ”3”` |---1. https://www.php.net/manual/en/ldap.constants.php[↩︎](#fnref1)

---

### Exemplos

**Alteração de dominíno da senha do usuário no Microsoft Active Directory**

```text
## LDAP protocol version
set-option LDAP_OPT_PROTOCOL_VERSION 3

## DistinguishedName of the user who will connect to the server
bind "cn=[#AUTH_USER#],CN=Users,DC=senhasegura,DC=local"

## Search the user in which the procedure will be done.

## The system will search in general scope for a user object that has
the name of the user
find "DC=senhasegura,DC=local" "(&(objectClass=user)
(sAMAccountName=[#USERNAME#]))"

## Update user password
mod-replace unicodePwd "u([#NEW_PASSWORD#])"
```

---

**Ativação da conta de usuário**

```text
## LDAP protocol version
set-option LDAP_OPT_PROTOCOL_VERSION 3
set-option LDAP_OPT_REFERRALS 3

## DistinguishedName of the user who will connect to the server
bind "CN=[#AUTH_USER#],CN=Users,DC=senhasegura,DC=local"

## Search the user in which the procedure will be done.
find "DC=senhasegura,DC=local" "(&(objectClass=user) (sAMAccountName=[#USERNAME#]))"

## Update account status
mod-replace userAccountControl 512
```

:::(info) (info)
Para localizar o `DistinguishedName` do servidor, acesse ***Advanced Features***  e siga os passos:
1.  Clique em ***View*** and then on ***Advanced Features***.
2.  With the complete view of user attributes, click on ***User Properties***.
3.  Go to the attribute editor tab and find the `DistinguishedName` among the information.
:::

---

## SSH

### Sintaxe

Este plugin aceita comentários. Para comentários, utilize o caracter '#' no início da linha.

| **Comando** |  Descrição |
| --- | --- |
| **set-ssh-version [1]** | Determina a versão SSH a ser utilizada. Por predefinição, utiliza. `set-ssh-version 2` |
| **set-new-line-mode [unixwindowsmac]** | Envia o caracter de comando. Por predefinição, utiliza `unix`.`set-new-line-mode unix` |
| **set-read-timeout [seconds]** | Tempo, em segundos, para a leitura de comando `read` pausar. A predefinição é de 5 segundos.`set-read-timeout 5` |
| **set-connect-timeout [seconds]** | Tempo, em segundos, para a conectividade pausar. A predefinição é de 5 segundos.`set-connect-timeout 5` |
| **exec ”string”** | Executa o comando no dispositivo remoto`exec ”passwd myuser”` |
| **write ”string”** | Escreva a string para o dispositivo remoto. O final da linha não será enviado |
| **read ”string”** | Localiza o texto fornecido na saída da conexão. Expressões regulares não são aceitas.`read ”New password:”` |
| **expect ”string”** | Localiza o texto fornecido na saída da conexão, permitindo o uso do caracter wildcard  ’*’  para buscas expansivas |
| **expect-regex** | Localiza o texto por meio de uma expressão regular. `read ”[nN]ew password:”` |
| **sleep ”seconds”** | Aguarda pela execução do script dentro do tempo estipulado `sleep 10` |
| **no-expect** | Busca por uma expressão para irrigar a resposta à requisição. Falhará, caso encontre. `no-expect ”password change failed!”` |
| **end** | Encerra a conexão com o servidor alvo `end` |

---

### Exemplos

**Alteração de senha para usuário Linux**

```text
## Put the language in English
expect "*#"
exec "export LC_ALL=C"

## Execute the password change for the user
expect "*#"
exec "passwd [#USERNAME#]"

## Fill in the new password
expect "*password:"
exec "[#NEW_PASSWORD#]"

## Confirm the new password
expect "*password:"
exec "[#NEW_PASSWORD#]"

## Validates if successfully changed
expect "*updated successfully"
```

---

**Alteração de senha Apache htpasswd**

```text
expect "*#"
exec "htpasswd -bm /etc/htpasswd/.htpasswd [#USERNAME#] [#NEW_PASSWORD#]"

expect "*Updating"
expect "*#"
exec "exit"

end
```

---

**Alteração de senha Apache Tomcat**

```text
## Changing tomcat-users.xml user entry
expect "*#"
exec "sed -i 's/<user username="[#USERNAME#]" password="[#CURRENT_PASSWORD#]"/<user username="[#USERNAME#]" password="[#NEW_PASSWORD#]"/' /etc/tomcat/tomcat-users.xml"

## Validating changing step
expect "*#"
exec "cat /etc/tomcat/tomcat-users.xml | grep 'username="[#USERNAME#]" password'"
expect "*[#NEW_PASSWORD#]*"

## Restarting tomcat
expect "*#"
exec "service tomcat restart"

## Finish the procedure
expect "*#"
exec "exit"
end
```

---

**Red Hat JBoss Application Vault**

```text
expect "*#"
exec "/opt/wildfly/bin/vault.sh --enc-dir /opt/vault --keystore /opt/vault.keystore --keystore-password VaultK --salt $(shuf -i 10000000-99999999 -n 1) --iteration $(shuf -i 10-99 -n 1) --alias vault --vault-block [#ADD_INFO#] --attribute [#USERNAME#] --sec-attr [#NEW_PASSWORD#]"

expect "Please make note of the following:"
expect "*#"
exec "exit"

end
```

---

## SSH Legacy

### Sintaxe

Este plugin aceita comentários. Para fazer comentários, utilize o caracter '#' no início da linha.

| **Comando** |  Descrição |
| --- | --- |
| **write "command"** | Encaminha o comando da excução para o servidor alvo. `write ”passwd myuser”` |
| **exec ”command”** | O mesmo para `write` |
| **read ”string”** | Busca por um texto na reposta para a requisição. Caso não encontre, falhará. `read ”password updated successfully”` |
| **expect ”string”** | O mesmo para `read` |
| **expect-regex** | O mesmo para `read` |
| **not-expect ”string”** |Busca por um texto na reposta para a requisição. Caso encontre, falhará. `password unchanged` |

---

### Exemplo

**Alteração de senha Legacy Linux**

```text
## Request password change
expect "*$"
exec "sudo passwd [#USERNAME#]"

## Fill in the sudo password
expect "*:"
exec "[#AUTH_PASSWORD#]"

## Fill in the new password
expect "*password:"
exec "[#NEW_PASSWORD#]"

## Confirm the new password
expect "*password:"
exec "[#NEW_PASSWORD#]"

## Validates if successfully changed
expect "*successfully"
```

---

## Telnet

### Sintaxe

| **Comando** |  Descrição |
| --- | --- |
| **set-username-prompt ”string”** | Determina qual padrão de prompt de usuário localizar. O valor de busca é um um texto simples, não uma expressão regular.`set-username-prompt ”Username:”` |
| **set-password-prompt ”string”** | Determina qual padrão de prompt de senha localizar. O valor de busca é um texto simples, não uma expressão regular.`set-password-prompt ”Password:”` |
| **set-new-line-mode [unixwindowsmac]** | Determina qual breakline o sistema deverá utilizar.`set-new-line-mode ”unix”` |
| **set-no-authenticate** | Configura o executor para ignorar a etapa de autenticação. `set-no-authenticate` |
| **send ”command”** | Envia o comando para o servidor alvo, sem inserir automaticamente o caractere da quebra de linha ao fim.`send ”passwd”` |
| **exec ”command”** | Envia o comando para o servidor alvo inserindo o caracter de quebra de linha ao fim. |
| **expect ”pattern”** | Aguarda pelo aparecimento do texto desejado.`expect ”changed!”` |
| **end** | Encerra a conexão com o servidor.`end` |

---

### Exemplo

**3com Switch 5500 Family**

```text
## Waiting username
expect "*:"
exec "[#USERNAME#]"

## Waiting password
expect "*:"
exec "[#CURRENT_PASSWORD#]"

## Enter system-view
expect "*>"
exec "system-view"

## Enter local user view
expect "*]"
exec "local-user [#USERNAME#]"

expect "*]"
exec "password cipher [#NEW_PASSWORD#]"

## Exit to user.
expect "*]"
exec "quit"

## Exit to system view.
expect "*]"
exec "quit"

expect "*>"
exec "quit"
```

---

## Windows RM

O dispositivo deve ter conectividade habilitada e autorizada no Microsoft®Windows®Remote Management.

### Sintaxe

| **Comando** |  Descrição |
| --- | --- |
| **!unsecure** | Determina o uso de protótipos inseguros para a troca.`!unsecure` |
| **!reload-password** |  Substitui a senha atual pelo novo valor de senha.`!reload-password` |
| **!sleep seconds** | Aguarda pelo tempo, estipulado em segundos, para realizar o próximo comando.`!sleep 30` |
| **!change-password** | Solicita a execução da troca de senha para o usuário alvo dessa automação.`!change-password` |
| **powershell cmd** | Executa o comando powershell no servidor remoto.`powershell Set-ADAccountPassword -Identity``[#username#] -Reset -NewPassword (ConvertTo-SecureString``-AsPlainText ”[#NEW_PASSWORD#]” -Force)` |

---

### Exemplos

**Dispositivos quem possuem Windows RM sobre HTTPS**

```text
## change user password
!change-password
```

---

**Dispositivos que possuem Windows RM sobre HTTP**

```text
!unsecure

## change user password
!change-password
```

---

**Ateração de senha na configuração de arquivo via PowerShell**

```text
powershell (Get-Content .Desktop\Web.config) | Foreach-Object {$_
-replace 'password=([^;"]+)','password=[#NEW_PASSWORD#]'} |
Set-Content .Desktop\Web.config
```

---

**Alteração de senha COM+ Application utilizando PowerShell**

```text
## Change user password
!change-password

## Replicate the new password into COM+ application
powershell $comAdmin = New-Object -com ("COMAdmin.COMAdminCatalog.1")[nl]$applications = $comAdmin.GetCollection("Applications")[nl]$applications.Populate()[nl]foreach ($application in $applications)[nl]{[nl]$appName = $application.Value("Name")[nl]$appIdentity = $application.Value("Identity")[nl]if ($appIdentity -eq "[#ADD_INFO#]\[#USERNAME#]") {[nl]$application.Value("Password") = "[#NEW_PASSWORD#]"[nl]$comAdmin.ShutdownApplication($appName)[nl]$applications.SaveChanges()[nl]$comAdmin.StartApplication($appName)[nl]}[nl]}
```

---

**Alteração de senha Windows Autologon utilizando PowerShell**

```text
## Change user password
!change-password

## Replicate the new password into Windows registry
powershell $RegPath = "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon"[nl]
Set-ItemProperty $RegPath "AutoAdminLogon" -Value "1" -type String[nl]
Set-ItemProperty $RegPath "DefaultDomain" -Value "[#DOMAIN#]" -type String[nl]
Set-ItemProperty $RegPath "DefaultUsername" -Value "[#USERNAME#]" -type String[nl]
Set-ItemProperty $RegPath "DefaultPassword" -Value "[#PASSWORD#]" -type String
```

---

**IIS Website Application Pool**

```text
## Change user password
!change-password

## Replicate the new password into IIS application pool
C:\Windows\System32\inetsrv\appcmd.exe set config /section:applicationPools /"[name='[#ADD_INFO#]']".processModel.identityType:SpecificUser /"[name='[#ADD_INFO#]']".processModel.userName:[#USERNAME#] /"[name='[#ADD_INFO#]']".processModel.password:[#NEW_PASSWORD#]
```

---

## Windows RPC

O dipositivo deve ter conectividade habilitada e autorizada com o Microsoft®Windows®RPC .

### Sintaxe

Este executor aceita qualquer comando ***Microsoft®Windows®RPC***, além de alguns comandos do senhasegura Microsoft®Windows®RPC Executor iniciando com exclamação.

| **Comando** |  Descrição |
| --- | --- |
| **!netsmb-password** | Requisita a execução da troca de senha do usuário alvo desta automação. `!netsmb-password` |
| **!reload-password** | Força a substituição da senha atual por um novo valor de senha.`!reload-password` |
| **!sleep seconds** | Aguarda, por um determinado número de segundos, para executar o próximo comando.`!sleep 30` |

---

### Exemplos

**Mudando o domínio da senha de um usuário**

```text
## Changing account using executor command alias
!netsmb-password

## You can also execute a native RPC command
## net user [#USERNAME#] [#NEW_PASSWORD#] /domain
```

---

**Senha de usuário local e atualizar senha de usuário local Windows Task**

```text
## Change password
net user [#USERNAME#] [#NEW_PASSWORD#]

## Waiting three seconds
!sleep 3

## Update password for "Defrag"
schtasks /Change /RU [#USERNAME#] /RP [#NEW_PASSWORD#] /TN Defrag
```

---

**Senha de usuário local e atualizar senha de conta Windows Service**

```text
## Change password
net user [#USERNAME#] [#NEW_PASSWORD#]

## Waiting three seconds
!sleep 3

sc config [#ADD_INFO#] obj= [#USERNAME#] password= [#NEW_PASSWORD#]
```

---

## MySQL

### Sintaxe

Você pode executar qualquer consulta de administração MySQL, ou ainda consultas a banco de dados.

Você pode executar funções MySQL ou funções específicas de bancos de dados. A unica limitação é executar ou criar procedimentos amrazenados.

---

### Exemplo

**Alterar senha de um usuário**

```text
ALTER USER '[#USERNAME#]'@'[#ADD_INFO#]' IDENTIFIED BY '[#NEW_PASSWORD#]';
FLUSH PRIVILEGES;
```

---

## Oracle

### Sintaxe

Você pode executar qualquer consulta de administração do Oracle, ou até mesmo outras pesquisas direcionadas a banco de dados.

Você também pode executar funções Oracle ou funções específicas de bancos de dados . A única limitação é executar ou criar procedimentos armazenados.

---

### Exemplo

**Alterar senha de um usuário**

```text
CONN [#USERNAME#]@[#ADD_INFO#]
ALTER USER [#USERNAME#] IDENTIFIED BY [#NEW_PASSWORD#]
```

---

## PostgreSQL

### Sintaxe

Você pode executar qualquer consulta de administração do PostgreSQL, ou até mesmo outras pesquisas direcionadas a banco de dados.

Você também pode executar funções PostgreSQL ou funções específicas de bancos de dados . A única limitação é executar ou criar procedimentos armazenados.

---

### Exemplo

**Alterar senha de um usuário**

```text
ALTER USER [#USERNAME#] WITH PASSWORD '[#NEW_PASSWORD#]';
```

---

## SQL Server

### Sintaxe

Você pode executar qualquer consulta de administração do SQL, ou até mesmo outras pesquisas direcionadas a banco de dados.

Você também pode executar funções SQL Server ou funções específicas de bancos de dados . A única limitação é executar ou criar procedimentos armazenados.

---

### Exemplo

**Alteração da senha de um usuário**

```text
ALTER LOGIN [#USERNAME#] WITH PASSWORD = '[#NEW_PASSWORD#]' OLD_PASSWORD = '[#CURRENT_PASSWORD#]' UNLOCK;
```

---

## Tk Expect

Este plugin utiliza o TK Expect binary para interagir por meio de um forte stdout interpreter.

:::(info) (Tk Expect plugins)
Você pode utilizar os plugins seguintes no Tk Expect template:
- [SQL*Plus](https://docs.oracle.com/cd/E11882_01/server.112/e41085/sqlqraa001.htm#SQLQR985)
- [TDS](https://en.wikipedia.org/wiki/Tabular_Data_Stream) (Tabular Data Stream)
- SSH
- Telnet
:::

---

### Sintaxe

Você pode utilizar o manual [TK Expect](https://www.tcl.tk/man/expect5.31/expect.1.html) para criar o seu próprio script.

---

### Exemplos

**Alteração de senha IBM AS400**

```text
use telnet script
expect {
    "User  . ." {
        send "[#USERNAME#]\t"
        exp_continue
    } "Password  . ." {
        send "[#CURRENT_PASSWORD#]\r\n"
        exp_continue
    } "Selection or command" {
        send "chgpwd\r\n"
        exp_continue
    } "Current password  . ." {
        send "[#CURRENT_PASSWORD#]\r\n"
        exp_continue
    } "New password  . ." {
        send "[#NEW_PASSWORD#]\r"
        exp_continue
    } "New password (to verify)" {
        send "[#NEW_PASSWORD#]\r"
        exp_continue
    } "Password changed successfully." {
        send "\r"
        exit 0
    } incorrect {
        send_user "FAILURE INCORRECT"
        exit 1
    } timeout {
        send_user "FAILURE TIMEOUT"
        exit 1
    } eof {
        send_user "FAILURE EOF"
        exit 1
    }
}
```

---

**Sybase select**

```text
use tds
env "TDSVER" "5.0"
 
exec "SELECT CAST(GETDATE() AS DATE)"
exec "go"
 
expect "affected"
```

---

## VMWare ESXi

Este plugin vai interagir sobre o VMWare ESXi console binário admnistrativo ***esxcli***.

---

### Sintaxe

A sintaxe de comando original `esxcli` deve ser utilizada.

---

### Exemplo 

**Configurar a senha de um usuário**

```text
system account set -i '[#USERNAME#]' -p '[#NEW_PASSWORD#]' -c '[#NEW_PASSWORD#]'
```

---

## x3270: IBM Terminal Emulator

Executor para mainframes IBM 3270. Você pode interagir com interfaces de aplicação mainframe pela interpretação do seu design.

---

### Sintaxe

Alguns dos comandos do [linux x3270](http://x3270.bgp.nu/) foram substituidos por aliases do executor para tornar a integração com o senhasegura fácil e segura.

| **Comando** |  Descrição |
| --- | --- |
| **timeout [seconds]** | Algumas conexões mainframes, ou algumas ações, podem travar. Para evitar esse tipo de situação você pode configurar os segundos do timeout. O timeout é o máximo de segundos que a operação pode tomar. Por padrão, o timeout é de 5 segundos. Este comando deve ser utilizado antes do comando `connect`. `timeout 300` |
| **sleep [seconds]** | Ativa Sleep por um determinado número de segundos. Utilize este comando se você necessita que o mainframe aguarde para realizar uma ação. O sleep não será enviado ao mainframe.`sleep 3` |
| **echo [string]** | Ecoa uma string nos logs de operação do executor. A mensagem ecoada não será enviada ao mainframe.`echo Starting authentication step` |
| **connect** | Realiza a conexão mainframe para dar início a etapa de interação, resultando em uma ação `Connect`.`connect` |
| **search [data] [x,y,r,c]** | Busca e compara as coordenadas e informação string fornecidas na aplicação mainframe renderizada. Caso não sejam iguais, a execução será interrompida com o status de falha.A coordenada deve ser composta por 4 posições variáveis. O comando será traduzido para a ação `Ascii`.



* ***x:*** Número da linha inicial començando por 0;
* ***y:***  Número da coluna char inicial começando por 0;
* ***r:*** Número de linhas a serem retornadas começando por 1;
* ***c:*** Número de colunas a serem retornadas começando por 1;`search SUCCESSFUL 10,17,1,10` |

| **search\_not [data] [x,y,r,c]** | Semelhante a `search`, mas irá falhar caso a string fornecida seja encontrada.`search_not FAILURE 10,17,1,7` |
| **send [data]** | Introduz informações na aplicação alvo. O comando pode aceitar sequências de escape de strings. O comando será traduzido para `String()` action.`send T01281\t2918\r` |
| **screenshot** | Registra a operação do executor e toda a tela ASCII renderizada (24x80 terminal only).`screenshot` |
| **disconnect** | Realiza o encerramento da conexão mainframe. O comando será convertido para `Disconnect()` action.`disconnect` |

---

### Exemplo

**Alteração de senha na aplicação mainframe**

```text
timeout 350

## AUTHENTICATION STEP ##############

echo Starting connection

connect

sleep 3

echo Performing login
search USER: 20,2,1,5

send [#USERNAME#]\t[#CURRENT_PASSWORD#]\r

echo Result screen
screenshot

## PASSWORD CHANGE STEP ##############

search USER: [C] CHANGE PASSWORD 10,5,1,19

send C\r[#NEW_PASSWORD#]\t[#NEW_PASSWORD#]\r

search_not FAILURE 12,70,1,7
search SUCCESS 12,70,1,7

echo Result screen
screenshot

disconnect
```