# Application settings

This document provides information about the **Application settings** form.

## **Path to access**

1. On Segura, in the navigation bar, hover over the **Product Menu** and select  **Orbit Server Manager**.  
2. In the side menu, select **Settings \> Application**.

## **Actions menu**

| Item | Type | Description |
| :---- | :---- | :---- |
| **Edit** | Button | Directs to the **Application settings** screen. |

## Application settings

### Application information section

| Item | Description |
| ----- | ----- |
| **Application title** | Name assigned to the application. |
| **Application Status** | Current status of the application. |
| **Company Name** | Name of the company associated. |
| **Virtual IP Address** | Virtual IP address configuration status. |
| **Application URL** | URL to access the application. |
| **Notification e-mail** | Email address for notifications. |

### Zabbix configuration section

| Item | Description |
| ----- | ----- |
| **Listen IP** | IP address where Zabbix listens for connections. |
| **Listen port** | Port number for Zabbix communication. |

### Syslog Configuration

| Item | Description |
| ----- | ----- |
| **Message format** | Configuration of message formatting for Syslog. |
| **Protocol** | Communication protocol used (UDP). |

## **Application settings**

### **Application**

| Item | Type | Required | Description |
| ----- | ----- | :---- | ----- |
| **Enable application** | Toggle button | No | Defines whether the application will be enabled or disabled. |
| **Company name** | Text field | No | The name of the company associated with the application. |
| **Application title** | Text field | No | The name or title of the application configured in the system. |
| **Application URL** | Text field | No | The URL used to access the application. |
| **IP virtual (VIP)** | Text field | No | The virtual IP address is configured for the application. |
| **Notification e-mail** | Text field | No | The email address that is configured to send system notifications. |

### **Zabbix**

| Item | Type | Required | Description |
| ----- | ----- | :---- | ----- |
| **Use TLS** | Toggle button | No | Defines if TLS will be enabled for the connection with the Zabbix server. |

#### Segura interface address

| Listen IP | Text field | No | The IP address used by the Zabbix server to listen for connections. |
| :---- | :---- | :---- | :---- |
| **Listen Port** | Text field | No | The port is used for communication with the Zabbix server. |

#### **Zabbix server**

| Item | Type | Required | Description |
| ----- | ----- | :---- | ----- |
| **Add** | Button | N/A | Adds a new empty entry to the list. |
| **IP** | Text field | No | The IP address of the configured Zabbix server. |
| **Port** | Text field | No | The port for connection to the Zabbix server. |

### **Syslog**

| Item | Type | Required | Description |
| ----- | ----- | :---- | ----- |
| **Message format** | Dropdown menu | No | Defines the format of messages sent by Syslog. |
| **Notification plugin** | Text field | No | The plugin is used for sending notifications. |
| **Message sending protocol** | Radio button | No | The protocol used for sending messages. |
| **Use Network Connector?** | Toggle button | No | Defines if the Network Connector will be used for sending messages. |
| **Network Connector** | Dropdown menu | No | Select the Network Connector if enabled. |

#### **Servers for message sending**

| Item | Type | Required | Description |
| ----- | ----- | :---- | ----- |
| **Add** | Button | N/A | Adds a new empty entry to the list. |
| **IP** | Text field | No | The IP address of the server used for sending messages. |
| **Port** | Text field | No | The port for connection with the server. |

