# How to remove policies from AWS identities

This document provides information on how to remove policies from AWS users, groups, and roles.

## Remove policies from AWS identities
To remove policies from AWS identities, see the following procedure:

1. Access **Cloud Security**.  
2. Access the **Cloud Entitlements** product.  
3. In the **Cloud Entitlements** menu, click **Identities**.  
4. Select an identity.  
5. Go to the **Findings** tab.  
6. Go to the **Policies** section.  
7. Find the policy you want to remove, click on the trash can icon, and click **Yes**.

The removal of the policy will only take place after the next synchronization, which takes from 4 to 10 minutes. You can force the synchronization in **Setup > Amazon Web Services > Actions > Reprocess.**

:::(Error) (Alert:)
- Removing policies related to the **Cloud Entitlements** integration will cause the account synchronization to stop working.  
- Removing policies from a group causes all the members to lose the policy.
:::

---

Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/).

