# How to integrate a SIEM server with a tenant

This tutorial presents a step-by-step process on how to add SIEM integrations to a tenant in **Cloud Security**.

### Requirements

- Have the role **Cloud Security - Tenant Administrator**.
- Have one or more SIEM sockets configured in a third-party service.

## Add a SIEM server integration

1. On **Cloud Security**, click the **User menu** icon on the top right corner of the screen.
2. In the dropdown menu, select **Admin console**.
3. Under **Tenant settings**, select **SIEM Servers**.
4. Click **+ Add**.
5. Fill in the fields as follows:
    1. **Name**: type a name for the SIEM integration being created.
    2. **Address**: in the select field, choose between:
        1. **DNS**: add the full hostname of the SIEM socket.
        2. **IPv4**: add the IP address of the SIEM socket.
    3. **Port**: add the listener port that should receive the logs.
    4. **Protocol**: in the select field, choose between **TCP** or **UDP**.
    5. **Message type**: in the select field, choose between **Syslog** or **CEF**.
    6. **Use TLS**: in the select field, select **Yes** to enable the TLS handshake for communication with the SIEM socket or choose **No** if Cloud Security should not initiate a TLS handshake.
6. Click **Add**.