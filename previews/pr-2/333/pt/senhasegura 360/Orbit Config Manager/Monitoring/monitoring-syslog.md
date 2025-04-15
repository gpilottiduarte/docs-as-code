As mensagens de Syslog são baseadas no protocolo UDP através da porta 514, e possuem no máximo 1024 bytes de tamanho.

## Formato das Notificações

Todas as mensagens Syslog seguem um formato específico. Um exemplo de mensagem em formato Syslog pode ser:


```
$<$`<!-- -->`{=html}13$>$`<!-- -->`{=html}1 2018-06-18T17:49:41-03:00 vm-andrew-dev senhasegura 1426 - Autenticado com sucesso.

```
Essa mensagem pode ser dividida em duas partes: Cabeçalho e Valores.

O cabeçalho é composta com as informações de data, hora, hostname e a identificação do senhasegura, indicando que a mensagem é específica da solução.

Os valores, apresentam informações adicionais do evento, no formato chave\=valor.

* ***`<13>1`:*** PRI
* ***`218-06-18T17:49:41-03:00`:*** TIMESTAMP
* ***`vm-andrew-dev`:*** HOSTNAME
* ***`senhasegura`:*** AAP\-NAME
* ***`1426`:*** PROCID
* ***`Autenticado com sucesso.`:*** MSGID

## Prioridades

Os tipos de prioridade (PRI) estão categorizados de acordo com sua prioridade no padrão Syslog:



| **Prioridade** | Criticidade | Palavra\-chave | Descrição | Exemplos |
| --- | --- | --- | --- | --- |
| **0** | Emergency | emerg | O sistema está inutilizável. | Este nível não deve ser usado por aplicativos. |
| **1** | Alert | alert | Deverá ser providenciado algum tipo de ação logo de imediato. | Perda da conexão ISP primária. |
| **2** | Critical | crit | Condições críticas. | Uma falha no aplicativo principal do sistema. |
| **3** | Error | err | Condições de erro. | Um aplicativo excedeu seu limite de armazenamento de arquivos e as tentativas de gravação estão falhando. |
| **4** | Warning | warning | Pode indicar que um erro irá ocorrer se uma ação não for tomada. | Um sistema de arquivos não raiz tem apenas 2 GB restantes. |
| **5** | Notice | notice | Eventos anormais, mas não em condição de erro. |  |
| **6** | Informational | info | Mensagens de operação normal, que não requerem ação.tomada. | Um aplicativo foi iniciado, pausado ou encerrado com sucesso. |
| **7** | Debug | debug | Mensagens de depuração. |  |

Os eventos configurados no SYSLOG são:



| **ID** | Origem | Prioridade | Nome | Descrição |
| --- | --- | --- | --- | --- |
| **1** | COSE | notice (5\) | Senha visualizada | Uma senha foi visualizada por um usuário. |
| **2** | COSE | notice (5\) | Senha Alterada | Uma senha foi alterada manualmente por um usuário. |
| **3** | COSE | notice (5\) | Senha Expirada | Uma senha expirou e não pode ser automaticamente trocada. |
| **5** | COSG | notice (5\) | Informação Visualizada | Uma informação protegida é visualizada por um usuário. |
| **6** | COSG | notice (5\) | Informação Alterada | Uma informação protegida foi alterada por um usuário. |
| **7** | COSG | notice (5\) | Informação Expirada | Uma informação protegida expirou. |
| **8** | COEQ | warning (4\) | Perda de Conectividade | A aplicação perdeu a conectividade com um dispositivo. |
| **9** | COEQ | notice (5\) | Conectividade Restabelecida | A aplicação conseguiu se conectar a um dispositivo que estava sem conectividade. |
| **10** | COAU | notice (5\) | Comando Detectado \- Criticidade Baixa | Um comando auditado de baixa criticidade foi detectado. |
| **11** | COAU | notice (5\) | Comando Detectado \- Criticidade Média | Um comando auditado de média criticidade foi detectado. |
| **12** | COAU | notice (5\) | Comando Detectado \- Criticidade Alta | Um comando auditado de alta criticidade foi detectado. |
| **13** | COAC | notice (5\) | Solicitação de Acesso à Senha | Um usuário solicitou acesso a uma senha. |
| **14** | COAC | notice (5\) | Solicitação Aprovada | Uma solicitação de acesso à senha foi aprovada. |
| **15** | COAC | notice (5\) | Solicitação Reprovada | Uma solicitação de acesso à senha foi reprovada. |
| **16** | COSS | notice (5\) | Sessão Iniciada | Um usuário iniciou uma sessão. |
| **17** | COSS | notice (5\) | Sessão Finalizada | Um usuário finalizou uma sessão. |
| **18** | COBA | notice (5\) | Backup Efetuado | O backup foi efetuado corretamente. |
| **19** | COBA | error (3\) | Erro no Backup | Ocorreu um erro ao efetuar o backup. |
| **20** | COTR | error (3\) | Erro na Troca de Senha | Ocorreu erro ao trocar uma senha. |
| **21** | COTR | notice (5\) | Troca Executada | Senha trocada com sucesso. |
| **22** | CORE | info (6\) | Senha Confirmada | A reconciliação validou a senha. |
| **23** | CORE | error (3\) | Senha Inválida | A senha armazenada no cofre é inválida. |
| **24** | COTR | info (6\) | Ativação Executada | Usuário ativo com sucesso. |
| **25** | COTR | error (3\) | Erro na Ativação | Ocorreu um erro ao ativar o usuário. |
| **26** | CONO | info (6\) | Relatorio diário de troca de senhas | Validação das trocas das senhas. |
| **27** | CONO | info (6\) | Pouco Espaço em Disco \- Criticidade Baixa | Ao atingir 70% do total do espaço em disco. |
| **28** | CONO | notice (5\) | Pouco Espaço em Disco \- Criticidade Média | Ao atingir 80% do total do espaço em disco. |
| **29** | CONO | warn (4\) | Pouco Espaço em Disco \- Criticidade Alta | Ao atingir 90% do total do espaço em disco. |
| **30** | CONO | info (6\) | Espaço em Disco \- Notificação diária | Status do espaço em disco diário. |
| **31** | COSS | warn (4\) | Comando detectado \- Bloquear e interromper sessão | Um comando auditado, configurado como proibido e sujeito a interrupção de sessão, foi executado. |
| **32** | COSS | notice (5\) | Comando detectado \- Bloquear | Um comando auditado, configurado como proibido, foi executado. |
| **33** | COSS | info (6\) | Comando detectado \- Permitir | Um comando auditado foi executado. |
| **34** | COSS | warn (4\) | Arquivo de sessão modificado | Um arquivo de sessão foi modificado. |
| **35** | COSE | notice (5\) | Configuração do dono da credencial | O dono da credencial foi configurado. |
| **36** | COAT | notice (5\) | Audit trail | Trilha de auditoria. |
| **37** | AUTH | notice (5\) | Mensagens de autenticação | Mensagens de autenticação do senhasegura. |
| **38** | CONO | warn (4\) | Uso de CPU – Alto | A utilização de CPU pela aplicação está em nível alto. |
| **39** | CONO | critical (2\) | Uso de CPU \- Crítico | A utilização de CPU pela aplicação está em nível crítico. |
| **40** | CONO | warn (4\) | Consumo de memória \- Alto | O consumo de memória pela aplicação está em nível alto. |
| **41** | CONO | critical (2\) | Consumo de memória \- Crítico | O consumo de memória pela aplicação está em nível crítico. |
| **42** | COOF | info (6\) | Aplicação iniciada | A aplicação senhasegura foi iniciada. |
| **43** | COOF | info (6\) | Aplicação finalizada | A aplicação senhasegura foi finalizada. |
| **44** | COOF | info (6\) | Uso credencial para acesso à rede | Uma credencial foi utilizada para acesso à rede. |
| **45** | COOF | info (6\) | Nova versão do senhasegura.go | Há uma nova versão do senhasegura.go disponível. |
| **46** | COOF | info (6\) | Versão do senhasegura.go aprovada | Há uma versão do senhasegura.go aprovada. |
| **47** | COOF | info (6\) | Versão do senhasegura.go inativada | Há uma versão do senhasegura.go inativada. |
| **48** | COOF | info (6\) | Download de versão do senhasegura.go realizado | Foi realizado o download de uma versão do senhasegura.go. |
| **49** | COOF | info (6\) | Versão do senhasegura.go instalada | Foi instalada uma versão do senhasegura.go. |
| **50** | CRTC | notice(5\) | Alerta de expiração do certificado: 30 dias | Alguns certificados expiram em até 30 dias. |
| **51** | CRTC | warn (4\) | Alerta de expiração do certificado: 7 dias | Alguns certificados expiram em até 7 dias. |
| **52** | CRTC | error (3\) | Alerta de expiração do certificado: 1 dia | Alguns certificados expiram em até 1 dia. |
| **53** | CRTC | notice(5\) | Criaçao de certificado | Um certificado foi criado. |
| **54** | CRTC | notice(5\) | Renovação de certificado | Um certificado foi renovado. |
| **55** | CRTC | notice(5\) | Revogação de certificado | Um certificado foi revogado. |
| **56** | COSS | info(6\) | Texto indexado da sessão | Um texto foi indexado. |
| **57** | COSS | info(6\) | Gerar vídeo para download | Um vídeo foi gerado para download. |
| **58** | CRTC | notice(5\) | Solicitado visualização de senha | Uma visualização de senha foi solicitada. |
| **59** | CRTC | notice(5\) | Visualização de senha de certificado | A senha de um certificado foi vista. |
| **60** | COOF | notice(5\) | Workstation aprovada | Uma workstation foi aprovada para usar o senhasegura.go. |
| **61** | COOF | notice(5\) | Cadastro de workstation | Uma workstation solicitou o uso do senhasegura.go. |
| **62** | COOF | notice(5\) | Cadastro de usuário | Um novo usuário de workstation foi aprovado para usar o senhasegura.go. |
| **63** | COOF | notice(5\) | Utilização do UAC | Um programa solicitou elevação usando o Microsoft UAC usando senhasegura.go. |
| **65** | COOF | notice(5\) | Visualizar senha | Uma credencial foi solicitada e vista usando senhasegura.go. |
| **66** | COOF | notice(5\) | Copiar senha | Uma credencial foi solicitada e copiada usando senhasegura.go. |
| **67** | COOF | notice(5\) | Runas | Um programa foi executado usando senhasegura.go. |
| **68** | COOF | notice(5\) | Macro | Uma automação de usuário foi executada usando senhasegura.go. |
| **69** | COOF | notice(5\) | Painel de controle | Um applet de painel de controle foi executado usando senhasegura.go. |
| **70** | COOF | notice(5\) | Adaptador de rede | Um adaptador de rede foi solicitado usando senhasegura.go. |
| **71** | COOF | notice(5\) | Compartilhamento de rede | Uma pasta de rede foi acessada usando senhasegura.go. |
| **72** | COOF | notice(5\) | Desinstalação | O senhasegura.go foi desinstalado por decisão do usuário. |
| **73** | COOF | notice(5\) | Ficar online | O senhasegura.go ficou online por decisão do usuário. |
| **74** | COOF | notice(5\) | Ficar offline | O senhasegura.go ficou offline por decisão do usuário. |
| **75** | COOF | notice(5\) | Alerta | O senhasegura.go enviou um alerta. Alguma situação em sua estação de trabalho precisa de atenção e pode afetar o uso do senhasegura.go. |
| **76** | CRTC | notice(5\) | Alerta de expiração do certificado: 90 dias | Alguns certificados expiram em até 90 dias. |
| **77** | CRTC | notice(5\) | Alerta de expiração do certificado: 60 dias | Alguns certificados expiram em até 60 dias. |
| **78** | CRTC | notice(5\) | Alerta de expiração do certificado: 15 dias | Alguns certificados expiram em até 15 dias. |
| **79** | CRTC | notice(5\) | Alerta de expiração do certificado: Hoje | Alguns certificados expiram hoje. |
| **80** | CRTC | notice(5\) | Vínculo de certificado com dispositivo | Um certificado foi vinculado a um dispositivo. |
| **81** | CRTC | notice(5\) | Download | Um usuário realizou o donwload de um certificado. |
| **82** | CRTC | notice(5\) | Gerenciamento de request | Uma solicitação foi aprovada ou negada. |
| **83** | CRTC | notice(5\) | Gerenciamento de perfil de publicação | Um perfil de publicação foi criado ou alterado. |
| **84** | CRTC | notice(5\) | Gerenciamento de certificado | Uma ação foi realizada em um certificado. |
| **85** | COOF | notice(5\) | Erro para recuperar credencial | Um erro ocorreu ao recuperar uma credencial. |
| **86** | USBH | notice(5\) | Acessos em período não usual | Alguns acessos ocorreram em horário incomum. |
| **87** | USBH | notice(5\) | Acessos com duração não usual | Alguns acessos ocorreram com uma duração incomum. |
| **88** | USBH | notice(5\) | Acesso não usual | Um usuário realizou um acesso incomum. |
| **89** | COOF | notice(5\) | Verificação de diretório e arquivo \- Inclusão |  |
| **90** | COOF | notice(5\) | Verificação de diretório e arquivo \-Exclusão |  |
| **91** | COOF | notice(5\) | Verificação de diretório e arquivo \-Alteração |  |

### Alertas do Orbit



| **ID** | Origem | Prioridade | Nome | Descrição |
| --- | --- | --- | --- | --- |
| **336\.001** | Orbit | alert(1\) | Orbit task create | Criação de tarefa do Orbit. |
| **336\.002** | Orbit | alert(1\) | Orbit task execution success | Tarefa do Orbit executada com sucesso. |
| **336\.003** | Orbit | alert(1\) | Orbit task execution error | Tarefa do Orbit executada com erro. |
| **336\.004** | Orbit | alert(1\) | Orbit log operation | Operação de log. |
| **336\.500** | Orbit | alert(1\) | Orbit alert report | Informação de alerta do Orbit. |
| **336\.501** | Orbit | alert(1\) | Orbit incident report | Informação de incidente do Orbit. |

  


### Outros Alertas



| ID | Prioridade | Nome | Descrição |
| --- | --- | --- | --- |
| 1695\.001 | notice(5\) | User login | Usuário fez login |
| 1695\.002 | notice(5\) | User logout | Usuário fez logout |
| 1695\.003 | notice(5\) | Session expired | Sessão do usuário expirou |
| 1695\.010 | notice(5\) | I18N\_REGISTER\_TWOFACTOR\_TOKEN | Token de autenticação de dois fatores foi registrado |
| 1695\.011 | notice(5\) | I18N\_VALIDATE\_TWOFACTOR\_TOKEN | Token de autenticação de dois fatores foi validado |
| 1695\.012 | notice(5\) | I18N\_VALIDATE\_TWOFACTOR\_TOKEN | Token de autenticação de dois fatores foi validado |
| 1695\.013 | notice(5\) | I18N\_DELETE\_TWOFACTOR\_TOKEN | Token de autenticação de dois fatores foi excluído |
| 1695\.014 | notice(5\) | I18N\_DELETE\_TWOFACTOR\_TOKEN | Token de autenticação de dois fatores foi excluído |

## Valores

O valor da mensagem é um formato definido como `chave = valor`, separados por espaço. As chaves têm o mesmo nome do formato **[Common Event Format (CEF)](https://www.splunk.com/en_us/blog/tips-and-tricks/common-event-format-add-on.html#:~:text=The%20common%20event%20format,formatted%20as%20key%2Dvalue%20pairs.)**. As utilizadas pelo senhasegura são:



| **Chave** | Descrição | Eventos |
| --- | --- | --- |
| **act** | Ação relacionada ao evento. | Todos |
| **dhost** | Hostname do dispositivo afetado pelo evento. | , 2, 3, 8, 16, 17, 20, 21 |
| **dst** | IP do dispositivo de destino do evento. | , 2, 3, 8, 16, 17, 20, 21 |
| **duid** | ID da credencial relacionada no evento. | , 2, 3, 13, 14, 15, 16, 17, 20, 21 |
| **duser** | Username da credencial relacionada no evento. | , 2, 3, 13, 14, 15, 16, 17, 20, 21 |



| **Chave** | Descrição | Eventos |
| --- | --- | --- |
| **msg** | Detalhes adicionais do evento. | Todos |
| **requestMethod** | Método utilizado para acesso. | Todos |
| **sname** | Nome do usuário no senhasegura que gerou o evento. | Todos |
| **spid** | ID do processo onde o evento foi gerado. | Todos |
| **spriv** | Tipo do usuário no senhasegura que gerou o evento. | Todos |
| **suid** | ID do usuário no senhasegura que gerou o evento. | Todos |
| **suser** | Username do usuário que gerou o evento. | Todos |

