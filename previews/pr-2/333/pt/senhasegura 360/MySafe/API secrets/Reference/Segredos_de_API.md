# Segredos de API

Neste documento, você vai encontrar todas as informações sobre a página **Segredos de API** do **MySafe**.

## **Caminho para acesso**

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **MySafe**.  
2. No menu lateral, selecione **Segredos de API**.

---

## **Barra superior**

| Item | Descrição |
| ----- | ----- |
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Adicionar segredo de API** | Representado pelo ícone de soma, abre a tela **[Criação de segredo de API](/v3-33/docs/pt/mysafe-api-secrets-screen#telas-criaçãoeditar-segredo-de-api)**. |
| **Importação em lote** | Representado pelo ícone de seta apontando para cima, abre a tela para importação de senhas em lote. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário **[Agendar relatório](/v3-33/docs/pt/general-information-how-to-issue-download-and-schedule-device-reports)**. |

---

## **Campos de busca**

| Item | Descrição |
| ----- | ----- |
| **Código** | Campo que filtra os segredos de API pelo seu código único de identificação. |
| **Nome** | Campo que filtra os segredos de API pelo seu nome. |
| **Url** | Campo que filtra os segredos de API pela URL da aplicação em estão cadastrados. |
| **Tags** | Campo que filtra os segredos de API pelas palavras-chave associadas. |
| **Compartilhada** | Campo que filtra os segredos de API pelo seu status de compartilhamento. As opções disponíveis são **Sim** e **Não**. Clique em **Limpar** para habilitar a opção **Todos**. |
| **Proprietário** | Campo que filtra os segredos de API pelo nome do usuário que os cadastrou. |
| **Último uso** | Campo que filtra os segredos de API pelo período em que foi visualzado. Formato `DD/MM/AAAA`. Utilize esse campo para inserir a data inicial do período. A seta que aponta para baixo abre um calendário. |
| **até** | Campo que filtra os segredos de API pelo período em que foi visualizado. Formato `DD/MM/AAAA`. Utilize esse campo para inserir a data final do período. A seta que aponta para baixo abre um calendário. |
| **Ativo** | Campo que filtra os segredos de API pelo seu status de ativação. As opções disponíveis são **Sim** e **Não**. Clique em **Limpar** para habilitar a opção **Todos**. |

---

## **Campos do relatório**

* **Checkbox**: usada para ações em lote.  
* **Código**.  
* **Nome**.  
* **Url**.  
* **Tags**.  
* **Compartilhada**.  
* **Proprietário**.  
* **Último uso**.  
* **Ativo**.  
* **Ação**: nessa coluna, você encontra as seguintes opções:  
  * **Visualizar segredo de API**: representado pelo ícone de lupa, abre a tela **[Detalhes do segredo de API](/v3-33/docs/pt/mysafe-api-secrets-screen#tela-detalhes-do-segredo-de-api)** com todas as informações sobre o item.  
  * **Ícone dos três pontos verticais**: abre um menu suspenso com as opções: *Compartilhar, Editar* e *Inativar*.

:::(info) (Info)  
O relatório exibe 30 registros por tela. Para ir para as próximas telas, clique no botão de avançar ao final do relatório.  
:::

## **Ícones inferiores**

* **Ativar**: botão para ativação em lote.  
* **Inativar**: botão para inativação em lote.  
* **Compartilhar**: botão para compartilhamento em lote.

### **Tela Detalhes do segredo de API**

Neste seção, você vai encontrar todas as informações sobre a tela **Detalhes do segredo de API.**

| Item | Descrição |
| ----- | ----- |
| **Nome** | Nome atribuído ao segredo de API. |
| **Dono** | Usuário que cadastrou o segredo de API. |
| **Último uso** | Data e hora em que o segredo de API foi visualizado pela última vez. |
| **URL** | URL da aplicação onde o segredo de API está cadastrado. |
| **Identificador** | String única definida pelo usuário para identificar o segredo de API que está sendo cadastrado. |
| **ID do cliente** | Identificador único da aplicação do cliente. |
| **Método** | Método HTTP usado para realizar a chamada de API. |
| **Tags** | Palavras-chave associadas ao segredo de API. |
| **Observações** | Observações sobre o segredo de API. |
| **Visualizar a informação** | Representado pelo ícone de lista, abre a janela pop-up **Informação protegida** que exibe o **Client secret**. |

#### **Seção Usuários com acesso à informação**

| Item | Descrição |
| ----- | ----- |
| **Membro** | Nome do usuário **MySafe** com acesso ao segredo de API. |
| **Pode visualizar?** | Indica permissão de visualização sobre os detalhes do segredo de API. Por padrão, sempre que um segredo de API é compartilhado, essa coluna fica marcada com **Sim**. |
| **Pode editar?** | Indica permissão de edição sobre os detalhes do segredo de API. As opções possíveis são **Sim** e **Não**. |

### **Telas Criação/Editar segredo de API**

Neste seção, você vai encontrar todas as informações sobre as telas **Criação de segredo de API** e **Editar de segredo de API** que possuem os mesmos campos.

| Item | Descrição |
| ----- | ----- |
| **Nome**\* | Campo para inserção do nome do segredo de API. |
| **Url**\* | Campo para inserção da URL da aplicação onde o segredo de API será usado. |
| **ID do cliente**\* | Campo para inserção do `Client ID` utilizado para identificar a aplicação cliente no fluxo de autorização OAuth 2.0. |
| **Client secret** | Campo para inserção do `Client Secret` utilizado para autenticar a aplicação cliente no fluxo de autorização OAuth 2.0. |
| **Identificador** | Campo para inserção da string única definida pelo usuário para identificar o segredo de API. |
| **Método** | Campo para inserção do método HTTP utilizado para chamar a API. |
| **Tags** | Campo para inserção das palavras-chave associadas ao segredo de API. |
| **Anotações** | Campo para inserção de observações sobre o segredo de API. |
| **Ícone de olho** | Presente apenas na tela **Editar segredo de API**, um ícone que mostra informações sobre quem adicionou o segredo de API e quando, assim como quem fez a última alteração e quando. |

:::(info) (Info)  
Os itens com asterisco são obrigatórios.

:::