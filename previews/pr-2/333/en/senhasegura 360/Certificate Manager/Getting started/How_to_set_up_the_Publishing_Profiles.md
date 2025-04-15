# How to set up the Publishing Profiles

This article explains how to set up the **Publishing Profiles** feature. Registering these profiles is important to distribute certificates in a controlled and efficient way. These profiles establish rules and formats for selective disclosure of information while maintaining security and compliance.

The resulting standardization simplifies administration, minimizes errors, and preserves the integrity of public key systems. Also, when publishing a certificate and selecting a previously registered publication profile, several fields will be filled automatically, speeding up the process.

## Create a Publishing Profile

To create a publishing profile, follow these steps:

1. In the top left corner, click **Grid Menu**, identified by the nine squares icon, and then **Certificate Manager**.
2. On the side menu, select **Settings**, and then **Publishing Profiles**.
3. In the top right corner, click **View actions** (the three vertical dots icon).
4. Select **New**; this will open the **Publish profile** form.
5. In the **Profile name** field, enter the desired identification.
6. From the **Publishing plugin** drop-down menu, select the desired plugin. Different fields will be enabled in the **Configuration for plugin section** depending on the selected plugin. See how to fill in the specific fields in the [**Publishing plugins**](/v3-33/docs/publishing-plugins) article.

### Credential for execution section

1. Define which credential will be used to authenticate the devices.
    1. Check **Use a registered credential to access all devices** to enable the credentials.
    2. Select one **Access Credential registered in the system** from the drop-down menu.
<!-- Fix callout -->
:::(Warning) (Caution)

- If you want a username as a credential, fill in the **Credential username** field.
- The system will find this username in all registered devices to authenticate; therefore, the device must have a credential with the same username you typed.

:::

### Servers tab
<!-- Fix callout -->
:::(Warning) (Caution)
Ensure that the credential selected in the previous setting can connect to the chosen devices.
:::

1. Add the servers where the certificate should be published.
    1. Click the **plus sign** icon next to the word **Servers**.
    2. In the **Servers** window, locate the desired devices. Use the search fields or the scroll bar.
    3. Check the box on the left next to the username.
    4. Click **Add**.
2. Click **Save**.

On the **Publishing Profiles’** main page, you’ll see the profile you just created.

---

## Edit a Publishing Profile

To edit a publishing profile, follow these steps:

1. On the **Publishing Profiles'** main page, locate the profile you want. 
2. In the corresponding **Action** column, click **Edit** (the pencil icon).
3. Update the form.
4. Click **Save** to confirm the changes.

<!-- Fix callout -->
:::(Info) (Info)
The counterclockwise arrow icon in the top right corner refreshes the screen.
:::

---

## Deactivate a Publishing Profile

To deactivate a publishing profile, follow these steps:

1. On the **Publishing Profiles'** main page, locate the profile to deactivate. 
2. In the corresponding **Action** column, click on the three vertical dots icon.
3. Select **Disable**.
4. Click **Yes** to confirm.

The profile remains on the **Publishing Profiles’** main page because the **Enabled** search field is set to **All** by default.

If needed, change the field to **No** to view only the profiles deactivated. You can always activate them again by going to the **Action** column, clicking on the three vertical dots icon and selecting **Enable**.

---

## Search for a Publishing Profile

You can use the search fields to filter the information if there are many registered publishing profiles.
To locate the desired publishing profile, follow these steps:

1. On the **Publishing Profiles’** main page, search using the following fields:
    1. **ID**: the profile ID number in the system.
    2. **Profile name**: the name registered for the profile.
    3. **Profile type**: select a profile from the drop-down menu.
    4. **Enabled**:  the profile status in the system.
1. Click **Filter** to perform the search.
    1. Click **Clear** to erase the fields, if necessary.

<!-- Fix callout -->
:::(Info) (Info)
The magnifying glass icon in the top right corner displays or hides the search fields.
:::

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
