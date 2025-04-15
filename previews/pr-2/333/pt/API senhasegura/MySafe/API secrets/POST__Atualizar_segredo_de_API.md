# POST | Atualizar segredo de API

Atualize um segredo de API no **MySafe**.

## Requisitos

* Permissão de edição do segredo de API.

## Requisição

 <code><span style="color:blue"> PUT</code></span> `api/mysafe/secretapi/update/[identifier]`



## Parâmetros de requisição
Envie os parâmetros que deseja atualizar no <b>body</b> da requisição.


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
* <summary><code>method</code> - <b>string</b> -  O método HTTP a ser usado na chamada de API.</summary>


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
 
  <code><span style="color:blue"> PUT</code></span> `{{url}}api/mysafe/secretapi/update/43

```json 
{
    "name": "GCP1",
    "url": "https://gcp1.com",
    "client_id": "hb455f7g8fg9dfg8yt845bxxku",
    "client_secret": "hy746**********t4tr",
    "identifier_code": "gcp7852",
    "tags": "Cloud1",
    "notes": "Access details for this API secret",
     "users_allowed": [
        {
            "username" : "alices",
            "can_edit" : true
        }
    ],
    "groups_allowed": []
}
```
  
  
  
  ## Resposta 

 ```json
HTTP/1.1 200 OK 
```
```json 
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Api secret updated successfully",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Api secret updated successfully",
        "erro": false,
        "cod_erro": 0
    },
    "api_entity": {
        "identifier": "5",
        "name": "GCP1",
        "url": "https://gcp1.com",
        "client_secret": "hy746**********t4tr",
        "client_id": "hb455f7g8fg9dfg8yt845bxxku",
        "identifier_code": "gcp7852",
        "method": "get",
        "tags": "Cloud1",
        "notes": "Access details for this API secret",
        "users_allowed": [
            {
                "username": "alices",
                "can_edit": true
            }
        ],
        "groups_allowed": [],
        "shared_error": []
    }
}
 ```
 
 ## Erros
 
 <details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
<b>Mensagem: "1005: Api secret not found"</b>
<p><b>Possível causa</b>: o parâmetro <code>identifier</code> informado não retornou nenhum segredo de API.<br></p>
<b>Solução</b>: informe um <code>identifier</code> válido e envie a requisição novamente.
  
* * *
    

</details>


<details>
    <summary><b><span style="color:red">500</span> - Internal Server Error</b>.</summary>

***
    
<b>Mensagem: "Unexpected error."</b><br>

<p><b>Possível causa</b>: o erro está no servidor senhasegura.<br>
        
<b>Solução</b>: contate o time de suporte para mais informações.</p>
    
 ***
 </details>
 
 <details>
    <summary><b>No route matched with those values.</b></summary>

 ***
    
<b>Mensagem: "No route matched with those values.."</b>
<p><b>Possíveis causas</b>: falha na autenticação da sua aplicação com o servidor senhasegura ou URL incorreta.<br>
        
<b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token URL</code>, <code>Client ID</code> e  <code>Client Secret</code> e solicite um novo token de acesso ou verifique e corrija a URL.
* * *
</details>
     
<details>
<summary><b>An invalid response was received from the upstream server
</b>.</summary>

*** 
   
<b>Mensagem: "An invalid response was received from the upstream server</b>
    
<p><b>Possível causa</b>: o servidor upstream pode estar demorando muito para responder, levando a um erro de timeout que é interpretado como uma resposta inválida pelo servidor proxy/gateway.<br>
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
***
</details>
     
   

<details>
<summary><b>The upstream server is timing out</b>.</summary>

*** 
    
<b>Mensagem: "The upstream server is timing out"</b>
    
<p><b>Possível causa</b>: o tempo da requisição se esgotou.
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
* * *
</details>
     


