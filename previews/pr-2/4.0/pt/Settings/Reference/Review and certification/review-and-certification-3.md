# Revisão e certificação

Este documento fornece informações sobre o formulário **Revisão e certificação**, para que o período de revisão de uma política de acesso ou usuário seja adicionado.

**Caminho para acesso**

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Controle de acesso \> Revisão e certificação \> Revisão e certificação.**

## 

## :::(warning) (**Atenção**)

## Para adicionar revisores para as Políticas de Acesso, é necessário configurá-los como dono de uma Política de Acesso específica.

:::

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Ativar processo de revisão e certificação** | Botão *toggle* | Sim | Habilita o processo de revisão e certificação para políticas de acesso e usuários. |
| **Intervalo de revisão de políticas de acesso** | Seletor de quantidade e menu suspenso | Não | O intervalo que o revisor terá para realizar a revisão da política de acesso, as opções são *Dias*, *Meses* e *Anos*. |
| **Intervalo de revisão de usuários** | Seletor de quantidade e menu suspenso | Não | O intervalo que o revisor terá para realizar a revisão dos usuários, as opções são *Dias*, *Meses* e *Anos*. |
| **Adicionar** | Botão | Não | Abre a tela **Adicionar dono** para que seja feita a escolha dos revisores. |
| **Tabela de revisores** | Tabela | Não | Dados de cada revisor contendo *os campos* *Código, Nome, Nome de usuário, E-mail, Adicionado por, Adicionado em, Assigned access policies* e *Assigned user groups*. |

**Tela Adicionar dono**  
**Aba Usuários**

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Adicionar** | Botão | Sim | Abre a tela **Usuários** para que seja feita a escolha dos usuários que serão donos. |
| **Tabela Owners** | Tabela | Não | Dados de cada usuário contendo *os campos* *Código, Nome, Nome de usuário, E-mail, Adicionado por* e *Adicionado em.* |

**Aba Grupos de Usuários**

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Adicionar** | Botão | Sim | Abre a tela **Usuários** para que seja feita a escolha dos grupos. |
| **Tabela Grupos de usuário** | Tabela | Não | Dados de cada usuário contendo *os campos* *Código, Nome, Grupo de sincronização* e *Adicionado em.* |
| **Revisar usuários não atribuídos a nenhum grupo de usuário.\*** | Caixa de seleção | Sim | Atribui ao revisor os usuários que não estão relacionados a nenhum grupo. |

**Aba Políticas de acesso**  
:::(info) (**Info**)  
Usuários inseridos em mais de uma política de acesso do mesmo módulo podem ter configurações diferentes do esperado.  
:::

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **PAM Core** | Caixa de seleção | Não | Opções das políticas de acesso existentes no Segura. |

**Aba Revisão**  
Estão as informações que foram adicionadas nos passos anteriores, para que seja analisada e caso necessite de alguma mudança, já seja feita antes de finalizar o cadastro. As informações estão agrupadas por cada aba respectivamente.