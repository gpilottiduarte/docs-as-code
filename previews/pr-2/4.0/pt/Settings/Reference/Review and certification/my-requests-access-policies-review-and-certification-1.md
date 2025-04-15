# Minhas aprovações - Revisão e certificação de políticas de acesso

Este documento fornece informações sobre o relatório **Minhas aprovações**, com as aprovações de políticas de acesso que precisam ser realizadas. 

**Caminho para acesso**

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Workflow de aprovação**.  
2. No menu lateral, selecione **Revisão e certificação \> Políticas de acesso \> Minhas aprovações.**

## **Menu de ações**

| Item  | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## **Campos de Busca**

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo número de identificação da ordem do cadastro da política de acesso. |
| **Políticas de acesso** | Campo de texto | Filtra pelo nome de cadastro da política de acesso. |
| **Status** | Menu suspenso | Filtra as solicitações por sua situação. As opções são **Pendente**, **Aprovada**, **Reprovada**, **Expirada** e **Cancelada.** Limpe o campo para habilitar a opção **Todos**. |
| **Expiração** | Seletor de data | Filtra pelo período do prazo de expiração da solicitação. |
| **Data de solicitação** | Seletor de data | Filtra pela data que foi realizada a solicitação. |

## **Campos do relatório**

* **Código.**  
* **Operação**: a operação que foi solicitada.  
* **Tipo**: o tipo de solicitação feita.  
* **Políticas de acesso.**  
* **Solicitante**: nome do usuário solicitante.  
* **Data de solicitação.**  
* **Status.**  
* **Expiração.**  
* **Ações:**  
  * **Detalhes**: abre a tela **Detalhes**.  
    

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

**Tela Detalhes**

### 

### **Menu de ações**

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ícone de olho** | Ícone | Ao posicionar o cursor sobre este ícone, são exibidas informações detalhadas sobre o usuário que criou o registro e o último usuário que o modificou. |

**Aba Geral**  
**Seção Políticas de acesso**

| Item  | Descrição |
| :---- | :---- |
| **Nome** | Exibe o nome da política de acesso. |
| **Criado por** | Exibe o nome do usuário que criou a política de acesso. |
| **Visualizar senha** | Exibe a indicação se a política poderá ou não visualizar a senha. |
| **Iniciar sessão** | Exibe a indicação se a política poderá ou não iniciar sessão. |

## **Seção Revisão e certificação**

| Item  | Descrição |
| :---- | :---- |
| **Aprovador** | Exibe o nome do aprovador da solicitação. |
| **Data** | Data e hora que foi realizada a aprovação. |
| **Status** | Exibe o status da solicitação. |
| **Justificativa** | Exibe a descrição da justificativa. |

**Aba Usuários**  
:::(info) (**Info**)  
Usuários que estão inseridos em **mais de uma** política de acesso terão as configurações aplicadas da política mais restritiva.  
:::

| Item  | Descrição |
| :---- | :---- |
| **Tabela Usuários** | Dados de cada usuário contendo *os campos* *Cód, Nome, Nome de usuário, E-mail, Tipo de criação, Departamento, Adicionado por*, *Adicionado em* e *Ação*. |

**Aba Aprovadores**  
:::(info) (**Info**)  
O aprovador deve ter no mínimo o perfil de Operador PAM para ter acesso à tela de aprovação de fluxo.  
:::

| Item  | Descrição |
| :---- | :---- |
| **Tabela Aprovadores** | Dados de cada usuário contendo *os campos* *Código, Nome, Nome de usuário, E-mail, Tipo de criação, Departamento, Adicionado por*, *Adicionado em* e *Ação*. |

**Aba Critérios**

| Item  | Descrição |
| :---- | :---- |
| **Site** | Sites incluídos no cadastro da política de acesso. |
| **Tipo de equipamento** | Tipo de equipamentos incluídos no cadastro da política de acesso. |
| **Tipo de credencial** | Tipos de credencial incluídas no cadastro da política de acesso. |

**Aba Revisão**  
Estão as informações que foram adicionadas nos passos anteriores, para que seja analisada e feita a aprovação ou reprovação. As informações estão agrupadas por cada aba respectivamente.