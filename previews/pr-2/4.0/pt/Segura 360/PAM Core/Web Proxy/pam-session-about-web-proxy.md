# Web Proxy

O Web Proxy presente no módulo **PAM Core** é uma função disponibilizada pelo Segura onde os usuários podem utilizar alguns protocolos para iniciar sessões.

O Segura Web Proxy fornece todos os tipos de conectividade aos dispositivos alvo através de uma interface HTML5 com WebSockets que pode ser acessada por qualquer navegador moderno. Você não precisa instalar agentes na estação de trabalho do usuário operador.

Por estar em um navegador, as integrações não são as mesmas em clientes regulares dedicados de ponta a ponta. Mas os principais recursos são fornecidos por meios rápidos e práticos.

:::(warning) (**Atenção**)
O Segura autentica no dispositivo alvo utilizando os protocolos nativos da sessão solicitada, entregando ao usuário uma sessão já estabelecida, sem risco de exposição da credencial utilizada.
:::

Todas as características, utilizadas pelos clientes do protocolo padrão estão disponíveis nestas conexões. Algumas funcionalidades podem variar um pouco na usabilidade de rodar em um navegador da web, mas entregam os mesmos objetivos com sucesso.

Por ser um canal mais flexível, sem as limitações de clientes dedicados a protocolos exclusivos, o Segura Web Proxy permite sessões de proxy incluindo protocolos e ferramentas particulares, como os sites X11, VNC e HTTP/HTTPS.

## Protocolos Web suportados

* **SSH** e **TELNET**: com as mesmas funcionalidades do Segura Terminal Proxy.
* **VNC**: acesso protegido a dispositivos com suporte a VNC.
* **X11**: acesso protegido a dispositivos com suporte a X11.
* **Citrix VDA**: Acesso virtualizado a aplicativos e desktops em um ambiente controlado e gerenciado centralmente.
* **HTTP/HTTPS**: acesso autenticado a um site de destino através de um navegador incorporado e isolado.
* **Databases ODBC**: Acesso a bancos de dados usando o Open Database Connectivity (ODBC), permitindo que aplicativos se comuniquem e interajam com diversos tipos de bancos de dados de forma padronizada e independente.
* **RDP**: A pequena diferença entre o RDP Proxy está no upload e download de arquivos sem a possibilidade de compartilhar recursos da máquina de origem. Porém, com a mesma usabilidade para operar aplicativos remotos.