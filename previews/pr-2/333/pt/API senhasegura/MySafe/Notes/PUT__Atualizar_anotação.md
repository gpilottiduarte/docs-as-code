# PUT | Atualizar anotação

Atualize uma anotação no **MySafe**.

## Requisitos
* Permissão de edição da anotação no **MySafe**.

## Requisição

 <code><span style="color:blue"> PUT</code></span> `api/mysafe/note/update[identifier]`


## Parâmetros de requisição

Envie os parâmetro abaixo no <b>path</b> da URL.

<summary><code>identifier</code> - <b>int</b> - <span style="color:red">obrigatório</span> - Código único de identificação da anotação.</summary>

<summary><b>Nota</b>: esse valor é automaticamente atribuído pelo senhasegura em <a href = "/v3-33/docs/pt/api-post-create-note">POST | Criar anotação</a> e é obtido na resposta da requisição <a href = "/v3-33/docs/pt/api-get-list-all-notes">GET | Listar todas as anotações</a>.

    
<br>
Envie os parâmetros que deseja atualizar no <b>body</b> da requisição.
    
* <summary><code>name</code> - <b>string</b>  - Nome atribuído à anotação.</summary>


<br>
* <summary><code>note</code> - <b>string</b> - O conteúdo da anotação, limitado a 900 caracteres. </summary>
    
:::(Error) (Importante!)
Anotações cujo conteúdo possui  mais de 900 caracteres resultarão em erro. 
:::

<br>
* <summary><code>tags</code> - <b>string</b> - Palavras-chave associadas à anotação.</summary>

<br>
* <summary><code>users_allowed</code> - <b>array de objetos</b> - Dados dos usuários com acesso à anotação.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>username</code> - <b>string</b> - Nome do usuário com permissão de acesso à anotação.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Permissão de edição. </summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: se deixado vazio, usuários terão apenas permissão de visualização.</summary>
 
:::(Warning) (Atenção)
Usuários  com permissão <code>can_edit</code> = <code>true</code> podem inativar a anotação
:::

<br>
* <summary><code>groups_allowed</code> - <b>array de objetos</b> - Dados dos grupos com permissão de acesso à anotação.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>name</code> - <b>string</b> - Nome do grupo com permissão de acesso à anotação.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>can_edit</code> - <b>boolean</b> - Permissão de edição. </summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: se deixado vazio, membros do grupo terão apenas permissão de visualização.</summary>
  
:::(Warning) (Atenção)
Membros de grupos  com permissão <code>can_edit</code> = <code>true</code> podem inativar a anotação
:::


 ### Exemplo de requisição

```json 
{
   
    "users_allowed": [
        {
            "username" : "pduarte",
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
        "message": "Note successfully update",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Note successfully update",
        "erro": false,
        "cod_erro": 0
    },
    "note_entity": {
        "identifier": "2",
        "name": "Secret note",
        "tags": "secret",
        "users_allowed": [
            {
                "username": "pduarte",
                "can_edit": false
            }
        ],
        "groups_allowed": [],
        "shared_error": []
    }
}


 ```
 
 ## Erros
 
 <details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

* * *
<b>Mensagem: "1001: Parameter note limited to 900 characters"</b>
<p><b>Possível causa</b>: o conteúdo enviado em <code>note</code> ultrapassou o limite de 900 caracteres.<br></p>
<b>Solução</b>: diminua o conteúdo da anotação e envie a requisição novamente.
 
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
    
<b>Mensagem: "The upstream server is timing out"</b>
    
<p><b>Possível causa</b>: o tempo da requisição se esgotou.
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
* * *
</details>
     


