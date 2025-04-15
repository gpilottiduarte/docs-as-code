# Auditoria de compartilhamento

Neste documento, você vai encontrar todas as informações sobre a tela **Auditoria de compartilhamento** do **MySafe**, que possibilita que o administrador veja um relatório com os detalhes de todos os itens compartilhados temporariamente com pessoas externas ao **MySafe**.

## Requisitos
* Permissão de administrador do **MySafe**.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **MySafe**.
2. No menu lateral, selecione **Admin > Auditoria de compartilhamento**.

---

## Barra superior

| **Item** | **Descrição** |
|------|-----|
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone de relógio, abre o formulário **[Agendar relatório](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports)**. |

---

## Campos de busca

| **Item** | **Descrição** |
|------|-----|
| **Código** | Campo de texto que filtra os itens compartilhados temporariamente pelo seu código único de identificação. |
| **Nome** | Campo de texto que filtra os itens pelo seu nome de cadastro no **MySafe**. |
| **Tipo** | Menu suspenso que filtra os itens pelo seu tipo. As opções disponíveis são *Senha*, *Arquivo*, *Anotação* e *Segredos de API*. |
| **Data de início** | Campo que filtra os itens pelo período em que o compartilhamento iniciou. Utilize esse campo para inserir a data inicial do período. Formato `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. |
| **até** | Campo que filtra os itens pelo período em que o compartilhamento iniciou. Utilize esse campo para inserir a data final do período. Formato  `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. |
| **Expiração** | Campo que filtra os itens pelo seu período de expiração. Utilize esse campo para inserir a data inicial do período. Formato  `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. |
| **até** | Campo que filtra os itens pelo seu período de expiração. Utilize esse campo para inserir a data final do período. Formato  `DD/MM/AAAA`. A seta que aponta para baixo abre um calendário para seleção da data desejada. |
| **Nome do usuário** | Campo de texto que filtra os itens pelo nome de usuário MySafe que realizou o compartilhamento. |
| **Destinatário** | Campo de texto que filtra os itens pelo email do destinatário. |
| **Acessos restantes** | Campo de texto que filtra os itens pelo número de acessos restantes ao link de acesso enviado. |
| **Estado** | Menu suspenso que filtra os itens pelo estado do compartilhamento. As opções disponíveis são *Aguardando aprovação, Aprovado, Reprovado, Finalizado, Cancelado* e *Erro*. Limpe o campo para habilitar a opção **Todos**. |



## Campos do relatório

- **Código**.
- **Nome**.
- **Tipo**.
- **Data**.
- **Nome do usuário**.
- **Destinatário**.
- **Expiração**.
- **Max. acessos**: coluna que indica quantas vezes a pessoa poderá acessar o link dentro do período de expiração. As opções possíveis são **Sem limite** e um **numeral** que indica a quantidade de vezes que a pessoa poderá acessar o link antes que ele expire.
- **Estado**.
- **Ação**: nessa coluna, você acessa as seguintes opções:
  - **Revogar**: representado pelo ícone de lixeira, abre a tela **Confirmação** para revogação do compartilhamento com as opções **Sim** e **Não**. 
**Nota**: essa opção está disponível apenas para compartilhamentos com status **Ativo**. Em caso de revogação, a data de expiração do link é atualizada para o momento em que o compartilhamento foi revogado.
  - **Ícone dos três pontos verticais**: menu suspenso com as opções **Reenviar URL de acesso** e **Histórico de compartilhamento externo**.
  - **Histórico**: representado pelo ícone de relógio, abre a tela **Histórico de compartilhamento externo**.

---


:::(info) (Info)
O relatório exibe 30 registros por tela. Para ir para as próximas telas, clique no botão de avançar no final do relatório.
:::

---