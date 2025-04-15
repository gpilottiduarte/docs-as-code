# Parâmetros do sistema

Neste documento, você vai encontrar todas as informações sobre a tela **Configuração do sistema** do **User Behavior**, que possibilita que o administrador da instância **senhasegura** configure as ações que serão consideradas suspeitas e que poderão acionar uma solicitação de verificação da identidade do usuário.

## Requisitos

- Permissão de administrador.

## Caminhos para acesso


1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **User Behavior**.
2. No menu lateral, selecione **Configurações > Parâmetros do sistema**.

___

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Parâmetros do sistema > Parâmetros do sistema > User Behavior**.

---

## Configurações gerais

| **Item**                              | Descrição                                                                                                              |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Pontuação mínima suspeita (1 a 15)** | Campo para definir a partir de qual pontuação um comportamento será considerado suspeito.                             |
| **Avaliação inicial do usuário (0 a 10)** | Campo para definir a nota inicial do usuário no sistema. 0 significa que um usuário novo começa sendo considerado muito suspeito, e 10 seria como se usuários novos fossem muito confiáveis. |

## Seção Configurações da sessão

Nesta seção, o administrador define as configurações relacionadas à sessão.

| **Item**                              | Descrição                                                                                                              |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Número de dias do histórico***   | Campo para definir o intervalo de dias que será considerado para determinar o comportamento padrão do usuário relacionado às sessões realizadas. |
| **Taxa de variação (%)***          | Campo para definir, em porcentagem, a taxa de desvio do comportamento padrão que será considerado suspeito.            |
| **Enviar sessões de alto risco para auditoria?*** | Campo para definir se as sessões com alto risco serão enviadas para a fila de auditoria. As opções possíveis são **Sim** e **Não**. |

:::(warning) (Atenção)
É necessário selecionar ao menos um auditor para poder enviar sessões para auditoria. Configure os auditores padrão em **PAM Core > Configurações > Acesso > Auditores padrão**.
:::

## Verificação do peso

Nesta seção, o administrador define uma pontuação para cada sessão em que alguma ação incomum foi realizada. O resultado das somas dessas pontuações pode ser acessado nos relatórios em **User Behavior > Análise de comportamentos > Eventos da sessão**. A coluna **Risco** de cada relatório apresenta a pontuação total da sessão conforme os valores definidos nos campos abaixo.

| **Item**                              | Descrição                                                                                                              |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Acesso em destino incomum***      | Campo para definir a pontuação para quando o usuário acessa um dispositivo-alvo incomum durante a sessão. A pontuação máxima permitida para o item é 3. |
|**Acesso de origem incomum***       | Campo para definir a pontuação para quando o usuário inicia a sessão a partir de uma origem incomum. A pontuação máxima permitida para o item é 3. |
| **Acesso de credencial incomum***   | Campo para definir a pontuação para quando o usuário inicia a sessão com uma credencial incomum. A pontuação máxima permitida para o item é 3. |
| **Acesso em horário incomum***     | Campo para definir a pontuação para quando o usuário inicia a sessão em um horário incomum. A pontuação máxima permitida para o item é 3. |
| **Acesso com duração incomum***     | Campo para definir a pontuação para quando o usuário realiza uma sessão com duração incomum. A pontuação máxima permitida para o item é 3. |

## Seção Configurações da visualização de senhas

Nesta seção, o administrador define as configurações relacionadas à visualização de senhas.

| **Item**                              | Descrição                                                                                                              |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Número de dias do histórico***    | Campo para definir o intervalo de dias que será considerado para determinar o comportamento padrão do usuário.         |
| **Taxa de variação (%)***           | Campo para definir, em porcentagem, a taxa de desvio do comportamento padrão que será considerado suspeito.            |

### Verificação do peso

Nesta seção, o administrador define que cada ação relacionada à visualização de senha incomum tenha um peso definido. O resultado das somas dessas pontuações pode ser acessado nos relatórios em **User Behavior > Análise de comportamentos > Eventos de visualização de credenciais**. A coluna **Risco** de cada relatório apresenta a pontuação total da sessão, conforme os valores definidos nos campos abaixo.

| **Item**                              | Descrição                                                                                                              |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Visualização de origem incomum*** | Campo para definir a pontuação para quando o usuário visualiza senhas a partir de uma origem incomum. A pontuação máxima permitida para o item é 3. |
| **Visualização de credencial incomum*** | Campo para definir a pontuação para quando o usuário visualiza senhas de uma credencial incomum. A pontuação máxima permitida para o item é 3. |
| **Visualização em horário incomum*** | Campo para definir a pontuação para quando o usuário visualiza senhas em horário incomum. A pontuação máxima permitida para o item é 3. |
| **Alteração de senha incomum**     | Campo para definir a pontuação para quando o usuário altera uma senha inesperadamente. A pontuação máxima permitida para o item é 3. |

:::(Info) (Info)
Os administradores são notificados sempre que um usuário tenta alterar manualmente a senha de uma credencial que foi recentemente rotacionada com sucesso pelo senhasegura.
:::


## Ações para sessões com tempo incomum

Nesta seção, o administrador define as consequências de sessões realizadas cuja duração é incomum.

| **Item**                              | Descrição                                                                                                              |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Bloquear sessão***                | Campo para definir o bloqueio da sessão com duração incomum. As opções disponíveis são **Sim** e **Não**.               |
| **Bloquear sessão e usuário***     | Campo para definir o bloqueio da sessão com duração incomum e do usuário. As opções disponíveis são **Sim** e **Não**. |

## Ações para sessões realizadas em horário incomum

Nesta seção, o administrador define as consequências de sessões realizadas em horário incomum.

| **Item**                              | Descrição                                                                                                              |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Bloquear sessão***                | Campo para definir o bloqueio da sessão em horário incomum. As opções disponíveis são **Sim** e **Não**.               |
| **Bloquear sessão e usuário***      | Campo para definir o bloqueio da sessão em horário incomum e do usuário que realizou a sessão. As opções disponíveis são **Sim** e **Não**. |

## Ações para sessões com origem incomum

Nesta seção, o administrador define as consequências de sessões realizadas a partir de dispositivos incomuns.

| **Item**                              | Descrição                                                                                                              |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Bloquear sessão***                | Campo para definir o bloqueio da sessão com origem incomum. As opções disponíveis são **Sim** e **Não**.               |
| **Bloquear sessão e usuário***      | Campo para definir o bloqueio da sessão com origem incomum e do usuário que realizou a sessão. As opções disponíveis são **Sim** e **Não**. |

## Ações para sessões realizadas para destinos incomuns

Nesta seção, o administrador define as consequências de sessões realizadas para dispositivos-alvo incomuns.

| **Item**                              | Descrição                                                                                                              |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Bloquear sessão***                | Campo para definir o bloqueio da sessão para destino incomum. As opções disponíveis são **Sim** e **Não**.             |
| **Bloquear sessão e usuário***      | Campo para definir o bloqueio da sessão para destino incomum e do usuário que realizou a sessão. As opções disponíveis são **Sim** e **Não**. |

## Ações para sessões realizadas com credenciais incomuns

Nesta seção, o administrador define as consequências de sessões realizadas com credenciais incomuns.

| **Item**                              | Descrição                                                                                                              |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Bloquear sessão***                | Campo para definir o bloqueio da sessão com credenciais incomuns. As opções disponíveis são **Sim** e **Não**.         |
| **Bloquear sessão e usuário***     | Campo para definir o bloqueio da sessão com credenciais incomuns e do usuário que realizou a sessão. As opções disponíveis são **Sim** e **Não**. |

## Configurações de identificação contínua

Nesta seção, o administrador configura a pontuação dos gatilhos que acionarão a solicitação de reautenticação para o usuário no **senhasegura**.

:::(info) (Info)
Por padrão, essa funcionalidade está desativada. Para ativá-la, defina os parâmetros com um valor diferente de zero.
:::

| **Item**                              | Descrição                                                                                                              |
|---------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| **Queda no rating***                | Campo para definir o valor da redução no rating do