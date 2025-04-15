# Como automatizar o envio de links de acesso para usuários internos

O **Domum Remote Access** oferece a opção de automatizar o envio de links de acesso para usuários internos logo após eles terem sido adicionados a um grupo. A funcionalidade vale tanto para casos de adição manual como para o provisionamento via SCIM ou AD. Este artigo traz os passos para essa tarefa.
:::(Warning) (Atenção)
Se o usuário for  inativado ou removido do grupo, o acesso pelo link é bloqueado.
:::

## Automatizar o envio de links de acesso para usuários internos 

Para o envio automático do link de acesso aos usuários internos, é necessário marcar parâmetros específicos nas configurações iniciais do **Domum Remote Access**. Siga os passos apresentados: 

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **Domum Remote Access**.
2. No menu lateral, selecione **Gerenciamento> Parâmetros**.
3. Em **Conceder acesso automaticamente após provisionamento de usuário interno\***, escolha **Sim**.
4. Estabeleça a **Duração** do acesso e selecione **Minutos, Horas, Dias** ou **Meses**.
:::(Info) (Info)
Se você não quiser que um grupo específico siga as configurações globais de acesso automático, é possível definir configurações especiais durante a criação ou edição de um [grupo de usuários internos](/v4/docs/pt/domum-new-internal-users-group-form). 
:::
5. Siga configurando os [parâmetros iniciais](/v4/docs/pt/domum-how-to-set-the-parameters) de acordo com as suas preferências.
6. Clique em **Salvar**.

Um pop-up exibirá uma mensagem de confirmação indicando a conclusão do processo. Você acabou de estabelecer os parâmetros necessários para o envio automático de link de acesso. Assim que que o provisionamento for concluído, o **Domum Remote Access** enviará o link para os usuários internos.

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).