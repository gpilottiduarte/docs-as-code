# Opções de compartilhamento

Neste documento, você vai encontrar informações detalhadas sobre a tela **Configurações do sistema** do **MySafe**, que possibilita ao administrador configurar o **MySafe**.

## Requisitos
* Permissão de administrador do **MySafe**.

## Caminhos para acesso

A tela **Configurações do sistema** pode ser acessada através de dois caminhos diferentes: 
1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **MySafe**.
2. No menu lateral, selecione **Admin > Opções de compartilhamento**.

---
1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral da tela **Configurações do sistema**, selecione **MySafe**.

---

## Seção Configuração de email

* **Conta de envio:** campo para selecionar o e-mail que enviará o código de autenticação para que os usuários possam conectar o **MySafe** à extensão, aplicativo móvel ou acessar um item compartilhado temporariamente.

## Seção Compartilhamento Externo

* **Habilitar compartilhamento externo?***: botões de seleção para permitir o compartilhamento externo. As opções disponíveis são **Sim** e **Não**.
* **Tempo máximo de compartilhamento:** campos para limitar o tempo que um item estará disponível para acesso por um usuário externo ao **MySafe**. Utilize o primeiro campo para inserir um número e o segundo campo para inserir o período. As opções disponíveis são *Minutos, Horas, Dias* e *Meses*.
* **URL base:** caixa de texto para inserir a URL do cofre **MySafe** que se conectará à extensão, aplicativo móvel ou ao item compartilhado temporariamente.

    :::(warning) (Atenção)
    * Caso o aplicativo esteja se comunicando com um cofre do **MySafe** em cenário de *multi-tenant*, o administrador deverá inserir a URL do tenant sem o `https://`.  
    **Exemplo**: `test.mt4.dev`
    <br>
    * Se este campo não for preenchido, operações envolvendo a extensão **MySafe**, a seção **MySafe** do aplicativo móvel do **senhasegura** e o **Compartilhamento externo** resultarão em erros.
    :::

:::(info) (Info)
Os itens com um asterisco são obrigatórios.
:::

---