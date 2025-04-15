# About Customize settings - Web sessions parameters

In this document, you’ll find all the information about the Custom Configuration option, present on the Web session parameters registration screen.

Each action that will be added is made up of seven elements, configuring each step necessary for authentication.

* **Wait (ms)**: waiting time in milliseconds before the action occurs. The first action must have the time adjusted to the page rendering time.
* **Action**: type of action that will be carried out simulating a user who is authenticating on the website. Some of these actions have additional properties.
    * **Simulated Click**: an automation that generates clicks directly through the website. Example: The click is performed by the console.
    * **Real Click**: a real person clicking, it's a real click. Example: as if a real person performed the clicking action.
    * **Run JS command**: inserts a command in javascript, to execute a command.
    * **Mark**: is used to mark checkboxes and radio buttons.
    * **Simulated Fill**: fill in the automated fields (requires the Value  field filled).
    * **Real Fill**: fill in the fields as if it were done by a real person (needs the Value field filled).
    * **Roll**: list selection, data listing.
    * **Select**: contains a Select element with options to select. Example: is a drop-down list with elements for the user to select.
    * **Submit**: an HTML element of type submit for sending data. Example: is a button used to send data that sends all the values ​​filled in the form.
    * **Captcha**: is a challenge and response test used to determine whether the user is human. Example: It may contain letters, numbers, among others, in different fonts and different handwriting.
    :::(info) (**Info**)
    In this step, it’s necessary to fill in according to the image shown so that it’s possible to continue with the other steps.
    :::
* **Field**: can be used jQuery selector to identify the target field of the action to be performed or field inspection can be done to identify the target field.
* Value: this is the value that will be used to fill in the field.
    * Values ​​can be set just by typing. You can fill using tags like [username], [device_ip], [password], [device_name], [user_custom_code] and [token_totp].
    * The credential password: [password].
    * The sign-in credential username: [username].
    * The IP, DNS, or URL of the device the credential is associated with [device_ip] or [device_name]
    * Employees or third parties: tag for starting web sessions with third authentication field [user_custom_code],  [token_totp] and [custom_tags]
* **Attempts**: The number of times the automation should try the action if it fails.
    :::(info) (**Info**)
    The reasons for failure often range from a wrong selector, an inappropriate action or even not having had time to make the page for automation to find the desired field.
    :::
* **Interval (ms)**: This is the time the automation must wait until the action is resumed, the first action has an appropriate number of attempts and interval time.

The other automation steps may have lower values ​​for the **Wait** and the **Interval** fields, as these will generally already be available if the first field has already been found.

For authentications that include later steps, adjust the wait time for the initial actions of each step as if they were the first.

If you need to authenticate a Captcha, indicate the selector of the element that hosts the main component. Only this component will be presented to the user to complete the process. This isolation prevents the user from modifying any other value already populated.

Some more sophisticated captcha technologies need to present the entire authentication page because they do not allow manipulation of the component that hosts it. Therefore, the automation ends at the time of the captcha. The session is already being recorded and if the user modifies the authentication.

When you log in, you’ll see the embedded browser when you access the website. When the authentication page loads, you’ll be presented with a shield that prevents user interaction. This means authentication is still running.
In the end, if the automation is properly configured, the user will be free to use the website.
