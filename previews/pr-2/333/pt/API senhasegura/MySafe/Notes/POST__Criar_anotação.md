# POST | Criar anotação

Crie uma anotação no **MySafe**.



## Requisição

 <code><span style="color:orange"> POST</code></span> `api/mysafe/note`


::: (Info) (Info)
Quando uma anotação é adicionada ao **MySafe**, ela é automaticamente associada ao seu criador, identificando-o como seu proprietário.
:::

## Parâmetros de requisição
Envie os parâmetros abaixo no <b>body</b> da requisição.


* <summary><code>name</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Nome atribuído à anotação.</summary>


<br>
* <summary><code>note</code> - <b>string</b> - <span style="color:red">obrigatório</span> - O conteúdo da anotação, limitado a 900 caracteres.
    
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
 <code><span style="color:orange"> POST</code></span> `{{url}}api/mysafe/note`
 
```json 
{
    "name": "Staff meeting",
    "note": "Staff meetings are essential for maintaining clear communication and ensuring everyone is on the same page. These gatherings provide a platform to discuss ongoing projects, address any issues, and brainstorm new ideas. By fostering a collaborative environment, staff meetings encourage team members to share their insights and contribute to the organization's overall goals. Regularly scheduled meetings also help in building team morale and strengthening workplace relationships.",
    "tags": "meeting",
    "groups_allowed": [
        {
            "name": "TC team"
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
        "message": "Note successfully registered",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Note successfully registered",
        "erro": false,
        "cod_erro": 0
    },
    "note_entity": {
        "identifier": "8",
        "name": "Staff meeting",
        "tags": "meeting",
        "users_allowed": [],
        "groups_allowed": [
            {
                "name": "TC team",
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
<p><b>Possível causa</b>: o parâmetro obrigatório <code>name</code> da anotação não foi informado.<br></p>
<b>Solução</b>: informe o <code>name</code> da anotação e envie a requisição novamente.
  
* * *
    
<b>Mensagem: "1001: Parameter 'note' was not informed!"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>note</code> da anotação não foi informado.<br></p>
<b>Solução</b>: informe o <code>note</code> da senha e envie a requisição novamente.
  


* * *
<b>Mensagem: "1001: Parameter note limited to 900 characters"</b>
<p><b>Possível causa</b>: o conteúdo enviado em <code>note</code> ultrapassou o limite de 900 caracteres.<br></p>
<b>Solução</b>: diminua o conteúdo da anotação e envie a requisição novamente.
    
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
   
<b>Mensagem: "An invalid response was received from the upstream server</b>
    
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
     


