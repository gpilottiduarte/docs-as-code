# Códigos de retorno e resoluções

A tabela a seguir lista todos os códigos de retorno que são retornados nas APIs REST.

## Códigos de retorno

| Código de retorno | Número do código | Decscrição |
| --- | --- | --- |
| Success | 200 | A requisição foi bem-sucedida. A mensagem exata depende do método de requisição usado. |
| Created | 201 | A requisição foi realizada e resultou na criação de um novo recurso. A mensagem exata depende do método de requisição usado.|
| No Content | 204 | O servidor processou a requisição com sucesso e não retornou nenhum conteúdo (nenhum *response body*). Esse código é comumente retornado por requisições do tipo `DELETE`. |
| Bad Request | 400 | A requisição não foi compreendida pelo servidor devido a um erro de sintaxe. A mensagem exata depende do método de requisição usado. |
|  Unauthorized|  401| A requisição necessita de autenticação do usuário. |
| Forbidden | 403 | O servidor recebeu e compreendeu a requisição, mas não pôde realizá-la.  |
| Internal Server Error | 500 | O servidor encontrou uma condição inesperada que impediu a realização da requisição. |


## Resolução de erros

Essa seção inclui informações sobre a resolução de erros que podem ocorrer ao tentar fazer uma requisição na **API de credenciais**.

### 400 Bad Request

#### Mensagem: 
Credential not found

#### Solução:
Verifique se os valores dos parâmetros usados para buscar pela credencial estão corretos e envie a requisição novamente.

### 400 Bad Request

#### Mensagem: 
`"1004: The device's hostname was not informed"`

#### Solução:
O parâmetro obrigatório `hostname` não foi informado. Insira o valor do `hostname` do dispositivo e envie a requisição novamente.

:::(Info) (Info)
Uma mensagem similar a essa será retornada sempre que um parâmetro obrigatório para a requisição não for informado. Solucione o problema informando o valor e reenviando a requisição.
:::

### 400 Bad Request

#### Mensagem: 
`"1017: Credential inactive"`

#### Solução:
Não é necessário realizar nenhuma ação, pois a credencial que você está tentando inativar já está inativa. 

### 400 Bad Request

#### Mensagem: 
`"1017: Credential is already active"`

#### Solução:
Não é necessário realizar nenhuma ação, pois a credencial que você está tentando ativar já está ativa. 

### 400 Bad Request

#### Mensagem: 
`"1009: No access to credential"`

#### Solução:
Se sua autorização não possui permissão para acessar essa credencial, revise a autorização para adicionar a permissão de consulta à credencial desejada.

### Client authentication failed

#### Mensagem: 
`Error: Client authentication failed` 

#### Solução:
Esse erro é ocasionado pela falha de autenticação da sua aplicação. Verifique e corrija os parâmetros **Client ID** e **Client secret** e solicite um novo token de acesso.

### 500 Internal Server Error

#### Mensagem: 
`Internal Server Error` 

#### Solução:
O erro está no nosso servidor. Contate o time de suporte para mais informações.