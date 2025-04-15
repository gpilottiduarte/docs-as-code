# Informações sobre as configurações

Neste documento você encontra informações gerais sobre o senhasegura, tais como configurações, auditoria, grupos de acesso entre outros.

## Workflow de acesso

O Workflow de acesso permite criar um processo onde os usuários precisam solicitar permissão para executar determinadas ações no senhasegura. Essas solicitações são enviadas para indivíduos selecionados, conhecidos como **Aprovadores**, que devem aprová-las.

O Workflow de acesso pode ser usado em diversos módulos e ações do senhasegura, tais como:

* Retirada de senha.  
* Acesso por proxy.  
* Emissões de certificado.  
* Alteração de configurações.

Note que o senhasegura somente irá registrar o acesso em todos os relatórios de auditoria e encaminhará ao SIEM as mensagens das ações tomadas.

### Acesso com justificativa

Se o usuário solicitante precisar registrar o motivo da utilização das informações privilegiadas, será apresentada uma tela de registro. E somente após o envio da justificativa será possível utilizá-la.  
O usuário solicitante pode listar seus pedidos através do menu **PAM Core \> Controle de acesso \> Minhas solicitações**.

Em **PAM Core \> Controle de acesso \> Solicitações,** na coluna **Acesso emergencial**, os valores **Sim** ou **Não** informam se foi um acesso emergencial. Dessa forma é possível aplicar um filtro por este tipo de solicitação de acesso.

### Acesso por aprovação

Se o usuário solicitante precisar de aprovação para realizar a mesma tarefa, a tela de justificativa será apresentada com a adição de campos para o período. Este período é o intervalo de tempo que o solicitante poderá utilizar a credencial.

Ao término deste período, a credencial ficará disponível para a alteração automática da senha. Se a aprovação for para uma sessão proxy, o requerente será desconectado imediatamente. O autorizador receberá uma notificação por e-mail sobre esta solicitação. Se as políticas de senha e de acesso da credencial solicitada estiverem configuradas para expirar a senha logo após a visualização, esta será modificada. Nos demais casos, a senha permanecerá inalterada até a próxima rotação programada, conforme a configuração da credencial.

:::(info) (Info)  
Se o usuário for membro de um grupo de acesso com um modelo de aprovação de nível, o aprovador de 1º nível receberá o e-mail primeiro, após sua aprovação os outros aprovadores receberão o e-mail conforme a hierarquia e número de níveis definidos na configuração do grupo de acesso.  
:::

Se a caixa de entrada estiver configurada no senhasegura, os aprovadores podem responder ao e-mail com as palavras **APPROVE** ou **REJECT,** de forma que a sua resposta seja gravada e a aprovação ou desaprovação seja efetuada.

No senhasegura, isso pode ser feito através de **PAM Core \> Controle de acesso \> Minhas aprovações**. As ações de registro permitem que você aprove, desaprove e veja os detalhes do pedido.

:::(info) (Info)  
No momento da aprovação, o aprovador poderá alterar a data e o intervalo de tempo.  
:::  

Todas as solicitações e os acessos justificados podem ser vistos no relatório **Controle de acesso \> Solicitações**.

Sempre que um aprovador revogar uma solicitação, e atinja a quantidade mínima de revogações, caso exista mais aprovadores, não serão necessários que os outros também revoguem a sessão. Para acessar as solicitações de revogação acesse **PAM Core \> Minhas aprovações**.

:::(info) (Info)  
Existe um caso especial em que o requerente pode contornar o processo de aprovação quando há necessidade de uso emergencial e imediato da credencial. Se o grupo de acesso permitir que o solicitante utilize este recurso, uma tela de acesso de emergência será exibida logo após o envio do pedido. Ao confirmar o acesso emergencial, o senhasegura notificará todos os aprovadores sobre as informações acessadas pelo requerente nesta modalidade. O pedido de acesso será então marcado como uso emergencial.  
:::  

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).  