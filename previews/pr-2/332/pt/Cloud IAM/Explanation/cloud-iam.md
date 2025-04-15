# Cloud

O **Cloud IAM** é um módulo senhasegura para Gerenciamento de Acesso e Identidadades (*Identity and Access Management*) para o controle de acesso a recursos em Provedores de Serviço em Nuvem, ou *Cloud Service Providers* (CSPs).

O **Cloud IAM** possibilita o provisionamento de usuários e contas de serviço em uma arquitetura multicloud. Com ele, um administrador pode monitorar todos os ambientes e usuários em nuvem de forma centralizada e controlada. Além disso, o senhasegura rastreia as atividades dos usuários, garantindo conformidade por meio de relatórios de auditoria e gravações de sessão.

![Fluxo sem e com o Cloud IAM implementado](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/overview-pt.png){height="" width=""}

## Como funciona

![Fluxo interno do módulo Cloud IAM](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/cloudiam-pt.png){height="" width=""}

O **Cloud IAM** possibilita que o controle de acesso seja gerenciado em vários CSPs por meio de um único fluxo de aprovação. Quando uma solicitação é feita para acessar um recurso, o administrador recebe uma notificação no console do **Cloud IAM** contendo os detalhes necessários. A partir do console, o administrador pode criar ou modificar usuários ou grupos de acesso em vários provedores de nuvem simultaneamente. Isso envolve configurar as permissões, funções, credenciais e chaves de acesso necessárias para a solicitação. Uma vez provisionado o usuário, o **Cloud IAM** recebe informações dos CSPs e cria detalhes de auditoria para cada acesso concedido em todos os CSPs configurados.

## Funcionalidades

As principais funcionalidades do **Cloud IAM** incluem:

- Provisionamento centralizado de identidades em multicloud.
- Provisionamento imediato de usuários, chaves de acesso e contas de serviço.
- Criação de modelos. Esses modelos criam uma máscara padrão para a criação de novos usuários e contas de serviço.
- Provisionamento dinâmico de políticas, funções, recursos e permissões através do [Devops Secret Manager](https://docs.senhasegura.io/docs/devops-secret-manager).
- Provisionamento de credenciais Just-In-Time (JIT) e controle de acesso JIT.
- Gravação de sessões remotas do console da nuvem AWS.
- Gerenciamento de solicitações de acesso e grupos de acesso.
- Relatórios de auditoria.

## Aplicabilidade

Com o **Cloud IAM**, você pode configurar identidades em múltiplos CSPs ao mesmo tempo. O módulo atualmente oferece suporte aos seguintes provedores:

- **Amazon Web Services (AWS)**.
- **Microsoft Azure**.
- **Google Cloud Provider (GCP)**.

:::(Info) (Info)
Cada CSP possui seu próprio método de integração. Verifique a documentação de [Adicionar conta](https://docs.senhasegura.io/docs/cloud-iam-add-account) para aprender como conectar o senhasegura aos seus CSPs.
:::