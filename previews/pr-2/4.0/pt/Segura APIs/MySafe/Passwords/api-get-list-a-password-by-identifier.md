# GET | Listar uma senha por [identifier]

Acesse informações de uma senha armazenada no **MySafe**.

## Pré-requisitos
* Acesso à senha no **MySafe**.


## Requisição


 <code><span style="color:orange"> GET</code></span> `api/mysafe/password/[identifier]`


## Parâmetros de requisição
Envie o parâmetro abaixo no **path** da URL.
* <summary><code>identifier</code> - <b>int</b> - <span style="color:red">obrigatório</span> - Código único de identificação da senha.</summary><b>Nota</b>: este valor é automaticamente atribuído pelo Segura em <a href  = "/v4/docs/pt/api-post-create-password">POST | Criar senha</a> e é obtido na resposta da requisição  <a href  = "/v4/docs/pt/api-get-list-all-passwords">GET | Listar todas as senhas</a>.</summary>


### Exemplo de requisição

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/password/5`  
  
  
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
    "password_entity": {
        "identifier": "5",
        "name": "gmail corporate",
        "url": "www.gmail.com",
        "username": "corporateuser@gmail.com",
        "password": "7yha&thisismycorporatepassword78%h",
        "secret_key": null,
        "token": null,
        "notes": "my gmail password",
        "tags": "gmail",
        "users_allowed": [],
        "groups_allowed": []
    }
}
```
 
 ### Campos do corpo da resposta

    
<summary>&#8226; <code>passwords_entity</code> - <b>object</b> - Dado da senha armazenada.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>identifier</code> - <b>int</b> - Código único de identificação da senha.</summary>
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>name</code> - <b>string</b> - Nome da senha.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>url</code> - <b>string</b> - URL do site onde a senha está sendo utilizada.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>username</code> - <b>string</b> Nome de usuário usado para acessar a conta.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>password</code> - <b>string</b> - Senha cadastrada.</summary><p>&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: essa informação pode vir criptografada caso sua autorização de chave de acesso esteja configurada para criptografar dados sensíveis.


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>secret_key</code> - <b>string</b> - A chave secreta fornecida para autenticação multi-fator.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>token</code> - <b>string</b> - Código TOTP gerado automaticamente pelo Segura para autenticação multi-fator com base no token fornecido em <a href  = "/v4/docs/pt/api-post-create-password">POST | Criar senha</a>.</summary>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>tags</code> - <b>string</b> - Palavras-chave associadas à senha.</summary>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>users_allowed</code> - <b>array de objetos</b>  - Dados dos usuários com acesso à senha.</summary>
 
<br>   
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <code>username</code> - <b>string</b> - Nome do usuário com permissão de acesso à senha.</summary>
    
  <br>   
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <code>can_edit</code> - <b>boolean</b> - Permissão de edição.</summary>

<br>
:::(Warning) (Atenção)
Usuários com permissão <code>can_edit</code> = <code>true</code> podem inativar uma senha.
:::
    
 <br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>groups_allowed</code> - <b>array de objetos</b> </b> - Dados dos grupos com acesso à senha.</summary>
 
<br>   
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <code>name</code> - <b>string</b> - Nome do grupo com permissão de acesso à senha.</summary>
    
  <br>   
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;→ <code>can_edit</code> - <b>boolean</b> - Permissão de edição.</summary>

<br>
:::(Warning) (Atenção)
Membros de grupos com permissão <code>can_edit</code> = <code>true</code> podem inativar uma senha.
:::    

  ## Erros
 
<details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
<b>Mensagem: "1010: Unexpected identifier type"</b>
<p><b>Possível causa</b>: o <code>identifier</code> enviado não foi reconhecido como um identificador válido.<br></p>
<b>Solução</b>: verifique o valor do <code>identifier</code> e envie a requisição novamente.
  
* * *
<b>Mensagem: "1005: Password not found"</b>
<p><b>Possível causa</b>: senha não encontrada.<br></p>
<b>Solução</b>: verifique o valor do <code>identifier</code> e envie a requisição novamente.

    
* * *
    
<b>Mensagem: "1006: User does not have access"</b>
<p><b>Possível causa</b>: usuário não possui acesso à senha.<br></p>

 ***
<b>Mensagem: "1009: Inactive password"</b>
<p><b>Possível causa</b>: senha inativa.<br></p>
 <b>Solução</b>: ative a senha através do  <code><span style="color:orange"> POST</code></span> <code>api/mysafe/password/active[identifier]</code>.

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
     


     