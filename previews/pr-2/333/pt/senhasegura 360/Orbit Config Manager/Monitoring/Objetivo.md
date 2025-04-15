O senhasegura lida com sistemas críticos e informações sensíveis, é importante implantar ferramentas para monitorar o ambiente e agir de maneira rápida em caso de falhas na infraestrutura de T.I. Neste caso, diversos aspectos podem ser monitorados por ferramentas de monitoramento.

CuidadoÉ necessário que haja comunicação entre a senhasegura e o SIEM, SYSLOG e SNMP.

## Objetivo

Fornecer orientações para pessoas administradoras de sistemas que utilizam as funções de monitoramento do senhasegura através dos meios disponibilizados pela solução, sendo eles **[MIB's SNMPv2](/v3-33/docs/pt/monitoring-snmp)**, **[SNMPv3](/v3-33/docs/pt/monitoring-snmp)**, [**Zabbix**](/v3-33/docs/pt/orbit-config-manager-configuring-the-monitoring) e **[SYSLOG](/v3-33/docs/pt/monitoring-syslog)**.

O monitoramento dos itens tecnológicos que compõem a solução senhasegura é de importância fundamental tanto para o planejamento e provisionamento de novos recursos físicos para a solução, quanto para a detecção e correção de falhas do sistema de maneira proativa, possibilitando dessa maneira, uma rápida atuação nas correções que forem necessárias.

## Importância do monitoramento

CuidadoA configuração destes monitoramentos garantirá um melhor planejamento das estratégias a serem adotadas em diversos casos críticos. Tais casos devem ser monitorados, pois podem levar ao mau funcionamento da aplicação senhasegura e de suas funcionalidades. Como, por exemplo:

* Desmontagem da partição remota de backup
* Partições de armazenamento que atingem 100% de sua capacidade
* Alto consumo de CPU ou memória, que impactem a desempenho da aplicação
