# GET | Listar todos os segredos de API

Acesse informações de segredos de API armazenados no **MySafe**.



## Requisição


 <code><span style="color:orange"> GET</code></span> `api/mysafe/secretapi`

## Parâmetros de consulta
Envie os parâmetros abaixo como **query** na URL. 

* <summary><code>tag</code> - <b>string</b> - Filtra os segredos de API por tags associadas.</summary>
* <summary><code>identifier_code</code> - <b>string</b> - Filtra os segredos de API pelo identificador.</summary>



### Exemplos de requisição

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/secretapi` - Lista todos os segredos de API.

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/secretapi?tag=cloud` - Lista o(s) segredo(s) de API cadastrados com a `tag`= `cloud`.

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/password?identifier_code=12534` - Lista o(s) segredo(s) de API cadastrados com a `identifier_code`= `12534`.


  

 
## Resposta 

 ```json
HTTP/1.1 200 OK 
```
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "",
        "erro": false,
        "cod_erro": 0
    },
    "api_secret_on_list": [
        {
            "identifier": "3",
            "name": "GCP1",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "4",
            "name": "GCP",
            "need_justify": "1",
            "need_approval": "1",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "5",
            "name": "GCP1",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        }
    ]
}
```
 
 ### Campos do corpo da resposta

    
<summary>&#8226; <code>api_secrets_on_list</code> - <b>array de objetos</b> - Dados dos segredos de API armazenados.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>identifier</code> - <b>int</b> - Código único de identificação do segredo de API.</summary>
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>name</code> - <b>string</b> - Nome do segredo de API.</summary>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>can_view</code> - <b>string</b> - Permissão de visualização do segredo de API.</summary>
 
<br>   
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>can_write</code> - <b>string</b> - Permissão de edição do segredo de API.</summary>

 ## Erros
 
    
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
    
<b>Mensagem: "You are not authorized to access this resource."</b>
<p><b>Possíveis causas</b>: falha na autenticação da sua aplicação com o servidor Segura ou URL incorreta.<br>
        
<b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token URL</code>, <code>Client ID</code> e  <code>Client Secret</code> e solicite um novo token de acesso ou verifique e corrija a URL.
* * *
</details>
     
<details>
<summary><b>An invalid response was received from the upstream server
</b>.</summary>

*** 
   
<b>Mensagem: "An invalid response was received from the a seupstream server</b>
    
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
     


     