# How to connect an AWS account

In this article, you'll learn how to connect **Cloud Entitlements** to your Amazon Web Services (AWS) accounts.

## Requirement

The user access key must have the `IAMReadOnlyAccess` policy attached.

---

## Connect an AWS account

To connect your AWS account to **Cloud Entitlements**, follow these steps:

1. Go to **Cloud Entitlements** left menu.
2. Click **Cloud setup** to open a dropdown menu.
3. Select **Amazon Web Services**.
4. On the upper-right corner, click **+ Connect**.
5. Select the option **Project**.
6. Enter a **Name** to identify your AWS account within Cloud Entitlements.
7. Enter your AWS account's **Access Key**.
8. Enter your AWS account's **Secret Access Key**.
9. If needed, attribute tags to the account. Separate each tag by pressing the **Enter** key.
10. Click the **Connect** button.

If connected successfully, your AWS account appears in the list of connected accounts.

:::(Error) (Important)
In case of unsuccessful connection, review the access key and the attached policy. Note that you can't use a user access key from an account that is already connected to **Cloud Entitlements**.
:::

To make any necessary changes, click the **Actions** button, represented by three vertical dots, and click **Edit**.

Additionally, you can activate or deactivate the account by turning the **Status switch** on or off.