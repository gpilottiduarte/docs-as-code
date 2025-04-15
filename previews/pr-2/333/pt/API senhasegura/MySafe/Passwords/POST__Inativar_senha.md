# POST | Inativar senha

Inative uma senha no **MySafe**.

* Senha ativa criada ou compartilhada com seu usuário no **MySafe**.
Acesse os documentos [POST | Criar senha](/v3-33/docs/pt/api-post-create-password) ou [POST | Ativar senha](/v3-33/docs/pt/api-post-enable-password) para mais informações.

## Requisição

<code><span style="color:orange"> POST</code></span> `/api/mysafe/password/inactive/[identifier]`



## Parâmetros de requisição
Envie o parâmetro abaixo no <b>path</b> da URL.

<summary><code>identifier</code> - <b>int</b> - <span style="color:red">obrigatório</span> - Código único de identificação da senha.</summary>
<b>Nota</b>: esse valor é automaticamente atribuído pelo senhasegura em <a href = "/v3-33/docs/pt/api-post-create-password">POST | Criar senha</a> e é obtido na resposta da requisição <a href = "/v3-33/docs/pt/api-get-list-all-passwords">GET | Listar todas as senhas</a>.


  ### Exemplo de requisição
<code><span style="color:orange"> POST</code></span> `{{url}}/api/mysafe/password/active/10`
  
 
  
  
  ## Resposta 
 
 ```json
HTTP/1.1 200 OK
```

 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Password successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Password successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}
```

:::(Info) (Info)
Caso a senha já esteja inativa, a chamada retornará uma resposta de código <code>200</code> com a mensagem <b>"Password has already been deactivated"</b>.
:::

## Erros

<details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
<b>Mensagem: "1005: Password not found"</b>
<p><b>Possível causa</b>: senha não encontrada.<br></p>
<b>Solução</b>: verifique o valor do <code>identifier</code> e envie a requisição novamente.

    
* * *
    
<b>Mensagem: "1006: User does not have access"</b>
<p><b>Possível causa</b>: usuário não possui acesso à senha.<br></p>

 ***
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
    
<b>Mensagem: "You are not authorized to access this resource."</b>
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
    
<b>Mensagem: "An invalid response was received from the upstream server"</b>
    
<p><b>Possível causa</b>: o tempo da requisição se esgotou.
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
* * *
</details>
