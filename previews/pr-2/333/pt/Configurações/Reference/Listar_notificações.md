# Listar notificações

Neste documento, você vai encontrar todas as informações sobre o relatório **Notificações**.

## Caminho para acessar

1. No senhasegura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral, selecione **Notificações > Notificações em tela > Listar notificações.**

## Barra superior

| Item | Descrição |
| --- | --- |
| Mostrar os filtros | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| Atualizar | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| Exibir ações | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| Nova notificação | Representado pelo ícone de soma, abre a janela Criar notificação. |
| Imprimir relatório | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| Exportar CSV | Representado pelo ícone da folha de papel, baixa o relatório. |
| Agendar relatório | Representado pelo ícone do relógio, abre o formuláriode Agendar relatório. Mais informações no documento [Como realizar a emissão, download e agendamento de relatórios](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports) |

## Campos de busca

| Item | Descrição |
| --- | --- |
| Data exibição | Abre um calendário para que você selecione a data de início do filtro. |
| até | Abre um calendário para que você selecione a data de fim do filtro. |
| Título | Campo de texto. Preencha com o título da notificação que você deseja filtrar. |
| Texto | Campo de texto. Preencha com o texto do corpo da notificação que você deseja filtrar. |
| Autor | Campo de texto. Preencha com o nome de usuário que gerou a notificação. |

## Campos do relatório

- **Código.**
- **Título.**
- **Texto.**
- **Autor.**
- **Data Criação: exibe a data de criação da notificação.**
- **Data Exibição.**
- **Tempo Exibição: indica qual o tempo de exibição, em segundos, que a notificação aparece na tela do usuário.**
- Na coluna **Ação**, você pode visualizar as informações sobre o envio da notificação. Para isso clique em **Visualizar Notificações por Usuário**, representado pelo ícone de lupa.

:::(info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Janela Notificações por Usuário

Ao clicar na opção **Visualizar Notificações por Usuário** você é direcionado para a janela **Notificações por Usuário**, que contém os seguintes campos.

### Campos de busca

| Item | Descrição |
| --- | --- |
| Título | Campo de texto. Preencha com o título da notificação que você deseja filtrar. |

### Campos do relatório

- **Código:** código da notificação no senhasegura.
- **Título.**
- **Autor:** nome do usuário que cadastrou a notificação.
- **Usuário:** nome do usuário que recebeu a notificação.
- **Data Criação:** data da criação da notificação.
- **Data Exibição:** data de exibição da notificação.
- **Data Fechado:** data em que a notificação foi fechada.

:::(info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Janela Criar Notificação

Ao clicar em **Nova notificação** você é direcionado para a janela **Criar Notificação**, que contém os seguintes campos.

| Item | Descrição |
| --- | --- |
| Título | Título da notificação que será exibida ao usuário. |
| Texto | Texto da notificação que será exibida ao usuário. |
| Tempo de exibição (ms) | Tempo que a notificação ficará na tela do usuário. É definido em milissegundos. Nota: preencha com 0 para que a notificação não seja fechada automaticamente. |
| Usuários a notificar | Caixa de seleção. Selecione os usuários e/ou grupos de acesso que receberão a notificação. |