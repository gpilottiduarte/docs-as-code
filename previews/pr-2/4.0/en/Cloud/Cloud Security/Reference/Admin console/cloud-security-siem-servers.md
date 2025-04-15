# SIEM Servers

This document provides information about the **SIEM Servers** screen in the **Tenant settings** menu, which displays information about all SIEM servers connected to the **Cloud Security** platform, and allows users to add and configure third party servers to receive audit logs.

You can integrate tenants with the majority of SIEM server tools on the market, such as Microsoft Sentinel or ElasticSearch. **Cloud Security** sends messages in the CEF and Syslog (RFC 5424\) formats.

Any SIEM servers that can receive CEF and Syslog message types can be integrated into the **Cloud Security** platform.

To receive the event logs, you must configure a listening UDP or TCP socket on the SIEM server. The listening host and port must be configured in the **Admin console** within **Cloud Security**.

## Path to access

1. Access **Cloud Security**.  
2. In the user menu, click the **Admin console**.  
3. In the left menu, click **SIEM Servers**.

## Actions menu

| Item | Type | Description |
| ----- | ----- | ----- |
| **\+ Add** | Button | Opens the [Add new SIEM server](/v4/docs/cloud-security-siem-servers#add-new-siem-server-screen) window. |

## Search fields

| Item | Type | Description |
| ----- | ----- | ----- |
| **Search** | Text field | Filters the servers according to the words entered. |
| **Clear filter** | Button | Clear all filters applied. |
| **Export data in CSV** | Button | Opens the **Export data in CSV** window. |
| **Show/Hide columns** | Button | Opens a card to show or hide columns in the report. |

## Report fields

- Name: name of the server.  
- Protocol: protocol of the server.  
- Message type: message type of the server.  
- Address: address of the server.  
- Port: port used by the server.  
- Use TLS: displays if the server uses the TLS protocol.  
- Enabled: displays if the server is enabled or not.  
- Actions:  
    - Edit: opens the [Add new SIEM server](/v4/docs/cloud-security-siem-servers#add-new-siem-server-screen).

:::(info) (Info)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

## Add new SIEM server screen

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Name \*** | Text field | Yes | Name of the SIEM server. |
| **Address \***  | Text field | Yes | Address of the SIEM server. The options are: **DNS** and **IPv4**. |
| **Port \*** | Text field | Yes | Port of the SIEM server. |
| **Protocol \*** | Dropdown menu | Yes | Protocol of the SIEM server. The options are: **TCP** and **UDP**. |
| **Message type \*** | Dropdown menu | Yes | Message type of the SIEM server. The options are: **CEF** and **Syslog**. |
| **Use TLS \*** | Dropdown menu | Yes | Option to set if the SIEM server uses the TLS protocol. The options are: **Yes** and **No**. |