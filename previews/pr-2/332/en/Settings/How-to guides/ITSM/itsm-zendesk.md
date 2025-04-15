The Zendesk integration will query the given ticket code using the  
`/api/v2/tickets/[id].json` endpoint. It will only accept the user request if the Zendesk issue is under **Open** or **Pending** status.



---

## Requirements

* Zendesk API authentication data:
	+ API URL
	+ User
	+ Password

Configure in senhasegura:

1. Go to the menu **Settings ➔ System parameters ➔ Integration with ITSM.**  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667933786298.png)
2. On the page actions  , click on the**\+****New** option.
3. Select **Zendesk.**  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667933810480.png)
4. Fill in the fields as described below:  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667934282465.png)
	* **Integration name:** this will be the integration name used to identify this configuration inside senhasegura reports.
	* **Enabled:** this status flag indicates if you should use this configuration in workflow procedures.
	* **API URL:** should be filled with the primary Zendesk URL. You will use this URL to access the Zendesk REST Endpoint.
	* **Email address:** a valid user with permission to query issues tickets inside Zendesk.
	* **Password:** the Zendesk user password.
	* **API Token:** a valid OAuth token to identify senhasegura.
5. After filling in, click on **Save.**



---

## Validate Integration

To perform validation in senhasegura:

1. Go to the menu **Settings ➔ System parameters ➔ Integration with ITSM.**
2. In the report, click on the **Test authentication** icon.
3. In the new window, fill **Issue code** with the ticket code.
4. Click on the **Save** button.

You should receive the information about the ticket.

Infosenhasegura must have access to the ITSM solution to connect and get the ticket information.

