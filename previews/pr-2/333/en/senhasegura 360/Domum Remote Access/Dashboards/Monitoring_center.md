# Monitoring center

The dashboard in **Domum Remote Access > Dashboards > Monitoring center** shows an overview of Domum usage by vendors, third-party users, groups of internal users, and internal users.

You can find the following in the Monitoring center:

<!-- Fix link -->
- **Gateway status notification**: the broadcast icon above the **Current accesses** field shows the communication between the senhasegura platform and the gateway service.
  - By clicking on the icon, you can see the [Domum health check report](/v3-33/docs/domum-health-check).
  - The icon colors indicate the status of the communication.
    - **Green**: currently established communication without any failures in the last 12 hours.
    - **Gray**: service not configured.
    - **Yellow**: currently established communication, but some failures could have happened in the past 12 hours.
    - **Red**: communication is unavailable.
- **Filter**: selects information for a specific vendor or internal user group.
- **Current accesses**: indicates the number of accesses via Domum when viewing the dashboard.
  - By clicking on the text, you can reach the [access report](/v3-33/docs/domum-access-report).
- **Vendors**: indicates the number of providers registered in senhasegura.
  - By clicking on the text, you can access the [vendors report](/v3-33/docs/domum-settings-vendors).
- **Third-parties**: indicates the number of third-party users registered in senhasegura.
  - By clicking on the text, you can access the [third-party users report](/v3-33/docs/domum-dashboard-third-party-users).
- **Accesses released**: indicates the number of allowed accesses, including both third-party users and internal users.
- **Internal users groups**: indicates the number of internal user groups with access to senhasegura.
  - By clicking on the text, you can access the [internal user groups report](/v3-33/docs/domum-dashboard-internal-users-groups).
- **Internal users**: indicates the number of internal users with access to Domum.
- **Risk radar**: displays on the map the region where suspicious accesses originate.
  - You can use the search bar to type the name of the location you want to look up.
- **Authorized accesses**: displays the connection between the number of accesses and the authorized period for each provider in the last 12 hours.
- **Active sessions**: displays the list of remote sessions in progress when viewing the dashboard. The field classifies the sessions by protocols used to access and manage network resources:
  - **RDP Web**: number of RDP web sessions in progress.
  - **SSH/Telnet**: number of SSH/Telnet sessions in progress.
  - **HTTP VNC**: number of HTTP VNC sessions in progress.
  - **SQL**: number of SQL sessions in progress.

<!-- Fix callout -->
:::(info) (**Info**)
If there is a suspicious active session, it may be dropped. On the list **Active sessions** find the session you want and click the **on/off** icon. In the confirmation box click **Yes**. The session will be dropped and the user will be logged out.
:::

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
