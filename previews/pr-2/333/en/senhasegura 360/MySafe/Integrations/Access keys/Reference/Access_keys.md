# Access keys

In this document, you'll find detailed information about **MySafe**'s **Access keys** screen, which displays a report with the access keys created to integrate your application with **MySafe**.

:::(Info) (Info)
For more information about **MySafe** APIs, access the [MySafe](/v3-33/docs/api-mysafe) APIs documentation.
:::

## **Path to access**

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **MySafe**.  
2. In the side menu, select **Integrations > Access keys**. 
 ---

## **Top bar**

| Item | Description |
| ----- | ----- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it displays a drop-down menu with possible actions for the report. |
| **New** | Represented by the plus sign, it opens the **[New access key](/v3-33/docs/mysafe-myapps-screen#addedit-application-screen)** screen where users can create a new access key authorization. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the [**Schedule report**](/v3-33/docs/general-information-how-to-issue-download-and-schedule-device-reports) screen. |

## Search fields

| Item | Description |
| --- | --- |
| **Application** | Field that filters access keys by their name. |
| **Tags** | Field that filters access keys by associated keywords. |
| **Encrypted** | Field that filters access keys by the key’s encryption option. Available options are **Yes** and **No**. Click **Clear** to enable the **All** option. |
| **Expiration date** | Field that filters access keys by their expiration period. Format `MM/DD/YYYY`. Use this field to enter the initial date of the period. The downward arrow opens a calendar. |
| **to** | Field that filters access keys by their expiration period. Format `MM/DD/YYYY`. Use this field to enter the final date of the period. The downward arrow opens a calendar. |
| **Creation date** | Field that filters access keys by their creation period. Format `MM/DD/YYYY`. Use this field to enter the initial date of the period. The downward arrow opens a calendar. |
| **to** | Field that filters access keys by their creation period. Format `MM/DD/YYYY`. Use this field to enter the final date of the period. The downward arrow opens a calendar. |

## Report fields

* **Application**.
* **Tags**.
* **Information**: number of items the key has access to. 
* **Authentication method**: authentication method used. By default, **MySafe** uses the vOAuth 2.0 method.
* **Encrypted**.
* **Expiration date**.
* **Creation date**.
* **Action**: in this column, you find the following options:
    * **View**: represented by the key icon, opens the **[Application Authorization](/v3-33/docs/mysafe-access-keys-screen#application-authorization)** window with information about the access key.
    * **Three vertical dots**: dropdown menu with the options: *Edit*, *Decryption key* (if the **Encrypted** field is marked as **Yes**), *Clone*, and *Revoke*.


:::(Info) (Info)
The report displays 30 records per page. To move to the next pages, click the forward button at the end of the report.
:::


### New/Update access key screen
In this section, you will find all the information about the **New Access Key** and **Update Access Key** screens, which have the same fields.

#### Step 1 - Application
| Item | Description |
| --- | --- |
| **Name*** | Text box for entering a name for the application. |
| **Description** | Text box for entering a description for the application. |
| **Tags** | Text box for entering keywords associated with the application. |

#### Step 2 - Security
| Item | Description |
| --- | --- |
| **Encryption of sensitive data*** | Checkbox to define whether the sensitive information of each item will be returned encrypted. |
| **Authorized IPs** | **Add** button that enables the **Address** field for entering the IP addresses authorized to use the access key. Using the asterisk * allows access from any IP address. |
| **Authorized HTTP referers** | **Add** button that enables the **Referer** field for entering the URLs that will be allowed access to the access key authorization. By default, any origin is allowed. |
| **Certificate validation** | Field for entering a certificate fingerprint for an additional layer of protection. |


#### Step 3 - Data
| Item | Description |
| --- | --- |
| **Full access*** | Checkbox to define whether the application can access all **MySafe** items that the user has access to. Not checking this box enables the **Specify data** field where you can search for the desired information. |

#### Step 4 - Period
| Item | Description |
| --- | --- |
| **Expiration*** | Fields for setting the date and time when the key will be automatically revoked. Formats DD/MM/YYYY and HH:MM. The downward arrows open a calendar and a list of times. If left blank, the access key will expire only if you log out of the application or manually revoke the key.|

#### Step 4 - Review

Fields with all the information entered in steps 1 to 4.
* **Name**.
* **Description**.
* **Tags**.
* **Encryption of sensitive data**.
* **Authorized IPs**.
* **Authorized HTTP referers**.
* **Certificate validation**.
* **Information**.
* **Expiration**.


### Application Authorization

In this section, you will find all the information about the **Application Authorization** screen, which displays the details of the created access key.

| Item | Description |
| --- | --- |
| **Authentication method** | Field that displays the authentication method used. |
| **Application** | Field that displays the name of the client application using the access key. |
| **Client ID** | Field that displays the unique identifier of the client application. Click the **eye** icon to view the information. |
| **Client Secret** | Field that displays the secret key for authenticating the application to the server. Click the **eye** icon to view the information. |
| **Details** | Field that displays the description of the access key authorization.  |
| **Expiration date** | Field that displays the expiration date of the access key authorization.|
| **Encrypt sensitive data?*** | Field that indicates whether the information is encrypted. The options are **Yes** and **No**.|
| **Certificate validation?** | Field that indicates whether a certificate fingerprint was provided. The options are **Yes** and **No**. |
| **Authorized IPs** | Field that shows the IP addresses allowed to use the access key. |
| **Authorized HTTP referers** | Field that displays the HTTP referers allowed to use the access key.|
| **Tags** | Field that displays the keywords associated with the access key. |
| **Data** | Field that displays the information the key can access. It can display **Full access** or specific information for the selected items.|