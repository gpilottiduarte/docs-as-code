# Session settings

This document provides information about **User Behavior**’s **Session settings** which allows the administrator  to configure session-related actions that will be considered suspicious and may trigger a request for user identity verification.

## Pre-requisites

* Administrator permission.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu**, and select **User Behavior**.  
2. In the side menu, select **Management \> Session settings**.

---

## General settings section

In this section, the administrator defines general session-related settings.

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Minimum suspicious score (1 to 15\)**\* | Quantity input | Yes | Defines the score threshold at which a behavior will be considered suspicious. <br>**Default**: 5 |
| **User initial rating (0 to 10\)**\* | Quantity input | Yes | Defines the initial score for the user in the system. 0 (zero) means that a new user is considered highly suspicious, and 10 (ten) indicates that new users are considered very trustworthy. <br>**Default:** 5  |

## Session settings section

In this section, the administrator defines the session-related settings.

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Number of days for history**\* | Quantity input | Yes | Defines the number of days considered to determine the user's standard behavior related to sessions. <br>**Default:** 90  |
| **Variation rate (%)**\* | Quantity input | Yes | Defines, in percentage, the deviation rate from the standard behavior that will be considered suspicious.  <br>**Default:** 10% |
| **Submit high-risk sessions to audit?**\* | Toggle button | No | Enables or disables the submission of high-risk sessions to the audit queue.  <br>**Default:** disabled |

::: (warning) (Attention)  
To submit high-risk sessions for auditing, you must select at least one default auditor. Configure default auditors in **PAM Core \> Management \> Audit \> Default Auditors**.

:::

## Checking weight section

In this section, the administrator defines a score for each session in which some unusual action was performed. The results of these score sums can be accessed in the reports under **User Behavior \> Behavior Analysis \> Session events**. The **Risk** column of each report shows the total session score according to the values defined in the fields below.

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Access unusual target**\* | Quantity input | Yes | Defines the score for when the user accesses an unusual target device during the session.<br>**Maximum**: 3  <br>**Default:** 0 |
| **Access unusual origin**\* | Quantity input | Yes | Defines the score for when the user starts the session from an unusual origin. <br> **Maximum:** 3  <br>**Default:** 0 |
| **Access unusual credential**\* | Quantity input | Yes | Defines the score for when the user starts the session with an unusual credential. <br>**Maximum:** 3  <br>**Default:** 2 |
| **Access unusual time**\* | Quantity input | Yes | Defines the score for when the user starts the session at an unusual time. <br>**Maximum**: 3  <br>**Default:** 3 |
| **Access unusual duration**\* | Quantity input | Yes | Defines the score for when the user performs a session with an unusual duration.  <br>**Maximum**: 3  <br>**Default:** 0 |

## Actions for sessions with unusual length section

In this section, the administrator defines the consequences for sessions with unusual duration.

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Block session**\* | Dropdown menu | Yes | Defines the block for sessions with unusual duration. The options are **Yes** or **No**.  <br>**Default:** No |
| **Block session and user**\* | Dropdown menu | Yes | Defines the block for both sessions with unusual duration and the user who conducted the session. The options are **Yes or No**.  <br>**Default:** No |

## Actions for sessions held in unusual time section

In this section, the administrator defines the consequences for sessions conducted at unusual times.

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Block session**\* | Dropdown menu | Yes | Defines the block for sessions at unusual times. The options are **Yes** or **No**. <br>**Default:** No |
| **Block session and user**\* | Dropdown menu | Yes | Defines the block for sessions at unusual times and the user who conducted the session. The options are **Yes** or **No**.  <br>**Default:** No |

## Actions for sessions of unusual origins section

In this section, the administrator defines the consequences for sessions conducted from unusual devices.

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Block session** | Drop-down menu | Yes | Defines the block for sessions from unusual origins. The options are **Yes** or **No**.  <br>**Default:** No |
| **Block session and user** | Drop-down menu | Yes | Defines the block for sessions from unusual origins and the user who conducted the session. The options are **Yes** or **No**. <br>**Default:** No |

## Actions to sessions for unusual destinations section

In this section, the administrator defines the consequences for sessions conducted with unusual target devices.

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Block session**\* | Dropdown menu | Yes | Defines the block for sessions to unusual destinations. The options are **Yes** or **No**.  **Default:** No |
| **Block session and user**\* | Dropdown menu | Yes | Defines the block for sessions to unusual destinations and the user who conducted the session. The options are **Yes** or **No**.  <br>**Default:** No |

## Actions for sessions with unusual credentials section

In this section, the administrator defines the consequences for sessions conducted with unusual credentials.

| Item | Type | Required | Description |
| :---- | :---- | :---- | :---- |
| **Block session** | Dropdown menu | Yes | Defines the block for sessions with unusual credentials. The options are **Yes or No**.  <br>**Default:** No |
| **Block session and user** | Dropdown menu | Yes | Defines the block for sessions with unusual credentials and the user who conducted the session. The options are **Yes** or **No**.  <br>**Default:** No |
