# How to register a new web session parameter

In this document, you’ll find a step-by-step guide on how to register a new web session parameter in the **PAM Core** module.

When you need to start web application sessions on a device with HTTP or HTTPS connectivity, you must first create a session parameter, so that senhasegura knows how to authenticate to the web page that will start the session.

:::(warning) (**Attention**)
The parameters configured here are only for the use of **Web Proxy** sessions.
:::

## Requirements

* The user must have add/edit permission.
* User with the role of system admin, pam admin or pam operator.

:::(warning) (**Attention**)
senhasegura is not compatible with the GoDaddy application.
:::

---
## Register new parameter
:::(info) (**Info**)
For more information about the meaning of the fields when registering the new parameter, access the reference [Web sessions](/v3-32/docs/pam-session-web-sessions) document.
:::

1. On senhasegura, in the upper-left corner, click on the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings** > **Access** > **Web Sessions**.
3. Click on the three vertical dots icon, located in the upper-right corner of the screen, and select **+ New**.
4. In the **Web Sessions Parameters** window that opens, fill in the mandatory fields, identified by the asterisk:
    1. **Device product***: choose from the options which device will be accessed by the session.
    2. **Use Firefox legacy***: select the Yes or No option.
    3. **Ignore certificate error**: select the Yes or No option.
    4. **Login Url**: enter the URL address that will be accessed.
    5. **HTTP Auth Realm**: an HTTP authentication, if required by the website.
    6. **Customize settings**: click the plus icon and fill in the available fields.
        :::(info) (**Info**)
        For more information about Customize Settings, access the [Web Sessions - Customize Settings](/v3-32/docs/pam-session-web-sessions#customize-settings-fields) document.
        :::
        4. **Wait (ms)**: Enter a number for the wait time.
        5. **Action**: choose from the options which type of action will be performed.
        6. **Field**: enter the result of the HTML inspection of the chosen field or use the [jQuery selector](https://api.jquery.com/category/selectors/){target=`_blank`} to identify the target field of action.
            :::(info) (**Info**)
            To inspect an element, right-click on the element you want, for example, the login text box. In the list, click on the inspect option. In the one that opens, find the value for the field in the code, copy and paste the value into this field.
            :::
        4. **Value**: enter the value that will be used to fill in the field.
            :::(info) (**Info**)
            It’s possible to use tags that will be replaced by the values ​​of the credential or device accessing the website. To learn about each tag that can be used in this field, access the [Web Sessions - Customize Settings document](/v3-32/docs/pam-session-web-sessions#customize-settings-fields).
            :::
        5. **Attempts**: enter the number of times the action should be attempted
        6. **Interval (ms)**: waiting time for the action to resume.
    10. To delete a line from the custom configuration list, click on the **bin** icon, on the left side of the chosen record.
5. Click **Save**.

A confirmation message will be displayed by the system and the new parameter created will appear in the list of groups on the screen **Web session parameters**.

---
### Next:
[How to access a web proxy session](/v3-32/docs/pam-session-how-to-access-a-web-proxy-session)

Do you still have questions? Reach out to the [senhasegura community](https://community.senhasegura.io/){target=`_blank`}.
