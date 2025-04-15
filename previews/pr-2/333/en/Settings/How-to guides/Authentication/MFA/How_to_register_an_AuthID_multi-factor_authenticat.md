# How to register an AuthID multi-factor authentication provider

senhasegura allows integrating AuthID as a multi-factor authentication provider.

## Requirements

* Having the role of System Administrator.

## Register an AuthID type MFA provider

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Authentication \> Multi-factor authentication \> Providers**.  
3. In the **Multi-factor authentication** report, on the top bar, click **View actions**, represented by three vertical dots icon, and select **New**.  
4. In the **Select provider** window, choose **AuthID**.  
5. In the **Provider Registration** window, fill in the fields:  
   1. **Name**: identifying name for the AuthID provider.  
   2. **Enabled**: indicates whether the provider is active or inactive. Select **Yes**.  
   3. **External ID**: unique external identifier provided by AuthID for this specific provider.  
   4. **API Key Value**: API key provided by AuthID to authenticate requests from this provider.  
6. Click **Save**.

## Edit an AuthID provider

1. To modify a previously registered device, access the **Multi-factor authentication** report and, in the **Action** column, click on **Edit**, represented by the pencil and paper icon.  
2. The **Provider Registration** window will open in edit mode. Make the necessary changes and click **Save**.

## Disable an AuthID provider

1. To disable a previously registered device, access the **Multi-factor authentication** report and, in the **Action** column, click **Edit**, represented by the pencil and paper icon.  
2. The **Provider Registration** window will open in edit mode.  
3. In the **Enabled** field, select **No**.  
4. Click **Save**.

## Activate an AuthID provider

1. To activate a previously registered device that is currently inactive, access the **Multi-factor Authentication** report.  
2. In the filter bar, select **No** from the **Enabled** drop-down menu and click **Filter**.  
3. In the **Action** column, click on **Edit**, represented by the pencil and paper icon.  
4. The **Provider Registration** window will open in edit mode.  
5. In the **Enabled** field, select **Yes**.  
6. Click **Save**.

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).