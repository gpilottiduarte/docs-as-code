# Como configurar no Segura um dispositivo para utilizar via Database Proxy Oracle

Este documento fornece informações sobre o passo a passo para realizar a configuração de um dispositivo para ser usado via Database Proxy Oracle.

Serão necessários quatro passos para configurar o banco de dados Oracle para que este seja acessível via **Database proxy** no Segura, este documento é o **segundo passo**.

![cluster-passo2.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/cluster-passo2.png){height="" width=""}

:::(warning) (**Atenção**)
É de suma importância seguir corretamente a ordem dos documentos para a configuração do banco de dados Oracle para que o mesmo funcione corretamente como um Database Proxy.
:::

## Requisitos

* Oracle DB Server configurado com a versão mínima 19.0.0.0.0
* Servidor com ORAPKI instalado, para a criação das Wallets.
* Conectividade da workstation do usuário com o Segura nas portas 1521 e 2484.
* Client de Banco de dados instalado.
    * Dbeaver versão mínima: 23.1.0
    * SQLPlus versão mínima: 21.0.0.0.0
    * SQL Developer versão mínima: 23.1.0.097
* Não possuir filtros habilitados para o certificado.

---
## Configurar o dispositivo
Há duas maneiras de acessar a área de configuração de Dispositivos.

A primeira maneira é pelo menu de Ações rápidas, localizado na barra de navegação. Para configurar um dispositivo utilizando as ações rápidas, siga os passos abaixo:

1. Clique no ícone **Ações rápidas**, representado por uma folha de papel com o sinal de soma, e selecione **Dispositivo**.

A segunda maneira é acessando pelo Menu de produtos. Para isso, siga os passos abaixo:

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Dispositivos**.
2. No menu lateral, selecione **Dispositivo**.
3. No menu de ações clique em **Adicionar**.

Ambas ações abrirão uma nova tela com o formulário de cadastro de dispositivo. Preencha os dados a seguir para configurar ao novo dispositivo:

Na aba **Informações**, preencha:

1. **Nome do dispositivo (Hostname, IP, url ou nome do site, nome da aplicação...)***: nome que será usado para identificar o servidor.
2. **IP, Hostname ou URL de gerenciamento***: endereço do servidor Oracle.
3. **Tipo de dispositivo***: selecione Database.
4. **Fabricante***: selecione Oracle.
5. **Modelo***: selecione Oracle Database.
6. **Site***: adicione o site desejado.
7. **Tags**: adicione as tags desejadas.

Na aba **Conectividades**, preencha:

1. Na seção **Conectividade**, clique no botão **Adicionar**.
    1. Uma linha será adicionada a tabela de conectividades, nos campos disponíveis preencha:
        1. **Conectividade**: selecione Oracle
        2. **Porta**: preencha com o valor 2484.
        3. Clique em **Testar** para se certificar que a conexão está funcionando.
2. Vá até a aba **Revisão**.
3. Clique em **Salvar**.

Uma mensagem de confirmação será exibida pelo sistema, certificando que o dispositivo está cadastrado.

Finalizando o segundo passo da configuração do Oracle para ser utilizado via **Database Proxy**, acesse o documento [Como configurar no Segura uma credencial para utilizar via Database Proxy Oracle](/v4/docs/pt/pam-session-how-to-configure-a-credential-in-Segura-to-use-the-database-proxy-with-oracle-cluster) para realizar a terceira parte e continuar a configuração.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.