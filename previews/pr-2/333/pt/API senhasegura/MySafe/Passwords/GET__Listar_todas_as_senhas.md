# GET | Listar todas as senhas

Acesse informações de senhas armazenadas no **MySafe**.



## Requisição


 <code><span style="color:orange"> GET</code></span> `api/mysafe/password`

## Parâmetros de consulta
Envie os parâmetros abaixo como **query** na URL. 

* <summary><code>tag</code> - <b>string</b> - Filtra as senhas por tags associadas.</summary>
* <summary><code>name</code> - <b>string</b> - Filtra as senhas pelo nome.</summary>
* <summary><code>username</code> - <b>string</b> - Filtra as senhas pelo nome de usuário.</summary>
* <summary><code>url</code> - <b>string</b> - Filtra as senhas pela URL associada.</summary>


### Exemplos de requisição

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/password`  - Lista todas as senhas.

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/password?tag=gmail` - Lista a(s) senha(s) cadastradas com a `tag` = `gmail`.

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/password?name=Github` - Lista a(s) senha(s) cadastradas com a `name` = `Github`.

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/password?username=dleite` - Lista a(s) senha(s) cadastradas com o `username` = `dleite`.

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/password?url=www.gmail.com` -  Lista a(s) senha(s) cadastradas com a `url` = `www.gmail.com`.
  
  
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
    "password_on_list": [
        {
            "identifier": "3",
            "name": "Github",
            "url": "https://github.com",
            "username": "deboraleitef@gmail.com",
            "tags": "",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "4",
            "name": "gmail personal",
            "url": "www.gmail.com",
            "username": "user@gmail.com",
            "tags": "gmail",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "5",
            "name": "gmail corporate",
            "url": "www.gmail.com",
            "username": "corporateuser@gmail.com",
            "tags": "gmail",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "6",
            "name": "senhasegura",
            "url": "www.senhasegura.com",
            "username": "dleite",
            "tags": "senhasegura",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        }
    ]
}
```
 
 ### Campos do corpo da resposta

    
<summary>&#8226; <code>passwords_on_list</code> - <b>array de objetos</b> - Dados das senhas armazenadas.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>identifier</code> - <b>int</b> - Código único de identificação da senha.</summary>
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>name</code> - <b>string</b> - Nome da senha.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>url</code> - <b>string</b> - URL do site onde a senha está sendo utilizada.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>username</code> - <b>string</b> Nome de usuário usado para acessar a conta.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>password</code> - <b>string</b> - Senha cadastrada.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>secret_key</code> - <b>string</b> - A chave secreta fornecida para autenticação multi-fator.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>token</code> - <b>string</b> - Código TOTP gerado automaticamente pelo senhasegura para autenticação multi-fator com base no token fornecido em <a href  = "/v3-33/docs/pt/api-post-create-password">POST | Criar senha</a>.</summary>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>tags</code> - <b>string</b> - Palavras-chave associadas à senha.</summary>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>can_view</code> - <b>string</b> - Permissão de visualização da senha.</summary>
 
<br>   
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>can_write</code> - <b>string</b> - Permissão de edição da senha.</summary>
 
    

 ## Erros
 
    
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
    
<b>Mensagem: "No route matched with those values."</b>
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
     


     