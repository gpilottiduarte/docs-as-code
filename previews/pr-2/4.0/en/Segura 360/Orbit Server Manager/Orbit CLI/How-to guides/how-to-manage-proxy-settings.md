# How to manage proxy settings

The proxy settings in Segura can be executed using the command `orbit proxy`. 

:::(info)(Info)  
Each proxy has its own peculiarities, so some of the parameters have a limited effect on the systems that support them.  
:::

## Help parameter

In the terminal, you'll find a brief explanation of the command parameters `orbit proxy`, just type `sudo orbit proxy --help.`

The output of the command will be as shown below:

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

## Start, restart, or stop proxies

You can manage proxies by performing actions such as stopping, restarting, and starting them. To do this, use the `start`, `stop`, or `restart` to check their status. For status information, use the `status`.

The output of each parameter will be as shown below:

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

## List active settings

Using the parameter `--show`, you can list each proxy's active setting`s`. Note that this command will only display the active settings for each proxy. 

The output of the command `sudo orbit proxy --show` will be as shown below:

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

## Change the language

To change the language of a proxy system, use the argument `--language`. As an additional parameter, you must pass the international code of the language you want to change to. For example, `pt_BR` for Brazilian Portuguese.

:::(info) (Info)  
You need to restart the proxy for the changes to take effect.  
:::

For example, the command `sudo orbit proxy --language=“en_US”` will change the language of the proxy to North American English. The output of the command will be as shown below:

```bash
$ sudo orbit proxy fajita --language="en_US"
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false
```

## Enable automated sudo use

:::(warning) (Caution)

- This option is only available for web proxies and terminal proxies.  
- Activation in one proxy isn’t reflected in the other.  
- The web interface, by segregating this functionality, ensures that the use of each session complies with the security criteria established for access groups, devices, and credentials. However, if this functionality is disabled on the proxy, this will prevent automated lifting from being carried out, even if the user has the necessary permissions.
:::

Use the `--enable-sudo` argument to enable automated use of the sudo command on the **Segura Web Proxy** or **Segura Terminal Proxy** proxies. To enable it, type `sudo orbit proxy <proxy> --enable-sudo=“true”` and to disable it, type `sudo orbit proxy <proxy> --enable-sudo=“false”`.

:::(info) (Info)  
You need to restart the proxy for the changes to take effect.  
:::

The output of the command `sudo orbit proxy <proxy> --enable-sudo=“false”` will be displayed as below:

```bash
$ sudo orbit proxy fajita --enable-sudo=false
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
The Consumer Key:        88122cce2d14d5cbd57f77c552e80843d97ff4be
The Token:               b25abee1b365458a9d719608bda85f6eb4900885
Access proxy language:   en_US
SUDO automation:         false
```

## Block and enable the embedded browser interface

The embedded browser, which allows proxy access to web pages, can have its interface blocked or enabled for users.

:::(warning) (Caution)  
Enabling the interface will allow users to open new tabs and access systems other than the one to which their credentials grant them access.  
:::

To enable the embedded browser, type `sudo orbit proxy fajita --fajita-unblock-interface`.

The output of the command will be as shown below:

```bash
$ sudo orbit proxy fajita --fajita-unblock-interface
The application services will be stopped or restarted during the process.
Are you sure you want to proceed: y
```

To block the embedded browser interface, type `sudo orbit proxy fajita`  
`--fajita-block-interface.`

The output of the command will be as shown below:

```bash
$ sudo orbit proxy fajita --fajita-block-interface
The application services will be stopped or restarted during the process.
re you sure you want to proceed: y
```

## Determine the encryption level for the RDP protocol

For proxy systems that handle the RDP protocol, you can determine the encryption level of the connection.  
The encryption options are: `none|low|high|medium|fips` and must be passed as a parameter. For example, the command `sudo orbit proxy fajita --rdp-encryption=low` will set the Fajita proxy's encryption to low.

:::(info) (Info)  
You need to restart the proxy for the changes to take effect.  
:::

```
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

| Encryption level | Description |
| ----- | ----- |
| `none` | No encryption is applied. Data is transmitted insecurely, which may only be suitable for secure internal networks where there is no risk of interception. |
| `low` | Basic encryption is applied. Generally, this means that encryption is sufficient to protect against casual interception but may not be strong enough to protect against determined and resourceful adversaries. |
| `medium` | It provides an intermediate level of encryption security. It's more secure than low but doesn't offer the maximum possible protection. |
| `high` | High encryption. This level uses stronger algorithms and keys, providing better security and being suitable for sensitive transmissions where greater exposure to potential interception is expected. |
| `fips` | FIPS-compliant encryption (Federal Information Processing Standard). This generally refers to the standards required by government agencies in the USA for devices and systems that use encryption. It's the highest and strictest level of encryption indicated in the command. |

## Configuring the A2A WebService token

The A2A WebService authentication keys of the proxy systems can be determined using the arguments `--api-cons` e `--api-token`. 

:::(info) (Info)  
You need to restart the proxy for the changes to take effect.  
:::

The output of the command `sudo orbit proxy fajita --api-cons=88122cce2d14d5cbd57f77c552e80843d97ff4be --api-token=b25abee1b365458a9d719608bda85f6eb4900885` will be as shown below:

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

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).