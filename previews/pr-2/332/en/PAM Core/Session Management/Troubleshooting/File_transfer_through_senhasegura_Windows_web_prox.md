# File transfer through senhasegura Windows web proxy session error

This document will guide you through a step-by-step on how to fix the possible error with file transfer on the Windows web proxy remote session.

## Scenario
senhasegura couldn’t map a remote drive, used by senhasegura on remote Windows web proxy session, to transfer files.

***
## Cause
The remote drive it’s not visible in Explorer due to misled configurations in Windows.

***
## Solutions
To solve this problem the configurations must be done in two steps. First, in a remote session into a Windows device through senhasegura, and second at the senhasegura platform.

#### Windows web proxy remote session

1. At Windows search bar type: **Edit group policy**.
2. Click on the correspondent option.
3. At **Computer configuration** select **Administrative Templates** > **Windows Components** > **Remote Desktop Service** > **Remote Desktop Session Host** > **Device and Resource Redirection**.
4. Double-click on **Do not allow drive redirection** item, and select **Disable**.
5. Click on **Apply**.
6. Click **OK**.
7. Close this window.
8. At Windows search bar type: **Regedit**
9. Select **HKEY_LOCAL_MACHINE** > **SOFTWARE** > **Policies** > **Microsoft** > **Windows NT** > **Terminal Services**.
10. Double-click  on **fDisableCdm** item, and in **Valeu data** type **0** (zero). 
1. Click **OK**.
2. Reboot the computer.
3. At **Explorer** > **This PC** confirms if the remote disk was mapped (commonly it will be indicated by the letter G:).

:::(warning) (**Important**)
If your computer is already using the letter G for another disk, it’ll give the remote disk a different letter. You must make this change on the senhasegura platform as well.
:::

#### At senhasegura platform

1. On senhasegura, in the upper left corner click the **Grid Menu** and select **Settings**.
2. In the side menu, select **System parameters** > **System parameters**. 
3. At the **Remote session** tab:
    1. **Enable File Transfer?***: Select **Yes**.
    2. **RDP drive letter***: Select **G:** or the letter that represents the remote disc.

***
Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target="_blank"}.