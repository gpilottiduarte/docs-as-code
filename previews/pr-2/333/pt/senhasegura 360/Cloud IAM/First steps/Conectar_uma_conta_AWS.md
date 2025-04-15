# Conectar uma conta AWS

Este documento detalha os passos para integrar a *Amazon Web Services* (AWS) com o **Cloud IAM** para o provisionamento, gerenciamento e monitoramento de acessos ao *Cloud Service Provider* (CSP).

O Cloud IAM também suporta Google Cloud Platform (GCP) e Microsoft Azure. Se desejar integrar outros CSPs, consulte a documentação [Conectar uma conta Google Cloud](https://docs.senhasegura.io/v3-33/docs/pt/cloud-iam-connect-a-google-cloud-account) e [Conectar uma conta Azure](https://docs.senhasegura.io/v3-33/docs/pt/cloud-iam-connect-an-azure-account).

## Requisitos

- Uma conta [AWS](http://console.aws.amazon.com/).  
- Uma [conta de gerenciamento](https://docs.aws.amazon.com/pt_br/organizations/latest/userguide/orgs_getting-started_concepts.html) ou uma conta com permissões IAM.

## Criar uma política no console AWS

1. No console AWS, navegue até a página **IAM**.  
2. Navegue até a página **Políticas**.  
3. Clique em **Criar política**.  
4. No **Editor de políticas**, clique na opção **JSON**.  
5. Copie o conteúdo em JSON abaixo e cole no editor de políticas.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "VisualEditor0",
            "Effect": "Allow",
            "Action": [
                "opsworks:DescribeStacks",
                "iam:DeleteAccessKey",
                "opsworks:DescribePermissions",
                "iam:CreateUser",
                "iam:CreateAccessKey",
                "iam:CreateLoginProfile",
                "opsworks:UpdateUserProfile",
                "iam:RemoveUserFromGroup",
                "iam:AddUserToGroup",
                "iam:ListAttachedUserPolicies",
                "iam:DetachUserPolicy",
                "opsworks:CreateUserProfile",
                "iam:DeleteLoginProfile",
                "iam:ListAccessKeys",
                "iam:GetPolicyVersion",
                "iam:ListPolicies",
                "iam:GetPolicy",
                "iam:AttachUserPolicy",
                "iam:DeleteUserPolicy",
                "opsworks:DescribeUserProfiles",
                "iam:UpdateAccessKey",
                "iam:ListRoles",
                "iam:DeleteUser",
                "iam:ListUserPolicies",
                "opsworks:DeleteUserProfile",
                "iam:ListGroupsForUser",
                "opsworks:DescribeInstances",
                "iam:ListUsers",
                "iam:ListGroups",
                "iam:GetUser",
                "iam:GetLoginProfile",
                "iam:GetAccountAuthorizationDetails"
            ],
            "Resource": "*"
        }
    ]
}
```

6. Clique em **Próximo**.  
7. Dê um nome facilmente identificável para sua política.  
8. Configure as configurações opcionais, se necessário.  
9. Clique em **Criar política**.

Para mais detalhes, consulte a documentação da AWS sobre [Criar políticas do IAM (console)](https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/access_policies_create-console.html).

## Criar um usuário com a política no console AWS

1. No console AWS, navegue até a página **IAM**.  
2. Navegue até a página **Usuários**.  
3. Clique em **Criar usuário**.  
4. Atribua um nome de usuário e clique em **Próximo**.  
5. Selecione a opção **Anexar políticas diretamente**.  
6. Selecione a política que você criou nos passos anteriores na lista.  
7. Clique em **Criar usuário**.

Para mais detalhes, consulte a documentação da AWS sobre [Criar um usuário do IAM na Conta da AWS](https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_users_create.html).

## Criar uma chave de acesso no console AWS

1. No console AWS, navegue até a página **IAM**.  
2. Navegue até a página **Usuários**.  
3. Clique no usuário que você criou nos passos anteriores.  
4. Navegue até a aba **Credenciais de segurança**.  
5. Na seção **Chaves de acesso**, clique em **Criar chave de acesso**.  
6. Selecione a opção **Serviço de terceiros**.  
7. Adicione uma etiqueta, se necessário.  
8. Clique em **Criar chave de acesso**.  
9. Copie o valor da chave de acesso e a chave de acesso secreta e cole-os em um editor de texto. Você também pode clicar no botão **Download do arquivo .csv** para baixar as credenciais. Você vai precisar desses valores para integrar sua conta com o senhasegura.

Para mais detalhes, consulte a documentação da AWS sobre [Gerenciar chaves de acesso para usuários do IAM](https://docs.aws.amazon.com/pt_br/IAM/latest/UserGuide/id_credentials_access-keys.html).

## Integrar a AWS com o Cloud IAM

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Cloud IAM**.  
2. No menu lateral, selecione **Configurações** \> **Contas.**  
3. Clique no ícone de **Exibir ações**, representado pelos três pontos verticais, e selecione a opção **Adicionar conta**.  
4. Na nova janela, atribua um **Nome** à conta.  
5. Clique em **AWS**.  
6. Clique na aba **AWS**.  
7. Cole a chave de acesso do usuário no campo **Chave de acesso**.  
8. Cole a chave secreta no campo **Segredo da chave de acesso**.  
9. Selecione a **Região padrão**.  
10. Clique no botão **Confirmar**.

Assim que você terminar, a página **Contas** do senhasegura será atualizada com sua conta AWS recém-integrada.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).