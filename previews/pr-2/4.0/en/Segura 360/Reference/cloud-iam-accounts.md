# Accounts

In this document, you'll find all the information about the **Accounts** page, which allows you to integrate your Cloud Service Providers (CSPs) with your Segura account.

## Path to access

1. On Segura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and then select **Cloud IAM**.
2. In the side menu, select **Settings** > **Accounts**.

---

## Top bar

| **Item** | **Description** |
| --- | --- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **Add account** | Represented by the plus icon, it opens the [Add account](#add-account-screen) screen that allows you to add CSPs to **Cloud IAM**. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the [Schedule reports](/v4/docs/en/general-information-how-to-issue-download-and-schedule-device-reports#scheduling-reports) form. |

## Search fields

| **Item** | **Description** |
| --- | --- |
| **ID** | Field that filters accounts by their identification code within Segura. |
| **Name** | Field that filters accounts by their name. |
| **Provider** | Select field that filters accounts by one of the three available providers. Available options are: **AWS**, **Google Cloud**, and **Azure**. |
| **Tags** | Field that filters accounts by their tags, which can be assigned when creating or editing an account. |
| **Registration date** | Opens a calendar for choosing the account’s registration date. This date will be the filter's start date. |
| **until** | Opens a calendar for choosing the account's registration date. This date will be the end date of the filter. |
| **Enabled** | Field that filters accounts by their activation status. Available options are Yes and No. |
| **Connectable** | Field that filters accounts by whether **Cloud IAM** is able to connect with the associated CSP. Available options are **Yes** and **No**. |

{{snippet.Cloud_IAM_Reprocess_EN}}

For **Azure** accounts, you must manually import Azure credentials in the actions bar.

### Add account screen

| **Item** | **Description** |
| --- | --- |
| **Name** | Field to assign a name to the account. |
| **Enabled** | Radio buttons to enable or disable the account. Available options are **Yes** and **No**. |

### Settings

:::(info) (Info)
One account can be associated with multiple CSPs.
:::

| **Item** | **Description** |
| --- | --- |
| **Providers** | Checkbox to select which providers will be connected to the account. |
| **Description** | Text field for the description of the account. |
| **Tags** | Tags associated with the account. |

### AWS

| **Item** | **Description** |
| --- | --- |
| **View JSON** | Button to open a modal with the policies required in JSON format. Compatible with AWS’s IAM Policy Editor. |
| **Access Key** | Field to add the access key created as a security credential for the IAM user with the associated policy. |
| **Secret Access Key** | Field to add the secret access key created as a security credential for the IAM user with the associated policy. |
| **Default Region** | Select field to choose the AWS account region. |

### Azure

| **Item** | **Description** |
| --- | --- |
| **Directory (tenant) ID** | Field to add the Azure application’s Tenant ID. |
| **Application (Client ID)** | Field to add the Azure application’s Client ID. |
| **Client secret value** | Field to add the Client secret created for the application. |
| **View required permissions** | Link to open a modal with the required permissions in AWS. |

### Google Cloud

| **Item** | **Description** |
| --- | --- |
| **File credentials** | Button to upload the GCP IAM service account credentials that have a role with the required permissions. |

The **IAM** section present in the **AWS** and **Azure** tabs contains two checkboxes:

- **IAM - Identity Access Management**: read-only
- **Update users’ password with console access**: if checked, this option triggers a password change once users with credentials registered in **Cloud IAM** log into the provider.