# Templates

Este documento fornece informações sobre a tela do relatório **Templates,** onde se encontram todos os templates que foram cadastrados.

## Caminho para acessar

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Gerenciamento > Credenciais > Templates.**

ou

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Executions**.  
2. No menu lateral, selecione **Controle de templates > Templates.**

---
## Menu de ações

| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Adicionar** | Botão | Direciona para a tela **Template de execução**. |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra os templates por seu código de identificação dentro do Segura. |
| **Executor** | Menu suspenso | Filtra os templates pelos tipos de executores. As opções disponíveis são de acordo com os executores homologados pelo Segura. Utilize o campo de texto para digitar a informação desejada. Limpe o campo para habilitar a opção **Todos**. |
| **Tipo** | Menu suspenso | Filtra os templates pelo tipo de execução realizada pelo template. As opções são de acordo com as execuções realizadas pelo Segura. Utilize o campo de texto para digitar a informação desejada. Limpe o campo para habilitar a opção **Todos**. |
| **Template** | Menu suspenso | Filtra os templates pelo nome de cadastro. |
| **Status** | Menu suspenso | Filtra os templates pelo seu estado de ativação. As opções são **Ativo** e **Inativo.** Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Executor.**  
* **Tipo.**  
* **Template.**  
* **Status.**  
* **Versão:** número da versão cadastrada.  
* **Última Alteração:** data e hora da última alteração feita no template.  
* **Ações:**  
  * **Editar**: abre a tela de **Template de execução** para que sejam realizadas as alterações necessárias.  
  * **Clonar**: replica o template já cadastrado.  
  * **Histórico das alterações do template**: abre a tela **Templates** com as informações das alterações já feitas no template.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
### Tela Template de execução  
:::(info) (**Info**)  
O Segura disponibiliza uma série de templates para ser utilizado como modelo, sendo possível realizar as alterações necessárias. Acesse o [GitHub do Segura](https://github.com/Segura/execution-templates){target=`_blank`} para acessar a biblioteca de templates.  
:::

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Nome*** | Campo de texto | Sim | Nome de cadastro do template. |
| **Status** | Botão de opção | Não | Ativa ou inativa status do template. |
| **Visualizar TAGs** | Botão | Não | Abre a janela pop-up com uma lista e explicação das possíveis TAGs para construção do template. |
| **Executor*** | Menu suspenso | Sim | O tipo de executor do template. As opções são de acordo com os executores homologados pelo Segura. |
| **Tipo de execução** | Menu suspenso | Sim | O tipo da execução que será usado no template. As opções são de acordo com as execuções realizadas pelo Segura. |
| **Playbook** | Menu suspenso | Não | Conjunto de instruções (um template) a ser executado em um dispositivo alvo ou em um grupo de dispositivos. As opções estarão disponíveis apenas quando o executor for Ansible. |
| **Inventory** | Menu suspenso | Não | Define quais são os dispositivos alvos ou grupos de dispositivos que o playbook irá executar. |
| **Conteúdo** | Campo de texto | Não | Texto com o conteúdo a ser executado pelo template. |

#### Lista de TAGs para construir o seu template

* **[#USERNAME#]**: Username da credencial.  
* **[#NEW_PASSWORD#]**: Valor da nova senha.  
* **[#CURRENT_PASSWORD#]**: Valor da senha atual.  
* **[#AUTH_USER#]**: Username da credencial para autenticação.  
* **[#AUTH_PASSWORD#]**: Senha da credential para autenticação.  
* **[#AUTH_DOMAIN#]**: Domínio da credencial para autenticação.  
* **[#ADD_INFO#]**: Informações adicionais da credencial.  
* **[#IP#]**: IP do dispositivo.  
* **[#HOSTNAME#]**: Hostname do dispositivo.  
* **[#DOMAIN#]**: Domínio da credencial.  
* **[#SERVER_PATH#]**: Caminho do servidor.  
* **[#CONNECT_IP#]**: IP utilizado para conexão (Pode ser substituído caso haja Network Connector).  
* **[#CONNECT_PORT#]**: Porta usada para conexão (Pode ser substituído caso haja Network Connector).

---
### Histórico das alterações do template - Template**

| **Item** | **Descrição** |
| :---- | :---- |
| **Código** | Código de identificação do template cadastrado. |
| **Executor** | O executor cadastrado no template. |
| **Template** | Tipo do template cadastrado. |
| **Versão** | Versão do template. |
| **Data do histórico** | Data e hora da execução do template. |
| **Ações** | Abre a tela de **Detalhes do template**. |

---
### Tela Detalhes do template

| **Item** | **Descrição** |
| :---- | :---- |
| **Código** | Código de identificação do template cadastrado. |
| **Executor** | O executor cadastrado no template. |
| **Tipo** | Tipo de execução do template. |
| **Nome** | Nome do template. |
| **Versão** | A versão do template. |
| **Última alteração** | Data e hora da última alteração. |
| **Conteúdo** | O conteúdo de execução do template. |