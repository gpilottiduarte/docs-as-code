# Credenciais

Nesse documento, você irá encontrar todas as informações sobre a página de **Credenciais**, que mostra as credenciais existentes para contas conectadas ao senhasegura e permite que você crie novas credenciais para todos os *Cloud Service Providers* (CSPs) conectados à sua conta.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Cloud IAM**.
2. No menu lateral, selecione **Cloud IAM** > **Credenciais.**

---

## Barra superior

| **Item** | **Descrição** |
| --- | --- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Add credential** | Representado pelo ícone de soma, abre a tela [Adicionar credencial](#tela-add-credential) que permite que você crie credenciais usando o Cloud IAM. |
| **Importar credenciais da Azure** | Representado pelo ícone de download, importa as credenciais Azure no **Cloud IAM**. Essa ação é feita automaticamente para a AWS e o GCP. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário [Agendar relatório](https://docs.senhasegura.io/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports). |

## Campos de busca

| **Item** | **Descrição** |
| --- | --- |
| **Código** | Campo que filtra as credenciais por seu código de identificação do dentro do senhasegura. |
| **Credencial** | Campo que filtra as credenciais por seu nome. |
| **Conta** | Campo que filtra as credenciais pela conta conectada. |
| **Usuário/Conta de serviço** | Campo que filtra as credenciais pelo usuário ou conta de serviço conectada. |
| **Tag** | Campo que filtra as credenciais pelas tags, que podem ser adicionadas quando uma credencial é criada no **Cloud IAM**. |
| **Data de criação** | Abre um calendário para escolher a data de registro da credencial. Essa data é considerada a data de início do filtro. |
| **até** | Abre um calendário para escolher a data de registro da credencial. Essa data é considerada a data de fim do filtro. |
| **Ativo** | Campo que filtra as credenciais pelo seu estado de ativação. As opções disponíveis são **Sim** e **Não**. |
| **Deletado** | Campo que filtra as credenciais deletadas. As opções disponíveis são **Sim** e **Não**. |
| **Provedores** | Campo que filtra as credenciais por um dos três provedores disponíveis. As opções disponíveis são: **AWS**, **Google Cloud** e **Azure**. |

{{snippet.Cloud_IAM_Reprocess_PT}}

Para contas da **Azure**, você deverá manualmente importar as credenciais Azure no menu de **Exibir ações**.

### Tela add credential

| **Item** | **Descrição** |
| --- | --- |
| **Provedores** | Campo para selecionar para qual provedor a credencial será criada. As opções disponíveis são: **AWS**, **Google Cloud** e **Azure**. |
| **Conta** | Campo para selecionar para qual conta a credencial será criada. |
| **Usuário/Conta de serviço** | Campo para selecionar para qual usuário ou conta de serviço a credencial será criada. |

### Informações

| **Item** | **Descrição** |
| --- | --- |
| **TTL (segundos)** | Define o tempo de vida da credencial. O time-to-live (TTL) começa a contar a partir da criação e quando expira, a credencial será automaticamente deletada do provedor. |
| **Environment** | Campo para selecionar para qual ambiente do DSM a credencial é criada. Requer [DevOps Secret Manager](https://docs.senhasegura.io/docs/pt/devops-secret-manager). |
| **System** | Campo para selecionar um sistema configurado como [Parâmetros do sistema](https://docs.senhasegura.io/docs/pt/administration-system-parameters). |
| **Descrição** | Campo de texto para descrever a credencial. |
| **Tags** | Tags associadas à credencial. |