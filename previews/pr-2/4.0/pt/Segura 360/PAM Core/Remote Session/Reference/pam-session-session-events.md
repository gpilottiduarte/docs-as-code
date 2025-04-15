# Eventos da sessão

Este documento fornece informações sobre a tela do relatório **Eventos da sessão** que exibe todos os eventos executados durante uma sessão remota.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Auditoria > Sessões > Eventos de sessão**.

---
## Menu de ações

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Ações** | Menu suspenso | Exibe as opções para *Imprimir relatório, Exportar CSV e Agendar relatório.* |

## Campos de busca

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Identificação de sessão** | Campo de texto | Filtra os eventos pelo *hash* único de identificação da sessão gerado pelo Segura. **Nota:** este identificador é usado internamente pela aplicação para operações relacionadas à sessão, tais como controle de acesso, rastreamento de atividades e gerenciamento de recursos. Cada vez que uma sessão é iniciada, um novo *hash* é gerado para essa sessão específica. |
| **Data/hora** | Seletor de data | Filtra os eventos pelo período em que foram realizados. |
| **Evento** | Campo de texto | Filtra os eventos pelo tipo de evento executado durante a sessão. **Nota**: os tipos de eventos estão listados em **Tipos de eventos possíveis** abaixo. |
| **Observação** | Campo de texto | Filtra os eventos pela mensagem de observação. |
| **Usuário Segura** | Campo de texto | Filtra os eventos pelo nome de usuário Segura que executou os comandos. |
| **IP Origem** | Campo de texto | Filtra os eventos pelo endereço do IP de origem. |
| **Host** | Campo de texto | Filtra os eventos pelo host da sessão. |
| **Usuário remoto** | Campo de texto | Filtra os eventos pelo nome de usuário do usuário remoto. |

**Tipos de eventos possíveis:**

* Arquivos Alterados.  
* Arquivos expurgados.  
* Criada.  
* Derrubar sessão.  
* Detalhes exportados.  
* Download de vídeo.  
* Emissão de vídeo.  
* Evento bloqueado.  
* Evento observado.  
* Evento proibido.  
* Finalizada.  
* Iniciada.  
* Interatividade bloqueada.  
* Interatividade bloqueada (tentativa).  
* Interatividade desbloqueada.  
* Interatividade desbloqueada (tentativa).  
* Live stream.  
* Log viewer.  
* Play de sessão.  
* Transferência de arquivo.

## Campos do relatório

* **Código:** número sequencial que identifica a ordem da execução dos comandos.  
* **Identificação de sessão.**  
* **Data/Hora.**  
* **Evento.**  
* **Observação.**  
* **IP Origem.**  
* **Protocolo**: identificação do protocolo utilizado durante a execução da sessão.  
* **Host.**  
* **Usuário remoto.**  
* **Sessão início.**  
* **Sessão fim.**

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::