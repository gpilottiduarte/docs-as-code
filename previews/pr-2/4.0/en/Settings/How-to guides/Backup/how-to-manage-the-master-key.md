# How to manage the master key

In this document, you’ll find a step-by-step guide on how to configure the **Master Key** in Segura.

## **Requirements**

* Have a System Administrator role.

## **Define master key**

To define the master key, you should follow the steps below:

:::(info) (Info)
 This step is also called the Master Key Ceremony.
:::

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. On the side menu, select **Master key > Set master key**.
3. When you click on **Set master key** you'll be redirected to the **Set master key** screen.  
4. In this window, fill in the following fields:  
   1. **Number of parts to Restore**: indicates the number of parts needed to recover the master key.  
      1. The minimum number of parts is 2, and the maximum is 10\.  
   2. **Guardians**: from the drop-down menu, select the user who should be one of the guardians of the **Master Key**.  
      1. To add more **Guardian** users, click on the **Add** button and select the users from the dropdown menu.  
          :::(info) (Info)  
          A recommended practice is to select between two and three times more guardians than key parts.  
         :::  
5. Click on **Generate New Key.**

:::(warning) (Attention)  
The electronic vault's master key is used to encrypt backup files created by the application. These files are encrypted using the AES algorithm with a 256-bit key and can be decrypted using the AESCrypt application.  
:::

## **Set a new master key**

You have two ways to perform this:

### Method 1:

If necessary, you can redefine the **Master Key**. To redefine the **Master Key**, you have two paths:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. On the side menu, select **Master key > Ceremony details**.
3. In the **Master key ceremony** report, click on **Set new master key** and follow the instructions as same as in the previous section.

###  Method 2:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. On the side menu, select **Master key > Set master key**.

In both cases, the **Master key definition** screen will open. When you define a new master key, however, you have an additional session in this window. To redefine the master key, follow the steps below:

1. In the **Current key** session:  
   3. **Key mode** select whether you want to use **Parts** or **Complete Key** for your **Master Key**. In this case, the **Master Key** field is locked.  
   4. **Complete Key**: if you choose the **Complete Key** option, you must fill in the **Master Key** field with the master key's value. In this case, the **Key Parts** field is locked.  
      :::(info) (Info)  
      To access the complete key, you must join the key parts at [https://breakglass.Segura.com/](https://breakglass.Segura.com/). For more information, see the Restore master key section at the end of this document.  
      :::  
   5. **Parts of key (one per line)**: if you choose the **Parts** option, you must fill in, in this field, which are the parts that make up the **Master Key**. Each part should be placed on a separate line. In this case, the **Master Key** field is locked.  
2. In the **New key** session you can follow the same instructions on the previous session of this document.  
3. Click on **Generate New Key.**

### **Information about the Guardian user**

* These users will be informed by *email, notification,* or *SMS* that they have been chosen to guard one of the key parts, so it’s important that the selected **Guardians** have at least their emails registered in the system.  
* The user cannot be the guardian of more than one part of the key.

## **Monitor the progress of the master key ceremony**

It is possible to monitor the progress of the **Master Key Ceremony**. To do this, follow the steps below:

:::(info) (Info)  
To finalize the **Master Key Ceremony** process, the guardian user must view and/or download the `.pdf` file containing the master key.  
:::

1. Access the report through the side menu: **Settings \> Master key \> Ceremony details.**  
2. In the **Master key ceremony** report, you can follow the process.  
3. The fields are:  
   1. **Name**: indicates the name of the user, as registered in Segura.  
   2. **Phone**: indicates the user's phone, as registered in Segura.  
   3. **Email**: indicates the user's email address.  
      1. It is important that the user has an email registered in Segura to receive the guardian notification.  
   4. **Ceremony**: indicates the state of the master key ceremony. It can assume the values **Pending** or **Finished**.  
   5. **User status**: indicates the user's status within Segura. It can assume the values **Enabled** or **Disabled**.  
   6. **Last login**: indicates the date and time of the user's last login. It is displayed in the format `DD/MM/YYYY HH:MM:SS.`  
   7. **Last part view**: indicates the date and time of the user's last view in relation to the key part they are guardian of. It is displayed in the format `DD/MM/YYYY HH:MM:SS.`  
   8. **Last part download**: indicates the date and time of the last download made by the user of the key part they are guardian of. It is displayed in the format `DD/MM/YYYY HH:MM:SS.`  
4. On the left side of the report, you find information about the master key ceremony. The information is:  
   1. **Status**: indicates the overall status of the ceremony. The status is only completed when all guardian users have viewed and/or downloaded their part of the master key. It can assume the values **Pending** or **Finished**.  
   2. **Parts to restore**: indicates how many parts are needed for the restoration of the master key.  
   3. **Start**: indicates the date and time of the start of the master key ceremony.  
   4. **End**: indicates the date and time of the end of the master key ceremony. If it has not yet been completed, the field will show only `--`.  
   5. **Set new master key:** link to define a new master key. Opens the **Master key definition** window to restart the process.

## **View master key parts**

Each guardian should access their account in Segura to view their part. If a guardian happens to have an inactive status, the system will report it as an incident via **Orbit Web** and *SYSLOG*, displaying an alert message about the guardian's inactive status and suggesting that the master key ceremony procedure be redone.

:::(info) (Info)  
By default, to view a part of the **Master Key**, the **Guardian** user must have MFA authentication configured. To turn off this requirement, go to **Products menu \> Settings \> System Parameters \> Global \> Application** and, in the **Master key ceremony** section, select **No** for the option **MFA mandatory to Master key ceremony?**.  
:::

:::(warning) (Attention)  
Disabling MFA authentication for viewing the master key reduces the security of your vault.  
:::

To view a key, as a **Guardian** user, follow the steps below:

1. On Segura, hover over the **Personal Menu** and select **Master Key**.  
2. In the Master Key window, you have the following fields:  
   1. **Name**: indicates the part of the key that the user is a guardian of. It’s informed according to the pattern `Key part number 1`.  
   2. **Generation**: indicates the date the part was generated. It is presented in the format `DD/MM/YYYY HH:MM:SS`.  
   3. **View**: indicates the date and time the query was made. It is presented in the format `DD/MM/YYYY HH:MM:SS`.  
3. Below the informative fields, there are three buttons:  
   1. **View part:** displays the part of which the user is a guardian.  
      1. When clicking on **View part**, the **Password visualization** modal is opened. To view the part, slide the **Contrast** control located at the bottom of the modal.  
   2. **Copy part:** copies the part in question to the clipboard.  
   3. **Download file**: download the file, in `.pdf` format, containing the key part.

## **Restore master key**

Once the Master Key Ceremony is finished, it is possible to perform the restoration process. To do this, follow the steps below:

1. Gather the guardians and access the [Combine secret](https://breakglass.Segura.com/) link.  
2. In the **Parts of key** text field, enter the key parts, obeying the order.

The key parts should be entered as in the example:

```
1-dbfcc9e0fef3542c6fe5494aerr284h 
2-dbfcc9e0fef3542c6fe5494ae45284g
```

3. In the **Total number of parts** field, indicate the total number of parts that key has.  
4. In the **Number of parts to Restore** field, indicate the number of parts needed to restore the master key.  
5. Click on **Recover Key** to restore the master key.

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).