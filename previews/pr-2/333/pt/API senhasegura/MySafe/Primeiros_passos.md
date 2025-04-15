# Primeiros passos

Neste documento, você encontra um guia passo a passo sobre como começar a utilizar as APIs **MySafe** de forma rápida e eficiente. 
Siga os passos abaixo para integrar a sua aplicação ao **MySafe** e começar a aproveitar os recursos oferecidos.

## Requisitos

* Permissão de administrador do **MySafe**. 
* Aplicação e autorização da aplicação criadas no **MySafe**. Acesse o documento sobre [Como adicionar uma autorização de chave de acesso](/v3-33/docs/pt/mysafe-how-to-add-an-access-key-authorization) para mais informações.
---


## Autenticar a aplicação

:::(Info) (Info)
As APIs **MySafe** utilizam o **OAuth 2.0** como método de autenticação.
:::

Após a criação da aplicação e de sua autorização, utilize o ```Client ID``` e o ```Client Secret``` gerados pelo **MySafe** para obter um ```Access Token``` que deverá ser utilizado para validar e autorizar todas as chamadas de API subsequentes.

Acesse o documento [Como visualizar uma autorização de chave de acesso](/v3-33/docs/pt/mysafe-how-to-view-an-access-key-authorization) para mais informações.

1. No cliente HTTP ou REST de sua escolha, como o **Postman**, crie uma coleção.
2. Na guia **Authorization > Type**, selecione **OAuth 2.0**.
3. Em **Configure New Token > Configuration Options > Grant Type**, selecione **Client Credentials**.
4. Em **Access Token URL**, faça uma requisição para o endpoint do servidor da autorização. Por exemplo,


<code><span style="color:green">GET</code></span> `{{senhasegura}}/api/oauth2/token`


5. Em **Client ID**, insira o valor gerado adicionar uma chave de autorização de acesso no **MySafe**.
6. Em **Client Secret**, insira o valor gerado adicionar uma chave de autorização de acesso no **MySafe**.
    1. Caso você esteja utilizando um tenant e realizando a requisição via endereço de IP, será necessário passar o parâmetro `tenant` junto da requisição, assim, no parâmetro `tenant`, insira a string contendo o nome do tenant que será utilizado para autenticação.
7. Clique em **Get New Access Token**, na parte inferior da página.
8. Clique em **Proceed** para abrir a página **MANAGE ACCESS TOKENS** e visualizar o **Access Token** gerado.
9. Use este **Access Token** para fazer as requisições nas APIs **MySafe**.

:::(Warning) (Atenção)
Por padrão, o senhasegura cria um token com validade de 1 hora.
:::

### Em cenários de *multi-tenant*


* Em ambientes *multi-tenant*, utilize o parâmetro `tenant` para especificar o tenant desejado durante a autenticação. 
* O valor deste parâmetro deve ser uma `string` idêntica ao subdomínio do tenant na URL da instância senhasegura. Por exemplo, para o tenant teste acessado através de `teste.senhasegura.com`, o valor do parâmetro `tenant` seria teste.
* **Lembre-se**: a autenticação é sempre restrita ao tenant da requisição atual. Não é possível gerar autorizações para tenants diferentes.
* Utilize obrigatoriamente o parâmetro `tenant` ao realizar chamadas via endereço IP do senhasegura. Neste cenário, a identificação automática do tenant é inviável, tornando o parâmetro essencial para o sucesso da autenticação.


Exemplo:


```json
{
  "grant_type":  "client_credentials",
  "client_secret": "your_client_secret",
  "client_id": "your_client_id",
  "tenant": "teste"
}
```

## Requisições e respostas

As requisições são feitas usando métodos HTTP como <code><span style="color:green">GET</code></span>, <code><span style="color:orange"> POST</code></span> e <code><span style="color:blue"> PUT</code></span>.


Os parâmetros incluem ```identifier```, ```name```, ```note```, entre outros, e a depender da chamada, podem ser enviados no **path** da URL, no **body** da requisição ou como **query**.


As respostas são retornadas em formato JSON, facilitando a análise e o gerenciamento de dados fornecidos pela API.

**Exemplo**: 
Ao fazer uma requisição para o endpoint <code><span style="color:green">GET</code></span> ```/api/mysafe/password/197```, a API retorna os dados da senha armazenada cujo ```id``` é igual a  ```197```.

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Success",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Success",
        "erro": false,
        "cod_erro": 0
    },
    "password_entity": {
        "identifier": "197",
        "name": "Testing",
        "url": "www.url.com",
        "username": "maria",
        "password": "Cs^Q4PdbIOo4",
        "secret_key": JBSWY3DPEHPK3PXP,
        "token": 452180,
        "notes": "This is a test password",
        "tags": "test",
        "users_allowed": [],
        "groups_allowed": []
    }
}

```
Cada documento apresenta uma descrição dos campos do corpo da resposta.
Acesse o documento [GET | Listar uma senha por [identifier]](/v3-33/docs/pt/api-get-list-a-password-by-identifier) para visualizar a descrição dos campos listados na resposta acima.

## Erros


A API retorna códigos de status HTTP padrão e inclui mensagens de erro no corpo da resposta para facilitar a compreensão e a resolução de problemas.

| Código | Resposta |
| --- | --- |
| **2xx** | Respostas de sucesso que não requerem nenhuma ação por parte do usuário. |
| **4xx** | Respostas de erro causadas pela ausência de algum parâmetro obrigatório, por exemplo, e que requerem alguma ação corretiva por parte do usuário.|
| **5xx** | Erros por parte do servidor senhasegura e que sugerem alguma ação corretiva do servidor.  |

**Exemplo**:
A mensagem a seguir retorna um erro para o caso de senha não encontrada. 

```json
{
    "response": {
        "status": 400,
        "mensagem": "1005: Password not found",
        "erro": true,
        "cod_erro": 0,
        "message": "1005: Password not found",
        "error": true,
        "error_code": 0
    },
    "exception": {
        "code": 1005,
        "message": "1005: Password not found",
        "detail": ""
    }
}
```
Acesse a documentação de cada método para descrições detalhadas dos erros, suas possíveis causas e soluções.

## Links para as documentações das APIs MySafe

Consulte os documentos abaixo para informações mais detalhadas e exemplos:

* [Senhas](/v3-33/docs/pt/api-mysafe-passwords).

* [Anotações](/v3-33/docs/pt/api-mysafe-notes).

* [Segredos de API](/v3-33/docs/pt/api-mysafe-api-secrets).


