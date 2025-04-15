# PUT | Ativar credencial

Este documento apresenta como ativar uma credencial inativa associada à sua autorização no **PAM Core** via API.

## Requisitos
* Uma credencial inativa no **PAM Core**. Acesse o documento DEL | Inativar credencial para mais informações.

## Requisição

Para ativar uma credencial registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

 <code><span style="color:blue"> PUT</code></span> `/iso/pam/credential/[id]`

### Parâmetros da requisição

<details>
    <summary><i>Path</i></summary>
    <p>

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| `id` | Int | Sim | Código único de identificação da credencial. Esse valor é automaticamente atribuído pelo senhasegura no momento de POST Criar credencial e é obtido na resposta da requisição GET Listar todas as credenciais. | 5 |</p>
</details>

### Resposta esperada

`HTTP/1.1 200 OK`

 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential successfully activated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully activated",
        "erro": false,
        "cod_erro": 0
    }
}
```

## Erros

<details>
    <summary><b><span style="color:red">400</span> - Bad Request</b></summary>
    <p>A credencial já está ativa.<br></p>
  

* * *


<br><b>Possível problema</b>: Sua autorização não possui acesso à credencial. 
     
<b>Solução</b>: Revise a autorização para adicionar a permissão de consulta à credencial desejada.
* * *


<br><b>Possível problema</b>: Credencial não encontrada. 
     
<b>Solução</b>: Verifique se os valores dos parâmetros usados para buscar pela credencial estão corretos e envie a requisição novamente.
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