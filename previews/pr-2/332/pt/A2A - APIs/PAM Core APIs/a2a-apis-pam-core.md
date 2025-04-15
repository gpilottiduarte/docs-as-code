# APIs

Neste documento, você vai encontrar todas as informações sobre o que são, como funcionam e os principais casos de uso das **APIs** **PAM Core**.
## O que são as APIs Pam Core?
As **APIs PAM Core** fazem parte do módulo **A2A** do senhasegura. Elas são uma ferramenta baseada na arquitetura REST que permite consultar, criar, atualizar, ativar e inativar dispositivos, credenciais, informações protegidas, sessões proxy e chaves SSH.
## Funcionalidades
As funcionalidades das **APIs** **PAM Core** incluem:
  * [API de dispositivos](https://docs.senhasegura.io/v3-32/docs/pt/a2a-pam-core-devices-api): consultar um dispositivo ou uma lista com todos os dispositivos cadastrados, criar, atualizar, ativar ou inativar um dispositivo.
  * [API de credenciais](https://docs.senhasegura.io/v3-32/docs/pt/a2a-pam-core-credentials-api): consultar uma credencial ou uma lista com todas as credenciais cadastradas, criar, atualizar, ativar ou inativar uma credencial, e liberar a custódia de uma credencial. 
  * [API de informação protegida](/docs/pt/a2a-pam-core-protected-information-api): consultar, criar e inativar uma informação protegida.
  * [API de sessões proxy](https://docs.senhasegura.io/v3-32/docs/pt/api-proxy-sessions): criar uma URL autenticada de sessões da web e encerrar uma sessão proxy.
  * [API de chaves SSH](/v3-32/docs/pt/a2a-pam-core-ssh-keys-api): consultar uma lista de chaves SSH cadastradas como credenciais, criar ou atualizar uma credencial cadastrada como chave SSH e inativar uma chave SSH.


## Aplicabilidades
As **APIs PAM Core** podem ser usadas em vários cenários, como:
### **Integração com ferramentas de CMDB**
Automatize o gerenciamento de dispositivos e credenciais no senhasegura integrando-se com ferramentas de Banco de Dados de Gerenciamento de Configuração (CMDB). Nossas APIs permitem que as ferramentas de CMDB criem e gerenciem automaticamente dispositivos no senhasegura, eliminando a necessidade de configuração manual.
### **Integração com ferramentas de automação (RPA)**
Utilize ferramentas de Automação de Processos Robóticos (RPA), como o Zapier, para automatizar ações específicas em fluxos de trabalho. As APIs facilitam a interação com o senhasegura, permitindo a modificação de informações com base em eventos específicos de fluxo de trabalho.
### **Integração com aplicativos personalizados**
Ofereça suporte a clientes com equipes internas de desenvolvimento, permitindo que aplicativos personalizados interajam com o senhasegura, agilizando as operações diárias. As APIs do senhasegura permitem que aplicativos personalizados executem ações essenciais em nome do cliente dentro do sistema de Gerenciamento de Acesso Privilegiado (PAM).
## Configuração e uso das APIs PAM Core
Para utilizar as APIs com eficácia, é importante compreender os aspectos de autorização e autenticação, bem como as práticas recomendadas para requisições, respostas e possíveis erros.
### Autorização
Para começar, certifique-se de que o **PAM Core** esteja listado em **Recursos autorizados** no seu módulo **A2A**.  
Para mais informações sobre a autorização de uma aplicação, acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application).
  

### Autenticação
Seguindo a recomendação do senhasegura de utilizar o método de autenticação OAuth 2.0, cada requisição nas APIs deve usar o **Client ID** e o **Client secret** para solicitar um **token de acesso**.  
Para mais informações sobre a autenticação, acesse o documento sobre [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).
  

### Requisições e respostas
As requisições são feitas usando métodos HTTP como
`GET, POST, PUT, DELETE`
  
Os parâmetros incluem `id, name, username`, entre outros, e a depender do endpoint, podem ser passados como _path, body_ ou _query._
Por exemplo, para consultar um dispositivo listado no **PAM Core** e acessível à sua autorização, faça uma requisição `GET` para o endpoint a seguir:
`/iso/pam/device/[id]`
As respostas são retornadas em formato JSON, facilitando a análise e o gerenciamento de dados fornecidos pela API.
### Erros
  
A API retorna códigos de status HTTP padrão e inclui mensagens de erro no corpo da resposta para facilitar a compreensão e a resolução de problemas.  
Consulte a documentação de cada API para descrições detalhadas dos erros.
## Links para as documentações das APIs PAM Core
Para informações mais detalhadas e exemplos, consulte os documentos a seguir:  

[_API de dispositivos_](https://docs.senhasegura.io/v3-32/docs/pt/api-devices)
[_API de credenciais_](https://docs.senhasegura.io/v3-32/docs/pt/api-credentials)
[_API de informações protegidas_](/docs/pt/a2a-pam-core-protected-information-api)
[_API de proxy_](/v3-32/docs/pt/a2a-proxy-api)
[API de chaves SSH](/v3-32/docs/pt/a2a-pam-core-ssh-keys-api)
  

