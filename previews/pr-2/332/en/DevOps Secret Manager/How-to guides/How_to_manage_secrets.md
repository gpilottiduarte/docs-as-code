# How to manage secrets

## Register a secret

To register a secret, follow the steps below:

1. On senhasegura, in the upper left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Secret Management > Secrets**.
3. In the top bar, click the **Show actions** button, represented by the three vertical dots, and select **+New secret** from the drop-down menu.

In the **Secret Configuration** window, fill in the details of your secret according to the instructions below:

### In the Settings tab:

1. **Name**: name of the secret for management within senhasegura.
2. **Identity**: identifier of the secret. The applications can find the file or variable that will be created through this identifier.
3. **Enabled**: indicates whether the secret is available for application use. By default, it is set to **Yes**.
4. **Environment**: secret environment.
5. **Engine**: engine to be used. The default engine is Generic.
6. **Expiration** date: date on which the secret will be automatically inactivated.
7. **Tags**: user-defined for data segregation and internal filters.
8. **Description**: description of the secret's use.

### In the Cloud credentials tab:

1. Click the button, represented by the plus icon next to the word **Credentials**, to add a cloud credential.
2. In the **Credentials** modal, select the cloud credentials that will be part of the secret and click **Add**.

:::(info) (Info)
These credentials come from Cloud IAM.
:::

### In the Credentials tab:

1. Click the button, represented by the plus icon, next to the word **Credentials**, to add a credential.
2. In the **Credentials** modal, select the credentials that will be part of the secret and click Add.

:::(info) (Info)
These credentials come from PAM Core.
:::

### In the Ephemeral credentials tab:

1. Click the button, represented by the plus icon next to the word **Credentials**, to add an ephemeral credential.
2. In the **Ephemeral credentials** modal, select the ephemeral credentials that will be part of the secret and click **Add**.

### In the Key/Value tab:

1. Click the button, represented by the plus icon next to the words **Key/Value**, to add a key/value pair.
2. When you click the plus button, two fields appear in the list below:
   1. **Key**: fill in the value of the key name.
   2. **Value**: fill in the value of the key.

### In the Auto-renewal tab:

Here, you must stipulate a secret renewal time for:
1. **Cloud credentials.**
2. **Ephemeral credentials.**
3. **Credentials.**

You manage these time intervals using the **Active and Renew every X minutes** parameters.

When you're ready, click **Save**.

#### Important

* When the information expires, it's deleted. However, some information, such as access keys, can no longer be recovered.
* Only PAM Core or Cloud IAM access group users can add cloud credentials and credentials for registering a secret.
* The Cloud IAM module manages cloud credentials.
* PAM Core manages credentials.
* **Ephemeral Credentials** are provisioned by senhasegura directly at the destination via **Dynamic provisioning**. Once the credential has been rotated, the **DSM** won't delete the old **Cloud credentials** and **Ephemeral Credentials** information.

## View a secret

1. On senhasegura, in the upper left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Secret Management > Secrets**.
3. In the list, identify the secret you want to view and, in the **Action** column, click on the icon represented by the three vertical dots and select **Details** from the drop-down menu.

On the **Secret** window, you can view all the information about the secret.

## View the versions of a secret

1. On senhasegura, in the upper left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager.**
2. In the side menu, select **Secret Management > Secrets.**
3. In the list, identify the secret you want to view and, in the **Action** column, click on the icon represented by the three vertical dots and select **Show versions** from the drop-down menu.

In the **Secret** history window, you can view the information and versions of the secret using the following fields:

1. **Name**: name of the secret.
2. **Engine**: engine of the secret. The default engine is **Generic**.
3. **Identity**: identity of the secret.
4. In the **Versions** section:
   1. **Version**: version number of the secret.
   2. **Date**: date and time when this secret version was created.
   3. **Actions**:
      1. **View**: represented by the magnifying glass icon, opens the secret viewing form.
      2. **Compare**: represented by the two arrows in opposite directions icon, opens the Version compare window.

## Update a secret

1. On senhasegura, in the upper left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Secret Management > Secrets**.
3. In the list, identify the secret you want to view and, in the **Action** column, select **Update**, represented by the pencil and paper icon.
4. In the **Secret Configuration** window, change the information you need to change and click **Save**.

:::(info) (Info)
The form for editing secrets is the same as for registering secrets.
:::

## Compare two versions of a secret

1. On senhasegura, in the upper left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Secret Management > Secrets**.
3. In the list, identify the secret you want to view and, in the **Action** column, click on the icon represented by the three vertical dots and select **Show versions** from the drop-down menu.
4. In the **Secret history** window, click on Compare, represented by the two arrows in opposite directions icon to open the version comparison window.

### In the Version compare window:

1. In the **From** drop-down menu, select the initial version you want to use for comparison.
2. In the **To** drop-down menu, select the version that will be compared with the selected version in **From**.
3. You can’t compare a smaller version with a larger version. The version number in **From** menu must always be greater than in **To** menu.
4. Once you have selected the versions to compare, click on **Compare**.

The changes will be shown according to the fields that have been altered. The display of changes between versions follows the pattern in *DIFF* programs, with additions in green and deletions in red.

## Change a secret's access keys

1. On senhasegura, in the upper left corner, click **Grid Menu**, represented by the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Secret Management > Secrets**.
3. In the list, identify the secret you want to view and, in the **Action** column, click on the icon represented by the three vertical dots and select **Rotate access keys** from the drop-down menu.

A pop-up window will indicate that rotating the access keys for that secret is underway. The process is done automatically.

## View a secret's error history

You can view the error history of a secret by going to **Grid Menu > DevOps Secret Manager > Secret Management > Secrets**.

To view the error history, select a secret from the list and, in the **Action** column, click on the icon represented by the three vertical dots and select the View error history option.

:::(warning) (Caution)
* The option to view the error history will only be shown if an error has occurred in the secret.
* To view secrets, you need to be part of an access group with permission to manage secrets; otherwise, you can register a secret but won't see it in the filters and dashboards.
:::

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).