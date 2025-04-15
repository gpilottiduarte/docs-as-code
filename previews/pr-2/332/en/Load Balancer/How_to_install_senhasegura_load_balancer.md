# How to install senhasegura load balancer

1. Deploy **senhasegura Load Balancer OVA** on your hypervisor according to the requirements in the [introduction document](/v3-32/docs/load-balancer-introduction).
2. After installation, the **senhasegura Load Balancer** welcome screen will be displayed.
3. You'll be given a username and password on the welcome screen. The default user is `setup` and the password will be generated randomly.
4. Log in with the user and password given.
5. After logging in, you'll be forwarded to the configuration file, where you must edit **senhasegura Load Balancer** configuration parameters. To do this, fill them in according to the instructions in the configuration file and the examples below:

```yaml
##########################################################
# 		This file is used by Ansible             #
#		BEWARE NO TO BREAK THE YAML SYNTAX       #
#		DO NOT RENAME THIS FILE                  #
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

6. Next, you must enter the VIP configuration information.

```yaml
# VIP settings; enter the interfaces settings and ip addresses for both the
# internal load balancing configuration, and the network of the load balanced
# servers

vip:
	address: 192.168.222.200
```

7. Next, you need to configure the load balancing network. In this step, you'll need to register all the IP addresses of the load balancers.

```yaml
# Load balancer IPv4 addresses
loadbalancers:
	ips:
		- 192.168.223.201
		- 192.168.222.202
```

8. After this step, configure all application instances similarly. The settings must be the same for all **senhasegura Load Balancer** instances.
9. You can load balance all senhasegura services or just the proxy services. To do this, edit the configuration file below:

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

10. To activate the load balancing in the services, uncomment the lines according to your needs and fill them in according to the template for section `all_services`.
11. Save the settings and close the text editor by typing `:wq!`.

After saving the settings, the load balancer will restart. When the restart process is complete, the login screen will be shown again, with all the variables duly filled in.

:::(error) (Alert)
If you have more than one installation of senhasegura Load Balancer, keep the settings the same from step six onwards. To make this configuration, replicate the information in the configuration file just below the lines:

```yaml
####### THE ABOVE CONFIGURATION IS DIFFERENT IN EACH SERVER ##################
####### THE BELOW CONFIGURATION MUST BE THE SAME IN BOTH SERVERS #############
```

These lines divide the configuration file according to the local configuration of the load balancer you are editing and the configurations of the different instances, which must be the same.
:::

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).