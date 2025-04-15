# How to add an access key authorization

This document provides a step-by-step guide on how to add a new access key authorization.

## Add an access key authorization

1. On Segura, in the upper-left corner, click the **Products menu**, and select **MySafe**.
2. In the side menu, select **Integrations > Access keys**.
3. In the upper-right corner, click **View actions**, represented by the three vertical dots icon.
4. In the drop-down menu, select **New**.
5. On the **New access key** window, complete the fields in five steps:
    1. In **Application**, fill in:
        1. **Name***: the name of the client application that will be using the authorization access key.
        2. **Description**: an optional description of the authorization access key.
        3. **Tags**: optional keywords associated with the authorization access key.
6. Click **Next**.
    1. In **Security**, fill in:
        1. **Encryption of sensitive data**: optionally check this box if you want the data to be encrypted.
        2. **Authorized IPs (use * to allow any IP)**:  click the **plus** icon to open the **Address** field and add the IP addresses allowed to use the access key authorization. Type the **asterisk** sign to allow any IP address. Click the **trash can** icon to remove the added IP address.
        3. **Authorized HTTP referers (by default any source is allowed)**: click the plus sign to open the Referer field and add the URLs allowed to use the access key authorization. Any source is allowed by default. Click the trash can icon to remove the added referers,
        4. **Certificate validation**: optionally inform a certificate fingerprint for an extra layer of protection.
7. Click **Next**.
    1. In **Data**, fill in:
        1. **Full access**: check this box if you want the applications to be able to retrieve all information that your user has access to.
          1. **Specify data**: in case you want to select specific data your user has access to, unselect the **Full access** check box. This action will display the **Specify Data** section, where you can search for information by entering keywords. Click the **trash can** icon to remove the added data
8. Click **Next**.
    1. In **Period optional**, fill in:
        1. **Expiration**: optionally select a date and time for the access key authorization to expire.
9. Click **Next**.
    1. **Review**: summary of the information entered in the previous steps.

:::(Info) (Info)
The items with an asterisk are mandatory.
:::

10. Click **Previous** to go back and change any information before saving.
11. Click **Save** to finish the register.

A pop-up window with the message **"API authorization successfully registered**” confirms the action. Below the message, you can click **View application authorization** to be directed to the **Application Authorization screen** which displays all the information about the access key authorization; or click **Close** to close the window.

To view the access key authorizations, go to **MySafe> Access keys**.


***

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).