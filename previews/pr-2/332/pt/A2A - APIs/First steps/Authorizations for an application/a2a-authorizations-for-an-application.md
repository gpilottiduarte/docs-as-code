# Autorizações

Este artigo contém informações detalhadas sobre a tela de **Autorizações por aplicação** do módulo **A2A**.

Nela, você pode visualizar uma lista com todas as autorizações para cada aplicação criada na tela **Aplicações**, adicionar uma nova autorização e visualizar e modificar os detalhes de uma autorização.

## Ícones da página inicial


| Item | Descrição |
| --- | --- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para o relatório. |
| **Nova aplicação** | Representado pelo sinal de adição, abre o formulário **Configuração da aplicação**. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário **Agendar relatório**. |

## Campos de busca


| Item | Descrição |
| --- | --- |
| **Aplicação** | Filtro para buscar todas as aplicações disponíveis. Limpe o campo para visualizar **Todas** as aplicações, digite o nome da aplicação ou clique na seta para baixo para visualizar uma lista de aplicações disponíveis. |
| **Cód. Autorização** | Código único gerado pelo senhasegura para identificar a autorização. |
| **Nome** | Nome da autorização. |
| **Ambiente** | O ambiente onde a autorização da aplicação está ativa. |
| **Sistema** | O sistema onde a autorização da aplicação está ativa. |
| **Data de criação/até** | Período em que a autorização da aplicação foi criada. As setas para baixo nos campos abrem um calendário para escolha das datas. |
| **Ativo** | O status da autorização com as opções **Sim** ou **Não**. Ao acionar o botão **Limpar**, a opção **Todos** é habilitada. |
| **Filtrar** | Botão de ação para fazer a busca de acordo com os filtros escolhidos. |
| **Limpar** | Limpa as caixas de texto com os filtros escolhidos. |

## Campos do relatório

* **Cód. Autorização**.
* **Nome**.
* **Ambiente**.
* **Sistema**.
* **Data de criação**.
* **Permissão do recurso PAM**.
* **Ativo**.
* **Ação**: nesta coluna, você encontrará as seguintes opções:
    * **Nova autorização**: representado pelo sinal de adição, este botão abre o formulário **Autorização da aplicação** para que você possa criar uma nova autorização para a aplicação selecionada.
    * **Visualizar**: representado pelo ícone de chave, este botão abre a janela **Autorização da aplicação** para que você possa visualizar todos os detalhes sobre a autorização da aplicação.
    * **Alterar**: representado pelo ícone de lápis e papel, abre o formulário **Autorização da aplicação** para que você possa fazer alterações na autorização da aplicação.
Este botão só está disponível para aplicações cuja chave de autorização não tenha expirado ou sido revogada.

:::(Info) (Info)
O relatório exibe 30 registros por tela. Para avançar para a próxima tela, clique no botão de avançar ao final do relatório.
:::