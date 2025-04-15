## Physical or virtual X.509 certificates

CautionFor certificate support to be enabled, our support team must be contacted so that the senhasegura instance can recognize the CA and the CA chain can be configured to use at the web interface login.

Although they are in the same menu structure as other authentication provider technologies, using X.509 certificates in senhasegura complements an MFA step. The certificate will be linked to the senhasegura user's account, making it mandatory to use this certificate to log in.

The administrator will have the option to make the use of the certificate mandatory in the following scenarios:

* Mandatory login on the senhasegura Web platform
* Mandatory senhasegura RDP Proxy sessions
* Mandatory senhasegura Terminal Proxy sessions

## Enabling mandatory settings

InfoWhen enabled to force the use of digital certificates as MFA, every single senhasegura user will be forced to use it.

### Force all users to use digital certificates

The following option will require users to log in using an X.509 certificate.

At the first login, the certificate used will be linked to the user, and from this point on, all subsequent logins will require the use of this related certificate.

Through the menu **Settings ➔ System Parameters ➔ Security,** you will have access to the option ***Force the use of digital certificate for all users***.

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-OE1Y9JN4.png)security configuration 

  
### Force use of digital certificate in proxy sessions

InfoWhen activating this option, the user must log in to the web interface using a valid X.509 certificate before logging in to a proxy session.

Through the menu **Settings ➔ System Parameters ➔ System Parameters,** you have access to the ***Security*** section. In this screen, you can access the fields ***Force authentication with certificate***.

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-VN5EJ4DA.png)System setup 

## Auditing logins via certificate

### Certified Certification Authorities

For a CA to be considered reliable for senhasegura, a senhasegura professional must have manually configured the server to accept the CA. Still, the administrator can decide whether to revoke the use of the CA.

Through the menu **Settings ➔ Authentication ➔ Digital Certificate ➔ Authorities,** you have access to the certificate authorities approved as issuing login certificates.

You can view your details or inactivate an authority. In this case, all certificates from this CA will be prevented from logging on to the platform.

### Listing used certificates

Through the menu **Settings ➔ Authentication ➔ Digital certificate ➔ Certificates,** the administrator can view details of the certificate and which user account senhasegura is linked to. Through this screen, the administrator can even revoke the use of a certificate. In this case, the user must link a new certificate to log in.

It is important to remember that if the administrator wants to block a user's access, he must inactivate the access account. Revoking a certificate will not revoke the access account.

### Certificate usage log

Through the menu **Settings ➔ Authentication ➔ Digital certificate ➔ Certificates,** you have access to a detailed report of the events that a user has used an X.509 certificate.

