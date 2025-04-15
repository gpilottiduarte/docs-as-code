# Uso de múltiplos saltos para acessar dispositivo final

## Caso de uso: Evitar o uso de múltiplos saltos de conexão a fim de acessar um dispositivo.

Neste documento, você encontra as recomendações necessárias para realizar um acesso sem a necessidade de utilizar múltiplos saltos a fim de acessar o dispositivo final.

### Solução
Para evitar latência e reduzir a visibilidade e o controle de segurança sobre as sessões secundárias, o ideal é que **o dispositivo final a ser acessado seja cadastrado no senhasegura** realizando assim um acesso direto eliminando a necessidade de múltiplos saltos.

Caso deseje utilizar múltiplos saltos, esteja ciente que utilizar o senhasegura neste formato causa as limitações aqui mencionadas:

* **Latência aumentada**: a cada salto o desempenho da rede fica comprometido e pode impactar nas operações.
* **Perda de controle e segurança**: após o primeiro salto o senhasegura não terá mais o controle ao que for realizado, ou seja, não haverá auditoria e controle das sessões seguintes.

:::(warning) (**Cuidado**)
O senhasegura não recomenda o uso de **mais de um** uso de Multihop na sessão. Embora o senhasegura gerencie o primeiro salto com eficiência, os saltos subsequentes não serão controlados pelo senhasegura, abrindo brechas e facilitando atividades não autorizadas.
:::
