# How to activate Domum's license

## Prerequisites

- Segura virtual appliances version 3.18 or higher.  
- Static IP address.  
- The **Domum** service must be a service in the Segura cloud.  
- Allow outbound communication between the Segura platform and the **Domum** service (internet).  
- To establish a connection between Segura and the **Domum** service, direct TCP/UDP communication between the two endpoints must be enabled. Redirects, proxies, or similar technologies do not meet the requirement.  
- A `root` or `mt4adm` user.

:::(info) (Info)
**Domum Remote Access** does not change the sizing calculation of the Segura instance. For Segura, the origin of access via **Domum** or directly via PAM is transparent.
:::

## Activate Domum Remote Access

From version 3.2 of Segura, you can use the command line tool `orbit` that centralizes the platform's main maintenance and configuration operations. Consult the [Prerequisites](/v4/docs/license-activation-1#prerequisites) regarding the permission needed to run the commands.

### Step 1: Adjust initial gateway settings

1. Access the Orbit CLI terminal using the SSH protocol through port 59022.  
2. Run the command `orbit domum-gateway` to configure the **Domum** module gateway settings.

```Shell
$  sudo orbit domum-gateway -h
Usage: orbit domum-gateway <action>
          
Domum Gateway settings tools
          
Arguments:
<action>    Domum gateway action: [challenge|setup|rotate|status]
          
Flags:
   -h, --help                 Show context-sensitive help.
          
   -a, --activation=STRING    Activation string
   -c, --challenge=STRING     Challenge string
       --force                Force the command execution, never prompt
       --show    
```

### Step 2: Check the current settings status

1. Run the command `–show` or `status`.

```Shell
$ sudo orbit domum-gateway status            Connection with Domum Gateway is UP!            PING 16.202.217.165 (16.202.217.165) 56(84) bytes of data.64 bytes from 16.202.217.165: icmp_seq=1 ttl=64 time=48.5 ms64 bytes from 16.202.217.165: icmp_seq=2 ttl=64 time=48.5 ms64 bytes from 16.202.217.165: icmp_seq=3 ttl=64 time=48.7 ms64 bytes from 16.202.217.165: icmp_seq=4 ttl=64 time=48.4 ms64 bytes from 16.202.217.165: icmp_seq=5 ttl=64 time=53.4 ms            --- 169.254.251.125 ping statistics ---5 packets transmitted, 5 received, 0% packet loss, time 9msrtt min/avg/max/mdev = 48.403/49.489/53.356/1.950 ms            interface: Domum    public key: 3pnqyBznY9Jxise6PneZRALBJwUfgASTpkUVtHOV6VU=    private key: (hidden)    listening port: 46008            peer: Z+yzMY4Z9kcA1FfaCEu5dXk+qR4ke73jhspDKjAuswg=    endpoint: 52.27.111.109:51820    allowed ips: 16.202.217.165/32    latest handshake: 15 seconds ago    transfer: 2.23 KiB received, 2.29 KiB sent    persistent keepalive: every 25 seconds
```

2. If no configuration has been performed, the command will display an error message.

```Shell
$  sudo orbit domum-gateway status
   This instance is not connect to any Domum Gateway
   Setup needed
```

### Step 3: Generate a unique certificate for the instance

1. Enter the command `sudo orbit domum-gateway` challenge to get the challenge code.

```Shell
$ sudo orbit domum-gateway challengeAre you sure you want to proceed: yYour Domum gateway challengeLS0tLS1CRUdJTiBDRVUSUZJQ0FURS0tLS0tCk1JSUZRekNDQXl1Z0F3SUJBZ0lVZktUSHpIWGFPeWNxazFaR0FIYklZkdJUjVFd0RRWUpLb1pJaHZjTkFRRUwKQlFBd01URU9NQXdHQTFRUNnd0ZSRzl0ZFcweEh6QWRCZ05WQkFzTUZrTm9ZV3hzWlc1blpTQmpaWEowYVdacApab3RWeFgza3ZYaFg2eVZsM3V5bXU1OFdkd255SE1QekNCOVJMOWFpTmlhcndIcHZHMy81dHFzek43eFByM2IwCjVQYmpmYzdJSWFSMlRGVDlNd3RvL3NTYmpza2tGZC9BZjNRN0x4aYzg4am5PTEgvNmoydW5iRHVTUmdSdjhRei8KbEd1SFljVUR3TWY4ZGFDM2NjYnpJd2x2YkcwSjdtTTN2ME5DZ0pnT3Y0Q1plSG5LM2tUdE1RWFV5VDRzdXcyawpxbjFzSERnbmlyRyt0ZDFwNUNVUWdaeVduTEFsL0ordCtFS0ZVUVlqSDFTSU9Hb214eTBBbVRDdkZWUE1yZEZHCmZXM0pvS09MNDhtV210U0Vkd3hXb05nUTFwVDByODRmcG5abVljVEErelVWaVM1RE53Y1F2UmVtdStGVmhxY0EKZkMrYytPVlJLQjk3NXpRQkpHbnJDK3VyalR9YzksdzT0F1ajljR0I0YUdUTW5TNWh3MEdFTExQb1FITkh2Q1QwdgpjUXY3TDh0OFI5N3lkRCtwWW1LN2tIcE5Zc1dOMnh1SFRUcmprd1FnSFN2enR4dWtXQksyMkVKdVQvZ2dUVFBaClIrUVYxRzM1WHIzQ1RtN0Z0eFNasaDg4elRxcllKc2daRTZoUUVvYkk1czhZZS9NVXJqWjZLNWt0VDNTN05Zc2gKcWc3OFVZQ0NlL3BLSTVIUmJqZm5sK1pvaTFpeGlCZi9TMFNISStWcGNnNHduNExDcnAyK1NjZG5ta0VKQkNzLwpUUFpWWDhWRTRmQm9UUlZzMmkzZnJ0TlBoS1V0WXlzK1p5eHlSbE9RNzVXL1lKd1pmdV1cyNEdUeFFlY2pCM2dCClkyRjBaWE13SGhjTk1qRXdOakE0TVRReU5URXhXaGNOTWpFd056QTRNVFF5TlRFeFdqQXhNUTR3REFZRFZRUUsKWkpXdjNITnNDTWdWdWxaclM1WEhUckVNSmphL2REZ1A2czZGVENKM2FSRGJrem5hallCT3hFOUVwZWRiQlJGUwpXckZGZDZYMGVPY1doL3U5RXUvUkdMYXlaK05NdHh3cUhnUmdSNHUwUkpZVVQvL2FmUFNwZWV2QUNMZTFsQzdCClJOTlhtd3lzZFlDM1VMUCtuWTA3QU9QS05jaSsxNGtFMGxscXVnL3liR01QeXd6bmtoaXVpNTFjTjczL3NzV2EKNEVvL0VrVkRCS
```

2. Copy the challenge code and the outgoing public IP (Segura's application server).

### Step 4: Contact Segura support

1.  Send the challenge code and outgoing public IP to the Segura team.  
2. Segura will generate the license key and release the rule for the specified IP.

### Step 5: Enter the received trust code

1. With the license key sent by Segura, access the terminal.  
2. Run the command `sudo orbit domum-gateway setup \--activation=` and include the license key received from Segura as an argument.

```Shell
$ sudo orbit domum-gateway setup --activation= MIIFgQYJKoZIhvcNAQcDoIIFcjCCBW4CAQAxggJlMIICYQIBADBJMDExDjAMBgNVBAoMBURvbXVtMR8wHQYDVQQLDBZDaGFsbGVuZ2UgY2VydGlmaWNhdGVzAhR8pMfMddo7JyqTVkYAdst58YhHkTANBgkqhkiG9w0BAQEFAASCAgAGt7dmmcGLjrX1rFcu+znkpsPo0ucsKvbe3DeIt5RSsxW5yL6WEPvSeurYZ6wuenfI8p2U+LBATZOQ1bTygWx8V+4+bcrYdoIuF7RtMKycZwv7oIpceDvWP+XoSfQqHJrXALoY+w1IfeB1KhealdQvr46YpIxZrwE3q5mc4ZLbjU4pC8awGoJB3TO2dbSjY5PwIvE2Mo7Umu8r8yw1085Rohy8MDz6/eaRjyCdBvysijgqtVAOf+yi4uUn6At6UkCFDL1Kny6RVlnAhIkuGVA4IJqgh64H9SaG4UtFfhIiSBa9urbj44pLgjumiZB/rZN+Are you sure you want to proceed: yYour Domum Gateway is ready!
```

3. Upon successful activation, the command will display a message confirming the completion of the process.  
    - After configuring the instance with the gateway, it is possible to [Rotate the keys](/v4/docs/license-activation-1#step-7-optional-rotate-the-keys).

### Step 6 (optional): Perform cluster activation

1. Access the Orbit CLI terminal.  
2. If the environment is clustered, run the command `sudo orbit domum-gateway setup \--secondary` on the secondary node to perform the activation.

```Shell
$ sudo orbit domum-gateway setup --activation= MIIFgQYJKoZIhvcNAQcDoIIFcjCCBW4CAQAxggJlMIICYQIBADBJMDExDjAMBgNVBAoMBURvbXVtMR8wHQYDVQQLDBZDaGFsbGVuZ2UgY2VydGlmaWNhdGVzAhR8pMfMddo7JyqTVkYAdst58YhHkTANBgkqhkiG9w0BAQEFAASCAgAGt7dmmcGLjrX1rFcu+znkpsPo0ucsKvbe3DeIt5RSsxW5yL6WEPvSeurYZ6wuenfI8p2U+LBATZOQ1bTygWx8V+4+bcrYdoIuF7RtMKycZwv7oIpceDvWP+XoSfQqHJrXALoY+w1IfeB1KhealdQvr46YpIxZrwE3q5mc4ZLbjU4pC8awGoJB3TO2dbSjY5PwIvE2Mo7Umu8r8yw1085Rohy8MDz6/eaRjyCdBvysijgqtVAOf+yi4uUn6At6UkCFDL1Kny6RVlnAhIkuGVA4IJqgh64H9SaG4UtFfhIiSBa9urbj44pLgjumiZB/rZN+

Are you sure you want to proceed: y
Your Domum Gateway is ready!

NOTE: If this environment is in cluster mode, run "sudo orbit domum-gateway setup --secondary" on secondary nodes as well
```

### Step 7 (optional): Rotate the keys

1. Access the Orbit CLI terminal.  
2. Execute the argument `rotate`.

```Shell
$ sudo orbit domum-gateway rotate

Are you sure you want to proceed: y█
Connection with Domum Gateway is UP!

PING 16.202.217.165 (16.202.217.165) 56(84) bytes of data.
64 bytes from 16.202.217.165: icmp_seq=1 ttl=64 time=48.0 ms
64 bytes from 16.202.217.165: icmp_seq=2 ttl=64 time=48.0 ms
64 bytes from 16.202.217.165: icmp_seq=3 ttl=64 time=48.1 ms
64 bytes from 16.202.217.165: icmp_seq=4 ttl=64 time=48.2 ms
64 bytes from 16.202.217.165: icmp_seq=5 ttl=64 time=47.6 ms

--- 16.202.217.165 ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 8ms
rtt min/avg/max/mdev = 47.581/47.977/48.220/0.352 ms

interface: Domum
 public key: KTucX7gwxCCGKzuU63DccQ/J5eQtGkSEoCnQ+K+s4C8=
 private key: (hidden)
 listening port: 49538

peer: 7CqAnT/YsFnqCBQRbwybeIB4C6XMh6BcIQGBjDhfxgo=
 endpoint: 52.27.111.109:51820
 allowed ips: 16.202.217.165/32
 latest handshake: 5 seconds ago
 transfer: 828 B received, 1.42 KiB sent
 persistent keepalive: every 25 seconds

```

:::(Warning) (**Attention**)
 Using this argument restarts all active connections.
:::

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).