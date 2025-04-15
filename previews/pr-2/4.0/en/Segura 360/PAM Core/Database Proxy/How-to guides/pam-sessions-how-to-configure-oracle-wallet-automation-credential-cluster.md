# How to configure Oracle Wallet automation credential

This document provides step-by-step information on how to create a *wallet* username to be used via Oracle Database Proxy.

It'll take four steps to configure the Oracle database so that it is accessible via **Database proxy** insenhasegura, this document is the **fourth and final step**.

![EN_cluster_step4.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/EN_cluster_step4.png){height="" width=""}

:::(warning) (**Attention**)
It's extremely important to correctly follow the order of documents for configuring the Oracle database so that it functions correctly as a Database Proxy.
:::

## Requirements

* Have an Oracle device registered with senhasegura.  
* Have a credential with permission to create a wallet.  
* Be an administrator user.

---
## Configure the automation credential

1. On senhasegura, in the navigation bar, hover over the **Product menu** and select **Settings**.  
2. In the side menu select **System Parameters** **> Global**.  
3. In the available tabs, select **Application**.  
4. In the **General application settings** section:  
   1. On the **Oracle Wallet Automation Credential** field, select the credential that has the necessary permission to create a wallet.  
5. Click **Save**.

Finishing the fourth step of configuring Oracle to be used as a Database Proxy, the configuration is ready and the end user can now [generate the wallet](/v4/docs/pam-sessions-how-to-generate-oracle-wallet) and [configure the IDEs](/v4/docs/pam-session-how-to-configure-ides-for-the-end-user-to-connect-to-oracle-db) to access the sessions.

---
Do you still have questions? Reach out to the [Segura Community](https://community.Segura.io/){target=`_blank`}.