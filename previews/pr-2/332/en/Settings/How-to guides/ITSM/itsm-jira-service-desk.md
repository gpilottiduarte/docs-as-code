The Jira integration will query the ticket code using the `/rest/api/2/issue/` endpoint. The approval workflow will only accept the user request if the Jira issue is under **In progress** status.



---

## Requirements

* Jira Service Desk API authentication data:
	+ API URL
	+ User
	+ API Token

Configure in senhasegura:

1. Go to the menu **Settings ➔ System parameters ➔ Integration with ITSM.**  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667918636456.png)
2. On the page actions  , click on the **\+****New** option.
3. Select **Jira Service Desk.**  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667918670068.png)
4. Fill in the fields as described below:  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1667918730068.png)
	* **Integration name:** the integration name will identify this configuration within the senhasegura reports.
	* **Enabled:** this status option indicates whether this setting should be used in workflow procedures.
	* **API URL:** must be filled in with the primary Jira URL. This URL will be used to access the Jira Rest Endpoint.
	* **User:** a valid user with the correct permission to query tickets within Jira.
	* **API Token:** paste the token you generated in your Atlassian account here.
5. After filling in, click on **Save.**

InfoYou will need a [Jira Service API Token](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/ ) to integrate with Jira Service. 



---

## Validate Integration

To perform validation in senhasegura:

1. Go to the menu **Settings ➔ System parameters ➔ Integration with ITSM.**
2. In the report, click on the **Test authentication** icon.
3. In the new window, fill **Issue code** with the ticket code.
4. Click on the **Save** button.

You should receive the information about the ticket.

Infosenhasegura must have access to the ITSM solution to connect and get the ticket information.

