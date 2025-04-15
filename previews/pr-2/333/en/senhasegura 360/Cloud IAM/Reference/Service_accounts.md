# Service accounts

In this document, you'll find all the information about the **Service accounts** page, which allows you to provision service accounts for all your integrated Cloud Service Providers (CSPs) and import existing service accounts into senhasegura.

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and then select **Cloud IAM**.
2. In the side menu, select **Cloud IAM** > **Service accounts**.

---

## Top bar

<!-- Fix anchors -->
| **Item** | **Description** |
| --- | --- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **Add service account** | Represented by the plus icon, it opens the [Add service account](#add-service-account-screen) screen that allows you to create service accounts for connected CSPs. |
| **Import Azure service accounts** | Represented by the download icon, it imports Azure service accounts into **Cloud IAM**. This action is done automatically for AWS and GCP. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the [Schedule reports](https://docs.senhasegura.io/v3-31/docs/en/general-information-how-to-issue-download-and-schedule-device-reports#scheduling-reports) form. |

## Search fields

| **Item** | **Description** |
| --- | --- |
| **ID** | Field that filters service accounts by their identification code within senhasegura. |
| **Username** | Field that filters service accounts by the service account name. |
| **Account** | Field that filters service accounts by the senhasegura account that owns the service account. |
| **Provider** | Select field that filters service accounts by one of the three available providers. Available options are: **AWS**, **Google Cloud**, and **Azure**. |
| **Tag** | Field that filters service accounts by their tags, which can be assigned when creating or editing a service account in **Cloud IAM**. |
| **Creation date** | Opens a calendar for choosing the service account’s registration date. This date will be the filter's start date. |
| **until** | Opens a calendar for choosing the service account's registration date. This date will be the end date of the filter. |
| **Status** | Field that filters the service accounts by their provisioning status. Available options are: **Pending**, **Provisioned**, **Provisioning**, **Unprovisioning**, **Unprovisioned**, and **Imported**. |
| **Enabled** | Field that filters service accounts by their activation status. Available options are **Yes** and **No**. |
| **Deleted** | Field that filters by deleted service accounts. Available options are **Yes** and **No**. |

For **Azure** accounts, you must manually import Azure service accounts in the actions bar.

### Add service account screen

| **Item** | **Description** |
| --- | --- |
| **Name** | Field to assign a name to the service account. |

### Settings

<!-- Fix callout -->
:::(info) (Info)
You can provision service accounts for multiple CSPs.
:::

| **Item** | **Description** |
| --- | --- |
| **AWS** | Checkbox to provision the service account for AWS. |
| **Google Cloud** | Checkbox to provision the service account for Google Cloud. |
| **User responsible** | Checkbox to select for which providers the service account will be created. |
| **TTL (seconds)** | Defines the lifetime of the service account. The time-to-live (TTL) starts to count from its creation, and upon expiration, the service account will be automatically deleted from the provider. |
| **Description** | Text field for the description of the service account. |
| **Tags** | Tags associated with the service account. |
