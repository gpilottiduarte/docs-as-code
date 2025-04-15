# Usuários

Este documento fornece informações sobre a tela do relatório **Usuários**, que exibe informações sobre os usuários do Segura e possibilita a interação com diversas funcionalidades de gestão de usuários.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Gestão de usuários \> Usuários.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Novo** | Botão | Direciona para a tela **Adicionar usuário**. |
| **Ações** | Menu suspenso | Exibe as opções *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
:::(info) (Info)  
Para exibir todos os campos de busca, clique em **Mais.**  
:::
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra pelo código identificador do usuário no Segura. |
| **Nome** | Campo de texto | Filtra pelo nome pessoal do usuário no Segura. |
| **Nome de usuário** | Campo de texto | Filtra pelo nome de usuário no Segura. |
| **Departamento** | Menu suspenso | Filtra pelo departamento cadastrado no Segura. |
| **E-mail** | Campo de texto | Filtra pelo endereço de e-mail cadastrado no Segura. |
| **Tipo de criação** | Menu suspenso | Filtra pelo tipo de criação do usuário. |
| **Ativo** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Ativo** ou **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## **Campos do relatório**
* **Código.**  
* **Nome.**  
* **Nome de usuário.**  
* **E-mail.**  
* **Código customizado.**  
* **Tipo de criação.**  
* **Criado em:** exibe a data de criação do usuário no formato DD/MM/AAAA HH:MM.  
* **Último login:** exibe a data do último login do usuário no formato DD/MM/AAAA HH:MM.  
* **Ativo.**  
* **Data de desativação:** exibe a data que a conta do usuário foi desativada no formato DD/MM/AAAA HH:MM.  
* **Ações**:  
  * **Alterar:** abre a tela **Adicionar usuário** em modo de edição.  
  * **Histórico:** abre a janela **Histórico do usuário**.  
  * **Esquecer usuário:** desativa a conta do usuário.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Adicionar usuário

### Seção Configurações
Essa seção fornece informações sobre a aba **Configurações**.
| Item | Tipo | Obrigatório? | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome** | Campo de texto | Sim | Nome pessoal do usuário no Segura. |
| **Nome de usuário** | Campo de texto | Sim | Nome de usuário no Segura. |
| **Definir senha atual** | Botao de opção | Não | Ativa/desativa a opção de definir uma senha no momento do cadastro do usuário.**Padrão:** desativado. |
| **Nova senha** | Campo de texto | Não | Senha do usuário no Segura. |
| **Gerar** | Botão | Não | Gera uma senha aleatória com base nos critérios definidos previamente. |
| **Configurar** | Botão | Não | Define os critérios da senha do usuário: *Tamanho da senha, Maiúscula, Minúsculas, Números e Símbolos*. |
| **Estado** | Botão de opção | Não | Indica o estado de ativação na criação do usuário. |
| **Grupos de usuários** | Menu suspenso | Não | Seleciona o grupo de usuários ao qual o usuário fará parte. |

### Seção Papéis
Essa seção fornece informações sobre a aba **Papéis**.
| Item | Tipo | Obrigatório | Tipo |
| :---- | :---- | :---- | :---- |
| **Adicionar** | Botão | Não | Abre o modal **Papéis**. |
| **Usuários** | Tabela | Não | Lista os usuários adicionados e suas informações: *Papel, Built-in* e *Descrição.*  |
| **Caixa de seleção** | Caixa de seleção | Não | Seleciona todos os registros na tabela e habilita o botão **Remover selecionados**. |

## Modal Papéis
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Buscar** | Campo de busca | Busca os grupos de acordo com os caracteres digitados. |
| **Caixa de seleção** | Caixa de seleção | Seleciona todos os registros na tela. |
| **PAPEL** | Campo de texto | Nome do papel. |
| **BUILT IN** | Campo de texto | Indica se o papel foi inserido pelo usuário ou se é um papel padrão do Segura (Built-In). |
| **DESCRIÇÃO** | Campo de texto | Descrição do papel. |

## Aba Políticas de acesso
A aba de **Grupo de acesso** é dividida conforme os módulos. Cada módulo compõe uma seção da aba composta de caixas de seleção que são referentes aos grupos de acesso cadastrados no Segura. Nesta aba serão apresentados os grupos de acesso cadastrados no Segura.
| Item | Descrição |
| :---- | :---- |
| **Título** | Cada módulo é apresentado de forma separada, com o seu nome em negrito. |
| **Caixas de seleção** | Seleciona o grupo de acesso ao qual o usuário fará parte. Pode ser mais de um. Cada grupo de acesso é apresentado abaixo do título do módulo e conforme o nome cadastrado no Segura. |

## Seção Revisão
Esta aba exibe um resumo das configurações do cadastro do novo usuário com botões para **Voltar** ou **Salvar.**