# GET | Listar agents

Recupera a lista de agents cadastrados no **Network Connector.**

## Requisitos

* Possuir autorização com permissão de **acesso** e de **leitura e escrita** ao recurso **Sistema**, concedida pelo administrador no **A2A**. 
* Saiba mais em [Como gerenciar autorizações](/v4/docs/pt/a2a-authorizations-for-an-application).

## Requisição

### Método e endpoint

```
GET /api/system/nc/agent
```

### Cabeçalhos obrigatórios

| Nome | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| **Authorization** | string | Sim | Token Bearer de autenticação. |

### Exemplo de requisição

#### **cURL**

```shell
curl -X GET "https://{URL}/api/system/nc/agent" \
  -H "Authorization: Bearer {TOKEN}"
```

### Código de status

```
HTTP/1.1 200 OK 
```

### Resposta

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "1 agent found",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "1 agent found",
        "erro": false,
        "cod_erro": 0
    },
    "agents": [
        {
             "id": "1",
             "name": "Default",
             "port": "30000",
             "fingerprint":
             "Zk9YalVUVDRaeWh2b0FKb29uWmhESk44VVdqcEZkSE1qSUZKMkREUjlOdz06Um1kSlUyWlRSbkYwVEZCb2ExUjNRenAzUkhkellXMVJhMWQyWldad1NXSnI="
        }
    ]
}
```

### Campos da resposta

| Campo | Tipo | Descrição |
| :---- | :---- | :---- |
| `code` | int | Código HTTP da resposta. |
| `response.status` | int | Código de status HTTP. |
| `response.message` | string | Mensagem descritiva da resposta. |
| `response.error` | boolean | Indica se ocorreu um erro na requisição, retornando true ou false. |
| `agents` | array | Lista de Agents cadastrados. |

#### Detalhamento dos objetos do array `agents`

| Campo | Tipo | Descrição |
| :---- | :---- | :---- |
| `id` | int | Código único de identificação do agent gerado automaticamente pelo Segura. |
| `name` | string | Nome do agent. |
| `port` | string | Número da porta gerada automaticamente pelo sistema para conectar o agent à instância. |
| `fingerprint` | string | Hash único gerado pelo sistema para conectar o agent à porta. **Nota:** se a opção **Ativar criptografia de informações sensíveis** estiver habilitada, essa informação será protegida. Para visualizá-la, baixe a chave de descriptografia. Saiba mais em [Primeiros passos com as APIs A2A](/v4/docs/pt/about-Segura-apis). |

## Códigos de erro e soluções

| Código | Erro | Descrição | Solução |
| :---- | :---- | :---- | :---- |
| **401** | `unauthorized` | O usuário não tem permissão para acessar este recurso. | Verifique se o token bearer está correto e atualizado. Confirme que o usuário possui as permissões adequadas. |
| **404** | `agent_not_found` | O agent solicitado não foi encontrado. | Certifique-se de que o agent existe e que o ID fornecido está correto. |
| **500** | `http_referer_not_allowed` | A requisição foi bloqueada porque a origem (Referer) não está permitida pelo servidor. | Confirme se a requisição está sendo feita a partir de um domínio autorizado. Verifique as configurações de segurança e CORS. |

### Exemplo de resposta para erro 404

```json
{
    "code": 404,
    "message": "Agent not found",
    "error": true,
    "error_code": 1001
}
```

### **Exemplo de resposta para erro 500**

```json
{
    "code": 500,
    "response": {
        "status": 500,
        "message": "The http referer is not allowed",
        "error": true,
        "error_code": 1105,
        "detail": "",
        "mensagem": "The http referer is not allowed",
        "erro": true,
        "cod_erro": 1105
    },
    "tenant": "Segura"
}
```
