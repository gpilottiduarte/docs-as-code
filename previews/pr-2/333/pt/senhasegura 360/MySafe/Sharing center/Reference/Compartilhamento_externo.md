# Compartilhamento externo

Neste documento, você vai encontrar todas as informações sobre as telas **Compartilhamento externo** e **Histórico de compartilhamento externo** do **MySafe**.

## Requisitos

* Permissão de compartilhamento externo concedida pelo administrador do **MySafe**.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **MySafe**.
2. No menu lateral, selecione **Central de compartilhamento > Compartilhamento externo**.

***

## Barra superior

| Item| Descrição|
|-------|------|
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela.|
| **Atualizar**| Representado pelo ícone da seta no sentido anti-horário, atualiza a página.|
| **Exibir ações**| Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página.|
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório.|
| **Exportar CSV**| Representado pelo ícone da folha de papel, baixa o relatório.|
| **Agendar relatório**  | Representado pelo ícone de relógio, abre o formulário [Agendar relatório](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports).|

## Campos de busca

| Item| Descrição|
|------|------|
| **Código**| Campo que filtra os compartilhamentos externos pelo seu código único de identificação.                   |
|**E-mail**| Campo que filtra os compartilhamentos externos pelo email do destinatário.                              |
| **Data de início**| Campo que filtra os compartilhamentos externos pelo período em que o compartilhamento iniciou. Utilize esse campo para inserir a data inicial do período. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. |
| **até**| Campo que filtra os compartilhamentos externos pelo período em que o compartilhamento iniciou. Utilize esse campo para inserir a data final do período. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. |
| **Data de fim**| Campo que filtra os compartilhamentos externos pelo seu período de expiração. Utilize esse campo para inserir a data inicial do período. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. |
| **até**| Campo que filtra os compartilhamentos externos pelo seu período de expiração. Utilize esse campo para inserir a data final do período. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. |
| **Estado**| Campo que filtra os compartilhamentos externos pelo seu estado. As opções disponíveis são *Aguardando aprovação, Aprovado, Reprovado, Finalizado, Cancelado* e *Erro*. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

- **Código**.
- **Nome**.
- **Tipo**.
- **Data**: data e hora que o compartilhamento externo foi feito.
- **Destinatário**.
- **Expiração**: data e hora de expiração do link de compartilhamento.
- **Max. acessos**: coluna que indica quantas vezes a pessoa poderá acessar o link dentro do período de expiração. As opções possíveis são **Sem limite** e um **numeral** que indica a quantidade de vezes que a pessoa poderá acessar o link antes que ele expire.
- **Estado**.
- **Ação**: nessa coluna, você acessa as seguintes opções:
  - **Revogar**: representado pelo ícone de lixeira, abre a tela **Confirmação** para revogação do compartilhamento com as opções **Sim** e **Não**. 
**Nota**: essa opção está disponível apenas para compartilhamentos com status **Ativo**. Em caso de revogação, a data de expiração do link é atualizada para o momento em que o compartilhamento foi revogado.
  - **Ícone dos três pontos verticais**: menu suspenso com as opções **Reenviar url de acesso** e **Histórico de compartilhamento externo**.
  **Nota**: essa opção está disponível apenas para itens com status **Aprovado**.
  - **Histórico**: representado pelo ícone de relógio, abre a tela **Histórico de compartilhamento externo**.

::: (info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Tela Histórico de compartilhamento externo

Nessa seção, você vai encontrar todas as informações sobre a tela **Histórico de compartilhamento externo** que exibe um relatório contendo todos os eventos referentes ao compartilhamento externo selecionado.

| Item| Descrição|
|-----|------|
| **Evento**  | Coluna que exibe a ação realizada no item compartilhado externamente. As opções possíveis são: *Item compartilhado, Item acessado, Link reenviado, Compartilhamento expirado* e *Compartilhamento revogado*. |
| **Código**  | Coluna que exibe o código único de identificação do evento.|
| **Data**    | Coluna que exibe a data e a hora do evento. Formatos: `DD/MM/AAAA` e `HH:MM`.|

::: (info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

