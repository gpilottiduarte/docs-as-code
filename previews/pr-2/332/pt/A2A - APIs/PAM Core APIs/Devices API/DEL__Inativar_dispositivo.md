# DEL | Inativar dispositivo

Este documento apresenta como inativar um dispositivo inativo associado à sua autorização no **PAM Core** via API.

## Requisitos
* Um dispositivo no **PAM Core**. Acesse o documento POST | Criar dispositivo para mais informações.

## Requisição

Para inativar um dispositivo registrado no **PAM Core**, envie uma requisição para o seguinte endpoint:

 <code><span style="color:red"> DEL</code></span> `/iso/pam/device/[id]`

### Parâmetros da requisição

<details>
<summary>Envie o parâmetro abaixo no <b>caminho</b> (<i>path</i>) da URL</summary>

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| `id` | Int | Sim | Código único de identificação do dispositivo. Esse valor é automaticamente atribuído pelo senhasegura em POST Criar dispositivo e é obtido na resposta da requisição GET Listar todos os dispositivos.  | 5 |</p>
</details>

:::(Warning) (Atenção)
Ao inativar um dispositivo, todas as credenciais associadas a ele são automaticamente suspensas.
:::
### Resposta esperada

`HTTP/1.1 200 OK`

 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Device successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}
```

## Erros

<details>
<summary><b><span style="color:red">400</span> - Bad Request</b></summary>
 
* * *
    
    
<b>Mensagem: "1011: Device not found"</b>     

<br><b>Possível causa</b>: Dispositivo não encontrado. 
     
<b>Solução</b>: Verifique se os valores dos parâmetros usados para buscar pela credencial estão corretos e envie a requisição novamente.

* * *
    
    
<b>Mensagem: "1039: Without PAM Configuration Access permission"</b>  
<br><b>Possível causa</b>: Sua autorização não possui permissão de criação de dispositivo. 
<b>Solução</b>: Revise a autorização para adicionar a permissão de <b>leitura e escrita</b> ao seu usuário.

***

<b>Mensagem: "1039: Without PAM Configuration Access permission"</b>  
<br><b>Possível causa</b>: Sua autorização não possui permissão de alteração de dispositivo. 
     
<b>Solução</b>: Revise a autorização para adicionar a permissão de <b>leitura e escrita</b> ao seu usuário.
</details>

***

<details>
<summary><b><span style="color:red">404</span> - Not Found</b></summary>

***
<b>Mensagem: "Resource sub not found"</b><br>

<p><b>Possível causa</b>: A URL ou o recurso solicitado não está correto.<br>
        
<b>Solução</b>: Verifique a URL e garanta que todos os parâmetros estão corretos.</p>
***
    
</details>


* * *

<details>
<summary><b><span style="color:red">500</span> - Internal Server Error</b></summary>

* * *

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
   
<b>Mensagem: "Client authentication failed"</b>
    
<p><b>Possível causa</b>: Falha na autenticação da sua aplicação com o servidor senhasegura.<br>
        
<b>Solução</b>: Corrija os parâmetros <b>Client ID</b> e <b>Client secret</b> e solicite um novo token de acesso.</p>
</details>
     
* * *     
<details>
<summary><b>No route matched with those values</b></summary>
    
***   
    
<b>Mensagem: "No route matched with those values"</b>
   <p><b>Possível causa</b>: Ausência do header de autorização na requisição de API.<br>
        
  <b>Solução</b>: Solicite um novo token de acesso.</p>
</details>
 
* * *
<details>
    <summary><b> Request timed out</b></summary>
    
***
    
<b>Mensagem: "Request timed out"</b>
<p><b>Possível causa</b>: O tempo da requisição se esgotou. <br>
        
<b>Solução</b>: Verifique a conectividade entre a origem da requisição e o servidor senhasegura.</p>
</details>