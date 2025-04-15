# How to set up the network and change the hostname

This guide provides step-by-step instructions for setting up the network and changing the hostname of your senhasegura application.

## Requirements

* You must have the senhasegura application image installed.

## How to set up the network and change the hostname

To set up the network and change the hostname of your senhasegura VM, follow these steps:

1. [Start a SSH session using senhasegura’s administrative user](/v3-32/docs/administration-ssh-access).

1. To change the default hostname of your senhasegura instance, run the following command replacing `<new_hostname>` with your desired hostname:
    ```Shell
    $ sudo orbit hostname <new_hostname>
    ```
    ::: (Error) (Caution)
     Modifying the hostname is essential for generating a valid application activation code.
    :::
    
1. Run the following command to set up the primary network interface:
    ```Shell
    $ sudo orbit network
    ```
1. You’ll be prompted to enter the following information:
    * **IP Address**: enter the desired IP address.
    * **Netmask**: enter the netmask address.
    * **Gateway**: enter the gateway address.

1. Ensure the details are entered correctly and type `Y`. Upon successful configuration, a confirmation message will be displayed, indicating a successful setup.
    ::: (info) (Info)
    If you need to set up additional network interfaces, run the command  `sudo orbit network interface configuration` and follow the prompts to configure any additional network interfaces as required.
    :::

1. Once you’ve completed the network interface configurations and changed the hostname, reboot the senhasegura instance:

    ```Shell
    $ sudo reboot
    ```

* * *

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.
