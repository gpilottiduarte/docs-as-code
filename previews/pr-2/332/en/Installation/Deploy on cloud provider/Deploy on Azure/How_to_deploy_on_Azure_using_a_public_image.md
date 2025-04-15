# How to deploy on Azure using a public image

In this article, you'll find instructions for deploying senhasegura on **Microsoft Azure** using a public image of the senhasegura application. 

## Requirements
To deploy using a public image, your **location** and one of the available **public images** must be compatible.

## Step 1: Select a public image


1. Log in to **Microsoft Azure**.
2. In the **Services** category, select **Community images**.
3. Use the search bar at the top left corner of the **Community images** page and enter “senseg” to filter the public images available. 
4. Choose from the publicly available images the one that suits your location:


| Location| Public gallery name |
| --- | --- |
| **Brazil South** | sensegimagesSA-9c5bef0f-8b5d-4afa-a4a8-45c17f969175 |
| **France Central** | sensegimagesEU-c1771718-1fa0-4039-aaf5-3488c4e51dfa |
| **UAE North**| sensegimgsUAE-1463cb64-66f4-41be-bd31-259174cd4410|
| **East US** | sensegimages-cae17fe1-e39a-4ce3-a11a-550e16499f4d |
| **West Europe** | sensegimgsWestEU-6c393531-1589-47cb-8f8e-83da2a8cf2d0|
::: (error) (Important)
If there is no suitable image available for your location, you’ll need to manually upload the application image. Please refer to the article [How to deploy on Azure by manually uploading the application image](/v3-32/docs/installation-how-to-deploy-on-azure-by-manually-uploading-the-application-image) for instructions.
:::

## Step 2: Create a Virtual Machine

1. After selecting the public image, click **Create VM**.
2. When creating a virtual machine, fill in the following fields as instructed below:
::: (error) (Important)

Don't change the settings in the **Management** and **Advanced** tabs.
:::

* In the **Basics** tab, set the **Select inbound ports** field to **HTTP 80** and **HTTPS 443**.
* In the **Basics** tab, set the **License type** field to **Other**.
* In the **Monitoring** tab, set **Boot diagnostics** to **Disable**. 
3. In the last step, ensure you have properly filled the fields listed in step 3 and haven’t changed the settings in the **Management** and **Advanced** tabs.
4. Click **Create**.
5. Wait for the confirmation message: **Your deployment is complete**.
6. After deployment confirmation, click **Go to resource**. 
7. On the virtual machine page, copy the **Public IP**.
8. Open your browser and paste the **Public IP** into the address bar.

By following these steps, the senhasegura activation screen will be displayed, and the deployment will be completed.

::: (Info) (Info)
If you encounter the **Internal Server Error** message, wait a few minutes and refresh the page.
 :::	
 
 

* * *


Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.



