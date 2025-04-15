# How to configure Jira Service Desk integration in Segura

This guide shows how to configure the integration between Segura and Jira Service Desk using **REST API**.

## Requirements

* Jira Service Desk API authentication data:  
  * API URL.  
  * User.  
  * API Token.

## Configure Jira Service Desk

1. On Segura, in the navigation bar, hover over the Products menu and select **Settings**.  
2. In the side menu, select **Security policies and network > ITSM**.  
3. In the **Integrations with ITSM** report, in the top bar, click on **Add**.  
4. In the **Registration of integration with ITSM** screen, select **Jira Service Desk**.  
5. In the **Registration of integration with ITSM** screen, fill in the fields:  
   * **Integration name**: name of the integration in Segura.  
   * **Enabled**: select **Yes**.  
   * **API URL**: Jira API URL.  
   * **User**: Jira user with permission to query tickets.  
   * **API Token**: token generated in your Atlassian account.  
6. Click **Save**.

:::(info) (Info)
* The integration uses the endpoint `/rest/api/2/issue/` and accepts requests only for *tickets* with the status **In Progress**.  
* A [Jira Service API Token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/) is required for this integration.
:::

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).