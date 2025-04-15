# Instalação Load Balancer

1. Faça o deploy do **senhasegura Load Balancer OVA** em seu *hypervisor*, conforme os requisitos mencionados no [documento de introdução](/v3-32/docs/pt/load-balancer-introduction).
2. Após a instalação, será exibida a tela de boas-vindas do **senhasegura Load Balancer.**
3. Na tela de boas-vindas, serão apresentados um usuário e uma senha. O usuário padrão é `setup` e a senha será gerada aleatoriamente.
4. Faça login utilizando esses dados.
5. Após o login, você será direcionado para o arquivo de configuração, onde será necessário editar os parâmetros de configuração do **senhasegura Load Balancer**. Para isso, preencha de acordo com as orientações contidas dentro do arquivo de configuração e com os exemplos abaixo:

```yaml
##########################################################
# 		This file is used by Ansible		    #
#		BEWARE NO TO BREAK THE YAML SYNTAX	    #
#		DO NOT RENAME THIS FILE			    #
##########################################################
###########################################################
# Replace the values accordingly to your network settings #
###########################################################

# The load balancer node hostname
lb_hostname: lb_01

# Enter the information for setting the network interfaces, DNS, and NTP.

####################
# Network settings #
####################
network:
	eth0:
		address: 192.168.222.201
		netmask: 24
		gateway: 192.168.222.1
```

6. Após, você deve inserir as informações de configuração do VIP.
   ```yaml
   # VIP settings; enter the interfaces settings and ip addresses for both the
   # internal load balancing configuration, and the network of the load balanced
   # servers

   vip:
   	address: 192.168.222.200

   ```
7. Em seguida, é necessário configurar a rede de balanceamento de carga. Neste passo, você deverá registrar todos os endereços de IP dos balanceadores de carga.

```yaml
# Load balancer IPv4 addresses
loadbalancers:
	ips:
		- 192.168.223.201
		- 192.168.222.202
```

8. Após este passo, configure todas as instâncias da aplicação do mesmo modo. As configurações devem ser as mesmas em todas as instâncias do **senhasegura Load Balancer**.
9. Se você desejar, é possível fazer o balanceamento de carga para todos os serviços do senhasegura, ou apenas os serviços proxy. Para isso, edite o arquivo de configuração conforme abaixo:

```yaml
senhasegura_hosts:
	services:
		all_services:
			- address: 192.168.223.205
			  connect_timeout: 10
	tun_hosts: []
		# only_cosh:
		#	- address:
		#	  connect_timeout:
		#	- address:

		# only_xrdp:
		#	- address:
		#	  connect_timeout:

		# only_web:
		#	- address:
		#	  connect_timeout:
```

10. Para que o balanceamento de carga seja ativado nos serviços, descomente as linhas de acordo com a sua necessidade e preencha segundo o modelo mostrado para a seção `all_services`.
11. Salve as configurações e encerre o editor de textos digitando `:wq!`.

Após salvar as configurações, o balanceador de carga será reiniciado. Quando o processo de reinicialização estiver completo, a tela de login será apresentada novamente, porém com todas as variáveis devidamente preenchidas.

:::(error) (Alerta)
Se você possui mais de uma instalação do senhasegura Load Balancer, mantenha as configurações iguais a partir do passo seis. Para realizar essa configuração, replique as informações no arquivo de configuração logo abaixo das linhas:

```yaml
#######THE ABOVE CONFIGURATION IS DIFFERENT IN EACH SERVER##################

#######THE BELOW CONFIGURATION MUST BE THE SAME IN BOTH SERVERS#############
```

Estas linhas dividem o arquivo de configuração de acordo com a configuração local do load balancer que você está editando e as configurações das diferentes instâncias, que devem ser as mesmas.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).