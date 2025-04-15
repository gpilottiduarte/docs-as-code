# Password view settings

This document provides information about **User Behavior**’s **Password view settings,** which allows the administrator to configure password-view-related actions that will be considered suspicious and may trigger a request for user identity verification.

## Pre-requisites

* Administrator permission.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu**, and select **User Behavior**.  
2. In the side menu, select **Management \> Password view settings**.

## Password view settings section

In this section, the administrator defines the settings related to password queries.

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Number of days for history**\* | Quantity input | Yes | Defines the number of days considered to determine the user's standard behavior related to password queries.  <br>**Maximum:** 1000 <br>**Default:** 90  |
| **Variation rate (%)**\* | Quantity input | Yes | Defines, in percentage, the deviation rate from the standard behavior that will be considered suspicious. <br>**Maximum:** 100% <br>**Default:** 10%  |

## Checking weight section

In this section, the administrator defines the score for each action related to an unusual password query. The results of these score sums can be accessed in the reports under **User Behavior \> Behavior Analysis \> Credential view events**. The **Risk** column of each report shows the total session score according to the values defined in the fields below.

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **View unusual origin**\* | Quantity input | Yes | Defines the score for when the user views passwords from an unusual origin. <br>**Maximum:** 3  <br>**Default:** **0** |
| **View unusual credential**\* | Quantity input | Yes | Defines the score for when the user views passwords from an unusual credential. <br>**Maximum:** 3<br>**Default:** 3 |
| **View unusual time**\* | Quantity input | Yes | Defines the score for when the user views passwords at an unusual time. <br>**Maximum:** 3 <br>**Default:** 0 |
| **Unusual password change**\* | Quantity input | Yes | Defines the score for when the user changes a password unexpectedly. <br>**Maximum:** 3<br>**Default:** 0 |

:::(info) (Info)  
Administrators are notified whenever a user attempts to manually change the password of a credential that was recently rotated successfully by Segura.  
:::