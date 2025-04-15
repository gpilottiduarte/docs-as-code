Descontinuação da funcionalidadeA partir da versão 4\.0 do senhasegura, esta funcionalidade será descontinuada. Para obter mais informações, consulte o artigo [Descontinuação do AWS OpsWorks](/v3-32/docs/pt/cloud-iam-aws-opsworks-deprecation).A integração com os provedores permite a gestão dos acessos às máquinas virtuais. Com o uso de serviços, como AWS OpsWorks da *Amazon Web Services (AWS)*, é possível gerenciar as chaves SSH dos usuários e iniciar sessões gravadas às máquinas virtuais.

AWS OpsWorks é o serviço de gerenciamento de configurações da AWS que permite criar automações para configurar servidores e gerenciar as instâncias do serviço Amazon EC2\.



---

## Usuários

O relatório de usuários exibe todos os usuários gerenciados pelo Cloud IAM do senhasegura que estão ativos no serviço AWS OpsWorks.

Estes usuários possuem chaves SSH gerenciadas pelo senhasegura para poder acessar as instâncias das Stacks a que possuem acesso.

### Rotacionar chave SSH do usuário

É possível rotacionar as chaves SSH dos usuários de duas formas:

1. Automaticamente, através de uma política de senha, que pode ser definida no módulo de PAM do senhasegura. Consulte o manual do módulo de PAM para entender como criar uma política de senha.
2. Manualmente, através do relatório de usuários do AWS OpsWorks do módulo de Cloud.  
Para solicitar manualmente o rotacionamento da chave SSH do usuário no serviço AWS OpsWorks , siga o menu **Cloud IAM ➔ Virtual Machines ➔ AWS ➔ OpsWorks ➔ Usuários**
3. No relatório procure pelo usuário que deseja rotacionar a chave SSH e clique no botão de ação correspondente e escolha a opção ***Rotate SSH key***.

ImportanteO tempo de sincronização da nova chave com as instâncias das Stacks depende do AWS OpsWorks e não do senhasegura. Enquanto ela não é sincronizada com as instâncias o usuário poderá não conseguir acessá\-las.

### Visualizar chave SSH do usuário

Para visualizar a chave SSH atual do usuário no serviço AWS OpsWorks , siga o menu **Cloud IAM ➔ Virtual Machines ➔ AWS ➔ OpsWorks ➔ Usuários**.

No relatório procure pelo usuário que deseja visualizar a chave SSH, clique no botão de ação correspondente e escolha a opção ***View SSH key***.

InfoO usuário senhasegura , responsável pelo ***usuário AWS OpsWorks*** , será notificado quando outro usuário senhasegura utilizar ou visualizar a chave.

### Visualizar Stacks do usuário

Para visualizar as Stacks a que o usuário possui acesso e quais suas permissões no serviço AWS OpsWorks , siga o menu **Cloud IAM ➔ Virtual Machines ➔ AWS ➔ OpsWorks ➔ Usuários**.

No relatório, procure pelo usuário sobre o qual deseja visualizar as Stacks e permissões, clique no botão de ação correspondente e escolha a opção ***Details***.



---

## Stacks

OpsWorks Stacks permite definir escalabilidade automática dos servidores de acordo com programações predefinidas ou em resposta a alterações nos níveis de tráfego. Além disso, ele usa ganchos de ciclo de vida para orquestrar alterações conforme a escala do ambiente aumenta.

Com elas, é possível implantar e configurar instâncias do Amazon EC2 em cada layer ou conectar outros recursos como bancos de dados do Amazon RDS.

Para visualizar as Stacks, siga o menu **Cloud IAM ➔ Virtual Machines ➔ AWS ➔ OpsWorks ➔ Stacks**.



---

## Instâncias

As instâncias são máquinas virtuais do serviço Amazon EC2 que fazem parte das Stacks do AWS OpsWorks.

Quando dentro de uma Stack, elas possuem a mesma configuração. Além disso, as chaves SSH dos usuários são replicadas em todas as instâncias da Stack a que ele possuir acesso.

Para visualizar as instâncias, siga o menu **Cloud IAM ➔ Virtual Machines ➔ AWS ➔ OpsWorks ➔ Instâncias**.



---

## Acesso remoto

O senhasegura assegura que os usuários realizem sessões SSH nas instâncias das Stacks de forma monitorada.

Os acessos são realizados utilizando a chave SSH do usuário escolhido no relatório e este acesso é gravado em vídeo. É possível ter seus comandos auditados, dependendo da regra definida.

InfoOs vídeos da sessão podem ser visualizados através do módulo PAM:  
**PAM Core ➔ Controle de acesso ➔ Sessões remotas**  
Consulte o ***Manual Proxy*** para mais detalhes.

### Acessar instância

Para realizar um acesso a uma instância, siga o menu **Cloud IAM ➔ Virtual Machines ➔ AWS ➔ OpsWorks ➔ Acesso remoto**.

No relatório procure pelo usuário e instância que deseja iniciar a sessão e clique no ícone ***Iniciar sessão***

ImportanteSerão exibidas apenas as instâncias de usuários que o usuário senhasegura for responsável ou de acordo com as regras do grupo de acesso que ele faz parte.

