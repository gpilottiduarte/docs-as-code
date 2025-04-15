# GET | Listar todos os usuários relacionados

Acesse informações de usuários relacionados no **Segura**.

## Pré-requisitos
* Autorização com permissão de **acesso** ao recurso **Usuários** concedida pelo administrador no **A2A**. 
Saiba mais em [Como gerenciar autorizações no A2A](/v4/docs/pt/how-to-manage-authorizations-in-a2a).


## Requisição


 <code><span style="color:orange"> GET</code></span> `/api/user/related`


### Exemplo de requisição

<code><span style="color:orange"> GET</code></span> `{{url}}api/user/related`  
  
  
  ## Resposta 

 ```json
HTTP/1.1 200 OK 
```
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "6 related users found",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "6 related users found",
        "erro": false,
        "cod_erro": 0
    },
    "relatedUsers": [
        {
            "id": "1",
            "name": "amandalices",
            "username": "alices"
        },
        {
            "id": "2",
            "name": "dleite",
            "username": "dleite"
        },
        {
            "id": "4",
            "name": "deboraleite",
            "username": "dleite"
        },
        {
            "id": "5",
            "name": "dleitef",
            "username": "dleite"
        },
        {
            "id": "6",
            "name": "deboraleiteferreira",
            "username": "dleite"
        },
        {
            "id": "8",
            "name": "duarte",
            "username": "paulopilotti"
        }
    ]
}
```
 
 ### Campos do corpo da resposta

    
<summary>&#8226; <code>relatedUsers</code> - <b>array de objetos</b> - Dados dos usuários relacionados.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>id</code> - <b>int</b> - Código único de identificação do usuário relacionado gerado automaticamente pelo Segura em <a href = "/v3-33/docs/pt/api-post-create-related-user">POST | Criar usuário relacionado</a>.</summary>
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>name</code> - <b>string</b> -  Nome atribuído ao usuário relacionado</summary>.

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>username</code> - <b>string</b> - Nome de identificação do usuário no Segura</summary>.

<br>



 ## Erros
 
 
<details>
<summary><b><span style="color:red">404</span> - Not Found</b>.</summary>

***
<b>Mensagem: "Resource sub not found"</b><br>

<p><b>Possível causa</b>: a URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: verifique a URL e garanta que todos os parâmetros estão corretos.</p>

* * *
    
</details>




<details>
    <summary><b><span style="color:red">500</span> - Internal Server Error</b>.</summary>

***
    
<b>Mensagem: "Unexpected error."</b><br>

<p><b>Possível causa</b>: o erro está no servidor Segura.<br>
        
<b>Solução</b>: contate o time de suporte para mais informações.</p>
    
 ***
<b>Mensagem: "You are not authorized to access this resource."</b>
<p><b>Possível causa</b>: você não possui autorização para acessar esse recurso.<br>
        
<b>Solução</b>: solicite ao administrador que revise sua permissão de acesso aos recursos do <b>Usuário</b> no <b>A2A</b>.</p>

* * *
</details>
     


<details>
<summary><b>Client authentication failed</b>.</summary>

*** 
   
<b>Mensagem: "Client authentication failed."</b>
    
<p><b>Possível causa</b>: falha na autenticação da sua aplicação com o servidor Segura.<br>
        
<b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token URL</code>, <code>Client ID</code> e <code>Client secret</code> e solicite um novo token de acesso.</p>
</details>
     
   

<details>
<summary><b>Invalid signature</b>.</summary>

*** 
    
<b>Mensagem: "Invalid signature"</b>
    
<p><b>Possível causa</b>: falha no reconhecimento da URL da aplicação cliente.
        
<b>Solução</b>: verifique a URL da aplicação cliente e envie a requisição novamente.</p>
* * *
</details>
     


<details>
    <summary><b>No route matched with those values</b>.</summary>
    
***   
    
<b>Mensagem: "No route matched with those values."</b>
   <p><b>Possível causa</b>: ausência do header de autorização na requisição de API.<br>
        
  <b>Solução</b>: solicite um novo token de acesso.</p>
* * *
</details>
 

<details>
    <summary><b> Request timed out</b>.</summary>
    
***
    
<b>Mensagem: "Request timed out."</b>
<p><b>Possível causa</b>: o tempo da requisição se esgotou. <br>
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor Segura.</p>
</details> 
     