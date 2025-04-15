# About Segura's ITSM integration

The ITSM (IT Service Management) integration in Segura is a powerful feature that allows for a direct connection between privileged access management and IT service management systems.

## What is the Governance Code? 

The **Governance Code** is a central element in ITSM integration. It’s a unique identifier that:

* Can be inserted by users in the justification and authorization form.  
* Serves as a link between the request in Segura and a corresponding ticket in the ITSM system.

## How does the integration work?

Below, you can visualize a summary of the workflow for a ITSM integration process on Segura.

### Main components

* **Administrator User (Admin)**: initiates the request process.  
* **Request Form**: interface for entering the ITSM code.  
* **Security System (Segura)**: verifies credentials and the ITSM code.  
* **ITSM Solution**: the final system to which access is requested.

### Request and Verification Process

1. The administrator user initiates the process through a request form.  
2. The administrator enters the ITSM code in the form.

### Security Verification

1. The ITSM code is sent to the Segura system.  
2. Segura requests additional credentials for authentication.

### Authentication in the ITSM Solution

1. Segura communicates with the ITSM Solution.  
2. Segura verifies if the provided ITSM code exists and is valid in the ITSM Solution.

### Confirmation and Authorization

1. If the code is valid, Segura receives a confirmation.
    1. You can also view the status of the ticket, except for integration with Jira Service Desk Manager.
2. The system then authorizes the user to proceed.

### Access Granted

After a successful verification, the user is granted access to the ITSM Solution.

### Security Aspects

* **Multiple Authentication Layers**: the process involves both the ITSM code and additional credentials.  
* **Centralized Verification**: Segura acts as a central point for verification and access control.  
* **Separation of Responsibilities**: the request form, security system, and ITSM solution are distinct components, increasing security.

### Benefits of ITSM Integration

* **Enhanced Security**: ensures that privileged accesses are always associated with approved service tickets.  
* **Improved Auditing**: facilitates tracking privileged accesses to corresponding service tickets.  
* **Compliance**: helps maintain compliance with security policies and regulations.  
* **Efficiency**: automates the authorization verification process, reducing manual errors.

## How to make the Governance Code mandatory 

To ensure that all privileged access requests are linked to an ITSM ticket, you can make the Governance Code mandatory:

1. Go to: **PAM core \> Settings \> Access \> Access groups.**  
2. Create a new group or edit an existing one.  
3. In the **Settings** tab, in the **Access request settings** section, select **Yes** in the **Mandatory to specify governance code when justifying?** field.

## Conclusion 

The ITSM integration in Segura offers an additional layer of security and control over privileged access. By linking access requests to valid ITSM tickets, organizations can ensure that all privileged accesses are properly authorized, documented, and auditable. This not only improves security but also helps maintain compliance with various regulations and security policies.