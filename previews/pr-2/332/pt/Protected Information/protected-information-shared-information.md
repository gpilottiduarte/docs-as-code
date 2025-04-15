## Visão Geral

No menu **Configurações ➔ Grupos de acesso,** é possível visualizar o relatório de grupos de acesso configurados para informações protegidas, bem como criar grupos de acesso.

Na aba de **Limitação de acesso** é possível restringir o acesso à informação por datas, dias da semana e horários. No caso de o usuário pertencer a um grupo de acesso e tentar acessar a informação na data, dia ou hora fora da restrição configurada, ele receberá uma mensagem de erro indicando a restrição imposta.

Ao contrário dos grupos de acesso a credenciais, os grupos de acesso a informações protegidas não têm uma guia de critérios. Isto significa que apenas as políticas de segurança e os usuários membros são configurados.

O mantenedor das informações registradas pode decidir para quem essas informações serão compartilhadas, não o administrador do grupo de acesso.

Observe que ao não ter o critério como atributo de um grupo de acesso, o nome do grupo de acesso deve refletir as políticas de segurança.



---

## Cadastre um novo grupo de acesso

Ao clicar na opção de criar um grupo de acesso, se abrirá a tela de castro de grupo de acesso, onde primeiramente é necessário preencher os seguintes campos e opções:

* **Nome do grupo de acesso:** nome do grupo de acesso que corresponde às regras que este grupo aplica. Isto facilita a compreensão e a auditoria;
* **Descrição:** uma breve descrição sobre o grupo que está sendo criado;
* **Ativo:** se o grupo está ativo ou não. Desabilitar um grupo pode reduzir a quantidade de informações as quais o usuário tem acesso, ou reduzir o nível de segurança necessário para acessar as informações;

Após o preenchimento destes campos e opções iniciais, as demais opções de configurações e filtros são divididas por abas:

* **Configurações:**configurações da informação protegida
	+ **Usuário pode visualizar a informação protegida:** marcar se a informação protegida pode ser vista pelo usuário.
	+ **Requer justificativa para visualizar a informação protegida:** marque se é necessário registrar uma justificativa para ver a informação protegida.
	+ **Requer aprovação para visualizar a informação protegida:** marque se outro usuário precisará agir como aprovador para poder ver a informação protegida. Uma vez ativa, você também precisa definir por quanto tempo esta aprovação será válida.
	+ **Aprovações necessárias para visualizar:** número de aprovações necessárias para aprovar a operação.
	+ **Reprovações necessárias para cancelar:** número de recusas para impedir a operação.
	+ **Aprovação em níveis:** marque se os aprovadores serão acionados em níveis. Assim, você pode definir uma hierarquia de aprovadores.
* **Usuários:**vincular usuários que exercem o papel de operadores.
	+ **ID:** ID do usuário a ser adicionado ou removido.
	+ **Cód:** código do usuário que deseja cadastrar.
	+ **Nome:** nome do usuário que deseja cadastrar.
	+ **E\-mail:** e\-mail do usuário que deseja cadastrar.
* **Aprovadores:**vincular usuários que exercem o papel de aprovadores de operações de uso da informação.
	+ **ID:** ID do aprovador a ser adicionado ou removido.
	+ **Cód:** código do aprovador que deseja cadastrar.
	+ **Nome:** nome do aprovador que deseja cadastrar.
	+ **E\-mail:** e\-mail do aprovador que deseja cadastrar.
* **Restrição de acesso:** é possível restringir o acesso às informações protegidas por dias da semana, horários e períodos (data de início e fim).



---

## Registre informações compartilhadas

Assim como informações pessoais, informações compartilhadas possuem os mesmos atributos e expiração.

Sua diferença está no fato de o detentor da informação configurar quais grupos de acesso terão acesso às informações, sem saber quem são os participantes desses grupos.

InformaçãoEm informações compartilhadas, você não pode determinar outros usuários com poder de edição. Todos os usuários com acesso só poderão visualizar o segredo.

  


  


![image.png](https://cdn.document360.io/5a1d58df-64ce-42a2-8b23-688477d32f33/Images/Documentation/image%28398%29.png)

  


Uma vez que as informações são registradas, o detentor do segredo pode visualizar as informações e observar quais usuários têm acesso a elas.

