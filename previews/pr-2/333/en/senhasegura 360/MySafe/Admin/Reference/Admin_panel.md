# Admin panel

In this document, you’ll find detailed information regarding MySafe’s Admin panel dashboards which enable the administrator to have an overview of **MySafe**’s users' interactions within the platform.



## Requirements
* **MySafe** administrator permission.


## Paths to access
The dashboard can be accessed through two different paths:

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **MySafe**.
2. In the side menu, select **Admin > Admin panel**.
---
1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Dashboard**.
2. In the side menu, select **MySafe > Admin panel**.
***


## Cards

:::(info) (Info)
Cards display consolidated data, while the detailed report presents real-time information. Therefore, there might be slight discrepancies between the quantities shown.
:::

| **Item**| **Description**|
|------|-----|
| **Total users**| Total number of active **MySafe** users. Clicking on the card will redirect the administrator to the **Total users** screen, which contains the list that makes up this number. |
| **Exclusive**| Total number of active users who have access to **MySafe** but not to **PAM Core**. Clicking on the card will redirect the administrator to the **Exclusive screen**, which contains the list of users that make up this number. |
| **Users without items**| Total number of active users with **MySafe** access, but without any added and active items. Clicking the card redirects the administrator to the **Users without items** screen, displaying the list comprising this number. |
| **Total items**| Total number of active **Passwords, Notes, Files**, and **API secrets** in **MySafe**.|
| **Groups**| Total number of private groups in **MySafe**.|
| **Disk consumption**| Total disk space occupied by files saved in **MySafe**.|




## Charts
| **Item**| **Description**|
|-----|-----|
| **Items by type**| Donut chart displaying the quantities of active items grouped by **Password, Notes, Files**, and **API secrets**.|
| **Items by created by day** | XY chart displaying the number of items created over the past 7 days, categorized by **Password, Notes, Files**, and **API secrets**.|
| **Passwords by strength**| Pie chart displaying the total number of active passwords, grouped by strength level. The strength levels include *Poor, Bad, Good, Best*, and *Undefined*. <br>**Note**: the **Undefined** level is used when, while filling out the fields in the **Add password** section, the **Password** field is left blank. |
| **Sharing**| XY chart displaying the total number of internal shares, represented by bars, and external shares, represented by lines, for **MySafe** items. |


## List

| **Item**| **Description**|
|------|-----|
| **Most used sites** | A list of websites with the most saved credentials in **MySafe**. Each website displays information such as **Domain, Last creation**, and **Total passwords** associated with each website. |


