# Configuração da sessão

Este documento fornece informações sobre tela **Configuração de sessão** do **User Behavior**, que permite ao administrador configurar ações relacionadas à sessão que serão consideradas suspeitas e podem desencadear uma solicitação de verificação de identidade do usuário.

## Pré-requisitos

* Permissão de administrador.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **User Behavior**.  
2. No menu lateral, selecione **Gerenciamento \> Configuração de sessão.**

---
## Seção Configurações gerais

Nesta seção, o administrador define as configurações gerais relacionadas à sessão.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Pontuação mínima suspeita (1 a 15)\*** | Seletor de quantidade | Sim | Define o limite de pontuação no qual um comportamento será considerado suspeito. <br>**Padrão:** 5  |
| **Avaliação inicial do usuário (0 a 10)\***  | Seletor de quantidade | Sim | Define a pontuação inicial do usuário no sistema. 0 (zero) significa que um novo usuário é considerado altamente suspeito, e 10 (dez) indica que novos usuários são considerados muito confiáveis. <br>**Padrão:** 5 |



## Seção Configurações da sessão

Nesta seção, o administrador define as configurações relacionadas à sessão.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Número de dias do histórico\*** | Seletor de quantidade | Sim | Define o número de dias considerados para determinar o comportamento padrão do usuário relacionado à sessão. <br>**Padrão:** 90  |
| **Taxa de variação (%)\***  | Seletor de quantidade | Sim | Define, em porcentagem, a taxa de desvio do comportamento padrão que será considerada suspeita. <br>**Padrão:** 10% |
| **Enviar sessões de alto risco para auditoria** | Botão *toggle* | Não | Ativa ou inativa o envio de sessões de alto risco para a fila de auditoria. <br>**Padrão:** Inativo |

:::(warning) (Atenção)  
Para enviar sessões de alto risco para auditoria, é necessário selecionar pelo menos um auditor padrão. Configure auditores padrão em **PAM Core \> Gerenciamento \> Auditoria \> Auditores Padrão**.  
:::

## Seção Verificação do peso

Nesta seção, o administrador define uma pontuação para cada sessão em que alguma ação incomum foi realizada. Os resultados dessas somas de pontuação podem ser acessados nos relatórios em **User Behavior \> Análise de comportamento \> Eventos de sessão**. A coluna **Risco** de cada relatório exibe a pontuação total da sessão de acordo com os valores definidos nos campos abaixo.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Acesso em destino incomum\*** | Seletor de quantidade | Sim | Define a pontuação para quando o usuário acessa um dispositivo de destino incomum durante a sessão. <br> **Máximo:** 3 <br> **Padrão:** 0  |
| **Acesso de origem incomum\***  | Seletor de quantidade | Sim | Define a pontuação para quando o usuário inicia a sessão a partir de uma origem incomum**. <br> **Máximo:** 3 <br>**Padrão:** 0 |
| **Acesso de credencial incomum\*** | Seletor de quantidade | Sim | Define a pontuação para quando o usuário inicia a sessão com uma credencial incomum. <br>**Máximo:** 3 <br>**Padrão:** 2 |
| **Acesso em horário incomum\*** | Seletor de quantidade | Sim | Define a pontuação para quando o usuário inicia a sessão em um horário incomum.<br>**Máximo:** 3 **Padrão:** 3 |
| **Acesso com duração incomum\*** | Seletor de quantidade | Sim | Define a pontuação para quando o usuário realiza uma sessão com uma duração incomum.<br> **Máximo:** 3 **Padrão:** 0 |

## Seção Ações para sessões com tempo incomum

Nesta seção, o administrador define as consequências para sessões com duração incomum.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Bloquear sessão\*** | Menu suspenso | Sim | Define o bloqueio de sessões com duração incomum. As opções são **Sim** e **Não. Padrão:** Não  |
| **Bloquear sessão e usuário\***  | Menu suspenso | Sim | Define o bloqueio de sessões com duração incomum e do usuário que realizou a sessão. As opções são **Sim** ou **Não**. <br> **Padrão:** Não |

## Seção Ações para sessões realizadas em horário incomum

Nesta seção, o administrador define as consequências para sessões realizadas em horários incomuns.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Bloquear sessão\*** | Menu suspenso | Sim | Define o bloqueio de sessões em horário incomum. As opções são **Sim** e **Não. Padrão:** Não  |
| **Bloquear sessão e usuário\***  | Menu suspenso | Sim | Define o bloqueio de sessões em horário incomum e do usuário que realizou a sessão. As opções são **Sim** ou **Não**. <br> **Padrão:** Não |

## Seção Ações para sessões com origem incomum

Nesta seção, o administrador define as consequências para sessões realizadas a partir de dispositivos incomuns.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Bloquear sessão\*** | Menu suspenso | Sim | Define o bloqueio de sessões com origem incomum. As opções são **Sim** e **Não. Padrão:** Não  |
| **Bloquear sessão e usuário\***  | Menu suspenso | Sim | Define o bloqueio de sessões com origem incomum e do usuário que realizou a sessão. As opções são **Sim** ou **Não**. <br> **Padrão:** Não |

## Seção Ações para sessões realizadas para destinos incomuns

Nesta seção, o administrador define as consequências para sessões realizadas em dispositivos-alvo incomuns.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Bloquear sessão\*** | Menu suspenso | Sim | Define o bloqueio de sessões com destino incomum. As opções são **Sim** e **Não. Padrão:** Não  |
| **Bloquear sessão e usuário\***  | Menu suspenso | Sim | Define o bloqueio de sessões com destino incomum e do usuário que realizou a sessão. As opções são **Sim** ou **Não**. <br> **Padrão:** Não |

## Seção Ações para sessões com credenciais incomuns

Nesta seção, o administrador define as consequências para sessões realizadas com credenciais incomuns.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Bloquear sessão\*** | Menu suspenso | Sim | Define o bloqueio de sessões com credencial incomum. As opções são **Sim** ou **Não**.<br>**Padrão:** Não  |
| **Bloquear sessão e usuário\***  | Menu suspenso | Sim | Define o bloqueio de sessões com credencial incomum e do usuário que realizou a sessão. As opções são **Sim** ou **Não**.<br>**Padrão:** Não |