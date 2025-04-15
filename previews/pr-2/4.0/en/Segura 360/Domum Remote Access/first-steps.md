# How to configure Domum for the first time

This document provides information on how to setup **Domum Remote Access** for the first time.

## Prerequisites

- **Domum Remote Access** activated. More information in [License activation](/v4/docs/license-activation-1).

## Step 1: Set up the e-mail account

For **Domum Remote Access** to send users an email with the access link, you must configure the Segura instance with a default SMTP sending account. If this account doesn't exist, you'll receive an error screen when you attempt to forward the access link.

See the [How to manage SMTP settings](/v4/docs/how-to-manage-smtp-settings) document for instructions on how to set up the default SMTP account.

## Step 2: Establish the parameters

Once you have set up the SMTP email account, you must establish the parameters for **Domum Remote Access** to work.

See the [How to set the parameters](/v4/docs/domum-how-to-set-the-parameters) document for instructions on these settings.

## Step 3 (optional): Register an access reason

**Domum Remote Access** requires the administrator to register an access reason to grant access to internal users or third parties.

See the [How to add access reasons](/v4/docs/domum-how-to-add-access-reasons) document for instructions on these settings.

## Step 4: Register an access group

**Domum Remote Access** works with access groups from different sources, depending on the type of user:

- Internal users belong to PAM access groups. Access the [Access policies](/v4/docs/access-policies) document for instructions on creating these groups for internal users. You can skip this step if the internal users' PAM access group already exists.
- Third-party users belong to access groups created directly in the **Domum Remote Access** module. See the [How to add policies](/v4/docs/how-to-add-a-limited-access-group) document for suppliers for instructions on creating these groups for third-party users.

## Step 5: Register users

Once the supplier has been registered, you can register the service provider user related to that supplier. 

For third party users, see the [How to access Domum as a third party user](/v4/docs/domum-access-third) document for more information.

For internal users, see the [How to access Domum as an internal user](/v4/docs/domum-access-employee) document for more information.

## Step 6: Break down settings by user group

After registering users in access groups and limiting the data they can act on, you need to detail the access settings for user groups. In addition to the specific needs of internal user groups and third-party users, this step aims to indicate possible restrictions on the origin of remote users' access.

- For internal users, there is an option to automatically provide access to **Domum Remote Access** as soon as a new user is added to the group. See the [How to create a group of internal users](/v4/docs/pt/how-to-add-an-internal-user-group) document for detailed information.
- For third-party users, the creation of a new vendor registration works like a third-party user group and allows you to store important information about the company. See the [How to add a vendor](/v4/docs/pt/how-to-add-a-vendor) document for more information on how to add vendors.

## Step 7: Grant access to users

The last step in sending the access link to users. Since **Domum Remote Access** can manage the access to internal users and to third-party users, every type of user have its own way to be granted with the first access.

For internal users, see the [How to grant first access for internal users](/v4/docs/grant-the-first-access-to-internal-users) document for more information. For thid-party users, see the [How to grant first access for third-party users](/v4/docs/domum-grant-first-access-for-third-parties) document for more information.

## Step 8 (optional): Include a customized logo on your screen

**Domum Remote Access** allows the client's logo to be displayed on the **Domum** login screen and the third party's desktop.

See the [How to configure the logo in Segura](/v4/docs/how-to-configure-the-logo-in-senhasegura) document for instructions on how to add a personalized logo.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).