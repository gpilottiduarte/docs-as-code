# Requisitos

Para garantir uma replicação de dados eficiente em um cluster, é necessário atender aos seguintes requisitos:

* [Atualize todas as instâncias do cluster](/v3-33/docs/pt/installation-how-to-update-cluster) e certifique-se de que todas elas estão utilizando a mesma versão do software. 
* [Ative as licenças das instâncias no Portal Affinity](/v3-33/docs/pt/installation-how-to-activate-the-senhasegura-license).
*  Certifique-se de que existe conectividade adequada entre todas as máquinas. Para informações detalhadas, consulte o artigo sobre [como configurar a rede e o hostname](/v3-33/docs/pt/installation-how-to-set-up-the-network-and-change-the-hostname).
* Garanta que as seguintes portas estejam liberadas no [firewall](/v3-33/docs/pt/installation-firewall-rules) entre todas as instâncias:
    * TCP (22, 443, 3306, 4444, 4567, 4568, 59022 e 9300).
    * UDP (4567).
