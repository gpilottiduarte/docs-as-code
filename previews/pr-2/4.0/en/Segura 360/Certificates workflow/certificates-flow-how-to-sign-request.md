# How to sign a request

The signature of a request ensures the authenticity and integrity of the data, verifying its origin and preventing changes during transmission. 

This article explains how to sign a request.

## Requirements
* A listed request on the **Requests'** main page.

## Sign a request

To sign a request, follow these steps:

1. In the top left corner, click **Grid Menu**, identified by the nine squares icon, and then select **Certificate Manager**.
2. On the side menu, select **Certificates** and then **Requests**.
3. Locate the request you want to sign.
4. In the corresponding **Action** column, click on the three vertical dots icon.
5. Select **Request signature**; this will open the **New request signature** form.
6. In the **General** tab, enter the information:
    1. For **Self-signed?**, check **Yes** only if you trust the device that will perform the signature.
    2. From the **Choose CA** drop-down, select the authority that will perform the signature. This field will enable only after checking **No** for 'self-signed'.
     :::(Info) (Info)
    **Self-signed:** it’s recommended for devices that communicate only with others located on internal networks. In other words, known devices that recognize and validate each other's signatures as valid because they trust each other's authenticity.
    **Signed by a CA:** it’s recommended for devices that communicate with others outside their network. Since there’s no established trust relationship between the devices, they both trust the signature of a known authority that confirm the devices' identity.
    :::
    3. In **Justification**, explain why you want to sign the request.
    4. From the **Reason** drop-down, select one of the registered reasons.
    5. In **Governance code**, type a code to help with the internal organization/location of the request. 
:::(Info) (Info)
If you choose **Microsoft's authority** for the signature, a second tab called **Signature template** will appear. Select the desired template to complete the process. 
:::
7. Click **Save**.

On the **Requests'** main page, the request will change its status to 'Signed'.
***
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).



