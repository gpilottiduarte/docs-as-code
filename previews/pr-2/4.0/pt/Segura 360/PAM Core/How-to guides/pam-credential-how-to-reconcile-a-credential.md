# Como realizar a reconciliação de uma credencial

O processo de reconciliação de credenciais é solicitado manualmente, sempre que a rotação de uma credencial não for realizada com sucesso na plataforma Segura.

***

## Requisitos
Para reconciliar credenciais, o usuário deve possuir os seguintes privilégios:
* Permissão PAM Operator no Segura.
* Reconciliação de credenciais ativa no Segura. Para instruções sobre como configurar uma credencial de reconciliação, acesse o documento [Como configurar uma credencial de reconciliação](/v4/docs/pt/pam-how-to-configure-a-reconciliation-credential).

## Reconcliar uma credencial

1. Para verificar quais credenciais precisam de reconciliação, na barra de navegação, passe o mouse sobre o **Menu de produtos** , então selecione **Executions > Todas as operações
**.
2. Na barra de filtragem, no menu suspenso **Operação**, selecione **Troca de senha**. 
3. Para filtrar por status de operação, selecione **Erro** no menu suspenso **Estado**. Isso exibirá uma lista de todas as operações de alteração de senha incompletas e com falha.
4. Na coluna **Ações** clique no botão de mesmo nome e em **Reiniciar execução**.
    5.1. Caso seja necessário agendar essa operação de reconciliar as credenciais, selecione a data e a hora no menu **Data de agendamento**.
6. Clique no botão **Continue**.

Observe que agora o seu pedido de reconciliação de credencial aparece na listagem também. Na coluna **Ação**, você pode clicar no ícone **Solicitar a execução imediata**, representado pelo ícone de certo, e confirmar a solicitação clicando no botão **Sim**, no modal de confirmação. Assim a solicitação será executada imediatamente, independentemente do agendamento ou da fila de execuções.

Uma janela pop-up com a mensagem de sucesso na operação será exibida, confirmando que a operação de reconciliação foi executada com sucesso.

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).