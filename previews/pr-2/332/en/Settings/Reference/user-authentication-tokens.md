# User Authentication Tokens

In this article, we’ll introduce all the essential information about the User Authentication Tokens page. This page allows you to easily view and manage your stored tokens, including the option to delete them when needed.

## Authentication via token
Tokens serve as credentials that verify user identity and authorize access to protected resources. Instead of transmitting sensitive credentials on each request, the client securely stores the token and sends it in subsequent interactions, enhancing overall security.

Authentication tokens ensure sensitive information remains protected while users can have a more streamlined experience.

## Page details
To search for a Token, simply complete one of the items below:

* User: Assigned username.  
* Username: Related username.
* Validated.
    * **Yes** or **No**.

### Report fields:

| Item | Description |
| --- | --- |
| Mark/Unmark all lines | Select specific users. |
| User | Assigned username. |
| Username | Related username. |
| Defined in | The date the token was set. |
| Validated | Whether the token was validated or not. |
| Trust the IP | IP that the user registered with. |
| Trust until | The date on which the token will expire. |
| Action | Delete the token. |

### Bottom Icons:

| Item | Description |
| --- | --- |
| Delete tokens | Deletes the selected token. |
| Delete tokens and inactivate users | Deletes the selected token and inactivates the user.|

:::(Warning) (Warning)
Only users with the role** System Administrator** are allowed to perform token deletions.
:::

