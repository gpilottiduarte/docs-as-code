A rotação de credenciais é usada automaticamente pelos administradores para acessar sistemas críticos em toda a organização, devido a esse tipo de situação, a auditoria e o monitoramento de contas privilegiadas são muito importantes.

Por meio disso, senhasegura habilitou relatórios que podem ser usados para entender como as credenciais estão sendo usadas, os grupos que podem manipular a credencial e muito mais. Acessando o menu **Reports ➔ Credentials**, você verá os seguintes relatórios:

![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28143%29.png)

## Listagem geral

Esse cenário  resume todas as trilhas de credenciais, senhasegura registradas no sistema. É um relatório de consulta fácil e rápido para visualizar os registros da trilha.

O *Relatório de listagem geral das credenciais* imprimirá as seguintes informações:

* ***Username:***da credencial detalhada.
* ***Tipo de credencial:***daquele detalhado. Os tipos podem ser usuário local, administrador local, usuário do domínio e outros.
* ***Situação:*** indica se o nome de usuário da credencial disponível para uso.
* ***Data criação:*** é o dia e a hora em que a credencial foi registrada no sistema.
* ***Data expiração:*** é o dia e a hora em que a credencial foi desativada no sistema.
* ***Última troca:*** é o dia e a hora em que a credencial foi modificada.
* ***Última consulta:*** é o dia e a hora em que a credencial foi exibida.
* ***Último utilização:*** é o dia e a hora em que a credencial foi usada para acessar, quando apresentado em branco (nunca utilizada).

## Utilização da senha (última)

Este relatório mostra todas as credenciais registradas no sistema e a última vez que a credencial foi usada para executar o acesso. Esse documento importante para verificar se uma credencial está sendo gerenciada pelos usuários com permissão para fazê\-lo; se o acesso estiver sendo realizado em um tempo permitido, conforme a política de acesso da empresa, as expectativas de segurança da empresa e dos padrões.

O *Relatório de uso da senha* imprimirá as seguintes informações:

* ***Credencial:***da senha usada.
* ***Dispositivo:*** a senha é usada para acessar.
* ***Operação:*** realizada usando a senha.
* ***Usuário:***que acessou usando a senha.
* ***IP do usuário:*** usado para usar a senha.
* ***Data / Hora:*** é o dia e a hora em que a senha foi usada.
* ***Origem:***é a plataforma que o usuário usou para usar a senha.
* ***Destino:*** é o dispositivo que a senha foi usada para acessar.

## Usuários por grupo

Este relatório mostra todos os usuários do sistema registrados em senhasegura e os grupos em que são membros. O relatório é importante para verificar se o usuário tem as permissões necessárias ou possui mais para executar suas atividades. O auditor pode verificar se as permissões de acesso do usuário estão corretas conforme a política de acesso da empresa, a matriz de responsabilidade e as expectativas de segurança da empresa e dos padrões.

O **Relatório de usuários por grupo** imprimirá as seguintes informações:

* ***Nome:***do usuário.
* ***Nome de usuário:***é o nome de usuário usado para acessar senhasegura.
* ***Departamento:*** é o departamento da empresa ao qual o usuário pertence.
* ***Grupo de acesso:*** ao qual o usuário pertence.
* ***Data da atribuição:*** é a data e a hora em que o usuário começou a ser membro do grupo.
* ***Atribuído por:***é o usuário que incluiu o outro no grupo.
* ***Parte da senha:*** é o nível de privilégio que o usuário possui em relação à senha da credencial: pode ver a parte completa ou apenas uma parte da senha.

Também é possível ver mais detalhes sobre os usuários por grupo, clicando no ícone de ação do registro

## Processamento de e\-mails

Este relatório mostra todos os e\-mails, senhasegura enviados para solicitações de usuários. Esse documento é relevante para apresentar todas as solicitações de acesso; isso pode ser útil para comparar o fluxo de acesso e as configurações de acesso ao sistema com a **política de acesso** e as expectativas de segurança da empresa.

## Definição de políticas

Este relatório mostra o histórico das alterações feitas nas políticas de senha registradas no sistema senhasegura. Esse documento é importante para saber quando foi alterado, os nomes de usuários e dispositivos que admitiram as alterações para entender se a expiração de senhas e os períodos de exibição ainda estão conforme as *políticas* e as expectativas de segurança da empresa.

O **Relatório de definição de política** imprimirá as seguintes informações:

* ***Data:*** é o dia e hora em que a alteração foi realizada.
* ***Política:*** é o nome da política de senha que será detalhado.
* ***Tipo:***da credencial que admitiu a alteração.
* ***Nome de usuário:***que admitiu as alterações.
* ***Nome do host:***do dispositivo que admitiu a alteração.
* ***Força:***é o nível de complexidade da senha que será criada.
* ***Período de validade:*** é o período de limitação para realizar a alteração da senha.
* ***Exibir expiração:***é o período de limitação para visualizar uma senha.
* ***Mensagem:*** é o que o sistema imprime no solicitante relacionado à alteração da política de senha.
