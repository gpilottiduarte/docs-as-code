# SIEM servers

**Cloud Security** enables the integration of external SIEM servers to track actions performed by users registered under a tenant. You can connect SIEM solutions to receive **Cloud Security** and **Cloud Entitlements** event logs for monitoring and automation.

You can integrate tenants with the majority of SIEM server tools on the market, such as Microsoft Sentinel or ElasticSearch. **Cloud Security** sends messages in the CEF and Syslog (RFC 5424) formats.

:::(Info) (Info)
Any SIEM servers that can receive CEF and Syslog message types can be integrated into the **Cloud Security** platform.
:::

To receive the event logs, you must configure a listening UDP or TCP socket on the SIEM server. The listening host and port must be configured in the **Admin console** within **Cloud Security**.

## SIEM servers List

The SIEM servers list screen shows all configured SIEM servers:

| Item | Description |
| --- | --- |
| Name | The **Name** column displays the name of the SIEM server integrated with the tenant. |
| Protocol | The **Protocol** column shows the protocol used to submit the event logs. Possible values include: *TCP* and *UDP*. |
| Message type | The **Message type** column shows the type of message sent to the SIEM server. Possible values include: *Syslog* and *CEF*. |
| Address | The **Address** column contains the address of the server. Possible values include: a hostname in DNS format or an IP in IPv4 format. |
| Port | The **Port** column shows which listening port the event logs are being forwarded to. |
| Use TLS | The **Use TLS** column shows the status of TLS usage in the server connection. Can be either enabled or disabled. |
| Enabled | The **Enabled** column displays the status of the SIEM server configuration. Can be either enabled or disabled. |