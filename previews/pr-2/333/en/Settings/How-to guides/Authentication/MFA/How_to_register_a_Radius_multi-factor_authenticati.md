# How to register a Radius multi-factor authentication provider

senhasegura allows integrating Radius as a multi-factor authentication provider.

## Requirements

* Having the System Administrator role.

## Register a Radius MFA provider

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by nine squares, and select **Settings**.  
2. In the side menu, select **Authentication \> Multi-factor authentication \> Providers**.  
3. In the **Multi-factor authentication** report, in the top bar, click on **View actions**, represented by the three vertical dots icon, and select **New**.  
4. In the **Select the provider** window, choose **Radius**.  
5. In the **Provider Registration** window, fill in the fields:  
   1. **Name**: identifier name for the Radius provider.  
   2. **Enabled**: indicates if the provider is active or inactive. Select **Yes**.  
   3. **Hostname**: hostname or IP where the Radius server is configured.  
   4. **Port**: port where the server is accessible.  
   5. **Key**: Radius server key.  
   6. **Timeout (s)**: waiting time, in seconds, to be considered a timeout.  
6. Click **Save**.

## Edit a Radius provider

1. To modify a previously registered provider, access the **Multi-factor Authentication Providers** report and, in the **Action** column, click on **Edit**, represented by the pencil and paper icon.  
2. The **Provider Registration** window will open in edit mode.  
3. Make the necessary changes and click **Save**.

## Deactivate a Radius provider

1. To deactivate a previously registered provider, access the **Multi-factor authentication** report and, in the **Action** column, click on **Edit**, represented by the pencil and paper icon.  
2. The **Provider Registration** window will open in edit mode.  
3. In the **Enabled** field, select **No**.  
4. Click **Save**.

## Activate a Radius provider

1. To activate a previously registered provider that is currently inactive, access the **Multi-factor authentication** report.  
2. In the filter bar, select **No** in the **Enabled** dropdown menu and click on **Filter**.  
3. In the **Action** column, click on **Edit**, represented by the pencil and paper icon.  
4. The **Provider Registration** window will open in edit mode.  
5. In the **Enabled** field, select **Yes**.  
6. Click **Save**.

---

Do you still have questions? Reach out to the [senhasegura Community.](https://community.senhasegura.io/)