# Internal users' details window

This article describes the information available in the pop-up details window on the **Remote access - Third-party** screen.

:::(Info) (Info)
Paths to access:

* **Domum > Request Access > Third parties > [Third party username] > Action column > Details** represented by the magnifying glass icon.

* **Domum > Reports > Credentials by user > [Third party username] > Action column > Details** represented by the magnifying glass icon.
:::

## Header
The header contains the following fields:

| Item | Descrição |
| --- | --- |
| **Usuário** | The user row has three columns: **Column 1:** displays the user's name and their e-mail address. **Column 2**: displays the name of the vendor associated with the user. **Column 3**: displays the status of the user's access.|
| **ID** | Access identification code in the report. E.g., EXT-23-000487 |
| **Access group** | Access group responsible for the Vendor. |
| **Start date** | Date and time the access started. |
| **End date** | Date and time the access ended. |
| **Cancelled by** | User who canceled the access. This field is only available for cancelled accesses. |

---
## Credentials 
The section contains the following fields:


| Item | Description |
| --- | --- |
| **ID** | Access identification code of the credential in the senhasegura platform. |
| **Type** | Type of credential released for access. |
| **Username** | Name assigned to the credential. |
| **Device** | Device to which the user has access. |
| **Start session** | Indicates whether the given access allows a session to start using the provided credential. |
| **View password** | Indicates whether the given access allows viewing a password using the provided credential. |

---
## Access limitation 
The section contains the following fields:


| Item | Description |
| --- | --- |
| **Access permission days** | Specific days when access is allowed. |
| **Access permission times** | Specific times when access is allowed. |
| **Maximum number of sessions** | Maximum number of sessions allowed by the access. |

---

## Justification 
The section contains the following fields:


| Item | Description |
| --- | --- |
| **Governance ID** | Access governance code. Since the code is optional, this field can be empty. |
| **Reason** | Reason entered by the administrator in the Enter an access reason step |
| **Bottom row** | Last row of the section. It displays the justification entered for the access. |

:::(Info) (Info)
There are differences between **Access reason** and **Justification**. The reasons are controlled; their pre-registration is a mandatory step for granting access. After this step, they’re available in a drop-down menu in the request window and in the **Access reasons** menu. The justification is a free text inserted by the administrator at the bottom of the request window.
:::




