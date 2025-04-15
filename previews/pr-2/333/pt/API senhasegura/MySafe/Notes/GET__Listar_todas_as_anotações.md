# GET | Listar todas as anotações

Acesse informações de anotações armazenadas no **MySafe**.



## Requisição


 <code><span style="color:orange"> GET</code></span> `api/mysafe/note`


## Parâmetros de consulta
Envie os parâmetros abaixo como **query** na URL. 

* <summary><code>tag</code> - <b>string</b> - Filtra as anotações por tags.</summary>
* <summary><code>name</code> - <b>string</b> - Filtra as anotações pelo nome.</summary>


### Exemplos de requisição

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/note`  - Lista todas as anotações.

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/note?tag=secret` - Lista a(s) anotação(ões) registrada(s) com a `tag` = `secret`.

<code><span style="color:orange"> GET</code></span> `{{url}}api/mysafe/note?name=secret note` - Lista a(s) anotação(ões) registrada(s) com `name` = `secret note`.
  
  
  ## Resposta 
```
HTTP/1.1 200 OK
```

```
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
    "note_on_list": [
        {
            "identifier": "1",
            "name": "My note",
            "tags": "",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "2",
            "name": "Secret note",
            "tags": "secret",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "6",
            "name": "Staff meeting decisions",
            "tags": "meeting",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        },
        {
            "identifier": "9",
            "name": "TC Meeting",
            "tags": "API, MySafe, TC",
            "need_justify": "0",
            "need_approval": "0",
            "can_view": true,
            "can_write": true
        }
     ]
}
```
 
 ### Campos do corpo da resposta

    
<summary>&#8226; <code>notes_on_list</code> - <b>array de objetos</b> - Dados das anotações armazenadas.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>identifier</code> - <b>int</b> - Código único de identificação da anotação.</summary>
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>name</code> - <b>string</b> - Nome da anotação.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>tags</code> - <b>string</b> - Palavras-chave associadas à anotação.</summary>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>can_view</code> - <b>string</b> - Permissão de visualização da anotação.</summary>
 
<br>   
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>can_write</code> - <b>string</b> - Permissão de edição da anotação.</summary>
 
<br>   


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
     

