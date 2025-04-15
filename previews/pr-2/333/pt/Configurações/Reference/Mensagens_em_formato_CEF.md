O senhasegura coleta informações e eventos do ambiente para monitorar diversas métricas do produto, incluindo identificadores de tabelas e o status dos robôs em execução. Esses dados podem ser enviados a soluções de SIEM para monitoramento.

As soluções SIEM fornecem uma visão ampla aos administradores de Segurança da Informação, permitindo que eles monitorem as atividades no ambiente de TI por meio dos dados de log. O SIEM utiliza esses registros para identificar, categorizar e analisar incidentes e eventos, gerando relatórios de segurança que abrangem atividades suspeitas ou maliciosas. 

Além disso, o SIEM é capaz de enviar alertas por diferentes canais, como SMS, mensagens instantâneas, e\-mail e abertura de chamados, caso detecte possíveis ameaças de segurança, conforme as regras de configuração estabelecidas. 

Os alertas enviados pelo senhasegura incluem:

* Autenticação de um usuário no dispositivo.
* Login remoto em um dispositivo.
* Falhas no servidor senhasegura.
* Expiração da senha.

O senhasegura é compatível com as ferramentas SIEM mais utilizadas no mercado e oferece suporte para envio de mensagens nos formatos:

* CEF
* Syslog (RFC 5424\)
* Sensage



---

## Mensagens em formato CEF

O CEF é um formato de mensagens criado para padronizar o envio de informações para SIEM e segue o formato **CEF:0\|MT4\|senhasegura\|3\.27\.0\-4\|336\.501\|UPDATE INCIDENT\|9\|Extensões**.



| **Item** | **Descrição** |
| --- | --- |
| **Versão** | A versão do formato CEF. No exemplo acima, usamos '0'. |
| **Empresa** | O nome da empresa responsável pelo produto. No exemplo acima, usamos 'MT4'. |
| **Produto** | O nome do produto que está gerando o evento. No exemplo acima, usamos 'senhasegura'. |
| **Versão do produto** | A versão do produto. No exemplo acima, usamos '3\.27\.0\-4'. |
| **ID do evento** | O ID do evento ocorrido. Cada ID é exclusivo para identificar o evento. No exemplo acima, usamos '336\.501'. |
| **Nome do evento** | O tipo de evento ocorrido. No exemplo acima, usamos 'Update Incident' para indicar que ocorreu um incidente de atualização. |
| **Severidade** | A gravidade ou importância do evento. A sequência vai de 1 até 10\. Quanto maior o número, mais grave é o incidente. |

Adicionalmente, é apresentada uma lista de extensões que fornecem informações detalhadas sobre o evento.



---

## Mensagens em formato RFC 5424

Neste modo as mensagens do SYSLOG são enviadas conforme a [RFC 5424](https://www.rfc-editor.org/rfc/rfc5424). Os campos são configurados com os seguintes valores:

* **Priority:** conforme o tipo do evento
* **facility:** 1 (user)
* **App:** senhasegura
* **Procid:** PID do processo atual
* **Message:** mensagem do evento



---

## Mensagens configuradas

As seguintes mensagens são configuradas para envio através do SIEM:

### Tipos de mensagens(SUID)



| **SUID** | Descrição |
| --- | --- |
| **8** | Conectividade Perda/Recuperação |
| **9** | Troca de senhas executada |
| **15** | Backup realizado |
| **17** | Senha alterada |
| **153** | Sessão Iniciada/Finalizada |
| **164** | Senha Visualizada |
| **dst** | IP do dispositivo de destino do evento |
| **dhost** | Hostname do dispositivo afetado pelo evento |

### Backup



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Backup enviado para servidor ’localhost:/srv/backup’ via local | Mensagem com informação sobre a ação |
| **suid** |  | Tipo de mensagem |
| **sname** | Script Assíncrono: 8 | Identificador do script do backup |
| **suser** |  | Não se aplica |
| **spid** |  | Identificador único da notificação |
| **dhost** | localhost | Nome do servidor onde o backup é gerado |

### Perda de conectividade



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | O equipamento localhost (127\.0\.0\.1\) perdeu a conectividade SSH |  |
| **suid** |  | Tipo de mensagem |
| **sname** | Script Assíncrono: 9 | Nome do usuário que perdeu a conectividade |
| **suser** |  | Não se aplica |
| **spid** |  | Identificador único da notificação |
| **dst** | .0\.1 | IP do dispositivo |
| **dhost** | localhost | Nome do servidor onde o backup é gerado |
| **dport** |  | Porta do dispositivo |

### Conectividade restabelecida



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | O equipamento localhost (127\.0\.0\.1\) recuperou a conectividade SSH |  |
| **suid** |  | Tipo de mensagem |
| **sname** | Script Assíncrono: 9 | Nome do usuário que teve a sessão restabelecida |
| **suser** |  | Não se aplica |
| **spid** |  | Identificador único da notificação |
| **dst** | .0\.1 | IP do dispositivo |
| **dhost** | localhost | Nome do servidor onde o backup é gerado |
| **dport** |  | Porta do dispositivo |

### Senha alterada



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Senha localhost (127\.0\.0\.1\) \- Usuário Domínio \- root alterada pelo usuário jsilva |  |
| **suid** |  | Identificador único da notificação |
| **sname** | José da Silva | Nome do usuário que alterou a senha |
| **suser** |  | Não se aplica |
| **spid** |  | Identificador único da notificação |
| **duser** | root | Username da senha alterada |
| **duid** |  |  |
| **dst** | .0\.1 | IP do dispositivo |
| **dhost** | localhost | Nome do dispositivo da senha |

### Senha visualizada



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Senha localhost (127\.0\.0\.1\) \- Usuário Domínio \- root alterada pelo usuário jsilva |  |
| **suid** |  | Tipo de mensagem |
| **sname** | José da Silva | Usuário que visualizou a senha |
| **suser** |  | Não se aplica |
| **spid** |  | Identificador único da notificação |
| **duser** | root duid\=35 | Username da senha visualizada |
| **dst** | .0\.1 | IP do dispositivo da senha |
| **dhost** | localhost | Nome do dispositivo da senha |

### Sessão finalizada



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Sessão finalizada para localhost (127\.0\.0\.1\) \- Usuário Domínio Privilegiado \- srv\_admin pelo usuário José da Silva (jsilva) |  |
| **suid** |  | Identifica o tipo de mensagem |
| **sname** | José da Silva | Usuário que finalizou a sessão |
| **suser** | jsilva | login do usuário que finalizou a sessão |
| **spid** |  | Identificador único da notificação |
| **dst** | .0\.1 | IP do dispositivo |
| **dposrt** |  | Porta do dispositivo |
| **duser** | srv\_admin | Login utilizado na sessão remota |

### Sessão iniciada



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Sessão finalizada para localhost (127\.0\.0\.1\) \- Usuário Domínio Privilegiado \- root pelo usuário José da Silva (jsilva) |  |
| **suid** |  | Identifica o tipo de mensagem |
| **sname** | José da Silva | Usuário que iniciou sessão |
| **suser** | jsilva | Login do usuário que iniciou sessão |
| **spid** |  | Identificador único da notificação |
| **dst** | .0\.1 | IP do dispositivo |
| **dpt** |  | Porta do dispositivo |
| **duser** | root | Login utilizado na sessão remota |

### Troca executada



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Sessão finalizada para localhost (127\.0\.0\.1\) \- Usuário Domínio Privilegiado \- root pelo usuário José da Silva (jsilva) |  |
| **suid** |  | Tipo de mensagem |
| **sname** | Script Assíncrono: 17 | Identificador do script de troca de senhas |
| **suser** |  | Não é utilizado nesta interface |
| **spid** |  | Identifica o tipo de mensagem |
| **dst** | .0\.1 | IP do dispositivo |
| **duser** | root | usuário da senha trocada |

### Comandos auditados e executados



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Um comando auditado foi detectado! Ação: ”\[Ação tomada]” |  |
| **suid** |  | Usuário logado |
| **sname** | José da Silva | Usuário que iniciou sessão |
| **suser** | jsilva | Login do usuário que iniciou sessão |
| **spid** |  | Não se aplica |
| **dst** |  | Não se aplica |
| **dpt** |  | Não se aplica |
| **duser** |  | Não se aplica |

### Informação visualizada



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Informação ’teste’ visualizada. |  |
| **suid** |  | Usuário logado |
| **sname** | José da Silva | Usuário que iniciou sessão |
| **suser** | jsilva | Login do usuário que iniciou sessão |
| **spid** |  | Tipo de mensagem |
| **dst** |  | Não se aplica |
| **dpt** |  | Não se aplica |
| **duser** |  | Não se aplica |

### Informação alterada



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Informação ’teste’ alterada |  |
| **suid** |  | Usuário logado |
| **sname** | José da Silva | Usuário que iniciou sessão |
| **suser** | jsilva | Login do usuário que iniciou sessão |
| **spid** |  | Tipo de mensagem |
| **dst** |  | Não se aplica |
| **dpt** |  | Não se aplica |
| **duser** |  | Não se aplica |

### Solicitação de acesso à senha



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | O usuário ’José da Silva’ criou uma solicitação. Detalhes da solicitação: Ação de visualizar senha para a credencial cqss no dispositivo win2012 (192\.168\.10\.156\) |  |
| **suid** |  | Usuário logado |
| **sname** | José da Silva | Nome do usuário logado |
| **suser** | jsilva | Login do usuário logado |
| **spid** |  | PID do processo |
| **dst** | .10\.156 | IP Destino |
| **dpt** |  | Não se aplica |
| **duser** | cqss | Usuário solicitado |
| **cs1Label** | GMUD | Label do campo |
| **cs1** |  | Id do arquivo |
| **cs2Label** | Início Validade | Label do campo |
| **cs2** | \-01\-19 10:41:00 | Data de início da solicitação |
| **cs3Label** | Fim Validade | Label do campo |
| **cs3** | \-01\-19 11:41:00 | Data de validade da solicitação |
| **cs4Label** | Aprovador | Label do campo |
| **cs4** | Administrador | Usuário Aprovador |
| **cs5Label** | Solicitante | Label do campo |
| **cs5** | José da Silva | Usuário Solicitante |
| **Cs6** | Ação | Label do campo |
| **Cs7** | Visualizar senha | Descrição da ação |

### Solicitação aprovada



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Solicitação aprovada por Administrador em 19/01/2017 10:44:30\. Código: S000296 Solicitante: José da Silva Solicitada em: 19/01/2017 10:44:13 Detalhes da solicitação: Ação de visualizar senha para a credencial cqss no dispositivo win2012 (192\.168\.10\.156\) |  |
| **suid** |  | Usuário logado |
| **sname** | Maria da Silva | Nome do usuário logado |
| **suser** | msilva | Login do usuário logado |
| **spid** |  | PID do processo |
| **dst** | .10\.156 | IP Destino |
| **dpt** |  | Não utilizado |
| **duser** | cqss | Usuário da credencial solicitada |
| **cs1Label** | GMUD | Label do campo |
| **cs1** |  | ID do arquivo |
| **cs2Label** | Início Validade | Label do campo |
| **cs2** | \-01\-19 10:41:00 | Data de início da solicitação |
| **cs3Label** | Fim Validade | Label do campo |
| **cs3** | \-01\-19 11:41:00 | Data de validade da solicitação |
| **cs4Label** | Aprovador | Label do campo |
| **cs4** | Administrador | Usuário Aprovador |
| **cs5Label** | Solicitante | Label do campo |
| **cs5** | José da Silva | Usuário Solicitante |
| **Cs6** | Ação | Label do campo |
| **Cs7** | Visualizar senha | Descrição da ação |

### Solicitação reprovada



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Informação ’teste’ visualizada. |  |
| **suid** |  | Usuário logado |
| **sname** | José da Silva | Nome do usuário logado |
| **suser** | jsilva | Login do usuário logado |
| **spid** |  | PID do processo |
| **dst** | .10\.156 | IP Destino |
| **dpt** |  | Não utilizado |
| **duser** | cqss | Login do usuário solicitado |
| **cs1Label** | GMUD | Label do campo |
| **cs1** |  | Id do arquivo |
| **cs2Label** | Início Validade | Label do campo |
| **cs2** | \-01\-19 10:41:00 | Data de início da solicitação |
| **cs3Label** | Fim Validade | Label do campo |
| **cs3** | \-01\-19 11:41:00 | Data de validade da solicitação |
| **cs4Label** | Aprovador | Label do campo |
| **cs4** | Administrador | Usuário Aprovador |
| **cs5Label** | Solicitante | Label do campo |
| **cs5** | Maria da Silva | Usuário Solicitante |
| **Cs6** | Ação | Label do campo |
| **Cs7** | Visualizar senha | Descrição da ação |

### Comando detectado \- Bloquear e interromper sessão



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Um comando auditado foi detectado! Ação: Comando bloqueado e sessão interrompida |  |
| **suid** |  | Usuário logado |
| **sname** | Romario | Usuário que iniciou sessão |
| **suser** | romario | Login do usuário que iniciou sessão |
| **spid** |  | Tipo de mensagem |
| **dst** | .0\.1 | IP destino |
| **dpt** |  | Porta utilizada |
| **duser** | cofre | Usuário utilizado para iniciar a sessão |

### Comando detectado \- loquear



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Um comando auditado foi detectado! Ação: Comando notificado e permitido |  |
| **suid** |  | Usuário logado |
| **sname** | Romario | Usuário que iniciou sessão |
| **suser** | romario | Login do usuário que iniciou sessão |
| **spid** |  | Tipo de mensagem |
| **dst** | .0\.1 | IP destino |
| **dpt** |  | Porta utilizada |
| **duser** | cofre | Usuário utilizado para iniciar a sessão |

### Erro na troca de senha



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Erro ao trocar senha ’Windows SQL Teste Remote App (192\.168\.30\.55\) \- Usuario Domínio – ’jsilvaadm’: O dispositivo ’Windows SQL Teste Remote App (192\.168\.30\.55\)’ não possui conectividade Windows RPC |  |
| **suid** |  | Usuário logado |
| **sname** | José da Silva | Nome do usuário que iniciou sessão |
| **suser** | Jsilva | Login do usuário que iniciou sessão |
| **spid** |  | Tipo de mensagem |
| **dst** | .30\.5 |  |
| **5** | IP destino |  |
| **dpt** |  | Não se aplica |
| **duser** | jsilvaadm | Usuário utilizado para iniciar a sessão |

### Arquivo do armazém alterado



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Um arquivo de sessão foi modificado! |  |
| **suid** |  | Usuário logado |
| **sname** | Script Assíncrono: 12 | Nome do usuário logado |
| **suser** | asc\_12 | Login do usuário logado |
| **spid** |  | PID do processo |
| **dst** |  | Não se aplica |
| **dpt** |  | Não se aplica |
| **duser** |  | Não se aplica |
| **cs1Label** | Id | Label do campo |
| **cs1** |  | Id do arquivo |
| **cs2Label** | Tamanho Inicial | Label do campo |
| **cs2** |  | Tamanho inicial do arquivo em bytes |
| **cs3Label** | Tamanho Final | Label do campo |
| **cs3** |  | Tamanho final do arquivo em bytes |
| **cs4Label** | Checksum inicial | Label do campo |
| **cs4** | f5751777b74f8e2f2… | Checksum anterior do arquivo |
| **cs5Label** | Checksum final | Label do campo |
| **cs5** | 284f1555574548901… | Checksum atual do arquivo |

### Chave Mestra \- Usuários que visualizaram a sua parte da chave



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | O usuário viu sua parte da solicitação de chave. |  |
| **suid** |  | Usuário logado |
| **sname** | José da Silva | Nome do usuário logado |
| **suser** | jsilva | Login do usuário logado |
| **Method** | POST | Valor fixo |
| **act** | O usuário viu sua parte da fonte de chave. | Ação performada |
| **ServiceName** | Backup |  |

### Chave Mestra \- Usuário que realizou o download do PDF com a sua parte da chave



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | O usuário baixou o PDF com sua parte da solicitação de chave. |  |
| **suid** |  | Usuário logado |
| **sname** | José da Silva | Nome do usuário logado |
| **suser** | jsilva | Login do usuário logado |
| **Method** | POST | Valor fixo |
| **act** | O usuário baixou o PDF com sua parte da fonte de chave. | Ação performada |
| **ServiceName** | Backup |  |

### Chave Mestra \- Processo de cerimônia iniciado



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Processo de cerimônia iniciado. |  |
| **suid** |  | Usuário logado |
| **sname** | José da Silva | Nome do usuário logado |
| **suser** | jsilva | Login do usuário logado |
| **spriv** | Administrador |  |
| **Method** | POST | Valor fixo |
| **act** | Processo de cerimônia iniciado. | Ação performada |
| **ServiceName** | Backup |  |

### Chave Mestra \- Processo de cerimônia finalizado



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Processo de cerimônia finalizado. |  |
| **suid** |  | Usuário logado |
| **sname** | José da Silva | Nome do usuário logado |
| **suser** | jsilva | Login do usuário logado |
| **spriv** | Administrador |  |
| **Method** | GET | Valor fixo |
| **act** | Processo de cerimônia finalizado. | Ação performada |
| **ServiceName** | Backup |  |

### Chave Mestra \- Guardião inativo



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Chave Mestra \- Guardião inativo. |  |
| **suid** |  | ID do usuário logado |
| **sname** | John Doe | Nome do usuário |
| **suser** | jdoe | Username do usuário |
| **spriv** | Usuário | Camada de aplicação |
| **dvc** | .225\.14 | Host IPv4 do dispositivo |
| **spid** |  | PID interno |
| **act** | Incidente | Ação performada |
| **dproc** | master\_key\_guardian | Nome do processo de destino |

### Chave Mestra \- Falha na tentativa de recuperação



| **Chave** | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Falha na tentativa de recuperação | As frações da chave são inválidas |
| **requestMethod** | POST | Valor fixo |
| **act** | Falha na tentativa de recuperação | Tipo de falha da tentativa de recuperação da Chave Mestra |
| **sourceServiceName** | Master Key | Módulo de operação |
| **originIP** | .148\.162 | IP do usuário solicitante |
| **country** | Brazil | Solicitar geolocalização do país |
| **state** | Sao Paulo | Solicitar geolocalização do estado |
| **city** | Taboao da Serra | Solicitar geolocalização da cidade |
| **latitude** |  | Solicitar geolocalização de GPS latitude |
| **longitude** |  | Solicitar geolocalização de GPS latitude |
| **partsNeeded** |  | Frações necessárias para realizar a recuperação |
| **partsSent** |  | Número de tentativas de frações enviadas |
| **suid** |  | ID do usuário logado |
| **sname** |  | Nome do usuário |
| **suser** |  | Username do usuário |
| **spriv** | Usuário | Camada de aplicação |
| **dvc** | .2\.17 | Host IPv4 do dispositivo |
| **spid** |  | PID interno |
| **src** | .0\.1 | Endereço do IP fonte |
| **act** | Incidente | Ação performada |
| **dproc** | master\_key\_guardian | Nome do processo de destino |

### Chave Mestra \- Tentativa de recuperação bem\-sucedida



| Chave | Exemplo | Descrição |
| --- | --- | --- |
| **msg** | Tentativa de recuperação bem\-sucedida | As frações chave usadas são válidas |
| **requestMethod** | POST | Valor fixo |
| **act** | Tentativa de recuperação bem\-sucedida | Tipo de recuperação de chave mestra bem\-sucedida |
| **sourceServiceName** | Master Key | Módulo de operação |
| **originIP** | .10\.13 | Solicitar IP do usuário |
| **country** | Brazil | Solicitar geolocalização do país |
| **state** | Sao Paulo | Solicitar geolocalização do estado |
| **city** | Taboao da Serra | Solicitar geolocalização da cidade |
| **latitude** |  | Solicitar geolocalização de GPS latitude |
| **longitude** |  | Solicitar geolocalização de GPS latitude |
| **partsNeeded** |  | Frações necessárias para realizar a recuperação |
| **partsSent** |  | Número de tentativas de frações enviadas |
| **suid** |  | ID de usuário registrado |
| **sname** |  | Nome do usuário |
| **suser** |  | Username do usuário |
| **spriv** | Usuário | Camada de aplicação |
| **dvc** | .10\.20 | Host do dispositivo IPv4 |
| **spid** |  | PID interno |
| **src** | .10\.13 | Endereço IP de origem |
| **act** | Incidente | Ação performada |
| **dproc** | master\_key\_guardian | Nome do processo de destino |

### Agendamento de relatórios de email \- Criação



| Chave | Exemplo | Descrição |
| --- | --- | --- |
| **dvc** | .20\.30 | IP do servidor senhasegura |
| **spid** |  | ID do processo no sistema operacional |
| **src** | .20\.10 | IP do usuário que realizou a operação |
| **suid** |  | ID do usuário que executou a operação |
| **sname** | John Doe | Nome do usuário |
| **suser** | jdoe | Username do usuário |
| **spriv** | Administrador | Usuário privilegiado que realizou a operação |
| **msg** | Agendamento de relatórios \- Criação | Operação que foi realizada |
| **requestMethod** | POST | Método HTTP usado pelo cliente |
| **act** | Agendamento de relatórios \- Criação | Operação que foi realizada |
| **sourceServiceName** | Agendamento de relatórios | Categoria de operação que foi executada |
| **cs1Label** | User | Label do nome de usuário solicitante |
| **cs1** | John Doe | Nome do solicitante |
| **cs2Label** | User ID | Label de ID do usuário |
| **cs2** |  | ID do usuário |
| **cs3Label** | Schedule | Label do nome da agenda |
| **cs3** | Minha agenda | Nome da agenda |
| **cs4Label** | Schedule ID | Label de ID da agenda |
| **cs4** |  | ID da agenda |
| **cs5Label** | Added reports | Label de relatórios adicionados |
| **cs5** | Settings **➔** Autenticação**➔** Autenticação de multifator **➔** Provedores | Label adicionada |
| **cs7Label** | Added users | Label de usuários adicionados |
| **cs7** | jdoe \- John Doe | Usuários adicionados para receber notificação |

### Agendamento de relatórios por email \- Atualização



| Chave | Exemplo | Descrição |
| --- | --- | --- |
| **dvc** | .20\.30 | IP do servidor senhasegura |
| **spid** |  | ID do processo no sistema operacional |
| **src** | .20\.10 | IP do usuário que realizou a operação |
| **suid** |  | ID do usuário que realizou a operação |
| **sname** | John Doe | Nome do usuário |
| **suser** | jdoe | Username do usuário |
| **spriv** | Administrador | Usuário privilegiado que realizou a operação |
| **msg** | Agendamento de relatórios \- Atualização | Operação que foi realizada |
| **requestMethod** | POST | Método HTTP usado pelo cliente |
| **act** | Agendamento de relatórios \- Atualização | Operação que foi realizada |
| **sourceServiceName** | Agendamento de relatórios | Categoria de operação que foi executada |
| **cs1Label** | User | Label do nome de usuário solicitante |
| **cs1** | John Doe | Nome do solicitante |
| **cs2Label** | User ID | Label de ID do usuário |
| **cs2** |  | ID do usuário |
| **cs3Label** | Schedule | Label do nome da agenda |
| **cs3** | Minha agenda | Nome da agenda |
| **cs4Label** | Schedule ID | Label de ID da agenda |
| **cs4** |  | ID da agenda |
| **cs5Label** | Added reports | Label de relatórios adicionados |
| **cs5** | Nenhum | Relatórios adicionados |
| **cs6Label** | Removed reports | Label de relatórios removidos |
| **cs6** | Nenhum | Relatórios removidos |
| **cs7Label** | Added users | Label de usuários adicionados |
| **cs7** | Nenhum | Usuários adicionados |
| **cs8Label** | Removed users | Label de usuários removidos |
| **cs8** | Nenhum | Usuários removidos |

### Agendamento de relatórios por email \- Exclusão



| Chave | Exemplo | Descrição |
| --- | --- | --- |
| **dvc** | .20\.30 | IP do servidor senhasegura |
| **spid** |  | ID do processo no sistema operacional |
| **src** | .20\.10 | IP do usuário que realizou a operação |
| **suid** |  | ID do usuário que executou a operação |
| **sname** | John Doe | Nome do usuário |
| **suser** | jdoe | Username do usuário |
| **spriv** | Administrador | Usuário privilegiado que realizou a operação |
| **msg** | Agendamento de relatórios \- Exclusão | Operação que foi realizada |
| **requestMethod** | POST | Método HTTP usado pelo cliente |
| **act** | Agendamento de relatórios \- Exclusão | Operação que foi realizada |
| **sourceServiceName** | Agendamento de relatórios | Categoria de operação que foi executada |
| **cs1Label** | User | Rótulo do nome de usuário solicitante |
| **cs1** | John Doe | Nome de usuário do solicitante |
| **cs2Label** | User ID | Etiqueta de ID do usuário |
| **cs2** |  | ID do usuário |
| **cs3Label** | Schedule | Rótulo do nome da programação |
| **cs3** | My schedule | Nome do agendamento |
| **cs4Label** | Schedule ID | ID de agendamento de etiquetas |
| **cs4** |  | Código de agendamento |

