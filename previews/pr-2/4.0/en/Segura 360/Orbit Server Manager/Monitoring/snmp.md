# SNMP

The [Simple Network Management Protocol (SNMP)](https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol) is the Internet standard protocol for managing devices on IP networks. Segura supports SNMP v1, v2, v3.

## **Enabling the SNMP service on Segura**

:::(Warning) (**Attention**)
The **SNMPv3** monitoring is available only on **Segura v3.8 or above**. The configuration must be done at Orbit Command Line Client. See the Orbit Command Line manual for more details. See the [How to Configure SNMP Monitoring](/v4/docs/how-to-configure-snmp-monitoring) for more information. 
:::

To configure an SNMP server, click on the drop-down menu on the left and select the ***Orbit*** option.

1. Access  **Orbit Server Manager ➔ Server ➔ Settings**                                                  
2. Fill in the following:  
   * Server  
   * Allowed IPs   
   * Community data  
3. Click on **Save**.

## **Query SNMP Monitoring Data**

Extraction of security Segura monitoring data can be done in two ways:

By configuring OID's in an SNMP manager such as CACTI, Solar Wings, Zabbix, or any other SNMP compliant system available on the client infrastructure.

Through terminal queries for either **MIB's** or **OID's** with the ***snmpwalk*** command, follow the pattern below:

**SNMPv2**

```Text
snmpwalk -v2c -c $<$community$>$ $<$ip$>$
```

**SNMPv3**

```Text
snmpwalk -v3 -a SHA -A $<$password$>$ -x AES -X $<$password$>$ -l authPriv -u $<$username$>$ $<$ip$>$
```

**Return Values**

The data types returned by SNMP queries, depending on the item queried, may vary depending on the context of the monitored item, such as numeric values, date and time values, and descriptive texts.

Among the return values of long texts, some results may be similar between the monitored items. The cases in which these situations occur are items that return system service status and TCP / UDP connection status.

### **MIBs and OIDs provided with the Segura**
:::(Warning) (**Attention**)
 Segura provides the standard MIBs for SNMPv2 and SNMPv3, except for some readings removed for security reasons
:::

---

**SNMPv2-MIB::sysDescr 1.3.6.1.2.1.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔system(1) ➔sysDescr(1)**

A textual description of the entity. This value should include the full name and version identification of the system's hardware type, operating system, and networking software.

More details: [http://oid-info.com/get/1.3.6.1.2.1.1.1](http://oid-info.com/get/1.3.6.1.2.1.1.1)

---

**SNMPv2-MIB::sysObjectID 1.3.6.1.2.1.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔system(1) ➔sysObjectID(2)**

The vendor's authoritative identification of the network management subsystem contained in the entity. This value is allocated within the SMI enterprises subtree (1.3.6.1.4.1) and provides an easy and unambiguous means for determining 'what kind of box' is being managed.

More details: [http://oid-info.com/get/1.3.6.1.2.1.1.2](http://oid-info.com/get/1.3.6.1.2.1.1.2)

---

**DISMAN-EVENT-MIB::sysUpTimeInstance 1.3.6.1.2.1.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔system(1) ➔sysUpTime(3)**

The time (in hundredths of a second) since the network management portion of the system was last re-initialized.

More details: [http://oid-info.com/get/1.3.6.1.2.1.1.3](http://oid-info.com/get/1.3.6.1.2.1.1.3)

---

**SNMPv2-MIB::sysContact 1.3.6.1.2.1.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔system(1) ➔sysContact(4)**

The textual identification of the contact person for this managed node and information on how to contact this person. If no contact information is known, the value is the zero-length string.

More details: [http://oid-info.com/get/1.3.6.1.2.1.1.4](http://oid-info.com/get/1.3.6.1.2.1.1.4)

---

**SNMPv2-MIB::sysName 1.3.6.1.2.1.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔system(1) ➔sysName(5)**

An administratively-assigned name for this managed node. By convention, this is the node's fully-qualified domain name. If the name is unknown, the value is the zero-length string.

More details: [http://oid-info.com/get/1.3.6.1.2.1.1.5](http://oid-info.com/get/1.3.6.1.2.1.1.5)

---

**SNMPv2-MIB::sysLocation 1.3.6.1.2.1.1.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔system(1) ➔sysLocation(6)**

The physical location of this node (e.g., 'telephone closet, 3rd floor'). If the location is unknown, the value is the zero-length string.

More details: [http://oid-info.com/get/1.3.6.1.2.1.1.6](http://oid-info.com/get/1.3.6.1.2.1.1.6)

---

**SNMPv2-MIB::sysServices 1.3.6.1.2.1.1.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔system(1) ➔sysServices(7)**

A value indicates the set of services that this entity may offer.

More details: [http://oid-info.com/get/1.3.6.1.2.1.1.7](http://oid-info.com/get/1.3.6.1.2.1.1.7)

---

**SNMPv2-MIB::sysORLastChange 1.3.6.1.2.1.1.8**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔system(1) ➔sysORLastChange(8)**

The value of `sysUpTime` at the time of the most recent change in state or value of any instance of `sysORID`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.1.8](http://oid-info.com/get/1.3.6.1.2.1.1.8)

---

**SNMPv2-MIB::sysORID 1.3.6.1.2.1.1.9.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔system(1) ➔sysORTable(9) ➔sysOREntry(1) ➔sysORID(2)**

An authoritative identification of a capabilities statement concerning various MIB modules supported by the local SNMP application acting as a command responder.

More details: [http://oid-info.com/get/1.3.6.1.2.1.1.9.1.2](http://oid-info.com/get/1.3.6.1.2.1.1.9.1.2)

---

**SNMPv2-MIB::sysORDescr 1.3.6.1.2.1.1.9.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔system(1) ➔sysORTable(9) ➔sysOREntry(1) ➔sysORDescr(3)**

A textual description of the capabilities identified by the corresponding instance of `sysORID`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.1.9.1.3](http://oid-info.com/get/1.3.6.1.2.1.1.9.1.3)

---

**SNMPv2-MIB::sysORUpTime 1.3.6.1.2.1.1.9.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔system(1) ➔sysORTable(9) ➔sysOREntry(1) ➔sysORUpTime(4)**

The value of `sysUpTime` at the time this conceptual row was last instantiated.

More details: [http://oid-info.com/get/1.3.6.1.2.1.1.9.1.4](http://oid-info.com/get/1.3.6.1.2.1.1.9.1.4)

---

**EtherLike-MIB::dot3StatsIndex 1.3.6.1.2.1.10.7.2.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔transmission(10) ➔dot3(7) ➔dot3StatsTable(2) ➔dot3StatsEntry(1) ➔dot3StatsIndex(1)**

An index value that uniquely identifies an interface to an ethernet-like medium. The interface identified by a particular value of this index is the same as identified by the same value of `ifIndex`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.1](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.1)

---

**EtherLike-MIB::dot3StatsInternalMacTransmitErrors 1.3.6.1.2.1.10.7.2.1.10**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔transmission(10) ➔dot3(7) ➔dot3StatsTable(2) ➔dot3StatsEntry(1) ➔dot3StatsInternalMacTransmitErrors(10)**

A count of frames for which transmission on a particular interface fails due to an internal MAC sublayer transmit error.

More details: [http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.10](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.10)

---

**EtherLike-MIB::dot3StatsCarrierSenseErrors 1.3.6.1.2.1.10.7.2.1.11**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔transmission(10) ➔dot3(7) ➔dot3StatsTable(2) ➔dot3StatsEntry(1) ➔dot3StatsCarrierSenseErrors(11)**

The number of times the carrier sense condition was lost or never asserted when attempting to transmit a frame on a particular interface.

More details: [http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.11](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.11)

---

**EtherLike-MIB::dot3StatsFrameTooLongs 1.3.6.1.2.1.10.7.2.1.13**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔transmission(10) ➔dot3(7) ➔dot3StatsTable(2) ➔dot3StatsEntry(1) ➔dot3StatsFrameTooLongs(13)**

A count of frames received on a particular interface that exceeds the maximum permitted frame size.

More details: [http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.13](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.13)

---

**EtherLike-MIB::dot3StatsInternalMacReceiveErrors 1.3.6.1.2.1.10.7.2.1.16**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔transmission(10) ➔dot3(7) ➔dot3StatsTable(2) ➔dot3StatsEntry(1) ➔dot3StatsInternalMacReceiveErrors(16)**

A count of frames for which reception on a particular interface fails due to an internal MAC sublayer receiving an error.

More details: [http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.16](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.16)

---

**EtherLike-MIB::dot3StatsDuplexStatus 1.3.6.1.2.1.10.7.2.1.19**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔transmission(10) ➔dot3(7) ➔dot3StatsTable(2) ➔dot3StatsEntry(1) ➔dot3StatsDuplexStatus(19)**

The current mode of operation of the MAC entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.19](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.19)

---

**EtherLike-MIB::dot3StatsFCSErrors 1.3.6.1.2.1.10.7.2.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔transmission(10) ➔dot3(7) ➔dot3StatsTable(2) ➔dot3StatsEntry(1) ➔dot3StatsFCSErrors(3)**

A count of frames received on a particular interface that is an integral number of octets in length but does not pass the FCS check.

More details: [http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.3](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.3)

---

**EtherLike-MIB::dot3StatsDeferredTransmissions 1.3.6.1.2.1.10.7.2.1.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔transmission(10) ➔dot3(7) ➔dot3StatsTable(2) ➔dot3StatsEntry(1) ➔dot3StatsDeferredTransmissions(7)**

A count of frames for which the first transmission attempt on a particular interface is delayed because the medium is busy.

More details: [http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.7](http://oid-info.com/get/1.3.6.1.2.1.10.7.2.1.7)

---

**SNMPv2-MIB::snmpInPkts 1.3.6.1.2.1.11.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInPkts(1)**

The total number of messages from the transport service to the SNMP entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.1](http://oid-info.com/get/1.3.6.1.2.1.11.1)

---

**SNMPv2-MIB::snmpInBadValues 1.3.6.1.2.1.11.10**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInBadValues(10)**

The total number of SNMP PDUs which were delivered to the SNMP protocol entity and for which the value of the error-status field was `badValue`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.10](http://oid-info.com/get/1.3.6.1.2.1.11.10)

---

**SNMPv2-MIB::snmpInReadOnlys 1.3.6.1.2.1.11.11**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInReadOnlys(11)**

The total number of valid SNMP PDUs which were delivered to the SNMP protocol entity and for which the value of the error-status field was `readOnly`. It should be noted that it is a protocol error to generate an SNMP PDU that contains the value `readOnly` in the error-status field, this object is provided to detect incorrect implementations of the SNMP.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.11](http://oid-info.com/get/1.3.6.1.2.1.11.11)

---

**SNMPv2-MIB::snmpInGenErrs 1.3.6.1.2.1.11.12**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInGenErrs(12)**

The total number of SNMP PDUs which were delivered to the SNMP protocol entity and for which the value of the error-status field was `genErr`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.12](http://oid-info.com/get/1.3.6.1.2.1.11.12)

---

**SNMPv2-MIB::snmpInTotalReqVars 1.3.6.1.2.1.11.13**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInTotalReqVars(13)**

The total number of MIB objects which have been retrieved successfully by the SNMP protocol entity as the result of receiving valid SNMP `Get-Request` and `Get-Next` PDUs.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.13](http://oid-info.com/get/1.3.6.1.2.1.11.13)

---

**SNMPv2-MIB::snmpInTotalSetVars 1.3.6.1.2.1.11.14**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInTotalSetVars(14)**

The total number of MIB objects which have been altered successfully by the SNMP protocol entity as the result of receiving valid SNMP `Set-Request` PDUs.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.14](http://oid-info.com/get/1.3.6.1.2.1.11.14)

---

**SNMPv2-MIB::snmpInGetRequests 1.3.6.1.2.1.11.15**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInGetRequests(15)**

The total number of SNMP Get-Request PDUs which have been accepted and processed by the SNMP protocol entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.15](http://oid-info.com/get/1.3.6.1.2.1.11.15)

---

**SNMPv2-MIB::snmpInGetNexts 1.3.6.1.2.1.11.16**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInGetNexts(16)**

The total number of SNMP `Get-Next` PDUs which have been accepted and processed by the SNMP protocol entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.16](http://oid-info.com/get/1.3.6.1.2.1.11.16)

---

**SNMPv2-MIB::snmpInSetRequests 1.3.6.1.2.1.11.17**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInSetRequests(17)**

The total number of SNMP `Set-Request` PDUs which have been accepted and processed by the SNMP protocol entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.17](http://oid-info.com/get/1.3.6.1.2.1.11.17)

---

**SNMPv2-MIB::snmpInGetResponses 1.3.6.1.2.1.11.18**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInGetResponses(18)**

The total number of SNMP `Get-Response` PDUs which have been accepted and processed by the SNMP protocol entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.18](http://oid-info.com/get/1.3.6.1.2.1.11.18)

---

**SNMPv2-MIB::snmpInTraps 1.3.6.1.2.1.11.19**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInTraps(19)**

The total number of SNMP `Trap` PDUs which have been accepted and processed by the SNMP protocol entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.19](http://oid-info.com/get/1.3.6.1.2.1.11.19)

---

**SNMPv2-MIB::snmpOutPkts 1.3.6.1.2.1.11.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpOutPkts(2)**

The total number of SNMP messages passed from the SNMP protocol entity to the transport service.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.2](http://oid-info.com/get/1.3.6.1.2.1.11.2)

---

**SNMPv2-MIB::snmpOutTooBigs 1.3.6.1.2.1.11.20**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpOutTooBigs(20)**

The total number of SNMP PDUs which were generated by the SNMP protocol entity and for which the value of the error-status field was `tooBig`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.20](http://oid-info.com/get/1.3.6.1.2.1.11.20)

---

**SNMPv2-MIB::snmpOutNoSuchNames 1.3.6.1.2.1.11.21**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpOutNoSuchNames(21)**

The total number of SNMP PDUs which were generated by the SNMP protocol entity and for which the value of the error-status was `noSuchName`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.21](http://oid-info.com/get/1.3.6.1.2.1.11.21)

---

**SNMPv2-MIB::snmpOutBadValues 1.3.6.1.2.1.11.22**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpOutBadValues(22)**

The total number of SNMP PDUs which were generated by the SNMP protocol entity and for which the value of the error-status field was `badValue`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.22](http://oid-info.com/get/1.3.6.1.2.1.11.22)

---

**SNMPv2-MIB::snmpOutGenErrs 1.3.6.1.2.1.11.24**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpOutGenErrs(24)**

The total number of SNMP PDUs which were generated by the SNMP protocol entity and for which the value of the error-status field was `genErr`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.24](http://oid-info.com/get/1.3.6.1.2.1.11.24)

---

**SNMPv2-MIB::snmpOutGetRequests 1.3.6.1.2.1.11.25**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpOutGetRequests(25)**

The total number of SNMP `Get-Request` PDUs which have been generated by the SNMP protocol entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.25](http://oid-info.com/get/1.3.6.1.2.1.11.25)

---

**SNMPv2-MIB::snmpOutGetNexts 1.3.6.1.2.1.11.26**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpOutGetNexts(26)**

The total number of SNMP `Get-Next` PDUs which have been generated by the SNMP protocol entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.26](http://oid-info.com/get/1.3.6.1.2.1.11.26)

---

**SNMPv2-MIB::snmpOutSetRequests 1.3.6.1.2.1.11.27**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpOutSetRequests(27)**

The total number of SNMP `Set-Request` PDUs which have been generated by the SNMP protocol entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.27](http://oid-info.com/get/1.3.6.1.2.1.11.27)

---

**SNMPv2-MIB::snmpOutGetResponses 1.3.6.1.2.1.11.28**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpOutGetResponses(28)**

The total number of SNMP `Get-Response` PDUs which have been generated by the SNMP protocol entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.28](http://oid-info.com/get/1.3.6.1.2.1.11.28)

---

**SNMPv2-MIB::snmpOutTraps 1.3.6.1.2.1.11.29**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpOutTraps(29)**

The total number of SNMP `Trap` PDUs which have been generated by the SNMP protocol entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.29](http://oid-info.com/get/1.3.6.1.2.1.11.29)

---

**SNMPv2-MIB::snmpInBadVersions 1.3.6.1.2.1.11.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInBadVersions(3)**

The total number of SNMP messages which were delivered to the SNMP entity and were for an unsupported SNMP version.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.3](http://oid-info.com/get/1.3.6.1.2.1.11.3)

---

**SNMPv2-MIB::snmpEnableAuthenTraps 1.3.6.1.2.1.11.30**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpEnableAuthenTraps(30)**

Indicates whether the SNMP entity is permitted to generate `authenticationFailure` traps.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.30](http://oid-info.com/get/1.3.6.1.2.1.11.30)

---

**SNMPv2-MIB::snmpSilentDrops 1.3.6.1.2.1.11.31**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpSilentDrops(31)**

The total number of Confirmed Class PDUs (such as `GetRequest-PDUs`,  
`GetNextRequest-PDUs`, `GetBulkRequest-PDUs`, `SetRequest-PDUs`, and `InformRequest-PDUs`) delivered to the SNMP entity which were silently dropped because the size of a reply containing an alternate Response Class PDU (such as a Response-PDU) with an empty variable-bindings field was greater than either a local constraint or the maximum message size associated with the originator of the request.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.31](http://oid-info.com/get/1.3.6.1.2.1.11.31)

---

**SNMPv2-MIB::snmpProxyDrops 1.3.6.1.2.1.11.32**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpProxyDrops(32)**

The total number of Confirmed Class PDUs (such as `GetRequest-PDUs`, `GetNextRequest-PDUs`, `GetBulkRequest-PDUs`, `SetRequest-PDUs`, and `InformRequest-PDUs`) delivered to the SNMP entity which were silently dropped because the transmission of the (possibly translated) message to a proxy target failed in a manner (other than a time-out) such that no Response Class PDU (such as a `Response-PDU`) could be returned.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.32](http://oid-info.com/get/1.3.6.1.2.1.11.32)

---

**SNMPv2-MIB::snmpInBadCommunityNames 1.3.6.1.2.1.11.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInBadCommunityNames(4)**

The total number of community-based SNMP messages (for example, SNMPv1) delivered to the SNMP entity which used an SNMP community name not known to said entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.4](http://oid-info.com/get/1.3.6.1.2.1.11.4)

---

**SNMPv2-MIB::snmpInBadCommunityUses 1.3.6.1.2.1.11.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInBadCommunityUses(5)**

The total number of community-based SNMP messages (for example, SNMPv1) delivered to the SNMP entity which represented an SNMP operation that was not allowed for the SNMP community named in the message.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.5](http://oid-info.com/get/1.3.6.1.2.1.11.5)

---

**SNMPv2-MIB::snmpInASNParseErrs 1.3.6.1.2.1.11.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInASNParseErrs(6)**

The total number of ASN.1 or BER errors encountered by the SNMP entity when decoding received SNMP messages.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.6](http://oid-info.com/get/1.3.6.1.2.1.11.6)

---

**SNMPv2-MIB::snmpInTooBigs 1.3.6.1.2.1.11.8**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInTooBigs(8)**

The total number of SNMP PDUs which were delivered to the SNMP protocol entity and for which the value of the error-status field was `tooBig`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.8](http://oid-info.com/get/1.3.6.1.2.1.11.8)

---

**SNMPv2-MIB::snmpInNoSuchNames 1.3.6.1.2.1.11.9**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔snmp(11) ➔snmpInNoSuchNames(9)**

The total number of SNMP PDUs which were delivered to the SNMP protocol entity and for which the value of the error-status field was `noSuchName`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.11.9](http://oid-info.com/get/1.3.6.1.2.1.11.9)

---

**IF-MIB::ifNumber 1.3.6.1.2.1.2.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifNumber(1)**

The number of network interfaces (regardless of their current state) present on this system.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.1](http://oid-info.com/get/1.3.6.1.2.1.2.1)

---

**IF-MIB::ifIndex 1.3.6.1.2.1.2.2.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifIndex(1)**

A unique value, greater than zero, for each interface.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.1](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.1)

---

**IF-MIB::ifInOctets 1.3.6.1.2.1.2.2.1.10**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifInOctets(10)**

The total number of octets received on the interface, including framing characters.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.10](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.10)

---

**IF-MIB::ifInUcastPkts 1.3.6.1.2.1.2.2.1.11**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifInUcastPkts(11)**

The number of packets, delivered by this sub-layer to a higher (sub-)layer, which were not addressed to a multicast or broadcast address at this sub-layer.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.11](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.11)

---

**IF-MIB::ifInNUcastPkts 1.3.6.1.2.1.2.2.1.12**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifInNUcastPkts(12)**

The number of packets, delivered by this sub-layer to a higher (sub-)layer, which were addressed to a multicast or broadcast address at this sub-layer.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.12](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.12)

---

**IF-MIB::ifInDiscards 1.3.6.1.2.1.2.2.1.13**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifInDiscards(13)**

The number of inbound packets which were chosen to be discarded even though no errors had been detected to prevent their being deliverable to a higher-layer protocol.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.13](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.13)

---

**IF-MIB::ifInErrors 1.3.6.1.2.1.2.2.1.14**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifInErrors(14)**

For packet-oriented interfaces, the number of inbound packets that contained errors preventing them from being deliverable to a higher-layer protocol.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.14](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.14)

---

**IF-MIB::ifInUnknownProtos 1.3.6.1.2.1.2.2.1.15**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifInUnknownProtos(15)**

For packet-oriented interfaces, the number of packets received via the interface which were discarded because of an unknown or unsupported protocol.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.15](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.15)

---

**IF-MIB::ifOutOctets 1.3.6.1.2.1.2.2.1.16**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifOutOctets(16)**

The total number of octets transmitted out of the interface, including framing characters.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.16](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.16)

---

**IF-MIB::ifOutUcastPkts 1.3.6.1.2.1.2.2.1.17**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifOutUcastPkts(17)**

The total number of packets that higher-level protocols requested be transmitted, and which were not addressed to a multicast or broadcast address at this sub-layer, including those that were discarded or not sent.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.17](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.17)

---

**IF-MIB::ifOutNUcastPkts 1.3.6.1.2.1.2.2.1.18**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifOutNUcastPkts(18)**

The total number of packets that higher-level protocols requested be transmitted, and which were addressed to a multicast or broadcast address at this sub-layer, including those that were discarded or not sent.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.18](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.18)

---

**IF-MIB::ifOutDiscards 1.3.6.1.2.1.2.2.1.19**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifOutDiscards(19)**

The number of outbound packets which were chosen to be discarded even though no errors had been detected to prevent their being transmitted.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.19](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.19)

---

**IF-MIB::ifDescr 1.3.6.1.2.1.2.2.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifDescr(2)**

A textual string containing information about theinterface.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.2](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.2)

---

**IF-MIB::ifOutErrors 1.3.6.1.2.1.2.2.1.20**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifOutErrors(20)**

For packet-oriented interfaces, the number of outbound packets that could not be transmitted because of errors.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.20](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.20)

---

**IF-MIB::ifOutQLen 1.3.6.1.2.1.2.2.1.21**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifOutQLen(21)**

The length of the output packet queue (in packets).

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.21](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.21)

---

**IF-MIB::ifSpecific 1.3.6.1.2.1.2.2.1.22**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifSpecific(22)**

A reference to MIB definitions specific to the particular media being used to realize the interface.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.22](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.22)

---

**IF-MIB::ifType 1.3.6.1.2.1.2.2.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifType(3)**

The type of interface.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.3](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.3)

---

**IF-MIB::ifMtu 1.3.6.1.2.1.2.2.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifMtu(4)**

The size of the largest packet which can be sent/received on the interface, specified in octets.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.4](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.4)

---

**IF-MIB::ifSpeed 1.3.6.1.2.1.2.2.1.5** 

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifSpeed(5)**

An estimate of the interface's current bandwidth in bits per second.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.5](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.5)

---

**IF-MIB::ifPhysAddress 1.3.6.1.2.1.2.2.1.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifPhysAddress(6)**

The interface's address at its protocol sub-layer.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.6](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.6)

---

**IF-MIB::ifAdminStatus 1.3.6.1.2.1.2.2.1.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifAdminStatus(7)**

The desired state of the interface.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.7](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.7)

---

**IF-MIB::ifOperStatus 1.3.6.1.2.1.2.2.1.8**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifOperStatus(8)**

The current operational state of the interface.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.8](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.8)

---

**IF-MIB::ifLastChange 1.3.6.1.2.1.2.2.1.9**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔interfaces(2) ➔ifTable(2) ➔ifEntry(1) ➔ifLastChange(9)**

The value of `sysUpTime` at the time the interface entered its current operational state.

More details: [http://oid-info.com/get/1.3.6.1.2.1.2.2.1.9](http://oid-info.com/get/1.3.6.1.2.1.2.2.1.9)

---

**HOST-RESOURCES-MIB::hrSystemUptime 1.3.6.1.2.1.25.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrSystem(1) ➔hrSystemUptime(1)**

The amount of time since this host was last initialized.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.1.1](http://oid-info.com/get/1.3.6.1.2.1.25.1.1)

---

**HOST-RESOURCES-MIB::hrSystemDate 1.3.6.1.2.1.25.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrSystem(1) ➔hrSystemDate(2)**

The host's notion of the local date and time of day.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.1.2](http://oid-info.com/get/1.3.6.1.2.1.25.1.2)

---

**HOST-RESOURCES-MIB::hrSystemNumUsers 1.3.6.1.2.1.25.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrSystem(1) ➔hrSystemNumUsers(5)**

The number of user sessions for which this host is storing state information.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.1.5](http://oid-info.com/get/1.3.6.1.2.1.25.1.5)

---

**HOST-RESOURCES-MIB::hrSystemProcesses 1.3.6.1.2.1.25.1.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrSystem(1) ➔hrSystemProcesses(6)**

The number of process contexts currently loaded or running on this system.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.1.6](http://oid-info.com/get/1.3.6.1.2.1.25.1.6)

---

**HOST-RESOURCES-MIB::hrSystemMaxProcesses 1.3.6.1.2.1.25.1.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrSystem(1) ➔hrSystemMaxProcesses(7)**

The maximum number of process contexts this system can support.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.1.7](http://oid-info.com/get/1.3.6.1.2.1.25.1.7)

---

**HOST-RESOURCES-MIB::hrMemorySize 1.3.6.1.2.1.25.2.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrStorage(2) ➔hrMemorySize(2)**

The amount of physical read-write main memory, typically RAM, contained by the host.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.2.2](http://oid-info.com/get/1.3.6.1.2.1.25.2.2)

---

**HOST-RESOURCES-MIB::hrStorageIndex 1.3.6.1.2.1.25.2.3.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrStorage(2) ➔hrStorageTable(3) ➔hrStorageEntry(1) ➔hrStorageIndex(1)**

A unique value for each logical storage area contained by the host.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.1](http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.1)

---

**HOST-RESOURCES-MIB::hrStorageType 1.3.6.1.2.1.25.2.3.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrStorage(2) ➔hrStorageTable(3) ➔hrStorageEntry(1) ➔hrStorageType(2)**

The type of storage represented by this entry.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.2](http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.2)

---

**HOST-RESOURCES-MIB::hrStorageDescr 1.3.6.1.2.1.25.2.3.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrStorage(2) ➔hrStorageTable(3) ➔hrStorageEntry(1) ➔hrStorageDescr(3)**

A description of the type and instance of the storage described by this entry.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.3](http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.3)

---

**HOST-RESOURCES-MIB::hrStorageAllocationUnits 1.3.6.1.2.1.25.2.3.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrStorage(2) ➔hrStorageTable(3) ➔hrStorageEntry(1) ➔hrStorageAllocationUnits(4)**

The size, in bytes, of the data objects allocated from this pool.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.4](http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.4)

---

**HOST-RESOURCES-MIB::hrStorageSize 1.3.6.1.2.1.25.2.3.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrStorage(2) ➔hrStorageTable(3) ➔hrStorageEntry(1) ➔hrStorageSize(5)**

The size of the storage represented by this entry, in units of `hrStorageAllocationUnits`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.5](http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.5)

---

**HOST-RESOURCES-MIB::hrStorageUsed 1.3.6.1.2.1.25.2.3.1.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrStorage(2) ➔hrStorageTable(3) ➔hrStorageEntry(1) ➔hrStorageUsed(6)**

The amount of the storage represented by this entry that is allocated, in units of  
`hrStorageAllocationUnits`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.6](http://oid-info.com/get/1.3.6.1.2.1.25.2.3.1.6)

---

**HOST-RESOURCES-MIB::hrDeviceIndex 1.3.6.1.2.1.25.3.2.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrDeviceTable(2) ➔hrDeviceEntry(1) ➔hrDeviceIndex(1)**

A unique value for each device contained by the host.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.1](http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.1)

---

**HOST-RESOURCES-MIB::hrDeviceType 1.3.6.1.2.1.25.3.2.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrDeviceTable(2) ➔hrDeviceEntry(1) ➔hrDeviceType(2)**

An indication of the type of device.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.2](http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.2)

---

**HOST-RESOURCES-MIB::hrDeviceDescr 1.3.6.1.2.1.25.3.2.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrDeviceTable(2) ➔hrDeviceEntry(1) ➔hrDeviceDescr(3)**

A textual description of this device, including the device's manufacturer and revision, and optionally, its serial number.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.3](http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.3)

---

**HOST-RESOURCES-MIB::hrDeviceID 1.3.6.1.2.1.25.3.2.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrDeviceTable(2) ➔hrDeviceEntry(1) ➔hrDeviceID(4)**

The product ID for this device.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.4](http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.4)

---

**HOST-RESOURCES-MIB::hrDeviceStatus 1.3.6.1.2.1.25.3.2.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrDeviceTable(2) ➔hrDeviceEntry(1) ➔hrDeviceStatus(5)**

The current operational state of the device described by this row of the table.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.5](http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.5)

---

**HOST-RESOURCES-MIB::hrDeviceErrors 1.3.6.1.2.1.25.3.2.1.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrDeviceTable(2) ➔hrDeviceEntry(1) ➔hrDeviceErrors(6)**

The number of errors detected on this device.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.6](http://oid-info.com/get/1.3.6.1.2.1.25.3.2.1.6)

---

**HOST-RESOURCES-MIB::hrProcessorFrwID 1.3.6.1.2.1.25.3.3.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrProcessorTable(3) ➔hrProcessorEntry(1) ➔hrProcessorFrwID(1)**

The product ID of the firmware associated with the processor.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.3.1.1](http://oid-info.com/get/1.3.6.1.2.1.25.3.3.1.1)

---

**HOST-RESOURCES-MIB::hrProcessorLoad 1.3.6.1.2.1.25.3.3.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrProcessorTable(3) ➔hrProcessorEntry(1) ➔hrProcessorLoad(2)**

The average, over the last minute, of the percentage of time that this processor was not idle.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.3.1.2](http://oid-info.com/get/1.3.6.1.2.1.25.3.3.1.2)

---

**HOST-RESOURCES-MIB::hrNetworkIfIndex 1.3.6.1.2.1.25.3.4.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrNetworkTable(4) ➔hrNetworkEntry(1) ➔hrNetworkIfIndex(1)**

The value of `ifIndex` which corresponds to this network device.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.4.1.1](http://oid-info.com/get/1.3.6.1.2.1.25.3.4.1.1)

---

**HOST-RESOURCES-MIB::hrFSIndex 1.3.6.1.2.1.25.3.8.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrFSTable(8) ➔hrFSEntry(1) ➔hrFSIndex(1)**

A unique value for each file system local to this host.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.1](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.1)

---

**HOST-RESOURCES-MIB::hrFSMountPoint 1.3.6.1.2.1.25.3.8.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrFSTable(8) ➔hrFSEntry(1) ➔hrFSMountPoint(2)**

The path name of the root of this file system.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.2](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.2)

---

**HOST-RESOURCES-MIB::hrFSRemoteMountPoint 1.3.6.1.2.1.25.3.8.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrFSTable(8) ➔hrFSEntry(1) ➔hrFSRemoteMountPoint(3)**

A description of the name and/or address of the server that this file system is mounted from.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.3](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.3)

---

**HOST-RESOURCES-MIB::hrFSType 1.3.6.1.2.1.25.3.8.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrFSTable(8) ➔hrFSEntry(1) ➔hrFSType(4)**

The value of this object identifies the type of this file system.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.4](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.4)

---

**HOST-RESOURCES-MIB::hrFSAccess 1.3.6.1.2.1.25.3.8.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrFSTable(8) ➔hrFSEntry(1) ➔hrFSAccess(5)**

An indication if this file system is logically configured by the operating system to be readable and writable or only readable.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.5](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.5)

---

**HOST-RESOURCES-MIB::hrFSBootable 1.3.6.1.2.1.25.3.8.1.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrFSTable(8) ➔hrFSEntry(1) ➔hrFSBootable(6)**

A flag indicating whether this file system is bootable.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.6](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.6)

---

**HOST-RESOURCES-MIB::hrFSStorageIndex 1.3.6.1.2.1.25.3.8.1.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrFSTable(8) ➔hrFSEntry(1) ➔hrFSStorageIndex(7)**

The index of the `hrStorageEntry` that represents information about this file system.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.7](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.7)

---

**HOST-RESOURCES-MIB::hrFSLastFullBackupDate 1.3.6.1.2.1.25.3.8.1.8**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrFSTable(8) ➔hrFSEntry(1) ➔hrFSLastFullBackupDate(8)**

The last date at which this complete file system was copied to another storage device for backup.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.8](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.8)

---

**HOST-RESOURCES-MIB::hrFSLastPartialBackupDate 1.3.6.1.2.1.25.3.8.1.9**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔host(25) ➔hrDevice(3) ➔hrFSTable(8) ➔hrFSEntry(1) ➔hrFSLastPartialBackupDate(9)**

The last date at which a portion of this file system was copied to another storage device for backup.

More details: [http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.9](http://oid-info.com/get/1.3.6.1.2.1.25.3.8.1.9)

---

**MTA-MIB::mtaStoredMessages 1.3.6.1.2.1.28.1.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔mta(28) ➔mtaTable(1) ➔mtaEntry(1) ➔mtaStoredMessages(2)**

The total number of messages currently stored in the MTA.

More details: [http://oid-info.com/get/1.3.6.1.2.1.28.1.1.2](http://oid-info.com/get/1.3.6.1.2.1.28.1.1.2)

---

**MTA-MIB::mtaStoredVolume 1.3.6.1.2.1.28.1.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔mta(28) ➔mtaTable(1) ➔mtaEntry(1) ➔mtaStoredVolume(5)**

The total volume of messages currently stored in the MTA, measured in kilo-octets.

More details: [http://oid-info.com/get/1.3.6.1.2.1.28.1.1.5](http://oid-info.com/get/1.3.6.1.2.1.28.1.1.5)

---

**MTA-MIB::mtaGroupHierarchy 1.3.6.1.2.1.28.2.1.31**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔mta(28) ➔mtaGroupTable(2) ➔mtaGroupEntry(1) ➔mtaGroupHierarchy(31)**

Describes how this group fits into the hierarchy.

More details: [http://oid-info.com/get/1.3.6.1.2.1.28.2.1.31](http://oid-info.com/get/1.3.6.1.2.1.28.2.1.31)

---

**MTA-MIB::mtaGroupStoredMessages 1.3.6.1.2.1.28.2.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔mta(28) ➔mtaGroupTable(2) ➔mtaGroupEntry(1) ➔mtaGroupStoredMessages(4)**

The total number of messages currently stored in this group's queue.

More details: [http://oid-info.com/get/1.3.6.1.2.1.28.2.1.4](http://oid-info.com/get/1.3.6.1.2.1.28.2.1.4)

---

**MTA-MIB::mtaGroupStoredVolume 1.3.6.1.2.1.28.2.1.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔mta(28) ➔mtaGroupTable(2) ➔mtaGroupEntry(1) ➔mtaGroupStoredVolume(7)**

The total volume of messages currently stored in this group's queue, measured in kilo-octets.

More details: [http://oid-info.com/get/1.3.6.1.2.1.28.2.1.7](http://oid-info.com/get/1.3.6.1.2.1.28.2.1.7)

---

**IF-MIB::ifName 1.3.6.1.2.1.31.1.1.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifName(1)**

The textual name of the interface.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.1](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.1)

---

**IF-MIB::ifHCOutOctets 1.3.6.1.2.1.31.1.1.1.10**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifHCOutOctets(10)**

The total number of octets transmitted out of the interface, including framing characters.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.10](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.10)

---

**IF-MIB::ifHCOutUcastPkts 1.3.6.1.2.1.31.1.1.1.11**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifHCOutUcastPkts(11)**

The total number of packets that higher-level protocols requested be transmitted, and which were not addressed to a multicast or broadcast address at this sub-layer, including those that were discarded or not sent.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.11](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.11)

---

**IF-MIB::ifHCOutMulticastPkts 1.3.6.1.2.1.31.1.1.1.12**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifHCOutMulticastPkts(12)**

The total number of packets that higher-level protocols requested be transmitted, and which were addressed to a multicast address at this sub-layer, including those that were discarded or not sent.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.12](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.12)

---

**IF-MIB::ifHCOutBroadcastPkts 1.3.6.1.2.1.31.1.1.1.13**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifHCOutBroadcastPkts(13)**

The total number of packets that higher-level protocols requested be transmitted, and which were addressed to a broadcast address at this sub-layer, including those that were discarded or not sent.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.13](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.13)

---

**IF-MIB::ifHighSpeed 1.3.6.1.2.1.31.1.1.1.15**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifHighSpeed(15)**

An estimate of the interface's current bandwidth in units of 1,000,000 bits per second.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.15](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.15)

---

**IF-MIB::ifPromiscuousMode 1.3.6.1.2.1.31.1.1.1.16**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifPromiscuousMode(16)**

This object has a value of false(2) if this interface only accepts packets/frames that are addressed to this station.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.16](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.16)

---

**IF-MIB::ifConnectorPresent 1.3.6.1.2.1.31.1.1.1.17**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifConnectorPresent(17)**

This object has the value 'true(1)' if the interface sublayer has a physical connector and the value 'false(2)' otherwise.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.17](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.17)

---

**IF-MIB::ifAlias 1.3.6.1.2.1.31.1.1.1.18**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifAlias(18)**

This object is an 'alias' name for the interface as specified by a network manager, and provides a non-volatile 'handle' for the interface.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.18](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.18)

---

**IF-MIB::ifCounterDiscontinuityTime 1.3.6.1.2.1.31.1.1.1.19**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifCounterDiscontinuityTime(19)**

The value of `sysUpTime` on the most recent occasion at which any one or more of this interface's counters suffered a discontinuity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.19](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.19)

---

**IF-MIB::ifInMulticastPkts 1.3.6.1.2.1.31.1.1.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifInMulticastPkts(2)**

The number of packets, delivered by this sub-layer to a higher (sub-)layer, which were addressed to a multicast address at this sub-layer.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.2](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.2)

---

**IF-MIB::ifInBroadcastPkts 1.3.6.1.2.1.31.1.1.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifInBroadcastPkts(3)**

The number of packets, delivered by this sub-layer to a higher (sub-)layer, which were addressed to a broadcast address at this sub-layer.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.3](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.3)

---

**IF-MIB::ifOutMulticastPkts 1.3.6.1.2.1.31.1.1.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifOutMulticastPkts(4)**

The total number of packets that higher-level protocols requested be transmitted, and which were addressed to a multicast address at this sub-layer, including those that were discarded or not sent.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.4](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.4)

---

**IF-MIB::ifOutBroadcastPkts 1.3.6.1.2.1.31.1.1.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifOutBroadcastPkts(5)**

The total number of packets that higher-level protocols requested be transmitted, and which were addressed to a broadcast address at this sub-layer, including those that were discarded or not sent.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.5](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.5)

---

**IF-MIB::ifHCInOctets 1.3.6.1.2.1.31.1.1.1.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifHCInOctets(6)**

The total number of octets received on the interface, including framing characters.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.6](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.6)

---

**IF-MIB::ifHCInUcastPkts 1.3.6.1.2.1.31.1.1.1.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifHCInUcastPkts(7)**

The number of packets, delivered by this sub-layer to a higher (sub-)layer, which were not addressed to a multicast or broadcast address at this sub-layer.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.7](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.7)

---

**IF-MIB::ifHCInMulticastPkts 1.3.6.1.2.1.31.1.1.1.8**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifHCInMulticastPkts(8)**

The number of packets, delivered by this sub-layer to a higher (sub-)layer, which were addressed to a multicast address at this sub-layer.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.8](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.8)

---

**IF-MIB::ifHCInBroadcastPkts 1.3.6.1.2.1.31.1.1.1.9**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifXTable(1) ➔ifXEntry(1) ➔ifHCInBroadcastPkts(9)**

The number of packets, delivered by this sub-layer to a higher (sub-)layer, which were addressed to a broadcast address at this sub-layer.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.9](http://oid-info.com/get/1.3.6.1.2.1.31.1.1.1.9)

---

**IF-MIB::ifTableLastChange 1.3.6.1.2.1.31.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ifMIB(31) ➔ifMIBObjects(1) ➔ifTableLastChange(5)**

The value of `sysUpTime` at the time of the last creation or deletion of an entry in the `ifTable`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.31.1.5](http://oid-info.com/get/1.3.6.1.2.1.31.1.5)

---

**IP-MIB::ipForwarding 1.3.6.1.2.1.4.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForwarding(1)**

The indication of whether this entity is acting as an IPv4 router in respect to the forwarding of datagrams received by, but not addressed to, this entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.1](http://oid-info.com/get/1.3.6.1.2.1.4.1)

---

**IP-MIB::ipOutRequests 1.3.6.1.2.1.4.10**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipOutRequests(10)**

The total number of IPv4 datagrams which local IPv4 user protocols (including ICMP) supplied to IPv4 in requests for transmission.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.10](http://oid-info.com/get/1.3.6.1.2.1.4.10)

---

**IP-MIB::ipOutDiscards 1.3.6.1.2.1.4.11**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipOutDiscards(11)**

The number of output IPv4 datagrams for which no problem was encountered to prevent their transmission to their destination, but which were discarded (e.g., for lack of buffer space).

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.11](http://oid-info.com/get/1.3.6.1.2.1.4.11)

---

**IP-MIB::ipOutNoRoutes 1.3.6.1.2.1.4.12**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipOutNoRoutes(12)**

The number of IPv4 datagrams discarded because no route could be found to transmit them to their destination.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.12](http://oid-info.com/get/1.3.6.1.2.1.4.12)

---

**IP-MIB::ipReasmTimeout 1.3.6.1.2.1.4.13**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipReasmTimeout(13)**

The maximum number of seconds that received fragments are held while they are awaiting reassembly at this entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.13](http://oid-info.com/get/1.3.6.1.2.1.4.13)

---

**IP-MIB::ipReasmReqds 1.3.6.1.2.1.4.14**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipReasmReqds(14)**

The number of IPv4 fragments received which needed to be reassembled at this entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.14](http://oid-info.com/get/1.3.6.1.2.1.4.14)

---

**IP-MIB::ipReasmOKs 1.3.6.1.2.1.4.15**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipReasmOKs(15)**

The number of IPv4 datagrams successfully re-assembled.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.15](http://oid-info.com/get/1.3.6.1.2.1.4.15)

---

**IP-MIB::ipReasmFails 1.3.6.1.2.1.4.16**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipReasmFails(16)**

The number of failures detected by the IPv4 re-assembly algorithm (for whatever reason: timed out, errors, etc).

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.16](http://oid-info.com/get/1.3.6.1.2.1.4.16)

---

**IP-MIB::ipFragOKs 1.3.6.1.2.1.4.17**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipFragOKs(17)**

The number of IPv4 datagrams that have been successfully fragmented at this entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.17](http://oid-info.com/get/1.3.6.1.2.1.4.17)

---

**IP-MIB::ipFragFails 1.3.6.1.2.1.4.18**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipFragFails(18)**

The number of IPv4 datagrams that have been discarded because they needed to be fragmented at this entity but could not be, e.g., because their Don't Fragment flag was set.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.18](http://oid-info.com/get/1.3.6.1.2.1.4.18)

---

**IP-MIB::ipFragCreates 1.3.6.1.2.1.4.19**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipFragCreates(19)**

The number of IPv4 datagram fragments that have been generated as a result of fragmentation at this entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.19](http://oid-info.com/get/1.3.6.1.2.1.4.19)

---

**IP-MIB::ipAdEntAddr 1.3.6.1.2.1.4.20.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddrTable(20) ➔ipAddrEntry(1) ➔ipAdEntAddr(1)**

The IPv4 address to which this entry's addressing information pertains.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.20.1.1](http://oid-info.com/get/1.3.6.1.2.1.4.20.1.1)

---

**IP-MIB::ipAdEntIfIndex 1.3.6.1.2.1.4.20.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddrTable(20) ➔ipAddrEntry(1) ➔ipAdEntIfIndex(2)**

The index value which uniquely identifies the interface to which this entry is applicable.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.20.1.2](http://oid-info.com/get/1.3.6.1.2.1.4.20.1.2)

---

**IP-MIB::ipAdEntNetMask 1.3.6.1.2.1.4.20.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddrTable(20) ➔ipAddrEntry(1) ➔ipAdEntNetMask(3)**

The subnet mask associated with the IPv4 address of this entry.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.20.1.3](http://oid-info.com/get/1.3.6.1.2.1.4.20.1.3)

---

**IP-MIB::ipAdEntBcastAddr 1.3.6.1.2.1.4.20.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddrTable(20) ➔ipAddrEntry(1) ➔ipAdEntBcastAddr(4)**

The value of the least-significant bit in the IPv4 broadcast address used for sending datagrams on the (logical) interface associated with the IPv4 address of this entry.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.20.1.4](http://oid-info.com/get/1.3.6.1.2.1.4.20.1.4)

---

**IP-MIB::ipNetToMediaIfIndex 1.3.6.1.2.1.4.22.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipNetToMediaTable(22) ➔ipNetToMediaEntry(1) ➔ipNetToMediaIfIndex(1)**

The interface on which this entry's equivalence is effective.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.22.1.1](http://oid-info.com/get/1.3.6.1.2.1.4.22.1.1)

---

**IP-MIB::ipNetToMediaPhysAddress 1.3.6.1.2.1.4.22.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipNetToMediaTable(22) ➔ipNetToMediaEntry(1) ➔ipNetToMediaPhysAddress(2)**

The media-dependent 'physical' address.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.22.1.2](http://oid-info.com/get/1.3.6.1.2.1.4.22.1.2)

---

**IP-MIB::ipNetToMediaNetAddress 1.3.6.1.2.1.4.22.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipNetToMediaTable(22) ➔ipNetToMediaEntry(1) ➔ipNetToMediaNetAddress(3)**

The `IpAddress` corresponding to the media-dependent 'physical' address.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.22.1.3](http://oid-info.com/get/1.3.6.1.2.1.4.22.1.3)

---

**IP-MIB::ipNetToMediaType 1.3.6.1.2.1.4.22.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipNetToMediaTable(22) ➔ipNetToMediaEntry(1) ➔ipNetToMediaType(4)**

The type of mapping.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.22.1.4](http://oid-info.com/get/1.3.6.1.2.1.4.22.1.4)

---

**IP-FORWARD-MIB::ipCidrRouteDest 1.3.6.1.2.1.4.24.4.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteDest(1)**

The destination IP address of this route.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.1](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.1)

---

**IP-FORWARD-MIB::ipCidrRouteNextHopAS 1.3.6.1.2.1.4.24.4.1.10**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteNextHopAS(10)**

The Autonomous System Number of the Next Hop.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.10](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.10)

---

**IP-FORWARD-MIB::ipCidrRouteMetric1 1.3.6.1.2.1.4.24.4.1.11**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteMetric1(11)**

The primary routing metric for this route.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.11](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.11)

---

**IP-FORWARD-MIB::ipCidrRouteMetric2 1.3.6.1.2.1.4.24.4.1.12**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteMetric2(12)**

An alternate routing metric for this route.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.12](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.12)

---

**IP-FORWARD-MIB::ipCidrRouteMetric3 1.3.6.1.2.1.4.24.4.1.13**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteMetric3(13)**

An alternate routing metric for this route.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.13](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.13)

---

**IP-FORWARD-MIB::ipCidrRouteMetric4 1.3.6.1.2.1.4.24.4.1.14**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteMetric4(14)**

An alternate routing metric for this route.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.14](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.14)

---

**IP-FORWARD-MIB::ipCidrRouteMetric5 1.3.6.1.2.1.4.24.4.1.15**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteMetric5(15)**

An alternate routing metric for this route.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.15](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.15)

---

**IP-FORWARD-MIB::ipCidrRouteStatus 1.3.6.1.2.1.4.24.4.1.16**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteStatus(16)**

The row status variable, used according to row installation and removal conventions.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.16](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.16)

---

**IP-FORWARD-MIB::ipCidrRouteMask 1.3.6.1.2.1.4.24.4.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteMask(2)**

Indicate the mask to be logical-ANDed with the destination address before being compared to the value in the `ipCidrRouteDest` field.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.2](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.2)

---

**IP-FORWARD-MIB::ipCidrRouteTos 1.3.6.1.2.1.4.24.4.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteTos(3)**

The policy specifier is the IP TOS Field.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.3](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.3)

---

**IP-FORWARD-MIB::ipCidrRouteNextHop 1.3.6.1.2.1.4.24.4.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteNextHop(4)**

On remote routes, the address of the next system en route; Otherwise, 0.0.0.0.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.4](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.4)

---

**IP-FORWARD-MIB::ipCidrRouteIfIndex 1.3.6.1.2.1.4.24.4.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteIfIndex(5)**

The `ifIndex` value that identifies the local interface through which the next hop of this route should be reached.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.5](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.5)

---

**IP-FORWARD-MIB::ipCidrRouteType 1.3.6.1.2.1.4.24.4.1.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteType(6)**

The type of route.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.6](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.6)

---

**IP-FORWARD-MIB::ipCidrRouteProto 1.3.6.1.2.1.4.24.4.1.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteProto(7)**

The routing mechanism via which this route was learned.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.7](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.7)

---

**IP-FORWARD-MIB::ipCidrRouteInfo 1.3.6.1.2.1.4.24.4.1.9**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔ipCidrRouteTable(4) ➔ipCidrRouteEntry(1) ➔ipCidrRouteInfo(9)**

A reference to MIB definitions specific to the particular routing protocol that is responsible for this route, as determined by the value specified in the route's `ipCidrRouteProto` value.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.9](http://oid-info.com/get/1.3.6.1.2.1.4.24.4.1.9)

---

**IP-FORWARD-MIB::inetCidrRouteNumber 1.3.6.1.2.1.4.24.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔inetCidrRouteNumber(6)**

The number of current `inetCidrRouteTable` entries that are not invalid.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.6](http://oid-info.com/get/1.3.6.1.2.1.4.24.6)

---

**IP-FORWARD-MIB::inetCidrRouteAge.ipv4 1.3.6.1.2.1.4.24.7.1.10**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔inetCidrRouteTable(7) ➔inetCidrRouteEntry(1) ➔inetCidrRouteAge(10)**

The number of seconds since this route was last updated or otherwise determined to be correct.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.10](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.10)

---

**IP-FORWARD-MIB::inetCidrRouteNextHopAS.ipv4 1.3.6.1.2.1.4.24.7.1.11**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔inetCidrRouteTable(7) ➔inetCidrRouteEntry(1) ➔inetCidrRouteNextHopAS(11)**

The Autonomous System Number of the Next Hop.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.11](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.11)

---

**IP-FORWARD-MIB::inetCidrRouteMetric1.ipv4 1.3.6.1.2.1.4.24.7.1.12**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔inetCidrRouteTable(7) ➔inetCidrRouteEntry(1) ➔inetCidrRouteMetric1(12)**

The primary routing metric for this route.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.12](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.12)

---

**IP-FORWARD-MIB::inetCidrRouteMetric2.ipv4 1.3.6.1.2.1.4.24.7.1.13**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔inetCidrRouteTable(7) ➔inetCidrRouteEntry(1) ➔inetCidrRouteMetric2(13)**

An alternate routing metric for this route.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.13](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.13)

---

**IP-FORWARD-MIB::inetCidrRouteMetric3.ipv4 1.3.6.1.2.1.4.24.7.1.14**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔inetCidrRouteTable(7) ➔inetCidrRouteEntry(1) ➔inetCidrRouteMetric3(14)**

An alternate routing metric for this route.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.14](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.14)

---

**IP-FORWARD-MIB::inetCidrRouteMetric4.ipv4 1.3.6.1.2.1.4.24.7.1.15**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔inetCidrRouteTable(7) ➔inetCidrRouteEntry(1) ➔inetCidrRouteMetric4(15)**

An alternate routing metric for this route.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.15](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.15)

---

**IP-FORWARD-MIB::inetCidrRouteMetric5.ipv4 1.3.6.1.2.1.4.24.7.1.16**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔inetCidrRouteTable(7) ➔inetCidrRouteEntry(1) ➔inetCidrRouteMetric5(16)**

An alternate routing metric for this route.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.16](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.16)

---

**IP-FORWARD-MIB::inetCidrRouteStatus.ipv4 1.3.6.1.2.1.4.24.7.1.17**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔inetCidrRouteTable(7) ➔inetCidrRouteEntry(1) ➔inetCidrRouteStatus(17)**

The row status variable, used according to row installation and removal conventions.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.17](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.17)

---

**IP-FORWARD-MIB::inetCidrRouteIfIndex.ipv4 1.3.6.1.2.1.4.24.7.1.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔inetCidrRouteTable(7) ➔inetCidrRouteEntry(1) ➔inetCidrRouteIfIndex(7)**

The `ifIndex` value that identifies the local interface through which the next hop of this route should be reached.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.7](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.7)

---

**IP-FORWARD-MIB::inetCidrRouteType.ipv4 1.3.6.1.2.1.4.24.7.1.8**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔inetCidrRouteTable(7) ➔inetCidrRouteEntry(1) ➔inetCidrRouteType(8)**

The type of route.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.8](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.8)

---

**IP-FORWARD-MIB::inetCidrRouteProto.ipv4 1.3.6.1.2.1.4.24.7.1.9**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForward(24) ➔inetCidrRouteTable(7) ➔inetCidrRouteEntry(1) ➔inetCidrRouteProto(9)**

The routing mechanism via which this route was learned.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.9](http://oid-info.com/get/1.3.6.1.2.1.4.24.7.1.9)

---

**IP-MIB::ipInReceives 1.3.6.1.2.1.4.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipInReceives(3)**

The total number of input datagrams received from interfaces, including those received in error.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.3](http://oid-info.com/get/1.3.6.1.2.1.4.3)

---

**IP-MIB::ipSystemStatsInUnknownProtos.ipv4 1.3.6.1.2.1.4.31.1.1.10**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsInUnknownProtos(10)**

The number of locally-addressed IP datagrams received successfully but discarded because of an unknown or unsupported protocol.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.10](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.10)

---

**IP-MIB::ipSystemStatsInTruncatedPkts.ipv4 1.3.6.1.2.1.4.31.1.1.11**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsInTruncatedPkts(11)**

The number of input IP datagrams discarded because the datagram frame didn't carry enough data.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.11](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.11)

---

**IP-MIB::ipSystemStatsInForwDatagrams.ipv4 1.3.6.1.2.1.4.31.1.1.12**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsInForwDatagrams(12)**

The number of input datagrams for which this entity was not their final IP destination and for which this entity attempted to find a route to forward them to that final destination.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.12](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.12)

---

**IP-MIB::ipSystemStatsHCInForwDatagrams.ipv4 1.3.6.1.2.1.4.31.1.1.13**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsHCInForwDatagrams(13)**

The number of input datagrams for which this entity was not their final IP destination and for which this entity attempted to find a route to forward them to that final destination.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.13](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.13)

---

**IP-MIB::ipSystemStatsReasmReqds.ipv4 1.3.6.1.2.1.4.31.1.1.14**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsReasmReqds(14)**

The number of IP fragments received that needed to be reassembled at this interface.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.14](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.14)

---

**IP-MIB::ipSystemStatsReasmOKs.ipv4 1.3.6.1.2.1.4.31.1.1.15**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsReasmOKs(15)**

The number of IP datagrams successfully reassembled.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.15](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.15)

---

**IP-MIB::ipSystemStatsReasmFails.ipv4 1.3.6.1.2.1.4.31.1.1.16**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsReasmFails(16)**

The number of failures detected by the IP re-assembly algorithm (for whatever reason: timed out, errors, etc.).

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.16](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.16)

---

**IP-MIB::ipSystemStatsInDiscards.ipv4 1.3.6.1.2.1.4.31.1.1.17**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsInDiscards(17)**

The number of input IP datagrams for which no problems were encountered to prevent their continued processing, but were discarded (e.g., for lack of buffer space).

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.17](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.17)

---

**IP-MIB::ipSystemStatsInDelivers.ipv4 1.3.6.1.2.1.4.31.1.1.18**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsInDelivers(18)**

The total number of datagrams successfully delivered to IP user-protocols (including ICMP).

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.18](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.18)

---

**IP-MIB::ipSystemStatsHCInDelivers.ipv4 1.3.6.1.2.1.4.31.1.1.19**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsHCInDelivers(19)**

The total number of datagrams successfully delivered to IP user-protocols (including ICMP).

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.19](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.19)

---

**IP-MIB::ipSystemStatsOutRequests.ipv4 1.3.6.1.2.1.4.31.1.1.20**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsOutRequests(20)**

The total number of IP datagrams that local IP user- protocols (including ICMP) supplied to IP in requests for transmission.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.20](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.20)

---

**IP-MIB::ipSystemStatsHCOutRequests.ipv4 1.3.6.1.2.1.4.31.1.1.21**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsHCOutRequests(21)**

The total number of IP datagrams that local IP user- protocols (including ICMP) supplied to IP in requests for transmission.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.21](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.21)

---

**IP-MIB::ipSystemStatsOutNoRoutes.ipv4 1.3.6.1.2.1.4.31.1.1.22**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsOutNoRoutes(22)**

The number of locally generated IP datagrams discarded because no route could be found to transmit them to their destination.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.22](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.22)

---

**IP-MIB::ipSystemStatsOutForwDatagrams.ipv4 1.3.6.1.2.1.4.31.1.1.23**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsOutForwDatagrams(23)**

The number of datagrams for which this entity was not their final IP destination and for which it was successful in finding a path to their final destination.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.23](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.23)

---

**IP-MIB::ipSystemStatsHCOutForwDatagrams.ipv4 1.3.6.1.2.1.4.31.1.1.24**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsHCOutForwDatagrams(24)**

The number of datagrams for which this entity was not their final IP destination and for which it was successful in finding a path to their final destination.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.24](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.24)

---

**IP-MIB::ipSystemStatsOutDiscards.ipv4 1.3.6.1.2.1.4.31.1.1.25**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsOutDiscards(25)**

The number of output IP datagrams for which no problem was encountered to prevent their transmission to their destination, but were discarded (e.g., for lack of buffer space).

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.25](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.25)

---

**IP-MIB::ipSystemStatsOutFragReqds.ipv4 1.3.6.1.2.1.4.31.1.1.26**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsOutFragReqds(26)**

The number of IP datagrams that would require fragmentation in order to be transmitted.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.26](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.26)

---

**IP-MIB::ipSystemStatsOutFragOKs.ipv4 1.3.6.1.2.1.4.31.1.1.27**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsOutFragOKs(27)**

The number of IP datagrams that have been successfully fragmented.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.27](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.27)

---

**IP-MIB::ipSystemStatsOutFragFails.ipv4 1.3.6.1.2.1.4.31.1.1.28**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsOutFragFails(28)**

The number of IP datagrams that have been discarded because they needed to be fragmented but could not be.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.28](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.28)

---

**IP-MIB::ipSystemStatsOutFragCreates.ipv4 1.3.6.1.2.1.4.31.1.1.29**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsOutFragCreates(29)**

The number of output datagram fragments that have been generated as a result of IP fragmentation.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.29](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.29)

---

**IP-MIB::ipSystemStatsInReceives.ipv4 1.3.6.1.2.1.4.31.1.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsInReceives(3)**

The total number of input IP datagrams received, including those received in error.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.3](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.3)

---

**IP-MIB::ipSystemStatsOutTransmits.ipv4 1.3.6.1.2.1.4.31.1.1.30**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsOutTransmits(30)**

The total number of IP datagrams that this entity supplied to the lower layers for transmission.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.30](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.30)

---

**IP-MIB::ipSystemStatsHCOutTransmits.ipv4 1.3.6.1.2.1.4.31.1.1.31**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsHCOutTransmits(31)**

The total number of IP datagrams that this entity supplied to the lower layers for transmission.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.31](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.31)

---

**IP-MIB::ipSystemStatsOutOctets.ipv4 1.3.6.1.2.1.4.31.1.1.32**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsOutOctets(32)**

The total number of octets in IP datagrams delivered to the lower layers for transmission.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.32](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.32)

---

**IP-MIB::ipSystemStatsHCOutOctets.ipv4 1.3.6.1.2.1.4.31.1.1.33**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsHCOutOctets(33)**

The total number of octets in IP datagrams delivered to the lower layers for transmission.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.33](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.33)

---

**IP-MIB::ipSystemStatsInMcastPkts.ipv4 1.3.6.1.2.1.4.31.1.1.34**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsInMcastPkts(34)**

The number of IP multicast datagrams received.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.34](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.34)

---

**IP-MIB::ipSystemStatsHCInMcastPkts.ipv4 1.3.6.1.2.1.4.31.1.1.35**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsHCInMcastPkts(35)**

The number of IP multicast datagrams received.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.35](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.35)

---

**IP-MIB::ipSystemStatsInMcastOctets.ipv4 1.3.6.1.2.1.4.31.1.1.36**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsInMcastOctets(36)**

The total number of octets received in IP multicast datagrams.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.36](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.36)

---

**IP-MIB::ipSystemStatsHCInMcastOctets.ipv4 1.3.6.1.2.1.4.31.1.1.37**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsHCInMcastOctets(37)**

The total number of octets received in IP multicast datagrams.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.37](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.37)

---

**IP-MIB::ipSystemStatsOutMcastPkts.ipv4 1.3.6.1.2.1.4.31.1.1.38**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsOutMcastPkts(38)**

The number of IP multicast datagrams transmitted.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.38](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.38)

---

**IP-MIB::ipSystemStatsHCOutMcastPkts.ipv4 1.3.6.1.2.1.4.31.1.1.39**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsHCOutMcastPkts(39)**

The number of IP multicast datagrams transmitted.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.39](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.39)

---

**IP-MIB::ipSystemStatsHCInReceives.ipv4 1.3.6.1.2.1.4.31.1.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsHCInReceives(4)**

The total number of input IP datagrams received, including those received in error.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.4](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.4)

---

**IP-MIB::ipSystemStatsOutMcastOctets.ipv4 1.3.6.1.2.1.4.31.1.1.40**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsOutMcastOctets(40)**

The total number of octets transmitted in IP multicast datagrams.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.40](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.40)

---

**IP-MIB::ipSystemStatsHCOutMcastOctets.ipv4 1.3.6.1.2.1.4.31.1.1.41**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsHCOutMcastOctets(41)**

The total number of octets transmitted in IP multicast datagrams.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.41](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.41)

---

**IP-MIB::ipSystemStatsInBcastPkts.ipv4 1.3.6.1.2.1.4.31.1.1.42**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsInBcastPkts(42)**

The number of IP broadcast datagrams received.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.42](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.42)

---

**IP-MIB::ipSystemStatsHCInBcastPkts.ipv4 1.3.6.1.2.1.4.31.1.1.43**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsHCInBcastPkts(43)**

The number of IP broadcast datagrams received.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.43](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.43)

---

**IP-MIB::ipSystemStatsOutBcastPkts.ipv4 1.3.6.1.2.1.4.31.1.1.44**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsOutBcastPkts(44)**

The number of IP broadcast datagrams transmitted.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.44](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.44)

---

**IP-MIB::ipSystemStatsHCOutBcastPkts.ipv4 1.3.6.1.2.1.4.31.1.1.45**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsHCOutBcastPkts(45)**

The number of IP broadcast datagrams transmitted.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.45](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.45)

---

**IP-MIB::ipSystemStatsDiscontinuityTime.ipv4 1.3.6.1.2.1.4.31.1.1.46**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsDiscontinuityTime(46)**

The value of `sysUpTime` on the most recent occasion at which any one or more of this entry's counters suffered a discontinuity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.46](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.46)

---

**IP-MIB::ipSystemStatsRefreshRate.ipv4 1.3.6.1.2.1.4.31.1.1.47**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsRefreshRate(47)**

The minimum reasonable polling interval for this entry.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.47](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.47)

---

**IP-MIB::ipSystemStatsInOctets.ipv4 1.3.6.1.2.1.4.31.1.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsInOctets(5)**

The total number of octets received in input IP datagrams, including those received in error.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.5](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.5)

---

**IP-MIB::ipSystemStatsHCInOctets.ipv4 1.3.6.1.2.1.4.31.1.1.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsHCInOctets(6)**

The total number of octets received in input IP datagrams, including those received in error.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.6](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.6)

---

**IP-MIB::ipSystemStatsInHdrErrors.ipv4 1.3.6.1.2.1.4.31.1.1.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsInHdrErrors(7)**

The number of input IP datagrams discarded due to errors in their IP headers, including version number mismatch, other format errors, hop count exceeded, errors discovered in processing their IP options, etc.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.7](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.7)

---

**IP-MIB::ipSystemStatsInNoRoutes.ipv4 1.3.6.1.2.1.4.31.1.1.8**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsInNoRoutes(8)**

The number of input IP datagrams discarded because no route could be found to transmit them to their destination.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.8](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.8)

---

**IP-MIB::ipSystemStatsInAddrErrors.ipv4 1.3.6.1.2.1.4.31.1.1.9**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipSystemStatsTable(1) ➔ipSystemStatsEntry(1) ➔ipSystemStatsInAddrErrors(9)**

The number of input IP datagrams discarded because the IP address in their IP header's destination field was not a valid address to be received at this entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.9](http://oid-info.com/get/1.3.6.1.2.1.4.31.1.1.9)

---

**IP-MIB::ipIfStatsTableLastChange 1.3.6.1.2.1.4.31.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipTrafficStats(31) ➔ipIfStatsTableLastChange(2)**

The value of `sysUpTime` on the most recent occasion at which a row in the  
`ipIfStatsTable` was added or deleted.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.31.2](http://oid-info.com/get/1.3.6.1.2.1.4.31.2)

---

**IP-MIB::ipAddressPrefixOrigin 1.3.6.1.2.1.4.32.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressPrefixTable(32) ➔ipAddressPrefixEntry(1) ➔ipAddressPrefixOrigin(5)**

The origin of this prefix.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.32.1.5](http://oid-info.com/get/1.3.6.1.2.1.4.32.1.5)

---

**IP-MIB::ipAddressPrefixOnLinkFlag 1.3.6.1.2.1.4.32.1.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressPrefixTable(32) ➔ipAddressPrefixEntry(1) ➔ipAddressPrefixOnLinkFlag(6)**

This object has the value 'true(1)', if this prefix can be used for on-link determination; otherwise, the value is 'false(2)'.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.32.1.6](http://oid-info.com/get/1.3.6.1.2.1.4.32.1.6)

---

**IP-MIB::ipAddressPrefixAutonomousFlag 1.3.6.1.2.1.4.32.1.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressPrefixTable(32) ➔ipAddressPrefixEntry(1) ➔ipAddressPrefixAutonomousFlag(7)**

Autonomous address configuration flag.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.32.1.7](http://oid-info.com/get/1.3.6.1.2.1.4.32.1.7)

---

**IP-MIB::ipAddressPrefixAdvPreferredLifetime 1.3.6.1.2.1.4.32.1.8**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressPrefixTable(32) ➔ipAddressPrefixEntry(1) ➔ipAddressPrefixAdvPreferredLifetime(8)**

The remaining length of time, in seconds, that this prefix will continue to be preferred, i.e., time until deprecation.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.32.1.8](http://oid-info.com/get/1.3.6.1.2.1.4.32.1.8)

---

**IP-MIB::ipAddressPrefixAdvValidLifetime 1.3.6.1.2.1.4.32.1.9**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressPrefixTable(32) ➔ipAddressPrefixEntry(1) ➔ipAddressPrefixAdvValidLifetime(9)**

The remaining length of time, in seconds, that this prefix will continue to be valid, i.e., time until invalidation.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.32.1.9](http://oid-info.com/get/1.3.6.1.2.1.4.32.1.9)

---

**IP-MIB::ipAddressSpinLock 1.3.6.1.2.1.4.33**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressSpinLock(33)**

An advisory lock used to allow cooperating SNMP managers to coordinate their use of the set operation in creating or modifying rows within this table.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.33](http://oid-info.com/get/1.3.6.1.2.1.4.33)

---

**IP-MIB::ipAddressRowStatus.ipv4 1.3.6.1.2.1.4.34.1.10**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressTable(34) ➔ipAddressEntry(1) ➔ipAddressRowStatus(10)**

The status of this conceptual row.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.34.1.10](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.10)

---

**IP-MIB::ipAddressStorageType.ipv4 1.3.6.1.2.1.4.34.1.11**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressTable(34) ➔ipAddressEntry(1) ➔ipAddressStorageType(11)**

The storage type for this conceptual row.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.34.1.11](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.11)

---

**IP-MIB::ipAddressIfIndex.ipv4 1.3.6.1.2.1.4.34.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressTable(34) ➔ipAddressEntry(1) ➔ipAddressIfIndex(3)**

The index value that uniquely identifies the interface to which this entry is applicable.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.34.1.3](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.3)

---

**IP-MIB::ipAddressType.ipv4 1.3.6.1.2.1.4.34.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressTable(34) ➔ipAddressEntry(1) ➔ipAddressType(4)**

The type of address.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.34.1.4](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.4)

---

**IP-MIB::ipAddressPrefix.ipv4 1.3.6.1.2.1.4.34.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressTable(34) ➔ipAddressEntry(1) ➔ipAddressPrefix(5)**

A pointer to the row in the prefix table to which this address belongs.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.34.1.5](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.5)

---

**IP-MIB::ipAddressOrigin.ipv4 1.3.6.1.2.1.4.34.1.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressTable(34) ➔ipAddressEntry(1) ➔ipAddressOrigin(6)**

The origin of the address.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.34.1.6](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.6)

---

**IP-MIB::ipAddressStatus.ipv4 1.3.6.1.2.1.4.34.1.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressTable(34) ➔ipAddressEntry(1) ➔ipAddressStatus(7)**

The status of the address, describing if the address can be used for communication.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.34.1.7](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.7)

---

**IP-MIB::ipAddressCreated.ipv4 1.3.6.1.2.1.4.34.1.8**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressTable(34) ➔ipAddressEntry(1) ➔ipAddressCreated(8)**

The value of `sysUpTime` at the time this entry was created.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.34.1.8](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.8)

---

**IP-MIB::ipAddressLastChanged.ipv4 1.3.6.1.2.1.4.34.1.9**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipAddressTable(34) ➔ipAddressEntry(1) ➔ipAddressLastChanged(9)**

The value of `sysUpTime` at the time this entry was last updated.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.34.1.9](http://oid-info.com/get/1.3.6.1.2.1.4.34.1.9)

---

**IP-MIB::ipNetToPhysicalPhysAddress 1.3.6.1.2.1.4.35.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipNetToPhysicalTable(35) ➔ipNetToPhysicalEntry(1) ➔ipNetToPhysicalPhysAddress(4)**

The media-dependent 'physical' address.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.35.1.4](http://oid-info.com/get/1.3.6.1.2.1.4.35.1.4)

---

**IP-MIB::ipNetToPhysicalLastUpdated 1.3.6.1.2.1.4.35.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipNetToPhysicalTable(35) ➔ipNetToPhysicalEntry(1) ➔ipNetToPhysicalLastUpdated(5)**

The value of `sysUpTime` at the time this entry was last updated.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.35.1.5](http://oid-info.com/get/1.3.6.1.2.1.4.35.1.5)

---

**IP-MIB::ipNetToPhysicalType 1.3.6.1.2.1.4.35.1.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipNetToPhysicalTable(35) ➔ipNetToPhysicalEntry(1) ➔ipNetToPhysicalType(6)**

The type of mapping.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.35.1.6](http://oid-info.com/get/1.3.6.1.2.1.4.35.1.6)

---

**IP-MIB::ipNetToPhysicalState 1.3.6.1.2.1.4.35.1.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipNetToPhysicalTable(35) ➔ipNetToPhysicalEntry(1) ➔ipNetToPhysicalState(7)**

The Neighbor Unreachability Detection state for the interface when the address mapping in this entry is used.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.35.1.7](http://oid-info.com/get/1.3.6.1.2.1.4.35.1.7)

---

**IP-MIB::ipNetToPhysicalRowStatus 1.3.6.1.2.1.4.35.1.8**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipNetToPhysicalTable(35) ➔ipNetToPhysicalEntry(1) ➔ipNetToPhysicalRowStatus(8)**

The status of this conceptual row.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.35.1.8](http://oid-info.com/get/1.3.6.1.2.1.4.35.1.8)

---

**IP-MIB::ipDefaultRouterLifetime.ipv4 1.3.6.1.2.1.4.37.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipDefaultRouterTable(37) ➔ipDefaultRouterEntry(1) ➔ipDefaultRouterLifetime(4)**

The remaining length of time, in seconds, that this router will continue to be useful as a default router.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.37.1.4](http://oid-info.com/get/1.3.6.1.2.1.4.37.1.4)

---

**IP-MIB::ipDefaultRouterPreference.ipv4 1.3.6.1.2.1.4.37.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipDefaultRouterTable(37) ➔ipDefaultRouterEntry(1) ➔ipDefaultRouterPreference(5)**

An indication of preference given to this router as a default router as described in he Default Router Preferences document.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.37.1.5](http://oid-info.com/get/1.3.6.1.2.1.4.37.1.5)

---

**IP-MIB::ipInHdrErrors 1.3.6.1.2.1.4.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipInHdrErrors(4)**

The number of input datagrams discarded due to errors in their IPv4 headers, including bad checksums, version number mismatch, other format errors, time-to-live exceeded, errors discovered in processing their IPv4 options, etc.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.4](http://oid-info.com/get/1.3.6.1.2.1.4.4)

---

**IP-MIB::ipInAddrErrors 1.3.6.1.2.1.4.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipInAddrErrors(5)**

The number of input datagrams discarded because the IPv4 address in their IPv4 header's destination field was not a valid address to be received at this entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.5](http://oid-info.com/get/1.3.6.1.2.1.4.5)

---

**IP-MIB::ipForwDatagrams 1.3.6.1.2.1.4.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipForwDatagrams(6)**

The number of input datagrams for which this entity was not their final IPv4 destination, as a result of which an attempt was made to find a route to forward them to that final destination.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.6](http://oid-info.com/get/1.3.6.1.2.1.4.6)

---

**IP-MIB::ipInUnknownProtos 1.3.6.1.2.1.4.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipInUnknownProtos(7)**

The number of locally-addressed datagrams received successfully but discarded because of an unknown or unsupported protocol.

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.7](http://oid-info.com/get/1.3.6.1.2.1.4.7)

---

**IP-MIB::ipInDiscards 1.3.6.1.2.1.4.8**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipInDiscards(8)**

The number of input IPv4 datagrams for which no problems were encountered to prevent their continued processing, but which were discarded (e.g., for lack of buffer space).

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.8](http://oid-info.com/get/1.3.6.1.2.1.4.8)

---

**IP-MIB::ipInDelivers 1.3.6.1.2.1.4.9**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ip(4) ➔ipInDelivers(9)**

The total number of input datagrams successfully delivered to IPv4 user-protocols (including ICMP).

More details: [http://oid-info.com/get/1.3.6.1.2.1.4.9](http://oid-info.com/get/1.3.6.1.2.1.4.9)

---

**IPV6-MIB::ipv6Forwarding 1.3.6.1.2.1.55.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ipv6MIB(55) ➔ipv6MIBObjects(1) ➔ipv6Forwarding(1)**

The indication of whether this entity is acting as an IPv6 router in respect to the forwarding of datagrams received by, but not addressed to, this entity.

More details: [http://oid-info.com/get/1.3.6.1.2.1.55.1.1](http://oid-info.com/get/1.3.6.1.2.1.55.1.1)

---

**IPV6-MIB::ipv6DefaultHopLimit 1.3.6.1.2.1.55.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔ipv6MIB(55) ➔ipv6MIBObjects(1) ➔ipv6DefaultHopLimit(2)**

The default value inserted into the Hop Limit field of the IPv6 header of datagrams originated at this entity, whenever a Hop Limit value is not supplied by the transport layer protocol.

More details: [http://oid-info.com/get/1.3.6.1.2.1.55.1.2](http://oid-info.com/get/1.3.6.1.2.1.55.1.2)

---

**DISMAN-EVENT-MIB::mteResourceSampleMinimum 1.3.6.1.2.1.88.1.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteResource(1) ➔mteResourceSampleMinimum(1)**

The minimum `mteTriggerFrequency` this system will accept.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.1.1](http://oid-info.com/get/1.3.6.1.2.1.88.1.1.1)

---

**DISMAN-EVENT-MIB::mteResourceSampleInstanceMaximum 1.3.6.1.2.1.88.1.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteResource(1) ➔mteResourceSampleInstanceMaximum(2)**

The maximum number of instance entries this system will support for sampling.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.1.2](http://oid-info.com/get/1.3.6.1.2.1.88.1.1.2)

---

**DISMAN-EVENT-MIB::mteResourceSampleInstances 1.3.6.1.2.1.88.1.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteResource(1) ➔mteResourceSampleInstances(3)**

The number of currently active instance entries as defined for  
`mteResourceSampleInstanceMaximum`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.1.3](http://oid-info.com/get/1.3.6.1.2.1.88.1.1.3)

---

**DISMAN-EVENT-MIB::mteResourceSampleInstancesHigh 1.3.6.1.2.1.88.1.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteResource(1) ➔mteResourceSampleInstancesHigh(4)**

The highest value of `mteResourceSampleInstances` that has occurred since initialization of the management system.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.1.4](http://oid-info.com/get/1.3.6.1.2.1.88.1.1.4)

---

**DISMAN-EVENT-MIB::mteResourceSampleInstanceLacks 1.3.6.1.2.1.88.1.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteResource(1) ➔mteResourceSampleInstanceLacks(5)**

The number of times this system could not take a new sample because that allocation would have exceeded the limit set by `mteResourceSampleInstanceMaximum`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.1.5](http://oid-info.com/get/1.3.6.1.2.1.88.1.1.5)

---

**DISMAN-EVENT-MIB::mteTriggerFailures 1.3.6.1.2.1.88.1.2.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteTrigger(2) ➔mteTriggerFailures(1)**

The number of times an attempt to check for a trigger condition has failed.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.2.1](http://oid-info.com/get/1.3.6.1.2.1.88.1.2.1)

---

**DISMAN-EVENT-MIB::mteObjectsID 1.3.6.1.2.1.88.1.3.1.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteObjects(3) ➔mteObjectsTable(1) ➔mteObjectsEntry(1) ➔mteObjectsID(3)**

The object identifier of a MIB object to add to a Notification that results from the firing of a trigger.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.3.1.1.3](http://oid-info.com/get/1.3.6.1.2.1.88.1.3.1.1.3)

---

**DISMAN-EVENT-MIB::mteObjectsIDWildcard 1.3.6.1.2.1.88.1.3.1.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteObjects(3) ➔mteObjectsTable(1) ➔mteObjectsEntry(1) ➔mteObjectsIDWildcard(4)**

Control for whether `mteObjectsID` is to be treated as fully-specified or wildcarded, with 'true' indicating wildcard.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.3.1.1.4](http://oid-info.com/get/1.3.6.1.2.1.88.1.3.1.1.4)

---

**DISMAN-EVENT-MIB::mteObjectsEntryStatus 1.3.6.1.2.1.88.1.3.1.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteObjects(3) ➔mteObjectsTable(1) ➔mteObjectsEntry(1) ➔mteObjectsEntryStatus(5)**

The control that allows creation and deletion of entries.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.3.1.1.5](http://oid-info.com/get/1.3.6.1.2.1.88.1.3.1.1.5)

---

**DISMAN-EVENT-MIB::mteEventComment 1.3.6.1.2.1.88.1.4.2.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteEvent(4) ➔mteEventTable(2) ➔mteEventEntry(1) ➔mteEventComment(2)**

A description of the event's function and use.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.4.2.1.2](http://oid-info.com/get/1.3.6.1.2.1.88.1.4.2.1.2)

---

**DISMAN-EVENT-MIB::mteEventActions 1.3.6.1.2.1.88.1.4.2.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteEvent(4) ➔mteEventTable(2) ➔mteEventEntry(1) ➔mteEventActions(3)**

The actions to perform when this event occurs.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.4.2.1.3](http://oid-info.com/get/1.3.6.1.2.1.88.1.4.2.1.3)

---

**DISMAN-EVENT-MIB::mteEventEnabled 1.3.6.1.2.1.88.1.4.2.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteEvent(4) ➔mteEventTable(2) ➔mteEventEntry(1) ➔mteEventEnabled(4)**

A control to allow an event to be configured but not used.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.4.2.1.4](http://oid-info.com/get/1.3.6.1.2.1.88.1.4.2.1.4)

---

**DISMAN-EVENT-MIB::mteEventEntryStatus 1.3.6.1.2.1.88.1.4.2.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteEvent(4) ➔mteEventTable(2) ➔mteEventEntry(1) ➔mteEventEntryStatus(5)**

The control that allows creation and deletion of entries.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.4.2.1.5](http://oid-info.com/get/1.3.6.1.2.1.88.1.4.2.1.5)

---

**DISMAN-EVENT-MIB::mteEventNotification 1.3.6.1.2.1.88.1.4.3.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteEvent(4) ➔mteEventNotificationTable(3) ➔mteEventNotificationEntry(1) ➔mteEventNotification(1)**

The object identifier from the NOTIFICATION-TYPE for the notification to use if metEventActions has 'notification' set.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.4.3.1.1](http://oid-info.com/get/1.3.6.1.2.1.88.1.4.3.1.1)

---

**DISMAN-EVENT-MIB::mteEventNotificationObjectsOwner 1.3.6.1.2.1.88.1.4.3.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteEvent(4) ➔mteEventNotificationTable(3) ➔mteEventNotificationEntry(1) ➔mteEventNotificationObjectsOwner(2)**

To go with `mteEventNotificationObjects`, the `mteOwner` of a group of objects from `mteObjectsTable`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.4.3.1.2](http://oid-info.com/get/1.3.6.1.2.1.88.1.4.3.1.2)

---

**DISMAN-EVENT-MIB::mteEventNotificationObjects 1.3.6.1.2.1.88.1.4.3.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔dismanEventMIB(88) ➔dismanEventMIBObjects(1) ➔mteEvent(4) ➔mteEventNotificationTable(3) ➔mteEventNotificationEntry(1) ➔mteEventNotificationObjects(3)**

The `mteObjectsName` of a group of objects from `mteObjectsTable` if `mteEventActions` has 'notification' set.

More details: [http://oid-info.com/get/1.3.6.1.2.1.88.1.4.3.1.3](http://oid-info.com/get/1.3.6.1.2.1.88.1.4.3.1.3)

---

**NOTIFICATION-LOG-MIB::nlmConfigGlobalEntryLimit 1.3.6.1.2.1.92.1.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔notificationLogMIB(92) ➔notificationLogMIBObjects(1) ➔nlmConfig(1) ➔nlmConfigGlobalEntryLimit(1)**

The maximum number of notification entries that may be held in `nlmLogTable` for all `nlmLogNames` added together.

More details: [http://oid-info.com/get/1.3.6.1.2.1.92.1.1.1](http://oid-info.com/get/1.3.6.1.2.1.92.1.1.1)

---

**NOTIFICATION-LOG-MIB::nlmConfigGlobalAgeOut 1.3.6.1.2.1.92.1.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔notificationLogMIB(92) ➔notificationLogMIBObjects(1) ➔nlmConfig(1) ➔nlmConfigGlobalAgeOut(2)**

The number of minutes a Notification SHOULD be kept in a log before it is automatically removed.

More details: [http://oid-info.com/get/1.3.6.1.2.1.92.1.1.2](http://oid-info.com/get/1.3.6.1.2.1.92.1.1.2)

---

**NOTIFICATION-LOG-MIB::nlmStatsGlobalNotificationsLogged 1.3.6.1.2.1.92.1.2.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔notificationLogMIB(92) ➔notificationLogMIBObjects(1) ➔nlmStats(2) ➔nlmStatsGlobalNotificationsLogged(1)**

The number of Notifications put into the `nlmLogTable`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.92.1.2.1](http://oid-info.com/get/1.3.6.1.2.1.92.1.2.1)

---

**NOTIFICATION-LOG-MIB::nlmStatsGlobalNotificationsBumped 1.3.6.1.2.1.92.1.2.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔mgmt(2) ➔mib-2(1) ➔notificationLogMIB(92) ➔notificationLogMIBObjects(1) ➔nlmStats(2) ➔nlmStatsGlobalNotificationsBumped(2)**

The number of log entries discarded to make room for a new entry due to lack of resources or the value of `nlmConfigGlobalEntryLimit` or `nlmConfigLogEntryLimit`.

More details: [http://oid-info.com/get/1.3.6.1.2.1.92.1.2.2](http://oid-info.com/get/1.3.6.1.2.1.92.1.2.2)

---

**UCD-SNMP-MIB::laIndex 1.3.6.1.4.1.2021.10.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔laTable(10) ➔laEntry(1) ➔laIndex(1)**

reference index/row number for each observed loadave.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.1](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.1)

---

**UCD-SNMP-MIB::laErrorFlag 1.3.6.1.4.1.2021.10.1.100**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔laTable(10) ➔laEntry(1) ➔laErrorFlag(100)**

A Error flag to indicate the load-average has crossed its threshold value defined in the snmpd.conf file.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.100](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.100)

---

**UCD-SNMP-MIB::laErrMessage 1.3.6.1.4.1.2021.10.1.101**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔laTable(10) ➔laEntry(1) ➔laErrMessage(101)**

An error message describing the load-average and its surpased watch-point value.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.101](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.101)

---

**UCD-SNMP-MIB::laNames 1.3.6.1.4.1.2021.10.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔laTable(10) ➔laEntry(1) ➔laNames(2)**

The list of loadave names we're watching.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.2](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.2)

---

**UCD-SNMP-MIB::laLoad 1.3.6.1.4.1.2021.10.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔laTable(10) ➔laEntry(1) ➔laLoad(3)**

The 1,5 and 15 minute load averages (one per row).

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.3](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.3)

---

**UCD-SNMP-MIB::laConfig 1.3.6.1.4.1.2021.10.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔laTable(10) ➔laEntry(1) ➔laConfig(4)**

The watch point for load-averages to signal an error.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.4](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.4)

---

**UCD-SNMP-MIB::laLoadInt 1.3.6.1.4.1.2021.10.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔laTable(10) ➔laEntry(1) ➔laLoadInt(5)**

The 1,5 and 15 minute load averages as an integer.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.5](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.5)

---

**UCD-SNMP-MIB::laLoadFloat 1.3.6.1.4.1.2021.10.1.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔laTable(10) ➔laEntry(1) ➔laLoadFloat(6)**

The 1,5 and 15 minute load averages as an opaquely wrapped floating point number.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.6](http://oid-info.com/get/1.3.6.1.4.1.2021.10.1.6)

---

**UCD-SNMP-MIB::ssIndex 1.3.6.1.4.1.2021.11.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssIndex(1)**

Bogus Index.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.1](http://oid-info.com/get/1.3.6.1.4.1.2021.11.1)

---

**UCD-SNMP-MIB::ssCpuSystem 1.3.6.1.4.1.2021.11.10**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuSystem(10)**

The percentage of CPU time spent processing system-level code, calculated over the last minute.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.10](http://oid-info.com/get/1.3.6.1.4.1.2021.11.10)

---

**UCD-SNMP-MIB::ssCpuIdle 1.3.6.1.4.1.2021.11.11**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuIdle(11)**

The percentage of processor time spent idle, calculated over the last minute.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.11](http://oid-info.com/get/1.3.6.1.4.1.2021.11.11)

---

**UCD-SNMP-MIB::ssErrorName 1.3.6.1.4.1.2021.11.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssErrorName(2)**

Bogus Name.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.2](http://oid-info.com/get/1.3.6.1.4.1.2021.11.2)

---

**UCD-SNMP-MIB::ssSwapIn 1.3.6.1.4.1.2021.11.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssSwapIn(3)**

The average amount of memory swapped in from disk, calculated over the last minute.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.3](http://oid-info.com/get/1.3.6.1.4.1.2021.11.3)

---

**UCD-SNMP-MIB::ssSwapOut 1.3.6.1.4.1.2021.11.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssSwapOut(4)**

The average amount of memory swapped out to disk, calculated over the last minute.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.4](http://oid-info.com/get/1.3.6.1.4.1.2021.11.4)

---

**UCD-SNMP-MIB::ssIOSent 1.3.6.1.4.1.2021.11.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssIOSent(5)**

The average amount of data written to disk or other block device, calculated over the last minute.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.5](http://oid-info.com/get/1.3.6.1.4.1.2021.11.5)

---

**UCD-SNMP-MIB::ssCpuRawUser 1.3.6.1.4.1.2021.11.50**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuRawUser(50)**

The number of 'ticks' (typically 1/100s) spent processing user-level code.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.50](http://oid-info.com/get/1.3.6.1.4.1.2021.11.50)

---

**UCD-SNMP-MIB::ssCpuRawNice 1.3.6.1.4.1.2021.11.51**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuRawNice(51)**

The number of 'ticks' (typically 1/100s) spent processing reduced-priority code.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.51](http://oid-info.com/get/1.3.6.1.4.1.2021.11.51)

---

**UCD-SNMP-MIB::ssCpuRawSystem 1.3.6.1.4.1.2021.11.52**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuRawSystem(52)**

The number of 'ticks' (typically 1/100s) spent processing system-level code.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.52](http://oid-info.com/get/1.3.6.1.4.1.2021.11.52)

---

**UCD-SNMP-MIB::ssCpuRawIdle 1.3.6.1.4.1.2021.11.53**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuRawIdle(53)**

The number of 'ticks' (typically 1/100s) spent idle.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.53](http://oid-info.com/get/1.3.6.1.4.1.2021.11.53)

---

**UCD-SNMP-MIB::ssCpuRawWait 1.3.6.1.4.1.2021.11.54**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuRawWait(54)**

The number of 'ticks' (typically 1/100s) spent waiting for IO.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.54](http://oid-info.com/get/1.3.6.1.4.1.2021.11.54)

---

**UCD-SNMP-MIB::ssCpuRawKernel 1.3.6.1.4.1.2021.11.55**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuRawKernel(55)**

The number of 'ticks' (typically 1/100s) spent processing kernel-level code.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.55](http://oid-info.com/get/1.3.6.1.4.1.2021.11.55)

---

**UCD-SNMP-MIB::ssCpuRawInterrupt 1.3.6.1.4.1.2021.11.56**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuRawInterrupt(56)**

The number of 'ticks' (typically 1/100s) spent processing hardware interrupts.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.56](http://oid-info.com/get/1.3.6.1.4.1.2021.11.56)

---

**UCD-SNMP-MIB::ssIORawSent 1.3.6.1.4.1.2021.11.57**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssIORawSent(57)**

Number of blocks sent to a block device

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.57](http://oid-info.com/get/1.3.6.1.4.1.2021.11.57)

---

**UCD-SNMP-MIB::ssIORawReceived 1.3.6.1.4.1.2021.11.58**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssIORawReceived(58)**

Number of blocks received from a block device

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.58](http://oid-info.com/get/1.3.6.1.4.1.2021.11.58)

---

**UCD-SNMP-MIB::ssRawInterrupts 1.3.6.1.4.1.2021.11.59**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssRawInterrupts(59)**

Number of interrupts processed

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.59](http://oid-info.com/get/1.3.6.1.4.1.2021.11.59)

---

**UCD-SNMP-MIB::ssIOReceive 1.3.6.1.4.1.2021.11.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssIOReceive(6)**

The average amount of data read from disk or other block device, calculated over the last minute.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.6](http://oid-info.com/get/1.3.6.1.4.1.2021.11.6)

---

**UCD-SNMP-MIB::ssRawContexts 1.3.6.1.4.1.2021.11.60**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssRawContexts(60)**

Number of context switches

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.60](http://oid-info.com/get/1.3.6.1.4.1.2021.11.60)

---

**UCD-SNMP-MIB::ssCpuRawSoftIRQ 1.3.6.1.4.1.2021.11.61**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuRawSoftIRQ(61)**

The number of 'ticks' (typically 1/100s) spent processing software interrupts.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.61](http://oid-info.com/get/1.3.6.1.4.1.2021.11.61)

---

**UCD-SNMP-MIB::ssRawSwapIn 1.3.6.1.4.1.2021.11.62**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssRawSwapIn(62)**

Number of blocks swapped in

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.62](http://oid-info.com/get/1.3.6.1.4.1.2021.11.62)

---

**UCD-SNMP-MIB::ssRawSwapOut 1.3.6.1.4.1.2021.11.63**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssRawSwapOut(63)**

Number of blocks swapped out

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.63](http://oid-info.com/get/1.3.6.1.4.1.2021.11.63)

---

**UCD-SNMP-MIB::ssCpuRawSteal 1.3.6.1.4.1.2021.11.64**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuRawSteal(64)**

The number of 'ticks' (typically 1/100s) spent by the hypervisor code to run other VMs even though the CPU in the current VM had something runnable.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.64](http://oid-info.com/get/1.3.6.1.4.1.2021.11.64)

---

**UCD-SNMP-MIB::ssCpuRawGuest 1.3.6.1.4.1.2021.11.65**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuRawGuest(65)**

The number of 'ticks' (typically 1/100s) spent by the CPU to run a virtual CPU (guest).

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.65](http://oid-info.com/get/1.3.6.1.4.1.2021.11.65)

---

**UCD-SNMP-MIB::ssCpuRawGuestNice 1.3.6.1.4.1.2021.11.66**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuRawGuestNice(66)**

The number of 'ticks' (typically 1/100s) spent by the CPU to run a niced virtual CPU (guest).

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.66](http://oid-info.com/get/1.3.6.1.4.1.2021.11.66)

---

**UCD-SNMP-MIB::ssCpuNumCpus 1.3.6.1.4.1.2021.11.67**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuNumCpus(67)**

The number of processors, as counted by the agent.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.67](http://oid-info.com/get/1.3.6.1.4.1.2021.11.67)

---

**UCD-SNMP-MIB::ssSysInterrupts 1.3.6.1.4.1.2021.11.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssSysInterrupts(7)**

The average rate of interrupts processed (including the clock) calculated over the last minute.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.7](http://oid-info.com/get/1.3.6.1.4.1.2021.11.7)

---

**UCD-SNMP-MIB::ssSysContext 1.3.6.1.4.1.2021.11.8**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssSysContext(8)**

The average rate of context switches, calculated over the last minute.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.8](http://oid-info.com/get/1.3.6.1.4.1.2021.11.8)

---

**UCD-SNMP-MIB::ssCpuUser 1.3.6.1.4.1.2021.11.9**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔systemStats(11) ➔ssCpuUser(9)**

The percentage of CPU time spent processing user-level code, calculated over the last minute.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.11.9](http://oid-info.com/get/1.3.6.1.4.1.2021.11.9)

---

**UCD-SNMP-MIB::memIndex 1.3.6.1.4.1.2021.4.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔memory(4) ➔memIndex(1)**

Bogus Index.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.4.1](http://oid-info.com/get/1.3.6.1.4.1.2021.4.1)

---

**UCD-SNMP-MIB::memSwapError 1.3.6.1.4.1.2021.4.100**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔memory(4) ➔memSwapError(100)**

Indicates whether the amount of available swap space (as reported by `memAvailSwap(4)`), is less than the desired minimum (specified by `memMinimumSwap(12)`).

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.4.100](http://oid-info.com/get/1.3.6.1.4.1.2021.4.100)

---

**UCD-SNMP-MIB::memSwapErrorMsg 1.3.6.1.4.1.2021.4.101**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔memory(4) ➔memSwapErrorMsg(101)**

Describes whether the amount of available swap space (as reported by `memAvailSwap(4)`), is less than the desired minimum (specified by `memMinimumSwap(12)`).

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.4.101](http://oid-info.com/get/1.3.6.1.4.1.2021.4.101)

---

**UCD-SNMP-MIB::memTotalFree 1.3.6.1.4.1.2021.4.11**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔memory(4) ➔memTotalFree(11)**

The total amount of memory free or available for use on this host.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.4.11](http://oid-info.com/get/1.3.6.1.4.1.2021.4.11)

---

**UCD-SNMP-MIB::memMinimumSwap 1.3.6.1.4.1.2021.4.12**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔memory(4) ➔memMinimumSwap(12)**

The minimum amount of swap space expected to be kept free or available during normal operation of this host.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.4.12](http://oid-info.com/get/1.3.6.1.4.1.2021.4.12)

---

**UCD-SNMP-MIB::memShared 1.3.6.1.4.1.2021.4.13**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔memory(4) ➔memShared(13)**

The total amount of real or virtual memory currently allocated for use as shared memory.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.4.13](http://oid-info.com/get/1.3.6.1.4.1.2021.4.13)

---

**UCD-SNMP-MIB::memBuffer 1.3.6.1.4.1.2021.4.14**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔memory(4) ➔memBuffer(14)**

The total amount of real or virtual memory currently allocated for use as memory buffers.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.4.14](http://oid-info.com/get/1.3.6.1.4.1.2021.4.14)

---

**UCD-SNMP-MIB::memCached 1.3.6.1.4.1.2021.4.15**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔memory(4) ➔memCached(15)**

The total amount of real or virtual memory currently allocated for use as cached memory.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.4.15](http://oid-info.com/get/1.3.6.1.4.1.2021.4.15)

---

**UCD-SNMP-MIB::memErrorName 1.3.6.1.4.1.2021.4.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔memory(4) ➔memErrorName(2)**

Bogus Name.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.4.2](http://oid-info.com/get/1.3.6.1.4.1.2021.4.2)

---

**UCD-SNMP-MIB::memTotalSwap 1.3.6.1.4.1.2021.4.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔memory(4) ➔memTotalSwap(3)**

The total amount of swap space configured for this host.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.4.3](http://oid-info.com/get/1.3.6.1.4.1.2021.4.3)

---

**UCD-SNMP-MIB::memAvailSwap 1.3.6.1.4.1.2021.4.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔memory(4) ➔memAvailSwap(4)**

The amount of swap space currently unused or available.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.4.4](http://oid-info.com/get/1.3.6.1.4.1.2021.4.4)

---

**UCD-SNMP-MIB::memTotalReal 1.3.6.1.4.1.2021.4.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔memory(4) ➔memTotalReal(5)**

The total amount of real/physical memory installed on this host.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.4.5](http://oid-info.com/get/1.3.6.1.4.1.2021.4.5)

---

**UCD-SNMP-MIB::memAvailReal 1.3.6.1.4.1.2021.4.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔memory(4) ➔memAvailReal(6)**

The amount of real/physical memory currently unused or available.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.4.6](http://oid-info.com/get/1.3.6.1.4.1.2021.4.6)

---

**UCD-SNMP-MIB::dskIndex 1.3.6.1.4.1.2021.9.1.1**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskIndex(1)**

Integer reference number (row number) for the disk mib.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.1](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.1)

---

**UCD-SNMP-MIB::dskPercentNode 1.3.6.1.4.1.2021.9.1.10**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskPercentNode(10)**

Percentage of inodes used on disk

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.10](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.10)

---

**UCD-SNMP-MIB::dskErrorFlag 1.3.6.1.4.1.2021.9.1.100**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskErrorFlag(100)**

Error flag signaling that the disk or partition is under the minimum required space configured for it.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.100](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.100)

---

**UCD-SNMP-MIB::dskErrorMsg 1.3.6.1.4.1.2021.9.1.101**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskErrorMsg(101)**

A text description providing a warning and the space left on the disk.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.101](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.101)

---

**UCD-SNMP-MIB::dskTotalLow 1.3.6.1.4.1.2021.9.1.11**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskTotalLow(11)**

Total size of the disk/partion (kBytes).

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.11](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.11)

---

**UCD-SNMP-MIB::dskTotalHigh 1.3.6.1.4.1.2021.9.1.12**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskTotalHigh(12)**

Total size of the disk/partion (kBytes).

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.12](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.12)

---

**UCD-SNMP-MIB::dskAvailLow 1.3.6.1.4.1.2021.9.1.13**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskAvailLow(13)**

Available space on the disk (kBytes).

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.13](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.13)

---

**UCD-SNMP-MIB::dskAvailHigh 1.3.6.1.4.1.2021.9.1.14**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskAvailHigh(14)**

Available space on the disk (kBytes).

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.14](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.14)

---

**UCD-SNMP-MIB::dskUsedLow 1.3.6.1.4.1.2021.9.1.15**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskUsedLow(15)**

Used space on the disk (kBytes).

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.15](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.15)

---

**UCD-SNMP-MIB::dskUsedHigh 1.3.6.1.4.1.2021.9.1.16**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskUsedHigh(16)**

Used space on the disk (kBytes).

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.16](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.16)

---

**UCD-SNMP-MIB::dskPath 1.3.6.1.4.1.2021.9.1.2**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskPath(2)**

Path where the disk is mounted.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.2](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.2)

---

**UCD-SNMP-MIB::dskDevice 1.3.6.1.4.1.2021.9.1.3**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskDevice(3)**

Path of the device for the partition

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.3](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.3)

---

**UCD-SNMP-MIB::dskMinimum 1.3.6.1.4.1.2021.9.1.4**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskMinimum(4)**

Minimum space required on the disk (in kBytes) before the errors are triggered.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.4](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.4)

---

**UCD-SNMP-MIB::dskMinPercent 1.3.6.1.4.1.2021.9.1.5**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskMinPercent(5)**

Percentage of minimum space required on the disk before the errors are triggered.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.5](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.5)

---

**UCD-SNMP-MIB::dskTotal 1.3.6.1.4.1.2021.9.1.6**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskTotal(6)**

Total size of the disk/partion (kBytes).

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.6](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.6)

---

**UCD-SNMP-MIB::dskAvail 1.3.6.1.4.1.2021.9.1.7**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskAvail(7)**

Available space on the disk.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.7](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.7)

---

**UCD-SNMP-MIB::dskUsed 1.3.6.1.4.1.2021.9.1.8**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskUsed(8)**

Used space on the disk.

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.8](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.8)

---

**UCD-SNMP-MIB::dskPercent 1.3.6.1.4.1.2021.9.1.9**

**iso(1) ➔identified-organization(3) ➔dod(6) ➔internet(1) ➔private(4) ➔enterprise(1) ➔2021 ➔dskTable(9) ➔dskEntry(1) ➔dskPercent(9)**

Percentage of space used on disk

More details: [http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.9](http://oid-info.com/get/1.3.6.1.4.1.2021.9.1.9)

