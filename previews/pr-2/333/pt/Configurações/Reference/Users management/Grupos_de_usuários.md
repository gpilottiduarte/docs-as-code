# Grupos de usuários

Neste documento, você vai encontrar todas as informações sobre o relatório **Grupos de usuários**, que exibe informações sobre os grupos de usuários no senhasegura.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.  
2. No menu lateral, selecione **Gestão de usuários \> Grupos de usuários**. 

## Barra superior

| Item  | Descrição |
| :---- | :---- |
| **Mostrar os filtros** | Representado pelo ícone da lupa. Exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário. Atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais. Exibe as  ações possíveis para a página. |
| **Novo grupo de usuários** | Representado pelo símbolo de soma. Abre a janela **Grupos de usuários**. |
| **Imprimir relatório** | Representado pelo ícone de impressora. Abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone de folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio. Abre a janela para efetuar o agendamento do relatório. |

## Campos de busca

| Item | Descrição |
| :---- | :---- |
| **Código** | Campo de texto. Filtra pelo código do grupo de usuários no senhasegura. |
| **Nome** | Campo de texto. Filtra pelo nome do grupo de usuários no senhasegura. |
| **Data de registro** | Composto por dois campos. O primeiro abre um calendário para seleção da data inicial do registro do grupo de usuários no senhasegura. |
| **Até** | Composto por dois campos. O primeiro abre um calendário para seleção da data final do registro do grupo de usuários no senhasegura. |
| **Ativo** | Menu suspenso. Selecione **Sim** ou **Não** para filtrar de acordo com o status do grupo de usuários no senhasegura. |

## Campos do relatório

* **Código.**  
* **Nome.**  
* **Data de registro:** exibe a data de registro do grupo de usuários no formato `DD/MM/AAAA HH:MM`.  
* **Ativo.**  
* **Grupo de sincronização:** referente ao nome do grupo de sincronização do Active Directory relacionado ao grupo de usuários.  
* Na coluna **Ação** você tem a opção **Atualizar grupo de usuários**.

:::(info) (Info)
O relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Janela Grupos de usuários

:::(warning) (Atenção)
Os campos da janela **Grupo de usuários** são os mesmos da janela **Atualizar grupo de usuários**.
:::

Ao selecionar a opção **Novo grupo** de usuários na barra superior, você será direcionado para a janela **Grupos de usuários**, que contém os seguintes campos:

### Aba Configurações

| Item | Descrição |
| :---- | :---- |
| **Nome** | Campo de texto. Preencha com o nome do grupo de usuários. |
| **Situação** | Radio button. Selecione o status do grupo de usuários no momento da criação. |
| **Descrição** | Campo de texto. Preencha com uma descrição sobre o grupo de usuários que está sendo criado. |

### Aba Usuários

| Item | Descrição |
| :---- | :---- |
| **Sinal de soma** | Abre o modal **Usuários do Sistema**. |
| **Ícone de lixeira** | Remove o usuário adicionado. |
| **Cód** | Código do usuário no senhasegura. |
| **Nome** | Nome do usuário no senhasegura. |
| **Nome do usuário** | Username do usuário no senhasegura. |
| **E-Mail** | Endereço de e-mail do usuário no senhasegura. |
| **Tipo de criação** | Tipo de criação do usuário. |
| **Adicionado por** | Nome do usuário que adicionou este usuário ao grupo de usuário. |
| **Adicionado em** | Data em que este usuário foi adicionado ao grupo de usuário. |

#### Modal Usuários do Sistema

#### Campos de busca

| Item | Descrição |
| :---- | :---- |
| **Cód** | Campo de texto. Filtra pelo código de cadastro do usuário no senhasegura. |
| **Nome** | Campo de texto. Filtra pelo nome do usuário cadastrado no senhasegura. |
| **Nome do usuário** | Campo de texto. Filtra pelo username do usuário cadastrado no senhasegura. |
| **E-Mail** | Campo de texto. Filtra pelo endereço de e-mail do usuário cadastrado no senhasegura. |
| **Tipo de criação** | Campo de texto. Filtra pelo tipo de criação do usuário no senhasegura. |

#### Campos do relatório

* **Cód.**  
* **Nome.**  
* **Nome do usuário.**  
* **E-Mail.**  
* **Tipo de criação.**

### Aba Grupo de acesso

| Item | Descrição |
| :---- | :---- |
| **Sinal de soma** | Abre o modal **Grupos de acesso**. |
| **Ícone de lixeira** | Remove o grupo de acesso adicionado. |
| **Cód** | Código de cadastro do grupo de acesso no senhasegura. |
| **Tipo** | Tipo do grupo de acesso no senhasegura. |
| **Adicionado por** | Nome do usuário que adicionou o grupo de acesso no grupo de usuários. |
| **Perfil** | Menu suspenso para selecionar o perfil ao grupo de acesso. As opções são: *Usuário*, *Aprovador* e *Usuário e Aprovador*. |
| **Aprovação** | Menu suspenso para selecionar o nível do aprovador ao grupo de acesso. As opções são: *Nível 1*, *Nível 2* e *Nível 3*. |

#### Modal Grupos de acesso

#### Campos de busca

| Item | Descrição |
| :---- | :---- |
| **Cód** | Campo de texto. Filtra pelo código do grupo de acesso no senhasegura. |
| **Nome** | Campo de texto. Filtra pelo nome do grupo de acesso no senhasegura. |
| **Tipo** | Campo de texto. Filtra pelo módulo ao qual o grupo de acesso está vinculado. |

#### Campos do relatório

* **Cód.**  
* **Nome.**  
* **Tipo.**