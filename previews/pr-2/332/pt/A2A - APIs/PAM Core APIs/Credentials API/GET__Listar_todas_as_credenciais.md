# GET | Listar todas as credenciais

Este documento apresenta como acessar informações das credenciais associadas à sua autorização no **PAM Core** via API.

## Requisição
Para acessar uma lista com todas as credenciais registradas no **PAM Core**, envie uma requisição para o seguinte endpoint:

 <code><span style="color:green"> GET</code></span> `iso/pam/credential`

:::(Info) (Info)
Chaves SSH inseridas como credencial, também serão listadas nessa resposta. Entretanto, para listar uma chave SSH específica, envie uma requisição <code><span style="color:green"> GET</code></span> para o endpoint  `iso/pam/key[id]`. Para mais informações, acesse o documento sobre [Consultar uma chave SSH](/v3-32/docs/pt/a2a-pam-core-query-an-ssh-key). 
:::


## Resposta esperada

`HTTP/1.1 200 OK`

``` json
{
    "response": {
        "status": 200,
        "mensagem": "2 credentials found",
        "erro": false,
        "message": "2 credentials found",
        "error": false
    },
    "credentials": [
        {
            "id": "1",
            "identifier": "exampleuser01ws",
            "username": "exampleuser01",
            "expiration": null,
            "change": "2020-11-17 16:14:35",
            "view": null,
            "hostname": "exampledevice01",
            "management_ip": "172.10.20.30",
            "type": "Local User",
            "type_code": "1",
            "device_model": "Example Product",
            "device_type": "Server",
            "device_vendor": "Example Vendor",
            "automatic_change": "0",
            "connectivity": "",
            "connectivity_code": ""
        },
        {
            "id": "2",
            "identifier": "exampleuser02ws",
            "username": "exampleuser02",
            "expiration": null,
            "change": "2020-11-17 16:14:35",
            "view": null,
            "hostname": "exampledevice01",
            "management_ip": "172.10.20.30",
            "type": "Local User",
            "type_code": "1",
            "device_model": "Example Product",
            "device_type": "Server",
            "device_vendor": "Example Vendor",
            "automatic_change": "0",
            "connectivity": "",
            "connectivity_code": ""
        }
    ]
}
```

## Erros




<details>
    <summary><b><span style="color:red">404</span> - Resource sub not found</b></summary>
    <p><b>Possível problema</b>: A URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: Verifique a URL e garanta que todos os parâmetros estão corretos.</p>
</details>
<details>
    <summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>
    <p><b>Possível problema</b>: O erro está no servidor senhasegura.<br>
        
   <b>Solução</b>: Contate o time de suporte para mais informações.</p>
</details>
<details>
    <summary><b>Client authentication failed</b></summary>
    <p><b>Possível problema</b>: Falha na autenticação da sua aplicação com o servidor senhasegura.<br>
        
   <b>Solução</b>: Corrija os parâmetros <b>Client ID</b> e <b>Client secret</b> e solicite um novo token de acesso.</p>
</details>

<details>
    <summary><b>No route matched with those values</b></summary>
    
   <p><b>Possível problema</b>: Ausência do header de autorização na requisição de API. .<br>
        
  <b>Solução</b>: Solicite um novo token de acesso.</p>
</details>
<details>
    <summary><b> Request timed out</b></summary>
    <p><b>Possível problema</b>: O tempo da requisição se esgotou. <br>
    
   <b>Solução</b>: Verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
</details>