# Reconciliação de senhas

Este documento fornece informações sobre a tela do relatório **Reconciliação de Senhas**, que exibe as reconciliações realizadas no Segura.

## Caminho para acessar

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Executions**.  
2. No menu lateral, selecione **Operações de senhas > Reconciliação de senhas.** 

---
## Menu de ações

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Nome do usuário** | Campo de texto | Filtra pelo nome de usuário da credencial em que a reconciliação de senha ocorreu. |
| **Dispositivo** | Campo de texto | Filtra pelo nome do dispositivo em que a reconciliação ocorreu. |
| **Status** | Menu suspenso | Filtra pelo status da reconciliação. As opções são *Agendado, Em execução, Erro* e *Executado*. Limpe o campo para habilitar a opção **Todos**. |
| **Resultado** | Menu suspenso | Filtra pelo resultado da reconciliação executada. As opções são: *Confirmado, Erro Autenticação* e *Erro Conexão*. Limpe o campo para habilitar a opção **Todos**. |
| **Início** | Seletor de data | Filtra pelo período inicial da reconciliação para a busca dos registros. |

## Campos do relatório

* **Código:** código de identificação da tentativa de reconciliação.  
* **Nome de usuário.**  
* **Dispositivo.**  
* **Status.**  
* **Resultado.**  
* **Início.**  
* **Fim.**  
* **Mensagem:** mensagem de retorno com o resultado da reconciliação.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::