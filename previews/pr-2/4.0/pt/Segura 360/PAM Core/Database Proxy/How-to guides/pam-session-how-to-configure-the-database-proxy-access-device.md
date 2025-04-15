# Como configurar o Database Proxy Segura

Neste documento, você encontra um passo a passo para configurar o Database Proxy para que seu banco de dados seja acessado através do Segura.

:::(info) (**Info**)
Para saber quais os bancos de dados e clients homologados pelo Segura, acesse o documento [Database Proxy](/v4/docs/pt/pam-session-about-database-proxy).
:::

---
## Requisitos

* Ter permissão de PAM admin no Segura.

---
Para estabelecer a conexão terá que ser utilizado estes valores nos campos correspondentes:
| **Tipo de Dispositivo** | **Fabricante** | **Modelo**| **Conectividade** | **Porta** |
|---|---|---|---|---|
| MS SQL Server| Database| Microsoft| SQL Server 2022 e 2019| 1433|
| MS SQL Server| Database| Microsoft| SQL Server 2017 e anteriores| 1435|
| PostgreSQL| Database| PostgreSQL| PostgreSQL 9.x.| 5432|
| Oracle| Database| Oracle| Oracle Database 10g | 2484 |

---
## Caminho para acesso
Para acessar a área de configuração de **Dispositivos**, siga um dos passos a seguir:

1. **Ações Rápidas**: clique no ícone, representado por uma folha de papel com o sinal de soma, selecione **Dispositivo**. Essa ação irá abrir uma janela pop-up com o formulário **Cadastro do dispositivo**.

ou

1. **Grid Menu**: no canto superior esquerdo, clique no ícone representado por uma caixa de nove quadrados, selecione **Dispositivos**.

2. No menu lateral, selecione **Dispositivos**.
3. Na tela principal, clique no ícone **Exibir Ações**, indicado pelo três pontos verticais, e selecione **+ Novo**.
4. Irá abrir uma janela pop-up com o formulário **Cadastro do dispositivo**.
---

## Cadastrar o dispositivo

1. Cadastre um dispositivo com os valores escolhidos da tabela apresentada no início do documento:
    1.1. Na aba **informações**, preencha os campos obrigatórios identificados com o asterisco:
        1.1.1. **IP**, **hostname** ou **URL**: preencha o endereço ao qual o dispositivo está registrado e acessível.
        1.1.2. **Nome do dispositivo**: preencha um nome para uso interno.
        1.1.3. **Tipo de dispositivo**: selecione Database.
        1.1.4. **Fabricante**: selecione o fabricante do banco de dados.
        1.1.5. **Modelo**: escolha o modelo do banco de dados.
        1.1.6. **Site**: selecione a divisão à qual pertence.
        1.1.7. **Tags**: preencha com as tags desejadas.
    1.2. Na aba **Conectividade**, preencha:
        1.2.1. **Conectividade**: escolha a conectividade a ser utilizada.
        1.2.2. **Porta**: o número da padrão é preenchido automaticamente, caso utilize um número diferente da porta sugerida, faça a alteração.
        1.2.3. Clique em **Adicionar**.
    1.2.4. Clique em **Testar** para confirmar a conectividade do banco de dados.
2. Clique em **Salvar**.

O sistema exibe uma mensagem de confirmação de cadastro. Uma vez que a configuração esteja finalizada, é importante cadastrar uma credencial para o dispositivo criado, acesse a documentação de [Credenciais](/v4/docs/pt/pam-credentials) para realizar o cadastro.

:::(warning) (**Cuidado**)
Para dispositivos **Oracle** o cadastro de credencial ocorre de maneira diferente, para saber como realizar esse cadastro acesse a documentação [Como configurar no Segura uma credencial para utilizar via Database Proxy Oracle](/v4/docs/pt/pam-session-how-to-configure-a-credential-in-Segura-to-use-the-database-proxy-with-oracle).
:::

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).
