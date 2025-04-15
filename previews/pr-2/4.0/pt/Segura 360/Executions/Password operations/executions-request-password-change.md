# Solicitar de troca de senhas

Este documento fornece informações sobre o relatório **Solicitar troca de senha**, que exibe somente as informações sobre as credenciais com a configuração de troca automática habilitada.

## Caminho para acessar

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Credenciais > Solicitações de troca de senhas.**

ou

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Execuções**.  
2. No menu lateral, selecione **Operações de senhas > Solicitar troca de senha**.

---
## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as solicitações por seu código de identificação dentro do Segura. |
| **Dispositivo** | Campo de texto | Filtra as solicitações pelo nome do dispositivo. |
| **Nome de usuário** | Campo de texto | Filtra as solicitações pelo nome de usuário associado a credencial. |
| **Tipo de credencial** | Menu suspenso | Filtra as solicitações pelo tipo da credencial associada ao dispositivo. As opções são: *Usuário do domínio, Administrador local, Local User e Chave SSH*. Utilize o campo de texto para digitar a informação desejada. |
| **Site** | Menu suspenso | Filtra as solicitações pelo tipo de site do dispositivo. As opções são de acordo com os sites cadastrados no Segura. |
| **Tipo de dispositivo** | Menu suspenso | Filtra as solicitações pelo tipo de dispositivo. |
| **Fabricante** | Menu suspenso | Filtra as solicitações pelo fabricante do dispositivo. |
| **Modelo** | Campo de texto | Filtra as solicitações pelo produto do fabricante escolhido. |
| **Credencial pai** | Campo de texto | Filtra as solicitações pela credencial que é considerada a credencial “pai”. |
| **Estado da última troca** | Menu suspenso | Filtra as solicitações pelo status da última troca de senha realizada. As opções são: *Agendada, Aguardando aprovação, Cancelada, Efetuada com sucesso, Em execução, Erro e Expirada*. |

## Campos do relatório

* **Caixa de seleção:** marca ou desmarca os registros da lista.  
* **Código.**  
* **Tipo de credencial.**  
* **Nome de usuário.**  
* **Dispositivo.**  
* **Tipo de dispositivo.**  
* **Modelo.**  
* **Site.**  
* **Template**: o template que será utilizado para realizar a troca.  
* **Credencial pai.**  
* **Data de expiração**: data e hora que será expiração dessa solicitação.  
* **Última troca**: data e hora da troca de senha realizada.  
* **Ações:**  
  * **Detalhes:** abre a janela **Detalhes da credencial**.

Quando um registro da lista estiver selecionado pela caixa de seleção, no **Menu de ações** o botão **Solicitar troca de senha** fica disponível para realizar a solicitação da troca de senha.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
### Tela Detalhes da credencial

#### Seção Informações gerais

| **Item** | **Descrição** |
| :---- | :---- |
| **Visualizar a senha** | Abre a janela **Visualizar credencial.** |
| **Iniciar uma sessão** | Abre a janela com o início da sessão. |
| **Tipo** | Tipo da credencial associada ao dispositivo. |
| **Nome do usuário** | Nome de usuário da credencial que foi utilizada. |
| **Expiração** | Data e hora da expiração da solicitação. |
| **Alteração** | Data e hora da alteração da solicitação. |
| **Consulta** | Data e hora da consulta da solicitação. |
| **Criada em** | Data e hora da criação da credencial. |
| **Tags** | Identificador para segregação de credenciais. |
| **Observação** | Observações adicionais da credencial. |

#### Seção Dispositivo

| **Item** | **Descrição** |
| :---- | :---- |
| **Hostname** | Hostname do dispositivo. |
| **IP de gerenciamento** | Endereço IP do dispositivo. |
| **Fabricante** | O fabricante do dispositivo. |
| **Tipo** | O tipo do dispositivo. |
| **Modelo** | O modelo do dispositivo. |
| **Conectividade** | O protocolo do dispositivo. |

#### Seção Política

| **Item** | **Descrição** |
| :---- | :---- |
| **Nome** | Nome da política que foi aplicada à credencial. |
| **Força da Senha** | Força da senha aplicada a credencial. |
| **Expiração decurso** | O tempo que ocorrerá a expiração da senha, caso não haja nenhuma visualização. |
| **Expiração de consulta** | O tempo que ocorrerá a expiração após realizar uma consulta. |
| **Visualização Simultânea** | Informa se a credencial possui a visualização simultânea. |
| **Sessão Simultânea** | Informa se a credencial possui sessão simultânea. |

#### Seção Configuração de troca

| **Item** | **Descrição** |
| :---- | :---- |
| **Configuração** | A configuração utilizada para realizar a troca. |
| **Troca Automática** | Informa se a solicitação possui troca automática de senha. |
| **Plugin de Troca** | O plugin escolhido para conectar e executar a troca no dispositivo. |
| **Template** | O template que será executado pelo plugin executor. |
| **Usuário** | Informa qual a opção de senha utilizada pelo usuário. |
| **Controle de Status** | Informa se a solicitação possui controle da informação do status da solicitação. |
| **Template Ativação** | O template escolhido para realizar a ativação. |
| **Template Inativação** | O template escolhido para realizar a inativação. |

#### Seção Grupos com acesso à senha

| **Item** | **Descrição** |
| :---- | :---- |
| **Grupo** | Nome do grupo com acesso a senha da credencial. |
| **Parte Senha** | Informa qual a parte da senha é possível para o grupo acessar. |

#### Seção Últimas 10 Operações

| **Item** | **Descrição** |
| :---- | :---- |
| **Data** | Data e hora da operação. |
| **Ação** | Tipo de ação realizada na operação. |
| **Usuário** | Nome do usuário que realizou a operação. |
| **Motivo** | Motivo dado pelo usuário. |
| **Justificativa** | Justificativa dada pelo usuário. |

#### Seção Últimas 5 trocas

| **Item** | **Descrição** |
| :---- | :---- |
| **Estado** | Estado da operação. |
| **Data Agendada** | Data e hora agendada para a operação. |
| **Data Executada** | Data e hora da execução. |
| **Tentativas** | Quantidade de tentativas efetuadas. |
| **Visualizar as tentativas** | Abre para a tela [Detalhes da Operação](/v4/docs/pt/executions-all-operations#operations-details-screen). |