# Como conectar um projeto do Google Cloud Platform

Este documento fornece informações sobre como conectar um projeto do Google Cloud Platform (GCP) ao **Cloud Entitlements**.

## Pré-requisitos

- Uma conta de serviço com as seguintes funções:  
    - `iam.serviceAccountKeys.list`  
    - `iam.serviceAccounts.list`  
    - `iam.roles.list`  
    - `iam.roles.get`  
    - `resourcemanager.organizations.get`  
    - `resourcemanager.organizations.getIamPolicy`  
    - `resourcemanager.projects.getIamPolicy`  
    - `resourcemanager.projects.list`  
- Uma chave de acesso associada a conta de serviço.  
- As seguintes APIs do Google Cloud Platform ativas:  
    - *Resource manager*.  
    - *Identity and access management (IAM)*.  
    - *Cloud assets*.

## Conectar um projeto do Google Cloud Platform

Para conectar seu project GCP ao **Cloud Entitlements**, veja os passos a seguir:

1. Acesse a plataforma **Cloud Security**.  
2. Acesse o produto **Cloud Entitlements**.  
3. No menu **Configuração**, clique em **Google Cloud Platform**.  
4. No canto superior direito, clique em **\+ Conectar**.  
5. Selecione **Projeto**.  
6. No campo **Nome \***, insira um nome para identificar o projeto.  
7. No campo **ID do projeto \***, insira o ID do projeto.  
8. (Opcional) No campo **Etiquetas**, atribua etiquetas para o projeto. Separe cada etiqueta usando a tecla **Enter**.  
9. Faça o upload do arquivo `.json` da chave da conta de serviço do seu projeto GCP.  
10. Clique em **Salvar**.

Se a conexão for bem-sucedida, seu projeto GCP aparecerá na lista de projetos conectados. 

Além disso, você pode ativar ou desativar o projeto no botão **Status**.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).