# How to deactivate the restriction rule by credential and devices

On Segura, the standard configuration at the access control is when a user is part of more than one policie group with different rules, and this policie will follow the restriction rule by credential and device combined.

For example, if the ABC credential is in two or more groups with different access rules when the credential tries to access or view a password in some device, Segura will look through all the groups that the ABC credential is part of and read not only the credential rule but the device rule as well, to allow the access.

To deactivate this standard rule and change the configuration to the most restrictive policie group rule only by credential, follow the steps in this document.

For more information about the meaning of the Access control configurations fields, access the [System parameters - Access control](/v4/docs/pam-session-system-parameters-access-control) document.

## Requirements

* Be an admin user.
---

## Deactivate standard rule

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Settings**.
2. In the side menu, select **System parameters** >  **Global**.
3. Select the **Access control** tab.
4. On the **Force access rule by device domain?***, select **No**.
5. Click **Save**.

A confirmation notice will be displayed. Now, Segura will restrict the access for the user added in more than one policie, according to the most restrict policie’s rule, validating only the credentials rule.

---

### Use case: Segura restriction rule

#### Segura standard
**Force access rule by device domain?**: Yes
**Credential name**: Test
Policie that **Test** credential is part of:

* **A group**: access to device 1 with no justification.
* **B group**: access to device 2 with justification.
* **C group**: access to device 3 with justification and approval.

By the Segura standard rule, when accessing a device, the rule that will be applied is the one established on the **credential Test** and on the access device. In other words, when the credential tries to access **device 1**, it won’t request a justification since this is the rule from the **A group** to which this device belongs.

#### Changed standard
**Force access rule by device domain?**: No
**Credential name**: Test
Policie that **Test** credential is part of:

* **A group**: access to device 1 with no justification.
* **B group**: access to device 2 with justification.
* **C group**: access to device 3 with justification and approval.

When the standard rule is modified, the **Force access rule by device domain** field is set as **No**. When the user tries to access **device 1**, he must enter a justification and wait for approval to access the device since the rule that is now being applied is the **C group** rule, regardless of the device that is being accessed, because the most restrictive one that is being considered, and now only the rule applied on the credential is valid.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.