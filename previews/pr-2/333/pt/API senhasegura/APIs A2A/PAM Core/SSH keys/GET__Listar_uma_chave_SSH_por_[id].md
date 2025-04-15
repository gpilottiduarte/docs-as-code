# GET | Listar uma chave SSH por [id]

Acesse informações de uma chave SSH registrada no **PAM Core**.

## Requisitos
* Autorização com permissão de **acesso** ao **PAM Core** concedida pelo administrador no **A2A**.
Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.


## Requisição

 <code><span style="color:green">GET</code></span> `/api/pam/key/[id]`

## Parâmetros de requisição

Envie o parâmetro abaixo no <b>path</b>  da URL.

* <code>id</code> - <b>int</b> - <span style="color:red">obrigatório</span> - Código único de identificação da chave SSH.
<b>Nota</b>: Esse valor é automaticamente atribuído pelo senhasegura em <a href="/v3-33/docs/pt/api-post-create-ssh-key">POST | Criar chave SSH</a> e é obtido na resposta da requisição <a href="/v3-33/docs/pt/api-get-list-all-credentials"><code><span style="color:green"> GET</code></span><code>/api/pam/credential</code></a> que lista todas as credenciais acessíveis à sua autorização. 


  ### Exemplo de requisição

<code><span style="color:green">GET</code></span> `{{url}}/api/pam/key/39`
  
  
  
  ## Resposta 
```json
HTTP/1.1 200 OK 
```
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Key 39",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Key 39",
        "erro": false,
        "cod_erro": 0
    },
    "tenant": "senhasegura",
    "key": {
        "id": "39",
        "username": "dleite",
        "key_name": "test2",
        "hostname": "w2016",
        "ip": "10.66.33.15",
        "private_key": "-----BEGIN OPENSSH PRIVATE KEY-----\r\cTA9Vb5aA0kXaK2HEjGUWgeCBG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\r\nQyNTUxOQAAACCLABE9/nb3BlbnNzaC1rZXktdjEAAAAAxtPOCkR2sGccAAAAKi5DXJnuQ1y\r\nZwAAAAtzc2gtZWQyNTUxOQAAACCLABE9/cTA9VTGVpdGVGZXJyZWlyYUBIUjFTUkb5aA0kXaK2HEjGUWgeCxtPOCkR2sGccA\r\nDgaNiGsvbkkkXhepU2NQi3iZ4sAET39xMD1VvloDSRdorYc\r\nSMZRaB4LG084KRHawZxwAAAAI0F6dXJlQUQrRGVib3JhAAAECc20zsB7FuSJQAqhLxe\r\ngzAQI=\r\n-----END OPENSSH PRIVATE KEY-----",
        "public_key": "ssh-ed25519 C1lZDI1NTE5AAawZxwAAAAAAC3NzaIIsAET39xdorYcSMZRaB4LG084MD1VvloDSRKRH AzureAD+DeboraLeiteFerreira@HR1SRH3",
        "password": null,
        "devices": [
            {
                "hostname": "API device test",
                "ip": "10.66.33.20"
            }
        ],
        "expiration_time": "2024-06-04T12:20:19"
    }
}
```

### Campos do corpo da resposta

    

*  <summary><code>key</code> - <b>object</b>  - Dados da chave SSH.</summary>

<br>

 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>id</code> - <b>int</b> - Código único de identificação da chave SSH.</summary>


<br>

 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>key_name</code> - <b>string</b> - Nome criado pelo usuário para identificação da chave. </summary>


<br>

  <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>hostname</code> - <b>string</b> - Nome do dispositivo principal associado à chave SSH.</summary>


<br>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>ip</code> - <b>string</b> - Endereço IP do dispositivo principal associado à chave SSH.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>private_key</code> - <b>string</b> - Chave privada necessária para autenticação do usuário.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Exemplo</b>: <code>-----BEGIN OPENSSH PRIVATE KEY-----\rcTA9Vb5aA0kXaK2HEjGUWgeCBG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\rQyNTUxOQAAACCLABE9/nb3BlbnNzaC1rZXktdjEAAAAAxtPOCkR2sGccAAAAKi5DXJnuQ1y\r\nZwAAAAtzc2gtZWQyNTUxOQAAACCLABE9/cTA9VTGVpdGVGZXJyZWlyYUBIUjFTUkb5aA0kXaK2HEjGUWgeCxtPOCkR2sGccA\rDgaNiGsvbkkkXhepU2NQi3iZ4sAET39xMD1VvloDSRdorYc\rSMZRaB4LG084KRHawZxwAAAAI0F6dXJlQUQrRGVib3JhAAAECc20zsB7FuSJQAqhLxe\rgzAQI=\r-----END OPENSSH PRIVATE KEY-----</code>

<br>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>public_key</code> - <b>string</b> - Chave pública que permite que servidores verifiquem a identidade do usuário associado à chave privada correspondente.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Exemplo</b>: <code>ssh-ed25519 C1lZDI1NTE5AAawZxwAAAAAAC3NzaIIsAET39xdorYcSMZRaB4LG084MD1VvloDSRKRH AzureAD+DeboraLeiteFerreira@HR1SRH3</code>

<br>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>password</code> - <b>string</b> - Senha opcional que fornece uma camada extra de segurança à chave privada.</summary>

 
 <br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>tags</code> - <b>string</b> - Palavras-chave para identificação da chave SSH.</summary>

 <br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>devices</code> - <b>array de objetos</b>  - Dispositivos associados à chave SSH, contendo seu <code>hostname</code> e <code>ip</code>.</summary>

<br>
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;→<code>hostname</code> - <b>string</b> - Nome do host do dispositivo adicional</summary>
&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;

 <br>
<summary>&nbsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;→<code>ip</code> - <b>string</b> - Endereço de IP do dispositivo adicional.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>expiration_time</code> - <b>string</b> - Tempo de expiração da chave SSH baseado em ISO 8601.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Exemplo</b>: <code>2024-06-04T12:20:19</code>
    
 <br>

## Erros
 
<details>
 
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>

***

<b>Mensagem: "1015: SSH key not found"</b><br>
<p><b>Possível causa</b>: chave SSH não encontrada.<br>
        
<b>Solução</b>: verifique o <code>id</code> enviado para buscar pela chave SSH e envie a requisição novamente.</p>


* * * 
<b>Mensagem: "1016: The item is not a ssh key"</b><br>
<br><b>Possível causa</b>: o valor do parâmetro <code>id</code> não corresponde a uma chave SSH. 

<b>Solução</b>: verifique o <code>id</code> e envie a requisição novamente.

***

<b>Mensagem: "1017: Key inactive"</b>

<p><b>Possível causa</b>: A chave SSH está inativa.<br></p>

<p><b>Solução</b>: ative a chave através do endpoint <code><span style="color:blue">PUT</code></span> <code>api/pam/key/[id]</code>, e em envie a requisição de consulta à chave novamente.<br></p>

***
</details>



<details>
<summary><b><span style="color:red">404</span> - Not Found</b></summary>

***
<b>Mensagem: "resource sub not found"</b><br>

<p><b>Possível causa</b>: a URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: verifique a URL e garanta que todos os parâmetros estão corretos.</p>

 * * *   
</details>



<details>
 
<summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

***
    
<b>Mensagem: "Unexpected error."</b><br>
 
<p><b>Possível causa</b>: o erro está no servidor senhasegura.<br>
        
<b>Solução</b>: contate o time de suporte para mais informações.</p>

***

<b>Mensagem: "You are not authorized to access this resource."</b>

<p><b>Possível causa</b>: você não possui autorização para acessar esse recurso.<br>
        
<b>Solução</b>: solicite ao administrador que verifique sua permissão de acesso aos recursos do <b>PAM Core</b> no <b>A2A</b>.</p>

* * *  
 </details>   



<details>
<summary><b>Client authentication failed</b></summary>

*** 
   
<b>Mensagem: "Client authentication failed."</b>
<p><b>Possível causa</b>: falha na autenticação da sua aplicação com o servidor senhasegura.<br>
        
<b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token URL</code>, <code>Client ID</code> e <code>Client secret</code> e solicite um novo token de acesso.</p>

* * *   
</details>
       

<details>
<summary><b>Invalid signature</b></summary>

*** 
    
<b>Mensagem: "Invalid signature"</b>
    
<p><b>Possível causa</b>: falha no reconhecimento da URL da aplicação cliente.
        
<b>Solução</b>: verifique a URL da aplicação cliente e envie a requisição novamente.</p>
* * * 

</details>
     
<details>
    <summary><b>No route matched with those values</b></summary>
    
***   
    
<b>Mensagem: "No route matched with those values."</b>
   <p><b>Possível causa</b>: ausência do header de autorização na requisição de API.<br>
        
  <b>Solução</b>: solicite um novo token de acesso.</p>
    
  * * *
</details>
 

<details>
    <summary><b> Request timed out</b></summary>
    
***
    
<b>Mensagem: "Request timed out."</b>
<p><b>Possível causa</b>: o tempo da requisição se esgotou. <br>
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
</details>