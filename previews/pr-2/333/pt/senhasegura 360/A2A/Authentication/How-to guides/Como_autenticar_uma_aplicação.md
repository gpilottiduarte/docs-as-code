# Como autenticar uma aplicação

Este tutorial apresenta um passo a passo sobre como autenticar uma aplicação criada no módulo **A2A** em um cliente REST ou HTTP de sua escolha. 

As APIs do módulo **A2A** do senhasegura suportam os métodos de autenticação **OAuth v1.0**, **OAuth v2.0** e **AWS**.

:::(Info) (Info)
Para maior segurança, o senhasegura recomenda o uso do método de autenticação **OAuth v2.0**.
:::

## Autenticação OAuth v1.0

O **OAuth v1.0** é um método de autenticação que utiliza um conjunto de **Consumer Key**, **Consumer Secret**, **Access Token**, e **Token Secret** para identificar e autorizar o acesso da aplicação.

## Requisitos

Uma aplicação previamente registrada que utiliza **OAuth v1.0** como método de autenticação e uma autorização previamente criada para esta aplicação. Para obter mais informações, acesse os tutoriais [Como criar uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-application) e [Como criar uma autorização para uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-authorization-for-an-application).


### Obter os parâmetros de requisição para OAuth v1.0

Para fazer requisições usando **OAuth v1.0**, é necessário informar os valores dos seguintes parâmetros:

* **consumer_key**
* **consumer_secret**
* **token_key**
* **token_secret**

Para encontrar esses valores, siga os passos abaixo:

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelos nove quadrados, e selecione **A2A**.
2. No menu lateral, selecione **Aplicações**.
3. Na lista, selecione a aplicação desejada e, na coluna **Ação**, clique nos três pontos verticais para abrir um menu suspenso.
4. No menu suspenso, clique em **Autorizações**.
5. Na janela **Autorizações**, selecione a autorização desejada, e na coluna **Ação**, clique em **Visualizar**, identificado pelo ícone de chave.
6. Na janela **Autorização** da aplicação, clique nos ícones de **olho** para visualizar o **Consumer Key**, **Consumer Secret**, **Token** e o **Token Secret**.

### Fazer uma requisição usando o OAuth v1.0


Há várias maneiras de fazer uma requisição de autenticação utilizando o **OAuth v1.0**. No exemplo a seguir, a linguagem Python é usada para demonstração.

Utilize o script a seguir:

```
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
Ao fazer uma requisição, substitua o campo **ENDPOINT** pelo endpoint senhasegura desejado. Por exemplo, 
```
/iso/pam/credential
```
 ou 
```
/iso/pam/device
```

Os parâmetros - **consumer_key**, **consumer_secret**, **token_key**, e **token_secret** - previamente obtidos devem ser inseridos no cabeçalho da requisição, e não no corpo.
:::
    
**Parâmetros**
A tabela a seguir apresenta uma lista com os parâmetros de autenticação obrigatórios e opcionais.


| Campo | Descrição |
| --- | --- |
| **oauth_signature*** | Uma sequência de caracteres únicos que atua como uma assinatura para uma solicitação. Para obter mais informações, consulte a documentação [criar uma assinatura](https://datatracker.ietf.org/doc/html/rfc5849#section-3.4){target=`_blank`}. |
| **oauth_version*** | Certifique-se de definir o valor da versão como 1.0. |
| **oauth_signature_method*** | O nome do método de assinatura usado pelo cliente para assinar a solicitação. Defina o método de assinatura como **HMAC-SHA1**. |
| **oauth_consumer_key*** | O valor do **consumer_key** previamente obtido. |
| **oauth_token*** | O valor do **token_key** previamente obtido. |
| **oauth_consumer_secret*** | O valor do **consumer_secret**  previamente obtido. |
| **oauth_token_secret*** | O valor do **token_secret**  previamente obtido. |
| **oauth_nonce**  | Valor único e aleatório gerado pela aplicação cliente para cada requisição. |
| **oauth_timestamp** | Número de segundos desde 1 de janeiro de 1970 às 00:00:00 GMT, responsável por gerar uma assinatura de data. |
    
:::(Info) (Info)
Os parâmetros marcados com asterisco são obrigatórios. 
Para mais informações sobre os parâmetros acima, acesse [The OAuth v1.0 Protocol RFC](https://datatracker.ietf.org/doc/html/rfc5849#section-3.4).
:::
    
## Autenticação OAuth v2.0


O **OAuth v2.0** é um método de autenticação que utiliza um **Client ID** e um **Client Secret** para solicitar um token com tempo limitado e acessar os recursos da senhasegura.

## Requisitos
Uma aplicação previamente registrada que utiliza **OAuth v2.0** como método de autenticação e uma autorização previamente criada para esta aplicação. Para obter mais informações, acesse os tutoriais [Como criar uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-application) e [Como criar uma autorização para uma aplicação](/v3-33/docs/pt/a2a-how-to-create-an-authorization-for-an-application).
    

### Obter o token de autorização OAuth v2.0

Para obter um token de autorização **OAuth v2.0**, siga os passos abaixo.   
    
 
:::(Info) (Info)
O processo pode variar dependendo do cenário.
:::

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelos nove quadrados, e selecione **A2A**.
1.  No menu lateral, selecione **Aplicações**.

1. Na lista, selecione a aplicação desejada e, na coluna **Ação**, clique nos três pontos verticais para abrir um menu suspenso.

1. No menu suspenso, clique em **Autorizações**.

1. Na janela **Autorizações**, selecione a autorização desejada, e na coluna **Ação**, clique em **Visualizar**, identificado pelo ícone de chave.

1. Na janela **Autorização da aplicação**, clique nos ícones de **olho** para visualizar o **Client ID** e o **Client secret**.
    
### Fazer uma requisição usando o OAuth v2.0

1. No cliente HTTP ou REST de sua escolha, como o **Postman**, crie uma coleção.

1. Na guia **Authorization> Type**, selecione** OAuth 2.0**.

1. Em **Configure New Token > Configuration Options > Grant Type**, selecione **Client Credentials**.

1. Em **Access Token URL**, faça uma requisição para o endpoint do appliance. Por exemplo, 

```
https://applianceURI/iso/oauth2/token
```


5. Em **Client ID**, insira o valor obtido no passo 6 da seção [Obter o token de autorização OAuth v2.0](/v3-33/docs/pt/a2a-how-to-authenticate-an-application#obter-o-token-de-autorização-oauth-v20) deste tutorial.

1. Em **Client Secret**, insira o valor obtido no passo 6 da seção [Obter o token de autorização OAuth v2.0](/v3-33/docs/pt/a2a-how-to-authenticate-an-application#obter-o-token-de-autorização-oauth-v20) deste tutorial.

1. Clique em **Get New Access Token**, na parte inferior da página.

1. Clique em **Proceed** para abrir a página **MANAGE ACCESS TOKENS** e visualizar o **Access Token**.

1. Use este **Access Token** para fazer as requisições nas APIs do módulo **A2A** da senhasegura.
    
:::(Warning) (Cuidado)
Por padrão, o senhasegura cria um token com validade de 1 hora.
:::

### Solicitar um novo token de acesso
Se necessário, solicite o novo token de acesso para o **A2A** utilizando o seguinte URI: 
```
POST /senhasegura/iso/oauth2/token
```
 e os parâmetros obrigatórios a seguir:

**Parâmetros**


| Campo | Descrição |
| --- | --- |
| **grant_type** | O valor informado sempre deve ser **client_credentials**. |
| **client_id** | Valor informado pelo senhasegura e obtido seguindo os passos descritos na seção [Fazer uma requisição usando o OAuth v2.0](/v3-33/docs/pt/a2a-how-to-authenticate-an-application#fazer-uma-requisição-usando-o-oauth-v20) deste documento. |
| **client_secret** | Valor informado pelo senhasegura e obtido seguindo os passos descritos na seção [Fazer uma requisição usando o OAuth v2.0](/v3-33/docs/pt/a2a-how-to-authenticate-an-application#fazer-uma-requisição-usando-o-oauth-v20) deste documento. |

**Exemplo de requisição**
 
    
```
{
	grant_type: "client_credentials"
	client_id: "765299ec425cf0255badc739c2dce1b10634973e1"
	client_secret: "f13aeddeb57f262835871dab5d839b70"
}
```

    
**Resposta esperada**
    
    
```
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
    
 Guarde o **access_token** para utilizá-lo nas próximas chamadas de cada método.
    
## Autenticação AWS 

O **AWS** é um método de autenticação que permite que as aplicações acessem dados armazenados usando as **AWS Access Keys** e as **Secret Access Keys** da **AWS**, juntamente com uma chave exclusiva gerada pelo senhasegura **DSM**. Esse método é usado principalmente para integração com aplicativos de **DevOps**. Para mais informações sobre autenticação **AWS**, acesse a documentação do [Autenticador da AWS](/v3-33/docs/pt/dsm-how-to-configure-authenticators).
