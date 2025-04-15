# Como permitir IPs de proxy ou loadbalancer

Neste documento, você encontrará os passos de como permitir IPs de proxy ou loadbalancer. 

## **Permitir IPs de proxy ou loadbalancer**

Caso um sistema proxy ou loadbalancer esteja sendo utilizado, o Segura irá observar e identificar o cliente solicitante através da variável `X-Forwarded-For`. Nestes casos, o IP permitido do token WebService A2A deve permanecer sendo o IP da aplicação, mas você deve registrar o IP do proxy/loadbalancer através do comando `forward`.

```Text
mt4adm@vmdf-giskard:~$ sudo orbit api forward -a 192.168.10.5
mt4adm@vmdf-giskard:~$ sudo orbit api forward --enable
mt4adm@vmdf-giskard:~$ sudo orbit api forward --show
       Status           Enable
       Allowed Origns   192.168.10.5
```

Você pode adicionar mais IPs separados por vírgula. E para inativar, basta utilizar a opção `disable`.


```Text
mt4adm@vmdf-giskard:~$ sudo orbit api forward -a 192.168.10.5,192.168.10.6
mt4adm@vmdf-giskard:~$ sudo orbit api forward --enable
mt4adm@vmdf-giskard:~$ sudo orbit api forward --show
       Status           Enable
       Allowed Origns   192.168.10.5,192.168.10.6

mt4adm@vmdf-giskard:~$ sudo orbit api forward --disable
mt4adm@vmdf-giskard:~$ sudo orbit api forward --show
       Status           Disable
       Allowed Origns   192.168.10.5,192.168.10.6
```

