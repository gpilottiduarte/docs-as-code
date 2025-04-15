# DEL | Liberar custódia de credencial

Este documento apresenta como liberar a custódia de uma credencial no **PAM Core** via API.


Quando a API recebe uma solicitação de senha, nós referimos a isso como conceder temporariamente a custódia correspondente ao usuário. Quando a API revoga o acesso a essa credencial, descrevemos isso como liberar a custódia.

Para mais informações sobre o conceito de custódia de credenciais, acesse o documento [Sobre a custódia de credenciais](/v3-32/docs/pt/pam-about-credential-custody).

## Requisição
Para liberar a custódia de uma credencial registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

<code><span style="color:red"> DELETE</code></span> `/iso/pam/credential/custody/[id]`

:::(Warning) (Atenção)
Esse endpoint funciona apenas para liberação de custódias que foram solicitadas via API através do endpoint
<code><span style="color:green"> GET</code></span> `/iso/pam/credential[id]`.

:::
## Parâmetros da requisição

<details>
    <summary><i>Path</i></summary>
    <p>

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| `id` | Int | Sim | Código único de identificação da credencial. Esse valor é automaticamente atribuído pelo senhasegura em POST Criar credencial e é obtido na resposta da requisição GET Listar todas as credenciais. | 94 |</p>
</details>

## Resposta esperada

`HTTP/1.1 200 OK`

 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential custody 94 released",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential custody 94 released",
        "erro": false,
        "cod_erro": 0
    }
}
```
:::(Info) (Info)
Na `mensagem` acima, `Credential custody 94 released`, 94 é o `id` da credencial.
:::


## Erros

<details>
    <summary><b><span style="color:red">400</span> - Bad Request</b></summary>
<br><b>1007</b>

<br><b>Possível problema</b>: Credencial não encontrada. 
     
<b>Solução</b>: Verifique se os valores dos parâmetros usados para buscar pela credencial estão corretos e envie a requisição novamente.

***
 <br><b>1018</b>
  
<br><b>Possível problema</b>: Usuário não possui a custódia da credencial. 
     
<b>Solução</b>: 
* * *
<br><b>Possível problema</b>: Sua autorização não possui acesso à credencial. 
     
<b>Solução</b>: Revise a autorização para adicionar a permissão de consulta à credencial desejada.
</details>

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