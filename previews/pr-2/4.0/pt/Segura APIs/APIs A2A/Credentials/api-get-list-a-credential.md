# GET | Listar uma credencial

Acesse informações de uma credencial no **PAM Core**.

## Pré-requisitos
* Autorização com permissão de **acesso** ao **PAM Core** concedida pelo administrador no **A2A**. 
Saiba mais em [Como gerenciar autorizações no A2A](/v4/docs/pt/how-to-manage-authorizations-in-a2a).
* Credencial criada no **PAM Core**. 
Saiba mais em [POST | Criar credencial](/v4/docs/pt/api-post-create-credential).

##  Listar credencial por `id` - Requisição

<code><span style="color:green"> GET</code></span> `/api/pam/credential/[id]`

### Parâmetros de requisição

Envie o parâmetro abaixo no <b>path</b> da URL.

* <summary><code>id</code> - <b>int</b> - <span style="color:red"> obrigatório</span style="color:red"> - Código único de identificação da credencial.</summary><p><b>Nota</b>: esse valor é automaticamente atribuído pelo Segura em <a href = "/v3-33/docs/pt/api-post-create-credential"> POST | Criar credencial</a> e é obtido na resposta da requisição <a href = "/v3-33/docs/pt/api-get-list-all-credentials"> GET | Listar todas as credenciais</a>.</p>

### Exemplo de requisição

<code><span style="color:green">GET</code></span> `{{url}}/api/pam/credential/5`

### Resposta 

```json
HTTP/1.1 200 OK
```
```json
{
    "response": {
        "status": 200,
        "mensagem": "Credential 5",
        "erro": false,
	 "detail": "",
        "message": "Credential 5",
        "error": false,
	 "error_code": 0
    },
    "credential": {
        "id": "5",
        "identifier": "robot-test-5",
        "username": "credential_5",
        "password": "secret@2504",
        "content": "secret@2504",
        "hostname": "destktop-91.com",
        "parent_credential_cod": null,
        "parent_credential": null,
        "additional": "CREDADD01",
        "domain": "",
        "ip": "172.10.10.90",
        "port": "22",
        "model": "Ubuntu",
        "expiration_time": "2021-01-16T17:31:39"
    }

```

##  Listar credencial por `username@hostname` - Requisição


 <code><span style="color:green"> GET</code></span> `/api/pam/credential/[username@hostname]`

### Parâmetros de requisição

Envie o parâmetro abaixo no <b>path</b> da URL.

* <summary><code>username@hostname</code> - <b>int</b> - <span style="color:red"> obrigatório</span style="color:red"> - Nome de usuário (<code>username</code>) e nome do host do dispositivo (<code>hostname</code>) associados à credencial separados por um sinal de @.</summary><p><b>Nota</b>: esses valores são informados pelo usuário em <a href="/v4/docs/pt/api-post-create-credential">POST | Criar credencial</a> e são obtidos na resposta da requisição <a href="/v4/docs/pt/api-get-list-all-credentials">GET | Listar todas as credenciais</a>.</p><p><b>Exemplo</b>: <code>credential_5@destktop-91.com</code></p>

<br>

::: (Warning) (Atenção)
Caso o `username` fornecido possua um @, como em `johndoe@Segura`, o endpoint não funcionará como esperado devido ao conflito gerado pela presença de dois símbolos @ no endpoint.
:::

### Exemplo de requisição

<code><span style="color:green">GET</code></span> `{{url}}api/pam/credential_5@destktop-91.com`

### Resposta 


```json
HTTP/1.1 200 OK
``` 

```json
json
{
    "response": {
        "status": 200,
        "mensagem": "Credential 5",
        "erro": false,
	 "detail": "",
        "message": "Credential 5",
        "error": false,
	 "error_code": 0
    },
    "credential": {
        "id": "5",
        "identifier": "robot-test-5",
        "username": "credential_5",
        "password": "secret@2504",
        "content": "secret@2504",
        "hostname": "destktop-91.com",
        "parent_credential_cod": null,
        "parent_credential": null,
        "additional": "CREDADD01",
        "domain": "",
        "ip": "172.10.10.90",
        "port": "22",
        "model": "Ubuntu",
        "expiration_time": "2021-01-16T17:31:39"
    }
```

### Campos do corpo da resposta

* <summary><code>credential</code> - <b>objeto</b> - Dados da credencial.</summary>


<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>id</code> - <b><b>int</b></b> - Código único de identificação da credencial.</summary>



<br>


<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>identifier</code> - <b><b>string</b></b> - String única criada pelo usuário ou pelo Segura para identificar a credencial.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: esse valor pode ser atualizado através da requisição <a href="/v4/docs/pt/api-post-update-credential">POST | Atualizar credencial</a>.

    
<br>
    
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>username</code> - <b><b>string</b></b> - Nome do usuário designado à credencial.</summary>

<br>

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>password</code> - <b>string</b> - Senha designada à credencial.</summary>


<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>content</code> - <b>string</b> - Senha designada à credencial.</summary> 

<br>
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>hostname</code> - <b>string</b> - Nome do host do dispositivo associado à credencial.</summary> 
    
<br>    
  <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>parent_credential_cod</code> - <b>string</b> - Identificador da credencial pai.</summary> 
    
<br>  
    
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>parent_credential</code> - <b>string</b> - Credencial pai.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: ao escolher uma credencial pai, a credencial filha irá assumir a mesma senha da credencial pai. Sempre que ocorrer uma troca de senha, manual ou automatizada, na credencial pai, a credencial filha também será modificada e assumirá a mesma senha da credencial pai. 


<br> 

   <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>additional</code> - <b>string</b> - Informações adicionais sobre a credencial.</summary>


<br>     

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>domain</code> - <b>string</b> - Nome de domínio ou abreviação.</summary>


<br>     

 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>ip</code> - <b>string</b> - Endereço IP do dispositivo associado à credencial.</summary>


<br>    
 
<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>port</code> - <b>string</b> - Porta associada à credencial.</summary>


<br>  

<summary>&nbsp;&emsp;&emsp;&nbsp;→<code>model</code> - <b>string</b> - Modelo do dispositivo.</summary>
    &nbsp;&emsp;&emsp;&nbsp;<b>Nota</b>: um novo modelo é criado caso o valor passado seja único.
    


<br> 
   
 <summary>&nbsp;&emsp;&emsp;&nbsp;→<code>expiration_time</code> - <b>string</b> - Data e hora de expiração da credencial em formato ISO 8601.</summary>
&nbsp;&emsp;&emsp;&nbsp;<b>Exemplo</b>: <code>2024-05-16T17:31:31-03:00</code>


## Erros

<details>
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>
    

***

 <b>Mensagem: "1007: Credential not found"</b>
    
 <p><b>Possível causa</b>: a credencial não foi encontrada.<br>
        
<b>Solução</b>: verifique se os valores dos parâmetros usados para buscar pela credencial estão corretos e envie a requisição novamente.</p>
    

* * *

<b>Mensagem: "1009: No access to credential"</b>

<br><b>Possível causa</b>: sua autorização não possui acesso à credencial. 
    
   <b>Solução</b>: solicite ao administrador que revise sua permissão de acesso à credencial desejada.
* * *

<b>Mensagem: "1010: The item is not a credential"</b>

<br><b>Possível causa</b>: o valor do parâmetro <code>id</code> não corresponde a uma credencial. 

<b>Solução</b>: verifique o <code>id</code> e envie a requisição novamente.

* * *
</details>



<details>
    <summary><b><span style="color:red">404</span> - Not Found</b></summary>
    

***

 <b>Mensagem: "Resource sub not found"</b>
    
 <p><b>Possível causa</b>: a URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: verifique a URL e envie a requisição novamente.</p>
 
* * *
</details>
 

<details>
<summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

***
    
<b>Mensagem: "Unexpected error."</b><br>
 
<p><b>Possível causa</b>: o erro está no servidor Segura.<br>
        
<b>Solução</b>: contate o time de suporte para mais informações.</p>

***

<b>Mensagem: "You are not authorized to access this resource"</b>

<b>Possível causa</b>: você não possui autorização para acessar esse recurso.<br>
        
<b>Solução</b>: solicite ao administrador que revise sua permissão de acesso aos recursos do <b>PAM Core</b> no <b>A2A</b>.

* * *
</details>



<details>
<summary><b>Client authentication failed</b></summary>

*** 
   
<b>Mensagem: "Client authentication failed"</b>
<p><b>Possível causa</b>: falha na autenticação da sua aplicação com o servidor Segura.<br>
        
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
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor Segura.</p>
</details>     