## Domain credential password change

Requirements* Have a domain credential created
* The change password template
1. Go to **Executions ➔ Settings ➔ Templates**, then create a new template or copy the "AD \- Change User Password" template
2. In the execution template, select the LDAP executor and define the Execution type as Change password
3. In this example, it would be to change the senhaADM password user in the content add:ActionScript 
```
# Execute Bind bind "cn=[#AUTH_USER#],CN=Users,DC=senhasegura,DC=com" 
# Locate User Entry find "DC=senhasegura,DC=com" (&(objectClass=user)(sAMAccountName=[#USERNAME#])) 
# Change Password mod-replace unicodePwd "u([#NEW_PASSWORD#])"
```
ExampleThe CN\=Users,DC\=senhasegura,DC\=com in the bind should be replaced by the DN (distinguished name) where the credential that will execute the change exists.
4. Go to the credential that will be changed in **PAM Core ➔ Credentials ➔ All** and click **Edit**
5. Go to Execution Settings Tab to enable the automatic change and select the changed plugin to LDAP and Change the template to the one created in the steps above
6. Define if the change will be done through the credential itself or another service user credential in the Authentication settings, now, any time that one of the triggers is activated, this credential's password will be changed.
7. Go to the credential that will be changed in **PAM Core ➔ Credentials ➔ All** and click **Edit**



---

## Linux user password change

Requirements* Have a Linux credential created
* The change password template
1. Go to Executions ➔ Settings ➔ Templates, then create a new template or copy the Change Password, which will be used in this example
2. In the execution template, select the SSH executor plugin and define the Execution type as Change password
3. In this example, it would be to change the senhaADM password user in the content add:nScript 
```
# Clear sudo session expect-regex "/[$|#|>]/" exec "sudo -k" 
# Execute password change expect-regex "/[$|#|>]/" exec "sudo passwd -r files [#USERNAME#]" 
# Set new password expect "*password:" exec "[#NEW_PASSWORD#]" 
# Confirm new password expect "*password:" exec "[#NEW_PASSWORD#]" 
# Confirm password change expect "*successfully" 
# Exit expect-regex "/[$|#|>]/" exec "exit" 
end
```
4. Now go to the credential that will be changed in **PAM Core ➔ Credentials ➔ All** and click **Edit**
5. Go to **Execution Settings Tab** to enable the automatic change and select the changed plugin to SSH. Choose the template created on the steps above
6. Define if the change will be done through the credential itself or another service user credential in the Authentication settings
7. Now, any time one of the triggers is activated, this credential's password will be changed.
