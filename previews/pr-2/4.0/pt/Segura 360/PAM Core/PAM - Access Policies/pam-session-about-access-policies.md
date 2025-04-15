# PAM - Políticas de acesso

O Segura possui um sistema de permissão que torna possível segregar as ações que um usuário pode realizar na plataforma. Com os Grupos de Acesso você limita os dados que o usuário pode usar ou ver nos módulos.

Os Grupos de Acesso adicionam outra camada de segurança para garantir o princípio de privilégio mínimo, atuando como um filtro para entidades de suas propriedades. Isso permite que o administrador forneça diferentes níveis de segurança para o mesmo usuário dentro de suas atribuições em cada produto.

## Entidades segregadas e suas propriedades
Se o usuário faz parte de diferentes grupos que fornecem acesso às informações privilegiadas, o Segura aplicará a regra do grupo mais restritivo e o usuário terá limitações para executar ações. Essa regra é válida para o módulo do PAM Core, em outros módulos essa regra pode ser diferente.

Na prática, isso significa que se um usuário faz parte do grupo com acesso ilimitado, ele consegue visualizar todas as credenciais e dispositivos em algumas telas do sistema. Mas, se esse mesmo usuário também está dentro de um segundo grupo com regras mais rígidas, ao tentar cadastrar credenciais e dispositivos, algumas das opções não aparecem para seleção por conta da restrição existente nesse outro grupo do qual o usuário faz parte.

:::(error) (**Importante**)
Caso um mesmo usuário esteja inserido em dois ou mais grupos de acesso diferentes e que usem janelas de tempo personalizadas, a plataforma irá restringir o acesso desse usuário de acordo com a janela mais restritiva. Por padrão, no módulo PAM, o dispositivo vai seguir a regra de grupo de acesso mais restritiva sempre. Para mudar esse comportamento, acesse a documentação [Como cadastrar uma política de acesso](/v4/docs/pt/pam-session-how-to-add-an-access-policies).
:::

:::(warning) (**Cuidado**)
O Segura recomenda que usuários que fazem parte de Grupos de Acesso cujos critérios de Site, Tipo de dispositivo e Tipo de credencial estejam com a opção Todos selecionada, não devem fazer parte de outros grupos. Esse grupo com acesso total deve ser reservado somente para usuários administradores.
:::
