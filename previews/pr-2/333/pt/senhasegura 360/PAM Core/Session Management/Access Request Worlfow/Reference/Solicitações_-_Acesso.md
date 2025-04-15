# Solicitações - Acesso

Neste documento, você encontrará todas as informações sobre a página das solicitações de acesso feitas pelos usuários. Neste relatório estão disponíveis todas as solicitações, independente do estado que ela se encontre.

### Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** > **Solicitações**.

---
## Barra superior
**Item**|**Descrição**
|---|---|
**Mostrar os filtros**|Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela.
**Atualizar**|Representado pelo ícone da seta no sentido anti-horário, atualiza a página.
**Exibir ações**|Representado pelo ícone de três pontos verticais, exibe as ações possíveis para a página.
**Imprimir relatório**|Representado pelo ícone de impressora, abre uma nova página para impressão do relatório.
**Exportar CSV**|Representado pelo ícone de folha de papel, baixa o relatório.
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário para agendar a geração do relatório em uma data e hora específicas. |


## Campos de busca

| **Item**| **Descrição**|
|---|---|
| **Código**| Número de identificação da requisição.|
| **Solicitante**| Nome do usuário que realizou a solicitação.|
| **Operação**| Tipo da operação solicitada.|
| **Grupo**| Qual grupo o usuário pertence.|
| **Estado**| O status da solicitação, sendo eles: *Aprovada, Cancelada, Revogado, Pendente* e *Reprovada*.|
| **Dispositivo**| O dispositivo em que o acesso está sendo solicitado.|
| **Motivo**| Razão pela qual o usuário precisa do acesso. Escolha entre as opções disponíveis.|
| **Acesso emergencial** | Identifica se o acesso solicitado foi um caso emergencial ou não. Sendo os valores possíveis: Sim e Não. |
| **Código de governança**| Código de identificação para softwares ITSM (IT Service Management).|
| **Justificativa**| O motivo pelo qual o usuário precisa do acesso solicitado.|
| **Data da solicitação** | Data e hora em que foi realizada a solicitação.|
| **até**| Data final para a busca das solicitações.|
| **Expirados**| Identifica se a solicitação já teve seu prazo expirado, sendo os valores possíveis: **Sim** e **Não**.|



## Campos do relatório

* **Código**.
* **Grupo**.
* **Operação**.
* **Solicitante**.
* **Data da solicitação**.
* **Validade**.
* **Estado**.
* **Justificativa**.
* **Motivo**.
* **Acesso Emergencial**.
* **Código de governança**.
* **Ação**:
    * **Visualizar solicitação**: representado pelo ícone de lupa, abre a janela **Detalhes da Solicitação de Acesso**.

### Detalhes da Solicitação de Acesso
**Aba Informações**

* **Senha**: senha do dispositivo que será acessado.
* **Solicitante**: nome do usuário que está realizando a solicitação.
* **Grupo**: grupo de acesso que o usuário pertence.
* **Aprovações necessárias**: quantidade de aprovações necessárias.
* **Reprovações necessárias**: quantidade de reprovações necessárias.
* **Data Solicitação**: data e hora da solicitação.
* **Estado**: status da solicitação (*Aprovada, Cancelada, Revogada, Pendente* ou *Reprovada*).

**Aba Justificativa**

* **Motivo**: razão pela qual o usuário precisa do acesso
* **Código de governança**: código de identificação para softwares ITSM (IT Service Management)
* **Justificativa**: o motivo pelo qual o usuário precisa do acesso solicitado.

**Aba Detalhes da solicitação**: descrição da ação que será realizada nesta solicitação.

**Aba Respostas**

* **Aprovador**: nome do usuário que aprovou a solicitação.
* **Resposta**: status que contém a resposta dada pelo aprovador.
* **Data**: data e hora que foi realizada a aprovação.
* **Nível**: nível do aprovador.
* **Justificativa**: justificativa para explicar a resposta dada pelo aprovador.

:::(info) (**Info**)
O relatório exibe 30 registros por tela. Para ir para as próximas telas, clique nos botões de avançar ao final do relatório.
:::
