# GET | Listar um segredo de API por [identifier]

Acesse informações de  um segredo de API armazenado no **MySafe**.


## Pré-requisitos

* Permissão de acesso ao segredo de API

## Requisição


 <code><span style="color:orange"> GET</code></span> `api/mysafe/secretapi/[identifier]`


## Parâmetros de requisição
Envie o parâmetro abaixo no <b>path</b> da URL.

<summary><code>identifier</code> - <b>int</b> - <span style="color:red">obrigatório</span> - Código único de identificação do segredo de API.</summary>
<b>Nota</b>: esse valor é automaticamente atribuído pelo segredo de Segura em <a href = "/v4/docs/pt/api-post-create-api-secret">POST | Criar segredo de API</a> e é obtido na resposta da requisição <a href = "/v4/docs/pt/api-get-list-all-api-secrets">GET | Listar todos os segredos de APIs</a>.



### Exemplo de requisição

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/secretapi/3`.


## Resposta 

 ```json
HTTP/1.1 200 OK 
```
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Success",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Success",
        "erro": false,
        "cod_erro": 0
    },
    "api_secret_entity": {
        "identifier": "3",
        "name": "GCP1",
        "url": "https://gcp1.com",
        "client_secret": "hy7464g5v8ghy4d858jk7fds57t4tr",
        "client_id": "hb455f7g8fg9dfg8yt845bxxku",
        "identifier_code": "12534",
        "method": "get",
        "tags": "Cloud1",
        "notes": "Access details for this API secret",
        "users_allowed": [
            {
                "name": "alices",
                "can_edit": true
            }
        ],
        "groups_allowed": []
    }
}
```
 
 ### Campos do corpo da resposta

    
<summary>&#8226; <code>api_secret_entity</code> - <b>objeto</b> - Dados do segredo de API armazenado.</summary>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>identifier</code> - <b>string</b> - Código único de identificação do segredo de API.</summary>
 
<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>name</code> - <b>string</b> - Nome atribuído ao segredo de API.</summary>


<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>url</code> - <b>string</b> - URL do site onde o segredo de API está sendo usado.</summary>
 
 <br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>client_secret</code> - <b>string</b>  - O segredo de API usado para autenticar a aplicação.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>client_id</code> - <b>string</b> - ID da aplicação cliente.</summary>



<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>identifier_code</code> - <b>string</b> - String única definida pelo usuário para identificar o segredo de API.</summary>


 <br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>method</code> - <b>string</b> -  O método HTTP a ser usado para na chamada de API.</summary>

 <br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>notes</code> - <b>string</b> - Observações sobre o segredo da API.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>tags</code> - <b>string</b> - Palavras-chave associadas ao segredo de API.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>users_allowed</code> - <b>array de objetos</b> - Dados dos usuários com acesso ao segredo de API.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>groups_allowed</code> - <b>array de objetos</b> - Dados dos grupos com acesso ao segredo de API.</summary>



 ## Erros
 
    
<details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
<b>Mensagem: "1010: Unexpected identifier type"</b>
<p><b>Possível causa</b>: o <code>identifier</code> enviado não foi reconhecido como válido.<br></p>
<b>Solução</b>: verifique o valor do <code>identifier</code> e envie a requisição novamente.
  
* * *
<b>Mensagem: "1005: Api secret not found"</b>
<p><b>Possível causa</b>: segredo de API não encontrado.<br></p>
<b>Solução</b>: verifique o valor do <code>identifier</code> e envie a requisição novamente.

    
* * *
    
<b>Mensagem: "1006: User does not have access"</b>
<p><b>Possível causa</b>: usuário não possui acesso ao segredo de API.<br></p>

 ***
<b>Mensagem: "1009: Inactive Api secret"</b>
<p><b>Possível causa</b>: segredo de API inativo.<br></p>
 <b>Solução</b>: ative o segredo de API através do  <code><span style="color:orange"> POST</code></span> <code>api/mysafe/password/active[identifier]</code>.

 ***
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
    
<b>Mensagem: "No route matched with those values."</b>
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
    
<b>Mensagem: "An invalid response was received from the upstream server"</b>
    
<p><b>Possível causa</b>: o tempo da requisição se esgotou.
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor Segura.</p>
* * *
</details>

     