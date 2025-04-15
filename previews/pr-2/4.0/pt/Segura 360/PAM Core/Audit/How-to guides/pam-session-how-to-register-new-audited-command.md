# Como registrar um novo comando auditado

Este documento fornece informações sobre o passo a passo para registrar um comando para ser auditado em uma sessão remota.

Os comandos auditados permitem segmentações nos níveis **Global**, **Grupo de acesso**, **Dispositivo** e **Credencial**. A diferença é que não haverá sobreposição de um comando baseado na cadeia de entidades segregadoras. É uma soma de regras, uma possibilidade de isolar comandos pertencentes a certas credenciais e dispositivos de um determinado fabricante.

:::(warning) (**Cuidado**)
A funcionalidade comandos auditados está disponível apenas para as sessões do tipo Database Proxy, Terminal Proxy e Terminal via Web Proxy.
:::

## Requisitos

* Ser um usuário com o papel de pam administrator, pam operator, ou system administrator.
---

## Registrar um comando
:::(warning) (**Cuidado**)
Os comandos auditados cadastrados são carregados no início de cada sessão. Se uma sessão já estiver ativa e um novo comando for cadastrado, o mesmo não terá efeito sobre a sessão já iniciada.
:::

1. No Segura, na barra de navegação, passe o mouse sobre o **Menu de produtos** e selecione **PAM Core**.
2. No menu lateral selecione **Gerenciamento** > **Sessões** > **Comandos auditados**.
3. Clique no menu **Ações**.
    1. Escolha uma das opções para adicionar um novo comando.

### Novo comando global

1. Na tela **Cadastro de comando global**, preencha os campos obrigatórios, identificados pelo asterisco.
2. Na aba **Comando**, preencha:
    1. **Nome***: nome para identificar o comando a ser auditado.
    2. **Tipo de sessão***: selecione o tipo de sessão que terá o comando auditado, escolha dentre as opções **Todos**, **Terminal** ou **Database Proxy**.
        :::(info) (**Info**)
        A opção Terminal engloba qualquer sessão do tipo **SSH** que seja acessada através de uma sessão **Web Proxy** e/ou sessões acessadas através do **Terminal Proxy**.
        :::
    3. **Criticidade***: nível de criticidade que terá o comando, escolha entre as opções Baixa, Média e Alta.
    4. **Ação durante a sessão***: qual a ação irá ocorrer ao realizar o comando, escolha entre as opções **Permitir a execução**, **Bloquear a execução**, **Interromper** e **Obrigar**.
        :::(info) (**Info**)
        Para entender sobre cada tipo de ação que pode ser escolhida neste campo, acesse o documento [Ações acionadas pela execução de comandos auditados](/v4/docs/pt/pam-session-actions-triggered-by-executing-audited-commands).
        :::
    5. **Ocorrência (mínimo)**: número de vezes que o comando pode ocorrer até que seja realizada a ação. Escolha entre 1 a 10.
    6. **Bloquear e inativar usuário?**: opção a ser habilitada quando a ação for Bloquear a execução ou Interromper a execução. Escolha entre as opções Sim ou Não.
        :::(warning) (**Atenção**)
        Caso seja **Sim** o usuário será desconectado e inativado no mesmo instante.
        :::
    7. **Comando***: escreve a expressão regular do comando a ser auditado conforme a regra.
        :::(info) (**Info**)
        O uso do asterisco * para capturar todos os comandos executados não irá funcionar. Os comandos precisam estar especificados por completo. Ex.: `update public\.nome da tabela*`
        :::
    8. **Descrição***: descreva o comando que está sendo cadastrado.
3. Clique em **Salvar**.

### Novo comando por credencial

1. Na tela **Cadastro de comando por credencial**, preencha os campos descritos na aba **Comandos**, conforme explicado acima.
2. Na aba **Credenciais**:
    1. Clique em**Adicionar** e selecione as credenciais que terão a auditoria deste comando.
3. Na aba **Revisão** verifique as configurações realizadas nas etapas anteriores.
4. Cliquei em **Salvar**.

### Novo comando por dispositivo

1. Na tela **Cadastro de comando por dispositivo**, preencha os campos descritos na aba **Comandos**, conforme explicado acima.
2. Na aba **Dispositivo**:
    1. Clique em**Adicionar** e selecione os dispositivos que terão a auditoria deste comando.
3. Na aba **Revisão** verifique as configurações realizadas nas etapas anteriores.
4. Cliquei em **Salvar**.

### Novo comando por grupo

1. Na tela **Cadastro de comando por grupo**, preencha os campos descritos na aba **Comandos**, conforme explicado acima.
2. Na aba **Grupos**:
    1. Clique em**Adicionar** e selecione os grupos que terão a auditoria deste comando.
3. Na aba **Revisão** verifique as configurações realizadas nas etapas anteriores.
4. Clique em **Salvar**.

:::(info) (**Info**)
Após o uso de qualquer comando cadastrado em alguma sessão, o comando não poderá ser mais alterado, o campo **Comando*** estará inativo e a mensagem "O comando não pode ser alterado pois já houve registros no log. Utilize a função de Clonar comando.” estará disponível logo abaixo do campo.
:::

O sistema apresenta uma mensagem de confirmação do cadastro do comando. Todas as sessões iniciadas após esse cadastro terão o rastreamento desses comandos, a cada uso de um comando auditado cadastrado, o Segura exibe a mensagem **"Auditando comando. Por favor aguarde…"** e estes comandos serão exibidos no relatório [Log de eventos](/v4/docs/pt/pam-session-event-log).

:::(info) (**Info**)
Caso nenhum comando seja cadastrado, a plataforma Segura irá exibir em seu relatório **Log de eventos**, apenas o início e o fim da sessão.
:::

---
Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/){target=`_blank`}.