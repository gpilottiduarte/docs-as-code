# PUT | Atualizar senha

Atualize uma senha no **MySafe**.


## Requisitos

* Permissão de edição de senha no **MySafe**.

## Requisição

 <code><span style="color:blue"> PUT</code></span> `api/mysafe/password/update[identifier]`


## Parâmetros de requisição
Envie o parâmetro abaixo no **path** da URL.
* <summary><code>identifier</code> - <b>int</b> - <span style="color:red">obrigatório</span> - Código único de identificação da senha.</summary><b>Nota</b>: este valor é automaticamente atribuído pelo senhasegura em <a href  = "/v3-33/docs/pt/api-post-create-password">POST | Criar senha</a> e é obtido na resposta da requisição <a href = "/v3-33/docs/pt/api-get-list-all-passwords">GET | Listar todas as senhas</a>.</summary>


<br>

Envie os parâmetros que deseja atualizar no <b>body</b> da requisição.


* <summary><code>name</code> - <b>string</b> - Nome atribuído à senha</summary>


<br>
* <summary><code>username</code> - <b>string</b>  - Nome de usuário usado para acessar a conta.</summary>


<br>
* <summary><code>password</code> - <b>string</b> - A senha que está sendo atualizada.</summary>


<br>
* <summary><code>url</code> - <b>string</b> - URL do site onde a senha está sendo usada.</summary>

<br>
* <summary><code>secret_key</code> - <b>string</b> - <i>Seed</i> para gerar automaticamente o TOTP.</summary>
<b>Nota</b>: deve estar codificada em base32.


<br>
* <summary><code>notes</code> - <b>string</b> - Observações adicionais sobre a senha.</summary>


 <br>
* <summary><code>tags</code> - <b>string</b> - Palavras-chave associadas à senha.</summary>


<br>
* <summary><code>users_allowed</code> - <b>array de objetos</b> - Dados dos usuários com acesso à senha.</summary><b>Nota</b>: o envio de um array vazio, remove as permissões de compartilhamento.

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>username</code> - <b>string</b> - Nome do usuário com permissão de acesso à senha.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Permissão de edição.</summary>
<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: se deixado vazio, usuários terão apenas permissão de visualização.

<br>
    
:::(Warning) (Atenção)
Usuários  com permissão <code>can_edit</code> = <code>true</code> podem inativar uma senha.
:::

<br>
* <summary><code>groups_allowed</code> - <b>array de objetos</b> - Dados dos grupos com permissão de acesso à senha.</summary><b>Nota</b>: o envio de um array vazio, remove as permissões de compartilhamento.


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>name</code> - <b>string</b> - Nome do grupo com permissão de acesso à senha.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Permissão de edição.</summary>
<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: se deixado vazio, membros do grupo terão apenas permissão de visualização.

<br>
    
:::(Warning) (Atenção)
Membros de grupos com permissão <code>can_edit</code> = <code>true</code> podem inativar uma senha.
:::


 ### Exemplo de requisição
 
 <code><span style="color:blue"> PUT</code></span> `api/mysafe/password/update/9`

```json 
{
    "name": "senseg account",
    "url": "www.senhasegura.com",
    "username": "npass",
    "password": "8jhfy@3789",
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
HTTP/1.1 200 OK
```
```json 
 {
    "code": 200,
    "response": {
        "status": 200,
        "message": "Password successfully updated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Password successfully updated",
        "erro": false,
        "cod_erro": 0
    },
    "password_entity": {
        "identifier": "312",
        "name": "senhasegura account",
        "url": "www.url.com",
        "username": "senhapass",
        "note": "Access details for this key.",
        "tags": "access",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": true
            }
        ],
        "groups_allowed": [
            {
                "name": "Test group",
                "can_edit": true
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
   
<b>Mensagem: "An invalid response was received from the a seupstream server</b>
    
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
     


