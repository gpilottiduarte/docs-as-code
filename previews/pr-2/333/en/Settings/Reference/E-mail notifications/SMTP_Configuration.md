# SMTP Configuration

In this document, you'll find all the information about the **Accounts** report.

## Path to access

1. In senhasegura, in the upper left corner, click the **Grid Menu**, represented by the nine squares, and select **Settings**.  
2. In the side menu, select **Notifications \> E-mail \> SMTP setting**.

## Top bar

| Item  | Description |
| :---- | :---- |
| **Show filters** | Represented by the magnifying glass icon, it displays or hides the search fields on the screen. |
| **Update** | Represented by the counterclockwise arrow icon, it refreshes the page. |
| **View actions** | Represented by the three vertical dots icon, it shows all the possible actions for the report. |
| **New** | Represented by the plus icon, it opens the **SMTP server settings** window. |
| **Print report** | Represented by the printer icon, it opens a new page for printing the report. |
| **Export CSV** | Represented by the paper sheet icon, it downloads the report. |
| **Schedule report** | Represented by the clock icon, it opens the [**Schedule report**](https://docs.senhasegura.io/v3-31/docs/en/general-information-how-to-issue-download-and-schedule-device-reports\#scheduling-reports) form. |

## Search fields

| Item | Description |
| :---- | :---- |
| **ID** | SMTP account code in senhasegura. |
| **Name** | SMTP account name. |
| **Sender e-mail** | E-mail address of the SMTP account representative. |
| **Reply e-mail** | Reply-to e-mail address of the SMTP account. |
| **Reply e-mail** | Return e-mail address (Return-Path) of the SMTP account. |
| **Confirmation e-amil** | SMTP account confirmation e-mail address. |
| **Enabled** | *Radio button* for filtering according to SMTP account status. Can be **Yes** or **No**. |

## Report fields

* **ID.**  
* **Name.**  
* **Sender e-mail**  
* **Reply-to e-mail.**  
* **Reply e-mail.**  
* **Receipt e-mail.**  
* **Enabled.**  
* **Default:** indicates whether this SMTP account is the default one used in senhasegura.  
* **Secure connection:** indicates whether the SMTP account uses a secure connection.  
* **Use config.:** indicates whether the SMTP account should be forced to use the configuration section.  
* **Read receipt:** indicates whether the SMTP account receives a confirmation that the message has been read**.**  
* **Footnote:** indicates whether the account sends a footer in the e-mail.  
* In the **Action** column, you have two options:  
  * **Edit:** is used to change the server's settings. It opens the **SMTP server settings** window.  
  * **Test setting**: is used to test the sending configuration of the **SMTP server**. Open the **Test mail \- Account** window.

:::(info) (Info)
The report displays 30 records per screen. To go to the next screen, click on the next button at the end of the report.
:::

## SMTP server settings window

Clicking on the **Change** or **New** option takes you to the **SMTP server settings**, which contains the following information.

| Item | Description |
| :---- | :---- |
| **Account name** | SMTP account name. |
| **Enabled** | *Radio button*. Indicates whether the SMTP account is active. Can be **Yes** or **No**. |
| **Sender e-mail** | E-mail address of the SMTP account representative. |
| **Reply e-mail** | Reply e-mail address of the SMTP account. |
| **Reply e-mail (Return-Path)** | Return e-mail address of the SMTP account. |
| **Confirmation e-mail** | SMTP account confirmation e-mail address. |
| **Default account** | *Radio button*. Indicates whether the account is the default account used in senhasegura. Can be **Yes** or **No**. |
| **Send read receipt** | *Radio button*. Indicates whether the SMTP account will receive a confirmation that the message has been read. Can be **Yes** or **No**. |
| **Force settings use** | *Radio button*. Indicates whether the SMTP account should be forced to use the configuration. Can be **Yes** or **No**. |
| **Enable footnote** | *Radio button*. Indicates whether the account sends a footer in the e-mail. Can be **Yes** or **No**. |
| **Host SMTP** | Host address of the SMTP account. |
| **Port** | Port on which the host listens. |
| **Use safe connection** | *Radio button*. Indicates whether the SMTP account should use a secure connection. Can be **Yes** or **No**. |
| **Secure connection type** | *Radio button*. Indicates which type of secure connection the SMTP account should use. It can be **TLS** or **SSL**. |
| **Use athentication** | *Radio button*. Indicates whether the SMTP account should use a credential to authenticate itself. Can be **Yes** or **No**. |
| **Ignore certificate error** | *Radio button*. Indicates whether the SMTP account should ignore any certificate errors. Can be **Yes** or **No**. |
| **Use network connector** | *Radio button*. Indicates whether the SMTP account should use a Network Connector previously registered with senhasegura. Can be **Yes** or **No**. |
| **Network Connector** | Drop-down menu. Select the **Network Connector** to use for the SMTP account connection. Note: this option will only be enabled if you select **Yes** on the **Use Network Connector** radio button. |
| **Credential for authentication** | A drop-down menu. Select the credential that will be used to authenticate the SMTP account. Note: if you select **Yes** in the **Use authentication** option, selecting a credential is mandatory; the credential must have been previously registered with senhasegura. |

## Test e-mail \- Account window

Clicking on **Test configuration** takes you to the **Test e-mail \- Account** window, which contains the following fields.

| Item | Description |
| :---- | :---- |
| **Send to** | Text field. Fill in the e-mail address where senhasegura should send the test message. |
| **Subject** | Text field. Fill in the subject of the test e-mail. By default, it’s filled in with the string `TEST MESSAGE!` |
| **Message** | Text field. Fill in the body of the test e-mail. By default, it’s filled with the string `ATTENTION: THIS IS A TEST MESSAGE!` |