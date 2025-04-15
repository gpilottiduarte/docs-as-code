# Fornecedores

Este documento fornece informações sobre a tela **Fornecedores** no menu **Gerenciamento**, projetada para gerenciar e exibir os fornecedores registrados no **Domum Remote Access**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **Domum Remote Access**.  
2. No menu lateral, selecione **Gerenciamento \> Terceiros \> Fornecedores**.

## Menu de ações

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Adicionar** | Botão | Direciona para a tela [Adicionar fornecedor](/v4/docs/pt/domum-settings-vendors#tela-de-adicionaralterar-fornecedor). |
| **Ações** | Menu suspenso | Exibe as opções: *Imprimir relatório*, *Exportar CSV*, e *Agendar relatório*. |

## Campos de busca

| Item | Tipo | Descrição |
| ----- | ----- | ----- |
| **Código** | Campo de texto | Filtra os fornecedores pelo código de identificação. |
| **Políticas de acesso** | Campo de texto | Filtra o grupo de acesso associado ao fornecedor. |
| **Fornecedor** | Campo de texto | Filtra os registros pelo nome do fornecedor ou pelos detalhes do contrato. |
| **Contrato** | Campo de texto | Filtra os fornecedores pelo número do contrato atribuído. |
| **CNPJ** | Campo de texto | Filtra pelo número de identificação fiscal corporativo do fornecedor. |
| **Início do contrato** | Seletor de data | Especifica a data de início do contrato do fornecedor. |
| **Fim de contrato** | Seletor de data | Especifica a data de vencimento do contrato do fornecedor. |
| **Estado** | Menu suspenso | Filtra os fornecedores pelo status. As opções são: **Ativo** ou **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

- **Código**.  
- **Políticas de acesso**.  
- **Fornecedor**.  
- **Contrato**.  
- **CNPJ**.  
- **Início do contrato**.  
- **Fim de contrato**.  
- **Estado**.  
- **Açoes**:  
    - **Alterar**: abre a tela [Editar fornecedor](/v4/docs/pt/domum-settings-vendors#tela-adicionareditar-fornecedor) .
    - **Novo acesso em lote**: abre a tela [Novo acesso em lote](/v4/docs/pt/new-batch-access).
    - **Botão de pânico**: executa ações defensivas imediatas durante incidentes.  
    - **Desativar**: desabilita o cadastro. Na janela de confirmação clique em **Sim** para confirmar a ação.  
    - **Dashboard**: direciona para o dashboard [Fornecedores](/v4/docs/pt/domum-dashboard-vendors).

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.
:::

## Tela Adicionar/Editar fornecedor

Esta seção fornece informações sobre as telas **Adicionar fornecedor** e **Editar fornecedor** que compartilham os mesmos campos.

### Aba Dados cadastrais

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Fabricante\*** | Campo de texto | Sim | Define o nome do fornecedor. |
| **grupo de acesso limitado\*** | Menu suspenso | Sim | Seleciona o grupo de acesso. |
| **Contrato** | Campo de texto | Não | Digite o número do contrato do fornecedor. |
| **CNPJ** | Campo de texto | Não | Digite o CNPJ do fornecedor. |
| **Início do contrato\*** | Seletor de data | Sim | Selecione a data e hora de início do contrato. |
| **Fim de contrato** | Seletor de data | Não | Selecione a data e hora de vencimento do contrato. |
| **Foto (jpg ou png \- máx 5MB)** | Campo de upload | Não | Selecione uma imagem para o fornecedor. |
| **Status\*** | Botão de opção | Sim | Selecione o status de ativação do fornecedor. As opções são: **Ativo** ou **Inativo.** |
| **Conceder acesso automaticamente após provisionamento de usuário completo** | Botão de opção | Não | Define se o acesso completo será concedido automaticamente. As opções são: *Padrão*, *Sim* ou *Não*. |

### Aba Usuários limitados

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Adicionar / Remover selecionados** | Botão | Não | Adiciona ou remove os usuários selecionados. |
| **Tabela de Usuários limitados** | Tabela | Não | Os campos da tabela são: *Nome*, *Celular*, e *Email*. |
| **Nome** | Campo de texto | Não | Filtra pelo nome do usuário. |
| **Celular** | Campo de texto | Não | Filtra pelo número de telefone do usuário. |
| **Email** | Campo de texto | Não | Filtra pelo e-mail do usuário. |

### Aba Usuários completos

| Item | Tipo | Obrigatório | Descrição |
| ----- | ----- | ----- | ----- |
| **Adicionar / Remover selecionados** | Botão | Não | Adiciona ou remove os usuários selecionados. |
| **Tabela de Usuários completos** | Tabela | Não | Os campos da tabela são: *Código*, *Nome*, *Nome do usuário*, *Email*, e *Departamento*. |
| **Código** | Campo de texto | Não | Filtra pelo código de identificação do usuário. |
| **Nome** | Campo de texto | Não | Filtra pelo nome do usuário. |
| **Nome do usuário** | Campo de texto | Não | Filtra pelo nome de usuário no Segura. |
| **Email** | Campo de texto | Não | Filtra pelo e-mail do usuário. |
| **Departmento** | Campo de texto | Não | Filtra pelo departamento do usuário. |

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