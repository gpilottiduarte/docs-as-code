# How to configure Zendesk integration in Segura

This guide shows how to configure the integration between Segura and Zendesk using the **REST API**.

## Requirements

* Zendesk API authentication data:  
  * API URL.  
  * Email address.  
  * Password.  
  * API Token.

  ## Configure Zendesk

1. On Segura, in the navigation bar, hover over the Products menu and select **Settings**.  
2. In the side menu, select **Security policies and network > ITSM**.  
3. In the **ITSM** report, in the top bar, click on **Add**.  
4. In the **Registration of integration with ITSM** screen, select **Zendesk**.  
5. In the **Registration of integration with ITSM** screen, fill in the fields:  
   * **Integration name:** name of the integration in Segura.  
   * **Enabled:** select **Yes**.  
   * **API URL:** Zendesk API endpoint.  
   * **Email address:** email address of the Zendesk user with permission to query tickets.  
   * **Password:** Zendesk user password.  
   * **API Token:** valid OAuth token.  
6. Click **Save**.

:::(info) (Info)

* The integration uses the endpoint `/api/v2/tickets/[id].json` and the approval flow accepts requests only for tickets with status **Open** or **Pending.**

:::

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).