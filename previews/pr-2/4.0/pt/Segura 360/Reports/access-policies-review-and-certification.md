# Revisão e certificação de políticas de acesso

Este documento fornece informações sobre o relatório **Revisão e certificação de políticas de acesso**, que mostra a lista dos grupos de acessos do PAM Core. 

**Caminho para acesso**

1. No senhasegura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Relatórios**.  
2. No menu lateral, selecione **Revisão e certificação \> Revisão e certificação de políticas de acesso.**

## **Menu de ações**

| Item  | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## **Campos de Busca**

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo número de identificação da ordem do cadastro da política de acesso. |
| **Políticas de acesso** | Campo de texto | Filtra pelo nome de cadastro da política de acesso. |
| **Revisor** | Campo de texto | Filtra pelo nome do usuário que realizou a revisão. |
| **Última revisão** | Seletor de data | Filtra as revisões pelo período em que foi realizada a última revisão da política de acesso. |
| **Próxima revisão** | Seletor de data | Filtra as revisões pelo período da próxima revisão da política de acesso. |
| **Status** | Menu suspenso | Filtra as revisões por sua situação. As opções são **Aprovada**, **Revisado**, **Revisão Pendente**, **Aprovação pendente** e **Reprovada**. Limpe o campo para habilitar a opção **Todos**. |

## **Campos do relatório**

* **Código.**  
* **Políticas de acesso.**  
* **Tipo.**  
* **Donos.**  
* **Revisor.**  
* **Última revisão.**  
* **Próxima revisão.**  
* **Status.**  
* **Aprovador:** nome do usuário que realizou a aprovação da política.  
* **Status de aprovação.**  
* **Ações:** a opção desta coluna só estará disponível para os registros que estiverem com o status de **Revisado.**  
  * **Detalhes**: abre a tela **Detalhes** com detalhes sobre a revisão.  
    

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

**Tela Detalhes**

### 

### **Menu de ações**

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ícone de olho** | Ícone | Ao posicionar o cursor sobre este ícone, são exibidas informações detalhadas sobre o usuário que criou o registro e o último usuário que o modificou. |

**Aba General**  
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

## 