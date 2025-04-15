# Sessões Remotas

Este documento fornece informações sobre o dashboard **Sessões Remotas** do **PAM Core**. Onde se encontra uma visualização gráfica e detalhada das sessões remotas utilizadas pelos usuários.

:::(info) (**Info**)  
O dashboard poderá ser acessado apenas por usuários que possuam a permissão de administrador ou de auditor do sistema.  
:::

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Dashboard > Sessões remotas.**

---
## Sessões Remotas

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Período de exibição** | Seletor de data | Filtra pelo período escolhido para exibição dos dados. As opções são *Hoje, Últimas 24 horas, Essa semana, Semana passada, Esse mês, Mês passado, Esse ano, Ano passado e Personalizado*. |

## Cards

| **Item** | **Descrição** |
| :---- | :---- |
| **RDP Web** | Quantidade de sessões acessadas do tipo RDP Web. |
| **SSH/Telnet** | Quantidade de sessões acessadas do tipo SSH/Telnet. |
| **HTTP/VNC** | Quantidade de sessões acessadas do tipo HTTP/VNC. |
| **RDP Gate** | Quantidade de sessões acessadas do tipo RDP Gate. |
| **Jump Server** | Quantidade de sessões acessadas do tipo Jump Server. |
| **SQL** | Quantidade de sessões acessadas do tipo SQL. |
| **X11** | Quantidade de sessões acessadas do tipo X11. |

## Gráficos

| **Item** | **Descrição** |
| :---- | :---- |
| **Sessões** | Exibe um gráfico com a quantidade total de todas as sessões acessadas, divididas por dias. |
| **Sessões por proxy** | Exibe um gráfico com a quantidade total das sessões por proxy acessadas, divididas por dia e por tipo. |

## Listas  

### Sessões ativas  
Exibe o número de sessões ativas por tipo, disponíveis nos cards. Na lista é exibida as informações da sessão.

| **Item** | **Descrição** |
| :---- | :---- |
| **Código** | Exibe o número que representa a sessão. |
| **Usuário** | Exibe o nome do usuário que realizou o acesso. Abre a tela [Perfil do usuário]. |
| **IP de origem** | Exibe o endereço IP da máquina de origem do usuário. |
| **Credencial** | Exibe o nome de usuário da credencial. Abre a tela [Perfil da credencial]. |
| **Dispositivo** | Exibe endereço IP do dispositivo acessado. Abre a tela [Perfil do dispositivo]. |
| **Protocolo** | Exibe o tipo de protocolo utilizado na sessão. |
| **Início** | Exibe a data e hora do início da sessão. |
| **Tempo** | Exibe o tempo que o usuário utilizou a sessão. |
| **Ações** | Exibe opções de ação para a sessão. As opções são Ícone de lupa, abre a tela de [Detalhes do acesso], ícone de Olho abre a tela de Livestream e o botão Liga/desliga derruba a sessão. |