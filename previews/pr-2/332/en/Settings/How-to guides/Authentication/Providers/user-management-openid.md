Check out our [technical specifications](/v3-32/docs/general-information-senhasegura-technical-specification) for the list of approved OpenID authentication providers.  
senhasegura implements standard OpenID protocol authentication. SSO providers that support this protocol can be configured.

To enable the use of the OpenID authentication provider in senhasegura:

1. Go to the menu **Settings ➔ Authentication ➔ Providers**  
![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1665511844666.png)
2. Change the filter to account for all records. Active and inactive
3. Locate the OpenID record and change its status to Active (not to be mistaken with Google OpenID)
4. Go to the menu **Settings ➔ Authentication ➔ Providers ➔ System OpenID ➔ Providers**
5. Click on the report action **\+*****New***
6. Add the information mentioned below:**Principal information**


	* ***Type:*** SSO OpenID provider type. Use ***OpenID Connect*** option if you don't find your provider's model
	* ***Client ID:*** It is the senhasegura identification at the SSO provider
	* ***Client secret:*** It is the authentication password created by the SSO provider
	* ***Redirect URL:*** The senhasegura URL will receive the authentication steps.  
	By default, it will be as follows http://senhasegura.mycompany/flow/opid/auth/oauth, where the example domain `senhasegura.mycompany` must be replaced with the senhasegura instance access IP or domain
	* ***OpenID endpoint configuration:*** It is the SSO OpenID endpoint URL published by the provider. This URL provides a JSON containing all endpoints used in the other fields below
	* ***Authorization endpoint:*** A URL described at JSON as "authorization\_endpoint"
	* ***Token endpoint:*** A URL described at JSON as "token\_endpoint"
	* ***Userinfo endpoint:*** A URL described at JSON as "userinfo\_endpoint"
	* ***JWK endpoint:*** A URL described at JSON as "jwks\_uri"
7. Click**Save** to finalize changes

From this moment on, senhasegura users can see a login button using OpenID on the senhasegura login screen. The authentication validity time rules are the control of the SSO OpenID provider.

In **Settings ➔ Authentication ➔ OpenID ➔ Providers:** When registering an OpenID provider with all required fields. It is possible to make changes and save.  
The client's secret will be blank and requested again, but it will no longer be mandatory to fill it out and can be left blank.

