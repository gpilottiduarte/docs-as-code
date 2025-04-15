# POST | Atualizar chave SSH

Atualize uma chave SSH no **PAM Core**.

## Requisitos
* Autorização com permissão de **acesso** e de **leitura e escrita** ao **PAM Core** concedidas pelo administrador no **A2A**.
Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.
* Chave SSH criada no **PAM Core**. 
Acesse o documento [POST | Criar chave SSH](/v3-33/docs/pt/api-post-create-ssh-key) para mais informações.

## Requisição

 <code><span style="color:orange"> POST</code></span> `/api/pam/key`


## Parâmetros de requisição

Envie os parâmetros abaixo no <b>body</b>  da requisição.


* <code>identifier</code> - <b>string</b> - <span style="color:red">obrigatório</span> - String única para identificação da chave SSH.
    <b>Nota</b>: valor fornecido pelo usuário ou gerado automaticamente pelo senhasegura em  <a href="/v3-33/docs/pt/api-post-create-ssh-key">POST | Criar chave SSH</a> e obtido na resposta da requisição de <a href="/v3-33/docs/pt/api-get-list-an-ssh-key">GET | Listar uma chave SSH por [<code>id</code>]</a>. 



<br>
*  <code>ip</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Endereço IP do dispositivo principal associado à chave SSH.

<br>

*  <code>hostname</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Nome do dispositivo principal associado à chave SSH.
<br>

*  <code>private_key</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Chave privada necessária para autenticação do usuário. 
    <p><b>Exemplo</b>: <code>-----BEGIN OPENSSH PRIVATE KEY-----\rcTA9Vb5aA0kXaK2HEjGUWgeCBG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\rQyNTUxOQAAACCLABE9/nb3BlbnNzaC1rZXktdjEAAAAAxtPOCkR2sGccAAAAKi5DXJnuQ1y\r\nZwAAAAtzc2gtZWQyNTUxOQAAACCLABE9/cTA9VTGVpdGVGZXJyZWlyYUBIUjFTUkb5aA0kXaK2HEjGUWgeCxtPOCkR2sGccA\rDgaNiGsvbkkkXhepU2NQi3iZ4sAET39xMD1VvloDSRdorYc\rSMZRaB4LG084KRHawZxwAAAAI0F6dXJlQUQrRGVib3JhAAAECc20zsB7FuSJQAqhLxe\rgzAQI=\r-----END OPENSSH PRIVATE KEY-----</code></p>
<br>

* <code>public_key</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Chave pública que permite que servidores verifiquem a identidade do usuário associado à chave privada correspondente.
    <p><b>Exemplo</b>: <code>ssh-ed25519 C1lZDI1NTE5AAawZxwAAAAAAC3NzaIIsAET39xdorYcSMZRaB4LG084MD1VvloDSRKRH AzureAD+DeboraLeiteFerreira@HR1SRH3</code></p>

<br>

* <code>username</code> - <b>string</b> - Nome de usuário relacionado à chave no dispositivo.<p><b>Nota</b>: apesar de não obrigatório, como boa prática, o preenchimento desse campo facilita a busca pela chave SSH.</p></p><p><b>Valor padrão da nova chave SSH</b>: <code>usr</code></p>

<br>

* <code>enabled</code> - <b>boolean</b> - Situação da chave SSH: ativa = <code>true</code>; inativa = <code>false</code>

<br>

* <code>devices</code> - <b>array of hostnames</b> - Dispositivos adicionais associados à chave SSH, contendo seu <code>hostname</code>.
<br>

 &nbsp;&emsp;&emsp;&nbsp;→ <code>hostname</code> - <b>string</b> - Nome do host do dispositivo adicional.
    &nbsp;&emsp;&emsp;<b>Nota</b>: apenas dispositivos previamente registrados são aceitos.
    

<br>

* <code>tags</code> - <b>string</b> - Palavras-chave associadas à chave SSH.

<br>
* <code>key_name</code> - <b>string</b> - Nome da chave SSH.<p><b>Nota</b>: apesar de não obrigatório, como boa prática, o preenchimento desse campo facilita a busca pela chave SSH. 

<br>
* <code>password</code> - <b>string</b> - Senha opcional que fornece uma camada extra de segurança à chave privada.



### Exemplo de requisição
    
<code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/key`

```json 
{
    "identifier": "sshkey3",
    "ip": "10.66.33.120",
    "hostname": "w2016",
    "private_key": "-----BEGIN OPENSSH PRIVATE KEY-----\r\nTA9Vb5aA0kXaK2HEjGUWgeCBG5vbmUAAAAEbm9uZQAAAAAAAAABAAAAMwAAAAtzc2gtZW\r\nQyNTUxOQAAACCLABE9/nb3BlbnNzaC1rZXktdjEAAAAAxtPOCkR2sGccAAAAKi5DXJnuQ1y\r\nZwAAAAtzc2gtZWQyNTUxOQAAACCLABE9/cTA9VTGVpdGVGZXJyZWlyYUBIUjFTUkb5aA0kXaK2HEjGUWgeCxtPOCkR2sGccA\r\nDgaNiGsvbkkkXhepU2NQi3iZ4sAET39xMD1VvloDSRdorYc\r\nSMZRaB4LG084KRHawZxwAAAAI0F6dXJlQUQrRGVib3JhAAAECc20zsB7FuSJQAqhLxe\r\ngzAQI=\r\n-----END OPENSSH PRIVATE KEY-----",
        "public_key": "ssh-ed25519 C1lZDI1NTE5AAawZxwAAAAAAC3NzaIIsAET39xdorYcSMZRaB4LG084MD1VvloDSRKRH AzureAD+DeboraLeiteFerreira@HR1SRH3",
    "username": "dleite3",
    "enabled": true,
    "devices": [
        {
            "hostname": "API device test"
        }
    ],
    "tags": "mainsshkey",
    "key_name": "test4",
    "password": "fkjwe87a5a8fa9a"
}

```
  
  
  
  ## Resposta 
 ```json 
  {
    "code": 201,
    "response": {
        "status": 201,
        "message": "Key updated successfully!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Key updated successfully!",
        "erro": false,
        "cod_erro": 0
    },
    "key": {
        "id": "83",
        "identifier": "sshkey3",
        "devices": [
            {
                "hostname": "API device test",
                "ip": "10.66.33.20"
            }
        ],
        "devices_error": []
    }
}
 ```
 
 ## Erros
 
 <details>
<summary><b><span style="color:red">400</span> - Bad Request</b>.</summary>

***
    
<b>Mensagem: "1004: The device's hostname was not informed"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>hostname</code> do dispositivo não foi informado.<br></p>
<b>Solução</b>: informe um valor para o parâmetro <code>hostname</code> do dispositivo e envie a requisição novamente.
  
* * *

<b>Mensagem: "1005: The device's IP was not informed"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>ip</code> do dispositivo não foi informado.<br></p>
    <b>Solução</b>: informe um valor para o parâmetro <code>ip</code> do dispositivo e envie a requisição novamente.
  

* * *
    
 <b>Mensagem: "1013: The public key was not informed"</b>
 <p><b>Possível causa</b>: o parâmetro obrigatório <code>public_key</code> não foi informado.<br></p>
  <b>Solução</b>: informe um valor para o parâmetro <code>public_key</code> e envie a requisição novamente.
 
***
<b>Mensagem: "1014: The private key was not informed"</b>
 <p><b>Possível causa</b>: o parâmetro obrigatório <code>private_key</code> não foi informado.<br></p>
  <b>Solução</b>: informe um valor para o parâmetro <code>private_key</code> e envie a requisição novamente.

  ***
<b>Mensagem: "1039: Without PAM Configuration Access permission"</b>  
<br><b>Possível causa</b>: sua autorização não possui permissão de criação de dispositivo. 
     
<b>Solução</b>: solicite ao administrador que revise sua permissão de <b>leitura e escrita</b> aos recursos do <b>PAM Core</b> no <b>A2A</b>.

*** 

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
        
<b>Solução</b>: solicite ao administrador que revise sua permissão de acesso aos recursos do <b>PAM Core</b> no <b>A2A</b>.</p>

*** 
    
</details>


<details>
<summary><b>Client authentication failed</b>.</summary>

***
   
<b>Mensagem: "Client authentication failed."</b>
    
<p><b>Possível causa</b>: falha na autenticação da sua aplicação com o servidor senhasegura.<br>
        
<b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token URL</code>, <code>Client ID</code> e <code>Client secret</code> e solicite um novo token de acesso.</p>

*** 
</details>
     


<details>
<summary><b>Invalid signature</b>.</summary>

*** 
    
<b>Mensagem: "Invalid signature"</b>
    
<p><b>Possível causa</b>: falha no reconhecimento da URL da aplicação cliente.
        
<b>Solução</b>: verifique a URL da aplicação cliente e envie a requisição novamente.</p>

*** 
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