# Radar de ameaça

Este documento fornece informações detalhadas sobre o dashboard **Radar de ameaças** do **PAM Core**. Onde se encontra uma visualização gráfica das execuções de comandos arriscados realizados por usuários.

:::(info) (**Info**)  
O dashboard poderá ser acessado apenas por usuários que possuam a permissão de administrador ou de auditor do sistema.  
:::

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Dashboard > Radar de ameaça.**

---
## Análise online de sessões  
Na tela inicial, o radar exibe as sessões e o seu monitoramento em tempo real (online).  
No canto superior direito da tela, você encontra o botão **Histórico.** Ao clicar neste botão, será exibido um campo para escolher a data dos dados a serem exibidos.

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Período de exibição** | Seletor de data | Filtra pelo período escolhido para exibição dos dados. As opções são *Hoje, Últimas 24 horas, Essa semana, Semana passada, Esse mês, Mês passado, Esse ano, Ano passado e Personalizado*. |

## Análise histórica de sessões  
Na tela inicial, o radar mostra as sessões que foram realizadas de acordo com o período escolhido. No radar ao clicar no ponto, que corresponde a uma sessão, a tela **Detalhes da sessão** é aberta.

---
### Tela Detalhes da sessão 

| **Item** | **Descrição** |
| :---- | :---- |
| **Usuário** | Exibe o nome do usuário que realizou a sessão. Abre a tela perfil de usuário. |
| **Dispositivo** | Exibe o dispositivo acessado. Abre a tela Perfil de dispositivo |
| **Credencial** | Exibe o nome de usuário da credencial. Abre a tela Perfil de credencial. |
| **Início** | Exibe a data e hora em que a sessão foi realizada. |
| **Duração** | Exibe o tempo de duração da sessão. |
| **Risco** | Exibe o número que indica o nível do risco ocorrido naquela sessão. O nível pode variar de 0 a 100. |
| **lupa** | Abre a tela Detalhes do acesso. |