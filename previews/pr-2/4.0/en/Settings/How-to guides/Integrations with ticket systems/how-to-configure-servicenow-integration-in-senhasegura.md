# How to configure ServiceNow integration in Segura

This guide shows how to configure the integration between Segura and **ServiceNow** using the **REST API**.

## Requirements

* ServiceNow API authentication data:  
  * API URL.  
  * User.  
  * Password.

## Configure ServiceNow

1. On Segura, in the navigation bar, hover over the Products menu and select **Settings**.  
2. In the side menu, select **Security policies and network > ITSM**.  
3. In the **ITSM** report, in the top bar, click on **Add**.   
4. In the **Registration of integration with ITSM** screen, select **ServiceNow**.  
5. In the **Registration of integration with ITSM** screen, fill in the fields:  
   * **Integration name**: name of the integration in Segura.  
   * **Enabled**: select **Yes**.  
   * **API URL**: ServiceNow API endpoint.  
   * **User**: ServiceNow user with permission to query tickets.  
   * **Password**: password for authentication.  
6. Click **Save**.

:::(info) (Info)

* The integration uses the endpoint `/api/now/table/`  and the approval flow accepts requests only for *tickets* with the status **In Progress**.

:::

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).