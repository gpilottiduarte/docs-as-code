# Web sessions

In this document, you’ll find all the information about the **Web sessions** home screen, which shows the list of all Web session parameters created in the **PAM Core** module.

## Path to access

1. On senhasegura, in the upper-left corner, click the **Grid Menu**, represented by the nine squares, and select **PAM Core**.
2. In the side menu, select **Settings** > **Access** > **Web Sessions**.

---
## Top bar
**Item**|**Description**
|---|---|
**Show filters**|Represented by the magnifying glass icon, it displays or hides the search fields on the screen.
**Update**|Represented by the counterclockwise arrow icon, it refreshes the page.
**View actions**|Represented by the three vertical dots icon, it shows all the possible actions for the report.
**Print report**|Represented by the printer icon, it opens a new page for printing the report.
**Export CSV**|Represented by the paper sheet icon, it downloads the report.
**Schedule report**|Represented by the clock icon, it opens the Schedule report form.

## Search fields
| **Item**| **Description**|
|---|---|
| **ID**| Identification number of the order in which the parameters were registered.|
| **Product**| The device’s target of the session.|
| **Login Url**| URL of the website login page that will be used.|
| **HTTP Auth Realm**| HTTP authentication, if required by the website.|
| **Firefox legacy**| Option to use an older Firefox browser. The options are Yes or No.|
| **Ignore certificate error** | An option that will ignore the certificate error if the web application has it. The options are **Yes** and **No**. |


## Report fields

* **ID**.
* **Product**.
* **Login Url**.
* **HTTP Auth Realm**.
* **Firefox legacy**.
* **Ignore certificate error**.
* **Action**:
    * **Edit**: represented by the pencil and paper icon, it opens the **Web Session Parameters** window where you can make the necessary changes.
    * **Three vertical dots icon**: a drop-down menu with the options to **Clone** a parameter or **Delete** them. In both actions, click **Yes** in the confirmation box to do so.

:::(info) (**Info**)
The report displays 30 records per screen. To go to the next screen, click the next button at the end of the report.
:::

### Web Sessions Parameters

**Item**|**Description**
---|---
**Device product***|Choose from the options which device will be accessed by the session.
**Use Firefox legacy***|Choose from the options to activate this function or not.
**Ignore certificate error**|Choose from the options to ignore possible certificate errors when accessing the session.
**Login Url**|Write the URL address that will be accessed.
**HTTP Auth Realm**|Write to HTTP authentication, if required by the website.
**Customize settings**|Click on the plus icon and fill in the available fields. 


#### Customize settings - fields
Each action that will be added comprises seven elements, configuring each step necessary for authentication.

* **Wait (ms)**: waiting time in milliseconds before the action occurs. The time for the first action must be adjusted to the page rendering time.
* **Action**: type of action that will simulate a user authenticating on the website. Some of these actions have additional properties.
    * **Simulated Click**: an automation that generates clicks directly through the website. **Example**: The click is performed by the console.
    * **Real Click**: a real person clicking, it's a real click. **Example**: as if a real person performed the clicking action.
    * **Run JS command**: inserts a command in javascript, to execute a command.
    * **Mark**: is used to mark checkboxes and radio buttons.
    * **Simulated Fill**: fill in the automated fields (requires the **Value** field filled).
    * **Real Fill**: fill in the fields as if it were done by a real person (the Value field needs to be filled).
    * **Roll**: list selection, data listing.
    * **Select**: contains a Select element with options to select. **Example**: is a drop-down list with elements for the user to select.
    * **Submit**: an HTML element of type submit for sending data. **Example**: is a button used to send data that sends all the values ​​filled in the form.
    * **Captcha**: is a challenge and response test used to determine whether the user is human. **Example**: It may contain letters, numbers, among others, in different fonts and different handwriting.
        :::(info) (**Info**)
        In this step, it’s necessary to fill in according to the image shown so that it’s possible to continue with the other steps.
        :::
* **Field**: can be used [jQuery selector](https://api.jquery.com/category/selectors/){target=`_blank`} to identify the target field of the action to be performed or field inspection can be done to identify the target field.
* **Value**: this value will be used to fill in the field. Values ​​can be set, you can fill using tags like:
    * `[username]`: the sign-in credential username.
    * `[password]`: the credential password.
    * `[device_ip]` or`[device_name]`: the IP, DNS, or URL of the credential associated with the device.
    * `[user_custom_code]` and `[token_totp]`: tags for starting web sessions with a third authentication field.
* **Attempts**: The number of times the automation should try the action if it fails.
    :::(info) (**Info**)
    The reasons for failure often range from a wrong selector, an inappropriate action, or even not having had time to make the page for automation to find the desired field.
    :::
* **Interval (ms)**: this is the time the automation must wait until the action is resumed, the first action has an appropriate number of attempts and interval time.
