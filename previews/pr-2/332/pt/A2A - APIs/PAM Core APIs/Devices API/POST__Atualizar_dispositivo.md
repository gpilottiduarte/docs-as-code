# POST | Atualizar dispositivo

Este documento apresenta como atualizar um dispositivo no **PAM Core** via API.

## Requisição
Para atualizar um dispositivo no **PAM Core**, envie uma requisição para o seguinte endpoint:

 <code><span style="color:orange"> POST</code></span> `iso/pam/device`
 


## Parâmetros de requisição
<details>
<summary>Envie os parâmetros abaixo no <b>corpo</b> (<i>body</i>) da requisição</summary> 

:::(Info) (Info)
Se o `hostname` fornecido corresponder ao de um dispositivo previamente criado, esta requisição atualizará o dispositivo existente. Caso contrário, ela criará um novo dispositivo e o associará a este `hostname`.
:::    

| Campo | Tipo | Obrigatório | Descrição | Exemplo |Valor padrão do novo dispositivo |
| --- | --- | --- | --- | --- | --- |
| `ip` | String | **Sim** | Endereço IP do dispositivo. | 10.66.33.20 |- |
| `hostname` | String | **Sim** | Nome do dispositivo. | API device test |- |
| `model`| String | **Sim** | Modelo do dispositivo. Um novo modelo é criado se o valor for único. | Gmail |- |
| `type` | String | **Sim** | Tipo de dispositivo. Um novo tipo é criado se o valor for único. | Desktop |- |
| `vendor` | String | **Sim** | Fornecedor associado ao dispositivo. Um novo fornecedor é criado se o valor for único. | Linux |- |
| `site` | String | **Sim** | Site associado ao dispositivo. Um novo site é criado se o valor for único. | AWS |- |
| `device_domain` | String | Não | Nome ou abreviação do domínio. Apenas domínios previamente registrados são aceitos. | api, app |- |
| `device_tags` | String | Não | Tags associadas ao dispositivo. | api, app |- |
| `connectivities` | String | Não | Conectividade do dispositivo. | SSH:22 |- |
| `session_remote_config` | String | Não | Expressão do login. |  |- |
  
</details>     



:::(Warning) (Atenção)
Ao listar mais de um `device_domain`, adicione vírgulas sem espaço entre eles, conforme o exemplo a seguir:
"testlab.com,demo.lab.com".
:::
  ## Exemplo de requisição

```json 
{
    "ip": "10.66.33.20",
    "hostname": "API device test",
    "model": "Gmail",
    "type": "Desktop",
    "vendor": "Linux",
    "site": "AWS",
    "device_domain": ""
}
```
  
  
  
  ## Resposta esperada
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
        "hostname": "API device test",
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
<p><b>Possível causa</b>: <code>hostname</code> do dispositivo não informado.<br></p>
<b>Solução</b>: Informe o <code>hostname</code> do dispositivo e envie a requisição novamente.
  
* * *

<b>Mensagem: "1005: The device's IP was not informed",</b>
<p><b>Possível causa</b>: <code>ip</code> do dispositivo não informado.<br></p>
    <b>Solução</b>: Informe o <code>ip</code> do dispositivo e envie a requisição novamente.
  

* * *
<b>Mensagem: "1019: The device's site was not informed"</b>
 <p><b>Possível causa</b>: <code>site</code> do dispositivo não informado.<br></p>
  <b>Solução</b>: Informe um valor para o parâmetro <code>site</code> e envie a requisição novamente.
 
***
    
 <b>Mensagem: "1020: The device's model was not informed"</b>
 <p><b>Possível causa</b>: Modelo do dispositivo não informado.<br></p>
  <b>Solução</b>: Informe um valor para o parâmetro <code>model</code> e envie a requisição novamente.

  ***
  
  <b>Mensagem: "1021: The device's vendor was not informed"</b>
 <p><b>Possível causa</b>: Fornecedor do dispositivo não informado.<br></p>
  <b>Solução</b>: Informe um valor para o parâmetro <code>vendor</code> e envie a requisição novamente.

  ***
 <b>Mensagem: "1022: The device's type was not informed"</b>
 <p><b>Possível causa</b>: Tipo do dispositivo não informado.<br></p>
  <b>Solução</b>: Informe um valor para o parâmetro <code>type</code> e envie a requisição novamente.

  ***
 <b>Mensagem: "1029: It is not possible to enter a domain that has not been previously registered"</b>
 <p><b>Possível causa</b>: Não é possível enviar um domínio que não tenha sido registrado.<br></p>
  <b>Solução</b>: Informe um valor válido para o parâmetro <code>device_domain</code> e envie a requisição novamente.

  ***
<b>Mensagem: "1039: Without PAM Configuration Access permission"</b>  
<br><b>Possível causa</b>: Sua autorização não possui permissão de atualização de dispositivo. 
     
<b>Solução</b>: Revise a autorização para adicionar a permissão de <b>leitura e escrita</b> ao seu usuário.


</details>


* * *

<details>
<summary><b><span style="color:red">404</span> - Not Found</b></summary>

***
<b>Mensagem: "Resource sub not found"</b><br>

<p><b>Possível causa</b>: A URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: Verifique a URL e garanta que todos os parâmetros estão corretos.</p>
***
    
</details>

***

<details>
<summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

***
    
<b>Mensagem: "Unexpected error."</b><br>

<p><b>Possível causa</b>: O erro está no servidor senhasegura.<br>
        
<b>Solução</b>: Contate o time de suporte para mais informações.</p>
    
 ***
<b>Mensagem: "You are not authorized to access this resource."</b>
<p><b>Possível causa</b>: Você não possui autorização para acessar esse recurso.<br>
        
<b>Solução</b>: Verifique sua permissão de acesso aos recursos do <b>PAM Core</b>.</p>
    
</details>
     
* * *

<details>
<summary><b>Client authentication failed</b></summary>

*** 
   
<b>Mensagem: "Client authentication failed."</b>
    
<p><b>Possível causa</b>: Falha na autenticação da sua aplicação com o servidor senhasegura.<br>
        
<b>Solução</b>: Corrija os parâmetros <b>Client ID</b> e <b>Client secret</b> e solicite um novo token de acesso.</p>
</details>
     
* * *     
<details>
    <summary><b>No route matched with those values</b></summary>
    
***   
    
<b>Mensagem: "No route matched with those values."</b>
   <p><b>Possível causa</b>: Ausência do header de autorização na requisição de API.<br>
        
  <b>Solução</b>: Solicite um novo token de acesso.</p>
</details>
 
* * *
<details>
    <summary><b> Request timed out</b></summary>
    
***
    
<b>Mensagem: "Request timed out."</b>
<p><b>Possível causa</b>: O tempo da requisição se esgotou. <br>
        
<b>Solução</b>: Verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
</details>