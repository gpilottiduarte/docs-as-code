# Referência para bulk actions em dispositivos

Você pode encontrar o relatório de tarefas para Bulk Actions envolvendo dispositivos seguindo o caminho **Grid Menu > Relatórios > Eventos > Operações em lote**.

Na tela de listagem das operações aguardando aprovação, você encontra, na coluna **Ação**, a opção **Tarefas**, representada pelo ícone de arquivo.

Na janela pop-up **Tarefas de operação em lote** você tem três ícones na barra superior:

- **Mostrar filtros**, representado pelo ícone da lupa.
- **Atualizar**, representado pelo ícone da seta em sentido anti-horário.
- **Exibir Ações**, representado pelo ícone de três pontos verticais.

A opção de **Exibir Ações** tem como função imprimir ou salvar os relatórios que foram buscados. Para saber como imprimir ou salvar relatórios, acesse a documentação sobre **[Como realizar a emissão, download e agendamento de relatórios.](https://docs.senhasegura.io/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports)**

Ao clicar em **Mostrar filtros**, os campos de busca serão exibidos.

| Campo | Descrição |
| --- | --- |
| Código | Código de registro da solicitação de operação em lote na plataforma senhasegura. |
| Cód. da entidade | Código da entidade (dispositivo) que está sendo buscado. |
| Status | Menu suspenso contendo as opções de status da solicitação. São elas: Aprovação pendente, Execução pendente, Executando, Sucesso, Erro e Cancelado. |
| Pioridade | Menu suspenso com a opções: Altissíma, Alta, Média, Baixa e Baixissíma. |
| Start date | Abre um calendário para que você selecione uma data de início para a busca. |
| até | Abre um calendário para você selecionar uma data final para o intervalo de datas de início. Dessa forma, você pode escolher um intervalo para filtrar todas as tarefas criadas nesse esteja contidas entre a data de início e a data final do intervalo. |
| Data do fim | Abre um calendário para você selecionar uma data final para a busca. |
| até | Abre um calendário para você selecionar uma data final para o intervalo de datas finais. Dessa forma, você pode escolher um intervalo para filtrar todas as tarefas criadas nesse esteja contidas entre a data de expiração e a data final do intervalo. |

Para realizar a busca, clique no botão **Filtrar**; para limpar todos os campos da busca e iniciar uma nova consulta, clique no botão **Limpar**.

A busca será apresentada em forma de lista logo abaixo dos campos de busca, com os mesmos campos da busca, a exceção da coluna **Ação**.

## Tarefa de operação em lote

Na coluna **Ação**, após a busca, é possível identificar a opção **Detalhes**, representada pelo ícone de lupa. Ao clicar nessa opção, você será direcionado para uma nova janela pop-up com detalhes sobre aquela tarefa específica. Nesta tela você terá os seguintes campos:

| Campos | Descrição |
| --- | --- |
| Código | Código de registro da solicitação de operação em lote na plataforma senhasegura. |
| Ação | Descrição da ação que foi solicitada. |
| Estado | Estado da solicitação. Pode assumir os seguintes valores: Aprovação pendente, Execução pendente, Executando, Sucesso, Erro e Cancelado. |
| Cód. da entidade | Código da entidade a ser buscada. |
| Nome da entidade | Nome do dispositivo que foi feita a solicitação da operação em lote. |
| Start date | Data de início da validade da solicitação. |
| Data do fim | Data de encerramento da validade da solicitação. |
| Mensagens | Mensagem que o usuário solicitante enviou. |

Logo abaixo, na seção **Alterações,** são mostradas as alteração solicitadas na operação em lote em questão. Esse relatório tem três campos:

- O campo que foi alterado (por exemplo: **Ativo**).
- O campo **De** onde é mostrado o estado anterior ao pedido de alteração (por exemplo: **De: Sim**).
- o campo **Para** o estado ao qual foi solicitada a alteração (por exemplo: **Para: Não**).

:::(info) (Info)
Se a solicitação tiver mais de uma alteração, elas serão listadas uma abaixo da outra, seguindo os mesmos campos.
:::