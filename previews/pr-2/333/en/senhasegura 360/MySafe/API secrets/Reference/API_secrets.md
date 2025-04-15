# API secrets

In this document, you’ll find detailed information about **MySafe**’s **API secrets** page.

## **Path to access**

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **MySafe**.  
2. In the side menu, select **API secrets**.
***
## **Top bar**

| Item | Description |
| ----- | ----- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report. |
| **Add API secret** | Represented by the plus sign, it opens the **[Add API secret](/v3-33/docs/mysafe-api-secrets-screen#addedit-api-secret-screen)** screen. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the [**Schedule report**](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports) screen. |

## **Search fields**

| Item | Description |
| ----- | ----- |
| **ID** | Field that filters API secrets by their unique identification code. |
| **Name** | Field that filters API secrets by their name.  |
| **URL** | Field that filters API secrets by the URL of the application where they’re registered.  |
| **Tags** | Field that filters API secrets by associated keywords.  |
| **Shared** | Field that filters API secrets by their sharing status. The available options are **Yes** and **No**. Click **Clear** to enable the **All** option. |
| **Owner** | Field that filters API secrets by the name of the user who registered them.  |
| **Last use** | Field that filters API secrets by the period during which the API secret was viewed. Format `MM/DD/YYYY`. Use this field to enter the start date of the period. The downward arrow opens a calendar.  |
| **until** | Field that filters API secrets by the period during which the API secret was viewed. Format `MM/DD/YYYY`. Use this field to enter the end date of the period. The downward arrow opens a calendar.  |
| **Enabled** | Field that filters API secrets by their activation status. The available options are **Yes** and **No**. Click **Clear** to enable the **All** option. |

## **Report fields**

* **Checkbox**: used for batch actions.  
* **ID**.  
* **Name**.  
* **Url**.  
* **Tags**.  
* **Shared**.  
* **Owner**.  
* **Last use.**  
* **Enabled**.  
* **Acton**: in this column, you’ll find the following options:  
  * **View API secret:** represented by the key icon, it opens the **[API secret details](/v3-33/docs/mysafe-api-secrets-screen#api-secret-details-screen)** screen with all information about the API secret.  
  * **Three vertical dots icon:** opens a dropdown menu with the options: *Share, Edit,* and *Disable*.

:::(info) (Info)  
The report displays 30 records per page. To go to the next screen, click the forward button at the end of the report.  
:::

## **Bottom buttons**

* **Enable**: button used for batch activation.  
* **Disable**: button used for batch deactivation.  
* **Share**: button used for batch sharing.

## **API secret details screen**  

In this section, you’ll find all the information about the **API secret details** screen.

| Item | Description |
| ----- | ----- |
| **Name** | Name assigned to the API secret. |
| **Owner** | The user who registered the API secret. |
| **URL** | URL of the application where the API secret is registered. |
| **Last use** | The date and time when the API secret was last used. |
| **Identifier** | Unique string defined by the user to identify the API secret being registered. |
| **Client ID** | Unique identifier for the client application. |
| **Method** | HTTP method used to make the API call. |
| **Tags** | Keywords associated with the API secret. |
| **Notes** | Observations about the API secret. |
| **View the information** | Represented by the list icon, it opens the **Protected information** pop-up window, which displays the **`Client secret`.** |

#### **Users with access to information section**

| Item | Descrição |
| ----- | ----- |
| **Member** | Name of the **MySafe** user with access to the API secret. |
| **Can view?** | Indicates viewing permission for the API secret details. By default, whenever an API secret is shared, this column is marked with **Yes**. |
| **Can edit?** | Indicates editing permission for the API secret details. The available options are **Yes** and **No.** |

### **Add/Edit API secret screen**

In this section, you’ll find all the information about the **Add API secret** and **Edit API secret** screens, which have the same fields.

| Item | Description |
| ----- | ----- |
| **Name**\* | Field for entering a name for the API secret. |
| **URL\*** | Field for entering the URL of the application where the API secret will be used.  |
| **Client ID\*** | Field for entering the `Client ID` used to identify the client application in the OAuth 2.0 authorization flow.  |
| **Client Secret**  | Field for entering the `Client Secret` used to authenticate the client application in the OAuth 2.0 authorization flow.  |
| **Identifier** | Field for entering the unique string defined by the user to identify the API secret. |
| **Method** | Field for entering the HTTP method used to call the API. |
| **Tags** | Keywords associated with the API secret. |
| **Notes** | Observations about the API secret. |
| **Eye icon** | Present only on the **Edit API secret** screen, an icon that shows information about who added the API secret and when, as well as who made the last change and when. |

:::(info) (Info)  
The items with an asterisk are mandatory.

:::