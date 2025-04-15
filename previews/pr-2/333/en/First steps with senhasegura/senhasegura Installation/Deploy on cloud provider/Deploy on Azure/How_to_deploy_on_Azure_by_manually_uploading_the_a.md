# How to deploy on Azure by manually uploading the application image

In this article, you'll find instructions for deploying senhasegura on **Microsoft Azure** by manually uploading the application image in `VHD` format.

## Requirements
To deploy on Azure, you must have the **senhasegura Virtual Appliance image in VHD format**. To download the `VHD` image, access the [Support Portal](https://suporte.senhasegura.com.br/en/support/login){target="_blank"}.

## Step 1: Create a Disk 


1. Log in to **Microsoft Azure**.
2. Use [Azure Storage Explorer](https://azure.microsoft.com/en-us/products/storage/storage-explorer/#overview){target="_blank"} to upload the senhasegura image in `VHD` format to your **Storage account**.
3. In the **Services** category, select **Disks**.
4. Click **+Create**.
5. When creating the **Disk**, fill in the following fields in the **Basics** tab as instructed below:


* **Source type**: select **Storage blob**.
* **Source blob**: select the `VHD` file you uploaded in step 2.
* **OS type**: select **Linux**.
* **VM generation**: select **Generation 1**.
* **VM architecture**: select **x64**.
* **Size**: select a size equal to or larger than the `VHD` file size.

::: (Info) (Info)
Other fields can be filled according to your needs.
 :::	

6. In the final step, ensure you have properly filled the fields listed in step 5 and click **Create**.
7. Wait for the confirmation message: **Your deployment is complete**.


## Step 2: Create a Virtual Machine

1. After creating the disk, click **Go to resource**.
2. On the resource page, click **Create VM**.
3. When creating a virtual machine, fill in the following fields as instructed below:

::: (error) (Important)

Don’t change the settings in the **Management** and **Advanced** tabs.
:::



* In the **Basics** tab, set the **Select inbound ports** field to **HTTP 80** and **HTTPS 443**.
* In the **Basics** tab, set the **License type** field to **Other**.
* In the **Monitoring** tab, set **Boot diagnostics** to **Disable**. 
4. In the last step, ensure you have properly filled the fields listed in step 3 and haven’t changed the settings in the **Management** and **Advanced** tabs.
5. Click **Create**.
6. Wait for the confirmation message: **Your deployment is complete**.
7. After deployment confirmation, click **Go to resource**. 
8. On the virtual machine page, copy the **Public IP**.
9. Open your browser and paste the **Public IP** into the address bar.


By following these steps, the senhasegura activation screen will be displayed, and the deployment will be completed.

::: (Info) (Info)
If you encounter the **Internal Server Error** message, wait a few minutes and refresh the page.
 :::	
 

* * *


Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).
