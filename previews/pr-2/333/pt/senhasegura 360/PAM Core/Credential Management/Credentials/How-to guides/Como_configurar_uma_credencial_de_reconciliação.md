# Como configurar uma credencial de reconciliação

Este tutorial apresenta um passo-a-passo para a configuração da reconciliação de credencial e detalha o processo de configuração da credencial.

***

## Requisitos
Para utilizar a reconciliação de credenciais, o usuário deve possuir os seguintes privilégios:
* Permissão PAM Operator no senhasegura.
* Reconciliação de credenciais ativa no senhasegura.

***

## Como configurar uma credencial de reconciliação
Siga os passos para configurar a reconciliação de credenciais no senhasegura:

1. No canto superior esquerdo, clique no **Grid Menu**, indicado pela caixa de nove quadrados e selecione **PAM Core**.
2. Selecione **Credenciais > Todas**.
3. Na credencial desejada, em **Ações**, clique no ícone identificado pelos três pontos verticais e selecione **Editar**.
4. Na aba **Configurações de execução**, localize **Configuração da credencial de reconciliação** e selecione o campo **Ativo**.
5. No campo **Execução automática**, selecione **Ativa** se você deseja que esse processo seja feito de maneira automática ou **Inativa** para que esse processo seja feito de forma manual.

:::(Info) (info)
Com o parâmetro de **Execução automática** para reconciliação automatizada de senhas de uma credencial ativado, caso ocorra uma tentativa mal sucedida de troca de senha, será agendada a execução da reconciliação de senhas da credencial, de acordo com o plugin e template escolhidos.
:::

:::(Warning) (Cuidado)
Para utilizar a funcionalidade de reconciliação automatizada de senhas de uma credencial, necessariamente deverá existir uma credencial de reconciliação cadastrada.
:::

6. Escolha a **Credencial de reconciliação**.
7. Escolha o **Plugin** e o **Template de reconciliação**.
8. Clique em **Salvar**.

:::(Info) (Info)
O template determina quais comandos serão executados no momento da reconciliação. É possível criar novos templates de acordo com as necessidades do usuário.
:::

***

### Observação importante

Para obter relatórios sobre suas senhas, ative a automação com **CORE - Password reconciliation**. Acesse-a no menu **Grid Menu > Configurações > Processos de execução**. Essa automação verifica apenas se a senha é válida e se o acesso foi bem-sucedido. A varredura acontece a cada quinze minutos, sempre procurando senhas que ainda precisam ser verificadas. Depois que a credencial for verificada, ela permanecerá sem verificação nas próximas 24 horas.

:::(Warning) (Cuidado) 
É importante observar que a automação testa **apenas** o acesso por meio dos protocolos **RDP** e **SSH**. 
:::

**Exemplo**: a automação acessa a credencial `user1` e testa seu acesso no `server1`. Se for bem-sucedida, a automação gera um relatório informando que o acesso funcionou. Se não for bem-sucedida, gera um relatório indicando que a tentativa de acesso falhou. Observe que essa senha não será mais testada, mesmo que seja alterada, em um período de 24 horas. **O processo pode ser resumido em um teste por dia, por credencial, com um intervalo de verificação de 15 minutos.**

Os relatórios de automação serão salvos em **Grid Menu > Executions > Reconciliação de senhas**.

***

## Próximos passos
1. [Como utilizar a funcionalidade “bulk action” para credenciais](/v3-33/docs/pt/pam-how-to-use-the-bulk-action-feature-for-credentials).
2. [Referência para credenciais](/v3-33/docs/pt/pam-reference-for-credentials).

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
