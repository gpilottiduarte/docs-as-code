# GET | Listar uma anotação por [identifier]

Acesse informações de uma anotação armazenada no **MySafe**.

## Pré-requisitos
* Acesso à anotação no **MySafe**.

## Requisição


 <code><span style="color:orange"> GET</code></span> `api/mysafe/note/[identifier]`


## Parâmetros de requisição
Envie o parâmetro abaixo no <b>path</b> da URL.

<summary><code>identifier</code> - <b>int</b> - <span style="color:red">obrigatório</span> - Código único de identificação da anotação</summary>
<b>Nota</b>: esse valor é automaticamente atribuído pelo Segura em <a href="/v4/docs/pt/api-post-create-note">POST | Criar anotação</a> e é obtido na resposta da requisição <a href="/v4/docs/pt/api-get-list-all-notes">GET | Listar todas as anotações</a>.



  ### Exemplo de requisição

<code><span style="color:green">GET</code></span> `{{url}}api/mysafe/note/2`
  
  
  
  ## Resposta 

 ```
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
    "note_entity": {
        "identifier": "2",
        "name": "Secret note",
        "note": "My top secret note",
        "tags": "secret",
        "users_allowed": [],
        "groups_allowed": []
    }
}
```

### Campos do corpo da resposta

    
<summary>&#8226; <code>notes_entity</code> - <b>objeto</b> - Dados da anotação armazenada.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>identifier</code> - <b>int</b> - Código único de identificação da anotação.</summary>
    
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>name</code> - <b>string</b> - Nome da anotação.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>note</code> - <b>string</b> - Conteúdo da anotação.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>tags</code> - <b>string</b> - Palavras-chave associadas à anotação.</summary>

<br>
 <summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>users_allowed</code> - <b>array de objetos</b> - Lista com os nomes e as permissões dos usuários de visualização e/ou edição da anotação.</summary>
 
 
<br>   
<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>groups_allowed</code> - <b>string</b> - Lista com os nomes e as permissões dos grupos de visualização e/ou anotação.</summary></summary>
 
<br>   


 ## Erros
 
<details>
<summary><b><span style="color:red">400</span> - Bad request</b>.</summary>

***
    
<b>Mensagem: "1006 User does not have access"</b><br>

<p><b>Possível causa</b>: usuário não possui permissão de visualização dessa anotação.<br>
       
    
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
     