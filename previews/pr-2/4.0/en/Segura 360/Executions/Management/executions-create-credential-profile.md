# How to create a credential profile

This article will guide you through the step-by-step process of creating a credential profile in the Executions module.

### Requirements

* To be an admin user.
***

## Create profile

1. At the Segura platform, in the top left corner, click **Grid Menu**, identified by the nine squares icon, and then select **Executions**.
2. On the side menu, select **Settings** > **Credential profiles**.
3. In the upper right corner, click the icon represented by the three vertical dots and click **+ New**.

### At the Credential execution profile pop-up window
Fill in the information on the three available tabs to create the profile.

#### Information tab

1. **Name***: profile’s name.
2. **Priority***: choose a number for the priority level.
3. **Enabled***: set to **Yes**.
4. **Immediate password change?***: set to **Yes** or **No**.
    :::(warning) (**Warning**)
    The immediate password change works exclusively for credentials created on the API module. Credentials created using other methods at Segura won’t be affected by this.
    :::
5. **Interval for first change (in minutes)**: choose a number representing the minutos for this change to happened.

#### Execution settings tab

1. In the **Credential password change settings** section.
    1. **Enable automatic change**: click the checkbox to enable.
        1. **Plugin**: choose among the options from the list.
        2. **Template**: choose among the options from the list.
2. In the **Credential status settings** section.
    1. **Manage account status**: click the checkbox to enable.
        1. **Plugin**: choose among the options from the list.
        2. **Activation template**: choose among the options from the list.
        3. **Plugin**: choose among the options from the list.
        4. **Disabling template**: choose among the options from the list.
3. In the **Authentication settings** section.
    1. **Use own password to connect**: click the checkbox to enable.
        1. **Authentication credential**: choose among the options from the list.
        2. **Credential username**: typer the credential username.

#### Criteria tab

1. At **Apply profile to the passwords**
    1. **Product (comma separated)**: type the product name.
    2. **Vendor***: choose the desired vendor or all.
    3. **Device type***: choose the desired device type or all.
    4. **Credential type***: choose the desired credential type or all.
2. Click **Save**.


After saving, the system will display a confirmation notice: **“Data saved successfully!”**. The profile will be listed at the **Credential execution profile** screen on the report.
The profiles you create are valid for both new and existing credentials, as long as they match the registered profile criteria.

### Next:
[Credential execution profile](/v4/docs/executions-credentials-profiles)

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target="_blank"}.