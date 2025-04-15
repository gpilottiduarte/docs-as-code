# Como gerar a Oracle wallet no Segura

Este documento fornece informações sobre o passo a passo para geração de uma *wallet* de usuário para ser usada via Database Proxy Oracle.

:::(warning) (**Atenção**)
São necessários alguns passos para configurar o banco de dados Oracle para que este seja acessível via **Database proxy** no Segura, estes passos devem ser executados pelo usuário administrador.
:::

## Requisitos

* Usuário administrador ter executado os passos necessários para configuração do Database Oracle.

---
## Gerar Oracle Wallet  
O processo completo de autenticação para o DB Proxy com o Oracle é realizado via SSL. Portanto, é necessário que o usuário do Segura também se autentique via certificado, utilizando a sua IDE, para que a conexão seja estabelecida.  
Sendo assim, é necessário que o usuário do Segura também possua uma wallet, a qual deverá estar localizada em sua workstation.

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu do usuário**.  
2. Selecione **Meu certificado**.  
3. Na tela do certificado clique em **Oracle Wallet**, localizado na parte inferior da tela. 
   1. O Segura irá realizar o processo de geração da wallet.  
4. Atualize a tela e o botão **Oracle Wallet** irá aparecer na seção **Downloads**.  
   1. Clique em **Oracle wallet**.  
   2. Um download com o arquivo `.zip` será iniciado.  
   3. Ao finalizar o download, extraia o arquivo no caminho configurado em sua workstation.

O arquivo que foi baixado servirá para configurar a IDE de sua escolha, acesse o documento[ Como configurar as IDEs para o usuário final se conectar ao Oracle DB](/v4/docs/pt/pam-session-how-to-configure-ides-for-the-end-user-to-connect-to-oracle-db).

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.Segura.io/){target=`_blank`}.