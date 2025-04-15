# Sobre o monitoramento

O Segura lida com sistemas críticos e informações sensíveis, é importante implantar ferramentas para monitorar o ambiente e agir de maneira rápida em caso de falhas na infraestrutura de T.I. Neste caso, diversos aspectos podem ser monitorados por ferramentas de monitoramento.
:::(Warning) (**Atenção**)
 É necessário que haja comunicação entre a Segura e o SIEM, SYSLOG e SNMP.
:::

## **Objetivo**

Fornecer orientações para pessoas administradoras de sistemas que utilizam as funções de monitoramento do Segura através dos meios disponibilizados pela solução, sendo eles [**MIB's SNMPv2**](https://portal.document360.io/v3-33/docs/pt/monitoring-snmp), [**SNMPv3**](https://portal.document360.io/v3-33/docs/pt/monitoring-snmp), [**Zabbix**](https://portal.document360.io/v3-33/docs/pt/orbit-config-manager-configuring-the-monitoring) e [**SYSLOG**](https://portal.document360.io/v3-33/docs/pt/monitoring-syslog).

O monitoramento dos itens tecnológicos que compõem a solução Segura é de importância fundamental tanto para o planejamento e provisionamento de novos recursos físicos para a solução, quanto para a detecção e correção de falhas do sistema de maneira proativa, possibilitando dessa maneira, uma rápida atuação nas correções que forem necessárias.

## **Importância do monitoramento**
:::(Warning) (**Atenção**)
 A configuração destes monitoramentos garantirá um melhor planejamento das estratégias a serem adotadas em diversos casos críticos. Tais casos devem ser monitorados, pois podem levar ao mau funcionamento da aplicação Segura e de suas funcionalidades. Como, por exemplo:

* Desmontagem da partição remota de backup  
* Partições de armazenamento que atingem 100% de sua capacidade  
* Alto consumo de CPU ou memória, que impactem a desempenho da aplicação
:::



