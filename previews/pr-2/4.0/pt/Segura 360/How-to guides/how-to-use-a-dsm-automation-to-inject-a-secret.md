# Como usar uma automação DSM para injetar um segredo

## Requisitos

* Crie uma automação seguindo os passos descritos na documentação sobre [Como gerenciar automações no DevOps Secret Manager](/v4/docs/pt/how-to-manage-automations-in-Segura-devops-secret-manager).

:::(info) (Info)
Os templates de execução para injeção dos segredos, se encontram no[ repositório do Segura no GitHub](https://github.com/Segura/execution-templates).
:::

## Azure Key Vault

Na aba **Ação**, selecione o template **Azure Key Vault - Inject Secret** para injetar e rotacionar os segredos. Após a execução do template, acesse o Portal do Azure, procure pelos serviços do Key Vault e selecione o vault onde o segredo será injetado.

Você pode analisar os detalhes da injeção clicando em Secrets e em seguida clicando no item criado pelo Segura no Azure Key Vault.

## Google Secret Manager

Na aba **Ação**, selecione o template **Google Secret Manager - Inject Secret** para injetar e girar segredos. Após a execução do template, acesse o **Google Cloud Console** e selecione o projeto na guia de seleção superior.

Você pode analisar os detalhes da injeção selecionando no *Google Secret Manager > Security > Secret Management* e, na lista de segredos, clique no item criado pelo Segura.

:::(warning) (Cuidado)
Note que estes dois templates não vem cadastrados por padrão no Segura, sendo necessário adicioná-los. Você pode encontrar os templates no [repositório do Segura no GitHub](https://github.com/Segura/execution-templates).
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).