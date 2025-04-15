# Policies

This document provides information about the **Policies** report screen, which shows the list of credential policies registered in Segura.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Management > Credentials > Policies.**

---
## Actions menu

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **New policy** | Button | Directs to the [Policy registration](/v4/docs/pam-credential-new-policies) screen. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV* and *Schedule report.* |

## Search Fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **Name** | Text field | Filter the policies by the name registered in Segura. |
| **Password strength** | Dropdown menu | Filters the policies by the strength of the password chosen when registering the policy. The options are: *High, Medium and Low.* |
| **Simultaneous View** | Dropdown menu | Filter the policies by the option to view the password simultaneously. The options are **Yes** and **No**. Clear the field to enable the **All** option. |
| **Simultaneous Session** | Dropdown menu | Filters the policies by the option to access sessions simultaneously. The options are **Yes** and **No**. Clear the field to enable the **All** option. |
| **Status** | Dropdown menu | Filters the policies by their activation state. The options are **Enabled** and **Disabled.** Clear the field to enable the **All** option. |

## Report fields

* **ID:** policy identification code.  
* **Priority:** policy priority level.  
* **Name.**	  
* **Password strength.**  
* **Expiration period:** how long until the policy expires.  
* **View expiration:** displays how much time is left until query expiration for the policy.  
* **Simultaneous View.**  
* **Simultaneous Session.**  
* **Password criteria:** displays the three password criteria options for the policy.  
* **Status.**  
* **Actions:**  
  * **Edit policy:** open the [Policies](/v4/docs/pam-credential-new-policies) form screen so that the necessary changes can be made.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::