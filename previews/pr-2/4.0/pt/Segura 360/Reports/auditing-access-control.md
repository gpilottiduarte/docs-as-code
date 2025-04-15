# Relatório controle de acesso

É necessário controlar o acesso a sistemas de segurança como o Segura para impedir o acesso não autorizado a credenciais privilegiadas, ativos e outros componentes armazenados no sistema.

Nesta seção, você poderá imprimir relatórios de log dos usuários e atividades de grupo realizadas através do Segura, com informações como data da atividade, credencial e usuário acessado e muito mais.

Acesse o menu **Reports ➔ Controle de acesso**

## **Controle de acesso**

Este relatório mostra o histórico de controle de acesso das atividades realizadas por cada usuário do sistema e os requisitos de aprovação quando necessário. Essa informação é importante para entender se os privilégios de cada usuário ainda estão conforme o fluxo de acesso definido pela ***política*** da empresa. Além disso, informa se os usuários precisam de aprovação ou não para executar atividades.

O ***Relatório de logs de controle de acesso*** imprimirá as seguintes informações:

- ***Data**:* dia e hora em que a alteração foi realizada
- ***Operação**:* realizada pelo usuário
- ***Usuário**:* é o nome do usuário que será detalhado
- ***IP**:* do dispositivo que o usuário executou a operação
- ***Tipo de credencial**:* da senha acessada
- ***Dispositivo**:* que foi acessado
- ***Nome do usuário**:* que foi acessado
- ***Motivo**:* é o tipo de justificação que o usuário fornece para acessar a credencial
- ***Cód. Governança**:* é o código usado para rastrear o acesso em Segura
- ***Justificativa**:* é o texto justificativo que o usuário fornece para executar a visualização
- ***Mensagem**:* é o que o sistema imprime no solicitante, relacionado às permissões e muito mais
- ***Origem**:* a plataforma usada para acessar

Também é possível ver mais detalhes sobre o acesso clicando no ícone de ação do registro

## **Grupo de acesso**

Este relatório mostra os registros de acesso, considerando os grupos de acesso. Inclui o registro das modificações do grupo feitas por cada usuário do sistema, como criação de grupo, remoção de usuário, entre outros.

O ***Relatório de logs de grupo de acesso*** imprimirá as seguintes informações:

- ***Data:*** onde o grupo foi modificado
- ***Operação:*** que o usuário realizou no grupo
- ***Usuário:*** é o nome do usuário que realizou a modificação
- ***Grupo:*** que foi modificado
- ***Grupo de usuários:*** é o nome do usuário que admitiu a modificação
- ***Mensagem:*** é o que o sistema imprime após a modificação

## **Usuário por grupo**

Este relatório mostra a lista de usuários associados a cada grupo de acesso no sistema. Essa informação é essencial para atribuir corretamente os usuários aos grupos de acesso de acordo com suas funções e responsabilidades no trabalho.

O relatório **Usuários por grupo de acesso** traz as seguintes informações:

- **Nome:** o nome do grupo de acesso.
- **Nome de usuário:** o nome do usuário associado ao grupo de acesso.
- **Departamento:** o tipo de credencial associada ao usuário.
- **Grupo de acesso**: Isso se refere ao nome do grupo de acesso vinculado a um usuário. Os grupos de acesso determinam quais usuários podem acessar recursos ou privilégios específicos no sistema.
- **Tipo**: Refere-se ao tipo de credencial usada para autenticação do usuário e acesso ao sistema.
- **Data de atribuição**: Esta é a data em que o usuário foi atribuído ao grupo de acesso.
- **Atribuído por**: Este é o nome da pessoa que atribuiu o usuário ao grupo.

Este relatório ajuda a garantir que as permissões corretas sejam atribuídas a cada usuário e que o acesso a informações sensíveis seja limitado apenas às pessoas que precisam delas.

## **Aprovadores por grupo**

Este relatório lista todos os usuários designados como aprovadores no sistema, tornando mais fácil rastrear aqueles envolvidos no processo de aprovação.

O relatório **Aprovadores por grupo** traz as seguintes informações:

- **Nome**: Refere-se ao nome do usuário designado como aprovador no sistema.
- **Nome de usuário**: Refere-se ao nome de usuário selecionado para ser usado no sistema, aguardando aprovação.
- **Grupo de usuários**: Refere-se ao grupo de usuários ao qual o usuário designado pertence.
- **Grupo de acesso**: Refere-se ao grupo que tem acesso ao processo de aprovação.
- **Tipo**: Refere-se ao tipo de aprovador designado, como primário ou secundário.
- **Data de atribuição**: Refere-se à data em que o usuário solicitou a aprovação.
- **Atribuído por**: Refere-se ao nome do usuário que designou o aprovador.
