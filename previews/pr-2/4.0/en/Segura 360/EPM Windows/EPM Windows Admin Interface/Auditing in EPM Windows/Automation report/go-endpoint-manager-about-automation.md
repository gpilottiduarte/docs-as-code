# About automation

This article will explore the operation, characteristics, and main functionalities of automation, providing a comprehensive view.

* * *

## What is EPM Windows automation?
Application automation allows you to automate authentication to installed applications or web pages accessed directly from your workstation with **EPM Windows** installed. The automation fills in the username and password using the selected credential automatically.

* * *

## How does EPM Windows automation work?
The Automation runs the automation configured in the **EPM Windows** module and the automation configured in **RemoteApp** on **PAM Core**. Automation elevates privileges when it runs Automation.

* * *

## How does session recording of automation work?
To record the automation registered in the **EPM Windows**, you must activate the recording option in the general parameters and the access lists. To understand how recording works, suppose you activate only the general parameter and leave the access list inactive. In this case, the system records only the execution of the **RemoteApp** automation. Thus, four situations are possible, as the table below shows:


| Access list - Record the session of these applications? | General Parameter/Segregated Parameter - Allow Session Recording? | Automation |
| --- | --- | --- |
| 	Active	|	Inactive	|	Doesn't record.	|
| 	Active	|	Active	|	Record.	|
| 	Inactive	|	Active	|	Record only RemoteApp.	|
| 	Inactive	|	Inactive	|	Doesn't record.	|

* * *

## Masks for RemoteApp on EPM Windows
This table shows the supported masks for the **RemoteApp** on **EPM Windows** in the execution of the automation.
| TAGs | Description | 
| --- | --- | 
| 	[username]	|	Uses the username field of the credential.	|
| 	[password]	|	Uses the password field of the credential.	|
| 	[domain]	|	Uses the domain field of the credential.	|
| 	[hostname]	|	Use the device name.	|
| 	[host_ip]	|	Uses the device's IP.	|

* * *

## Description of the automation registration fields
When registering automation, some fields must be filled in. See the description of these fields that can help you fill.

### TAGs
This section briefly explains each TAGs that can be used in automation registration. The TAGs used will vary according to the purpose for which the automation is being created.

#### Description

You can use the tags below to build your automation:

* [#USERNAME#]: credential username.
* [#PASSWORD#]: credential password.
* [#DOMAIN#]: credential domain.
* [#HOSTNAME#]: hostname name.
* [#HOST_IP#]: IP do hostname.


### Script 
In this section, you will have an explanation of how the Script is created and which actions can be contained.

#### Description

The field **Script** it is the already programmed sequence of actions that make up the automation. The actions can be rearranged by clicking and dragging, changing the execution order. When clicking on a certain action, it’ll  be opened for editing its properties.

You can select the actions you want to automate, for instance, you can automate clicks using the "Button" action, navigate to the desired menu using the "Menu" action, and inputting texts with the "Input" action. When clicking on one of the actions, it's added as the last element in the **Script**. Its properties can be edited or deleted.

### Actions
In this section, you will briefly describe each action that can be part of the Script field.

#### Description

* **Button:** when you want to click on an element that acts as a button. The property **label** must be filled in with the visible text that defines it.
* **Menu:** the application menu path. Put the path in the property **path**. Separate levels with semicolons. For example, `Edit;Preferences;Font` it’s  the equivalent of automating the path **Edit ➔ Preferences ➔ Font.**
* **Input:** the text of the application. Fill in the property **label** with the name visible to the user, which identifies the field, and fill the **value** with the value to be inserted in the target application field using the **TAGs.**

* * *

:::(Internal) (Private notes)
## Next steps

* How to configure parameters for recording
* How to create an automation for RemoteApp
* How to create an automation for application
* How to create an automation for web
:::