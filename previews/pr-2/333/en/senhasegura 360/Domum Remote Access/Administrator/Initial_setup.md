# Initial setup

This article provides a guide to the initial settings for starting with **Domum Remote Access**.

## Requirements
<!-- Fix link -->
- **Domum Remote Access** [activated](/v3-33/docs/domum-license-activation).

## Step 1: Set up the e-mail account

For **Domum Remote Access** to send users an email with the access link, you must configure the senhasegura instance with a default SMTP sending account. If this account doesn't exist, you'll receive an error screen when you attempt to forward the access link.

<!-- Fix link -->
Access the article on [How to set up an email account](/v3-33/docs/administration-how-to-set-up-an-e-mail-account-for-notifications) for instructions on how to set up the default SMTP account.

## Step 2: Establish the parameters

Once you have set up the SMTP email account, you must establish the parameters for **Domum Remote Access** to work.

<!-- Fix link -->
Access the article on [How to set the parameters](/v3-33/docs/domum-reference-settings-parameters) for instructions on these settings.

## Step 3 (optional): Register an access reason

**Domum Remote Access** requires the administrator to register an access reason to grant access to internal users or third parties.

<!-- Fix link -->
Access the article on [How to add access reasons](/v3-33/docs/domum-how-to-add-access-reasons) for instructions on these settings.

## Step 4: Register an access group

**Domum Remote Access** works with acccess groups from different sources, depending on the type of user:

<!-- Fix link -->
- Internal users belong to PAM access groups. Access the [Limited access group](/v3-33/docs/domum-limited-access-group) article for instructions on creating these groups for internal users. You can skip this step if the internal users' PAM access group already exists.
- Third-party users belong to access groups created directly in the **Domum Remote Access** module. See the article [How to create access groups](/v3-33/docs/how-to-add-a-limited-access-group) for suppliers for instructions on creating these groups for third-party users.

## Step 5: Register users (only for third-party users)

<!-- Fix link -->
Once the supplier has been registered, you can register the service provider user related to that supplier. See the article on [How to register third-party users](/v3-33/docs/domum-third-party-users-home-screen) for instructions on how to do this.

For internal users, see the article on [How to register internal users](/v3-33/docs/domum-new-internal-users-group-add-update-form).

## Step 6: Break down settings by user group

After registering users in access groups and limiting the data they can act on, you need to detail the access settings for user groups. In addition to the specific needs of internal user groups and third-party users, this step aims to indicate possible restrictions on the origin of remote users' access.

<!-- Fix link -->
- For internal users, there is an option to automatically provide access to **Domum Remote Access** as soon as a new user is added to the group. To find out how to do this, see the article [How to create a group of internal users](/v3-33/docs/domum-dashboard-internal-users-groups) for detailed information.
- For third-party users, the creation of a new vendor registration works like a *"third-party user group"* and allows you to store important information about the company. Access the [Vendors add form](/v3-33/docs/domum-vendors-add-form) for more information about how to add vendors.

## Step 7: Grant access to users

The last step in sending the access link to users. Since Domum Remote Access can manage the access to internal users and to third-party users, every tupi of user have hiw own way to be granted with the first access.

<!-- Fix link -->
For internal users, access the [Grant the first access to internal users](/v3-33/docs/domum-grant-employee-first-access) for instructions. For thid-party users, access the [Grant first access for third-party users](/v3-33/docs/domum-grant-first-access-for-third-parties) for instructions.

## How to include a customized logo on your screens (optional)

**Domum Remote Access** allows the client's logo to be displayed on the **Domum** login screen and the third party's desktop.

<!-- Fix link -->
Access the [How to configure the logo in senhasegura](/v3-33/docs/how-to-configure-the-logo-in-senhasegura) article for instructions on adding a personalized logo.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
