# About Customize settings - Web sessions parameters

Customizing web session parameters allows you to define specific settings and behaviors for individual sessions based on user needs or system requirements.

Each added parameter consists of seven elements. They are:

* **Wait (ms):** sets the type of action to be performed, simulating a user authenticating on the site. Some actions have additional properties.  
* **Action:** defines the type of action to be performed, simulating a user authenticating on the site. Some of these actions have additional properties.  
  * **Simulated Click:** generates simulated clicks directly on the site, as if made from the console.  
  * **Real Click:** simulates a click as if done by a real person.  
  * **Run JS command:** executes a JavaScript command.  
  * **Mark:** marks checkboxes and radio buttons.  
  * **Simulated Fill:** automatically fills in fields (requires the **Value** field to be filled).  
  * **Real Fill:** fills in fields as if it were a real person (also requires the **Value** field to be filled).  
  * **Roll:** selects items in a list or displays listed data.  
  * **Select:** allows selecting options from a `Select` element (dropdown).  
    * **Example**: dropdown menu with options for the user to choose.  
  * **Submit:** an HTML element of type `submit` for data submission.  
    * **Example**: submits data via an HTML `submit` element, like a submit button that sends all filled values in the form.  
  * **Captcha:** validations to verify if the user is human.  
    * Example: presents a challenge with characters of different fonts and styles to be recognized.
    :::(info) (**Info**)
    At this step, it’s necessary to fill it in according to the displayed image so the flow can proceed to the next steps.  
      :::
* **Field:** defines the target of the action and can be identified by the [jQuery selector](https://api.jquery.com/category/selectors/) or by inspecting the field directly.  
* **Value:** specifies the value to be filled in the field. Values can be fixed and filled using tags such as:  
  * `[username]`: entry credential username.  
  * `[password]`: credential password.  
  * `[device_ip]` or `[device_name]`: IP, DNS, or URL of the device to which the credential is associated.  
  * `[user_custom_code]` and `[token_totp]`: used to initiate web sessions that require an additional authentication field.  
* **Attempts:** defines the number of times the automation should repeat the action in case of failure.
:::(info) (**Info**)  
Failures can occur for various reasons, such as incorrect selectors, inadequate actions, or insufficient time for the page to load before automation locates the desired field.  
:::
* **Interval (ms):** defines the time in milliseconds that the automation should wait between each attempt. The first attempt uses a pre-configured number of attempts and an appropriate interval between them.
