# CA Service Desk Manager

In this document, you will find information about the report for ticket integration using **CA Service Desk Manager**.

## Path do access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **System Parameters \> Ticket system integrations**.  
3. In the top bar, click on **View actions** and select **New**.  
4. In the **Registration of integration with ITSM** window, select **CA Service Desk Manager**.

## General Information

* The `Request Method` determines which integration method will be used: **Rest API** or **SQL Server**.  
* Common fields: **User** and **Password**  
* Conditional fields for the **Rest API method**: **API URL**.  
* Conditional fields for the **SQL Server method**: *DB Host, DB Name, DB Instance,* and *DB Host Port*.

| Campo | Descrição |
| ----- | ----- |
| **Integration name** | Identifier name of the integration. |
| **Enabled** | Integration status. Can be **Yes** or **No**. |
| **Request Method** | Radio buttons. Request method. Can be **Rest API** or **SQL Server**. |
| **User** | Username for authentication. |
| **Password** | Password for authentication. |
| **DB Host** | Database server address. |
| **DB Name** | Database name. |
| **DB Instance** | Database instance. |
| **DB Host Port** | Database server port. |
| **API URL** | CA Service Desk Manager API endpoint. |
