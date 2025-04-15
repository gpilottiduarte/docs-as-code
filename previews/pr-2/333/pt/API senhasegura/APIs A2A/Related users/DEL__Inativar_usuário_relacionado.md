# DEL | Inativar usuário relacionado

Inative um usuário relacionado no **senhasegura**.

## Requisitos
*  Autorização com permissão de **acesso** ao recurso **Usuários** concedida pelo administrador no **A2A**. 
Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.
* Usuário relacionado ativo.

## Requisição


  <code><span style="color:red"> DEL</code></span> `/api/user/related/[id]`


## Parâmetros de requisição



Envie o parâmetro abaixo no <b>path</b>  da URL.

<summary><code>id</code> - <b>int</b> - <span style="color:red">obrigatório</span> - Código único de identificação do usuário relacionado.</summary>
<b>Nota</b>: Esse valor é automaticamente atribuído pelo senhasegura em <a href="/v3-33/docs/pt/api-post-create-related-user">POST | Criar usuário relacionado</a> e é obtido na resposta da requisição <a href="/v3-33/docs/pt/api-get-list-all-related-users">GET | Listar todos os usuários relacionados</a>.



 ### Exemplo de requisição


<code><span style="color:red"> DEL</code></span> `{{url}}/api/user/related/4`
  
  
  
  ## Resposta 
 
 ```json
HTTP/1.1 200 OK
```

 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Related user successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Related user successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}
```
:::(Info) (Info)
Caso o usuário relacionado já tenha sido inativado previamente, a chamada retornará uma resposta de código `200` com a mensagem `Related user has already been deactivated`.
:::

## Erros

<details>
 
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>

***

<b>Mensagem: "1005: User does not exist"</b>
<p><b>Possível causa</b>: o <code>id</code> informado não encontrou um usuário cadastrado no senhasegura.<br></p>
<b>Solução</b>: informe um <code>id</code> válido e envie a requisição novamente.

***
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

<p><b>Possível causa</b>: o erro está no servidor senhasegura.<br>
        
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
    
<p><b>Possível causa</b>: falha na autenticação da sua aplicação com o servidor senhasegura.<br>
        
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
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
</details>