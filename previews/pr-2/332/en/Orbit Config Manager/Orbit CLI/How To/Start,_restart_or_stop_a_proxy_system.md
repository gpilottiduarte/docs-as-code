Proxy system configurations can be performed using the `orbit proxy` command. Each proxy has particularities, so some arguments affect only some systems.


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
## Start, restart or stop a proxy system

Use the `start`, `stop` and `restart` commands to control the status of proxy systems. Use the `status` command to see the current status of the service.


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
## List active settings

To list the configuration of each proxy system, use the `–show` an argument for each system.


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
## Change the language

To change the language of a proxy system, use the `–language` argument. Restart the proxy after configuration.


```
mt4adm@vmdf-giskard:~$ sudo orbit proxy fajita --language="en_US"
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false

```
## Enable the use of Automated SUDO

CautionThis feature is only available for proxies.

Activation in one system is not reflected in the other.

The segregation of this functionality through the web interface concerns the use of the session within the security criteria of access groups, devices, and credentials. But if the functionality is inactive in the proxy system, the user will be unable to perform the independent automated lifting if he has the necessary permission.

Use the `–enable-sudo` an argument for allowing the use of automated SUDO in the senhasegura Web Proxy or senhasegura Terminal Proxy proxies. Restart the proxy after configuration.


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
## Block and Enable the embedded browser interface

The embedded browser that allows proxy access to web pages can have its interface blocked or enabled for users.

CautionBy enabling the interface, users can open new tabs and access other systems besides the one to which the credential grants access.


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
## Determine the RDP encryption level

For proxy systems dealing with RDP protocol, you can determine the encryption level of the connection. Restart the proxy after configuration.


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
## Set up the WebService A2A token for a system

The WebService A2A authentication keys to the proxy systems can be determined through the arguments `–api-cons` and `–api-token`. Restart the proxy after configuration.


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
