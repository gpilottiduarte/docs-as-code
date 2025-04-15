# Como configurar uma credencial de automação da Oracle wallet

Este documento fornece informações sobre o passo a passo para realizar a criação de uma *wallet* de usuário para ser usada via Database Proxy Oracle.

Serão necessários seis passos para configurar o banco de dados Oracle para que este seja acessível via **Database proxy** no Segura, este documento é o **sexto e último passo**.

![cluster-passo4.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/cluster-passo4.png){height="" width=""}

:::(warning) (**Atenção**)
É de suma importância seguir corretamente a ordem dos documentos para a configuração do banco de dados Oracle para que o mesmo funcione corretamente como um Database Proxy.
:::

## Requisitos

* Ter um dispositivo Oracle cadastrado no Segura.  
* Ter uma credencial com permissão de criação de *wallet*.  
* Ser um usuário administrador.

---
## Configurar a credencial de automação

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Configurações**.  
2. No menu lateral, selecione **Parâmetros de sistema > Global**.  
3. Nas abas disponíveis, selecione **Aplicação**.  
4. Na seção **Configurações gerais da aplicação**:  
   1. No campo **Credencial de automação da Oracle Wallet**, selecione a credencial que tem a permissão necessária para criação de wallet.  
5. Clique em **Salvar**.

Finalizando o sexto passo da configuração do Oracle para ser utilizado como um Database Proxy, a configuração está pronta e o usuário final poderá [gerar a wallet](/v4/docs/pt/pam-sessions-how-to-generate-oracle-wallet) e [configurar as IDEs](/v4/docs/pt/pam-session-how-to-configure-ides-for-the-end-user-to-connect-to-oracle-db) para acessar as sessões.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.Segura.io/){target=`_blank`}.