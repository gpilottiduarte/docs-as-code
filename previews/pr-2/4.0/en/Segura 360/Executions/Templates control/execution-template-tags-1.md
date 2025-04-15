# Execution template tags

Tags are pre-defined variables that can be used in Segura templates instead of hard-coded information, allowing the use of the same template for operations on multiple devices.

---

## **PAM Core tags**

| Tag | Description |
| ----- | ----- |
| \[\#USERNAME\#\] | Username of the credential that will have its password changed |
| \[\#NEW\_PASSWORD\#\] | The new password you want the credential to use |
| \[\#CURRENT\_PASSWORD\#\] | The password in use for the credential |
| \[\#AUTH\_USER\#\] | Username of the credential that will be authenticated on the station/system/server to perform the change |
| \[\#AUTH\_PASSWORD\#\] | Password of the credential that will authenticate itself to execute the change |
| \[\#AUTH\_DOMAIN\#\] | Domain of the credential that will authenticate itself to execute the change |
| \[\#ADD\_INFO\#\] | Additional credential information |
| \[\#IP\#\] | The credential's device IP that will have the password changed |
| \[\#HOSTNAME\#\] | The credential's device hostname that will have the password changed |
| \[\#DOMAIN\#\] | The credential's device domain that will have the password changed |
| \[\#SERVER\_PATH\#\] | The path of the credential server that will have the password changed |

---

## **DevOps Secret Manager tags**

### **Application and authorization tags**

| Tag | Description |
| ----- | ----- |
| \[\#APP\_NAME\#\] | Application name |
| \[\#APP\_AUTH\_UNIQUE\_KEY\#\] | Authorization unique key |
| \[\#APP\_AUTH\_TYPE\#\] | Authorization authentication type |
| \[\#APP\_AUTH\_CLIENT\_ID\#\] | OAuth2 client ID |
| \[\#APP\_AUTH\_CLIENT\_SECRET\#\] | OAuth2 client secret |
| \[\#APP\_AUTH\_CONSUMER\_KEY\#\] | OAuth1 consumer key |
| \[\#APP\_AUTH\_CONSUMER\_SECRET\#\] | OAuth1 consumer secret |
| \[\#APP\_AUTH\_TOKEN\#\] | OAuth1 Auth token |
| \[\#APP\_AUTH\_TOKEN\_SECRET\#\] | OAuth1 token secret |

### **Secrets tags**

| Tag | Description |
| ----- | ----- |
| \[\#SECRET\_NAME\#\] | Secret name |
| \[\#SECRET\_IDENTIFIER\#\] | Secret identifier |
| \[\#SECRET\_VERSION\#\] | Secret version |
| \[\#SECRET\_ENGINE\#\] | Secret engine name |
| \[\#SECRET\_EXPIRATION\_DATE\#\] | Secret expiration date |
| \[\#SECRET\_DATA\#\] | All secret data |

### **Secret data tags**

| Tag | Description |
| ----- | ----- |
| \[\#ACCESS\_KEY\_ID\#\] | Access key ID |
| \[\#SECRET\_ACCESS\_KEY\#\] | Secret access key |
| \[\#ACCESS\_KEY\_TTL\#\] | Access key TTL |
| \[\#CREDENTIAL\_HOSTNAME\#\] | Credential hostname |
| \[\#CREDENTIAL\_USERNAME\#\] | Credential username |
| \[\#CREDENTIAL\_PASSWORD\#\] | Credential password |
| \[\#CREDENTIAL\_ADDITIONAL\_INFORMATION\#\] | Credential additional information |
| \[\#CREDENTIAL\_TTL\#\] | Credential TTL |

