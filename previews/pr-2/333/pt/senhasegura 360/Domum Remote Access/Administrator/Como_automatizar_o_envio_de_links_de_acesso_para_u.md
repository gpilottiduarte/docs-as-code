# Como automatizar o envio de links de acesso para usuários internos

O **Domum Remote Access** oferece a opção de automatizar o envio de links de acesso para usuários internos logo após eles terem sido adicionados a um grupo. A funcionalidade vale tanto para casos de adição manual como para o provisionamento via SCIM ou AD. Este artigo traz os passos para essa tarefa.
:::(Warning) (Cuidado)
Se o usuário for  inativado ou removido do grupo, o acesso pelo link é bloqueado.
:::

* * *
## Como automatizar o envio de links de acesso para usuários internos 

Para o envio automático do link de acesso aos usuários internos, é necessário marcar parâmetros específicos nas configurações iniciais do **Domum Remote Access**. Siga os passos apresentados: 

1. Acesse a plataforma senhasegura.
2. No canto superior esquerdo, clique no **Grid Menu**, indicado pela caixa de nove quadrados, e selecione Domum Remote Access.
3. No menu lateral, selecione **Configurações > Parâmetros**.
4. Selecione **Domum**.
5. Em **Conceder acesso automaticamente após provisionamento de usuário interno***, escolha **Sim**.
6. Estabeleça a **Duração** do acesso e selecione **Minutos, Horas, Dias** ou **Meses**.
:::(Info) (Info)
Se você não quiser que um grupo específico siga as configurações globais de acesso automático, é possível definir configurações especiais durante a criação ou edição de um [grupo de usuários internos](/v3-33/docs/pt/domum-new-internal-users-group-form). 
:::
7. Siga configurando os [parâmetros iniciais](/v3-33/docs/pt/domum-how-to-set-the-parameters) de acordo com as suas preferências.
10. Clique em **Salvar**.

Uma janela pop-up exibirá uma mensagem de confirmação indicando a conclusão do processo. Você acabou de estabelecer os parâmetros necessários para o envio automático de link de acesso. Assim que que o provisionamento for concluído, o **Domum Remote Access** enviará o link para os usuários internos.

* * *
Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).
