# How to create a new segregation for device

This document will guide you through a step-by-step process on how to create a new segregated parameter for devices in a remote session.

### Requirements
Previously created a global remote session setting. To know how to do this, access the [How to configure a remote session](/v3-33/docs/pam-session-configure-remote-session-proxy) document.
***
## Create a new parameter

When you create a new segregation for groups, you may select between **System default**, which responds to configurations made in a global parametrization, and **Yes** or **No**, which will override the global parametrization. This will affect only the devices included in the new segregated parameter created.

1. On senhasegura, in the upper left corner, click **Grid Menu**, identified by the nine squares icon, and then select **Settings**.
2. In the side menu, select **System parameters** >  **Segregated parameters**.
3. In the upper right corner, click on the three vertical dots icon.
4. From the dropdown menu, select **New segregation for device**.
5. At the **Device segregated parameters** window, fill in the mandatory fields identified with the asterisk:
    1. **Name***: type the parameter’s name.
    2. **Status***: it’s set to Enabled by default.
6. At the **Remote session** tab, complete the mandatory fields, identified with the asterisk:
    :::(info) (**Info**)
    To understand the meaning of each parameter, access the [System parameters - Remote session](/v3-33/docs/pam-session-proxy-settings) article.
    :::
    :::(warning) (**Warning**)
    All fields are set to System default. However, you can customize your session according to your needs.
    :::
    1. Enable file transfer for download?*.
    2. Enable file transfer for upload?*
        :::(error) (**Important**)
        The **Enable file transfer** parameter underwent a beta update and was divided into two parameters: **Enable file transfer for download** and **Enable file transfer for upload**. Currently, If you select **Yes** for either of these parameters, both download and upload functions will be **enabled**. To completely **deactivate** file transfer, select **No** for **both** parameters.
        :::
    3. Enable Ctrl+Alt+Del?*.
    4. Enable copy and paste?*.
    5. Ignore certificate errors?*.
    6. Enable SUDO automation in Linux sessions?*.
    7. Enable triggers for file transfer?*.
    8. Enable RAIL over RDP?*.
    9. Enable wallpaper in RDP sessions?*.
    10. SSH terminal type.
    11. Color depth.
        :::(info) (**Info**)
        Note that in the Color depth field (present in all segregation layers), to suit the performance you want, you can choose which color depth you want to be used by the connectivity type, like HTTP/HTTPS, RDP, VNC, and X11 Forward. The options range from 8 bits to 32 bits.
        :::
    14. Include hostname in local login in RDP sessions?*.
    15. Convert /r/n to /n on SSH sessions when using the browser?*.
    16. Keyboard Layout*.
    17. Session text language (OCR)*.
        :::(warning) (**Warning**)
        After selecting the Keyboard layout and Session text language (OCR) in the RDP session through Web Proxy on Windows devices, make the adjustment inside the session at the Windows settings to the same keyboard and language selected at the parametrization.
        :::
    21. RDP drive letter*.
    22. Enable use of personal credentials?*.
    23. Number of simultaneous user sessions (zero indicates unlimited)*.
    24. Enable support for SSH domain credentials?*.
    25. Mask for connection string when using SSH domain credentials*.
    26. Connection banner: write down the message to be displayed at the beginning of a session.
13. At the **Record** tab, fill in:
    1. Enable user input recording?*.
    2. Enable session recording?*.
    3. Enable livestream in real time?*.
    4. Indexing session texts?*.
    5. Enable input text index import?*.
    6. Enable output text index import?*.
    7. Enable use of macro in session?*.
    8. Enable the download of the session video?*
14. At **Security**, fill in:
    1. Force multi-factor authentication to view password?*.
    2. Force multi-factor authentication to start a session?*.
    3. Ignore the 'Trust this computer' option to view password?*.
    4. Ignore the 'Trust this computer' option to start a session?*.
    5. Force secure connection (SSL) on password change executions?*.
    6. Enable password change after session opening?*.
    7. Force certificate authentication for the RDP Proxy?*.
    8. Force certificate authentication for the SSH/Telnet Proxy?*.
    9. RDP safe mode*.
    10. Session idle time*.
    11. Enable IP filters with permission to start session.
    12. Allowed IPs to start session (this option it’s only available if the previous one is enabled).
15. At **Devices**, fill in:
    1. Click on the **plus sign** beside Devices and select the devices you want to add.
    2. After choosing, in the lower right corner, click **Add**.
16. When finishing, in the lower right corner, click **Save**.

After saving, a confirmation notice will be displayed. Now your parameters for devices are set and ready for use.

***
### Next:
[Segregation levels](/v3-33/docs/pam-session-segregation-level)
[Segregated parameters](/v3-33/docs/pam-session-segregated-parameters)
[How to create a new segregation for credentials](/v3-33/docs/pam-session-create-segregation-credentials)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.