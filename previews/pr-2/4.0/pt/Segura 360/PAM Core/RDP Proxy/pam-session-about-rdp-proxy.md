# RDP Proxy

O Segura RDP Proxy é um serviço disponível na porta 3389 através do protocolo RDP que auditará as conexões RDP alvo.

Ele media todas as funcionalidades disponíveis em uma conexão RDP comum, entre dispositivo Microsoft Windows, sem interferir na experiência do operador do usuário, mas com todas as garantias de segurança e auditoria do Segura.

Qualquer dispositivo que ofereça a conexão do protocolo RDP pode ser conectado, desde que esteja alinhado com os níveis de segurança oferecidos, enquanto o Segura atua como servidor (na comunicação entre a estação de trabalho do usuário com a instância Segura), ou como cliente (na comunicação entre a Segura com o dispositivo servidor alvo).

* Suporte para Windows RDP versão 5.2 e superior.
* Suporte para Microsoft®Windows®Server 2003 e superior.
* Suporte para Linux XRDP servers versão 0.9.x e superior.
* Suporte para RAIL session connection.

:::(warning) (**Atenção**)
Em ambientes Windows é importante criar políticas de segurança mais rigorosas, acesse o documento [Sobre configurações de segurança para RDP Proxy e RemoteApp](/v4/docs/pt/pam-session-about-security-settings-for-rdp-proxy-and-remoteapp), para melhor entendimento e realizar o download do guia completo.
:::

## Protocolos suportados

* RDP versões 5.2 ou superiores.

:::(info) (**Info**)
O Segura se autentica no dispositivo destino utilizando os protocolos nativos para a sessão solicitada.
:::