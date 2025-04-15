# POST | Inativar anotação

Inative uma anotação no **MySafe**.

## Requisitos
* Permissão de edição da anotação.
* Anotação ativa no **MySafe*.*

## Requisição

 <code><span style="color:orange"> POST</code></span> `/api/mysafe/note/inactive[identifier]`

### Parâmetros da requisição

Envie o parâmetro abaixo no <b>path</b> da URL.

<summary><code>identifier</code> - <b>int</b> - <span style="color:red">obrigatório</span> - Código único de identificação da anotação</summary>
<b>Nota</b>: esse valor é automaticamente atribuído pelo senhasegura em <a href="/v3-33/docs/pt/api-post-create-note">POST | Criar anotação</a> e é obtido na resposta da requisição <a href="/v3-33/docs/pt/api-get-list-all-notes">GET | Listar todas as anotações</a>.

 ### Exemplo de requisição

<code><span style="color:orange"> POST</code></span> `/api/mysafe/note/inactive/2`

### Resposta esperada

`HTTP/1.1 200 OK`

 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Note successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Note successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}
```
:::(Info) (Info)
Caso a anotaçao já esteja inativa, a chamada retornará uma resposta de código `200` com a mensagem `Note has already been deactivated`.

:::

 ## Erros
 
<details>
<summary><b><span style="color:red">400</span> - Bad request</b>.</summary>

***
    
<b>Mensagem: "1006 User does not have access"</b><br>

<p><b>Possível causa</b>: usuário não possui acesso a essa anotação.<br>
    
 ***    
<b>Mensagem: "1010: Unexpected identifier type"</b><br>

<p><b>Possível causa</b>: URL não reconhecida.<br>
 <b>Solução</b>: verIfique a URL e envie a requisição novamente .</p>
          
    
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
     