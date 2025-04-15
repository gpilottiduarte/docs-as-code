# Data protection policy

## **Data security and privacy**

### **Threat detection and monitoring**

Segura employs a robust threat detection service to safeguard the cloud environment hosting its SaaS models. This continuously monitors for potential threats or unauthorized activities, ensuring a secure infrastructure.

### **Access control**

Access to Segura data is restricted solely to the client. Even the Segura support team requires client involvement to perform any actions involving client data, strictly adhering to the client's approval processes.

### **Confidentiality obligations**

All team members at Segura are bound by stringent confidentiality agreements. These are reinforced through onboarding and regular refresher training focused on information security and GDPR compliance. Support team access to a customer's console requires explicit and case-specific customer approval, with all access logged for audit purposes.

### **Operational policies and breach notification**

Segura has implemented operational policies and procedures to prevent errors, achieving ISO 27001 certification. In the unlikely event of a breach, customers will be promptly notified in accordance with legal obligations.

## **Backup**

Segura performs daily system snapshots at 3 AM GMT-3, retaining snapshots from the past five days to ensure continuity and rapid restoration in case of any disruptions.

## **Data collection**

To provide the SaaS service, Segura collects the following NPI (non-public information) and PII (personally identifiable information):

### **For devices:**

* Computer name.  
* Computer MAC address.  
* Usernames and groups.  
* Currently logged-in user.  
* IP addresses of the endpoint.  
* IP address used to connect to SaaS.  
* Installed programs.  
* Details about launched applications (governed by policies).  
* Screen capture videos of sessions.

### **For users:**

* Full name.  
* Username on SaaS.  
* Password.  
* Email address.

Segura’s web interface includes options for administrators to anonymize user data, ensuring compliance with the 'right to be forgotten' requirement.

## **Data retention and mercy period**

Data retention periods are determined by the storage capacity of the selected service package. After the license expires, clients have a two-week grace period to extract their data before the owner's tenant is deactivated. Snapshots are retained for three months following the license expiration.

## **Data extraction**

When passwords change, credentials backups are automatically created and stored on the customer's network. Responsibility for data security and management is transferred to the customer upon extraction.

:::(Warning) (Important)
Once the data is extracted, the customer becomes fully responsible for its security and management throughout its lifecycle.
:::

## **Data deletion procedures**

Data deletion is initiated in the following scenarios:

* Automatically three months post-contract termination or non-renewal.  
* Upon a specific written request for data deletion by the customer.

Once data deletion is triggered:

* The customer's virtual machine tenant is terminated.  
* All related customer data is permanently deleted from the cloud within hours, with the process recorded for possible audit purposes.  
* Customers receive notifications about tenant deactivation and data deletion completion.

:::(Error) (Attention)
This deletion process is recorded for further audit if required by the customer.
:::

## **Data deletion timeline**

Segura adheres to Google Cloud's deletion policy, balancing high-speed performance and timely data deletion. Typically, data is marked for deletion within 24 hours of the request. Backup data expires within six months of marking, in alignment with Google's cycles. For detailed information, refer to [Google Cloud documentation](https://cloud.google.com/docs/security/deletion).