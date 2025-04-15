# Reference for device filters

In all **Devices** modules of the senhasegura platform, there’s the option to filter the results according to several parameters. These parameters are passed through the form on the taskbar, located at the top of the home page of each module. However, each module has particularities regarding its filtering parameters.

## Filter for the Devices and the Devices without credentials sections

| Field | Description |
| --- | --- |
| ID | Device registration code. |
| Name | Device registration name. |
| Management | IP, hostname, or URL for the management of that device. |
| Type | Type of application running on the device (Database, Web Application, etc.). |
| Vendor | Manufacturer of the device. |
| Product | Device model (Microsoft, AWS, Facebook, etc.). |
| Site | Device location |
| Connectivity | Device connection type (SSH, Telnet, etc.). |
| Domains | Device domain |
| Tags | Device tags. Useful for grouping devices with similar functions. |
| Connectable | Connection status (**Connectable** or **Not Connectable**). |
| Enabled | Whether the device is enabled or not. |

## Filter batch import

| Field | Description |
| --- | --- |
| ID | Device registration code. |
| File name | Device registration name. |
| User | The user who created the import. |
| Import period | Date selector to filter by import period. Select the start date of the filter. |
| until | Date selector to filter by import period. Select the end date of the filter. |

## Filter connectivity tests

| Field | Description |
| --- | --- |
| Date | Date selector to filter by device connectivity. Select the start date of the filter. |
| until | Date selector to filter by device connectivity. Select the date at the end of the filter. |
| Device | Device registration name. |
| Connectivity | Device connection type (SSH, Telnet, etc). |
| Connectable | Connection status (**Yes** or **No**). |
| Result | Request result: *Connection refused, Unknown error, Success, and Timeout.* |

## Settings

There are several modules under the settings session, each with its way of filtering.

### Filter products

| Field | Description |
| --- | --- |
| Device type | Type of application running on the device (Database, Web Application, etc.). |
| Vendor | Manufacturer of the device. |
| Product | Device model (Microsoft, AWS, Facebook, etc.). |
| Type | Built-in or Customized. |
| Enabled | Device status: **Yes** or **No**. |

### Filter for the types section

| Field | Description |
| --- | --- |
| Name | Device registration name. |
| Type | Built-in or Custom. On senhasegura, for device templates it’s possible to use templates that come by default on senhasegura (Built-in) or create custom device templates (Custom). |
| Enabled | Device status: **Yes** or **No**. |

### Filter for Vendor’s section

| Field | Description |
| --- | --- |
| Nome | Device’s vendor name. |
| Tipo | Built-in or Custom. On senhasegura, for device templates it’s possible to use templates that come by default on senhasegura (Built-in) or create custom device templates (Custom). |
| Enabled | Device statuses: can be **Yes** or **No**. |

### Filter Sites

| Field | Description |
| --- | --- |
| Name | Device registration name. |
| Enabled | Device status: **Yes** or **No**. |

### Filter Connectivity

| Field | Description |
| --- | --- |
| ID | Device registration code. |
| Name | Device registration name. |
| Port | Device port. |

## Network connector

Under the Network connector subsection, there's two options:

### Filter Connectors

| Field | Description |
| --- | --- |
| ID | Device registration code. |
| Name | Device registration name. |
| IP | Device IP. |
| Port | Device port. |
| Registration date | Date selector to filter by the date of registration of the device. Select the start date of the filter. |
| until | Date selector to filter by the date of registration of the device. Select the end date of the filter. |
| Last change | Date selector to filter the results according to the date the last change occurred. Select the start date of the filter. |
| until | Date selector to filter the results according to the date the last change occurred. Select the end date of the filter. |
| Enabled | Device status: **Yes** or **No**. |

### Filter Logs

| Field | Description |
| --- | --- |
| ID | Device registration code. |
| Event | Drop-down menu to select the event for the filter. It shows three options: *Creation*, *List*, and *Deletion*. |
| Connector IP | Connector’s IP. |
| Connector Port | Connector’s port. |
| Message | Log message. |
| Code | Code of the error that occurred during execution. If no error occurs, the field will be blank. |
| Date/Time | Date/Time selector for filter start. |
| until | Date/Time selector for end of the filter. |

:::(Info) (Info)
In all filter boxes, there are two buttons: **Filter** and **Clear**. The **Filter** button is used to filter the results according to the parameters passed in the fields, and the **Clear** button is used to clear all the parameters passed in these fields.
:::