# Minhas execuções de aprovações

Neste documento, você encontrará todas as informações sobre a página das aprovações de execução de comandos bloqueados.

:::(info) (**Info**)
As informações no relatório desta página só estarão disponíveis para um usuário que possua o papel de aprovador no sistema.
:::
***
## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** > **Comandos auditados** > **Minhas aprovações de execução**.

***

## Barra superior
**Item**|**Descrição**
|---|---|
**Mostrar os filtros**|Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela.
**Atualizar**|Representado pelo ícone da seta no sentido anti-horário, atualiza a página.
**Exibir ações**|Representado pelo ícone de três pontos verticais, exibe as ações possíveis para a página.
**Imprimir relatório**|Representado pelo ícone de impressora, abre uma nova página para impressão do relatório.
**Exportar CSV**|Representado pelo ícone de folha de papel, baixa o relatório.
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário para agendar a geração do relatório em uma data e hora específicas. |

:::(info) (**Info**)
O ícone de **ponto de interrogação** presente nas páginas, ao ser clicado, te redireciona para a busca de palavras-chave ou a página de documentação.
:::
***
## Campos de Busca

**Item**|**Descrição**
|---|---|
**Código**|Número de identificação atribuído a solicitação.
**Operação**|Qual o tipo de operação que está sendo solicitada. Para este caso sempre será ‘Solicitação da execução do comando’.
**Grupo de acesso**|Grupo ao qual o usuário pertence.
**Solicitante**|Nome do usuário que está realizando a solicitação.
**Data de solicitação**|Data e hora em que foi realizada a solicitação.
**até**|Data final para a busca dos eventos.
**Estado**|O status da solicitação, sendo eles: *Pendente, Aprovada, Reprovada* e *Expirada*.
**Governança**|Código de identificação para softwares ITSM (IT Service Management).
**Motivo**|Razão pela qual o usuário precisa usar o comando solicitado.

***

## Campos do relatório

* **Código**.
* **Operação**.
* **Grupo de acesso**.
* **Solicitante**.
* **Solicitada em**.
* **Estado**.
* **Validade**.
* **Governança**.
* **Motivo**.
* **Ação**
    * **Aprovar**: Representado pelo ícone de check, aprova a solicitação. Ao clicar, é preciso confirmar a ação na caixa de mensagem que se abre.
    * **Ícone dos três pontos verticais** :botão das ações que podem ser realizadas com a solicitação, como **Reprovar** e **Detalhes**. Para reprovar, é preciso confirmar a ação na caixa de mensagem que se abre.

:::(info) (**Info**)
O relatório exibe 30 registros por tela, para ir para as próximas telas, clique nos botões de avançar ao final do relatório.
:::