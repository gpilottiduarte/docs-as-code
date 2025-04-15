# Como realizar a reconciliação de uma credencial

O processo de reconciliação de credenciais é solicitado manualmente, sempre que a rotação de uma credencial não for realizada com sucesso na plataforma senhasegura.

***

## Requisitos
Para reconciliar credenciais, o usuário deve possuir os seguintes privilégios:
* Permissão PAM Operator no senhasegura.
* Reconciliação de credenciais ativa no senhasegura. Para instruções sobre como configurar uma credencial de reconciliação, acesse o documento [Como configurar uma credencial de reconciliação](/v3-33/docs/pt/pam-how-to-configure-a-reconciliation-credential).

## Reconcliar uma credencial

1. Para verificar quais credenciais precisam de reconciliação, acesse **Grid Menu**, representado pelos nove quadrados no canto superior esquerdo da plataforma, então selecione **Executions > Listar operações**.
2. Na barra de filtragem, no menu suspenso **Operação**, selecione **Alteração de senha**. 
3. Para filtrar por status de operação, selecione **Erro** no menu suspenso **Situação**. Isso exibirá uma lista de todas as operações de alteração de senha incompletas e com falha.
4. Na coluna **Ação** clique no ícone dos três pontos verticiais e selecione a opção **Reconciliar credencial**.
5. Na janela pop-up que se abre, selecione a data do agendamento. Para que seja feita imediatamente, não modifique nenhuma das opções. 
    5.1. Caso seja necessário agendar essa operação de reconciliar as credenciais, selecione a data e a hora no menu **Data de agendamento**.
6. Clique no botão **Salvar**.

Observe que agora o seu pedido de reconciliação de credencial aparece na listagem também. Na coluna **Ação**, você pode clicar no ícone **Solicitar a execução imediata**, representado pelo ícone de certo, e confirmar a solicitação clicando no botão **Sim**, no modal de confirmação. Assim a solicitação será executada imediatamente, independentemente do agendamento ou da fila de execuções.

Uma janela pop-up com a mensagem de sucesso na operação será exibida, confirmando que a operação de reconciliação foi executada com sucesso.

***

## Próximos passos
1. [Como utilizar a funcionalidade “bulk action” para credenciais](/v3-33/docs/pt/pam-how-to-use-the-bulk-action-feature-for-credentials).
2. [Referência para credenciais](/v3-33/docs/pt/pam-reference-for-credentials).

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).