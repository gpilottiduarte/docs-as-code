# Tarefas

Este documento fornece informações sobre a tela do relatório **Tarefas** que possibilita que:

* **Administradores**:  
  * Adicionem, editem e gerenciem tarefas rapidamente.  
  * Visualizem o histórico completo de cada operação.  
  * Controlem precisamente quem pode executar cada tarefa.  
  * Mantenham um registro detalhado de todas as ações realizadas.  
* **Usuários autorizados**:  
  * Executem tarefas de forma pontual.

## Pré-requisitos

* Permissão de administrador do sistema ou do **Task Manager** para adicionar e gerenciar tarefas.  
* Permissão de usuário do sistema para executar tarefas.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Task Manager**.  
2. No menu lateral, selecione **Tarefas**.
---
## Menu de ações

| Item |  | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Adicionar tarefa**. Disponível para administradores. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório*, *Exportar CSV* e *Agendar relatório*. |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Nome** | Campo de texto | Filtra pelo nome de identificação da tarefa |
| **Criada por** | Campo de texto | Filtra pelo nome do usuário que adicionou a tarefa. |
| **Data de inclusão** | Seletor de data | Filtra pelo período em que a tarefa foi adicionada.  |
| **Status** | Menu suspenso | Filtra pelo estado de ativação da tarefa. As opções são **Ativo** ou **Inativo**. Limpe o campo para habilitar a opção **Todos**. |
| **Ambiente** | Menu suspenso | Filtra pelo ambiente em que a tarefa deve ser executada. |
| **Sistema** | Menu suspenso | Filtra pelo sistema em que a tarefa deve ser executada. |
| **Tags** | Campo de texto | Filtra pelas palavras-chave associadas à tarefa. |

## **Campos do relatório**

* **Código:** código de identificação da tarefa.  
* **Nome.**  
* **Data de inclusão.**  
* **Criada por.**  
* **Status.**  
* **Sistema.**  
* **Ambiente.**  
* **Tags.**  
* **Ações:**  
  * **Editar:** abre a tela **Editar tarefa**. Disponível para administradores.  
  * **Execuções:** abre a tela **Execuções.** Disponível para administradores.  
  * **Agendamentos:** abre a tela **Agendar tarefa.** Disponível para administradores.  
  * **Executar tarefa:** abre a tela **Executar tarefa.**  
  * **Desativar:** abre o *pop-up* para desativar a tarefa com as opções **Sim** ou **Não**. Disponível para administradores.

:::(info) (Info)

Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.  
:::

### **Telas Adicionar/Editar tarefa**

As telas **Adicionar tarefa** e **Editar tarefa** compartilham os mesmos campos e estão disponíveis para **administradores**.

#### Aba Informações principais

Nesta aba, **administradores** inserem informações gerais sobre a tarefa.

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome de identificação da task**\* | Campo de texto | Sim | Nome de identificação da tarefa. |
| **Ambiente**\* | Menu suspenso | Sim | Ambiente em que a tarefa será executada. |
| **Sistema**\* | Menu suspenso | Sim | Sistema em que a tarefa será executada. |
| **Tags** | Campo de texto | Não | Palavras-chave para categorizar a tarefa. |

#### Aba Execução

Nesta aba, **administradores** escolhem o plugin e template que executarão a tarefa.

**Seção Template para execução**

| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Plugin** | Menu suspenso | Não | Seleciona o plugin para executar tarefa.  |
| **Selecione o template a ser usado**\* | Menu suspenso | Sim | Seleciona o template utilizado na execução da tarefa.  |

<br>
**Seção Variáveis para execução**  
<br>Nesta seção, **administradores** configuram variáveis dinâmicas que serão utilizadas durante a execução da tarefa.

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Insere uma nova variável e habilita os campos: <br>**Identificador**: nome único da variável. Exemplo: `SERVICO` <br>**Valor**: dado que será utilizado na execução Exemplo: `apache2` |
| **Selecionar itens** | Caixa de seleção | Seleciona as variáveis e habilita o botão **Remover selecionados**. |

<br>
**Seção Credencial para execução**  
<br>Nesta seção, **administradores** inserem a credencial utilizada para se autenticar ao dispositivo onde a tarefa será executada.

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Utilizar uma credencial cadastrada para acessar todos os dispositivos** | Caixa de seleção | Define se uma credencial cadastrada no Segura será usada para se autenticar ao dispositivo onde a tarefa será executada. <br>**Nota**: a marcação dessa caixa habilita o campo **Credencial de acesso cadastrada do sistema**. |
| **Credencial de acesso cadastrada do sistema** | Menu suspenso | Seleciona a credencial cadastrada no Segura para se autenticar ao dispositivo onde a tarefa será executada. |
| **Utilizar a própria credencial para conectar** | Botão *toggle* | Define se a credencial usada para se autenticar ao dispositivo também será usada para se conectar ao dispositivo. |
| **Username da credencial** | Campo de texto | Insere o nome de usuário de uma credencial que não esteja cadastrada no Segura. <br>**Nota**: disponível quando a opção **Utilizar uma credencial cadastrada para acessar todos os dispositivos** não é marcada. |

:::(info) (Info)

Ao informar o **Username da credencial**, o Segura utilizará essa informação para localizar uma credencial com esse *username* em cada dispositivo para realizar a autenticação.  
:::

#### Aba Dispositivos para execução

Nesta aba, **administradores** selecionam os dispositivos onde as tarefas serão executadas.

| Item | Descrição |
| :---- | :---- |
| **Adicionar** | Abre o modal **Dispositivos** para selecionar os dispositivos desejados. |
| **Selecionar itens** | Seleciona os dispositivos na tabela e habilita o botão **Remover selecionados**. |

#### Aba Revisão

Esta aba exibe um resumo das configurações da tarefa com botões para **Voltar** ou **Salvar.**

### Tela Executar tarefa

Nesta tela, **usuários autorizados** podem solicitar a execução pontual de uma tarefa.

:::(info) (Info)

* A opção **Executar tarefa** fica disponível quando há um dispositivo associado à execução da tarefa.  
* Os campos desta tela podem ser obrigatórios ou opcionais a depender das configurações definidas na **Política de acesso**.

:::

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Justificativa** | Menu suspenso | Seleciona uma justificativa para executar a tarefa, conforme as opções disponíveis na tela **Razões de acesso**. |
| **Governance Code** | Campo de texto | Insere o código de governança para registrar a solicitação. |
| **Motivo** | Campo de texto | Insere um texto descritivo para justificar a execução da tarefa. |

:::(info) (Info)

Os usuários aprovadores poderão visualizar e gerenciar as solicitações atribuídas a eles na tela **Minhas aprovações**.
:::