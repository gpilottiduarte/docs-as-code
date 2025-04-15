# How to deploy senhasegura on Google Cloud Platform

In this article, you’ll learn how to deploy senhasegura on Google Cloud Platform (GCP). 

## Requirements

The following firewall ports must be open:


* 80 (HTTP).
* 443 (HTTPS).
* 59022 (SSH).
* 22 (Proxy SSH).
* 3389 (Proxy RDP).


## How to deploy senhasegura on GCP
To deploy senhasegura on GCP, follow these steps:

### Step 1: Create a disk image

1. On GCP, access **Cloud Storage > Create Bucket** and click **Create Bucket**. This step isn’t necessary if you already have a Cloud Bucket.
2. Upload the  `.tar.gz` file in **Cloud Storage > Upload File**.
3. Access **Compute Engine > Storage > Images** and click **Create Image**.
4. Enter the **Image Name**.
5. Choose **Cloud Storage File** as the source.
6. Select the `.tar.gz` file you uploaded in step 2.
7. Click **Create** and wait until the process is completed. 
8. The disk image will be displayed in the Images list.


### Step 2: Create a new instance

1. Access **Compute Engine > VM Instances** and click **Create Instance**.
2. Under **Boot Disk**, select **Custom Image**.
3. Select the image created in **Step 1**.
4. Configure VM parameters and policies according to your organization’s needs.

After creation, the VM will be displayed in the **Instance listing**.