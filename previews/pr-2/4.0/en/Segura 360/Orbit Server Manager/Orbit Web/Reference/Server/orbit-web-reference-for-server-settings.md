# Server settings

This document provides information about the **Server Settings** form.

## Path to Access

1. On Segura, in the navigation bar, hover over the **Product Menu** and select **Orbit Server Manager**.  
2. In the side menu, select **Server \> Settings**.  
   

## **Actions menu**

| Item | Type | Description |
| :---- | :---- | :---- |
| **Edit** | Button | Directs to the **Server Settings** screen in edit mode. |

## **Settings**

### Server settings

| Item | Type | Description |
| ----- | ----- | ----- |
| **Hostname** | Text field | Configured server hostname. |
| **Timezone** | Text field | Server-defined time zone. |
| **Language** | Text field | Default language configured on the server. |

### DNS Settings

| Item | Type | Description |
| ----- | ----- | ----- |
| **Primary server** | Text field | IP address of the configured primary DNS server. |
| **Secondary server** | Text field | The IP address of the configured secondary DNS server. |
| **Tertiary server** | Text field | The IP address of the tertiary DNS server, if set. |
| **Domain information** | Text field | Domain name associated with the server. |
| **Search information** | Text field | Configured DNS search parameters. |

### NTP settings

| Item | Type | Description |
| ----- | ----- | ----- |
| **Primary server** | Text field | Address of the primary NTP server, if configured. |
| **Secondary server** | Text field | Address of the secondary NTP server, if configured. |

### SNMP settings

| Item | Type | Description |
| ----- | ----- | ----- |
| **Server** | Text field | SNMP server address, if configured. |
| **Allowed IPs** | Text field | List of IPs authorized for SNMP, if configured. |
| **Community** | Text field | SNMP community configured for the server. |

Clicking **Edit** directs to the **Server Settings** window in edit mode, where server settings can be modified.

### **Settings Tab**

#### Settings 

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Hostname** | Text field | No | Configured server hostname. |
| **Timezone** | Dropdown menu | Yes | Server-defined time zone. |
| **Language** | Dropdown menu | Yes | Default language configured on the server. |

#### NTP settings

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Primary server** | Text field | No | Address of the primary NTP server. |
| **Secondary server** | Text field | No | Address of the secondary NTP server. |

#### SNMP settings

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Server** | Text field | No | SNMP server address. |
| **Allowed IPs** | Text field | No | List of IPs authorized for SNMP. |
| **Community** | Text field | No | SNMP community configured for the server. |

### DNS Settings Tab

| Item | Type | Required | Description |
| ----- | ----- | ----- | ----- |
| **Primary server** | Text field | No | IP address of the configured primary DNS server. |
| **Secondary server** | Text field | No | The IP address of the configured secondary DNS server. |
| **Tertiary server** | Text field | No | The IP address of the tertiary DNS server, if set. |
| **Domain information** | Text field | No | Domain name associated with the server. |
| **Search information** | Text field | No | Configured DNS search parameters. |
| **Add** | Button | N/A | Adds an empty entry at the end of the list. |
| **Search name** | Text field | No | Search name associated with DNS configuration. |

