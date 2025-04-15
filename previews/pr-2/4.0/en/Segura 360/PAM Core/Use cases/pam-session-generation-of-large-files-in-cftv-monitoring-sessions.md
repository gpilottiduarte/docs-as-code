# Generation of large files in CFTV monitoring sessions

## Use case: Avoid generating large files in CFTV monitoring sessions

In this document, you’ll find the necessary recommendations to create a strategy for ensuring that files generated in CFTV monitoring sessions don’t exceed the size limit, thus filling `/var`.
Therefore, in these cases we recommend that sessions accessed only to monitor the cameras are not recorded.

### Solution
To prevent CFTV monitoring files from cluttering the `/var` directory, create segregated credentials without session recording for users who only monitor cameras, while recording only administrative sessions.

### Requirement

* Segura user.

---
Follow the steps below to create segregation correctly:

#### Step 1: Credential with CFTV device

* Create the credentials that will be associated with the CFTV device and will be used by Segura users.
* Create a credential that will be associated with the CFTV device but will be used for administrative purposes.

To learn how to create a credential, access the [How to configure a credential](/v4/docs/pam-how-to-set-up-a-credential-in-Segura) in Segura document.

#### Step 2: Create an access group to access and view CFTV device and credentials

* Create an access group with permission to access and view the device, containing all the credentials created in step 1.

To learn how to create Access Groups, access the [How to register an access group](/v4/docs/pam-session-how-to-add-an-access-group) document.

#### Step 3: Segregate by user credentials that only monitor camera images

* With the credentials created and inserted into the access group, create a segregated parameter for credentials and include all credentials that will only be used for monitoring.
* In this parameter, disable the **Enable session recording** option.

To learn how to create a segregated parameter for credentials, access the [How to create a new segregation for credentials](/v4/docs/pam-session-create-segregation-credentials) document.

Implementing this practice is essential so that disk space isn’t overloaded with recording sessions that are exclusively for monitoring the image of cameras that are already recorded by other means. Recording only the administrative session that will have the most comprehensive privileges and permissions.
