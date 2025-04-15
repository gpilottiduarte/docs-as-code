# Primeiros passos

Neste documento, você encontra um guia passo a passo sobre como começar a utilizar as APIs que são gerenciadas no **A2A** de forma rápida e eficiente. 
Siga os passos abaixo para integrar a sua aplicação ao **senhasegura** e começar a aproveitar os recursos oferecidos.

## Requisitos

* Permissão de administrador do **A2A**. 
* Aplicação criada no **A2A**. Acesse o documento sobre [Como criar uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-application) para mais informações.
* Autorização da aplicação criada no **A2A**. Acesse o documento sobre [Como criar uma autorização para uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-authorization-for-an-application) para mais informações.
---


## Autenticar a aplicação

Para acessar as APIs **A2A**, é essencial seguir o método de autenticação **OAuth 2.0** recomendado pelo senhasegura. 

Utilize o ```Client ID``` e o ```Client Secret``` gerados pelo **A2A** para obter um ```Access Token``` que deverá ser utilizado para validar e autorizar todas as chamadas de API subsequentes.

1. No cliente HTTP ou REST de sua escolha, como o **Postman**, crie uma coleção.
2. Na guia **Authorization > Type**, selecione **OAuth 2.0**.
3. Em **Configure New Token > Configuration Options > Grant Type**, selecione **Client Credentials**.
4. Em **Access Token URL**, faça uma requisição para o endpoint do servidor da autorização. Por exemplo, <code><span style="color:green">GET</code></span> `{{senhasegura}}/api/oauth2/token`
5. Em **Client ID**, insira o valor gerado ao criar a autorização para a aplicação no **A2A**.
6. Em **Client Secret**, insira o valor gerado ao criar a autorização para a aplicação no **A2A**.
    1. Caso você esteja utilizando um tenant e realizando a requisição via endereço de IP, será necessário passar o parâmetro `tenant` junto da requisição, assim, no parâmetro `tenant`, insira a string contendo o nome do tenant que será utilizado para autenticação.
7. Clique em **Get New Access Token**, na parte inferior da página.
8. Clique em **Proceed** para abrir a página **MANAGE ACCESS TOKENS** e visualizar o **Access Token** gerado.
9. Use este **Access Token** para fazer as requisições nas APIs **PAM Core**.

Acesse o documento sobre [Como autenticar uma aplicação](/v3-33/docs/pt/a2a-how-to-authenticate-an-application) para mais informações.

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

As requisições são feitas usando métodos HTTP como <code><span style="color:green">GET</code></span>, <code><span style="color:orange"> POST</code></span>, <code><span style="color:blue"> PUT</code></span> e <code><span style="color:RED"> DEL</code></span>.


Os parâmetros incluem ```id```, ```identifier```, ```hostname```, ```username```, entre outros, e a depender da chamada, podem ser enviados no **path** da URL ou no **body** da requisição.


As respostas são retornadas em formato JSON, facilitando a análise e o gerenciamento de dados fornecidos pela API.

**Exemplo**: 
Ao fazer uma requisição para o endpoint <code><span style="color:green">GET</code></span> ```/api/pam/device/14```, a API retorna os dados do dispositivo cujo ```id``` é igual a  ```14```.

```json
{
    "code": 200,
    "response": {
        "status": 200,
        "message": "Device 14",
        "error": false,
        "error_code": 0,
        "detail": "",
        "mensagem": "Device 14",
        "erro": false,
        "cod_erro": 0
    },
    "tenant": "teste",
    "device": {
        "id": "14",
        "hostname": "API device",
        "ip": "10.66.33.17",
        "model": "Gmail",
        "type": "Desktop",
        "vendor": "Linux",
        "site": "AWS",
        "device_domain": "my_device_domain",
        "connectivities": "HTTP:80,SSH:22,MySQL:65535",
        "session_remote_config": "HTTP::",
        "device_tags": "test"
    }
}
```
Cada documento apresenta uma descrição dos campos do corpo da resposta.
Acesse o documento [GET | List a device by [id]](/v3-33/docs/pt/api-get-list-a-device) para visualizar a descrição dos campos listados na resposta acima.

## Erros


A API retorna códigos de status HTTP padrão e inclui mensagens de erro no corpo da resposta para facilitar a compreensão e a resolução de problemas.

| Código | Resposta |
| --- | --- |
| **2xx** | Respostas de sucesso que não requerem nenhuma ação por parte do usuário. |
| **4xx** | Respostas de erro causadas pela ausência de algum parâmetro obrigatório, por exemplo, e que requerem alguma ação corretiva por parte do usuário.|
| **5xx** | Erros por parte do servidor senhasegura e que sugerem alguma ação corretiva do servidor.  |

**Exemplo**:
A mensagem a seguir retorna um erro para o caso de dispositivo não encontrado. 

```json
{
    "code": 400,
    "response": {
        "status": 400,
        "message": "1011: Device not found",
        "error": true,
        "error_code": 1,
        "detail": "",
        "mensagem": "1011: Device not found",
        "erro": true,
        "cod_erro": 1
    },
    "exception": {
        "code": 1011,
        "message": "1011: Device not found",
        "detail": null
    }
}
```
Acesse a documentação de cada método para descrições detalhadas dos erros, suas possíveis causas e soluções.

## Links para as documentações das APIs A2A

Consulte os documentos abaixo para informações mais detalhadas e exemplos:


* [PAM Core](/v3-33/docs/pt/api-a2a-pam-core).
* [Informação protegida](/v3-33/docs/pt/api-a2a-protected-information).
* [Usuários relacionados](/v3-33/docs/pt/api-a2a-related-users).
* [Certificate Manager](/v3-33/docs/pt/a2a-api-certificate-manager).
* [Dashboards](/v3-33/docs/pt/api-dashboards).


