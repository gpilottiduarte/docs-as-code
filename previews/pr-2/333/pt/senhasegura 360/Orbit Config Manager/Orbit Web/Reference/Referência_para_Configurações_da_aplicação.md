# Referência para Configurações da aplicação

Neste documento, você encontrará todas as informações sobre o menu de **Ativação** da interface **Orbit Web**.

## Caminho para acesso
1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Orbit Config Manager**.
2. No menu lateral, selecione **Configurações > Aplicação**.

### Configurações da aplicação
| Item                         | Descrição                                                                                                                                                                               |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Ativar aplicação**         | Uma instância pode estar *Ativada* ou *Desativada*. O status *Ativada* indica que esta instância pode ser acessada por usuários em todas as funcionalidades. Quando *Desativada*, apenas os usuários administradores podem fazer login e serão limitados a usar apenas a interface web do **Orbit**. |
| **Habilitar os robôs**          | Determina se a instância executará tarefas assíncronas ou não.                                                                                                                         |
| **Reiniciar o processo a cada minuto** | Indica se os serviços assíncronos devem ser reiniciados a cada minuto durante o período ocioso.                                                                                         |
| **Nome da empresa**          | Este nome pode ser personalizado pelo cliente.                                                                                                                                                                                      |
| **Título da aplicação**      | Este título será apresentado como títulos de página e pode ser personalizado pelo cliente.                                                                                             |
| **URL da aplicação**         | URL que será usada na configuração de outros serviços do senhasegura para comunicação.                                                                                                 |
| **IP Virtual (VIP)**         | Permite o acesso a um balanceador de Carga VIP (IP Virtual).                                                                                                                            |
| **Limpar todos os caches**   | Este botão permite limpar os caches gerados pelo senhasegura.                                                                                                                            |
| **Email para Notificação**    | Lista de e-mails que receberão as notificações de incidentes emitidas pelo **Orbit**.                                                                                                       |

### Configuração do Zabbix
| Item                       | Descrição                                                                                          |
|----------------------------|----------------------------------------------------------------------------------------------------|
| **Usar TLS**               | Escolha entre usar ou não o protocolo TLS.                                                         |
| **IP do Servidor 1**       | Dados do servidor de destino.                                                                      |
| **Porta de Conexão ao Servidor 1** | Dados do servidor de destino.                                                              |
| **IP do Servidor 2**       | Dados do servidor de destino.                                                                      |
| **IP do Servidor 3**       | Dados do servidor de destino.                                                                      |
| **Porta de conexão ao aervidor 3** | Dados do servidor de destino.                                                              |
| **Listen IP**              | IP da interface de acesso da instância.                                                           |
| **Listen port**            | Porta da interface de acesso da instância.                                                         |

### Configuração de Syslog
| Item                          | Descrição                                                                                                                                                                                                                     |
|-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Formato das mensagens**     | Refere-se ao formato selecionado da mensagem a ser enviada, que pode ser **CEF**, **Syslog (RFC 5424)** ou **Sensage**.                                                                                                                    |
| **Plugin de notificação**     | Usado apenas em casos de projetos de customização pagos. Mantenha este campo com seu valor padrão. Não é recomendado manipular este controle sem a supervisão da equipe de suporte.                                       |
| **Protocolo de envio de mensagens** | Escolha entre **TCP** ou **UDP**.                                                                                                                                                                                                    |
| **Network connector**          | Refere-se ao conector de rede para enviar a mensagem.                                                                                                                                                                         |
| **Usar Network connector?**    | Indica se o conector de rede selecionado será utilizado na configuração de envio de mensagem Syslog.                                                                                                                          |
| **Servidores para envio das mensagens** | Uma lista de servidores IPv4, separados por vírgulas, que receberão as mensagens.                                                                                                                                             |
| **Salvar**                    | Botão para salvar as configurações.                                                                                                                                                                                          |
