# Relatórios para controle de acesso

O controle de acesso a um sistema de segurança é necessário para evitar o acesso não autorizado a credenciais privilegiadas, ativos e outras informações confidenciais armazenadas no sistema.

A seção **Relatórios** permite imprimir relatórios de registro das atividades de usuários e grupos realizadas por meio do senhasegura. Esses registros incluem informações como a data da ação, as credenciais, o acesso do usuário e muito mais.

Para acessar esses relatórios, navegue até o menu **Relatórios** > **Controle de acesso**, onde você encontrará os relatórios abaixo.

## Logs de controle de acesso

Esse relatório mostra o histórico de controle de acesso das atividades realizadas por cada usuário do sistema e os requisitos de aprovação quando necessário. Esse relatório é essencial para entender se os privilégios de cada usuário ainda estão em conformidade com o fluxo de acesso definido pela política da empresa. Além disso, ele informa se os usuários precisam ou não de aprovação para executar atividades.

O relatório de **Logs de controle de acesso** irá listar as seguintes informações de cada registro:

* **ID**: identificação da operação.
* **Data**: dia e hora em que a ação foi realizada.
* **Operação**: ação executada pelo usuário.
* **Usuário**: nome da pessoa que executou a ação.
* **IP**: IP do dispositivo que realizou o acesso.
* **Tipo de credencia**l: tipo de credencial que realizou o acesso.
* **Dispositivo**: dispositivo que realizou o acesso.
* **Nome do usuário**: nome do usuário (username) que realizou o acesso.
* **Razão**: tipo de justificativa.
* **Código de governança**: código de governança utilizado para rastreamento dentro da plataforma senhasegura.
* **Justificativa**: justificativa dada pelo usuário.
* **Mensagem**: mensagem de justificativa dada pelo usuário.
* **Ação**: essa opção aparece quando há um workflow de aprovação configurado para a credencial.
* **Origem**: plataforma usada para o acesso.

Também é possível ver mais detalhes sobre o acesso clicando no ícone de ação do registro.

## Alterações grupos de acesso

Esse relatório mostra os logs de acesso da perspectiva do grupo de acesso. Contando com logs das modificações de grupo feitas por cada usuário do sistema, tais como a criação de grupo, a remoção de usuário, entre outras.

O relatório de **Alterações grupos de acesso** irá listar as seguintes informações de cada registro:

- **Data:** data em que o grupo foi modificado.
- **Operação:** ação que o usuário realizou.
- **Usuário:** nome do usuário (*username*) que realizou a modificação.
- **Grupo:** grupo que foi modificado.
- **Usuário Grupo:** nome do usuário que aceitou a modificação.
- **Mensagem:** mensagem do sistema após a alteração.

## Eventos de sessão

Esse relatório mostra uma lista de eventos ocorridos no decorrer de uma sessão. Essa informação é importante para o rastreamento e auditoria das ações em cada sessão.

O relatório **Eventos de sessão** irá listar as seguintes informações de cada sessão:

- **Código**: código identificador para o registro.
- **Identificação da sessão**: código identificador da sessão.
- **Data/Hora**: data e hora do evento ocorrido.
- **Evento**: evento ocorrido.
- **Observação**: observação sobre o evento.
- **IP Origem**: IP que originou a ação.
- **Protocolo**: tipo de protocolo utilizado para conexão.
- **Host**: IP do host da sessão.
- **Usuário remoto**: nome de usuário (username) que realizou a ação.
- **Sessão início:** hora de início da sessão com a credencial indicada.
- **Sessão fim: final da sessão com a credencial indicada.**

## Usuários por grupo

Esse relatório mostra a lista de usuários associados a cada grupo de acesso no sistema. Essas informações são importantes para garantir que os usuários sejam atribuídos aos grupos de acesso corretos, de acordo com suas funções e responsabilidades.

O relatório **Usuários por grupo** irá listar as seguintes informações de cada usuário:

- **Nome:** nome do grupo de acesso.
- **Nome do usuário:** nome do usuário associado ao grupo de acesso.
- **Grupo de usuários:** grupo de usuário ao qual o usuário está vinculado.
- **Grupo de acesso:** nome do grupo de acesso vinculado a um usuário. Os grupos de acesso determinam quais usuários podem acessar recursos ou privilégios específicos no sistema.
- **Tipo:** tipo de credencial usada para autenticação do usuário e acesso ao sistema.
- **Data de atribuição:** data em que o usuário foi atribuído ao grupo de acesso.
- **Atribuído por:** nome da pessoa que atribuiu o usuário ao grupo.

Esse relatório ajuda a garantir que as permissões corretas sejam atribuídas a cada usuário e que o acesso a informações confidenciais seja limitado apenas àqueles que precisam delas.

## Aprovadores por grupo

Esse relatório lista todos os usuários atribuídos como aprovadores no sistema, tornando mais acessível o rastreamento dos envolvidos no processo de aprovação.

O relatório **Aprovadores por grupo** irá listar as seguintes informações dos usuários:

- **Nome:** nome do usuário atribuído como aprovador no sistema.
- **Nome do usuário:** nome de usuário selecionado para uso no sistema.
- **Grupos de usuários:** grupo de usuários ao qual o usuário atribuído pertence.
- **Grupo de acesso:** grupo que tem acesso ao processo de aprovação.
- **Tipo:** tipo de aprovador atribuído, como primário ou secundário.
- **Data atribuição:** data em que o usuário solicitou a aprovação.
- **Atribuído por:** nome do usuário que atribuiu o aprovador.

## Próximos passos
1. [Referência para credenciais](/v3-33/docs/pt/pam-reference-for-credentials).
2. [Referência sobre gerenciamento de credencial](/v3-33/docs/pt/pam-credential-management-reference).