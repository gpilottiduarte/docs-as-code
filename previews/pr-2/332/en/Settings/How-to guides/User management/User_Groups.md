# User Groups

User Groups is a feature in senhasegura that associates users with common permissions, linking them to an access group as a group instead of just adding individual users. This makes the experience of using senhasegura products even more fluid and intuitive.

## Requirements

- Access the "User Management" section in the "senhasegura" platform.
- Admin credentials with permissions to create or modify users and groups

* * *

## Creating User Groups

To create a User Group, follow these steps:

1. In the main menu, go to Settings ➔ User Management ➔ User Group
1. Click on "+ New User Group" inside general actions ”⋮”.
1. Enter a name and description for the User Group.
1. Under “Users” tab, associate users with common permissions to the User Group.
1. Under the "Access group" tab, select which Access Groups will be included in this User Group, as well as the approval levels, if necessary.

* * *

## Managing User Groups
To manage existing user groups, follow these steps:

1. **Go to Settings > User Management > User Group**.
2. To manage a User Group, go to the desired group and click **Update User Group** under the **Action** column.
3. From here, you can **Edit** or **Delete** the user group. You can also **Add** or **Remove** associated access groups from user groups.

:::(Info) (Info)
When creating or editing a user group, events are automatically registered to syslog.
:::
:::(Warning) (Attention)
If you clone a user group, only the rules are copied. The users and groups inside the group aren’t copied.
:::