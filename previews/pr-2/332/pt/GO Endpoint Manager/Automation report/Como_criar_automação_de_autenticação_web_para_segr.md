# Como criar automação de autenticação web para segregação geral

Neste artigo você aprenderá como criar automação de autenticação web para segregação geral.

* * *

## Requisitos
Para Autenticação Web utiliza-se o navegador padrão escolhido pelo usuário. Navegadores suportados:

* Google Chrome 
* Mozilla Firefox

:::(Warning) (Cuidado)
Os navegadores Microsoft Edge e Microsoft Internet Explorer não são suportados.
:::

* * *

## Passo 1: Criar automação para autenticação web

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelos nove quadrados, e selecione **GO Endpoint Manager.**
2. No menu lateral, selecione **Geral ➔ Automação.**
3. Na barra de tarefas, clique no ícone **Exibir ações**, identificado pelo três pontos verticais, e selecione a opção **+ Novo**.
4. Na janela **Cadastro de automação**, preencha os campos.
    1. **Nome.**
    2. **Tipo** da automação. Selecione a opção **Autenticação Web** a partir do menu suspenso.
    3. Em **Ativo** marque **Sim.**
    4. **Caminho do aplicativo:** preencha com o caminho do aplicativo no sistema. Por exemplo, para web insira uma **URL** como: `https://google.com.br`, `https://facebook.com`  entre outras. 
    5. Defina **Tags** para auxiliar na busca pela automação.
    6. **Visualizar TAGs:** utilize as **TAGs** abaixo para construir o sua automação. Selecione a opção **Input** e preencha no campo **value.**
        1. **[#USERNAME#]:** username da credencial.
        2. **[#PASSWORD#]:** senha da credencial.
        3. **[#DOMAIN#]:** domínio da credencial.
        4. **[#HOSTNAME#]:** nome do hostname.
        5. **[#HOST_IP#]:** IP do hostname.
    7. Para criar uma automação para realizar a autenticação em um site, você pode utilizar este exemplo:
        :::(Warning) (Cuidado)
        Lembre se de substituir o nome no campo **label** conforme o nome mostrado na página web.
        :::
        1. Selecione a ação "Input" e preencha o campo **label** com o nome "email", e no campo **value** insira **"[#USERNAME#]**".
        2. Escolha novamente a ação "Input", e preencha o campo **label** com o nome “password”, e no campo **value** insira "**[#PASSWORD#]**".
        3. Selecione a ação "Button" com a **label** "Entrar".
    11. Se desejar, adicione uma breve **Descrição** sobre o que a automação faz e para que ela é usada.
5. Clique no botão **Salvar.**

* * *

## Passo 2: Adicionar lista de acesso para automação com workflow

1. Na plataforma senhasegura, no canto superior esquerdo, clique no **Grid Menu**, identificado pelos nove quadrados, e selecione **GO Endpoint Manager.**
2. No menu lateral, acesse **Políticas ➔ Windows ➔ Listas de Acesso.**
3. Na barra de tarefas, clique no ícone Exibir ações, identificado pelo três pontos verticais, e selecione a opção **Nova segregação geral.**
4. Na janela pop-up, escolha a categoria Automações
5. Na janela **Lista geral** preencha:
    1. Um **Nome** para identificar na lista de acesso.
    2. Marque **Status** como **Ativo.**
    3. Marque **Gravar a sessão** desses aplicativos como **Ativo** se deseja gravar a execução da automação.
6. Na seção **Automações**, clique no botão +, identificado pelo símbolo de soma.
7. Selecione a automação criada no passo anterior, marcando a caixa de seleção.
8. Clique no botão **Adicionar.**
9. Na aba **Workflow:**
    1. Na seção **Configuração de elevação** defina os privilégios do usuário:
        1. Marque a caixa de seleção **Usuário pode elevar aplicaçõe**s para permitir que a automação eleve o privilégio ao executar a automação.
        2. Marque a caixa de seleção **Requer justificativa para elevar aplicações** para exigir uma justificativa ao executar a automação.
        3. Marque a caixa de seleção **Requer aprovação para elevar aplicações** para exigir que um usuário aprovador aprova a execução da automação.
        4. Defina a quantidade de **Aprovações necessárias.**
        5. Defina a quantidade de **Reprovações necessárias para cancelar.**
        6. Caso deseje, marque **Permitir acesso emergencial.**
        7. Casos deseje, marque **Aprovação em níveis.**
    2. Na seção **Configurações da solicitação de acesso:**
        1. Marque a opção **Obrigatório especificar código de governança ao justificar?** como **Sim** se tem e deseja utilizar um código.
        2. Marque a opção **Sempre adicionar o gestor do usuário aos aprovadores?** como **Sim** se deseja adicionar o gestor automaticamente aos aprovadores.
10. Clique no botão **Salvar.**

:::(Info) (Info)
A interação do usuário é bloqueada até terminar de ser executada a automação.
:::

* * *

## Executar automação

1. Acesse a área de trabalho da workstation.
2. Inicie o aplicativo **GO Automation.**
3. Selecione a automação que deseja executar.
4. Clique com o botão direito na automação e depois em **Executar.**
5. Selecione a credencial que será utilizada para executar a automação.
6. Espere a automação ser executada.

* * *

Você ainda tem dúvidas? Entre em contato com a [Comunidade senhasegura.](https://community.senhasegura.io/){target="_blank"}