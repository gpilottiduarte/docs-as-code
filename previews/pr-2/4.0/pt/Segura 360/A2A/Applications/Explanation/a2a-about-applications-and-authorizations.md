# Sobre aplicações e autorizações no A2A

Este documento fornece uma visão geral sobre as aplicações e autorizações utilizadas no módulo **A2A**, explicando seus papéis no consumo seguro das APIs disponíveis no Segura.

## Aplicações

As aplicações representam as identidades que realizam chamadas às APIs **A2A**. Cada aplicação possui informações detalhadas que permitem o gerenciamento centralizado e seguro dessas interações, como o método de autenticação, chaves de acesso e escopos autorizados.

**Importância das aplicações**

1. **Identificação única:** cada aplicação possui um código identificador exclusivo, garantindo a rastreabilidade de suas interações.  
2. **Autenticação personalizada:** o método de autenticação é configurado para atender aos requisitos da aplicação, como OAuth ou AWS.  
3. **Gestão centralizada:** as aplicações são configuradas e gerenciadas em um único local, permitindo maior controle e visibilidade.

## Autorizações

As autorizações definem os recursos e as permissões concedidos a uma aplicação para consumir APIs. É a autorização que permite que uma aplicação interaja de forma segura e controlada com os serviços oferecidos pelo Segura.

**Elementos de uma autorização**

1. **Data de expiração:** permite configurar a validade da autorização, limitando seu uso no tempo.  
2. **Sistema e Ambiente**: permite associar um sistema e um ambiente específicos à autorização, facilitando a organização e o rastreamento das ações realizadas.  
3. **Recursos autorizados**: especifica os dados do Segura que a aplicação pode acessar.  
4. **Criptografia:** oferece a opção de ativar criptografia para proteger informações sensíveis durante o uso.  
5. **Permissões de acesso:** especifica os níveis de acesso, como apenas leitura ou leitura e escrita, para os recursos do PAM como credenciais e dispositivos.  
6. **Restrições de segurança:** define endereços IP autorizados, *HTTP referrers* permitidos e validações adicionais, como *fingerprint* de certificados.

## Relação entre aplicações e autorizações

Enquanto as aplicações identificam quem está consumindo as APIs, as autorizações determinam o que e como esses consumidores podem acessar. Essa separação permite uma configuração granular e segura, essencial em ambientes que lidam com dados críticos.

## Caso de uso

**Integração de um sistema administrativo bancário ao Segura**

**Ator principal:** Carlos (administrador de TI de um banco)

**Resumo:** este caso de uso descreve como Carlos utiliza o módulo **A2A** para integrar um sistema administrativo ao Segura. A integração permite sincronizar credenciais automaticamente e gerenciar acessos a recursos críticos de maneira centralizada e auditável, atendendo às exigências de compliance do setor bancário.

**Observação:** este caso de uso é relevante para organizações financeiras que desejam conectar seu sistema administrativo ao Segura para melhorar a governança e a segurança no gerenciamento de credenciais e permissões. Certifique-se de que o sistema seja compatível com métodos de autenticação suportados pelo Segura, como OAuth 2.0.

**Fluxo básico:**

1. **Criação da aplicação**

   1. Carlos cria uma aplicação no módulo **A2A** com o nome "Adm Integration".  
   2. Ele configura o método de autenticação como **OAuth 2.0**, garantindo que as comunicações sejam seguras e padronizadas.

2. **Definição da autorização**

   1. Carlos vincula a aplicação a uma autorização específica.  
   2. Ele define o acesso apenas ao **PAM Core** e  configura permissões de acesso como **Leitura e escrita**.  
   3. Para aumentar a segurança, Carlos restringe o uso da autorização ao endereço IP do servidor.

3. **Sincronização de credenciais**

   1. O sistema administrativo do banco se autentica no Segura usando a aplicação configurada.  
   2. Credenciais de usuários são sincronizadas automaticamente entre o sistema administrativo e o Segura.

4. **Auditoria e rastreamento**

   1. Todas as ações realizadas pelo sistema administrativo no Segura são registradas para fins de auditoria.  
   2. Carlos monitora o uso das credenciais para garantir conformidade com regulamentações bancárias e identificar possíveis incidentes de segurança.

**Pós-condição:**

A integração é concluída com sucesso, permitindo que o sistema sincronize credenciais de forma segura e auditável, otimizando o gerenciamento de identidade e minimizando riscos.



## Conclusão

A configuração de autorizações e aplicações no **A2A** é fundamental para garantir uma integração segura e eficiente com sistemas como os de gerenciamento de identidade e acesso. Neste caso de uso, destacamos como a criação de aplicações vinculadas a autorizações específicas permite definir permissões granulares, restringir acessos com base em IPs e garantir a rastreabilidade de todas as atividades.

Ao aproveitar essas funcionalidades, administradores de TI, como Carlos, podem implementar integrações robustas, assegurando que apenas acessos devidamente autorizados sejam realizados. Essa abordagem não apenas reforça a segurança organizacional, mas também promove conformidade e eficiência no gerenciamento de credenciais em ambientes de TI complexos.
