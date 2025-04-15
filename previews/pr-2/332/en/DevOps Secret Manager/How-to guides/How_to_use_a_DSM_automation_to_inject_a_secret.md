# How to use a DSM automation to inject a secret

## Requirements

* Create automation by following the steps described in [How to manage automations on senhasegura DevOps Secret Manager ](/v3-32/docs/how-to-manage-automations-in-senhasegura-devops-secret-manager)document.

:::(info) (Info)
The execution templates for injecting the secrets can be found in the [senhasegura repository on GitHub](https://github.com/senhasegura/execution-templates).
:::

## Azure Key Vault

In the **Action** tab, select the **Azure Key Vault - Inject Secret** template to inject and rotate the secrets. After the template execution, access the Azure Portal, search for Key Vault's services, and select the vault where the secret will be injected.

You can analyze the injection details by clicking on Secrets and then clicking on the item created by senhasegura on the Azure Key Vault.

## Google Secret Manager

In the **Action** tab, select the **Google Secret Manager - Inject Secret** template to inject and rotate secrets. After the template execution, access the **Google Cloud Console** and select the project in the upper selection tab.

You can analyze the details of the injection by selecting on *Google Secret Manager > Security > Secret Management*, and, in this secrets list, click on the item created by senhasegura.

:::(warning) (Caution)
Note that these two templates aren't registered with senhasegura by default, so you must add them. You can find the templates in the [senhasegura repository on GitHub](https://github.com/senhasegura/execution-templates).
:::

---

Do you still have questions? Reach out to the [senhasegura Community](https://community.senhasegura.io/).