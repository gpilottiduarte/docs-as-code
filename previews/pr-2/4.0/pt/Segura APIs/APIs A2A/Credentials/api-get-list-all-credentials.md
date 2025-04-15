# GET | Listar todas as credenciais

Acesse informações de todas as credenciais associadas à sua autorização no **PAM Core**.

## Pré-requisitos

* Autorização com permissão de **acesso** ao **PAM Core** concedida pelo administrador no **A2A**.
Saiba mais em [Como gerenciar autorizações no A2A](/v4/docs/pt/how-to-manage-authorizations-in-a2a).


## Requisição


 <code><span style="color:green"> GET</code></span> `api/pam/credential`

:::(Info) (Info)
Chaves SSH inseridas como credenciais, também serão listadas nessa resposta. Entretanto, para listar uma chave SSH específica, envie uma requisição <code><span style="color:green"> GET</code></span> para o endpoint  `api/pam/key[id]`. Acesse o documento [GET | Listar uma chave SSH por [id]](/v4/docs/pt/api-get-list-an-ssh-key) para mais informações. 
:::

### Exemplo de requisição
<code><span style="color:green"> GET</code></span> `{{url}}/api/pam/credential`

## Resposta 

```json 
HTTP/1.1 200 OK
```

``` json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "2 credentials found",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "2 credentials found",
        "erro": false,
        "cod_erro": 0
    },
    "credentials": [
        {
            "id": "2",
            "identifier": "018f3fe6-10e2-724d-9229-a6e9749fa88e",
            "username": "testefelipeqasenhasegura@gmail.com",
            "expiration": "2024-05-16T17:31:31-03:00",
            "change": "2024-05-03 16:19:53",
            "view": "2024-05-24 16:26:09",
            "hostname": "gmail.com",
            "management_ip": "mail.google.com",
            "type": "Local User",
            "type_code": "1",
            "device_model": "Gmail",
            "device_type": "Web Application",
            "device_vendor": "Google",
            "automatic_change": false,
            "connectivity": "HTTPS",
            "connectivity_code": "10"
        },
        {
            "id": "39",
            "identifier": "018fcedb-fbd5-70ff-9864-b81fcd00e410",
            "username": "dleite",
            "expiration": null,
            "change": "2024-05-31 11:03:13",
            "view": null,
            "hostname": "w2016",
            "management_ip": "10.66.33.15",
            "type": "SSH Key",
            "type_code": "1",
            "device_model": "Windows Server 2016",
            "device_type": "Server",
            "device_vendor": "Microsoft",
            "automatic_change": false,
            "connectivity": "RDP",
            "connectivity_code": "13"
        }
    ]
}

```

### Campos do corpo da resposta


* <summary><code>credentials</code> - <b>array de objetos</b> - Dados das credenciais listadas.</summary>

<summary>&nbsp;&emsp;&emsp;&nbsp;→ <code>id</code> - <b><b>int</b></b> - Código único de identificação da credencial.</summary>
&nbsp;&emsp;&emsp;<b>Nota</b>: esse valor é atribuído automaticamente pelo Segura em <a href="/v4/docs/pt/api-post-create-credential">POST | Criar credencial.</a>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>identifier</code> - <b><b>string</b></b> - String única criada pelo usuário ou pelo Segura para identificar a credencial.<summary>
&nbsp;&emsp;&emsp;<b>Nota</b>: esse valor pode ser atualizado através do endpoint <code><span style="color:orange"> POST</code></span> <code>api/pam/credential</code>.
   
<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>username</code> - <b><b>string</b></b> - Nome do usuário designado à credencial.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>expiration</code> - <b>string</b> - Data e hora de expiração da credencial em formato ISO 8601.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Exemplo</b>: <code>2024-05-16T17:31:31-03:00</code>

<br>


    <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>change </code> - <b>string</b> - Data e hora da última alteração na credencial em formato ISO 8601.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Exemplo</b>: <code>2024-05-03 16:19:53</code>

<br>

    <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>view </code> - <b>string</b> - Data e hora da última visualização da credencial em formato ISO 8601.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Exemplo</b>: <code>2024-05-24 16:26:09</code>

<br>
    
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>hostname</code> - <b>string</b> - Nome do host do dispositivo associado à credencial.</summary>

    
<br>    
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>management_ip</code> - <b>string</b> - Endereço IP de gerenciamento associado ao dispositivo da credencial.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>type</code> - <b>string</b> - Tipo de credencial.</summary> 


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>type_code</code> - <b>string</b> - Código do tipo de credencial.</summary>
 

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>device_model</code> - <b>string</b> - Modelo do dispositivo associado à credencial.</summary> 

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>device_type</code> - <b>string</b> - Tipo de dispositivo associado à credencial.</summary> 

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>device_vendor</code> - <b>string</b> - Fabricante do dispositivo associado à credencial.</summary> 

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>automatic_change</code> - <b>boolean</b> - Indica se a senha é alterada automaticamente.</summary> 

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>connectivity</code> - <b>string</b> - Tipo de conectividade da credencial.</summary>

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>connectivity_code</code> - <b>string</b> - Código do tipo de conectividade da credencial.</summary>


## Erros

<details>
    <summary><b><span style="color:red">404</span> - Not Found</b></summary>

***

<p><b>Mensagem: "Resource sub not found"</b>
<p><b>Possível causa</b>: a URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: verifique a URL e envie a requisição novamente.</p>


***

</details>

<details>
 
<summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

***

<b>Mensagem: "Unexpected error"</b><br>
<p><b>Possível causa</b>: o erro está no servidor Segura.<br>
        
<b>Solução</b>: contate o time de suporte para mais informações.</p>

* * *  
<b>Mensagem: "You are not authorized to access this resource"</b>    
<br><b>Possível causa</b>: você não possui autorização para acessar esse recurso. 
     
<b>Solução</b>: solicite ao administrador que revise sua permissão de acesso aos recursos do <b>PAM Core</b> no <b>A2A</b>.
   
    

* * *
</details>  

<details>
<summary><b>Client authentication failed</b></summary>

*** 
   
<b>Mensagem: "Client authentication failed."</b>
<p><b>Possível causa</b>: falha na autenticação da sua aplicação com o servidor Segura.<br>
        
   <b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token URL</code>, <code>Client ID</code> e <code>Client secret</code> e solicite um novo token de acesso.</p>

     
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
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor Segura.</p>
</details> 