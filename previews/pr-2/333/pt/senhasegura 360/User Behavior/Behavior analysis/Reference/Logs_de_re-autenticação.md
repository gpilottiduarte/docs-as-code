# Logs de re-autenticação

Neste documento, você vai encontrar todas as informações sobre a tela **Logs de re-autenticação** do **User Behavior**, que possibilita que o administrador visualize um relatório com todos os eventos de verificação de identidade acionados no senhasegura.

## Requisitos

- Permissão de administrador.
- Recurso **Identificação contínua** configurado. Acesse o documento [Como gerenciar a Identificação contínua](/v3-33/docs/pt/how-to-manage-continuous-identification) para mais informações.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **User Behavior**.
2. No menu lateral, selecione **Análise de comportamentos > Logs de re-autenticação**.

---


## Barra Superior

| Item       | Descrição                                                                                              |
|----------------------|--------------------------------------------------------------------------------------------------------|
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela.                |
| **Atualizar**         | Representado pelo ícone da seta no sentido anti-horário, atualiza a página.                           |
| **Exibir ações**      | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Imprimir relatório**| Representado pelo ícone da impressora, abre uma nova página para impressão do relatório.               |
| **Exportar CSV**      | Representado pelo ícone da folha de papel, baixa o relatório.                                         |
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário **[Agendar relatório](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports)**. |

---

## Campos de Busca

| Item   | Descrição                                                                                                               |
|---------|-------------------------------------------------------------------------------------------------------------------------|
| **Código** | Campo de texto que filtra os eventos de re-autenticação pelo seu código único de identificação.                         |
| **Gatilho** | Menu suspenso que filtra os eventos de re-autenticação pelo gatilho que os acionou. As opções disponíveis são *Tentativa de visualização em horário proibido, Comandos bloqueados, Tentativas de sessão em horário proibido, Sessões de alto risco, Queda no rating* e *Token TOTP*. Limpe o campo para habilitar a opção Todos. <br> **Nota:** os eventos marcados como Token TOTP estão relacionados às solicitações do Token TOTP no momento de login. |
| **Usuário** | Campo de texto que filtra os eventos de re-autenticação pelo usuário que se re-autenticou.                             |
| **Data**    | Campo que filtra os eventos de re-autenticação pelo período em que ocorreram. Formato `DD/MM/AAAA`. Utilize esse campo para inserir a data inicial do período. A seta que aponta para baixo abre um calendário. <br>Caso o filtro **Hora** esteja habilitado, utilize-o para filtrar as re-autenticações pela hora inicial. |
| **até**     | Campo que filtra os eventos de re-autenticação pelo período em que ocorreram. Formato `DD/MM/AAAA`. Utilize esse campo para inserir a data final do período. A seta que aponta para baixo abre um calendário. <br>Caso o filtro **Hora** esteja habilitado, utilize-o para filtrar as re-autenticações pela hora final. |
| **Status**  | Menu suspenso que filtra os eventos de re-autenticação pelo seu status. As opções disponíveis são **Sucesso** e **Falha**. Limpe o campo para habilitar a opção **Todos**. |



## Campos do relatório

- **Código**.
- **Gatilho**.
- **Usuário**.
- **Data**.
- **Status**.
- **Ação**: nessa coluna, você acessa:
  - **Detalhes**: representado pelo ícone de chave, abre a tela **[Detalhes](/v3-33/docs/pt/re-autentication-logs#tela-detalhes)** que exibe um relatório do evento de re-autenticação selecionado.

## Tela Detalhes

Nesta seção, você vai encontrar todas as informações sobre a tela **Detalhes** que exibe um relatório do evento de re-autenticação selecionado.



| Item                   | Descrição                                                                                                            |
|------------------------|----------------------------------------------------------------------------------------------------------------------|
| **Usuário**            | Campo que exibe o nome de usuário senhasegura associado à re-autenticação.                                           |
| **Status**             | Campo que exibe o status da re-autenticação. As opções possíveis são **Sucesso** e **Falha**.                        |
| **Gatilho**            | Campo que exibe o gatilho que acionou a re-autenticação. As opções possíveis são *Tentativa de visualização em horário proibido, Comandos bloqueados, Tentativas de sessão em horário proibido, Sessões de alto risco, Queda no rating* e *Token TOTP*. <br> **Nota:** os eventos relacionados a Token TOTP exibem o registro das tentativas de login utilizando um token TOTP. |
| **Data de verificação**| Campo que exibe a data e hora em que a re-autenticação foi acionada.                                                 |
| **Método de autenticação** | Campo que exibe o método utilizado na re-autenticação.                                                              |
| **Navegador**          | Campo que exibe o navegador usado no momento da re-autenticação.                                                     |
| **IP**                 | Campo que exibe o endereço IP do dispositivo em que a re-autenticação foi realizada.                               |
| **Localização**        | Campo que exibe a localização geográfica do dispositivo.                                                             |




## Seção Detalhes

Nesta seção da tela **Detalhes**, você vai encontrar todas as informações sobre o gatilho que acionou a re-autenticação.

### Queda no rating

Quando o gatilho que aciona a re-autenticação está relacionado à queda no rating, as seguintes informações sobre os eventos que causaram a queda no rating são exibidas:

- **Eventos suspeitos**: o evento que causou a queda no rating.
- **Data**: a data e hora do evento.
- **Variação de classificação**: a pontuação perdida pelo usuário em razão do evento.
- **Ação**: nessa coluna, você acessa:
  - **Detalhes**: representado pelo ícone de chave, abre a tela **Detalhes do acesso**.
  - **Vídeo da sessão**: representado pelo ícone de play, abre a tela **Vídeo da sessão**.

### Sessões de alto risco

Quando o gatilho que aciona a re-autenticação está relacionado a uma sessão de alto risco, as seguintes informações sobre as sessões são exibidas:

- **Credencial**: a credencial utilizada durante a sessão.
- **Dispositivo**: o dispositivo utilizado durante a sessão.
- **Protocolo**: o protocolo realizado durante a sessão.
- **Proxy**: o tipo de sessão proxy.
- **Identificação da sessão**: o código único de identificação da sessão.
- **Início**: o horário de início da sessão.
- **Término**: o horário de término da sessão.
- **Duração**: a duração da sessão.
- **Ação**: nessa coluna, você acessa:
  - **Vídeo da sessão**: representado pelo ícone de play, abre a tela **Vídeo da sessão**.
  - **Logs da sessão**: representado pelo ícone de lupa, abre a tela **Logs da sessão**.
  - **Configuração dos auditores da sessão**: representado pelo ícone de chave, abre a tela **Configuração dos auditores da sessão**.
  - **Textos da sessão**: representado pelo ícone de folha de papel, abre a tela **Logs de texto da sessão**.

### Comandos bloqueados

Quando o gatilho que aciona a re-autenticação está relacionado a comandos bloqueados, as seguintes informações sobre os comandos são exibidas:

- **Comando**: o comando realizado durante a sessão.
- **Criticidade**: a criticidade da sessão.
- **Ação durante a sessão**: a ação realizada durante a sessão.
- **Tipo de sessão**: o tipo de sessão.
- **Credencial**: a credencial utilizada durante a sessão.
- **Dispositivo**: o dispositivo utilizado durante a sessão.
- **Cód. da sessão**: o código único de identificação da sessão.
- **Início**: o horário de início da sessão.
- **Término**: o horário de término da sessão.
- **Duração**: a duração da sessão.
- **Ação**: nessa coluna, você acessa:
  - **Vídeo da sessão**: representado pelo ícone de play, abre a tela **Vídeo da sessão**.
  - **Editar comando**: representado pelo ícone de lápis e papel, abre a tela **Cadastro de comando por credencial**.
  - **Logs da sessão**: representado pelo ícone de lupa, abre a tela **Logs da sessão**.
  - **Configuração dos auditores da sessão**: representado pelo ícone de chave, abre a tela **Configuração dos auditores da sessão**.
  - **Textos da sessão**: representado pelo ícone de folha de papel, abre a tela **Logs de texto da sessão**.

### Tentativas de sessão em horário proibido

Quando o gatilho que aciona a re-autenticação está relacionado a tentativas de acesso em horário proibido, as seguintes informações sobre os acessos são exibidas:

- **Credencial**: a credencial utilizada durante a tentativa de acesso.
- **Dispositivo**: o dispositivo utilizado durante a tentativa de acesso.
- **Dia da semana**: o dia da semana em que a tentativa de acesso ocorreu.
- **Data da tentativa**: a data da tentativa de acesso.
- **Horário**: o horário da tentativa de acesso.

### Tentativas de visualização em horário proibido

Quando o gatilho que aciona a re-autenticação está relacionado a tentativas de visualização de senha em horário proibido, as seguintes informações sobre as tentativas são exibidas:

- **Credencial**: a credencial utilizada durante a tentativa de visualização.
-  **Dispositivo**: o dispositivo utilizado durante a tentativa de visualização.
- **Dia da semana**: o dia da semana em que a tentativa de visualização ocorreu.
- **Data da tentativa**: a data da tentativa de visualização.
- **Horário**: o horário da tentativa de visualização.

