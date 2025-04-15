# POST | Criar senha

Crie uma senha no **MySafe**.



## Requisição

 <code><span style="color:orange"> POST</code></span> `api/mysafe/password`


::: (Info) (Info)
Quando uma senha é adicionada ao **MySafe**, ela é automaticamente associada ao seu criador, identificando-o como seu proprietário.
:::

## Parâmetros de requisição
Envie os parâmetros abaixo no <b>body</b> da requisição.


* <summary><code>name</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Nome atribuído à senha.</summary>


<br>
* <summary><code>username</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Nome de usuário usado para acessar a conta.</summary>


<br>
* <summary><code>password</code> - <b>string</b> - <span style="color:red">obrigatório</span> - A senha que está sendo adicionada.</summary>


<br>
* <summary><code>url</code> - <b>string</b> - URL do site onde a senha está sendo usada.</summary>

<br>
* <summary><code>secret_key</code> - <b>string</b> - <i>Seed</i> para gerar automaticamente o TOTP.</summary>
* </summary><b>Nota</b>: deve estar codificada em base32.


<br>
* <summary><code>notes</code> - <b>string</b> - Observações adicionais sobre a senha.</summary>


 <br>
* <summary><code>tags</code> - <b>string</b> - Palavras-chave associadas à senha.</summary>


<br>
* <summary><code>users_allowed</code> - <b>array de objetos</b> - Dados dos usuários com acesso à senha.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>username</code> - <b>string</b> - Nome do usuário com permissão de acesso à senha.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Permissão de edição. </summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: Se deixado vazio, usuários terão apenas permissão de visualização.</summary>

<br>    
:::(Warning) (Atenção)
Usuários  com permissão <code>can_edit</code> = <code>true</code> podem inativar uma senha
:::

<br>
* <summary><code>groups_allowed</code> - <b>array de objetos</b> - Dados dos grupos com permissão de acesso à senha.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>name</code> - <b>string</b> - Nome do grupo com permissão de acesso à senha.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Permissão de edição. </summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: Se deixado vazio, membros do grupo terão apenas permissão de visualização.</summary>

<br>    
:::(Warning) (Atenção)
Membros de grupos  com permissão <code>can_edit</code> = <code>true</code> podem inativar uma senha
:::


 ### Exemplo de requisição
 
  <code><span style="color:orange"> POST</code></span> `{{url}}api/mysafe/password`

```json 
{
    "name": "senseg account",
    "username": "npass",
    "password": "8jhfy@3789",
     "url": "www.senhasegura.com",
    "secret_key": "JBSWY3DPEHPK3PXP",
    "notes": "Access details",
    "tags": "tag1, tag2",
    "users_allowed": [
        {
            "username" : "pduarte"
        }
    ],
    "groups_allowed": [
        {
            "name" : "Test group",
            "can_edit" : false
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
        "message": "Password successfully registered",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Password successfully registered",
        "erro": false,
        "cod_erro": 0
    },
    "password_entity": {
        "identifier": "312",
        "name": "senseg account",
        "url": "www.senhasegura.com",
        "username": "npass",
        "note": "Access details",
        "tags": "tag1, tag2",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": false
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
<p><b>Possível causa</b>: o parâmetro obrigatório <code>name</code> da senha não foi informado.<br></p>
<b>Solução</b>: informe o <code>name</code> da senha e envie a requisição novamente.
  
* * *
    
<b>Mensagem: "1001: Parameter 'username' was not informed!"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>username</code> da senha não foi informado.<br></p>
<b>Solução</b>: informe o <code>username</code> da senha e envie a requisição novamente.
  
* * *

<b>Mensagem: "1001: Parameter 'password' was not informed!"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>password</code> da senha não foi informado.<br></p>
    <b>Solução</b>: informe o <code>password</code> da senha e envie a requisição novamente.

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
    
<b>Mensagem: "You are not authorized to access this resource."</b>
<p><b>Possíveis causas</b>: falha na autenticação da sua aplicação com o servidor senhasegura ou URL incorreta.<br>
        
<b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token URL</code>, <code>Client ID</code> e  <code>Client Secret</code> e solicite um novo token de acesso ou verifique e corrija a URL.
* * *
</details>
     
<details>
<summary><b>An invalid response was received from the upstream server
</b>.</summary>

*** 
   
<b>Mensagem: "An invalid response was received from the a seupstream server</b>
    
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
     


