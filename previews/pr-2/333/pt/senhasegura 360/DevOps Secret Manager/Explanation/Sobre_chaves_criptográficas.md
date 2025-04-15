# Sobre chaves criptográficas

Chaves criptográficas desempenham um papel crucial na segurança da informação, sendo fundamentais para a implementação de algoritmos de criptografia. Elas são componentes essenciais para garantir a confidencialidade, integridade, autenticidade e, em alguns casos, a não repúdio das informações.

Existem dois tipos principais de chaves criptográficas: chaves simétricas e chaves assimétricas.

1. **Chaves Simétricas:** utilizam a mesma chave para cifrar e decifrar dados. Ambas as partes envolvidas na comunicação devem possuir a mesma chave secreta.
2. **Chaves Assimétricas (ou de Par de Chaves):** utilizam um par de chaves, uma pública e outra privada. A chave pública é compartilhada, enquanto a chave privada é mantida em segredo.

A escolha entre chaves simétricas e assimétricas muitas vezes depende dos requisitos específicos do sistema. Frequentemente, sistemas utilizam uma combinação de ambos para aproveitar as vantagens de cada abordagem. O gerenciamento seguro das chaves é crucial para garantir a eficácia da criptografia e a proteção das informações sensíveis.

No senhasegura **DevOps Secret Manager**, você encontrará opções tanto de chaves assimétricas como simétricas.

Para as chaves simétricas, o senhasegura disponibiliza os seguintes protocolos:

* **AES** é um algoritmo que opera em blocos fixos de dados e suporta diferentes tamanhos de chave. No senhasegura, você tem a opção de usar a criptografia AES com tamanhos de chave de 128 e 256 bits.

Para chaves assimétricas, o senhasegura disponibiliza os seguintes protocolos:

* **RSA** é um algoritmo que baseia sua segurança na dificuldade de fatorar o produto de dois números primos grandes. A chave pública consiste em dois valores: um número inteiro n (geralmente chamado de módulo) e um expoente público (geralmente chamado de e). A chave privada consiste em dois valores diferentes: o mesmo número inteiro n e um expoente privado (geralmente chamado de d). Os valores específicos de n, e e d são calculados de forma que certas propriedades matemáticas sejam satisfeitas. No senhasegura, você tem a opção de usar a criptografia RSA com tamanhos de chave de `2048`, `3072` e `4096` bits.
* **ECDSA**, é um algoritmo que utiliza a matemática de curvas elípticas sobre corpos finitos, onde essas curvas são representadas por equações matemáticas específicas e oferecem propriedades criptográficas que as tornam adequadas para o uso em algoritmos de criptografia. O senhasegura oferece as variantes `p256`, `p384` e `p521`, onde cada número se refere ao tamanho da curva elíptica.