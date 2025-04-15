# Configuração de consulta de senha

Este documento fornece informações sobre a tela **Configuração de consulta da senha** do **User Behavior**, que permite ao administrador configurar ações relacionadas à consulta de senha que serão consideradas suspeitas e podem desencadear uma solicitação de verificação de identidade do usuário.

## Pré-requisitos

* Permissão de administrador.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **User Behavior**.  
2. No menu lateral, selecione **Gerenciamento \> Configuração de consulta de senha.**

## Seção Configurações da visualização de senhas

Nesta seção, o administrador define as configurações gerais relacionadas à consulta das senhas.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Número de dias do histórico\*** | Seletor de quantidade | Sim | Define o número de dias considerados para determinar o comportamento padrão do usuário relacionado à consulta de senha. <br>**Padrão:** 90  |
| **Taxa de variação (%)\***  | Seletor de quantidade | Sim | Define, em porcentagem, a taxa de desvio do comportamento padrão que será considerada suspeita. <br>**Padrão:** 10% |



## Seção Verificação do peso

Nesta seção, o administrador define uma pontuação para cada sessão em que alguma ação incomum foi realizada. Os resultados dessas somas de pontuação podem ser acessados nos relatórios em **User Behavior \> Análise de comportamento \> Eventos de sessão**. A coluna **Risco** de cada relatório exibe a pontuação total da sessão de acordo com os valores definidos nos campos abaixo.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Visualização de origem incomum\***  | Seletor de quantidade | Sim | Define a pontuação para quando o usuário visualiza uma senha a partir de uma origem incomum. <br>**Máximo:** 3 <br>**Padrão:** 0 |
| **Visualização de credencial incomum\*** | Seletor de quantidade | Sim | Define a pontuação para quando o usuário visualiza uma senha a partir de uma credencial incomum. <br>**Máximo:** 3 <br>**Padrão:** 2 |
| **Visualização em horário incomum\*** | Seletor de quantidade | Sim | Define a pontuação para quando o usuário visualiza uma senha a em um horário incomum.<br> **Máximo:** 3 <br>**Padrão:** 3 |
| **Alteração de senha incomum\*** | Seletor de quantidade | Sim | Define a pontuação para quando o usuário troca uma senha de forma inesperada. <br>**Máximo:** 3 <br>**Padrão:** 0 |

::: (info) (Info)  
Administradores são notificados sempre que um usuário tenta realizar a troca  manual de uma senha que foi rotacionada com sucesso pelo Segura.  
:::

