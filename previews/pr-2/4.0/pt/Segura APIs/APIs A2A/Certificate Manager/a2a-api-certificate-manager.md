# Certificate Manager

:::(warning) (Cuidado)
Para utilizar esses métodos o recurso **Certificados** deve ser selecionado na autorização da aplicação.
:::

## Introdução

O Segura **Certificate Manager** fornece gerenciamento centralizado do ciclo de vida do certificado digital dentro da organização, desde o Discovery através da verificação automática de sites, diretórios e servidores da web, até a renovação automática do Certificado por meio de Autoridades Certificadoras externa ou interna .

O objetivo desse documento é prover um guia para usuários utilizando o Certificate Manager como administradores, e explicar sobre detalhes de uso, benefícios e procedimentos.

### Como o Certificate Manager funciona

O Segura **Certificate Manager** gerencia todo o ciclo de vida dos certificados digitais, trabalhando com certificados através de geração por requisições, importação manual de certificados existentes, ou Discovery de certificados em dispositivos, domínios ou containers. Além de monitorar a validade dos certificados e possibilitar a renovação de maneira facilitada, o Certificate Manager permite também a visualização de logs e relatórios sobre todas as operações realizadas através da solução.

### Definições

O Segura utiliza uma terminologia específica para suas funções e funcionalidades. Assim, alguns termos devem ser compreendidos antes de iniciar o uso da solução:

-   **Usuário:** Funcionários próprios, estagiários ou terceiros que usam ou podem precisar de acesso aos sistemas da empresa;

-   **Certificado Digital:** Certificados digitais são arquivos que contêm informações, além de chaves, públicas e privadas, usadas para comunicação segura pela Internet. Na presente versão deste manual o Segura realiza o gerenciamento de certificados digitais utilizados em webservices.

-   **Autoridade Certificadora (CA):** É uma empresa ou organização que valida a identidade de pessoas, empresas, endereços de e-mail, websites e emite os certificados digitais relacionados a essas identidades para garantir a autenticidade e integridade das comunicações.

### Atividades

Nesta seção, serão abordadas as seguintes funções do Segura: realizar requisições, receber respostas e métodos do Segura Certificate Manager.

## Métodos

O webservice de integração Segura possui alguns métodos para realizar operações na aplicação.

### Criar/Modificar Request 

 
``` 
POST https://vault_url/iso/certificate/request/\[request_code\] 
``` 
O método **Criar/Modificar Request** cria ou modifica um request de certificado no Segura .

#### Parâmetros

| **Campo** |  Tipo |  Descrição |  Obrig. |
| --- | --- | --- | --- |
| **code_request** | Int | Código de um Request já criado. Caso o código não seja incluído no parâmetro, um novo Request será criado. | Não |
| **certificate_type** | Int | Tipo do certificado. Os possíveis valores são: 1 = DV SSL - Domain SSL; 2 = OV SSL - Organization SSL; 3 = EV SSL - Extended SSL | Sim | 
| **domain_type** | String | Tipo do domínio do certificado. Os possíveis valores são: SING = Single domain; MULT = Multiple domains; WILD = Wildcard | Sim |  
| **organization** | Int | Código da organização. Deverá ser informado o código de uma organização cadastrada no Segura . | Sim |
| **common_name** | String | Nome comum do certificado. | Sim |
| **san** | Array | Subject Alternative Name. Será preenchido com o nome_comum caso o san não seja informado. | Não.  |  
| **tags** | Array | Tags de identificação do certificado. Será cadastrada novas tags caso as informadas não existam. | Não. |
| **encryption** | String | Algoritmo de criptografia. Os possíveis valores são: RSA; DSA | Sim |  
| **encryption_key_size** | Int | Tamanho da chave de criptografia. Os possíveis valores são: 4096; 2048; 1024| Sim |
| **certificate_algorithm** | String | Algoritmo de assinatura Os possíveis valores são: SHA256; SHA384; SHA512. Se a criptografia escolhida for DSA, será permitido apenas o uso de SHA256. | Sim | 
| **validity** | Int | Tempo de validade do certificado, em dias. | Sim |
| **key_password** | String | Senha da chave do certificado. | Não |
| **senha_revogacao** | String | Senha de revogação do certificado. | Não |
| **environments** | Array | Ambientes do certificado. Serão cadastrados novos ambientes de certificado caso os informados não existam. | Não |  
| **systems** | Array | Sistemas do certificado. Serão cadastrados novos sistemas de certificado caso os informados não existam.| Não | 
| **project** | String | Projeto do certificado no request. | Não |
| **external_ip** | String | IP externo do certificado no request. | Não |
| **hostname_ip** | String | IP ou hostname do certificado no request. | Não |
| **justification** | String | Justificativa do request com até 1024 caracteres. | Não |
| **responsible** | Int | Código do responsável pelo request e pelo certificado. Deverá ser um usuário cadastrado no Segura. | Não |
| **description** | String | Descrição do request com até 512 caracteres. | Não |

#### Resposta para certificados

Se o método for executado com sucesso ou com erro, a resposta consiste em um bloco certificado com os campos:

| **Campo** |  Tipo |  Sucesso |  Erro |
| --- | --- | --- | --- |
| **status** | Int | OK | 4xx |
| **message** | String | Criado | Não foi possível criar o request. |
| **error** | Boolean | false | true |
| **code_request** | Int | Código do request. |  O código de request informado é inválido |
| **type_certificate** | Int | Tipo do certificado informado. |  O tipo de certificado informado é inválido. |
| **type_domain** | String | Tipo do domínio do certificado informado. | O tipo do domínio do certificado informado é inválido. |
| **organization** | Int | Código da organização informado. | O código da organização informado é inválido |
| **common_name** | String | Nome comum informado. | O nome comum do certificado não foi informado. |
| **san** | Array | SAN informado(s). | |
| **tags** | Array | Tags informadas. | |
| **encryption** | String | Algoritmo de criptografia informado. | O algoritmo de criptografia informado é inválido. |
| **encryption_key_size** | Int | Tamanho da chave de criptografia informado. | O tamanho da chave de criptografia informado é inválido. |
| **certificate_algorithm** | String | Algoritmo de assinatura informado. | O algoritmo de assinatura informado é inválido. |
| **validity** | Int | Tempo de validade do certificado informado. | O tempo de validade do certificado informado é inválido. |
| **password_key** | String | Informação sensível. | A senha da chave do certificado informada é inválida. |
| **password_revocation** | String | Informação sensível. | A senha da chave do certificado informada é inválida. |
| **environments** | Array | Ambientes informados. | |
| **systems** | Array | Sistemas informados. | |
| **design** | String | Projeto informado. | |
| **ip_external** | String | IP informado. | |
| **ip_hostname** | String | IP ou hostname informado. | |
| **justification** | String | Justificativa informada. | A justificativa deve ter no máximo 1024 caracteres. |
| **responsible** | Int | Código do responsável informado. | O código do responsável informado é inválido. |
| **description** | String | Descrição informada. | A descrição deve ter no máximo 512 caracteres. |

### Consultar/Listar Request 

 
``` 
GET https://vault_url/iso/certificate/request/list\[request_code\] 
``` 
O método **Consultar/Listar Request** consulta uma ou mais requests de certificado no Segura .

#### Parâmetros

| **Campo** |  Tipo |  Descrição |  Obrig. |
| --- | --- | --- | --- |
| **code_request** | Int | Código de um Request já criado. | Não |
| **status_request** | Int | Código de um status de um request. | Não |
| **type_certificate** | Int | Tipo do certificado. As opções serão: 1 = DV SSL - Domain SSL; 2 = OV SSL - Organization SSL; 3 = EV SSL - Extended SSL | Não |  
| **type_domain** | String | Tipo do domínio do certificado. As opções serão: SING = Single domain; MULT = Multiple domains; WILD = Wildcard | Não |  
| **organization** | Int | Código da organização cadastrada no Segura. | Não |
| **common_name** | String | Nome comum do certificado. | Não |
| **san** | String | Subject Alternative Names, separados por vírgula | Não |
| **tags** | String | Tags de identificação do certificado, separados por vírgula | Não |
| **encryption** | String | Algoritmo de criptografia. As opções serão: RSA; DSA | Não | 
| **encryption_key_size** | Int | Tamanho da chave de criptografia. As opções serão: 4096; 2048; 1024 | Não |  
| **algorithm_certified** | String | Algoritmo de assinatura As opções serão: SHA256; SHA384; SHA512 | Não | 
| **validity** | Int | Tempo de validade do certificado em dias. | Não |
| **password_key** | String | Senha da chave do certificado. | Não |
| **password_revocation** | String | Senha de revogação do certificado. | Não |
| **environments** | String | Ambientes do certificado, separados por vírgula | Não |
| **systems** | String | Sistemas do certificado, separados por vírgula | Não |
| **design** | String | Projeto do certificado no request. | Não |
| **ip_external** | String | IP externo do certificado no request. | Não |
| **ip_hostname** | String | IP ou hostname do certificado no request. | Não |
| **responsible** | Int | Código do responsável pelo request e pelo certificado. | Não |
| **offset** | Int | Número base da contagem de registros pela paginação. | Não |
| **limit** | Int | Número de registros na paginação. | Não |

#### Resposta para certificados

Se o método for executado com sucesso ou erro, a resposta consiste em um bloco certificado com os campos:

| **Campo** |  Tipo |  Sucesso |  Erro |
| --- | --- | --- | --- |
| **status** | Int | OK | 4xx |
| **message** | String | Criado | Não foi possível criar o request. |
| **error** | Boolean | false | true |
| **code_request** | Int | Código do request. |  O código de request informado é inválido |
| **status_request** |  String |  Código e nome do status da requisição. |  There are no requests with the status entered. The status code you entered is invalid. |
| **type_certificate** | Int | Tipo do certificado informado. |  O tipo de certificado informado é inválido. |
| **type_domain** | String | Tipo do domínio do certificado informado. | O tipo do domínio do certificado informado é inválido. |
| **organization** | Int | Código da organização informado. | O código da organização informado é inválido |
| **common_name** | String | Nome comum informado. | O nome comum do certificado não foi informado. |
| **san** | Array | SAN informado(s). | |
| **tags** | Array | Tags informadas. | |
| **encryption** | String | Algoritmo de criptografia informado. | O algoritmo de criptografia informado é inválido. |
| **encryption_key_size** | Int | Tamanho da chave de criptografia informado. | O tamanho da chave de criptografia informado é inválido. |
| **certificate_algorithm** | String | Algoritmo de assinatura informado. | O algoritmo de assinatura informado é inválido. |
| **validity** | Int | Tempo de validade do certificado informado. | O tempo de validade do certificado informado é inválido. |
| **password_key** | String | Informação sensível. | A senha da chave do certificado informada é inválida. |
| **password_revocation** | String | Informação sensível. | A senha da chave do certificado informada é inválida. |
| **environments** | Array | Ambientes informados. | |
| **systems** | Array | Sistemas informados. | |
| **design** | String | Projeto informado. | |
| **ip_external** | String | IP informado. | |
| **ip_hostname** | String | IP ou hostname informado. | |
| **justification** | String | Justificativa informada. | A justificativa deve ter no máximo 1024 caracteres. |
| **responsible** | Int | Código do responsável informado. | O código do responsável informado é inválido. |
| **description** | String | Descrição informada. | A descrição deve ter no máximo 512 caracteres. |

### Assinar Request

 
``` 
GET https://vault_url/iso/certificate/request/sign\[request_code\] 
``` 
O método **Assinar Request** assina um request existente no Segura .

#### Parâmetros

| **Campo** |  Tipo |  Descrição |  Obrig. |
| --- | --- | --- | --- |
| **code_request** | Int | Código do request a ser assinado.. | Sim |
| **self_signed** | Int | Indica se é auto-assinado. As opções serão: 1 = true; 0 = false | Sim |  
| **ca** | Int | Código da CA responsável pela assinatura request. Obrigatório, caso auto_assinado seja falso. | Condicional | 
| **justification** | String | Texto de até 1024 caracteres para justificativa. | Não |
| **reason** | Int | Código do motivo da assinatura. Deverá informar um código de um motivo cadastrado no Segura*. | Sim | 
| **itsm_code** | String |  Caracteres para determinar o código do ITSM. Obrigatório caso no grupo de acesso do certificado o parâmetro "Código de governança obrigatório ao justificar" esteja habilitado. Realizar as validações no ITSM da mesma forma que é feito na interface web. | Condicional | 

#### Resposta para certificados

Se o método for executado com sucesso, a resposta consiste em um bloco certificado com os campos:

| **Campo** |  Tipo |  Sucesso |  Erro |
| --- | --- | --- | --- |
| **status** | Int | OK | 4xx |
| **message** | String | Criado | Não foi possível assinar o request. |
| **error** | Boolean | false | true |
| **code_request** | Int | Código da request. |  Informe um código de request. O código da request informado é inválido. |
| **self_signed** | Int | Valor informado. | Não existem requests para este valor de auto-assinado informado. O valor para auto-assinado informado é inválido. |
| **ca** | Int | Código e nome da CA informado. | Não existem requests com o código da CA informado. O código da CA informado é inválido |
| **justification** | String | Justificativa informada. | A justificativa deve ter no máximo 1024 caracteres. |
| **reason** | Int | Código e nome do motivo informado. | O código do motivo informado é inválido. |
| **itsm_code** | String | Código da GMUD informado. | Informe o código da GMUD. |

### Consultar/Listar Certificados

 
``` 
GET https://vault_url/iso/certificate/list/\[request_code\] 
``` 
O método **Consultar/Listar Certificados** consulta uma ou mais certificados no Segura.

#### Parameters

| **Campo** |  Tipo |  Descrição |  Obrig. |
| --- | --- | --- | --- |
| **code_ certificate** | Int | Código de um certificado já criado no Segura. | Não |
| **status_certificate** | Int | Código de um status de um certificado. As opções serão: 1 = Válido; 2 = Revogado; 3 = Renovação pendente; 4 = Expirado** | Não |  
| **active** | Int | Estado do certificado no Segura. As opções serão: 1 = Ativo; 0 = Inativo | Não |  
| **start_validity** | String | Data de início da validade. | Não |
| **end_validity** | String | Data de fim da validade. | Não |
| **origin_certificate** | Int | Origem do certificado no Segura. As opções serão: SCAN = Scan e Discovery; REQU = Request; IMPO = Importado manualmente | Não |
| **type_certificate** | Int | Tipo do certificado. As opções serão: 1 = DV SSL - Domain SSL; 2 = OV SSL - Organization SSL; 3 = EV SSL - Extended SSL | Não | 
| **type_domain** | String | Tipo do domínio do certificado. As opções serão: SING = Single domain; MULT = Multiple domains; WILD = Wildcard | Não |  
| **organization** | Int | Código da organização. | Não |
| **common_name** | String | Nome comum do certificado. | Não |
| **san** | String | Subject Alternative Name. Poderá informar mais de 1 separados por vírgula. | Não |  
| **tags** | String | Tags de identificação do certificado. Poderá informar mais de 1 separados por vírgula. | Não |  
| **encryption** | String | Algoritmo de criptografia. As opções serão: RSA; DSA | Não |  
| **encryption_key_size** | Int | Tamanho da chave de criptografia. As opções serão: 4096; 2048; 1024 | Não |  
| **algorithm\_certified** | String | Algoritmo de assinatura. As opções serão: sha256; sha384; sha512 | Não |  
| **validity** | Int | Tempo de validade do certificado em quantidade de dias. | Não |
| **password_key** | String | Senha da chave do certificado. | Não |
| **password_revocation** | String | Senha de revogação do certificado. | Não |
| **environments** | String | Ambientes do certificado. Poderá informar mais de 1 separados por vírgula. | Não |  
| **systems** | String | Sistemas do certificado. Poderá informar mais de 1 separados por vírgula.** | Não |  
| **project** | String | Projeto do certificado no request. | Não |
| **ip_external** | String | IP externo do certificado no request. | Não |
| **ip_hostname** | String | IP ou hostname do certificado no request. | Não |
| **self_signed** | Int | Indica se é auto-assinado. As opções serão: 1 = true; 0 = false | Não | 
| **ca** | Int | Código da CA responsável pela assinatura request. | Não |
| **responsible** | Int | Código do responsável pelo request e pelo certificado. | Não |
| **offset** | Int | Número base da contagem de registros pela paginação. | Não |
| **limit** | Int | Número de registros na paginação. | Não |

#### Resposta para certificados

Se o método for executado com sucesso ou erro, a resposta consiste em um bloco certificado com os campos:

| **Campo** |  Tipo |  Sucesso |  Erro |
| --- | --- | --- | --- |
| **status** | Int | OK | 4xx |
| **message** | String | Criado | Não foi possível encontrar certificados com as informações fornecidas. |
| **error** | Boolean | false | true |
| **code_request** | Int | Código da request. | Não existe um certificado com o código informado. O código do certificado informado é inválido. |
| **status_certified** | Int | Código e nome do status do certificado. | Não existem certificados com o status informado. O código de status informado é inválido. |
| **active** | Int | Código e nome do estado do certificado no Segura. | Não existe nenhum certificado com o estado informado. O código do estado informado é inválido. |
| **start_validity** | String | Data de início da validade. | Não existem certificados com a data de início da validade informada. A data de início da validade informada é inválida. |
| **end_validity** | String | Data de fim da validade. |  Não existem certificados com a data de fim da validade informada. A data de fim da validade informada é inválida. |
| **origin_certificate** | Int | Origem do certificado no Segura. | Não existem certificados com a origem informada. A origem informada é inválida. |
| **type_certificate** | Int | Tipo do certificado | Não existem certificados com o tipo informado. O tipo de certificado informado é inválido. |
| **type_domain** | String | Tipo do domínio do certificado | Não existem certificados com o tipo do domínio informado. O tipo do domínio do certificado informado é inválido. |
| **organization** | Int | Código e nome da organização informado | Não existem certificados com o código da organização informado. O código da organização informado é inválido. |
| **common_name** | String | Nome comum do certificado | Não existem certificados com o nome comum informado. |
| **encryption_key_size** | Int | Tamanho da chave de criptografia do certificado | Não existem certificados com o tamanho da chave de criptografia informado. O tamanho da chave de criptografia informado é inválido. |
| **algorithm_certified** | String | Algoritmo de assinatura do certificado | Não existem certificados com o algoritmo de assinatura informado. O algoritmo de assinatura informado é inválido. |
| **validity** | Int | Tempo de validade do certificado | Não existem certificados com o tempo de validade informado. O tempo de validade do certificado informado é inválido. |
| **password_key** | String | Senha da chave do certificado. | Não existem certificados com a senha da chave informada. A senha da chave do certificado informada é inválida. |
| **password_revocation** | String | Senha de revogação do certificado. | Não existem certificados com a senha de revogação informada. A senha de revogação do certificado informada é inválida. |
| **environments** | String | Ambientes do certificado | Não existem certificados com o(s) ambiente(s) informado(s). |
| **systems** | String | Sistemas do certificado | Não existem certificados com o(s) sistema(s) informado(s). |
| **project** | String | Projeto do certificado | Não existem certificados com o projeto informado. |
| **ip_external** | String | IP externo do certificado | Não existem certificados com o IP externo informado. |
| **ip_hostname** | String | IP ou hostname do certificado | Não existem certificados com o IP ou hostname informado. |
| **self_signed** | Int | Informação se o certificado é auto-assinado | Não existem certificados para este valor de auto-assinado informado. O valor para auto-assinado informado é inválido. |
| **ca** | Int | Código e nome da CA informado | Não existem certificados com o código da CA informado.O código da CA informado é inválido. |
| **responsible** | Int | Código e nome do responsável informado | Não existem certificados com o código de responsável informado.O código do responsável informado é inválido. |
| **description** | String | Descrição do certificado |  |
| **publish_info** | Array | Informações adicionais para publicação |  |
| **device** | Array | Código dos dispositivos atrelados ao certificado |  |

## Funcionalidades

O webservice de integração Segura possui algumas funcionalidades para realizar operações na aplicação.

### Publicar Certificado

 
``` 
POST https://vault_url/iso/cert/publish 
``` 
A funcionalidade **Publicar Certificado** solicita a publicação de um certificado em um ou mais dispositivos

#### Parâmetros

| **Campo** |  Tipo |  Descrição |  Obrigatório |
| --- | --- | --- | --- |
| **code_certificate** | Int | Código do certificado a ser publicado. | Sim |
| **code_profile_publication** | Int | Código do perfil de publicação. Será utilizado um perfil de publicação previamente cadastrado no Segura .| Sim |  
| **justification** | String | Justificativa da publicação com até 1024 caracteres. | Não |
| **reason** | Int | Código do motivo da publicação. Deverá informar um código de um motivo cadastrado no Segura . | Sim |  
| **itms_code** | String |  caracteres para determinar o código do ITSM. Obrigatório caso no grupo de acesso do certificado o parâmetro "Código de governança obrigatório ao justificar" esteja habilitado. Realizar as validações no ITSM da mesma forma que é feito na interface web. | Condicional |  
| **devices** | Array | Array com os códigos dos dispositivos onde o certificado deverá ser publicado | Sim |

#### Resposta para certificados

Se a funcionalidade for executado com sucesso ou erro, a resposta consiste em um bloco certificado com os campos:

| **Campo** |  Tipo |  Sucesso |  Erro |
| --- | --- | --- | --- |
| **status** | Int | OK | 4xx |
| **message** | String | Criado | Código de certificado inválido. |
| **error** | Boolean | false | true |
| **code_publishing** | Int | Código do agendamento da publicação |  |
| **reason** | Int | Código e nome do motivo da publicação | O código do motivo informado é inválido. |
| **itms_code** | String | Código da GMUD informado.  | Informe o código da GMUD. Código de GMUD não existe no sistema de ITSM integrado ao Segura . O código deve ter no máximo 30 caracteres. |
| **devices** | Array | Códigos de dispositivos para publicação |  |

### Consultar/Listar Publicações 

 
``` 
GET https://vault_url/iso/cert/publish/\[code_request\] 
``` 
A funcionalidade **Consultar/Listar Publicações** consulta uma ou mais publicações no Segura .

#### Parâmetros

| **Campo** |  Tipo |  Descrição |  Obrig. |
| --- | --- | --- | --- |
| **code_publication** | Int | Código da publicação. | Não |
| **code_certified** | Int | Código do certificado a ser Publicado. | Não |
| **code_profile_publication** | Int | Código do perfil de publicação. | Não |
| **creation_date** | String | Data de cadastro da publicação | Não |
| **processed** | Int | Status do processamento da publicação. As opções serão: 1 = Sim; 0 = Não | Não |  
| **error** | Int | Status de erro da publicação. As opções serão: 1 = Sim; 0 = Não | Não |  
| **reason** | Int | Código do motivo da publicação. | Não |
| **itms_code** | String | Texto da GMUD informada. | Não |
| **device** | Int | Código do dispositivo da publicação. | Não |
| **offset** | Int | Número base da contagem de registros pela paginação. | Não |
| **limit** | Int | Número de registros na paginação. | Não |

#### Resposta para certificados

Se a funcionalidade for executado com sucesso ou erro, a resposta consiste em um bloco certificado com os campos:

| **Campo** |  Tipo |  Sucesso |  Erro |
| --- | --- | --- | --- |
| **status** | Int | OK | 4xx |
| **message** | String | Criado | Não foi possível encontrar publicações com as informações fornecidas. |
| **error** | Boolean | false | true |
| **code_publishing** | Int | Código do agendamento da publicação | Não existe uma publicação com o código informado. O código da publicação informado é inválido. |
| **reason** | Int | Código e nome do motivo da publicação | O código do motivo informado é inválido. |
| **itms_code** | String | Código da GMUD informado | Informe o código da GMUD. Código de GMUD não existe no sistema de ITSM integrado ao Segura . O código deve ter no máximo 30 caracteres. |
| **code_credential** | Int | Código da credencial para publicação | O código da credencial informado é inválido. |
| **username** | String | Username para busca de credenciais |  |
| **quantity_devices** | Int | Quantidade de dispositivos da publicação |  |


### Criar/Editar Perfil de Publicação Apache

 
``` 
POST https://vault_url/iso/cert/profile/apache 
``` 
A funcionalidade **Criar/Editar Perfil de Publicação Apache** cria ou edita um perfil de publicação do plugin Apache.

#### Parâmetros

| **Campo** |  Tipo |  Descrição |  Obrig. |
| --- | --- | --- | --- |
| **code_profile** | Int | Código de um perfil já criado. Caso o código não seja passado, o sistema interpretará como a criação de um perfil. | Não |  
| **name_profile** | String | Nome do perfil a ser criado. | Sim |
| **site** | String | Site onde o certificado deverá ser instalado. Se não for informado, o certificado será instalado no site padrão do Apache. | Não | 
| **config_path** | String | Endereço da configuração. Padrão: /etc/apache2/sites-available/default.com.conf | Não | 
| **port** | Int | Porta. | Padrão: 443 | Não | 
| **code_credential** | Int | Código da credencial a ser utilizada na publicação. Será utilizada uma credencial previamente cadastrada o cofre. Esta informação será obrigatória caso não seja informado um username. | Condicional | 
| **username** | String | Username que será utilizado para localizar credenciais para a publicação. Esta informação será obrigatória caso não seja informado um codigo_credencial | Condicional |  
| **devices** | Array | Array com os códigos dos dispositivos onde o certificado deverá ser publicado | Sim |

#### Resposta para certificados

Se a funcionalidade for executada com sucesso ou erro, a resposta consiste em um bloco certificado com os campos:

| **Campo** |  Tipo |  Sucesso |  Erro |
| --- | --- | --- | --- |
| **status** | Int | OK | 4xx |  
| **message** | String | Criado | Não foi possível criar o perfil. |  
| **error** | Boolean | false | true |
| **code_request** | Int | Código do perfil de publicação | O código do perfil informado é inválido. |
| **name_profile** | String | Nome do perfil. |  |
| **site** | String | Site informado |  |
| **config_path** | String | Endereço da configuração |  |
| **port** | Int | Porta |  |
| **code_credential** | Int | Código da credencial para publicação | O código da credencial informado é inválido. |
| **username** | String | Username para busca de credenciais |  |
| **devices** | Array | Códigos de dispositivos para publicação |  |

### Criar/Editar Perfil de Publicação IIS

 
``` 
POST https://vault_url/iso/cert/profile/iis 
``` 
A funcionalidade **Criar/Editar Perfil de Publicação IIS** cria ou edita um perfil de publicação do plugin IIS.

#### Parâmetros

| **Campo** |  Tipo |  Descrição |  Obrig. |
| --- | --- | --- | --- |
| **code_profile** | Int | Código de um perfil já criado. Caso o código não seja passado, o sistema interpretará como a criação de um perfil. | Não | 
| **name_profile** | String | Nome do perfil a ser criado. | Sim |
| **site** | String | Site onde o certificado deverá ser instalado. Se não for informado, o certificado será instalado no site padrão do IIS. | Não | 
| **cert_store** | String | Repositório de gerenciamento de certificados do IIS. Padrão: MY | Não | 
| **port** | Int | Porta. Padrão: 443 | Não | 
| **code_credential** | Int | Código da credencial a ser utilizada na publicação. Será utilizada uma credencial previamente cadastrada o cofre. Esta informação será obrigatória caso não seja informado um username. | Condicional | 
| **username** | String | Username que será utilizado para localizar credenciais para a publicação. Esta informação será obrigatória caso não seja informado um codigo_credencial. | Condicional |  
| **devices** | Array | Array com os códigos dos dispositivos onde o certificado deverá ser publicado. Os dispositivos devem existir no Segura | Sim |  |  |

#### Resposta para certificados

Se a funcionalidade for executada com sucesso, a resposta consiste em um bloco certificado com os campos:

| **Campo** |  Tipo |  Sucesso |  Erro |
| --- | --- | --- | --- |
| **status** | Int | OK | 4xx |  
| **message** | String | Criado | Não foi possível criar o perfil. |  
| **error** | Boolean | false | true |
| **code_profile** | Int | Código do perfil de publicação | O código do perfil informado é inválido. |
| **name_profile** | String | Nome do perfil |  |
| **site** | String | Site informado |  |
| **cert_store** | String | Repositório de gerenciamento de certificados do IIS |  |
| **port** | Int | Porta |  |
| **code_credential** | Int | Código da credencial para publicação | O código da credencial informado é inválido. |
| **username** | String | Username para busca de credenciais |  |
| **devices** | Array | Códigos de dispositivos para publicação |  |

### Criar/Editar Perfil de Publicação F5 BigIP

 
``` 
POST https://vault_url/iso/cert/profile/bigip 
``` 
A funcionalidade **Criar/Editar Perfil de Publicação F5 BigIP** cria ou edita um perfil de publicação do plugin F5 BigIP.

#### Parâmetros

| **Campo** |  Tipo |  Descrição |  Obrig. |
| --- | --- | --- | --- |
| **code_profile** | Int | Código de um perfil já criado. Caso o código não seja passado, o sistema interpretará como a criação de um perfil. | Não |   
| **name_profile** | String | Nome do perfil a ser criado. | Sim |
| **name_partition** | String | Nome da partição. | Não |
| **name_cert** | String | Nome do certificado. Se já existir um certificado com o mesmo nome configurado, na publicação ele será substituído. | Não |    
| **profile_client_vips** | Array |  Array de Perfis SSL Client e seus VIPs | Não |    
| **profile_server_vips** | Array | Array de Perfis SSL Server e seus VIPs. | Não |   
| **code_credential** | Int | Código da credencial a ser utilizada na publicação. Será utilizada uma credencial previamente cadastrada o cofre. Esta informação será obrigatória caso não seja informado um username. | Condicional |   
| **username** | String | Username que será utilizado para localizar credenciais para a publicação. Esta informação será obrigatória caso não seja informado um codigo_credencial. | Condicional |   
| **devices** | Array | Array com os códigos dos dispositivos onde o certificado deverá ser publicado | Sim |

#### Resposta para certificados

Se a funcionalidade for executada com sucesso, a resposta consiste em um bloco certificado com os campos:

| **Campo** |  Tipo |  Sucesso |  Erro |
| --- | --- | --- | --- |
| **status** | Int | OK | 4xx |  
| **message** | String | Criado | Não foi possível criar o perfil. |  
| **error** | Boolean | false | true |
| **code_profile** | Int | Código do perfil de publicação | O código do perfil informado é inválido. |
| **name_profile** | String | Nome do perfil |  
| **name_partition** | String | Nome da partição |  
| **name_certificate** | Texto | Nome do certificado que será exibido na aplicação web |  |
| **profile_client** | Array |  Nome completo do perfil. |  
| **profile_server** | Array | Nome completo do perfil. |  
| **code_credential** | Int | Código da credencial para publicação | O código da credencial informado é inválido. |
| **username** | String | Username para busca de credenciais |  
| **devices** | Array | Códigos de dispositivos para publicação |  

### Criar/Editar Perfil de Publicação WebSphere WAS

 
``` 
POST https://vault_url/iso/cert/profile/was
``` 
A funcionalidade **Criar/Editar Perfil de Publicação WebSphere Was** cria ou edita um perfil de publicação do plugin WebSphere WAS.

#### Parâmetros

| **Campo** |  Tipo |  Descrição |  Obrig. |
| --- | --- | --- | --- |
| **code_profile** | Int | Código de um perfil já criado. Caso o código não seja passado, o sistema interpretará como a criação de um perfil.| Não |  
| **name_profile** | String | Nome do perfil a ser criado. | Sim |
| **key_db_path** | String | Endereço e nome da Key Database. | Sim |
| **key_db_password** | String | Senha do servidor. | Sim |
| **label** | String | Label do servidor. | Sim |
| **code_credential** | Int | Código da credencial a ser utilizada na publicação. Será utilizada uma credencial previamente cadastrada o cofre. Esta informação será obrigatória caso não seja informado um username. | Condicional |  
| **username** | String | Username que será utilizado para localizar credenciais para a publicação. Esta informação será obrigatória caso não seja informado um codigo_credencial.** | Condicional |  
| **devices** | Array | Array com os códigos dos dispositivos onde o certificado deverá ser publicado. | Sim |

#### Resposta para certificados

Se a funcionalidade for executada com sucesso ou erro, a resposta consiste em um bloco certificado com os campos:

| **Campo** |  Tipo |  Sucesso |  Erro |
| --- | --- | --- | --- |
| **status** | Int |  OK | 4xx |  
| **message** | String | Criado | Não foi possível criar o perfil. |  
| **error** | Boolean | false | true |
| **code_profile** | Int | Código do perfil de publicação | O código do perfil informado é inválido. |
| **name_profile** | String | Nome do perfil |  
| **key_db_path** | String | Endereço e nome da Key Database |  
| **key_db_password** | String | Senha do servidor | 
| **label** | Texto | Label do servidor. |  
| **code_credential** | Int | Código da credencial para publicação. | O código da credencial informado é inválido. |
    | **username** | String | Username para busca de credenciais. |  
| **devices** | Array | Códigos de dispositivos para publicação. | 

### Importar um certificado SSL
#### Requisição
Para importar um certificado SSL, envie uma requisição para o seguinte endpoint:
```
PUT api/certificate/upload
```


#### Parâmetros de requisição
***Body***



| Campo | Tipo | Obrigatório | Descrição | Exemplo |
| --- | --- | --- | --- | --- |
|**certificate** | String | Sim | Código de um certificado já criado em senhas. | Base64_encoded_certificate_file |
|  **private_key**  | String | Não |Caso este campo esteja vazio, a chave não estará disponível no sistema, limitando o uso do certificado, sua publicação e a possibilidade de vinculá-lo a dispositivos. **Nota**: A extensão .pfx já inclui uma chave privada. Portanto, mesmo que você não informe seu valor na chamada da API, ainda será possível visualizá-la na resposta.. | Base64_encoded_private_key_file |
| **password** | String | Não | Senha para recuperar o certificado correspondente. | null |
| **revoke_password** | String | Não | Senha para revogar o certificado SSL associado. | null |
| **extension** | String | Sim |  | certificate_extension |

**Exemplo de requisição**

```
{
    "certificate": "Base64_encoded_certificate_file",
    "private_key": "Base64_encoded_private_key_file",
    "password": null,
    "revoke_password": null,
    "extension": "certificate_extension",
}

```

#### Retorno

Importa um certificado SSL e retorna uma mensagem com informações sobre o processo de importação. 



**Resposta esperada**

```
HTTP/1.1 200 OK
```

```
{
    "response": {
        "status": 200,
        "message": "1001: OK",
        "error": false,
        "error_code": 0,
        "status_certificate": 1,
        "detail": "",
        "mensagem": "1001: OK",
        "erro": false,
        "cod_erro": 0
}
```

**Em caso de erro - certificado não encontrado**

```
HTTP/1.1 400 BAD REQUEST
```

```
{
    "response": {
        "status": 400,
        "message": "1049: There is no certificate with the given code",
        "error": false,
        "error_code": 0,
        "status_certificate": 1,
        "detail": "",
        "mensagem": "1049: There is no certificate with the given code",
        "erro": false,
        "cod_erro": 0
},
   
    "exception": {
        "code": 1049,
        "message": "1049: There is no certificate with the given code",
        "detail": null
}

```

#### Erros possíves
Aqui está uma lista de códigos de erro HTTP e seus possíveis motivos: 


* **400 Bad Request:** missing ```extension``` parameter (parâmetro ```extension``` ausente).

* **401 UNAUTHORIZED**: token expired (token expirado).

* **404 Not Found:** no token registered for the call (nenhum token registrado para a chamada).

* **500 Internal Server Error:** the certificate already exists (o certificado já existe).

* **500 Internal Server Error:** invalid or empty certificate (certificado inválido ou vazio).

* **500 Internal Server Error:** invalid ```private key```. (```private key```inválida).
.

* **500 Internal Server Error:** empty ```private key``` (```private key``` vazia).