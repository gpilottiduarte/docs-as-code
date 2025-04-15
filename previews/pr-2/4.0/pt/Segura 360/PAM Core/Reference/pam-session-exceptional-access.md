# Acesso excepcional

Este documento fornece informações sobre a tela de relatório **Acesso excepcional**, com os pedidos de acesso realizados pelos usuários.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Auditoria > Sessões > Acesso excepcional**.

---
## Menu de ações

| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de Busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as solicitações pelo seu código único de identificação. |
| **Usuário** | Campo de texto | Filtra as solicitações pelo nome do usuário que realizou o pedido. |
| **Username da credencial** | Campo de texto | Filtra o username utilizado no acesso a credencial. |
| **Dispositivo** | Campo de texto | Filtra as o dispositivo que está sendo solicitado o acesso. |
| **Tipo de acesso** | Menu suspenso | Filtra pelo tipo de acesso a ser realizado. As opções são: *Sessão Remota* ou *Visualização da senha*. Utilize a caixa de texto para digitar a informação desejada. Limpe o campo para habilitar a opção **Todos.** |
| **Tipo** | Menu suspenso | Filtra pelo tipo do usuário que realizou a solicitação. As opções são: *Usuário do domínio*, *Administrador local* ou *Local user*. Utilize a caixa de texto para digitar a informação desejada. Limpe o campo para habilitar a opção **Todos.** |
| **Expirado** | Menu suspenso | Filtra pelo prazo, se a solicitação já teve o prazo expirado ou não. As opções são: **Sim** e **Não**. Utilize a caixa de texto para digitar a informação desejada. Limpe o campo para habilitar a opção **Todos.** |
| **Revogado** | Menu suspenso | Filtra pelo status se a solicitação já teve o pedido revogado ou não. As opções são: **Sim** e **Não**. Utilize a caixa de texto para digitar a informação desejada. Limpe o campo para habilitar a opção **Todos.** |

## Campos do relatório

* **Código.**  
* **Tipo.**  
* **Username da credencial.**  
* **Dispositivo.**  
* **Tipo de acesso.**  
* **Expirado.**  
* **Revogado.**  
* **Data de início.**  
* **Data final.**  
* **Ações:** ao clicar no botão **Ações** de cada registro, o usuário acessa, a depender de suas permissões, as seguintes opções:  
  * **Detalhes**: abre a tela **Detalhes do Acesso** excepcional.  
  * **Editar**: abre a tela de solicitação do **Acesso excepcional,** com os detalhes da solicitação e onde é possível editar o início e o fim da restrição de acesso.   
  * **Revogar**: botão que abre um pop-up de confirmação com as opções **Sim** e **Não**.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
### Tela Detalhes do acesso

#### Seção Detalhes

| **Item** | **Descrição** |
| :---- | :---- |
| **Usuário** | Exibe o nome do usuário que solicitou o acesso. |
| **Dispositivo** | Exibe o dispositivo que o acesso está sendo solicitado. |
| **Credencial** | Exibe a credencial usada no dispositivo. |
| **Tipo** | Exibe o tipo de usuário que solicitou o acesso. |
| **Provisionado por** | Exibe o nome do usuário que solicitou o acesso. |
| **Provisionado em** | Exibe a data e hora da solicitação. |

#### Seção Permissões

| **Item** | **Descrição** |
| :---- | :---- |
| **Iniciar sessão** | Exibe a informação se esta permissão foi concedida ou não. |
| **Visualizar senha** | Exibe a informação se esta permissão foi concedida ou não. |

#### Seção Limitação de acesso

| **Item** | **Descrição** |
| :---- | :---- |
| **Data de início** | Exibe a data e hora do início da restrição. |
| **Data do fim** | Exibe a data e hora do fim da restrição. |

---
### Tela Acesso excepcional  

#### Restrição de acesso

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Início** | Seletor de data e hora | Abre um calendário para inserir a data inicial do período de restrição. Ao lado, campo que abre um seletor de hora para selecionar o horário de início da restrição. |
| **Fim** | Seletor de data e hora | Abre um calendário para inserir a data final do período de restrição. Ao lado, campo que abre um seletor de hora para selecionar o horário final da restrição. |