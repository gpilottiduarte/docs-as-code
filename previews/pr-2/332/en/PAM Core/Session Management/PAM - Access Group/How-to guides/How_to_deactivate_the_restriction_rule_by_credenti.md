# How to deactivate the restriction rule by credential and devices

On senhasegura, the standard configuration at the access control is when a user is part of more than one access group with different rules, and this group will follow the restriction rule by credential and device combined.

For example, if the ABC credential is in two or more groups with different access rules when the credential tries to access or view a password in some device, senhasegura will look through all the groups that the ABC credential is part of and read not only the credential rule but the device rule as well, to allow the access.

To deactivate this standard rule and change the configuration to the most restrictive access group rule only by credential, follow the steps in this document.

:::(info) (**Info**)
For more information about the meaning of the Access control configurations fields, access the [System parameters - Access control](/v3-32/docs/pam-session-system-parameters-access-control) document.
:::

## Requirements

* Be an admin user.
---

## Deactivate standard rule

1. On senhasegura, in the upper-left corner, click **Grid Menu**, identified by the nine squares icon, and then select **Settings**.
2. In the side menu, select **System parameters** >  **System parameters**.
3. In the available tabs, select **Access control**.
4. On the **Force access rule by device domain?***, select **No**.
5. Click **Save**.

A confirmation notice will be displayed. Now, senhasegura will restrict the access for the user added in more than one group, according to the most restrict group’s rule, validating only the credentials rule.

---

### Use case: senhasegura restriction rule

#### senhasegura standard
**Force access rule by device domain?**: Yes
**Credential name**: Test
Groups that **Test** credential is part of:

* **A group**: access to device 1 with no justification.
* **B group**: access to device 2 with justification.
* **C group**: access to device 3 with justification and approval.

By the senhasegura standard rule, when accessing a device, the rule that will be applied is the one established on the **credential Test** and on the access device. In other words, when the credential tries to access **device 1**, it won’t request a justification since this is the rule from the **A group** to which this device belongs.

#### Changed standard
**Force access rule by device domain?**: No
**Credential name**: Test
Groups that **Test** credential is part of:

* **A group**: access to device 1 with no justification.
* **B group**: access to device 2 with justification.
* **C group**: access to device 3 with justification and approval.

When the standard rule is modified, the **Force access rule by device domain** field is set as **No**. When the user tries to access **device 1**, he must enter a justification and wait for approval to access the device since the rule that is now being applied is the **C group** rule, regardless of the device that is being accessed, because the most restrictive one that is being considered, and now only the rule applied on the credential is valid.

---
## Next:
[System parameters - Access control](/v3-32/docs/pam-session-system-parameters-access-control)

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/){target=`_blank`}.