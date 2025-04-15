# Como verificar o histórico de execuções de uma credencial

Caso seja necessário, é possível consultar o histórico de execuções na senha de uma credencial. Para isso, siga os passos abaixo:

1. Na plataforma senhasegura, clique em **Grid Menu**, identificado pelo ícone de nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione a opção **Credenciais** > **Todas**.
3. Identifique a credencial que você deseja investigar e, na coluna **Ação**, clique no ícone identificado pelostrês pontos verticais e selecione a opção **Histórico**, no menu suspenso.
4. Essa ação abrirá uma janela pop-up com as informações e detalhes do histórico dessa credencial.
5. É possível filtrar o período de tempo que você deseja investigar. Para isso, selecione a data inicial no campo **Data do histórico** e a data final no campo **até**.
6. Na lista de execuções, você tem os seguintes campos:
    6.1. **Código**: código da execução.
    6.2. **Dispositivo**: dispositivo que originou a execução.
    6.3. **Nome do usuário**: nome do usuário que executou a ação.
    6.4. **Origem**: origem da execução.
    6.5. **Data do histórico**: data em que foi realizada a execução.
    6.6. **Atual**: indica se essa é a última execução ocorrida.
    6.7. **Ação**: coluna com duas opções: **Detalhes da execução** e **Visualizar**.

Na coluna **Ação,** você tem duas opções:

1. **Visualizar**: identificado pelo ícone da chave, exibe informações sobre a senha da credencial em uma nova janela pop-up.
2. **Detalhes da execução**: opção representada pelo ícone das engrenagens. Ao clicar neste ícone, será possível visualizar os detalhes da execução selecionada em uma nova janela pop-up.

:::(Info) (Info)
Note que ao clicar em **Visualizar**, você irá visualizar todas as informações referentes à senha dessa credencial. O ato de visualizar a senha dará ao seu usuário a custódia desta.
:::

Na janela pop-up que se abre, chamada **Detalhes da Operação**, você encontra as seguintes informações sobre a execução:

1. **Solicitante**: origem da solicitação. Pode ser um usuário ou uma automação.
2. **Data da solicitação**: dia e hora em que a solicitação foi feita.
3. **Data do agendamento**: dia e hora em a solicitação foi agendada.
4. **Operação**: tipo de operação a ser executada.
5. **Estado**: estado da execução da solicitação.

Em seguida, você tem um campo de texto contendo um resumo da operação, onde é possível consultar informações sobre a execução. Nesta seção constam informações tais como quantas tentativas ocorreram, o template usado na execução, a versão do template, momento de início da execução, momento de fim da execução, mensagem do sistema etc.

Na última seção, chamada **Logs**, é possível consultar os logs de cada tentativa de execução,

:::(Warning) (Atenção)
Não é possível acessar os detalhes de execuções antigas, uma vez que não é possível determinar a relação entre senhas da credencial e suas execuções para itens anteriores à versão 3.30 do senhasegura.
:::

:::(Info) (Info)
Caso você tenha muitos registros, é possível que seja necessário o auxílio da nossa equipe de suporte.
:::

***

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/).