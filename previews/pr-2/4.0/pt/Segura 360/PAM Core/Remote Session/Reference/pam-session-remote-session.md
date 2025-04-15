# Sessão remota

Este documento fornece informações sobre a tela do relatório **Sessões remotas** que exibe as informações e possíveis ações nas sessões que foram realizadas ou se encontram em andamento.

## Caminho para acesso

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.  
2. No menu lateral, selecione **Auditoria > Sessões > Sessões remotas**.

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
| **Proxy** | Menu suspenso | Filtra as sessões remotas pelo tipo de proxy da sessão. As opções são: *Database Proxy*, *RDP Proxy*, *Segura.go*, *SSH Tunneling*, *Terminal Proxy* e *Web Proxy*. |
| **Início da sessão** | Seletor de data | Filtra as sessões remotas pelo período em que foram iniciadas. |
| **Motivo** | Menu suspenso | Filtra as sessões remotas pelo motivo para sua realização. **Nota:** quando há necessidade de aprovação para a realização de uma sessão, um motivo é atribuído a esta solicitação. As opções listadas neste campo podem variar de acordo com os motivos cadastrados pelo próprio usuário. |
| **Justificativa** | Campo de texto | Filtra as sessões remotas pela justificativa que foi escrita na solicitação de acesso da sessão. |
| **Cód. governança** | Campo de texto | Filtra as sessões remotas pelo número de identificação do código de governança. |
| **Impedir expurgo** | Menu suspenso | Filtra as sessões remotas pela presença de expurgo na sessão realizada. As opções são **Sim** e **Não**.  Limpe o campo para habilitar a opção **Todos**.  |

## Campos do relatório

* **Código**.  
* **Usuário.**  
* **IP de origem.**  
* **Credencial.**  
* **Dispositivo.**  
* **Protocolo.**  
* **Proxy.**  
* **Identificação de sessão.**  
* **Início.**  
* **Término.**  
* **Tempo:** duração da sessão.  
* **Impedir expurgo.**  
* **Solicitação**: indica se a sessão foi realizada através de uma solicitação.  
* **Ações**: as opções aqui descritas podem variar de acordo com o status da sessão.  
  * **Live Stream**: possibilita visualizar sessões em andamento.   
    **Nota:** esta opção está disponível apenas para usuários com os papéis de PAM Administrator, PAM auditor ou System administrator com permissão específica **PAM.SessionManagement.Livestream**.  
  * **Derrubar sessão**: finaliza sessões que estejam em andamento.  
  * **Logs da Sessão**: abre a janela [Logs da sessão](/v4/docs/pt/pam-session-session-logs) com as informações sobre a sessão realizada.  
  * **Vídeo da Sessão**: abre a janela [Vídeos da sessão](/v4/docs/pt/pam-session-view-and-download-the-session-video) com informações sobre a sessão e os botões **Vídeo** e **Gerar vídeo para download.** **Nota:** disponível apenas para usuários com os papéis de PAM Administrator, PAM auditor ou System administrator com permissão específica **PAM.SessionManagement.Recording**.  
  * **Impedir expurgo**: abre a tela **Impedir expurgo da sessão** que exibe um campo de texto para inserção da descrição/motivo do impedimento do expurgo.  
  * **Configurar auditores**: abre a tela **Configuração dos auditores da sessão**, para adição dos usuários auditores do registro.

:::(info) (**Info**)  
Por padrão, o relatório exibe 30 registros por tela. Para ir para a próxima tela, clique nos botões de avançar ao final do relatório.  
:::

---
### Tela Configuração dos auditores da sessão

Esta tela possibilita configurar auditores para a sessão selecionada.

| **Item** | **Tipo** | **Descrição** |
| :---- | :---- | :---- |
| **Buscar** | Campo de texto | Filtra pelo nome dos auditores previamente selecionados. |
| **Adicionar/Remover selecionados** | Botão | Adiciona ou remove os usuários à lista de **Auditores.** A seleção do usuário que será o auditor é realizada através do menu suspenso adicionado a lista. |
| **Auditores** | Lista | Exibe a lista com os auditores selecionados.  |