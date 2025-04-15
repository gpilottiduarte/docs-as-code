# Classificação de risco

A classificação de risco de certificados é uma escala que avalia e define uma nota para os certificados de acordo com os seguintes critérios:

- Algoritmo de criptografia
- Tamanho da chave de criptografia
- Algoritmo de assinatura
- Autoridade certificadora
- Data de expriração do certificado
- Quantidade de dispositivos utilizando o certificado
- Responsável pelo certificado
- Status do certificado

Para cada critério, o certificado pode ganhar ou perder pontos e o resultado final é a soma dos pontos que o certificado recebeu. Esta classificação permite a rápida avaliação dos riscos nos ambientes em que os certificados estão em uso.

## Classificação de segurança

| Pontuação | Classificação |
|---|---|
| Maior que 80  | <span style="color:#037255">**A**</span> |
| Entre 65 e 79 | <span style="color:#4ECC84">**B**</span> |
| Entre 50 e 64 | <span style="color:#F9DE3E">**C**</span> |
| Entre 35 e 49 | <span style="color:#FE9848">**D**</span> |
| Entre 25 e 34 | <span style="color:#FE9848">**E**</span> |
| Entre 0 e 24  | <span style="color:#F93E3E">**F**</span> |
| Menor que 0   | <span style="color:#F93E3E">**NC**</span> (Não Confiável) |

A classificação não restringe o uso dos certificados. Você pode definir se um certificado com nota baixa deve ser utilizado ou não em seus sistemas.

:::(warning) (Cuidado)
Não recomendamos a utilização de certificados com classificação baixa em ambientes produtivos.
:::
***
## Critérios de avaliação

A soma dos critérios abaixo gera um total que se enquadra em uma das faixas de pontuação, resultando na classificação de segurança final do certificado.

### Algoritmo de criptografia

| Tipo | Pontos |
|---|---|
| DSA | <span style="color:#F93E3E">**-100**</span> |
| Outros | **0** |

### Tamanho da chave de criptografia

**RSA**

| Tamanho | Pontos |
|---|---|
| 4096 bits     | <span style="color:#71EA90">**+30**</span> |
| 2048 bits     | <span style="color:#71EA90">**+20**</span> |
| 1024 bits     | <span style="color:#71EA90">**+10**</span> |
| < 1024 bits   | <span style="color:#F93E3E">**-100**</span> |

**EC/ECDSA**

| Tamanho | Pontos |
|---|---|
| 384 bits | <span style="color:#71EA90">**+40**</span> |
| 256 bits | <span style="color:#71EA90">**+25**</span> |
| 160 bits | <span style="color:#71EA90">**+5**</span> |
| < 160 bits | **0** |

### Algoritmo de assinatura

| Tipo | Pontos |
|---|---|
| SHA512 | <span style="color:#71EA90">**+30**</span> |
| SHA384 | <span style="color:#71EA90">**+20**</span> |
| SHA256 | <span style="color:#71EA90">**+10**</span> |
| Outros | **0** |

### Autoridade certificadora

| Tipo | Pontos |
|---|---|
| Possui CA | <span style="color:#71EA90">**+10**</span> |
| Self-signed | **0** |

### Data de expiração do certificado

| Valor | Pontos |
|---|---|
| Válido   | <span style="color:#71EA90">**+10**</span> |
| Expirado | <span style="color:#F93E3E">**-100**</span> |

### Quantidade de dispositivos utilizando o certificado

| Valor | Pontos |
|---|---|
| Entre 0 e 1 dispositivos | <span style="color:#71EA90">**+10**</span> |
| Entre 2 e 5 dispositivos | <span style="color:#71EA90">**+5**</span> |
| Mais que 5 dispositivos | **0** |

### Responsável pelo certificado

| Valor | Pontos |
|---|---|
| Possui responsável | <span style="color:#71EA90">**+10**</span> |
| Não possui responsável | **0** |

### Status do certificado

| Valor | Pontos |
|---|---|
| Revogado* | <span style="color:#F93E3E">**-100**</span> |
| Outros | **0** |

:::(Warning) (Cuidado)
O certificado é considerado revogado quando seu certificado intermediário ou raiz está revogado.
:::



