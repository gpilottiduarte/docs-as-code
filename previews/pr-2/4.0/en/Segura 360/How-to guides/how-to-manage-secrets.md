# How to manage secrets

This document provides information on how to use **Segura DevOps Secret Manager (DSM)** to manage secrets. Providing step-by-step instructions on the main tasks, such as adding secrets, viewing and editing them, comparing different versions, rotating access keys and viewing error histories.

:::(error) (Alert)  
To view secrets, you need to be part of an access group that has permission to manage secrets, otherwise you will be able to register a secret, but you won't be able to view it in filters and dashboards.    
:::

## Register a secret

To register a secret, follow the steps below:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **DevOps Secret Manager**.  
2. In the side menu, select **Secret Management \> Secrets**.  
3. Click the **Add** button to add a new secret.

### Settings tab

1. **Name**: name of the secret for management within Segura.  
2. **Identity**: secret identifier. It's through this identifier that applications were able to find the file or variable that will be created.  
3. **Engine**: engine to be used. The default engine is **Generic**.  
4. **Environment**: secret's environment.  
5. **Status**: indicates if a secret is available for use by applications. By default it is marked as **Yes**.  
6. **Expiration date**: day and time when the secret will be automatically inactivated. 
7. **Tags**: user-defined for data segregation and internal filters.  
8. **Description**: description of secret's use.

### Cloud Credentials tab

:::(info) (Info)  
These credentials come from **Cloud IAM**.    
:::

1. Click the **Add** button to add a new cloud credential to secret.  
2. In the **Credentials** modal, select the cloud credentials that will be part of the secret and click **Add**.  
3. The credential will be added to the **Cloud Credentials** table and you will be able to view the credential information.  
4. Additionally you can modify the fields:  
   1. **Access Key ID.**  
   2. **Secret Access Key.**

### Credentials tab

:::(info) (Info)  
These credentials come from **PAM Core**.  
:::

1. Click the **Add** button to add a new cloud credential to secret.  
2. In the **Credentials** modal, select the cloud credentials that will be part of the secret and click **Add**.  
3. The credential will be added to the **Cloud Credentials** table and you will be able to view the credential information.  
4. Additionally you can modify the fields:  
   1. **Hostname**  
   2. **Username**  
   3. **Password.**  
   4. **IP**  
   5. **Additional information**  
   6. **Additional Authentication Fields.**

### Ephemeral Credentials tab

1. Click the **Add** button to add a new ephemeral credential to the secret.  
2. In the **Ephemeral credentials** modal, select the cloud credentials that will be part of the secret and click **Add**.

### Key/Value tab

1. Click the **Add** button to add a new key/value pair to the secret.  
2. By clicking on the **Add** button, two fields appear in the list below:  
   1. **Key**: fill in the value to the key name.  
   2. **Value**: fill in the value of the key.

### Auto renew tab

In this tab, you must stipulate a time for renewal of secrets to:

1. **Cloud Credentials**  
2. **Ephemeral Credentials**  
3. **Credentials**

You manage these time intervals through the parameters: **Enabled** and **Minutes between each renewal.**

With everything ready, click **Continue**.

### Important

* When the information expires, it's deleted. However, some information, such as access keys, cannot be retrieved.  
* Only users who are part of the **PAM Core** or **Cloud IA**M access group can add cloud credentials and credentials to register a secret.  
* **Cloud Credentials** are managed by the **Cloud IAM** module.  
* **Credentials** are managed by **PAM Core**.  
* The **Ephemeral credentials** are provisioned by Segura directly at the destination through **Dynamic Provisioning**. After credential rotation, the **DSM** won't delete the old information from **Cloud Credentials** and **Ephemeral Credentials**.

## View a secret

1. On Segura, in the navigation bar, hover over the **Products menu** and select **DevOps Secret Manager**.  
2. In the side menu, select **Secret Management \> Secrets**.  
3. In the listing, identify the secret you want to view and click the **Actions** button.  
4. Select **Details** to be directed to the **Secret** screen, containing the secret details.

## View versions of a secret

1. On Segura, in the navigation bar, hover over the **Products menu** and select **DevOps Secret Manager**.  
2. In the side menu, select **Secret Management \> Secrets**.  
3. In the listing, identify the secret you want to view and click the **Actions** button.  
4. Select **History** to be directed to the **Secret Version** screen.

In the **Secret Version** screen, you can view the following information about secret:

1. **Name**.  
2. **Engine**: engine do secret. The default engine is **Generic**.  
3. **Identity**: secret's identity.  
4. In the **Versions section**:  
   1. **Version**: secret's version number.  
   2. **Date**: date and time when this version of the secret was created.  
   3. **Actions**:  
      1. **Details**: opens the **Secrets** view form.  
      2. **Compare**: opens the **Version compare screen**.

## Edit a secret

1. On Segura, in the navigation bar, hover over the **Products menu** and select **DevOps Secret Manager**.  
2. In the side menu, select **Secret Management \> Secrets**.  
3. In the listing, identify the secret you want to view and click the **Actions** button. 
4. Select **Edit** to be directed to the **Secret Configuration** screen.  
5. In the **Secret configuration** screen, change the information you need to change and click **Save** following the same flow indicated for the **Secret registration**.

## Compare two versions of a secret

1. On Segura, in the navigation bar, hover over the **Products menu** and select **DevOps Secret Manager**.  
2. In the side menu, select **Secret Management \> Secrets**.  
3. In the listing, identify the secret you want to view and click the **Actions** button. 
4. Select **History** to be directed to the **Secret Version** screen.  
5. In the **Versions** section, in the **Actions** column, click the **Compare** button to be directed to the **Version compare** screen.  
6. In the **From** drop-down menu, select the initial version you want to use for comparison.  
7. In the **To** drop-down menu, select the version that will be compared to the version selected in **From**.  
   1. It isn't possible to compare a smaller version with a larger version, that is, the version number in **From** must always be greater than the version number in **To**.  
8. After selecting the versions to be compared, click **Compare**.

The changes will be shown according to the fields that have been changed. The visualization of the changes between the versions follows the pattern we have in the *DIFF* programs, with the inclusions being shown in green and the exclusions being shown in red.

## Change access keys for a secret

1. On Segura, in the navigation bar, hover over the **Products menu** and select **DevOps Secret Manager .**  
2. In the side menu, select **Secret** **Management \> Secrets**.  
3. In the listing, identify the secret you want to view and click the **Actions** button. 
4. Select **Rotate Access Keys** to change the secret access keys.

## View error history for a secret

You can view the error history of a secret by going to **Grid Menu \> DevOps Secret Manager \> Secret Management \> Secrets**.

To view the error history, select a secret from the list and, in the **Actions** column, click on the icon represented by the three vertical dots, and select the **View error history** option.

:::(warning) (Caution)  
The option to view the error history will be shown only when an error occurs in secret. 
:::