# DevOps Secret Manager

O senhasegura DevOps Secret Management (DSM) oferece uma forma rápida e segura de ferramentas e aplicações para solicitar informações confidenciais tais como segredos, credenciais e outros dados sensíveis que são utilizados no ciclo de vida do DevOps.

O objectivo desta seção é fornecer orientação às equipes DevOps que necessitam de integração com o senhasegura para gerir todos os segredos utilizados no seu pipeline.

Nesta seção, serão abordadas as seguintes funções DevOps:

-   Solicitar um secret para ser usado em um aplicativo
-   Disponibilizar uma nova credencial para ser utilizada em um pedido
-   Deprovisionar uma credencial

Para mais informações sobre as APIs para automações do DSM, acesse o documento sobre [Automações](/v3-33/docs/pt/api-dsm-automations).

### Método

O serviço web de integração senhasegura possui um método para consultar secrets armazenados na aplicação.

### Consultar secret
 
``` 
GET https://vault_url/iso/dapp/application 
``` 
O método de aplicação consulta todos os segredos ligados a uma autorização de aplicação.

#### Resposta

| **Campo** |  Tipo |  Descrição |
| --- | --- | --- |
| **nome** | String | Nome da aplicação |
| **descrição** | String | Descrição da aplicação |
| **tags** | String | Tags que identificam a aplicação |
| **sistema** | String | Sistema Secret |
| **ambiente** | String | ambiente secret |
| **secret_id** | Inteiro | ID do secret |
| **secret_name** | String | Nome do secret |
| **identificador** | String | Identificador do secret |
| **versão** | String | Versão do Secret |
| **expiration_date** | Dia/Hora | Data de validade do secret |
| **motor** | String | Secret engine |
| **valores** | String | Valores do Secret |

```json
{
    "response": {
        "status": 200,
        "mensagem": "Application 5",
        "erro": false,
        "message": "Application 5",
        "error": false
    },
    "application": {
        "name": "postman",
        "description": null,
        "tags": [
            ""
        ],
        "system": "back",
        "environment": "test",
        "secrets": [
            {
                "secret_id": "106",
                "secret_name": "application5",
                "identity": "application5",
                "version": "",
                "expiration_date": "",
                "engine": "Kubernetes",
                "data": [
                    {
                        "hostname": "application5_v_test",
                        "username": "ADMIN_V_USR",
                        "password": "ADMIN_V_PW",
                        "additional_information": "ADMIN_V_SCHEMA",
                        "ip": "app.application.com"
                    },
                    {
                        "access_key_id": "LKU5YC6QWAT487S4KEK",
                        "secret_access_key": "sack10821du07f9sacfsdaasdf",
                        "TTL": null
                    },
                    {
                        "my_key_name": "my_key_value",
                        "my_key_name_2": "my_key_value_2"
                    }
                ]
            }
        ]
    }
}
```

#### Resposta com SSH como secret

```json
{
    "response": {
        "status": 201,
        "mensagem": "Secret created successfully.",
        "erro": false,
        "cod_erro": 0,
        "message": "Secret created successfully.",
        "error": false,
        "error_code": 0
    },
    "application": {
        "name": "postman",
        "description": "teste",
        "tags": [
            "abc",
            "def",
            "teste"
        ],
        "system": "inetconfig",
        "environment": "stage",
        "secrets": [
            {
                "secret_id": "3",
                "secret_name": "state_secret",
                "identity": "cart/americanas/npf/cassandra",
                "version": "205",
                "description": "Chamada de API",
                "expiration_date": "2022-08-18 11:10:00",
                "engine": "GitLab",
                "data": [
                    {
                        "HOSTNAME": "AWS Gateway",
                        "USERNAME": "user",
                        "CONNECTION_STRING": "mongodb://api-server/auth",
                        "private_key": "An error occurred while encrypting the text",
                        "public_key": "ssh-rsa dsafffasdfads+FoCrHU0ZZSeIK4rkoB+O55qz0Ns527ROxwslDwn0TsLMwGTr3L4QCmnihmBOF7PlX7027DtldO0gFswdwPDKynAK2Crn6bcBQg8PAw6tUAM7/QWFosW13JzrbDz6gUV+DXMilQPUIJ7CsdfmubE/jFzJ/aBN2f+5mK6Xf3ghvGLo4+PriAUZO/x1XEm4+destdfsadfasafsd+GwwgFYVvTMOUYjjHYcqKjjqah8F8ltN5aN+9P3cwWlbnO/RoORHgpavBcOMDBXOHHtWwT4qSWNZJ4/BIeBr3ACTjqoUrDdAsgr2u+i46l user\n",
                        "PASSWORD": "sbgiXZU+5qmejm/kYqb+asdffsdaafsd/PPjcBxvr9S0jS1+F7Qc2HZ0N0PqQFw4I0p2X943+Y4wYR8RXSgFqtxuEbYBMv7TJijqIA0fVWkVNdCaqRVIpIbdtGjpUuf+asdffdsa/maPt0T9KfkKJSPh9WY2O8oRkCpRays8Lihp3ZP+asdffsd==",
                        "ip": "aws.amazon.com"
                    }
                ]
            }
        ]
    }
}
``` 

### Criar ou atualizar um secret
```
POST https://vault_url/iso/sctm/secret
```

#### Parâmetros
| **Campo** | Tipo | Descrição |
| --- | --- | --- |
| **Name** | String | Nome da Secret |
| **Identity** | String | Identidade da Secret |
| **Expiration_Date** | Date/time | A data de desativação da Secret |
| **Description** | String | Descrição da Secret |
| **Engine** | String | A Engine da Secret, deve ser uma engine válida registrada no senhasegura  |
| **renew_cloud_time** | Int | Define o tempo para renovar as chaves de acesso à nuvem em minutos. Se omitido é ignorado, mas com a array vazia, irá desabilitar a renovação automática |
| **renew_credential_time** | Int | Defina o tempo para renovar as credenciais em minutos. Se omitido é ignorado, mas com a array vazia, irá desabilitar a renovação automática |
| **renew_ephemeral_credential_time** | Int | Define o tempo para renovar as credenciais efêmeras em minutos. Se omitido é ignorado, mas com a array vazia, irá desabilitar a renovação automática |
| **Data** | String | Deve ser um json codificado em base64 válido como em Exemplo Data |

#### Exemplo Data

```json
{
    access_keys:
    [
        {
            access_key:
            {
                type: "aws",
                fields:
                {
                    access_key_id: "AKIAREVEFYNPPAOT3PF6",
                    access_key_id_label: "AWS_ACCESS_KEY_ID",
                    secret_access_key: "AStrongPass",
                    secret_access_key_label: "AWS_SECRET_ACCESS_KEY",
                }
            }
        },
    ],
    credentials:
    [
        {
            credential:
            {
                fields:
                {
                    user: "cred_a",
                    user_label: "USERNAME",
                    host: "aws.amazon.com",
                    host_label: "HOSTNAME",
                    password: "StrongPass",
                    password_label: "PASSWORD",
                    additional_information: "mongodb://api-server/auth",
                    additional_information_label: "CONNECTION_STRING",
                }
            }
        },
        {
            credential:
            {
                fields:
                {
                    user: "an_username",
                    user_label: "USERNAME",
                    host: "an_ip",
                    host_label: "HOSTNAME",
                    password: "StrongPass",
                    password_label: "PASSWORD",
                    additional_information: "the_additional_info",
                }
            }
        },
    ]
}
```

#### Resposta 

| **Campo** | Tipo |  Descrição |
| --- | --- | --- |
| **name** |  String | Nome da aplicação |
| **description** |  String | Descrição da aplicação |
| **tags** |  String | Tag para identificação da aplicação |
| **system** |  String | Sistema da secret |
| **environment** |  String | Ambiente da Secret |
| **secret_id** |  Integer | ID da Secret |
| **secret_name** |  String | Nome da Secret |
| **identity** |  String | Identificador da Secret |
| **version** |  String | Versão da Secret |
| **expiration_date** |  Date/Time | Data de expiração da Secret |
| **engine** |  String |  Engine da Secret |
| **data** |  String | Valor da Secret |

```json
{
    "response": {
        "status": 201,
        "mensagem": "Secret created successfully.",
        "erro": false,
        "cod_erro": 0,
        "message": "Secret created successfully.",
        "error": false,
        "error_code": 0
    },
    "application": {
        "name": "postman",
        "description": "teste",
        "tags": [
            "abc",
            "def",
            "teste"
        ],
        "system": "inetconfig",
        "environment": "stage",
        "secrets": [
            {
                "secret_id": "7",
                "secret_name": "state_secret",
                "identity": "example_2",
                "version": "2",
                "description": "Chamada de API",
                "expiration_date": "2022-08-18 11:10:00",
                "engine": "GitLab",
                "data": [
                    {
                        "AWS_ACCESS_KEY_ID": "AKIAREVEFYNPPAOT3PF6",
                        "AWS_SECRET_ACCESS_KEY": "fd/ZmmciA4d8CqkXIzK8l2oWrUY7+fds/aasdf+WwP5cTAQW5mpr9XAHiGS1zkRQEUvJ7pta3ABrAeRt3QH6UuuGwPunATFdhFvAG/lTlrby6z+dfdfas/cKUzQpHpQE0UNxNwzCauRpbPDOUzMnpRopbyGQDzdkN0uXSXJLh3kraX+/qQ/v3riN1pB+Wuzd4zvxLfeH6oA==",
                        "TTL": ""
                    },
                    {
                        "APP": "Postman",
                        "CONNECTION_STRING": "mongodb://api-server/auth",
                        "DATE": "date",
                        "HOSTNAME": "an_ip",
                        "PASSWORD": "StrongPass",
                        "USERNAME": "an_username"
                    }
                ]
            }
        ]
    }
}
```

### Criar ou atualizar um aplicativo

```
POST https://vault_url/iso/dapp/application
```

#### Parâmetros

| **Campo** | Tipo | Descrição |
| --- | --- | --- |
| **Nome**| String | Nome Secreto |
| **Identidade** | String | Identidade Secreta |
| **Expiration_Date** | Data/Hora | Data de desativação do segredo |
| **Descrição** | String | Descrição secreta |
| **Engine** | String | O Engine da Secret deve ser um engine válido registrado no senhasegura |
| **renew_cloud_time** | Int | Defina o tempo de renovação das chaves de acesso à nuvem em minutos. Se omitido, desativará a renovação automática |
| **renew_credential_time** | Int | Defina o tempo de renovação para credenciais em minutos. Se omitido, desativará a renovação automática |
| **renew_efemeral_credential_time** | Int | Defina o tempo de renovação para credenciais temporárias em minutos. Se omitido, desativará a renovação automática |
| **Dados** | String | Deve ser um json codificado em base64 válido |

#### Resposta

| **Campo** | Tipo | Descrição |
| --- | --- | --- |
| **Unique Key** | String | Identificador único de uma autorização, se o valor for enviado, os campos ambiente e sistema serão ignorados para a busca de autorização |
| **Aplication** | String | Nome da Aplicação |
| **System** | String | Sistema a que pertence a autorização, utilizado para consulta, utilizado apenas para escrita em novas autorizações |
| **Envinroment** | String | Ambiente a que pertence a autorização, utilizado para consulta, utilizado apenas para escrita em novas autorizações |
| **Description** | String | Descrição do aplicativo |
| **Authentication Method** | String | Método de autenticação e autorização do aplicativo, este parâmetro é utilizado apenas na criação do aplicativo, ao atualizá-lo é ignorado |
| **Line of Business** | String | Define a linha de negócios do aplicativo |
| **Application Type** | String | Define o tipo de aplicação |
| **Tags** | String | Definir tags de aplicativos |
| **Amazon ARNs (for AWS Authentication)** | String | Definir ARNs da aplicação |
| **Cloud Dynamic Provising profile** | String | Define perfis de provisionamento dinâmico de nuvem de aplicativos |
| **Credential Dynamic Provising Profile (device and profile)** | Array| Define perfis de provisionamento dinâmico de credenciais efêmeras de aplicativos |
| **Authorized Resources** | String | Define os recursos autorizados da autorização, utilizados apenas na criação da autorização |
| **Expiration date/time** | Date/Time| Data de expiração secreta, usada apenas ao criar a autorização |
| **Enable Encryption of sensitive information?** | Booleano | Define a criptografia de dados de autorização confidenciais, usado ​​apenas na criação de autorização |
| **Allowed IPs** | String | Define os IPs permitidos da autorização, utilizados somente na criação da autorização |
| **Allowed HTTPS refers** | String | Define os referenciadores HTTP permitidos da autorização, utilizados apenas ao criar a autorização |
| **Certificate Fingerprint** | String | Define a fingerprint do certificado de autorização, utilizada apenas na criação da autorização |

#### Resposta

| **Campo** | Tipo | Descrição |
| --- | --- | --- |
| **ID** | String | ID do aplicativo |
| **Signature** | String | Assinatura do Aplicativo |

```json
{
    "response": {
        "status": 200,
        "mensagem": "Application updated: (4) postman | Authorization found: (6)",
        "erro": false,
        "cod_erro": 0,
        "message": "Application updated: (4) postman | Authorization found: (6)",
        "error": false,
        "error_code": 0
    },
    "id": "applicationID",
    "signature": "signature"
}
```

### Provisão de uma credencial
 
``` 
POST https://vault_url/iso/coe/dapp/provision 
``` 
Criar um novo segredo de credencial para ser usado em um recipiente.

#### Parametros

| **Campo** |  Tipo |  Descrição |  Obrig. |
| --- | --- | --- | --- |
| **pod_nome** | String | Nome da cápsula que irá usar a credencial | Sim |
| **deploy** | String | Nome do deploy que irá usar a credencial | Sim |
| **namespace** | String | Namespace do contentor que irá utilizar a credencial | Sim |

#### Resposta

| **Campo** |  Tipo |  Descrição |
| --- | --- | --- |
| **nome** | String | Nome da aplicação |
| **descrição** | String | Descrição da aplicação |
| **tags** | String | Tags que identificam a aplicação |
| **sistema** | String | Secret system |
| **ambiente** | String | ambiente secret |
| **secret_id** | Inteiro | ID do secret |
| **secret_nome** | String |  Nome secret |
| **identificador** | String | Identificador do secret |
| **versão** | String | Versão do Secret |
| **expiration_date** | Data/Hora | Data de validade do secret |
| **motor** | String | Secret engine |
| **valor** | String | Valor da secret |

```json
{
    "response": {
        "status": 200,
        "mensagem": "Application 6",
        "erro": false
    },
    "application": {
        "name": "runb",
        "description": null,
        "tags": [
            ""
        ],
        "system": "senhasegura",
        "environment": "lab",
        "secrets": [
            {
                "secret_id": "3",
                "secret_name": "secure-demo",
                "identity": "secure-demo",
                "version": "",
                "expiration_date": "",
                "engine": "Kubernetes",
                "data": {
                    "APP_VAR1": "fX6v8vh7TADY",
                    "APP_VAR2": "vlln0XkBNWIk",
                    "APP_VAR3": "7qWgm1EBFnQb",
                    "APP_DB_PASSWORD": "4i8Vm0khqTWs",
                    "APP_SECRET": "GSePWjXyd91K"
                }
            }
        ]
    }
}
```

### Desprovisionar uma credencial
 
``` 
POST https://vault_url/iso/coe/dapp/deprovision 
``` 
Remove a credencial a ser utilizada por um container.

#### Parâmetros

| **Campo** |  Tipo |  Descrição |  Obrig. |
| --- | --- | --- | --- |
| **pod_nome** | String | Nome da cápsula que irá usar a credencial | Sim |
| **deploy** | String | Nome do deploy que irá usar a credencial | Sim |
| **namespace** | String | Namespace do contentor que usará a credencial | Sim |
| **secret_id** | Inteiro | Secret ID | Sim |