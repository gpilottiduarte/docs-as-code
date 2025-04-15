# How to register a new web session parameter

This document provides information about a step-by-step guide on how to register a new web session parameter in the **PAM Core** module.

When you need to start web application sessions on a device with HTTP or HTTPS connectivity, you must first create a session parameter, so that Segura knows how to authenticate to the web page that will start the session.

:::(warning) (**Attention**)
The parameters configured here are only for the use of **Web Proxy** sessions.
:::

## Requirements

* The user must have add/edit permission.
* User with the role of system admin, pam admin or pam operator.

:::(warning) (**Attention**)
Segura isn't compatible with the GoDaddy application.
:::

---
## Register new parameter

:::(info) (**Info**)
For more information about the meaning of the fields when registering the new parameter, access the reference [Web sessions automations](/v4/docs/pam-session-web-sessions) document.
:::

1. On Segura, in the navigation bar, hover over the **Products menu** and select **PAM Core**.
2. In the side menu, select **Management** > **Sessions** > **Web Sessions automations**.
3. On the actions menu click **Add**.
4. In the **Web Sessions Parameters** screen, fill in the mandatory fields, identified by the asterisk:
    1. **Device product***: choose from the options which device will be accessed by the session.
    2. **Use Firefox legacy***: select the Yes or No option.
        :::(info) (**Info**)  
        This parameter will only be effective if the browser used is **Firefox**. If a different    browser is used, this parameter won’t have an effect.  
        :::
    4. **Ignore certificate error**: select the Yes or No option.
    5. **Login Url**: enter the URL address that will be accessed.
    6. **HTTP Auth Realm**: an HTTP authentication, if required by the website.
    7. **Customize settings**: click the plus icon and fill in the available fields.
        :::(info) (**Info**)
        For more information about Customize Settings fields, access the [About Customize settings - Web sessions parameters](/v4/docs/pam-session-about-customize-settings-web-sessions-parameters) document.
        :::
        4. **Wait (ms)**: Enter a number for the wait time.
        5. **Action**: choose from the options which type of action will be performed.
        6. **Field**: enter the result of the HTML inspection of the chosen field or use the [jQuery selector](https://api.jquery.com/category/selectors/){target=`_blank`} to identify the target field of action.
            :::(info) (**Info**)
            To inspect an element, right-click on the element you want, for example, the login text box. In the list, click on the inspect option. In the one that opens, find the value for the field in the code, copy and paste the value into this field.
            :::
        4. **Value**: enter the value that will be used to fill in the field.
            :::(info) (**Info**)
            It’s possible to use tags that will be replaced by the values ​​of the credential or device accessing the website. To learn about each tag that can be used in this field, access the [About Customize settings - Web sessions parameters](/v4/docs/pam-session-about-customize-settings-web-sessions-parameters).
            :::
        5. **Attempts**: enter the number of times the action should be attempted
        6. **Interval (ms)**: waiting time for the action to resume.
    10. To delete a line from the custom configuration list, click on the **bin** icon, on the left side of the chosen record.
5. Click **Save**.

A confirmation message will be displayed by the system and the new parameter created will appear in the list of groups on the screen **Web session automations**.

---
Do you still have questions? Reach out to the [Segura community](https://community.Segura.io/){target=`_blank`}.
