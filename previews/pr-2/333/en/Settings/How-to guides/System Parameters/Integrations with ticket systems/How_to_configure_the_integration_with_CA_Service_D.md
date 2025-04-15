# How to configure the integration with CA Service Desk Manager in senhasegura

This guide shows how to configure the integration between senhasegura and CA Service Desk Manager using REST API or SQL Server.

## REST API

### Requirements

* HTTPS connection between senhasegura and CA Service Desk Manager.  
* The following CA Service Desk Manager API authentication data:  
  * API URL.  
  * User.  
  * Password.

### Configure

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by a nine squares icon, and select **Settings**.  
2. In the side menu, select **System Parameters \> Integrations with ITSM**.  
3. In the **Integrations with ITSM** report, in the top bar, click on **View actions** and select **New**.  
4. In the **Registration of integration with ITSM** window, select **CA Service Desk Manager**. Fill in the fields:  
   1. **Integration name**: fill in with a name for the integration.  
   2. **Enabled**: indicates the status of the integration. Select **Yes**.  
   3. **Request Method**: select Rest API.  
   4. **User**: enter an user with permission to query tickets.  
   5. **Password**: enter user's password.  
   6. **API URL**: enter the main URL of the integration.  
5. Click **Save**.

## SQL Server

### Requirements

* SQL Server connection between senhasegura and CA Service Desk Manager.  
* The following CA Service Desk Manager database authentication data:  
  * User.  
  * Password.  
  * Database hostname.  
  * Database port.  
  * Database name.  
  * Database instance.

### Configure

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by a nine squares icon, and select **Settings**.  
2. In the side menu, select **System Parameters \> Integrations with ITSM**.  
3. In the **Integrations with ITSM** report, in the top bar, click on **View actions** and select **New**.  
4. In the **Registration of integration with ITSM** window, select **CA Service Desk Manager**. Fill in the fields:  
   * **Integration name**: fill in with a name for the integration.  
   * **Enabled**: indicates the status of the integration. Select **Yes**.  
   * **Request Method**: select SQL Server.  
   * **User**: enter an user in SQL Server.  
   * **Password**: enter user's password in SQL Server.  
   * **DB Host:** enter the hostname or IP address of the SQL Server database.  
   * **DB Host Port:** enter the port for connection to SQL Server.  
   * **DB Name:** enter the name of the database.  
   * **DB Instance:** enter a database instance.  
5. Click  **Save.**

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).