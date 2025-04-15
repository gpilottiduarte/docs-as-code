# Reference for batch import template file

## Device information

The Type, Manufacturer, Model, and Site information will be registered automatically if not already registered.

| Field | Description |
| --- | --- |
| Device name | Device hostname, IP, URL, or website name of the application. |
| Management | IP for URL address for device management. |
| Type | Type of the desired device (it’ll be automatically registered in case of an empty entry). |
| Vendor | Device's vendor, |
| Product | Specific device’s model. |
| Site | Device's location. |
| Tags | Tags to group or filter the devices (has to be comma separated). Note that the Tags field has a 250-character limit, including commas and spaces. |
| Domain | DNS of the device. |

## Device connectivity

| Field | Description |
| --- | --- |
| Connectivity | Connectivity between the device’s ports. **Format: Type:Port**. |
| Network connectivity | Name of the network connector used to access the network. |
| Agent | Name of the network connector’s agent. Used to access the network. |

## Additional device settings

| Field | Description |
| --- | --- |
| Device criticality | Criticality level of the device (*High, Medium, or Low*). |
| Connectivity for the expression | Login expression for the connection. |
| Expected expression | Expected regular expression to login. It’s recommended to use protocols with encryption. |
| Fil in value | Value for filling in the login expression. |
| Additional 1 | Field to add more information, as a platform. |
| Additional 2 | Field to add more information, as a system. |

## Credential information

| Field | Description |
| --- | --- |
| Username | Username to identify the credential. |
| Password type | Type of credential already registered. |
| Domain | DNS of the credential. |
| Additional information | Additional information about the credential. Useful for database instances, password changes, and so on. |
| Status | Credential status (**Active** or **Inactive**) when registered. |
| Password | Password value. If empty, the password won’t be updated. |
| Tags | Tags for passwords. They’re separated by commas. They’re used to group and filter the credentials. Note that the Tags field has a 250-character limit, including commas and spaces. |

## Credential execution settings

| Field | Description |
| --- | --- |
| Parent credential username | User to identify the parent credential. |
| Parent credential hostname | Hostname to identify the parent credential. |
| Enable automatic change | Enable the automatic change of the password (**Yes** or **No**). |
| Change plugin | Change password plugin. |
| Change template | Change password template. |
| Connection username | Username to connect to the device with the privileges to perform change and status control operations. |
| Hostname for connection | Hostname to connect to the device with the privileges to perform change and status control operations. |
| Reconciliation credential status | Status of the reconciliation credential (**Active** or **Inactive**). |
| Username for reconciliation | Username for the reconciliation. |
| Hostname for reconciliation | Hostname for the reconciliation. |
| Reconciliation plugin | Plugin for the reconciliation. |
| Reconciliation template | Template for the reconciliation. |

## Credential session settings

| Field | Description |
| --- | --- |
| RemoteApp macro | Automation macro for the RemoteApp. |
| Macro connectivity | Automation macro for connectivity. |
| Restrict access | Restriction of access to use only the RemoteApp (**Yes** or **No**). |
| User for authentication credential | The user who is authorized to connect to the operational system. |
| Hostname or IP for authentication credential | Hostname or IP used to connect to the operational system. |
| Hostname or IP for authentication device | Hostname or IP used to connect to the device. |

## Credential additional settings

| Field | Description |
| --- | --- |
| Credential owner | Owner user of the credential. |
| Credential criticality | Criticality level of the credential. |
| Notes | Additional notes about the credential. |

## Credential JIT settings

| Field | Description |
| --- | --- |
| Control status | Option to indicate the status of JIT on the credential (can be **Yes** or **No**). |
| Activation plugin | Activation plugin used by the template. |
| Activation template | Template for the activation of the credential. |
| Inactivation plugin | Plugin for the inactivation of the credential. |
| Inactivation template | Template for the inactivation of the credential. |