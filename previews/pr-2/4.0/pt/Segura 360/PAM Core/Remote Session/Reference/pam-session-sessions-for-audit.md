# Sessões para auditoria

Este documento fornece informações sobre o relatório **Sessões para auditoria**, que mostra a lista de sessões configuradas para serem auditadas durante o uso.

:::(info) (**Info**)  
Você só poderá ver as sessões para as quais estiver registrado como auditor.  
:::

## Caminho para acesso

1. No **Segura**, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Auditoria > Sessões > Sessões para auditoria**.

---
## Menu de ações

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Código** | Campo de texto | Filtra as sessões remotas pelo seu código de identificação dentro do Segura. |
| **Identificação de sessão** | Campo de texto | Filtra as sessões remotas pelo seu *hash* único de identificação da sessão gerado pelo Segura. **Nota:** este identificador é usado internamente pela aplicação para operações relacionadas à sessão, tais como controle de acesso, rastreamento de atividades e gerenciamento de recursos. Cada vez que uma sessão é iniciada, um novo *hash* é gerado para essa sessão específica. |
| **Credencial** | Campo de texto | Filtra as sessões remotas pelo nome de usuário da credencial. |
| **Dispositivo** | Campo de texto | Filtra as sessões remotas pelo dispositivo utilizado na sessão. |
| **Usuário** | Campo de texto | Filtra as sessões remotas pelo nome do usuário que realizou o acesso. |
| **IP de origem** | Campo de texto | Filtra as sessões remotas pelo número do endereço de IP que realizou a sessão. |
| **Protocolo** | Campo de texto | Filtra as sessões remotas pelo tipo do protocolo da sessão. |
| **Início da sessão** | Seletor de data | Filtra as sessões remotas pelo período em que foram iniciadas. |
| **Auditado?** | Menu suspenso | Filtra as sessões remotas pelo seu status de auditoria. As opções são **Sim** e **Não**. |

## Campos do relatório

* **Código.**  
* **Usuário.**  
* **IP de origem.**  
* **Credencial.**  
* **Dispositivo.**  
* **Protocolo.**  
* **Identificação de sessão.**  
* **Auditado?.**  
* **Início**: data e hora do início da sessão.  
* **Término**: data e hora do término da sessão.  
* **Tempo**: duração da sessão.  
* **Ações:**  
  * **Comentar sessão:** abre a tela **Comentar sessão** com um espaço para o auditor inserir comentários sobre a sessão.  
  * **Logs da Sessão**: abre a tela [Logs da sessão](/v4/docs/pt/pam-session-session-logs) com informações escritas sobre a sessão.  
  * **Vídeo da sessão**: abre a tela [Vídeo da sessão](/v4/docs/pt/pam-session-view-and-download-the-session-video) com as informações da sessão e o botão **Vídeo**  que possibilita visualizar ou realizar o download do vídeo da sessão  
    :::(info) (**Info**)  
    A geração de um vídeo para download consome uma grande quantidade de recursos no servidor. 
    :::  
  * **Auditar**: confirma a auditoria da sessão e muda a coluna **Auditado?** para **Sim**, confirmando que a sessão foi auditada.  
  * **Auditoria da sessão**: abre a tela **Auditoria da sessão** com as informações sobre os auditores da sessão e seus comentários.

:::(info) (**Info**)
Por padrão, o relatório exibe 30 registros por tela. Para ir para as próximas telas, clique nos botões de avançar ao final do relatório.  
:::

---
### Tela Comentar sessão

| **Item** | **Tipo** | **Obrigatório** | **Descrição** |
| :---- | :---- | :---- | :---- |
| **Comentário** | Campo de texto. | Não | Informações escritas pelo auditor da sessão. |

---
### Tela Auditoria da sessão

| **Item** | **Descrição** |
| :---- | :---- |
| **Auditor** | Nome do auditor da sessão. |
| **Data/Hora** | Data e hora em que a sessão foi auditada. |
| **Auditada?** | Status da auditoria da sessão. |
| **Comentário** | Comentários realizados pelo auditor. |