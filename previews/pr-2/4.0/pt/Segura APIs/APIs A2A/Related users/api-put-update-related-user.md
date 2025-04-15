# PUT | Atualizar usuário relacionado

Atualize um usuário relacionado no **Segura**.

## Pré-requisitos
* Autorização com permissão de **acesso** ao recurso **Usuários** concedida pelo administrador no **A2A**. 
Saiba mais em [Como gerenciar autorizações no A2A](/v4/docs/pt/how-to-manage-authorizations-in-a2a).

## Requisição

 <code><span style="color:blue"> PUT</code></span> `/api/user/related`


## Parâmetros de requisição
Envie os parâmetros abaixo no <b>body</b> da requisição.

* <summary><code>id</code> - <b>int</b> - <span style="color:red">obrigatório</span> - Código único de identificação do usuário relacionado.
<br>

* <summary><code>username</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Nome de identificação previamente cadastrado do usuário no Segura.</summary>
<br>

* <summary><code>name</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Nome atribuído ao usuário relacionado que está sendo criado.</summary>
<br>

  ### Exemplo de requisição
 <code><span style="color:blue"> PUT</code></span> `{{url}}/api/user/related`
```json 
{ 
    "id": 6,
    "username": "dleite",
    "name": "deboraleiteferreira"
}
```
  
  
  
  ## Resposta 

 ```json
HTTP/1.1 201 CREATED 
```
```json 
 {
    "code": 200,
    "response": {
        "status": 200,
        "message": "Related user successfully updated!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Related user successfully updated!",
        "erro": false,
        "cod_erro": 0
    },
    "relatedUsers": {
        "id": "6",
        "name": "deboraleiteferreira",
        "username": "dleite"
    }
}
 ```
 
 ## Erros
 
 <details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
<b>Mensagem: "1001: Parameter 'id' was not informed!"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>id</code> do usuário não foi informado.<br></p>
<b>Solução</b>: informe o <code>id</code> do usuário e envie a requisição novamente.

***
    
<b>Mensagem: "1001: Parameter 'username' was not informed!"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>username</code> Segura do usuário não foi informado.<br></p>
<b>Solução</b>: informe o <code>username</code> Segura do usuário e envie a requisição novamente.
  
* * *
    
 <b>Mensagem: "1001: Parameter 'name' was not informed!"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>name</code> do usuário não foi informado.<br></p>
<b>Solução</b>: informe o <code>name</code> que deseja cadastrar para o usuário e envie a requisição novamente.
  
* * *   

<b>Mensagem: "1005: User does not exist"</b>
<p><b>Possível causa</b>: o <code>username</code> informado não encontrou um usuário cadastrado no Segura.<br></p>
<b>Solução</b>: informe um <code>username</code> válido e envie a requisição novamente.
  

* * *


</details>

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
        
<b>Solução</b>: solicite ao administrador que revise sua permissão de acesso aos recursos do <b>Usuários</b> no <b>A2A</b>.</p>

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