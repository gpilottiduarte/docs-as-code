# Autenticação

Mecanismos de autenticação desempenham um papel crucial na segurança do seu sistema. Através deles, é possível verificar e estabelecer comunicação confiável entre diferentes aplicações, validando suas identidades e autorizações para acessar e gerenciar dados sensíveis, segredos e funções correlacionadas no sistema.

As APIs do módulo **A2A** do senhasegura suportam os métodos de autenticação **OAuth v1.0**, **OAuth v2.0** e **AWS**.

:::(Info) (Info)
Para maior segurança, o senhasegura recomenda o uso do método de autenticação **OAuth v2.0**.
:::

Seguindo a recomendação do senhasegura de utilizar o método OAuth v2.0 de autenticação, cada requisição feita às APIs do módulo **A2A** deve incluir o **Client ID**, o **Client Secret** e o **Access Token** . 

O URI da requisição segue o seguinte padrão:

`https://senhasegura/iso/*MODULO*/*FUNÇÃO*`

Eis o que cada parte representa:

* **MÓDULO**: o módulo de função **A2A** do senhasegura.
* **FUNÇÃO**: a função específica do módulo.

Por exemplo, ao criar um dispositivo no **PAM Core**, o formato da URI é:

`POST /iso/pam/device`

Nesse caso:

* **POST** é o método HTTP para criar o dispositivo.

* Antes de **/iso**, insira o URI do appliance.

* **pam** representa o módulo **PAM Core** do senhasegura.

* **device** representa a função do módulo.

Para mais informações sobre como autenticar uma aplicação, acesse o documento [Como autenticar uma aplicação](/v3-32/docs/pt/a2a-how-to-authenticate-an-application).

