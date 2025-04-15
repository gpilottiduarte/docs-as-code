# How to remove roles from Azure

This document provides information on how to remove roles from Azure users, groups, and applications.

## Remove roles from Azure

To remove roles from Azure, see the following procedure:

1. Access **Cloud Security**.
2. Access the **Cloud Entitlements** product.
3. In the **Cloud Entitlements** menu, click **Identities**.
4. Select an Azure identity.
5. Go to the **Findings** tab.
6. Go to the **Roles** section.
7. Find the roles you want to remove, click on the trash can icon, and click **Yes**.

The removal of the roles will only take place after the next synchronization, which takes from 4 to 10 minutes. You can force the synchronization in **Setup** > **Microsoft Azure** > **Actions** > **Reprocess**.

:::(Error) (Alert)
- Removing roles related to the **Cloud Entitlements** integration will cause the account synchronization to stop working. 
- Removing roles from a group causes all the members to lose the policy.
:::

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).