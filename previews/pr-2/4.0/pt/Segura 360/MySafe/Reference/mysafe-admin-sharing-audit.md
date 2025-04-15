# Auditoria de compartilhamento - Administração global

Este documento fornece informações sobre a tela do relatório **Auditoria de compartilhamento** do menu **Administração global** que exibe para o administrador, os detalhes de todos os itens compartilhados temporariamente por todos os usuários com pessoas externas ao **MySafe**.

## Requisitos

* Permissão de administrador do **MySafe**.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **MySafe.**  
2. No menu lateral, selecione **Administração global \> Auditoria de compartilhamento**.  
   
---
## Menu de ações

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso. | Exibe as opções *Imprimir relatório, Exportar CSV* e *Agendar relatório.* |

## 

## Campos de busca

| Item | Tipo | Descrição |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra os itens por seu código de identificação no Segura. |
| **Nome** | Campo de texto | Filtra os itens por seu nome de identificação.  |
| **Tipo** | Menu suspenso | Filtra os itens por tipo. As opções são *Senha, Arquivo, Anotação* e *Segredo de API.* |
| **Data de início** | Seletor de data | Filtra os itens pelo período inicial de compartilhamento.  |
| **Expiração** | Seletor de data | Filtra os itens pelo período de expiração do compartilhamento. |
| **Nome de usuário** | Campo de texto | Filtra os itens pelo usuário **MySafe** que compartilhou o item. |
| **Destinatário** | Campo de texto | Filtra os itens pelo email do destinatário. |
| **Acessos restantes** | Seletor de data | Filtra os itens pela quantidade de acessos restantes até a expiração do compartilhamento. |
| **Estado** | Menu suspeso | Filtra os itens pelo estado atual do compartilhamento. As opções são *Aprovado, Finalizado, Cancelado* e *Erro*. Limpe o campo para habilitar a opção **Todos**. |

## Campos do relatório

* **Código.**  
* **Nome.**  
* **Tipo.**  
* **Data:** data e hora do compartilhamento.  
* **Nome de usuário.**  
* **Destinatário.**  
* **Expiração.**  
* **Acessos restantes.**  
* **Estado.**  
* **Ações:**  
  * **Revogar:** abre o pop-up de confirmação para revogação do compartilhamento com as opções **Sim** ou **Não**. Disponível para compartilhamentos com status **Aprovado**. Em caso de revogação, a data de expiração do link é atualizada para o momento em que o compartilhamento foi revogado.  
  * **Reenviar url de acesso**: o pop-up de confirmação de reenvio do email com o link de compartilhamento com as opções **Sim** ou **Não**.  Disponível para compartilhamentos com status **Aprovado**.   
  * **Histórico:** abre a tela **Histórico de compartilhamento externo**. 

:::(info) (Info)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique no botão de avançar ao final do relatório.

:::