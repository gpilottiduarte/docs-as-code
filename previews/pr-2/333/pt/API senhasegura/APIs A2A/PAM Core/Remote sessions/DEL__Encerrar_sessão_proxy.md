# DEL | Encerrar sessão proxy

Encerre uma sessão proxy registrada no **PAM Core**.

## Requisitos
* Autorização com permissão de **acesso** e de **leitura e escrita** ao **PAM Core** concedidas pelo administrador no **A2A**.
 Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.
* Sessão remota iniciada no **PAM Core**. 


## Requisição

 <code><span style="color:red">DEL</code></span> `api/pam/session/drop/[session_id]`

## Parâmetros de requisição
Envie o parâmetro abaixo no <b>path</b> da URL.

<summary><code>session_id</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Hash único gerado pelo senhasegura para identificar exclusivamente uma sessão específica.</summary>
<p><b>Nota</b>: esse valor é automaticamente atribuído pelo senhasegura no momento de criação da sessão e é obtido na resposta da requisição <a href="/v3-33/docs/pt/api-get-list-all-remote-sessions">GET | Listar todas as sessões remotas</a> ou <a href="/v3-33/docs/pt/api-get-list-a-remote-session">GET | Listar uma sessão remota por [id]</a>.</p>



  ### Exemplo de requisição

<code><span style="color:red">DEL</code></span> `{{url}/api/pam/session/drop/1dbd4cdcf4b*************9554cd6308975`
  
  
  
  ## Resposta 
 ```json
HTTP/1.1 200 OK 
```
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Sessão interrompida com sucesso",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Sessão interrompida com sucesso",
        "erro": false,
        "cod_erro": 0
    }
}
```



## Erros


<details>
<summary><b><span style="color:red">404</span> - Not Found</b>.</summary>

***

<p><b>Mensagem: "Resource sub not found"</b>
<p><b>Possível causa</b>: a URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: verifique a URL e envie a requisição novamente.</p>
***
</details>

<details>
 
<summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

***
    
<b>Mensagem: "Unexpected error."</b><br>
 
<p><b>Possível causa</b>: o erro está no servidor senhasegura.<br>
        
<b>Solução</b>: contate o time de suporte para mais informações.</p>

***

<b>Mensagem: "You are not authorized to access this resource"</b>

<b>Possível causa</b>: você não possui autorização para acessar esse recurso.<br>
        
<b>Solução</b>: solicite ao administrador que revise sua permissão de acesso aos recursos do <b>PAM Core</b> no <b>A2A</b>.

* * *
    
<b>Mensagem</b>: "An error occurred while droping session"

<b>Possível causa</b>: ocorreu um erro durante o encerramento da sessão.
        
<b>Solução</b>: verifique o <code>session_id</code> e envie a requisição novamente.

* * *
</details>



<details>
<summary><b>Client authentication failed</b></summary>

*** 
   
<b>Mensagem: "Client authentication failed"</b>
<p><b>Possível causa</b>: falha na autenticação da sua aplicação com o servidor senhasegura.<br>
        
   <b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token</code>, <code>Client ID</code> e <code>Client secret</code> e solicite um novo token de acesso.</p>

* * *
</details>



<details>
 <summary><b>No route matched with those values</b></summary>

*** 
    
   
<b>Mensagem: "No route matched with those values"</b>
    
<p><b>Possível causa</b>: ausência do header de autorização na requisição de API.<br>
        
<b>Solução</b>: solicite um novo token de acesso.</p>

* * *
</details>
 

<details>
<summary><b> Request timed out</b></summary>

***
    
<b>Mensagem: "Request timed out"</b>
<p><b>Possível causa</b>: o tempo da requisição se esgotou. <br>
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
</details>     




