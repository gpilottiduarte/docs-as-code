# Sobre o Network Connector

O **Network Connector** é um módulo do Segura, que possibilita aos usuários realizar sessões em dispositivos localizados em redes que não possuem conectividade com o Segura, ou em redes com sobreposição de IPs.

Além disso, o **Network Connector** oferece suporte a todos os tipos de conexões disponíveis no Segura, tais como `RDP`, `SSH`, `Telnet`, `HTTP/HTTPS`, entre outros.

Essa solução é composta pelo **Network Connector *Server*** e pelo **Agent**.

:::(error) (Alerta)
O dispositivo que está com o agent instalado deve ser capaz de enxergar o Segura para que a conexão seja feita.
:::

:::(error) (Alerta)
Ao modificar o destino da solicitação para um túnel estabelecido pelo Agent, o Network Connector se torna incompatível com o uso de certificados. Isso ocorre porque, nesse contexto, os certificados dependem do destino da solicitação para executar uma das validações necessárias.
:::
