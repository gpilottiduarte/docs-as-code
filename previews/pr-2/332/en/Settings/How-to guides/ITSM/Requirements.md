The Freshdesk integration will query the ticket code using the `/api/v2/tickets` endpoint. The user request will be only accepted if the Freshdesk issue is under **Open** or **Pending** status.



---

## Requirements

* Freshdesk API authentication data:
	+ API URL
	+ User
	+ PassowPassword

Configure in senhasegura:

1. Go to the menu **Settings ➔ System parameters ➔ Integration with ITSM.**  
**![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667915859389.png)**
2. On the page actions  , click on the **New** option.
3. Select **Freshdesk.**  
**![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667916025544.png)**
4. Fill in the fields as described below:  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667916163931.png)
	* **Integration Name:** this will be the integration name used to identify this configuration inside senhasegura reports.
	* **Enabled:** This status flag indicates if this configuration should be used in workflow procedures.
	* **API URL:** should be filled with the main Freshdesk URL. This URL will be used to access the Freshdesk REST Endpoint.
	* **User:** a valid user with the proper permission to query issues tickets inside Freshdesk.
	* **Password:** the Freshdesk user password.
5. To finish, click on the **Save** button



---

## Validate Integration

To perform validation in senhasegura:

1. Go to the menu **Settings ➔ System parameters ➔ Integration with ITSM.**
2. In the report, click on the **Test authentication** icon.
3. In the new window, fill **Issue code** with the ticket code
4. Click on the **Save** button

You should receive the information about the ticket.

Infosenhasegura must have access to the ITSM solution to connect and get the ticket information.

