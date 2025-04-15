# Como gerenciar o provisionamento dinâmico no DSM

Para utilizar o provisionamento dinâmico antes, você deve ter cadastrados os perfis a serem utilizados.

## Requisitos

* Ter uma aplicação cadastrada no Segura DSM.
* Ter pelo menos um segredo cadastrado no Segura DSM.
* Ter pelo menos uma credencial cadastrada no Segura.
* Ter pelo menos um dispositivo cadastrado no Segura.

## Criar perfil de provisionamento dinâmico

1. No Segura, no canto superior esquerdo, clique em **Grid Menu**, representado pelo nove quadrados, e selecione **PAM Core**.
2. No menu lateral, selecione **Provisionamento dinâmico > Perfis**.
3. Na listagem de perfis, clique em **Exibir ações**, representado pelos três pontos verticais, e selecione **Novo perfil.**

### Janela Perfil de provisionamento dinâmico de credencial

Preencha os campos conforme as instruções abaixo:

1. **Identificador**: indique um identificador para o seu perfil de provisionamento dinâmico dentro do Segura.
2. **Ativo**: selecione o radio box **Sim** para criar um perfil ativo. Caso queira criar um perfil inativo, selecione a opção **Não**.
3. Na seção **Tipo**:

   1. **Tipo**: selecione o tipo de perfil no menu suspenso.
4. Na seção **Credencial** para execução:

   1. **Utilizar uma credencial cadastrada para acessar todos os dispositivos:** marque essa caixa de seleção se você deseja utilizar uma credencial do PAM Core para acessar os dispositivos.
      1. **Credencial de acesso cadastrada no sistema**: caso você selecione a opção acima, o menu suspenso ficará acessível e você poderá selecionar uma das credenciais já cadastradas no Segura.
   2. **Username da credencial:** caso você não deseje utilizar uma credencial já cadastrada, indique neste campo o nome de usuário da credencial para realizar o acesso aos dispositivos.
5. Na seção **Modelo**:

   1. **Template de criação da credencial:** selecione no menu suspenso o template que será utilizado para criação da credencial de provisionamento dinâmico.
      1. O ícone de adição ao lado do menu suspenso possibilita que você carregue outro template de criação. Para saber mais sobre templates, acesse o documento sobre a criação de templates no Segura.
   2. **Template de remoção da credencial:** selecione no menu suspenso o template que será utilizado para remoção da credencial de provisionamento dinâmico.
      1. O ícone de adição ao lado do menu suspenso possibilita que você carregue outro template de remoção. Para saber mais sobre templates, acesse o documento sobre a criação de templates no Segura.
   3. **Papéis**: adicione os papéis que você deseja que a credencial de provisionamento dinâmico assuma. Os papéis devem estar separados por vírgula.
      1. Ao clicar no ícone do ponto de interrogação, um modal de ajuda abrirá para explicar sobre os papéis.
6. No campo abaixo da seção **Modelo**, você poderá definir um intervalo de TTL (*Time To Live*), em segundos, para a credencial de provisionamento dinâmico. O padrão é 3600 segundos.
7. Clique em **Confirmar**.

## Alterar perfil de provisionamento dinâmico

Para alterar um perfil previamente criado, siga os passos abaixo:

1. No Segura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **PAM Core.**
2. No menu lateral, selecione **Provisionamento dinâmico > Perfis.**
3. Na listagem de perfis, identifique o perfil que deseja alterar e, na coluna **Ação**, clique em **Alterar perfil**, representado pelo ícone do lápis e papel.
4. A janela **Perfil de provisionamento dinâmico de credencial** será aberta em modo de edição.
5. Realize as alterações necessárias e clique em **Confirmar**.

:::(info) (Info)
Ao passar o mouse pelo ícone representado pelo olho, no rodapé da janela de criação, você poderá analisar algumas informações, tais como a data e hora de criação e data e hora de atualização daquela credencial. Nota: o ícone de olho só é apresentado no modo de edição da credencial de provisionamento dinâmico.
:::

## Ativar a renovação automática

Configurar uma aplicação com perfis de provisionamento dinâmico permite a rotação automática de segredos em intervalos predeterminados, criando e registrando novas credenciais sem interromper o uso das antigas até que sejam atualizadas por meio do processo de rotação.

Para habilitar a renovação automática de um segredo, siga os passos abaixo:

1. No Segura, no canto superior esquerdo, clique em **Grid Menu**, representado pelos nove quadrados, e selecione **DevOps Secret Manager**.
2. No menu lateral, selecione **Gestão de Segredos > Segredos**.
3. Atualize ou crie um novo segredo.
4. Na janela **Configuração da secret**, na aba **Auto-renovação**, habilite as opções:
   1. **Credenciais em nuvem**: selecione **Sim** na opção **Ativo** e insira um intervalo de tempo na opção **Renovar a cada XX minutos**.
   2. **Credenciais efêmeras:** selecione **Sim** na opção **Ativo** e insira um intervalo de tempo na opção **Renovar a cada XX minutos**.
   3. **Credenciais:** selecione **Sim** na opção **Ativo** e insira um intervalo de tempo na opção **Renovar a cada XX minutos.**
5. Clique em Salvar.

:::(info) (Info)
Para todas as opções, o intervalo mínimo de tempo é de 10 minutos.
:::

### Importante

Habilitar a renovação automática de credenciais acionará uma rotação de senha nas credenciais de um segredo, o que pode fazer com que os sistemas parem, dependendo de como estão usando as credenciais. Assim, sempre se certifique de que a aplicação também receberá essa atualização.

---

Você ainda tem dúvidas? Entre em contato com a [Comunidade Segura](https://community.Segura.io/).