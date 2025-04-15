This topic contains troubleshooting information for issues related to users' problems when attempting to connect to senhasegura using Active Directory Authentication.  
Events are logged on **Settings ➔ Authentication ➔ Active Directory**, **Failure Log** and **Groups synchronization Log**. Administrators can use the events to help find any errors.

### Failed to access AD server to authenticate due to DNS fault

**Scenario**  
User fails to authenticate using Active Directory Provider with the error: *"Invalid username or password"* or *"Authentication failed due to an internal error"*

**Cause**  
DNS server is not able to give the correct IP from the Active Directory Provider servers.

**Solution**  
Is highly recommended to configure the providers to senhasegura connects straight to the Active Directory Provider using their IPs, senhasegura will manage the sequence of inquiries. And if any member does not respond to the request, the next server will be asked.

