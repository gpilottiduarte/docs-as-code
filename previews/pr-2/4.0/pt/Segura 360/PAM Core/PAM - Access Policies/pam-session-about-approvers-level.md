# Sobre Níveis dos aprovadores

Ao selecionar um aprovador, o campo **nível** da lista apresenta um menu com as opções de **Nível 1**, **Nível 2** e **Nível 3**. Essa configuração determina a sequência de chamadas para aprovação da operação, permitindo a aplicação de uma hierarquia.

Por exemplo, podemos ter um grupo de acesso com três níveis de autorização. Os aprovadores configurados como **Nível 1** serão os primeiros a receber o pedido de acesso.

Os aprovadores de **Nível 2** e **3** só serão notificados após os aprovadores de primeiro nível concederem o acesso. Se não o fizerem, então o acesso será negado, sem que os outros níveis sejam notificados.

Da mesma forma, se o aprovador de **Nível 1** conceder o acesso, mas o aprovador de **Nível 2** rejeitar o pedido de acesso, o aprovador de **Nível 3** não será notificado.

É importante lembrar que se você registrar mais de um aprovador para o mesmo nível, o primeiro aprovador daquele nível que conceder o acesso já resultará em uma notificação para o nível seguinte, tornando assim o processo mais rápido.

:::(warning) (**Atenção**)  
Para que um usuário aprovador tenha acesso ao fluxo de aprovação, é necessário que o mesmo tenha o perfil mínimo de **PAM Operator**.  
:::