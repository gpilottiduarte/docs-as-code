# Panel

This document provides information about the **Panel** screen of **MySafe**, which enables administrators to have an overview of user interactions with **MySafe**.

## Requirements

* **MySafe** administrator permission.

## Path to access

1. On Segura,  in the navigation bar. hover over the **Products menu** and select **MySafe**.  
2. In the side menu, select **Global administration \> Panel**.

---

## Cards

| Item | Type | Description |
| ----- | ----- | ----- |
| **Total users** | Clickable card | Total number of active users in **MySafe**. Opens the **Total users** report screen displaying user data. |
| **Exclusive users** | Clickable card | Total number of active users with access only to **MySafe**. Opens the **Exclusive users** report screen displaying user data. |
| **Users without items** | Clickable card | Total number of active users with access to **MySafe** but with no added or active items. Opens the **Users without items** report screen displaying user data. |
| **Total items** | Card | Sum of the number of active *Passwords, Notes, Files*, and *API secrets* in **MySafe**. |
| **Groups** | Card | Total number of active personal groups in **MySafe**. |
| **Disk usage** | Card | Total disk space occupied by the items stored in **MySafe**. |

## Graphs

| Item | Type | Description |
| ----- | ----- | ----- |
| **Items by type** | Donut chart | Displays the quantities of active items grouped by Password, Notes, Files, and API Secrets. |
| **Items created daily** | XY chart | Displays the number of items created over the last 7 days, divided by Password, Notes, Files, and API Secrets. |
| **Passwords by strength** | Pie chart | Shows the total number of active passwords, grouped by strength level. Strength levels include *Best, Good, Bad, Poor*, and *Undefined*. **Note**: the **Undefined** level applies when, in previous versions, the **Password** field was left empty during the addition or editing of a credential. |
| **Sharing** | XY chart | Displays the total number of internal shares (represented by bars) and external shares (represented by lines) of **MySafe** items over the last 7 days. |

## List

| Item | Type | Description |
| ----- | ----- | ----- |
| **Most used locations** | Table | Displays the sites with the highest number of passwords stored in **MySafe**. Each site includes information such as *Domain, Last creation date*, and *Total passwords* associated with each site. |
