# APIs

Neste documento, você vai encontrar todas as informações sobre o que são, como funcionam e os principais casos de uso das **APIs MySafe**.

## O que são as APIs MySafe?
As **APIs MySafe** foram desenvolvidas para fornecer acesso e gerenciamento programático de dados corporativos pessoais e de equipe armazenados no **MySafe**, garantindo a manutenção da integridade e confidencialidade das informações. Operando como uma solução baseada em REST, elas oferecem recursos de integração com aplicações terceiras para realização de consulta, criação, atualização, ativação e inativação de senhas, anotações e segredos de API. 


## Funcionalidades
As funcionalidades das **APIs MySafe** incluem:


* **API de senhas**: acesse uma ou uma lista de senhas salvas; crie, atualize, ative e inative senhas.

* **API de anotações**: acesse uma ou uma lista de anotações salvas; crie, atualize, ative e inative anotações.

* **API de segredos de API**: acesse um ou uma lista de segredos de API salvos; crie, atualize, ative e inative segredos de API.

## Aplicabilidades

As **APIs MySafe** funcionam como uma ponte para integração com aplicativos de terceiros, permitindo que os desenvolvedores acessem programaticamente os itens armazenados dentro do **MySafe**. A principal função dessas APIs é facilitar esse acesso, e garantir todos os benefícios que o **MySafe** proporciona. São eles:


### Proteção contra vazamento de dados

O **MySafe** desempenha um papel crucial na proteção de senhas, anotações e segredos de API, além de prevenir vazamentos de informações sensíveis. Ao adotar essa solução, as organizações podem fortalecer suas defesas contra ameaças cibernéticas e garantir a confidencialidade de dados críticos.


### Colaboração segura em equipe


Além do armazenamento seguro, o **MySafe** proporciona uma maneira segura de compartilhar dados entre membros da equipe. Isso promove uma colaboração eficiente, mantendo o controle sobre quem tem acesso a informações específicas.




### Gestão de acesso a informações privilegiadas


O **MySafe** oferece recursos avançados para controlar e gerenciar o acesso a informações privilegiadas. Essa funcionalidade garante que apenas usuários autorizados possam acessar dados confidenciais, reforçando as políticas de segurança da organização.


## Configuração e uso das APIs MySafe

Para utilizar as APIs de maneira eficaz, é importante compreender os aspectos de autorização e autenticação, bem como as práticas recomendadas para requisições, respostas e possíveis erros.

### Autorização

A autorização para as **APIs MySafe** é feita diretamente no módulo.
Para mais informações, acesse o documento sobre [Como adicionar uma autorização de chave de acesso](/v3-32/docs/pt/mysafe-how-to-add-an-access-key-authorization).

### Autenticação

A autenticação nas **APIs MySafe** é feita utilizando o método de autenticação OAuth 2.0. Para iniciar este processo, é necessário fornecer o **Client ID** e o **Client Secret**, além de obter o token de autenticação deles a partir do endpoint:

```
GET /api/oauth2/token
```

Para mais informações sobre como obter o **Client ID** e o **Client Secret**, acesse o documento sobre [Como visualizar uma autorização de chave de acesso](/v3-32/docs/pt/mysafe-how-to-view-an-access-key-authorization).

### Requisições e respostas

As requisições são feitas usando métodos HTTP como *GET, POST* e *PUT*. Os parâmetros incluem `identifier`, `name`, `username`, `tags`, entre outros.

Por exemplo, para consultar uma senha armazenada no **MySafe**, faça uma requisição para o endpoint a seguir:


```
GET /api/mysafe/password/[identifier]
```


As respostas são retornadas em formato JSON, facilitando a análise e o gerenciamento de dados fornecidos pela API.

### Erros
A API retorna códigos de status HTTP padrão e inclui mensagens de erro no corpo da resposta para facilitar a compreensão e a resolução de problemas.
Consulte a documentação de cada API para descrições detalhadas dos códigos de erro.

## Links para as documentações das APIs MySafe

Para informações mais detalhadas e exemplos, consulte os documentos a seguir:



* [API de senhas](/v3-32/docs/pt/mysafe-apis-passwords)

* [API de anotações](/v3-32/docs/pt/mysafe-apis-notes)

* [API de segredos de API](/v3-32/docs/pt/mysafe-apis-secrets-api)