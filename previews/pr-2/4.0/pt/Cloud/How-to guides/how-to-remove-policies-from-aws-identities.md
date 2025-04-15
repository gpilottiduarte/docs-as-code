# Como remover políticas de identidades AWS

Este documento fornece informações sobre como remover políticas de usuários, grupos, e papéis AWS.

## Remover políticas de identidades AWS
Para remover políticas de identidades AWS, veja os passos a seguir: 

1. Acesse a plataforma **Cloud Security**.  
2. Acesse o produto **Cloud Entitlements**.  
3. No menu **Cloud Entitlements**, clique em **Identidades**.  
4. Selecione uma identidade.  
5. Acesse a aba **Informações gerais**.  
6. Vá até a seção **Políticas**.  
7. Encontre a política que você deseja remover, clique no ícone de lixeira, e clique em **Sim**.

A remoção da política será aplicada somente após a próxima sincronização, que leva de 4 a 10 minutos. Você pode forçar a sincronização em **Configurações > Amazon Web Services > Ações > Reprocessar.**

:::(Error) (Alerta:)
- Remover políticas relacionadas à integração com o **Cloud Entitlements** vai fazer com que a sincronização da conta não funcione corretamente.  
- Remover políticas de um grupo faz com que todos os membros do grupo percam a política.
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).