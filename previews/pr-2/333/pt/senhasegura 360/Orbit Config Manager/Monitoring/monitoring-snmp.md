O **[Simple Network Management Protocol (SNMP)](https://pt.wikipedia.org/wiki/Simple_Network_Management_Protocol)** é o protocolo padrão da Internet para gerenciamento de dispositivos em redes IP. O senhasegura oferece suporte ao SNMP v1, v2, v3\.

## Habilitar o serviço SNMP no senhasegura

AtençãoA configuração deve ser realizada através do Orbit Command Line Client. Para mais informações acesse o documento sobre [Como configurar o monitoramento SNMP](/v3-33/docs/pt/orbit-cli-how-to-configure-snmp-monitoring).

Para configurar um servidor SNMP, clique no menu suspenso do lado esquerdo e selecione a opção **Orbit**.

1. Acesse o menu **Orbit Config Manager ➔ Servidor ➔ Configurações**
2. Preencha os dados de **Configuração de SNMP**:


	* Servidor
	* IPs permitidos
	* Comunidade
3. Clique em **Salvar**

  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1665680301755.png)  


## Consulta aos dados de monitoramento SNMP

A extração dos dados de monitoramento do senhasegura podem ser realizadas de duas maneiras:

Através da configuração das OID's em um gerente SNMP, como CACTI, Solar Wings, Zabbix, ou qualquer outro sistema compatível com SNMP disponível na sua infraestrutura.

Através de consultas via terminal por alguma das **MIB's** ou **OID's** com o comando ***snmpwalk***, seguindo o seguinte padrão abaixo:

**SNMPv2**


```
snmpwalk -v2c -c $<$comunidade$>$ $<$ip$>$ 

```
**SNMPv3**


```
snmpwalk -v3 -a SHA -A $<$password$>$ -x AES -X $<$password$>$ -l authPriv -u $<$username$>$ $<$ip$>$ 

```
**Valores retornados**

Os tipos de dados retornados pelas consultas SNMP, dependerá do item consultado, podendo variar conforme o contexto do item monitorado, sendo eles, valores numéricos, valores de data e hora e textos descritivos.

Entre os valores de retorno de textos descritivos, alguns resultados podem ser similares entre os itens monitorados. Os casos em que estas situações ocorrem, são nos itens que retornam status de serviço de sistema e status de conexões TCP/UDP.

### MIB's e OID's fornecidas junto ao senhasegura

AtençãoO senhasegura disponibiliza as MIBs padrão para SNMPv2 e SNMPv3, com exceção de algumas leituras removidas por motivos de segurança.InfoO trap fica desativado por padrão mas ele pode ser configurado e ativado caso necessário.  




---

**SNMPv2\-MIB::sysDescr 1\.3\.6\.1\.2\.1\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔system(1\) ➔sysDescr(1\)**

Uma descrição textual da entidade. Este valor deve incluir o nome completo e a identificação de versão do tipo de hardware do sistema, sistema operacional de software e software de rede.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.1.1)



---

**SNMPv2\-MIB::sysObjectID 1\.3\.6\.1\.2\.1\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔system(1\) ➔sysObjectID(2\)**

A identificação autoritária do fornecedor do subsistema de gerenciamento de rede contida na entidade. Este valor é alocado na subárvore das empresas SMI (1\.3\.6\.1\.4\.1\) e fornece um meio fácil e inequívoco para determinar 'que tipo de caixa 'está sendo gerenciado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.1.2)



---

**DISMAN\-EVENT\-MIB::sysUpTimeInstance 1\.3\.6\.1\.2\.1\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔system(1\) ➔sysUpTime(3\)**

O tempo (em centésimos de segundo), uma vez que a parte de gerenciamento de rede do sistema foi reinicializada pela última vez.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.1.3)



---

**SNMPv2\-MIB::sysContact 1\.3\.6\.1\.2\.1\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔system(1\) ➔sysContact(4\)**

A identificação textual da pessoa de contato para este nó gerenciado, juntamente com informações sobre como entrar em contato com essa pessoa. Se nenhuma informação de contato é conhecida, o valor é a sequência de comprimento zero.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.1.4)



---

**SNMPv2\-MIB::sysName 1\.3\.6\.1\.2\.1\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔system(1\) ➔sysName(5\)**

Um nome atribuído administrativamente para este nó gerenciado. Por convenção, este é o nome de domínio totalmente qualificado do nó. Se o nome for desconhecido, o valor é a string de comprimento zero.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.1.5)



---

**SNMPv2\-MIB::sysLocation 1\.3\.6\.1\.2\.1\.1\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔system(1\) ➔sysLocation(6\)**

A localização física deste nó (por exemplo, 'armário telefônico, 3º andar '). Se a localização for desconhecida, o valor é a string de comprimento zero.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.1\.6](http://oid-info.com/get/1.3.6.1.2.1.1.6)



---

**SNMPv2\-MIB::sysServices 1\.3\.6\.1\.2\.1\.1\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔system(1\) ➔sysServices(7\)**

Um valor que indica o conjunto de serviços que esta entidade pode oferecer potencialmente.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.1\.7](http://oid-info.com/get/1.3.6.1.2.1.1.7)



---

**SNMPv2\-MIB::sysORLastChange 1\.3\.6\.1\.2\.1\.1\.8**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔system(1\) ➔sysORLastChange(8\)**

O valor de `sysuptime` no momento da mudança mais recente de estado ou valor de qualquer instância de `sysORID`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.1\.8](http://oid-info.com/get/1.3.6.1.2.1.1.8)



---

**SNMPv2\-MIB::sysORID 1\.3\.6\.1\.2\.1\.1\.9\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔system(1\) ➔sysORTable(9\) ➔sysOREntry(1\) ➔sysORID(2\)**

Uma identificação autoritativa de uma declaração de capacidades com relação a vários módulos MIB suportados pelo aplicativo SNMP local atuando como um auxilio de comando.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.1\.9\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.1.9.1.2)



---

**SNMPv2\-MIB::sysORDescr 1\.3\.6\.1\.2\.1\.1\.9\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔system(1\) ➔sysORTable(9\) ➔sysOREntry(1\) ➔sysORDescr(3\)**

Uma descrição textual das capacidades identificadas pela instância correspondente de `sysORID`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.1\.9\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.1.9.1.3)



---

**SNMPv2\-MIB::sysORUpTime 1\.3\.6\.1\.2\.1\.1\.9\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔system(1\) ➔sysORTable(9\) ➔sysOREntry(1\) ➔sysORUpTime(4\)**

O valor de `sysuptime` no momento em que esta linha conceitual foi instanciada pela última vez.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.1\.9\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.1.9.1.4)



---

**EtherLike\-MIB::dot3StatsIndex 1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔transmission(10\) ➔dot3(7\) ➔dot3StatsTable(2\) ➔dot3StatsEntry(1\) ➔dot3StatsIndex(1\)**

Um valor de índice que identifica exclusivamente uma interface para um meio Ethernet. A interface identificada por um valor específico deste índice é a mesma interface identificada pelo mesmo valor de `ifIndex`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.1)



---

**EtherLike\-MIB::dot3StatsInternalMacTransmitErrors 1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.10**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔transmission(10\) ➔dot3(7\) ➔dot3StatsTable(2\) ➔dot3StatsEntry(1\) ➔dot3StatsInternalMacTransmitErrors(10\)**

Uma contagem de quadros para a qual a transmissão em uma determinada interface falha devido a um erro interno de transmissão do MAC Sublayer.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.10](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.10)



---

**EtherLike\-MIB::dot3StatsCarrierSenseErrors 1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.11**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔transmission(10\) ➔dot3(7\) ➔dot3StatsTable(2\) ➔dot3StatsEntry(1\) ➔dot3StatsCarrierSenseErrors(11\)**

O número de vezes que a condição de sentido da transportadora foi perdida ou nunca afirmava ao tentar transmitir um quadro em uma interface específica.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.11](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.11)



---

**EtherLike\-MIB::dot3StatsFrameTooLongs 1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.13**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔transmission(10\) ➔dot3(7\) ➔dot3StatsTable(2\) ➔dot3StatsEntry(1\) ➔dot3StatsFrameTooLongs(13\)**

Uma contagem de quadros recebidos em uma interface particular que excede o tamanho máximo de quadro permitido.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.13](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.13)



---

**EtherLike\-MIB::dot3StatsInternalMacReceiveErrors 1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.16**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔transmission(10\) ➔dot3(7\) ➔dot3StatsTable(2\) ➔dot3StatsEntry(1\) ➔dot3StatsInternalMacReceiveErrors(16\)**

Uma contagem de quadros para a qual a recepção em uma interface particular falha devido a um erro de recebimento do MAC Sublayer interno.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.16](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.16)



---

**EtherLike\-MIB::dot3StatsDuplexStatus 1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.19**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔transmission(10\) ➔dot3(7\) ➔dot3StatsTable(2\) ➔dot3StatsEntry(1\) ➔dot3StatsDuplexStatus(19\)**

O modo atual de operação da entidade MAC.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.19](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.19)



---

**EtherLike\-MIB::dot3StatsFCSErrors 1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔transmission(10\) ➔dot3(7\) ➔dot3StatsTable(2\) ➔dot3StatsEntry(1\) ➔dot3StatsFCSErrors(3\)**

Uma contagem de quadros recebidos em uma interface específica que é um número integral de octetos de comprimento, mas não passam a verificação do FCS.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.3)



---

**EtherLike\-MIB::dot3StatsDeferredTransmissions 1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔transmission(10\) ➔dot3(7\) ➔dot3StatsTable(2\) ➔dot3StatsEntry(1\) ➔dot3StatsDeferredTransmissions(7\)**

Uma contagem de quadros para a qual a primeira tentativa de transmissão em uma determinada interface é atrasada porque o meio está ocupado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.10\.7\.2\.1\.7](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.7)



---

**SNMPv2\-MIB::snmpInPkts 1\.3\.6\.1\.2\.1\.11\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInPkts(1\)**

O número total de mensagens entregues à entidade SNMP do serviço de transporte.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.1](http://oid-info.com/get/1.3.6.1.2.1.11.1)



---

**SNMPv2\-MIB::snmpInBadValues 1\.3\.6\.1\.2\.1\.11\.10**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInBadValues(10\)**

O número total de PDUs SNMP que foram entregues à entidade do protocolo SNMP e para os quais o valor do campo de status de erro foi `badValue`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.10](http://oid-info.com/get/1.3.6.1.2.1.11.10)



---

**SNMPv2\-MIB::snmpInReadOnlys 1\.3\.6\.1\.2\.1\.11\.11**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInReadOnlys(11\)**

O número total válido SNMP PDU que foram entregues à entidade do protocolo SNMP e para os quais o valor do campo de erro foi `readonly`. Deve\-se notar que é um erro de protocolo para gerar um PDU SNMP que contém o valor `readonly` no campo de status de erro, como tal objeto é fornecido como um meio de detectar implementações incorretas do SNMP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.11](http://oid-info.com/get/1.3.6.1.2.1.11.11)



---

**SNMPv2\-MIB::snmpInGenErrs 1\.3\.6\.1\.2\.1\.11\.12**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInGenErrs(12\)**

O número total de PDUs SNMP que foram entregues à entidade do protocolo SNMP e para os quais o valor do campo de status de erro foi`genErr`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.12](http://oid-info.com/get/1.3.6.1.2.1.11.12)



---

**SNMPv2\-MIB::snmpInTotalReqVars 1\.3\.6\.1\.2\.1\.11\.13**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInTotalReqVars(13\)**

O número total de objetos MIB que foram recuperados com sucesso pela entidade do protocolo SNMP como resultado do recebimento de SNMP `get-request` e `get-next` pdus.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.13](http://oid-info.com/get/1.3.6.1.2.1.11.13)



---

**SNMPv2\-MIB::snmpInTotalSetVars 1\.3\.6\.1\.2\.1\.11\.14**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInTotalSetVars(14\)**

O número total de objetos MIB que foram alterados com sucesso pela entidade do protocolo SNMP como resultado do recebimento de SNMP `set-solicitar` PDUs.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.14](http://oid-info.com/get/1.3.6.1.2.1.11.14)



---

**SNMPv2\-MIB::snmpInGetRequests 1\.3\.6\.1\.2\.1\.11\.15**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInGetRequests(15\)**

O número total de PDUs solicitantes SNMP que foram aceitos e processados pela entidade do protocolo SNMP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.15](http://oid-info.com/get/1.3.6.1.2.1.11.15)



---

**SNMPv2\-MIB::snmpInGetNexts 1\.3\.6\.1\.2\.1\.11\.16**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInGetNexts(16\)**

O número total de PDUs SNMP `Get-Next` que foram aceitos e processados pela entidade do protocolo SNMP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.16](http://oid-info.com/get/1.3.6.1.2.1.11.16)



---

**SNMPv2\-MIB::snmpInSetRequests 1\.3\.6\.1\.2\.1\.11\.17**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInSetRequests(17\)**

O número total de PDUs SNMP `Set-Set.` Que foram aceitos e processados pela entidade do protocolo SNMP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.17](http://oid-info.com/get/1.3.6.1.2.1.11.17)



---

**SNMPv2\-MIB::snmpInGetResponses 1\.3\.6\.1\.2\.1\.11\.18**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInGetResponses(18\)**

O número total de PDUs SNMP `Get-Response` que foram aceitos e processados pela entidade do protocolo SNMP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.18](http://oid-info.com/get/1.3.6.1.2.1.11.18)



---

**SNMPv2\-MIB::snmpInTraps 1\.3\.6\.1\.2\.1\.11\.19**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInTraps(19\)**

O número total de PDUs SNMP `Trap` que foram aceitos e processados pela entidade do protocolo SNMP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.19](http://oid-info.com/get/1.3.6.1.2.1.11.19)



---

**SNMPv2\-MIB::snmpOutPkts 1\.3\.6\.1\.2\.1\.11\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpOutPkts(2\)**

O número total de mensagens SNMP que foram transmitidas da entidade do protocolo SNMP para o serviço de transporte.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.2](http://oid-info.com/get/1.3.6.1.2.1.11.2)



---

**SNMPv2\-MIB::snmpOutTooBigs 1\.3\.6\.1\.2\.1\.11\.20**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpOutTooBigs(20\)**

O número total de PDUs SNMP que foram gerados pela entidade do protocolo SNMP e para os quais o valor do campo de status de erro foi `toobig`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.20](http://oid-info.com/get/1.3.6.1.2.1.11.20)



---

**SNMPv2\-MIB::snmpOutNoSuchNames 1\.3\.6\.1\.2\.1\.11\.21**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpOutNoSuchNames(21\)**

O número total de PDUs SNMP que foram gerados pela entidade do protocolo SNMP e para os quais o valor do status de erro foi `NOSUCHNAME`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.21](http://oid-info.com/get/1.3.6.1.2.1.11.21)



---

**SNMPv2\-MIB::snmpOutBadValues 1\.3\.6\.1\.2\.1\.11\.22**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpOutBadValues(22\)**

O número total de PDUs SNMP que foram gerados pela entidade do protocolo SNMP e para os quais o valor do campo de status de erro foi `BadValue`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.22](http://oid-info.com/get/1.3.6.1.2.1.11.22)



---

**SNMPv2\-MIB::snmpOutGenErrs 1\.3\.6\.1\.2\.1\.11\.24**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpOutGenErrs(24\)**

O número total de PDUs SNMP que foram gerados pela entidade do protocolo SNMP e para os quais o valor do campo de status de erro foi `Generr`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.24](http://oid-info.com/get/1.3.6.1.2.1.11.24)



---

**SNMPv2\-MIB::snmpOutGetRequests 1\.3\.6\.1\.2\.1\.11\.25**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpOutGetRequests(25\)**

O número total de PDUs SNMP `Get-Request` que foram gerados pela entidade do protocolo SNMP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.25](http://oid-info.com/get/1.3.6.1.2.1.11.25)



---

**SNMPv2\-MIB::snmpOutGetNexts 1\.3\.6\.1\.2\.1\.11\.26**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpOutGetNexts(26\)**

O número total de PDUs SNMP `Get-Next` que foram gerados pela entidade do protocolo SNMP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.26](http://oid-info.com/get/1.3.6.1.2.1.11.26)



---

**SNMPv2\-MIB::snmpOutSetRequests 1\.3\.6\.1\.2\.1\.11\.27**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpOutSetRequests(27\)**

O número total de PDUs SNMP `Set-SetK` que foram gerados pela entidade do protocolo SNMP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.27](http://oid-info.com/get/1.3.6.1.2.1.11.27)



---

**SNMPv2\-MIB::snmpOutGetResponses 1\.3\.6\.1\.2\.1\.11\.28**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpOutGetResponses(28\)**

O número total de PDUs SNMP `get-Response` que foram gerados pela entidade do protocolo SNMP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.28](http://oid-info.com/get/1.3.6.1.2.1.11.28)



---

**SNMPv2\-MIB::snmpOutTraps 1\.3\.6\.1\.2\.1\.11\.29**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpOutTraps(29\)**

O número total de PDUs SNMP `Trap` que foram gerados pela entidade do protocolo SNMP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.29](http://oid-info.com/get/1.3.6.1.2.1.11.29)



---

**SNMPv2\-MIB::snmpInBadVersions 1\.3\.6\.1\.2\.1\.11\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInBadVersions(3\)**

O número total de mensagens SNMP que foram entregues à entidade SNMP e foram para uma versão SNMP sem suporte.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.3](http://oid-info.com/get/1.3.6.1.2.1.11.3)



---

**SNMPv2\-MIB::snmpEnableAuthenTraps 1\.3\.6\.1\.2\.1\.11\.30**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpEnableAuthenTraps(30\)**

Indica se a entidade SNMP é permitida para gerar `authenticationfailure` armadilhas.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.30](http://oid-info.com/get/1.3.6.1.2.1.11.30)



---

**SNMPv2\-MIB::snmpSilentDrops 1\.3\.6\.1\.2\.1\.11\.31**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpSilentDrops(31\)**

O número total de PDUs confirmados (como `GetRequest-PDUS`,  
`getnextrequest-pdus`, `getBulkrequest-pdus`, `setrequest-pdus` e `informrequest-PDUS`) entregues à entidade SNMP que foram silenciosamente descartados porque o tamanho de uma resposta contendo uma classe de resposta alternativa PDU (como uma resposta\-PDU) com um campo de ligações variáveis vazias foi maior que uma restrição local ou a mensagem máximatamanho associado ao originador da solicitação.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.31](http://oid-info.com/get/1.3.6.1.2.1.11.31)



---

**SNMPv2\-MIB::snmpProxyDrops 1\.3\.6\.1\.2\.1\.11\.32**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpProxyDrops(32\)**

O número total de PDUs confirmados (como `getrequest-pdus`, `getnExtrequest-pdus`, `getBulkRequest-PDUS`, `setrequest-pdus` e `informrequest-pdus`) entregues à entidade SNMP que foram silenciosamente descartados porque a transmissão da mensagem (possivelmente traduzida) para um alvo de proxy falhou de uma maneira (diferente de um tempo limite) de tal modo que nenhuma resposta de resposta (como uma resposta `-Pdu`) poderia ser devolvido. `-Pdu`) poderia ser devolvido.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.32](http://oid-info.com/get/1.3.6.1.2.1.11.32)



---

**SNMPv2\-MIB::snmpInBadCommunityNames 1\.3\.6\.1\.2\.1\.11\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInBadCommunityNames(4\)**

O número total de mensagens SNMP baseadas na comunidade (por exemplo, SNMPV1\) entregue à entidade SNMP que usou um nome comunitário SNMP não conhecido pela referida entidade.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.4](http://oid-info.com/get/1.3.6.1.2.1.11.4)



---

**SNMPv2\-MIB::snmpInBadCommunityUses 1\.3\.6\.1\.2\.1\.11\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInBadCommunityUses(5\)**

O número total de mensagens SNMP baseadas na comunidade (por exemplo, SNMPV1\) entregue à entidade SNMP que representou uma operação SNMP que não foi permitida para a comunidade SNMP nomeada na mensagem.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.5](http://oid-info.com/get/1.3.6.1.2.1.11.5)



---

**SNMPv2\-MIB::snmpInASNParseErrs 1\.3\.6\.1\.2\.1\.11\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInASNParseErrs(6\)**

O número total de erros ASN.1 ou BER encontrados pela entidade SNMP ao decodificar mensagens SNMP recebidas.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.6](http://oid-info.com/get/1.3.6.1.2.1.11.6)



---

**SNMPv2\-MIB::snmpInTooBigs 1\.3\.6\.1\.2\.1\.11\.8**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInTooBigs(8\)**

O número total de PDUs SNMP que foram entregues à entidade do protocolo SNMP e para os quais o valor do campo de erro foi `toobig`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.8](http://oid-info.com/get/1.3.6.1.2.1.11.8)



---

**SNMPv2\-MIB::snmpInNoSuchNames 1\.3\.6\.1\.2\.1\.11\.9**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔snmp(11\) ➔snmpInNoSuchNames(9\)**

O número total de PDUs SNMP que foram entregues à entidade do protocolo SNMP e para os quais o valor do campo de status de erro foi `NOSUCHNAME`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.11\.9](http://oid-info.com/get/1.3.6.1.2.1.11.9)



---

**IF\-MIB::ifNumber 1\.3\.6\.1\.2\.1\.2\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifNumber(1\)**

O número de interfaces de rede (independentemente do estado atual) presente neste sistema.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.1](http://oid-info.com/get/1.3.6.1.2.1.2.1)



---

**IF\-MIB::ifIndex 1\.3\.6\.1\.2\.1\.2\.2\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifIndex(1\)**

Um valor único, maior que zero, para cada interface.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.1)



---

**IF\-MIB::ifInOctets 1\.3\.6\.1\.2\.1\.2\.2\.1\.10**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifInOctets(10\)**

O número total de octetos recebidos na interface, incluindo os caracteres de enquadramento.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.10](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.10)



---

**IF\-MIB::ifInUcastPkts 1\.3\.6\.1\.2\.1\.2\.2\.1\.11**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifInUcastPkts(11\)**

O número de pacotes, entregue por esta sub\-camada para uma camada superior (sub\-), que não foram endereçadas a um endereço multicast ou de difusão nesta sub\-camada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.11](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.11)



---

**IF\-MIB::ifInNUcastPkts 1\.3\.6\.1\.2\.1\.2\.2\.1\.12**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifInNUcastPkts(12\)**

O número de pacotes, entregue por esta sub\-camada para uma camada superior (sub\-), que foram endereçadas a um endereço multicast ou de difusão nesta sub\-camada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.12](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.12)



---

**IF\-MIB::ifInDiscards 1\.3\.6\.1\.2\.1\.2\.2\.1\.13**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifInDiscards(13\)**

O número de pacotes de entrada que foram escolhidos para serem descartados, embora nenhum erro tivesse sido detectado para evitar que seja entregue a um protocolo de maior camada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.13](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.13)



---

**IF\-MIB::ifInErrors 1\.3\.6\.1\.2\.1\.2\.2\.1\.14**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifInErrors(14\)**

Para interfaces orientadas para pacotes, o número de pacotes de entrada que continha erros impedindo que eles sejam entregues em um protocolo de camada superior.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.14](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.14)



---

**IF\-MIB::ifInUnknownProtos 1\.3\.6\.1\.2\.1\.2\.2\.1\.15**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifInUnknownProtos(15\)**

Para interfaces orientadas para pacotes, o número de pacotes recebidos por meio da interface que foi descartada devido a um protocolo desconhecido ou não suportado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.15](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.15)



---

**IF\-MIB::ifOutOctets 1\.3\.6\.1\.2\.1\.2\.2\.1\.16**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifOutOctets(16\)**

O número total de octetos transmitidos da interface, incluindo os caracteres de enquadramento.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.16](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.16)



---

**IF\-MIB::ifOutUcastPkts 1\.3\.6\.1\.2\.1\.2\.2\.1\.17**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifOutUcastPkts(17\)**

O número total de pacotes que protocolos de nível superior solicitados são transmitidos e quais não foram endereçados a um endereço multicast ou de transmissão nesta sub\-camada, incluindo aqueles que foram descartados ou não enviados.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.17](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.17)



---

**IF\-MIB::ifOutNUcastPkts 1\.3\.6\.1\.2\.1\.2\.2\.1\.18**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifOutNUcastPkts(18\)**

O número total de pacotes que protocolos de nível superior solicitados são transmitidos, e que foram endereçados a um endereço multicast ou de transmissão nesta sub\-camada, incluindo aqueles que foram descartados ou não enviados.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.18](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.18)



---

**IF\-MIB::ifOutDiscards 1\.3\.6\.1\.2\.1\.2\.2\.1\.19**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifOutDiscards(19\)**

O número de pacotes de saída que foram escolhidos para serem descartados, embora nenhum erro tivesse sido detectado para evitar que sejam transmitidos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.19](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.19)



---

**IF\-MIB::ifDescr 1\.3\.6\.1\.2\.1\.2\.2\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifDescr(2\)**

Uma string textual contendo informações sobre a interface.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.2)



---

**IF\-MIB::ifOutErrors 1\.3\.6\.1\.2\.1\.2\.2\.1\.20**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifOutErrors(20\)**

Para interfaces orientadas para pacotes, o número de pacotes de saída que não pôde ser transmitido devido a erros.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.20](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.20)



---

**IF\-MIB::ifOutQLen 1\.3\.6\.1\.2\.1\.2\.2\.1\.21**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifOutQLen(21\)**

O comprimento da fila de pacotes de saída (em pacotes).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.21](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.21)



---

**IF\-MIB::ifSpecific 1\.3\.6\.1\.2\.1\.2\.2\.1\.22**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifSpecific(22\)**

Uma referência às definições do MIB específicas para a mídia particular sendo usada para realizar a interface.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.22](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.22)



---

**IF\-MIB::ifType 1\.3\.6\.1\.2\.1\.2\.2\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifType(3\)**

O tipo de interface.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.3)



---

**IF\-MIB::ifMtu 1\.3\.6\.1\.2\.1\.2\.2\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifMtu(4\)**

O tamanho do maior pacote que pode ser enviado / recebido na interface, especificado em octetos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.4)



---

**IF\-MIB::ifSpeed 1\.3\.6\.1\.2\.1\.2\.2\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifSpeed(5\)**

Uma estimativa da largura de banda atual da interface em bits por segundo.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.5)



---

**IF\-MIB::ifPhysAddress 1\.3\.6\.1\.2\.1\.2\.2\.1\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifPhysAddress(6\)**

O endereço da interface em sua sub\-camada de protocolo.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.6](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.6)



---

**IF\-MIB::ifAdminStatus 1\.3\.6\.1\.2\.1\.2\.2\.1\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifAdminStatus(7\)**

O estado desejado da interface.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.7](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.7)



---

**IF\-MIB::ifOperStatus 1\.3\.6\.1\.2\.1\.2\.2\.1\.8**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifOperStatus(8\)**

O estado operacional atual da interface.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.8](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.8)



---

**IF\-MIB::ifLastChange 1\.3\.6\.1\.2\.1\.2\.2\.1\.9**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔interfaces(2\) ➔ifTable(2\) ➔ifEntry(1\) ➔ifLastChange(9\)**

O valor de `sysuptime` no momento em que a interface entrou no estado operacional atual.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.2\.2\.1\.9](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.9)



---

**HOST\-RESOURCES\-MIB::hrSystemUptime 1\.3\.6\.1\.2\.1\.25\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrSystem(1\) ➔hrSystemUptime(1\)**

A quantidade de tempo desde que este anfitrião foi inicializado pela última vez.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.25.1.1)



---

**HOST\-RESOURCES\-MIB::hrSystemDate 1\.3\.6\.1\.2\.1\.25\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrSystem(1\) ➔hrSystemDate(2\)**

A noção do anfitrião da data local e da hora do dia.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.25.1.2)



---

**HOST\-RESOURCES\-MIB::hrSystemNumUsers 1\.3\.6\.1\.2\.1\.25\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrSystem(1\) ➔hrSystemNumUsers(5\)**

O número de sessões de usuário para as quais esse host está armazenando informações do estado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.25.1.5)



---

**HOST\-RESOURCES\-MIB::hrSystemProcesses 1\.3\.6\.1\.2\.1\.25\.1\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrSystem(1\) ➔hrSystemProcesses(6\)**

O número de contextos de processo atualmente carregados ou em execução neste sistema.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.1\.6](http://oid-info.com/get/1.3.6.1.2.1.25.1.6)



---

**HOST\-RESOURCES\-MIB::hrSystemMaxProcesses 1\.3\.6\.1\.2\.1\.25\.1\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrSystem(1\) ➔hrSystemMaxProcesses(7\)**

O número máximo de contextos de processo que esse sistema pode suportar.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.1\.7](http://oid-info.com/get/1.3.6.1.2.1.25.1.7)



---

**HOST\-RESOURCES\-MIB::hrMemorySize 1\.3\.6\.1\.2\.1\.25\.2\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrStorage(2\) ➔hrMemorySize(2\)**

A quantidade de memória principal de leitura física, tipicamente RAM, contida pelo host.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.2\.2](http://oid-info.com/get/1.3.6.1.2.1.25.2.2)



---

**HOST\-RESOURCES\-MIB::hrStorageIndex 1\.3\.6\.1\.2\.1\.25\.2\.3\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrStorage(2\) ➔hrStorageTable(3\) ➔hrStorageEntry(1\) ➔hrStorageIndex(1\)**

Um valor único para cada área de armazenamento lógico contida pelo host.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.2\.3\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.1)



---

**HOST\-RESOURCES\-MIB::hrStorageType 1\.3\.6\.1\.2\.1\.25\.2\.3\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrStorage(2\) ➔hrStorageTable(3\) ➔hrStorageEntry(1\) ➔hrStorageType(2\)**

O tipo de armazenamento representado por esta entrada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.2\.3\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.2)



---

**HOST\-RESOURCES\-MIB::hrStorageDescr 1\.3\.6\.1\.2\.1\.25\.2\.3\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrStorage(2\) ➔hrStorageTable(3\) ➔hrStorageEntry(1\) ➔hrStorageDescr(3\)**

Uma descrição do tipo e instância do armazenamento descrito por esta entrada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.2\.3\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.3)



---

**HOST\-RESOURCES\-MIB::hrStorageAllocationUnits 1\.3\.6\.1\.2\.1\.25\.2\.3\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrStorage(2\) ➔hrStorageTable(3\) ➔hrStorageEntry(1\) ➔hrStorageAllocationUnits(4\)**

O tamanho, em bytes, dos objetos de dados alocados a partir deste pool.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.2\.3\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.4)



---

**HOST\-RESOURCES\-MIB::hrStorageSize 1\.3\.6\.1\.2\.1\.25\.2\.3\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrStorage(2\) ➔hrStorageTable(3\) ➔hrStorageEntry(1\) ➔hrStorageSize(5\)**

O tamanho do armazenamento representado por esta entrada, em unidades  
de `hrstorageallocationunits`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.2\.3\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.5)



---

**HOST\-RESOURCES\-MIB::hrStorageUsed 1\.3\.6\.1\.2\.1\.25\.2\.3\.1\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrStorage(2\) ➔hrStorageTable(3\) ➔hrStorageEntry(1\) ➔hrStorageUsed(6\)**

O montante do armazenamento representado por esta entrada que é alocado, em unidades de `hrstorageallocationunits`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.2\.3\.1\.6](http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.6)



---

**HOST\-RESOURCES\-MIB::hrDeviceIndex 1\.3\.6\.1\.2\.1\.25\.3\.2\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrDeviceTable(2\) ➔hrDeviceEntry(1\) ➔hrDeviceIndex(1\)**

Um valor único para cada dispositivo contido pelo host.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.2\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.1)



---

**HOST\-RESOURCES\-MIB::hrDeviceType 1\.3\.6\.1\.2\.1\.25\.3\.2\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrDeviceTable(2\) ➔hrDeviceEntry(1\) ➔hrDeviceType(2\)**

Uma indicação do tipo de dispositivo.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.2\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.2)



---

**HOST\-RESOURCES\-MIB::hrDeviceDescr 1\.3\.6\.1\.2\.1\.25\.3\.2\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrDeviceTable(2\) ➔hrDeviceEntry(1\) ➔hrDeviceDescr(3\)**

Uma descrição textual deste dispositivo, incluindo o fabricante e a revisão do dispositivo e, opcionalmente, seu número de série.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.2\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.3)



---

**HOST\-RESOURCES\-MIB::hrDeviceID 1\.3\.6\.1\.2\.1\.25\.3\.2\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrDeviceTable(2\) ➔hrDeviceEntry(1\) ➔hrDeviceID(4\)**

O ID do produto para este dispositivo.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.2\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.4)



---

**HOST\-RESOURCES\-MIB::hrDeviceStatus 1\.3\.6\.1\.2\.1\.25\.3\.2\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrDeviceTable(2\) ➔hrDeviceEntry(1\) ➔hrDeviceStatus(5\)**

O estado operacional atual do dispositivo descrito por esta linha da tabela.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.2\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.5)



---

**HOST\-RESOURCES\-MIB::hrDeviceErrors 1\.3\.6\.1\.2\.1\.25\.3\.2\.1\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrDeviceTable(2\) ➔hrDeviceEntry(1\) ➔hrDeviceErrors(6\)**

O número de erros detectados neste dispositivo.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.2\.1\.6](http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.6)



---

**HOST\-RESOURCES\-MIB::hrProcessorFrwID 1\.3\.6\.1\.2\.1\.25\.3\.3\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrProcessorTable(3\) ➔hrProcessorEntry(1\) ➔hrProcessorFrwID(1\)**

O ID do produto do firmware associado ao processador.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.3\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.25.3.3.1.1)



---

**HOST\-RESOURCES\-MIB::hrProcessorLoad 1\.3\.6\.1\.2\.1\.25\.3\.3\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrProcessorTable(3\) ➔hrProcessorEntry(1\) ➔hrProcessorLoad(2\)**

A média, no último minuto, da porcentagem de tempo que este processador não estava ocioso.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.3\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.25.3.3.1.2)



---

**HOST\-RESOURCES\-MIB::hrNetworkIfIndex 1\.3\.6\.1\.2\.1\.25\.3\.4\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrNetworkTable(4\) ➔hrNetworkEntry(1\) ➔hrNetworkIfIndex(1\)**

O valor de `ifindex` que corresponde a este dispositivo de rede.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.4\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.25.3.4.1.1)



---

**HOST\-RESOURCES\-MIB::hrFSIndex 1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrFSTable(8\) ➔hrFSEntry(1\) ➔hrFSIndex(1\)**

Um valor único para cada sistema de arquivos local para este host.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.1)



---

**HOST\-RESOURCES\-MIB::hrFSMountPoint 1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrFSTable(8\) ➔hrFSEntry(1\) ➔hrFSMountPoint(2\)**

O nome do caminho da raiz deste sistema de arquivos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.2)



---

**HOST\-RESOURCES\-MIB::hrFSRemoteMountPoint 1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrFSTable(8\) ➔hrFSEntry(1\) ➔hrFSRemoteMountPoint(3\)**

Uma descrição do nome e / ou endereço do servidor que este sistema de arquivos é montado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.3)



---

**HOST\-RESOURCES\-MIB::hrFSType 1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrFSTable(8\) ➔hrFSEntry(1\) ➔hrFSType(4\)**

O valor desse objeto identifica o tipo desse sistema de arquivos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.4)



---

**HOST\-RESOURCES\-MIB::hrFSAccess 1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrFSTable(8\) ➔hrFSEntry(1\) ➔hrFSAccess(5\)**

Uma indicação se este sistema de arquivos for logicamente configurado pelo sistema operacional para ser legível e gravável ou somente legível.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.5)



---

**HOST\-RESOURCES\-MIB::hrFSBootable 1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrFSTable(8\) ➔hrFSEntry(1\) ➔hrFSBootable(6\)**

Uma bandeira indicando se este sistema de arquivos é inicializável.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.6](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.6)



---

**HOST\-RESOURCES\-MIB::hrFSStorageIndex 1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrFSTable(8\) ➔hrFSEntry(1\) ➔hrFSStorageIndex(7\)**

O índice do `hrstorageentry` que representa informações sobre este sistema de arquivos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.7](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.7)



---

**HOST\-RESOURCES\-MIB::hrFSLastFullBackupDate 1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.8**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrFSTable(8\) ➔hrFSEntry(1\) ➔hrFSLastFullBackupDate(8\)**

A última data em que este sistema de arquivos completo foi copiado para outro dispositivo de armazenamento para backup.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.8](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.8)



---

**HOST\-RESOURCES\-MIB::hrFSLastPartialBackupDate 1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.9**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔host(25\) ➔hrDevice(3\) ➔hrFSTable(8\) ➔hrFSEntry(1\) ➔hrFSLastPartialBackupDate(9\)**

A última data em que uma parte deste sistema de arquivos foi copiada para outro dispositivo de armazenamento para backup.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.25\.3\.8\.1\.9](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.9)



---

**MTA\-MIB::mtaStoredMessages 1\.3\.6\.1\.2\.1\.28\.1\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔mta(28\) ➔mtaTable(1\) ➔mtaEntry(1\) ➔mtaStoredMessages(2\)**

O número total de mensagens atualmente armazenadas no MTA.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.28\.1\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.28.1.1.2)



---

**MTA\-MIB::mtaStoredVolume 1\.3\.6\.1\.2\.1\.28\.1\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔mta(28\) ➔mtaTable(1\) ➔mtaEntry(1\) ➔mtaStoredVolume(5\)**

O volume total de mensagens atualmente armazenado no MTA, medido em quilos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.28\.1\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.28.1.1.5)



---

**MTA\-MIB::mtaGroupHierarchy 1\.3\.6\.1\.2\.1\.28\.2\.1\.31**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔mta(28\) ➔mtaGroupTable(2\) ➔mtaGroupEntry(1\) ➔mtaGroupHierarchy(31\)**

Descreve como esse grupo se encaixa na hierarquia.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.28\.2\.1\.31](http://oid-info.com/get/1.3.6.1.2.1.28.2.1.31)



---

**MTA\-MIB::mtaGroupStoredMessages 1\.3\.6\.1\.2\.1\.28\.2\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔mta(28\) ➔mtaGroupTable(2\) ➔mtaGroupEntry(1\) ➔mtaGroupStoredMessages(4\)**

O número total de mensagens atualmente armazenadas na fila deste grupo.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.28\.2\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.28.2.1.4)



---

**MTA\-MIB::mtaGroupStoredVolume 1\.3\.6\.1\.2\.1\.28\.2\.1\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔mta(28\) ➔mtaGroupTable(2\) ➔mtaGroupEntry(1\) ➔mtaGroupStoredVolume(7\)**

O volume total de mensagens atualmente armazenado na fila deste grupo, medido em quilo\-octetos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.28\.2\.1\.7](http://oid-info.com/get/1.3.6.1.2.1.28.2.1.7)



---

**IF\-MIB::ifName 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifName(1\)**

O nome textual da interface.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.1)



---

**IF\-MIB::ifHCOutOctets 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.10**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifHCOutOctets(10\)**

O número total de octetos transmitidos da interface, incluindo os caracteres de enquadramento.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.10](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.10)



---

**IF\-MIB::ifHCOutUcastPkts 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.11**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifHCOutUcastPkts(11\)**

O número total de pacotes que protocolos de nível superior solicitados são transmitidos e quais não foram endereçados a um endereço multicast ou de transmissão nesta sub\-camada, incluindo aqueles que foram descartados ou não enviados.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.11](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.11)



---

**IF\-MIB::ifHCOutMulticastPkts 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.12**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifHCOutMulticastPkts(12\)**

O número total de pacotes que protocolos de nível superior solicitados são transmitidos e que foram endereçados a um endereço multicast nessa sub\-camada, incluindo aqueles que foram descartados ou não enviados.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.12](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.12)



---

**IF\-MIB::ifHCOutBroadcastPkts 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.13**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifHCOutBroadcastPkts(13\)**

O número total de pacotes que protocolos de nível superior solicitados são transmitidos e os quais foram endereçados a um endereço de transmissão nesta sub\-camada, incluindo aqueles que foram descartados ou não enviados.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.13](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.13)



---

**IF\-MIB::ifHighSpeed 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.15**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifHighSpeed(15\)**

Uma estimativa da largura de banda atual da interface em unidades de 1\.000\.000 de bits por segundo.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.15](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.15)



---

**IF\-MIB::ifPromiscuousMode 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.16**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifPromiscuousMode(16\)**

Este objeto tem um valor de falso (2\) se essa interface aceitar apenas pacotes / quadros que forem endereçados a esta estação.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.16](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.16)



---

**IF\-MIB::ifConnectorPresent 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.17**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifConnectorPresent(17\)**

Este objeto tem o valor `TRUE (1)` se a interface Sublayer tiver um conector físico e o valor `FALSE (2)` caso contrário.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.17](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.17)



---

**IF\-MIB::ifAlias 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.18**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifAlias(18\)**

Este objeto é um nome 'Alias' para a interface, conforme especificado por um gerenciador de rede e fornece uma 'identificação' não volátil para a interface.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.18](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.18)



---

**IF\-MIB::ifCounterDiscontinuityTime 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.19**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifCounterDiscontinuityTime(19\)**

O valor de `sysuptime` na ocasião mais recente em que qualquer um ou mais contadores dessa interface sofreu uma descontinuidade.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.19](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.19)



---

**IF\-MIB::ifInMulticastPkts 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifInMulticastPkts(2\)**

O número de pacotes, entregues por esta sub\-camada para uma camada superior (sub\-), que foram endereçadas a um endereço multicast nesta sub\-camada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.2)



---

**IF\-MIB::ifInBroadcastPkts 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifInBroadcastPkts(3\)**

O número de pacotes, entregues por esta sub\-camada para uma camada superior (sub\-), que foram endereçadas a um endereço de transmissão nesta sub\-camada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.3)



---

**IF\-MIB::ifOutMulticastPkts 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifOutMulticastPkts(4\)**

O número total de pacotes que protocolos de nível superior solicitados são transmitidos e que foram endereçados a um endereço multicast nessa sub\-camada, incluindo aqueles que foram descartados ou não enviados.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.4)



---

**IF\-MIB::ifOutBroadcastPkts 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifOutBroadcastPkts(5\)**

O número total de pacotes que protocolos de nível superior solicitados são transmitidos e os quais foram endereçados a um endereço de transmissão nesta sub\-camada, incluindo aqueles que foram descartados ou não enviados.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.5)



---

**IF\-MIB::ifHCInOctets 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifHCInOctets(6\)**

O número total de octetos recebidos na interface, incluindo os caracteres de enquadramento.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.6](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.6)



---

**IF\-MIB::ifHCInUcastPkts 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifHCInUcastPkts(7\)**

O número de pacotes, entregue por esta sub\-camada para uma camada superior (sub\-), que não foram endereçadas a um endereço multicast ou de difusão nesta sub\-camada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.7](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.7)



---

**IF\-MIB::ifHCInMulticastPkts 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.8**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifHCInMulticastPkts(8\)**

O número de pacotes, entregues por esta sub\-camada para uma camada superior (sub\-), que foram endereçadas a um endereço multicast nesta sub\-camada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.8](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.8)



---

**IF\-MIB::ifHCInBroadcastPkts 1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.9**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifXTable(1\) ➔ifXEntry(1\) ➔ifHCInBroadcastPkts(9\)**

O número de pacotes, entregues por esta sub\-camada para uma camada superior (sub\-), que foram endereçadas a um endereço de transmissão nesta sub\-camada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.1\.1\.9](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.9)



---

**IF\-MIB::ifTableLastChange 1\.3\.6\.1\.2\.1\.31\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ifMIB(31\) ➔ifMIBObjects(1\) ➔ifTableLastChange(5\)**

O valor de `sysuptime` no momento da última criação ou exclusão de uma entrada no `ifable`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.31\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.31.1.5)



---

**IP\-MIB::ipForwarding 1\.3\.6\.1\.2\.1\.4\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForwarding(1\)**

A indicação de se esta entidade está atuando como um roteador IPv4 em relação ao encaminhamento de datagramas recebidos por, mas não endereçado a essa entidade.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.1](http://oid-info.com/get/1.3.6.1.2.1.4.1)



---

**IP\-MIB::ipOutRequests 1\.3\.6\.1\.2\.1\.4\.10**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipOutRequests(10\)**

O número total de datagramas IPv4 quais protocolos de usuário IPv4 locais (incluindo ICMP) fornecidos ao IPv4 em solicitações de transmissão.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.10](http://oid-info.com/get/1.3.6.1.2.1.4.10)



---

**IP\-MIB::ipOutDiscards 1\.3\.6\.1\.2\.1\.4\.11**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipOutDiscards(11\)**

O número de datagramas IPv4 de saída para os quais nenhum problema foi encontrado para evitar sua transmissão ao seu destino, mas que foram descartados (por exemplo, por falta de espaço de buffer).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.11](http://oid-info.com/get/1.3.6.1.2.1.4.11)



---

**IP\-MIB::ipOutNoRoutes 1\.3\.6\.1\.2\.1\.4\.12**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipOutNoRoutes(12\)**

O número de datagramas IPv4 descartados porque nenhuma rota pode ser encontrada para transmiti\-los para o destino.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.12](http://oid-info.com/get/1.3.6.1.2.1.4.12)



---

**IP\-MIB::ipReasmTimeout 1\.3\.6\.1\.2\.1\.4\.13**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipReasmTimeout(13\)**

O número máximo de segundos que receberam fragmentos são mantidos enquanto aguardam remontagem nessa entidade.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.13](http://oid-info.com/get/1.3.6.1.2.1.4.13)



---

**IP\-MIB::ipReasmReqds 1\.3\.6\.1\.2\.1\.4\.14**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipReasmReqds(14\)**

O número de fragmentos IPv4 recebidos que precisavam ser remontados nessa entidade.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.14](http://oid-info.com/get/1.3.6.1.2.1.4.14)



---

**IP\-MIB::ipReasmOKs 1\.3\.6\.1\.2\.1\.4\.15**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipReasmOKs(15\)**

O número de datagramas IPv4 re\-montados com sucesso.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.15](http://oid-info.com/get/1.3.6.1.2.1.4.15)



---

**IP\-MIB::ipReasmFails 1\.3\.6\.1\.2\.1\.4\.16**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipReasmFails(16\)**

O número de falhas detectadas pelo algoritmo de re\-montagem IPv4 (por qualquer motivo: expirou, erros, etc).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.16](http://oid-info.com/get/1.3.6.1.2.1.4.16)



---

**IP\-MIB::ipFragOKs 1\.3\.6\.1\.2\.1\.4\.17**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipFragOKs(17\)**

O número de datagramas IPv4 que foram fragmentados com sucesso nessa entidade.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.17](http://oid-info.com/get/1.3.6.1.2.1.4.17)



---

**IP\-MIB::ipFragFails 1\.3\.6\.1\.2\.1\.4\.18**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipFragFails(18\)**

O número de datagramas IPv4 que foram descartados porque precisavam ser fragmentados nessa entidade, mas não podia ser, por exemplo, a sua bandeira não fragmentada foi definida.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.18](http://oid-info.com/get/1.3.6.1.2.1.4.18)



---

**IP\-MIB::ipFragCreates 1\.3\.6\.1\.2\.1\.4\.19**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipFragCreates(19\)**

O número de fragmentos de datagrama IPv4 que foram gerados como resultado da fragmentação nessa entidade.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.19](http://oid-info.com/get/1.3.6.1.2.1.4.19)



---

**IP\-MIB::ipAdEntAddr 1\.3\.6\.1\.2\.1\.4\.20\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddrTable(20\) ➔ipAddrEntry(1\) ➔ipAdEntAddr(1\)**

O endereço IPv4 ao qual as informações de endereçamento desta entrada pertencem.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.20\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.4.20.1.1)



---

**IP\-MIB::ipAdEntIfIndex 1\.3\.6\.1\.2\.1\.4\.20\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddrTable(20\) ➔ipAddrEntry(1\) ➔ipAdEntIfIndex(2\)**

O valor do índice identifica exclusivamente a interface para a qual essa entrada é aplicável.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.20\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.4.20.1.2)



---

**IP\-MIB::ipAdEntNetMask 1\.3\.6\.1\.2\.1\.4\.20\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddrTable(20\) ➔ipAddrEntry(1\) ➔ipAdEntNetMask(3\)**

A máscara de sub\-rede associada ao endereço IPv4 desta entrada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.20\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.4.20.1.3)



---

**IP\-MIB::ipAdEntBcastAddr 1\.3\.6\.1\.2\.1\.4\.20\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddrTable(20\) ➔ipAddrEntry(1\) ➔ipAdEntBcastAddr(4\)**

O valor do bit menos significativo no endereço de transmissão IPv4 usado para envio de datagramas na interface (lógica) associada ao endereço IPv4 desta entrada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.20\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.4.20.1.4)



---

**IP\-MIB::ipNetToMediaIfIndex 1\.3\.6\.1\.2\.1\.4\.22\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipNetToMediaTable(22\) ➔ipNetToMediaEntry(1\) ➔ipNetToMediaIfIndex(1\)**

A interface em que a equivalência desta entrada é eficaz.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.22\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.4.22.1.1)



---

**IP\-MIB::ipNetToMediaPhysAddress 1\.3\.6\.1\.2\.1\.4\.22\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipNetToMediaTable(22\) ➔ipNetToMediaEntry(1\) ➔ipNetToMediaPhysAddress(2\)**

O endereço físico da mídia\-dependente.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.22\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.4.22.1.2)



---

**IP\-MIB::ipNetToMediaNetAddress 1\.3\.6\.1\.2\.1\.4\.22\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipNetToMediaTable(22\) ➔ipNetToMediaEntry(1\) ➔ipNetToMediaNetAddress(3\)**

O ipaddress correspondente ao endereço físico da mídia\-dependente.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.22\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.4.22.1.3)



---

**IP\-MIB::ipNetToMediaType 1\.3\.6\.1\.2\.1\.4\.22\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipNetToMediaTable(22\) ➔ipNetToMediaEntry(1\) ➔ipNetToMediaType(4\)**

O tipo de mapeamento

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.22\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.4.22.1.4)



---

**IP\-FORWARD\-MIB::ipCidrRouteDest 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteDest(1\)**

O destino do endereço de IP da rota.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.1)



---

**IP\-FORWARD\-MIB::ipCidrRouteNextHopAS 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.10**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteNextHopAS(10\)**

O Sistema de Número Autônomo do próximo salto.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.10](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.10)



---

**IP\-FORWARD\-MIB::ipCidrRouteMetric1 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.11**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteMetric1(11\)**

A métrica de roteamento principal para essa rota.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.11](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.11)



---

**IP\-FORWARD\-MIB::ipCidrRouteMetric2 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.12**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteMetric2(12\)**

Uma métrica alternativa para essa rota.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.12](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.12)



---

**IP\-FORWARD\-MIB::ipCidrRouteMetric3 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.13**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteMetric3(13\)**

Uma métrica alternativa para essa rota.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.13](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.13)



---

**IP\-FORWARD\-MIB::ipCidrRouteMetric4 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.14**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteMetric4(14\)**

Uma métrica alternativa para essa rota.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.14](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.14)



---

**IP\-FORWARD\-MIB::ipCidrRouteMetric5 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.15**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteMetric5(15\)**

Uma métrica alternativa para essa rota.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.15](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.15)



---

**IP\-FORWARD\-MIB::ipCidrRouteStatus 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.16**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteStatus(16\)**

A variável de status da linha, usada de acordo com as convenções de instalação e remoção de linha.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.16](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.16)



---

**IP\-FORWARD\-MIB::ipCidrRouteMask 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteMask(2\)**

Indica a máscara que será logical\-Anded com o endereço de destino, antes de ser comparada com o valor do campo: `ipCidrRouteDest` field.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.2)



---

**IP\-FORWARD\-MIB::ipCidrRouteTos 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteTos(3\)**

O especificador de política é campo IP TOS.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.3)



---

**IP\-FORWARD\-MIB::ipCidrRouteNextHop 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteNextHop(4\)**

Em rotas remotas, o endereço do próximo sistema a caminho; Caso contrário, 0\.0\.0\.0\.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.4)



---

**IP\-FORWARD\-MIB::ipCidrRouteIfIndex 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteIfIndex(5\)**

O valor `ifIndex` identifica a interface local através da qual o próximo salto dessa rota será alcançado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.5)



---

**IP\-FORWARD\-MIB::ipCidrRouteType 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteType(6\)**

O tipo da rota.

Mai detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.6](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.6)



---

**IP\-FORWARD\-MIB::ipCidrRouteProto 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteProto(7\)**

O mecanismo de roteamento através do qual essa rota foi aprendida.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.7](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.7)



---

**IP\-FORWARD\-MIB::ipCidrRouteInfo 1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.9**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔ipCidrRouteTable(4\) ➔ipCidrRouteEntry(1\) ➔ipCidrRouteInfo(9\)**

Uma referência às definições MIB, específicas para o protocolo de roteamento particular que é responsável por esta rota, conforme determinado pelo valor especificado no seguinte valor da rota: `ipCidrRouteProto` value.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.4\.1\.9](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.9)



---

**IP\-FORWARD\-MIB::inetCidrRouteNumber 1\.3\.6\.1\.2\.1\.4\.24\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔inetCidrRouteNumber(6\)**

O número atual de entradas `inetCidrRouteTable` que não estão inválidas.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.6](http://oid-info.com/get/1.3.6.1.2.1.4.24.6)



---

**IP\-FORWARD\-MIB::inetCidrRouteAge.ipv4 1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.10**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔inetCidrRouteTable(7\) ➔inetCidrRouteEntry(1\) ➔inetCidrRouteAge(10\)**

O número de segundos desde que esta rota foi atualizada pela última vez ou, caso contrário, determinado como correto.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.10](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.10)



---

**IP\-FORWARD\-MIB::inetCidrRouteNextHopAS.ipv4 1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.11**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔inetCidrRouteTable(7\) ➔inetCidrRouteEntry(1\) ➔inetCidrRouteNextHopAS(11\)**

O Número do Sistema Autônomo do Próximo Salto.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.11](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.11)



---

**IP\-FORWARD\-MIB::inetCidrRouteMetric1\.ipv4 1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.12**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔inetCidrRouteTable(7\) ➔inetCidrRouteEntry(1\) ➔inetCidrRouteMetric1(12\)**

A métrica de roteamento principal para esta rota.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.12](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.12)



---

**IP\-FORWARD\-MIB::inetCidrRouteMetric2\.ipv4 1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.13**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔inetCidrRouteTable(7\) ➔inetCidrRouteEntry(1\) ➔inetCidrRouteMetric2(13\)**

Uma métrica de roteamento alternativa para esta rota.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.13](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.13)



---

**IP\-FORWARD\-MIB::inetCidrRouteMetric3\.ipv4 1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.14**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔inetCidrRouteTable(7\) ➔inetCidrRouteEntry(1\) ➔inetCidrRouteMetric3(14\)**

Uma métrica de roteamento alternativa para esta rota.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.14](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.14)



---

**IP\-FORWARD\-MIB::inetCidrRouteMetric4\.ipv4 1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.15**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔inetCidrRouteTable(7\) ➔inetCidrRouteEntry(1\) ➔inetCidrRouteMetric4(15\)**

Uma métrica de roteamento alternativa para esta rota.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.15](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.15)



---

**IP\-FORWARD\-MIB::inetCidrRouteMetric5\.ipv4 1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.16**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔inetCidrRouteTable(7\) ➔inetCidrRouteEntry(1\) ➔inetCidrRouteMetric5(16\)**

Uma métrica de roteamento alternativa para esta rota.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.16](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.16)



---

**IP\-FORWARD\-MIB::inetCidrRouteStatus.ipv4 1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.17**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔inetCidrRouteTable(7\) ➔inetCidrRouteEntry(1\) ➔inetCidrRouteStatus(17\)**

A variável de status da linha, usada de acordo com as convenções de instalação e remoção de linha.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.17](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.17)



---

**IP\-FORWARD\-MIB::inetCidrRouteIfIndex.ipv4 1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔inetCidrRouteTable(7\) ➔inetCidrRouteEntry(1\) ➔inetCidrRouteIfIndex(7\)**

O valor `ifIndex`, que identifica a interface local através da qual o próximo salto deve ser atingido.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.7](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.7)



---

**IP\-FORWARD\-MIB::inetCidrRouteType.ipv4 1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.8**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔inetCidrRouteTable(7\) ➔inetCidrRouteEntry(1\) ➔inetCidrRouteType(8\)**

O tipo de rota.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.8](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.8)



---

**IP\-FORWARD\-MIB::inetCidrRouteProto.ipv4 1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.9**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForward(24\) ➔inetCidrRouteTable(7\) ➔inetCidrRouteEntry(1\) ➔inetCidrRouteProto(9\)**

O mecanismo de roteamento pelo qual essa rota é aprendida.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.24\.7\.1\.9](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.9)



---

**IP\-MIB::ipInReceives 1\.3\.6\.1\.2\.1\.4\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipInReceives(3\)**

O número total de inputs datagramas recebidos de interfaces, incluindo aqueles recebidos com erro.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.3](http://oid-info.com/get/1.3.6.1.2.1.4.3)



---

**IP\-MIB::ipSystemStatsInUnknownProtos.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.10**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsInUnknownProtos(10\)**

O número de datagramas IP endereçados localmente recebidos com sucesso, mas que foram descartados devido a um protocolo desconhecido ou não suportado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.10](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.10)



---

**IP\-MIB::ipSystemStatsInTruncatedPkts.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.11**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsInTruncatedPkts(11\)**

O número de inputs de datagramas IP descartados porque o quadro do datagrama não continha dados suficientes.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.11](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.11)



---

**IP\-MIB::ipSystemStatsInForwDatagrams.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.12**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsInForwDatagrams(12\)**

O número de input de datagramas para o qual esta entidade não foi o destino final e para o qual esta entidade tentou achar uma rota para encaminhá\-los para um destino final.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.12](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.12)



---

**IP\-MIB::ipSystemStatsHCInForwDatagrams.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.13**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsHCInForwDatagrams(13\)**

O número de input de datagramas para o qual esta entidade não foi o destino final e para o qual esta entidade tentou achar uma rota para encaminhá\-los para um destino final.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.13](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.13)



---

**IP\-MIB::ipSystemStatsReasmReqds.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.14**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsReasmReqds(14\)**

O número de fragmentos de IP recebidos que precisaram ser remontados nesta interface.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.14](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.14)



---

**IP\-MIB::ipSystemStatsReasmOKs.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.15**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsReasmOKs(15\)**

O número de datagramas IP remontados com sucesso.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.15](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.15)



---

**IP\-MIB::ipSystemStatsReasmFails.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.16**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsReasmFails(16\)**

O número de falhas detectadas pelo algoritmo de remontagem de IP (por qualquer que seja a razão: time out, erros, etc.).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.16](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.16)



---

**IP\-MIB::ipSystemStatsInDiscards.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.17**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsInDiscards(17\)**

O número de input de datagramas IP que não tiveram problemas encontrados para evitar processamento contínuo, mas foram descartados (por exemplo: por falta de área de buffer).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.17](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.17)



---

**IP\-MIB::ipSystemStatsInDelivers.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.18**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsInDelivers(18\)**

O número total de datagramas entregues com sucesso para o IP user\-protocols (incluindo ICMP).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.18](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.18)



---

**IP\-MIB::ipSystemStatsHCInDelivers.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.19**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsHCInDelivers(19\)**

O número total de datagramas entregues com sucesso para o IP user\-protocols (incluindo ICMP).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.19](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.19)



---

**IP\-MIB::ipSystemStatsOutRequests.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.20**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsOutRequests(20\)**

O número total de datagramas IP que o IP user\-protocols local (incluindo ICMP) fornecidos para o IP em solicitações de transmissão.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.20](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.20)



---

**IP\-MIB::ipSystemStatsHCOutRequests.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.21**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsHCOutRequests(21\)**

O número total de datagramas IP que o IP user\-protocols local (incluindo ICMP) fornecidos para o IP em solicitações de transmissão.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.21](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.21)



---

**IP\-MIB::ipSystemStatsOutNoRoutes.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.22**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsOutNoRoutes(22\)**

O número de datagramas IP descartados pois nenhuma rota pode ser encontrada para transmiti\-los para seus destinos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.22](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.22)



---

**IP\-MIB::ipSystemStatsOutForwDatagrams.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.23**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsOutForwDatagrams(23\)**

O número de datagramas para os quais esta entidade não foi o IP de destino final e para os quais houve sucesso em encontrar um caminho para destino final dos mesmos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.23](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.23)



---

**IP\-MIB::ipSystemStatsHCOutForwDatagrams.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.24**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsHCOutForwDatagrams(24\)**

O número de datagramas para os quais esta entidade não foi o IP de destino final e para os quais houve sucesso em encontrar um caminho para destino final dos mesmos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.24](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.24)



---

**IP\-MIB::ipSystemStatsOutDiscards.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.25**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsOutDiscards(25\)**

O número de outputs de datagrama IP para os quais nenhum problema foi encontrado para evitar a transmissão deles para seus destinos, mas que foram descartados (exemplo: por falta de área buffer).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.25](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.25)



---

**IP\-MIB::ipSystemStatsOutFragReqds.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.26**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsOutFragReqds(26\)**

O número de datagramas IP que requisitariam fragmentação para serem transmitidos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.26](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.26)



---

**IP\-MIB::ipSystemStatsOutFragOKs.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.27**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsOutFragOKs(27\)**

O número de datagramas IP que foram fragmentados com sucesso.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.27](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.27)



---

**IP\-MIB::ipSystemStatsOutFragFails.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.28**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsOutFragFails(28\)**

O número de datagramas IP que foram descartados pois precisavam ser fragmentados mas não conseguiram.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.28](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.28)



---

**IP\-MIB::ipSystemStatsOutFragCreates.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.29**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsOutFragCreates(29\)**

O número de output de fragmentos de datagrama que foram gerados como resultado de fragmentação de IP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.29](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.29)



---

**IP\-MIB::ipSystemStatsInReceives.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsInReceives(3\)**

O número total de inputs de datagrama IP recebidos, icluindo aqueles com erros.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.3)



---

**IP\-MIB::ipSystemStatsOutTransmits.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.30**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsOutTransmits(30\)**

O número total de datagramas IP que esta entidade forneceu às camadas inferiores para transmissão.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.30](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.30)



---

**IP\-MIB::ipSystemStatsHCOutTransmits.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.31**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsHCOutTransmits(31\)**

O número total de datagramas IP que esta entidade forneceu às camadas inferiores para transmissão.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.31](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.31)



---

**IP\-MIB::ipSystemStatsOutOctets.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.32**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsOutOctets(32\)**

O número total de octetos em datagramas IP entregues às camadas inferiores para transmissão.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.32](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.32)



---

**IP\-MIB::ipSystemStatsHCOutOctets.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.33**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsHCOutOctets(33\)**

O número total de octetos em datagramas IP entregues às camadas inferiores para transmissão.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.33](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.33)



---

**IP\-MIB::ipSystemStatsInMcastPkts.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.34**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsInMcastPkts(34\)**

O número de datagramas multicast IP recebidos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.34](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.34)



---

**IP\-MIB::ipSystemStatsHCInMcastPkts.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.35**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsHCInMcastPkts(35\)**

O número de datagramas multicast IP recebidos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.35](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.35)



---

**IP\-MIB::ipSystemStatsInMcastOctets.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.36**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsInMcastOctets(36\)**

O número total de octetos recebidos em datagrams multicast IP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.36](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.36)



---

**IP\-MIB::ipSystemStatsHCInMcastOctets.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.37**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsHCInMcastOctets(37\)**

O número total de octetos recebidos em datagrams multicast IP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.37](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.37)



---

**IP\-MIB::ipSystemStatsOutMcastPkts.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.38**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsOutMcastPkts(38\)**

O número de datagramas multicast IP transmitidos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.38](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.38)



---

**IP\-MIB::ipSystemStatsHCOutMcastPkts.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.39**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsHCOutMcastPkts(39\)**

O número de datagramas multicast IP transmitidos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.39](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.39)



---

**IP\-MIB::ipSystemStatsHCInReceives.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsHCInReceives(4\)**

O número total de inputs de datagramas IP recebidos, mesmo aqueles com erro.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.4)



---

**IP\-MIB::ipSystemStatsOutMcastOctets.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.40**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsOutMcastOctets(40\)**

O número total de octetos transmitidos em datagramas multicast IP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.40](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.40)



---

**IP\-MIB::ipSystemStatsHCOutMcastOctets.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.41**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsHCOutMcastOctets(41\)**

O número total de octetos transmitidos em datagramas multicast IP.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.41](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.41)



---

**IP\-MIB::ipSystemStatsInBcastPkts.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.42**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsInBcastPkts(42\)**

O número de datagramas de transmissão IP recebidos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.42](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.42)



---

**IP\-MIB::ipSystemStatsHCInBcastPkts.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.43**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsHCInBcastPkts(43\)**

O número de datagramas de transmissão IP recebidos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.43](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.43)



---

**IP\-MIB::ipSystemStatsOutBcastPkts.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.44**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsOutBcastPkts(44\)**

O número de datagramas de transmissão IP transmitidos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.44](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.44)



---

**IP\-MIB::ipSystemStatsHCOutBcastPkts.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.45**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsHCOutBcastPkts(45\)**

O número de datagramas de transmissão IP transmitidos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.45](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.45)



---

**IP\-MIB::ipSystemStatsDiscontinuityTime.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.46**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsDiscontinuityTime(46\)**

O valor de `sysUpTime` na mais recente ocasião, na qual qualquer um, ou mais de um contadores desta entrada sofreram descontinuidade.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.46](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.46)



---

**IP\-MIB::ipSystemStatsRefreshRate.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.47**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsRefreshRate(47\)**

O intervalo mínimo razoável de votação para esta entrada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.47](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.47)



---

**IP\-MIB::ipSystemStatsInOctets.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsInOctets(5\)**

O número total de octetos recebidos em input de datagramas IP, incluindo aqueles com erro.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.5)



---

**IP\-MIB::ipSystemStatsHCInOctets.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsHCInOctets(6\)**

O número total de octetos recebidos em input de datagramas IP, incluindo aqueles com erro.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.6](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.6)



---

**IP\-MIB::ipSystemStatsInHdrErrors.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsInHdrErrors(7\)**

O número de inputs de datagramas IP descartados devido a erros em seus cabeçalhos de IP, incluindo número de versão incorreta, outros formatos de erros, contagem de saltos excedida, erros descobertos durante o processamento de suas opções de IP, etc.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.7](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.7)



---

**IP\-MIB::ipSystemStatsInNoRoutes.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.8**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsInNoRoutes(8\)**

O número de inputs de datagramas IP descartados pois nenhuma rota pode ser encontrada para transmiti\-los a seus destinos.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.8](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.8)



---

**IP\-MIB::ipSystemStatsInAddrErrors.ipv4 1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.9**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipSystemStatsTable(1\) ➔ipSystemStatsEntry(1\) ➔ipSystemStatsInAddrErrors(9\)**

O número de inputs de datagramas IP descartados pois o endereço de IP em seus cabeçalhos de IP no campo destino não era um endereço válido para recebido por esta entidade.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.1\.1\.9](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.9)



---

**IP\-MIB::ipIfStatsTableLastChange 1\.3\.6\.1\.2\.1\.4\.31\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipTrafficStats(31\) ➔ipIfStatsTableLastChange(2\)**

O valor do `sysUpTime` na ocasião mais recente na qual uma linha no  
`ipIfStatsTable` foi adicionada ou deletada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.31\.2](http://oid-info.com/get/1.3.6.1.2.1.4.31.2)



---

**IP\-MIB::ipAddressPrefixOrigin 1\.3\.6\.1\.2\.1\.4\.32\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressPrefixTable(32\) ➔ipAddressPrefixEntry(1\) ➔ipAddressPrefixOrigin(5\)**

A origem deste prefixo.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.32\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.4.32.1.5)



---

**IP\-MIB::ipAddressPrefixOnLinkFlag 1\.3\.6\.1\.2\.1\.4\.32\.1\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressPrefixTable(32\) ➔ipAddressPrefixEntry(1\) ➔ipAddressPrefixOnLinkFlag(6\)**

Este objeto tem o valor `true(1)`, caso este prefixo possa ser utlizado para determinação on\-link; caso contrário, o valor é `false(2)`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.32\.1\.6](http://oid-info.com/get/1.3.6.1.2.1.4.32.1.6)



---

**IP\-MIB::ipAddressPrefixAutonomousFlag 1\.3\.6\.1\.2\.1\.4\.32\.1\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressPrefixTable(32\) ➔ipAddressPrefixEntry(1\) ➔ipAddressPrefixAutonomousFlag(7\)**

Flag de configuração autônoma de endereço.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.32\.1\.7](http://oid-info.com/get/1.3.6.1.2.1.4.32.1.7)



---

**IP\-MIB::ipAddressPrefixAdvPreferredLifetime 1\.3\.6\.1\.2\.1\.4\.32\.1\.8**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressPrefixTable(32\) ➔ipAddressPrefixEntry(1\) ➔ipAddressPrefixAdvPreferredLifetime(8\)**

O tempo de duração remanescente, em segundos, para qual este prefixo continuará a ser preferido, por exemplo, tempo até a suspensão de uso.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.32\.1\.8](http://oid-info.com/get/1.3.6.1.2.1.4.32.1.8)



---

**IP\-MIB::ipAddressPrefixAdvValidLifetime 1\.3\.6\.1\.2\.1\.4\.32\.1\.9**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressPrefixTable(32\) ➔ipAddressPrefixEntry(1\) ➔ipAddressPrefixAdvValidLifetime(9\)**

O tempo de duração remanescente, em segundos, para qual este prefixo continuará a ser preferido, por exemplo, tempo até a invalidação.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.32\.1\.9](http://oid-info.com/get/1.3.6.1.2.1.4.32.1.9)



---

**IP\-MIB::ipAddressSpinLock 1\.3\.6\.1\.2\.1\.4\.33**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressSpinLock(33\)**

Um bloqueio consultivo usado para permitir a cooperação de gerenciadores SNMP, para coordenar o uso da operação definida em criar ou modificar linhas dentro desta tabela.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.33](http://oid-info.com/get/1.3.6.1.2.1.4.33)



---

**IP\-MIB::ipAddressRowStatus.ipv4 1\.3\.6\.1\.2\.1\.4\.34\.1\.10**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressTable(34\) ➔ipAddressEntry(1\) ➔ipAddressRowStatus(10\)**

O status desta linha conceitual.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.34\.1\.10](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.10)



---

**IP\-MIB::ipAddressStorageType.ipv4 1\.3\.6\.1\.2\.1\.4\.34\.1\.11**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressTable(34\) ➔ipAddressEntry(1\) ➔ipAddressStorageType(11\)**

O tipo de armazenamento para esta linha conceitual.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.34\.1\.11](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.11)



---

**IP\-MIB::ipAddressIfIndex.ipv4 1\.3\.6\.1\.2\.1\.4\.34\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressTable(34\) ➔ipAddressEntry(1\) ➔ipAddressIfIndex(3\)**

O valor index que identifica unicamente a interface para a qual esta entrada é aplicável.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.34\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.3)



---

**IP\-MIB::ipAddressType.ipv4 1\.3\.6\.1\.2\.1\.4\.34\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressTable(34\) ➔ipAddressEntry(1\) ➔ipAddressType(4\)**

O tipo de endereço.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.34\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.4)



---

**IP\-MIB::ipAddressPrefix.ipv4 1\.3\.6\.1\.2\.1\.4\.34\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressTable(34\) ➔ipAddressEntry(1\) ➔ipAddressPrefix(5\)**

Um indicador para a linha na tabela de prefixo para qual esse endereço pertence.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.34\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.5)



---

**IP\-MIB::ipAddressOrigin.ipv4 1\.3\.6\.1\.2\.1\.4\.34\.1\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressTable(34\) ➔ipAddressEntry(1\) ➔ipAddressOrigin(6\)**

A origem do endereço.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.34\.1\.6](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.6)



---

**IP\-MIB::ipAddressStatus.ipv4 1\.3\.6\.1\.2\.1\.4\.34\.1\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressTable(34\) ➔ipAddressEntry(1\) ➔ipAddressStatus(7\)**

O status do endereço, descrevendo se o endereço pode ser utilizado para comunicação.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.34\.1\.7](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.7)



---

**IP\-MIB::ipAddressCreated.ipv4 1\.3\.6\.1\.2\.1\.4\.34\.1\.8**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressTable(34\) ➔ipAddressEntry(1\) ➔ipAddressCreated(8\)**

O valor de `sysUpTime` no momento em que esta entrada foi criada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.34\.1\.8](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.8)



---

**IP\-MIB::ipAddressLastChanged.ipv4 1\.3\.6\.1\.2\.1\.4\.34\.1\.9**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipAddressTable(34\) ➔ipAddressEntry(1\) ➔ipAddressLastChanged(9\)**

O valor de `sysUpTime` no momento em que esta entrada foi atualizada pela última vez.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.34\.1\.9](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.9)



---

**IP\-MIB::ipNetToPhysicalPhysAddress 1\.3\.6\.1\.2\.1\.4\.35\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipNetToPhysicalTable(35\) ➔ipNetToPhysicalEntry(1\) ➔ipNetToPhysicalPhysAddress(4\)**

O endereço 'físico' da mídia\-dependente.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.35\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.4.35.1.4)



---

**IP\-MIB::ipNetToPhysicalLastUpdated 1\.3\.6\.1\.2\.1\.4\.35\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipNetToPhysicalTable(35\) ➔ipNetToPhysicalEntry(1\) ➔ipNetToPhysicalLastUpdated(5\)**

O valor de `sysUpTime` no momento em que esta entrada foi atualizada pela última vez.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.35\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.4.35.1.5)



---

**IP\-MIB::ipNetToPhysicalType 1\.3\.6\.1\.2\.1\.4\.35\.1\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipNetToPhysicalTable(35\) ➔ipNetToPhysicalEntry(1\) ➔ipNetToPhysicalType(6\)**

O tipo de mapeamento.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.35\.1\.6](http://oid-info.com/get/1.3.6.1.2.1.4.35.1.6)



---

**IP\-MIB::ipNetToPhysicalState 1\.3\.6\.1\.2\.1\.4\.35\.1\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipNetToPhysicalTable(35\) ➔ipNetToPhysicalEntry(1\) ➔ipNetToPhysicalState(7\)**

O estado de detecção de inacessibilidade do vizinho para a interface quando o mapeamento de endereço nesta entrada é utilizado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.35\.1\.7](http://oid-info.com/get/1.3.6.1.2.1.4.35.1.7)



---

**IP\-MIB::ipNetToPhysicalRowStatus 1\.3\.6\.1\.2\.1\.4\.35\.1\.8**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipNetToPhysicalTable(35\) ➔ipNetToPhysicalEntry(1\) ➔ipNetToPhysicalRowStatus(8\)**

O status desta linha conceitual.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.35\.1\.8](http://oid-info.com/get/1.3.6.1.2.1.4.35.1.8)



---

**IP\-MIB::ipDefaultRouterLifetime.ipv4 1\.3\.6\.1\.2\.1\.4\.37\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipDefaultRouterTable(37\) ➔ipDefaultRouterEntry(1\) ➔ipDefaultRouterLifetime(4\)**

O tempo de duração remanescente, em segundos, que este roteador continuará a ser útil.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.37\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.4.37.1.4)



---

**IP\-MIB::ipDefaultRouterPreference.ipv4 1\.3\.6\.1\.2\.1\.4\.37\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipDefaultRouterTable(37\) ➔ipDefaultRouterEntry(1\) ➔ipDefaultRouterPreference(5\)**

Um indicador da preferência dada a este roteador como roteador padrão, conforme descrito em Preferências de Roteador.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.37\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.4.37.1.5)



---

**IP\-MIB::ipInHdrErrors 1\.3\.6\.1\.2\.1\.4\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipInHdrErrors(4\)**

O número de inputs de datagramas descartados devido à erros em seus cabeçalhos de IPv4, incluindo somas de verificação ruins, número errado de versão, outros formatos de erros, tempo de vida excedido, erros descobertos no processamento das opções de IPv4, etc.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.4](http://oid-info.com/get/1.3.6.1.2.1.4.4)



---

**IP\-MIB::ipInAddrErrors 1\.3\.6\.1\.2\.1\.4\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipInAddrErrors(5\)**

O número de inputs de datagramas descartados pois o endereço de IPv4 no campo destino de seus cabeçalhos de IPv4 não continha um endereço válido para ser recebido por esta entidade.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.5](http://oid-info.com/get/1.3.6.1.2.1.4.5)



---

**IP\-MIB::ipForwDatagrams 1\.3\.6\.1\.2\.1\.4\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipForwDatagrams(6\)**

O número de inputs de datagramas para quais esta entidade não era destino final de IPV4 O número de inputs de datagramas para os quais esta entidade não era o destino final de IPv4, como resultado, uma tentativa foi feita para tentar encontrar a rota para encaminha\-los para seus respectivos destinos finais.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.6](http://oid-info.com/get/1.3.6.1.2.1.4.6)



---

**IP\-MIB::ipInUnknownProtos 1\.3\.6\.1\.2\.1\.4\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipInUnknownProtos(7\)**

O número de datagramas localmente acessados recebidos com sucesso mas que foram descartados devido à um protocolo desconhecido ou não suportado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.7](http://oid-info.com/get/1.3.6.1.2.1.4.7)



---

**IP\-MIB::ipInDiscards 1\.3\.6\.1\.2\.1\.4\.8**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipInDiscards(8\)**

O número de input datagramas IPv4 para os quais nenhum problema foi encontrado para evitar seus status de processamento contínuo, mas que foram descartados (por exemplo, por falta de área buffer).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.8](http://oid-info.com/get/1.3.6.1.2.1.4.8)



---

**IP\-MIB::ipInDelivers 1\.3\.6\.1\.2\.1\.4\.9**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ip(4\) ➔ipInDelivers(9\)**

O número total de inputs de datagramas entregues com sucesso para os protocolos de uso IPv4 (incluindo ICMP).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.4\.9](http://oid-info.com/get/1.3.6.1.2.1.4.9)



---

**IPV6\-MIB::ipv6Forwarding 1\.3\.6\.1\.2\.1\.55\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ipv6MIB(55\) ➔ipv6MIBObjects(1\) ➔ipv6Forwarding(1\)**

A indicação se esta entidade está atuando como um roteador IPv6 em relação ao encaminhamento de datagramas recebidos por, mas não endereçados, a esta entidade.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.55\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.55.1.1)



---

**IPV6\-MIB::ipv6DefaultHopLimit 1\.3\.6\.1\.2\.1\.55\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔ipv6MIB(55\) ➔ipv6MIBObjects(1\) ➔ipv6DefaultHopLimit(2\)**

O valor padrão inserido no campo Limite de Salto do cabeçalho IPv6 de datagramas originados nesta entidade, sempre que um valor do Limite de Salto não é fornecido pelo protocolo da camada de transporte.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.55\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.55.1.2)



---

**DISMAN\-EVENT\-MIB::mteResourceSampleMinimum 1\.3\.6\.1\.2\.1\.88\.1\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteResource(1\) ➔mteResourceSampleMinimum(1\)**

O mínimo `mteTriggerFrequency` que este sistema irá aceitar.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.88.1.1.1)



---

**DISMAN\-EVENT\-MIB::mteResourceSampleInstanceMaximum 1\.3\.6\.1\.2\.1\.88\.1\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteResource(1\) ➔mteResourceSampleInstanceMaximum(2\)**

O número máximo de entradas de instância que este sistema suportará para amostragem.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.88.1.1.2)



---

**DISMAN\-EVENT\-MIB::mteResourceSampleInstances 1\.3\.6\.1\.2\.1\.88\.1\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteResource(1\) ➔mteResourceSampleInstances(3\)**

O número de entradas de instância atualmente ativas conforme definido em  
`mteResourceSampleInstanceMaximum`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.88.1.1.3)



---

**DISMAN\-EVENT\-MIB::mteResourceSampleInstancesHigh 1\.3\.6\.1\.2\.1\.88\.1\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteResource(1\) ➔mteResourceSampleInstancesHigh(4\)**

O valor mais alto de `mteResourceSampleInstances` que tenha ocorrido desde a inicialização do gerenciador de sistemas.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.88.1.1.4)



---

**DISMAN\-EVENT\-MIB::mteResourceSampleInstanceLacks 1\.3\.6\.1\.2\.1\.88\.1\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteResource(1\) ➔mteResourceSampleInstanceLacks(5\)**

O número de vezes que o sistema não conseguiu pegar uma nova amostragem pois a alocação teria excedido o limite definido em `mteResourceSampleInstanceMaximum`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.88.1.1.5)



---

**DISMAN\-EVENT\-MIB::mteTriggerFailures 1\.3\.6\.1\.2\.1\.88\.1\.2\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteTrigger(2\) ➔mteTriggerFailures(1\)**

O número de vezes que uma tentativa de verificar uma condição de disparo falhou.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.2\.1](http://oid-info.com/get/1.3.6.1.2.1.88.1.2.1)



---

**DISMAN\-EVENT\-MIB::mteObjectsID 1\.3\.6\.1\.2\.1\.88\.1\.3\.1\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteObjects(3\) ➔mteObjectsTable(1\) ➔mteObjectsEntry(1\) ➔mteObjectsID(3\)**

O identificador de objeto de um objeto, de objeto MIB, para adicionar a uma notificação que resulta do disparo de um gatilho.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.3\.1\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.88.1.3.1.1.3)



---

**DISMAN\-EVENT\-MIB::mteObjectsIDWildcard 1\.3\.6\.1\.2\.1\.88\.1\.3\.1\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteObjects(3\) ➔mteObjectsTable(1\) ➔mteObjectsEntry(1\) ➔mteObjectsIDWildcard(4\)**

Controlar se `mteObjectsID` deve ser tratado como fully\-specified ou wildcarded, sendo 'true' o indicativo para wildcard.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.3\.1\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.88.1.3.1.1.4)



---

**DISMAN\-EVENT\-MIB::mteObjectsEntryStatus 1\.3\.6\.1\.2\.1\.88\.1\.3\.1\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteObjects(3\) ➔mteObjectsTable(1\) ➔mteObjectsEntry(1\) ➔mteObjectsEntryStatus(5\)**

O controle que permite a criação e exclusão de entradas.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.3\.1\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.88.1.3.1.1.5)



---

**DISMAN\-EVENT\-MIB::mteEventComment 1\.3\.6\.1\.2\.1\.88\.1\.4\.2\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteEvent(4\) ➔mteEventTable(2\) ➔mteEventEntry(1\) ➔mteEventComment(2\)**

Uma descrição da função e uso do evento.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.4\.2\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.88.1.4.2.1.2)



---

**DISMAN\-EVENT\-MIB::mteEventActions 1\.3\.6\.1\.2\.1\.88\.1\.4\.2\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteEvent(4\) ➔mteEventTable(2\) ➔mteEventEntry(1\) ➔mteEventActions(3\)**

As ações a serem performadas quando este evento ocorrer.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.4\.2\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.88.1.4.2.1.3)



---

**DISMAN\-EVENT\-MIB::mteEventEnabled 1\.3\.6\.1\.2\.1\.88\.1\.4\.2\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteEvent(4\) ➔mteEventTable(2\) ➔mteEventEntry(1\) ➔mteEventEnabled(4\)**

Um controle para permitir que um evento seja configurado mas não utilizado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.4\.2\.1\.4](http://oid-info.com/get/1.3.6.1.2.1.88.1.4.2.1.4)



---

**DISMAN\-EVENT\-MIB::mteEventEntryStatus 1\.3\.6\.1\.2\.1\.88\.1\.4\.2\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteEvent(4\) ➔mteEventTable(2\) ➔mteEventEntry(1\) ➔mteEventEntryStatus(5\)**

O controle que permite a criação e exclusão de entradas.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.4\.2\.1\.5](http://oid-info.com/get/1.3.6.1.2.1.88.1.4.2.1.5)



---

**DISMAN\-EVENT\-MIB::mteEventNotification 1\.3\.6\.1\.2\.1\.88\.1\.4\.3\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteEvent(4\) ➔mteEventNotificationTable(3\) ➔mteEventNotificationEntry(1\) ➔mteEventNotification(1\)**

O identificador de objeto de `NOTIFICATION-TYPE`, para que a notificação  
utilize `metEventActions` caso uma 'notificação' tenha sido configurada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.4\.3\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.88.1.4.3.1.1)



---

**DISMAN\-EVENT\-MIB::mteEventNotificationObjectsOwner 1\.3\.6\.1\.2\.1\.88\.1\.4\.3\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteEvent(4\) ➔mteEventNotificationTable(3\) ➔mteEventNotificationEntry(1\) ➔mteEventNotificationObjectsOwner(2\)**

Para ir com o `mteEventNotificationObjects`, o `mteOwner` de um grupo de objetos da `mteObjectsTable`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.4\.3\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.88.1.4.3.1.2)



---

**DISMAN\-EVENT\-MIB::mteEventNotificationObjects 1\.3\.6\.1\.2\.1\.88\.1\.4\.3\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔dismanEventMIB(88\) ➔dismanEventMIBObjects(1\) ➔mteEvent(4\) ➔mteEventNotificationTable(3\) ➔mteEventNotificationEntry(1\) ➔mteEventNotificationObjects(3\)**

O `mteObjectsName` de um grupo de objetos da `mteObjectsTable` caso `mteEventActions` tenha 'notificação' configurada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.88\.1\.4\.3\.1\.3](http://oid-info.com/get/1.3.6.1.2.1.88.1.4.3.1.3)



---

**NOTIFICATION\-LOG\-MIB::nlmConfigGlobalEntryLimit 1\.3\.6\.1\.2\.1\.92\.1\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔notificationLogMIB(92\) ➔notificationLogMIBObjects(1\) ➔nlmConfig(1\) ➔nlmConfigGlobalEntryLimit(1\)**

O número máximo de notificações de entrada que podem ser armazenados na `nlmLogTable` para todos os `nlmLogNames` adicionados.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.92\.1\.1\.1](http://oid-info.com/get/1.3.6.1.2.1.92.1.1.1)



---

**NOTIFICATION\-LOG\-MIB::nlmConfigGlobalAgeOut 1\.3\.6\.1\.2\.1\.92\.1\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔notificationLogMIB(92\) ➔notificationLogMIBObjects(1\) ➔nlmConfig(1\) ➔nlmConfigGlobalAgeOut(2\)**

O número de minutos que uma nofiticação DEVE ser mantida em um log antes de ser automaticamente removida.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.92\.1\.1\.2](http://oid-info.com/get/1.3.6.1.2.1.92.1.1.2)



---

**NOTIFICATION\-LOG\-MIB::nlmStatsGlobalNotificationsLogged 1\.3\.6\.1\.2\.1\.92\.1\.2\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔notificationLogMIB(92\) ➔notificationLogMIBObjects(1\) ➔nlmStats(2\) ➔nlmStatsGlobalNotificationsLogged(1\)**

O número de Notificações inseridos na `nlmLogTable`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.92\.1\.2\.1](http://oid-info.com/get/1.3.6.1.2.1.92.1.2.1)



---

**NOTIFICATION\-LOG\-MIB::nlmStatsGlobalNotificationsBumped 1\.3\.6\.1\.2\.1\.92\.1\.2\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔mgmt(2\) ➔mib\-2(1\) ➔notificationLogMIB(92\) ➔notificationLogMIBObjects(1\) ➔nlmStats(2\) ➔nlmStatsGlobalNotificationsBumped(2\)**

O número de entradas de log que foram descartadas para gerar espaço para uma nova entrada devido à falta de recursos, ou ao valor de `nlmConfigGlobalEntryLimit` ou `nlmConfigLogEntryLimit`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.2\.1\.92\.1\.2\.2](http://oid-info.com/get/1.3.6.1.2.1.92.1.2.2)



---

**UCD\-SNMP\-MIB::laIndex 1\.3\.6\.1\.4\.1\.2021\.10\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔laTable(10\) ➔laEntry(1\) ➔laIndex(1\)**

Referência index/número da linha para cada média de load observada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.10\.1\.1](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.1)



---

**UCD\-SNMP\-MIB::laErrorFlag 1\.3\.6\.1\.4\.1\.2021\.10\.1\.100**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔laTable(10\) ➔laEntry(1\) ➔laErrorFlag(100\)**

Uma flag de erro para indicar se a média de load ultrapassou seu valor limite definido no arquivo `snmpd.conf`.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.10\.1\.100](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.100)



---

**UCD\-SNMP\-MIB::laErrMessage 1\.3\.6\.1\.4\.1\.2021\.10\.1\.101**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔laTable(10\) ➔laEntry(1\) ➔laErrMessage(101\)**

Uma mensagem de erro descrevendo a média de load e seu valor de ponto de obervação excedido.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.10\.1\.101](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.101)



---

**UCD\-SNMP\-MIB::laNames 1\.3\.6\.1\.4\.1\.2021\.10\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔laTable(10\) ➔laEntry(1\) ➔laNames(2\)**

A lista de nomes de média de load que estamos observando.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.10\.1\.2](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.2)



---

**UCD\-SNMP\-MIB::laLoad 1\.3\.6\.1\.4\.1\.2021\.10\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔laTable(10\) ➔laEntry(1\) ➔laLoad(3\)**

As médias de load de 1,5 e de 15 minutos (uma por linha).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.10\.1\.3](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.3)



---

**UCD\-SNMP\-MIB::laConfig 1\.3\.6\.1\.4\.1\.2021\.10\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔laTable(10\) ➔laEntry(1\) ➔laConfig(4\)**

O ponto de observação para médias de load para sinalizar um erro.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.10\.1\.4](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.4)



---

**UCD\-SNMP\-MIB::laLoadInt 1\.3\.6\.1\.4\.1\.2021\.10\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔laTable(10\) ➔laEntry(1\) ➔laLoadInt(5\)**

As médias de load de 1,5 e 15 minutos como um número inteiro.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.10\.1\.5](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.5)



---

**UCD\-SNMP\-MIB::laLoadFloat 1\.3\.6\.1\.4\.1\.2021\.10\.1\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔laTable(10\) ➔laEntry(1\) ➔laLoadFloat(6\)**

As médias de load de 1,5 e 15 minutos como um número de ponto flutuante.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.10\.1\.6](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.6)



---

**UCD\-SNMP\-MIB::ssIndex 1\.3\.6\.1\.4\.1\.2021\.11\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssIndex(1\)**

Descontinuado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.1](http://oid-info.com/get/1.3.6.1.4.1.2021.11.1)



---

**UCD\-SNMP\-MIB::ssCpuSystem 1\.3\.6\.1\.4\.1\.2021\.11\.10**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuSystem(10\)**

A porcentagem do CPU gasta processando código fonte, calculada no último minuto.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.10](http://oid-info.com/get/1.3.6.1.4.1.2021.11.10)



---

**UCD\-SNMP\-MIB::ssCpuIdle 1\.3\.6\.1\.4\.1\.2021\.11\.11**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuIdle(11\)**

A porcentagem do processador gasta em tempo idle, calculada no último minuto.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.11](http://oid-info.com/get/1.3.6.1.4.1.2021.11.11)



---

**UCD\-SNMP\-MIB::ssErrorName 1\.3\.6\.1\.4\.1\.2021\.11\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssErrorName(2\)**

Descontinuado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.2](http://oid-info.com/get/1.3.6.1.4.1.2021.11.2)



---

**UCD\-SNMP\-MIB::ssSwapIn 1\.3\.6\.1\.4\.1\.2021\.11\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssSwapIn(3\)**

A quantidade média de memória trocada do disco, calculada no último minuto.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.3](http://oid-info.com/get/1.3.6.1.4.1.2021.11.3)



---

**UCD\-SNMP\-MIB::ssSwapOut 1\.3\.6\.1\.4\.1\.2021\.11\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssSwapOut(4\)**

A quantidade média de memória trocada do disco, calculada no último minuto.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.4](http://oid-info.com/get/1.3.6.1.4.1.2021.11.4)



---

**UCD\-SNMP\-MIB::ssIOSent 1\.3\.6\.1\.4\.1\.2021\.11\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssIOSent(5\)**

A quantidade média de dados gravadas no disco ou dispositivo bloqueado, calculada no último minuto.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.5](http://oid-info.com/get/1.3.6.1.4.1.2021.11.5)



---

**UCD\-SNMP\-MIB::ssCpuRawUser 1\.3\.6\.1\.4\.1\.2021\.11\.50**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuRawUser(50\)**

O número de 'ticks' (geralmente 1/100s) gastos no processamento de código nível usuário.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.50](http://oid-info.com/get/1.3.6.1.4.1.2021.11.50)



---

**UCD\-SNMP\-MIB::ssCpuRawNice 1\.3\.6\.1\.4\.1\.2021\.11\.51**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuRawNice(51\)**

O número de 'ticks' (geralmente 1/100s) gastos processando código com prioridade reduzida.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.51](http://oid-info.com/get/1.3.6.1.4.1.2021.11.51)



---

**UCD\-SNMP\-MIB::ssCpuRawSystem 1\.3\.6\.1\.4\.1\.2021\.11\.52**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuRawSystem(52\)**

O número de 'ticks' (geralmente 1/100s) gastos processando código fonte.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.52](http://oid-info.com/get/1.3.6.1.4.1.2021.11.52)



---

**UCD\-SNMP\-MIB::ssCpuRawIdle 1\.3\.6\.1\.4\.1\.2021\.11\.53**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuRawIdle(53\)**

O número de 'ticks' (geralmente 1/100s) gastos em idle.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.53](http://oid-info.com/get/1.3.6.1.4.1.2021.11.53)



---

**UCD\-SNMP\-MIB::ssCpuRawWait 1\.3\.6\.1\.4\.1\.2021\.11\.54**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuRawWait(54\)**

O número de 'ticks' (geralmente 1/100s) gastos aguardando pelo IO.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.54](http://oid-info.com/get/1.3.6.1.4.1.2021.11.54)



---

**UCD\-SNMP\-MIB::ssCpuRawKernel 1\.3\.6\.1\.4\.1\.2021\.11\.55**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuRawKernel(55\)**

O número de 'ticks' (geralmente 1/100s) gastos processando código kernel.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.55](http://oid-info.com/get/1.3.6.1.4.1.2021.11.55)



---

**UCD\-SNMP\-MIB::ssCpuRawInterrupt 1\.3\.6\.1\.4\.1\.2021\.11\.56**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuRawInterrupt(56\)**

O número de 'ticks' (geralmente 1/100s) gastos processando interrupções de hardware.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.56](http://oid-info.com/get/1.3.6.1.4.1.2021.11.56)



---

**UCD\-SNMP\-MIB::ssIORawSent 1\.3\.6\.1\.4\.1\.2021\.11\.57**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssIORawSent(57\)**

Número de bloqueios enviados para um dispositivo bloqueado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.57](http://oid-info.com/get/1.3.6.1.4.1.2021.11.57)



---

**UCD\-SNMP\-MIB::ssIORawReceived 1\.3\.6\.1\.4\.1\.2021\.11\.58**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssIORawReceived(58\)**

Número de bloqueios recebidos de um dispositivo bloqueado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.58](http://oid-info.com/get/1.3.6.1.4.1.2021.11.58)



---

**UCD\-SNMP\-MIB::ssRawInterrupts 1\.3\.6\.1\.4\.1\.2021\.11\.59**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssRawInterrupts(59\)**

Número de interrupções processadas.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.59](http://oid-info.com/get/1.3.6.1.4.1.2021.11.59)



---

**UCD\-SNMP\-MIB::ssIOReceive 1\.3\.6\.1\.4\.1\.2021\.11\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssIOReceive(6\)**

A quantidade média de dados lida do disco ou de outro dispositivo bloqueado, calculada no último minuto.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.6](http://oid-info.com/get/1.3.6.1.4.1.2021.11.6)



---

**UCD\-SNMP\-MIB::ssRawContexts 1\.3\.6\.1\.4\.1\.2021\.11\.60**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssRawContexts(60\)**

O número de context switches.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.60](http://oid-info.com/get/1.3.6.1.4.1.2021.11.60)



---

**UCD\-SNMP\-MIB::ssCpuRawSoftIRQ 1\.3\.6\.1\.4\.1\.2021\.11\.61**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuRawSoftIRQ(61\)**

O número de 'ticks' (geralmente 1/100s) gastos processando interrupções de software.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.61](http://oid-info.com/get/1.3.6.1.4.1.2021.11.61)



---

**UCD\-SNMP\-MIB::ssRawSwapIn 1\.3\.6\.1\.4\.1\.2021\.11\.62**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssRawSwapIn(62\)**

Número de bloqueios swapped in.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.62](http://oid-info.com/get/1.3.6.1.4.1.2021.11.62)



---

**UCD\-SNMP\-MIB::ssRawSwapOut 1\.3\.6\.1\.4\.1\.2021\.11\.63**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssRawSwapOut(63\)**

Número de bloqueios swapped out.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.63](http://oid-info.com/get/1.3.6.1.4.1.2021.11.63)



---

**UCD\-SNMP\-MIB::ssCpuRawSteal 1\.3\.6\.1\.4\.1\.2021\.11\.64**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuRawSteal(64\)**

O número de 'ticks' (geralmente 1/100s) gasto pelo código do hipervisor para executar outras VMs, mesmo que o CPU da atual VM atual tenha algo sendo executado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.64](http://oid-info.com/get/1.3.6.1.4.1.2021.11.64)



---

**UCD\-SNMP\-MIB::ssCpuRawGuest 1\.3\.6\.1\.4\.1\.2021\.11\.65**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuRawGuest(65\)**

O número de 'ticks' (geralmente 1/100s) gasto pelo CPU para executar um CPU virtual (guest).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.65](http://oid-info.com/get/1.3.6.1.4.1.2021.11.65)



---

**UCD\-SNMP\-MIB::ssCpuRawGuestNice 1\.3\.6\.1\.4\.1\.2021\.11\.66**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuRawGuestNice(66\)**

O número de 'ticks' (geralmente 1/100s) gasto pelo CPU para executar um CPU virtual nice (guest).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.66](http://oid-info.com/get/1.3.6.1.4.1.2021.11.66)



---

**UCD\-SNMP\-MIB::ssCpuNumCpus 1\.3\.6\.1\.4\.1\.2021\.11\.67**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuNumCpus(67\)**

O número de processadores contabilizados pelo agente.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.67](http://oid-info.com/get/1.3.6.1.4.1.2021.11.67)



---

**UCD\-SNMP\-MIB::ssSysInterrupts 1\.3\.6\.1\.4\.1\.2021\.11\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssSysInterrupts(7\)**

A taxa média de interrupções processadas (incluindo o relógio) calculada no último minuto.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.7](http://oid-info.com/get/1.3.6.1.4.1.2021.11.7)



---

**UCD\-SNMP\-MIB::ssSysContext 1\.3\.6\.1\.4\.1\.2021\.11\.8**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssSysContext(8\)**

A taxa média de context switches, calculada no último minuto.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.8](http://oid-info.com/get/1.3.6.1.4.1.2021.11.8)



---

**UCD\-SNMP\-MIB::ssCpuUser 1\.3\.6\.1\.4\.1\.2021\.11\.9**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔systemStats(11\) ➔ssCpuUser(9\)**

A porcentagem de tempo do CPU gasta processando código de usuário, calculada no último minuto.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.11\.9](http://oid-info.com/get/1.3.6.1.4.1.2021.11.9)



---

**UCD\-SNMP\-MIB::memIndex 1\.3\.6\.1\.4\.1\.2021\.4\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔memory(4\) ➔memIndex(1\)**

Descontinuado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.4\.1](http://oid-info.com/get/1.3.6.1.4.1.2021.4.1)



---

**UCD\-SNMP\-MIB::memSwapError 1\.3\.6\.1\.4\.1\.2021\.4\.100**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔memory(4\) ➔memSwapError(100\)**

Indica se a quantidade disponível para swape (como reportada em `memAvailSwap(4)`), é menor do que o minimo desejado (especificado em `memMinimumSwap(12)`).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.4\.100](http://oid-info.com/get/1.3.6.1.4.1.2021.4.100)



---

**UCD\-SNMP\-MIB::memSwapErrorMsg 1\.3\.6\.1\.4\.1\.2021\.4\.101**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔memory(4\) ➔memSwapErrorMsg(101\)**

Indica se a quantidade disponível para swape (como reportada em `memAvailSwap(4)`), é menor do que o minimo desejado (especificado em `memMinimumSwap(12)`).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.4\.101](http://oid-info.com/get/1.3.6.1.4.1.2021.4.101)



---

**UCD\-SNMP\-MIB::memTotalFree 1\.3\.6\.1\.4\.1\.2021\.4\.11**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔memory(4\) ➔memTotalFree(11\)**

A quantidade total de memória livre, ou disponível, para ser usada neste host.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.4\.11](http://oid-info.com/get/1.3.6.1.4.1.2021.4.11)



---

**UCD\-SNMP\-MIB::memMinimumSwap 1\.3\.6\.1\.4\.1\.2021\.4\.12**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔memory(4\) ➔memMinimumSwap(12\)**

A quantidade mínima de swap esperada para ser mantida livre ou disponível durante uma operação normal deste host.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.4\.12](http://oid-info.com/get/1.3.6.1.4.1.2021.4.12)



---

**UCD\-SNMP\-MIB::memShared 1\.3\.6\.1\.4\.1\.2021\.4\.13**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔memory(4\) ➔memShared(13\)**

A quantidade total de memória real ou virtual atualmente alocada para ser utilizada como memória compartilhada.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.4\.13](http://oid-info.com/get/1.3.6.1.4.1.2021.4.13)



---

**UCD\-SNMP\-MIB::memBuffer 1\.3\.6\.1\.4\.1\.2021\.4\.14**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔memory(4\) ➔memBuffer(14\)**

O quantidade total de memória real ou virtual atualmente alocada para ser utilizada como memória buffer.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.4\.14](http://oid-info.com/get/1.3.6.1.4.1.2021.4.14)



---

**UCD\-SNMP\-MIB::memCached 1\.3\.6\.1\.4\.1\.2021\.4\.15**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔memory(4\) ➔memCached(15\)**

O quantidade total de memória real ou virtual atualmente alocada para ser utilizada como memória.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.4\.15](http://oid-info.com/get/1.3.6.1.4.1.2021.4.15)



---

**UCD\-SNMP\-MIB::memErrorName 1\.3\.6\.1\.4\.1\.2021\.4\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔memory(4\) ➔memErrorName(2\)**

Descontinuado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.4\.2](http://oid-info.com/get/1.3.6.1.4.1.2021.4.2)



---

**UCD\-SNMP\-MIB::memTotalSwap 1\.3\.6\.1\.4\.1\.2021\.4\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔memory(4\) ➔memTotalSwap(3\)**

A quantidade total swap configurada para este host.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.4\.3](http://oid-info.com/get/1.3.6.1.4.1.2021.4.3)



---

**UCD\-SNMP\-MIB::memAvailSwap 1\.3\.6\.1\.4\.1\.2021\.4\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔memory(4\) ➔memAvailSwap(4\)**

A quantidade de swap atualmente não utilizada ou disponível.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.4\.4](http://oid-info.com/get/1.3.6.1.4.1.2021.4.4)



---

**UCD\-SNMP\-MIB::memTotalReal 1\.3\.6\.1\.4\.1\.2021\.4\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔memory(4\) ➔memTotalReal(5\)**

O número total de memória real/física instalada neste host.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.4\.5](http://oid-info.com/get/1.3.6.1.4.1.2021.4.5)



---

**UCD\-SNMP\-MIB::memAvailReal 1\.3\.6\.1\.4\.1\.2021\.4\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔memory(4\) ➔memAvailReal(6\)**

O número total de memória real/física instalada neste host.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.4\.6](http://oid-info.com/get/1.3.6.1.4.1.2021.4.6)



---

**UCD\-SNMP\-MIB::dskIndex 1\.3\.6\.1\.4\.1\.2021\.9\.1\.1**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskIndex(1\)**

Número inteiro de referência (número da linha) para a MIB de disco.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.1](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.1)



---

**UCD\-SNMP\-MIB::dskPercentNode 1\.3\.6\.1\.4\.1\.2021\.9\.1\.10**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskPercentNode(10\)**

Porcentagem de inodes utilizada no disco.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.10](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.10)



---

**UCD\-SNMP\-MIB::dskErrorFlag 1\.3\.6\.1\.4\.1\.2021\.9\.1\.100**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskErrorFlag(100\)**

Flag de erro sinalizando que o disco, ou partição, estão em quantidade inferior ao mínimo necessário que foi configurado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.100](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.100)



---

**UCD\-SNMP\-MIB::dskErrorMsg 1\.3\.6\.1\.4\.1\.2021\.9\.1\.101**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskErrorMsg(101\)**

Um texto descritivo providenciando um aviso e o espaço restante no disco.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.101](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.101)



---

**UCD\-SNMP\-MIB::dskTotalLow 1\.3\.6\.1\.4\.1\.2021\.9\.1\.11**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskTotalLow(11\)**

Tamanho total do disco/partição (kBytes).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.11](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.11)



---

**UCD\-SNMP\-MIB::dskTotalHigh 1\.3\.6\.1\.4\.1\.2021\.9\.1\.12**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskTotalHigh(12\)**

Tamanho total do disco/partição (kBytes).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.12](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.12)



---

**UCD\-SNMP\-MIB::dskAvailLow 1\.3\.6\.1\.4\.1\.2021\.9\.1\.13**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskAvailLow(13\)**

Espaço disponível em disco (kBytes).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.13](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.13)



---

**UCD\-SNMP\-MIB::dskAvailHigh 1\.3\.6\.1\.4\.1\.2021\.9\.1\.14**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskAvailHigh(14\)**

Espaço disponível em disco (kBytes).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.14](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.14)



---

**UCD\-SNMP\-MIB::dskUsedLow 1\.3\.6\.1\.4\.1\.2021\.9\.1\.15**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskUsedLow(15\)**

Espaço usado em disco (kBytes).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.15](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.15)



---

**UCD\-SNMP\-MIB::dskUsedHigh 1\.3\.6\.1\.4\.1\.2021\.9\.1\.16**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskUsedHigh(16\)**

Espaço usado em disco (kBytes).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.16](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.16)



---

**UCD\-SNMP\-MIB::dskPath 1\.3\.6\.1\.4\.1\.2021\.9\.1\.2**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskPath(2\)**

Caminho onde o disco é montado.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.2](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.2)



---

**UCD\-SNMP\-MIB::dskDevice 1\.3\.6\.1\.4\.1\.2021\.9\.1\.3**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskDevice(3\)**

Caminho do dipositivo para a partição.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.3](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.3)



---

**UCD\-SNMP\-MIB::dskMinimum 1\.3\.6\.1\.4\.1\.2021\.9\.1\.4**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskMinimum(4\)**

Espaço mínimo requerido em disco (em kBytes) antes que erros sejam disparados.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.4](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.4)



---

**UCD\-SNMP\-MIB::dskMinPercent 1\.3\.6\.1\.4\.1\.2021\.9\.1\.5**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskMinPercent(5\)**

Porcentagem mínima de espaço requerido no disco antes que erros sejam disparados.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.5](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.5)



---

**UCD\-SNMP\-MIB::dskTotal 1\.3\.6\.1\.4\.1\.2021\.9\.1\.6**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskTotal(6\)**

Espaço total de disco/partição (kBytes).

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.6](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.6)



---

**UCD\-SNMP\-MIB::dskAvail 1\.3\.6\.1\.4\.1\.2021\.9\.1\.7**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskAvail(7\)**

Espaço disponível em disco.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.7](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.7)



---

**UCD\-SNMP\-MIB::dskUsed 1\.3\.6\.1\.4\.1\.2021\.9\.1\.8**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskUsed(8\)**

Espaço utilizado no disco.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.8](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.8)



---

**UCD\-SNMP\-MIB::dskPercent 1\.3\.6\.1\.4\.1\.2021\.9\.1\.9**

**iso(1\) ➔identified\-organization(3\) ➔dod(6\) ➔internet(1\) ➔private(4\) ➔enterprise(1\) ➔2021 ➔dskTable(9\) ➔dskEntry(1\) ➔dskPercent(9\)**

Porcentagem de espaço utilizado no disco.

Mais detalhes: [http://oid\-info.com/get/1\.3\.6\.1\.4\.1\.2021\.9\.1\.9](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.9)

