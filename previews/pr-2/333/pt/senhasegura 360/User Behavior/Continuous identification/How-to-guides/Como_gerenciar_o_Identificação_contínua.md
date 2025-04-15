# Como gerenciar o Identificação contínua

Neste documento, você encontra um guia passo a passo sobre como configurar o recurso de **Identificação contínua** do **User Behavior** que solicita ao usuário que se reautentique no senhasegura após a realização de eventos suspeitos, bem como visualizar os registros de reautenticação gerados.

## Requisitos
- Permissão de administrador.

## Caminho para acesso
1. No **senhasegura**, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **User Behavior**.

***

## Configurar Identificação contínua
Para configurar os gatilhos que acionarão a solicitação de reautenticação da identidade do usuário no **senhasegura**, siga os passos abaixo:

:::(Info) (Info)
Por padrão, essa funcionalidade está desativada. Para ativá-la, defina os parâmetros com um valor diferente de zero.
:::



1. No menu lateral da tela **User Behavior**, selecione **Configurações > Parâmetros do sistema**.
2. Na tela **Configuração do sistema**, selecione **User Behavior** e vá até a seção **Configurações de identificação contínua**, no final da tela.
3. Na seção **Configurações de identificação contínua**, preencha:
   - **Queda no rating\***: defina quantos pontos o usuário deverá perder para que a reautenticação seja acionada.
  **Nota**: a pontuação perdida em cada ação é definida nas demais seções da tela **Configuração do sistema > User Behavior**.
<br>
   - **Sessões de alto risco\***: defina quantas sessões de alto risco o usuário deverá realizar para que a reautenticação seja acionada.
    **Nota**: a definição de sessão de alto risco está atrelada aos comandos auditados e suas criticidades que podem ser configurados e visualizados em **User Behavior > Configurações > Comandos auditados**.
<br>
   - **Comandos bloqueados\***: defina quantos comandos auditados o usuário deverá digitar em uma sessão para que a reautenticação seja acionada.
   **Nota**: comandos bloqueados são comandos auditados configurados como **Bloquear** ou **Interromper execução** e podem ser configurados e visualizados em **User Behavior > Configurações > Comandos auditados**.
<br>
   - **Tentativas de sessão em horário proibido\***: defina quantas vezes o usuário deverá tentar realizar uma sessão em horário proibido para seu grupo de acesso para que a reautenticação seja acionada.
    **Nota**: as configurações de permissão de horário de acesso são definidas e visualizadas em **PAM Core > Configurações > Acesso > Grupos de acesso**.
<br>
   - **Tentativas de visualização em horário proibido\***: defina quantas vezes o usuário deverá tentar visualizar uma senha em horário proibido para seu grupo de acesso para que a reautenticação seja acionada.
   **Nota**: as configurações de permissão de horário de visualização de senha são definidas e visualizadas em **PAM Core > Configurações > Acesso > Grupos de acesso**.

:::(Info) (Info)
Os itens com asterisco são obrigatórios.
:::


:::(Warning) (Atenção)
Após a reautenticação bem-sucedida do usuário, a contagem das tentativas será reiniciada. Isso significa que, por exemplo, se o parâmetro **Tentativas de visualização em horário proibido\*** estiver configurado para 3, após o usuário realizar essas 3 tentativas e se reautenticar no **senhasegura**, a reautenticação só será solicitada novamente se ele fizer mais 3 tentativas em sua próxima sessão logada.
:::


## Visualizar logs de reautenticação
Para visualizar os registros de reautenticação que foram solicitadas aos usuários em decorrência de ações suspeitas, siga os passos abaixo:

1. No menu lateral da tela **User Behavior**, selecione **Análise de comportamentos > Logs de reautenticação**.
2. Utilize os filtros **Código, Gatilho, Usuário, Data, Até** e **Status** para buscar pelos eventos desejados.
3. Visualize o relatório com as colunas **Código, Gatilho, Usuário, Data, Status** e **Ação**.
4. Na coluna **Ação**, clique em **Detalhes**, representado pelo ícone de chave, para obter mais informações sobre o evento de re-autenticação selecionado.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}. 