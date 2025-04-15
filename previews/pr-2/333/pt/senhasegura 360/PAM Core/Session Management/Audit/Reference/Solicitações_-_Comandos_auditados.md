# Solicitações - Comandos auditados

Neste documento, você encontrará todas as informações sobre a página das solicitações de execução de comandos bloqueados, neste relatório está disponível todas as solicitações, independente do estado que ela se encontre.
***

### Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** > **Comandos auditados** > **Solicitações**.
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

### Campos de Busca

**Item**|**Descrição**
|---|---|
**Código**|Número de identificação atribuído a solicitação.
**Operação**|Qual o tipo de operação que está sendo solicitada. Para este caso sempre será ‘Solicitação da execução do comando’.
**Grupo de acesso**|Grupo ao qual o usuário pertence.
**Solicitante**|Nome do usuário que está realizando a solicitação.
**Data de solicitação**|Data e hora em que foi realizada a solicitação.
**até**|Data final para a busca dos eventos.
**Estado**|O status da solicitação, sendo eles: *Pendente, Aprovada, Reprovada, Expirada* e *Cancelada*.
**Governança**|Código de identificação para softwares ITSM (*IT Service Management*).
**Motivo**|Razão pela qual o usuário precisa usar o comando solicitado. Sendo eles: *Alteração, Equipamento sem conectividade, Incidente* e *Outro*.
**Filtrar**|Botão de ação para fazer a busca conforme os filtros escolhidos.
**Limpar**|Limpa as caixas de texto com os filtros escolhidos.
***

### Campos do relatório

* **Código**.
* **Operação**.
* **Grupo de acesso**.
* **Solicitante**.
* **Solicitada em**.
* **Estado**.
* **Validade**: Data e hora que a solicitação será expirada.
* **Governança**.
* **Motivo**.
* **Ação**
    * **Lupa**: abre a tela **Detalhes da solicitação**

#### Tela Detalhes da solicitação

**Item**|**Descrição**
|---|---|
**Solicitante**|Nome do usuário que fez a solicitação.
**Solicitação da execução de comando**|O tipo da solicitação e o status do pedido.
**Código**|Código de identificação da solicitação.
**Grupo de acesso**|Grupo de acesso que o usuário pertence.
**Solicitado em**|Data e hora em que foi realizada a solicitação.
**Validade**|Data de expiração da solicitação.
**Aprovações**|Quantidade de aprovações que a solicitação teve.
**Reprovações**|Quantidade de reprovações que a solicitação teve.
**Aprovador**|Nome do responsável pela aprovação.
**Nível**|Nível do aprovador.
**Resposta**|Resposta dada pelo responsável, sendo elas: *Não respondida, Aprovada* e *Reprovada*.
**Data**|Data que ocorreu a resposta do aprovador.
**Justificativa**|Justificativa da aprovação ou reprovação.
**Código de governança**|Código de identificação para softwares ITSM. 
**Motivo**|Razão pela qual o usuário precisa usar o comando solicitado. Sendo eles: *Alteração, Equipamento sem conectividade, Incidente* e *Outro*.
**Detalhes da solicitação**|Resumo das informações da solicitação.

:::(info) (**Info**)
O relatório exibe 30 registros por tela, para ir para as próximas telas, clique nos botões de avançar ao final do relatório.
:::