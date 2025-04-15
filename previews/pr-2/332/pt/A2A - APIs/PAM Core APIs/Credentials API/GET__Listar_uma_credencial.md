# GET | Listar uma credencial

Este documento apresenta duas formas de acessar informações de uma credencial associada à sua autorização no **PAM Core** via API.

## Listar credencial por `id`
Para acessar as informações de uma credencial registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

<code><span style="color:green"> GET</code></span> `/iso/pam/credential/[id]`

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
    "response": {
        "status": 200,
        "mensagem": "Credential 5",
        "erro": false,
        "message": "Credential 5",
        "error": false
    },
    "credential": {
        "id": "5",
        "tag": "robot-test-5",
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
}
```

## Listar credencial por `username@hostname`
Para acessar as informações de uma credencial registrada no **PAM Core**, envie uma requisição para o seguinte endpoint:

 <code><span style="color:green"> GET</code></span> `/iso/pam/credential/[username@hostname]`

### Parâmetros da requisição

<details>
    <summary><i>Path</i></summary>
    <p>

| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
| `username@hostname` | String | Sim | Nome de usuário (`username`) e `hostname` associados à credencial separados por um sinal de @. Esses valores são informados pelo usuário em POST Criar credencial e são obtidos na resposta da requisição GET Listar todas as credenciais. | credential_5@destktop-91.com |</p>
</details>

::: (Warning) (Atenção)
Caso o `username` fornecido possua um @, o endpoint não funcionará como esperado devido ao conflito gerado pela presença de dois símbolos @ no endpoint.
:::

### Resposta esperada
::: (Info) (Info)
Acesse o documento POST | Criar credencial para uma descrição detalhada dos parâmetros.
:::

`HTTP/1.1 200 OK`

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
        "tag": "robot-test-5",
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

## Erros

<details>
    <summary><b><span style="color:red">400</span> - Bad Request</b></summary>
    
 <b>1007</b>
    
 <p><b>Possível problema</b>: Credencial não encontrada.<br>
        
<b>Solução</b>: Verifique se os valores dos parâmetros usados para buscar pela credencial estão corretos e envie a requisição novamente.</p>
    

* * *


<br><b>Possível problema</b>: Sua autorização não possui acesso à credencial. 
    
   <b>Solução</b>: Revise a autorização para adicionar a permissão de consulta à credencial desejada.
* * *


<br><b>Possível problema</b>: Ausência do <i>header</i> de autorização na requisição de API. 

   <b>Solução</b>:Solicite um novo token de acesso.

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
        
   <b>Solução</b>:Corrija os parâmetros <b>Client ID</b> e <b>Client secret</b> e solicite um novo token de acesso.</p>
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
