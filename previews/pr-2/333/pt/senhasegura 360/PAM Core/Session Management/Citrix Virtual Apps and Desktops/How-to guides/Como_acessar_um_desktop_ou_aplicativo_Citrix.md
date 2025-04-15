# Como acessar um desktop ou aplicativo Citrix

Neste documento, você encontra um guia passo a passo sobre como realizar o acesso a um desktop ou aplicativo do Citrix.

:::(warning) (**Atenção**)
Para que seja possível realizar o acesso os é necessário ter realizado os passos presentes nas docs anteriores sobre o **Citrix Bridge Server**.
:::

## Requisitos

1. Criar uma pasta `C:\senhasegura_share` na estação de trabalho do usuário para facilitar o compartilhamento de arquivos.

---
## Acessar o desktop ou aplicativo

1. Na estação de trabalho do usuário, inicie o aplicativo **Conexão de Área de Trabalho Remota**.
2. Na aba **Geral**, na seção **Configurações de logon** preencha os seguintes campos:
    1. **Computador**: endereço IP ou URL do servidor senhasegura.
    2. **Nome do usuário**: preencha a string de conexão no formato   `senhasegura_user[citrix_bridge_server_user@citrix_bridge_server_ip]`
3. Na aba **Recursos Locais**, na seção **Dispositivos e recursos locais**, desmarque a opção **Impressoras**.
    1. Clique em **Mais**. 
    2. Clique no ícone de **adição** da opção **Unidades** para que a mesma seja expandida.
    3. Selecione a unidade `C:`.
    4. Clique em **OK**.
4. Clique em **Conectar**.
5. Após a conexão na tela inicial, no campo **Select an access option**, selecione o aplicativo configurado para ser executado e clique em **Access**.


Após esses passos a sessão remota será iniciada com a execução do aplicativo configurada.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.