# How to manage applications in A2A

This document provides a step-by-step guide on how to manage the applications that will consume APIs managed in **A2A**.

## Prerequisites

* System administrator permission.

## Path to access

1. On Segura, in the navigation bar, hover over the **Products menu** and select **A2A**.  
2. In the side menu, select **Applications \> Applications**.

---
## Add application

To add an application, follow the steps below:

1. Click **Add** in the upper-right corner of the **Applications** screen.  
   1. Or click **Add application** in the upper-right corner of the **Authorizations** screen.  
2. On the **Add application** screen, fill out the following fields:  
    :::(error) (Alert)  
    Fields marked with an asterisk are required.  
    :::  
   1. **Application name**\*: enter a name to identify the client application.  
   2. **Use OAuth signature**\*: choose the desired authentication method.  
   3. **Status**\*: set the application's status to **Enabled** or **Disabled**.  
   4. **Tags**: enter keywords to organize or categorize the application.  
   5. **Description**: enter general notes about the application.  
   6. **Amazon AWS ARNs**: for the AWS authentication method, click **Add** to include ARNs for the application.  
3. Click **Save**.

## Edit application

To edit an application, follow the steps below:

1. On the **Applications** screen, find the desired application or use the search filters.  
2. Click the **Actions** **button** and select **Edit**.  
3. On the **Edit application** screen, make the necessary changes.  
4. Click **Save**.

## View application settings

To view application configuration details, follow the steps below:

1. On the **Applications** screen, find the desired application or use the search filters.  
2. Click the **Actions** **button** and select **View**.  
3. On the **Application configuration** screen, review general information about the application and linked authorizations. The displayed information will vary depending on the selected authentication method.  
4. Click **Show** to display view sensitive information such as the **Client Secret**.

## View application authorizations

To view the authorizations linked to the selected application, follow the steps below:

1. On the Applications screen, find the desired application or use the search filters.  
2. Click the **Actions** button and select **Authorizations**.  
3. On the Application authorization screen, review the application's authorizations and their details.

More information in [How to manage authorizations in A2A](/v4/docs/how-to-manage-authorizations-in-a2a).

## Disable application

To disable an application, follow the steps below:

1. On the **Applications** screen, find the desired application or use the **Status \> Enabled** filter.  
2. In the enabled applications report, find the desired application or use the search filters.  
3. Click the **Actions** button and select **Edit**.  
4. On the Edit application screen, locate the **Status** component and select **Disabled**.  
5. Click **Save**.

## Enable application

To enable a disabled application, follow the steps below:

1. On the **Applications** screen, find the desired application or use the **Status \> Inactive** filter.  
2. In the disabled applications report, find the desired application or use the search filters.  
3. Click the **Actions** **button** and select **Edit**.  
4. On the **Edit application** screen, locate the **Status** component and select **Active**.  
5. Click **Save**.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target="\_blank"}.