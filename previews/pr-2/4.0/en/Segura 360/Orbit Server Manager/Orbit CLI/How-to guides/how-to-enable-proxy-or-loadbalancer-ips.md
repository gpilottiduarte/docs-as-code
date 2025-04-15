# How to enable proxy or loadbalancer IPs

In this document, you’ll find the steps on how to enable proxy or loadbalancer IPs.

## **Enable proxy or loadbalancer IPs**

If a proxy or loadbalancer system is being used, Segura will observe and identify the application client IP using the variable `X-Forwarded-For`. In these cases, the allowed IP of the WebService A2A token must remain the application's IP, but you must register the proxy/loadbalancer IP using the command `forward`.

```Text
mt4adm@vmdf-giskard:~$ sudo orbit api forward -a 192.168.10.5
mt4adm@vmdf-giskard:~$ sudo orbit api forward --enable
mt4adm@vmdf-giskard:~$ sudo orbit api forward --show
       Status           Enable
       Allowed Origns   192.168.10.5
```

You can add more comma-separated IPs. And to inactivate, use the `disable` option.

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

