# Sobre o Network Connector

O **Network Connector** é um módulo do senhasegura, que possibilita aos usuários realizar sessões em dispositivos localizados em redes que não possuem conectividade com o senhasegura, ou em redes com sobreposição de IPs.

Além disso, o **Network Connector** oferece suporte a todos os tipos de conexões disponíveis no senhasegura, tais como `RDP`, `SSH`, `Telnet`, `HTTP/HTTPS`, entre outros.

Essa solução é composta pelo **Network Connector *Server*** e pelo **Agent**.

:::(error) (Importante)
O dispositivo que está com o agent instalado deve ser capaz de enxergar o senhasegura para que a conexão seja feita.
:::

:::(error) (Importante)
Ao modificar o destino da solicitação para um túnel estabelecido pelo Agent, o Network Connector se torna incompatível com o uso de certificados. Isso ocorre porque, nesse contexto, os certificados dependem do destino da solicitação para executar uma das validações necessárias.
:::
