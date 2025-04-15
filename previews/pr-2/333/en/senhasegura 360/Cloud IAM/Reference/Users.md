# Users

In this document, you'll find all the information about the **Users** page, which allows you to provision users for all your integrated Cloud Service Providers (CSPs) and import existing users into senhasegura.

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and then select **Cloud IAM**.
2. In the side menu, select **Cloud IAM** > **Users**.

---

## Top bar

<!-- Fix callout -->
| **Item** | **Description** |
| --- | --- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **Add user** | Represented by the plus icon, it opens the [Add user](#add-user-screen) screen that allows you to create users for connected CSPs. |
| **Import Azure users** | Represented by the download icon, it imports Azure users into **Cloud IAM**. This action is done automatically for AWS and GCP. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the [Schedule reports](https://docs.senhasegura.io/v3-31/docs/en/general-information-how-to-issue-download-and-schedule-device-reports#scheduling-reports) form. |

## Search fields

| **Item** | **Description** |
| --- | --- |
| **ID** | Field that filters users by their identification code within senhasegura. |
| **Username** | Field that filters users by the user name. |
| **Account** | Field that filters users by the senhasegura account that owns the user. |
| **Provider** | Select field that filters users by one of the three available providers. Available options are: **AWS**, **Google Cloud**, and **Azure**. |
| **Tag** | Field that filters users by their tags, which can be assigned when creating or editing an account. |
| **Creation date** | Opens a calendar for choosing the user’s registration date. This date will be the filter's start date. |
| **until** | Opens a calendar for choosing the user's registration date. This date will be the end date of the filter. |
| **Status** | Field that filters the users by their provisioning status. Available options are: **Pending**, **Provisioned**, **Provisioning**, **Unprovisioning**, **Unprovisioned**, and **Imported**. |
| **Enabled** | Field that filters users by their activation status. Available options are **Yes** and **No**. |
| **Deleted** | Field that filters by deleted users. Available options are **Yes** and **No**. |

For Azure accounts, you must manually import Azure users in the actions bar.

### Add user screen

| **Item** | **Description** |
| --- | --- |
| **User** | Field to assign a name to the user. |

### Settings

<!-- Fix callout -->
:::(info) (Info)
You can provision users for multiple CSPs.
:::

| **Item** | **Description** |
| --- | --- |
| **AWS** | Checkbox to provision the user for AWS. |
| **Google Cloud** | Checkbox to provision the user for Google Cloud. |
| **User responsible** | Field to select for which providers the user will be created. |
| **TTL (seconds)** | Defines the lifetime of the user. The time-to-live (TTL) starts to count from its creation, and upon expiration, the user will be automatically deleted from the provider. |
| **Description** | Text field for the description of the user. |
| **Tags** | Tags associated with the user. |
