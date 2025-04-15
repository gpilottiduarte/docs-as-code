# Como realizar a troca de senha com autenticação Kerberos para Windows RM

Neste documento, você encontra um guia passo a passo sobre como realizar uma troca de senha com autenticação kerberos para Windows RM.

## Requisitos

* Ser um usuário administrativo com permissão para criar/editar templates.

Para realizar este tipo de troca é necessário seguir os três passos descritos abaixo.

### Passo 1: Criar o template

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Executions**.
2. No menu lateral, selecione **Configurações** >  **Modelo**.
3. Na tela do relatório clique em **Exibir ações**, representado pelos três pontos verticais, e selecione **+ Novo**.
4. Na janela que se abre, **Template de execução**, preencha os campos:
    1. **Nome***: escreva um nome que identifique o template.
    2. **Ativo***: no checkbox selecione **Sim**.
    3. **Executor***: no dropdown menu selecione **Ansible**.
    4. **Tipo de execução***: no dropdown menu selecione **Troca de senha**.
    5. **Playbook**: no dropdown menu selecione **Windows Kerberos change password**.
    6. **Inventory**: no dropdown menu selecione Windows-WinRM-Kerberos.
5. Clique em **Salvar**.

Uma mensagem de sucesso será exibida e o template criado estará listado no relatório.

### Passo 2: Modifique a conectividade do dispositivo

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Dispositivos**.
2. No menu lateral, selecione **Dispositivos**.
    1. Na lista selecione o dispositivo que será alterado ou crie um novo dispositivo.
        :::(info) (**Info**)
        Para saber como criar ou editar um dispositivo acesse o documento [Como configurar um dispositivo](/v3-33/docs/pt/pam-devices-management).
        :::
    2. Na janela que se abre, **Cadastro do dispositivo**, clique na aba **Conectividade**.
    3. No campo **Conectividade**, selecione **SSH** e no campo **Porta** digite o número da porta referente ao WinRM.
        :::(info) (**Info**)
        * O dispositivo deverá ter a conectividade SSH para a porta do WinRM,  devido ao conector que é utilizado.
        * Por padrão os valores de portas sugeridos pelo senhasegura são: HTTP - 5985 e HTTPS - 5986.
        :::
3. Clique em **Salvar**.

Uma mensagem de sucesso será exibida pelo senhasegura.

### Passo 3: Configurando a credencial

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Credenciais** > **Todas**.
    1. Na lista selecione a credencial que será editada ou crie uma nova credencial.
        :::(info) (**Info**)
        Para saber como criar ou editar uma credencial acesse o documento [Como configurar uma credencial no senhasegura](/v3-33/docs/pt/pam-how-to-set-up-a-credential-in-senhasegura).
        :::
    2. Na janela que se abre, **Cadastro da credencial**, clique na aba **Informações**.
    3. No campo **Domínio**, selecione o domínio que foi criado para esta credencial.
        :::(warning) (**Atenção**)
        O domínio que será utilizado para as credenciais usadas pela autenticação via Kerberos exige que o nome do domínio esteja em letras maiúsculas, por exemplo: WINRM-KERBEROS. Para saber como adicionar um novo domínio acesse o documento Configurações de credenciais domínio.
        :::
    4. No campo **Informação adicional**, preencha com o **hostname** do **KDC** e o **ADMIN_SERVER**, conforme exemplo: { "KDC": "hostname do Kerberos", "ADMIN_SERVER": "hostname do admin do Kerberos"}
3. Clique em **Salvar**.

Uma mensagem de sucesso será exibida pelo senhasegura.

:::(warning) (**Atenção**)
O hostname da credencial deve ser o FQDN do dispositivo.
:::

A ação de trocar de senha segue o fluxo de solicitação como qualquer outro tipo de troca efetuado pelo senhasegura. Para realizar os passos da troca de senha acesse o documento [Solicitar uma troca de senha](/v3-33/docs/pt/password-change-operations).

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target=`_blank`}.
