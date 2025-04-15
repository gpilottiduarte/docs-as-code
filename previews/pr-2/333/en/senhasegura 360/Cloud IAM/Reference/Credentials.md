# Credentials

In this document, you'll find all the information about the **Credentials** page, which shows the existing credentials for accounts connected to senhasegura and allows you to create new credentials for all Cloud Service Providers (CSPs).

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and then select **Cloud IAM**.
2. In the side menu, select **Cloud IAM** > **Credentials**.

---

## Top bar

<!-- Fix anchors -->
| **Item** | **Description** |
| --- | --- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **Add credential** | Represented by the plus icon, it opens the [Add credential](#add-credential-screen) screen that allows you to add CSPs to Cloud IAM. |
| **Import Azure credentials** | Represented by the download icon, it imports Azure credentials into **Cloud IAM**. This action is done automatically for AWS and GCP. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the [Schedule reports](https://docs.senhasegura.io/docs/en/general-information-how-to-issue-download-and-schedule-device-reports#scheduling-reports) form. |

## Search fields

| **Item** | **Description** |
| --- | --- |
| **ID** | Field that filters credentials by their identification code within senhasegura. |
| **Credential** | Field that filters credentials by their name. |
| **Account** | Select field that filters credentials by the connected account. |
| **User/Service account** | Select field that filters credentials by the connected user or service account. |
| **Tag** | Field that filters credentials by their tags, which can be assigned when creating a credential through **Cloud IAM**. |
| **Creation date** | Opens a calendar for choosing the credential's registration date. This date will be the filter's start date. |
| **until** | Opens a calendar for choosing the credential's registration date. This date will be the end date of the filter. |
| **Enabled** | Field that filters credentials by their activation status. Available options are **Yes** and **No**. |
| **Deleted** | Field that filters by deleted credentials. Available options are **Yes** and **No**. |
| **Provider** | Select field that filters credentials by one of the three available providers. Available options are: **AWS**, **Google Cloud**, and **Azure**. |

For **Azure** accounts, you must manually import Azure credentials in the actions bar.

### Add credential screen

| **Item** | **Description** |
| --- | --- |
| **Provider** | Select field to choose for which provider the credential will be created. Available options are: **AWS**, **Google Cloud**, and **Azure**. |
| **Account** | Select field to choose for which account the credential will be created. |
| **User/Service account** | Select field to choose for which user or service account the credential will be created. |

### Information

| **Item** | **Description** |
| --- | --- |
| **TTL (seconds)** | Defines the lifetime of the credential. The time-to-live (TTL) starts to count from its creation, and upon expiration, the credential will be automatically deleted from the provider. |
| **Environment** | Select field to choose for which DSM environment the credential is created. Requires [DevOps Secret Manager](https://docs.senhasegura.io/docs/devops-secret-manager). |
| **System** | Select field to choose a system configured as a [System parameter](https://docs.senhasegura.io/docs/en/administration-system-parameters) in senhasegura. |
| **Description** | Text field for the description of the credential. |
| **Tags** | Tags associated with the credential. |
