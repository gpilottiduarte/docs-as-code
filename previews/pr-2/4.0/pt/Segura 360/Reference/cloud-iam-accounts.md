# Contas

Nesse documento, você irá encontrar todas as informações sobre a página de **Contas**, que permite que você integre seus *Cloud Service Providers* (CSPs) com sua conta Segura.

## Caminho para acesso

1. No Segura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Cloud IAM**.
2. No menu lateral, selecione **Configurações** > **Contas**.

---

## Barra superior

| **Item** | **Descrição** |
| --- | --- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Adicionar conta** | Representado pelo ícone de soma, abre a tela [Adicionar conta](#tela-de-adicionar-conta) que permite que você conecte CSPs ao **Cloud IAM**. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário [Agendar relatório](/v4/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports). |

## Campos de busca

| **Item** | **Descrição** |
| --- | --- |
| **Código** | Campo que filtra as contas por seu código de identificação do dentro do Segura. |
| **Nome** | Campo que filtra as contas por seu nome. |
| **Provedores** | Campo que filtra as contas por um dos três provedores disponíveis. As opções disponíveis são: **AWS**, **Google Cloud** e **Azure**. |
| **Tags** | Campo que filtra as contas pelas tags, que podem ser adicionadas quando uma conta é criada ou editada no **Cloud IAM**. |
| **Data de registro** | Abre um calendário para escolher a data de registro da conta. Essa data é considerada a data de início do filtro. |
| **até** | Abre um calendário para escolher a data de registro da conta. Essa data é considerada a data de fim do filtro. |
| **Ativo** | Campo que filtra as contas pelo seu estado de ativação. As opções disponíveis são **Sim** e **Não**. |
| Conectável | Campo que filtra as contas pela possibilidade de o **Cloud IAM** se conectar ao CSP associado. As opções disponíveis são **Sim** e **Não**. |

{{snippet.Cloud_IAM_Reprocess_PT}}

Para contas da **Azure**, você deverá manualmente importar as contas Azure no menu de **Exibir ações**.

### Tela de adicionar conta

| **Item** | **Descrição** |
| --- | --- |
| Nome | Campo para adicionar o nome da conta. |
| Ativo | Botões para habilitar ou desabilitar a conta. As opções disponíveis são **Sim** e **Não**. |

### Configurações

:::(info) (Info)
Uma conta pode ser associadas a múltiplos CSPs.
:::

| **Item** | **Descrição** |
| --- | --- |
| **Providers** | Campo para selecionar quais provedores serão conectados à conta. |
| **Descrição** | Campo de texto para descrever a conta. |
| **Tags** | Tags associadas com a conta. |

### AWS

| **Item** | **Descrição** |
| --- | --- |
| **Visualizar JSON** | Botão para abrir um modal com as políticas necessárias em formato JSON. Compatível com o Editor de Políticas do IAM da AWS. |
| **Chave de acesso** | Campo para adicionar a chave de acesso criada como uma credencial de segurança para o usuário IAM com a política associada. |
| **Segredo da chave de acesso** | Campo para adicionar a chave de acesso secreta criada como uma credencial de segurança para o usuário IAM com a política associada. |
| **Região padrão** | Campo de seleção para escolher a região da conta AWS. |

### Azure

| **Item** | **Descrição** |
| --- | --- |
| **Diretório (tenant) ID** | Campo para adicionar o ID do diretório (Tenant ID) da aplicação Azure. |
| **Application (Client ID)** | Campo para adicionar o ID do client (Client ID) da aplicação Azure. |
| **Valor do segredo do cliente** | Campo para adicionar o segredo do cliente (Client secret) criado para a aplicação. |
| **View required permissions** | Link para abrir um modal com as permissões necessárias na AWS. |

### Google Cloud

| **Item** | **Descrição** |
| --- | --- |
| **Arquivo de credenciais** | Botão para fazer upload das credenciais da conta de serviço do GCP IAM que possui uma função com as permissões necessárias. |

A seção **IAM** presente nas abas **Azure** e **AWS** contém dois campos:

- **IAM - Identity Access Management**: apenas leitura
- **Atualizar a senha dos usuários com acesso ao console**: se marcada, esta opção aciona uma alteração de senha quando os usuários com credenciais registradas no Cloud IAM fizerem login no provedor.