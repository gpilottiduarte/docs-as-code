# Password Strength

This document provides information about the **Password Strength** report screen, which shows the list of rules for each level of password strength.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.  
2. In the side menu, select **Management > Credentials > Password Strength.**

---
## Actions menu

| **Item**  | **Type** | **Description** |
| :---- | :---- | :---- |
| **Add** | Button | Directs to the **Password strength** registration screen. |
| **Actions** | Dropdown menu | Displays the options *Print report, Export CSV and Schedule report.* |

## Search Fields

| **Item** | **Type** | **Description** |
| :---- | :---- | :---- |
| **ID** | Text field | Filter the password strength by their identification code within Segura. |
| **Name** | Text field | Filter the password strength by the name registered in Segura. |
| **Status** | Dropdown menu | Filters the password strength by their activation state. The options are **Enabled** and **Disabled.** Clear the field to enable the **All** option. |

## Report fields

* **ID.**  
* **Name.**  
* **Lowercase:** displays the amount of lowercase letters allowed.  
* **Uppercase:** displays the amount of permitted capital letters.  
* **Numbers:** displays the number of numbers allowed.  
* **Symbols:** displays the number of symbols allowed.  
* **Allowed symbols:** displays the symbols allowed.  
* **Repeated character:** whether or not the record accepts repeated characters.  
* **Status.**  
* **Actions:**  
  * **Edit:** open the **Password Strength** form screen so that the necessary changes can be made.

:::(info) (**Info**)  
By default, the report displays 30 records per screen. To go to the next screen, click the forward buttons at the end of the report.  
:::

---
### Password Strength registration screen

| **Item** | **Type** | **Required** | **Description** |
| :---- | :---- | :---- | :---- |
| **Name*** | Text field | Yes | Password strength name. |
| **Status** | Toggle button | No | Activates or deactivates the strength of the registered password. |
| **Uppercase letters*** | Quantity input | Yes | Select the quantity of capital letters accepted in this registry. |
| **Lowercase letters*** | Quantity input | Yes | Select the quantity of lowercase letters accepted in this registry. |
| **Numbers*** | Quantity input | Yes | Select the number of numbers accepted in this registry. |
| **Symbols*** | Quantity input | Yes | Select the number of symbols accepted in this registry. |
| **Allowed symbols** | Checkbox | No | Select the symbols allowed in this registry. Symbols can be: `! % @ # ^ & * _` |
| **Allow repeated character?** | Toggle button | No | Activates or deactivates the option for the whether or not to accept repeated characters in the password. |

:::(info) (**Info**)  
When selecting the available quantities and options, Segura displays the number of possible combinations according to what is being chosen.  
:::