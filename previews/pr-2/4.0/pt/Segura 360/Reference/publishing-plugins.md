# Plugins de publicação

Atualmente, o Segura utiliza os plugins abaixo para publicar certificados. Esse artigo descreve somente os campos específicos de configuração dos plugins de cada fornecedor. Para mais informações, consulte o artigo [**Como publicar um certificado**](/v4/docs/pt/certificates-flow-how-to-publish-a-certificate).

## Windows

| Item | Descrição |
| --- | --- |
| **Store location** | Localização do certificado salvo. Exibe um menu suspenso com as opções: **Máquina local** (todos os usuários que acessam a máquina terão acesso ao certificado) ou **Usuário atual** (somente o usuário da credencial). 
| **Porta para acesso para WinRM** | A porta geralmente utilizada é a TCP 5985. É fundamental verificar firewalls e outras soluções de segurança para garantir que a porta não está bloqueada.
| **Nome da certstore** | Diretório onde será instalado o certificado durante a publicação. Exibe um menu suspenso com os diretórios Windows mais relevantes.
| **Senha do certificado** | Essa senha pode ser qualquer senha de certificado salva dentro do PAM. É utilizada para agilizar o processo de configuração, uma vez que seleciona uma credencial já existente no sistema.  
| **Entrada manual da senha** | Essa senha é utilizada para cenários onde o cliente não possui uma senha salva no PAM, mas deseja pré-configurar um certificado com senha para utilizar em vários dispositivos.
| **Definir senha** | Se o campo **Entrada manual da senha** não estiver habilitado por padrão, essa caixa de seleção habilita a digitação da senha.
| **Exibir senha** | Caixa de seleção que habilita a visualização da senha.
***
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).





