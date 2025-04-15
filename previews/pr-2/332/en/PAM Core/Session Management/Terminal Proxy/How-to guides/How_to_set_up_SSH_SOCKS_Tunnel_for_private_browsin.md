# How to set up SSH SOCKS Tunnel for private browsing

This document will guide you through a step-by-step process to create an encrypted SSH Tunnel and configure your web browser to use a SOCKS proxy.

You’re going to route your local network traffic with an encrypted SOCKS proxy tunnel, so all your applications using a proxy will connect to the SSH server and forward all the to its destination. This way, your ISP (internet service provider) and third parties won’t be able to inspect your traffic or block your website access.

### Requirements

* Server running any Linux, with SSH access to route your traffic through it.
* Use a Firefox or Google Chrome web browser.
* SSH client.

***
## Setting the SSH SOCKS Tunnel

On your local machine, you’ll create an SSH tunnel to secure forward traffic on port 9090 to the SSH server on port 22.

:::(info) (**info**)
You can use any port number greater than 1024. Only the root can open ports on privileged ports.
:::
### Linux and macOS users

1. Start an SSH session.
2. Type this command:
    1. `$ ssh -N -D 9090 [USER]@[SERVER_IP]`

Where `-N` is to tell SSH not to execute a remote command, `-D` 9090 will open a SOCKS tunnel on the specified port number, and `[USER]@[SERVER_IP]` is your remote SSH user and server IP address.

:::(info) (**Info**)
You can run the command in the background. Use the `-f` option for this.
:::

:::(warning) (**Warning**)
If your SSH server listens on a port different from 22 (the default), you must use the `-p [PORT_NUMBER]` option.
:::

Once you run the command, enter your user password. You’ll be logged into your server, and the SSH tunnel will be established.
***

### Windows users

1. Open the **PuTTY** application. You can download PuTTY [here](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html){target="_blank"}.
2. In the **Session** category, fill in the field:
    1. **Host Name (or IP address)**: enter your server IP address.
3. In the **Connection** > **SSH** > **Tunnels** category, fill in the fields:
    1. **Source port**: 9090.
    2. Check the option **Dynamic**.
    3. Click **Add**.
    4. The port number will be added in the **Forwarded ports** text box.
4. Back in the **Session** category, fill in:
    1. **Saved Session**: type a name for the created session.
    2. Click **Save**.
5. The new session will be displayed in the list.
6. Select the session from the list and click **Open**.
7. A terminal **PuTTY** window will appear. Type your **username** and **password**.

You’ll be logged into your server, and the SSH tunnel will start.
***

## Setting up your Browser
After configuring your SSH SOCKS tunnel, choose your preferred browser to configure.

### Firefox
The web browser configuration will be the same for any operating system (Linux, macOS, and Windows).

1. In the **Firefox** browser, in the upper right corner, click on the icon represented by the **hamburger**.
2. Select **General** on the menu.
3. Scroll down to the **Network Settings** and click the **Settings** button.
4. A **Connection Settings** window appears.
    1. Check the **Manual proxy configuration** option.
    2. In the **SOCKS Host** field, type 127.0.0.1 and 9090 in the **Port** field.
    3. Check the **SOCKS v5** option.
5. Click **OK** to save the settings.

Your Firefox browser is set, and you can browse the Internet through the SSH tunnel. Type “what is my IP” on Google to verify your server IP address.

To revert the configuration to the default settings, return to the **Network Settings**, choose the **Use system proxy settings** option, and click **OK**.
***

### Google Chrome
The Google Chrome browser uses the default system proxy settings. You can use an addon or start a Chrome web browser from the command line instead of changing your operating system proxy settings.

To launch Chrome using a new profile and your SSH tunnel, in a terminal application, type these command lines according to your operational system:

#### Linux:
```
/usr/bin/google-chrome \
    --user-data-dir="$HOME/proxy-profile" \
    --proxy-server="socks5://localhost:9090"
```

#### macOS:
```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
    --user-data-dir="$HOME/proxy-profile" \
    --proxy-server="socks5://localhost:9090"
```

#### Windows:
```
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" ^
    --user-data-dir="%USERPROFILE%\proxy-profile" ^
    --proxy-server="socks5://localhost:9090"
```

The new profile will be created automatically. This way, you can run multiple instances of Chrome at the same time, and you’ll be able to browse the Internet through the SSH tunnel. Type “what is my IP” on Google to verify your server IP address.

***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.