Use dynamic provisioning profiles to create profiles with pre\-defined information and provision service accounts and credentials through API.

InfoApplications that require the creation of credentials and service accounts will obey the rules determined in the template.

---

## Create a dynamic provisioning profile

To add a dynamic provisioning profile, go to **Cloud IAM ➔ Cloud IAM ➔ Dynamic provisioning ➔ Profiles**, and follow the steps:

1. Click the Actions icon (), and select**Add profile**;
2. Select the **ac****count** on which you want to create the profile;
3. Enter the **Identifier***,*AtençãoThe **Identifie****r** must be unique. The system does not accept an identifier with a name that already exists.
4. Select the **providers** on which you want to create the profile.

### AWS

On the profile you want to create, go to the **AWS tab** and follow the steps:

1. Add until 10 **politics**;  
InfoThe 10 politics limit is defined by the AWS;
2. Define the **TTL** (time\-to\-live) to automatically delete the service accounts.

### Google Cloud

On the profile you want to create, go to the **Google Cloud tab** and follow the steps:

1. Select the **project** on which the service account must be created;
2. Select the roles that must be applied to the service account at the **Organization** level;
3. Select the roles that must be applied to the service account at the **Project** level;
4. Define the **TTL** (time\-to\-live) to automatically delete the service accounts.



---

## Enable dynamic provisioning profile

To enable a dynamic provisioning profile, navigate to **DevOps Secret Manager ➔ Applications ➔ Applications**and follow the steps;

1. On the report screen, select the application on which you want to enable the provisioning and click **Edit**;
2. On the **Automatic provisioning** tab, enable the automatic provisioning of secrets;
3. On the field **Cloud dynamic provisioning profile**, select the profile that must be used.InfoYou can select more than one profile.
4. Click **Save**.
