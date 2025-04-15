# Sobre Proxy 2.0

Neste documento, você vai encontrar todas as informações sobre a tecnologia proxy, as particularidades do Proxy 2.0 e as novas funções implementadas pelo senhasegura.

## Tecnologias proxy
Referem-se a sistemas e servidores que atuam como intermediários entre um cliente (como um navegador web) e um servidor final (como um servidor web). A principal função de um proxy é receber requisições dos usuários e encaminhá-las ao servidor final, retornando as respostas de volta ao usuário.

## Particularidades

* Novos protocolos e bibliotecas atualizadas que gera o aumento da seguraça e eficiência das sessões.
* Para o multi-tenant é obrigatório utilizar o Proxy 2.0.
* Layout das aplicações mais agradável.
* Melhoria na conexão do Proxy RDP.

## Funcionalidades Proxy 2.0
O uso do Proxy 2.0 trás consigo novas funcionalidades exclusivas, como:

* **Mapa de calor da sessão**: na visualização do vídeo gravado ou durante o live stream, a linha do tempo apresenta os picos de interação do usuário durante a sessão, onde teve maior incidência de cliques e digitação. Esta funcionalidade está disponível para todos os tipo de sessões Web Proxy.
* **Gravação de áudio da sessão**: durante as sessões de Web RDP Proxy o áudio estará sendo transmitido e gravado, seja em sites de vídeos como Youtube ou até em vídeos chamadas. Sendo gravado o áudio de entrada (microfone / usuário falando) e áudio de saída (usuário escutando).
:::(Warning) (Atenção)
Em virtude da gravação de sessões em vídeo e áudio, é essencial que o cliente obtenha o consentimento explícito dos colaboradores para a realização dessas gravações. Adicionalmente, é obrigatório informar aos colaboradores, no início de cada sessão, que a mesma será gravada, abrangendo tanto o áudio quanto o vídeo. A configuração adequada da mensagem do banner é crucial para garantir que todos os participantes estejam devidamente informados e alinhados com as políticas de privacidade e conformidade.
:::
* **Suporte ao touchscreen**: as sessões Web Proxy terá suporte para os cliques provenientes do touch em tela através do navegador do dispositivo.
* **Autenticação com Kerberos**: o RDP Proxy agora suporta autenticação via Kerberos, protocolo renomado por sua segurança em comunicações entre clientes e servidores

:::(info) (**Info**)
Todas as funcionalidades presentes no proxy anterior não foram modificadas e as mesmas se aplicam para o Proxy 2.0 também.
:::
