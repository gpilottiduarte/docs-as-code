# EPM Windows

## About EPM Windows

The EPM Windows is a Privilege Elevation and Delegation Management (PEDM) solution for Microsoft Windows platforms. Integrated with the Segura platform, it allows end-users to run applications that require administrative privileges without needing to see the credentials. Furthermore, it ensures that passwords are automatically rotated, eliminating the need for intervention from other users. For administrators, segregation and auditing of all actions aid in decision-making and governance.

### **Key Features**

#### Policy Control, Creation, and Maintenance of Policy Lists Based on Segregation:

- Group-based policies.
- User-based policies.
- Policies based on Active Directory Organizational Units (OUs).
- Global policies.
- Policy application via Group Policy Objects (GPOs).
- Comprehensive criteria for identifying application groups.

#### Privilege Control:

- Application elevation (Allowlisting).
- Application blocking (Denylisting).
- Control of unmanaged applications (Graylisting/General Parameters).
- DLL blocking.
- Control of parent and child processes.
- Integration with the native operating system prompt (UAC).
- Command-level control within the command prompt (Denylisting and Allowlisting).
- One-time access for applications not controlled by policy.
- Customization of privileges in tokens for elevations.

#### Auditing, Compliance, and Reporting:

- Functionality for controlling and monitoring directories, file registries, and managing their permissions.
- Tracking of events associated with executions mediated by EPM (Reports).

#### Security:

- Protection against shell escaping.
- Protection against all types of pass-the-hash and pass-the-ticket attacks.
- Protection against privilege escalation.

#### Other Features

- Automation for authentication in local/web applications.
- One-screen workplace.
- All-in-one solution (PAM 360).
- Approval workflow for executions.
- Session recording linked to access lists.
- Malware analysis (without report).
- Offline mode.
- Single sign-on.
- MFA OTP token.