# Cadastro de requisição

Este artigo fornece descrições dos campos do formulário **Cadastro de requisição**.
:::(Info) (Info)
Caminho para acessar: **Certificate Manager > Certificados > Requisições > Exibir ações > Novo**.
:::


## Aba Geral
|Item|Descrição|
|-|-|
|**Tipo de certificado**| **DV SSL** - verificação e validação do domínio. **OV SSL** - verificação e validação do nome, documentação e endereço físico. **EV SSL** - verificação e validação completa do domínio, nome, registro, endereço físico e operações atuais.|
|**Tipo de domínio**|**Domínio único** - emitido para proteger um único domínio. **Domínios múltiplos** - emitido para proteger vários domínios em um único certificado. **Wildcard** - emitido para proteger um domínio principal e todos os seus subdomínios ilimitados.|
|**Organização**|A organização das configurações do Certificate Manager.|
|**Nome comum**|O domínio/entidade que você deseja proteger com o certificado.|
|**Validade (em dias)**|O período de validade do certificado.|  
**Gerar certificados aleatórios com esse CN?**|Habilita a geração de múltiplos certificados aleatórios com o CN.
**Quantidade de certificados**|Definição de quantos certificados serão gerados a partir do CN. O número máximo de certificados são 500.
|**SAN (Subject Alternative Name)**| A extensão SAN permite incluir múltiplos nomes alternativos (domínios, subdomínios, endereços IP, identificadores de e-mail) em um único certificado digital.|
|**Tags**|Marcadores de identificação.|
|**Algoritmo de criptografia**|A escolha entre **RSA** ou **DSA** depende das necessidades de segurança e padrões adotados pela empresa.| 
|**Tamanho da chave criptográfica**|Número de bits que compõem a chave: **1024** bits, **2048** bits, ou **4096** bits.|
|**Algoritmo de assinatura do certificado**|Algoritmos criptográficos utilizados para assinar digitalmente certificados digitais: **SHA-256**, **SHA-384** ou **SHA-512**.|
|**Senha de armazenamento**|Essa senha restringe a visualização do certificado apenas aos usuários com a senha. São permitidas senhas com até 72 caracteres, letras maiúsculas e minúsculas, números e os símbolos ```! % @ # ^ * _```|
|**Senha de revogação**|Essa senha restringe a ação de revogar certificados somente aos usuários que possuem a senha. São permitidas senhas com até 72 caracteres, letras maiúsculas e minúsculas, números e os símbolos ```! % @ # ^ * _```|
|**Gerar uma senha**|Esse botão gera uma senha instantânea para o usuário. |

## Aba Configurações adicionais
Os campos dessa aba são informativos para o nosso sistema. As informações não têm impacto junto à CA, mas auxiliam na identificação do certificado dentro do senhasegura.

|Item|Descrição|
|-|-|
|**Projeto**|Nome do projeto do certificado.|
|**IP Externo**|IP externo do certificado.|
|**IP ou hostname**|IP ou hostname do certificado.|
|**Motivo**|Justificativa para solicitar a requisição (até 1024 caracteres).|
|**Descrição**|Descrição da requisição (até 512 caracteres).|
|**Ativar log detalhado de assinatura**|Se marcado, ativará a geração de log detalhado. **Funciona somente para a CA da Microsoft.**|
|**Auto-assinado?**|Se **Sim**, criará uma assinatura padrão para o certificado. Marque 'sim' apenas se você conhece e confia no dispositivo que assinará o certificado.|
|**Escolha a CA**|Autoridade Certificadora que assinará o certificado.|
|**Responsável pelo request**|Usuário responsável pela requisição. Deve ser um usuário cadastrado no senhasegura.|

## Aba Ambiente
|Item|Descrição|
|-|-|
|**Ambiente**|Ambientes onde o certificado será aplicado.|

## Aba Sistema
|Item|Descrição|
|-|-|
|**Sistema**|Sistemas onde o certificado será aplicado.|
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).