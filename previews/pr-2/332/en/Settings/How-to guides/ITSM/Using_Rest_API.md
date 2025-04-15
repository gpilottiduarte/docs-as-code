This integration can be configured to run REST queries or queries directly to the CA database.



---

## Using Rest API

It will require an HTTPS connection between senhasegura and the CA solution.

### Requirements

* CA Service Desk Manager API authentication data:
	+ API URL
	+ User
	+ Password

Configure in senhasegura:

1. Go to the menu **Settings ➔ System parameters ➔ Integration with ITSM.**  
**![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667851807734.png)**
2. On the **View actions** icon  , click on the **\+****New** option.
3. Select **CA Service Desk Manager.**  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667852077086.png)
4. Fill in the fields as described below:  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667852487760.png)
	* **Integration Name:** this will be the name of the integration used to identify this configuration inside senhasegura reports.
	* **Enabled:** this status flag indicates if this configuration should be used in workflow procedures.
	* **Request Method:** select the option **Rest API.**
	* **User:** a valid user with the proper permission to query issues tickets inside CA.
	* **Password:** the CA user password.
	* **API URL:** should be filled with the main CA URL. This URL will be used to access the CA REST Endpoint.
5. To finish, click on the **Save** button.



---

## Using SQL Server

It will require a SQL Server connection between senhasegura and the CA solution.

### Requirements

* CA Service Desk Manager database authentication data:
	+ User
	+ Password
	+ Database host
	+ Database port
	+ Database name
	+ Database instance

Configure in senhasegura:

1. Go to the menu **Settings ➔ System parameters ➔ Integration with ITSM.**
2. On the**View actions** icon  , click on the **\+****New** option.
3. Select **CA Service Desk Manager.**
4. Fill in the fields as described below:  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667853550902.png)
	* **Integration name**: this will be the name of the integration used to identify this configuration within senhasegura reports.
	* **Enabled:** this status flag indicates if this configuration should be used in workflow procedures
	* **Request method**: select the option **SQL Server.**
	* **User:** a valid user to connect to SQL Server.
	* **Password:** the database user's password.
	* **DB Host:** hostname or IP where the CA database is located.
	* **DB Host Port:** the TCP port to connect.
	* **DB Name:** the CA database name.
	* **DB Instance:** the granted database instance.
5. To finish, click on the **Save** button.



---

## Validating

1. Go to the menu **Settings ➔ System parameters ➔ Integration with ITSM.**
2. In the report, click on the **Test authentication** icon.
3. In the new window, fill **Issue code** with the ticket code.
4. Click on the **Save** button.

You should receive the information about the ticket.

Infosenhasegura must have access to the ITSM solution to connect and get the ticket information.

