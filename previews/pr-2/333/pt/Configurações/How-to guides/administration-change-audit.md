Em servidores críticos, responsáveis por serviços, é muito comum que as alterações executadas nesses ambientes sejam altamente controladas.

Em casos como esses, o usuário solicita o acesso a um dispositivo e o administrador libera o acesso onde ele executará a tarefa. O auditor precisa saber exatamente qual é o script, o dispositivo e o horário em que a atividade será executada. Para o *compliance*, é necessário acompanhar fisicamente ou verificar os logs dos comandos executados.

Essas atividades possuem um altíssimo risco, porque o usuário pode fazer uma execução que afete diretamente a produtividade de uma empresa. Ele pode, por exemplo, parar um servidor Apache que está hospedado no site comercial da empresa, ou até mesmo fazer ações indevidas com o intuito de roubar informações.

Para facilitar a auditoria e compliance, o módulo ***Change Audit*** auxilia o administrador a garantir que as mudanças necessárias em um servidor sejam executadas corretamente. O módulo fornece, também, um fluxo de aprovação a um acesso, confirmando que tudo que foi proposto na mudança foi, de fato, executado pelo usuário.

Além disso, o ***Change Audit*** calcula sua efetividade com avaliações, indicando se o usuário chegou ao resultado esperado, se fez mais execuções do que deveria ou se nem mesmo chegou a efetuar a mudança.

Isso garante mais segurança ao profissional responsável pelos ambientes, já que a auditoria e o compliance dos comandos são executados nos seus dispositivos.

Outro ponto importante é a possibilidade de divisão do fluxo de trabalho. Com esse módulo, um usuário pode ser responsável pelo planejamento e criação do script enquanto outro usuário fica responsável por executá\-lo.

Entre outros benefícios, este módulo pode ajudar:

* Na concessão de privilégios a usuários apenas no ambiente autorizado.
* Na prevenção, detecção e correção de anomalias de segurança no ambiente.
* Na criação de trilhas de auditoria invioláveis para operações privilegiadas.

Siga as instruções seguintes para utilizar o módulo:



---

## Cadastrando uma mudança

Para criar uma mudança siga para o menu: **Change Audit ➔ Change.**

1. Clique no botão **Mais ações** do relatório e escolha a opção **Novo.**
2. No relatório, preencha o **ID** e o **Título** desta mudança.
3. Se desejar, preencha uma **Descrição** do objetivo desta mudança.
4. No campo **Hora de início,** selecione o dia e a hora em que a mudança deverá começar a ser executada.
5. No campo **Data de vencimento,** selecione o dia e a hora em que a mudança deverá ser finalizada.
6. Selecione o **grupo de acesso** relacionado a esta mudança.  
InfoCaso seja necessário, crie um grupo de acesso dedicado às atividades de mudanças ou edite um já existente. Você pode inserir tanto usuários que poderão executar mudanças, como usuários que aprovarão as mudanças a serem realizadas.  
Se você não souber como criar um grupo de acesso, consulte [Configuração do Grupo de Acesso](/v3-33/docs/pt/user-management-access-groups)**.**
7. Siga para a aba **Dispositivos**e clique no ícone de adição para selecionar os dispositivos que passaram pela mudança.
8. Clique sobre os dispositivos desejados na lista e em seguida clique em **Adicionar**.  
CuidadoEsta aba deve ser preenchida, caso contrário a mudança não será cadastrada.
9. Seguindo para a aba **Script*****,*** insira os comandos que serão executados para realizar a mudança.  
CuidadoLembre\-se de que este script será usado como comparativo para comprovar o sucesso da mudança; por isso, deve ser inserido corretamente.
10. Para concluir, clique em **Salvar.**



---

## Solicitando uma mudança

Para solicitar e executar uma mudança, é necessário realizar uma sessão remota. Para isso, siga as instruções:

1. Acesse o menu: **PAM Core ➔ Credenciais ➔ Todas.**
2. Escolha o dispositivo que deseja acessar para executar a mudança. Você pode utilizar o filtro no topo do relatório para encontrá\-lo.  
CuidadoPara que a mudança seja auditada corretamente, é necessário buscar os dispositivos associados às mudanças desejadas.
3. Clique no botão de ação **Iniciar sessão*****.***
4. Caso seu grupo de acesso exija justificativa, será necessário preenchê\-la, caso contrário a solicitação será gerada. Aguarde a mudança ser aprovada.
	* Para verificar os status da sua ***solicitação,*** acesse o menu: **Change Audit ➔ Minhas solicitações**.
	* Se você for um **aprovador,** verifique as solicitações realizadas através do menu: **Change Audit ➔ Minhas aprovações**.
5. Quando a solicitação for aprovada ou reprovada, você receberá uma notificação e já poderá realizar o acesso (realize os passos 1 ao 3 novamente).

InfoVerifique com seu administrador do senhasegura se as notificações estão ativas, para que você seja notificado sobre sua solicitação.



---

## Auditando as sessões

Após uma mudança, é possível verificar o que foi realizado durante a sessão e comprovar se o script inserido foi seguido.

Acesse o menu: **Change Audit ➔ Audited sessions.**Você poderá visualizar os seguintes dados:

### Detalhes da mudança

1. Escolha a mudança na qual estão os detalhes que você deseja ver. Você pode utilizar o filtro no topo do relatório para encontrá\-la.
2. Clique no botão de ação da mudança e selecione a opção **Detalhes da mudança**.
3. No relatório exibido, será possível visualizar o tempo de duração da mudança, o IP e o usuário que a realizaram, além da pontuação dada a ele.

### Auditoria da mudança

1. Escolha a mudança na qual está a auditoria que você deseja ver. Você pode utilizar o filtro no topo do relatório para encontrá\-la.
2. Clique no botão de ação da mudança e selecione a opção **Auditoria da mudança*****.***
3. Você verá um quadro com os comandos executados.
	* As linhas em vermelho são comandos que deveriam ter sido executados, segundo o script cadastrado, mas não foram.
	* As linhas verdes exibem os comandos executados, mas que não estavam presentes no script.

### Logs da sessão

1. Escolha a mudança na qual estão os logs da sessão que você deseja ver. Você pode utilizar o filtro no topo do relatório para encontrá\-la.
2. Clique no botão de ação da mudança e selecione a opção **Logs da sessão**.
3. No relatório exibido, será possível ver em detalhes os logs da sessão realizada para executar a mudança.

### Assistindo ao vídeo da sessão

Também é possível assistir à gravação do que foi feito durante a sessão:

1. Escolha a mudança na qual está a gravação que você deseja assistir. Você pode utilizar o filtro no topo do relatório para encontrá\-la.
2. Clique no botão de ação da mudança e selecione a opção **Vídeo da sessão**. O vídeo começará automaticamente.

Info* Se você não souber como criar um usuário e como preencher o formulário de cadastro, consulte [Adicionar autenticação em multifator](/v3-33/docs/pt/user-management-add-multi-factor-authentication).
* Se você não souber como criar grupo de acesso e como preencher o formulário de cadastro, consulte [Configuração do Grupo de Acesso](/v3-33/docs/pt/user-management-access-groups).
* Se você não souber como criar uma credencial e como preencher o formulário de cadastro, consulte [Cadastrando Credencial](/v3-33/docs/pt/pam-how-to-set-up-a-credential-in-senhasegura).
