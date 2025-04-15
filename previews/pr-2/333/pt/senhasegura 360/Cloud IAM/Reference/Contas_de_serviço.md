# Contas de serviço

Nesse documento, você irá encontrar todas as informações sobre a página **Contas de serviço**, que lhe permite provisionar contas de serviço em todos os seus *Cloud Service Providers* (CSPs) integrados com o senhasegura e importar contas de serviço.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Cloud IAM**.
2. No menu lateral, selecione **Cloud IAM** > **Contas de serviço.**

---

## Barra superior

| **Item** | **Descrição** |
| --- | --- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Adicionar conta de serviço** | Representado pelo ícone de soma, abre a tela [Adicionar conta de serviço](#tela-adicionar-conta-de-serviço) que permite que você crie contas de serviço usando o **Cloud IAM**. |
| **Importar contas de serviço da Azure** | Representado pelo ícone de download, importa as contas de serviço Azure para o **Cloud IAM**. Essa ação é feita automaticamente para a AWS e o GCP. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário [Agendar relatório](https://docs.senhasegura.io/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports). |

## Campos de busca

| **Item** | **Descrição** |
| --- | --- |
| **Código** | Campo que filtra as contas de serviço por seu código de identificação do dentro do senhasegura. |
| **Nome do usuário** | Campo que filtra as contas de serviço por seu nome. |
| **Conta** | Campo que filtra as contas de serviço pela conta conectada. |
| **Provedores** | Campo que filtra as contas de serviço por um dos três provedores disponíveis. As opções disponíveis são: **AWS**, **Google Cloud** e **Azure**. |
| **Tag** | Campo que filtra as contas de serviço pelas tags, que podem ser adicionadas quando uma conta de serviço é criada no **Cloud IAM**. |
| **Data de criação** | Abre um calendário para escolher a data de registro da conta de serviço. Essa data é considerada a data de início do filtro. |
| **até** | Abre um calendário para escolher a data de registro da conta de serviço. Essa data é considerada a data de fim do filtro. |
| **Status** | Campo que filtra as contas de serviço pelos seus status de provisionamento. As opções disponíveis são: **Pendente**, **Provisionado**, **Provisionando**, **Desprovisionamento**, Não **provisionado**, e **Importado**. |
| **Ativo** | Campo que filtra as contas de serviço pelo seu estado de ativação. As opções disponíveis são **Sim** e **Não**. |
| **Deletado** | Campo que filtra as contas de serviço deletadas. As opções disponíveis são **Sim** e **Não**. |

{{snippet.Cloud_IAM_Reprocess_PT}}

Para as contas da **Azure**, você deverá manualmente importar as contas de serviço Azure no menu de **Exibir ações**.

### Tela adicionar conta de serviço

| **Item** | **Descrição** |
| --- | --- |
| **Nome** | Campo para dar um nome à conta de serviço. |

### Configurações

:::(info) (Info)
Você pode provisionar contas de serviço para múltiplos CSPs.
:::

| **Item** | **Descrição** |
| --- | --- |
| **AWS** | Caixa de seleção para provisionar a conta de serviço para a AWS. |
| **Google Cloud** | Caixa de seleção para provisionar a conta de serviço para o Google Cloud. |
| **Usuário responsável** | Campo para selecionar qual usuário senhasegura será responsável pela conta de serviço. |
| **TTL (segundos)** | Define o tempo de vida do usuário. O time-to-live (TTL) começa a contar a partir da criação e quando expira, a conta de serviço será automaticamente deletada do provedor. |
| **Descrição** | Campo de texto para descrever a conta de serviço. |
| **Tags** | Tags associadas à conta de serviço. |