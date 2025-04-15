Através do menu **Settings ➔ Parâmetros do sistema ➔ Segurança**, você terá acesso às configurações adicionais de segurança. Nessa tela você tem acesso a configurações que afetam a todos usuários do sistema.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%2888%29.png)

## Manutenção das contas do usuário

* *Minutos para expirar a sessão:* Tempo de inatividade na interface web para que a sessão do usuário expire automaticamente. Por padrão 30 minutos
* *Bloquear conta inativa:* Indicador para bloquear automaticamente as contas que não foram utilizadas após um intervalo de dias. Inativo por padrão
* *Dias até bloqueio:* Quantidade de dias para considerar para que uma conta inativa seja bloqueada
* *Obrigar alteração de senha no primeiro acesso:* Indicador se o usuário deve alterar sua senha temporária logo no primeiro acesso. Ativo por padrão
* *Expirar a senha:* Obriga a expiração da senha do usuário após um período. Inativo por padrão
* *Dias até a expiração de senha:* Quantidade de dias para que a senha expire automaticamente

CuidadoAtenção. As configurações, **Bloquear*****conta inativa***, **Obrigar*****alteração de senha no primeiro acesso*** e ***Expirar a senha*** só podem ser utilizadas quando o provedor de autenticação padrão do senhasegura estiver em uso.  
Caso o usuário esteja utilizando um provedor de autenticação externo que já possua esses controles, o provedor de autenticação deve prover as regras.

## Autenticação de multifator

* ***Forçar o uso de autenticação de multi\-fator para todos usuários:***Ao ativar essa configuração, todos usuários, inclusive o administrador, terão que imediatamente configurar e utilizar o MFA no senhasegura. Utilize com cuidado para não afetar o trabalho dos usuários  
CuidadoAo habilitar 'Forçar o uso de autenticação de multi\-fator para todos usuários', é importante tomar precauções para evitar bloquear os usuários do aplicativo. Os administradores devem estar atentos ao horário do servidor e garantir uma configuração adequada usando ferramentas externas de MFA para evitar problemas de login.
* ***Forçar o uso de certificado digital para todos os usuários:***Ao ativar essa configuração, todos usuários, inclusive o administrador, terão que vincular um certificado digital X.509 no ato de login
* ***Permitir “Confiar neste computador” até no máximo X horas:***Se ativo, e com horas de intervalo configurado, o token MFA não será solicitado a cada tentativa de login. Isso permite o uso de ferramentas que executem logins simultâneos em vários terminais SSH
* ***Aceitar tokens gerados com até X segundos de variação:*** Alguns dispositivos não estão configurados em servidores NTP, gerando um intervalo de segundos que pode afetar a autenticação utilizando TOPT. Nestes casos, configure o intervalo aceito nesta propriedade
* ***Habilitar o uso de uma solução externa de autenticação de multi\-fator:*** Permite que provedores externos SSO, hospedados em nuvem ou on\-premisse, utilizando protocolos homologados pelo senhasegura, sejam utilizados como autenticadores

## Nível de segurança da senha

* ***Caracteres no mínimo para a senha:***Quantidade mínima de caracteres para a senha de usuário
* ***Números no mínimo para a senha:***Quantidade mínima de caracteres numéricos na composição da senha
* ***Restringir reutilização de senha:***Não permite a reutilização por parte do usuário
* ***N últimas senhas que não podem ser utilizadas:***Quantidade de senhas que serão consideradas pelo senhasegura para identificar a repetição por parte do usuário
* ***Requer símbolos na senha:***Indica se caracteres especiais devem ser obrigatoriamente utilizadas na composição de senha

CuidadoAs configurações de nível de segurança da senha são válidas apenas quando o provedor de autenticação padrão estiver em uso.  
Caso o usuário esteja utilizando um provedor de autenticação externo que já possua esses controles, o provedor de autenticação deve prover as regras.

## Controle de acesso por IP

Permite o acesso ou a negação de acesso a IPs e segmentos de rede.

* Permitir tudo
* Negar tudo

CuidadoEssa lista atua como ***Allowlist*** ou ***Denylist***. Tome muito cuidado para não restringir o acesso do Administrador que esteja criando regras.

### Criando regras Allow list

Neste cenário, o senhasegura deve ser configurada para *negar todos acessos* e aceitar apenas os acessos configurados na lista.

1. Configure a regra geral para *Negar todos*
2. Na lista de IPs, configure os intervalos com a regra *Permitir todos*.

Com essa configuração, apenas os IPs da lista podem se autenticar no senhasegura.

### Criando regras Allow listCriando regras Deny list

Neste cenário, o senhasegura deve ser configurado para *aceitar todos acessos* e negar apenas os acessos configurados na lista.

1. Configure a regra geral para *Permitir todos*
2. Na lista de IPs, configure os intervalos com a regra *Negar todos*.

Com essa configuração, todos IPs que não estejam nos intervalos determinados na lista, podem se autenticar no senhasegura.

 

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1666914721242.png)Criando regras Deny list

 

  


### MFA adaptativo por localização

Este parâmetro permite que você adicione para qual range de IP será exigido ou não o MFA podendo forçar, ou ignorá\-lo com base no IP de origem do usuário. Esta regra se aplica nas seguintes ações:

* Login
* Sessão
* Saque

CuidadoCaso existam ranges de IP conflitantes, é considerado o primeiro range onde o usuário faz parte.

CuidadoEsta configuração sobrepõem Forçar autenticação multi\-fator para todos os usuários caso o IP de acesso do usuário esteja em algum dos ranges de IPS cadastrados, a regra que valerá será em MFA adaptativo por localização.

