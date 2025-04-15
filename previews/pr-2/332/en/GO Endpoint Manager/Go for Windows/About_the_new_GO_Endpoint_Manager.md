# About the new GO Endpoint Manager

After updating to senhasegura 3.32 version, existing users of the **GO Endpoint Manager** will notice two configuration options in the Grid Menu - the previous and the new version. However, if you've never used the GO PEDM service before, you'll only see the new version in the web interface.

## Old vs New GO Endpoint Manager

Starting from version 3.32, the PEDM Go Endpoint Manager for Windows has adopted a new architecture to enhance performance, security, and introduce new features. However, these improvements required a new structure. In upcoming versions, the **OLD** Go Endpoint Manager refers to all the configurations that have been executed in client version 3.31 or previous version. The **NEW** Go Endpoint Manager represents a new instance of Go, which only operates and should be used exclusively with the client in version 3.32 or higher.

## Which Option to Use

- If you have upgraded **senhasegura** to version 3.32 but still want to use the **GO Endpoint Manager** client 3.31, simply select the **GO Endpoint Manager** option in your senhasegura menu. No further action is required.
- If you have updated both **senhasegura** and the **GO Endpoint Manager** client to 3.32, use the **New GO Endpoint Manager**. 

:::(Warning) (Atention)
Be sure to review the [migration policies](#migration-of-policies-from-go-endpoint-manager-to-new-go-endpoint-manager) section to understand how these rules will be migrated.
:::

## Documentation Portal Update

The [documentation portal](https://docs.senhasegura.io/docs) has also been updated following the same logic.

- Users continuing to use the PEDM GO Endpoint Manager client version **3.31 or previous version** should refer to this documentation: **[Windows](https://docs.senhasegura.io/v3-32/docs/go-endpoint-manager-windows-1).**
- Users who have updated senhasegura and the PEDM GO Endpoint Manager for Windows to version **3.32 or higher** should refer to this documentation: **[New Windows](https://docs.senhasegura.io/v3-32/docs/go-endpoint-manager-windows)**.

## Scenarios for PEDM GO Endpoint Manager Client

For the new version of the **PEDM GO Endpoint Manager** client, you have three possible scenarios with distinct requirements:

### Scenario 1

You have not used the PEDM GO Endpoint Manager client before. In this case, no modification occurs, but you will not be able to use the **PEDM GO Endpoint Manager client** in versions prior to 3.32.

### Scenario 2

You have used the PEDM GO Endpoint Manager client in versions prior to 3.31. In this case, you will have two options of **PEDM GO Endpoint Manager** - the old one, identified by the name **GO Endpoint Manager**; and the new one, identified by the name **New GO Endpoint Manager**.

### Scenario 3

You cannot update the PEDM GO Endpoint Manager client to the new version of the PEDM GO Endpoint Manager client 3.32. In this case, it will not be possible to use **New GO Endpoint Manager**.

:::(error) (Important)
- The new **PEDM GO Endpoint Manager** (version 3.32) should be used exclusively with the **PEDM GO Endpoint Manager client** of the same version, both updated.
- The **PEDM GO Endpoint Manager** prior to version 3.31 is compatible with the **PEDM GO Endpoint Manager client** in versions 3.31, 3.30, 3.29.
:::

## Migration of Policies from GO Endpoint Manager to New GO Endpoint Manager

During the update to senhasegura 3.32, there will be an automatic migration of the parameterized data in your environment. This migration will occur once, during the update of senhasegura and no user action is necessary.

### Migrated Policies

The policies registered on the following pages will be automatically migrated from old to new:

- **Linux**
    - **Access policies**
    - **Rules for sudo**
- **Windows**
    - **Access lists**
    - **Commands**
    - **Directory and file control**
    - **Directory and file scan**
    - **System registry control**
- **Automation**
- **Segregated Parameters**
- **Registered workstation in GO Endpoint Manager**
- **Registered users in GO Endpoint Manager**

:::(Info) (Info)
Workstations with the **PEDM GO Endpoint Manager** client already registered in senhasegura 3.31 will be maintained even after updating to senhasegura 3.32. That is, if a workstation has already been registered in senhasegura 3.31, it is not necessary to register it again after updating senhasegura to 3.32.
:::

### Policies Manual Migration

Any changes in the GO policies in versions 3.31 or earlier **after** upgrading to version 3.32 **will not be automatically migrated** for use with the new GO in version 3.32 or higher. However, you can manually migrate these changes using the "Send to the new GO Endpoint Manager" button within the policy action options in the Go Windows policy report.

:::(Warning) (Important)
When migrating policies to PEDM GO Endpoint Manager version 3.32, they will function as in version 3.31. However, if the manual migration feature is used to update a policy to the New PEDM GO Endpoint Manager, the rule in the new version will be overwritten by the old rule being migrated.
:::

