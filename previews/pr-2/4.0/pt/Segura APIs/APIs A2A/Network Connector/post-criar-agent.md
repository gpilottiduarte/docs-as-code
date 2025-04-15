# POST | Criar Agent

Crie um agent para o **Network Connector**.

## Requisitos

* Possuir autorização com permissão de **acesso** e de **leitura e escrita** ao recurso **Sistema**, concedida pelo administrador no **A2A**. 
* Saiba mais em [Como criar uma autorização para uma aplicação](https://portal.document360.io/v4/docs/pt/a2a-how-to-create-an-authorization-for-an-application).

### Método e endpoint

```
POST /api/system/nc/agent
```

## Parâmetros da Requisição

Os seguintes parâmetros devem ser enviados no **body** da requisição:

| Parâmetro | Tipo | Obrigatório | Descrição |
| :---- | :---- | :---- | :---- |
| `name` | `string` | Sim | Nome do agent do **Network Connector** a ser criado. |

#### Restrições para o nome do agent

* **Máximo:** 255 caracteres  
* **Caracteres permitidos:** a-z, A-Z, 0-9, `-`, `_`, `+`, `=`, `#`, `@`, `$`, `[`, `]`, `(`, `)`, `{`, `}`  
* **Nota:** o nome deve ser único e **não pode haver outro agent ativo com o mesmo nome**.

### **Exemplos de Requisição**

```json
{
    "name": "agent-example"
}
```

### cURL

```shell
curl -X POST "https://{URL}/api/system/nc/agent" \
     -H "Authorization: Bearer {TOKEN}" \
     -H "Content-Type: application/json" \
     -d '{"name": "agent-example"}'
```

### Código de status

```
201 CREATED
```

### Resposta

```json
{
  "response": {
    "status": 201,
    "error": false,
    "error_code": 0,
    "message": "Agent created successfully."
  },
  "agent": {
    "id": "1",
    "name": "Default",
    "port": "30000",
    "fingerprint": "Zk9YalVUVDRaeWh2b0FKb29uWmhESk44VVdqcEZkSE1qSUZKMkREUjlOdz06Um1kSlUyWlRSbkYwVEZCb2ExUjNRenAzUkhkellXMVJhMWQyWldad1NXSnI="
  }
}
```

## Campos da Resposta

| Campo | Tipo | Descrição |
| :---- | :---- | :---- |
| `agent` | `object` | Dados do agent criado. |
| `agent.id` | `int` | Código único de identificação do agent gerado automaticamente pelo Segura. |
| `agent.name` | `string` | Nome do connector/agent. |
| `agent.port` | `string` | Número da porta automaticamente gerado pelo sistema para conectar o agent à instância. |
| `agent.fingerprint` | `string` | Hash único automaticamente gerado pelo sistema para conectar o agent à porta. **Nota:** Informação sensível. Se a opção **Ativar criptografia de informações sensíveis** estiver habilitada, essa informação será protegida. Para visualizá-la, baixe a chave de descriptografia. Saiba mais em **Primeiros passos com as APIs A2A**. |

## Possíveis Erros

| Código | Mensagem | Causa |
| :---- | :---- | :---- |
| `400` | **Nome do agent inválido** | O nome enviado não atende às restrições definidas. |
| `403` | **Falta de permissão** | O usuário não possui as permissões adequadas para criar um agent. |
