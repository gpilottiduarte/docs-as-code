# About filling out the Device and Username fields

### Device field

The **Device** field can be filled with some combinations that facilitate the choice of devices that will be available for that access group.

The combinations are:

* The device’s name plus the device's IP number. For example: `DEVICE-ABC(100.100.100.100)`, the group will be able to device that has exactly that name and IP.  
* One asterisk at the beginning plus a part that contains the device’s name plus an asterisk at the end. For example: `*device*` will be available to the group the device that contains the word device **somewhere** in the name.  
* The beginning of the device’s name plus an asterisk at the end. For example: `device*` will be available to the group the device that contains the word device at the **beginning** of the name.  
* The beginning of the device’s name with an asterisk in the middle and the end of the device name. For example: `device*final` will be available to the group the device that starts with **device** in the name, has some **other word in between** and ends the name with the word **final**.

--- 

### Username field

When the credential’s username matches the Segura’s username, you can use the mask `USERNAME` to ensure that only visible credentials are those with the same Segura’s login username.

For example, the username used to access the Segura instance is **“john”**, and the group rule will be that only John will have access to credentials with the same username, which means, only credentials in which the credential's username is also **“john”**.

For this to be possible, the following syntax will be used to fill the field:

* `[#USERNAME#]` which will bring only the credentials that have exactly the name of **john**.  
* `[#USERNAME#]*` which will bring all the credentials that have **john** at the beginning, regardless of how the ending turns out.  
* `*[#USERNAME#]*` which will bring all the credentials that have **john** in the middle of the credential name, regardless of how the beginning and the end are.