# How to perform a PDF download in HTTP/HTTPS Web Proxy sessions

This document provides information about a step-by-step guide on how to download a file in PDF format on an HTTP/HTTPS Web Proxy session.

## Requirements

* Have a web session registered and available.
* Have the **Enable file transfer for download?*** and **Enable file transfer for upload?*** fields set up to **Yes**. For more information on how to enable this field, access the [System Parameters - Remote Session](/v4/docs/pam-session-proxy-settings) document.

---
## Access the session
Segura web interface can start proxy sessions from different pages:

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Credentials** > **All credentials**.

or

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Credentials** > **Web applications**.

Whatever the path, choose the web session you want to access from the list.

1. Click on **Start session**.
2. Access the page you want to download.
3. Click with the right button.
    1. Choose the **Save as PDF** option.
4. Save to the **Home** directory and keep the same generated name.

:::(warning) (**Attention**)
If the file name or location is changed, the user won’t be able to download the saved PDF.
:::

A banner notifying you of download completion will be displayed in the bottom-right corner of the screen. You’ll be able to open the PDF file through the shortcut link in the banner or by accessing the folder where the file was saved.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.