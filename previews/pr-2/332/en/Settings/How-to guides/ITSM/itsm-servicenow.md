The ServiceNow integration will query the given ticket code using the `/api/now/table/` endpoint. It will only accept the user request if the ServiceNow issue is in **In Progress**.



---

## Requirements

* ServiceNow API authentication data:
	+ API URL
	+ User
	+ Password

Configure in senhasegura:

1. Go to the menu **Settings ➔ System parameters ➔ Integration with ITSM.**  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667926575642.png)
2. On the page actions  , click on the **\+** **New** option.
3. Select **ServiceNow.**  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667926649912.png)
4. Fill in  the fields as described below:  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667926691934.png)
	* **Integration name:** will be the integration name used to identify this configuration inside senhasegura reports.
	* **Enabled:** This status flag indicates if this configuration should be used in workflow procedures.
	* **API URL:** should be filled with the primary ServiceNow URL. You will use this URL to access the ServiceNow REST Endpoint.
	* **User:** a valid user with the proper permission to query issues tickets inside ServiceNow.
	* **Password:** the ServiceNow user password.
5. After filling, click on **Save**



---

## Validate Integration

To perform validation in senhasegura:

1. Go to the menu **Settings ➔ System parameters ➔ Integration with ITSM.**
2. In the report, click on the **Test authentication** icon.
3. In the new window, fill **Issue code** with the ticket code.
4. Click on the **Save** button.

You should receive the information about the ticket.

Infosenhasegura must have access to the ITSM solution to connect and get the ticket information.

