# How to configure ServiceNow integration in senhasegura

This guide shows how to configure the integration between senhasegura and **ServiceNow** using the **REST API**.

## Requirements

* ServiceNow API authentication data:  
  * API URL.  
  * User.  
  * Password.

## Configure ServiceNow

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **System Parameters \> Integrations with ITSM.**  
3. In the **Integrations with ITSM** report, in the top bar, click on **View actions** and select **New**.  
4. In the **Registration of integration with ITSM** window, select **ServiceNow**.  
5. In the **Registration of integration with ITSM** window, fill in the fields:  
   * **Integration name**: name of the integration in senhasegura.  
   * **Enabled**: select **Yes**.  
   * **API URL**: ServiceNow API endpoint.  
   * **User**: ServiceNow user with permission to query tickets.  
   * **Password**: password for authentication.  
6. Click **Save**.

:::(info) (Info)

* The integration uses the endpoint `/api/now/table/`  and the approval flow accepts requests only for *tickets* with the status **In Progress**.

:::

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).