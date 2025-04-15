# Grupos

Este documento fornece informações sobre a tela **Grupos** no menu **Gerenciamento**, utilizada para registrar novos grupos de usuários internos no **Domum Remote Access**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **Domum Remote Access**.  
2. No menu lateral, selecione **Gerenciamento \> Usuários internos \> Grupos**.

## Menu de ações

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Adicionar** | Botão | Direciona para a tela [Adicionar grupo de usuários internos](/v4/docs/pt/internal-users-groups#tela-de-adicionaralterar-grupo-de-usuários-internos). |
| **Ações** | Menu suspenso | Exibe as opções: *Imprimir relatório*, *Exportar CSV*, e *Agendar relatório*. |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Código** | Campo de texto | Filtra o código de identificação do usuário no relatório. |
| **Grupo** | Campo de texto | Filtra pelo nome do grupo de usuários internos. |
| **Restringir localizações** | Menu suspenso | Filtra pelo acesso restrito por localização. As opções são: **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Estado** | Menu suspenso | Filtra os grupos pelo status.  As opções são: **Ativo** ou **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

- **Código**.
- **Grupo**.  
- **Restringir localizações**.  
- **Estado**.  
- **Açoes**:  
    - **Alterar**: abre a tela [Atualização do grupo de usuários internos](/v4/docs/pt/internal-users-groups#tela-de-adicionaralterar-grupo-de-usuários-internos).
    - **Solicitar de acesso em lote**: abre a tela [Solicitar acesso em lote](/v4/docs/pt/batch-access-request).
    - **Desativar**: desabilita o cadastro. Na janela de confirmação clique em **Sim** para confirmar a ação.  
    - **Dashboard**: direciona para o dashboard [Grupos de usuários internos](/v4/docs/pt/domum-dashboard-internal-users-groups).

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Tela de Adicionar/Alterar grupo de usuários internos

Esta seção fornece informações sobre as telas **Adicionar grupo de usuários internos** e **Atualização do grupo de usuários internos** que compartilham os mesmos campos.

### Aba Geral

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Nome do grupo\*** | Campo de texto | Sim | Insira o nome do grupo. |
| **Ativo\*** | Botão de opção | Sim | Ative o grupo. As opções são: **Sim** ou **Não**. |
| **Conceder acesso automaticamente após provisionamento de usuário completo** | Botão de opção | Não | Selecione para conceder acesso automático após o provisionamento interno. As opções são: *Padrão*, *Sim*, ou *Não*. |
| **Grupo de acesso limitado\*** | Menu suspenso | Sim | Selecione um grupo de acesso para usuários limitados. |

### Aba Usuários completos

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Adicionar / Remover selecionados** | Botão | Não | Adiciona ou remove os usuários selecionados. |
| **Tabela de Usuários completos** | Tabela | Não | Os campos da tabela são: *Código*, *Nome*, *Nome do usuário*, *Email*, e *Departamento*. |
| **Código** | Campo de texto | Não | Filtra pelo código de identificação do usuário. |
| **Nome** | Campo de texto | Não | Filtra pelo nome do usuário. |
| **Nome do usuário** | Campo de texto | Não | Filtra pelo nome de usuário no Segura. |
| **Email** | Campo de texto | Não | Filtra pelo e-mail do usuário. |
| **Departamento** | Campo de texto | Não | Filtra pelo departamento do usuário. |

### Aba Usuários limitados

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Adicionar / Remover selecionados** | Botão | Não | Adiciona ou remove os usuários selecionados. |
| **Tabela de Usuários limitados** | Tabela | Não | Os campos da tabela são: *Nome*, *Celular*, e *Email*. |
| **Nome** | Campo de texto | Não | Filtra pelo nome do usuário. |
| **Celular** | Campo de texto | Não | Filtra pelo número de telefone do usuário. |
| **Email** | Campo de texto | Não | Filtra pelo e-mail do usuário. |

### Aba Localização

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Configuração de localização permitida** | Caixa de seleção | Não | Filtra e restringe o acesso de todos os usuários associados ao fornecedor às localizações especificadas. |
| **Tabela de Localização** | Tabela | Não | Os campos da tabela são: **País** e **Região**. |
| **País** | Menu suspenso | Não | Seleciona o país onde o acesso será permitido. |
| **Região** | Menu suspenso | Não | Seleciona a região dentro do país onde o acesso será permitido. |

:::(Warning) (Atenção)
A precisão da localização é de 80%. Para ter uma precisão maior, certifique-se de sempre ter o Segura atualizado para a versão mais recente.
:::

### Aba Revisão

Use a aba **Revisão** para verificar todas as informações inseridas nas abas anteriores.