# How to create and manage encryption keys

This tutorial is a step-by-step guide on creating and managing encryption keys in the **DevOps Secret Manager** of senhasegura.

## Requirements
- You must have the necessary permissions in the role to which it is associated.

## How to Create Encryption Keys
1. On the senhasegura platform, click the **Grid Menu** in the top left corner, represented by the nine squares, and select **DevOps Secret Manager**.
2. On the side menu, select **Encryption > Encryption Key**.
3. Click on the icon **View Actions**, represented by the three vertical dots, and click **+ New**.
4. Clicking this action will open a pop-up window named **Encryption Key Configuration**, and you need to fill in the following fields:
    - **Name***: name of the cryptographic key.
    - **Encryption algorithm***: choose the encryption algorithm.
    - **Expiration date**: key expiration date and time.
    - **Active**: choose between Yes or No.
    - **Description**: description associated with the key.
   

5. With each key update, the version field will also be updated; the version history can be accessed through the **Show versions** button within the three vertical dots icon in the **Action** column.
6. Click on **Save** to complete the process.

## How to View Encryption Keys
1. In the **Action** column, click on **Details**, identified by the magnifying glass icon, to open a pop-up window.
2. In the open pop-up window, you can view the fields **Name**, **Version**, **Encryption** **algorithm**, **Expiration date**, **Active**, and **Description**.
:::(Info) (Info)
  With each key update, the version field will also be updated; the version statement can be accessed through the button **Show versions** inside the three vertical dots icon in the column Action.
:::
 ## How to Encrypt Data
1. In the **Action** column, click on **Operate** identified by the gear icon to open a pop-up window.
    1. In the open pop-up window, you can view the fields **Encryption key**, **Version**, **Encryption algorithm**, **Description**, **Security level**, and **Common use case**, insert the value to be encrypted through the field **Value to be encrypted**, and view the encrypted value through the field **Encrypted value**.
2. Enter the value that should be encrypted in the **Value to encrypt** field.
3. Click on the **Encrypt** button.
4. The field **Encrypted value** will display the encrypted value.

In the menu **Events > Audit Tracking**, it’s possible to check the logs for each encryption attempt.

## How to decrypt data
:::(Info) (Info)
The key must contain the same encryption algorithm for decryption to be performed.
:::

1. In the **Action** column, click on **Operate** identified by the gear icon to open a pop-up window.
    1. In the open pop-up window, you can view the fields **Encryption key**, **Version**, **Encryption algorithm**, **Description**, **Security level**, and **Common use case**.
2. Click on the **Decrypt sensitive data**button.
3. Enter the value that should be decrypted  in the **Value to decrypt** field.
4. Click on the **Decrypt** button.
5. The field **Decrypted value** will display the encrypted value.