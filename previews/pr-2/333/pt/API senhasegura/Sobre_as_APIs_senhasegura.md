# Sobre as APIs senhasegura

As **APIs senhasegura** foram desenvolvidas para fornecer uma interface que permite a integração de outras aplicações e ferramentas com o senhasegura, possibilitando acesso seguro às funcionalidades e informações do cofre. 
Essas APIs garantem o acesso e a gestão programática dos dados armazenados no senhasegura, assegurando a manutenção da integridade, confidencialidade e auditoria das informações.

Operando sob a arquitetura REST, as **APIs senhasegura**:
- São baseadas em HTTP.
- Habilitam a comunicação stateless entre cliente e servidor.
- Utilizam os métodos <code><span style="color:green"> GET</code></span>, <code><span style="color:orange"> POST</code></span>, <code><span style="color:blue"> PUT</code></span>, <code><span style="color:red"> DEL</code></span> para realizar requisições.
- Possuem autenticação suportada pelos protocolos **AWS**, **OAuth v1.0** e **OAuth v2.0**.
- Aceitam requisições URL *form-encoded*.
- Retornam respostas em JSON.
- Oferecem recursos de integração com aplicações terceiras para ações como consulta, criação, atualização, ativação e inativação de informações sensíveis, incluindo credenciais, dispositivos, chaves de acesso, sessões remotas, usuários relacionados, certificados digitais, dashboards, segredos DevOps e informações sensíveis corporativas pessoais e de equipe. 


## Funcionalidades

As **APIs senhasegura** possuem:

* **Serviço web RESTful**: o serviço web do senhasegura opera sob uma arquitetura REST, garantindo comunicação padronizada e eficiente. 

* **Métodos de autenticação**: a API oferece suporte para **AWS**, **OAuth v1.0** e **OAuth v2.0**, garantindo autenticação robusta e acesso seguro a dados privilegiados.

* **Registros e auditoria**: cada requisição feita à API gera registros detalhados com informações essenciais, como data, hora, endereço IP do dispositivo de origem e a aplicação cliente envolvida. Afim de manter a segurança dos dados, informações sensíveis, como senhas e chaves, permanecem ocultas.

* **Controle de acesso**: além da autenticação OAuth, o controle de acesso também considera o endereço IP do dispositivo de origem, aprimorando ainda mais a segurança.

* **Gerenciamento de credenciais**: as aplicações do cliente podem acessar apenas as credenciais criadas por eles ou aquelas especificamente atribuídas a eles nas configurações do senhasegura.

* **Tipos de credenciais**: a API permite o gerenciamento de diversos tipos de credenciais, como senhas usadas para acessar dispositivos, servidores ou roteadores, e chaves RSA para conexões SSH. As senhas e as chaves RSA estão sujeitas à rotação automática de acordo com a política de segurança de cada ambiente.

* **Entidades editáveis**: a API possibilita editar uma variedade de entidades, incluindo credenciais, dispositivos e informações pessoais, garantindo um amplo gerenciamento de dados privilegiados.

## Aplicabilidades e casos de uso

As **APIs senhasegura** são aplicáveis em vários cenários, como:

### Gestão de credenciais
Com a API de **Credenciais**, organizações podem cadastrar e gerenciar credenciais de maneira eficiente, garantindo acesso seguro a dispositivos e recursos críticos registrados no **PAM Core**. Isso é particularmente valioso quando integrado com aplicações de terceiros, como ferramentas de gestão de inventário ou plataformas de automação.


**Caso de uso**

Uma FINTECH precisa garantir que a utilização de suas credenciais seja feita de maneira segura e auditada. Utilizando a API senhasegura, ela pode integrar seu sistema de scan de vulnerabilidades com a plataforma de segurança **PAM Core**. Com essa integração, a ferramenta pode consumir as credenciais já registradas no senhasegura para executar seus procedimentos garantindo que apenas funcionários autorizados tenham acesso aos recursos críticos de maneira segura e controlada.

**Documento de referência**

* [Credenciais](/v3-33/docs/pt/api-a2a-pam-core-credentials)
<br>

### Gestão de dispositivos
A API de **Dispositivo**facilita a administração e manutenção de dispositivos registrados no **PAM Core**, assegurando que permaneçam acessíveis apenas a usuários autorizados.

**Caso de uso**

Uma HEALTHTECH precisa administrar uma grande variedade de dispositivos conectados à rede que já estão registrados em seu CMDB. Utilizando a API, a empresa pode automatizar o registro e configuração inicial desses dispositivos, garantindo que estejam prontos para uso imediato e em conformidade com os padrões de segurança e regulamentações do setor.


**Documento de referência**

* [Dispositivos](/v3-33/docs/pt/api-a2a-pam-core-devices)

<br>

### Gestão de sessões remotas
A API de **Sessões remotas** permite às organizações controlar e monitorar o uso de sessões de proxy registradas no **PAM Core** de forma automatizada e centralizada. Essa API facilita a criação, monitoramento e encerramento de sessões de proxy, oferecendo recursos para gerenciamento de identidades, controle de acesso e auditoria de atividades. 

**Caso de uso**

Uma empresa de tecnologia de pagamentos que processa transações financeiras online precisa garantir a segurança das comunicações entre os sistemas internos e os parceiros de negócios. Nesse cenário, o cliente possui um sistema desenvolvido internamente, utilizado pelos colaboradores para realizar os acessos necessários de manutenção. 
Para monitorar esses acessos sem alterar a forma de trabalho dos colaboradores, a empresa decidiu utilizar o PAM, mantendo o acesso através da aplicação customizada.

Ao utilizar a API de **Sessões remotas** do senhasegura para criar uma URL autenticada para uma sessão web proxy, a empresa pode incorporar o PAM na sua plataforma de forma transparente. Isso permite redirecionar o usuário para uma sessão autenticada, garantindo a segurança e integridade das transações financeiras realizadas, sem que os colaboradores precisem logar diretamente no senhasegura. 
Assim, a empresa consegue controlar e monitorar o uso de sessões de proxy de forma automatizada e centralizada.


**Documento de referência**

* [Sessões remotas](/v3-33/docs/pt/api-a2a-pam-core-remote-sessions)

<br> 

### Gestão de chaves SSH
Através da API de **Chaves SSH**, organizações podem gerenciar chaves SSH registradas no **PAM Core** de forma simples e centralizada, permitindo automatizar processos, fortalecer a segurança e garantir conformidade com políticas de acesso.

**Caso de uso**

Uma empresa bancária que implementa chaves SSH para acesso aos servidores Unix/Linux pode facilmente gerenciar as chaves por meio do uso da API para cadastramento, consulta ou edição e assim, garantir o acesso auditado e monitorado por meio do senhasegura.

**Documento de referência**

* [Chaves SSH](/v3-33/docs/pt/api-a2a-pam-core-ssh-keys)

<br>

### Gestão de usuários relacionados
A API  de **Usuários relacionados** possibilita a gestão de associações entre usuários do senhasegura e múltiplos nomes de usuário de credenciais, oferecendo uma solução flexível e personalizada para a gestão de acesso aos dispositivos. 

**Caso de uso**

Uma empresa de consultoria em TI que presta serviços para várias organizações precisa gerenciar de forma eficiente o acesso de seus consultores aos sistemas e recursos dos clientes. Utilizando a API, a empresa pode associar múltiplos nomes de usuário de credenciais a um único usuário do senhasegura, facilitando o gerenciamento de acesso e garantindo a conformidade com as políticas de segurança dos clientes.

**Documento de referência**

* [Usuários relacionados](/v3-33/docs/pt/api-a2a-related-users)

### Gestão de certificados
A API de do **Certificate Manager** foi projetada para organizações de todos os tamanhos, visando centralizar e simplificar o processo de gestão de certificados digitais, incluindo a importação segura dos certificados, monitoramento contínuo, automação do ciclo de vida do certificado, integração com Autoridades Certificadoras e publicação em servidores web.

**Caso de uso**

Um e-commerce que opera uma plataforma de compras online precisa garantir a segurança das transações financeiras dos clientes. Utilizando a API, a empresa pode automatizar o processo de renovação e monitoramento de certificados SSL/TLS,  evitando a indisponibilidade do serviço e assegurando conexões seguras e criptografadas entre os clientes e o servidor web.

**Documento de referência**

- [Certificate Manager](/v3-33/docs/pt/a2a-api-certificate-manager)
<br>

### Gestão de dashboards
A API de **Dashboards** possibilita o consumo das informações compiladas no produto **Dashboards** do senhasegura. Através da API, é possível consultar as informações presentes nos dashboards de sessões remotas, de ações suspeitas e de credenciais. As informações consultadas podem ser usadas para elaboração de painéis customizados.

**Caso de uso**

Uma empresa de segurança cibernética que oferece serviços de monitoramento e proteção de redes corporativas precisa acessar e visualizar informações compiladas em dashboards para analisar as atividades privilegiadas dos usuários e identificar possíveis ameaças à segurança da rede. Utilizando a API, a empresa pode consultar e analisar dados de sessões remotas, ações suspeitas e credenciais, e então, criar painéis customizados que fornecem insights valiosos para a proteção proativa da infraestrutura de TI de seus clientes.

**Documento de referência**

- [Dashboards](/v3-33/docs/pt/api-dashboards)
<br>

### Gestão de informações protegidas

Essa API oferece a possibilidade de integrar sistemas com o produto **Protected information** do senhasegura, facilitando a consulta de informações compartilhadas corporativamente.


**Caso de uso**

Uma empresa de consultoria em segurança de dados que presta serviços para diversas organizações pode utilizar a API para armazenar e atualizar senhas de acesso a sistemas dos clientes.

**Documento de referência**

- [Protected information](/v3-33/docs/pt/api-a2a-protected-information)

### Gestão de segredos DevOps
A API do **DevOps Secret Manager (DSM)** oferece uma solução ágil e segura para que ferramentas e aplicações consumam de maneira eficiente e controlada os segredos e credenciais utilizados durante o desenvolvimento e operação em esteiras DevOps.

**Caso de uso**

Uma empresa de desenvolvimento de software que adota práticas ágeis e DevSecOps precisa gerenciar de forma eficiente os segredos e credenciais utilizados nos pipelines de desenvolvimento e entrega contínua. Através da API, o **DevOps Secret Manager** pode entregar os acessos de maneira segura às ferramentas de automação, garantindo que apenas as aplicações autorizadas tenham acesso aos segredos necessários para executar suas tarefas de forma segura e eficiente, sem expor as credenciais em seus códigos.

**Documento de referência**

- [DevOps Secret Manager](/v3-33/docs/pt/a2a-api-dsm)

<br>

### Gestão de itens armazenados no MySafe
As APIs do **MySafe** possibilitam a gestão segura de itens como senhas, anotações, arquivos e segredos de API corporativos pessoais e de equipe armazenados no cofre **MySafe**, garantindo a manutenção da integridade e confidencialidade das informações.

**Caso de uso**

Em uma empresa de consultoria, uma IA de anotações de reuniões é integrada à API, permitindo o envio automático de anotações para o cofre, onde são armazenadas de maneira segura e compartilhadas com os participantes envolvidos para consulta. 
A API também permite que outro sistema mantenha os acessos a itens como senhas, segredos de API, anotações atualizados em tempo real por meio de integração. Isso garante que, por exemplo, caso um colaborador seja movido para outra área, seus acessos sejam ajustados automaticamente.

**Documento de referência**

- [MySafe](/v3-33/docs/pt/api-mysafe)


<br>

### APIs SCIM 

O senhasegura oferece APIs no padrão SCIM (System for Cross-domain Identity Management) com o objetivo de proporcionar uma forma padronizada para a gestão e provisionamento das identidades de usuários na aplicação. Estas APIs são fundamentais para a plataforma, pois possibilitam a integração do senhasegura com sistemas de IGA (Identity Governance and Administration), permitindo o gerenciamento automatizado e centralizado de usuários e seus acessos dentro do próprio senhasegura.

**Caso de uso**

Um grande banco precisa garantir a gestão de identidade centralizada. Quando um novo funcionário é contratado, sua aplicação IGA comunica-se automaticamente com a plataforma senhasegura via API SCIM para provisionar a conta do novo usuário, atribuindo as permissões e acessos necessários de forma eficiente e rápida. Isso garante que o novo colaborador tenha acesso imediato aos recursos essenciais no senhasegura, eliminando a necessidade de configurações manuais e reduzindo o risco de erros.

**Documento de referência**

- [SCIM](/v3-33/docs/pt/scim-api)
<br>

## Conclusão

Com uma ampla gama de funcionalidades, as **APIs senhasegura** abrangem desde a gestão de credenciais e dispositivos até o monitoramento de sessões remotas e certificados digitais. Essas funcionalidades são aplicáveis a uma variedade de cenários de uso, desde organizações financeiras que precisam proteger transações online até empresas de tecnologia que buscam automatizar seus processos de desenvolvimento e operações.
As **APIs senhasegura** representam não apenas uma ferramenta importante para aprimorar a segurança da informação, mas também uma oportunidade para as organizações aumentarem sua eficiência operacional e garantirem conformidade com regulamentações e padrões de segurança. 
Ao adotar e integrar as **APIs senhasegura** em seus sistemas e processos, as empresas podem alcançar níveis mais elevados de proteção de dados e confiança do cliente em um mundo digital cada vez mais complexo e interconectado.

## Primeiros passos
Para começar a utilizar as **APIs senhasegura**, acesse os documentos abaixo:
- [Primeiros passos APIs A2A](/v3-33/docs/pt/a2a-first-steps).
- [Primeiros passos APIs MySafe](/v3-33/docs/pt/api-mysafe-first-steps).


