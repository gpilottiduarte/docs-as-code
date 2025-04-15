# Como conectar uma organização da AWS

Este documento fornece informações sobre como conectar uma organização da Amazon Web Services (AWS), incluindo todas as contas sob a unidade organizacional (OU) ao **Cloud Entitlements**.

:::(Info) (Info)
Ao conectar uma organização AWS, somente será possível desativar ou ativar a organização, não é possível editar as contas filhas separadamente. E, caso a organização seja desativada, consequentemente as contas filhas também são.
:::

## Pré-requisitos

- Uma conta de gerenciamento sob uma unidade organizacional (OU).  
- Acesso confiável para *StackSets* dentro do AWS Organizations.

## Conectar uma organização AWS

Para conectar sua organização AWS ao **Cloud Entitlements**, veja os passos a seguir:

1. Acesse a plataforma **Cloud Security**.  
2. Acesse o produto **Cloud Entitlements**.  
3. No menu **Cloud Entitlements**, clique em **Configuração \> Amazon Web Services**.  
4. Clique em **\+ Conectar**.  
5. Selecione **Organização**.  
6. Em outra aba ou janela, acesse o **Console AWS** como um usuário *root*.  
7. Acesse **AWS Organizations**.  
8. Crie uma nova organização ou selecione uma já existente.  
9. Copie o *ID root* da organização e cole-o no campo **ID da organização** do **Cloud Entitlements**.  
10. Baixe o arquivo `.yaml` do template do CloudFormation.  
11. No Console AWS, navegue até CloudFormation e crie uma nova pilha. Certifique-se de ativar o acesso confiável na área StackSets dentro do CloudFormation.  
12. Faça upload do arquivo `.yaml` do template.  
    Info: Este template já cria todas as funções IAM necessárias e um *StackSet* para integrar o **Cloud Entitlements** com sua organização AWS. Você não precisa modificar nada sobre a pilha nesse momento.  
13. Clique no botão **Próximo** e marque a caixa de seleção.  
14. Uma vez que o processo de criação da pilha esteja concluído, copie o valor do ARN da *role* na guia **Outputs**.  
15. Cole o valor do ARN da *role* no **Cloud Entitlements**.  
16. Clique em **Conectar**.

Se conectado com sucesso, sua organização AWS aparecerá na lista de organizações conectadas. Caso contrário, você deve refazer todo o processo. Primeiro, no console AWS, delete o *StackSet* criado pelo template e, em seguida, delete a pilha. Além disso, no AWS organizations, remova a organização do **Cloud Entitlements** antes de criar outra. Você não pode conectar uma organização que já está conectada ao **Cloud Entitlements**.

Além disso, você pode ativar ou desativar a organização ligando ou desligando o botão **Status**.  

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).