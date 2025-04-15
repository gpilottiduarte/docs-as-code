# How to configure Zendesk integration in senhasegura

This guide shows how to configure the integration between senhasegura and Zendesk using the **REST API**.

## Requirements

* Zendesk API authentication data:  
  * API URL.  
  * Email address.  
  * Password.  
  * API Token.

  ## Configure Zendesk

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **System Parameters \> Integrations with ITSM.**  
3. In the **Integrations with ITSM** report, in the top bar, click on **View actions** and select **New**.  
4. In the **Registration of integration with ITSM** window, select **Zendesk**.  
5. In the **Registration of integration with ITSM** window, fill in the fields:  
   * **Integration name:** name of the integration in senhasegura.  
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
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).