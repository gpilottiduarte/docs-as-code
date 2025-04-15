# POST | Application

## Criar ou atualizar uma aplicação

Permite criar um atualizar uma aplicação.

### Request

```
POST https://vault_url/iso/dapp/application
```

### Exemplo de request

```json
{
    "application": "APP-SQL",
    "system": "Teste_DSM",
    "environment": "Teste_DSM",
    "authentication_method": "OAuth 2.0",
    "line_of_business": "Core business",
    "application_type": "Security",
    "aws_arns": [],
    "authorized_resources": [ "Application", "CI/CD", "Secret Management" ],
    "expiration_date": "",
    "encryption_enabled": true,
    "allowed_ips": [ "*" ],
    "allowed_http_referers": [],
    "certificate_fingerprint": "",
    "cloud_profiles": [],
    "credential_profiles": [{"device": "10.66.32.13", "profile": "SQLServer"}]
}
```

### Parâmetros para a request

| Campo | Tipo | Descrição |
| :---- | :---- | :---- |
| `Nome` | *String* | Nome do *Secret*. |
| `Identidade` | *String* | Identidade do *Secret*. |
| `Expiration_Date` | *String* | Data de desativação do *Secret*. |
| `Descrição` | *String* | Descrição do *Secret*. |
| `Engine` | *String* | O *Engine* da *Secret* deve ser um engine válido registrado no Segura. |
| `renew_cloud_time` | *Integer* | Define o tempo de renovação das chaves de acesso à nuvem em minutos. Se omitido, desativa a renovação automática. |
| `renew_credential_time` | *Integer* | Define o tempo de renovação para credenciais em minutos. Se omitido, desativa a renovação automática. |
| `renew_efemeral_credential_time` | *Integer* | Define o tempo de renovação para credenciais temporárias em minutos. Se omitido, desativa a renovação automática. |
| `Dados` | *String* | Deve ser um `.json` codificado em `base64` válido. |

### Exemplo de resposta

```json
{
    "application": "App-By-API",
    "system": "Teste_DSM",
    "environment": "Teste_DSM",
    "authentication_method": "OAuth 2.0",
    "line_of_business": "Core business",
    "application_type": "Security",
    "aws_arns": [],
    "authorized_resources": [ "Application", "CI/CD", "Secret Management" ],
    "expiration_date": "",
    "encryption_enabled": true,
    "allowed_ips": [ "*" ],
    "allowed_http_referers": [],
    "certificate_fingerprint": "",
    "cloud_profiles": [],
    "credential_profiles": [{"device": "10.66.32.13", "profile": "SQLServer"}]
}
```

### Parâmetros para a resposta

| Campo | Tipo | Descrição |
| :---- | :---- | :---- |
| `Unique Key` | *String* | Identificador único de uma autorização, se o valor for enviado, os campos ambiente e sistema serão ignorados para a busca de autorização. |
| `Application` | *String* | Nome da aplicação. |
| `System` | *String* | Sistema a que pertence a autorização, utilizado para consulta e escrita em novas autorizações. |
| `Environment` | *String* | Ambiente a que pertence a autorização, utilizado para consulta e escrita em novas autorizações. |
| `Description` | *String* | Descrição do aplicativo. |
| `Authentication Method` | *String* | Método de autenticação e autorização do aplicativo, utilizado apenas na criação. |
| `Line of Business` | *String* | Define a linha de negócios do aplicativo. |
| `Application Type` | *String* | Define o tipo de aplicação. |
| `Tags` | *String* | Define *tags* de aplicativos. |
| `Amazon ARNs (for AWS Authentication)` | *String* | Define ARNs da aplicação. |
| `Cloud Dynamic Provisioning profile` | *String* | Define perfis de provisionamento dinâmico de nuvem. |
| `Credential Dynamic Provisioning Profile (device and profile)` | *Array* | Define perfis de provisionamento dinâmico de credenciais efêmeras. |
| `Authorized Resources` | *String* | Define os recursos autorizados da autorização, utilizados na criação. |
| `Expiration date/time` | *Date/Time* | Data de expiração secreta, usada ao criar a autorização. |
| `Enable Encryption of sensitive information?` | *Boolean* | Define a criptografia de dados de autorização confidenciais, usado na criação. |
| `Allowed IPs` | *String* | Define os IPs permitidos da autorização, utilizados somente na criação. |
| `Allowed HTTPS refers` | *String* | Define os referenciadores HTTP permitidos da autorização, usados na criação. |
| `Certificate Fingerprint` | *String* | Define a *fingerprint* do certificado de autorização, utilizada na criação. |