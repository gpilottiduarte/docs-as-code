# Sobre a arquitetura do Cloud Security

Neste artigo você encontra uma visão geral da arquitetura *multi-tenant* do **Cloud Security** e definições de seus três principais níveis de componentes.

![Captura de tela 2023-11-24 115241.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/Captura%20de%20tela%202023-11-24%20115241.png){height="" width=""}

## Organização
Uma organização é o primeiro nível na arquitetura *multi-tenant* do Cloud Security. Cada organização é uma entidade independente que possui seu próprio conjunto de tenants.

No nível da organização, sempre há pelo menos um administrador. Por padrão, quando uma organização é criada, ela vem com um tenant associado a ela.

## Tenant
Um tenant é o segundo nível da arquitetura *multi-tenant*. Ele representa um ambiente completamente isolado e segregado dentro de uma organização.

Cada organização deve ter pelo menos um tenant, e cada tenant está sempre afiliado a uma organização. Além disso, cada tenant deve ter pelo menos um administrador.

## Usuários
Usuários são aqueles que executam ações dentro dos tenants. Os usuários podem fazer parte de um ou mais tenants, seja dentro da mesma organização ou em organizações diferentes.

Os usuários no **Cloud Security** podem ter funções diferentes, que determinam seu acesso e responsabilidades. Aqui estão as principais funções dentro da arquitetura *multi-tenant*:

| **Função** | **Descrição** |
| --- | --- |
| **Cloud Security - Administrador do Tenant** | Esta função é responsável pela gestão geral do tenant e possui acesso administrativo.  |
| **Cloud Security - Auditor do Tenant** | Esta função tem acesso somente à leitura dos relatórios de auditoria do **Cloud Security**. |
| **Cloud Entitlements - Usuário básico** | Esta função tem acesso básico aos recursos do senhasegura **Cloud Entitlements**. |
| **Cloud Entitlements - Administrator** | Esta função tem acesso básico aos recursos do **Cloud Entitlements**. |
| **Cloud Entitlements - Auditor** | Esta função tem acesso somente a leitura de todas as páginas do **Cloud Entitlements**. |
