# Notificações

Este documento fornece informações sobre a tela de **Notificações globais**  que exibe informações sobre as notificações globais do Segura e permite gerenciar as notificações.

## Caminho para acesso
1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Notificações \> Notificações globais.**

## Menu de ações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Novo** | Botão | Direciona para a tela **Cadastrar notificação**. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Nome** | Campo de texto | Filtra de acordo com o nome da notificação. |
| **Adicionado em** | Campo de data | Filtra de acordo com o período indicado. |
| **Adicionado por** | Campo de texto | Filtra de acordo com o usuário que adicionou a notificação. |
| **Ativo** | Menu suspenso | Filtra os registros por seu estado de ativação. As opções são **Ativo** e **Inativo**. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório
* **Código:** código de cadastro da notificação no Segura.  
* **Nome.**  
* **Alterado em:** data de alteração da notificação. É exibida no formato DD/MM/AAAA HH:MM.  
* **Alterado por:** exibe o nome do usuário que alterou a notificação pela última vez.  
* **Adicionado em:** data em que a notificação foi adicionada ao Segura. É exibida no formato DD/MM/AAAA HH:MM.  
* **Adicionado por.**  
* **Ativo.**  
* Ações:  
  * **Editar:** abre a janela **Cadastrar notificação** em modo de edição.  
  * **Desativar:** inativa uma configuração caso esta esteja ativa.  
  * **Ativar:** ativa uma configuração caso esta esteja inativa.
:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

## Tela Cadastrar notificação

### Seção Geral
| Item | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Nome da notificação** | Campo de texto | Sim | Campo de texto para cadastro do nome da notificação. |
| **E-Mail** | Botão toggle | Não | Ativa o envio de notificações por e-mail. |
| **Tela** | Botão toggle | Não | Ativa o envio de notificações em tela. |
| **SMS** | Botão toggle | Não | Ativa o envio de notificações por SMS. |
| **Enviar notificações apenas para contatos que possuem acesso às credenciais ou dispositivos** | Botão toggle | Não | Selecione para receber as notificações apenas das credenciais/dispositivos do grupo de acesso do usuário. |

### Seção Notificação
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Buscar** | Campo de busca | Realiza a busca nos registros de notificações. |
| **Caixa de seleção** | Caixa de seleção | Seleciona os registros exibidos na tela. |
| **Adicionar** | Botão | Abre o modal para **Notificações** para que sejam adicionadas notificações As notificações são exibidas conforme cadastradas no Segura. |

### Modal Notificações
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Código de identificação da notificação no Segura. |
| **Nome** | Campo de texto | Nome do tipo da notificação conforme cadastrado no Segura. |
| **Categoria** | Campo de texto | Categoria da notificação. |

### Seção Contatos
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para o modal **Contatos** para que seja adicionado um contato à notificação. |
| **Tabela de contatos** | Tabela | Dados de cada membro do cadastrado como contato, contendo os *campos caixa de seleção, Código., Nome, Nome do usuário, E-mail e Departamento*. |

### Tabela Contatos
| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **CÓDIGO** | Campo de texto | Código do usuário no Segura. |
| **NOME** | Campo de texto | Nome do usuário no Segura. |
| **NOME DE USUÁRIO** | Campo de texto | Nome de usuário do usuário no Segura. |
| **E-MAIL** | Campo de texto | Endereço de e-mail do usuário. |
| **DEPARTAMENTO** | Campo de texto | Departamento do usuário no Segura. |

### Seção Revisão
A sessão de revisão permite que o usuário verifique as informações do cadastro do novo usuário antes de realizar a ação. Para salvar, clique em **Salvar**.