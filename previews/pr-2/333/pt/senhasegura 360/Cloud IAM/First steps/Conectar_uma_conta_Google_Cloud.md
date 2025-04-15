# Conectar uma conta Google Cloud

Este documento detalha os passos para integrar a Google Cloud Platform (GCP) com o **Cloud IAM** para o provisionamento, gerenciamento e monitoramento de acessos ao *Cloud Service Provider* (CSP). Você pode conectar um **projeto GCP** ou uma **organização GCP** ao **Cloud IAM**.

:::(info) (Info)
O **Cloud IAM** também suporta Amazon Web Services (AWS) e Microsoft Azure. Se desejar integrar outros CSPs, consulte a documentação [Conectar uma conta AWS](/v3-33/docs/pt/cloud-iam-connect-an-aws-account) ou [Conectar uma conta Azure](/v3-33/docs/pt/cloud-iam-connect-an-azure-account).
:::

Antes de integrar uma conta GCP com o senhasegura, você precisará de uma conta na [Google Cloud Platform](https://cloud.google.com/).

:::(warning) (Aviso)
Para integrar sua organização GCP, você precisará do papel de [Administrador da organização](https://cloud.google.com/resource-manager/docs/access-control-org#resourcemanager.organizationAdmin) ou de um papel similar com permissão para gerenciar IAM e recursos de API para a organização. Para projetos, você precisará do papel de [Administrador de IAM do projeto](https://cloud.google.com/resource-manager/docs/access-control-proj#resourcemanager.projectIamAdmin) ou de um papel similar com permissão para gerenciar IAM e recursos de API para o projeto.
:::

## Habilitar APIs no Google Cloud Console

1. Como um **projeto** no console GCP, navegue até a página de **APIs & serviços**.
2. Clique em **Ativar APIs e serviços**.
3. Na barra de pesquisa, pesquise e ative as seguintes APIs:
    - **Cloud Resource Manager API** por Google Enterprise API.
    - **Cloud Asset API por Google Enterprise API.**
    - **Identity and Access Management (IAM) API** por Google Enterprise API.
4. Para ativar as APIs, selecione a API da lista e clique em **Ativar**.

## Criar um papel no Google Cloud Console

1. Como um **projeto** no console GCP, navegue até a página **IAM & administrador** > **Papéis**.
2. Clique em **Criar papel**.
3. Dê um nome ao seu papel.
4. Configure opções adicionais como for necessário.
5. Clique em **Adicionar permissões**.
6. Selecione as seguintes permissões:

```
iam.roles.list
iam.serviceAccountKeys.create
iam.serviceAccountKeys.delete
iam.serviceAccountKeys.get
iam.serviceAccountKeys.list
iam.serviceAccounts.create
iam.serviceAccounts.delete
iam.serviceAccounts.get
iam.serviceAccounts.list
iam.serviceAccounts.update
resourcemanager.projects.get
resourcemanager.projects.getIamPolicy
resourcemanager.projects.setIamPolicy
```

6. Clique em **Criar**.

:::(Info) (Info)
Você pode pular os próximos passos se quiser apenas conectar um projeto.
:::

8. Para integrar com sua **organização GCP**, mude para a **Visualização de organização**.
9. Repita os passos anteriores para criar um segundo papel e atribuir as seguintes permissões de organização:

```
resourcemanager.projects.list
resourcemanager.organizations.get
resourcemanager.organizations.getIamPolicy
resourcemanager.organizations.setIamPolicy
```

9. Salve suas alterações.

:::(info) (Info)
Para mais detalhes, consulte a documentação do GCP sobre [como gerenciar papéis e permissões](https://cloud.google.com/iam/docs/roles-overview).
:::

## Criar uma conta de serviço no Google Cloud Console

1. Como um **projeto** no console GCP, navegue até a página **IAM & administrador** > **Contas de serviço**.
2. Clique em **Criar conta de serviço**.
3. Dê um nome facilmente identificável para sua conta de serviço. Você utilizará esta conta para integrar com o senhasegura.
4. Atribua um ID à sua conta de serviço.
5. Clique em **Criar e continuar**.
6. Escolha o papel que você criou com as permissões necessárias.
7. Configure opções adicionais como for necessário.
8. Clique em **Concluir**.

:::(info) (Info)
Para mais detalhes, consulte a documentação do GCP sobre [como criar uma conta de serviço](https://cloud.google.com/iam/docs/service-accounts-create?hl=en#iam-service-accounts-create-console).
:::

Apenas para **organizações GCP**, você também precisará adicionar a conta de serviço que você criou como um principal no nível da organização. Para fazer isso:

1. Como um **projeto** no console GCP, navegue até a página **IAM & administrador** > **Contas de serviço**.
2. Copie o **Email da conta de serviço**.
3. Altere para a **Visualização de organização** no console GCP.
4. Navegue para a página **IAM**.
5. Clique em **Permitir acesso**.
6. Cole o endereço de email da conta de serviço no campo **Novos principais**.
7. Em **Papel**, selecione o papel com as permissões de organização.
8. Configure opções adicionais como for necessário.
9. Clique em **Salvar**.

:::(info) (Info)
Para mais detalhes, consulte a documentação do GCP sobre [como gerenciar acesso a organizações](https://cloud.google.com/iam/docs/granting-changing-revoking-access?hl=en).
:::

## Criar uma chave de acesso para a conta de serviço no Google Cloud Console

1. Como um **projeto** no console GCP, navegue até a página **IAM & administrador** > **Contas de serviço**.
2. Clique na conta de serviço que você criou nos passos anteriores.
3. Navegue até a aba **Keys**.
4. Clique em **Adicionar chave** > **Criar nova chave**.
5. Selecione a opção **JSON**.
6. Clique em **Criar**. Esta ação irá baixar um arquivo JSON para o seu dispositivo. Este arquivo deve ser enviado ao Cloud IAM para concluir o processo de integração.

:::(info) (Info)
Para mais detalhes, consulte a documentação do GCP sobre [como criar chaves para contas de serviço](https://cloud.google.com/iam/docs/keys-create-delete?hl=en).
:::

## Integrar o GCP com Cloud IAM

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Cloud IAM**.
2. No menu lateral, selecione **Configurações** > **Contas.**
3. Clique no ícone de **Exibir ações**, representado pelos três pontos verticais, e selecione a opção **Adicionar conta**.
4. Na nova janela, atribua um **Nome** à conta.
5. Clique em **Google Cloud**.
6. Clique na aba **Google Cloud**.
7. No **Arquivo de credenciais**, selecione o arquivo JSON, que é a chave criada para a conta de serviço.
8. Clique em **Confirmar**.

Assim que você terminar, a página **Contas** do senhasegura será atualizada com sua conta GCP recém-integrada.