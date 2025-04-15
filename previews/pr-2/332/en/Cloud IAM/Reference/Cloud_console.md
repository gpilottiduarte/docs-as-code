The Cloud IAM Remote Access allows users to start remote sessions in cloud environments in a safe and controlled way. 

NoteThe Cloud IAM records all remote sessions. To view the session video recordings, go to **PAM Core ➔ Access Control ➔ Remote Sessions**NoteThe Cloud IAM Remote access is only available to AWS consoles. 

---

## Cloud console

Use the Cloud console feature to start sessions remotely in AWS using a username and password.

### Requirements

To use Cloud IAM Cloud console, you must meet the following requirements:

* [Create a user in the senhasegura platform](https://docs.senhasegura.io/v3-32/docs/user-management-add-system-administrator)NoteThe senhasegura user must have a registered e\-mail;
* [Add a user in AWS through Cloud IAM](https://docs.senhasegura.io/v3-32/docs/cloud-iam-add-user);ImportantUsers imported from AWS can not perform remote access.
* The user must be in an [Access group](https://docs.senhasegura.io/v3-32/docs/cloud-iam-add-access-group) with permission **Users can start sessions** enabled.

### Access the AWS console

To access AWS  through the Cloud console, follow the steps:

1. Navigate to **Cloud IAM ➔ Remote access ➔ Cloud console**;
2. Select a user, and click the **Start session** icon in the **Action** column.



---

## Just in Time (JIT) Access

Use the JIT access to start sessions remotely in AWS using a**Role** for a predefined **D****uration**.

NoteWhen the predefined duration of the JIT Access expires, the user is automatically disconnected.### Requirements

To use Cloud IAM JIT access, you must meet the following requirements: 

* [Create a user in the senhasegura platform](https://docs.senhasegura.io/v3-32/docs/user-management-add-system-administrator);Note The senhasegura user must have a registered e\-mail.
* [Add a user in AWS through Cloud IAM](https://docs.senhasegura.io/v3-32/docs/cloud-iam-add-user);ImportantUsers imported from AWS can not perform JIT access.
* The Cloud IAM user must have a [Credential](https://docs.senhasegura.io/v3-32/docs/cloud-iam-add-credentials);
* The user must be in an [Access group](https://docs.senhasegura.io/v3-32/docs/cloud-iam-add-access-group) with permission **Users can start JIT sessions** enabled.
* In your AWS console, create the **Role** that the user will assume and add the user's**ARN** to the **Trust relationship of the role**. For more information, go to [Edit an existing role's trust relationship](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/edit_trust.html).ImportantWhen adding the user's ARN to the Trust relationship of the role, set the**Effect** parameter to **Allow** and the**Action** parameter to **Assume role**.

### Configure JIT Access

NoteTo JIT access your AWS console, you must configure the JIT Access in the Cloud IAM module.

To configure JIT Access, follow the steps:

1. Navigate to **Cloud IAM ➔ Settings➔ JIT Access**;
2. Click the **Actions (⁝)** icon and select **New**;
3. Select an **Account**;
4. Select **Yes** for **Enabled**;
5. On the **Information** tab, add a **Description**;
6. On the **AWS**tab:
	1. Select **Yes** for **JIT Enabled**.
	2. Define the session **D****uration** in seconds.NoteThe minimum duration of the JIT Access session is 900 seconds.
	3. Define which **Roles** the users of this account can assume.
7. Click **Save**.

### Access AWS with JIT

To JIT Access your AWS cloud console, follow the steps: 

1. Navigate to **Cloud IAM ➔ Remote access➔ JIT Access**;
2. Select a user, and in the**Action** column, click the **Start session** icon;
3. Select the **Role** you want to assume.

  


