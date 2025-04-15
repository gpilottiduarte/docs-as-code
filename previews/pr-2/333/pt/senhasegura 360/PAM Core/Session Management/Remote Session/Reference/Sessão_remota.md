# Sessão remota

Neste documento, você encontrará todas as informações sobre a página **Sessão Remota** que mostra as informações e possíveis ações das sessões que foram realizadas ou se encontram em andamento.

## Caminho para acesso

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelo ícone de nove quadrados e, em seguida, selecione **PAM Core**.
2. No menu lateral, selecione **Controle de acesso** > **Sessões remotas**.

## Barra superior
| **Item** | Descrição |
|---|---|
| **Mostrar os filtros** | Representado pelo ícone da lupa, exibe ou oculta os campos de busca presentes na tela. |
| **Atualizar** | Representado pelo ícone da seta no sentido anti-horário, atualiza a página. |
| **Exibir ações** | Representado pelo ícone de três pontos verticais, exibe um menu suspenso com ações possíveis para a página. |
| **Imprimir relatório** | Representado pelo ícone da impressora, abre uma nova página para impressão do relatório. |
| **Exportar CSV** | Representado pelo ícone da folha de papel, baixa o relatório. |
| **Agendar relatório** | Representado pelo ícone do relógio, abre o formulário Agendar relatório. | 


## Campos de Busca
| **Item** | Descrição |
|---|---|
| **Código** | Número de identificação da ordem que as sessões foram realizadas. |
| **Identificação de sessão** | Código de identificação da sessão. |
| **Credencial** | Nome de usuário da credencial. |
| **Dispositivo** | Dispositivo utilizado na sessão. |
| **Usuário** | Nome do usuário que realizou o acesso. |
| **IP de origem** | Número do endereço de IP que realizou a sessão. |
| **Protocolo** | Tipo do protocolo da sessão. |
| **Proxy** | Tipo de proxy da sessão, sendo as opções *Database Proxy*, *RDP Proxy*, *senhasegura.go*, *SSH Tunneling*, *Terminal Proxy* e *Web Proxy*. |
| **Início da sessão** | Data inicial para busca dos registros. |
| **até** | Data final para busca dos registros. |
| **Motivo** | Quando há a necessidade de aprovação para a relização de uma sessão, um motivo é atribuido a esta solicitação. As opções listadas neste campo podem variar de acordo com os motivos cadastrados pelo próprio usuário. |
| **Justificativa** | Justificativa que foi escrita ao realizar a solicitação para acessar a sessão. |
| **Cód. governança** | Número de identificação do código de governança. |
| **Impedir expurgo** | Se na sessão realizada houve ou não expurgo, as opções são **Sim** e **Não**. | 

## Campos do relatório

* **Código**  
* **Usuário**  
* **IP de origem**  
* **Credencial**  
* **Dispositivo**  
* **Protocolo**  
* **Proxy**  
* **Identificação de sessão**  
* **Início**  
* **Término**  
* **Tempo**: duração da sessão.  
* **Impedir expurgo**  
* **Solicitação**: se a sessão foi realizada através de uma solicitação ou não.  
* **Ação** 
    * ***Live Stream***: ícone de **olho**, estará presente nas sessões que estão ocorrendo naquele momento e é possível realizar sua visualização ao vivo. Este ícone é visível para usuários com os papéis de PAM Adminitrator, PAM auditor ou System administrator que tenha permissão específica **PAM.SessionManagement.Livestream**.
    * **Derrubar sessão**: ícone de **liga/desliga**, estará presente apenas nas sessões que estão ocorrendo naquele momento, possibilitando que a mesma seja finalizada.
    * **Logs da Sessão**: ícone de **barras horizontais**, abre a janela [**Logs da sessão**](/v3-33/docs/pt/pam-session-session-logs) com as informações sobre a sessão realizada.
    * **Vídeo da Sessão**: ícone de **play**, abre a janela [**Vídeos da sessão**](/v3-33/docs/pt/pam-session-view-and-download-the-session-video) com informações sobre a sessão e os botões para que seja visualizado o vídeo ou realizado o seu download. Este ícone é visível para usuários com os papéis de PAM Adminitrator, PAM auditor ou System administrator que tenha permissão específica **PAM.SessionManagement.Recording**.
    * **Três pontos verticais**, contém ações adicionais para o registro como:
        * **Impedir expurgo**: abre a janela **Impedir expurgo da sessão**, para entrar com a descrição/motivo do porque será impedido que ocorra o expurgo deste registro.
        * **Configurar auditores**: abre a janela **Configuração dos auditores da sessão**, para que seja adicionado usuários para auditar aquele registro específico.

:::(info) (**Info**)
O relatório exibe 30 registros por tela, para ir para as próximas telas, clique nos botões de avançar ao final do relatório.
:::