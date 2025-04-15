# How to set up an SSH key

In this document, you'll be presented with the necessary steps to remotely access a device in senhasegura using an SSH key via web proxy.

## Requirements

* Valid access credentials.  
* Have a user permission in senhasegura.  
* Belong to an access group that has permission to use credentials and devices that can make remote sessions.

## Initial SSH Key Configuration

To perform access through SSH keys on devices registered in senhasegura, you must first generate the SSH key for the credential. This SSH key must be generated on the target device - that is, the device that should be accessed with the SSH key through the senhasegura vault.

:::(info) (Info)   
You must have access to the terminal in Linux, macOS, or Windows. For Unix-based systems like Linux and macOS, no additional application needs to be installed. For Windows, you should use the application that best suits your daily use. In the examples, we will use Linux on Debian 11 distribution.   
:::

1. To generate a new SSH key, type: `ssh-keygen -t RSA -m PEM`.  
2. Then, copy the key so that the device recognizes it for login. To do this, type: `ssh-copy-id localhost`.  
   1. This command indicates that the key will be accepted for login. For each device you want to access via senhasegura, you need to repeat this command, replacing the localhost parameter according to the address of the server you want to access.

:::(error) (Alert)  
If the SSH key isn’t copied using the `ssh-copy-id` command, it won’t be possible to start a remote session.   
::: 

3\. Additionally, you need the values of your private key and public key (we will use the default parameters for key directories and names, if you modified them when creating the keys, use them accordingly).  
4\. Type `cat .ssh/id_rsa` and copy the values. This is your private key.  
5\. Type `cat .ssh/id_rsa.pub` and copy the values. This is your public key.

## Register SSH Key Credential in senhasegura

After creating the keys, you will need to create an SSH key credential. To do this, follow these steps:

1. In senhasegura, hover over the **Product Menu** and select **PAM Core**.  
2. In the side menu, select **SSH Keys \> SSH Keys**.  
3. In the SSH Keys report, click **Add**.  
4. In the **SSH Key Registration** form:  
   1. In the **Information** tab:  
      1. **Key Name**: identifier name for the SSH key.  
      2. **Status**: leave activated.  
   2. In the **Key Data** tab  
      1. **Username:** name of the user who created the key on the device.  
      2. **Set current password:** if you protected your SSH key with a password, activate this option and enter the SSH key password.  
      3. **Private Key:** paste the content of the private key you copied earlier.  
      4. **Public Key:** paste the content of the public key you copied earlier.  
   2. In the **Devices** tab:  
      1. **Main Device**: select, in the dropdown menu, the device where the private key was generated.  
      2. You now need to indicate the device where the public key is. This should be the same device where you performed the key copy with the `ssh-copy-id localhost` command. To add the device, click **Add** and, in the **Devices** modal, search for the device you used previously.  
   2. In the **Review** tab:  
      1. Click **Save**.

The **Session Settings** and **Key Renewal** tabs will not be used in this tutorial.

## Start a Remote Session Using an SSH Key

Having successfully completed the previous steps, you will now be able to start a remote session with your SSH key. To do this, follow these steps:

2. In senhasegura, hover over the **Product Menu** and select **PAM Core**.  
3. In the side menu, select **SSH Keys \> SSH Keys**.  
4. In the **SSH Keys** report, identify the SSH key you want to use.  
5. In **Actions**, select **Start a session with an SSH key**.  
   1. The listed devices will be all those you selected in step `c.ii` of the previous section.  
6. In the **SSH Keys: Remote Access** window, identify the device you want to access with the SSH key and click **Actions** and select **Start session**.

You’ll be connected to the device using the SSH key you registered.  