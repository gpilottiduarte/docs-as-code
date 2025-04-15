# Como configurar uma troca de senha SAP

Neste tutorial, você realizará a troca de senhas para o SAP.

Com o uso do plugin Segura, é possível automatizar e agilizar a geração e troca das chaves eficientemente.

:::(Info) (Info)
É importante destacar que a troca de senhas só pode ser realizada uma vez por dia, assegurando um controle adequado no servidor SAP.
:::
## Requisitos

* Ter a permissão de PAM user no Segura.
* Ter uma credencial registrada no servidor SAP.
* Ter a permissão `SAP_ALL` na credencial que será feita a troca no servidor SAP
* Ter o endereço de IP do servidor SAP.

## Como configurar um template

Para iniciar, é necessário configurar um template de execução no Segura.

1. No canto superior esquerdo, clique em **Grid Menu**, indicado pela caixa de nove quadrados, e selecione **Executions.**
2. No menu lateral selecione **Configurações ➔ Modelo.**
3. Clique no ícone **Exibir Ações** ⁝, identificado pelo três pontos verticais, e selecione a opção **+ Novo.**

### Na aba Template de execução
Preencha os dados a seguir:
1. Em **Nome**, adicione o nome de identificação do template.
2. Em **Executor**, selecione a opção **Ansible**.
3. Em **Tipo de execução**, selecione a opção **Troca de senha**.
4. Em **Playbook**, selecione a opção **SAP change password.**
5. Clique em **Salvar.**

## Como configurar uma Credencial

[Crie uma credencial](/v4/docs/pt/pam-how-to-set-up-a-credential-in-Segura) e adicione os seguintes dados:

1. No canto superior esquerdo, clique em **Grid Menu**, indicado pela caixa de nove quadrados, e selecione **PAM Core.**
2. No menu lateral, selecione **Credenciais➔ Todas**.
3. Clique no ícone **Exibir Ações** ⁝, identificado pelo três pontos verticais, e selecione a opção **+ Novo.**

### Rotacionamento SAP
### Na aba Informações
1. Em **Dispositivos**, adicione o endereço de IP do servidor SAP (EX: `10.66.32.40`).
2. Em **Informações adicionais**, adicione `{"sysnr":"00","client":"001"}`.

### Na aba **Configurações de execução**:
1. Em **Configuração da troca de senha da credencial**:
    1.1 Habilite a opção **Ativar troca automática.**
    1.2 No menu suspenso **Plugin de troca** selecione **Ansible.**
    1.3 No menu suspenso o **Template de troca** selecione o template criado.
    1.4 Na sessão **Configuração de autenticação**, habilite a opção **Utilizar a própria credencial para conectar.**
2. Clique em **Salvar**.

## Próximos passos

1. [Solicitar uma alteração de senha](/v4/docs/pt/password-change-operations).

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io).