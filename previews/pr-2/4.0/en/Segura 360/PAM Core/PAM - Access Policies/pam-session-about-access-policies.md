# PAM - Access Policies

The Segura has a permission system that makes it possible to segregate the actions that a user can perform. With Access Groups, you limit the data users can use or see in the modules.

Access Groups add another layer of security to ensure the principle of least privilege, acting as a filter for entities you own. This allows the administrator to provide different levels of security for the same user within their responsibilities in each product.

## Segregated entities and their properties
If the user is part of different groups that provide access to privileged information, Segura will apply the rule of the most restrictive group and the user will have limitations to perform actions. This rule is valid for the PAM Core module, in other modules, this rule may be different.

In practice, this means that if a user is part of the group with unlimited access, they can view all credentials and devices on some screens in the system. However, if this same user is also within a second group with stricter rules when trying to register credentials and devices, some options do not appear for selection due to the restriction existing in this other group of which the user is part.

:::(error) (**Important**)
If the same user is included in two or more different access groups that use personalized time windows, the platform will restrict that user's access according to the most restrictive window. By default, in the PAM module, the device will always follow the most restrictive access group rule. To change this behavior, access [How to add an access policies](/v4/docs/pam-session-how-to-add-an-access-policies) document.
:::

:::(warning) (**Caution**)
The Segura recommends that users who are part of **Access Policies** whose criteria for **Site**, **Type of device**, and **Credential type** have the **All** option selected must not be part of other policies. This full-access policy should be reserved for **administrator** users only.
:::