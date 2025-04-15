## Certificados X.509 físicos ou virtuais (A1 ou A3\)

CuidadoPara que o suporte ao uso do certificado seja habilitado, é necessário que nossa equipe de suporte seja acionada para que a CA reconhecida pela instância senhasegura, e a cadeia obrigatória seja configurada para login na interface Web.

Apesar de estarem contidos na mesma estrutura de menus das demais tecnologias provedoras de autenticação, o uso de certificados X.509 no senhasegura complementam uma etapa MFA. O certificado será vinculado na conta do usuário senhasegura, tornando obrigatório o uso deste certificado para realização de login.

O administrador terá a opção de tornar obrigatório o uso do certificado nos seguintes cenários:

* Obrigatoriedade no login da plataforma Web senhasegura
* Obrigatoriedade em sessões senhasegura RDP Proxy
* Obrigatoriedade em sessões senhasegura Terminal Proxy

## Habilitando as configurações de obrigatoriedade

InfoQuando habilitado para forçar o uso de certificado digital como MFA, todo usuário senhasegura será forçado a usá\-lo.

### Obrigar uso de certificado digital a todos usuários

Essa opção irá obrigar que os usuários realizem login utilizando um certificado X.509\.

No primeiro login, o certificado utilizado será vinculado ao usuário, e a partir deste ponto, todos os logins seguintes irão obrigar o uso deste certificado que foi vinculado.

Através do menu **Configurações ➔ Parâmetros do sistema ➔ Segurança** você terá acesso à opção *Forçar o uso de certificado digital para todos os usuários*.

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-OCX9DLJB.png)Configuração de segurança 

  
### Obrigar uso de certificado digital em sessões proxy

InfoAo ativar esta opção, o usuário deverá realizar o login na interface web utilizando um certificado X.509 válido antes de realizar o login em uma sessão proxy.

Através do menu **Configurações ➔ Parâmetros do sistema ➔ Parâmetros do sistema** você terá acesso à seção ***Segurança***.

Nessa tela você encontrará os campos, **Forçar autenticação com certificado**.

  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-TDVB63SH.png)Configuração do sistema 

  
## Auditando logins via certificado

### Autoridades certificadoras habilitadas

Para que uma CA possa ser considerada confiável para o senhasegura, é necessário quem um profissional senhasegura tenha manualmente configurado o servidor para aceitar a CA. Ainda assim, o administrador pode decidir se irá revogar o uso da CA.

Através do menu **Configurações ➔ Autenticação ➔ Certificado digital ➔ Autoridades** você tem acesso às autoridades certificadoras aprovadas como emissoras de certificado de login.

Você pode exibir seus detalhes ou inativar uma autoridade. Neste caso, todos certificados desta CA serão impedidos de realizar login na plataforma.

### Listando certificados utilizados

Através do menu **Configurações ➔ Autenticação ➔ Certificado digital ➔ Certificados** o administrador poderá visualizar detalhes do certificado e qual conta de usuário, senhasegura está atrelada. Através desta tela o administrador poderá inclusive revogar o uso de um certificado. Neste caso, o usuário deverá vincular um novo certificado para realizar o login.

É importante lembrar que se o administrador desejar bloquear o acesso de um usuário, ele deve inativar a conta de acesso. Revogar um certificado não irá revogar a conta de acesso.

### Log de uso dos certificados

Através do menu **Configurações ➔ Autenticação ➔ Certificado digital ➔ Certificados** você tem acesso a um relatório detalhado dos eventos que um usuário utilizou um certificado X.509\.

