# Usuários

Este documento fornece informações sobre a tela **Usuários** no menu **Gerenciamento**, que exibe um relatório de usuários de terceiros cadastrados no **Domum Remote Access**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **Domum Remote Access**.  
2. No menu lateral, selecione **Gerenciamento \> Terceiros \>  Usuários**.

## Menu de ações

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Adicionar** | Botão | Direciona para a tela [Adicionar usuário](/v4/docs/pt/users-3#tela-adicionar-usuário). |
| **Ações** | Menu suspenso | Exibe as opções: *Imprimir relatório*, *Exportar CSV*, e *Agendar relatório*. |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Código** | Campo de texto | Filtra o código de identificação do usuário no relatório. |
| **Fornecedor** | Menu suspenso | Filtra o fornecedor associado. |
| **Usuário** | Campo de texto | Filtra o nome de usuário no Segura. |
| **Celular** | Campo de texto | Filtra o número de telefone cadastrado. |
| **Email** | Campo de texto | Filtra o endereço de email cadastrado. |
| **Código customizado** | Campo de texto | Filtra o código pessoal para autenticação em dois fatores. |
| **Documento** | Campo de texto | Filtra o documento de identificação. |
| **Status** | Menu suspenso | Filtra usuários pelo status. As opções são: **Ativo** ou **Inativo**. Limpe o campo para habilitar a opção **Todos**. |
| **Foto** | Menu suspenso | Filtra usuários com/sem foto. As opções são: **Sim** ou **Não**. Limpe o campo para habilitar a opção **Todos**. |
| **Tipo de usuário**  | Menu suspenso | Filtra o tipo de usuário. As opções são: **Usuário limitado** ou **Usuário completo**. Limpe o campo para habilitar a opção **Todos**.  |

## Campos do relatório

- **Código**.  
- **Fornecedor**.  
- **Usuário**.  
- **Celular**.  
- **Email**.  
- **Código customizado**.  
- **Documento**.  
- **Status**.  
- **Foto**.  
- **Tipo de usuário**.  
- **Ações**:  
    - **Alterar**: abre a tela [Alterar usuário terceiro](/v4/docs/pt/users-3#usuário-limitado).
    - **Solicitar acesso**: direciona para a tela [Solicitar acesso - usuário terceiro](/v4/docs/pt/access-request-third-party-user).  
    - **Desativar**: desabilita o cadastro. Na janela de confirmação clique em **Sim** para confirmar a ação.  
    - **Dashboard**: direciona para o dashboard [Usuários terceiros](/v4/docs/pt/domum-dashboard-third-party-users).

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Tela Adicionar usuário

Selecione entre **Usuário Completo** ou **Usuário Limitado** na tela de solicitação de acesso em lote.

## Usuário completo

Acesso completo ao usuário, com permissões totais de função e grupo. A associação manual com um grupo de fornecedor/interno é necessária após a criação.

### Aba Configurações

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Nome\*** | Campo de texto | Sim | Insira o nome do usuário. |
| **Nome de usuário\*** | Campo de texto | Sim | Insira um nome de usuário para o usuário. |
| **Definir senha atual** | Botão toggle | Não | Habilita o campo de **Senha** e define uma nova senha manualmente. |
| **Nova senha** | Campo de texto | Não | Insira manualmente ou gere uma nova senha. |
| **Departmento** | Menu suspenso | Não | Define o departamento ao qual o usuário pertence. |
| **Email** | Campo de texto | Não | Insira o endereço de email do usuário. |
| **Telefone** | Campo de texto | Não | Insira o número de telefone do usuário. |
| **Estado** | Botão de opção | Não | Seleciona o status do acesso. As opções são: **Ativo** e **Inativo**. |
| **Grupos de usuários** | Menu suspenso | Não | Seleciona qual grupo de usuário este usuário irá ingressar. |

### Aba Papéis

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Adicionar / Remover selecionados** | Botão | Não | Adiciona ou remove os papéis selecionados. |
| **Tabela de papéis** | Tabela | Não | Os campos da tabela são: **Built-in** e **Descrição**. |
| **Built-in** | Campo de texto | Não | Indica se a função é uma função padrão na instalação do Segura. |
| **Descrição** | Campo de texto | Não | Descrição da permissão. |

### Aba Políticas de acesso

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **PAM Core** | Caixa de seleção | Não | Opções das políticas de acesso cadastradas dentro do Segura para o módulo **PAM Core**. |
| **Protected Information** | Caixa de seleção | Não | Opções das políticas de acesso cadastradas dentro do Segura para o módulo **Protected Information**. |
| **Task Manager** | Caixa de seleção | Não | Opções das políticas de acesso cadastradas dentro do Segura para o módulo **Task Manager**. |
| **Certificate Manager** | Caixa de seleção | Não | Opções das políticas de acesso cadastradas dentro do Segura para o módulo **Certificate Manager**. |
| **Cloud IAM** | Caixa de seleção | Não | Opções das políticas de acesso cadastradas dentro do Segura para o módulo **Cloud IAM**. |
| **DSM** | Caixa de seleção | Não | Opções das políticas de acesso cadastradas dentro do Segura para o módulo **DSM**. |

### Aba Revisão

Use a aba **Revisão** para verificar todas as informações inseridas nas abas anteriores.

## Usuário limitado

Esta seção oferece informações sobre as telas de **Usuário Limitado** e **Alterar usuário terceiro** que compartilham os mesmos campos. O acesso à plataforma é restrito, com permissões limitadas, e requer associação manual a um grupo de fornecedor/interno após a criação.

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Fornecedor\*** | Menu suspenso | Sim | Selecione o fornecedor. |
| **Nome\*** | Campo de texto | Sim | Defina o nome do usuário. |
| **Celular\*** | Campo de texto | Sim | Insira o número de celular do usuário. |
| **Email\*** | Campo de texto | Sim | Insira o endereço de e-mail do usuário. |
| **Documento** | Campo de texto | Não | Insira o documento do usuário. |
| **Foto** | Menu suspenso | Não | Seleciona uma imagem para o usuário. |
| **Status\*** | Menu suspenso | Sim | Seleciona o status do acesso. As opções são: **Ativo** ou **Inativo**. |