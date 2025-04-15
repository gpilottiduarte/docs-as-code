# Encerrar uma sessão proxy

Este artigo apresenta como encerrar qualquer sessão proxy no **PAM Core** via API, os endpoints disponíveis, os parâmetros necessários, exemplos de requisições e as respostas em caso de sucesso ou em caso de erros.

## Autorização

Para começar, certifique-se de que o **PAM Core** esteja listado em **Recursos autorizados** no seu módulo **A2A**. Para mais informações sobre a autorização de um aplicativo, acesse a documentação sobre como [Como criar uma autorização para uma aplicação](/v3-32/docs/pt/a2a-how-to-create-an-authorization-for-an-application).

## Autenticação

Cada requisição nas APIs deve conter a **OAuth Consumer Key** e o **OAuth Token** do cliente. Para mais informações sobre a autenticação, acesse a documentação sobre [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).

## Métodos
### Encerrar uma sessão proxy

Para finalizar uma sessão proxy, envie uma requisição para o seguinte endpoint:

```
DELETE /iso/session/drop/[session_id]
```

:::(Info) (Info)
Utilize este endpoint para integrar sistemas externos, tais como SIEM, para encerrar sessões automaticamente, com base nos alertas emitidos pelo senhasegura.
:::

#### Parâmetros de requisição

***Path***


| Campo | Campo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
|```session_id```| String | Sim | Hash único gerado pelo senhasegura para identificar exclusivamente uma sessão específica. Este identificador é usado internamente pela aplicação para operações relacionadas à sessão, tais como controle de acesso, rastreamento de atividades e gerenciamento de recursos. Cada vez que [uma sessão é iniciada](/v3-32/docs/pt/a2a-create-an-authenticated-url-for-a-web-proxy-session), um novo ```session_id```é gerado para essa sessão específica. O ```session_id``` pode ser obtido através da  resposta da requisição para [Listar todas as sessões](/v3-32/docs/pt/a2a-list-remote-session-data).| 3fcf1e4a16104e328d6794e1b9693cfc457871d2 |

#### Retorno
Encerra uma sessão proxy no **PAM Core** e retorna uma mensagem com informações sobre o processo de encerramento.

**Resposta esperada**

```
HTTP/1.1 200 OK
```

```
{
    "response": {
        "status": 200,
        "message": "Sessão interrompida com sucesso",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Sessão interrompida com sucesso",
        "erro": false,
        "cod_erro": 0
    }
}
```
**Em caso de erro - ocorreu um erro enquanto a sessão foi encerrada ou o ```id``` fornecido é inválido.**


```
HTTP/1.1 500 INTERNAL SERVER ERROR
```

```
{
    "response": {
        "status": 500,
        "message": "An error occurred while droping session",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "An error occurred while droping session",
        "erro": true,
        "cod_erro": 1
    }
}

```