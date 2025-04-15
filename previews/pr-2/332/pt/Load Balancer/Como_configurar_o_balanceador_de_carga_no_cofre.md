# Como configurar o balanceador de carga no cofre

Uma vez realizado o processo de instalação do **senhasegura Load Balancer**, é preciso configurá-lo dentro do cofre senhasegura. Para realizar esse procedimento, siga os passos abaixo:

1. Você deve, primeiro, criar uma subinterface de rede. Para isso, abra o arquivo de configuração da subinterface digitando o comando abaixo:

```bash
vim /etc/network/interfaces.d/eth0:1
```

2. No arquivo de configuração, devemos criar as regras e propriedades dessa subinterface. Para isso, digite as informações abaixo:

```bash
 auto eth0:1
 iface eth0:1 inet static
 	address <VIP_IP_ADDRESS>
 	netmask 255.255.255.255
 	pre-up arptables -t filter -F INPUT
 	pre-up arptables -t filter -F OUTPUT
 	pre-up arptables -t filter -A INPUT -d <VIP_IP_ADDRESS> -j DROP
 	post-up arptables -t filter -A OUTPUT -s <VIP_IP_ADDRESS> -j mangle --mangle-ip-s <IP_DA_ETH0_DO_SERVIDOR>
```

3. No arquivo, notamos duas variáveis que dizem respeito ao ambiente que estamos configurando. Assim, atente-se às variáveis:
   1. `<VIP_IP_ADDRESS>` que deve ser substituído pelo mesmo endereço VIP configurando na instalação do balanceador de carga
   2. `<IP_DA_ETH0_DO_SERVIDOR>` que deve ser substituído pelo endereço de IP da interface de rede do cofre do senhasegura.
4. Salve e feche o arquivo com o comando `:wq!`.
5. Com o arquivo de configuração devidamente criado, será necessário aplicar as configurações. Para isso, rode o comando:

```bash
ifup eth0:1
```

6. Valide a configuração do endereço de IP com o seguinte comando:

```bash
 ip a
```

A saída do comando deverá ser parecer com a abaixo:

```bash
1: 	lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000 
	link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00 
	inet 127.0.0.1/8 scope host lo 
		valid_lft forever preferred_lft forever 

2: 	eth0: <BROADCAST,NULTICAST,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast state UP group default qlen 1000
	link/ether 08:00:27:b3:b8:dc brd ff:ff:ff:ff:ff:ff 
	inet 192.168.1.15/24 brd 192.168.1.255 scope global dynamic eth0
		valid_lft 82768sec preferred_lft 82768sec 
	inet 192.168.1.200/24 brd 192.168.1.255 scope global secondary eth0:1
		valid_lft forever preferred_lft forever
```

:::(info) (Info)
Note que, uma vez finalizada a configuração, a licença do cofre será expirada e deverá ser renovada.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).