# How to manage application types

## How to register an application type

1. In senhasegura, in the top left corner, click the **Grid Menu**, represented by the icon with the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Settings > Application types**.
3. In the toolbar at the top of the list screen, click **View Actions**, represented by the three vertical dots icon, and select **+ New** from the drop-down menu.
4. In the **Application Type** window, fill in the information:
    1. **Name**: enter a name for your application type.
    2. **Enabled**: select whether you want your application type to be created as enabled. By default, **Yes** will be selected.
    3. **Description**: enter a description for the registered application type. This description will be useful for understanding what the registered application type is about.
5. Click **Save.**

## How to change an application type

1. In senhasegura, in the top left corner, click the **Grid Menu**, represented by the icon with the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Settings > Application types**.
3. On the screen listing the application types, in the **Action** column, click **Change**, represented by the pencil and paper icon.
4. The **Application Type** window will open in edit mode, modify the information according to your needs.
5. Click **Save**.

## How to inactivate an application type

1. In senhasegura, in the top left corner, click the **Grid Menu**, represented by the icon with the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Settings > Application types**.
3. On the screen listing the application types, in the **Action** column, click **Change**, represented by the pencil and paper icon.
4. The **Application Type** window will open in edit mode, modify the **Enabled** field by setting it to **No**.

:::(info) (Info)
When inactivated, the application type becomes unavailable in all applications and will no longer appear in the applications that were previously registered with it.
Note that inactivating an application type can affect the settings of access groups. For example, depending on the configuration made, users can lose/gain access privileges.
:::

## How to reactivate an application type

1. In senhasegura, in the top left corner, click the **Grid Menu**, represented by the icon with the nine squares, and select **DevOps Secret Manager**.
2. In the side menu, select **Settings > Application types**.
3. In the search fields, select **No** from the **Enabled** drop-down menu and click the magnifying glass to filter for application types that are inactive.
4. On the screen listing the application types, in the **Action** column, click **Change**, represented by the pencil and paper icon.
5. The **Application Type** window will open in edit mode, modify the **Enabled** field by setting it to **Yes**.

:::(warning) (Important)
The reactivated application type won't be added back to the applications to which it was previously linked. So, if you inactivate an application type, it will lose its relationship with the application, and when you reactivate it, this relationship won't be re-established automatically.
:::

***

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).