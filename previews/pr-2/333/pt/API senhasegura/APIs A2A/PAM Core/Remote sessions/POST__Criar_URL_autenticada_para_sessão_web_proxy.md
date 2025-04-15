# POST | Criar URL autenticada para sessão web proxy

Crie uma URL autenticada para iniciar uma sessão web proxy no **PAM Core**.

## Requisitos
* Autorização com permissão de **acesso** e de **leitura e escrita** ao **Web Proxy Session** concedidas pelo administrador no **A2A**. 
Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.

## Requisição

 <code><span style="color:orange"> POST</code></span> `api/pam/remote/session`


## Parâmetros de requisição
Envie os parâmetros abaixo no <b>body</b> da requisição.


<summary><code>user</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Nome de usuário utilizado para autenticação.</summary>
<p><b>Nota</b>: deve ser um usuário cadastrado no usuário.</p>

<br>
<summary><code>credential</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Nome de usuário da credencial utilizada nesta sessão web proxy.</summary>



<br>
<summary><code>device</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Nome do host ou endereço IP do dispositivo de destino .</summary>



<br>
<summary><code>protocol</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Protocolo de rede (SSH, RDP, HTTPS, entre outros.).</summary>

<br>
<summary><code>remotedevice</code> - <b>string</b> - ID do dispositivo, endereço IP ou hostname para a sessão web proxy.</summary>
<b>Nota</b>: necessário somente se a sessão utilizar credenciais de domínio.

<br>
<summary><code>remoteAddr</code> - <b>string</b> - Endereço IP do usuário.</summary>
<b>Nota</b>: este endereço IP será utilizado durante toda a sessão.
  
<br>
<summary><code>port</code> - <b>int</b> - Porta usada durante toda a sessão.</summary>
<b>Nota</b>: por padrão, a sessão utiliza a porta do dispositivo escolhido, a menos que seja especificado de outra forma.


<br>
<summary><code>remoteapp</code> - <b>int</b> - ID do RemoteApp.</summary>
 <b>Nota</b>: apenas para sessões do RemoteApp.

<br>
<summary><code>screensize</code> - <b>string</b> - Resolução de tela.</summary>
<p><b>Exemplo</b>: <code>1900x1200</code></p>



  ### Exemplo de requisição
<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/remote/session`
```json 
{
            "user": "dleite",
            "credential":"usrsudonopass",
            "device": "45.163.147.135",
            "protocol": "ssh"
}
```
  
  
  
  ## Resposta 
 ```json 
  {
    "code": 200,
    "response": {
        "status": 200,
        "message": "Session created successfully",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Session created successfully",
        "erro": false,
        "cod_erro": 0
    },
    "tenant": "senhasegura",
    "session": {
        "session_url": "https://10.66.33.120/modulos/auth?_sr=cmJzOi8vTmJQOG1GckRWeHFFY1FkNi8wRUF5bHoweWw3cUdyUk5JbE1oaXZ3TytLak5sUGsydUZ2YnRQaUdhU3YwaUl0TVRILzZHWWtPWjdZdXNKeE01NHFsaVlFdkRqMGZtOG5vbXNDc0d5bUNDdUt2YWFSclJjTG1scUIxSnBUTXdq",
        "token": "6a3afbb1************b32262"
    }
}
 ```
 
 ### Campos do corpo da resposta


<summary><code>session</code> - <b>object
    </b> - Dados da sessão criada.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>session_url</code> - <b><b>string</b></b> - URL para iniciar a sessão web proxy autenticada.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>token</code> - <b><b>string</b></b> - Token de autenticação associado à sessão web proxy. </summary>
<br>

:::(Warning) (Atenção)
O valor do `token` é sensível e deve ser mantido confidencial.
:::
 
 ## Erros
 
 <details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
<b>Mensagem: "Username not specified"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>username</code> da sessão não foi informado.<br></p>
<b>Solução</b>: informe um <code>username</code> já cadastrado no senhasegura e envie a requisição novamente.
  
* * *    
<b>Mensagem: "Credential not specified"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>credential</code> da sessão não foi informado.<br></p>
<b>Solução</b>: informe a <code>credential</code> e envie a requisição novamente.
  
* * *

<b>Mensagem: "Credential device not specified"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>device</code> da sessão não foi informado.<br></p>
<b>Solução</b>: informe o <code>device</code> do dispositivo e envie a requisição novamente.
  

* * *
<b>Mensagem: "Invalid protocol"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>protocol</code> da sessão não foi informado.<br></p>
  <b>Solução</b>: informe um valor para o parâmetro <code>protocol</code> e envie a requisição novamente.
 

* * *
</details>




<details>
<summary><b><span style="color:red">404</span> - Not Found</b>.</summary>

***
<b>Mensagem: "Resource sub not found"</b><br>

<p><b>Possível causa</b>: a URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: verifique a URL e garanta que todos os parâmetros estão corretos.</p>

***    
</details>



<details>
<summary><b><span style="color:red">500</span> - Internal Server Error</b>.</summary>

***
    
<b>Mensagem: "Unexpected error."</b><br>

<p><b>Possível causa</b>: o erro está no servidor senhasegura.<br>
        
<b>Solução</b>: contate o time de suporte para mais informações.</p>
    
 ***
<b>Mensagem: "You are not authorized to access this resource."</b>
<p><b>Possível causa</b>: você não possui autorização para acessar esse recurso.<br>
        
<b>Solução</b>: solicite ao administrador que verifique sua permissão de acesso aos recursos do <b>Web Proxy Session</b> no <b>A2A</b>.</p>

* * *    
</details>
     


<details>
<summary><b>Client authentication failed</b>.</summary>

*** 
   
<b>Mensagem: "Client authentication failed."</b>
    
<p><b>Possível causa</b>: falha na autenticação da sua aplicação com o servidor senhasegura.<br>
        
<b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token URL</code>, <code>Client ID</code> e <code>Client secret</code> e solicite um novo token de acesso.</p>

* * *    
</details>
     
   

<details>
<summary><b>Invalid signature</b>.</summary>

*** 
    
<b>Mensagem: "Invalid signature"</b>
    
<p><b>Possível causa</b>: falha no reconhecimento da URL da aplicação cliente.
        
<b>Solução</b>: verifique a URL da aplicação cliente e envie a requisição novamente.</p>

* * * 
</details>
     


<details>
    <summary><b>No route matched with those values</b>.</summary>
    
***   
    
<b>Mensagem: "No route matched with those values."</b>
   <p><b>Possível causa</b>: ausência do header de autorização na requisição de API.<br>
        

<b>Solução</b>: solicite um novo token de acesso.</p>

***
</details>
 


<details>
    <summary><b> Request timed out</b>.</summary>
    
***
    
<b>Mensagem: "Request timed out."</b>
<p><b>Possível causa</b>: o tempo da requisição se esgotou. <br>
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
</details>