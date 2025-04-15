# Log de texto de sessão

Este documento fornece informações sobre a tela do relatório **Log de texto de sessão**, que exibe os textos de entrada e saída de uma sessão, desde que a mesma esteja configurada para indexar os textos das sessões.

Para que os textos sejam exibidos, é necessário configurar a sessão para que os textos possam ser gravados no log. Saiba mais em [Como configurar os textos das sessões](/v4/docs/pt/pam-session-how-to-configure-session-texts).

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Auditoria > Sessões > Log de texto de sessão**.

---
## Menu de ações

| **Item**  | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de Busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **String** | Campo de texto | Filtra pelo texto de entrada ou saída digitado na sessão. |
| **Identificação de sessão** | Campo de texto | Filtra pelo identificador da sessão realizada. |
| **Início da sessão** | Seletor de data | Filtra pela data que a sessão teve início. |
| **Usuário Local** | Campo de texto | Filtra pelo usuário que acessou a sessão. |
| **IP do usuário** | Campo de texto | Filtra pelo endereço de IP da máquina de origem do usuário. |
| **Protocolo** | Campo de texto | Filtra pelo protocolo utilizado no acesso. |
| **Host** | Campo de texto | Filtra pelo endereço do host referente ao dispositivo da sessão. |
| **Usuário remoto** | Campo de texto | Filtra pela credencial da sessão acessada. |

## Campos do relatório

* **Código.**  
* **Identificação de sessão**.  
* **Início**: data e hora do início da sessão.  
* **Término**: data e hora do término da sessão.  
* **Tempo**: duração da sessão.  
* **Usuário local.**  
* **IP do usuário.**  
* **Protocolo.**  
* **Host.**  
* **Usuário remoto.**  
* **Data/Hora**: data e hora do acesso à sessão.  
* **Input/Output**: indica se o texto apresentado foi uma entrada ou saída (input/output)  
* **String.**  
* **Ações:**  
  * **Logs**: abre a tela [Log de sessão](/v4/docs/pt/pam-session-session-logs) com as informações detalhadas sobre a sessão.  
  * **Assistir stream**: abre uma janela com o vídeo da sessão.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::
