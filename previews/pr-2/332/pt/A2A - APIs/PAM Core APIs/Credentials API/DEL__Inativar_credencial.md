# DEL | Inativar credencial

Este documento apresenta duas formas de inativar uma credencial associada à sua autorização no **PAM Core** via API.


## Inativar credencial por `id`

### Requisição
Para inativar uma credencial registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

<code><span style="color:red"> DELETE</code></span> `/iso/pam/credential/[id]`

### Parâmetros da requisição

<details>
    <summary><i>Path</i></summary>
    <p>

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| `id` | Int | Sim | Código único de identificação da credencial. Esse valor é automaticamente atribuído pelo senhasegura em POST Criar credencial e é obtido na resposta da requisição GET Listar todas as credenciais. | 5 |</p>
</details>

### Resposta esperada

`HTTP/1.1 200 OK`

 
```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}
```

## Inativar credencial por `username@hostname`



### Requisição
Para inativar uma credencial registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

 <code><span style="color:red"> DELETE</code></span> `/iso/pam/credential/[username@hostname]`

### Parâmetros da requisição

<details>
    <summary><i>Path</i></summary>
    <p>

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| `username@hostname` | String | Sim | Nome de usuário (`username`) e `hostname` associados à credencial separados por um sinal de @. Esses valores são informados pelo usuário em POST Criar credencial e são obtido na resposta da requisição GET Listar todas as credenciais. | credential_5@destktop-91.com |</p>
</details>

::: (Warning) (Atenção)
Caso o `username` fornecido possua um @, o endpoint não funcionará como esperado devido ao conflito gerado pela presença de dois símbolos @ no endpoint.
:::

### Resposta esperada
::: (Info) (Info)
Acesse o documento POST | Criar credencial para mais informações sobre os parâmetros.
:::

`HTTP/1.1 200 OK`

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Credential successfully deactivated",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Credential successfully deactivated",
        "erro": false,
        "cod_erro": 0
    }
}
```

## Erros

<details>
    <summary><b><span style="color:red">400</span> - Bad Request</b></summary>
   
  <p><b>1017</b>
 <p>A credencial já está inativa.<br></p>
  

* * *
 <b>1039</b>
<p><b>Possível problema</b>: Usuário não possui permissão de criação e alteração do <b>PAM Core</b>.

<b>Solução</b>: Revise a autorização para adicionar a permissão de <b>leitura e escrita</b> no <b>PAM Core</b>.
  
 *** 

<br><b>Possível problema</b>: Sua autorização não possui acesso à credencial. 
     
<b>Solução</b>: Revise a autorização para adicionar a permissão de consulta à credencial desejada.
* * *


<br><b>Possível problema</b>: Credencial não encontrada. 
     
<b>Solução</b>: Verifique se os valores dos parâmetros usados para buscar pela credencial estão corretos e envie a requisição novamente.
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