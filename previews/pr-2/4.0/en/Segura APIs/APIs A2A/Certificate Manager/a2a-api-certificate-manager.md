# Certificate Manager

:::(warning) (Attention)
To use these methods ,the **Certificates** resource must be selected in the application authorization.
:::

## Introduction

The senhasegura **Certificate Manager** provide centralized management of the digital certificate lifecycle within the organization, from Discovery through automatic scanning of websites, directories and web servers, to automated Certificate renewal through external or internal Certificate Authorities.

The purpose of this document is to provide guidance for users using Certificate Manager administrator roles, and to discuss details about their use, benefits, concepts, and procedures.

### How the Certificate Manager works

senhasegura Certificate Manager manages the entire digital Certificate lifecycle, working with Certificate through request generation, manual importation of existing Certificates, or Discovery of Certificates across Devices, Domains or Containers. In addition to monitoring certificate validity and facilitating renewal, Certificate Manager also allows you to view logs and reports on all operations performed through the solution.

### Definitions

The senhasegura uses specific terminology for its functions and features. Thus, some terms must be understood before starting to use the solution:

-   **User:** Own employees, interns or third parties who use or may need access to company systems;

-   **Digital Certificate:** Digital certificates are files that contain public and private key information that is used for secure communication over the Internet, as well as to certify the sender's authenticity

-   **Certification Authority:** Certification Authority is an entity duly registered with the responsible bodies and which has the function of issuing digital certificates.

### Activities

In this section, the following senhasegura functions will be covered: make requests, receive answers and senhasegura Certificate Manager method.

## Method

The senhasegura integration webservice has some methods to query, create or change information stored in the application.

### Create / Modify a Request

 
``` 
POST https://vault_url/iso/certificate/request/\[request_code\] 
``` 
The **Create / Modify Request** method creates or modifies a certificate request in senhasegura

#### Parameters

| **Field** |  Type |  Description |  Required |
| --- | --- | --- | --- |
| **code_request** |  Int |  Code of an already created request. If the code is not included in the parameter, a new Request will be created. |  No |
| **certificate_type** |  Int |  Type of certificate. The possible values are: 1 = DV SSL - Domain SSL; 2 = OV SSL - Organization SSL; 3 = EV SSL - Extended SSL |  Yes | 
| **domain_type** |  String |  Type of the certificate domain. The possible values are: SING = Single domain; MULT = Multiple domains; WILD = Wildcard |  Yes |
| **organization** |  Int |  Code of the organization. The code of an organization registered in senhasegura must be informed. |  Yes |
| **common_name** |  String |  Certificate common name |  Yes |
| **san** |  Array |  Subject Alternative Name. It will be filled with common_name if san is not informed. |  No |
| **tags** |  Array |  Certificate identification tags. New tags will be registered if the reported ones do not exist |  No |
| **encryption** |  String |  encryption. The possible values are: RSA ; DSA |  Yes | 
| **encryption_key_size** |  Int |  Size of the encryption key. The possible values are: 4096; 2048; 1024 |  Yes | 
| **certificate_algorithm** |  String |  Signature Algorithm. The possible values are: SHA256; SHA384; SHA512. If the encryption chosen is DSA, then only SHA256 may be used. |  Yes |  
| **validity** |  Int |  Certificate validity time, in days. |  Yes |
| **key_password** |  String |  Password of the certificate key. |  No |
| **password_revogation** |  String |  Certificate revocation password. |  No |
| **environments** |  Array |  Certificate environments. New certificate environments will be registered if the informed ones do not exist. |  No |
| **systems** |  Array |  Certificate systems. New certificate systems will be registered if the informed ones do not exist. |  No |
| **project** |  String |  Certificate project in request. |  No |
| **external_ip** |  String |  External IP of the certificate in the request. |  No |
| **hostname_ip** |  String |  IP or certificate hostname in request. |  No |
| **justification** |  String |  Request justification of up to 1024 characters. |  No |
| **responsible** |  Int |  Code of the requester and the certificate. Must be a registered username account in senhasegura . |  No |
| **description** |  String |  Description of the request up to 512 characters. |  No |

#### Response to certificates

If the method succeeds or fails, the response consists of a certified block with the fields:

| **Field** |  Type |  Success |  Error |
| --- | --- | --- | --- |
| **status** | Int | OK | 4xx |
| **message** | Text | Created | Could not create request | 
| **error** |  boolean |  false |  true |
| **code_request** |  Int |  Request code. |  The request code entered is invalid |
| **type_certificate** | Int |  Type of the entered certificate. |  The certificate type you entered is invalid. |
| **type_domain** |  String |  Type of certificate domain entered. |  The certificate domain type you entered is invalid. |
| **organization** |  Int |  Organization code entered. |  The organization code you entered is invalid |
| **common_name** |  String |  Common name entered. |  Certificate common name not entered |
| **san** |  Array |  SAN informed. |  |
| **tags** |  Array |  Tags informed. |  |
| **encryption** |  String |  Encryption Algorithm entered. |  Encryption algorithm entered is invalid |
| **encryption_key_size** |  Int |  Size of encryption key entered. |  The encryption key length entered is invalid. |
| **certificate_algorithm** |  String |  Signature Algorithm entered. |  The signature algorithm entered is invalid. |
| **validity** |  Int |  Expiry time of the entered certificate. |  Invalid certificate expiration time. |
| **password_key** |  String |  Sensitive Information. |  Password for certificate key entered is invalid. |
| **password_revocation** |  String |  Sensitive Information. |  The certificate revocation password you entered is invalid. |
| **environments** |  Array |  Informed Environments. |  |
| **systems** |  Array |  Informed Systems. |  |
| **design** |  String |  Design informed. |  |
| **ip_external** |  String |  IP entered. |  |
| **ip_hostname** |  String |  IP or hostname entered. |  |
| **justification** |  String |  Informed Justification. |  Justification must be a maximum of 1024 characters. |
| **responsible** |  Int |  Responsible Code informed. |  The parental code you entered is invalid. |
| **description** |  String |  Description entered. |  Description must be a maximum of 512 characters. |

### Query / List Request

 
``` 
GET https://vault_url/iso/certificate/request/list\[request_code\] 
``` 
The **Query / List Request** method queries one or more certificate requests in senhasegura.

#### Parameters

| **Field** |  Type |  Description |  Required |
| --- | --- | --- | --- |
| **code_request** |  Int |  Code of an already created Request. |  No |
| **status_request** |  Int |  Code of a status of a request. |  No |
| **type_certificate** |  Int |  Type of certificate. The possible values are: 1 = DV SSL - Domain SSL; 2 = OV SSL - Organization SSL; 3 = EV SSL - Extended SSL** |  No | 
| **type_domain** |  String |  Type of certificate domain. The possible values are: SING = Single domain; MULT = Multiple domains; WILD = Wildcard |  No | 
| **organization** |  Int |  Code of the organization registered in senhasegura. |  No |
| **common_name** |  String |  Common name of certificate. |  No |
| **san** |  String |  Subject Alternative Names, separated by comma |  No |
| **tags** |  String |  Certificate ID tags, comma separated |  No |
| **encryption** |  String |  Encryption algorithm. The possible values are: RSA, DSA |  No |
| **encryption_key_size** |  Int |  Size of encryption key. The possible values are: 4096, 2048, 1024 |  No | 
| **algorithm_certified** |  String |  Signature algorithm. The possible values are:SHA256, SHA384, SHA512 |  No |  
| **validity** |  Int |  Certificate validity time in days. |  No |
| **password_key** |  String |  Certificate key password. |  No |
| **password_revocation** |  String |  Certificate revocation password. |  No |
| **environments** |  String |  Certificate Environments, Comma Separated |  No |
| **systems** |  String |  Certificate Systems, Comma Separated |  No |
| **design** |  String |  Certificate Design on request. |  No |
| **ip_external** |  String |  external certificate IP on request. |  No |
| **ip_hostname** |  String |  IP or certificate hostname on request. |  No |
| **responsible** |  Int |  Code of the responsible for the request and the certificate. |  No |
| **offset** |  Int |  Base number of record count by pagination. |  No |
| **limit** |  Int |  Number of records in pagination. |  No |

#### Response to certificate

If the method succeeds or fails, the response consists of a certified block with the fields:

| **Field** |  Type |  Success |  Error |
| --- | --- | --- | --- |
| **status** | Int | OK |  4xx |
| **message** | Text | Created |  Could not find requests with the information provided |
| **error** |  |  false |  true |
| **code_request** |  Int |  Request Code. |  There is no request with the given code. The request code you entered is invalid. |
| **status_request** |  String|  Request status code and name. |  There are no requests with the status entered. The status code you entered is invalid. |
| **type_certified** |  Int |  Type of certificate entered. |  There are no requests with the type of certificate entered. The certificate type you entered is invalid. |
| **type_domain** |  String |  Type of certificate domain entered. |  There are no requests with the domain type you entered. The certificate type domain you entered is invalid. |
| **organization** |  Int |  Organization code entered. |  There are no requests with the organization code entered. The organization code you entered is invalid. |
| **common_name** |  String |  Common name entered. |  There are no requests with the given common name. |
| **san** |  Array |  SAN informed. |  There are no requests with the informed SAN. |
| **tags** |  Array |  Tags entered. |  There are no requests with the given Tag. |
| **encryption** |  String |  Encryption algorithm entered. |  There are no requests with the encryption algorithm entered. The encryption algorithm entered is invalid. |
| **encryption_key_size** |  Int |  Encryption key size entered. |  There are no requests with the encryption key size entered. The encryption key length you entered is invalid. |
| **certified_algorithm** |  String |  Signature Algorithm entered. |  There are no requests with the signature algorithm entered. The signature algorithm you entered is invalid. |
| **validity** |  Int |  Certificate expiration time entered. |  There are no requests with the expiration date entered. Invalid certificate expiration time is invalid. |
| **password_key** |  String |  Sensitive Information. |  There are no requests with the password of the entered key. The certificate key password you entered is invalid. |
| **password_revocation** |  String |  Sensitive Information. |  There are no requests with the revocation password entered. The certificate revocation password you entered is invalid. |
| **environments** |  Array |  Informed environments. |  There are no requests with the informed environments. |
| **systems** |  Array |  Informed systems. |  There are no requests with the informed systems. |
| **project** |  String |  Project entered. |  There are no requests with the project entered. |
| **ip_external** |  String |  IP entered. |  No requests with external IP entered. |
| **ip_hostname** |  String |  IP or hostname entered. |  No requests with IP or hostname entered |
| **justification** |  String |  Informed Justification. |  |
| **Responsible** |  Int |  Code and name of the informed responsible. |  There are no requests with the informed responsible’s code.The responsable’s code you entered is invalid. |
| **description** |  String |  Description entered. |  |

### Sign Request

 
``` 
GET https://vault_url/iso/certificate/request/sign\[request_code\] 
``` 
The **Sign Request** method signs an existing request in senhasegura .

#### Parameters

| **Field** |  Type |  Description |  Required |
| --- | --- | --- | --- |
| **code_request** |  Int |  Code of request to be signed. |  Yes |
| **self_signed** |  Int |  Indicates whether it is self-signed. The options will be: 1 = true, 0 = false |  Yes |  
| **ca** |  Int |  CA Code responsible for signing request. Required if self_signed is false. |  Conditional |
| **justification** |  String |  Text up to 1024 characters for justification. |  No |
| **reason** |  Int |  Subscription Reason Code. You should enter a reason code for a reason entered in senhasegura. |  Yes |
| **itsm_code** |  String |  characters to determine ITSM code. Required if in the certificate access group the parameter "Governance code required when justifying" is enabled. Perform ITSM validations in the same way as the web interface. | Conditional |

#### Response to certificate

If the method succeeds or fails, the response consists of a certified block with the fields:

| **Field** |  Type |  Success |  Error |
| --- | --- | --- | --- |
| **status** | Int | OK |  4xx |
| **message** | Text | Created |  Could not sign request. |
| **error** |  |  false |  true |
| **code_request** |  Int |  Request Code. |  Enter a request code.The request code you entered is invalid |
| **self_signed** |  Int |  Value entered. |  There are no requests for this entered self-signed value.The value for self-signed entered is invalid. |
| **ca** |  Int |  CA code and CA name entered. |  There are no requests with the CA code entered. The CA code you entered is invalid. |
| **justification** |  String |  Informed Justification. |  Justification must be a maximum of 1024 characters |
| **reason** |  Int |  Reason code and name entered. |  Reason code entered is invalid. |
| **itsm_code** |  String |  ITSM code entered. |  Enter the ITSM code. |

### Query / List Certificates

 
``` 
GET https://vault_url/iso/certificate/list/\[request_code\] 
``` 
The **Query / List Certificates** method queries one or more certificates in senhasegura.

#### Parameters

| **Field** |  Type |  Description |  Required |
| --- | --- | --- | --- |
| **code_ certificate** |  Int |  Code of a certificate already created in senhasegura. |  No |
| **status_certificate** |  Int |  Code of a status of a certificate. The options will be: 1 = Valid; 2 = Revoked; 3 = Renewal pending; 4 = Expired |  No |  
| **active** |  Int |  Certificate Status on senhasegura . The options will be: 1 = Active, 0 = Inactive |  No |  
| **start_validity** |  String |  Expiry start date |  No |
| **end_validity** |  String |  Expiry date |  No |
| **origin_certificate** |  Int |  Certificate origin on senhasegura . The options will be: SCAN = Scan and Discovery; REQU = Request; IMPO = Imported manually |  No | 
| **type_certificate** |  Int |  Type of certificate. The options will be: 1 = DV SSL - Domain SSL; 2 = OV SSL - Organization SSL; 3 = EV SSL - Extended SSL |  No | 
| **type_domain** |  String |  Type of certificate domain. The options will be: SING = Single domain; MULT = Multiple domains; WILD = Wildcard |  No |  
| **organization** |  Int |  Organization code. |  No |
| **common_name** |  String |  Common name of certificate. |  No |
| **san** |  String |  Subject Alternative Name. You may enter more than 1 separated by a comma. |  No |
| **tags** |  String |  Certificate ID Tags. You may enter more than 1 separed by comma. |  No |
| **encryption** |  String |  Encryption Algorithm. The options will be: RSA, DSA |  No |  
| **encryption_key_size** |  Int |  Size of encryption key. The options will be: 4096, 2048, 1024 |  No |  
| **algorithm\_certified** |  String |  Signature Algorithm The options will be: sha256, sha384, sha512 |  No |  
| **validity** |  Int |  Certificate validity time in number of days. |  No |
| **password_key** |  String |  Password of certificate key. |  No |
| **password_revocation** |  String |  Certificate revocation password. |  No |
| **environments** |  String |  Certificate Environments. You may enter more than 1 separated by commas. |  No |
| **systems** |  String |  Certificate Systems. You may enter more than 1 separated by commas. |  No |
| **project** |  String |  Certificate project on request. |  No |
| **ip_external** |  String |  external certificate IP on request. |  No |
| **ip_hostname** |  String |  IP or certificate hostname on request. |  No |
| **self_signed** |  Int |  Indicates whether it is self-signed. The options will be: 1 = true; 0 = false |  No | 
| **ca** |  Int |  CA Code responsible for signing request. |  No |
| **responsible** |  Int |  Code of the responsible for the request and the certificate. |  No |
| **offset** |  Int |  Base number of record count by pagination. |  No |
| **limit** |  Int |  Number of records in pagination. |  No |

#### Response to certificates

If the method succeeds or fails, the response consists of a certified block with the fields:

| **Field** |  Type |  Success |  Error |
| --- | --- | --- | --- |
| **status** | Int | OK  |  4xx |
| **message** | Text | Created |  Could not sign request. |
| **error** |  |  false |  true |
| **code_request** |  Int |  Request Code. |  Enter a request code.The request code you entered is invalid |
| **status_certified** |  Int |  Code and name of certificate status |  There are no certificates with the entered status. The status code you entered is invalid. |
| **active** |  Int |  Code and name of the certificate status on senhasegura |  There is no certificate with the entered state. The state code you entered is invalid. |
| **start_validity** |  String |  Expiry start date |  There are no certificates with the stated expiration date. The expiration start date you entered is invalid. |
| **end_validity** |  String |  Expiry date |  There are no certificates with the stated expiration date. The expiration date entered is invalid. |
| **origin_certificate** |  Int |  Certificate origin in senhasegura |  There are no certificates with the informed source. The source you entered is invalid. |
| **type_certificate** |  Int |  Type of certificate |  There are no certificates of the type entered. The certificate type you entered is invalid. |
| **type_domain** |  String |  Type of certificate domain |  There are no certificates with the domain type you entered. The certificate type domain you entered is invalid. |
| **organization** |  Int |  Code and name of the organization you entered |  There are no certificates with the organization code entered. The organization code you entered is invalid |
| **common_name** |  String |  Common name of certificate |  There are no certificates with the common name entered. |
| **encryption_key_size** |  Int |  Size of the certificate encryption key |  There are no certificates with the encryption key length entered. The encryption key length you entered is invalid. |
| **algorithm_certified** |  String |  Certificate Signing Algorithm |  There are no certificates with the signature algorithm entered.The signature algorithm you entered is invalid. |
| **validity** |  Int |  Certificate validity time |  There are no certificates with the entered expiration time. Invalid certificate expiration time is invalid. |
| **password_key** |  String |  Certificate key password. |  There are no certificates with the entered key password. The certificate key password you entered is invalid. |
| **password_revocation** |  String |  Certificate revocation password. |  There are no certificates with the revocation password entered. The certificate revocation password you entered is invalid. |
| **environments** |  String |  Certificate Environments |  There are no certificates with the environment (s) entered. |
| **systems** |  String |  Certificate Systems |  There are no certificates with the system (s) entered. |
| **project** |  String |  Certificate Design. Eg project 1 |  There are no certificates with the project informed. |
| **ip_external** |  String |  external certificate IP. |  No certificates with external IP entered. |
| **ip_hostname** |  String |  IP or certificate hostname |  There are no certificates with the given IP or hostname. |
| **self_signed** |  Int |  Info if the certificate is self-signed |  No certificates exist for this self-signed value entered. The value for self-signed entered is invalid. |
| **ca** |  Int |  CA code and CA name entered |  There are no certificates with the CA code you entered. The CA code you entered is invalid. |
| **responsible** |  Int |  Code and name of responsible person informed |  There are no certificates with the responsible’s code entered. The responsible’s code you entered is invalid. |
| **description** |  |  Description of the certificate |  |
| **publish_info** |  | Additional information for publication |  |
| **device** |  | Devices code attached with certificate |  |

## Functionalities 

The senhasegura webservice has some functionalities to perform operations on the application.

### Publish Certificate

 
``` 
POST https://vault_url/iso/cert/publish 
``` 
**Publish Certificate** functionality prompts you to publish a certificate on one or more devices.

#### Parameters

| **Field** |  Type |  Description |  Required |
| --- | --- | --- | --- |
| **code_certificate** |  Int |  Code of a certificate to be publish. |  Yes |
| **code_profile_publication** |  Int |  Publish profile code.A publication profile previously registered on senhasegura will be used. |  Yes |
| **justification** |  String |  Justification of publication up to 1024 characters. |  No |
| **reason** |  Int |  Publication reason code.You must enter a code for a reason entered on senhasegura. |  Yes |
| **itms_code** |  String |  characters to determine ITSM code. Required if in the certificate access group the parameter "Governance code required when justifying" is enabled. Perform ITSM validations in the same way as the web interface. |  Conditional |
| **devices** |  Array |  Array with the codes of the devices where the certificate is to be published. Devices must exist on senhasegura. |  Yes | 

#### Response to certificates

If the functions succeeds or fails, the response consists of a certified block with the fields:

| **Field** |  Type |  Success |  Error |
| --- | --- | --- | --- |
| **status** | Int  | OK |  4xx |
| **message** | Text |  Created |  Invalid certificate code. |
| **error** | Boolean |  false |  true |
| **code_publishing** | String |  Posting scheduling code |  |
| **reason** | Int |  Code and name of reason for publication |  Reason code entered is invalid. |
| **itms_code** |  String |  ITSM code entered |  Enter the ITSM code. ITSM code does not exist on senhasegura integrated ITSM system. The code must be a maximum of 30 characters. |
| **devices** |  Array |  Device Codes for Publishing |  |

### Query / List Publications

 
``` 
GET https://vault_url/iso/cert/publish/\[code_request\] 
``` 
**The Query / List Publications** feature queries one or more publications on senhasegura .

#### Parameters

| **Field** |  Type |  Description |  Required |
| --- | --- | --- | --- |
| **code_publication** |  Int |  Publication code. |  No |
| **code_certified** |  Int |  Code of certificate to be published. |  No |
| **code_profile_publication** |  Int |  Publish Profile Code. |  No |
| **creation_date** |  String |  Date of registration |  No |
| **processed** |  Int |  Publication processing status.The options will be: 1 = Yes; 0 = No |  No | 
| **error** |  Int |  Publication Error Status.The options will be: 1 = Yes; 0 = No |  No |  
| **reason** |  Int |  Publication reason code. |  No |
| **itms_code** |  String |  ITSM code Text reported. |  No |
| **device** |  Int |  Device code of the publication. |  No |
| **offset** |  Int |  Base number of record count by pagination. |  No |
| **limit** |  Int |  Number of records in pagination. |  No |

#### Response to certificates

If the function succeeds or fails, the response consists of a certified block with the fields:

| **Field** |  Type |  Success |  Error |
| --- | --- | --- | --- |
| **status** | Int | OK |  4xx |
| **message** | Text |  Created |  Invalid certificate code. |
| **error** | Boolean |  false |  true |
| **code_publishing** | String |  Posting scheduling code |  |
| **reason** | Int |  Code and name of reason for publication |  Reason code entered is invalid. |
| **itms_code** |  String |  ITSM code entered |  Enter the ITSM code. ITSM code does not exist on senhasegura integrated ITSM system. The code must be a maximum of 30 characters. |
| **code_credential** | String |  Publishing credential code |  The credential code you entered is invalid. |
| **username** | Int |  Username for credential search |  |
| **quantity_devices** | Int |  Number of devices in the publication |  |

### Create/Edit Apache Publication Profile 

 
``` 
POST https://vault_url/iso/cert/profile/apache 
``` 
**Create / Edit Apache Publishing Profile** function creates or edits an Apache plugin publishing profile.

#### Parameters

| **Field** |  Type |  Description |  Required |
| --- | --- | --- | --- |
| **code_profile** |  Int |  Code of an already created profile.If the code is not passed, the system will interpret it as creating a profile. |  No |
| **name_profile** |  String |  Name of profile to create. |  Yes |
| **site** |  String |  Site where the certificate is to be installed. If not entered, the certificate will be installed on the default Apache site. |  No | 
| **config_path** |  String |  Address of the configuration.Standard: /etc/apache2/sites-available/default.com.conf | No | 
| **port** |  Int |  Port. Default:443 |  No |  
| **code_credential** |  Int |  Credential code to be used in the publication. A credential previously registered in the vault will be used. This information is required if a username is not entered. |  Conditional |
| **username** |  String |  Username that will be used to find credentials for the publication. This information is required if you do not enter a code_credential** |  Conditional |
| **devices** |  Array |  Array with the codes of the devices where the certificate is to be published |  Yes |

#### Response to certificates

If the function succeeds or fails, the response consists of a certified block with the fields:

| **Field** |  Type |  Success |  Error |
| --- | --- | --- | --- |
| **status** | Int |  OK | 4xx | 
| **message** | Text |  Created |  Invalid certificate code. |
| **error** | Boolean |  false |  true |
| **code_path** | String | Profile name | The code of profile informed is invalid |
| **name_profile** | String | Profile name |  |
| **site** | String | Informed Text |  |
| **config_path** | String |  Configured Path |  |
| **port** | Int | Port |  |
| **code_credential** | Int | Credential code to publication |  The credential code informed is invalid |
| **username** | String | Username to search credentials |  |
| **devices** | Array | Devices’ code to publication |  |

### Create/Edit IIS Publication Profile

 
``` 
POST https://vault_url/iso/cert/profile/iis 
``` 
**Create/Edit IIS Publication Profile** function creates or edits an Apache plugin publishing profile.

#### Parameters

| **Field** |  Type |  Description |  Required |
| --- | --- | --- | --- |
| **code_profile** |  Int |  Code of an already created profile.If the code is not passed, the system will interpret it as creating a profile. |  No |
| **name_profile** |  String |  Name of profile to create. |  Yes |
| **site** |  String |  Site where the certificate is to be installed. If not entered, the certificate will be installed on the default IIS site. | No |
| **cert_store** | String |  IIS certificate management repository. Default: MY | No |
| **port** |  Int |  Port. Default:443 |  No | 
| **code_credential** |  Int | Credential code to be used in the publication. A credential previously registered in the vault will be used. This information is required if a username is not entered. |  Conditional |
| **username** |  String |  Username that will be used to find credentials for the publication. This information is required if you do not enter a code_credential |  Conditional |  
| **devices** |  Array |  Array with the codes of the devices where the certificate is to be published |  Yes |

#### Response to certificates

If the function succeeds or fails, the response consists of a certified block with the fields:

| **Field** |  Type |  Success |  Error |
| --- | --- | --- | --- |
| **status** | Int | OK | 4xx |  
| **message** | Text |  Created |  Invalid certificate code. |
| **error** | Boolean |  false |  true |
| **code_profile** | String | Profile name | The code of profile informed is invalid |
| **name_profile** | String | Profile name |  |
| **site** | String | Informed Text |  |
| **cert_store** | String | IIS certificate management repository |  |
| **port** | Int | Port |  |
| **code_credential** | Int | Credential code to publication |  The credential code informed is invalid |
| **username** | String | Username to search credentials |  |
| **devices** | Array | Devices’ code to publication |  |

### Create/Edit F5 Big IP Publication Profile

 
``` 
POST https://vault_url/iso/cert/profile/bigip 
``` 
**Create/Edit F5 Big IP Publication Profile** function creates or edits an Apache plugin publishing profile.

#### Parameters

| **Field** |  Type |  Description |  Required |
| --- | --- | --- | --- |
| **code_profile** |  Int |  Code of an already created profile.If the code is not passed, the system will interpret it as creating a profile. |  No |
| **name_profile** |  String |  Name of profile to create. |  Yes |
| **name_partition** | String |  Name of the partition | No |
| **name_cert** | String | Name of the certificate. If a certificate with the same name is already configured, on publication it will be replaced. | No |
| **profile_client_vips** | Array |  Array of SSL Client Profiles and their VIPs | No |
| **profile_server_vips** | Array | Array of SSL Server Profiles and their VIPs | No |
| **code_credential** |  Int |  Credential code to be used in the publication. A credential previously registered in the vault will be used.This information is required if a username is not entered. |  Conditional |
| **username** |  String |  Username that will be used to find credentials for the publication. This information is required if you do not enter a code_credential** |  Conditional |  
| **devices** |  Array |  Array with the codes of the devices where the certificate is to be published |  Yes |

#### Response to certificates

If the function succeeds or fails, the response consists of a certified block with the fields:

| **Field** |  Type |  Success |  Error |
| --- | --- | --- | --- |
| **status** | Int | OK | 4xx |  
| **message** | Text |  Created |  Invalid certificate code |
| **error** | Boolean |  false |  true |
| **code_profile** | Int | Publish profile code | The code of profile informed is invalid |
| **name_profile** | String | Profile name |  
| **name_partition** | String | Name of the profile |  
| **name_certificate** | String | Name of the certificate that is shown on the web application |  |
| **profile_client** | Array | Complete name of the profile |  
| **profile_server** | Array | Complete name of the profile |  
| **code_credential** | Int | Credential code to publication |  The credential code informed is invalid |
| **username** | String | Username to search credentials |  
| **devices** | Array | Device’s code to publication |  

### Create/Edit WebSphere WAS Profile Publication

 
``` 
POST https://vault_url/iso/cert/profile/was 
``` 
**Create/Edit WebSphere WAS Profile Publication** function creates or edits an Apache plugin publishing profile.

#### Parameters

| **Field** |  Type |  Description |  Required |
| --- | --- | --- | --- |
| **code_profile** |  Int |  Code of an already created profile. If the code is not passed, the system will interpret it as creating a profile. |  No |
| **name_profile** |  String |  Name of profile to create. |  Yes |
| **key_db_path** | String | Path of the Key database name | Yes |
| **key_db_password** | String | Server’s password | Yes |
| **label** | String | Server’s label | Yes |
| **code_credential** |  Int |  Credential code to be used in the publication. A credential previously registered in the vault will be used. This information is required if a username is not entered. |  Conditional |
| **username** |  String |  Username that will be used to find credentials for the publication. This information is required if you do not enter a code_credential** |  Conditional |  
| **devices** |  Array |  Array with the codes of the devices where the certificate is to be published |  Yes |

#### Response to certificates

| **Field** |  Type |  Success |  Error |
| --- | --- | --- | --- |
| **status** | Int | OK |  4xx | 
| **message** | Text |  Created |  Invalid certificate code. |
| **error** | Boolean |  false |  true |
| **code_profile** | Int | Publish profile code | The code of profile informed is invalid |
| **name_profile** | String | Profile name |  
| **key_db_path** | String | Path of the Key database name |
| **label** | String | Server’s label |  
| **code_credential** | Int | Credential code to publication |  The credential code informed is invalid |
| **username** | String | Username to search credentials | 
| **devices** | Array | Devices’ code to publication |  

### Import an SSL certificate
#### Request
To import an SSL certificate, send a request to the following endpoint: 
```
PUT api/certificate/upload
```


#### Request parameters

**Body**


| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| ```certificate``` | String | Yes | Code of a certificate already created in passwords. | Base64_encoded_certificate_file |
|  ```private_key```  | String | No | In case this field is empty, the key won’t be available in the system, limiting the use of the certificate, its publishing, and the possibility to link it to devices.
Note: The .pfx extension already has a private key in it. Therefore, even if you don’t inform its value in the API call, you’ll still be able to view it in the response. | Base64_encoded_private_key_file |
| ```password``` | String | No | Password to retrieve the corresponding certificate | null |
| ```revoke_password``` | String | No | Password to revoke the associated SSL certificate. | null |
| ```extension``` | String | Yes |  | certificate_extension |

**Example request**

```
{
    "certificate": "Base64_encoded_certificate_file",
    "private_key": "Base64_encoded_private_key_file",
    "password": null,
    "revoke_password": null,
    "extension": "certificate_extension",
}

```

#### Return

Imports an SSL certificate and returns a message with information about the process.



**Expected response**

```
HTTP/1.1 200 OK
```

```
{
    "response": {
        "status": 200,
        "message": "1001: OK",
        "error": false,
        "error_code": 0,
        "status_certificate": 1,
        "detail": "",
        "mensagem": "1001: OK",
        "erro": false,
        "cod_erro": 0
}
```

**In case of error - certificate not found**

```
HTTP/1.1 400 BAD REQUEST
```

```
{
    "response": {
        "status": 400,
        "message": "1049: There is no certificate with the given code",
        "error": false,
        "error_code": 0,
        "status_certificate": 1,
        "detail": "",
        "mensagem": "1049: There is no certificate with the given code",
        "erro": false,
        "cod_erro": 0
},
   
    "exception": {
        "code": 1049,
        "message": "1049: There is no certificate with the given code",
        "detail": null
}

```

#### Possible errors
Here’s a list with HTTP error codes and their reasons:


* **400 Bad Request:** missing ```extension``` parameter.

* **401 UNAUTHORIZED**: token expired.

* **404 Not Found:** no token registered for the call.

* **500 Internal Server Error:** the certificate already exists.

* **500 Internal Server Error:** invalid or empty certificate.

* **500 Internal Server Error:** invalid ```private key```.
.

* **500 Internal Server Error:** empty ```private key```.


:::
