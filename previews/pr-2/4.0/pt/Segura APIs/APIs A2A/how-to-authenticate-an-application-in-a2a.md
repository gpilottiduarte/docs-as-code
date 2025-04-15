# Como autenticar uma aplicação A2A

Este documento fornece um guia passo a passo sobre como autenticar uma aplicação criada no módulo **A2A** em um cliente REST ou HTTP de sua escolha. 

As APIs do módulo **A2A** do Segura suportam os métodos de autenticação **OAuth v1.0**, **OAuth v2.0** e **AWS**.

Embora o OAuth 2.0 seja o método de autenticação recomendado, o módulo também suporta integrações seguras com outros protocolos, como OAuth 1.0 e AWS.

## Autenticação OAuth v1.0

O **OAuth v1.0** é um método de autenticação que utiliza um conjunto de `consumer_key`, `consumer_secret`, `token_key`, e `token_secret` para identificar e autorizar o acesso da aplicação.

## Pré-requisitos

* Uma aplicação previamente adicionada que utiliza **OAuth v1.0** como método de autenticação e uma autorização previamente adicionada para esta aplicação. Saiba mais em [Como gerenciar aplicações no A2A](/v4/docs/pt/how-to-manage-applications-in-a2a) e [Como gerenciar autorizações no A2A](/v4/docs/pt/how-to-manage-authorizations-in-a2a).

---
### Obter os parâmetros de requisição para OAuth v1.0

Para fazer requisições usando **OAuth v1.0**, é necessário informar os valores dos seguintes parâmetros:

* `consumer_key`
* `consumer_secret`
* `token_key`
* `token_secret`

Para encontrar esses valores, siga os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **A2A**.
2. No menu lateral, selecione **Aplicações**.
3. Na lista de aplicações, encontre a aplicação desejada ou use o filtro **Método de autenticação > OAuth 1.0**. 
4. No **botão Ações**, clique em **Autorizações**.
5. Na tela **Autorização da aplicação**, encontre a autorização desejada ou use os filtros de pesquisa.
6. No **botão Ações**, clique em **Visualizar**.
7. Clique em **Exibir** nos campos **Consumer Key**, **Consumer Secret**, **Token** e **Token Secret** para visualizar as informações.
8. Copie as informações e guarde-as em um local seguro.

### Fazer uma requisição usando o OAuth v1.0


Há várias maneiras de fazer uma requisição de autenticação utilizando o **OAuth v1.0**. No exemplo a seguir, a linguagem Python é usada para demonstração.

Utilize o script a seguir:

```json
import requests
import urllib3
from requests_oauthlib import OAuth1


def make_oauth1_request():
    url = "https://<SENHASEGURA_HOSTNAME>/<ENDPOINT>"
    consumer_key = "CONSUMER_KEY"
    consumer_secret = "CONSUMER_SECRET"
    token_key = "TOKEN_KEY"
    token_secret = "TOKEN_SECRET"


    oauth = OAuth1(consumer_key, consumer_secret, token_key, token_secret)


    try:
        response = requests.get(url, auth=oauth, verify=False)
        if response.status_code == 200:
            print("Request was successful!")
            print("Response:")
            print(response.text)
        else:
            print("Request failed with status code:", response.status_code)
    except requests.exceptions.RequestException as e:
        print("An error occurred:", e)


if __name__ == "__main__":
    urllib3.disable_warnings()
    make_oauth1_request()

```

:::(Info) (Info)
Ao fazer uma requisição, substitua o campo **ENDPOINT** pelo endpoint Segura desejado. Por exemplo, 
```
/api/pam/credential
```
 ou 
```
/api/pam/device
```

Os parâmetros - `consumer_key`, `consumer_secret`, `token_key`, e `token_secret` - previamente obtidos devem ser inseridos no cabeçalho da requisição, e não no corpo.
:::
    
**Parâmetros**
A tabela a seguir apresenta uma lista com os parâmetros de autenticação obrigatórios e opcionais.


| Campo | Obrigatório| Descrição |
| --- | --- |--- |
| **oauth_signature*** | Sim|Uma sequência de caracteres únicos que atua como uma assinatura para uma solicitação. Para obter mais informações, consulte a documentação [criar uma assinatura](https://datatracker.ietf.org/doc/html/rfc5849#section-3.4){target=`_blank`}. |
| **oauth_version*** | Sim|Certifique-se de definir o valor da versão como 1.0. |
| **oauth_signature_method*** | Sim|O nome do método de assinatura usado pelo cliente para assinar a solicitação. Defina o método de assinatura como **HMAC-SHA1**. |
| **oauth_consumer_key*** | Sim|O valor do `consumer_key` previamente obtido. |
| **oauth_token*** | Sim|O valor do `token_key` previamente obtido. |
| **oauth_consumer_secret*** |Sim| O valor do `consumer_secret`  previamente obtido. |
| **oauth_token_secret*** | Sim|O valor do `token_secret`  previamente obtido. |
| **oauth_nonce**  | Não|Valor único e aleatório gerado pela aplicação cliente para cada requisição. |
| **oauth_timestamp** | Não|Número de segundos desde 1 de janeiro de 1970 às 00:00:00 GMT, responsável por gerar uma assinatura de data. |
    
:::(Info) (Info)
Saiba mais sobre os parâmetros acima em [The OAuth v1.0 Protocol RFC](https://datatracker.ietf.org/doc/html/rfc5849#section-3.4).
:::
    
## Autenticação OAuth v2.0


O **OAuth v2.0** é um método de autenticação que utiliza um `Client ID` e um `Client Secret` para solicitar um `access_token` com tempo limitado e acessar os recursos da Segura.

## Pré-requisitos
* Uma aplicação adicionada que utiliza **OAuth v2.0** como método de autenticação e uma autorização previamente adicionada para esta aplicação. Saiba mais em [Como gerenciar aplicações no A2A](/v4/docs/pt/how-to-manage-applications-in-a2a) e [Como gerenciar autorizações no A2A](/v4/docs/pt/how-to-manage-authorizations-in-a2a).
    
---
### Obter o `client_id` e `client_secret` para OAuth v2.0

Para fazer requisições usando **OAuth v2.0**, é necessário informar os valores dos seguintes parâmetros:

* `client_id`
* `client_secret`
* `access_token`

Para encontrar esses valores, siga os passos abaixo: 

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos**, e selecione **A2A**.
2. No menu lateral, selecione **Aplicações**.
3. Na lista de aplicações, encontre a aplicação desejada ou use o filtro **Método de autenticação > OAuth 2.0**. 
4. No **botão Ações**, clique em **Autorizações**.
5. Na tela **Autorização da aplicação**, encontre a autorização desejada ou use os filtros de pesquisa.
6. No **botão Ações**, clique em **Visualizar**.
7. Clique em **Exibir** nos campos **Client ID**, **Client Secret** para visualizar as informações.
8. Copie as informações e guarde-as em um local seguro.    

### Obter um `access_token`

Em posse das chaves de acesso `client_id` e `client_secret`, você pode solicitar o `access_token` e autenticar sua aplicação. Siga os passos abaixo:

1. No cliente HTTP ou REST de sua escolha, como o **Postman**, crie uma coleção.

1. Na guia **Authorization> Type**, selecione **OAuth 2.0**.

1. Em **Configure New Token > Configuration Options > Grant Type**, selecione **Client Credentials**.

1. Em **Access Token URL**, faça uma requisição para o endpoint do appliance. Por exemplo, 

```json
https://applianceURI/api/oauth2/token
```


5. Em **Client ID**, insira o valor obtido no passo 7 da seção [Obter o `client_id` e `client_secret` para OAuth v2.0](/v4/docs/pt/how-to-authenticate-an-application-in-a2a#obter-o-clientid-e-clientsecret-para-oauth-v20).

1. Em **Client Secret**, insira o valor obtido no passo 7 da seção [Obter o `client_id` e `client_secret` para OAuth v2.0](/v4/docs/pt/how-to-authenticate-an-application-in-a2a#obter-o-clientid-e-clientsecret-para-oauth-v20).

1. Clique em **Get New Access Token**, na parte inferior da página.

1. Clique em **Proceed** para abrir a página **MANAGE ACCESS TOKENS** e visualizar o **Access Token**.

1. Use este **Access Token** para fazer as requisições nas APIs do módulo **A2A** da Segura.
    
:::(Warning) (Atenção)
Por padrão, o Segura cria um token com validade de 1 hora.
:::

### Solicitar um novo token de acesso
Se necessário, solicite o novo token de acesso para o **A2A** utilizando o seguinte URI: 
```
POST /Segura/api/oauth2/token
```
 e os parâmetros obrigatórios a seguir:

**Parâmetros**


| Campo | Descrição |
| --- | --- |
| **grant_type** | O valor informado sempre deve ser **client_credentials**. |
| **client_id** | Valor informado pelo Segura e obtido seguindo os passos descritos na seção[Obter o `client_id` e `client_secret` para OAuth v2.0](/v4/docs/pt/how-to-authenticate-an-application-in-a2a#obter-o-clientid-e-clientsecret-para-oauth-v20) |
| **client_secret** | Valor informado pelo Segura e obtido seguindo os passos descritos na seção [Obter o `client_id` e `client_secret` para OAuth v2.0](/v4/docs/pt/how-to-authenticate-an-application-in-a2a#obter-o-clientid-e-clientsecret-para-oauth-v20) |

**Exemplo de requisição**
 
    
```json
{
	grant_type: "client_credentials"
	client_id: "765299ec425cf0255badc739c2dce1b10634973e1"
	client_secret: "f13aeddeb57f262835871dab5d839b70"
}
```

    
**Resposta esperada**
    
    
```json
{
    "token_type": "Bearer",
    "expires_in": 3600,
    "access_token": "
        eyJ0eXAiOiJKV1QiL0IjoxNTgwNDM2NTk4LCJuYmYiOjE1ODA0MzY1OTgsImV4cCI
     6MTU4MDQ0MDE5OCwic3ViIjoiTVRNeE1qQWtTRGRPUVRWV1ozcEVSI6Ijg0OWYw
        ZmVhNDI0ZDc5NWUwYTg2MjVlMTdiZWE2YTAyNTQyMzAxNjQzYmRmYTc5ZjYzZDN
        hM2U3ZmI5ZjQzbGCJhjg0OWYwZmVhNDI0ZDc5NWUwYTg2MjVlMTdiZWE2YTAyNT
        QyMzAxNjQzYmRmYTc5ZjYzZDNhM2U3ZmI5ZjQzYmM2MjRhYzg5YmVhMzFhOGQwI
        iwiaWFciOiJSUzI1NiIsImp0ahYzg5YmVhMzFhOGQwIn0.eyJhdWQiOiIzY2E4Y
        Tk4ZDkwNzU0MzgxMjMzNGY3ZjVkYmFmY2E2NTA1ZTMzMTlmYiIsImp0aSI6IYmM
        2MjRTRzB6ZFZONlZXVXhhVWN2Y1RKdFRXNTVhM05sZGtOd1JHeHllbXR5VEV3eE
        5EMD0iLCJzY29wZXMiOltdfQ.efqHZdlij6sQcj_l9RbNNKxDbf81CbIoTFwdIk
        ooT5bK14N5iUazrT8jpB_JsgQdQ8RyD5xF_ReKSj4Al7hp1uRXIiuErlKv1FpxY
        9oNC44kldlumjyevu87GJ0qzem0RYNc3930UbT-XEYqnQijg0se8_GdzdLkxyMn
        0kxApkAkv-to9EUdbbrvvno_pmqiZGyamw6J2BL1aCqwne3S8CCG34TXRyJyqkG
        rPrDO-NPi2fj25PRbX8Ci1iIqXdYvEkefg-g-i0A_Hp9E3s585c5wqxreSBAIwi
        aGtnTkxw0D14JPzqWf48hbvVRPGMj_-KXJTnu-zXkkEPNYs8oWpA"
}
```
    
 Guarde o `access_token` em um local seguro e para utilize-o nas próximas chamadas de cada método.
    
## Autenticação AWS 

O **AWS** é um método de autenticação que permite que as aplicações acessem dados armazenados usando as **AWS Access Keys** e as **Secret Access Keys** da **AWS**, juntamente com uma chave exclusiva gerada pelo Segura **DSM**. Esse método é usado principalmente para integração com aplicativos de **DevOps**. Para mais informações sobre autenticação **AWS**, acesse a documentação do [Autenticador da AWS](/v3-33/docs/pt/dsm-how-to-configure-authenticators).

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
Acesse o documento [GET | List a device by [id]](/v4/docs/pt/api-get-list-a-device) para visualizar a descrição dos campos listados na resposta acima.

## Erros


A API retorna códigos de status HTTP padrão e inclui mensagens de erro no corpo da resposta para facilitar a compreensão e a resolução de problemas.

| Código | Resposta |
| --- | --- |
| **2xx** | Respostas de sucesso que não requerem nenhuma ação por parte do usuário. |
| **4xx** | Respostas de erro causadas pela ausência de algum parâmetro obrigatório, por exemplo, e que requerem alguma ação corretiva por parte do usuário.|
| **5xx** | Erros por parte do servidor Segura e que sugerem alguma ação corretiva do servidor.  |

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


* [PAM Core](/v4/docs/pt/api-a2a-pam-core).
* [Informação protegida](/v4/docs/pt/api-a2a-protected-information).
* [Usuários relacionados](/v4/docs/pt/api-a2a-related-users).
* [Certificate Manager](/v4/docs/pt/a2a-api-certificate-manager).
* [Dashboards](/v4/docs/pt/api-dashboards).