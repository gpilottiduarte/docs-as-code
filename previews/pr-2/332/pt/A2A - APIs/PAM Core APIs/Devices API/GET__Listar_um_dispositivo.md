# GET | Listar um dispositivo

Este documento apresenta como acessar informações de um dispositivo associado à sua autorização no **PAM Core** via API.

## Requisitos

* Permissão de acesso ao **PAM Core** no módulo **A2A**. Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.

## Requisição
Para acessar informações de um dispositivo registrado no **PAM Core**, envie uma requisição para o seguinte endpoint:

 <code><span style="color:green">GET</code></span> `iso/pam/device/[id]`
 
 ## Parâmetros de requisição
<details>
    <summary>Envie o parâmetro abaixo no <b>caminho</b> (<i>path</i>) da URL</summary>
    <p>

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| `id` | Int | Sim | Código único de identificação do dispositivo. Esse valor é automaticamente atribuído pelo senhasegura em POST Criar dispositivo e é obtido na resposta da requisição GET Listar todos os dispositivo. | 53 |</p>
</details>

## Resposta esperada

```
HTTP/1.1 200 OK 
```
```
{
    "response": {
        "status": 200,
        "mensagem": "Device 53",
        "erro": false,
        "cod_erro": 0,
        "message": "Device 53",
        "error": false,
        "error_code": 0
    },
    "device": {
        "id": "53",
        "hostname": "desktop-91.com",
        "ip": "172.10.20.90",
        "model": "Ubuntu",
        "type": "Desktop",
        "vendor": "Linux",
        "site": "AWS",
        "device_domain": "senhasegura.lab",
        "connectivities": "SSH:22",
        "session_remote_config": "SSH:EXPECT:FILL",
        "device_tags": "api, app"
    }
}
```

## Erros
     

<details>
 
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>

***

<b>Mensagem: "1011: Device not found"</b><br>
<p><b>Possível causa</b>: Dispositivo não encontrado.<br>
        
<b>Solução</b>: Verifique o <code>id</code> enviado para buscar pelo dispositivo e envie a requisição novamente.</p>
</details>

* * * 

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
    
   
<b>Mensagem: "Client authentication failed."</b>
    
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
     
     