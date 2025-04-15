# Como configurar o MySafe

Neste documento, você encontra um guia passo a passo sobre como realizar as configurações que possibilitam a comunicação do cofre do **MySafe** com a extensão e o aplicativo móvel, bem como o compartilhamento de itens com usuários externos ao MySafe.

## Requisitos
- Permissão de administrador do **MySafe**.

## Caminhos para acesso

A tela **Configurações do sistema** pode ser acessada através de dois caminhos diferentes:
1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **MySafe**.
2. No menu lateral, selecione **Admin > Opções de compartilhamento**.

---

1. No senhasegura, no canto superior esquerdo, clique no **Grid Menu**, representado pelos nove quadrados, e selecione **Configurações**.
2. No menu lateral da tela **Configuração do sistema**, selecione **MySafe**.

***
## Configurar o MySafe
Para configurar o **MySafe**, siga os passos abaixo:

1. Na seção **Configuração de email**, preencha:
    1. **Conta de envio**: selecione o email que enviará o código de autenticação para que o usuário possa conectar o **MySafe** à extensão, ao aplicativo ou acessar um item compartilhado temporariamente.

2. Na seção **Compartilhamento externo**, preencha:
    1. **Habilitar compartilhamento externo?***: defina se os usuários poderão compartilhar itens com pessoas externas ao **MySafe**. As opções disponíveis são **Sim** e **Não**.
    2.  **Tempo máximo de compartilhamento**: defina o limite de tempo que um item estará disponível para ser acessado por um usuário externo ao **MySafe**. Utilize o primeiro campo para inserir um numeral e o segundo campo para inserir o período. As opções disponíveis são *Minutos*, *Horas*, *Dias* e *Meses*.
    3.   **Base URL**: insira a URL do cofre do **MySafe** que irá se conectar à extensão, ao aplicativo ou ao item compartilhado temporariamente.

   :::(warning) (Atenção)
   * Caso o aplicativo esteja se comunicando com um cofre do **MySafe** em cenário de **multi-tenant**, o administrador deverá inserir a URL do tenant sem o `https://`.
   **Exemplo**: `teste.mt4.dev`
   * Se este campo não for preenchido, operações envolvendo a **extensão MySafe**, a seção **MySafe** do aplicativo móvel **senhasegura** e o **Compartilhamento externo** resultarão em erros.
   :::

   :::(info) (Info)
   Os itens com asterisco são obrigatórios.
   :::

3. Clique em **Salvar**.

*** 
Você ainda tem dúvidas? Entre em contato com a  [Comunidade senhasegura](https://community.senhasegura.io/){target="_blank"}.