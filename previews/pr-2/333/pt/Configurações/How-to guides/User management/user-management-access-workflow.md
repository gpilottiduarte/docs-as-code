O Workflow de acesso permite criar um processo onde os usuários precisam solicitar permissão para executar determinadas ações no senhasegura. Essas solicitações são enviadas para indivíduos selecionados, conhecidos como Aprovadores, que devem aprová\-las.

O Workflow de acesso de acesso pode ser usado em alguns lugares no senhasegura:

* Retirada de senha;
* Acesso por proxy;
* Permissões de certificado;
* Alteração de configurações;
* Outros.

O senhasegura somente registrará o acesso em todos os relatórios de auditoria conformes e encaminhará ao ***SIEM*** as mensagens das ações tomadas.

## Acesso com justificativa

Se o usuário solicitante precisar registrar o motivo da utilização das informações privilegiadas, será apresentada uma tela de registro. E somente após o envio da justificativa será possível utilizá\-la.

![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1666916135789.png)Formulário de Justificativa 

O usuário solicitante pode listar seus pedidos através do menu **PAM Core ➔ Controle de acesso ➔ Minhas solicitações**.

Em **PAM Core ➔ Controle de acesso ➔ Solicitações** a coluna **Acesso emergencial,** os valores **Sim** ou **Não**, informam se foi um acesso emergencial ou não. Dessa forma, após exportar o relatório, você conseguirá aplicar um filtro por este tipo de solicitação de acesso.

## Acesso por aprovação

Se o usuário solicitante precisar de aprovação para realizar a mesma tarefa, a tela de justificativa é apresentada com a adição de campos para o período. Este período é o intervalo de tempo que o solicitante precisa para utilizar a credencial.

Após o final deste tempo, a credencial estará disponível para a mudança automática da senha. E se a aprovação for para uma sessão proxy, o requerente será imediatamente desconectado.

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1666916419248.png)Formulário de Justificativa com período 

 Ao encaminhar o pedido de aprovação, o usuário será apresentado com a seguinte tela de confirmação.

O autorizador será notificado por e\-mail desta solicitação por e\-mail.

InfoSe o usuário for membro de um grupo de acesso com um modelo de aprovação de nível, o aprovador de 1º nível receberá o e\-mail primeiro, após sua aprovação os outros aprovadores receberão o e\-mail conforme a hierarquia e número de níveis definidos na configuração do grupo de acesso.

Se a caixa de entrada estiver configurada no senhasegura, os aprovadores podem responder ao e\-mail com as palavras APPROVE ou DISAPPROVE para afetar sua resposta. Ou ele pode clicar no link descrito no e\-mail.

Através do sistema, isso pode ser feito no menu **PAM Core ➔ Controle de acesso ➔ Minhas aprovações**. As ações de registro permitem que você aprove, desaprove e veja os detalhes do pedido.

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%2895%29.png)  


No momento da aprovação, o aprovador poderá alterar a data e o intervalo de tempo.

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1674756907197.png)Formulário de aprovação de pedido 

Todas as solicitações e os acessos justificados podem ser vistos no relatório **Controle de acesso ➔ Solicitações**.  


Sempre que um aprovador revoga uma sessão, caso exista mais de um aprovador, não são necessários que os outros revoguem. Para acessar as solicitações de revogação, acesse: **PAM Core ➔ Minhas aprovações.**

## Acesso de emergência

Há um caso especial no qual o requerente pode pular o processo de aprovação se houver a necessidade de uso emergencial imediato da credencial. Chamamos isso de acesso emergencial.

Quando o grupo de acesso permite que o solicitante realize uso deste recurso, o solicitante será apresentado com a tela de acesso de emergência logo após o envio do pedido de acesso.

  


![](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image-1666916513442.png)Acesso emergencial  

Assim que o requerente confirmar o acesso de emergência, o senhasegura enviará a todos os aprovadores as informações que o requerente teve acesso às informações com antecedência.

O pedido de acesso será marcado com o uso de emergência.



---

  


AuditPara visualizar **A****provações**e **R****eprovações**, acesse: **Relatórios ➔ Eventos ➔ Audit tracking**:

* **Aprovações de visualização de vídeos de sessão:** Histórico de aprovações concedidas pelo usuário aprovador.
* **Reprovações de visualização de vídeos de sessão:** Histórico de aprovações não concedidas pelo usuário aprovador.
