# Como ativar a licença do Domum

## Pré-requisitos

- Segura virtual appliances versão 3.18 ou superior.  
- Endereço IP estático.  
- É obrigatório que o serviço Domum seja utilizado como um serviço na nuvem Segura.  
- Liberação da comunicação outbound entre a plataforma Segura e o Domum service (internet).  
- Para que a conexão entre o Segura e o serviço Domum funcione, é necessário permitir a comunicação TCP/UDP direta entre as duas pontas. Redirecionamentos, proxies ou tecnologias semelhantes não atendem ao requisito.  
- Ser um usuário `root` ou `mt4adm`.

:::(info) (Info)
O **Domum Remote Access** não altera o cálculo de dimensionamento da instância Segura. Para o Segura, a origem do acesso via **Domum** ou diretamente via PAM é transparente.
:::

## Ativar o Domum Remote Access

A partir da versão 3.2 do Segura, você pode utilizar a ferramenta de linha de comando `orbit`, que centraliza as principais operações de manutenção e configuração da plataforma. Consulte os [pré-requisitos](/v4/docs/pt/license-activation-1#pré-requisitos) e veja a permissão necessária para executar os comandos.

### Passo 1: Estabeleça as configurações iniciais do gateway

1. Acesse o terminal Orbit CLI utilizando o protocolo SSH pela porta 59022\.  
2. Execute o comando `orbit domum-gateway` para definir as configurações do gateway do **Domum**.

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

### Passo 2: Verifique o status das configurações atuais

1. Execute o comando `–show` ou `status`.

```Shell
$ sudo orbit domum-gateway status            Connection with Domum Gateway is UP!            PING 16.202.217.165 (16.202.217.165) 56(84) bytes of data.64 bytes from 16.202.217.165: icmp_seq=1 ttl=64 time=48.5 ms64 bytes from 16.202.217.165: icmp_seq=2 ttl=64 time=48.5 ms64 bytes from 16.202.217.165: icmp_seq=3 ttl=64 time=48.7 ms64 bytes from 16.202.217.165: icmp_seq=4 ttl=64 time=48.4 ms64 bytes from 16.202.217.165: icmp_seq=5 ttl=64 time=53.4 ms            --- 169.254.251.125 ping statistics ---5 packets transmitted, 5 received, 0% packet loss, time 9msrtt min/avg/max/mdev = 48.403/49.489/53.356/1.950 ms            interface: Domum    public key: 3pnqyBznY9Jxise6PneZRALBJwUfgASTpkUVtHOV6VU=    private key: (hidden)    listening port: 46008            peer: Z+yzMY4Z9kcA1FfaCEu5dXk+qR4ke73jhspDKjAuswg=    endpoint: 52.27.111.109:51820    allowed ips: 16.202.217.165/32    latest handshake: 15 seconds ago    transfer: 2.23 KiB received, 2.29 KiB sent    persistent keepalive: every 25 seconds
```
 
2. Se não houver nenhuma configuração, o comando imprimirá uma mensagem de erro.

```Shell
$  sudo orbit domum-gateway status    This instance is not connect to any Domum Gateway    Setup needed
```
 
### Passo 3: Gere um certificado único para a instância

1. Digite o comando sudo `orbit domum-gateway challenge` para obter o código *challenge*.

```Shell
$ sudo orbit domum-gateway challengeAre you sure you want to proceed: yYour Domum gateway challengeLS0tLS1CRUdJTiBDRVUSUZJQ0FURS0tLS0tCk1JSUZRekNDQXl1Z0F3SUJBZ0lVZktUSHpIWGFPeWNxazFaR0FIYklZkdJUjVFd0RRWUpLb1pJaHZjTkFRRUwKQlFBd01URU9NQXdHQTFRUNnd0ZSRzl0ZFcweEh6QWRCZ05WQkFzTUZrTm9ZV3hzWlc1blpTQmpaWEowYVdacApab3RWeFgza3ZYaFg2eVZsM3V5bXU1OFdkd255SE1QekNCOVJMOWFpTmlhcndIcHZHMy81dHFzek43eFByM2IwCjVQYmpmYzdJSWFSMlRGVDlNd3RvL3NTYmpza2tGZC9BZjNRN0x4aYzg4am5PTEgvNmoydW5iRHVTUmdSdjhRei8KbEd1SFljVUR3TWY4ZGFDM2NjYnpJd2x2YkcwSjdtTTN2ME5DZ0pnT3Y0Q1plSG5LM2tUdE1RWFV5VDRzdXcyawpxbjFzSERnbmlyRyt0ZDFwNUNVUWdaeVduTEFsL0ordCtFS0ZVUVlqSDFTSU9Hb214eTBBbVRDdkZWUE1yZEZHCmZXM0pvS09MNDhtV210U0Vkd3hXb05nUTFwVDByODRmcG5abVljVEErelVWaVM1RE53Y1F2UmVtdStGVmhxY0EKZkMrYytPVlJLQjk3NXpRQkpHbnJDK3VyalR9YzksdzT0F1ajljR0I0YUdUTW5TNWh3MEdFTExQb1FITkh2Q1QwdgpjUXY3TDh0OFI5N3lkRCtwWW1LN2tIcE5Zc1dOMnh1SFRUcmprd1FnSFN2enR4dWtXQksyMkVKdVQvZ2dUVFBaClIrUVYxRzM1WHIzQ1RtN0Z0eFNasaDg4elRxcllKc2daRTZoUUVvYkk1czhZZS9NVXJqWjZLNWt0VDNTN05Zc2gKcWc3OFVZQ0NlL3BLSTVIUmJqZm5sK1pvaTFpeGlCZi9TMFNISStWcGNnNHduNExDcnAyK1NjZG5ta0VKQkNzLwpUUFpWWDhWRTRmQm9UUlZzMmkzZnJ0TlBoS1V0WXlzK1p5eHlSbE9RNzVXL1lKd1pmdV1cyNEdUeFFlY2pCM2dCClkyRjBaWE13SGhjTk1qRXdOakE0TVRReU5URXhXaGNOTWpFd056QTRNVFF5TlRFeFdqQXhNUTR3REFZRFZRUUsKWkpXdjNITnNDTWdWdWxaclM1WEhUckVNSmphL2REZ1A2czZGVENKM2FSRGJrem5hallCT3hFOUVwZWRiQlJGUwpXckZGZDZYMGVPY1doL3U5RXUvUkdMYXlaK05NdHh3cUhnUmdSNHUwUkpZVVQvL2FmUFNwZWV2QUNMZTFsQzdCClJOTlhtd3lzZFlDM1VMUCtuWTA3QU9QS05jaSsxNGtFMGxscXVnL3liR01QeXd6bmtoaXVpNTFjTjczL3NzV2EKNEVvL0VrVkRCS
```

2. Copie o código *challenge* e o IP público (servidor da aplicação Segura) de saída.

### Passo 4: Entre em contato com o suporte Segura

1.  Envie o código *challenge* e o IP público de saída para a equipe Segura.   
2. A Segura irá gerar a chave de licença e liberar a regra para o IP informado.

### Passo 5: Insira o código de confiança recebido

1. Com a chave de licença enviada pela Segura, acesse o terminal.  
2. Execute o comando `sudo orbit domum-gateway setup \--activation=` e insira a chave de licença recebida da Segura como argumento.

```Shell
$ sudo orbit domum-gateway setup --activation= MIIFgQYJKoZIhvcNAQcDoIIFcjCCBW4CAQAxggJlMIICYQIBADBJMDExDjAMBgNVBAoMBURvbXVtMR8wHQYDVQQLDBZDaGFsbGVuZ2UgY2VydGlmaWNhdGVzAhR8pMfMddo7JyqTVkYAdst58YhHkTANBgkqhkiG9w0BAQEFAASCAgAGt7dmmcGLjrX1rFcu+znkpsPo0ucsKvbe3DeIt5RSsxW5yL6WEPvSeurYZ6wuenfI8p2U+LBATZOQ1bTygWx8V+4+bcrYdoIuF7RtMKycZwv7oIpceDvWP+XoSfQqHJrXALoY+w1IfeB1KhealdQvr46YpIxZrwE3q5mc4ZLbjU4pC8awGoJB3TO2dbSjY5PwIvE2Mo7Umu8r8yw1085Rohy8MDz6/eaRjyCdBvysijgqtVAOf+yi4uUn6At6UkCFDL1Kny6RVlnAhIkuGVA4IJqgh64H9SaG4UtFfhIiSBa9urbj44pLgjumiZB/rZN+Are you sure you want to proceed: yYour Domum Gateway is ready!
```

3. Após a ativação bem-sucedida, o comando apresentará uma mensagem de conclusão do processo.  
    - Uma vez configurada a instância com o *gateway*, você poderá [rotacionar as chaves](/v4/docs/pt/license-activation-1#passo-7-opcional-rotacione-as-chaves).

### Passo 6 (opcional): Faça a ativação em cluster

1. Acesse o terminal Orbit CLI.  
2. Se o ambiente estiver configurado em cluster, execute o comando `sudo orbit domum-gateway setup \--secondary` no nó secundário para realizar a ativação.

```Shell
$ sudo orbit domum-gateway setup --activation= MIIFgQYJKoZIhvcNAQcDoIIFcjCCBW4CAQAxggJlMIICYQIBADBJMDExDjAMBgNVBAoMBURvbXVtMR8wHQYDVQQLDBZDaGFsbGVuZ2UgY2VydGlmaWNhdGVzAhR8pMfMddo7JyqTVkYAdst58YhHkTANBgkqhkiG9w0BAQEFAASCAgAGt7dmmcGLjrX1rFcu+znkpsPo0ucsKvbe3DeIt5RSsxW5yL6WEPvSeurYZ6wuenfI8p2U+LBATZOQ1bTygWx8V+4+bcrYdoIuF7RtMKycZwv7oIpceDvWP+XoSfQqHJrXALoY+w1IfeB1KhealdQvr46YpIxZrwE3q5mc4ZLbjU4pC8awGoJB3TO2dbSjY5PwIvE2Mo7Umu8r8yw1085Rohy8MDz6/eaRjyCdBvysijgqtVAOf+yi4uUn6At6UkCFDL1Kny6RVlnAhIkuGVA4IJqgh64H9SaG4UtFfhIiSBa9urbj44pLgjumiZB/rZN+

Are you sure you want to proceed: y
Your Domum Gateway is ready!

NOTE: If this environment is in cluster mode, run "sudo orbit domum-gateway setup --secondary" on secondary nodes as well
```

### Passo 7 (opcional): Rotacione as chaves

1. Acesse o terminal Orbit CLI.  
2. Execute o argumento `rotate`.

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

:::(Warning) (Atenção)
Ao utilizar esse argumento, você reinicia todas as conexões ativas. 
:::

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/)