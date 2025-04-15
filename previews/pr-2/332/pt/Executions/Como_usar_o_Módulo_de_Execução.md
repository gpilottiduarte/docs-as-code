Os recursos do senhasegura devem realizar tarefas assíncronas em sistemas de destino para alterar senhas, executar tarefas privilegiadas, etc. Esses sistemas são executados com protocolos padrão ou interfaces facilmente gerenciadas pelo senhasegura sobre seus [Executores](https://docs.senhasegura.io/v3-32/docs/pt/executions-executors).

O módulo **Execução** senhasegura centralizará todas as operações visando executar comandos ou interações em sistemas remotos. Mantendo todos os módulos do cliente notificados, fornecendo uma trilha de auditoria rica, logs, novas tentativas de falhas e painéis de dados avançados para aumentar a governança segura do cliente.

## Como usar o Módulo de Execução

* [Criar ou editar templates](/v3-32/docs/pt/executions-templates)
* [Alterar senha da credencial](https://docs.senhasegura.io/v3-32/docs/pt/password-change)
* [Criar uma operação encadeada](/v3-32/docs/pt/chained-operation-automation)



---

## Templates

Os templates são os códigos\-fonte da tarefa a ser executada. Eles têm uma sintaxe específica definida por seu **Executor**, e podem ser compostos por tags que representam credenciais, chaves SSH, dispositivos, certificados, segredos do DSM ou valores definidos pelo usuário. Durante a execução, o senhasegura substituirá essas tags pelas informações.

Observe o gráfico a seguir para entender como eles interagem.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664916836938.png)

Uma alteração de senha ocorrendo no módulo de execução

 

Como a imagem demonstra, a origem do gatilho solicitará uma execução assíncrona ao módulo **Execução**. Muitos módulos podem ordenar esta execução.

O gatilho pode ser uma visualização de senha, o uso de uma credencial na sessão, uma expiração de senha, uma solicitação manual por um administrador e gatilhos específicos de outros módulos.

Essa solicitação criará uma operação.

Neste exemplo, a operação possui um **Executor** para realizar a interface com o sistema de destino, um **Template** contendo as interações que o Executor deve realizar e uma **Credencial** de destino que será afetada pelos comandos dos templates no sistema de destino.

Ao final da operação, o resultado será registrado no senhasegura. O módulo solicitante será notado. Do início ao fim, todos os detalhes da operação são registrados nos relatórios do módulo cliente e do módulo **Execução**. As mensagens do SYSLOG/SIEM serão ecoadas e os painéis serão atualizados para garantir a governança corporativa.



---

## Plugins de executores

Eles são mecanismos usados para conectar e interagir com um sistema de destino. O sistema pode ser um servidor SSH, um RPC Windows, um site, um servidor Web, um provedor de nuvem ou qualquer outro sistema interativo.



---

## Operações

Representam a execução de um template em um dispositivo de destino. Quando você solicita uma alteração de senha, por exemplo, isso cria uma operação. A operação pode ter várias tentativas de execução.



---

## Operação encadeada usando esquema de credencial pai\-filho

Como **Administrador**, você pode criar uma operação encadeada usando o esquema de credencial pai\-filho. Com isso, o módulo **Execução** registrará e agendará as alterações de senha para todas as credenciais filhos quando a credencial pai tiver sua senha alterada com sucesso.

O resultado de uma operação filho não afetará as operações do pai ou de outras credenciais filhos.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1664916877397.png)

Uma operação encadeada usando esquema pai\-filho

 



---

## Ativando a execução

Quando usar o módulo **Execução**:

* Alteração automática de senha no **senhasegura PAM Proxy**
* Quando um período de senha de credencial expira
* Quando um usuário visualiza uma senha de credencial
* Quando uma credencial é usada em uma sessão
* Quando algum Aplicativo WebService A2A solicitou
* Quando sua credencial pai iniciou uma ação de mudança encadeada
* Ativação ou inativação de credenciais pelo **senhasegura PAM Proxy**
* Quando um usuário precisa iniciar uma sessão usando uma credencial bloqueada
* Quando um usuário precisa iniciar uma sessão usando uma credencial JIT
* Quando um usuário finalizou uma sessão
* Quando uma tarefa automatizada precisa ser iniciada no **Módulo Gerenciador de Tarefas**
* Quando um usuário aciona a execução da tarefa
* Quando o cronograma de execução da tarefa acionou a execução
* Quando um certificado SSL, gerenciado pelo **Módulo Gerenciador de Certificados**, precisa de alguma ação
* Quando uma solicitação de certificado deve ser liberada
* Quando um certificado precisa ser assinado em uma CA
* Quando um certificado precisa ser revogado
* Quando um certificado precisa ser publicado

Através do módulo **Execução**, o usuário terá controle sobre as seguintes ações:

* Solicitar alteração de informações privilegiadas
* Acompanhar as operações de informações privilegiadas
* Detalhar tentativas de alterar informações privilegiadas
* Solicitar uma informação privilegiada alterando a reconciliação
* Configurar automação de operações de informações privilegiadas
* Conhecer os parâmetros de alteração de informações privilegiadas
* Criar modelos de alteração de informações privilegiadas
* Segregar dispositivos e credenciais por meio de perfis
* Configurar automação encadeada

Para cumprir suas funções, o módulo de **Execução** pode ser dividido em três grandes entidades.



---

## Artigos Relacionados

* [Executores](https://docs.senhasegura.io/v3-32/docs/pt/executions-executors)
* [Templates](https://docs.senhasegura.io/v3-32/docs/pt/executions-templates)
* [Operações](https://docs.senhasegura.io/v3-32/docs/pt/operations)
* [Rotacionar senhas](https://docs.senhasegura.io/v3-32/docs/pt/password-change)
