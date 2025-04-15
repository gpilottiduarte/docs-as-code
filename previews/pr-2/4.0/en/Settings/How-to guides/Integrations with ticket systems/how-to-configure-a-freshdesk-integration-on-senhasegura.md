# How to configure a Freshdesk integration on Segura

This guide shows you how to set up the integration between Segura and Freshdesk using **REST API**.

## Requirements

* Freshdesk API authentication data:  
  * API URL.  
  * User or API Key.  
  * Password.

## Configurar a integração

1. On Segura, in the navigation bar, hover over the Products menu and select **Settings**.  
2. In the side menu, select **Security policies and network > ITSM**.  
3. In the **ITSM** report, in the top bar, click on **Add**.  
4. In the **Registration of integration with ITSM** window, select **Freshdesk**. Fill in the fields:  
   * **Integration name**: name for the integration.  
   * **Enabled**: integration status, select **Yes**.  
   * **API URL**: main Freshdesk URL.  
   * **User / API Key**: Freshdesk user or API Key with permission to query tickets.  
   * **Password**: Freshdesk user password.  
5. Click **Save.**

:::(info) (Info)  
The integration uses the endpoint `/api/v2/tickets` and accepts requests only for tickets with status **Open** or **Pending**.  
:::

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).