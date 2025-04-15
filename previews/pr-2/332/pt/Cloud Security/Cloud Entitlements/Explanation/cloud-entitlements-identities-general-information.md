# Identidades

Neste artigo você encontra as informações que o **Cloud Entitlements** fornece sobre as identidades registradas em cada um dos seus Provedores de Serviço em Nuvem (CSPs).

Para instruções sobre como acessar e visualizar essas informações, consulte [Como visualizar as informações de uma identidade](/v3-32/docs/pt/cloud-entitlements-how-to-view-an-identitys-information).


* * *
## Informações sobre as identidades da AWS

::: (error) (Importante)
Se a conta AWS associada à identidade não tiver uma chave de acesso válida, o **Cloud Entitlements** exibirá um alerta.


:::


### Usuários
Para os Usuários da AWS, o **Cloud Entitlements** fornece informações detalhadas de uso, incluindo as seguintes métricas:


| **Item** | **Descrição**|
| --- | --- |
| **Total de uso** |O número total de serviços que o Usuário acessou. |
| **30 dias** |O número de serviços acessados nos ultimos 30 dias.|
| **60 dias** | O número de serviços acessados nos ultimos 60 dias. |
| **90 dias** | O número de serviços acessados nos ultimos 90 dias. |
| **Nunca utilizado** | O número de serviços que o usuário possui acesso mas nunca utilizou.|

Além disso, o **Cloud Entitlements** gera um relatório que detalha o **Uso de serviços** do Usuário da AWS, incluindo os serviços específicos usados, as políticas associadas e a data de uso.


### Funções

O **Cloud Entitlements** lista  as **Políticas** anexadas a cada Função organizadas por **Tipo**.



### Grupos

O **Cloud Entitlements** lista os **Membros do grupo** e as **Políticas** anexadas ao Grupo.



* * *

## Informações sobre as identidades do GCP


### Usuários
O **Cloud Entitlements** fornece as seguintes informações sobre Usuários do GCP:

* **Funções**: lista as funções associadas ao Usuário, categorizadas por **Tipo** e **Nome** da função.
* **Serviços**: lista os serviços aos quais o Usuário tem acesso por meio de funções.


### Contas de serviço
O **Cloud Entitlements** fornece as seguintes informações sobre Contas de serviço do GCP:

* **Funções**: lista as funções associadas à Conta de serviço, categorizadas por **Tipo** e **Nome** da função.
* **Serviços**: lista os serviços aos quais a Conta de serviço tem acesso por meio de funções.
* **Chave de acesso**: fornece o **ID da Chave**, a **data de criação**, e a **data de expiração** das Chaves de acesso da Conta de serviço.


## Informações sobre as identidades do Azure

### Usuários
O **Cloud Entitlements** fornece as seguintes informações sobre Usuários registrados no Azure:


* **Emblema de Acesso administrativo**: indica se o Usuário possui privilégios administrativos no Azure.
* **Recursos de subscrição**: lista os recursos de subscrição associados ao Usuário, categorizados por:
    * **Subscrição**: fornece o identificador do recurso de subscrição.
    * **Recurso**: fornece o nome do recurso.
    * **Tipo**: informa o tipo do recurso.
    * **Funções**: informa a função do Usuário que permite o acesso ao recurso de subscrição.
    * **Ação**: fornece as ações que o Usuário pode realizar com o recurso. Se o campo exibir um asterisco (*), indica que este recurso permite todas as ações.


* **Método de autenticação**: lista os vários métodos de autenticação associados ao Usuário.

* **Funções**: lista as funções atribuídas ao Usuário, categorizadas por:

    * **Nome**: fornece o nome da função atribuída ao Usuário.
    * **Direct**:informa se a função foi atribuída diretamente ao Usuário. Os possíveis valores são: **Sim** ou **Não**.
    * **Tipo**: indica o tipo da função atribuída ao Usuário.

### Grupos

O **Cloud Entitlements** fornece as seguintes informações sobre Grupos registrados no Azure:

* **Membros**: lista os membros do Grupo, categorizados pelo **Tipo** de identidade.
* **Recursos de subscrição**: lista os recursos de subscrição associados ao Grupo, categorizados por:
    * **Subscrição**: fornece o identificador do recurso de subscrição.
    * **Recurso**: fornece o nome do recurso.
    * **Tipo**: informa o tipo do recurso.
    * **Funções**: informa a função do Grupo que permite o acesso ao recurso de subscrição.
    * **Ação**: fornece as ações que o Grupo pode realizar com o recurso. Se o campo exibir um asterisco (*), indica que este recurso permite todas as ações.

* **Funções**: lista as funções atribuídas ao Grupo, categorizadas por:
    * **Nome**: fornece o nome da função atribuída ao Grupo.
    * **Direct**: informa se a função foi atribuída diretamente ao Grupo. Os possíveis valores são: **Sim** ou **Não**.
    * **Tipo**: indica o tipo da função atribuída ao Grupo.

### Aplicações
O **Cloud Entitlements** fornece as seguintes informações sobre Aplicações do Azure:



* **Funções**: lista as funções associadas à Aplicação, categorizadas por:
    * **Nome**: fornece o nome da função atribuída à Aplicação.
    * **Direct**: informa se a função foi atribuída diretamente à identidade. Os possíveis valores são: Sim ou Não.
    * **Tipo**: indica o tipo da função atribuída à Aplicação.
* **Recursos de subscrição**: lista os recursos de subscrição associados à Aplicação, categorizados por:
    * **Subscrição**: fornece o identificador do recurso de subscrição.
    * **Recurso**: fornece o nome do recurso.
    * **Tipo**: informa o tipo do recurso.
    * **Funções**: informa a função da Aplicação que permite o acesso ao recurso de subscrição.
    * **Ação**: fornece as ações que a Aplicação pode realizar com o recurso. Se o campo exibir um asterisco (*), indica que este recurso permite todas as ações.