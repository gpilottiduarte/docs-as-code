# Papéis

Este documento fornece informações sobre a tela do relatório **Papéis**, que exibe detalhes sobre os papéis dentro da gestão dos usuários.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Gestão de usuários \> Camada de controle (ACL) \> Papéis.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Papéis** para criar um novo papel. |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código identificador do papel no Segura. |
| **Tipo** | Menu suspenso | Filtra pelo tipo do papel no Segura. |
| **Nome** | Campo de texto | Filtra pelo nome do papel no Segura. |
| **Status** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Ativo** ou **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código.**  
* **Nome.**  
* **Tipo.**  
* **Descrição:** descrição do papel no Segura. 
* **Status.**  
* **Ações:**  
  * **Detalhes:** abre a tela **Detalhes do papel.**  
  * **Editar:** abre a tela **Papéis** em modo de edição.  
  * **Clonar:** clona um papel. Quando um papel é clonado, ele recebe um nome padrão. Por exemplo, ao clonar o papel `Default` , que possui o código identificador `1`, o novo papel será exibido como `Default [1000] (copied from 1)`. O tipo do papel clonado será definido como **Customizado**, e ele terá o código identificador `1000`. A partir desse valor, os códigos dos próximos papéis clonados serão incrementados em `1`.  
  * **Desativar:** exclui um papel.

:::(info) (Info)
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Papéis
Esta seção fornece informações sobre a tela **Papéis** em que usuários podem adicionar ou editar um papel no Segura.

### Aba Configurações
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome** | Campo de texto | Sim | Nome do papel no Segura. |
| **Ativo** | Botão de opção | Sim | Ativa ou desativa o status do papel. |
| **Descrição** | Campo de texto | Não | Descrição do papel no Segura. |

### Aba Permissões
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Adicionar** | Botão | Não | Abre o modal **Permissão**. |
| **Permissão** | Tabela | Não | Lista as permissões adicionadas e suas informações: *Permissão, Tipo, Módulo* e *Descrição.* |
| **Caixa de seleção** | Caixa de seleção | Não | Seleciona todos os registros na tabela e habilita o botão **Remover selecionados.** |

### Modal Permissão
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Buscar** | Campo de busca | Busca as permissões de acordo com os caracteres digitados. |
| **Caixa de seleção** | Caixa de seleção | Seleciona todos os registros na tela. |
| **PERMISSÃO** | Campo de texto | Código identificador da permissão no Segura. |
| **TIPO** | Campo de texto | Tipo de permissão. |
| **MÓDULO** | Campo de texto | Módulo ao qual a permissão pertence. |
| **DESCRIÇÃO** | Campo de texto | Descrição da permissão. |

### Aba Usuários
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Adicionar** | Botão | Não | Abre o modal **Usuários**. |
| **Usuários** | Tabela | Não | Lista os usuários adicionados ao grupo e suas informações: *Cód., Nome, Nome de usuário, E-mail, Tipo de criação, Adicionado por* e *Adicionado em.* |
| **Caixa de seleção** | Caixa de seleção | Não | Seleciona todos os registros na tabela e habilita o botão **Remover selecionados.** |

### Modal Usuários
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Buscar** | Campo de busca | Busca pelo usuário de acordo com os caracteres digitados. |
| **Caixa de seleção** | Caixa de seleção | Seleciona todos os registros na tabela. |
| **CÓD** | Campo de texto | Código de identificação do usuário no Segura. |
| **NOME** | Campo de texto | Nome pessoal do usuário no Segura. |
| **NOME DE USUÁRIO** | Campo de texto | Nome de usuário do usuário no Segura. |
| **E-MAIL** | Campo de texto | Endereço de e-mail do usuário no Segura. |
| **TIPO DE CRIAÇÃO** | Campo de texto | Tipo de criação do usuário no Segura. |
| **DEPARTAMENTO** | Campo de texto | Departamento ao qual o usuário está vinculado no Segura. |
| **ADICIONADO POR** | Campo de texto | Usuário que adicionou o usuário em questão ao Segura. |
| **ADICIONADO EM** | Campo de texto | Data em que o usuário em questão foi adicionado. |

### Aba Revisão
Esta aba exibe um resumo das configurações do cadastro do novo papel com botões para **Voltar** ou **Salvar.**

## Tela Detalhes do papel
Acessível através do botão **Ações**.

### Aba Configurações
| Item | Descrição |
| ----- | ----- |
| **Nome** | Nome do papel. |
| **Ativo** | Status do papel. |
| **Descrição** | Descrição da função do papel. |

### Permissões
| Item | Descrição |
| ----- | ----- |
| **Código** | Código do papel no Segura. |
| **Módulo** | Módulo ao qual o papel pertence. |
| **Tipo** | Tipo do papel. Por exemplo: *list, view* ou *write*. |
| **Permissão** | Nome técnico da permissão. |
| **Descrição** | Descrição do papel. |

### Aba Usuários
| Item | Descrição |
| ----- | ----- |
| **Nome** | Nome do usuário que pertence ao papel. |
| **Nome de usuário** | Nome de usuário do usuário que pertence ao papel. |
| **E-mail** | Endereço de email do usuário que pertence ao papel. |

