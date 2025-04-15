This article will cover every plugin syntax and an example to be used and make it easy to understand its functionality.



---

## cURL

Executor for requests to simple web pages. Pages without JavaScript environment or HTML events. You can use this executor for legacy systems based on pure HTML4 architecture.

If you need to perform automation using web interface elements simulating real user actions, take a look at the HTTP executor.

By default, this plugin does not validate the SSL connection, and its default timeout is set to 10 seconds.



---

### Syntax

This plugin accepts commentary. For comments, use the sharp character '\#' at the beginning of the line.



| **Command** | Description |
| --- | --- |
| **set\-disable\-auth** | Do not consider user and password in request to supply HTTP Auth `set-disable-auth` |
| **set\-request\-header ”param” ”value”** | Sets a header parameter for HTTP request to be performed. `set-request-header ”mytoken”``”FF32C5E9AC1800A2”` |
| **set\-request\-param ”param” ”value”** | Configures any cURL[1](#fn1) parameter for the request to be made `set-request-param``”CURLOPT_ENCODING” ”ISO-8859-1”` |
| **set\-request\-content ”content”** | Determines the data content of the request. From this value is calculated the header Content\-length `set-request-content``”name=Peter&surname=McAlister”` |
| **set\-content\-type ”type”** | Determines the content definition header of the requisition. This value will be assigned to the header Content\-type: text/TYPE;charset\=”utf\-8” e Accept: text/TYPE. `set-content-type ”text”` |
| **set\-request\-method ”method”** | Determines the type of requisition that will be performed. Can be `post`, `put` and `delete` methods. Check RFC 7231 for more details. `set-request-method ”GET”` |
| **request ”URL”** | Realizes the request at the given URL `request ”https://www.google.com/”` |
| **expect ”string”** | Search for a text within the answer to the request. Fails if not found. Continue if found. `expect ”password changed!”` |
| **no\-expect ”string”** | Search for a text within the answer to the request. Continue if not found. Fails if found. `no-expect ”password change failed!”` |
| **set\-oauth2** | Implements the request authentication method in cURL, using Oauth2\.0\. Through "\[url\_token]" "\[client\_id]"  "\[client\_secret]" data, senhasegura makes the call to collect the Oauth2\.0 access token and uses this access token to make the request in cURL. |

#### Request example \- Creation of credential with authorization in Oauth2\.0 to send data to another application

Replace the field values below according to the requested information.



| **Item** | **Description** |
| --- | --- |
| url\_token | Application URL for collecting the Oauth2\.0 token. |
| client\_id and client\_secret | Oauth2\.0 authorization data. |
| target\_endpoint | Target application URL. |

TextText
```
set-request-method "POST"
set-oauth2 "[url_token]" "[client_id]" "[client_secret]"
set-request-header Content-type application/json
set-request-content "{\"username\": \"[#USERNAME#]\", \"content\": \"[#NEW_PASSWORD#]\", \"hostname\": \"[#HOSTNAME#]\", \"ip\": \"localhost\"}"
request "[target_endpoint]"
expect "Credential updated successfully"
```
Copy  




---

### Example

**HTTP password change with token header**

TextText
```
set-request-header "X-INTRANET-TOKEN" "FF32C5E9AC1800A2"
set-request-param "username" "[#AUTH_USER#]"
set-request-param "password" "[#AUTH_PASSWORD#]"
set-request-param "tgt_user" "[#USERNAME#]"
set-request-param "tgt_npassword" "[#NEW_PASSWORD#]"

set-request-method "POST"

expect "1200-OK"

no-expect "9999-NOK"

```
Copy

---

## HTTP

Executor for requests to complex web pages where more interactivity using JavaScript elements and event triggers are required.



---

### Syntax



| **Command** | Description |
| --- | --- |
| **start\-at url** | Indicates the initial url of the desired page. This command should be at the template begin.`start-at https://www.senhasegura.com/` |
| **timeout milliseconds** | Milliseconds total duration of the process as a whole. This command should be at the template begin.`timeout 3000` |
| **useragent string** | Specifies which useragent will be used during password change. By default it will use *Mozilla/5\.0 (Windows NT 10\.0; Win64; x64\) AppleWebKit/537\.36 (KHTML, like Gecko) Chrome/85\.0\.4183\.102 Safari/537\.36*. This command should be at the template begin.`useragent senhasegura-executor` |
| **new\-action** | Indicates that a new group of actions will begin.A group of actions is composed of all actions performed for a page submit.`new-action` |
| **set\-location url** | Redirects the executor to the indicated URL.`set-location https://mysystem.local/admin/login.php` |
| **test\-location string** | Validate the current URL against the provided string. The given string can be just a piece of the entire URL. Stops the process if false.`test-location /admin/login.php` |
| **log string** | Register a log message. Use for identifying the steps into the execution log.`log Starting authentication steps` |
| **test\-selector selector** | Perform a test on a selector similar to jQuery selectors. If it does not find the element, it interrupts the process as failed.`test-selector input#username` |
| **fill selectordata** | Fills the element returned by the selector with the indicated value.`fill input#username #USERNAME#` |
| **click selector** | Triggers the event by clicking on the DOM element returned by the selector.`click inputtype=button#login` |
| **jclick selector** | Triggers the event click on the element returned by the selector.`jclick inputtype=button#login` |
| **offset xy** | Creates a positioning offset to adjust the `really-click` and `really-fill` commands. |
| **really\-click selector** | Triggers one external click on the page. Just like a user does. Use the `offset` command to adjust the element coordinate.`really-click inputtype=button#login` |
| **really\-fill selectordata** | Fills the element returned by the selector with the indicated value through user input simulation. The element will be clicked using `really-click` command before being filled. Use the `offset` command to adjust the element coordinate.`really-fill input#username #USERNAME#` |
| **prop selectorpropertyvalue** | Change an element property. Normally used when some CSS class or DOM element made a `really-fill` or `really-click` action hard to be performed.`prop input#agreement enabled true` |
| **test\-visible selector** | Test if element is visible for the user. Interrupt the operation if it is not visible.`test-visible div#alert.success` |
| **test\-not\-visible selector** | Test if element is invisible. Interrupt the operation if it is visible.`test-not-visible div#alert.failure` |
| **sleep milliseconds** | Wait for the milliseconds specified between one action and another.`sleep 1000` |
| **jscript jscode** | JavaScript script code to execute into the current rendered page. Use with caution.`jscript $(’inputtype=checkbox’).prop(’checked’, true);` |

CautionThe `sleep` command inserts a wait action so the current action is resumed and a new action is generated with the next command (after the wait period).



---

### Example

**Amazon AWS console password change**

TextText
```
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
Copy

---

## LDAP

This plugin can be used to interact even to Microsoft Active Directory or OpenLDAP servers.



---

### Syntax



| **Command** | Description |
| --- | --- |
| **connect null ”target”** | It connects to the requested destination. If not informed, connects to the device linked to the credential.`connect` |
| **find ”dn” ”filter”** | Locates the single entry to be manipulated`find ”o=MyCompany,c=BR” ”(username=user01)”` |
| **mod\-add ”param” ”value”** | Add an attribute to the entry. Depends on whether the command `find` has already been successfully executed.`mod-add ”memberuid” ”username”` |
| **mod\-del ”param” ”value”** | Remove an attribute from the entry. Depends on whether the command `find` has already been successfully executed.`mod-del ”memberuid” ”username”` |
| **mod\-replace ”param” ”value”** | Replaces an attribute with the entry. Depends on whether the command `find` has already been successfully executed.`mod-replace ”memberuid” ”username”` |
| **bind ”dn”** | Performs server authentication`bind ”uname”` |
| **set\-option ”param” ”value”** | Determines the value of a property in the LDAP connection. See PHP LDAP[1](#fn1) to the pick list.`set-option ”LDAP_OPT_PROTOCOL_VERSION” ”3”` |



---

### Examples

**Domain user password change at Microsoft Active Directory**

TextText
```
## LDAP protocol version
set-option LDAP_OPT_PROTOCOL_VERSION 3

bind "cn=[#AUTH_USER#],CN=Users,DC=senhasegura,DC=local"


the name of the user
find "DC=senhasegura,DC=local" "(&(objectClass=user)
(sAMAccountName=[#USERNAME#]))"

mod-replace unicodePwd "u([#NEW_PASSWORD#])"

```
Copy

---

**User account activation**

TextText
```
## LDAP protocol version
set-option LDAP_OPT_PROTOCOL_VERSION 3
set-option LDAP_OPT_REFERRALS 3

bind "CN=[#AUTH_USER#],CN=Users,DC=senhasegura,DC=local"

find "DC=senhasegura,DC=local" "(&(objectClass=user) (sAMAccountName=[#USERNAME#]))"

mod-replace userAccountControl 512

```
CopyinfoTo find the `DistinguishedName` of your server access the area of ***Advanced Features*** and follow the steps:

1. Click on ***View*** and then on ***Advanced Features***.
2. With the complete view of user attributes, click on ***User Properties***.
3. Go to the attribute editor tab and find the `DistinguishedName` among the information.


---

## SSH

### Syntax

This plugin accept commentary. For comments use the sharp character '\#' at the beginning of the line.



| **Command** | Description |
| --- | --- |
| **set\-ssh\-version \[1]** | Determines the version of SSH to be used. By default it will use the 2\.`set-ssh-version 2` |
| **set\-new\-line\-mode \[unixwindowsmac]** | Send command character. By default it will use `unix`.`set-new-line-mode unix` |
| **set\-read\-timeout \[seconds]** | Time in seconds for command reading `read` timeout. By default will use 5 seconds.`set-read-timeout 5` |
| **set\-connect\-timeout \[seconds]** | Time in seconds for connectivity timeout. By default it will use 5 seconds.`set-connect-timeout 5` |
| **exec ”string”** | Executes the command on the remote device`exec ”passwd myuser”` |
| **write ”string”** | Write the string to the remote device. The end of line character will not be sent. |
| **read ”string”** | Locates the text provided in the connection output. Does not accept regular expressions.`read ”New password:”` |
| **expect ”string”** | Locates the text provided in the connection output, allowing the use of the wildcard character ’\*’ for expansive searches. |
| **expect\-regex** | Locates the text through a regular expression.`read ”[nN]ew password:”` |
| **sleep ”seconds”** | Waits for the script to run within the given seconds`sleep 10` |
| **no\-expect** | Search for an expression to irrigate within the response to the request. Continue if you can’t find it. Fails if found.`no-expect ”password change failed!”` |
| **end** | Closes the connection to the target server`end` |



---

### Examples

**Linux user password change**

TextText
```
## Put the language in English
expect "*#"
exec "export LC_ALL=C"

expect "*#"
exec "passwd [#USERNAME#]"

expect "*password:"
exec "[#NEW_PASSWORD#]"

expect "*password:"
exec "[#NEW_PASSWORD#]"

expect "*updated successfully"

```
Copy

---

**Apache htpasswd password change**

TextText
```
expect "*#"
exec "htpasswd -bm /etc/htpasswd/.htpasswd [#USERNAME#] [#NEW_PASSWORD#]"

expect "*Updating"
expect "*#"
exec "exit"

end

```
Copy

---

**Apache Tomcat password change**

TextText
```
## Changing tomcat-users.xml user entry
expect "*#"
exec "sed -i 's/<user username="[#USERNAME#]" password="[#CURRENT_PASSWORD#]"/<user username="[#USERNAME#]" password="[#NEW_PASSWORD#]"/' /etc/tomcat/tomcat-users.xml"

expect "*#"
exec "cat /etc/tomcat/tomcat-users.xml | grep 'username="[#USERNAME#]" password'"
expect "*[#NEW_PASSWORD#]*"

expect "*#"
exec "service tomcat restart"

expect "*#"
exec "exit"
end

```
Copy

---

**Red Hat JBoss Application Vault**

TextText
```
expect "*#"
exec "/opt/wildfly/bin/vault.sh --enc-dir /opt/vault --keystore /opt/vault.keystore --keystore-password VaultK --salt $(shuf -i 10000000-99999999 -n 1) --iteration $(shuf -i 10-99 -n 1) --alias vault --vault-block [#ADD_INFO#] --attribute [#USERNAME#] --sec-attr [#NEW_PASSWORD#]"

expect "Please make note of the following:"
expect "*#"
exec "exit"

end

```
Copy

---

## SSH Legacy

### Syntax

This plugin accept commentary. For comments use the sharp character '\#' at the beginning of the line.



| **Command** | Description |
| --- | --- |
| **write "command"** | Forwards the command execution to the target server`write ”passwd myuser”` |
| **exec ”command”** | Same as the `write` |
| **read ”string”** | Search for a text within the answer to the request. Fails if not found. Continue if found.`read ”password updated successfully”` |
| **expect ”string”** | Same as the `read` |
| **expect\-regex** | Same as the `read` |
| **not\-expect ”string”** | Search for a text within the answer to the request. Continue if not found. Fails if found.`password unchanged` |



---

### Example

**Legacy Linux password change**

TextText
```
## Request password change
expect "*$"
exec "sudo passwd [#USERNAME#]"

expect "*:"
exec "[#AUTH_PASSWORD#]"

expect "*password:"
exec "[#NEW_PASSWORD#]"

expect "*password:"
exec "[#NEW_PASSWORD#]"

expect "*successfully"

```
Copy

---

## Telnet

### Syntax



| **Command** | Description |
| --- | --- |
| **set\-username\-prompt ”string”** | Determines which user prompt pattern to locate. The search value is a simple text. It is not a regular expression.`set-username-prompt ”Username:”` |
| **set\-password\-prompt ”string”** | Determines which password prompt pattern to locate. The search value is a simple text. It is not a regular expression.`set-password-prompt ”Password:”` |
| **set\-new\-line\-mode \[unixwindowsmac]** | Determines which breakline system must use.`set-new-line-mode ”unix”` |
| **set\-no\-authenticate** | Configures the executor to skip authentication step`set-no-authenticate` |
| **send ”command”** | Sends the command to the target server without inserting the line break character automatically at the end.`send ”passwd”` |
| **exec ”command”** | Sends the command to the target server by entering the line break character at the end. |
| **expect ”pattern”** | Wait for the desired text to appear.`expect ”changed!”` |
| **end** | Closes the connection to the target server.`end` |



---

### Example

**3com Switch 5500 Family**

TextText
```
## Waiting username
expect "*:"
exec "[#USERNAME#]"

expect "*:"
exec "[#CURRENT_PASSWORD#]"

expect "*>"
exec "system-view"

expect "*]"
exec "local-user [#USERNAME#]"

expect "*]"
exec "password cipher [#NEW_PASSWORD#]"

expect "*]"
exec "quit"

expect "*]"
exec "quit"

expect "*>"
exec "quit"

```
Copy

---

## Windows RM

The target device needs Microsoft®Windows®Remote Management connectivity enabled and authorized.

### Syntax



| **Command** | Description |
| --- | --- |
| **!unsecure** | Determines the use of unsafe prototype for change.`!unsecure` |
| **!reload\-password** | Forces the replacement of the current password with the new password value.`!reload-password` |
| **!sleep seconds** | Wait for the determined number of seconds to execute the next command.`!sleep 30` |
| **!change\-password** | Requests the execution of password change of the target user of this automation.`!change-password` |
| **powershell cmd** | Executes the powersheel command on the remote server.`powershell Set-ADAccountPassword -Identity``[#username#] -Reset -NewPassword (ConvertTo-SecureString``-AsPlainText ”[#NEW_PASSWORD#]” -Force)` |



---

### Examples

**Devices that have Windows RM over HTTPS**

TextText
```
## change user password
!change-password

```
Copy

---

**Devices that have Windows RM over HTTP**

TextText
```
!unsecure

!change-password

```
Copy

---

**Password change in configuration file via PowerShell**

TextText
```
powershell (Get-Content .Desktop\Web.config) | Foreach-Object {$_
-replace 'password=([^;"]+)','password=[#NEW_PASSWORD#]'} |
Set-Content .Desktop\Web.config

```
Copy

---

**COM\+ Application password change using PowerShell**

TextText
```
## Change user password
!change-password

powershell $comAdmin = New-Object -com ("COMAdmin.COMAdminCatalog.1")[nl]$applications = $comAdmin.GetCollection("Applications")[nl]$applications.Populate()[nl]foreach ($application in $applications)[nl]{[nl]$appName = $application.Value("Name")[nl]$appIdentity = $application.Value("Identity")[nl]if ($appIdentity -eq "[#ADD_INFO#]\[#USERNAME#]") {[nl]$application.Value("Password") = "[#NEW_PASSWORD#]"[nl]$comAdmin.ShutdownApplication($appName)[nl]$applications.SaveChanges()[nl]$comAdmin.StartApplication($appName)[nl]}[nl]}

```
Copy

---

**Windows Autologon password change using PowerShell**

TextText
```
## Change user password
!change-password

powershell $RegPath = "HKLM:\SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon"[nl]
Set-ItemProperty $RegPath "AutoAdminLogon" -Value "1" -type String[nl]
Set-ItemProperty $RegPath "DefaultDomain" -Value "[#DOMAIN#]" -type String[nl]
Set-ItemProperty $RegPath "DefaultUsername" -Value "[#USERNAME#]" -type String[nl]
Set-ItemProperty $RegPath "DefaultPassword" -Value "[#PASSWORD#]" -type String

```
Copy

---

**IIS Website Application Pool**

TextText
```
## Change user password
!change-password

C:\Windows\System32\inetsrv\appcmd.exe set config /section:applicationPools /"[name='[#ADD_INFO#]']".processModel.identityType:SpecificUser /"[name='[#ADD_INFO#]']".processModel.userName:[#USERNAME#] /"[name='[#ADD_INFO#]']".processModel.password:[#NEW_PASSWORD#]

```
Copy

---

## Windows RPC

The target device needs Microsoft®Windows®RPC connectivity enabled and authorized.

### Syntax

This executor accept ***any Microsoft®Windows®RPC command***, plus some senhasegura Microsoft®Windows®RPC Executor commands starting with exclamation.



| **Command** | Description |
| --- | --- |
| **!netsmb\-password** | Requests the execution of password change of the target user of this automation.`!netsmb-password` |
| **!reload\-password** | Forces the replacement of the current password with the new password value.`!reload-password` |
| **!sleep seconds** | Wait for the determined number of seconds to execute the next command.`!sleep 30` |



---

### Examples

**Changing a domain user password**

TextText
```
## Changing account using executor command alias
!netsmb-password


```
Copy

---

**Local user password and update a local user Windows Task account password**

TextText
```
## Change password
net user [#USERNAME#] [#NEW_PASSWORD#]

!sleep 3

schtasks /Change /RU [#USERNAME#] /RP [#NEW_PASSWORD#] /TN Defrag

```
Copy

---

\*\*Local user password and update a Windows Service account password \*\*

TextText
```
## Change password
net user [#USERNAME#] [#NEW_PASSWORD#]

!sleep 3

sc config [#ADD_INFO#] obj= [#USERNAME#] password= [#NEW_PASSWORD#]

```
Copy

---

## MySQL

### Syntax

You can execute any MySQL administration query, or even queries targeting databases.

You can also call MySQL functions or specific databases functions. The only limitation is to call or create stored procedures.



---

### Example

**User password change**

TextText
```
ALTER USER '[#USERNAME#]'@'[#ADD_INFO#]' IDENTIFIED BY '[#NEW_PASSWORD#]';
FLUSH PRIVILEGES;

```
Copy

---

## Oracle

### Syntax

You can execute any Oracle administration query or even queries targeting databases.

You can also call Oracle functions or specific databases functions. The only limitation is to call or create stored procedures.



---

### Example

**User password change**

TextText
```
CONN [#USERNAME#]@[#ADD_INFO#]
ALTER USER [#USERNAME#] IDENTIFIED BY [#NEW_PASSWORD#]

```
Copy

---

## PostgreSQL

### Syntax

You can execute any PostgreSQL administration query or even queries targeting databases.

You can also call PostgreSQL functions or specific databases functions. The only limitation is to call or create stored procedures.



---

### Example

**User password change**

TextText
```
ALTER USER [#USERNAME#] WITH PASSWORD '[#NEW_PASSWORD#]';

```
Copy

---

## SQL Server

### Syntax

You can execute any SQL Server administration query, or even queries targeting databases.

You can also call SQL Server functions or specific databases functions. The only limitation is to call or create stored procedures.



---

### Example

**User password change**

TextText
```
ALTER LOGIN [#USERNAME#] WITH PASSWORD = '[#NEW_PASSWORD#]' OLD_PASSWORD = '[#CURRENT_PASSWORD#]' UNLOCK;

```
Copy

---

## Tk Expect

This plugin use the TK Expect binary to interact using a powerful stdout interpreter.

:::(info) (info) Tk Expect plugins  
You can use the following plugins in your Tk Expect template:

* [SQL\*Plus](https://docs.oracle.com/cd/E11882_01/server.112/e41085/sqlqraa001.htm#SQLQR985)
* [TDS](https://en.wikipedia.org/wiki/Tabular_Data_Stream) (Tabular Data Stream)
* SSH
* Telnet  
:::



---

### Syntax

You can use the native [TK Expect](https://www.tcl.tk/man/expect5.31/expect.1.html) manual to create your script.



---

### Examples

**IBM AS400 password change**

TextText
```
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
Copy

---

**Sybase select**

TextText
```
use tds
env "TDSVER" "5.0"
 
exec "SELECT CAST(GETDATE() AS DATE)"
exec "go"
 
expect "affected"

```
Copy

---

## VMWare ESXi

This plugin will interact over the VMWare ESXi administrative console binary ***esxcli***.



---

### Syntax

The original `esxcli` command syntax should be used.



---

### Example

**Setting a user password**

TextText
```
system account set -i '[#USERNAME#]' -p '[#NEW_PASSWORD#]' -c '[#NEW_PASSWORD#]'

```
Copy

---

## x3270: IBM Terminal Emulator

Executor for mainframes IBM 3270\. You can interact over mainframe application interfaces interpreting its design.



---

### Syntax

Some of the [linux x3270](http://x3270.bgp.nu/) commands was replaced by executor aliases to make the senhasegura integration secure and easy.



| **Command** | Description |
| --- | --- |
| **timeout \[seconds]** | Some mainframes connections, or some actions, can get stuck. To avoid this situation you can configure the timeout seconds. This timeout is the maximum elapsed time the entire operation can take. By default its configured to 5 seconds.This command should be used before `connect` command. `timeout 300` |
| **sleep \[seconds]** | Sleep by the given seconds. Use this command if you need to wait the mainframe perform some action. This sleep will not be sent to the mainframe.`sleep 3` |
| **echo \[string]** | Echo a string into the executor operation logs. This echoed message will not be sent to the mainframe.`echo Starting authentication step` |
| **connect** | Will perform the mainframe connection to start the interaction step, resulting into a `Connect` action.`connect` |
| **search \[data] \[x,y,r,c]** | Will lookup the rendered mainframe application for the given coordinate and compare with the give data string. If will stop the execution with failure status if it’s not equal.The coordinate should be composed by 4 position variables.The command will be translated to `Ascii` action.\* ***x:*** Starting row number starting by 0; |

* ***y:*** Starting char column starting by 0;
* ***r:*** Number of rows to be returned starting by 1;
* ***c:*** Number of columns to be returned starting by 1;`search SUCCESSFUL 10,17,1,10` \|  
\| **search\_not \[data] \[x,y,r,c]** \| Similar to `search`. But will failure if the give string have been found.`search_not FAILURE 10,17,1,7` \|  
\| **send \[data]** \| Input some data to target application. This command can accept string escapes sequences.The command will be translated to `String()` action.`send T01281\t2918\r` \|  
\| **screenshot** \| Will log into the executor operation log the entire rendered ASCII screen (24x80 terminal only).`screenshot` \|  
\| **disconnect** \| Will perform a mainframe connection shutdown.The command will be translated to `Disconnect()` action.`disconnect` \|



---

### Example

**Password change into mainframe application**

TextText
```
timeout 350


echo Starting connection

connect

sleep 3

echo Performing login
search USER: 20,2,1,5

send [#USERNAME#]\t[#CURRENT_PASSWORD#]\r

echo Result screen
screenshot


search USER: [C] CHANGE PASSWORD 10,5,1,19

send C\r[#NEW_PASSWORD#]\t[#NEW_PASSWORD#]\r

search_not FAILURE 12,70,1,7
search SUCCESS 12,70,1,7

echo Result screen
screenshot

disconnect

```
Copy  


