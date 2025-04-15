# Terminal Proxy

O Segura Terminal Proxy é um serviço disponível na **porta 22** que opera sob o protocolo SSHv2, que auditará as conexões SSH e TELNET alvo e autentica o usuário do Segura usando a mesma conta que o usuário usa na interface web. 

Este login respeita o mesmo bloqueio de conta e as mesmas configurações MFA. O Terminal Proxy possui um terminal simplificado para consulta de credenciais e operações básicas para transferência de arquivos, mas seu principal objetivo é entregar a conexão ao dispositivo remoto.

:::(warning) (**Atenção**)
O Segura se autentica no dispositivo de destino utilizando os protocolos nativos da sessão solicitada. Entregando ao usuário uma sessão já autenticada, sem risco de expor a credencial usada.
:::

#### Protocolos suportados

* SSH.
* Telnet.
* SFTP.
* SCP.