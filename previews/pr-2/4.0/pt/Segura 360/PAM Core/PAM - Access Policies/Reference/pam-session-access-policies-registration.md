# Adicionar políticas de acesso

Este documento fornece informações sobre a tela de formulário **Adicionar políticas de acesso**, onde é possível adicionar novos grupos e suas políticas de acesso e/ou alterar os grupos já cadastrados.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Controle de acesso > Políticas de acesso > Adicionar.**

---
## Aba Geral  
Esta seção fornece informações gerais da política de acesso.

| **Item**  | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Nome da política de acesso*** | Campo de texto | Sim | Nome identificador do grupo de acesso. |
| **Status** | Botão *toggle* | Não | Ativa ou desativa o status do grupo de acesso. |
| **Descrição** | Campo de texto | Não | Informações gerais sobre o grupo de acesso. |

:::(info) (**Info**)  
Se a sincronização de grupo AD estiver habilitada, permissões para membros sincronizados por esse grupo serão sobrescritas na próxima sincronização. Mudanças manuais (adicionar ou remover usuários) serão desfeitas.  
:::

---
## Aba Usuários  
Esta seção fornece informações da lista dos usuários inseridos na política de acesso.

| **Item**  | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Usuários** | Campo de texto | Não | Busca pelo nome do usuário na lista de usuários incluídos no grupo. |
| **Adicionar** | Botão | Não | Abre a tela de usuários do Segura, para que sejam incluídos no grupo. |
| **Tabela de usuário** | Tabela | Não | Dados de cada membro do grupo de acesso contendo *os campos caixa de seleção*, *Cód., Nome, Nome do usuário, E-mail,* *Tipo de criação, Departamento, Adicionado por* e *Adicionado em.* |

:::(info) (**Info**)  
Por padrão, serão aplicadas as configurações do grupo mais restritivo para os usuários pertencentes a mais de um grupo de acesso.  
:::

---
Nas abas **Senha** e **Sessões**, você pode selecionar os dias e a faixa de horário, que será exigido um workflow de aprovação. Essas funcionalidades são **independentes** entre si, pode estar ativa em Senha, mas desativada em Sessões, ou vice-versa.

## Aba Senha  

Esta seção fornece informações sobre as regras de senhas da política de acesso.  

:::(info) (**Info**)  
Nesta seção alguns campos só serão exibidos após alguns campos específicos serem habilitados.  
:::

| **Item**  | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Permitir usuários a visualizar senhas** | Botão *toggle* | Não | Ativa ou desativa a permissão se a senha da credencial pode ser vista pelo usuário. |
| **Parte da senha que será visualizada*** | Menu suspenso | Sim | Opções da forma da visualização da senha. As opções são: *Senha completa*, *1ª parte da senha* e *2ª parte da senha*. Os membros deste grupo terão acesso apenas à fração definida neste campo. Isto não impede que a senha seja utilizada pela funcionalidade de proxy, uma vez que o usuário não tem acesso à senha em texto plano ao utilizar qualquer uma de nossas soluções de proxy.  |
| **Solicitar aos usuários uma justificativa para visualizar senhas** | Botão *toggle* | Não | Ativa ou desativa a necessidade do usuário registrar uma justificativa para ver a senha. |
| **Requer aprovação para visualizar uma senha** | Botão *toggle* | Não | Ativa ou desativa a necessidade de aprovação, realizada pelo aprovador cadastrado, para que o usuário possa visualizar a senha. Uma vez ativada, você também precisa definir quantas aprovações serão necessárias. |
| **Aprovações necessárias para visualizar** | Seletor de quantidade | Não | Selecione a quantidade de aprovações necessárias para aprovar a operação para cada nível (não contabiliza o número total de aprovações). |
| **Reprovações necessárias para cancelar** | Seletor de quantidade | Não | Selecione a quantidade de reprovações necessárias para reprovar a operação para cada nível (não contabiliza o número total de reprovações). |
| **Aprovação em níveis** | Botão *toggle* | Não | Ativa ou desativa a regra que os aprovadores serão acionados em níveis. Quando ativada, pode-se definir uma hierarquia de aprovadores. |

#### Seção Opções avançadas

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Permitir acesso emergencial sem aprovação** | Botão *toggle* | Não | Ativa ou desativa a indicação se o usuário poderá realizar um acesso emergencial sem a necessidade de uma aprovação prévia. |
| **Usuários podem mudar a data de expiração** | Botão *toggle* | Não | Ativa ou desativa a indicação se o próprio usuário pode alterar a data de expiração do grupo.* |
| **Dias que exigem aprovação** | Botão *toggle.* | Não | Ativa ou desativa a necessidade de estabelecer os dias e horários que será exigida aprovação. |
| **A data pode ser mudada em até:** | Seletor de quantidade | Não | Selecione a quantidade de minutos que a mudança de data feita pelo próprio usuário poderá ocorrer. As opções são de 0 até 100. Esta opção só é disponibilizada se a opção **Usuários podem mudar a data de expiração** estiver ativada. |

:::(info) (**Info**)  
* Na janela de exibição de credenciais, aparecerá um botão para o usuário aumentar seu período de acesso até o tempo indicado neste campo.  
:::  

#### Seção Dias que exigem aprovação  
Esta seção só ficará disponível se a opção **Dias que exigem aprovação** estiver ativada.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Todos os dias** | Botão toggle e caixa de seleção | **Não** | Se ativada, o usuário terá que solicitar aprovação todos os dias. Caso desativada, selecione os dias da semana em que os usuários membros do grupo precisarão pedir aprovação. |
| **Todos os horários** | Botão toggle | **Não** | Ativa ou desativa o período de horário que o usuário terá que pedir aprovação. |
| **Personalizado** | Botão toggle e seletor de hora | **Não** | Ativa ou desativa uma faixa de horário específica em que o usuário terá que pedir aprovação. Quando ativada dois seletores de hora serão habilitados para que seja estipulado o começo e o fim do período. |

---
## Aba Sessões  

Esta seção fornece informações sobre as regras da sessão da política de acesso.  

:::(info) (**Info**)  
Nesta seção alguns campos só serão exibidos após alguns campos específicos serem habilitados.  
:::

| **Item**  | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Permitir usuários a iniciar sessões** | Botão *toggle* | Não | Ativa ou desativa a permissão para usuários do grupo poderem iniciar uma sessão. |
| **Habilitar o bloqueio de sessões durante o Congelamento** | Botão *toggle* | Não | Ativa ou desativa a permissão em que os usuários desse grupo possam ter a sessão bloqueada durante o período de congelamento da mesma. |
| **Solicitar aos usuários uma justificativa para iniciar sessões** | Botão *toggle* | Não | Ativa ou desativa a necessidade de registrar uma justificativa para iniciar a sessão proxy. |
| **Requer aprovação para iniciar sessão** | Botão *toggle* | Não | Ativa ou desativa a necessidade de aprovação, realizada pelo aprovador cadastrado, para que o usuário possa iniciar uma sessão. Uma vez ativa, você também precisa definir por quanto tempo esta aprovação será válida. |
| **Aprovações necessárias** | Seletor de quantidade | Não | Selecione a quantidade de aprovações necessárias para aprovar a operação para cada nível (não contabiliza o número total de aprovações). |
| **Reprovações necessárias para cancelar** | Seletor de quantidade | Não | Selecione a quantidade de reprovações necessárias para reprovar a operação para cada nível (não contabiliza o número total de reprovações). |
| **Aprovação em níveis** | Botão *toggle* | Não | Ativa ou desativa a regra que os aprovadores serão acionados em níveis. Assim, se pode definir uma hierarquia de aprovadores. |

#### Seção Opções avançadas

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Permitir acesso emergencial** | Botão *toggle* | Não | Ativa ou desativa a indicação se o usuário poderá realizar um acesso emergencial sem a necessidade de uma aprovação prévia. |
| **[Change Audit] Exigir Mudança ID para iniciar sessão** | Botão *toggle* | Não | Ativa ou desativa a necessidade se o solicitante deve registrar um código ITMS no momento da justificativa. |
| **Dias que exigem aprovação** | Botão *toggle* | Não | Ativa ou desativa a necessidade de estabelecer os dias e horários que será exigida aprovação. |

#### Seção Dias que exigem aprovação  
Esta seção só ficará disponível se a opção **Dias que exigem aprovação** estiver ativada.

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Todos os dias** | Botão toggle e caixa de seleção | Não | Se ativada todos os dias, o usuário terá que solicitar aprovação. Caso desativada, selecione os dias da semana em que os usuários membros do grupo precisarão pedir aprovação. |
| **Todos os horários** | Botão toggle | Não | Ativa ou desativa o período de horário que o usuário terá que pedir aprovação. |
| **Personalizado** | Botão toggle | Não | Ativa ou desativa uma faixa de horário específica em que o usuário terá que pedir aprovação. Quando ativada dois seletores de hora serão habilitados para que seja estipulado o começo e o fim do período. |

:::(warning) (**Atenção**)
Quando o campo **Aprovação em níveis** estiver habilitado, existem regras que devem ser seguidas para que a aprovação e reprovação funcione corretamente. Saiba mais em Sobre Regra de aprovação e reprovação.
:::

---
## Aba Aprovadores  
Esta seção fornece informações com a relação dos aprovadores adicionados na política de acesso.

| **Item**  | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Aprovadores** | Campo de texto | Não | Busca pelo nome do usuário na lista de usuários incluídos no grupo. |
| **Adicionar** | Botão | Não | Abre a tela de usuários aprovadores do Segura, para que sejam incluídos no grupo. |
| **Tabela de aprovadores** | Tabela | Não | Dados de cada membro do grupo de acesso contendo *os campos caixa de seleção*, *Cód., Nome, Nome do usuário, E-mail,* *Tipo de criação, Departamento, Adicionado por* e *Adicionado em.* |
| **Nível** | Menu suspenso | Não | Opções para escolher os possíveis níveis dos aprovadores. As opções são *Nível 1*, *Nível 2* e *Nível 3*. Veja a explicação sobre os níveis de aprovadores abaixo. |
| **Obrigatório especificar código de governança ao justificar?*** | Botão *toggle* | Sim | Ativa ou desativa a obrigatoriedade se o requerente deve digitar o código ITMS no momento da justificativa. |
| **Sempre adicionar o gestor do usuário aos aprovadores?*** | Botão *toggle* | Sim | Ativa ou desativa se o usuário responsável pelo departamento do usuário cadastrado deve ser consultado automaticamente como um aprovador adicional a este grupo. Dessa forma, este usuário será alertado com os outros aprovadores da aba Aprovadores. |

:::(warning) (**Atenção**)  
A cada aprovador adicionado existe um nível que deve ser atribuído ao mesmo. Saiba mais em Sobre Nível de aprovadores.  
:::

---
## Aba Critérios  
Esta seção fornece informações sobre os critérios da política de acesso.

| **Item**  | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Site*** | Menu suspenso | Sim | Opções com os tipos de sites que serão visíveis ao grupo. As opções disponíveis serão conforme cadastrado no Segura. |
| **Tipo de dispositivo*** | Menu suspenso | Sim | Opções com os tipos de dispositivos que serão visíveis ao grupo. As opções são definidas conforme os tipos de dispositivos cadastrados. |
| **Tipo de credencial*** | Menu suspenso | Sim | Opções com os tipos de credenciais que serão visíveis ao grupo. As opções são: *Todos, Chave SSH, Usuário do domínio, Local User* e *Administrador local*. |
| **Dispositivo** | Botão *toggle* | Não | Ativa ou desativa o campo de texto para inclusão dos dispositivos. |
| **Dispositivo (sep. por vírgula)** | Campo de texto | Não | Nome de cadastro do dispositivo. No texto [Campo Dispositivo](/v4/docs/pt/pam-session-about-filling-out-the-device-and-username-fields) estão as possíveis formas de se preencher este campo. |
| **Modelo** | Botão *toggle* | Não | Ativa ou desativa o campo de texto para inclusão dos modelos de dispositivos. |
| **Modelo (sep. por vírgula)** | Campo de texto | Não | Nome dos modelos de dispositivo. |
| **Nome do usuário** | Botão *toggle* | Não | Ativa ou desativa o campo de texto para inclusão dos nomes de usuários. |
| **Username (sep. por vírgula)** | Campo de texto | Não | Nome de usuário da credencial. No texto [Campo Username](/v4/docs/pt/pam-session-about-filling-out-the-device-and-username-fields) estão as possíveis formas de se preencher este campo. |
| **Informação adicional** | Botão *toggle* | Não | Ativa ou desativa o campo de texto para inclusão de informações adicionais. |
| **Informação adicional (sep. por vírgula)** | Campo de texto | Não | Texto com informações adicionais sobre o cadastro. |
| **Tags do dispositivo** | Botão *toggle* | Não | Ativa ou desativa o campo de texto para inclusão de tags para os dispositivos. |
| **Tags do dispositivo (sep. por vírgula)** | Campo de texto | Não | Tags cadastradas para os dispositivos. |
| **Tags da credencial** | Botão *toggle* | Não | Ativa ou desativa o campo de texto para inclusão de tags para credenciais. |
| **Tags da credencial (sep. por vírgula)** | Campo de texto | Não | Tags cadastradas para as credenciais. |

:::(warning) (**Atenção**)  
Para o preenchimento dos campos **Dispositivo (sep. por vírgula)** e **Username (sep. por vírgula)** há regras que precisam ser seguidas. Saiba mais em [Sobre Preenchimento do campo Dispositivo e Username](/v4/docs/pt/pam-session-about-filling-out-the-device-and-username-fields).  
:::

---
## Aba Restrição de acesso  

Esta seção fornece informações sobre as regras de restrições para a política de acesso.

#### Seção Dias de permissão de acesso  
Selecione os dias da semana em que os usuários membros do grupo poderão realizar as atividades.

| **Item**  | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Todos os dias** | Botão *toggle* | Não | Ativa ou desativa a opção de permissão para todos os dias. Por padrão a opção **Todos os dias** vem habilitada, para selecionar dias específicos, desabilite esta opção e selecione os dias. |
| **Dias da semana** | Caixa de seleção | Não | Quando o campo acima estiver desabilitado, selecione os dias da semana. |

#### Seção Horários de permissão de acesso  
Selecione os intervalos de horários onde os usuários membros do grupo poderão realizar as atividades.

| **Item**  | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Todos os horários** | Botão *toggle* | Não | Ativa ou desativa a opção de permissão para todas as faixas de horário. Por padrão a opção **Todos os horários** vêm habilitada, para selecionar dias específicos, desabilite esta opção e selecione os dias. |
| **Faixa de horário** | Caixa de seleção | Não | Quando o campo acima estiver desabilitado, selecione as faixas de horário. |
| **Personalizado** | Botão *toggle* | Não | Ativa ou desativa a opção de customizar o horário de permissão de acesso. |

#### Seção Período de permissão de acesso  
Selecione o período determinado onde os usuários membros do grupo poderão realizar as atividades.

| **Item**  | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Início** | Seletor de data e de hora | Não | Selecione a data e hora inicial  do período de permissão. |
| **Fim** | Seletor de data e de hora | Não | Selecione a data e hora final do período de permissão. |

---
## Aba Revisão  
Esta seção fornece informações que foram adicionadas nos passos anteriores, para que seja analisada e caso necessite de alguma mudança, já seja feita antes de finalizar o cadastro. As informações estão agrupadas por cada aba respectivamente.