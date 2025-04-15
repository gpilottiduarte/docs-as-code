# Como remover funções do Azure

Este documento fornece informações sobre como remover funções de usuários, grupos, e aplicações do Azure.

## Remover funções de identidades Azure

Para remover funções de identidades Azure, veja os passos a seguir: 

1. Acesse a plataforma **Cloud Security**.  
2. Acesse o produto **Cloud Entitlements**.  
3. No menu **Cloud Entitlements**, clique em **Identidades**.  
4. Selecione uma identidade do Azure.  
5. Acesse a aba **Informações gerais**.  
6. Vá até a seção **Funções**.  
7. Encontre a função que você deseja remover, clique no ícone de lixeira, e clique em **Sim**.

A remoção da função será aplicada somente após a próxima sincronização, que leva de 4 a 10 minutos. Você pode forçar a sincronização em **Configurações \> Microsoft Azure \> Ações \> Reprocessar.**

:::(Error) (Alerta)
- Remover funções relacionadas à integração com o **Cloud Entitlements** vai fazer com que a sincronização da conta não funcione corretamente.  
- Remover funções de um grupo faz com que todos os membros do grupo percam a política.
:::

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).