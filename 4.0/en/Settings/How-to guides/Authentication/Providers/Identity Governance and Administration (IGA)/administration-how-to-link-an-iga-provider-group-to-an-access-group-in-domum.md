# How to link an IGA provider group to an access group in Domum

This guide provides information on third-party provisioning in **Domum** with IGA.

:::(Info) (Info)
You can skip this tutorial if you are provisioning a group of internal users. The system links internal users to access groups upon registration on the platform.
:::

* * *
### Requirements

* [Access group previously configured in **Domum**](/v4/docs/domum-create-access-group-for-vendor).

* * *

:::(Warning) (Caution)
If a user is in more than one vendor's register, the system will place this user in the last group found during synchronization.
:::

1. On Segura, in the navigation bar, hover over the **Products menu** and select **Domum**.
2. In the side menu, select **Settings > Vendors**.
4. Locate the **Vendor** referring to the [group you activated on the IGA access provider](/v4/docs/administration-how-to-create-a-scim-application-with-okta) from the list.
5. In the **Action** column, click the icon **Edit**. 
6. In the update window, fill in the **Registration** tab:
    1. **Vendor***: the system automatically completes the field.
    2. **Access group***: select one [group previously registered in Domum](/v4/docs/domum-create-access-group-for-vendor).
    3. **Start date***: select a date.
    4. **Status***: check **Enabled**.
7. Click **Save**.

A pop-up window displays a confirmation message indicating the completion of the process. You can use your application to perform various identity management operations, such as creating, updating, and deleting users. Your IGA provider will synchronize these changes with the application you’ve made.

* * *
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target="_blank"}.
