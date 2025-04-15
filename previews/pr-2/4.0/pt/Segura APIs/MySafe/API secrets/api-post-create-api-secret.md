# POST | Criar segredo de API

Crie um segredo de API no **MySafe**.



## Requisição

 <code><span style="color:orange"> POST</code></span> `api/mysafe/secretapi`


::: (Info) (Info)
Quando um segredo de API é adicionado ao **MySafe**, ele é automaticamente associado ao seu criador, identificando-o como seu proprietário.
:::

## Parâmetros de requisição
Envie os parâmetros abaixo no <b>body</b> da requisição.


* <summary><code>name</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Nome atribuído ao segredo de API.</summary>


<br>
* <summary><code>url</code> - <b>string</b> - <span style="color:red">obrigatório</span> - URL do site onde o segredo de API está sendo usado.</summary>


<br>
* <summary><code>client_id</code> - <b>string</b> - <span style="color:red">obrigatório</span> - ID da aplicação cliente.</summary>


<br>
* <summary><code>client_secret</code> - <b>string</b>  - O segredo de API usado para autenticar a aplicação.</summary>


<br>
* <summary><code>identifier_code</code> - <b>string</b> - String única definida pelo usuário para identificar o segredo de API.</summary>


<br>
* <summary><code>tags</code> - <b>string</b> - Palavras-chave associadas ao segredo de API.</summary>


 <br>
* <summary><code>notes</code> - <b>string</b> - Observações sobre o segredo da API.</summary>

 <br>
* <summary><code>method</code> - <b>string</b> -  O método HTTP a ser usado para na chamada de API.</summary>


<br>
* <summary><code>users_allowed</code> - <b>array de objetos</b> - Dados dos usuários com acesso ao segredo de API.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>username</code> - <b>string</b> - Nome do usuário com permissão de acesso ao segredo de API</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Permissão de edição. </summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: Se deixado vazio, usuários terão apenas permissão de visualização.</summary>

<br>    
:::(Warning) (Atenção)
Usuários  com permissão <code>can_edit</code> = <code>true</code> podem inativar o segredo de API.
:::

<br>
* <summary><code>groups_allowed</code> - <b>array de objetos</b> - Dados dos grupos com permissão de acesso ao segredo de API.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>name</code> - <b>string</b> - Nome do grupo com permissão de acesso ao segredo de API.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Permissão de edição. </summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: Se deixado vazio, membros do grupo terão apenas permissão de visualização.</summary>

<br>    
:::(Warning) (Atenção)
Membros de grupos  com permissão <code>can_edit</code> = <code>true</code> podem inativar o segredo de API.
:::


 ### Exemplo de requisição
 
  <code><span style="color:orange"> POST</code></span> `{{url}}api/mysafe/secretapi`

```json 
{
    "name": "GCP",
    "url": "https://gcp.com",
    "client_id": "gf455f7g8fb5dfg8fd545bffbv",
    "client_secret": "gf5464******g8fds",
    "identifier_code": "hyga125",
    "tags": "Cloud",
    "notes": "Access details",
    "method": "get",
     "users_allowed": [
        {
            "username" : "pduarte",
            "can_edit" : true
        }
    ],
    "groups_allowed": [
        {
            "name" : "Test group"
        }
    ]
}
```
  
  
  
  ## Resposta 

 ```json
HTTP/1.1 201 CREATED 
```
```json 
  {
    "code": 201,
    "response": {
        "status": 201,
        "message": "Api secret successfully registered",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Api secret successfully registered",
        "erro": false,
        "cod_erro": 0
    },
    "api_entity": {
        "identifier": "43",
        "name": "GCP",
        "url": "https://gcp.com",
        "client_secret": "gf5464******g8fds",
        "client_id": "gf455f7g8fb5dfg8fd545bffbv",
        "identifier_code": "hyga125",
        "method": "get",
        "tags": "Cloud",
        "notes": "Access details",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": true
            }
        ],
        "groups_allowed": [
            {
                "name": "Test group",
                "can_edit": false
            }
        ],
        "shared_error": []
    }
}
 ```
 
 ## Erros
 
 <details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
<b>Mensagem: "1001: Parameter 'name' was not informed!"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>name</code> do segredo de API não foi informado.<br></p>
<b>Solução</b>: informe o <code>name</code> do segredo de API e envie a requisição novamente.
  
* * *
    
<b>Mensagem: "1001: Parameter 'url' was not informed!"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>url</code> do segredo de API não foi informado.<br></p>
<b>Solução</b>: informe a <code>url</code> do segredo de API e envie a requisição novamente.
  
* * *

<b>Mensagem: "1001: Parameter 'client_id' was not informed!"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>client_id</code> do segredo de API não foi informado.<br></p>
    <b>Solução</b>: informe o <code>client_id</code> do segredo de API e envie a requisição novamente.

* * *
    

    
<b>Mensagem: "1001: Identifier already found in another API key of this user"</b>
<p><b>Possível causa</b>: o <code>identifier</code> informado já está cadastrado em outro segredo de API.<br></p>
<b>Solução</b>: informe um novo <code>identifier</code> do segredo de API e envie a requisição novamente.

* * *
</details>


<details>
    <summary><b><span style="color:red">500</span> - Internal Server Error</b>.</summary>

***
    
<b>Mensagem: "Unexpected error."</b><br>

<p><b>Possível causa</b>: o erro está no servidor Segura.<br>
        
<b>Solução</b>: contate o time de suporte para mais informações.</p>
    
 ***
 </details>
 
 <details>
    <summary><b>No route matched with those values.</b></summary>

 ***
    
<b>Mensagem: "No route matched with those values.."</b>
<p><b>Possíveis causas</b>: falha na autenticação da sua aplicação com o servidor Segura ou URL incorreta.<br>
        
<b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token URL</code>, <code>Client ID</code> e  <code>Client Secret</code> e solicite um novo token de acesso ou verifique e corrija a URL.
* * *
</details>
     
<details>
<summary><b>An invalid response was received from the upstream server
</b>.</summary>

*** 
   
<b>Mensagem: "An invalid response was received from the upstream server</b>
    
<p><b>Possível causa</b>: o servidor upstream pode estar demorando muito para responder, levando a um erro de timeout que é interpretado como uma resposta inválida pelo servidor proxy/gateway.<br>
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor Segura.</p>
***
</details>
     
   

<details>
<summary><b>The upstream server is timing out</b>.</summary>

*** 
    
<b>Mensagem: "The upstream server is timing out"</b>
    
<p><b>Possível causa</b>: o tempo da requisição se esgotou.
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor Segura.</p>
* * *
</details>
     


