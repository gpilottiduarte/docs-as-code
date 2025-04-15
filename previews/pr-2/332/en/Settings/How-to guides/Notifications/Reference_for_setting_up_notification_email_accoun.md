# Reference for setting up notification email accounts

You can access all the accounts registered on the senhasegura platform by clicking on **Grid Menu > Settings > Notifications > SMTP Configuration**.

:::(Info) (Info)
Accounts can be active or inactive, as well as all the entities in the system.
:::

## Reference for SMTP account

| Field | Description |
| --- | --- |
| Account name | Name for internal identification and distinction from other registered accounts. |
| Enabled | The **Yes** option, when selected, indicates that the account can be used on the platform. |
| Sender e-mail | Email used to send the messages. |
| Reply e-mail | Email that receives replies. |
| Reply e-mail (Return-Path) | Return email for error cases. |
| Confirmation mail | Email for read confirmation. |
| Default account | The **Yes** option, when selected, indicates that this account is the platform's default shipping account. |
| Send read receipt: | The **Yes** option, when selected, indicates that the read receipt request must be forwarded. |
| Force settings use | The **Yes** option, when selected, indicates that the email accounts set to Reply, Return-Path, and Confirmation must be maintained. |
| Enable footnote | The **Yes** option, when selected, indicates that the automatic footer is added to the body of the email. |

## Reference for SMTP server

| Field | Description |
| --- | --- |
| Host SMTP | Address of the server that hosts the SMTP service. |
| Port | SMTP service port. |
| Use safe connection? | The **Yes** option, when selected, indicates that protocols must send with encryption. |
| Secure connection type | Encryption type - TLS or SSL. |
| Use authentication? | The **Yes** option, when selected, indicates that the server requires authentication. |
| Ignore Certificate Error | The **Yes** option, when selected, indicates that any SMTP server certification errors will be ignored. |
| Network connector | The Network connector agent. |
| Credential for authentication | The credential used for authentication on the SMTP server. |