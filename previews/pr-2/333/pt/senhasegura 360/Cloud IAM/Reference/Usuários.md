# Usuários

Nesse documento, você irá encontrar todas as informações sobre a página **Usuários**,  que lhe permite provisionar contas de usuário em todos os seus *Cloud Service Providers* (CSPs) integrados com o senhasegura e importar contas de serviço.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Cloud IAM**.
2. No menu lateral, selecione **Cloud IAM** > **Usuários.**

---

## Barra superior

| **Item** | **Descrição** |
| --- | --- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Adicionar usuário** | Representado pelo ícone de soma, abre a tela [Adicionar usuário](#tela-adicionar-usuário) que permite que você crie usuários usando o **Cloud IAM**. |
| **Importar usuários da Azure** | Representado pelo ícone de download, importa os usuários Azure para o **Cloud IAM**. Essa ação é feita automaticamente para a AWS e o GCP. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário [Agendar formulário](https://docs.senhasegura.io/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports). |

## Campos de busca

| **Item** | **Descrição** |
| --- | --- |
| **Código** | Campo que filtra os usuários por seu código de identificação do dentro do senhasegura. |
| **Nome do usuário** | Campo que filtra os usuários por seu nome. |
| **Conta** | Campo que filtra os usuários pela conta conectada. |
| **Provedores** | Campo que filtra os usuários por um dos três provedores disponíveis. As opções disponíveis são: **AWS**, **Google Cloud** e **Azure**. |
| **Tag** | Campo que filtra os usuários pelas tags, que podem ser adicionadas quando um usuário é criado no **Cloud IAM**. |
| **Data de criação** | Abre um calendário para escolher a data de registro do usuário. Essa data é considerada a data de início do filtro. |
| **até** | Abre um calendário para escolher a data de registro do usuário. Essa data é considerada a data de fim do filtro. |
| **Status** | Campo que filtra os usuários pelos seus status de provisionamento. As opções disponíveis são: **Pendente**, **Provisionado**, **Provisionando**, **Desprovisionamento**, **Não provisionado**, e **Importado**. |
| **Ativo** | Campo que filtra os usuários pelo seu estado de ativação. As opções disponíveis são **Sim** e **Não**. |
| **Deletado** | Campo que filtra os usuários deletados. As opções disponíveis são **Sim** e **Não**. |

{{snippet.Cloud_IAM_Reprocess_PT}}

Para contas da **Azure**, você deverá manualmente importar os usuários Azure no menu de **Exibir ações**.

### Tela adicionar usuário

| **Item** | **Descrição** |
| --- | --- |
| **Usuário** | Campo para dar um nome ao usuário. |

### Configurações

:::(info) (Info)
Você pode provisionar usuários para múltiplos CSPs.
:::

| **Item** | **Descrição** |
| --- | --- |
| **AWS** | Caixa de seleção para provisionar o usuário para a AWS. |
| **Google Cloud** | Caixa de seleção para provisionar o usuário para o Google Cloud. |
| **Usuário responsável** | Campo para selecionar qual usuário senhasegura será responsável pelo usuário. |
| **TTL (segundos)** | Define o tempo de vida do usuário. O time-to-live (TTL) começa a contar a partir da criação e quando expira, o usuário será automaticamente deletado do provedor. |
| **Descrição** | Campo de texto para descrever o usuário. |
| **Tags** | Tags associadas ao usuário. |