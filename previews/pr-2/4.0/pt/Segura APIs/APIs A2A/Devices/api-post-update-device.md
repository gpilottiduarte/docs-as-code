# POST | Atualizar dispositivo

Atualize um dispositivo no **PAM Core**.

## Pré-requisitos
* Autorização com permissão de **acesso** e de **leitura e escrita** ao **PAM Core** concedidas pelo administrador no **A2A**. 
Saiba mais em [Como gerenciar autorizações no A2A](/v4/docs/pt/how-to-manage-authorizations-in-a2a).
* Dispositivo criado no **PAM Core**. 
Saiba mais em [POST | Criar dispositivo](/v4/docs/pt/api-post-create-device).

## Requisição


 <code><span style="color:orange"> POST</code></span> `/api/pam/device`


## Parâmetros de requisição
Envie os parâmetros que deseja atualizar no <b>body</b>  da requisição.

* <summary><code>ip</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Endereço IP do dispositivo.</summary>


<br>
* <summary><code>hostname</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Nome do host do dispositivo.</summary>

::: (Info) (Info)
Se o `hostname` fornecido corresponder ao de um dispositivo previamente criado, esta requisição atualizará o dispositivo existente. Caso contrário, ela criará um novo dispositivo e o associará a este `hostname`.
:::

<br>
* <summary><code>model</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Modelo do dispositivo.</summary>
<b>Nota</b>: um novo modelo é criado se o valor for único.


<br>
* <summary><code>type</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Tipo de dispositivo.</summary>
<b>Nota</b>: um novo tipo é criado se o valor for único.


<br>
* <summary><code>vendor</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Fabricante do dispositivo.</summary>
<b>Nota</b>: um novo fabricante é criado se o valor for único.


<br>
* <summary><code>site</code> - <b>string</b> - <span style="color:red">obrigatório</span> - Localização do dispositivo.</summary>
<b>Nota</b>: um novo site é criado se o valor for único.


<br>
* <summary><code>device_domain</code> - <b>string</b> - Nome ou abreviação do domínio.</summary>
<b>Nota</b>: apenas domínios previamente registrados são aceitos.
<b>Exemplo</b>: <code>api,app</code>

:::(Warning) (Atenção)
Ao listar mais de um `device_domain`, adicione vírgulas sem espaço entre eles, conforme o exemplo a seguir:
`testlab.com,demo.lab.com`
:::


 <br>
* <summary><code>device_tags</code> - <b>string</b> - Palavras-chave associadas ao dispositivo.</summary>


<br>
* <summary><code>connectivities</code> - <b>string</b> - Conectividade do dispositivo.</summary>


<br>
* <summary><code>session_remote_config</code> - <b>string</b> - Expressão do login.</summary>

<br>


  ### Exemplo de requisição
  
 <code><span style="color:orange"> POST</code></span> `{{url}}/api/pam/device`  

```json 
{
    "ip": "10.66.33.20",
    "hostname": "API device test1",
    "model": "Gmail",
    "type": "Desktop",
    "vendor": "Linux",
    "site": "AWS",
    "device_domain": ""
}
```
  
  
  
  ## Resposta 
 ```json 
  {
    "code": 201,
    "response": {
        "status": 201,
        "message": "Device updated successfully!",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device updated successfully!",
        "erro": false,
        "cod_erro": 0
    },
    "device": {
        "id": "17",
        "hostname": "API device test1",
        "ip": "10.66.33.20",
        "model": "Gmail",
        "type": "Desktop",
        "vendor": "Linux",
        "site": "AWS",
        "device_domain": "",
        "connectivities": "",
        "session_remote_config": "",
        "device_tags": ""
    }
}
 ```
 
 ## Erros
 
 <details>
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>

***
    
<b>Mensagem: "1004: The device's hostname was not informed"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>hostname</code> do dispositivo não foi informado.<br></p>
<b>Solução</b>: informe o <code>hostname</code> do dispositivo e envie a requisição novamente.
  
* * *

<b>Mensagem: "1005: The device's IP was not informed"</b>
<p><b>Possível causa</b>: o parâmetro obrigatório <code>ip</code> do dispositivo não foi informado.<br></p>
    <b>Solução</b>: informe o <code>ip</code> do dispositivo e envie a requisição novamente.
  

* * *
<b>Mensagem: "1019: The device's site was not informed"</b>
 <p><b>Possível causa</b>: o parâmetro obrigatório <code>site</code> do dispositivo não foi informado.<br></p>
  <b>Solução</b>: informe um valor para o parâmetro <code>site</code> e envie a requisição novamente.
 
***
    
 <b>Mensagem: "1020: The device's model was not informed"</b>
 <p><b>Possível causa</b>: o parâmetro obrigatório <code>model</code> do dispositivo não foi informado.<br></p>
  <b>Solução</b>: informe um valor para o parâmetro <code>model</code> e envie a requisição novamente.

  ***
  
  <b>Mensagem: "1021: The device's vendor was not informed"</b>
 <p><b>Possível causa</b>: o parâmetro obrigatório <code>vendor</code> do dispositivo não foi informado<br></p>
  <b>Solução</b>: informe um valor para o parâmetro <code>vendor</code> e envie a requisição novamente.

  ***
 <b>Mensagem: "1022: The device's type was not informed"</b>
 <p><b>Possível causa</b>: o parâmetro obrigatório <code>type</code> do dispositivo não foi informado.<br></p>
  <b>Solução</b>: informe um valor para o parâmetro <code>type</code> e envie a requisição novamente.

  ***
 <b>Mensagem: "1029: It is not possible to enter a domain that has not been previously registered"</b>
 <p><b>Possível causa</b>: não é possível enviar um domínio que não tenha sido registrado.<br></p>
  <b>Solução</b>: informe um valor válido para o parâmetro <code>device_domain</code> e envie a requisição novamente.

  ***
<b>Mensagem: "1039: Without PAM Configuration Access permission"</b>  
<br><b>Possível causa</b>: sua autorização não possui permissão de alteração de dispositivo. 
     
<b>Solução</b>: solicite ao administrador que revise sua permissão de <b>leitura e escrita</b> aos recursos do <b>PAM Core</b> no <b>A2A</b>.

* * *

</details>




<details>
<summary><b><span style="color:red">404</span> - Not Found</b></summary>

***
<b>Mensagem: "Resource sub not found"</b><br>

<p><b>Possível causa</b>: a URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: verifique a URL e garanta que todos os parâmetros estão corretos.</p>

* * *
    
</details>




<details>
    <summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

***
    
<b>Mensagem: "Unexpected error."</b><br>

<p><b>Possível causa</b>: o erro está no servidor Segura.<br>
        
<b>Solução</b>: contate o time de suporte para mais informações.</p>
    
 ***
<b>Mensagem: "You are not authorized to access this resource."</b>
<p><b>Possível causa</b>: você não possui autorização para acessar esse recurso.<br>
        
<b>Solução</b>: solicite ao administrador que revise sua permissão de acesso aos recursos do <b>PAM Core</b> no <b>A2A</b>.</p>

* * *
</details>
     


<details>
<summary><b>Client authentication failed</b></summary>

*** 
   
<b>Mensagem: "Client authentication failed."</b>
    
<p><b>Possível causa</b>: falha na autenticação da sua aplicação com o servidor Segura.<br>
        
<b>Solução</b>: verifique os parâmetros de autenticação como <code>Access Token URL</code>, <code>Client ID</code> e <code>Client secret</code> e solicite um novo token de acesso.</p>
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
        
<b>Solução</b>: verifique a conectividade entre a origem da requisição e o servidor Segura.</p>
</details>