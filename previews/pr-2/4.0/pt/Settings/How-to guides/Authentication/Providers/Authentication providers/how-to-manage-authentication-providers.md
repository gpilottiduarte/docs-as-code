# Como gerenciar provedores de autenticação

Atente-se que, caso você tenha um ambiente em funcionamento, a prática indicada é configurar o protocolo antes de ativá-lo. Em casos onde não existe um ambiente prévio em funcionamento, a ordem da ação não tem interferência no funcionamento.

No Segura você pode configurar e ativar os seguintes provedores de autenticação:

* Local.
* LDAP.
* Radius.
* Active Directory (LDAP).
* TACACS.
* OpenID.
* SAML.

## Ativar um provedor

Para ativar um provedor, siga estes passos:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Provedores**.   
   1. Todos os provedores desativados aparecerão listados em vermelho.
3. Localize o provedor desejado e, na coluna **Ação**, clique em **Ativar**.

Uma mensagem de sucesso será exibida e o provedor aparecerá listado na cor preta, com o status **Ativo**.

## Definir a ordem de utilização dos provedores

Para definir a ordem, siga estes passos:

1. Clique no botão **Ações** e selecione **Editar**.
2. No campo **Ordem**, defina a posição desse provedor na lista.
   1. Quanto menor o número, maior a prioridade.
3. Clique em **Salvar**.

O provedor será exibido na página principal com a ordem definida.

:::(info) (Info)
Se houver múltiplos provedores ativos, a ordem de autenticação seguirá os valores especificados no campo Ordem. Se um usuário não for localizado no provedor designado como Ordem 1, o Segura tentará autenticá-lo no provedor indicado como Ordem 2 e assim por diante. Clique na coluna Ordem para organizar a lista conforme a prioridade configurada.
:::

:::(warning) (Cuidado)
Por segurança, configure um método de autenticação primária e mantenha a Local como última opção para usuários finais.
:::

## Desativar um provedor

Para desativar um provedor, siga estes passos:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Autenticação \> Provedores**.   
   1. Todos os provedores desativados aparecerão listados em vermelho.
3. Localize o provedor desejado e, na coluna **Ação**, clique em **Desativar**.

Uma mensagem de sucesso é exibida e o provedor aparece listado na cor vermelha, com o status **Inativo.**

***
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura.](https://community.Segura.io/)